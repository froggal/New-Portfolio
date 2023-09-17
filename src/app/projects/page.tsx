export default function projects() {
  return (
    <>
      <div className="bg-green-400 box-border h-100 w-100 p-4 border-4 mt-5 text-center">
        <h1 className="mt-10 text-blue-700 font-extrabold text-9xl">
          프로젝트
        </h1>
        <h2 className="my-10 text-4xl font-bold">
          제가 지금까지 진행한 프로젝트들입니다.
        </h2>
      </div>
      <div
        className="text-center bg-orange-200 box-border h-100 w-100 p-4 border-4"
        id="projects"
      >
          <h1 className="mt-10 font-extrabold text-3xl">포트폴리오</h1>
          <h2 className="mt-5">지금 보고 계시는 이 웹페이지입니다. 이 프로젝트를 진행하면서 Next.js를 접하게 되었습니다. <br /> Next.js와 TypeScript를 이용해 개발했고, Vercel로 배포했습니다.</h2>
          <a href="https://kpj-portfolio.vercel.app/"><button className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            보러 가기!
          </button></a>
          <a href="https://github.com/froggal/New-Portfolio"><button className="my-10 ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            GitHub에서 보기!
          </button></a>
          <h1 className="mt-10 font-extrabold text-3xl">랜덤 닉네임 생성기</h1>
          <h2 className="mt-5">랜덤으로 닉네임을 생성해주는 웹 서비스입니다. <br /> HTML과 JavaScript로 개발했고, Vercel로 배포했습니다.</h2>
          <a href="https://randomnick.vercel.app"><button className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            보러 가기!
          </button></a>
          <a href="https://github.com/froggal/Random-Nickname-Generator"><button className="my-10 ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            GitHub에서 보기!
          </button></a>
      </div>
    </>
  );
}