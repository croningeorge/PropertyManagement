using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PM.Entity.Entities
{
    /// <summary>
    /// Company Model has One to one Relation to City,Area,Country,ContryType
    /// </summary>
    public class CompanyModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CompanyId { get; set; }
        public string CompanyNameOrRef { get; set; }
        public string CompanyAddress { get; set; }
        public string PostCode{ get; set; }

        public City City { get; set; }
        public Country Country { get; set; }
        public Area Area { get; set; }
        public CompanyType CompanyType { get; set; }
        public SubscriptionPlanModel SubscriptionPlan { get; set; }
        public bool IsActive { get; set; }



        //KeyRelation one-to-one
        [Required]
        public int cityId { get; set; }
        [Required]
        public int countryId { get; set; }
        [Required]
        public int areaId { get; set; }
        [Required]
        public int companyTypeId { get; set; }
        [Required]
        public int subscriptionPlanId { get; set; }




    }
}

