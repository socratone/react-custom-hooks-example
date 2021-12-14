export const required = (value: string) =>
  value === '' ? '값을 입력해야 합니다.' : '';

export const maxLength = (length: number) => (value: string) =>
  value.length > length ? `${length}글자 이내여야 합니다.` : '';

export const number = (value: string) =>
  isNaN(Number(value)) ? '숫자만 입력할 수 있습니다.' : '';
