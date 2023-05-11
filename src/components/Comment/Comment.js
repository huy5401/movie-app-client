import { Avatar, Button, Input, Space, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useState } from 'react'
import classNames from 'classnames/bind';
import styles from './Comment.module.scss'
import Scrollbars from 'react-custom-scrollbars-2';
import { useParams } from 'react-router-dom';
import movieChillApi from '../../api/movieChillApi';
import { SendOutlined } from '@ant-design/icons'
import Moment from 'react-moment'
const cx = classNames.bind(styles);
export default function Comment() {
    const [commentValue, setCommentValue] = useState("");
    const [listComment, setListComment] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const fetchComment = async () => {
        setIsLoading(true)
        try {
            const listCmt = await movieChillApi.getAllCommentMovie({
                idMovie: id
            })
            setIsLoading(false)
            setListComment(listCmt)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchComment();
    }, [id]);
    const handleComment = async () => {
        try {
            const newComment = await movieChillApi.postComment({
                content: commentValue,
                idUser: localStorage.getItem('user_id'),
                idMovie: id
            })
            setCommentValue("");
            setListComment([...listComment, newComment])
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Space direction='vertical' style={{ width: '100%' }}>
            <div style={{ width: '100%', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                <Avatar size={40} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                <Input value={commentValue} style={{ width: '84%' }} onChange={e => setCommentValue(e.target.value)} placeholder='comment...' />
                <Button type='primary' style={{ height: '40px' }} onClick={handleComment}><SendOutlined />Bình luận</Button>
            </div>
            {!isLoading ?
                <div className={cx('comment-wrapper')}>
                    <Scrollbars width={100} height={100} autoHide autoHideTimeout={2000}>
                        {listComment && listComment.map((comment, index) => (
                            <div style={{ width: '100%', display: 'flex' }} key={index}>
                                <Avatar size={40} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                <Space direction='vertical' style={{ margin: '0 0 20px 20px' }}>
                                    <Space>
                                        <Typography.Paragraph className={cx('user-comment')}>{comment.user.username}</Typography.Paragraph>
                                        <Moment fromNow style={{color: '#606060'}}>{comment.createdAt}</Moment>
                                    </Space>
                                    <Typography.Paragraph className={[cx('comment-text'), cx('comment-content')]}>{comment.content}</Typography.Paragraph>
                                </Space>

                            </div>
                        ))}
                    </Scrollbars>
                </div>
                : <div className={cx('comment-wrapper')}></div>}
        </Space>

    )
}
