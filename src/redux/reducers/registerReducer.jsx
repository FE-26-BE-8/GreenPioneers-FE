const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  
  const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERNAME':
        return {
          ...state,
          username: action.payload
        };
      case 'SET_EMAIL':
        return {
          ...state,
          email: action.payload
        };
      case 'SET_PASSWORD':
        return {
          ...state,
          password: action.payload
        };
      case 'SET_CONFIRM_PASSWORD':
        return {
          ...state,
          confirmPassword: action.payload
        };
      case 'RESET_REGISTER_FORM':
        return initialState;
      default:
        return state;
    }
  };
  
  export default registerReducer;
  