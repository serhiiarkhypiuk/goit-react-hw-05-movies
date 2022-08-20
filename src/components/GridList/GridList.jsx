import React from 'react';
import styles from './GridList.module.css';
import PropTypes from 'prop-types';

export default function GridList({ children }) {
  return <ul className={styles.grid}>{children}</ul>;
}

GridList.propTypes = {
  children: PropTypes.node,
};
