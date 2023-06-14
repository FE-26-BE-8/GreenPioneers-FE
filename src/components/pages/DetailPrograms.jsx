import React, { useState } from "react";
import "../pages/DetailPrograms.css";

function DetailPrograms() {
  const [detailPrograms, setDetailPrograms] = useState([
    {
      id: 1,
      title: "Program Daur Ulang",
      description:
        "Daur ulang adalah salah satu cara yang efektif untuk mengurangi sampah dan mengurangi dampak negatif terhadap lingkungan. Bergabunglah dalam program ini dan mari kita bersama-sama melakukan daur ulang untuk menjaga bumi kita.\n\nMelalui program ini, kami akan memberikan pelatihan dan panduan praktis tentang cara mendaur ulang dengan benar serta memperkenalkan konsep lingkungan yang lebih ramah.",
      imageSrc: "https://i.ibb.co/CBk5WNL/program-daur-ulang.jpg",
      waktu: "Rabu, 07 Juni 2023 09:00 - 12:00 WIB",
      link: "https://meet.google.com/987654321",
    },
  ]);

  return (
    <>
      <div className="container">
        {detailPrograms.map((detailProgram) => (
          <div className="programs" key={detailProgram.id}>
            <div className="main">
              <img src={detailProgram.imageSrc} alt="Gambar Programs" />
              <div className="main-kanan">
                <h2 className="title">{detailProgram.title}</h2>
                <button className="btnProgram">Ikuti Program</button>
              </div>
            </div>
            <p>{detailProgram.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default DetailPrograms;
