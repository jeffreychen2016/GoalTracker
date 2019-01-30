using Dapper;
using GoalTracker.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker.DataAccess
{
    public class UserAccess
    {
        private string ConnectionString;

        public UserAccess(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public bool AddUser(User user)
        {
            using (var dbConnection = new SqlConnection(ConnectionString))
            {
                dbConnection.Open();

                var result = dbConnection.Execute(@"INSERT INTO users (email, [password],firstName,lastName,isActive,isAdmin,firebaseId)
                                                    VALUES (@email,@password,@firstName,@lastName,@isActive,@isAdmin,@firebaseId)", user );

                return result == 1;
            }
        }

        public int GetUId(string email)
        {
            using (var dbConnection = new SqlConnection(ConnectionString))
            {
                dbConnection.Open();

                var result = dbConnection.QueryFirst<int>(@"SELECT id FROM users WHERE email = @email", new { email });

                return result;
            }
        }
    }
}
