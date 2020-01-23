using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PM.Entity.Context;
using PM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PM.Repositories.Repositories.SuperAdmin.CompanyRepository
{
    public class CompanyRepository : ICompanyRepository
    {
        #region Private Memebers
        private readonly PropertyContext _context;
        private readonly ILogger<CompanyRepository> _logger;
        private readonly IMapper _mapper;
        #endregion

        #region constructor

        public CompanyRepository(
                PropertyContext context,
           ILogger<CompanyRepository> logger,
           IMapper mapper)
        {
            _context = context;
            _logger = logger;
            _mapper = mapper;
        }

        #endregion

        #region Public Methods
        public async Task<IEnumerable<CompanyModel>> GetAllCompany()
        {
            try
            {
                _logger.LogInformation("Lanugages was cancelled");

                return await _context.Company
                    .Include(t => t.CompanyType)
                    .Include(c => c.Country)
                    .Include(c => c.City)
                    .Include(a => a.Area)
                    .Include(s=>s.SubscriptionPlan)
                    .ThenInclude(t=>t.PlanType)
                    .OrderBy(p => p.CompanyNameOrRef).ToListAsync();

            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to get all companies:{ex}");

                return null;
            }

        }
        public async Task<CompanyModel> Find(int key)
        {
            return await _context.Company
                .Where(e => e.CompanyId.Equals(key))
                .SingleOrDefaultAsync();
        }
        public async Task Add(CompanyModel item)
        {
            await _context.Company.AddAsync(item);
            await _context.SaveChangesAsync();
        }
        public async Task Update(CompanyModel item)
        {
            var itemToUpdate = await _context.Company.SingleOrDefaultAsync(r => r.CompanyId == item.CompanyId);
            if (itemToUpdate != null)
            {
                itemToUpdate.CompanyNameOrRef = item.CompanyNameOrRef;
                //pending node
                await _context.SaveChangesAsync();
            }
        }
        public async Task Remove(int Id)
        {
            var itemToRemove = await _context.Company.SingleOrDefaultAsync(r => r.CompanyId == Id);
            if (itemToRemove != null)
            {
                _context.Company.Remove(itemToRemove);
                await _context.SaveChangesAsync();
            }
        }

        public Task<IEnumerable<CompanyModel>> GetAllLanguages()
        {
            throw new NotImplementedException();
        }
        #endregion
    }
}
