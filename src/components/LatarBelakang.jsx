import { useRef, useEffect } from "react";
import Title from "./Title";
import rayImg from "../assets/ikan-pari.png";
import fishesImg from "../assets/fishes.png";
import turtleImg from "../assets/penyu.png";
import jellyfishImg from "../assets/ubur.png";

export default function LatarBelakang() {
  return (
    <div id="latarBelakang" className="mx-auto max-w-6xl">
      <img
        src={rayImg}
        alt="Fish"
        className="absolute left-40 -bottom-80 h-40 max-md:hidden"
      />
      <img
        src={fishesImg}
        alt=""
        className="absolute right-32 -bottom-80 h-52"
      />
      <img
        src={fishesImg}
        alt=""
        className="absolute left-32 -bottom-[800px] h-52 rotate-90"
      />
      <img
        src={turtleImg}
        alt=""
        className="absolute right-20 -bottom-[800px] h-32"
      />
      <img
        src={jellyfishImg}
        alt=""
        className="absolute left-20 -bottom-[500px] scale-x-[-1] h-32"
      />
      <img
        src={jellyfishImg}
        alt=""
        className="absolute left-32 -bottom-[550px] scale-x-[-1] h-32"
      />
      <div class="flex justify-center my-20 max-md:mx-8 z-50">
        <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-default md:text-3xl lg:text-5xl text-center">
          Latar Belakang Acara
        </h1>
      </div>
      <p className="mx-8 my-4 text-justify text-xl p1">
        Mahasiswa Institut Teknologi Kalimantan angkatan 2023 adalah mahasiswa
        baru Institut Teknologi Kalimantan yang terdiri dari individu yang
        berasal dari berbagai daerah dan latar belakang yang berbeda juga. Dalam
        menempuh pendidikan di Institut Teknologi Kalimantan, mahasiswa angkatan
        2023 memiliki tanggung jawab untuk mewujudkan misi dari Keluarga
        Mahasiswa Institut Teknologi Kalimantan (KM ITK). Salah satu misi
        tersebut adalah membentuk karakter SPECTA, yang tidak hanya mencakup
        aspek keilmuan, tetapi juga moral dan sosial. Berlandaskan dengan
        nilai-nilai solidaritas, kepedulian, kecerdasan, iman, dan ketakwaan.
        mahasiswa angkatan 2023 Institut Teknologi Kalimantan berkomitmen untuk
        menjadi agen perubahan yang positif di lingkungan kampus.
      </p>

      <p className="mx-8 my-4 text-justify text-xl">
        Keberagaman latar belakang, membuat mahasiswa Institut Teknologi
        Kalimantan 2023 belum memiliki kesempatan untuk saling mengenal satu
        sama lain secara mendalam. Dalam upaya mempererat hubungan
        antar-mahasiswa dan menjembatani kesenjangan komunikasi yang ada, maka
        dibuatlah sebuah kegiatan yang dimana nantinya kegiatan ini dapat
        menjadi wadah untuk mewujudkan mahasiswa yang berguna bagi masyarakat
        dan juga sebagai sarana bagi seluruh mahasiswa Institut Teknologi
        Kalimantan angkatan 2023 untuk bersosialisasi dan mengenal satu sama
        lain.
      </p>

      <p className="mx-8 my-4 text-justify text-xl">
        Untuk mewujudkan hal itu, maka kami mahasiswa Institut Teknologi
        Kalimantan Angkatan 2023 melahirkan “PESONA.” Kegiatan "PESONA"
        merupakan singkatan dari Pengabdian Mahasiswa untuk Edukasi, Sosialisasi
        dan Aksi Nyata. Tidak hanya menjadi sebuah kegiatan sosial semata,
        tetapi juga merupakan wujud nyata dari tanggung jawab sosial mahasiswa
        Institut Teknologi Kalimantan angkatan 2023 terhadap masyarakat.
        Kegiatan ini dibuat agar dapat memberikan dampak positif kepada
        masyarakat melalui edukasi, sosialisasi, dan tindakan nyata yang
        mendukung pembangunan bersama dengan melibatkan mahasiswa dari berbagai
        program studi, kegiatan ini juga diharapkan dapat memunculkan sinergi
        dan kolaborasi antara program studi.
      </p>
    </div>
  );
}
