using System.Collections.Generic;
using System.Threading.Tasks;
using PM.Entity.Entities;

namespace PM.Repositories.Repositories.SuperAdmin.CityRepository
{
    public interface ICityRepository
    {
        Task Add(City item);
        Task<City> Find(int key);
        Task<IEnumerable<City>> GetAllCity();
        Task Remove(int Id);
        Task Update(City item);
    }
}