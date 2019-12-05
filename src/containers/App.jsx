import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';

const App = () => (
  <div className='App'>
    <Header />
    <Search />
    <Categories />
  </div>
);

export default App;
