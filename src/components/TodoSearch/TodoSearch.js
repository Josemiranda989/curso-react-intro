import './TodoSearch.css';



function TodoSearch({ searchValue, setSearchValue }) {

    const search = (e) => {
        setSearchValue(e.target.value)
        console.log(searchValue);
    }

    return (
        <input
            placeholder="Ingrese una nueva tarea"
            className="TodoSearch"
            value={searchValue}
            onChange={search}
        />
    );
}
export { TodoSearch };