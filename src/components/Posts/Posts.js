import React from 'react';
import Post from './Post';
import './Posts.css';
import App from "../../App";


const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  console.log(props.salami)
  // const looper = props.salami.map(item => {
  //   return Post(item);
        
  // })
  

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {
        props.salami.map(item => {
          console.log(item)
          return <Post post={item} likePost={item}/>
        })
      }
      {/* Check the implementation of Post to see what props it requires! */}
      
    </div>
  );
};










export default Posts;
