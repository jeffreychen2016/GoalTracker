using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoalTracker.DataAccess;
using GoalTracker.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace GoalTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : SecureController 
    {
        private UserAccess _userAccess;

        public UserController(IConfiguration config)
        {
            _userAccess = new UserAccess(config);
        }

        [HttpPost("adduser")]
        public IActionResult AddUser(User user)
        {
            return Ok(_userAccess.AddUser(user));
        }

        [HttpGet("getuid/{email}")]
        [AllowAnonymous]
        public IActionResult GetUId(string email)
        {
            return Ok(_userAccess.GetUId(email));
        }
    }
}