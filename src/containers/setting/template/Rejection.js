import CreateBox from "../../../components/settings/createbox/CreateBox";
import ColumnData from "../../../components/columndata/ColumnData";
// import axios from "axios";


const Customertype = (props) => {
    const listOfLocation = [{title:"بازخورد 1"},{title:"بازخورد 2"},{title:"بازخورد 3"},{title:"بازخورد 4"}];

    return(
        <>
        <div className="row row-sm">
            <div className="col-lg-4 col-md-12">
                <CreateBox title={"ایجاد بازخورد"} haveParent={false} />
            </div>
               
            <div className="col-lg-5">
                <ColumnData dropBtn={false}  searchTitle={"لیست انواع بازخورد"} title={{titleA:"عنوان بازخورد",titleB:""}} listOfLocation={listOfLocation}/>
            </div>   
        <div className="col-lg-3">
            <div className="card custom-card bg-purple">
                <div className="card-body">
                    <h2 className="pb-3 text-light">راهنمای افزودن بازخورد</h2>
                    <p className="text-light"> در این قسمت می توانید بازخورد جدیدی ایجاد کرده و یا حذف به روز رسانی کنید.</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}


export default Customertype;