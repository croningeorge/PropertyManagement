using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PM.Entity.Entities;

namespace PM.Entity.Context
{
    public class PropertyContext : IdentityDbContext
    {
        public PropertyContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<PaymentGateway> PaymentGateways { get; set; }
        public DbSet<SubscriptionPlanModel> SubscriptionPlans { get; set; }
        public DbSet<LanguageModel> Languages { get; set; }

    }
}
