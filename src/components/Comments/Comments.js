import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  console.log(props.comments.likePost.comments)
  

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      { props.comments.post.comments.map(item => {
        console.log(item.username);
        return <Comment
        comment={item}/>
      })}
    </div>
  );
};

export default Comments;
