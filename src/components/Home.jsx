import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Details from './Details';

const Home = () => {
  const data = useSelector((state) => state.home.data);

  return (
    <ul className="list-group">
      {data.map((item) => (
        <NavLink className="list-group-item" id={item.period + item.year} key={item.year} to={`/details/${item.date}`}>
          <Details year={item.year} date={item.date} />
        </NavLink>
      ))}
    </ul>
  );
};

export default Home;
