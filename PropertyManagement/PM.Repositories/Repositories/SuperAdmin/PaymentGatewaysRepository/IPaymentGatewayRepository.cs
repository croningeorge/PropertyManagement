using PM.Entity.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PM.Repositories.Repositories.SuperAdmin.PaymentGatewaysRepository
{
    public interface IPaymentGatewayRepository
    {
        Task Add(PaymentGateway item);
        Task<PaymentGateway> Find(int key);
        Task<IEnumerable<PaymentGateway>> GetAllGateways();
        Task Remove(int Id);
        Task Update(PaymentGateway item);
    }
}