import React, { lazy, Suspense } from 'react';

const LazyTransactionTable = lazy(() => import('./TransactionTable'));

const TransactionTable = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTransactionTable {...props} />
  </Suspense>
);

export default TransactionTable;
