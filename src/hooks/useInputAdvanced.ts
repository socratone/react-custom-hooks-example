import React, { useEffect, useState } from 'react';

type Value = string;
type Validate = (value: Value) => string;

const useInputAdvanced = (initialValue: Value, validates: Validate[]) => {
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | Value
  ) => {
    // onChange에 그냥 value를 넣었을 때
    if (typeof event === 'string') {
      setValue(event);
    } else {
      setValue(event.target.value);
    }
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
    handlers: {
      value,
      onChange: handleChange,
      onBlur: handleBlur,
    },
  };
};

export default useInputAdvanced;
