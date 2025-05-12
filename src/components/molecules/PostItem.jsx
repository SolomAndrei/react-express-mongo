import React from 'react';
import classes from './postItem.module.css';
import { Button } from '../atoms/Button';

export const PostItem = ({ post, deletePost }) => {
    const { author, title, content, _id } = post;
    return (
        <div className={classes.box}>
            <div>
                <label>author</label>
                <div>{author}</div>
            </div>
            <div>
                <label>title</label>
                <div>{title}</div>
            </div>
            <div>
                <label>content</label>
                <div>{content}</div>
            </div>
            <Button onClick={() => deletePost(_id)}>Delete post</Button>
        </div>
    );
};
