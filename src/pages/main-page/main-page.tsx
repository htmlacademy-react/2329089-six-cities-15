import {SyntheticEvent, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {Offer} from '../../types/offer.ts';
import {City} from '../../types/city.ts';
import {Header} from '../../components/header/header.tsx';
import {OffersList} from '../../components/offers-list/offers-list.tsx';
import {NoOffers} from '../../components/no-offers/no-offers.tsx';
import {AppRoute, DEFAULT_CITY} from '../../const.ts';

type MainPageProps = {
  offers: Offer[];
  locations: City[];
}

export function MainPage({offers, locations}: MainPageProps): JSX.Element {
  const [currentLocation, setCurrentLocation] = useState(DEFAULT_CITY);
  const currentOffers = offers.filter((offer) => offer.city.name === currentLocation.name);
  const isActive = (item: City) => item.name === currentLocation.name ? 'tabs__item--active' : '';

  return (
    <div className="page page--gray page--main">
      <Header isActive isNav/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                locations.map((item) => (
                  <li key={item.name} className="locations__item">
                    <NavLink
                      className={`locations__item-link tabs__item ${isActive(item)}`}
                      to={AppRoute.Main}
                      onClick={(evt: SyntheticEvent) => {
                        evt.preventDefault();
                        setCurrentLocation(item);
                      }}
                    >
                      <span>{item.name}</span>
                    </NavLink>
                  </li>))
              }
            </ul>
          </section>
        </div>
        <div className="cities">
          {
            currentOffers.length > 0
              ? <OffersList currentLocation={currentLocation} currentOffers={currentOffers}/>
              : <NoOffers currentLocation={currentLocation}/>
          }
        </div>
      </main>
    </div>
  );
}
