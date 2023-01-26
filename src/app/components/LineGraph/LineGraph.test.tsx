import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LineGraph from './LineGraph';

describe('<LineGraph />', () => {
  test('it should mount', () => {
    render(<LineGraph />);
    
    const lineGraph = screen.getByTestId('LineGraph');

    expect(lineGraph).toBeInTheDocument();
  });
});