import React from 'react';
import { render, act } from '@testing-library/react';

import { Button } from '.';

describe('Button', () => {
  it('should be able to renders correctly', () => {
    act(() => render(<Button />) as any);
  });
});
