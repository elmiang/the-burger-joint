const Searchbar = ({ searchQuery, setSearchQuery, page }) => (
  <form method="get" className="d-flex" role="search">
    <label htmlFor="header-search" className="text-light p-2 fs-4">
      Filter
    </label>
    <input
      className="form-control me-2"
      value={searchQuery}
      onInput={(e) => setSearchQuery(e.target.value)}
      type="text"
      id="header-search"
      placeholder="Search for dish name..."
      name="s"
    />
  </form>
);
export default Searchbar;
