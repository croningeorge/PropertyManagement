using PM.Entity.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PM.Repositories.Repositories.SuperAdmin.PlanTypeRepository
{
    public interface IPlanTypeRepository
    {
        Task Add(PlanTypeModel item);
        Task<PlanTypeModel> Find(int key);
        Task<IEnumerable<PlanTypeModel>> GetAllPlanType();
        Task Remove(int Id);
        Task Update(PlanTypeModel item);
    }
}