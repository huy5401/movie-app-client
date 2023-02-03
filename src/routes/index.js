import Genre from "../components/pages/Genre/Genre"
import Home from "../components/pages/Home/Home"


const publicRoutes = [
    {path: '/' , component: Home},
    {path: '/genre', component: Genre}
]

const privateRoutes = []

export {publicRoutes, privateRoutes}