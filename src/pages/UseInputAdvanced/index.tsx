import useInputAdvanced from '../../hooks/useInputAdvanced';
import styled from 'styled-components';
import { maxLength, number, required } from './validations';

const validatesName = [required, maxLength(3)];
const validatesAge = [required, number];

const UseInputAdvanced = () => {
  const {
    error: nameError,
    touched: nameTouched,
    handlers: nameHandlers,
  } = useInputAdvanced('', validatesName);
  const {
    error: ageError,
    touched: ageTouched,
    handlers: ageHandlers,
  } = useInputAdvanced('', validatesAge);

  return (
    <Container>
      <Label>이름</Label>
      <TextInput {...nameHandlers} />
      {nameTouched && nameError && <ErrorText>{nameError}</ErrorText>}

      <Label>나이</Label>
      <TextInput {...ageHandlers} />
      {ageTouched && ageError && <ErrorText>{ageError}</ErrorText>}

      <Button disabled={!!nameError || !!ageError}>SUBMIT</Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Label = styled.div``;

const TextInput = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

const ErrorText = styled.div`
  color: red;
  margin-bottom: 10px;
`;

const Button = styled.button`
  display: block;
  color: white;
  background: dodgerblue;
  border: 0;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  font-weight: 700;

  &:disabled {
    background: grey;
    cursor: not-allowed;
  }
`;

export default UseInputAdvanced;
