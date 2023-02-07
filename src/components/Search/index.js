import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper/index';
import SearchFilmItem from '../SearchFilmItem/index';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react'

const cx = classNames.bind(styles)
export default function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(true);
    const handleHideReuslt = () => {
        setShowResult(false);
    }
    useEffect(() => {
        if(!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data)
            })
    }, [searchValue])
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
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    )
}



