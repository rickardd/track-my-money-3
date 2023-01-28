import React, { FC } from 'react';
import styles from './PieChart.module.css';

interface PieChartProps {}

const PieChart: FC<PieChartProps> = () => (
  <div className={styles.PieChart} data-testid="PieChart">
    PieChart Component
  </div>
);

export default PieChart;
