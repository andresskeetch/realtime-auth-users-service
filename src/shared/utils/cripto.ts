import * as bcrypt from 'bcrypt';

const SALT_OR_ROUNDS = 10;

export const hash = (password: string) => {
  return bcrypt.hash(password, SALT_OR_ROUNDS);
};

export const passwordMatch = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};
