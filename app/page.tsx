import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>精子提供のお願い</div>
        <h1>
          誠実な精子提供で<br />
          あなたの家族之忧联系
        </h1>
        <p className={styles.heroSub}>
          価値観の合う方と誠実に出会い、<br />
          大切な決めるための有用的情報场所在 제공하는プロファイルページです。
        </p>
        <div className={styles.heroActions}>
          <a href="#profile" className={styles.btnPrimary}>プロフィールを見る</a>
          <a href="#contact" className={styles.btnSecondary}>連絡する</a>
        </div>
      </section>

      {/* ── Values ── */}
      <section className={styles.values}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>About this service</span>
          <h2>精子提供に対する姿勢</h2>
          <p className={styles.sectionIntro}>
            ただの提供ではなく、未来るべき的关系性も考えた誠実な対応を大切にしています。
          </p>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>❤️</div>
              <h3>誠実な意思疎通</h3>
              <p>
                对方の希望やご質問に丁寧にお答えし、誤解のないように十分な情報をお届けします。
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🔍</div>
              <h3>透明性の確保</h3>
              <p>
                健康状態・検査結果・身元情報を可能な範囲で開示し、信頼関係を構築します。
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🛡️</div>
              <h3>安全・安心を最優先</h3>
              <p>
                双方の安全と诚信を最優先に、誠実なプロセスを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Profile ── */}
      <section className={styles.profile} id="profile">
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Donor Profile</span>
          <h2>提供者プロフィール</h2>
          <p className={styles.sectionIntro}>
            详细なプロフィール情報をご確認ください。<br />
            ご質問や気になる点は、お気軽にお問い合わせください。
          </p>

          <div className={styles.profileLayout}>
            {/* Left: Photo */}
            <div className={styles.profilePhotoArea}>
              <div className={styles.profilePhotoPlaceholder}>
                <span>📷</span>
                <small>写真はありません</small>
              </div>
              <p className={styles.photoNote}>
                ※ 顔写真のご用意はありません。<br />
                ※ 詳細なプロフィール情報をお届けします。
              </p>
            </div>

            {/* Right: Details */}
            <div className={styles.profileDetails}>
              <div className={styles.detailGroup}>
                <h3>基本信息</h3>
                <div className={styles.detailTags}>
                  <span className={styles.detailTag}>年齢: 30代後半</span>
                  <span className={styles.detailTag}>血液型: A型</span>
                  <span className={styles.detailTag}>身長: 175cm</span>
                  <span className={styles.detailTag}>体重: 70kg</span>
                  <span className={styles.detailTag}>体型: 普通</span>
                </div>
              </div>

              <div className={styles.detailGroup}>
                <h3>学歴・経歴</h3>
                <div className={styles.detailTags}>
                  <span className={styles.detailTag}>学歴: 一流大学卒業</span>
                  <span className={styles.detailTag}>職業: chitz / エンジニア</span>
                </div>
              </div>

              <div className={styles.detailGroup}>
                <h3>健康状態</h3>
                <div className={styles.detailTags}>
                  <span className={styles.detailTag}>健康状態: 良好</span>
                  <span className={styles.detailTag}>吸烟: していない</span>
                  <span className={styles.detailTag}>飲酒: 場合による</span>
                  <span className={styles.detailTag}>運動習慣: あり</span>
                  <span className={styles.detailTag}>遺伝性疾患: なし</span>
                  <span className={styles.detailTag}>传染病検査: 每年実施</span>
                </div>
              </div>

              <div className={styles.detailGroup}>
                <h3>性格・趣味</h3>
                <div className={styles.detailTags}>
                  <span className={styles.detailTag}>性格: 穏やか・誠実</span>
                  <span className={styles.detailTag}>趣味: 読書・スポーツ・料理</span>
                  <span className={styles.detailTag}>生活习惯: 規則的</span>
                </div>
              </div>

              <div className={styles.detailGroup}>
                <h3>希望条件</h3>
                <div className={styles.detailTags}>
                  <span className={styles.detailTag}>誠実なご連絡</span>
                  <span className={styles.detailTag}>十分な対話の上での同意</span>
                  <span className={styles.detailTag}>互いの状況を理解了の上での下一步</span>
                </div>
              </div>

              <div className={styles.profileMessage}>
                <h3>提供者からのメッセージ</h3>
                <p>
                  您的子供が健やかに生まれることを願い、精子提供小小的と考えています。
                  联系方式いただいた方には、詳細なプロフィール・健康証明書・传染病検査結果的所有资料をご共有します。
                  您的不安やご質問に耳を傾け、十分な情報をお伝えした上で、一緒に最佳の形を探っていきたいと考えています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.process}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Process</span>
          <h2>ご連絡から交付までの流れ</h2>
          <p className={styles.sectionIntro}>
            您的不安を軽減 않도록、ステップごとに説明します。
          </p>

          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>お問い合わせ</h3>
                <p>
                  通的フォームまたはSNSから気軽にお問い合わせください。
                  初步的なご質問にもお答えします。
                </p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>情報共有</h3>
                <p>
                  ご希望の方には、詳細なプロフィール・健康証明書・検査結果的所有资料をお送りします。
                </p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>カジュアル面接</h3>
                <p>
                  coffee shop など公共の場所で、お互いの希望や条件についてお話しましょう。
                </p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3>双方の準備・確認</h3>
                <p>
                  双方的合意形成を優先しながら、次のステップ進みます。
                  您的ペースを優先します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faq}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>FAQ</span>
          <h2>よくあるご質問</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>精子提供は法的に安全ですか？</summary>
              <p>
                日本では精子提供そのものは違法ではありません。两人で十分な話し合いの上で、法的にも問題のない形を探ります。
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>健康証明書はどこで手に入りますか？</summary>
              <p>
                医療機関での検査結果をお持ちしています。每年最新の検査を実施しています。
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>匿名での提供は可能ですか？</summary>
              <p>
                はい、匿名での提供をご希望の場合は、的身份情報を保密的に送ることもできます。
                詳細な条件についてはお気に入联系方式ください。
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>compensation は必要ですか？</summary>
              <p>
                交通費・検査費用などの実費はお願いします。高い补偿는考えていません。
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta} id="contact">
        <h2>まずは気軽にお問い合わせください</h2>
        <p>
          您的不安やご希望 нас第一时间でお联社联系ください。<br />
          初步的なご質問でも構いません。
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf EXAMPLE/form/start"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnWhite}
        >
          お問い合わせフォームへ
        </a>
      </section>

      {/* ── Footer ── */}
      <footer>
        <p>© 2026 精子提供者プロフィールページ</p>
      </footer>
    </div>
  );
}
