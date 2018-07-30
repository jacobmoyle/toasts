import { connect } from "react-redux";
import Toast from "../components/Toast/index";
import { hideToast } from "../store/toast";

export const mapStateToProps = state => {
  return {
    toast: state.toast
  };
};
const mapDispatchToProps = dispatch => {
  return {
    close: () => {
      dispatch(hideToast());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toast);
