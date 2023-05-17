/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */

import classNames from 'classnames';
import './Input.css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
}

function Input({ label, error, ...rest }: InputProps) {
  const inputClassName = classNames('input-field', {
    'input-field--error': error,
  });

  let InputElement = 'input';

  if (rest.type === 'textarea') {
    InputElement = 'textarea';
  }

  return (
    <div className="input-container">
      <label htmlFor={rest.id} className="input-label">
        {label}
      </label>

      <InputElement
        className={inputClassName}
        aria-invalid={error ? 'true' : 'false'}
        aria-required={rest.required ? 'true' : 'false'}
        aria-describedby={error ? `${rest.id}-error` : ''}
        {...rest}
      />
      {error && (
        <div id={`${rest.id}-error`} role="alert" className="error-message">
          {error}
        </div>
      )}
    </div>
  );
}

export default Input;
