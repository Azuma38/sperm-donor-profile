import styles from "./page.module.css";

export default function Form() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>ご依頼フォーム</h1>
        <p className={styles.heroSub}>必要事項をご入力の上、最下部のボタンで送信してください。</p>
      </section>

      <section className={styles.formSection}>
        <div className={styles.sectionInner}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">お名前（カタカナ可・苗字不要）</label>
              <input type="text" id="name" name="name" placeholder="名前" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="nickname">ニックネーム（こちらで読んで欲しい場合はこちらも記入）</label>
              <input type="text" id="nickname" name="nickname" placeholder="ニックネーム" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">携帯電話番号</label>
              <input type="tel" id="phone" name="phone" placeholder="080-1234-5678" />
              <p className={styles.formNote}>
                ＊ご自身の携帯電話番号でWhatsAppという無料アプリに登録ください。こちらからのご連絡はWhatsAppからします。
              </p>
            </div>

            <div className={styles.formGroup}>
              <label>提供方法はどちらを希望されていますか？</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input type="radio" name="method" value="syringe" />
                  <span>シリンジ法</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="method" value="timing" />
                  <span>タイミング法</span>
                </label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">現在のご意志を丁寧に以下に記載ください</label>
              <textarea id="message" name="message" rows={6} placeholder="您的希望や状況をお気軽にお描きください..." />
            </div>

            <div className={styles.formGroup}>
              <p className={styles.consent}>
                ご依頼送信ボタンを押すことで免責事項にも同意したことになります。しっかり確認されましたか？
              </p>
              <div className={styles.consentRadio}>
                <label className={styles.radioLabel}>
                  <input type="radio" name="consent" value="yes" />
                  <span>はい</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="consent" value="no" />
                  <span>いいえ</span>
                </label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <button type="submit" className={styles.btnSubmit}>
                依頼を送信する
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
