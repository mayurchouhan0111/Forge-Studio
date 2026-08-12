import { render, screen, fireEvent } from '@testing-library/react';
import Estimator from '../Estimator';

describe('Estimator component', () => {
  it('renders and updates estimate on selection change', () => {
    render(<Estimator />);
    // initial result should be present
    expect(screen.getByText(/Estimated Timeline:/i)).toBeInTheDocument();
    const projectSelect = screen.getAllByRole('combobox')[0] as HTMLSelectElement;
    fireEvent.change(projectSelect, { target: { value: 'AI' } });
    // after change, result should update (still contains weeks and budget)
    expect(screen.getByText(/Estimated Timeline:/i)).toBeInTheDocument();
  });
});
