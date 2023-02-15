import React from 'react'
import styles from './movieCard.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import apiConfig from '../../utils/apiConfig';

const cx = classNames.bind(styles)

export default function MovieCard({ data }) {
    return (
        <Link to='/' className={cx('link-wrap')}>
            <Card className={cx('movie-card')}>
                <Card.Img variant='top' src={apiConfig.originalImage(data.backdrop_path
                )}></Card.Img>
                <Card.Footer className={cx('footer')}>
                    <p>{data.title}</p>
                </Card.Footer>
            </Card>
        </Link>
    )
}
