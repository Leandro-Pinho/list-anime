import React from 'react'
import './index.css'
// total de numeros de pagina que irá aparecer
const MAX_ITEMS = 9;
// total de numros que vai ficar a esquerda
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

// para funcionar a paginação precisamos de alguns parametros (limit, total, offset - que é para pular os items da pagina anterior)
const Pagination = ({ limit, total, offset, setOffset }) => {
    // saber a pagina atual, caso o offset for "0" a page é "1", caso contrario divide para saber a pagina atual
    const current = offset ? (offset / limit) + 1 : 1;
    // o total de paginas
    const pages = Math.ceil(total / limit);
    // para quando chegar na ultima pagina
    const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);

    // para saber o primeiro botão e sempre deixar como 1
    const first = Math.min(
        Math.max(current - MAX_LEFT, 1),
        maxFirst
    );

    // função para mostrar em que pagina esta
    function onPageChange(page) {
        setOffset((page - 1) * limit);
    }

    return (
        <ul className='pagination'>
            {/* colocando o button prev */}
            <li>
                <button
                    onClick={() => onPageChange(current - 1)}
                    disabled={current === 1}
                >
                    Anterior
                </button>
            </li>

            {/* o array dos buttons */}
            {Array.from({ length: Math.min(MAX_ITEMS, pages) })
                .map((_, index) => index + first)
                .map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => onPageChange(page)}
                            className={page === current ? 'pagination__item--active' : null}
                        >
                            {page}
                        </button>
                    </li>
                ))}

            {/* colocando o button prev e next */}
            <li>
                <button
                    onClick={() => onPageChange(current + 1)}
                    disabled={current === pages}
                >
                    Proximo
                </button>
            </li>
        </ul>
    )
}

export default Pagination
