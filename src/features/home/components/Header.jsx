import img from "@/core/assets/header.png";
import gelombang from "@/core/assets/Icon/gelombang.svg";
import Section from "@/features/global/container/Section";
import TopSection from "@/features/global/container/TopSection";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigator = useNavigate();
  return (
    <TopSection
      as="header"
      className="flex items-center box-border min-h-screen relative"
    >
      <Section className="flex justify-between gap-36 duration-300 max-lg:gap-0 max-md:flex-wrap max-md:justify-center max-md:gap-10 py-10">
        <div className="p-10 w-full rounded-2xl min-w-[350px] max-md:order-1">
          <h1 className="text-4xl font-extrabold text-black">
            Selamat Datang di <span className="text-default">E-Perpus</span>
          </h1>
          <p className="text-black text-base my-6 text-justify">
            Temukan keajaiban di e-Perpus.com, tempat di mana komunitas pembaca
            dan pendonasi buku saling mendukung. Proyek donasi buku beragam
            menanti Anda, dari novel hingga buku pendidikan. Transparansi,
            keamanan, dan keterlibatan personal adalah inti dari pengalaman
            berbagi buku kami.
          </p>
          <form
            className="flex gap-1 items-center"
            onSubmit={(e) => navigator(`/books?search=${e.target.search.value}`)}
          >
            <input
              placeholder="Cari..."
              className="px-3 rounded-l-xl outline-none w-full py-2 shadow-lg border border-black"
              type="text"
              name="search"
            />
            <button className="bg-default hover:opacity-80 hover:scale-105 rounded-r-xl text-black px-5 py-2 shadow-lg border border-black">
              Search
            </button>
          </form>
        </div>
        <div className="flex items-center min-w-[320px]">
          <img src={img} className="w-full px-20 flex-1" alt="header" />
        </div>
      </Section>
      <img
        src={gelombang}
        className="absolute right-0 left-0 bottom-0 z-[-1]"
        alt="gelombang"
      />
    </TopSection>
  );
};

export default Header;
