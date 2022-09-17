import Head from "next/head";
import Image from "next/image";
import CardSlider from "../components/Slider";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <section id="travel" className="travel">
        <h2 className="travel__title section-title">Travel with us</h2>
        <div className="travel-container">
          <div className="travel-container__left">
            <h3 className="travel-container__title">Arabic travel</h3>
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
            </div>
          </div>
          <div className="travel-container__right">
            <CardSlider>
              <Card image="/assets/images/arab.png" />
              <Card image="/assets/images/arab2.png" />
              <Card image="/assets/images/arab3.png" />
            </CardSlider>
          </div>
        </div>
        <div className="travel-container">
          <div className="travel-container__left">
            <h3 className="travel-container__title">uae travel</h3>
            <div className="travel-container__info info">
              <h4 className="info__title">travel info</h4>
              <ul className="info__list">
                <li className="info__item">
                  <p className="info__text">- Lorem ipsum dolor sit amet.</p>
                </li>
                <li className="info__item">
                  <p className="info__text">- Lorem ipsum dolor sit amet.</p>
                </li>
                <li className="info__item">
                  <p className="info__text">- Lorem ipsum dolor sit amet.</p>
                </li>
                <li className="info__item">
                  <p className="info__text">- Lorem ipsum dolor sit amet.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="travel-container__right">
            <CardSlider>
              <Card image="/assets/images/dubai.png" />
              <Card image="/assets/images/dubai2.png" />
              <Card image="/assets/images/dubai3.png" />
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
      </section>
      <section id="contact" className="contact">
        <h2 className="contact__title section-title">Contact us</h2>
      </section>
    </>
  );
}
