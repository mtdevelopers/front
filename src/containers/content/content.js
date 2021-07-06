import ContentHeader from "./contentHeader/contentHeader";
import SearchPanel from "../../components/searchPanel/SearchPanel";
import "../../assets/scss/newStyle.scss";

const Content = () => {
    return(
        <>
        <div class="main-content side-content">
            <div class="container-fluid">
                <div class="inner-body">
                    <ContentHeader />
                    <div class="row row-sm">
                        <SearchPanel />

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Content;