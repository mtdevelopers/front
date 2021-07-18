

const Checkbox = (props) => {
    return(
        <>
            <div className="row row-sm">
                <div className="col-lg-3">
                    <h6 className="main-content-label">{props.title}</h6>
                </div>
                <div className="col-lg-2">
                    <label className="ckbox"><input checked type="checkbox" /><span>مشاهده</span></label>
                </div>
                <div className="col-lg-2 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>ایجاد</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>ویرایش</span></label>
                </div>
                <div className="col-lg-2 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>حذف</span></label>
                </div>
            </div>
        </>
    )
}


export default Checkbox;