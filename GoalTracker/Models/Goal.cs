using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker.Models
{
    public class Goal
    {
        public int Id { get; set; }
        public string Detail { get; set; }
        public int UserId { get; set; }
        public int GoalTypeId { get; set; }
    }
}
