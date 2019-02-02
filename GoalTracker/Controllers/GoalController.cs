using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoalTracker.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace GoalTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GoalController : SecureController
    {
        private GoalAccess _goalAccess;

        public GoalController(IConfiguration config)
        {
            _goalAccess = new GoalAccess(config);
        }

        [HttpGet("getgoal")]
        public IActionResult GetAllComputers()
        {
            return Ok(_goalAccess.GetGoal(UserId));
        }
    }
}