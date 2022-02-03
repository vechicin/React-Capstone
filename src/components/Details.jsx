import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const {
    year,
  } = props;

  return (
    <ul>
      <li>{year}</li>
    </ul>
  );
};

Details.propTypes = {
  year: PropTypes.string,
};

Details.defaultProps = {
  year: '',
};

export default Details;
