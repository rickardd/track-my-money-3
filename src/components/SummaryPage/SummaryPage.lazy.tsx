import React, { lazy, Suspense } from 'react';

const LazySummaryPage = lazy(() => import('./SummaryPage'));

const SummaryPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySummaryPage {...props} />
  </Suspense>
);

export default SummaryPage;
