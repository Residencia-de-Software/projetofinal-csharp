using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TarefasApi.Models
{
    public class Tarefas
    {
        public Tarefas(string nome, string descricao)
        {
            this.nome = nome;
            this.descricao = descricao;
        }
        public Tarefas()
        {

        }
        public string nome { get; set; }
        public string descricao { get; set; }
    }
}
