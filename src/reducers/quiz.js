export const initialState = {
    data: [],
    loading: true,
    error: "",
  };
  
  export const quizReducer = (state, action) => {
    switch (action.type) {
      case "ON_SUCCESS":
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case "ON_FAILURE":
        return {
          loading: false,
          data: [],
          error: "Unable to Load Quiz, Try after sometime",
        };
  
      case "LOAD_QUIZ":
        return {
          loading: false,
          data: action.payload,
        };

      default:
        return state;
    }
  };
  