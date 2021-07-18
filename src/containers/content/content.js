import ContentHeader from "./contentHeader/contentHeader";
import SearchPanel from "../../components/searchPanel/SearchPanel";
import "../../assets/scss/newStyle.scss";

const Content = () => {
    return(
        <>
        <div className="main-content side-content">
            <div className="container-fluid">
                <div className="inner-body">
                    <ContentHeader />
                    <div className="row row-sm">
                        {/* <SearchPanel /> */}

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Content;