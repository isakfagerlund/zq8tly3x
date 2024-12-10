import { FormEvent, useState } from 'react';
import { Comment } from '../db/model';
import { addComment } from '../queries/comments';

export function ChildComments({
  childComments,
  parentId,
}: {
  childComments: Comment[] | undefined;
  parentId: number;
}) {
  const [newComment, setNewComment] = useState('');

  const handleOnClick = async (e: FormEvent) => {
    e.preventDefault();

    await addComment(newComment, parentId);
    setNewComment('');
  };

  return (
    <div className="mx-4 flex flex-col gap-4">
      {childComments
        ? childComments.map((c) => (
            <div
              key={c.id}
              className="border p-4 rounded-lg flex justify-between items-center"
            >
              {c.content}
            </div>
          ))
        : null}
      <form onSubmit={handleOnClick} className="flex flex-wrap w-full gap-2">
        <textarea
          className="border border-zinc-800 py-2 px-4 rounded-lg w-full"
          value={newComment}
          onChange={(event) => setNewComment(event.currentTarget.value)}
          placeholder="Add a child comment"
          required
          autoFocus
        ></textarea>
        <button className="bg-zinc-800 hover:bg-zinc-800/90 text-white py-2 px-4 rounded-lg w-full">
          Add a new child comment
        </button>
      </form>
    </div>
  );
}
