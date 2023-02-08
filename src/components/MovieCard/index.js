import React from 'react'
import styles from './movieCard.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const cx = classNames.bind(styles)

export default function MovieCard() {
    return (
        // <Link to='/' className={cx('link-wrap')}>
        //     <div className={cx('wrapper')}>
        //         <button>
        //             <FontAwesomeIcon icon={faCirclePlay} style={{ color: 'red' }}></FontAwesomeIcon>
        //         </button>
        //     </div>
        //     <h3>Fast & Furious 8</h3>
        // </ Link>
        <Link to='/' className={cx('link-wrap')}>
            <Card className={cx('movie-card')}>
                <Card.Img variant='top' src='https://i0.wp.com/media.discordapp.net/attachments/924155580124385280/1072455762103767142/thanh-xuan-nguyet-dam.jpg?w=400'></Card.Img>
                <Card.Footer className={cx('footer')}>
                    <p>Fast & Furious 8 fabet88 nha</p>
                </Card.Footer>
            </Card>
        </Link>
    )
}
