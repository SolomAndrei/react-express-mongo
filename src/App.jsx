import classes from './app.module.css';
import { PostList } from './components/organisms/postList/PostList';
import { PostForm } from './components/organisms/addPostForm/PostForm';

function App() {
    return (
        <div className={classes.box}>
            <PostForm />
            <PostList />
        </div>
    );
}

export default App;
