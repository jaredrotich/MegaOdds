const sampleTips = [
  { match: "Arsenal vs Chelsea", pick: "Over 2.5 Goals" },
  { match: "Man Utd vs Liverpool", pick: "BTTS" },
  { match: "Barcelona vs Real Madrid", pick: "Draw" },
];

function FreeTips() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Free Predictions</h2>
      <div className="grid gap-4">
        {sampleTips.map((tip, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
            <p className="font-semibold">{tip.match}</p>
            <p className="text-green-600">{tip.pick}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FreeTips;
