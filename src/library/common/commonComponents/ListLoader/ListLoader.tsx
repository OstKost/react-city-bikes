import React from 'react';
import { BulletList } from 'react-content-loader';
import style from './style.module.scss';

const ListLoader = () => {
  return (
    <div className={style.container}>
      <BulletList foregroundColor='#0f7987' />
    </div>
  );
};

export default ListLoader;
