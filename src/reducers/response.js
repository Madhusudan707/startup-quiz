export const initialState={
    data:[],
    loading:true,
    error:""
}

export const responseReducer = (state,action)=>{
    switch(action.type){
        case "ON_CHANGE":
            return {
              loading: false,
            //   data: [...data,{state:action.payload}],
            ...state,
            data: [...state.data, action.payload],
              error: "",
            };
          case "ON_FAILURE":
            return {
              loading: false,
              data: [],
              error: "Unable to Record your response, Try again",
            };

          default:
            return state;
        }
    
}