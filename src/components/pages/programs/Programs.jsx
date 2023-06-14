import Footer from "../../footer/Footer";
import NavigationBar from "../../nav/NavigationBar";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import UseApiCall from "../../../helper/UseApiCall";
import "./Programs.css";

function Programs() {
  const { data, fetchData, error } = UseApiCall();
  const [programs, setPrograms] = useState(null);

  useEffect(() => {
    fetchData("https://pear-vast-bream.cyclic.app/api/program", "get", null, {
      authorization: "Bearer " + localStorage.getItem("Authorization"),
    }).then((data) => setPrograms(data.data.data.program));
  }, []);

  useEffect(() => {
    console.log(programs);
  }, [programs]);

  const truncateDescription = (description, maxWords) => {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return description;
  };

  return (
    <>
      <NavigationBar />
      {/* //---------------------CarouselPrograms-------------------------- */}
      <Carousel className="programs-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Carosel/Programs-Carosel-1.jpg"
            alt="First slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Mengubah Dunia Satu Langkah pada Waktu</h3>
              <p>Gabung dalam Program Peduli Lingkungan Kami!</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Carosel/Programs-Carosel-2.jpg"
            alt="Second slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Kami Membutuhkanmu</h3>
              <p>
                Bergabunglah dalam Program Peduli Lingkungan <br /> dan Bersama
                Kita Jadikan Bumi Tempat yang Lebih Baik!
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Carosel/Programs-Carosel-3.jpg"
            alt="Third slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Satu Aksi, Satu Perubahan</h3>
              <p>
                Jadilah Bagian dari Program Peduli Lingkungan dan Bantu Lindungi
                Alam!{" "}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* //---------------------Programs-------------------------- */}
      <div className="background-container"> 
      <div className="ajakan">
        <h1>
          Ayo! mari ikut serta dalam program tentang perubahan iklim dan
          berkontribusi dalam menjaga keberlanjutan bumi kita bersama!
        </h1>
      </div>
      <div className="programs-container">
        <div className="container">
          <h1 className="program-heading">Program Kami</h1>
        </div>
        <div className="center-container">
          {programs ? (
            programs.map((program) => (
              <div className="program-container" key={program.id}>
                <div className="img-container">
                  <img
                    src={program.gambar}
                    alt={program.judul}
                    className="program-image"
                  />
                </div>
                <div className="text-container">
                  <h2 className="program-title">{program.judul}</h2>
                  <p className="program-description">
                    {truncateDescription(program.isi, 12)}
                  </p>
                  <div className="button-container">
                    <button className="btn-event">Ikuti Program</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>Data Tidak Ditemukan</h1>
          )}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Programs;
