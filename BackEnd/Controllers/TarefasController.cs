using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TarefasApi.Models;
using TarefasApi.Persist;

namespace TarefasApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TarefasController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Tarefas> Get() => Persist.ListaTarefas.Tarefas;

        [HttpPost]
        public void Post([FromBody] Tarefas newTarefa)
        {
            Persist.ListaTarefas.Tarefas.Add(newTarefa);
        }
    }
}
