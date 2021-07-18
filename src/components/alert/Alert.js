import { connect } from "react-redux"


const Alert = (props) => {
    let style = props.alertType === "danger" ? "alert alert-danger mg-b-0" : "alert alert-success mg-b-0";
    
    return(
        <div className={style} role="alert">
            <button aria-label="بستن" class="close" type="button" >
                <span aria-hidden="true">×</span>
            </button>
            <strong>{props.alertTitle} ! </strong>{props.alertDescription}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Alert);