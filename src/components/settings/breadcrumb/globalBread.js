import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { useEffect, useState } from "react";
import * as actionCreators from "../../../redux/actions/index";
import Toast from "../../toast/toast";


const BreadCrumb = (props) => {
    const [activelink,setActivelink ] = useState("");
    useEffect(() => {
        setActivelink(props.activeLink)
    },[])
    useEffect(() => {
        setActivelink(props.activeLink)
    },[props.activeLink])

    const changeBreadHandler = (title) => {
        props.activateLink(title)
    } 
    
    return(
        <>
            <nav class="breadcrumbA-5">
                <div class="breadcrumbA flat">
                    {props.navArr.map((el,index) => {
                        const address = `/${el.root}/${el.secondLevel}/${el.addr}`
                        
                        const breadStyle = el.addr === activelink ? "active" : "";
                        return(
                            <Link to={address} className={breadStyle} onClick={() => changeBreadHandler(el.addr)}><span class="badge badge-light ml-3">{index+1} </span><span class="breadcrumbitem">{el.title} </span></Link>

                        )
                    })}
                   
                </div>
            </nav>
    </>
            
    )
}
const mapStateToProps = (state) => {
    return{
        activeLink:state.location.activeField,
        error:state.country.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        activateLink : (title) => dispatch(actionCreators.activate_link(title))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BreadCrumb);