/* eslint-disable no-unused-vars */
import classes from './postForm.module.css';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../../../../client_api/postsApi';

const defaultValues = {
    author: '',
    title: '',
    content: '',
};

export const PostForm = () => {
    const { handleSubmit, reset, control } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries(['posts']);
        },
    });

    const onSubmit = (post) => {
        mutate(post);
        onClear();
    };

    const onClear = () => {
        reset();
    };

    return (
        <form className={classes.formBox} onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="author"
                control={control}
                rules={{
                    required: 'this field is required',
                }}
                render={(props) => {
                    const { field, fieldState, formState } = props;
                    return (
                        <>
                            <label htmlFor={field.name}>author</label>
                            <input
                                placeholder="type author"
                                id={field.name}
                                value={field.value}
                                onChange={field.onChange}
                            />
                            {fieldState.error && (
                                <p className={classes.error}>{fieldState.error.message}</p>
                            )}
                        </>
                    );
                }}
            />
            <Controller
                name="title"
                control={control}
                rules={{
                    required: 'this field is required',
                }}
                render={(props) => {
                    const { field, fieldState, formState } = props;

                    return (
                        <>
                            <label htmlFor={field.name}>title</label>
                            <input
                                placeholder="type title"
                                id={field.name}
                                value={field.value}
                                onChange={field.onChange}
                            />
                            {fieldState.error && (
                                <p className={classes.error}>{fieldState.error.message}</p>
                            )}
                        </>
                    );
                }}
            />
            <Controller
                name="content"
                control={control}
                rules={{
                    required: 'this field is required',
                }}
                render={(props) => {
                    const { field, fieldState, formState } = props;

                    return (
                        <>
                            <label htmlFor={field.name}>content</label>
                            <input
                                placeholder="type content"
                                id={field.name}
                                value={field.value}
                                onChange={field.onChange}
                            />
                            {fieldState.error && (
                                <p className={classes.error}>{fieldState.error.message}</p>
                            )}
                        </>
                    );
                }}
            />
            <button type="submit">Save post</button>
            <button type="reset" onClick={onClear}>
                Clear form
            </button>
        </form>
    );
};
