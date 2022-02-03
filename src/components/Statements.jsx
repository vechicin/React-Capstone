import React from 'react';
import { useSelector } from 'react-redux';

const Statements = () => {
  const statement = useSelector((state) => state.home.data);
  console.log(statement);

  return (
    <div>
      {/* <li>{date}</li>
      <li>{currency}</li> */}
    </div>
  );
};

export default Statements;
