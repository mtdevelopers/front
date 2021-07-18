import CreateBox from "../../../components/settings/createbox/CreateBox";
import ColumnData from "../../../components/columndata/ColumnData";

const Area = (props) => {
    const listOfLocation = [{title:"باغلارباغی"},{title:"کسری"},{title:"غرب تبریز"},{title:"شرق تبریز"}];
    const listOfParentLocation = [{title:"تبریز"},{title:"بناب"},{title:"آذرشهر"},{title:"شبستر"},{title:"بستان آباد"}];

    return(
        <>
        <div className="row row-sm">
            <div className="col-lg-4 col-md-12">
                 <CreateBox listOfParentLocation={listOfParentLocation} title={"ایجاد شعبه"} haveParent={true} parentLabel={"شهر مربوطه"}/>
            </div>
            <div className="col-lg-5">
                <ColumnData dropBtn={true} dropTitle={"شهر"} searchList={["بناب","تبریز","آذرشهر"]} searchTitle={"لیست شعب"} title={{titleA:"عنوان شعبه",titleB:"شهر مربوطه"}} listOfLocation={listOfLocation}/>
            </div>   
        <div className="col-lg-3">
            <div className="card custom-card bg-warning">
                <div className="card-body">
                    <span className="pb-3 font-weight-bold text-white">راهنمای افزودن شعبه</span>
                    <p className="mt-3 text-gray-800"> در این قسمت می توانید شعبه جدیدی ایجاد کرده و به شهر مربوطه متصل نمایید همچنین می توانید شعبه ای را حذف یا به روز رسانی کنید.</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default Area;