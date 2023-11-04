import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link';
import gstyles from './global.module.css'

export default function Home() {
  return (
    <main className={gstyles.main}>
      <div className={gstyles.heading}>
        <h1>
          Developer: <br /> <span>KeyFrog</span>;
        </h1>
        <Image
          src="https://avatars.githubusercontent.com/u/77488170?v=4"
          width={300}
          height={300}
          alt="Picture of the author"
          className={styles.centerpicture}
        />
        <h2>
          학생 개발자 <span>KeyFrog(키페)</span>입니다.
        </h2>
      </div>
      <hr />
      <div className={gstyles.aboutleft}>
        <h1>안녕하세요, 키페입니다 👋</h1>
        <p>
          대한민국에 거주하고 있고 웹 개발을 좋아하는 학생이예요! <br /> 주로
          사용하는 언어는 TypeScript/JavaScript, Python입니다. <s>그리고 HTML로 프로그래밍하는 것을 좋아합니다 ㅋㅋ</s> <br /> 최근에는 디자인을 배우고 있고, 서버
          개발에도 관심이 많아서 현재 홈서버를 구동하고 있어요! <br /> Apple
          팬입니다! 개발은 모두 맥북으로 하고 있고 에어팟, 아이패드를 사용하고
          있어요.
        </p>
      </div>
      <div className={gstyles.aboutright}>
        <h1>진행한 프로젝트들</h1>
        <p>
          해당 프로젝트들은 <Link href="/projects">이곳에서</Link> 확인하실 수 있습니다.
        </p>
      </div>
    </main>
  );
}
