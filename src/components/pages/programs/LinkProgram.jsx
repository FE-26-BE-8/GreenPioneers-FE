import React, { useState } from "react";
import "../pages/LinkProgram.css";

function LinkProgram() {
  const [links, setLinks] = useState([
    {
      id: "program-jd2b",
      judul: "Program Daur Ulang",
      isi:
        "Daur ulang adalah salah satu cara yang efektif untuk mengurangi sampah dan mengurangi dampak negatif terhadap lingkungan. Bergabunglah dalam program ini dan mari kita bersama-sama melakukan daur ulang untuk menjaga bumi kita.\n\nMelalui program ini, kami akan memberikan pelatihan dan panduan praktis tentang cara mendaur ulang dengan benar serta memperkenalkan konsep lingkungan yang lebih ramah.",
      gambar: "https://i.ibb.co/CBk5WNL/program-daur-ulang.jpg",
      waktu: "Rabu, 07 Juni 2023 09:00 - 12:00 WIB",
      link: "https://meet.google.com/987654321"
    },
  ]);

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
