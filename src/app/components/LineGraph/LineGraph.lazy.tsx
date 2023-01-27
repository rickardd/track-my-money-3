import React, { lazy, Suspense } from "react";

const data = [
  { Name: "Jan", Value: 0 },
  { Name: "Feb", Value: 200 },
  { Name: "Mar", Value: 300 },
  { Name: "Apr", Value: 400 },
  { Name: "May", Value: 500 },
  { Name: "Jun", Value: 500 },
  { Name: "Jul", Value: 500 },
  { Name: "Aug", Value: 500 },
  { Name: "Sep", Value: 500 },
  { Name: "Oct", Value: 500 },
  { Name: "Dec", Value: 500 },
];

const LazyLineGraph = lazy(() => import("./LineGraph"));

const LineGraph = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyLineGraph data={data} />
  </Suspense>
);

export default LineGraph;
