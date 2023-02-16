import Genre from "../components/pages/Genre/Genre"
import Home from "../components/pages/Home/Home"
import routesConfig from "../components/config/routes"
import Popular from "../components/pages/Poppular"
import MovieDetail from "../components/pages/MovieDetail/MovieDetail"
import { MovieDetailLayout } from "../components/Layout"
const publicRoutes = [
    {path: routesConfig.home , component: Home},
    {path: routesConfig.genre, component: Genre},
    {path: routesConfig.popular, component: Popular},
    {path: routesConfig.detail, component: MovieDetail, layout: MovieDetailLayout},
]

const privateRoutes = []

export {publicRoutes, privateRoutes}