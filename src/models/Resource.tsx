import { Folder } from './Folder';

export interface Resource {
  id: number | null;
  name: string;
  url: string;
  image: string;
  createdAt: string;
}

export type Resources = Resource[];
