

const Checkbox = (props) => {
    return(
        <>
            <div className="row row-sm">
                <div className="col-lg-3">
                    <label className="ckbox"><input checked type="checkbox" /><span>خرید و فروش</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>رهن و اجاره</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                    <label className="ckbox"><input type="checkbox" /><span>پیش فروش</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>مشارکت</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>سرمایه گذاری</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>تهاتر</span></label>
                </div>
                <div className="col-lg-3 mg-t-20 mg-lg-t-0 mb-2">
                    <label className="ckbox"><input type="checkbox" /><span>معاوضه</span></label>
                </div>
            </div>
        </>
    )
}


export default Checkbox;