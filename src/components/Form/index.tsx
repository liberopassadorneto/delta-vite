import React, { FormEvent, useState } from 'react';
import { Container } from '../../styles/globalStyles';
import {
  FormButton,
  FormColumn,
  FormInput,
  FormInputRow,
  FormLabel,
  FormMessage,
  FormRow,
  FormSection,
  FormTitle,
  FormWrapper,
} from './FormStyles';
import { validateForm } from './validateForm';

export function Form() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const resultError = validateForm({ name, email, password, confirmPass });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPass('');
    setError('');
    setSuccess('Application was submitted!');
  }

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: 'Name',
      value: name,
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setName(e.currentTarget.value),
      type: 'text',
    },
    {
      label: 'Email',
      value: email,
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setEmail(e.currentTarget.value),
      type: 'email',
    },
    {
      label: 'Password',
      value: password,
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setPassword(e.currentTarget.value),
      type: 'password',
    },
    {
      label: 'Confirm Password',
      value: confirmPass,
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setConfirmPass(e.currentTarget.value),
      type: 'password',
    },
  ];
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn>
            <FormTitle>Sign up</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}

              <FormButton type='submit'>Signup</FormButton>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial='hidden'
                animate='animate'
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial='hidden'
                animate='animate'
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
}
