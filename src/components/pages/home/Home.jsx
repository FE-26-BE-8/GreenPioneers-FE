import "./Home.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
function Home() {
  const [programEvents, setProgramEvents] = useState([
    {
      id: 1,
      imageSrc: "https://i.ibb.co/rb8r49W/image-2023-06-05-102713445.png",
      title: "Program Menanam Tumbuhan #1",
      description:
        "Sebuah program yang bertujuan untuk meningkatkan jumlah penanaman pohon.",
    },
    {
      id: 2,
      imageSrc: "https://i.ibb.co/rb8r49W/image-2023-06-05-102713445.png",
      title: "Program Menanam Tumbuhan #2",
      description:
        "Sebuah program yang bertujuan untuk meningkatkan jumlah penanaman pohon.",
    },
    {
      id: 3,
      imageSrc: "https://i.ibb.co/rb8r49W/image-2023-06-05-102713445.png",
      title: "Program Menanam Tumbuhan #3",
      description:
        "Sebuah program yang bertujuan untuk meningkatkan jumlah penanaman pohon.",
    },
    {
      id: 4,
      imageSrc: "https://i.ibb.co/rb8r49W/image-2023-06-05-102713445.png",
      title: "Program Menanam Tumbuhan #4",
      description:
        "Sebuah program yang bertujuan untuk meningkatkan jumlah penanaman pohon.",
    },
    {
      id: 5,
      imageSrc: "https://i.ibb.co/rb8r49W/image-2023-06-05-102713445.png",
      title: "Program Menanam Tumbuhan #5",
      description:
        "Sebuah program yang bertujuan untuk meningkatkan jumlah penanaman pohon.",
    },
    {
      id: 6,
      imageSrc: "https://i.ibb.co/rb8r49W/image-2023-06-05-102713445.png",
      title: "Program Menanam Tumbuhan #6",
      description:
        "Sebuah program yang bertujuan untuk meningkatkan jumlah penanaman pohon.",
    },
  ]);

  const [newsData, setNewsData] = useState([
    {
      id: 1,
      title: "Penyebab Terjadinya Kebakaran Di Indonesia #1",
      description:
        "Penyebab kebakaran hutan di Indonesia Pada dasar nya memiliki dua penyebab, yaitu kebakaran yang disebabkan oleh faktor alam dan juga faktor manusia namun sebagaian besar kebakaran hutan yang terjadi di Indonesia belakangan ini disebabkan karena ulah dari manusia nya sendiri...",
      imageSrc: "https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png",
    },
    {
      id: 2,
      title: "Penyebab Terjadinya Kebakaran Di Indonesia #2",
      description:
        "Penyebab kebakaran hutan di Indonesia Pada dasar nya memiliki dua penyebab, yaitu kebakaran yang disebabkan oleh faktor alam dan juga faktor manusia namun sebagaian besar kebakaran hutan yang terjadi di Indonesia belakangan ini disebabkan karena ulah dari manusia nya sendiri...",
      imageSrc: "https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png",
    },
    {
      id: 3,
      title: "Penyebab Terjadinya Kebakaran Di Indonesia #3",
      description:
        "Penyebab kebakaran hutan di Indonesia Pada dasar nya memiliki dua penyebab, yaitu kebakaran yang disebabkan oleh faktor alam dan juga faktor manusia namun sebagaian besar kebakaran hutan yang terjadi di Indonesia belakangan ini disebabkan karena ulah dari manusia nya sendiri...",
      imageSrc: "https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png",
    },
    {
      id: 4,
      title: "Penyebab Terjadinya Kebakaran Di Indonesia #4",
      description:
        "Penyebab kebakaran hutan di Indonesia Pada dasar nya memiliki dua penyebab, yaitu kebakaran yang disebabkan oleh faktor alam dan juga faktor manusia namun sebagaian besar kebakaran hutan yang terjadi di Indonesia belakangan ini disebabkan karena ulah dari manusia nya sendiri...",
      imageSrc: "https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png",
    },
  ]);

  const [topics, setTopics] = useState([
    {
      title: "Penyebab Terjadinya Kebakaran Di Indonesia",
      image: "https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png",
      updatedAt: "Last updated 3 mins ago",
    },
    {
      title: "Dampak Aktivitas Bakar Sampah di Jabodetabek",
      image: "https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png",
      updatedAt: "Last updated 3 mins ago",
    },
    {
      title: "Dampak Pemanasan Global",
      image: "https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png",
      updatedAt: "Last updated 3 mins ago",
    },
    {
      title: "Kenapa Polutan Adalah Zat yang Harus Kita Hindari?",
      image: "https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png",
      updatedAt: "Last updated 3 mins ago",
    },
  ]);

  return (
    <>
     <Carousel className="home-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Carosel/Home-Carosel-1.jpg"
            alt="First slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Harmoni Tersembunyi</h3>
              <p>Mengungkap Keindahan dan Keajaiban Lingkungan Alam</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Carosel/Home-Carosel-2.jpg"
            alt="Second slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Sentuhan Angin yang Menyegarkan</h3>
              <p>Rintihan Kebebasan di Tengah Hutan</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Carosel/Home-Carosel-3.jpg"
            alt="Third slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Hijau Mengheningkan Cipta</h3>
              <p>Mengagumi Keindahan Melodi Hidup di Bawah Daun-Daun</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div>
        {/* ---------------------PROGRAM EVENTS-------------------- */}
        <div className="program-events-container">
          <h1 className="heading">Program Events</h1>
          <div className="box-container-1">
            {programEvents.map((event) => (
              <div className="program-events-card" key={event.id}>
                <img src={event.imageSrc} alt={event.title} />
                <div className="title-events">
                  <h3>{event.title}</h3>
                </div>
                <div className="detail-events">
                  <p>{event.description}</p>
                </div>
                <button className="btn-event">Selengkapnya</button>
              </div>
            ))}
          </div>
        </div>

        {/* //---------------------NEWS-------------------------- */}

        <div className="news-container container">
          <div className="col-md-7">
            <h1 className="heading">News</h1>
            {newsData.map((news) => (
              <div className="card mb-3 p-4 news-card" key={news.id}>
                <div className="row g-0">
                  <div className="col-md-6">
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text">{news.description}</p>
                    <div className="text-center btn-article">
                      <button className="btn-news">Baca Selengkapnya</button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <img
                        src={news.imageSrc}
                        alt="Kebakaran Hutan"
                        className="img-fluid img-news"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* //---------------------Trending Topics-------------------------- */}
          <div className="col-md-4 mt-lg-5 trend-container">
            <div className="trending-topics">
              <h2>Trending Topics</h2>
              <ul>
                {topics.map((topic, index) => (
                  <li key={index}>
                    <div className="topic">
                      <img src={topic.image} alt="Trending Topic" />
                      <div>
                        <a href="#">{topic.title}</a>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {topic.updatedAt}
                          </small>
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
