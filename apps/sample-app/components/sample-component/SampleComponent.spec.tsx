import { render } from '@testing-library/react';

import SampleComponent from './SampleComponent';

describe('SampleComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SampleComponent />);
    expect(baseElement).toBeTruthy();
  });
});
