import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo.tsx';
import {Helmet} from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities. Page not found</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login form">
            <h1 className="login__title">404. Page not found</h1>
            <div className="login__form form">
              <Link className="login__submit form__submit button" to="/">Go back to the main page</Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;