import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieCard from '.';

const MockLogo = () =>
  render(<MovieCard title="" releaseDate="" overview="" />);

describe('Componente <MovieCard />', () => {
  it('Se renderiza correctamente el compoente', () => {
    MockLogo();
    const h5 = screen.getByRole('heading');
    expect(h5).toBeInTheDocument();
  });

  it('Se renderiza correctamente el componente <Image />', () => {
    MockLogo();
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
});
