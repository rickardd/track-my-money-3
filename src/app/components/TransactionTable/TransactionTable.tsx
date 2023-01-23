import React, { FC } from "react";
import styles from "./TransactionTable.module.css";

interface TransactionTableProps {}

const TransactionTable: FC<TransactionTableProps> = () => (
  <div className={styles.TransactionTable} data-testid="TransactionTable">
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2 text-red-900">DATE</th>
          <th className="px-4 py-2">STATEMENT</th>
          <th className="px-4 py-2">VALUE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">January 1, 2023</td>
          <td className="border px-4 py-2">Income</td>
          <td className="border px-4 py-2">$10,000</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">January 2, 2023</td>
          <td className="border px-4 py-2">Expenses</td>
          <td className="border px-4 py-2">$5,000</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TransactionTable;
