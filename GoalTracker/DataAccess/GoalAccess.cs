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

        public string GetGoal(string firebaseId)
        {
            using (var dbConnection = new SqlConnection(ConnectionString))
            {
                dbConnection.Open();

                var goal = dbConnection.QueryFirstOrDefault<string>(@"SELECT g.detail 
                                                                    FROM goals g
                                                                    INNER JOIN users u
                                                                    ON g.userId = u.id
                                                                    WHERE u.firebaseId = @firebaseId", new { firebaseId });

                return goal;
            }
        }

    }
}
