import Party from "./Party";
import JournalPreview from "./JournalPreview";

export default function Home() {
    return (
        <>
            <Party />
            <section className="p-8 text-center">
                {/* <div className="grid md:grid-cols-3 gap-4"> */}
                <h1 className="text-3xl font-serif text-amber-800 mb-8 text-center">🛡️ Latest Adventures</h1>
                <JournalPreview />
            </section>
        </>
    );
}
