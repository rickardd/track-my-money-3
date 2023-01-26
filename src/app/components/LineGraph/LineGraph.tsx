import React, { FC } from 'react';
import styles from './LineGraph.module.css';

interface LineGraphProps {}

const LineGraph: FC<LineGraphProps> = () => (
  <div className={styles.LineGraph} data-testid="LineGraph">
    LineGraph Component
  </div>
);

export default LineGraph;
