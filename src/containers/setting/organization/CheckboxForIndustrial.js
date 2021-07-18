

const Checkbox = (props) => {
    return(
        <>
            <div className="row row-sm">
                <div className="col-lg-3">
                    <label className="ckbox"><input checked type="checkbox" /><span>دامپروری</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>کارگاهی</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>کارخانه</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>سوله</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>سردخانه</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>گلخانه</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>زمین کشاورزی</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>زمین صنعتی</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>زمین دام و طیور</span></label>
                </div>
            
            </div>
        </>
    )
}


export default Checkbox;