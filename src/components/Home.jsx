import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchData } from '../redux/home/home';
import Details from './Details';

const Home = () => {
  const data = useSelector((state) => state.home.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchData());
    }
  }, []);

  return (
    <div>
      {data.map((item) => (
        <NavLink key={item.year} to={`/details/${item.date}`}>
          <Details year={item.year} />
        </NavLink>
      ))}
    </div>
  );
};

export default Home;
