import Footer from "../../footer/Footer";
import NavigationBar from "../../nav/NavigationBar";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import UseApiCall from "../../../helper/UseApiCall";
import { useNavigate } from "react-router-dom";
import Loading from "../../loading/Loading";
import Swal from "sweetalert";
import "./News.css";

function News() {
  const { data, fetchData, error } = UseApiCall();
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleDetailButton = (id) => {
    navigate(`/list-news/${id}`);
  };

  useEffect(() => {
    const userLogin = localStorage.getItem("Authorization");
    // console.log(userLogin, "=> ini localStorage");
    if (userLogin) {
      fetchData("https://pear-vast-bream.cyclic.app/api/news", "get", null, {
        authorization: "Bearer " + localStorage.getItem("Authorization"),
      })
        .then((data) => {
          setNewsData(data.data.data.news);
          setIsLoading(false);
        })
        .catch(() => {
          Swal("Error", "Gagal mengambil data news", "error");
        });
    } else {
      Swal("Error", "Silahkan Login Terlebih Dahulu", "error").then(() => {
        navigate("/login");
      });
    }
  }, []);

  useEffect(() => {
    console.log(newsData);
  }, [newsData]);

  const truncateDescription = (description, maxWords) => {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return description;
  };

  return (
    <>
      <NavigationBar />
      {/* //---------------------CarouselNews-------------------------- */}
      <Carousel className="news-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/mNZdGrM/News-Carosel-1.jpg"
            alt="First slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Melawan Nyala Membara</h3>
              <p>
                Melintasi Awan Asap, Membuka Mata Hati pada Penderitaan Hutan
                yang Terbakar.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Nm7SFV7/News-Carosel-2.jpg"
            alt="Second slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Kekeringan</h3>
              <p>
                Ketika Pohon-pohon Tertunduk dan Hati-hati Merana dalam Rindu
                Akan Air
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/kD08vqX/News-Carosel-3.jpg"
            alt="Third slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Renungan Dalam Genangan</h3>
              <p>Meresapi Keterikatan Manusia dengan Alam Semesta</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* //---------------------NEWS-------------------------- */}
      <div className="background-container-2">
        <div className="news-container container">
          <div className="col-md-7">
            <h1 className="heading">News</h1>
            {isLoading ? (
              <Loading />
            ) : newsData ? (
              newsData.map((news) => (
                <div className="card mb-3 p-4 news-card" key={news.id}>
                  <div className="row g-0">
                    <div className="col-md-6">
                      <h5 className="card-title">{news.judul}</h5>
                      <p className="card-text">
                        {truncateDescription(news.isi, 30)}
                      </p>
                      <div className="text-center btn-article">
                        <button
                          onClick={() => handleDetailButton(news.id)}
                          className="btn-news"
                        >
                          Baca Selengkapnya
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <img
                          src={news.gambar}
                          alt="Kebakaran Hutan"
                          className="img-fluid img-news"
                          onClick={() => handleDetailButton(news.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>Data News Tidak Ditemukan</h1>
            )}
          </div>

          {/* //---------------------Trending Topics-------------------------- */}
          <div className="col-md-4 mt-lg-5 trend-container">
            <div className="trending-topics">
              <h2>Trending Topics</h2>
              {isLoading ? (
                <Loading />
              ) : newsData ? (
                <ul>
                  {newsData.map((topic, index) => (
                    <li key={index}>
                      <div className="topic">
                        <img
                          src={topic.gambar}
                          alt="Trending Topic"
                          onClick={() => handleDetailButton(topic.id)}
                        />
                        <div>
                          <a href="#">{topic.judul}</a>
                          <p className="card-text">
                            <small className="text-body-secondary">
                              {topic.waktu}
                            </small>
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <h1>Data Trending Tidak Ditemukan</h1>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;

