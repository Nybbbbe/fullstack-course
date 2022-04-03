const Search = (props) => {
  return (
    <div>
      Find countries <input
        onChange={props.handleSearchChange}
        value={props.searchString}/>
    </div>
  )
}

export default Search;