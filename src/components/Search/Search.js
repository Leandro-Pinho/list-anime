import React from 'react'

// O input de pesquisa, pega o valor digitado no input "value", e a função "onChange" que pega cada valor digitado
const Search = ({ value, onChange }) => {
    function handleChange(e) {
        onChange(e.target.value);
    }

    return (
        <input
            type='search'
            value={value}
            onChange={handleChange}
        />
    )
}

export default Search
