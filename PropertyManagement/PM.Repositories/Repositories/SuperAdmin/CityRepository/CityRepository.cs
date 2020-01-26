using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PM.Entity.Context;
using PM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PM.Repositories.Repositories.SuperAdmin.CityRepository
{
    public class CityRepository : ICityRepository
    {
        #region Private Memebers
        private readonly PropertyContext _context;
        private readonly ILogger<CityRepository> _logger;
        private readonly IMapper _mapper;
        #endregion

        #region constructor

        public CityRepository(
           PropertyContext context,
           ILogger<CityRepository> logger,
           IMapper mapper)
        {
            _context = context;
            _logger = logger;
            _mapper = mapper;
        }

        #endregion

        #region Public Methods
        public async Task<IEnumerable<City>> GetAllCity()
        {
            try
            {
                _logger.LogInformation("Lanugages was cancelled");

                return await _context.City
                    .OrderBy(p => p.CityName).ToListAsync();

            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to get all companies:{ex}");

                return null;
            }

        }
        public async Task<City> Find(int key)
        {
            return await _context.City
                .Where(e => e.CityName.Equals(key))
                .SingleOrDefaultAsync();
        }
        public async Task Add(City item)
        {
            await _context.City.AddAsync(item);
            await _context.SaveChangesAsync();
        }
        public async Task Update(City item)
        {
            var itemToUpdate = await _context.City.SingleOrDefaultAsync(r => r.CityId == item.CityId);
            if (itemToUpdate != null)
            {
                itemToUpdate.CityName = item.CityName;
                //pending node
                await _context.SaveChangesAsync();
            }
        }
        public async Task Remove(int Id)
        {
            var itemToRemove = await _context.City.SingleOrDefaultAsync(r => r.CityId == Id);
            if (itemToRemove != null)
            {
                _context.City.Remove(itemToRemove);
                await _context.SaveChangesAsync();
            }
        }
        #endregion
    }
}

