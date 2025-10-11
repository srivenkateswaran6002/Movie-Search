import "../css/Favorites.css";

export default function Favorites() {
  return (
    <div className="favorites">
      <h2>Your Favorites</h2>

      <div className="favorites-empty">
        <h2>No Favorites Yet</h2>
        <p>Add some movies to your favorites to see them here!</p>
      </div>
    </div>
  );
}
