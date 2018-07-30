import { connect } from "react-redux";
import Toast from "../components/Toast/index";

export const mapStateToProps = state => {
  return {
    toast: state.toast
  };
};

export default connect(mapStateToProps)(Toast);
