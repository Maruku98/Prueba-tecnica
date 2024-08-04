import "./pagination.scss"

function Pagination({navChange}) {
    const maxNav = 9; // Número máximo de páginas a mostrar
    const numbers = Array(maxNav).fill(null);
    return (
        <nav className="pagination">
            <span>--</span>
            {
                numbers.map((_, index) => {
                    return (
                        <button className="number" key={index + 1} onClick={navChange}>{index + 1}</button>
                    )
                })
            }
            <span>--</span>
        </nav>
    )
}

export default Pagination;