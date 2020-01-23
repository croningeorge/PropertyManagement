using AutoMapper;
using PM.Entity.Entities;
using PM.Repositories.Dtos.SuperAdmin;

namespace PM.UI.Areas.Mapper.SuperAdmin
{
    public class PropertySuperAdminMapper:Profile
    {
        public PropertySuperAdminMapper()
        {
            CreateMap<CompanyModel, CompanyDto>();
                //.ForMember(o => o.companyID, ex => ex.MapFrom(o => o.CompanyID)
                //.ReverseMap();

            CreateMap<Country, CountryDto>();
            CreateMap<City, CityDto>();
            CreateMap<Area, AreaDto>();
            CreateMap<CompanyType, CompanyTypeDto>();
            CreateMap<SubscriptionPlanModel, SubscriptionPlanDto>();
            CreateMap<PlanTypeModel, PlanTypeDto>();


        }
    }
}
