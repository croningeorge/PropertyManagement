using System.Collections.Generic;
using System.Threading.Tasks;
using PM.Entity.Entities;

namespace PM.Repositories.Repositories.SubscriptionPlanRepository
{
    public interface ISubscriptionPlanRepository
    {
        Task Add(SubscriptionPlanModel item);
        Task<SubscriptionPlanModel> Find(int key);
        Task<IEnumerable<SubscriptionPlanModel>> GetAllSubscription();
        Task Remove(int Id);
        Task Update(SubscriptionPlanModel item);
    }
}