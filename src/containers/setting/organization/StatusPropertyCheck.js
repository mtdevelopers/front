

const Checkbox = (props) => {
    return(
        <>
            <div className="row row-sm">
                <div className="col-lg-3">
                    <label className="ckbox"><input checked type="checkbox" /><span>مسکونی</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>تجاری-خدماتی</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>باغ-ویلا</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>صنعتی-کشاورزی</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>دامپروری</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>تجاری-مسکونی</span></label>
                </div>
            
            </div>
        </>
    )
}


export default Checkbox;