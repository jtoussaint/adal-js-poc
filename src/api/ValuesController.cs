using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Adal
{
    [Authorize]
    [Route("api/values")]
    public class ValuesController : Controller
    {
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
    }
}