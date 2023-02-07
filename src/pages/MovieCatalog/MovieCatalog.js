import { useParams } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./MovieCatalog.module.scss";
import config from "../../config";
import { useTitle } from "../../hooks";

import PageHeader from "../../components/PageHeader";
import MovieGrid from "../../components/MovieGrid";

const cx = classNames.bind(styles);

function MovieCatalog() {
    const { category } = useParams();
    const categories = config.theMovieApi.categories;

    useTitle(`QMovie | ${category[0].toUpperCase()}${category.substring(1)}`);

    return (
        <>
            <PageHeader>
                {category === categories.movie ? "Movies" : (category === categories.tv ? "TV Series" : category)}
            </PageHeader>
            <div className="container">
                <MovieGrid category={category} />
            </div>
        </>
    );
}

export default MovieCatalog;