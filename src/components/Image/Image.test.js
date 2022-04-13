import { render, screen } from '@testing-library/react';
import Image from '.';

describe('Component <Image />', () => {
  it('Renderiza componente correctamente', () => {
    render(<Image src="" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
});
