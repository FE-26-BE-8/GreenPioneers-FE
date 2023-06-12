import React, { useState } from "react";
import "../news/DetailNews.css";

function DetailNews() {
  const [detailNews, setDetailNews] = useState([
    {
        id: 1,
        title: 'Penyebab Terjadinya Kebakaran Di Indonesia #1',
        description: 'Penyebab kebakaran hutan di Indonesia Pada dasar nya memiliki dua penyebab, yaitu kebakaran yang disebabkan oleh faktor alam dan juga faktor manusia namun sebagaian besar kebakaran hutan yang terjadi di Indonesia belakangan ini disebabkan karena ulah dari manusia nya sendiri...',
        imageSrc: 'https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png',
      },
  ]);

  return (
    <>
      <div className="container">
        {detailNews.map((detailNew) => (
          <div className="news" key={detailNew.id}>
            <h2 className="title">{detailNew.title}</h2>
            <img src={detailNew.imageSrc} alt="Gambar News" />
            <p>{detailNew.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default DetailNews;
