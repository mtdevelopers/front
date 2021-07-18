import DropwdownButton from "../../../components/button/button";


const Rolecard = (props) => {
    return(
            <div className="col-lg-3 col-md-12">
                    <div class="card card-pricing custom-card bg-primary text-light">
                        <div class="bg-transparent border-0">
                            <div class="pricing-title">{props.roleTitle}</div>
                        </div>
                        <div class="card-body pt-0 text-center">
                            <ul class="list-unstyled mb-4">
                            </ul>
                            <DropwdownButton color={"success"} items={["به روز رسانی","حذف","لیست اعضا"]}>عملیات</DropwdownButton>
                        </div>
                    </div>
            </div>
    )
}


export default Rolecard;