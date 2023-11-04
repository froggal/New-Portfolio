import styles from './page.module.css';
import gstyles from '../global.module.css'

export default function Home() {
    return (
      <main className={gstyles.main}>
        <div className={gstyles.heading}>
            <h1>Made by: <br /> <span>KeyFrog</span></h1>
        </div>
        <div className={gstyles.aboutleft}>
          <h1>포트폴리오</h1>
          <button className={styles.link}>사용해보기</button> <button className={styles.link}>소스 보기</button>
          <p className={styles.desc}>
          <br /> 지금 보고 계시는 포트폴리오입니다. 제 프론트엔드 개발 지식을 모두 짜내어 만들었습니다. <br /> Next.js + TypeScript로 개발했고 Vercel을 이용해 배포하였습니다.</p>
        </div>
        <div className={gstyles.aboutright}>
          <h1>랜덤 닉네임 생성기</h1>
          <button className={styles.link}>사용해보기</button> <button className={styles.link}>소스 보기</button>
          <p className={styles.desc}>
          <br /> 랜덤으로 닉네임을 생성해주는 웹서비스입니다. 리스트를 이용해 단어를 저장하고 그곳에서 무작위로 단어를 뽑아와 조합하는 방식으로 만들었습니다. <br /> HTML + JavaScript로 개발했고 Vercel을 이용해 배포하였습니다.</p>
        </div>
      </main>
    );
  }
  