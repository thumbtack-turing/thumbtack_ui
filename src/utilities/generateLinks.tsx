import { Link } from 'react-router-dom';

export const generateLinks = (filePath: string, parentId: number) => {
  return filePath
  .split('/')
    .map((folderName: string, index: number, array: any[]) => {
      if (index === 0) { // empty element
        return;
      } else if (index === 1) { // always base folder
        return <Link
          to='/myfolders'
          className='filepath-link'
        >
          /{ folderName }
        </Link>
      } else if (index === array.length - 1) { // currently viewed folder
        return <>
          {'/'}
          <span className='filepath-current-folder'>
            { folderName }
          </span>
        </>;
      } else if (index === array.length - 2) { // direct parent folder
        return <Link
          to={ `/myfolders/${ parentId } `}
          className='filepath-link'
        >
          /{ folderName }
        </Link>
      } else {
        // return '/' + folderName;
        return '/... ';
      }
    }
  )
}
