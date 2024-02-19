import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

type LogoProps = {
  isActive: boolean;
}

export function Logo({isActive}: LogoProps): JSX.Element {

  return (
    <Link className={`header__logo-link ${isActive ? 'header__logo-link--active' : ''}`} to={AppRoute.Main}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </Link>
  );
}
