import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';
import { User } from '../models/User';
import { Folder } from '../models/Folder';
import { Theme } from '../models/Theme';
import { FilePath } from '../models/FilePath';

const cache: InMemoryCache = new InMemoryCache({});

export const userVar: ReactiveVar<User> = makeVar<User>({
  id: null, name:'', email:'', baseFolder: null
});

export const currentFolderVar: ReactiveVar<Folder> = makeVar<Folder>({
  id: null,
  name: '',
  base: false,
  parentId: null,
  filePath: '',
  childFolders:[],
  childResources:[],
  }
);

export const currentThemeVar: ReactiveVar<Theme> = makeVar<Theme>({
  theme: localStorage.getItem('theme') || 'light'
});

export const currentFilePathVar: ReactiveVar<FilePath> = makeVar<FilePath>({
  filePath: ''
});

export default cache;
