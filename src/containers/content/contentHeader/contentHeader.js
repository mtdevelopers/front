import "../../../assets/scss/newStyle.scss";

const ContentHeader = () => {
    return(
        <div class="page-header">
            <div>
                <h2 class="main-content-title tx-24 mg-b-5">به داشبورد خوش آمدید</h2>
                <ol class="breadcrumb">
                    {/* <li class="breadcrumb-item"><a href="#">خانه</a></li> */}
                </ol>
            </div>
            <div class="d-flex">
                <div class="justify-content-center">
                    <button type="button" class="btn btn-white btn-icon-text my-2 ml-2">
                        وارد كردن<i class="fe fe-download mr-2"></i>
                    </button>
                    <button type="button" class="btn btn-white btn-icon-text my-2 ml-2">
                        فیلتر<i class="fe fe-filter ml-2"></i>
                    </button>
                    <button type="button" class="btn btn-primary my-2 btn-icon-text">
                        گزارش را بارگیری کنید<i class="fe fe-download-cloud mr-2"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContentHeader;