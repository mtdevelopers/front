import CreateBox from "../../../components/settings/createbox/CreateBox";
import ColumnData from "../../../components/columndata/ColumnData";



const Customertype = (props) => {
    const listOfLocation = [{title:"نوع مشتری 1"},{title:"نوع مشتری 2"},{title:"نوع مشتری 3"},{title:"نوع مشتری 4"}];

    return(
        <>
        <div className="row row-sm">
            <div className="col-lg-4 col-md-12">
                <CreateBox title={"ایجاد نوع مشتری"} haveParent={false} />
            </div>
                
            <div className="col-lg-5">
                <ColumnData dropBtn={false}  searchTitle={"لیست انواع مشتری"} title={{titleA:"عنوان نوع مشتری",titleB:""}} listOfLocation={listOfLocation}/>
            </div>   
        <div className="col-lg-3">
            <div className="card custom-card bg-purple">
                <div className="card-body">
                    <h2 className="pb-3 text-light">راهنمای افزودن نوع مشتری</h2>
                    <p className="text-light"> در این قسمت می توانید نوع مشتری جدیدی ایجاد کرده و یا حذف به روز رسانی کنید.</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}


export default Customertype;