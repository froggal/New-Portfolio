import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className={styles.heading}>
        <h1>
          Developer: <br /> <span>KeyFrog</span>;
        </h1>
        <Image
          src="https://avatars.githubusercontent.com/u/77488170?v=4"
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <h2>
          학생 개발자 <span>KeyFrog(키페)</span>입니다.
        </h2>
      </div>
      <div className={styles.about}>
        <h1>안녕하세요, 키페입니다 👋</h1>
        <p>
          대한민국에 거주하고 있고 웹 개발을 좋아하는 학생이예요! <br /> 주로
          사용하는 언어는 TypeScript/JavaScript, Python입니다. <br /> 서버
          개발에도 관심이 많고 현재 홈서버를 구동하고 있어요! <br /> Apple
          팬입니다! 개발은 모두 맥북으로 하고 있고 에어팟, 아이패드를 사용하고
          있어요.
        </p>
      </div>
    </>
  );
}