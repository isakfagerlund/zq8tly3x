import { useLiveQuery } from 'dexie-react-hooks';
import { useState } from 'react';
import { addComment, getCommentsWithChildren } from '../../queries/comments';
import { Comment } from '../../db/model';

function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div>
      <li key={comment.id}>{comment.content}</li>
    </div>
  );
}

export function CommentList() {
  const [newComment, setNewComment] = useState('');
  const comments = useLiveQuery(() => getCommentsWithChildren());

  const handleOnClick = async () => {
    await addComment(newComment);
    setNewComment('');
  };

  return (
    <div>
      <ul>
        {comments?.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ul>
      <input
        value={newComment}
        onChange={(event) => setNewComment(event.currentTarget.value)}
      ></input>
      <button onClick={handleOnClick}>Add comment</button>
    </div>
  );
}
