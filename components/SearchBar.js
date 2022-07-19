import searches from './SearchBar.module.css'
const SearchBar = () => {
  return (
    <div className={searches.container}>
      <input className={searches.input} type="text" placeholder="Search" />
      <button>Search</button>

    </div>
  )
}

export default SearchBar
