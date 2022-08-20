import React from 'react';
import PropTypes from 'prop-types';

export default function NotFoundView({ text }) {
  return <h1>{text}</h1>;
}

NotFoundView.propTypes = {
  text: PropTypes.string.isRequired,
};
