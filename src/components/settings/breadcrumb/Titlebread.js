import {Link} from "react-router-dom";


const TitlebreadCrumb = (props) => {
    
    return(
            <nav class="breadcrumbA">
                <ol class="breadcrumbA breadcrumbA-style1 mg-b-0">
                    <li class="breadcrumbA-item">
                        <Link to="#">تنظیمات</Link>
                    </li>
                    <li class="breadcrumbA-item">
                        <Link to="#">شهر و استان</Link>
                    </li>
                </ol>
            </nav>
            
    )
}


export default TitlebreadCrumb;