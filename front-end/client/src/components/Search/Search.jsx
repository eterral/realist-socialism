import '../Search/Search.css'

export default function Search(props) {
    return (
        <div className='search-container'>
            <a className='search-text'>Search:</a>
            <form onSubmit={(e) => props.onSubmit(e)}>
                <input
                    className="searchbar"
                    onChange={(e) => props.handleSearch(e.target.value)}
                    type="text"
                />
            </form>
        </div>
    )
}