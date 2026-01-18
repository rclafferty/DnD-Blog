export default function CharacterCard({ character }) {
  return (
    <div className={`card text-center`}>
      <img
        src={import.meta.env.BASE_URL + character.portrait}
        alt={character.name}
        // className="w-32 h-32 object-cover rounded-full mx-auto mb-3 shadow-parchment"
      />
      <h2 className="text-xl font-bold">{character.name}</h2>
      <p className="meta italic mb-2">{character.class}</p>
      <p>{character.bio}</p>
    </div>
  );
}
