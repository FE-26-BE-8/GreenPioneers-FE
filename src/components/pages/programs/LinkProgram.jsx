import React, { useState } from "react";
import UseApiCall from "../../../helper/UseApiCall";
import { useParams } from "react-router-dom";
import "../pages/LinkProgram.css";

function LinkProgram() {  
  const { id } = useParams();
  const [links, setLinks] = useState(null)
  const { fetchData, error } = UseApiCall();

  useEffect(() => {
    fetchData(`https://pear-vast-bream.cyclic.app/api/program/${id}`, "get", null, {
      authorization: "Bearer " + localStorage.getItem("Authorization"),
    }).then((data) => setLinks(data.data.data.program));
  }, []);

  return (
    <>
      <div className="container">
        <div className="link-container">
          <h1 className="link-title">Terimakasih sudah mengikuti program!</h1>
          <p>Berikut rincian program yang diikuti</p>
          {links.map((program) => (
            <div key={program.id}>
              <h1 className="urlLink">
                <a href={program.link} target="_blank" rel="noopener noreferrer">
                  {program.link}
                </a>
              </h1>
              <p>Hai, Selamat Mengikuti Acara :</p>
              <p className="program-title">{program.judul}</p>
              <div className="tanggal-platform">
                <div className="tanggal">
                  <p className="tanggal-title">Tanggal</p>
                  <p className="tanggal-isi">{program.waktu}</p>
                </div>
                <div className="platform">
                  <p className="platform-title">Platform</p>
                  <p className="platform-isi">Google Meet</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LinkProgram;
