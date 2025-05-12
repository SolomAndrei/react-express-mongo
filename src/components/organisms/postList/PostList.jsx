import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPosts, deletePost } from '../../../../client_api/postsApi';
import { PostItem } from '../../molecules/PostItem';
import classes from './postList.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const PostList = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
    });

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            queryClient.invalidateQueries(['posts']);
        },
    });

    if (isLoading) {
        return <p>...Loading</p>;
    }

    if (error) {
        return <p>server error</p>;
    }

    return (
        <div className={classes.box}>
            {data?.map((post) => {
                return <PostItem post={post} key={post._id} deletePost={mutate} />;
            })}
        </div>
    );
};
