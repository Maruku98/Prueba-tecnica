import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header.js"
import CardContainer from "./components/card/card-container.js"
import Landing from "./components/landing/landing.js"
import Footer from "./components/footer/footer.js"
import "./index.scss";

export const apiKey = "c6aeee577586ba38e487b74dfede5deb";
export const httpOptions = {method: "GET", headers: {accept: "application/json"}};


// Componente que inserta el contenido de forma dinámica según los datos de la API
function TVShows() {
    const [fetchedData, saveData] = useState([]); // 20 fichas
    const [activePage, setActivePage] = useState(1); // Página de navegación activa

    // Llama a la API por primera vez, y luego cada vez que se cambie de página
    useEffect(() => {
      fetchData();
    }, [activePage]);

    // Llamada a la API (1 página de 20 elementos)
    async function fetchData() {
      const URL = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${activePage}&api_key=${apiKey}`;
      try {
          const data = await fetch(URL, httpOptions);
          const jsonData = await data.json();
          saveData(jsonData.results); // Guarda los datos
      }
      catch (err) {
          console.log("There was an error during the fetch request. " + err)
      }
    }

    // Actualizar el menú de navegación con el contenido correspondiente
    function updateScroll(e) {
      setActivePage(parseInt(e.target.textContent));
      document.querySelector("header").scrollIntoView(); /* Está cogido con pinzas y no es lo más adecuado,
                                                            pero lo implemento así por falta de tiempo */
    }

    return (
      <>
        <Header />

        <main>
          {/* Enrutamiento */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CardContainer data={fetchedData} navChange={updateScroll} />}>
              </Route>
              <Route path="/series/:id" element={<Landing />}>
              </Route>
            </Routes>
          </BrowserRouter>
        </main>

        <Footer />
      </>
    );
}

// Renderizado
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TVShows />
);