import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Featured Charity</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Lorem Ipsum is simply dummy text of the printing'
              label='Feed 60 kids for a month'
              path='/popular'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Lorem Ipsum is simply dummy text of the printing'
              label='Sponsor a farm with 100 litres of clean water'
              path='/popular'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/holding-box.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting'
              label='Feed-a-child'
              path='/popular'
            />
            <CardItem
              src='images/charity-hands.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting'
              label='Drought Fund'
              path='/newest'
            />
             <CardItem
              src='images/img-2.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting'
              label='Sponsor a farm'
              path='/popular'
            />
              <CardItem
              src='images/img-3.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting'
              label='Buy 5000 Blankets'
              path='/end-date'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
