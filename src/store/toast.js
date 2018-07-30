const LOADING_TOAST = "LOADING_TOAST";
const SUCCESS_TOAST = "SUCCESS_TOAST";
const FAILURE_TOAST = "FAILURE_TOAST";

export function loadingToast(text = "loading") {
  return { type: LOADING_TOAST, text };
}

export function successToast(text = "success") {
  return { type: SUCCESS_TOAST, text };
}

export function failureToast(text = "failure") {
  return { type: FAILURE_TOAST, text };
}

export default function toast(state = { status: null, text: null }, action) {
  switch (action.type) {
    case LOADING_TOAST:
      return { ...state, status: "loading", text: action.text };
    case SUCCESS_TOAST:
      return { ...state, status: "success", text: action.text };
    case FAILURE_TOAST:
      return { ...state, status: "failure", text: action.text };
    default:
      return state;
  }
}
