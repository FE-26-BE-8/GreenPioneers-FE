import Footer from "../../footer/Footer";
import NavigationBar from "../../nav/NavigationBar";
import React, { useState, useEffect } from "react";
import UseApiCall from "../../../helper/UseApiCall";
import { useParams } from "react-router-dom";
import Loading from "../../loading/Loading";
import "./LinkProgram.css";

function LinkProgram() {  
  const { id } = useParams();
  const [linkPrograms, setLinkProgams] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const { fetchData, error } = UseApiCall();

  useEffect(() => {
    fetchData(
      `https://pear-vast-bream.cyclic.app/api/program/${id}`,
      "get", null, { authorization: "Bearer " + localStorage.getItem("Authorization"), }
    ).then((data) => { setLinkProgams(data.data.data.program);
        setIsLoading(false); 
      })
      .catch((error) => {
        setIsLoading(false); 
      });
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="container">
        <div className="link-container">
          <h1 className="link-title">Terimakasih sudah mengikuti program!</h1>
          <p>Berikut rincian program yang diikuti</p>
          {isLoading ? (
            <Loading /> 
          ) : linkPrograms ? (
            <div key={linkPrograms.id}>
              <h1 className="urlLink">
                <a href={linkPrograms.link} target="_blank" rel="noopener noreferrer">
                  {linkPrograms.link}
                </a>
              </h1>
              <p>Hai, Selamat Mengikuti Acara :</p>
              <p className="program-title">{linkPrograms.judul}</p>
              <div className="tanggal-platform">
                <div className="tanggal">
                  <p className="tanggal-title">Tanggal</p>
                  <p className="tanggal-isi">{linkPrograms.waktu}</p>
                </div>
                <div className="platform">
                  <p className="platform-title">Platform</p>
                  <p className="platform-isi">Google Meet</p>
                </div>
              </div>
            </div>
          ) : (
            <h1>Data Tidak Ditemukan!</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LinkProgram;
