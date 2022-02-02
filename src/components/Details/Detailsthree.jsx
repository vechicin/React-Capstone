import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatements } from '../../redux/details/details';

const Detailsthree = () => {
  const statements = useSelector((state) => state.details.statements);
  const info = statements[Object.keys(statements)[2]];
  const dispatch = useDispatch();

  useEffect(() => {
    if (statements.length === 0) {
      dispatch(fetchStatements());
    }
  }, []);

  return (
    <div>
      <p>This is the first details page!</p>
      <ul>
        <li>
          Expenses:&nbsp;
          {info.costExpenses}
        </li>
        <li>
          EBITDA:&nbsp;
          {info.ebitda}
        </li>
        <li>
          Income Tax:&nbsp;
          {info.incomeTax}
        </li>
        <li>
          Statement Link:&nbsp;
          <a href={info.link}>{info.link}</a>
        </li>
        <li>
          Profit:&nbsp;
          {info.profit}
        </li>
        <li>
          Shares:&nbsp;
          {info.shares}
        </li>
      </ul>
    </div>
  );
};

export default Detailsthree;
