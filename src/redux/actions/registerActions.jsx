export const setUsername = (username) => {
    return {
      type: 'SET_USERNAME',
      payload: username
    };
  };
  
  export const setEmail = (email) => {
    return {
      type: 'SET_EMAIL',
      payload: email
    };
  };
  
  export const setPassword = (password) => {
    return {
      type: 'SET_PASSWORD',
      payload: password
    };
  };
  
  export const setConfirmPassword = (confirmPassword) => {
    return {
      type: 'SET_CONFIRM_PASSWORD',
      payload: confirmPassword
    };
  };
  
  export const resetRegisterForm = () => {
    return {
      type: 'RESET_REGISTER_FORM'
    };
  };
  