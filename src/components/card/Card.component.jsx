import React from 'react';
import './Card.styles.scss';

const Card = ({ className, children }) => {
	const classes = `card ${className}`;
	return <div className={classes}>{children}</div>;
};

export default Card;
