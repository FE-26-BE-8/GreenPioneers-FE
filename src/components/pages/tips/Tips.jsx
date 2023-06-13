import Footer from "../../footer/Footer";
import NavigationBar from "../../nav/NavigationBar";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import UseApiCall from "../../../helper/UseApiCall";
import Loading from "../../loading/Loading";
import "./Tips.css";

function Tips() {
  const { data, fetchData, error } = UseApiCall();
  const [tipsData, setTipsData] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state isLoading

  useEffect(() => {
    fetchData("https://pear-vast-bream.cyclic.app/api/tips", "get", null, {
      authorization: "Bearer " + localStorage.getItem("Authorization"),
    }).then((data) => {
      setTipsData(data.data.data.tips);
      setIsLoading(false); // Set isLoading ke false setelah mendapatkan data
    });
  }, []);

  useEffect(() => {
    fetchData("https://pear-vast-bream.cyclic.app/api/news", "get", null, {
      authorization: "Bearer " + localStorage.getItem("Authorization"),
    }).then((data) => setNewsData(data.data.data.news));
  }, []);

  useEffect(() => {
    console.log(tipsData);
  }, [tipsData]);

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
      {/* //---------------------CarouselTips-------------------------- */}
      <Carousel className="tips-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Carosel/Tips-Carosel-1.jpg"
            alt="First slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Menghiasi Tanah dengan Harapan</h3>
              <p>Memulai Perjalanan Baru dengan Penanaman Hutan Kembali</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Carosel/Tips-Carosel-2.jpg"
            alt="Second slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Inovasi dari Limbah</h3>
              <p>Membangun Masa Depan yang Berkelanjutan</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Carosel/Tips-Carosel-3.jpg"
            alt="Third slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Jauh dari Plastik, Dekat dengan Bumi</h3>
              <p>Mencari Solusi Kreatif untuk Mengurangi Penggunaan Plastik</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* //---------------------Tips-------------------------- */}
      <div className="tips-container container">
        <div className="col-md-7">
          <h1 className="heading">Tips</h1>
          {isLoading ? ( // Tambahkan kondisi isLoading untuk menampilkan Loading
            <Loading />
          ) : tipsData ? (
            tipsData.map((tips) => (
              <div className="card mb-3 p-4 tips-card" key={tips.id}>
                <div className="row g-0">
                  <div className="col-md-6">
                    <h5 className="card-title">{tips.judul}</h5>
                    <p className="card-text">
                    {truncateDescription(tips.isi, 50)}
                    </p>
                    <div className="text-center btn-article">
                      <button className="btn-tips">Baca Selengkapnya</button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <img
                        src={tips.gambar}
                        alt="Gambar Tips"
                        className="img-fluid img-tips"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>Data Tips Tidak Ditemukan</h1>
          )}
        </div>

        {/* //---------------------Trending Topics-------------------------- */}
        <div className="col-md-4 mt-lg-5 trend-container">
          <div className="trending-topics">
            <h2>Trending Topics</h2>
            {isLoading ? (
              <Loading /> // Tampilkan Loading jika isLoading true
            ) : (
              <ul>
                {newsData ? (
                  newsData.map((topic, index) => (
                    <li key={index}>
                      <div className="topic">
                        <img src={topic.gambar} alt="Trending Topic" />
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
                  ))
                ) : (
                  <h1>Data Trending Tidak Ditemukan</h1>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Tips;
