import Footer from "../../footer/Footer";
import NavigationBar from "../../nav/NavigationBar";
import React, { useState, useEffect } from "react";
import UseApiCall from "../../../helper/UseApiCall";
import Loading from "../../loading/Loading";
import { Link, useParams } from "react-router-dom";
import "./DetailNews.css";

function DetailNews() {
  const { id } = useParams();
  const { fetchData, error } = UseApiCall();
  const [detailNews, setDetailNews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(
      `https://pear-vast-bream.cyclic.app/api/news/${id}`,
      "get",
      null,
      {
        authorization: "Bearer " + localStorage.getItem("Authorization"),
      }
    )
      .then((data) => {
        setDetailNews(data.data.data.news);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="container-detail-news">
        {isLoading ? (
          <Loading />
        ) : detailNews ? (
          <div className="news" key={detailNews.id}>
            <div className="btn-back">
            <Link to="/list-news" >← Kembali</Link>
            </div>
            <h2 className="title">{detailNews.judul}</h2>
            <img src={detailNews.gambar} alt="Gambar News" />
            <p>{detailNews.isi}</p>
          </div>
        ) : (
          <h1>Data Tidak Ditemukan!</h1>
        )}
      </div>
      <Footer />
    </>
  );
}

export default DetailNews;
