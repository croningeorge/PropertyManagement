import { ICountry } from '../countryservice/country.model';
import { ICity } from '../cityservice/city.model';
import { IArea } from '../areaservice/area.model';
import { ISubscription } from '../subscriptionplanservice/subscripiton.model';
import { IPlanType } from '../plantypeservice/plantype.model';
import { ICompanyType } from '../companytypeservice/companytype.model';



export class ICompany{

    companyId:any;
    companyNameOrRef:string;
    companyAddress:string;
    postCode:string;
    isActive:any;
    country:ICountry[];
    city:ICity[];
    area:IArea[];
    companyType:ICompanyType[];
    subscriptionPlan:ISubscription[];
    planType:IPlanType[];

}