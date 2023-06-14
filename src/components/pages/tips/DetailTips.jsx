import React, { useState, useEffect } from "react";
import UseApiCall from "../../../helper/UseApiCall";
import { useParams } from "react-router-dom";
import "../tips/DetailTips.css";

function DetailTips() {
  const { id } = useParams();
  const [detailTips, setDetailTips] = useState(null)
  const { fetchData, error } = UseApiCall();

  useEffect(() => {
    fetchData(`https://pear-vast-bream.cyclic.app/api/tips/${id}`, "get", null, {
      authorization: "Bearer " + localStorage.getItem("Authorization"),
    }).then((data) => setDetailTips(data.data.data.tips));
  }, []);


  return (
    <>
      <div className="container">
        {detailTips ? ( 
          <div className="tips" key={detailTips.id}>
            <h2 className="title">{detailTips.judul}</h2>
            <img src={detailTips.gambar} alt="Gambar Tips" />
            <p>{detailTips.isi}</p>
          </div>
             ) : (
              <h1>Data Tidak Ditemukan!</h1>
            )}
      </div>
    </>
  );
}

export default DetailTips;
