using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PM.Entity.Entities
{
    public class PlanTypeModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PlanTypeId { get; set; }
        public string  PlanName { get; set; }
        public int Days { get; set; }
        public bool? IsActive { get; set; }
    }
}
