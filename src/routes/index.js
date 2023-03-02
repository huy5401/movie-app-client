import Genre from "../components/pages/Genre/Genre"
import Home from "../components/pages/Home/Home"
import routesConfig from "../components/config/routes"
import Popular from "../components/pages/Poppular"
import MovieDetail from "../components/pages/MediaDetail/MovieDetail"
import { MovieDetailLayout } from "../components/Layout"
import GenreLayout from "../components/Layout/GenreLayout/GenreLayout"
import SearchPage from "../components/pages/Search"
const publicRoutes = [
    {path: routesConfig.home , component: Home},
    {path: routesConfig.genre, component: Genre},
    {path: routesConfig.popular, component: Popular, layout: GenreLayout},
    {path: routesConfig.search, component: SearchPage, layout: GenreLayout},
    {path: routesConfig.detail, component: MovieDetail, layout: MovieDetailLayout},
]

const privateRoutes = []

export {publicRoutes, privateRoutes}