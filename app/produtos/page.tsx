export default function Produtos() {
  const produtos = [
    {
      nome: "Vestido Mid canelado",
      preco: "R$ 25,00",
    },
    {
      nome: "Bata com short",
      preco: "R$ 25,00",
    },
    {
      nome: "Short Linho Masculino",
      preco: "R$ 25,00",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center">
        Produtos
      </h1>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {produtos.map((produto) => (
          <div
            key={produto.nome}
            className="rounded-xl bg-white p-6 shadow"
          >
            <h2 className="text-xl font-semibold">
              {produto.nome}
            </h2>

            <p className="mt-2 text-gray-600">
              {produto.preco}
            </p>

            <button className="mt-4 rounded-lg bg-black px-4 py-2 text-white">
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}