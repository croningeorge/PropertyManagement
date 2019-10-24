﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PM.Entity.Entities;
using PM.Repositories.Repositories.SubscriptionPlanRepository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PM.UI.Areas.SuperAdmin.Controllers
{
    [Area("SuperAdmin")]
    [Route("superadmin/api/[controller]")]
    [ApiController]
    public class SubscriptionPlanController : ControllerBase
    {
        #region Private Members
        private readonly ISubscriptionPlanRepository _repository;
        private readonly ILogger<SubscriptionPlanController> _logger;

        #endregion

        #region constructors
        public SubscriptionPlanController(
            ISubscriptionPlanRepository respository,
            ILogger<SubscriptionPlanController> logger)
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
                return Ok(await _repository.GetAllSubscription());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get subscription: {ex}");
                return BadRequest("Failed to get subscription");
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
        public async Task<IActionResult> Create([FromBody] SubscriptionPlanModel item)
        {
            if (item.planId == 0)
            {
                await _repository.Add(item);
                return CreatedAtRoute("GetSubscription", new { Controller = "Subscription", id = item.planId }, item);
            }
            else
            {

                if (item.planId > 0)
                {
                    await _repository.Update(item);
                }


            }
            return BadRequest();
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] SubscriptionPlanModel item)
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