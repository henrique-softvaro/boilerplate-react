import React from 'react';
import { render } from '@testing-library/react';

import { Button } from '.';

describe('Button', () => {
  it('should be able to renders correctly', () => {
    render(<Button />);
  });
});
