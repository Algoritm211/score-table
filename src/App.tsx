import React from 'react';
import Header from './components/Header/Header';
import ScoreTable from './components/table/ScoreTable/ScoreTable';

const App: React.FC = () => {
  return (
    <main>
      <Header />
      <section className='container px-4 mx-auto'>
        <ScoreTable />
      </section>
    </main>
  );
};

export default App;
