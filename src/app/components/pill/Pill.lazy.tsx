import React, { lazy, Suspense } from 'react';

const LazyPill = lazy(() => import('./Pill'));

const Pill = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPill {...props} />
  </Suspense>
);

export default Pill;
