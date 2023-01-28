import Home from "../pages/Home";
import MovieCatalog from "../pages/MovieCatalog";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";


const publicRoutes = [
    { path: "/", component: Home },
    { path: "/:category", component: MovieCatalog },
    { path: "/:category/:id", component: MovieDetail },
    { path: "/register", component: Register, layout: null },
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes };