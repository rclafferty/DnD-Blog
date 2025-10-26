
import CharacterCard from "../components/CharacterCard";

import characters from "../data/characters.json";

export default function Party() {
  return (
    <section className="p-8 mt-16">
      <h1 className="text-3xl font-serif text-amber-800 mb-8 text-center">🛡️ The Party</h1>
      <div className="card-grid">
        {characters.map((char) => (
          <CharacterCard key={char.name} character={char} />
        ))}
      </div>
    </section>
  );
}
