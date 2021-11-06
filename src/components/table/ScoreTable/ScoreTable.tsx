import React from 'react';
import './ScoreTable.css';
import { UserDataType } from '../../../types';
import TableRow from '../TableRow/TableRow';

/**
 * Component for displaying user scores
 *
 * @return JSX.Element
 */
const ScoreTable: React.FC = () => {
  const mockData: UserDataType[] = [
    { player: 'Alex', score: 211 },
    { player: 'Ed', score: 112 },
  ];

  const tableRowDataBlock = mockData.map((user) => {
    return (
      <TableRow key={user.player} user={user} />
    );
  });

  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div
            className='table-wrapper'
          >
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='table-col-title'
                >
                  Player
                </th>
                <th
                  scope='col'
                  className='table-col-title'
                >
                  Score
                </th>
              </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {tableRowDataBlock}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreTable;
