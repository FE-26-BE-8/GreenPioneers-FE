import React, { useState } from "react";
import "../tips/DetailTips.css";

function DetailTips() {
  const [detailTips, setDetailTips] = useState([
    {
      id: 1,
      imageSrc: "https://i.ibb.co/rb8r49W/image-2023-06-05-102713445.png",
      title:
        "Tips untuk Mengatasi Perubahan Iklim dan Memberikan Dampak Positif",
      description:
        "Di tengah dunia yang terus berubah, menangani perubahan iklim menjadi sangat penting. Artikel ini memberikan lima tips praktis untuk mengatasi perubahan iklim dan berkontribusi pada masa depan yang lebih berkelanjutan. Temukan langkah-langkah nyata yang dapat Anda lakukan dalam kehidupan sehari-hari untuk memberikan dampak positif pada lingkungan. Mulai dari mengurangi jejak karbon Anda hingga mendukung energi terbarukan, tips ini memberdayakan individu untuk menjadi agen perubahan dalam perjuangan melawan perubahan iklim. Bergabunglah dengan gerakan global dan ambil tindakan sekarang juga!",
    },
  ]);

  return (
    <>
      <div className="container">
        {detailTips.map((detailTip) => (
          <div className="tips" key={detailTip.id}>
            <h2 className="title">{detailTip.title}</h2>
            <img src={detailTip.imageSrc} alt="Gambar Tips" />
            <p>{detailTip.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default DetailTips;
