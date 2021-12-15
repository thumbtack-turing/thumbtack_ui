import { Folders } from '../models/Folder';
import { Resources } from '../models/Resource';

export const folderContainsInfo = (childFolders: Folders, childResources: Resources) => {
  let foldersInfo, resourcesInfo;
  if (childFolders.length) {
    if (childFolders.length > 1) {
      foldersInfo = `${childFolders.length} folders`
    } else {
      foldersInfo = `${childFolders.length} folder`
    }
  } else {
    foldersInfo = undefined;
  }
  if (childResources.length) {
    if (childResources.length > 1) {
      resourcesInfo = `${childFolders.length} resources`
    } else {
      resourcesInfo = `${childResources.length} resource`
    }
  } else {
    resourcesInfo = undefined;
  }
  if (!foldersInfo && !resourcesInfo) {
    return 'currently empty'
  } else if (foldersInfo && resourcesInfo) {
    return `contains ${foldersInfo} & ${resourcesInfo}`;
  } else if (foldersInfo) {
    return `contains ${foldersInfo}`;
  } else if (resourcesInfo) {
    return `contains ${resourcesInfo}`;
  }
}
