import { useId, useRef, useState } from 'react';
import { buildMailtoLink, getProfile } from '../../services/portfolioService.js';
import { SendIcon } from '../ui/Icons.jsx';

const initialValues = { name: '', email: '', subject: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (values.email.trim() && !EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim()) errors.message = 'Please write a short message.';
  return errors;
}

export default function ContactForm() {
  const { email } = getProfile();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const formRef = useRef(null);
  const uid = useId();

  const fieldId = (name) => `${uid}-${name}`;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  // Today: opens the visitor's email client. Later: POST to /api/contact.
  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      setStatus('');
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    window.location.href = buildMailtoLink(values);
    setStatus(`Your email app should now open with the message ready to send. If it doesn’t, write directly to ${email}.`);
  };

  const describedBy = (name, hint) =>
    [hint && fieldId(`${name}-hint`), errors[name] && fieldId(`${name}-error`)].filter(Boolean).join(' ') ||
    undefined;

  return (
    <>
      <h3 className="form__title">Send a message</h3>
      <p className="form__hint">Fields marked * are required.</p>

      <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate>
        <div className="form__row">
          <div className="field">
            <label htmlFor={fieldId('name')}>Name *</label>
            <input
              id={fieldId('name')}
              name="name"
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={describedBy('name')}
            />
            {errors.name && (
              <p id={fieldId('name-error')} className="field__error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor={fieldId('email')}>
              Your email <span className="field__optional">(optional)</span>
            </label>
            <input
              id={fieldId('email')}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy('email')}
            />
            {errors.email && (
              <p id={fieldId('email-error')} className="field__error">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="field">
          <label htmlFor={fieldId('subject')}>
            Subject <span className="field__optional">(optional)</span>
          </label>
          <input
            id={fieldId('subject')}
            name="subject"
            type="text"
            value={values.subject}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor={fieldId('message')}>Message *</label>
          <textarea
            id={fieldId('message')}
            name="message"
            rows="5"
            required
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy('message')}
          />
          {errors.message && (
            <p id={fieldId('message-error')} className="field__error">
              {errors.message}
            </p>
          )}
        </div>

        <div className="form__footer">
          <p id={fieldId('submit-hint')} className="form__note">
            Opens your email app with the message pre-filled.
          </p>
          <button type="submit" className="btn btn--primary" aria-describedby={fieldId('submit-hint')}>
            Compose email
            <SendIcon />
          </button>
        </div>

        <p className="form__status" role="status" aria-live="polite">
          {status}
        </p>
      </form>
    </>
  );
}
