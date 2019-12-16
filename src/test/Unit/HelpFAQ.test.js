import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import HelpFQA from '../../components/HelpFAQ/HelpFAQ';

test('help renders guest view', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <HelpFQA />
    </MemoryRouter>,
  );
  expect(getByTestId('help')).toHaveTextContent('help');
});