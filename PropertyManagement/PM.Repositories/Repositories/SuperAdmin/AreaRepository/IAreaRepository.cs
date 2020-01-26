using System.Collections.Generic;
using System.Threading.Tasks;
using PM.Entity.Entities;

namespace PM.Repositories.Repositories.SuperAdmin.AreaRepository
{
    public interface IAreaRepository
    {
        Task Add(Area item);
        Task<Area> Find(int key);
        Task<IEnumerable<Area>> GetAllArea();
        Task Remove(int Id);
        Task Update(Area item);
    }
}