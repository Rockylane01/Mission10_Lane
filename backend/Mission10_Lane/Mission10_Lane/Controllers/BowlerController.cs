using System.Linq;
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
            // return bowler data from the database for bowlers on Marlins or Sharks teams
            var bowlers = _context.Bowlers
                .Where(b => b.Team != null && (b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks"))
                .Select(b => new Bowler
                {
                    BowlerId = b.BowlerId,
                    BowlerLastName = b.BowlerLastName,
                    BowlerFirstName = b.BowlerFirstName,
                    BowlerMiddleInit = b.BowlerMiddleInit,
                    BowlerAddress = b.BowlerAddress,
                    BowlerCity = b.BowlerCity,
                    BowlerState = b.BowlerState,
                    BowlerZip = b.BowlerZip,
                    BowlerPhoneNumber = b.BowlerPhoneNumber,
                    TeamId = b.TeamId,
                    Team = new Team
                    {
                        TeamId = b.Team.TeamId,
                        TeamName = b.Team.TeamName
                    }
                })
                .ToList();

            return bowlers;
        }
    }
}
