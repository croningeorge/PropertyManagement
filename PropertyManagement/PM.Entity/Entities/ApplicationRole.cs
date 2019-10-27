using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace PM.Entity.Entities
{
    public class ApplicationRole : IdentityRole
    {
        public ICollection<ApplicationUserRole> UserRoles { get; set; }
    }
}