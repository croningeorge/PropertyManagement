using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PM.Entity.Context;
using PM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PM.Repositories.Repositories.SuperAdmin.CountryRepository
{
    public class CountryRepository : ICountryRepository
    {
        #region Private Memebers
        private readonly PropertyContext _context;
        private readonly ILogger<CountryRepository> _logger;
        private readonly IMapper _mapper;
        #endregion

        #region constructor

        public CountryRepository(
           PropertyContext context,
           ILogger<CountryRepository> logger,
           IMapper mapper)
        {
            _context = context;
            _logger = logger;
            _mapper = mapper;
        }

        #endregion

        #region Public Methods
        public async Task<IEnumerable<Country>> GetAllCountry()
        {
            try
            {
                _logger.LogInformation("Lanugages was cancelled");

                return await _context.Country
                    .OrderBy(p => p.CountryName).ToListAsync();

            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to get all companies:{ex}");

                return null;
            }

        }
        public async Task<Country> Find(int key)
        {
            return await _context.Country
                .Where(e => e.CountryName.Equals(key))
                .SingleOrDefaultAsync();
        }
        public async Task Add(Country item)
        {
            await _context.Country.AddAsync(item);
            await _context.SaveChangesAsync();
        }
        public async Task Update(Country item)
        {
            var itemToUpdate = await _context.Country.SingleOrDefaultAsync(r => r.CountryId == item.CountryId);
            if (itemToUpdate != null)
            {
                itemToUpdate.CountryName = item.CountryName;
                //pending node
                await _context.SaveChangesAsync();
            }
        }
        public async Task Remove(int Id)
        {
            var itemToRemove = await _context.Country.SingleOrDefaultAsync(r => r.CountryId == Id);
            if (itemToRemove != null)
            {
                _context.Country.Remove(itemToRemove);
                await _context.SaveChangesAsync();
            }
        }
        #endregion
    }
}

