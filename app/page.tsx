import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <h1>誠実な精子提供で<br />あなたの希望を叶えます</h1>

      </section>

      {/* ── Values ── */}
      <section className={styles.values}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>About this service</span>
          <h2>精子提供に対する姿勢</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>❤️</div>
              <h3>誠実な意思疎通</h3>
              <p>お互いに納得感を持って進められるよう、誠実さを大事にしています。</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🔍</div>
              <h3>健康状態の事前確認</h3>
              <p>シリンジ法、タイミング法のいずれでも事前に検査結果を確認させていただきます。</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🛡️</div>
              <h3>安全・安心の確認</h3>
              <p>お会いする段階までやりとりが進んだ場合、精子提供に不純な動機がないか、しっかり確認させていただきます。</p>
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
            純情な恋愛感情でこれまで6人の方と交際してきました。ただ、僕の幼少期(以下に詳細記述)の家庭環境や育ちで、結婚・出産・子育てに興味を持てない大人に育ちました。交際してきた相手はどなたも結婚、出産、子育てと将来を描くの方々で(普通ですかね笑)、僕は申し訳ない気持ちでお別れしてきました。恋愛は好きなのですが、「特定の方と生涯をずっと共に過ごす」、というのが僕の育った個性上、合わないようなのです。僕は今年で34歳になりました。10代の頃から目指していた職業柄健康に注意して大人になったため、30代半ばになっても性欲は相変わらずあります。ただ、上記の通りで、今からマッチングアプリや婚活アプリを使って異性と出会う気には、申し訳なさから、なれずにいました。そんな中、ネットで精子提供の選択肢を知りました。健康体や僕の個性が女性のニーズと合うこと、日本の少子化の現状、これらを熟考して「役に立てる女性がいるなら」と、提供を始めました。
          </p>

          <p className={styles.sectionIntro}>
            僕の幼少期の家庭環境と社会に出でから：<br/><br/>
            僕の両親は二人とも医者になりたくても家庭の事情でなれなかった、という方で、<br/>
            僕が幼稚園児の頃から二人の希望を僕に投影して育てようとする厳しい家庭環境でした。<br/>
            僕はずっと「自分のやりたいことができない」と感じて幼少期を過ごしていました。<br/>
            僕は変えられない状況に、中学高校はそれが僕の使命と自分に言い聞かせ、二人の希望を叶えるように生きました。<br/>
            自己犠牲的に生きる生き方に次第に辛くなり、本来の自分が分からない、という心境も長く経験しました。<br/>
            勉強は好きな方だったので、好きな勉強をするために渡米し、米国で大学も卒業しました。<br/><br/>
            大学卒業後は外資系企業でコンサルとして勤めた後、今は独立し個人で色々事業に取り組んでいます。
          </p>

          <div className={styles.profileLayout}>
            <div className={styles.profilePhotoArea}>
              <img src="/profile-photo.jpg" alt="ゆうま" style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }} />
            </div>

            <div className={styles.profileDetails}>
              <div className={styles.detailGroup}>
                <h3>基本情報</h3>
                <div className={styles.detailTags}>
                  <span className={styles.detailTag}>年齢: 34歳</span>
                  <span className={styles.detailTag}>身長: 171cm</span>
                  <span className={styles.detailTag}>体型: スタイルよし</span>
                </div>
              </div>

              <div className={styles.detailGroup}>
                <h3>学歴・経歴</h3>
                <div className={styles.detailTags}>
                  <span className={styles.detailTag}>学歴: 大学卒</span>
                  <span className={styles.detailTag}>職業: 主にAIコンサルタント</span>
                </div>
              </div>

              <div className={styles.detailGroup}>
                <h3>健康状態</h3>
                <div className={styles.detailTags}>
                  <span className={styles.detailTag}>健康状態: 極めて良好</span>
                  <span className={styles.detailTag}>契煙: 経験もない</span>
                  <span className={styles.detailTag}>飲酒: 最後に飲んだのは25歳の誕生日くらい</span>
                  <span className={styles.detailTag}>運動習慣: あり</span>
                  <span className={styles.detailTag}>遺伝性疾患: なし</span>
                </div>
              </div>

              <div className={styles.detailGroup}>
                <h3>性格・趣味</h3>
                <div className={styles.detailTags}>
                  <span className={styles.detailTag}>性格: 穏やか・誠実</span>
                  <span className={styles.detailTag}>趣味: ブログでの情報発信、耳読書、仕事</span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      {/* ── Conditions ── */}
      <section className={styles.conditions}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Requirements</span>
          <h2>ゆうまが授ける意志を持てる女性の条件 (必須)</h2>
          <div className={styles.conditionNote}>
            <p>報酬を受け取って提供するとはいえ、僕も感情・個性・心をもった一人の人間です。僕の遺伝子を無条件に誰にでも渡すということには抵抗があります。手前味噌ですが、自分でも僕はレアな人と思っています。以下に僕の心がOKと言っている条件を列挙しましたので、全て確認し、「私は当てはまる」と判断された方はお気軽にお申込みください。特にタイミング法での提供をご希望まれる方は、お会いした際に少しでも性的に前向きになれるかどうかを確認させていただきます。</p>
          </div>

          <div className={styles.conditionList}>
            <div className={styles.conditionItem}>
              <div className={styles.conditionCheck}>✓</div>
              <div className={styles.conditionText}>36歳以下の方</div>
            </div>
            <div className={styles.conditionItem}>
              <div className={styles.conditionCheck}>✓</div>
              <div className={styles.conditionText}>健康と体系に気を使った生活をしてきた方</div>
            </div>
            <div className={styles.conditionItem}>
              <div className={styles.conditionCheck}>✓</div>
              <div className={styles.conditionText}>契煙経験のない方</div>
            </div>
            <div className={styles.conditionItem}>
              <div className={styles.conditionCheck}>✓</div>
              <div className={styles.conditionText}>普段から清潔に気を使っている方</div>
            </div>
            <div className={styles.conditionItem}>
              <div className={styles.conditionCheck}>✓</div>
              <div className={styles.conditionText}>授かった子を経済的に支えていく意志のある方</div>
            </div>
            <div className={styles.conditionItem}>
              <div className={styles.conditionCheck}>✓</div>
              <div className={styles.conditionText}>お子さんが「やりたい」ということを自分の人生を捧げて応援する意志を持てる方</div>
            </div>
            <div className={styles.conditionItem}>
              <div className={styles.conditionCheck}>✓</div>
              <div className={styles.conditionText}>
                生後直ぐに、毎日顔を見る度に
                「あなたならできる！」「あなたは天才なのよ！」
                とアファメーションの声かけを習慣として実行できる方
              </div>
            </div>
            <div className={styles.conditionItem}>
              <div className={styles.conditionCheck}>✓</div>
              <div className={styles.conditionText}>
                お子さんが「こうしたい」という意志に対して
                【常に意識的に肯定し、肯定の言葉がけをする】と約束できる方
              </div>
            </div>
            <div className={styles.conditionItem}>
              <div className={styles.conditionCheck}>✓</div>
              <div className={styles.conditionText}>
                思春期に自我が強まった際に、お子さんが悩んでいる歲は、
                お渡しする西洋占星術のホロスコープ情報に立ち返り、
                自分の投影ではなく、真に一人の人間の心を理解しようと努めると約束できる方
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meeting Checkpoints ── */}
      <section className={styles.checkpoints}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Meeting Checklist</span>
          <h2>お会いして確認すること</h2>
          <p className={styles.sectionIntro}>お会いした際に確認させていただくポイントです。</p>

          <div className={styles.checkpointList}>
            <div className={styles.checkpointItem}>
              <div className={styles.checkpointIcon}>1</div>
              <p>DMでやり取りし伝えられた内容と不一致がないか</p>
            </div>
            <div className={styles.checkpointItem}>
              <div className={styles.checkpointIcon}>2</div>
              <p>タイミング法をご希望される場合、ゆうまがその気になれる方かどうか</p>
            </div>
            <div className={styles.checkpointItem}>
              <div className={styles.checkpointIcon}>3</div>
              <p>2回目にお会いする場合は、性病検査の結果表为您確認 (＊提供は2回目以降に繋がった場合となります)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.process}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Process</span>
          <h2>ご依頼からお会いするまでの流れ</h2>

          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>ご依頼フォームへの入力と僕への送信</h3>
                <p>このセクションの下にあるフォームへご入力後、送信ボタンを押してください。</p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>フォーム内容を確認し、ゆうまがあなたへご連絡</h3>
                <p>フォーム内容を確認し、「必須条件を満たす」とまず僕が確認できた方へのみ、ご提出いただいた LINE ID へ僕からご連絡します。</p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>カフェなどで軽く顔合わせし、ご本人確認</h3>
                <p>ゆうまがご提出いただいた内容ややり取りと照らし合わせ、齟齬がないか確認させていただきます。</p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3>精子提供のためにお会いする (2回目)</h3>
                <p>ご依頼いただいた方の受精タイミングに合わせ、シリンジ法またはタイミング法実施のためにお会いします。</p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>5</div>
              <div className={styles.stepContent}>
                <h3>2回目で受精とならなかった場合、3回目と予定を立てることになります。</h3>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>6</div>
              <div className={styles.stepContent}>
                <h3>ご出産後、ゆうまにお子様の出生情報をご提出</h3>
              </div>
                <p>お名前はニックネームでかまいません。ご提出いただいた情報を元に、重要な西洋占星術情報をプレゼントいたします。</p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href="/disclaimer" className={styles.btnSecondary}>
          免責事項を確認する
        </a>
      </div>

      {/* ── Compensation Table ── */}
      <section className={styles.compensation}>
        <div className={styles.sectionInner}>
          <h2>報酬表</h2>
          <p className={styles.compensationIntro}>
            僕のこれまでの人生への自己投資と現在の仕事を考慮すると、50万円でも安いのでは？ と個人的には思っています。ただ、個人間の相場から以下のように割安で提供させていただきます。
          </p>
          <p className={styles.paymentNote}>
            お支払いは都お会いした際の早い段階で現金を封筒にて手渡し厳守となります。
          </p>
          <div className={styles.compensationTable}>
            <div className={styles.compensationRow}>
              <div className={styles.compensationLabel}>一度目にお会いする際</div>
              <div className={styles.compensationAmount}>1,000円</div>
              <div className={styles.compensationNote}>(交通費 + 仕事の調整費が含まれます)</div>
            </div>
            <div className={styles.compensationNote}>
              一度目にお会いした際に、精子提供決定となった場合(別日を調整)：
            </div>
            <div className={styles.compensationRow}>
              <div className={styles.compensationLabel}>1回目提供</div>
              <div className={styles.compensationAmount}>5万1,000円 + ホテル代</div>
            </div>
            <div className={styles.compensationRow}>
              <div className={styles.compensationLabel}>2回目提供</div>
              <div className={styles.compensationAmount}>1回目で受精とならなかった場合、2万1,000円 + ホテル代</div>
            </div>
            <div className={styles.compensationRow}>
              <div className={styles.compensationLabel}>3回目提供</div>
              <div className={styles.compensationAmount}>2回目で受精とならなかった場合、1万1,000円 + ホテル代</div>
            </div>
          </div>
          <div className={styles.compensationRemarks}>
            <p>＊報酬分は現金を封筒に入れて僕にお渡しいただきますが、ホテル代はご都合のよい手段でロビーにてお支払いください。</p>
            <p>＊どの回でもご依頼いただいた方のご自宅であれば、提供のためのホテル代は不要となります。</p>
            <p>＊2回目以降は別のドナーを検討するというのはご依頼主さま次第となります。強制ではありません。</p>
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
              <summary>出産後は出生情報を渡し、西洋占星術のホロスコープ情報を受け取った後も私からご連絡は可能ですか？</summary>
              <p>これは僕にとって仕事であり、僕がお子様に愛を注げるのは西洋占星術のホロスコープ情報をお渡しするところまでとなります。</p>
            </details>
            <details className={styles.faqItem}>
              <summary>匿名での提供は可能ですか？</summary>
              <p>これは仕事のため僕には守秘義務がございます。心配はご無用です。いずれにせよ、僕がご依頼者さんに連絡するのは西洋占星術のホロスコープ情報をお渡しるところまでとなります。</p>
            </details>
            <details className={styles.faqItem}>
              <summary>第二子を依頼することは可能ですか？</summary>
              <p>可能です。第二子であっても報酬表通りとなります。</p>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta} id="contact">
        <h2>条件に合い、免責事項含め納得された方はご依頼ください</h2>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf EXAMPLE/form/start" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
          お問い合わせフォームへ
        </a>
      </section>

      {/* ── Footer ── */}
      <footer>
        <p>© 2026 精子提供者プロフィールページ</p>
        <p><a href="/disclaimer" style={{color: '#666', fontSize: '14px'}}>免責事項</a></p>
      </footer>
    </div>
  );
}
