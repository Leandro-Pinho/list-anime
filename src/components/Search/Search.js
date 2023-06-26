import React, { useState } from 'react'
import useDebounce from '../useDebounce/useDebounce';
import './index.css'

// O input de pesquisa, pega o valor digitado no input "value", e a função "onChange" que pega cada valor digitado
const Search = ({ value, onChange }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 500);

    // função que pega o valor do input
    function handleChange(e) {
        setDisplayValue(e.target.value);
        debouncedChange(e.target.value);
    }

    return (
        <div className='searchInput'>
            <input
                type='search'
                value={displayValue}
                onChange={handleChange}
            />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    )
}

export default Search
