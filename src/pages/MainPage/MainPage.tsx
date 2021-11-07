import React from 'react';
import ScoreTable from '../../components/table/ScoreTable/ScoreTable';
import TableOptions from '../../components/table/TableOptions/TableOptions';

/**
 * Main page of application
 * @return JSX.Element
 */
const MainPage: React.FC = () => {
  return (
    <>
      <TableOptions />
      <ScoreTable />
    </>
  );
};

export default MainPage;
