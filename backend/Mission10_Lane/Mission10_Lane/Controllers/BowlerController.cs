using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10_Lane.Models;

namespace Mission10_Lane.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private BowlingLeagueContext _context;

        public BowlerController(BowlingLeagueContext context)
        {
            _context = context;
        }

        [HttpGet(Name = "GetBowlingLeague")]
        public IEnumerable<Bowler> Get()
        {
            var bowlers = _context.Bowlers.ToList();

            return bowlers;
        }
    }
}
