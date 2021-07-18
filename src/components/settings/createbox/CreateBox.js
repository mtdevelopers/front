import { useEffect, useRef, useState } from "react";
import {IoCreateOutline} from "react-icons/io5";
import * as actionCreators  from "../../../redux/actions/index";
import {connect} from "react-redux";
import DropwdownButton from "../../button/dorpButton";
import SelectBtn from "../../button/SelectBtn";

const CreateBox = (props) => {
    const [nameinput,setNameinput] = useState("");

    useEffect(() => {
        setNameinput(props.name)
    },[props.name])
    const changeHandler = (event) => {
        setNameinput(
            event.target.value
          );
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("1")
        if(nameinput === "" || nameinput === null){
            props.showError("نام خالی است!")
        }else if(props.listIdentifier === "country"){
            const country = {name:nameinput}
            if(props.name){
                props.updateCountry(country,props.id);
                setNameinput("");
            }else{
                console.log("here")
                props.createCountry(country);
                setNameinput("");
            }
        }else if(props.listIdentifier === "state"){
            const state = {name:nameinput,country:props.parentIdentifier}
            if(props.parentIdentifier === null){
                props.showError("کشور انتخاب نشده است!");
            }else{
                if(props.name){
                    props.updateState(state,props.id);
                    setNameinput("");
                }else{
                    props.createState(state);
                    setNameinput("");
                }
            }
            
        }else if(props.listIdentifier === "city"){
            const city = {name:nameinput,state:props.parentIdentifier};
            if(props.parentIdentifier === null){
                props.showError("استان انتخاب نشده است!");
            }else{
                if(props.name){
                    props.updateCity(city,props.id);
                    setNameinput("");
                }else{
                    props.createCity(city);
                    setNameinput("");
                }
            }
        }
        
    }
    return(
        <div className="card custom-card">
                
            <div className="card-body">
                <div>
                    <h3 className="main-content-label mb-1">{props.title}</h3>
                </div>
                <div className="d-flex flex-column">
                    <div className="form-group">
                        <input className="form-control" name="country" placeholder="نام را وارد کنید" type="text" value={nameinput} onChange={changeHandler} />
                    </div>
                    <div className="row row-sm pb-2">
                        <h3 className="main-content-label mb-1">{props.selectTitle}</h3>
                    </div>
                    <div className="row row-sm">
                        {props.haveParent && <div className="pb-3">
                            {/* <DropwdownButton identifier={props.listIdentifier} color="primary" items={props.listOfParentLocation}>{props.parentLabel}</DropwdownButton> */}
                        </div>}
                        {/* <SelectBtn options={props.listOfParentLocation} /> */}
                        
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <button className="btn ripple btn-success btn-with-icon w-50 mt-5" onClick={submitHandler} >{props.name ? "به روز رسانی" : "ثبت" }<span className="mr-2"><IoCreateOutline /></span></button>
                    </div>
                </div> 
            </div>
        </div> 
    )
}


const mapStateToProps = (state) => {
    return{
        token:state.auth.token,
        name:state.country.name,
        id:state.country.id,
        error:state.country.error,
        errorBody:state.country.errorBody,
        success:state.country.success,
        alertBody:state.country.alertBody,
        parentIdentifier:state.country.parentId,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        createCountry : (obj) => dispatch(actionCreators.create_country(obj)),
        createState : (obj) => dispatch(actionCreators.create_state(obj)),
        createCity : (obj) => dispatch(actionCreators.create_city(obj)),
        showError : (msg) => dispatch(actionCreators.show_alert(msg)),
        updateCountry: (name,id) => dispatch(actionCreators.update_country_permanent(name,id)),
        updateState: (name,id) => dispatch(actionCreators.update_state_permanent(name,id)),
        updateCity: (name,id) => dispatch(actionCreators.update_city_permanent(name,id)),


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateBox);

