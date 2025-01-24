# SETTING UP ALIASES IN VITE
01. Install @types/node to prevent 'path' import issues:
```
npm install -D @types/node
```
02. Import dependency:
```
// vite.config.ts

import path from 'path';
```
03. Add configurations:
```
// vite.config.ts

resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
```
04. Add configurations to 'compilersOptions' in tsconfig.app.json:
```
// tsconfig.app.json

  "compilerOptions": {
    ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
    },
    "include": ["src"],
  }
```