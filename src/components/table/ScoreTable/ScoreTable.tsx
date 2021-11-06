import React, { useEffect } from 'react';
import './ScoreTable.css';
import TableRow from '../TableRow/TableRow';
import { getSortedUsers } from '../../../redux/users/selector';
import { useDispatch, useSelector } from 'react-redux';
import { startEventsListening, stopEventsListening } from '../../../redux/users/action';
import storage from '../../../indexedDB/indexedStorage';
import { addPlayersToState } from '../../../redux/users/reducer';
import { UserDataType } from '../../../types';

/**
 * Component for displaying user scores
 *
 * @return JSX.Element
 */
const ScoreTable: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(getSortedUsers);

  // Getting users from cache
  const loadSavedUsers = async () => {
    const savedUsers = await storage.getUsersFromStorage('users') as UserDataType[];
    if (savedUsers) {
      dispatch(addPlayersToState(savedUsers));
    }
  };

  useEffect(() => {
    loadSavedUsers();
  }, []);

  useEffect(() => {
    dispatch(startEventsListening());
    return () => {
      dispatch(stopEventsListening());
    };
  }, []);

  const tableRowDataBlock = users.map((user) => {
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
