const BACK_URL = 'http://localhost:3000';
const FAKE_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

export const setUrl = (url: string) => `${BACK_URL}${url}`;

export const setJwt = () => FAKE_JWT;

export const ensureError = (value: unknown): Error => {
  if (value instanceof Error) return value;

  let stringified = '[Unable to stringify the thrown value]';
  try {
    stringified = JSON.stringify(value);
  } catch {}

  const error = new Error(
    `This value was thrown as is, not through an Error: ${stringified}`
  );
  return error;
};
