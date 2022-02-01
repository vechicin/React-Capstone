import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/home/home';

const Home = () => {
  const data = useSelector((state) => state.home.data);
  const dispatch = useDispatch();

  if (data.length === 0) {
    dispatch(fetchData());
  }

  return (
    <div>
      <p>This is the home page!</p>
    </div>
  );
};

export default Home;
