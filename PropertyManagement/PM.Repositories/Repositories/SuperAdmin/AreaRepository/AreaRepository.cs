using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PM.Entity.Context;
using PM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PM.Repositories.Repositories.SuperAdmin.AreaRepository
{
    public class AreaRepository : IAreaRepository
    {
        #region Private Memebers
        private readonly PropertyContext _context;
        private readonly ILogger<AreaRepository> _logger;
        private readonly IMapper _mapper;
        #endregion

        #region constructor

        public AreaRepository(
           PropertyContext context,
           ILogger<AreaRepository> logger,
           IMapper mapper)
        {
            _context = context;
            _logger = logger;
            _mapper = mapper;
        }

        #endregion

        #region Public Methods
        public async Task<IEnumerable<Area>> GetAllArea()
        {
            try
            {
                _logger.LogInformation("Lanugages was cancelled");

                return await _context.Area
                    .OrderBy(p => p.AreaName).ToListAsync();

            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to get all companies:{ex}");

                return null;
            }

        }
        public async Task<Area> Find(int key)
        {
            return await _context.Area
                .Where(e => e.AreaName.Equals(key))
                .SingleOrDefaultAsync();
        }
        public async Task Add(Area item)
        {
            await _context.Area.AddAsync(item);
            await _context.SaveChangesAsync();
        }
        public async Task Update(Area item)
        {
            var itemToUpdate = await _context.Area.SingleOrDefaultAsync(r => r.AreaId == item.AreaId);
            if (itemToUpdate != null)
            {
                itemToUpdate.AreaName = item.AreaName;
                //pending node
                await _context.SaveChangesAsync();
            }
        }
        public async Task Remove(int Id)
        {
            var itemToRemove = await _context.Area.SingleOrDefaultAsync(r => r.AreaId == Id);
            if (itemToRemove != null)
            {
                _context.Area.Remove(itemToRemove);
                await _context.SaveChangesAsync();
            }
        }
        #endregion
    }
}