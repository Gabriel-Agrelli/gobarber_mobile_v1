import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import TechList from '../../src/components/TechList';

describe('Appointment', () => {
  it('teste', () => {
    const { getByText, getByTestId } = render(<TechList />);

    fireEvent.changeText(getByTestId('tech-input'), 'Node.js');
    fireEvent.press(getByTestId('botao'));

    expect(getByText('Node.js')).toBeTruthy();
    expect(getByTestId('tech-input')).toHaveProp('value', '');
  });
});
