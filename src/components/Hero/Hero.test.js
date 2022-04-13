import { render, screen } from '@testing-library/react';
import Hero from '.';

describe('Component <Hero />', () => {
  it('Se renderiza correctamente el component', () => {
    render(<Hero />);
    const h2 = screen.getByRole('heading');
    const p = screen.getByRole('paragraph');
    expect(h2).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });
  it('Renderiza texto correctamente', () => {
    render(<Hero />);
    const text = screen.getByText('Xepelin Movie Database');
    expect(text).toBeInTheDocument();
  });
});
