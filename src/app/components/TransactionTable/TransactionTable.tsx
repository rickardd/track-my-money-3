import React, { FC } from 'react';
import styles from './TransactionTable.module.css';

interface TransactionTableProps {}

const TransactionTable: FC<TransactionTableProps> = () => (
  <div className={styles.TransactionTable} data-testid="TransactionTable">
    TransactionTable Component
  </div>
);

export default TransactionTable;
