import OrganizationCreator from "./OrganizationCreator";
import OrganizationCard from "./OrganizationCard";


const Organization = (props) => {
    return(
        <div className="row row-sm">
            <div className="col-lg-6 col-md-12">
                <OrganizationCreator />
            </div>
            <div className="col-lg-6 col-md-12">
                <div class="row row-sm">
                    <OrganizationCard organizationTitle={"فروش-مسکونی-آپارتمان"}/>
                    <OrganizationCard organizationTitle={"اجاره مسکونی"}/>
                    <OrganizationCard organizationTitle={"فروش-اجاره صنعتی"}/>
                    <OrganizationCard organizationTitle={"فروش-تجاری-مغازه"}/>
                    <OrganizationCard organizationTitle={"اجاره-مسکونی-حیاط"}/>
                    <OrganizationCard organizationTitle={"اجاره ساختمان"}/>
                    <OrganizationCard organizationTitle={"فروش-اجاره صنعتی"}/>
                    <OrganizationCard organizationTitle={"فروش-تجاری-مغازه"}/>

                </div>
            </div>
        </div>
    )
}

export default Organization;