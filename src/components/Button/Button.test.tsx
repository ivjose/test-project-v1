import { fireEvent, render } from '@testing-library/react';
import { describe, it } from 'vitest';

import Button from './Button';

describe('Button', () => {
  it('renders default button correctly', () => {
    const { getByText } = render(<Button>Default button</Button>);
    const buttonElement = getByText('Default button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('default');
  });

  it('renders primary button correctly', () => {
    const { getByText } = render(
      <Button variant="primary">Primary button</Button>
    );
    const buttonElement = getByText('Primary button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('primary');
  });

  it('renders secondary button correctly', () => {
    const { getByText } = render(
      <Button variant="secondary">Secondary button</Button>
    );
    const buttonElement = getByText('Secondary button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('secondary');
  });

  it('renders danger button correctly', () => {
    const { getByText } = render(
      <Button variant="danger">Danger button</Button>
    );
    const buttonElement = getByText('Danger button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('danger');
  });

  it('handles click event correctly', () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };
    const { getByText } = render(
      <Button onClick={handleClick}>Click event</Button>
    );
    const buttonElement = getByText('Click event');
    fireEvent.click(buttonElement);
    expect(clicked).toBe(true);
  });

  it('renders disabled button correctly', () => {
    const { getByText } = render(<Button disabled>Disabled button</Button>);
    const buttonElement = getByText('Disabled button');
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders disabled link correctly', () => {
    const { getByText } = render(
      <Button href="https://google.com" disabled>
        Disabled button
      </Button>
    );
    const buttonElement = getByText('Disabled button');
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveAttribute('aria-disabled', 'undefined');
  });

  it('renders button as anchor link correctly', () => {
    const { getByText } = render(
      <Button href="https://google.com">Go to Google</Button>
    );
    const linkElement = getByText('Go to Google');
    expect(linkElement.tagName).toBe('A');
    expect(linkElement).toHaveAttribute('href', 'https://google.com');
  });

  it('handles keydown event correctly', () => {
    let keyPressed = '';
    const handleKeyDown = (
      event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
    ) => {
      keyPressed = event.key;
    };
    const { getByText } = render(
      <Button onKeyDown={handleKeyDown}>Click me</Button>
    );
    const buttonElement = getByText('Click me');

    fireEvent.keyDown(buttonElement, { key: 'Enter' });

    expect(keyPressed).toBe('Enter');
  });

  it('applies title attribute correctly', () => {
    const { getByText } = render(<Button title="My Title">Button</Button>);
    const buttonElement = getByText('Button');
    expect(buttonElement).toHaveAttribute('title', 'My Title');
  });

  it('applies aria-label attribute correctly', () => {
    const { getByText } = render(
      <Button ariaLabel="Data label">Button</Button>
    );
    const buttonElement = getByText('Button');
    expect(buttonElement).toHaveAttribute('aria-label', 'Data label');
  });
});
