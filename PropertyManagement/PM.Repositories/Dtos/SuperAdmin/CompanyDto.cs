namespace PM.Repositories.Dtos.SuperAdmin
{
    public class CompanyDto
    {
        public int companyID { get; set; }
        public string companyNameOrRef { get; set; }
        public string companyAddress { get; set; }
        public string postCode { get; set; }
        public bool isActive { get; set; }
        public CountryDto country { get; set; }
        public CityDto city { get; set; }
        public AreaDto area { get; set; }
        public CompanyTypeDto companyType { get; set; }
        public SubscriptionPlanDto subscriptionPlan { get; set; }

    }
}

