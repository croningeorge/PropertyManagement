using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PM.UI.Areas.SuperAdmin.Controllers
{
    [Area("SuperAdmin")]
    [Route("superadmin/api/[controller]")]
    [ApiController]
    public class UserRolesController : Controller
    {
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly ILogger<UserRolesController> _logger;
        public UserRolesController(RoleManager<IdentityRole> roleManager, ILogger<UserRolesController> logger)
        {
            this.roleManager = roleManager;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(roleManager.Roles);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Languages: {ex}");
                return BadRequest("Failed to get Languages");
            }
        }
    }
}
