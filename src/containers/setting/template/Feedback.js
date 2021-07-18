import CreateBox from "../../../components/settings/createbox/CreateBox";
import ColumnData from "../../../components/columndata/ColumnData";



const Customertype = (props) => {
    const listOfLocation = [{title:"دلایل رد 1"},{title:"دلایل رد 2"},{title:"دلایل رد 3"},{title:"دلایل رد 4"}];

    return(
        <>
        <div className="row row-sm">
            <div className="col-lg-4 col-md-12">
                <CreateBox title={"ایجاد دلایل رد"} haveParent={false} />
            </div>
            <div className="col-lg-5">
                <ColumnData dropBtn={false}  searchTitle={"لیست انواع دلایل رد"} title={{titleA:"عنوان دلایل رد",titleB:""}} listOfLocation={listOfLocation}/>
            </div>   
        <div className="col-lg-3">
            <div className="card custom-card bg-purple">
                <div className="card-body">
                    <h2 className="pb-3 text-light">راهنمای افزودن دلایل رد</h2>
                    <p className="text-light"> در این قسمت می توانید دلایل رد جدیدی ایجاد کرده و یا حذف به روز رسانی کنید.</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}


export default Customertype;