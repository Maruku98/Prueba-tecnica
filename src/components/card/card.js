import { Link } from "react-router-dom";
import imgNotFound from "../../assets/img-not-found.svg"
import "./card.scss"

// Carta con enlace a la ficha interna
function Card({imgSrc, name, date, id}) {
    return (
        <>
            <Link to={`/series/${id}`}>
                <div className="card">
                    {/* Imagen (utilitza una imagen default por si no hay carátula disponible) */}
                    <img className="card-img"
                        src={imgSrc ? "https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + imgSrc : imgNotFound}
                        alt={name}
                    />

                    {/* Título */}
                    <h2>{name}</h2>

                    {/* Fecha */}
                    <p>{date}</p>
                </div>
            </Link>
        </>
    );
}

export default Card;