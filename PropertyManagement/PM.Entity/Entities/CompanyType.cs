using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PM.Entity.Entities
{
    public class CompanyType
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CompanyTypeId { get; set; }
        public string CompanyTypeName { get; set; }
        public bool IsActive { get; set; }

    }
}
