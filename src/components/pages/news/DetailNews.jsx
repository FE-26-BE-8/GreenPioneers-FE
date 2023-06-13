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
  }, [id]);

  return (
    <div className="container">
      {detailNews ? (
        detailNews.map((detailNew) => (
          <div className="news" key={detailNew.id}>
            <h2 className="title">{detailNew.judul}</h2>
            <img src={detailNew.gambar} alt="Gambar News" />
            <p>{detailNew.isi}</p>
          </div>
        ))
      ) : (
        <h1>Data Tidak Ditemukan!</h1>
      )}
    </div>
  );
}

export default DetailNews;
