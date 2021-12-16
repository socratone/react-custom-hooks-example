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
    error, // error text
    touched, // focus out
    handleChange,
    handleBlur,
    reset, // 초기화
    // 생략해서 input props에 넣는 용도
    attributes: {
      value,
      onChange: handleChange,
      onBlur: handleBlur,
    },
  };
};

export default useInputAdvanced;
