import { Folders } from '../models/Folder';
import { Resources } from '../models/Resource';

export interface Gallery {
  childFolders: Folders;
  childResources: Resources;
}
