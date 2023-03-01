import React from 'react'
import styles from './movieCard.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import apiConfig from '../../utils/apiConfig';
import routesConfig from '../config/routes';

const cx = classNames.bind(styles)

export default function MovieCard({ data }) {
    return (
        <Link to={`/movie/${data.id}`} className={cx('link-wrap')}>
            <Card className={cx('movie-card')}>
                <div className={cx('imgWrapper')}>
                    <Card.Img variant='top' src={data.backdrop_path ? apiConfig.originalImage(data.backdrop_path) : apiConfig.originalImage('/8EgO6oCiUlhiiNeVbRPItZIMQj7.jpg')}></Card.Img>
                </div>
                <Card.Footer className={cx('footer')}>
                    <p>{data.title}</p>
                </Card.Footer>
            </Card>
        </Link>
    )
}
