export const requiredInput = (input) =>
  input ? undefined : `Input is required`;

export const correctInput = input =>
  input !== 'Username' ? 'Incorrect Username' : undefined;

export const matchInput = (input, allInputs) =>
  input === allInputs.password ? undefined : 'Passwords do not match';