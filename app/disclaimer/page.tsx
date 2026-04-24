import styles from "./page.module.css";

export default function Disclaimer() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>免責事項</h1>
        <p className={styles.heroSub}>精子提供サービスご利用前に必ずお読みください</p>
      </section>

      <section className={styles.values}>
        <div className={styles.sectionInner}>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚠️</div>
              <h3>金銭的・情緒的サポートについて</h3>
              <p>精子提供後、妊娠中・出産後の金銭的・情緒的なサポートは一切できません。精子提供は報酬を受け取って提供するものであり、子供の養育や生活に関する経済的責任は負いません。</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🚫</div>
              <h3>ご連絡について</h3>
              <p>精子提供完了後、第二子以降をご希望される場合を除いて、原則としてご本人様へのメッセージ対応はできません。提供後に生まれた子の状況や、お母様の状況について微量のお返事すら難しい場合があります。</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>👶</div>
              <h3>子供の成長について</h3>
              <p>精子提供後に生まれた子の健康的・精神的な発育に関する問題に対して、一切関与できません。子供の養育、教育、健康管理等に関しては、全て提供を受けたお母様の責任において行ってください。</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>📋</div>
              <h3>同意のお願い</h3>
              <p>精子提供依頼を申し込まれた時点で、上記免責事項の全てに同意したものとみなします。新しい生命を生み出すことについて、全ての方々が慎重に考えて行動されることをお願いします。</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <a href="/" className={styles.btnPrimary}>プロフィールに戻る</a>
      </section>
    </div>
  );
}
