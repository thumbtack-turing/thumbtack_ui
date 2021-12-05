import { Resource } from './Resource';

export interface Folder {
  id: number;
  name: string;
  base: boolean;
  parentId: number;
  childFolders: Folder[];
  childResources: Resource[];
}

export type Folders = Folder[];
