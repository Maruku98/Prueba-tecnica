import "./card-container.scss"
import Card from "../card/card.js"
import Pagination from "../pagination/pagination.js"

// Contenedor de las cartas + paginación
function CardContainer({data, navChange}) {
    return (
        <main>
            <div className="cardContainer">
            {
                data.map(({poster_path, name, first_air_date, id}) => {
                    return (
                        <Card
                            imgSrc={poster_path}
                            name={name}
                            date={first_air_date}
                            key={id}
                            id={id}
                        />
                    );
                })
            }
            </div>
            <Pagination navChange={navChange} />
        </main>
    );
}

export default CardContainer;