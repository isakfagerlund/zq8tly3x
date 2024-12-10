interface Comment {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  parentId?: number;
  childComments?: Comment[];
}

export type { Comment };
