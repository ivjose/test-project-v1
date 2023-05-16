/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */

// 1. Button Component: Implement a Button component that includes different states
// (default, hover, active, disabled) and variations (primary, secondary, danger, etc.).

// Design Principles:
// Component Design: Each component should be self-contained and reusable. It
// should accept props to modify its behavior or style.

// Scalability: The library should be designed in a way that new components can be
// easily added in the future.

// Testing: Write unit tests for your components using a testing library of your choice
// (J/* eslint-disable-next-line react/jsx-props-no-spreading */est, React Testing Library, etc.). Ensure all major functionality is covered.

// Responsive Design: The components should be responsive and work well on
// different screen sizes.

// Accessibility: The components are usable via keyboard navigation and contain
// appropriate properties.

import classNames from 'classnames';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  KeyboardEvent,
} from 'react';
import './Button.css';

type ButtonProps = {
  variant?: 'default' | 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  href?: string;
  title?: string;
  ariaLabel?: string;
  block?: boolean;
  style?: CSSProperties;
  onKeyDown?: (
    event: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

function Button({
  children,
  variant = 'default',
  disabled = false,
  href,
  title,
  ariaLabel,
  block = false,
  style,
  onKeyDown,
  ...rest
}: ButtonProps) {
  const buttonClasses = classNames('button', variant, { disabled, block });

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (event.key === 'Enter' && !disabled && onKeyDown) {
      onKeyDown(event);
    }
  };

  if (href) {
    return (
      <a
        className={buttonClasses}
        href={href}
        title={title}
        aria-label={ariaLabel}
        aria-disabled={disabled ? 'true' : undefined}
        style={style}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      title={title}
      aria-label={ariaLabel}
      aria-disabled={disabled ? 'true' : undefined}
      style={style}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
