import React from 'react';
import ScoreTable from '../../components/table/ScoreTable/ScoreTable';
import TableOptions from '../../components/table/TableOptions/TableOptions';

const MainPage = () => {
  return (
    <div>
      <TableOptions />
      <ScoreTable />
    </div>
  );
};

export default MainPage;
