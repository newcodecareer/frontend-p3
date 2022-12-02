const validation = (state) => {
  const errors = {};
  if (!state.firstName) {
    errors.firstName = "First name is required.";
  }
  if (!state.lastName) {
    errors.lastName = "Last name is required.";
  }
  if (!state.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(state.email)) {
    errors.email = "Email is invalid.";
  }
  if (!state.password) {
    errors.password = "Password is required.";
  } else if (state.password.length < 5) {
    errors.password = "Password must be more than 5 characters.";
  }
  return errors;
};
export default validation;
