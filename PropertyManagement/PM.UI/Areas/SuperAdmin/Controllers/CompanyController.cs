using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PM.Entity.Entities;
using PM.Repositories.Dtos.SuperAdmin;
using PM.Repositories.Repositories.SuperAdmin.CompanyRepository;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PM.UI.Areas.SuperAdmin.Controllers
{

    [ApiController]
    [Area("SuperAdmin")]
    [Route("superadmin/api/[controller]")]
    [Produces("application/json")]
    public class CompanyController : ControllerBase
    {
        #region Private Members
        private readonly ICompanyRepository _repository;
        private readonly ILogger<CompanyController> _logger;
        private readonly IMapper _mapper;


        #endregion

        #region constructors
        public CompanyController(
            ICompanyRepository respository,
            ILogger<CompanyController> logger,
            IMapper mapper)
        {
            _repository = respository;
            _logger = logger;
            _mapper = mapper;
        }
        #endregion

        #region "Action Results"
        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public async Task<IActionResult> Get()
        {
            try
            {

                return Ok(_mapper.Map<IEnumerable<CompanyModel>, IEnumerable<CompanyDto>>(await _repository.GetAllCompany()));
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

        //[HttpPost]
        //public async Task<IActionResult> Create([FromBody] Comapany item)
        //{
        //    if (item.paymentId == 0)
        //    {
        //        await _repository.Add(item);
        //        return CreatedAtRoute("GetPayment", new { Controller = "Payment", id = item.paymentId }, item);
        //    }
        //    else
        //    {

        //        if (item.paymentId > 0)
        //        {
        //            await _repository.Update(item);
        //        }


        //    }
        //    return BadRequest();
        //}
        //[HttpPut("{id}")]
        //public async Task<IActionResult> Update(int id, [FromBody] PaymentGateway item)
        //{
        //    if (item == null)
        //    {
        //        return BadRequest();
        //    }
        //    var contactObj = await _repository.Find(id);
        //    if (contactObj == null)
        //    {
        //        return NotFound();
        //    }
        //    await _repository.Update(item);
        //    return NoContent();
        //}

        //[HttpDelete("{id}")]
        //public async Task<IActionResult> Delete(int id)
        //{
        //    await _repository.Remove(id);
        //    return NoContent();
        //}
        #endregion

        #region "Json Results"
        #endregion

        #region "Partial Results"
        #endregion

    }
}