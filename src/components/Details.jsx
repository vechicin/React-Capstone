import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const {
    year,
  } = props;

  return (
    <li className="list-group-item">{year}</li>
  );
};

Details.propTypes = {
  year: PropTypes.string,
};

Details.defaultProps = {
  year: '',
};

export default Details;
