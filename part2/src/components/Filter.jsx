const Filter = ({ handleSearch }) => {

    return (<input
        type="search"
        placeholder="Type here to filter the list"
        onInput={handleSearch} />)
}

export default Filter