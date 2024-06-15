import React from "react";
import donation2 from "@/core/assets/coba.png";
import team from "@/core/utils/teams.json";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <div className="flex justify-center py-20 items-center">
      <div className="flex flex-col gap-10 text-center">
        <h1 className="text-5xl font-bold">Team Kami</h1>
        <div className="flex flex-wrap justify-center gap-5">
          {team.map((item, index) => (
            <div
              className="flex flex-col justify-items-center mb-10 items-center max-w-[200px]"
              key={index}
            >
              <img
                draggable="false"
                src={item.image}
                alt="Dapat dipercaya"
                className="rounded-full w-full h-[200px] object-cover mb-4"
              />
              <h3 className="text-xl text-center font-bold break-all line-clamp-2">
                {item.nama}
              </h3>
              <p className="text-center text-sm">{item.bidang}</p>
              <p className="text-center flex gap-2 text-2xl">
                <a href={item.sosialMedia.instagram}><FaInstagramSquare /></a>
                <a href={item.sosialMedia.linkedin}><FaLinkedin /></a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
