import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper/index';
import SearchFilmItem from '../SearchFilmItem/index';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../utils/apiConfig';

const cx = classNames.bind(styles)
export default function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(true);
    const debounce = useDebounce(searchValue, 500);
    const handleHideReuslt = () => {
        setShowResult(false);
    }
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            const url = category.movie;
            const result = await tmdbApi.search(url,debounce);
            setSearchResult(result.results.slice(0,8));
        }
        fetchApi();
    }, [debounce])
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                    <PopperWrapper>
                        <div className={cx('search-result-title')}>Search result for: <p>"{searchValue}"</p></div>
                        {searchResult.map((result) => (
                            <SearchFilmItem key={result.id} data={result}></SearchFilmItem>
                        ))}
                    </PopperWrapper>
                </div>

            )}
            onClickOutside={handleHideReuslt}>
            <div className={cx('search')}>
                <input type='text' placeholder='Search movies or actor'
                    onChange={e => { setSearchValue(e.target.value) }}
                    onFocus={() => { setShowResult(true) }}></input>
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </div>
        </HeadlessTippy>
    )
}



