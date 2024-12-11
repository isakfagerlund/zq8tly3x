# Comments Component

### Quick Start

Install Packages
```
npm install
```
Run development server
```
npm run dev
```

Run tests
```
npm run test
```

Build Project
```
npm run build
```

# Requirements
- The component displays a list of comments
- The user can enter a text and click a button to add the comment to the list
- The user can delete a comment from the list
- Comments can be nested: The user can comment on another comment
- Comments are persisted: Restarting/ refreshing the app does not clear comments
- Bonus points if the component works across multiple tabs without refreshing the page

# Decisions
- Dexie
  - Simple wrapper of indexedDB
  - Suitable for this project since external synchronization is not required
  - In a real-world application, we would typically sync data with a server to ensure consistency across devices or sessions. The sync could be when the app goes online after being offline or immediately following a mutation
- Vitest
  - Reuses the Vite configuration, avoiding the need for duplicated configs
- Tailwind
  - Easy and fast to work with
  - For production projects, I would pair it with options [shad/cn](https://ui.shadcn.com/), [Headless UI](https://headlessui.com/) or [Radix UI](https://www.radix-ui.com/primitives) for accessibility and speed.

# Future improvements
- Only have one visible Input Component. For example using a context to keep track of the current clicked comment.
- Error handling for DB queries. Currently it's assumed it will work.
- Confirmation when deleting a Comment
- Toast notifications for activites
- UX needs some improvement. If this was for a real product I would go the direction of Notion comments. Where a child comment can not have children, only siblings.
- Using React Memo to check re-renders. This should only be used when perfomance is noticibly bad. Also the new React Compiler solves a lot of these out of the box.
