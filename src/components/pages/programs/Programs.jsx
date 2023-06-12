import React, { useState } from "react";
import "../programs/Programs.css";

function Programs() {
  const [programs, setPrograms] = useState([
    {
      id: 1,
      imageSrc: "https://i.ibb.co/rb8r49W/image-2023-06-05-102713445.png",
      title: "Program Menanam Tumbuhan #1",
      description:
        "Sebuah program yang bertujuan untuk meningkatkan jumlah penanaman pohon. Sebuah program yang bertujuan untuk meningkatkan jumlah penanaman pohon dan menjaga kelestarian alam",
    },
    {
      id: 2,
      imageSrc: "https://i.ibb.co/rb8r49W/image-2023-06-05-102713445.png",
      title: "Program Menanam Tumbuhan #2",
      description:
        "Sebuah program yang bertujuan untuk meningkatkan jumlah penanaman pohon.",
    },
    {
      id: 3,
      imageSrc: "https://i.ibb.co/rb8r49W/image-2023-06-05-102713445.png",
      title: "Program Menanam Tumbuhan #3",
      description:
        "Sebuah program yang bertujuan untuk meningkatkan jumlah penanaman pohon.",
    },
    {
      id: 4,
      imageSrc: "https://i.ibb.co/rb8r49W/image-2023-06-05-102713445.png",
      title: "Program Menanam Tumbuhan #4",
      description:
        "Sebuah program yang bertujuan untuk meningkatkan jumlah penanaman pohon. Sebuah program yang bertujuan untuk meningkatkan jumlah penanaman pohon dan menjaga kelestarian alam",
    },
    {
      id: 5,
      imageSrc: "https://i.ibb.co/rb8r49W/image-2023-06-05-102713445.png",
      title: "Program Menanam Tumbuhan #5",
      description:
        "Sebuah program yang bertujuan untuk meningkatkan jumlah penanaman pohon. Sebuah program yang bertujuan untuk meningkatkan jumlah penanaman pohon dan menjaga kelestarian alam",
    },
  ]);

  const truncateDescription = (description, maxWords) => {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return description;
  };

  return (
    <>
      <div className="programs-container">
        <div className="container">
          <h1 className="program-heading">Program Kami</h1>
        </div>
        <div className="center-container">
          {programs.map((program) => (
            <div className="program-container" key={program.id}>
              <div className="img-container">
                <img
                  src={program.imageSrc}
                  alt={program.title}
                  className="program-image"
                />
              </div>
              <div className="text-container">
                <h2 className="program-title">{program.title}</h2>
                <p className="program-description">
                  {truncateDescription(program.description, 12)}
                </p>
                <div className="button-container">
                  <button className="follow-button">Ikuti Program</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Programs;
