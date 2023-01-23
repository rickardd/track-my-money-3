import React, { FC } from 'react';
import styles from './Pill.module.css';

interface PillProps {}

const Pill: FC<PillProps> = () => (
  <div className={styles.Pill} data-testid="Pill">
    Pill Component
  </div>
);

export default Pill;
