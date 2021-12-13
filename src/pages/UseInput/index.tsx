import useInput from '../../hooks/useInput';
import styled from 'styled-components';

const validate = (value: string) => {
  if (value === '') return '값을 입력해야 합니다.';
  if (value.length > 3) return '이름은 3글자 이내여야 합니다.';
  return '';
};

const UseInput = () => {
  const { value, error, touched, handleChange, handleBlur } =
    useInput(validate);

  return (
    <Container>
      <TextInput value={value} onChange={handleChange} onBlur={handleBlur} />
      {touched && error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const TextInput = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

const ErrorText = styled.div`
  color: red;
`;

export default UseInput;
