const Searchbar = ({ searchQuery, setSearchQuery }) => (

    <form action="/" method="get" class="d-flex" role="search">
        <label htmlFor="header-search" class="text-light p-2 fs-4">
            Filter
        </label>
        <input
            class="form-control me-2"
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search for dish name..."
            name="s" 
        />
    </form>
);
export default Searchbar;