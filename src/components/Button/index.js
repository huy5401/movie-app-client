import React from 'react'
import classNames from 'classnames/bind';
import styles from './Button.module.scss'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function Button({to, href,primary = true, blue= false, red = false,small = false, medium = true, large = false, className,onClick, ...passProps}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps
  }
  if(to){
    props.to = to;
    Comp = Link;
  }else if(href) {
    props.href = href;
    Comp = 'a';
  }
  const classes = cx('wrapper',{
    [className]: className,
    primary,
    blue,
    red,
    medium,
    large
  });
  return (
    <Comp className={classes} {...props}></Comp>
  )
}
