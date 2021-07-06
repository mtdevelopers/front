import "../../../assets/scss/newStyle.scss";
import { connect } from "react-redux";
import * as actionCreators from "../../../redux/actions/index";


const HeaderRight = (props) => {
   

    return(
        <div className="main-header-right" onClick={props.showSidebar}>
            <a className="main-header-menu-icon" id="mainSidebarToggle">
                <span></span>
            </a>
        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        uiState:state.ui
    }
};
  const mapDispatchToProps =(dispatch) => {
    return{
        showSidebar: () =>  dispatch(actionCreators.show_sidebar()),
      }
};
export default connect(mapStateToProps,mapDispatchToProps)(HeaderRight);
