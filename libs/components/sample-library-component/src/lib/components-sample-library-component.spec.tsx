import { render } from '@testing-library/react';

import ComponentsSampleLibraryComponent from './components-sample-library-component';

describe('ComponentsSampleLibraryComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsSampleLibraryComponent />);
    expect(baseElement).toBeTruthy();
  });
});
