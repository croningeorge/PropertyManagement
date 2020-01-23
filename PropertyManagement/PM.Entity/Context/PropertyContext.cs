using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PM.Entity.Entities;

namespace PM.Entity.Context
{
    public class PropertyContext :IdentityDbContext<ApplicationUser,ApplicationRole, string,IdentityUserClaim<string>,ApplicationUserRole,
            IdentityUserLogin<string>,IdentityRoleClaim<string>,IdentityUserToken<string>>
    {
        public PropertyContext(DbContextOptions<PropertyContext> options)
        : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<ApplicationUserRole>(userRole =>
            {
                userRole.HasKey(ur => new { ur.UserId, ur.RoleId });

                userRole.HasOne(ur => ur.Role)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();

                userRole.HasOne(ur => ur.User)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired();

            });

            ////one-to-one relation
            //builder.Entity<CompanyModel>()
            //    .HasOne(a => a.CompanyType)
            //    .WithOne(b => b.Company)
            //    .HasForeignKey<CompanyModel>(b => b.companyTypeId);

            //builder.Entity<CompanyModel>()
            //    .HasOne(a => a.SubscriptionPlan)
            //    .WithOne(b => b.Company)
            //    .HasForeignKey<CompanyModel>(b => b.subscriptionId);

        }
       
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<PaymentGateway> PaymentGateway { get; set; }
        public DbSet<SubscriptionPlanModel> SubscriptionPlans { get; set; }
        public DbSet<PlanTypeModel> PlanType { get; set; }
        public DbSet<LanguageModel> Languages { get; set; }
        public DbSet<CompanyModel> Company { get; set; }
        public DbSet<CompanyType> CompanyType { get; set; }
        public DbSet<Country> Country { get; set; }
        public DbSet<City> City { get; set; }
        public DbSet<Area> Area { get; set; }

    }
}
