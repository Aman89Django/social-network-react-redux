import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from '../../../utils/validators/validators'
import {Textarea} from "../../Common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {
    console.log('RENDER');
    const postElements =
        props.posts.map(p => <Post like={p.likesCount} message={p.post}/>);

    const onAddPost = values=> {
        props.addPost(values.post);
    };


    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <AddNewPostFormRedux onSubmit={onAddPost}/>
                </div>
            </div>

            <div className={s.posts}>
                {postElements}
            </div>

        </div>
    )
});



const AddNewPostForm = props => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field name="post" component={Textarea} placeholder="add a new post" validate={[required, maxLength10]}/></div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
    )
};

const AddNewPostFormRedux= reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);


export default MyPosts;







//
// import React from 'react';
// import s from './MyPosts.module.css';
// import Post from "./Post/Post";
//
//
// const MyPosts = (props) => {
//     const postElements =
//         props.posts.map(p => <Post like={p.likesCount} message={p.post}/>);
//
//     const newPostElement = React.createRef();
//     const onAddPost = () => {
//         props.addPost();
//     };
//     let onPostChange = () => {
//         let text = newPostElement.current.value;
//         props.updateNewPostText(text);
//     };
//
//     return (
//         <div>
//             <div className={s.postsBlock}>
//                 <h3>My posts</h3>
//                 <div>
//                     <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/></div>
//                     <div>
//                         <button onClick={ onAddPost }>Add post</button>
//                     </div>
//                 </div>
//             </div>
//
//             <div className={s.posts}>
//                 {postElements}
//             </div>
//
//         </div>
//     )
// };
//
//
// export default MyPosts;


