import React from 'react';
import 'react-circular-progressbar/dist/styles.css';

import './Cards.css';
import CardItem from './CardItem';
import Tabs from './Tabs';
import DonationUpdator from './DonationUpdator';

const Cards = () => {
  const percentage = 16;
  return (
    <div className='cards'>
      <h1>Featured Charity</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text={<Tabs />}
              path='/popular'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Lorem Ipsum is simply dummy text of the printing'
              label='Sponsor a farm with 100 litres of clean water'
              path='/popular'
            />
          </ul>
          <div id="some-box">
            <div className="circular">
              <article class="row" id="idea-one">
                <div><img src="images/holding-box.jpg" /></div>
                <div className="donation-desc">
                  <h3>Feed 60 Kids for a month</h3>
                  <p>Raising R30 000.00 by 21 Aug.</p>
                  <a href="">Feed-a-child, Cape Town</a>
                </div>
              </article>
              <div className="donation-updator">
                <DonationUpdator />
              </div>
            </div>
            <div class="fade_rule"></div>

            <article class="row" id="idea-two">
              <div><img src="images/charity-hands.jpg" /></div>
              <div className="donation-desc">
                <h3>Buy 5 000 Blankets</h3>
                <p>Raising R8 000.00 by 21 Aug</p>
                <a href="">Drought Fund, Durban</a>
              </div>
            </article>
            <div className="donation-updator">
              <DonationUpdator />
            </div>
            <div class="fade_rule"></div>

            <article class="row" id="idea-three">
              <div><img src="images/img-2.jpg" /></div>
              <div className="donation-desc">
                <h3>Sponsor a farm with 1000 litres of water</h3>
                <p>Raising R30 000.00 by 21 Aug.</p>
                <a href="">SPCA, Johannesburg</a>
              </div>
            </article>
            <div className="donation-updator">
              <DonationUpdator />
            </div>
            <div class="fade_rule"></div>

            <article class="row" id="idea-two">
              <div><img src="images/img-3.jpg" /></div>
              <div className="donation-desc">
                <h3>Buy 5 000 Blankets</h3>
                <p>Raising R8 000.00 by 21 Aug</p>
                <a href="#">Drought Fund, Durban</a>
              </div>
            </article>
            <div className="donation-updator">
              <DonationUpdator />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
