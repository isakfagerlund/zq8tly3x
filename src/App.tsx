import { FormEvent, useState } from 'react';
import { CommentList } from './components/CommentList';
import { addComment } from './queries/comments';

function AddComment() {
  const [newComment, setNewComment] = useState('');

  const handleOnClick = async (e: FormEvent) => {
    e.preventDefault();

    await addComment(newComment);
    setNewComment('');
  };

  return (
    <form onSubmit={handleOnClick} className="flex flex-wrap w-full gap-2">
      <textarea
        className="border border-zinc-800 py-2 px-4 rounded-lg w-full"
        value={newComment}
        onChange={(event) => setNewComment(event.currentTarget.value)}
        placeholder="Add a comment"
        required
      ></textarea>
      <button className="bg-zinc-800 hover:bg-zinc-800/90 text-white py-2 px-4 rounded-lg w-full">
        Add a new comment
      </button>
    </form>
  );
}

function App() {
  return (
    <div className="flex items-center justify-center w-full h-full p-4 bg-zinc-50">
      <div className="flex flex-col w-full max-w-[500px] gap-4">
        <CommentList />
        <AddComment />
      </div>
    </div>
  );
}

export default App;
