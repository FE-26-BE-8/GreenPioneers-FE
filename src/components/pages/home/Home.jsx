import Footer from "../../footer/Footer";
import NavigationBar from "../../nav/NavigationBar";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
function Home() {
  const [programEvents, setProgramEvents] = useState([
    {
      "id": "program-eYAK",
      "judul": "Program Penghijauan Kota",
      "isi": "Program ini bertujuan untuk meningkatkan kualitas udara, mengurangi suhu permukaan, dan meningkatkan estetika kota melalui penanaman pohon dan penataan ruang hijau. Program ini juga dapat melibatkan pendirian taman-taman kota, taman komunitas, dan pelestarian ruang terbuka hijau.",
      "gambar": "https://i.ibb.co/wcQrNHP/Program-Penghijauan-Kota.jpg",
      "waktu": "Rabu, 29 Juni 2023 09:00 - 12:00 WIB",
      "link": "https://meet.google.com/9876eqsae43"
  },
  {
      "id": "program-GLqk",
      "judul": "Program Konservasi Sumber Daya Alam",
      "isi": "Program ini bertujuan untuk melindungi sumber daya alam seperti hutan, sungai, dan lahan basah. Program ini melibatkan kegiatan penanaman kembali pohon, pemulihan habitat alami, pemantauan keanekaragaman hayati, dan pengaturan penggunaan sumber daya alam yang berkelanjutan.",
      "gambar": "https://i.ibb.co/fxpLHkm/Program-Konservasi-Sumber-Daya-Alam.jpg",
      "waktu": "senin, 26 Juni 2023 10:00 - 13:00 WIB",
      "link": "https://meet.google.com/987654qe21"
  },
  {
      "id": "program-jd2b",
      "judul": "Program Daur Ulang",
      "isi": "Daur ulang adalah salah satu cara yang efektif untuk mengurangi sampah dan mengurangi dampak negatif terhadap lingkungan. Bergabunglah dalam program ini dan mari kita bersama-sama melakukan daur ulang untuk menjaga bumi kita.\n\nMelalui program ini, kami akan memberikan pelatihan dan panduan praktis tentang cara mendaur ulang dengan benar serta memperkenalkan konsep lingkungan yang lebih ramah.",
      "gambar": "https://i.ibb.co/CBk5WNL/program-daur-ulang.jpg",
      "waktu": "Rabu, 07 Juni 2023 09:00 - 12:00 WIB",
      "link": "https://meet.google.com/987654321"
  },
  {
      "id": "program-k2fm",
      "judul": "Program Edukasi Lingkungan",
      "isi": "Pendidikan dan kesadaran tentang lingkungan sangat penting dalam upaya menjaga kelestarian alam. Gabunglah dengan program ini dan ikuti sesi edukasi lingkungan kami untuk belajar lebih banyak tentang bagaimana kita dapat menjaga bumi kita.\n\nKami akan membahas topik-topik seperti keanekaragaman hayati, perubahan iklim, polusi, dan langkah-langkah yang dapat kita ambil untuk mendorong perubahan positif dalam kehidupan sehari-hari.",
      "gambar": "https://i.ibb.co/h8gHF47/program-edukasi-lingkngan.jpg",
      "waktu": "Jumat, 09 Juni 2023 10:00 - 13:00 WIB",
      "link": "https://meet.google.com/567891234"
  },
  {
      "id": "program-sdf1",
      "judul": "Program Penebangan Hutan",
      "isi": "Penebangan hutan adalah salah satu masalah besar yang mengancam kelestarian alam kita. Kami mengajak Anda untuk bergabung dalam program ini untuk mendukung kampanye perlindungan hutan dan menyelamatkan lingkungan.\n\nBersama-sama, kita dapat melakukan langkah konkret untuk menghentikan penebangan liar dan mengembangkan solusi berkelanjutan bagi kehidupan di planet ini.",
      "gambar": "https://i.ibb.co/3vN9Zxf/program-penebangan-hutan.jpg",
      "waktu": "Senin, 05 Juni 2023 08:00 - 11:00 WIB",
      "link": "https://meet.google.com/123456789"
  },
  {
      "id": "program-Y12B",
      "judul": "Program Pengurangan Emisi Gas Rumah Kaca",
      "isi": "Program ini bertujuan untuk mengurangi emisi gas rumah kaca yang berkontribusi terhadap perubahan iklim. Program ini dapat mencakup penggunaan energi terbarukan, peningkatan efisiensi energi, pengurangan penggunaan kendaraan bermotor, dan promosi transportasi ramah lingkungan seperti bersepeda atau menggunakan transportasi umum.\n",
      "gambar": "https://i.ibb.co/6Z8qXLV/Program-Pengurangan-Emisi-Gas-Rumah-Kaca.jpg",
      "waktu": "jumat, 23 Juni 2023 08:00 - 11:00 WIB",
      "link": "https://meet.google.com/9823vfrs23"
  }
  ]);

  const [newsData, setNewsData] = useState([
    {
      "id": "news-3g7s",
      "judul": "Perubahan Iklim: Tantangan Besar yang Menghadang Kehidupan Bumi",
      "isi": "Perubahan iklim merupakan salah satu tantangan terbesar yang dihadapi oleh manusia dan kehidupan di Bumi. Dampak dari perubahan iklim sangat luas dan dapat mempengaruhi berbagai aspek kehidupan, termasuk kesehatan, ekonomi, dan lingkungan. Salah satu efek yang paling terlihat adalah peningkatan suhu rata-rata global. Hal ini mengakibatkan pencairan es di kutub, naiknya permukaan air laut, dan intensitas cuaca yang ekstrem. Banyak spesies hewan dan tumbuhan yang terancam punah karena habitat alaminya terganggu.\n\nDalam menghadapi tantangan perubahan iklim, organisasi seperti Greenpeace memainkan peran penting dalam meningkatkan kesadaran publik, melakukan penelitian ilmiah, dan melakukan advokasi kebijakan. Mereka berupaya untuk mendorong negara-negara dan perusahaan agar mengurangi emisi gas rumah kaca, memperkuat energi terbarukan, dan melindungi ekosistem penting di seluruh dunia.\n\nKesadaran akan perubahan iklim juga penting bagi setiap individu. Tindakan sehari-hari seperti mengurangi penggunaan energi fosil, memilih transportasi ramah lingkungan, dan mendukung produk-produk yang berkelanjutan dapat membantu mengurangi dampak negatif perubahan iklim. Dalam menjaga keberlanjutan planet ini, kolaborasi dan aksi kolektif sangat diperlukan.\n\nSelain itu, perubahan iklim juga berdampak pada sektor ekonomi. Bencana alam yang lebih sering terjadi, seperti banjir dan kekeringan, dapat merusak infrastruktur, menghancurkan pertanian, dan mengganggu rantai pasokan. Oleh karena itu, pemerintah dan sektor bisnis perlu beradaptasi dengan perubahan iklim, mengembangkan strategi mitigasi, dan menciptakan lapangan kerja yang berkelanjutan.\n\nTidak hanya itu, perubahan iklim juga berpotensi memperburuk kesenjangan sosial dan ekonomi. Komunitas miskin dan rentan seringkali menjadi korban utama dari bencana iklim dan sulit untuk pulih setelahnya. Oleh karena itu, penting untuk memperhatikan aspek keadilan sosial dalam upaya mitigasi dan adaptasi perubahan iklim.\n\nPendidikan tentang perubahan iklim juga merupakan hal yang sangat penting. Melalui edukasi yang efektif, kita dapat mengajarkan generasi mendatang tentang pentingnya pelestarian lingkungan dan bagaimana menghadapi tantangan perubahan iklim. Pendidikan dapat membantu menginspirasi tindakan individu dan mendorong perubahan positif dalam masyarakat.\n\nDalam rangka mengatasi perubahan iklim, kerjasama internasional juga menjadi kunci. Negara-negara perlu bekerja sama dalam mengurangi emisi gas rumah kaca, berbagi pengetahuan dan teknologi, serta memberikan dukungan finansial kepada negara-negara berkembang dalam upaya mereka mengatasi perubahan iklim. Hanya dengan upaya bersama, kita dapat melindungi planet ini bagi generasi mendatang.",
      "gambar": "https://i.ibb.co/CMk61Fw/perubahan-iklim.jpg",
      "waktu": "14-Juni-2023 16:44:10"
  },
  {
      "id": "news-6eg8",
      "judul": "Pencemaran Laut: Krisis Global yang Mengancam Ekosistem dan Manusia",
      "isi": "Pencemaran laut merupakan krisis global yang mengancam ekosistem laut dan kesehatan manusia. Peningkatan polusi dari limbah industri, pembuangan sampah plastik, dan aktivitas perkapalan telah menyebabkan kerusakan yang serius terhadap laut dan makhluk hidup di dalamnya. Hewan-hewan laut sering kali terjebak dalam sampah plastik atau terkena dampak zat beracun yang terlarut dalam air laut.\n\nOrganisasi lingkungan seperti Greenpeace melakukan kampanye untuk menghentikan pencemaran laut dan melindungi ekosistem laut yang rapuh. Mereka mendesak pemerintah dan industri untuk mengurangi penggunaan plastik sekali pakai, meningkatkan sistem pengolahan limbah, dan melindungi kawasan laut yang kritis.\n\nSebagai individu, kita juga dapat berperan dengan mengurangi penggunaan plastik sekali pakai, mendukung kebijakan pengelolaan sampah yang baik, serta ikut serta dalam kegiatan pembersihan pantai dan laut. Melindungi laut adalah tanggung jawab bersama, dan langkah-langkah kita hari ini akan berdampak pada kelestarian laut dan kehidupan di masa depan.\n\nSelain itu, laut juga memiliki peran penting dalam menjaga keseimbangan iklim global. Laut menyerap sebagian besar panas dari sinar matahari dan karbon dioksida dari atmosfer, sehingga berperan sebagai regulator suhu dan penyerap karbon. Namun, pencemaran laut mengganggu kemampuan laut untuk menjalankan fungsi ini dengan baik. Oleh karena itu, menjaga kebersihan dan kesehatan laut juga berarti melindungi sistem iklim yang stabil.\n\nPencemaran laut juga memiliki dampak signifikan terhadap sektor perikanan dan perekonomian. Pencemaran dapat merusak habitat ikan dan spesies laut lainnya, mengurangi populasi ikan yang penting bagi mata pencaharian dan pasokan pangan manusia. Selain itu, wisata bahari dan industri maritim juga terancam oleh pencemaran laut. Dengan mengurangi pencemaran laut, kita juga mendukung keberlanjutan ekonomi dan sumber daya laut.\n\nKerjasama internasional juga menjadi kunci dalam mengatasi pencemaran laut. Negara-negara perlu bekerja sama untuk mengadopsi kebijakan yang ketat terkait pengelolaan limbah, penegakan hukum, dan pemantauan laut yang efektif. Hanya dengan kerjasama yang kuat, kita dapat melindungi lautan dunia dan mewariskannya kepada generasi mendatang dalam keadaan yang lebih baik.\n\nPencemaran laut tidak dapat diabaikan dan tindakan harus segera diambil. Kesadaran publik, regulasi yang kuat, dan tanggung jawab individu adalah kunci untuk mengatasi krisis pencemaran laut ini. Setiap langkah kecil yang kita ambil untuk melindungi laut berarti memberikan kontribusi positif bagi kehidupan di Bumi.",
      "gambar": "https://i.ibb.co/P9Q1Ypp/pencemaran-laut.jpg",
      "waktu": "14-Juni-2023 16:44:10"
  },
  {
      "id": "news-g2ad",
      "judul": "Dampak Penebangan Hutan: Ancaman bagi Keanekaragaman Hayati dan Manusia",
      "isi": "Penebangan hutan telah menjadi salah satu masalah lingkungan yang mendesak di seluruh dunia. Dampaknya sangat merugikan keanekaragaman hayati, menghancurkan habitat satwa liar, dan menyebabkan kerugian ekonomi yang signifikan. Penebangan hutan juga berkontribusi terhadap perubahan iklim, karena pohon-pohon yang ditebang tidak dapat lagi menyerap karbon dioksida dari atmosfer.\n\nOrganisasi lingkungan seperti Greenpeace berusaha untuk menghentikan penebangan hutan yang tidak bertanggung jawab melalui kampanye dan advokasi. Mereka mendesak perusahaan dan pemerintah untuk menerapkan praktik penebangan yang berkelanjutan dan melindungi hutan-hutan penting di seluruh dunia.\n\nSebagai individu, kita juga dapat berkontribusi dengan cara menggunakan produk-produk kayu yang berasal dari sumber yang berkelanjutan, mendukung program penanaman kembali hutan, dan memilih bahan bangunan alternatif yang ramah lingkungan. Langkah-langkah kecil ini dapat membantu mempertahankan keanekaragaman hayati dan melindungi masa depan planet ini.\n\nSelain itu, perlindungan hutan juga berperan penting dalam menjaga kualitas air dan menjaga ketersediaan air bersih. Hutan berfungsi sebagai filter alami yang menyaring air hujan, mencegah erosi tanah, dan menjaga kesuburan tanah. Dengan menghancurkan hutan, risiko kekeringan dan kerusakan ekosistem air meningkat. Oleh karena itu, pelestarian hutan juga berkaitan erat dengan keberlanjutan sumber daya air.\n\nPenting untuk memahami bahwa hutan tidak hanya memberikan manfaat lingkungan, tetapi juga penting secara sosial dan budaya. Hutan sering kali menjadi rumah bagi masyarakat adat dan menjadi sumber mata pencaharian mereka. Keberlanjutan hutan juga berarti melindungi hak-hak dan keberlangsungan hidup komunitas-komunitas ini.\n\nKita perlu melihat hutan sebagai warisan berharga yang perlu dijaga dan dikelola dengan bijak. Melalui upaya kolektif, baik dari pemerintah, organisasi lingkungan, dan individu, kita dapat memastikan bahwa hutan-hutan kita tetap lestari dan menjadi aset berharga bagi kehidupan di Bumi.",
      "gambar": "https://i.ibb.co/x3j2Nm0/penebangan-hutan.jpg",
      "waktu": "14-Juni-2023 16:44:10"
  },
  {
      "id": "news-iW6T",
      "judul": "Pemerintah Kota Menerapkan Program Tanam Pohon Massal untuk Mengatasi Pemanasan Global",
      "isi": "Pemerintah Kota XYZ telah meluncurkan program tanam pohon massal yang bertujuan untuk mengatasi pemanasan global dan meningkatkan kualitas udara di wilayah tersebut. Program ini melibatkan partisipasi aktif dari warga dan komunitas setempat dalam upaya menjaga keberlanjutan lingkungan.\n\nDalam program ini, pemerintah setempat menyediakan bibit pohon kepada masyarakat secara gratis dan memberikan dukungan teknis untuk penanaman yang efektif. Warga didorong untuk menanam pohon di pekarangan rumah, taman, dan area publik yang tersedia.\n\nSelain memberikan manfaat lingkungan seperti penyerapan karbon dan penghasilan oksigen, pohon-pohon yang ditanam juga berperan dalam mencegah erosi tanah, meningkatkan kualitas air, dan memberikan habitat bagi keanekaragaman hayati lokal.\n\nPemerintah Kota XYZ juga menyelenggarakan acara kampanye dan pelatihan untuk meningkatkan kesadaran masyarakat tentang manfaat penting dari penanaman pohon. Mereka berharap program ini dapat menginspirasi masyarakat untuk mengambil tindakan nyata dalam menjaga lingkungan di sekitar mereka.\n\nWalikota XYZ, dalam pernyataan resminya, menyatakan, \"Program tanam pohon massal ini merupakan langkah konkret dalam menghadapi pemanasan global dan menjaga kualitas udara yang sehat. Kami mengajak seluruh warga untuk bergabung dalam upaya ini dan berperan dalam menjaga keberlanjutan kota kita.\"\n\nProgram tanam pohon massal ini mencerminkan upaya pemerintah kota dalam memobilisasi masyarakat untuk ikut serta dalam menjaga lingkungan dan menghadapi perubahan iklim. Dengan melibatkan warga secara aktif, program ini tidak hanya memberikan manfaat lingkungan, tetapi juga membangun kesadaran kolektif akan pentingnya menjaga keberlanjutan lingkungan hidup.",
      "gambar": "https://i.ibb.co/cLF7rL3/news-planting.png",
      "waktu": "14-Juni-2023 16:44:10"
  },
  {
      "id": "news-w_wT",
      "judul": "Konservasi Laut: Organisasi Lingkungan Memperluas Wilayah Perlindungan di Terumbu Karang Terbesar Dunia",
      "isi": "Sebuah organisasi lingkungan terkemuka telah berhasil memperluas wilayah perlindungan di terumbu karang terbesar dunia, yang merupakan rumah bagi keanekaragaman hayati laut yang luar biasa. Langkah ini diambil untuk memastikan keberlanjutan terumbu karang dan melindungi ekosistemnya dari ancaman seperti perubahan iklim dan kegiatan manusia.\n\nOrganisasi ini bekerja sama dengan pemerintah lokal dan komunitas nelayan untuk memperkuat langkah-langkah perlindungan dan membangun kesadaran akan pentingnya menjaga kelestarian terumbu karang. Melalui konsultasi dan kolaborasi, mereka berhasil menetapkan zona perlindungan baru yang mencakup area yang sebelumnya tidak terlindungi.\n\nWilayah perlindungan baru ini melarang praktik-praktik yang merusak, seperti penangkapan ikan yang tidak berkelanjutan, penggunaan bahan kimia berbahaya, dan kerusakan fisik terhadap terumbu karang. Selain itu, organisasi ini juga memberikan pelatihan kepada nelayan setempat tentang praktik penangkapan ikan yang bertanggung jawab dan berkelanjutan.\n\nDalam sebuah pernyataan, direktur organisasi tersebut mengatakan, \"Konservasi terumbu karang merupakan tanggung jawab bersama kita. Dengan memperluas wilayah perlindungan, kami berharap dapat menjaga keanekaragaman hayati laut dan mendukung mata pencaharian berkelanjutan masyarakat lokal.\"\n\nLangkah ini menunjukkan betapa pentingnya upaya perlindungan dan pelestarian terumbu karang di tengah ancaman perubahan iklim dan aktivitas manusia yang merusak. Melalui kerjasama antara organisasi lingkungan, pemerintah, dan komunitas lokal, kita dapat memastikan bahwa keindahan dan keberlanjutan terumbu karang terjaga untuk generasi mendatang.",
      "gambar": "https://i.ibb.co/wcrSCyg/konservasi-laut.jpg",
      "waktu": "14-Juni-2023 16:44:10"
  },
  {
      "id": "news-z3zS",
      "judul": "Inovasi Ramah Lingkungan: Startup Membuat Baterai Daur Ulang dari Limbah Elektronik",
      "isi": "Sebuah startup inovatif telah mengembangkan teknologi baru yang menggunakan limbah elektronik untuk membuat baterai daur ulang. Proyek ini bertujuan untuk mengatasi dua masalah sekaligus, yaitu pengelolaan limbah elektronik yang berkelanjutan dan kebutuhan akan baterai yang ramah lingkungan.\n\nStartup ini, yang dikenal dengan nama \"EcoBatt\", menggunakan limbah elektronik yang biasanya menjadi sumber polusi lingkungan dan dampak negatif terhadap kesehatan manusia. Mereka mengolah limbah tersebut menjadi bahan baku untuk produksi baterai daur ulang yang aman dan efisien.\n\nTeknologi EcoBatt tidak hanya mengurangi volume limbah elektronik yang dikirim ke tempat pembuangan akhir, tetapi juga mengurangi ketergantungan pada bahan baku baru yang diekstraksi dari lingkungan. Dalam uji coba awal, baterai daur ulang yang dihasilkan oleh startup ini menunjukkan kinerja yang sebanding dengan baterai konvensional.\n\nCEO EcoBatt, Jane Thompson, menjelaskan, \"Kami berkomitmen untuk memperbaiki cara kita memandang limbah elektronik dan mengubahnya menjadi sumber energi yang berkelanjutan. Dengan menggunakan teknologi kami, kami dapat meminimalkan dampak negatif limbah elektronik dan memberikan solusi ramah lingkungan dalam industri baterai.\"\n\nBerita ini memberikan informasi tentang inovasi terkini dalam lingkup teknologi yang berdampak positif terhadap lingkungan. Hal ini juga menyoroti upaya untuk mengubah persepsi dan praktik dalam pengelolaan limbah elektronik, sambil mendorong adopsi teknologi ramah lingkungan di sektor industri yang penting.",
      "gambar": "https://i.ibb.co/mNpfZXg/Startup-Membuat-Baterai-Daur-Ulang-dari-Limbah-Elektronik.jpg",
      "waktu": "14-Juni-2023 16:44:10"
  }
  ]);

  const [topics, setTopics] = useState([
    {
      "id": "news-3g7s",
      "judul": "Perubahan Iklim: Tantangan Besar yang Menghadang Kehidupan Bumi",
      "isi": "Perubahan iklim merupakan salah satu tantangan terbesar yang dihadapi oleh manusia dan kehidupan di Bumi. Dampak dari perubahan iklim sangat luas dan dapat mempengaruhi berbagai aspek kehidupan, termasuk kesehatan, ekonomi, dan lingkungan. Salah satu efek yang paling terlihat adalah peningkatan suhu rata-rata global. Hal ini mengakibatkan pencairan es di kutub, naiknya permukaan air laut, dan intensitas cuaca yang ekstrem. Banyak spesies hewan dan tumbuhan yang terancam punah karena habitat alaminya terganggu.\n\nDalam menghadapi tantangan perubahan iklim, organisasi seperti Greenpeace memainkan peran penting dalam meningkatkan kesadaran publik, melakukan penelitian ilmiah, dan melakukan advokasi kebijakan. Mereka berupaya untuk mendorong negara-negara dan perusahaan agar mengurangi emisi gas rumah kaca, memperkuat energi terbarukan, dan melindungi ekosistem penting di seluruh dunia.\n\nKesadaran akan perubahan iklim juga penting bagi setiap individu. Tindakan sehari-hari seperti mengurangi penggunaan energi fosil, memilih transportasi ramah lingkungan, dan mendukung produk-produk yang berkelanjutan dapat membantu mengurangi dampak negatif perubahan iklim. Dalam menjaga keberlanjutan planet ini, kolaborasi dan aksi kolektif sangat diperlukan.\n\nSelain itu, perubahan iklim juga berdampak pada sektor ekonomi. Bencana alam yang lebih sering terjadi, seperti banjir dan kekeringan, dapat merusak infrastruktur, menghancurkan pertanian, dan mengganggu rantai pasokan. Oleh karena itu, pemerintah dan sektor bisnis perlu beradaptasi dengan perubahan iklim, mengembangkan strategi mitigasi, dan menciptakan lapangan kerja yang berkelanjutan.\n\nTidak hanya itu, perubahan iklim juga berpotensi memperburuk kesenjangan sosial dan ekonomi. Komunitas miskin dan rentan seringkali menjadi korban utama dari bencana iklim dan sulit untuk pulih setelahnya. Oleh karena itu, penting untuk memperhatikan aspek keadilan sosial dalam upaya mitigasi dan adaptasi perubahan iklim.\n\nPendidikan tentang perubahan iklim juga merupakan hal yang sangat penting. Melalui edukasi yang efektif, kita dapat mengajarkan generasi mendatang tentang pentingnya pelestarian lingkungan dan bagaimana menghadapi tantangan perubahan iklim. Pendidikan dapat membantu menginspirasi tindakan individu dan mendorong perubahan positif dalam masyarakat.\n\nDalam rangka mengatasi perubahan iklim, kerjasama internasional juga menjadi kunci. Negara-negara perlu bekerja sama dalam mengurangi emisi gas rumah kaca, berbagi pengetahuan dan teknologi, serta memberikan dukungan finansial kepada negara-negara berkembang dalam upaya mereka mengatasi perubahan iklim. Hanya dengan upaya bersama, kita dapat melindungi planet ini bagi generasi mendatang.",
      "gambar": "https://i.ibb.co/CMk61Fw/perubahan-iklim.jpg",
      "waktu": "14-Juni-2023 16:44:10"
  },
  {
      "id": "news-6eg8",
      "judul": "Pencemaran Laut: Krisis Global yang Mengancam Ekosistem dan Manusia",
      "isi": "Pencemaran laut merupakan krisis global yang mengancam ekosistem laut dan kesehatan manusia. Peningkatan polusi dari limbah industri, pembuangan sampah plastik, dan aktivitas perkapalan telah menyebabkan kerusakan yang serius terhadap laut dan makhluk hidup di dalamnya. Hewan-hewan laut sering kali terjebak dalam sampah plastik atau terkena dampak zat beracun yang terlarut dalam air laut.\n\nOrganisasi lingkungan seperti Greenpeace melakukan kampanye untuk menghentikan pencemaran laut dan melindungi ekosistem laut yang rapuh. Mereka mendesak pemerintah dan industri untuk mengurangi penggunaan plastik sekali pakai, meningkatkan sistem pengolahan limbah, dan melindungi kawasan laut yang kritis.\n\nSebagai individu, kita juga dapat berperan dengan mengurangi penggunaan plastik sekali pakai, mendukung kebijakan pengelolaan sampah yang baik, serta ikut serta dalam kegiatan pembersihan pantai dan laut. Melindungi laut adalah tanggung jawab bersama, dan langkah-langkah kita hari ini akan berdampak pada kelestarian laut dan kehidupan di masa depan.\n\nSelain itu, laut juga memiliki peran penting dalam menjaga keseimbangan iklim global. Laut menyerap sebagian besar panas dari sinar matahari dan karbon dioksida dari atmosfer, sehingga berperan sebagai regulator suhu dan penyerap karbon. Namun, pencemaran laut mengganggu kemampuan laut untuk menjalankan fungsi ini dengan baik. Oleh karena itu, menjaga kebersihan dan kesehatan laut juga berarti melindungi sistem iklim yang stabil.\n\nPencemaran laut juga memiliki dampak signifikan terhadap sektor perikanan dan perekonomian. Pencemaran dapat merusak habitat ikan dan spesies laut lainnya, mengurangi populasi ikan yang penting bagi mata pencaharian dan pasokan pangan manusia. Selain itu, wisata bahari dan industri maritim juga terancam oleh pencemaran laut. Dengan mengurangi pencemaran laut, kita juga mendukung keberlanjutan ekonomi dan sumber daya laut.\n\nKerjasama internasional juga menjadi kunci dalam mengatasi pencemaran laut. Negara-negara perlu bekerja sama untuk mengadopsi kebijakan yang ketat terkait pengelolaan limbah, penegakan hukum, dan pemantauan laut yang efektif. Hanya dengan kerjasama yang kuat, kita dapat melindungi lautan dunia dan mewariskannya kepada generasi mendatang dalam keadaan yang lebih baik.\n\nPencemaran laut tidak dapat diabaikan dan tindakan harus segera diambil. Kesadaran publik, regulasi yang kuat, dan tanggung jawab individu adalah kunci untuk mengatasi krisis pencemaran laut ini. Setiap langkah kecil yang kita ambil untuk melindungi laut berarti memberikan kontribusi positif bagi kehidupan di Bumi.",
      "gambar": "https://i.ibb.co/P9Q1Ypp/pencemaran-laut.jpg",
      "waktu": "14-Juni-2023 16:44:10"
  },
  {
      "id": "news-g2ad",
      "judul": "Dampak Penebangan Hutan: Ancaman bagi Keanekaragaman Hayati dan Manusia",
      "isi": "Penebangan hutan telah menjadi salah satu masalah lingkungan yang mendesak di seluruh dunia. Dampaknya sangat merugikan keanekaragaman hayati, menghancurkan habitat satwa liar, dan menyebabkan kerugian ekonomi yang signifikan. Penebangan hutan juga berkontribusi terhadap perubahan iklim, karena pohon-pohon yang ditebang tidak dapat lagi menyerap karbon dioksida dari atmosfer.\n\nOrganisasi lingkungan seperti Greenpeace berusaha untuk menghentikan penebangan hutan yang tidak bertanggung jawab melalui kampanye dan advokasi. Mereka mendesak perusahaan dan pemerintah untuk menerapkan praktik penebangan yang berkelanjutan dan melindungi hutan-hutan penting di seluruh dunia.\n\nSebagai individu, kita juga dapat berkontribusi dengan cara menggunakan produk-produk kayu yang berasal dari sumber yang berkelanjutan, mendukung program penanaman kembali hutan, dan memilih bahan bangunan alternatif yang ramah lingkungan. Langkah-langkah kecil ini dapat membantu mempertahankan keanekaragaman hayati dan melindungi masa depan planet ini.\n\nSelain itu, perlindungan hutan juga berperan penting dalam menjaga kualitas air dan menjaga ketersediaan air bersih. Hutan berfungsi sebagai filter alami yang menyaring air hujan, mencegah erosi tanah, dan menjaga kesuburan tanah. Dengan menghancurkan hutan, risiko kekeringan dan kerusakan ekosistem air meningkat. Oleh karena itu, pelestarian hutan juga berkaitan erat dengan keberlanjutan sumber daya air.\n\nPenting untuk memahami bahwa hutan tidak hanya memberikan manfaat lingkungan, tetapi juga penting secara sosial dan budaya. Hutan sering kali menjadi rumah bagi masyarakat adat dan menjadi sumber mata pencaharian mereka. Keberlanjutan hutan juga berarti melindungi hak-hak dan keberlangsungan hidup komunitas-komunitas ini.\n\nKita perlu melihat hutan sebagai warisan berharga yang perlu dijaga dan dikelola dengan bijak. Melalui upaya kolektif, baik dari pemerintah, organisasi lingkungan, dan individu, kita dapat memastikan bahwa hutan-hutan kita tetap lestari dan menjadi aset berharga bagi kehidupan di Bumi.",
      "gambar": "https://i.ibb.co/x3j2Nm0/penebangan-hutan.jpg",
      "waktu": "14-Juni-2023 16:44:10"
  },
  {
      "id": "news-iW6T",
      "judul": "Pemerintah Kota Menerapkan Program Tanam Pohon Massal untuk Mengatasi Pemanasan Global",
      "isi": "Pemerintah Kota XYZ telah meluncurkan program tanam pohon massal yang bertujuan untuk mengatasi pemanasan global dan meningkatkan kualitas udara di wilayah tersebut. Program ini melibatkan partisipasi aktif dari warga dan komunitas setempat dalam upaya menjaga keberlanjutan lingkungan.\n\nDalam program ini, pemerintah setempat menyediakan bibit pohon kepada masyarakat secara gratis dan memberikan dukungan teknis untuk penanaman yang efektif. Warga didorong untuk menanam pohon di pekarangan rumah, taman, dan area publik yang tersedia.\n\nSelain memberikan manfaat lingkungan seperti penyerapan karbon dan penghasilan oksigen, pohon-pohon yang ditanam juga berperan dalam mencegah erosi tanah, meningkatkan kualitas air, dan memberikan habitat bagi keanekaragaman hayati lokal.\n\nPemerintah Kota XYZ juga menyelenggarakan acara kampanye dan pelatihan untuk meningkatkan kesadaran masyarakat tentang manfaat penting dari penanaman pohon. Mereka berharap program ini dapat menginspirasi masyarakat untuk mengambil tindakan nyata dalam menjaga lingkungan di sekitar mereka.\n\nWalikota XYZ, dalam pernyataan resminya, menyatakan, \"Program tanam pohon massal ini merupakan langkah konkret dalam menghadapi pemanasan global dan menjaga kualitas udara yang sehat. Kami mengajak seluruh warga untuk bergabung dalam upaya ini dan berperan dalam menjaga keberlanjutan kota kita.\"\n\nProgram tanam pohon massal ini mencerminkan upaya pemerintah kota dalam memobilisasi masyarakat untuk ikut serta dalam menjaga lingkungan dan menghadapi perubahan iklim. Dengan melibatkan warga secara aktif, program ini tidak hanya memberikan manfaat lingkungan, tetapi juga membangun kesadaran kolektif akan pentingnya menjaga keberlanjutan lingkungan hidup.",
      "gambar": "https://i.ibb.co/cLF7rL3/news-planting.png",
      "waktu": "14-Juni-2023 16:44:10"
  },
  {
      "id": "news-w_wT",
      "judul": "Konservasi Laut: Organisasi Lingkungan Memperluas Wilayah Perlindungan di Terumbu Karang Terbesar Dunia",
      "isi": "Sebuah organisasi lingkungan terkemuka telah berhasil memperluas wilayah perlindungan di terumbu karang terbesar dunia, yang merupakan rumah bagi keanekaragaman hayati laut yang luar biasa. Langkah ini diambil untuk memastikan keberlanjutan terumbu karang dan melindungi ekosistemnya dari ancaman seperti perubahan iklim dan kegiatan manusia.\n\nOrganisasi ini bekerja sama dengan pemerintah lokal dan komunitas nelayan untuk memperkuat langkah-langkah perlindungan dan membangun kesadaran akan pentingnya menjaga kelestarian terumbu karang. Melalui konsultasi dan kolaborasi, mereka berhasil menetapkan zona perlindungan baru yang mencakup area yang sebelumnya tidak terlindungi.\n\nWilayah perlindungan baru ini melarang praktik-praktik yang merusak, seperti penangkapan ikan yang tidak berkelanjutan, penggunaan bahan kimia berbahaya, dan kerusakan fisik terhadap terumbu karang. Selain itu, organisasi ini juga memberikan pelatihan kepada nelayan setempat tentang praktik penangkapan ikan yang bertanggung jawab dan berkelanjutan.\n\nDalam sebuah pernyataan, direktur organisasi tersebut mengatakan, \"Konservasi terumbu karang merupakan tanggung jawab bersama kita. Dengan memperluas wilayah perlindungan, kami berharap dapat menjaga keanekaragaman hayati laut dan mendukung mata pencaharian berkelanjutan masyarakat lokal.\"\n\nLangkah ini menunjukkan betapa pentingnya upaya perlindungan dan pelestarian terumbu karang di tengah ancaman perubahan iklim dan aktivitas manusia yang merusak. Melalui kerjasama antara organisasi lingkungan, pemerintah, dan komunitas lokal, kita dapat memastikan bahwa keindahan dan keberlanjutan terumbu karang terjaga untuk generasi mendatang.",
      "gambar": "https://i.ibb.co/wcrSCyg/konservasi-laut.jpg",
      "waktu": "14-Juni-2023 16:44:10"
  },
  {
      "id": "news-z3zS",
      "judul": "Inovasi Ramah Lingkungan: Startup Membuat Baterai Daur Ulang dari Limbah Elektronik",
      "isi": "Sebuah startup inovatif telah mengembangkan teknologi baru yang menggunakan limbah elektronik untuk membuat baterai daur ulang. Proyek ini bertujuan untuk mengatasi dua masalah sekaligus, yaitu pengelolaan limbah elektronik yang berkelanjutan dan kebutuhan akan baterai yang ramah lingkungan.\n\nStartup ini, yang dikenal dengan nama \"EcoBatt\", menggunakan limbah elektronik yang biasanya menjadi sumber polusi lingkungan dan dampak negatif terhadap kesehatan manusia. Mereka mengolah limbah tersebut menjadi bahan baku untuk produksi baterai daur ulang yang aman dan efisien.\n\nTeknologi EcoBatt tidak hanya mengurangi volume limbah elektronik yang dikirim ke tempat pembuangan akhir, tetapi juga mengurangi ketergantungan pada bahan baku baru yang diekstraksi dari lingkungan. Dalam uji coba awal, baterai daur ulang yang dihasilkan oleh startup ini menunjukkan kinerja yang sebanding dengan baterai konvensional.\n\nCEO EcoBatt, Jane Thompson, menjelaskan, \"Kami berkomitmen untuk memperbaiki cara kita memandang limbah elektronik dan mengubahnya menjadi sumber energi yang berkelanjutan. Dengan menggunakan teknologi kami, kami dapat meminimalkan dampak negatif limbah elektronik dan memberikan solusi ramah lingkungan dalam industri baterai.\"\n\nBerita ini memberikan informasi tentang inovasi terkini dalam lingkup teknologi yang berdampak positif terhadap lingkungan. Hal ini juga menyoroti upaya untuk mengubah persepsi dan praktik dalam pengelolaan limbah elektronik, sambil mendorong adopsi teknologi ramah lingkungan di sektor industri yang penting.",
      "gambar": "https://i.ibb.co/mNpfZXg/Startup-Membuat-Baterai-Daur-Ulang-dari-Limbah-Elektronik.jpg",
      "waktu": "14-Juni-2023 16:44:10"
  }
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
      <NavigationBar />
      {/* //---------------------CarouselHome-------------------------- */}
      <Carousel className="home-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Carosel/Home-Carosel-1.jpg"
            alt="First slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Harmoni Tersembunyi</h3>
              <p>Mengungkap Keindahan dan Keajaiban Lingkungan Alam</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Carosel/Home-Carosel-2.jpg"
            alt="Second slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Sentuhan Angin yang Menyegarkan</h3>
              <p>Rintihan Kebebasan di Tengah Hutan</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/Carosel/Home-Carosel-3.jpg"
            alt="Third slide"
          />
          <div className="wrapper-title-carousel">
            <div className="title-carousel">
              <h3>Hijau Mengheningkan Cipta</h3>
              <p>Mengagumi Keindahan Melodi Hidup di Bawah Daun-Daun</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* ---------------------PROGRAM EVENTS-------------------- */}
      <div className="background-container">
        <div className="program-events-container">
          <h1 className="heading">Program Events</h1>
          <div className="box-container-1">
            {programEvents.map((event) => (
              <div className="program-events-card" key={event.id}>
                <img src={event.gambar} alt={event.judul} />
                <div className="title-events">
                  <h3>{event.judul}</h3>
                </div>
                <div className="detail-events">
                  <p>{truncateDescription(event.isi, 20)}</p>
                </div>
                <button className="btn-event">Selengkapnya</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* //---------------------NEWS-------------------------- */}
      <div className="background-container-2">
        <div className="news-container container">
          <div className="col-md-7">
            <h1 className="heading">News</h1>
            {newsData.map((news) => (
              <div className="card mb-3 p-4 news-card" key={news.id}>
                <div className="row g-0">
                  <div className="col-md-6">
                    <h5 className="card-title">{news.judul}</h5>
                    <p className="card-text">{truncateDescription(news.isi,15)}</p>
                    <div className="text-center btn-article">
                      <button className="btn-news">Baca Selengkapnya</button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <img
                        src={news.gambar}
                        alt="Kebakaran Hutan"
                        className="img-fluid img-news"
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
                      <img src={topic.gambar} alt="Trending Topic" />
                      <div>
                        <a href="#">{topic.judul}</a>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {topic.waktu}
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
      </div>
      <Footer />
    </>
  );
}

export default Home;
