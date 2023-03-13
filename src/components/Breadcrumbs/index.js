import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import classNames from 'classnames/bind';
import styles from './Breadcrumbs.module.scss';
import tmdbApi from '../../api/tmdbApi';

const cx = classNames.bind(styles);
let genre = [];
export default function Breadcrumbs() {
  let genreId = "";
  const fetchGenre = async () => {
    const dataGenre = await tmdbApi.getGenre();
    //setGenre(dataGenre.genres);
    genre = dataGenre.genres;
  }

  const getNameGenre = () => {
    for (var i = 0; i < genre.length; i++) {
      console.log(genreId)
      if (genre[i].id.toString() === genreId) {
        console.log(genre[i].name)
        return genre[i].name
      }
    }
  }
  // const [genre, setGenre] = useState([]);
  const location = useLocation();

  if (location.pathname.split('/')[1] === "genre") {
    genreId = location[2];
    fetchGenre();
    console.log(genre)
    getNameGenre();
  }





  let currentLink = '';
  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink = + `/${crumb}`
      return (
        <div className={cx('crumb')} key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  return (
    <div className={cx('wrapper')}>{crumbs}</div>
  )
}
