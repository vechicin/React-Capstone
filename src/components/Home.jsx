import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Details from './Details';

const Home = () => {
  const data = useSelector((state) => state.home.data);
  const [searchYear, setYear] = useState('');

  const searchResult = data.filter((item) => { /*eslint-disable-line*/
    if (searchYear === '') {
      return item;
    }
    if (item.year.includes(searchYear)) {
      return item;
    }
  }).map((item) => (<NavLink className="list-group-item" id={item.period + item.year} key={item.year} to={`/details/${item.date}`}><Details year={item.year} date={item.date} /></NavLink>));

  return (
    <ul className="list-group">
      <input onChange={((event) => setYear(event.currentTarget.value))} type="search" placeholder="Search by year..." />
      {searchResult}
    </ul>
  );
};

export default Home;
