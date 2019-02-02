using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker.DataAccess
{
    public class GoalAccess
    {
        private string ConnectionString;

        public GoalAccess(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public string GetGoal(string id)
        {
            using (var dbConnection = new SqlConnection(ConnectionString))
            {
                dbConnection.Open();

                var goal = dbConnection.QueryFirstOrDefault<string>(@"
                                                                    SELECT detail 
                                                                    FROM goals 
                                                                    WHERE userId = @id", new { id });

                return goal;
            }
        }

    }
}
