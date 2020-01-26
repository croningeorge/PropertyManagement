using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PM.Entity.Context;
using PM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PM.Repositories.Repositories.SuperAdmin.PlanTypeRepository
{
    public class PlanTypeRepository : IPlanTypeRepository
    {
        #region Private Memebers
        private readonly PropertyContext _context;
        private readonly ILogger<PlanTypeRepository> _logger;
        private readonly IMapper _mapper;
        #endregion

        #region constructor

        public PlanTypeRepository(
                PropertyContext context,
           ILogger<PlanTypeRepository> logger,
           IMapper mapper)
        {
            _context = context;
            _logger = logger;
            _mapper = mapper;
        }

        #endregion

        #region Public Methods
        public async Task<IEnumerable<PlanTypeModel>> GetAllPlanType()
        {
            try
            {
                _logger.LogInformation("Lanugages was cancelled");

                return await _context.PlanType
                    .OrderBy(p => p.PlanName).ToListAsync();

            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to get all companies:{ex}");

                return null;
            }

        }
        public async Task<PlanTypeModel> Find(int key)
        {
            return await _context.PlanType
                .Where(e => e.PlanTypeId.Equals(key))
                .SingleOrDefaultAsync();
        }
        public async Task Add(PlanTypeModel item)
        {
            await _context.PlanType.AddAsync(item);
            await _context.SaveChangesAsync();
        }
        public async Task Update(PlanTypeModel item)
        {
            var itemToUpdate = await _context.PlanType.SingleOrDefaultAsync(r => r.PlanTypeId == item.PlanTypeId);
            if (itemToUpdate != null)
            {
                itemToUpdate.PlanName = item.PlanName;
                //pending node
                await _context.SaveChangesAsync();
            }
        }
        public async Task Remove(int Id)
        {
            var itemToRemove = await _context.PlanType.SingleOrDefaultAsync(r => r.PlanTypeId == Id);
            if (itemToRemove != null)
            {
                _context.PlanType.Remove(itemToRemove);
                await _context.SaveChangesAsync();
            }
        }
        #endregion
    }
}
