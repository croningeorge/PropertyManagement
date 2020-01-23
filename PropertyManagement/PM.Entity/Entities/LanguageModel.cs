using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PM.Entity.Entities
{
    public class LanguageModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LanguageId { get; set; }
        public string LanguageName { get; set; }
        public string Image { get; set; }
        public bool? IsActive { get; set; }
        public DateTime? LastModifiedDate { get; set; }
    }
}
