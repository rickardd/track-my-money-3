import React, { FC } from 'react';
import styles from './Filter.module.css';

interface FilterProps {}

const Filter: FC<FilterProps> = () => (
  <div className={styles.Filter} data-testid="Filter">
    Filter Component
  </div>
);

export default Filter;
