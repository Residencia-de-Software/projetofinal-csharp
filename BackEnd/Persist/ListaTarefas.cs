using System;
using System.Collections.Generic;
using TarefasApi.Models;

namespace TarefasApi.Persist
{
    public static class ListaTarefas
    {
        public static List<Tarefas> Tarefas = new List<Tarefas>()
        {
            new Tarefas("Comprar Pão", "Comprar Pão"),
            new Tarefas("Comprar Leite", "Comprar Leite"),
            new Tarefas("Comprar Biscoito", "Comprar Biscoito"),
            new Tarefas("Comprar Manteiga", "Comprar Manteiga")
        };
    }
}