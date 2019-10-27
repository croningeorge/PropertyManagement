using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PM.Entity.Entities
{
    public class ApplicationUser : IdentityUser
    {
        [Column(TypeName ="nvarchar(150)")]
        public string FullName { get; set; }
        public string Email { get; set; }
        public bool? LockoutEnabled { get; set; }
        public ICollection<ApplicationUserRole> UserRoles { get; set; }
    }
}
