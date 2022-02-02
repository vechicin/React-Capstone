import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchData } from '../redux/home/home';

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
      <p>This is the home page!</p>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <NavLink to={`details/${item.id}`}>
              {item.year}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
