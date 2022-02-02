import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
          <li key={item.id}>{item.year}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
