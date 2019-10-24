using System.Collections.Generic;
using System.Threading.Tasks;
using PM.Entity.Entities;

namespace PM.Repositories.Repositories.PaymentGatewaysRepository
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