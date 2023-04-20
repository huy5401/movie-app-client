import Genre from "../components/pages/Genre/Genre"
import Home from "../components/pages/Home/Home"
import routesConfig from "../components/config/routes"
import Popular from "../components/pages/Poppular"
import MovieDetail from "../components/pages/MediaDetail/MovieDetail"
import { MovieDetailLayout, WatchLayout } from "../components/Layout"
import GenreLayout from "../components/Layout/GenreLayout/GenreLayout"
import SearchResult from "../components/pages/SearchResult/SearchResult"
import Upcomming from "../components/pages/Upcomming/Upcomming"
import Register from "../components/pages/Register/Register"
import Watch from "../components/pages/Watch/Watch"
const publicRoutes = [
    {path: routesConfig.home , component: Home},
    {path: routesConfig.genre, component: Genre, layout: GenreLayout},
    {path: routesConfig.popular, component: Popular, layout: GenreLayout},
    {path: routesConfig.upcomming, component: Upcomming, layout: GenreLayout},
    {path: routesConfig.detail, component: MovieDetail, layout: MovieDetailLayout},
    {path: routesConfig.search, component: SearchResult, layout: GenreLayout},
    {path: routesConfig.watch, component: Watch, layout: WatchLayout},
    {path: routesConfig.register, component: Register, layout: null}
]

const privateRoutes = []

export {publicRoutes, privateRoutes}