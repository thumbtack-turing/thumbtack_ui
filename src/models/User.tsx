import { Folder } from './Folder';

export interface User {
  id: number | null;
  name: string;
  email: string;
  baseFolder: Folder | null;
}

// export type Folders = Folder[];
