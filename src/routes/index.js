import Genre from "../components/pages/Genre/Genre"
import Home from "../components/pages/Home/Home"
import routesConfig from "../components/config/routes"

const publicRoutes = [
    {path: routesConfig.home , component: Home},
    {path: routesConfig.genre, component: Genre}
]

const privateRoutes = []

export {publicRoutes, privateRoutes}