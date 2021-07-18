

const Checkbox = (props) => {
    return(
        <>
            <div className="row row-sm mb-1">
                <div className="col-lg-4 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>ثبت اولیه</span></label>
                </div>
                <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>در حال بررسی مشاور</span></label>
                </div>
                <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>در انتظار تایید مدیر</span></label>
                </div>
                
                
            </div>
            <div className="row row-sm mb-2">
                <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>تایید نهایی</span></label>
                </div>
                <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>در انتظار تایید حقوقی</span></label>
                </div>
                <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>بایگانی شده</span></label>
                </div>
                
            </div>
            <div className="row row-sm mb-1">
                 <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>رد شده</span></label>
                </div>
                <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>زباله </span></label>
                </div>
                <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>به اتمام رسیده</span></label>
                </div>
               
            </div>
        </>
    )
}


export default Checkbox;