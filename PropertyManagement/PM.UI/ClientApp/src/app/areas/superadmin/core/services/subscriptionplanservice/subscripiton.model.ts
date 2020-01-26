import { IPlanType } from '../plantypeservice/plantype.model';

export class ISubscription{
  subscriptionPlanId: number;
  subscriptionStartDate: Date;
  subscriptionEndDate: Date;
  planType: IPlanType[];
}


 

