import { render, screen } from '@testing-library/react';
import MovieDetail from '.';

describe('Component <MovieDetail />', () => {
  it('Se renderiza correctamente el component', () => {
    render(<MovieDetail open={true} onClose={() => {}} title="" overview="" />);
    const dialog = screen.getByTestId('dialog');
    expect(dialog).toBeInTheDocument();
  });
});
