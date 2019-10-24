using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PM.Entity.Entities;
using PM.Repositories.Repositories.LanguageRepository;
using System;
using System.Threading.Tasks;

namespace PM.UI.Areas.SuperAdmin.Controllers
{
    [Area("SuperAdmin")]
    [Route("superadmin/api/[controller]")]
    [ApiController]
    public class LanguageController : ControllerBase
    {
        #region Private Members
        private readonly ILanguageRepository _repository;
        private readonly ILogger<LanguageController> _logger;

        #endregion

        #region constructors
        public LanguageController(
            ILanguageRepository respository,
            ILogger<LanguageController> logger)
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
                return Ok(await _repository.GetAllLanguages());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Languages: {ex}");
                return BadRequest("Failed to get Languages");
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
        public async Task<IActionResult> Create([FromBody] LanguageModel item)
        {
            if (item.LanguageId == 0)
            {
                await _repository.Add(item);
                return CreatedAtRoute("GetLanguage", new { Controller = "Language", id = item.LanguageId }, item);
            }
            else
            {

                if (item.LanguageId > 0)
                {
                    await _repository.Update(item);
                }


            }
            return BadRequest();
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] LanguageModel item)
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