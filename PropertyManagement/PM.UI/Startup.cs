using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using PM.Entity.Context;
using PM.Entity.Entities;
using PM.Repositories.Repositories.SuperAdmin.AreaRepository;
using PM.Repositories.Repositories.SuperAdmin.CityRepository;
using PM.Repositories.Repositories.SuperAdmin.CompanyRepository;
using PM.Repositories.Repositories.SuperAdmin.CountryRepository;
using PM.Repositories.Repositories.SuperAdmin.LanguageRepository;
using PM.Repositories.Repositories.SuperAdmin.PaymentGatewaysRepository;
using PM.Repositories.Repositories.SuperAdmin.PlanTypeRepository;
using PM.Repositories.Repositories.SuperAdmin.SubscriptionPlanRepository;
using System;
using System.Reflection;
using System.Text;

namespace PM.UI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<ApplicationSettings>(Configuration.GetSection("ApplicationSettings"));
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddMvc().AddJsonOptions(opt => opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);

            //Db migration
            services.AddDbContext<PropertyContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("PropertyConnection")));


            //Application Services
            services.AddScoped<ICompanyRepository, CompanyRepository>();
            services.AddScoped<ISubscriptionPlanRepository, SubscriptionPlanRepository>();
            services.AddScoped<IPaymentGatewayRepository, PaymentGatewayRepository>();
            services.AddScoped<ILanguageRepository, LanguageRepository>();
            services.AddScoped<ICountryRepository, CountryRepository>();
            services.AddScoped<ICityRepository, CityRepository>();
            services.AddScoped<IAreaRepository, AreaRepository>();
            services.AddScoped<IPlanTypeRepository, PlanTypeRepository>();


            //Configurations
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            //services.AddAutoMapper();

            //services.AddDefaultIdentity<ApplicationUser>()
            //   .AddRoles<IdentityRole>()
            //   .AddEntityFrameworkStores<PropertyContext>();

            services.AddIdentity<ApplicationUser, ApplicationRole>(options => options.Stores.MaxLengthForKeys = 128)
            .AddEntityFrameworkStores<PropertyContext>();
            //.AddDefaultTokenProviders();


            services.Configure<IdentityOptions>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 4;
            });

            services.AddCors();

            //Jwt Authentication

            var key = Encoding.UTF8.GetBytes(Configuration["ApplicationSettings:JWT_Secret"].ToString());

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = false;
                x.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                };
            });
            services.Configure<IISServerOptions>(options =>
            {
                options.AutomaticAuthentication = false;
            });

        

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            //app.Use(async (ctx, next) =>
            //{
            //    await next();
            //    if (ctx.Response.StatusCode == 204)
            //    {
            //        ctx.Response.ContentLength = 0;
            //    }
            //});


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseCors(builder =>
            builder.WithOrigins(Configuration["ApplicationSettings:Client_URL"].ToString())
            .AllowAnyHeader()
            .AllowAnyMethod());

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseAuthentication();

            app.UseMvc(routes =>
            {

                routes.MapRoute(
                    name: "MyArea",
                    template: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");

            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.Options.StartupTimeout = new TimeSpan(0, 0, 80);
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }

}