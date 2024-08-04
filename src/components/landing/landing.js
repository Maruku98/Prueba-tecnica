import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {apiKey, httpOptions} from "../../index"
import imgNotFound from "../../assets/img-not-found.svg"
import star from "../../assets/star.png"
import "./landing.scss"

// Componente que inserta la ficha con su contenido correspondiente
function Landing() {
    const { id } = useParams(); // Coge la ID de la ficha
    const [productData, saveData] = useState(false); // 1 ficha
    const [notFound, updateNotFound] = useState(true); // Comprueba si la ficha no se encuentra

    // Llama a la API una sola vez
    useEffect(() => {
        fetchFile();
    }, []);

    // Llamada a la API (devuelve 1 ficha de producto)
    async function fetchFile() {
        const URL = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`;
        try {
            const data = await fetch(URL, httpOptions);

            // Abandona la función si no se encuentra ninguna ficha
            if (data.ok === false) {
                updateNotFound(false);
                return;
            }

            const jsonData = await data.json();
            saveData(jsonData); // Guarda los datos
            document.querySelector("header").scrollIntoView();
        }
        catch (err) {
            console.log("There was an error during the fetch request. " + err);
        }
    }

    // Esta función decide si se renderizará una ficha de producto o una plantilla con mensaje de error
    function renderContent() {
        if (notFound === false) {  // Mensaje con error
            return (
                <section className="landing">
                    <img className="landing" src={imgNotFound} alt="TV Show not found"/>
                    <aside>
                        <h2>Oops! Something went wrong...</h2>
                        <p>The TV Show you were looking for was not found!</p>
                    </aside>
                </section>
            )
        }
        else if (productData) {  // Ficha de producto
            return (
                <section className="landing">
                    <img className="landing"
                        src={productData.poster_path
                            ? "https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + productData.poster_path
                            : imgNotFound}
                        alt={productData.name}
                    />
                    <aside>
                        <h2>{productData.name}</h2>
                        <p>{productData.original_name}</p>
                        <p>{`${productData.first_air_date} | ${productData.original_language.toUpperCase()}`}</p>
        
                        <p className="overview">{productData.overview}</p>
        
                        <div className="score">
                            <img src={star} alt="score-star"></img>
                            <span>{parseFloat(productData.vote_average).toFixed(2)}</span>
                        </div>
                    </aside>
                </section>
            )
        }
    }

    return (
        <>
            {renderContent()}
        </>
    );
}

export default Landing;