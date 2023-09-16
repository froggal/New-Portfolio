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
      <h1 className="mt-10 font-extrabold text-5xl">프로젝트들</h1>
      <a href=""><button className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      보러 가기!
      </button></a>
    </div>
    </>
  );
}
