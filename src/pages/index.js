/* eslint-disable @next/next/no-img-element */
import CardSlider from "../components/Slider";
import Card from "../components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="travel" className="travel">
        <h2 className="travel__title section-title">Travel with us</h2>
        <div className="travel-container">
          <div className="travel-container__left">
            <h3 className="travel-container__title">National travel</h3>
            <div className="travel-container__info info">
              <h4 className="info__title">travel info</h4>
              <ul className="info__list">
                <li className="info__item">
                  <p className="info__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Velit, odio.
                  </p>
                </li>
                <li className="info__item">
                  <p className="info__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi, id.
                  </p>
                </li>
                <li className="info__item">
                  <p className="info__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat, officia?
                  </p>
                </li>
                <li className="info__item">
                  <p className="info__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quo, dolore!
                  </p>
                </li>
              </ul>
              <span className="info__price price">1200$</span>
            </div>
          </div>
          <div className="travel-container__right">
            <CardSlider>
              <Card image="/assets/images/nation.png" />
              <Card image="/assets/images/nation2.png" />
            </CardSlider>
          </div>
        </div>
        <div className="travel-container">
          <div className="travel-container__left">
            <h3 className="travel-container__title">Arabic travel</h3>
            <div className="travel-container__info info">
              <h4 className="info__title">travel info</h4>
              <ul className="info__list">
                <li className="info__item">
                  <p className="info__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus rem ullam eos.
                  </p>
                </li>
                <li className="info__item">
                  <p className="info__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus rem ullam eos.
                  </p>
                </li>
                <li className="info__item">
                  <p className="info__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus rem ullam eos.
                  </p>
                </li>
                <li className="info__item">
                  <p className="info__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus rem ullam eos.
                  </p>
                </li>
              </ul>
              <span className="info__price price">1200$</span>
            </div>
          </div>
          <div className="travel-container__right">
            <CardSlider>
              <Card image="/assets/images/arabia.png" />
              <Card image="/assets/images/dubai.png" />
              <Card image="/assets/images/arabia2.png" />
              <Card image="/assets/images/arab2.png" />
              <Card image="/assets/images/dubai3.png" />
              <Card image="/assets/images/arab.png" />
            </CardSlider>
          </div>
        </div>
        <div className="travel-container">
          <div className="travel-container__left">
            <h3 className="travel-container__title">europe travel</h3>
            <div className="travel-container__info info">
              <h4 className="info__title">travel info</h4>
              <ul className="info__list">
                <li className="info__item">
                  <p className="info__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vel, provident.
                  </p>
                </li>
                <li className="info__item">
                  <p className="info__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vel, provident.
                  </p>
                </li>
                <li className="info__item">
                  <p className="info__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vel, provident.
                  </p>
                </li>
                <li className="info__item">
                  <p className="info__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vel, provident.
                  </p>
                </li>
              </ul>
              <span className="info__price price">1200$</span>
            </div>
          </div>
          <div className="travel-container__right">
            <CardSlider>
              <Card image="/assets/images/europe.png" />
              <Card image="/assets/images/europe2.png" />
              <Card image="/assets/images/europe3.png" />
            </CardSlider>
          </div>
        </div>
      </section>
      <section id="reason" className="reason">
        <h2 className="reson__title section-title">Reason</h2>
        <div className="reason-container container">
          <div className="reason-container__box reason-box">
            <i class="reason-box__icon bx bx-support"></i>
            <span className="reason-box__text">24 / 7 support</span>
          </div>
          <div className="reason-container__box reason-box">
            <i class="reason-box__icon bx bxs-plane-alt"></i>
            <span className="reason-box__text">
              Национальный перевозчик Uzbekistan Airways
            </span>
          </div>
          <div className="reason-container__box reason-box">
            <i class="reason-box__icon bx bxs-user-badge"></i>
            <span className="reason-box__text">Тур ВСЕ ВКЛЮЧЕНО </span>
          </div>
          <div className="reason-container__box reason-box">
            <div className="reason-box-inner">
              <img
                className="reason-ic"
                src="/assets/icons/click.png"
                alt="click logo"
                width="32"
                height="32"
              />
              <img
                className="reason-ic"
                src="/assets/icons/payme.png"
                alt="payme logo"
                width="32"
                height="32"
              />
              <i class="reason-icon bx bxs-dollar-circle"></i>
            </div>
            <span className="reason-box__text">Payment types</span>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2 className="contact__title section-title">Contact us</h2>
        <div className="contact-container container">
          <div className="contact-container__wrapper contact-wrapper">
            <div className="contact-wrapper__holder">
              <img
                className="contact-wrapper__icon"
                src="/assets/icons/mail.svg"
                alt="mail icon"
                width="25"
                height="25"
              />
              <Link href="#">
                <a className="contact-wrapper__link">
                  humotouropertor@gmail.com
                </a>
              </Link>
            </div>
            <div className="contact-wrapper__holder">
              <img
                className="contact-wrapper__icon"
                src="/assets/icons/phone.svg"
                alt="phone icon"
                width="25"
                height="25"
              />
              <Link href="+998900000250">
                <a className="contact-wrapper__link">+998900000250</a>
              </Link>
            </div>
            <div className="contact-wrapper__holder">
              <img
                className="contact-wrapper__icon"
                src="/assets/icons/location.svg"
                alt="location icon"
                width="25"
                height="25"
              />
              <address className="contact-wrapper__text">
                palonchi pistonchi kochasi 12A uy
              </address>
            </div>
          </div>
          <div className="contact-wrapper__container">
            <ul className="social">
              <li className="social__item">
                <Link href="#">
                  <a className="social__link">
                    <i class="social__icon social-icon-contact bx bxl-telegram"></i>
                  </a>
                </Link>
              </li>
              <li className="social__item">
                <Link href="#">
                  <a className="social__link">
                    <i class="social__icon social-icon-contact bx bxl-instagram"></i>
                  </a>
                </Link>
              </li>
              <li className="social__item">
                <Link href="#">
                  <a className="social__link">
                    <i class="social__icon social-icon-contact bx bxl-facebook"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
