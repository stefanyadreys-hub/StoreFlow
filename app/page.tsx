export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-gray-900">
        StoreFlow
      </h1>

      <p className="mt-4 text-lg text-gray-600 text-center max-w-xl">
        Gerencie sua loja de forma simples, organizada e inteligente.
      </p>

      <button className="mt-8 rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800">
        Ver produtos
      </button>
    </main>
  );
}