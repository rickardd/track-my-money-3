import React, { FC } from 'react';
import styles from './SummaryPage.module.css';

interface SummaryPageProps {}

const SummaryPage: FC<SummaryPageProps> = () => (
  <div className={styles.SummaryPage} data-testid="SummaryPage">
    SummaryPage Component
  </div>
);

export default SummaryPage;
