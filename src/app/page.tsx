import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-green-400 box-border h-100 w-100 p-4 border-4 mt-5 text-center">
      <h1 className="mt-10 text-blue-700 font-extrabold text-9xl">키페</h1>
      <h2 className="my-10 text-4xl font-bold">김도언, KeyFrog</h2>
      <h3 className="my-10 text-3xl font-semibold">학생 개발자</h3>
    </div>
    <div className="text-center bg-orange-200 box-border h-100 w-100 p-4 border-4" id="projects">
      <h1 className="mt-10 font-extrabold text-5xl">프로젝트들</h1>
      <Link href="/projects"><button className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      보러 가기!
      </button></Link>
    </div>
    </>
  );
}