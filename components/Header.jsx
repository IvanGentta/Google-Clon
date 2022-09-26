import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { GrFormClose } from "react-icons/gr";
import {
  HiMicrophone,
  HiOutlineNewspaper,
  HiOutlineDotsVertical,
  HiOutlinePhotograph,
} from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import { BsGrid3X3GapFill, BsPlayBtn } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import HeaderOption from "./HeaderOption";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          className="cursor-pointer"
          src="/assets/google-img.png"
          width="120"
          height="40"
          onClick={() => router.push("/")}
        />

        <form
          className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full 
      shadow-lg max-w-3xl items-center"
        >
          <input
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
            type="text"
          />
          <GrFormClose
            className="w-8 h-8 sm:mr-3 text-gray-500 cursor-pointer transition
        duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <HiMicrophone
            className="w-10 h-6 mr-3 hidden sm:inline-flex
         text-blue-500 border-l-2 pl-3 border-gray-300"
          />
          <AiOutlineSearch className="w-7 h-7 hidden sm:inline-flex text-blue-500" />
          <button hidden type="submit" onClick={search}>
            search
          </button>
        </form>
        <div className="flex items-center ml-auto">
          <GoGear className="w-6 h-6 mr-4 cursor-pointer" />
          <BsGrid3X3GapFill className="w-6 h-6 mr-4 text-gray-600 cursor-pointer" />
          <Image
            className="rounded-full"
            src="/assets/avatar google.jpg"
            width="40"
            height="40"
            alt="profile pic"
          />
        </div>
      </div>

      {/* Options */}
      <div
        className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start
      lg:space-x-36 lg:pl-52 border-b"
      >
        <div className="flex space-x-5">
          <HeaderOption Icon={AiOutlineSearch} title={"All"} selected />
          <HeaderOption Icon={BsPlayBtn} title={"Videos"} />
          <HeaderOption Icon={HiOutlinePhotograph} title={"Images"} />
          <HeaderOption Icon={FiMapPin} title={"Maps"} />
          <HeaderOption Icon={HiOutlineNewspaper} title={"News"} />
          <HeaderOption Icon={HiOutlineDotsVertical} title={"More"} />
        </div>
        <div className="flex">
          <p className="flex justify-center items-center w-12 h-7 cursor-pointer hover:border border-solid">
            Tools
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
