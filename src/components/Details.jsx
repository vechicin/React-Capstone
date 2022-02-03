import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const {
    year,
  } = props;

  return (
    <div>
      <p>{year}</p>
    </div>
  );
};

Details.propTypes = {
  year: PropTypes.string,
};

Details.defaultProps = {
  year: '',
};

export default Details;
