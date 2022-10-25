import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const IncomeListItem = ({ id, description, amount, createdAt, type }) => (
    <Link className='list-item' to={`/editIncome/${id}`}>
      <div>
        <h3 className='list-item__title'>{description}</h3>
        <span className='list-item__subtitle'>{moment(createdAt).format('MMMM do, YYYY')}</span>
      </div>
      <h3 className='list-item__data'>{numeral(amount/100).format('$0,0.00')}</h3>
      <div className='list-item__type'>
        <p>{type}</p>
      </div>
    </Link>
);

export default IncomeListItem;