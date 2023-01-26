import React, { lazy, Suspense } from 'react';

const LazyLineGraph = lazy(() => import('./LineGraph'));

const LineGraph = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLineGraph {...props} />
  </Suspense>
);

export default LineGraph;
