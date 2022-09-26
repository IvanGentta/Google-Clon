import Image from "next/image";
import { useRef } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { HiMicrophone } from "react-icons/hi";
import { useRouter } from "next/router";

const style = {
  btn: "bg-[#f8f9fa] p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md",
};

const Main = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div>
      <header className="w-full p-5">
        <div className="flex space-x-4 items-center justify-end text-sm font-semibold">
          <p className="cursor-pointer hover:underline">Gmail</p>
          <p className="cursor-pointer hover:underline">Images</p>

          <BsGrid3X3GapFill className="w-6 h-6 text-gray-600 cursor-pointer" />

          <div>
            <Image
              className="rounded-full"
              src="/assets/avatar google.jpg"
              width="40"
              height="40"
              alt="profile pic"
            />
          </div>
        </div>
      </header>

      <main>
        <form
          className="flex flex-col items-center mt-44 flex-grow"
          method="get"
        >
          <Image
            src="/assets/google-img.png"
            width="300"
            height="100"
            alt="Google img"
          />
          <div
            className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg
          max-w-md rounded-full border border-gray-200 px-5 py-3 items-center
          sm:max-w-xl lg:max-w-2xl"
          >
            <AiOutlineSearch className="w-5 h-5 text-gray-500" />
            <input
              ref={searchInputRef}
              type="text"
              className="flex-grow focus:outline-none"
            />
            <HiMicrophone className="w-5 h-5" />
          </div>
          <div
            className="flex flex-col w-1/2 space-y-3 justify-center mt-8
          sm:space-y-0 sm:flex-row sm:space-x-4"
          >
            <button onClick={search} className={style.btn}>
              Google Search
            </button>
            <button onClick={search} className={style.btn}>
              I&apos;m Feeling Lucky
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Main;
