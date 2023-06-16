import Footer from "../../footer/Footer";
import NavigationBar from "../../nav/NavigationBar";
import React, { useState, useEffect } from "react";
import UseApiCall from "../../../helper/UseApiCall";
import Loading from "../../loading/Loading";
import { Link, useParams } from "react-router-dom";
import "./DetailTips.css";

function DetailTips() {
  const { id } = useParams();
  const [detailTips, setDetailTips] = useState(null);
  const { fetchData, error } = UseApiCall();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(
      `https://pear-vast-bream.cyclic.app/api/tips/${id}`,
      "get",
      null,
      {
        authorization: "Bearer " + localStorage.getItem("Authorization"),
      }
    )
      .then((data) => {
        setDetailTips(data.data.data.tips);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="container-detail-tips">
        {isLoading ? (
          <Loading />
        ) : detailTips ? (
          <div className="tips" key={detailTips.id}>
            <div className="btn-back">
              <Link to="/list-tips">← Kembali</Link>
            </div>
            <h2 className="title">{detailTips.judul}</h2>
            <img src={detailTips.gambar} alt="Gambar Tips" />
            <p>{detailTips.isi}</p>
          </div>
        ) : (
          <h1>Data Tidak Ditemukan!</h1>
        )}
      </div>
      <Footer />
    </>
  );
}

export default DetailTips;
