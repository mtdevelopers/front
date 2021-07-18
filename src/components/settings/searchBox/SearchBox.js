import {BsSearch} from "react-icons/bs";

const SearchBox = (props) => {
    return(
        <div className="card custom-card">
            <div className="card-body">
            <div>
                <h6 className="main-content-label mb-1">جستجو مناطق</h6>
            </div>
            <div className="d-flex flex-column">
                <div className="input-group">
                    <input className="form-control" placeholder="جستجوی منطقه ی  ..." type="text" />
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
    </div>  
    )
}

export default SearchBox;