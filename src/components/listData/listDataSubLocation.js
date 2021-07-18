import "../../assets/scss/color.scss";
import DropdownButton from "../button/button";
import SeachDrop from "../button/SearchDrop";
import { BsSearch } from "react-icons/bs";
import { IoDocuments } from "react-icons/io5";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/index";
import { useState } from "react";
import {BiRefresh} from "react-icons/bi";

const ListData = (props) => {
    const [searchinput, setSearchinput] = useState("");

    const searchInputChangeHandler = (event) => {
        setSearchinput(event.target.value);
    }

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if(props.listIdentifier === "area"){
            if(searchinput === ""){
                props.showError("فیلد جستجو خالی است!")
            }else{
                props.searchArea(searchinput,props.parentId);
                setSearchinput("");
            }
        }
        
    }
    const deleteHandler = (e,id) => {
        e.preventDefault();
        if(props.listIdentifier === "area"){
            props.deleteArea(id);
        }else if(props.listIdentifier === "state"){
            props.deleteState(id);
        }else if(props.listIdentifier === "city"){
            props.deleteCity(id);
        }else{
            props.showError("عملیات حذف با خطا مواجه شده است!")
        }
    }
    const updateHandler = (e,id,name) => {
        e.preventDefault();
        if(props.listIdentifier === "area"){
            props.updateArea(id,name);
        }else{
            props.showError("عملیات حذف با خطا مواجه شده است!")
        }
    }
/////////////////////////////////////////////////////////////
    const refreshList = (e) => {
        e.preventDefault();
        if(props.listIdentifier === "area"){
            props.clearListArea();
            props.getAreaList();
        }
    }
    
    return(
        <div className="card custom-card">
            <div className="card-body pb-0">
                
                <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                    <div className="d-flex align-items-center">
                        {props.dropBtn && 
                        <>
                            <h6 className="main-content-label pl-5 pt-2">فیلتر بر اساس</h6>
                            <SeachDrop className="pm-2" color="primary" identifier={props.listIdentifier} items={props.parentLocation}>
                            </SeachDrop>
                        </>
                        }
                    </div>
                    <div className="d-flex flex-column">
                        <div className="input-group">
                            <input className="form-control" placeholder="جستجوی ..." onChange={searchInputChangeHandler} value={searchinput} type="text" />
                            <span className="input-group-btn">
                                <button className="btn ripple btn-primary" type="button" onClick={searchSubmitHandler}>
                                    <span className="input-group-btn">
                                        <BsSearch />    
                                    </span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                
                
                <div className="table-responsive">
                    <div className="d-flex justify-content-between pt-2">
                        <h6 className="main-content-label pl-2 pt-2">{props.searchTitle}</h6>
                        <button className="btn btn-secondary" onClick={refreshList}><BiRefresh /></button>
                        
                    </div>
                    <table id="example3" className="table table-striped table-bordered text-nowrap">
                        <thead>
                            <tr>
                                <th className="pr-5">{props.title.titleA}</th>
                                <th className="pr-5">{props.title.titleB}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.child.map(el => {
                                let elementParentName = ""
                                if(props.listIdentifier !== "country"){
                                    
                                    elementParentName = props.parentLocation.filter(item => item._id === el[props.parentName])[0];
                                    if(elementParentName){
                                        elementParentName = elementParentName.name;
                                    }else{
                                        elementParentName = ""
                                    }
                                }
                                return(
                                    <tr key={el._id}>
                                        <td className="pr-5">{el.name}</td>
                                        <td>{elementParentName}</td>
                                        <td><DropdownButton deleteHandler={(event) => deleteHandler(event,el.id)} updateHandler={(event) => updateHandler(event,el._id,el.name)} color="primary" items={[{title:"حذف"},{title:"ویرایش"}]}>عملیات</DropdownButton></td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="d-flex justify-content-end pb-3 px-5" >
                <div className="input-group w-25">
                    <input className="form-control" placeholder="5" type="number" />
                    <span className="input-group-btn">
                        <button className="btn ripple btn-primary" type="button">
                            <span className="input-group-btn">
                                <IoDocuments />    
                            </span>
                        </button>
                    </span>
                </div>
            </div>

        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        name:state.country.name,
        error:state.country.error,
        searchId:state.subLocation.searchId,
        parentId:state.subLocation.parentId,
        parent:state.country.parentId

        
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        clearListArea : () => dispatch(actionCreators.clear_list_area()),
        
        getAreaList : () => dispatch(actionCreators.get_area_list()),
        
        deleteArea : (id) => dispatch(actionCreators.delete_area(id)),

        updateArea : (id,name) => dispatch(actionCreators.update_area(id,name)),
        
        searchArea : (name,id) => dispatch(actionCreators.search_area(name,id)),
        
        showError : (msg) => dispatch(actionCreators.show_alert(msg)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListData);