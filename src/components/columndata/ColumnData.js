import DropdownButton from "../button/button";
import {BsSearch} from "react-icons/bs";
import {IoDocuments} from "react-icons/io5";


const ListData = (props) => {
    return(
        <div className="col-lg-5 col-md-12">
        <div className="card custom-card">
            <div className="card-body pb-0">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                        <h6 className="main-content-label mb-1 ml-3">{props.searchTitle}</h6>
                        {props.dropBtn && 
                        <DropdownButton color="info" items={props.searchList}>
                        {props.dropTitle}
                        </DropdownButton>
                        }
                    </div>
                    
                    <div className="d-flex flex-column">
                        <div className="input-group">
                            <input className="form-control" placeholder="جستجوی   ..." type="text" />
                            <span className="input-group-btn">
                                <button className="btn ripple btn-primary" type="button">
                                    <span className="input-group-btn">
                                        <BsSearch />    
                                    </span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                
                
                <div className="table-responsive">
                    <table id="example3" className="table table-striped table-bordered text-nowrap">
                        <thead>
                        <tr>
                            <th>{props.title.titleA}</th>
                            <th>{props.title.titleB}</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {props.listOfLocation.map(el => {
                                return(
                                    <tr>
                                    <td>{el.title}</td>
                                    <td></td>
                                    <td><DropdownButton color="primary" items={["به روز رسانی","حذف"]}>عملیات</DropdownButton></td>
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
    </div>
    )
}


export default ListData;