import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';
import { User } from '../models/User';
import { Folder } from '../models/Folder';

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // user: {
        //   read() {
        //     return userVar();
        //   }
        // },
        currentFolder: {
          read() {
            return currentFolderVar();
          }
        }
      }
    }
  }
});

export const userVar: ReactiveVar<User> = makeVar<User>({
  id: null, name:'', email:'', baseFolder: {}
});

export const currentFolderVar: ReactiveVar<Folder> = makeVar<Folder>({
  id: null,
  name: '',
  base: false,
  parentId: null,
  filePath: '',
  childFolders:[],
  childResources:[]
});

export default cache;
