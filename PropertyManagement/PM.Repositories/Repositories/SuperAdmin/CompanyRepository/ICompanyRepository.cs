using PM.Entity.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PM.Repositories.Repositories.SuperAdmin.CompanyRepository
{
    public interface ICompanyRepository
    {
        Task Add(CompanyModel item);
        Task<CompanyModel> Find(int key);
        Task<IEnumerable<CompanyModel>> GetAllCompany();
        Task Remove(int Id);
        Task Update(CompanyModel item);
    }
}