import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Search.module.scss'

const cx = classNames.bind(styles);

export default function SearchPage() {
    const [title, setTitle] = useState("");
    return (
        <div className={cx('wrapper')}>Search page</div>
    )
}
