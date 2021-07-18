

const Checkbox = (props) => {
    return(
        <>
            <div className="row row-sm">
                <div className="col-lg-3">
                    <label className="ckbox"><input checked type="checkbox" /><span>ویلا</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>باغ</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>زمین ویلایی</span></label>
                </div>
            
            </div>
        </>
    )
}


export default Checkbox;