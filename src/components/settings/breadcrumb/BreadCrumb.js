import {Link} from "react-router-dom";


const BreadCrumb = (props) => {
    
    return(
            <nav class="breadcrumbA-5">
                <div class="breadcrumbA flat">
                    <Link to="/setting/location/country" class="active"><span class="badge badge-light ml-3">1 </span><span class="breadcrumbitem">کشور </span></Link>
                    <Link to="/setting/location/state"><span class="badge badge-light ml-3">2 </span><span class="breadcrumbitem">استان </span></Link>
                    <Link to="/setting/location/city"><span class="badge badge-light ml-3">3 </span><span class="breadcrumbitem">شهر </span></Link>
                    <Link to="/setting/location/branch"><span class="badge badge-light ml-3">4 </span><span class="breadcrumbitem">شعبه</span></Link>
                </div>
            </nav>
            
    )
}


export default BreadCrumb;