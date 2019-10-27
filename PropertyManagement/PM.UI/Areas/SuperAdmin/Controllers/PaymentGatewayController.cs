using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PM.Entity.Entities;
using PM.Repositories.Repositories.PaymentGatewaysRepository;
using System;
using System.Threading.Tasks;

namespace PM.UI.Areas.SuperAdmin.Controllers
{
    [Area("SuperAdmin")]
    [Route("superadmin/api/[controller]")]
    [ApiController]
    public class PaymentGatewayController : ControllerBase
    {
        #region Private Members
        private readonly IPaymentGatewayRepository _repository;
        private readonly ILogger<PaymentGatewayController> _logger;
        private readonly IMapper _mapper;

        #endregion

        #region constructors
        public PaymentGatewayController(
            IPaymentGatewayRepository respository,
            ILogger<PaymentGatewayController> logger,
            IMapper mapper)
        {
            _repository = respository;
            _logger = logger;
            _mapper = mapper;
        }
        #endregion

        #region "Action Results"
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {

                return Ok(await _repository.GetAllGateways());
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
        public async Task<IActionResult> Create([FromBody] PaymentGateway item)
        {
            if (item.paymentId == 0)
            {
                await _repository.Add(item);
                return CreatedAtRoute("GetPayment", new { Controller = "Payment", id = item.paymentId }, item);
            }
            else
            {

                if (item.paymentId > 0)
                {
                    await _repository.Update(item);
                }


            }
            return BadRequest();
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] PaymentGateway item)
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