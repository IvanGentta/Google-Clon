import { useRouter } from "next/router";
import Link from "next/link";
import { GrNext, GrPrevious } from "react-icons/gr";

const PaginationButtons = () => {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <GrPrevious className="h-5 w-5" /> <p>Previuos</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <GrNext className="h-5 w-5" /> <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
