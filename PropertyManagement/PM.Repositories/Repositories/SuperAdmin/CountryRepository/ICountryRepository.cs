using System.Collections.Generic;
using System.Threading.Tasks;
using PM.Entity.Entities;

namespace PM.Repositories.Repositories.SuperAdmin.CountryRepository
{
    public interface ICountryRepository
    {
        Task Add(Country item);
        Task<Country> Find(int key);
        Task<IEnumerable<Country>> GetAllCountry();
        Task Remove(int Id);
        Task Update(Country item);
    }
}