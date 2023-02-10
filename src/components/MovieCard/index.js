import React from 'react'
import styles from './movieCard.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const cx = classNames.bind(styles)

export default function MovieCard({data}) {
    return (
        <Link to='/' className={cx('link-wrap')}>
            <Card className={cx('movie-card')}>
                <Card.Img variant='top' src='https://i0.wp.com/media.discordapp.net/attachments/924155580124385280/1072455762103767142/thanh-xuan-nguyet-dam.jpg?w=400'></Card.Img>
                <Card.Footer className={cx('footer')}>
                    <p>{data.title}</p>
                </Card.Footer>
            </Card>
        </Link>
    )
}
