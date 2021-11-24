using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/inicializar")]
    public class InicializarDadosController : ControllerBase
    {
        private readonly DataContext _context;
        public InicializarDadosController(DataContext context)
        {
            _context = context;
        }

        //POST: api/inicializar/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create()
        {
            _context.FormasPagamentos.AddRange(new FormaPagamento[]
                {
                    new FormaPagamento { FormaPagamentoId = 1, Nome = "Boleto",Descricao="Boleto Bancario de pagamento" },
                    new FormaPagamento { FormaPagamentoId = 2, Nome = "Cartao Debito",Descricao="Cartao de Debito Visa/Master" },
                    new FormaPagamento { FormaPagamentoId = 3, Nome = "Cartao Credito",Descricao="Cartao de Credito em ate 12 vezes Visa/Master" },
                    new FormaPagamento { FormaPagamentoId = 4, Nome = "Vale",Descricao="Vale/Saldo da propria loja" },
                }
            );

            _context.Categorias.AddRange(new Categoria[]
                {
                    new Categoria { CategoriaId = 1, Nome = "Computador" },
                    new Categoria { CategoriaId = 2, Nome = "Celular" },
                }
            );
            _context.Produtos.AddRange(new Produto[]
                {
                    new Produto { ProdutoId = 1, Nome = "Dell Intel I5", Preco = 1000, Quantidade = 5, CategoriaId = 1 },
                    new Produto { ProdutoId = 2, Nome = "Lenovo Intel I7", Preco = 2000, Quantidade = 10, CategoriaId = 1 },
                    new Produto { ProdutoId = 3, Nome = "Acer AMD Ryzen 9", Preco = 3000, Quantidade = 13, CategoriaId = 1 },
                    new Produto { ProdutoId = 4, Nome = "Iphone 12", Preco = 1500, Quantidade = 25, CategoriaId = 2 },
                    new Produto { ProdutoId = 5, Nome = "Samsumg S20", Preco = 3000, Quantidade = 3, CategoriaId = 2 },
                    new Produto { ProdutoId = 6, Nome = "Xiaomi 11 Ultra", Preco = 5000, Quantidade = 10, CategoriaId = 2 },
                }
            );
            _context.SaveChanges();
            return Ok(new { message = "Dados inicializados com sucesso!" });
        }
    }
}