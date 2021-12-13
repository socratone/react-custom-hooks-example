import React, { useEffect, useState } from 'react';

type Validate = (value: string) => string;

const useInput = (validate: Validate) => {
  const [value, setValue] = useState('');
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

  return {
    value,
    error,
    touched,
    handleChange,
    handleBlur,
  };
};

export default useInput;
