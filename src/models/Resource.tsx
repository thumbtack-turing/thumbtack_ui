import { Folder } from './Folder';

export interface Resource {
  id: number;
  name: string;
  base: boolean;
  parentId: number;
  childFolders: Folder[];
  childResources: Resource[];
}

export type Resources = Resource[];
