import { render, screen } from '@testing-library/react';
import MovieList from '.';

describe('Componente <MovieList />', () => {
  it('Renderiza los children debidamente', () => {
    render(
      <MovieList>
        <div>Título</div>
      </MovieList>
    );
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
    const subTitle = screen.getByRole('paragraph');
    expect(subTitle).toBeInTheDocument();
  });
});
