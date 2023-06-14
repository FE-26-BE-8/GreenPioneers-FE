import Footer from "../../footer/Footer";
import NavigationBar from "../../nav/NavigationBar";
import React, { useState, useEffect } from "react";
import UseApiCall from "../../../helper/UseApiCall";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../loading/Loading";
import "./DetailPrograms.css";

function DetailPrograms() {
  const { id } = useParams();
  const { fetchData, error } = UseApiCall();
  const [detailPrograms, setDetailPrograms] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleDetailButton = (id) => {
    navigate(`/link-programs/${id}`);
  };

  useEffect(() => {
    fetchData(
      `https://pear-vast-bream.cyclic.app/api/program/${id}`,
      "get", null, { authorization: "Bearer " + localStorage.getItem("Authorization"), }
    ).then((data) => { setDetailPrograms(data.data.data.program);
        setIsLoading(false); 
      })
      .catch((error) => {
        setIsLoading(false); 
      });
  }, []);
  
  return (
    <>
    <NavigationBar />
       {/* //---------------------Detail Programs-------------------------- */}
       <div className="container-detail-programs">
        {isLoading ? (
          <Loading />
        ) : detailPrograms ? (
          <div className="programs" key={detailPrograms.id}>
            <div className="main">
              <img src={detailPrograms.gambar} alt="Gambar Programs" />
              <div className="main-kanan">
                <h2 className="title">{detailPrograms.judul}</h2>
                <button
                  onClick={() => handleDetailButton(detailPrograms.id)}
                  className="btnProgram"
                >
                  Ikuti Program
                </button>
              </div>
            </div>
            <p>{detailPrograms.isi}</p>
          </div>
        ) : (
          <h1>Data Tidak Ditemukan!</h1>
        )}
      </div>
      <Footer />
    </>
  );
}

export default DetailPrograms;
