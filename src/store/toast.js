const LOADING_TOAST = "LOADING_TOAST";
const SUCCESS_TOAST = "SUCCESS_TOAST";
const FAILURE_TOAST = "FAILURE_TOAST";
const HIDE_TOAST = "HIDE_TOAST";

// export const showToast = toast => ({
//   type: LOADING_TOAST,
//   text: toast.text
// });

// TODO: Use an Actionlistener?

const initialState = {
  status: null
};

export function hideToast() {
  return {
    type: HIDE_TOAST
  };
}

// TODO: Break out status?
export default function toast(state = initialState, action) {
  switch (action.type) {
    case LOADING_TOAST:
      return { ...state, status: "loading" };
    case SUCCESS_TOAST:
      return { ...state, status: "success" };
    case FAILURE_TOAST:
      return { ...state, status: "failure" };
    case HIDE_TOAST:
      return { ...state, status: null };
    default:
      return state;
  }
}
