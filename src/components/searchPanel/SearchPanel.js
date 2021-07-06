import "../../assets/scss/newStyle.scss";

const SearchPanel = () => {
    return(
        <div className="col-lg-3 col-md-8">
            <div className="card custom-card">
                <div className="card-body">
                    <div>
                        <h6 className="main-content-label mb-1">جستجو</h6>
                        <p className="text-muted card-sub-title">اطلاعات ملک مورد نظر را وارد نمایید!</p>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="form-group">
                            <input className="form-control" placeholder="نام کاربری خود را وارد کنید" type="text" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="ایمیل خود را وارد کنید" type="email" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="رمز ورود خود را وارد کنید" type="password" />
                        </div>
                        <div className="form-group">
                            <label className="ckbox">
                                <input type="checkbox" /><span className="tx-13">فبلد</span>
                            </label>
                        </div>
                        <div className="form-group">
                        <p className="mg-b-10">فیلد</p>
                            <select className="form-control">
                                <option value="Firefox">
                                    فایرفاکس
                                </option>
                                <option value="Chrome">
                                    کروم
                                </option>
                                <option value="Safari">
                                    سافاری
                                </option>
                                <option value="Opera">
                                    اپرا
                                </option>
                                <option value="Internet Explorer">
                                    اینترنت اکسپلورر
                                </option>
                            </select>
                        </div>
                        {/* <div className="row row-sm">
                            <div className="col-lg-4">
                                
                            </div>
                            <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                                <p className="mg-b-10">انتخاب چندگانه با ورودی از پیش پر شده</p>
                                <select className="form-control select2" multiple="multiple">
                                    <option selected="" value="Firefox">
                                        فایرفاکس
                                    </option>
                                    <option value="Chrome">
                                        کروم
                                    </option>
                                    <option value="Safari">
                                        سافاری
                                    </option>
                                    <option value="Opera">
                                        اپرا
                                    </option>
                                    <option value="Internet Explorer">
                                        اینترنت اکسپلورر
                                    </option>
                                </select>
                            </div>
                            <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                                <p className="mg-b-10">انتخاب چندگانه (غیرفعال)</p>
                                <select className="form-control select2-no-search" disabled="" multiple="multiple">
                                    <option selected="" value="Firefox">
                                        فایرفاکس
                                    </option>
                                    <option value="Chrome">
                                        کروم
                                    </option>
                                    <option value="Safari">
                                        سافاری
                                    </option>
                                    <option value="Opera">
                                        اپرا
                                    </option>
                                    <option value="Internet Explorer">
                                        اینترنت اکسپلورر
                                    </option>
                                </select>
                            </div>
                        </div> */}
                        <button className="btn ripple btn-main-primary">ارسال</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SearchPanel;