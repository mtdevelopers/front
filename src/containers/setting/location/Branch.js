import CreateBox from "../../../components/settings/createbox/CreateBox";
import ColumnData from "../../../components/columndata/ColumnData";



const Branch = (props) => {
    const listOfLocation = [{title:"کسری"},{title:"باغلارباغی"},{title:"غرب"},{title:"شرق"}];
    const listOfParentLocation = [{title:"تبریز"},{title:"بناب"},{title:"آذرشهر"},{title:"شبستر"},{title:"بستان آباد"}];

    return(
        <>
        <div className="row row-sm">
            <div className="col-lg-4 col-md-12">
                 <CreateBox listOfParentLocation={listOfParentLocation} title={"ایجاد شعبه"} haveParent={true} parentLabel={"شهر مربوطه"}/>
            </div>
            <div className="col-lg-5">
                <ColumnData dropBtn={true} dropTitle={"شهر"} searchList={["تبریز","تهران","اصفهان"]} searchTitle={"لیست شهر ها"} title={{titleA:"عنوان شعبه",titleB:"شهر مربوطه"}} listOfLocation={listOfLocation}/>
            </div>   
        <div className="col-lg-3">
            <div className="card custom-card bg-purple">
                <div className="card-body">
                    <h1 className="pb-3 text-light">راهنمای افزودن شعبه</h1>
                    <p className="text-light"> در این قسمت می توانید شعبه جدیدی ایجاد کرده و به شهر مربوطه متصل نمایید همچنین می توانید شعبه ی را حذف یا به روز رسانی کنید.</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}


export default Branch;