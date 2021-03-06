﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PM.Entity.Entities;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace PM.UI.Areas.SuperAdmin.Controllers
{
    [Area("SuperAdmin")]
    [Route("superadmin/api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ILogger<UsersController> _logger;

        public UsersController(
            UserManager<ApplicationUser> userManager,
            ILogger<UsersController> logger)
        {
            this._userManager = userManager;
            this._logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var users = await _userManager.Users.Include(u => u.UserRoles)
                                                    .ThenInclude(ur => ur.Role)
                                                    .Select(u => new UserViewModel()
                                                    {
                                                        FullName = u.FullName,
                                                        Email = u.Email,
                                                        userName = u.UserName,
                                                        lockoutEnabled=u.LockoutEnabled,
                                                        EmailConfirmed=u.EmailConfirmed

                                                    })
                                                    .ToListAsync();

                return Ok(users);

 
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get users: {ex}");
                return BadRequest("Failed to get users");
            }
        }
        public class UserViewModel
        {
            public string FullName{ get; set; }
            public string Email { get; set; }
            public string userName { get; set; }
            public bool? lockoutEnabled { get; set; }
            public bool? EmailConfirmed { get; set; }

        }
       
    }
}