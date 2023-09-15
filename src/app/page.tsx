export default function Home() {
  return (
    <>
    <nav className="bg-white border-gray-200 dark:bg-gray-900 mt-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            키페_KeyFrog
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                홈
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                프로젝트들
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="bg-green-400 box-border h-100 w-100 p-4 border-4 mt-5 text-center">
      <h1 className="mt-10 text-blue-700 font-extrabold text-9xl">키페</h1>
      <h2 className="my-10 text-4xl font-bold">김도언, KeyFrog</h2>
      <h3 className="my-10 text-3xl font-semibold">학생 개발자</h3>
    </div>
    <div className="text-center bg-orange-200 box-border h-100 w-100 p-4 border-4" id="projects">
      <h1 className="mt-10 font-extrabold text-7xl">프로젝트들</h1>
      <section className="mt-10">
        <h1 className="font-bold text-4xl mt-10">포트폴리오</h1>
        <h2 className="mt-5 text-3xl font-semibold">지금 보고 계시는 이 포트폴리오입니다.</h2>
        <h3 className="mt-5"><span className="font-semibold my-10 text-2xl">기술 스택</span> <br /> Next.js + TypeScript로 개발했고 Tailwind CSS를 사용하였으며 Vercel로 배포했습니다.</h3>
      </section>
      <section className="mt-10">
        <h1 className="font-bold text-4xl mt-10">랜덤 닉네임 생성기</h1>
        <h2 className="mt-5 text-3xl font-semibold"><a href="https://randomnick.vercel.app/">사용해보기</a> 랜덤으로 닉네임을 생성해 주는 웹페이지입니다.</h2>
        <h3 className="mt-5"><span className="font-semibold my-10 text-2xl">기술 스택</span> <br /> HTML과 JavaScript로 개발했고 Vercel로 배포했습니다.</h3>
      </section>
    </div>
    </>
  );
}
