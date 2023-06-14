import React, { useState, useEffect } from "react";
import UseApiCall from "../../../helper/UseApiCall";
import "./DetailNews.css";
import { useParams } from "react-router-dom";

function DetailNews() {
  const { id } = useParams();
  const { fetchData, error } = UseApiCall();
  const [detailNews, setDetailNews] = useState(null);

  useEffect(() => {
    fetchData(`https://pear-vast-bream.cyclic.app/api/news/${id}`, "get", null, {
      authorization: "Bearer " + localStorage.getItem("Authorization"),
    }).then((data) => setDetailNews(data.data.data.news));
  }, []);

  return (
    <div className="container">
      {detailNews ? (
        <div className="news" key={detailNews.id}>
        <h2 className="title">{detailNews.judul}</h2>
        <img src={detailNews.gambar} alt="Gambar News" />
        <p>{detailNews.isi}</p>
      </div>
        ) : (
        <h1>Data Tidak Ditemukan!</h1>
      )}
    </div>
  );
}

export default DetailNews;

