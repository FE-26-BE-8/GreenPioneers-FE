import "./Tips.css";
import React, { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
function Tips() {
  const [tipsData, setTipsData ]  = useState([
    {
      id: 1,
      title: 'Penyebab Terjadinya Kebakaran Di Indonesia #1',
      description: 'Penyebab kebakaran hutan di Indonesia Pada dasar nya memiliki dua penyebab, yaitu kebakaran yang disebabkan oleh faktor alam dan juga faktor manusia namun sebagaian besar kebakaran hutan yang terjadi di Indonesia belakangan ini disebabkan karena ulah dari manusia nya sendiri...',
      imageSrc: 'https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png',
    },
    {
      id: 2,
      title: 'Penyebab Terjadinya Kebakaran Di Indonesia #2',
      description: 'Penyebab kebakaran hutan di Indonesia Pada dasar nya memiliki dua penyebab, yaitu kebakaran yang disebabkan oleh faktor alam dan juga faktor manusia namun sebagaian besar kebakaran hutan yang terjadi di Indonesia belakangan ini disebabkan karena ulah dari manusia nya sendiri...',
      imageSrc: 'https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png',
    },
    {
      id: 3,
      title: 'Penyebab Terjadinya Kebakaran Di Indonesia #3',
      description: 'Penyebab kebakaran hutan di Indonesia Pada dasar nya memiliki dua penyebab, yaitu kebakaran yang disebabkan oleh faktor alam dan juga faktor manusia namun sebagaian besar kebakaran hutan yang terjadi di Indonesia belakangan ini disebabkan karena ulah dari manusia nya sendiri...',
      imageSrc: 'https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png',
    },
    {
      id: 4,
      title: 'Penyebab Terjadinya Kebakaran Di Indonesia #4',
      description: 'Penyebab kebakaran hutan di Indonesia Pada dasar nya memiliki dua penyebab, yaitu kebakaran yang disebabkan oleh faktor alam dan juga faktor manusia namun sebagaian besar kebakaran hutan yang terjadi di Indonesia belakangan ini disebabkan karena ulah dari manusia nya sendiri...',
      imageSrc: 'https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png',
    },
  ]);

  const [topics, setTopics] = useState([
    {
      title: 'Penyebab Terjadinya Kebakaran Di Indonesia',
      image: 'https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png',
      updatedAt: 'Last updated 3 mins ago',
    },
    {
      title: 'Dampak Aktivitas Bakar Sampah di Jabodetabek',
      image: 'https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png',
      updatedAt: 'Last updated 3 mins ago',
    },
    {
      title: 'Dampak Pemanasan Global',
      image: 'https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png',
      updatedAt: 'Last updated 3 mins ago',
    },
    {
      title: 'Kenapa Polutan Adalah Zat yang Harus Kita Hindari?',
      image: 'https://i.ibb.co/M8XhDK3/image-2023-06-05-122457381.png',
      updatedAt: 'Last updated 3 mins ago',
    },
  ]);

  return (
    <>
      {/* //---------------------CarouselTips-------------------------- */}
      <Carousel className="home-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Carosel/Tips-Carosel-1.jpg"
            alt="First slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Carosel/Tips-Carosel-2.jpg"
            alt="Second slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Second slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Carosel/Tips-Carosel-3.jpg"
            alt="Third slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Third slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
       {/* //---------------------Tips-------------------------- */}
 
       <div className="tips-container container">
       <div className="col-md-7">
         <h1 className="heading">Tips</h1>
         {tipsData.map((tips) => (
           <div className="card mb-3 p-4 tips-card" key={tips.id}>
             <div className="row g-0">
               <div className="col-md-6">
                 <h5 className="card-title">{tips.title}</h5>
                 <p className="card-text">{tips.description}</p>
                 <div className="text-center btn-article">
                   <button className="btn-tips">Baca Selengkapnya</button>
                 </div>
               </div>
               <div className="col-md-6">
                 <div className="card-body">
                   <img
                     src={tips.imageSrc}
                     alt="Kebakaran Hutan"
                     className="img-fluid img-tips"
                   />
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>
       {/* //---------------------Trending Topics-------------------------- */}
       <div className="col-md-4 mt-lg-5 trend-container">
       <div className="trending-topics">
         <h2>Trending Topics</h2>
         <ul>
           {topics.map((topic, index) => (
             <li key={index}>
               <div className="topic">
                 <img src={topic.image} alt="Trending Topic" />
                 <div>
                   <a href="#">{topic.title}</a>
                   <p className="card-text">
                     <small className="text-body-secondary">
                       {topic.updatedAt}
                     </small>
                   </p>
                 </div>
               </div>
             </li>
           ))}
         </ul>
       </div>
     </div>
     </div>
       
     </>
   );
}
export default Tips;
