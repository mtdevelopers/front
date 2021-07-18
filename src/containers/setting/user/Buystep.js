import CreateBox from "../../../components/settings/createbox/CreateBox";
import ColumnData from "../../../components/columndata/ColumnData";



const Buystep = (props) => {
    const listOfLocation = [{title:"مرحله خرید 1"},{title:"مرحله خرید 2"},{title:"مرحله خرید 3"},{title:"مرحله خرید 4"}];

    return(
        <>
        <div className="row row-sm">
            <div className="col-lg-4 col-md-12">
                 <CreateBox title={"ایجاد مرحله خرید"} haveParent={false} />
                </div>                
            <div className="col-lg-5">
                <ColumnData dropBtn={false}  searchTitle={"لیست مراحل خرید"} title={{titleA:"عنوان مرحله خرید",titleB:""}} listOfLocation={listOfLocation}/>
            </div>   
        <div className="col-lg-3">
            <div className="card custom-card bg-purple">
                <div className="card-body">
                    <h2 className="pb-3 text-light">راهنمای افزودن مرحله خرید</h2>
                    <p className="text-light"> در این قسمت می توانید مرحله خرید جدیدی ایجاد کرده و یا حذف به روز رسانی کنید.</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}


export default Buystep;