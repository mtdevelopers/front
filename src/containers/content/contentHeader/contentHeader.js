import "../../../assets/scss/newStyle.scss";

const ContentHeader = () => {
    return(
        <div className="page-header">
            <div>
                <h2 className="main-content-title tx-24 mg-b-5">به داشبورد خوش آمدید</h2>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">خانه</a></li>
                </ol>
            </div>
            <div className="d-flex">
                <div className="justify-content-center">
                    <button type="button" className="btn btn-white btn-icon-text my-2 ml-2">
                        وارد كردن<i className="fe fe-download mr-2"></i>
                    </button>
                    <button type="button" className="btn btn-white btn-icon-text my-2 ml-2">
                        فیلتر<i className="fe fe-filter ml-2"></i>
                    </button>
                    <button type="button" className="btn btn-primary my-2 btn-icon-text">
                        گزارش را بارگیری کنید<i className="fe fe-download-cloud mr-2"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContentHeader;