function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-xl shadow">
      <h2 className="text-4xl font-extrabold mb-4">Welcome to VictoryScores</h2>
      <p className="text-lg max-w-2xl">
        Daily football predictions, VIP tips, and live scores all in one place.
      </p>
      <button className="mt-6 px-6 py-2 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow hover:bg-yellow-500">
        Get Today’s Free Tips
      </button>
    </section>
  );
}

export default Home;
