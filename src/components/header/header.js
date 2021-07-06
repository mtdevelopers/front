import "../../assets/scss/newStyle.scss";
import HeaderRight from "./headerRight/Headerright";
import HeaderLeft from "./headerLeft/Headerleft";
import HeaderMid from "./headerMid/Headermid";



const Header = () => {
    return(
        <div className="main-header side-header sticky">
            <div className="container-fluid">
                <HeaderRight />
                <HeaderMid />
                <HeaderLeft />
            </div>
            
        </div>
    )
}


export default Header;