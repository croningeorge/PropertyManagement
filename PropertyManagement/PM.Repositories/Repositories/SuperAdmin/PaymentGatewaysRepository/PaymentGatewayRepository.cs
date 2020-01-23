using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PM.Entity.Context;
using PM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace PM.Repositories.Repositories.SuperAdmin.PaymentGatewaysRepository
{
    public class PaymentGatewayRepository : IPaymentGatewayRepository
    {
        #region Private Memebers
        private readonly PropertyContext _context;
        private readonly ILogger<PaymentGatewayRepository> _logger;
        #endregion

        #region constructor
        public PaymentGatewayRepository(
            PropertyContext context,
            ILogger<PaymentGatewayRepository> logger)
        {
            _context = context;
            _logger = logger;
        }
        #endregion

        #region Public Methods
        public async Task<IEnumerable<PaymentGateway>> GetAllGateways()
        {
            try
            {
                _logger.LogInformation("GetAllGateways was cancelled");

                return await _context.PaymentGateway
                    .OrderBy(p => p.BankName)
                    .ToListAsync();
            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to get all companies:{ex}");

                return null;
            }

        }
        public async Task<PaymentGateway> Find(int key)
        {
            return await _context.PaymentGateway
                .Where(e => e.PaymentId.Equals(key))
                .SingleOrDefaultAsync();
        }
        public async Task Add(PaymentGateway item)
        {
            await _context.PaymentGateway.AddAsync(item);
            await _context.SaveChangesAsync();
        }
        public async Task Update(PaymentGateway item)
        {
            var itemToUpdate = await _context.PaymentGateway.SingleOrDefaultAsync(r => r.PaymentId == item.PaymentId);
            if (itemToUpdate != null)
            {
                itemToUpdate.BankName = item.BankName;
                //pending node
                await _context.SaveChangesAsync();
            }
        }
        public async Task Remove(int Id)
        {
            var itemToRemove = await _context.PaymentGateway.SingleOrDefaultAsync(r => r.PaymentId == Id);
            if (itemToRemove != null)
            {
                _context.PaymentGateway.Remove(itemToRemove);
                await _context.SaveChangesAsync();
            }
        }
        #endregion
    }
}
