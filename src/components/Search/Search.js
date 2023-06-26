import React from 'react'
import './index.css'

// O input de pesquisa, pega o valor digitado no input "value", e a função "onChange" que pega cada valor digitado
const Search = ({ value, onChange }) => {
    function handleChange(e) {
        onChange(e.target.value);
    }

    return (
        <div className='searchInput'>
            <input
                type='search'
                value={value}
                onChange={handleChange}
            />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    )
}

export default Search
