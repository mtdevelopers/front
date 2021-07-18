import {Link} from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";


const BreadCrumb = (props) => {
    return(
        <>
            <nav class="breadcrumbA-5">
                <div class="breadcrumbA flat">
                    <Link to="/setting/user/buystep" class="active"><span class="badge badge-light ml-3">1 </span><span class="breadcrumbitem">مراحل خرید </span></Link>
                    <Link to="/setting/user/customertype"><span class="badge badge-light ml-3">2 </span><span class="breadcrumbitem">نوع مشتری </span></Link>
                    <Link to="/setting/user/job"><span class="badge badge-light ml-3">3 </span><span class="breadcrumbitem">شغل </span></Link>
                </div>
            </nav>
        </>
    )
}


export default BreadCrumb;