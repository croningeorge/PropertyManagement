using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PM.Entity.Context;
using PM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PM.Repositories.Repositories.LanguageRepository
{
    public class LanguageRepository : ILanguageRepository
    {
        #region Private Memebers
        private readonly PropertyContext _context;
        private readonly ILogger<LanguageRepository> _logger;
        #endregion

        #region constructor
        public LanguageRepository(
            PropertyContext context,
            ILogger<LanguageRepository> logger)
        {
            _context = context;
            _logger = logger;
        }
        #endregion

        #region Public Methods
        public async Task<IEnumerable<LanguageModel>> GetAllLanguages()
        {
            try
            {
                _logger.LogInformation("Lanugages was cancelled");

                return await _context.Languages
                    .OrderBy(p => p.LanguageName)
                    .ToListAsync();
            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to get all companies:{ex}");

                return null;
            }

        }
        public async Task<LanguageModel> Find(int key)
        {
            return await _context.Languages
                .Where(e => e.LanguageId.Equals(key))
                .SingleOrDefaultAsync();
        }
        public async Task Add(LanguageModel item)
        {
            await _context.Languages.AddAsync(item);
            await _context.SaveChangesAsync();
        }
        public async Task Update(LanguageModel item)
        {
            var itemToUpdate = await _context.Languages.SingleOrDefaultAsync(r => r.LanguageId == item.LanguageId);
            if (itemToUpdate != null)
            {
                itemToUpdate.LanguageName = item.LanguageName;
                //pending node
                await _context.SaveChangesAsync();
            }
        }
        public async Task Remove(int Id)
        {
            var itemToRemove = await _context.Languages.SingleOrDefaultAsync(r => r.LanguageId == Id);
            if (itemToRemove != null)
            {
                _context.Languages.Remove(itemToRemove);
                await _context.SaveChangesAsync();
            }
        }
        #endregion
    }
}
