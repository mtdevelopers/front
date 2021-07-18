import { useEffect, useRef, useState } from "react";
import {IoCreateOutline} from "react-icons/io5";
import * as actionCreators  from "../../../redux/actions/index";
import {connect} from "react-redux";
import DropwdownButton from "../../button/createDorpButton";
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
        if(nameinput === "" || nameinput === null){
            props.set_error({message:"نام خالی است!"})
        }else if(props.listIdentifier === "area"){
            const area = {name:nameinput,city:props.parentIdentifier};
            if(props.parentIdentifier === null){
                props.set_error({message:"شهر انتخاب نشده است!"});
            }else{
                if(props.name){
                    console.log(area,props.id)
                    props.updateArea(area,props.id);
                    setNameinput("");
                }else{
                    props.createArea(area);
                    setNameinput("");
                }
            }
        }
        
    }
    console.log(props.name)
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
                            <DropwdownButton identifier={props.listIdentifier} color="primary" items={props.listOfParentLocation}>{props.parentLabel}</DropwdownButton>
                        </div>}
                        {/* <SelectBtn options={props.listOfParentLocation} /> */}
                        
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <button className="btn ripple btn-success btn-with-icon w-50 mt-5" onClick={submitHandler} >{props.name  ? "ویرایش" : "ثبت" }<span className="mr-2"><IoCreateOutline /></span></button>
                    </div>
                </div> 
            </div>
        </div> 
    )
}


const mapStateToProps = (state) => {
    return{
        name:state.subLocation.name,
        id:state.subLocation.id,
        parentIdentifier:state.country.parentId,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        
        createArea : (obj) => dispatch(actionCreators.create_area(obj)),
        set_error : (msg) => dispatch(actionCreators.set_error(msg)),
        
        updateArea: (object,id) => dispatch(actionCreators.update_area_permanent(object,id)),


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateBox);

