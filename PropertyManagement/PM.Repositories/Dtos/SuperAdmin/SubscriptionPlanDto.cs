using System;

namespace PM.Repositories.Dtos.SuperAdmin
{
    public class SubscriptionPlanDto
    {
        public int SubscriptionPlanId { get; set; }
        public DateTime subscriptionStartDate { get; set; }
        public DateTime subscriptionEndDate { get; set; }
        public PlanTypeDto planType { get; set; }
    }
}
