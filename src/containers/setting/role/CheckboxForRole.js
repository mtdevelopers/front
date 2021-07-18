

const Checkbox = (props) => {
    return(
        <>
            <div className="row row-sm mb-1">
                <div className="col-lg-3 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>مشاور</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>مدیر فروش</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>حقوقی</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>قرارداد</span></label>
                </div>
                
            </div>
            <div className="row row-sm mb-2">
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>معاون</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>مدیر انفورماتیک</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>مدیرعامل</span></label>
                </div>
                
            </div>
            
        </>
    )
}


export default Checkbox;