import React from 'react';
import './index.scss';

export const Header = ({ usdResult, eurResult }) => {
  return (
    <div className="header">
      <div className="header__item">{`USD: ${usdResult}`}</div>
      <div className="header__item">{`EUR: ${eurResult}`}</div>
    </div>
  );
};
