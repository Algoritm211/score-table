import React from 'react';
import { UserDataType } from '../../../types';

type TableRowPropsType = {
  user: UserDataType
}

const TableRow: React.FC<TableRowPropsType> = ({ user }) => {
  return (
    <tr>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center'>
          <div className='ml-4'>
            <div className='text-sm font-medium text-gray-900'>
              {user.player}
            </div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>
          {user.score}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
