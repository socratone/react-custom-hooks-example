import React, { useEffect, useState } from 'react';

type Validate = (value: string) => string;

const useInput = (initialValue: string, validate: Validate) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const error = validate(value);
    setError(error);
  }, [validate, value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const reset = () => {
    setValue(initialValue);
    const error = validate(value);
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
