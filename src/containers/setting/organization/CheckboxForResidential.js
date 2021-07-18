

const Checkbox = (props) => {
    return(
        <>
            <div className="row row-sm">
                <div className="col-lg-3">
                    <label className="ckbox"><input checked type="checkbox" /><span>آپارتمان</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>حیاط ویلایی</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>ساختمان</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span className="">زمین یا ملک کلنگی</span></label>
                </div>
                
            
            </div>
        </>
    )
}


export default Checkbox;