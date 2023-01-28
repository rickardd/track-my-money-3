import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TransactionTable from './TransactionTable';

describe('<TransactionTable />', () => {
  test('it should mount', () => {
    render(<TransactionTable />);
    
    const transactionTable = screen.getByTestId('TransactionTable');

    expect(transactionTable).toBeInTheDocument();
  });
});