using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoalTracker.DataAccess;
using GoalTracker.Models;
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
        public IActionResult GetGoal()
        {
            // UserId is the firebase UId inherited from SecureController
            return Ok(_goalAccess.GetGoal(UserId));
        }

        [HttpDelete("deletegoal")]
        public IActionResult DeleteGoal()
        {
            return Ok(_goalAccess.DeleteGoal(UserId));
        }

        [HttpPost("addgoal")]
        public IActionResult AddGoal(Goal goal)
        {
            return Ok(_goalAccess.AddGoal(UserId, goal.Detail));
        }
    }
}