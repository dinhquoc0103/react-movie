import Home from "../pages/Home";
import MovieCatalog from "../pages/MovieCatalog";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/:category", component: MovieCatalog },
    { path: "/:category/:id", component: MovieDetail },
    { path: "/search", component: Search },
    { path: "/not-found", component: NotFound },
    { path: "*", component: NotFound },
    { path: "/register", component: Register, layout: null },
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes };