import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const Statements = () => {
  const statements = useSelector((state) => state.home.data);
  console.log(statements);
  const params = useParams();
  console.log(params);
  const statement = statements.find((statement) => statement.date === params.statementYear);
  console.log(statement);

  return (
    <div>
      <p>{statement.year}</p>
      <p>{statement.currency}</p>
    </div>
  );
};

export default Statements;
