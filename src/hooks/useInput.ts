import React, { useEffect, useState } from 'react';

type Validate = (value: string) => string;

const useInput = (initialValue: string, validates: Validate[]) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    let error = '';
    validates.forEach((validate) => {
      if (!error) error = validate(value);
    });
    setError(error);
  }, [validates, value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const reset = () => {
    setValue(initialValue);
    let error = '';
    validates.forEach((validate) => {
      if (!error) error = validate(value);
    });
    setError(error);
    setTouched(false);
  };

  return {
    value,
    error,
    touched,
    handleChange,
    handleBlur,
    reset,
  };
};

export default useInput;
