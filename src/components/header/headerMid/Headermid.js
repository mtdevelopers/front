import "../../../assets/scss/newStyle.scss";
import {GoSearch} from  "react-icons/go";


const mainHeaderCenter = () => {
    return(
        <div className="main-header-center">
				<div className="responsive-logo">
					<a href="index.html"><img src="assets/img/brand/logo.png" className="mobile-logo" alt="لوگو" /> </a>
					<a href="index.html"><img src="assets/img/brand/logo-light.png" className="mobile-logo-dark" alt="لوگو" /></a>
				</div>
				<div className="input-group">
					<div className="input-group-btn search-panel">
						<select className="form-control select2-no-search">
							<option label="دسته بندی ها">
							</option>
							<option value="IT Projects">
								پروژه های IT
							</option>
							<option value="Business Case">
								مورد تجاری
							</option>
							<option value="Microsoft Project">
								پروژه مایکروسافت
							</option>
							<option value="Risk Management">
								مدیریت ریسک
							</option>
							<option value="Team Building">
								تیم سازی
							</option>
						</select>
					</div>
					<input type="search" className="form-control" placeholder="هر چیزی را جستجو کنید ..." />
					<button className="btn search-btn"><span style={{"color":"#fff"}}><GoSearch /></span></button>
				</div>
			</div>
    )
}


export default mainHeaderCenter;