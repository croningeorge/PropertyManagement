using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PM.Entity.Entities
{
    public class SubscriptionPlanModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SubscriptionPlanId { get; set; }
        public PlanTypeModel PlanType { get; set; }
        public DateTime? SubscriptionStartDate { get; set; }
        public DateTime? SubscriptionEndDate { get; set; }


        //One-to-one Relationship
        [Required]
        public int planTypeId { get; set; }
    }
}
