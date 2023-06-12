import React from "react";
import "../pages/css/Profile.css";

function Profile() {
  return (
    <>
        <div className="container text-center">
        <div class="text-center">
            <img src="gambar.jpg" class="rounded" height={200} />
        </div>
        <div className="row">
            <h1>Muhammad Iqbal</h1>
            <h6>Bergabung Sejak Tanggal 20-02-2017</h6>
        </div>
        <div className="row">
          <div className="col">
            <h1>Program Saya</h1>
            <div className="container">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="lingkungan.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
            <div class="col-md-8">
            <div class="card-body">
                <p class="card-text">
                    Di tengah kesadaran akan pentingnya menjaga lingkungan,
                    mendaur ulang sampah menjadi sebuah gerakan yang semakin
                    dikenal dan dijalankan oleh masyarakat. Namun, masih banyak
                    yang belum memahami betapa pentingnya tindakan ini bagi bumi
                    kita. Mari kita lihat lebih dalam tentang mengapa mendaur
                    ulang sampah sangat penting.</p>
            </div>
            </div>
            </div>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="lingkungan.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
            <div class="col-md-8">
            <div class="card-body">
                <p class="card-text">
                    Di tengah kesadaran akan pentingnya menjaga lingkungan,
                    mendaur ulang sampah menjadi sebuah gerakan yang semakin
                    dikenal dan dijalankan oleh masyarakat. Namun, masih banyak
                    yang belum memahami betapa pentingnya tindakan ini bagi bumi
                    kita. Mari kita lihat lebih dalam tentang mengapa mendaur
                    ulang sampah sangat penting.</p>
            </div>
            </div>
            </div>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="lingkungan.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
            <div class="col-md-8">
            <div class="card-body">
                <p class="card-text">
                    Di tengah kesadaran akan pentingnya menjaga lingkungan,
                    mendaur ulang sampah menjadi sebuah gerakan yang semakin
                    dikenal dan dijalankan oleh masyarakat. Namun, masih banyak
                    yang belum memahami betapa pentingnya tindakan ini bagi bumi
                    kita. Mari kita lihat lebih dalam tentang mengapa mendaur
                    ulang sampah sangat penting.</p>
            </div>
            </div>
            </div>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="lingkungan.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
            <div class="col-md-8">
            <div class="card-body">
                <p class="card-text">
                    Di tengah kesadaran akan pentingnya menjaga lingkungan,
                    mendaur ulang sampah menjadi sebuah gerakan yang semakin
                    dikenal dan dijalankan oleh masyarakat. Namun, masih banyak
                    yang belum memahami betapa pentingnya tindakan ini bagi bumi
                    kita. Mari kita lihat lebih dalam tentang mengapa mendaur
                    ulang sampah sangat penting.</p>
            </div>
            </div>
            </div>
            </div>
          </div>
          <div className="col">
          <div className="row settings-row">
          <h1 className="settings-title">Pengaturan Akun</h1>
          <form className="settings-form">
            <label htmlFor="inputName" className="settings-label">
              Nama
            </label>
            <input
              type="text"
              id="inputName"
              className="settings-input"
              aria-labelledby="passwordHelpBlock"
            />
            <label htmlFor="inputPassword5" className="settings-label">
              Password
            </label>
            <input
              type="password"
              id="inputPassword5"
              className="settings-input"
              aria-labelledby="passwordHelpBlock"
            />
            <label htmlFor="inputPasswordConfirm" className="settings-label">
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="inputPasswordConfirm"
              className="settings-input"
              aria-labelledby="passwordconfirmHelpBlock"
            />
            <button type="submit" className="settings-button">
              Submit
            </button>
          </form>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
