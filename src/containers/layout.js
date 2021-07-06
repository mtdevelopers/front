import Sidemenu from "../components/sideMenu/sideMenu";
import Header from "../components/header/header";
import Content from "../containers/content/content";
import Footer from "../components/footer/footer";
import "../assets/scss/newStyle.scss";
import {connect} from "react-redux";
import * as actionCreators from "../redux/actions/index";


const Layout = (props) => {
    return(
        <div className={props.uiState.sidebar ? "main-body leftmenu" : "main-body leftmenu main-sidebar-hide"} style={{"marginBottom":"-64px"}}>
            <div className="page">
                <Sidemenu />
                <Header />
                <Content />
                <Footer />

            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      uiState: state.ui,
    };
};
  const mapDispatchToProps =(dispatch) => {
    return{
      layoutSelector: () => dispatch(actionCreators.show_sidebar())
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Layout);

