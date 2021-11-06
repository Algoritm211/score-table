import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import AuthorPage from './pages/AuthorPage/AuthorPage';

const App: React.FC = () => {
  return (
    <main>
      <Header />
      <section className='container px-4 mx-auto'>
        <Routes>
          <Route path='/main' element={<MainPage />} />
          <Route path='/author' element={<AuthorPage />} />
          <Route path='/*' element={<Navigate replace to='/main' />} />
        </Routes>
      </section>
    </main>
  );
};

export default App;
