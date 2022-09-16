import ShowCard from "./ShowCard";

const Shows = ({ shows }) => {
  return (
    <main>
      <ul>
        {shows.map(show => {
          return <ShowCard key={show.id} show={show} />;
        })}
      </ul>
    </main>
  );
};

export default Shows;
