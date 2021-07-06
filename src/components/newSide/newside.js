import "../../assets/scss/style.scss";

const Newside = () =>{
    return(
        <div class="main-sidebar main-sidebar-sticky side-menu">
		<div class="sidemenu-logo">
			<a class="main-logo" href="index.html">
				<img src="assets/img/brand/logo-light.png" class="header-brand-img desktop-logo" alt="لوگو" />
				<img src="assets/img/brand/icon-light.png" class="header-brand-img icon-logo" alt="لوگو" />
				<img src="assets/img/brand/logo.png" class="header-brand-img desktop-logo theme-logo" alt="لوگو" />
				<img src="assets/img/brand/icon.png" class="header-brand-img icon-logo theme-logo" alt="لوگو" />
			</a>
		</div>
		<div class="main-sidebar-body">
			<ul class="nav">
				<li class="nav-header"><span class="nav-label">داشبورد</span></li>
				<li class="nav-item">
					<a class="nav-link" href="index.html"><span class="shape1"></span><span class="shape2"></span><i class="ti-home sidemenu-icon"></i><span class="sidemenu-label">داشبورد</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link with-sub" href="#"><span class="shape1"></span><span class="shape2"></span><i class="ti-wallet sidemenu-icon"></i><span class="sidemenu-label">ارزهای رمزنگاری شده</span><i class="angle fe fe-chevron-left"></i></a>
					<ul class="nav-sub">
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="cryptodashbaord.html">داشبورد</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="cryptomarket.html">سرپوش بازار</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="cryptocurrencyexchange.html">تبدیل ارز</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="cryptobuysell.html">خرید فروش</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="cryptowallet.html">کیف پول</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="cryptotranscations.html">معاملات</a>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link with-sub" href="#"><span class="shape1"></span><span class="shape2"></span><i class="ti-shopping-cart-full sidemenu-icon"></i><span class="sidemenu-label">تجارت الکترونیک</span><i class="angle fe fe-chevron-left"></i></a>
					<ul class="nav-sub">
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="ecommercedashboard.html">داشبورد</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="ecommerceproducts.html">محصولات</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="ecommerceproductdetails.html">جزییات محصول</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="ecommercecart.html">سبد خرید</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="ecommercecheckout.html">پرداخت</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="ecommerceorders.html">سفارشات</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="ecommerceaccount.html">حساب</a>
						</li>
					</ul>
				</li>
				<li class="nav-header"><span class="nav-label">برنامه های کاربردی</span></li>
				<li class="nav-item">
					<a class="nav-link" href="widgets.html"><span class="shape1"></span><span class="shape2"></span><i class="ti-server sidemenu-icon"></i><span class="sidemenu-label">ابزارک ها</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link with-sub" href="#"><span class="shape1"></span><span class="shape2"></span><i class="ti-email sidemenu-icon"></i><span class="sidemenu-label">نامه </span><span class="badge badge-warning side-badge">2</span></a>
					<ul class="nav-sub">
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="mailinbox.html">صندوق پستی</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="viewmail.html">مشاهده نامه</a>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link with-sub" href="#"><span class="shape1"></span><span class="shape2"></span><i class="ti-write sidemenu-icon"></i><span class="sidemenu-label">برنامه ها</span><i class="angle fe fe-chevron-left"></i></a>
					<ul class="nav-sub">
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="chat.html">گپ زدن</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="cards.html">کارتها</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="calendar.html">تقویم</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="contacts.html">مخاطب</a>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link with-sub" href="#"><span class="shape1"></span><span class="shape2"></span><i class="ti-face-smile sidemenu-icon"></i><span class="sidemenu-label">نمادها</span><i class="angle fe fe-chevron-left"></i></a>
					<ul class="nav-sub">
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="icons01.html">قلم عالی</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="icons02.html">نمادهای طراحی مواد</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="icons03.html">نمادهای خط ساده</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="icons04.html">نمادهای پر</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="icons05.html">نمادهای یونی</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="icons06.html">نمادهای پرچم</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="icons07.html">نمادهای Pe7</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="icons08.html">نمادها را اصلاح کنید</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="icons09.html">نمادها</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="icons10.html">نمادهای آب و هوا</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="icons11.html">نمادهای متریال</a>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link with-sub" href="#"><span class="shape1"></span><span class="shape2"></span><i class="ti-map-alt sidemenu-icon"></i><span class="sidemenu-label">نقشه ها </span><span class="badge badge-secondary side-badge">2</span></a>
					<ul class="nav-sub">
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="mapmapel.html">نقشه های Mapel</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="mapvector.html">نقشه برداری</a>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link with-sub" href="#"><span class="shape1"></span><span class="shape2"></span><i class="ti-agenda sidemenu-icon"></i><span class="sidemenu-label">جداول</span><i class="angle fe fe-chevron-left"></i></a>
					<ul class="nav-sub">
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="tablebasic.html">جداول اساسی</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="tabledata.html">جداول داده</a>
						</li>
					</ul>
				</li>
				<li class="nav-header"><span class="nav-label">اجزاء</span></li>
				<li class="nav-item">
					<a class="nav-link with-sub" href="#"><span class="shape1"></span><span class="shape2"></span><i class="ti-package sidemenu-icon"></i><span class="sidemenu-label">عناصر</span><i class="angle fe fe-chevron-left"></i></a>
					<ul class="nav-sub">
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="alerts.html">هشدارها</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="avatar.html">آواتار</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="breadcrumbs.html">پودرهای سوخاری</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="buttons.html">دکمه ها</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="badge.html">نشان</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="dropdown.html">کشویی</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="thumbnails.html">عکسهای کوچک</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="listgroup.html">گروه لیست</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="navigation.html">جهت یابی</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="pagination.html">صفحه بندی</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="popover.html">پوپاور</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="progress.html">پیش رفتن</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="spinners.html">چرخنده</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="mediaobject.html">شی رسانه</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="typography.html">تایپوگرافی</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="tooltip.html">راهنمایی</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="toast.html">نان تست</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="tags.html">برچسب ها</a>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link with-sub" href="#"><span class="shape1"></span><span class="shape2"></span><i class="ti-briefcase sidemenu-icon"></i><span class="sidemenu-label">رابط کاربری پیشرفته</span><i class="angle fe fe-chevron-left"></i></a>
					<ul class="nav-sub">
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="accordion.html">آکاردئون</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="carousel.html">چرخ فلک</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="collapse.html">سقوط - فروپاشی</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="modals.html">مدالها</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="timeline.html">جدول زمانی</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="darggablecard.html">کارتهای خسته کننده</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="sweetalert.html">هشدار شیرین</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="rating.html">رتبه بندی</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="search.html">جستجو کردن</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="userlist.html">فهرست کاربران</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="blog.html">وبلاگ</a>
						</li>
					</ul>
				</li>
				<li class="nav-header"><span class="nav-label">فرم ها و نمودارها</span></li>
				<li class="nav-item">
					<a class="nav-link with-sub" href="#"><span class="shape1"></span><span class="shape2"></span><i class="ti-receipt sidemenu-icon"></i><span class="sidemenu-label">فرم </span><span class="badge badge-info side-badge">6</span></a>
					<ul class="nav-sub">
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="formelements.html">عناصر فرم</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="formadvanced.html">فرم های پیشرفته</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="formlayouts.html">طرح بندی فرم ها</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="formvalidation.html">اعتبار سنجی فرم</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="formwizards.html">جادوگران را تشکیل دهید</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="formeditor.html">ویرایشگر WYSIWYG</a>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link with-sub" href="#"><span class="shape1"></span><span class="shape2"></span><i class="ti-bar-chart-alt sidemenu-icon"></i><span class="sidemenu-label">نمودارها </span><span class="badge badge-danger side-badge">5</span></a>
					<ul class="nav-sub">
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="chartmorris.html">نمودارهای موریس</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="chartflot.html">نمودارهای فلوت</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="chartchartjs.html">نمودار JS</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="chartsparkpeity.html">اسپارکلاین</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="chartechart.html">ایچارت</a>
						</li>
					</ul>
				</li>
				<li class="nav-header"><span class="nav-label">سایر صفحات</span></li>
				<li class="nav-item">
					<a class="nav-link with-sub" href="#"><span class="shape1"></span><span class="shape2"></span><i class="ti-palette sidemenu-icon"></i><span class="sidemenu-label ">صفحات</span><i class="angle fe fe-chevron-left"></i></a>
					<ul class="nav-sub">
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="profile.html">مشخصات</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="invoice.html">صورتحساب</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="pricing.html">قیمت گذاری</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="gallery.html">گالری</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="faq.html">سوالات</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="successmessage.html">پیام موفقیت آمیز</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="dangermessage.html">پیام خطر</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="warningmessage.html">پیام هشدار</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="empty.html">صفحه خالی</a>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link with-sub" href="#"><span class="shape1"></span><span class="shape2"></span><i class="ti-shield sidemenu-icon"></i><span class="sidemenu-label">خدمات رفاهی</span><i class="angle fe fe-chevron-left"></i></a>
					<ul class="nav-sub">
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="background.html">زمینه</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="border.html">مرز</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="display.html">نمایش دادن</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="flex.html">فلکس</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="height.html">قد</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="margin.html">لبه</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="padding.html">لایه گذاری</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="position.html">موقعیت</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="width.html">عرض</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="extras.html">موارد اضافی</a>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link with-sub" href="#"><span class="shape1"></span><span class="shape2"></span><i class="ti-lock sidemenu-icon"></i><span class="sidemenu-label">صفحات سفارشی</span><i class="angle fe fe-chevron-left"></i></a>
					<ul class="nav-sub">
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="signin.html">ورود</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="signup.html">ثبت نام</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="forgot.html">رمز عبور را فراموش کرده اید</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="reset.html">بازنشانی گذرواژه</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="lockscreen.html">صفحه قفل</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="underconstruction.html">در دست ساخت</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="error404.html">خطای 404</a>
						</li>
						<li class="nav-sub-item">
							<a class="nav-sub-link" href="error500.html">500 خطا</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
    )
}


export default Newside;