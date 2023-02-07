import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";
import classNames from "classnames/bind";
import { useDebounce, useTitle } from "../../hooks";

import styles from "./Search.module.scss";

import PageHeader from "../../components/PageHeader";
import MovieGrid from "../../components/MovieGrid";


const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const [searchParams, setSearchParams] = useSearchParams();
    const { search } = useLocation();

    const inputRef = useRef();

    useTitle("QMovie | Search");

    useEffect(() => {
        if (search) {
            const parsed = queryString.parse(search);
            if (parsed.q) {
                const searchValue = parsed.q;
                setSearchValue(searchValue);
            }
        }
    }, [search]);

    const handleChangeKeyword = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchParams(`q=${searchValue}`);
            setSearchValue(searchValue);
        }

        if (!searchValue) {
            setSearchParams('');
        }
    }

    const handleClearKeyword = () => {
        setSearchParams('');
        setSearchValue('');
        inputRef.current.focus();
    }

    return (
        <>
            <PageHeader>
                Search for the movie
            </PageHeader>
            <div className="container">
                <div className={cx("input-search")}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={searchValue}
                        placeholder="Enter your keyword..."
                        spellCheck={false}
                        onChange={handleChangeKeyword}
                    />

                    {searchValue && !loading &&
                        < i
                            className={cx('bx', 'bx-x-circle', 'clear-icon')}
                            onClick={handleClearKeyword}
                        >
                        </i>
                    }

                    {loading && <i className={cx('bx', 'bx-loader-circle', 'loading-icon')}></i>}
                </div>
                <MovieGrid searchValue={debouncedValue} />
            </div>
        </>
    );
}

export default Search;