using System.Collections.Generic;
using System.Threading.Tasks;
using PM.Entity.Entities;

namespace PM.Repositories.Repositories.LanguageRepository
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