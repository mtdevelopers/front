import "../../../assets/scss/newStyle.scss";
import {useState} from "react";
import {GoSearch} from  "react-icons/go";
import {GrNotification} from "react-icons/gr";
import {BiMessage} from "react-icons/bi";
import {AiOutlineUser} from "react-icons/ai";
import {FiEdit} from "react-icons/fi";
import {FiSettings} from "react-icons/fi";
import {BiCompass} from "react-icons/bi";
import {BsPower} from "react-icons/bs";
import {AiOutlineOrderedList} from "react-icons/ai";
import ReactCountryFlag from "react-country-flag";
import Iranflag from "../../../assets/img/flags/french_flag.jpg";
import soniaImg from "../../../assets/img/users/1.jpg";
import {AiOutlineAlignRight} from "react-icons/ai";
import meesage1 from "../../../assets/img/users/5.jpg";
import meesage2 from "../../../assets/img/users/4.jpg";
import meesage3 from "../../../assets/img/users/3.jpg";


const Headerleft = () => {
    const [profileshow,setProfileshow] = useState(true);
    const [notificationshow,setNotificationShow] = useState(true);
    const profileShowHandler = (e) => {
        e.preventDefault();
        setProfileshow(!profileshow);
		
    }
    const notificationShowHandler = (e) => {
        e.preventDefault();
        setNotificationShow(!notificationshow);
		
    }

    return(
        <div className="main-header-right">
				<div className="dropdown header-search">
					<a className="nav-link icon header-search">
						<span><GoSearch /></span>
					</a>
					<div className="dropdown-menu">
						<div className="main-form-search p-2">
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
								<button className="btn search-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
							</div>
						</div>
					</div>
				</div>
				
				<div className={notificationshow ? "dropdown main-header-notification" : "dropdown main-header-notification show"} onClick={(event) => notificationShowHandler(event)}>
					<a className="nav-link icon" >
						<GrNotification />
						<span className="badge badge-danger nav-link-badge">4</span>
					</a>
					<div className="dropdown-menu">
						
						<div className="header-navheading">
							<p className="main-notification-text">شما 1 اعلان خوانده نشده <span className="badge badge-pill badge-primary mr-3">مشاهده همه</span></p>
						</div>
						<div className="main-notification-list">
							<div className="media new">
								<div className="main-img-user online"><img alt="آواتار" src={meesage1} /></div>
								<div className="media-body">
									<p>به <strong>اولیویا جیمز</strong> برای شروع الگوی جدید تبریک می گوییم</p><span>15 بهمن  12:32 بعد از ظهر</span>
								</div>
							</div>
							<div className="media">
								<div className="main-img-user"><img alt="آواتار" src={meesage2} /></div>
								<div className="media-body">
									<p><strong></strong>پیام جدید <strong>جوشوا گری</strong> دریافت شد</p><span>13 بهمن   02:56 صبح</span>
								</div>
							</div>
							<div className="media">
								<div className="main-img-user online"><img alt="آواتار" src={meesage3} /></div>
								<div className="media-body">
									<p><strong>الیزابت لوئیس</strong> برنامه جدیدی را به فروش مجدد اضافه کرد</p><span>12 بهمن  10:40 بعد از ظهر</span>
								</div>
							</div>
						</div>
						<div className="dropdown-footer">
							<a href="#">مشاهده همه اعلان ها</a>
						</div>
					
					</div>
				</div>
				<div className="main-header-notification">
					<a className="nav-link icon" href="chat.html">
						<BiMessage />
						<span className="badge badge-success nav-link-badge">6</span>
					</a>
				</div>
				<div className={profileshow ? "dropdown main-profile-menu" : "dropdown main-profile-menu show"} onClick={(event) => profileShowHandler(event)}>
					<a className="d-flex" >
						<span className="main-img-user"><img alt="آواتار" src={soniaImg} /></span>
					</a>
					<div className="dropdown-menu">
						<div className="header-navheading">
						<h6 className="main-notification-title">سونیا تیلور</h6>
						<p className="main-notification-text">طراح وب</p>
						</div>
						<a className="dropdown-item border-top" href="profile.html">
							<span classNameName="i"><AiOutlineUser /></span>  پروفایل من
						</a>
						<a className="dropdown-item" href="profile.html">
							<span classNameName="i"><FiEdit /></span>  ویرایش نمایه
						</a>
						<a className="dropdown-item" href="profile.html">
							<span classNameName="i"><FiSettings /></span> 
							تنظیمات حساب
						</a>
						<a className="dropdown-item" href="profile.html">
							<span classNameName="i"><AiOutlineOrderedList /></span>  پشتیبانی
						</a>
						<a className="dropdown-item" href="profile.html">
							<span classNameName="i"><BiCompass /></span>  فعالیت
						</a>
						<a className="dropdown-item" href="signin.html">
							<span classNameName="i"><BsPower /></span>  خروج از سیستم
						</a>
					</div>
				</div>
				<div className="dropdown d-md-flex header-settings">
					<a href="#" className="nav-link icon" data-toggle="sidebar-left" data-target=".sidebar-left">
						<span><AiOutlineAlignRight /></span>
					</a>
				</div>
				<button className="navbar-toggler navresponsive-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="تغییر پیمایش">
					<i className="fe fe-more-vertical header-icons navbar-toggler-icon"></i>
				</button>
			</div>
    )
}

export default Headerleft;