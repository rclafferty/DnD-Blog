import characters from "../data/characters.json";
import CharacterCard from "../components/CharacterCard";

export default function Party() {
  return (
    <section className="p-8 mt-16">
      <h1 className="text-3xl font-serif text-amber-800 mb-8 text-center">🛡️ The Party</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {characters.map((char) => (
          <CharacterCard key={char.name} character={char} />
        ))}
      </div>
    </section>
  );
}
