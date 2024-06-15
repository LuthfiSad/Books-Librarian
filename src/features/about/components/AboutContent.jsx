import Section from "@/features/global/container/Section";
import TopSection from "@/features/global/container/TopSection";
import React from "react";

const AboutContent = () => {
  return (
    <TopSection className="min-h-screen flex justify-center items-center">
      <Section className="flex justify-center items-center">
        <div className="max-w-3xl flex flex-col gap-10 text-center">
          <h1 className="text-5xl font-bold">
            Tentang <span className="text-default">E-Perpus</span>
          </h1>
          <p className="text-2xl text-justify text-gray-700 mb-4">
            E-Perpus merupakan platform untuk menyatukan para pembuka donasi
            dengan individu yang ingin memberikan sumbangan. Dengan fokus pada
            keterbukaan dan keterjangkauan, platform ini menghadirkan kemudahan
            bagi yang ingin berbagi dan membantu, menciptakan kesempatan bagi
            setiap individu untuk berpartisipasi dalam memberikan dukungan
            kepada berbagai inisiatif dan penyebab yang mereka pedulikan. Dengan
            E-Perpus, kita semua dapat berperan aktif dalam membentuk perubahan
            positif yang kita inginkan dalam masyarakat.
          </p>
        </div>
      </Section>
    </TopSection>
  );
};

export default AboutContent;
