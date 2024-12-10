import Dexie, { type EntityTable } from 'dexie';
import { Comment } from './model';

const db = new Dexie('CommentsDB') as Dexie & {
  comments: EntityTable<Comment, 'id'>;
};

db.version(1).stores({
  comments: '++id, content, createdAt, updatedAt, childComments',
});

export { db };
