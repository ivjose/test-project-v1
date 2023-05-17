import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import Input from './Input';

describe('Input component', () => {
  it('renders the input field with label', () => {
    const label = 'Username';
    render(
      <Input
        type="text"
        label={label}
        id={label.toLowerCase()}
        name={label.toLowerCase()}
      />
    );
    const inputElement = screen.getByLabelText(label) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
  });

  it('renders the textarea field with label', () => {
    const label = 'Description';
    render(
      <Input
        type="textarea"
        label={label}
        id={label.toLowerCase()}
        name={label.toLowerCase()}
      />
    );
    const textareaElement = screen.getByLabelText(label) as HTMLInputElement;
    expect(textareaElement).toBeInTheDocument();
  });

  it('renders the input field with label and accessibility attributes', () => {
    const label = 'Username';
    render(
      <Input
        type="text"
        label={label}
        id={label.toLowerCase()}
        name={label.toLowerCase()}
        required
      />
    );
    const inputElement = screen.getByLabelText(label) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('aria-invalid', 'false');
    expect(inputElement).toHaveAttribute('aria-required', 'true');
    expect(inputElement).toHaveAttribute('aria-describedby', '');
  });

  it('triggers onChange event', () => {
    const label = 'Username';
    const handleChange = vi.fn();
    render(
      <Input
        type="text"
        label={label}
        id={label.toLowerCase()}
        name={label.toLowerCase()}
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
    const errorMessage = screen.getByText(error);
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveAttribute('id', `${id}-error`);
    expect(errorMessage).toHaveAttribute('role', 'alert');
  });
});
