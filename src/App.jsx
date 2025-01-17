import Header from "../src/components/Header.jsx";
import Entry from "./components/Entry.jsx";
import data from "../src/data.js";

export default function App() {
  const entryElements = data.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });
  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}
