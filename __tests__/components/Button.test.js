import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from '../../src/components/Button';

describe('Appointment', () => {
  it('teste', () => {
    const { debug } = render(
      <Button loading={true} onPress={() => {}}>
        Teste
      </Button>
    );
  });
});
