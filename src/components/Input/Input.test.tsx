import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import Input from './Input';

describe('Input component', () => {
  it('renders the input field with label', () => {
    const label = 'Username';
    const id = 'username';
    render(<Input type="text" label={label} id={id} name={id} />);
    const inputElement = screen.getByLabelText(label) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
  });

  it('renders the textarea field with label', () => {
    const label = 'Description';
    const id = 'description';
    render(<Input type="textarea" label={label} id={id} name={id} />);
    const textareaElement = screen.getByLabelText(label) as HTMLInputElement;
    expect(textareaElement).toBeInTheDocument();
  });

  it('renders the input field with label and accessibility attributes', () => {
    const label = 'Username';
    const id = 'username';
    render(<Input type="text" label={label} id={id} name={id} required />);
    const inputElement = screen.getByLabelText(label) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('aria-invalid', 'false');
    expect(inputElement).toHaveAttribute('aria-required', 'true');
    expect(inputElement).toHaveAttribute('aria-describedby', '');
  });

  it('triggers onChange event', () => {
    const label = 'Username';
    const id = 'username';
    const handleChange = vi.fn();
    render(
      <Input
        type="text"
        label={label}
        id={id}
        name={id}
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByLabelText(label) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe('test');
  });

  it('displays error message when error prop is provided', () => {
    const label = 'Username';
    const id = 'username';
    const error = 'Username is required';
    render(<Input type="text" label={label} id={id} name={id} error={error} />);

    const inputElement = screen.getByLabelText(label) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('aria-invalid', 'true');

    const errorMessage = screen.getByText(error);
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveAttribute('id', `${id}-error`);
    expect(errorMessage).toHaveAttribute('role', 'alert');
  });
});
