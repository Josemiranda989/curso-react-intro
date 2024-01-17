import { useState } from 'react';
import './TodoSearch.css';



function TodoSearch() {
    const [searchValue, setSearchValue] = useState('')

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