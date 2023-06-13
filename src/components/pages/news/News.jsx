import Footer from "../../footer/Footer";
import NavigationBar from "../../nav/NavigationBar";
import React, { useEffect, useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import UseApiCall from "../../../helper/UseApiCall";
import Loading from "../../loading/Loading"
import "./News.css";


function News() {

  const {data, fetchData, error} = UseApiCall();
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state isLoading

  useEffect(() => {
    fetchData("https://pear-vast-bream.cyclic.app/api/news", "get", null, {
      'authorization': "Bearer " + localStorage.getItem("Authorization")
    }).then(data => {setNewsData(data.data.data.news);
      setIsLoading(false); // Set isLoading ke false setelah mendapatkan data
    });
  }, []);

  useEffect(() => {
    console.log(newsData)
  },[newsData])

  return (
    <>
    <NavigationBar />
    {/* //---------------------CarouselNews-------------------------- */}
    <Carousel className="news-carousel">
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="../src/assets/Carosel/News-Carosel-1.jpg"
         alt="First slide"
       />
       <div className="wrapper-title-carousel">
         <div className="title-carousel">
           <h3>Melawan Nyala Membara</h3>
           <p>Melintasi Awan Asap, Membuka Mata Hati pada Penderitaan Hutan yang Terbakar.</p>
         </div>
       </div>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="../src/assets/Carosel/News-Carosel-2.jpg"
         alt="Second slide"
       />
       <div className="wrapper-title-carousel">
         <div className="title-carousel">
           <h3>Kekeringan</h3>
           <p>Ketika Pohon-pohon Tertunduk dan Hati-hati Merana dalam Rindu Akan Air</p>
         </div>
       </div>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="../src/assets/Carosel/News-Carosel-3.jpg"
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
   <div className="news-container container">
   <div className="col-md-7">
     <h1 className="heading">News</h1>

     {isLoading ? (
  <Loading /> // Tampilkan Loading jika isLoading true
) : (
  newsData ? (
    newsData.map((news) => (
      <div className="card mb-3 p-4 news-card" key={news.id}>
        <div className="row g-0">
          <div className="col-md-6">
            <h5 className="card-title">{news.judul}</h5>
            <p className="card-text">{news.isi}</p>
            <div className="text-center btn-article">
              <button className="btn-news">Baca Selengkapnya</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <img
                src={news.gambar}
                alt="Kebakaran Hutan"
                className="img-fluid img-news"
              />
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <h1>Data News Tidak Ditemukan</h1>
  )
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
                    <small className="text-body-secondary">{topic.waktu}</small>
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
export default News;
