import { Resource } from './Resource';

export interface Folder {
  id: number | null;
  name: string;
  base: boolean;
  parentId: number | null;
  childFolders: Folder[];
  childResources: Resource[];
}

export type Folders = Folder[];
