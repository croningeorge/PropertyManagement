using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PM.Entity.Context;
using PM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PM.Repositories.Repositories.SuperAdmin.SubscriptionPlanRepository
{
    public class SubscriptionPlanRepository : ISubscriptionPlanRepository
    {
        #region Private Memebers
        private readonly PropertyContext _context;
        private readonly ILogger<SubscriptionPlanRepository> _logger;
        #endregion

        #region constructor
        public SubscriptionPlanRepository(
            PropertyContext context,
            ILogger<SubscriptionPlanRepository> logger)
        {
            _context = context;
            _logger = logger;
        }
        #endregion

        #region Public Methods
        public async Task<IEnumerable<SubscriptionPlanModel>> GetAllSubscription()
        {
            try
            {
                _logger.LogInformation("GetAllSubscription was cancelled");

                return await _context.SubscriptionPlans
                    .Include(t => t.PlanType)
                    .OrderBy(p => p.PlanType.PlanName)
                    .ToListAsync();
            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to get all subscriptionplans:{ex}");

                return null;
            }

        }
        public async Task<SubscriptionPlanModel> Find(int key)
        {
            return await _context.SubscriptionPlans
                .Where(e => e.SubscriptionPlanId.Equals(key))
                .SingleOrDefaultAsync();
        }
        public async Task Add(SubscriptionPlanModel item)
        {
            await _context.SubscriptionPlans.AddAsync(item);
            await _context.SaveChangesAsync();
        }
        public async Task Update(SubscriptionPlanModel item)
        {
            var itemToUpdate = await _context.SubscriptionPlans.SingleOrDefaultAsync(r => r.SubscriptionPlanId == item.SubscriptionPlanId);
            if (itemToUpdate != null)
            {
                itemToUpdate.PlanType.PlanName = item.PlanType.PlanName;
                //pending node
                await _context.SaveChangesAsync();
            }
        }
        public async Task Remove(int Id)
        {
            var itemToRemove = await _context.SubscriptionPlans.SingleOrDefaultAsync(r => r.SubscriptionPlanId == Id);
            if (itemToRemove != null)
            {
                _context.SubscriptionPlans.Remove(itemToRemove);
                await _context.SaveChangesAsync();
            }
        }
        #endregion
    }
}

