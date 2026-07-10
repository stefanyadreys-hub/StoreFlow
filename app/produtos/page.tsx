const produtos = [
  {
    nome: "Vestido Curto Soltinho",
    categoria: "Vestidos",
    preco: "R$ 39,90",
    descricao: "Vestido confortável com short interno.",
  },
  {
    nome: "Bata Canelada",
    categoria: "Blusas",
    preco: "R$ 25,00",
    descricao: "Bata feminina básica e versátil.",
  },
  {
    nome: "Short Linho Masculino",
    categoria: "Masculino",
    preco: "R$ 49,90",
    descricao: "Short leve para o dia a dia.",
  },
];

export default function Produtos() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center">
        Produtos
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {produtos.map((produto) => (
          <div
            key={produto.nome}
            className="rounded-xl bg-white p-6 shadow"
          >
            <h2 className="text-xl font-bold">
              {produto.nome}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {produto.categoria}
            </p>

            <p className="mt-4 text-lg font-semibold">
              {produto.preco}
            </p>

            <p className="mt-2 text-gray-600">
              {produto.descricao}
            </p>

            <button className="mt-5 rounded-lg bg-black px-4 py-2 text-white">
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}