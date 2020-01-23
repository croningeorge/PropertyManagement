using PM.Entity.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PM.Repositories.Repositories.SuperAdmin.LanguageRepository
{
    public interface ILanguageRepository
    {
        Task Add(LanguageModel item);
        Task<LanguageModel> Find(int key);
        Task<IEnumerable<LanguageModel>> GetAllLanguages();
        Task Remove(int Id);
        Task Update(LanguageModel item);
    }
}