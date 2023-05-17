/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */

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
