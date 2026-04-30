export default function CharacterCard({ character }) {
  console.log(JSON.stringify(character));
  console.log(character.portrait);
  
  return (
    <div className={`card text-center`}>
      <img
        src={`${import.meta.env.BASE_URL}${character.portrait}`}
        alt={character.name}
      />
      <h2 className="text-xl font-bold">{character.name}</h2>
      <p className="meta italic mb-2">{character.class}</p>
      <p>{character.bio}</p>
    </div>
  );
}
