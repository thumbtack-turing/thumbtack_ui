import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';
import { User } from '../models/User';
import { Folder } from '../models/Folder';

const cache: InMemoryCache = new InMemoryCache();

export const userVar: ReactiveVar<User> = makeVar<User>({
  id: null, name:'', email:''
});

export const currentFolderVar: ReactiveVar<Folder> = makeVar<Folder>({
  id: null,
  name: '',
  base: false,
  parentId: null,
  childFolders:[],
  childResources:[]
});

export default cache;
