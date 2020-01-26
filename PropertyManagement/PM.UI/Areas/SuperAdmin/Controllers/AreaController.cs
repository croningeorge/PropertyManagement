using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PM.Entity.Entities;
using PM.Repositories.Repositories.SuperAdmin.AreaRepository;
using System;
using System.Threading.Tasks;

namespace PM.UI.Areas.SuperAdmin.Controllers
{
    [ApiController]
    [Area("SuperAdmin")]
    [Route("superadmin/api/[controller]")]
    [Produces("application/json")]
    public class AreaController : ControllerBase
    {

        #region Private Members
        private readonly IAreaRepository _repository;
        private readonly ILogger<AreaController> _logger;


        #endregion

        #region constructors
        public AreaController(
            IAreaRepository respository,
            ILogger<AreaController> logger)
        {
            _repository = respository;
            _logger = logger;
        }
        #endregion

        #region "Action Results"
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {

                return Ok(await _repository.GetAllArea());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Gateways: {ex}");
                return BadRequest("Failed to get Gateways");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var item = await _repository.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Area item)
        {
            if (item.AreaId == 0)
            {
                await _repository.Add(item);
                return CreatedAtRoute("GetArea", new { Controller = "Area", id = item.AreaId }, item);
            }
            else
            {

                if (item.AreaId > 0)
                {
                    await _repository.Update(item);
                }


            }
            return BadRequest();
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Area item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            var contactObj = await _repository.Find(id);
            if (contactObj == null)
            {
                return NotFound();
            }
            await _repository.Update(item);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _repository.Remove(id);
            return NoContent();
        }
        #endregion

        #region "Json Results"
        #endregion

        #region "Partial Results"
        #endregion
    }
}


