'use client';

import { useState } from 'react';
import styles from "./page.module.css";

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      nickname: formData.get('nickname'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      method: formData.get('method'),
      message: formData.get('message'),
      consent: formData.get('consent'),
    };

    // Validate consent
    if (data.consent !== 'yes') {
      setError('免責事項の全てに同意がない場合は、送信できません');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || '送信に失敗しました');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : '送信に失敗しました');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.page}>
        <section className={styles.hero}>
          <h1>ご依頼フォーム</h1>
        </section>
        <section className={styles.formSection}>
          <div className={styles.sectionInner}>
            <div className={styles.successMessage}>
              <h2>ご依頼を受け付けました</h2>
              <p>内容を確認次第、WhatsAppよりご連絡いたします。</p>
              <a href="/" className={styles.btnPrimary}>プロフィールに戻る</a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>ご依頼フォーム</h1>
        <p className={styles.heroSub}>必要事項をご入力の上、最下部のボタンで送信してください。</p>
      </section>

      <section className={styles.formSection}>
        <div className={styles.sectionInner}>
          {error && <div className={styles.errorMessage}>{error}</div>}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">お名前（カタカナ可・苗字不要） <span style={{color: '#c00'}}>＊</span></label>
              <input type="text" id="name" name="name" required placeholder="名前" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="nickname">ニックネーム（こちらで読んで欲しい場合はこちらも記入）</label>
              <input type="text" id="nickname" name="nickname" placeholder="ニックネーム" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">携帯電話番号 <span style={{color: '#c00'}}>＊</span></label>
              <input type="tel" id="phone" name="phone" required placeholder="080-1234-5678" />
              <p className={styles.formNote}>
                ＊ご自身の携帯電話番号でWhatsAppという無料アプリに登録ください。こちらからのご連絡はWhatsAppからします。
              </p>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Eメールアドレス <span style={{color: '#c00'}}>＊</span></label>
              <input type="email" id="email" name="email" required placeholder="example@mail.com" />
              <p className={styles.formNote}>
                ＊念のためお伝えelenggarakanいただきます。基本はこちらからメールすることはございません。
              </p>
            </div>

            <div className={styles.formGroup}>
              <label>提供方法はどちらを希望されていますか？ <span style={{color: '#c00'}}>＊</span></label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input type="radio" name="method" value="syringe" required />
                  <span>シリンジ法</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="method" value="timing" />
                  <span>タイミング法</span>
                </label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">現在のご状況、ご動機、ご意志を詳しく以下に記載ください <span style={{color: '#c00'}}>＊</span></label>
              <textarea id="message" name="message" required rows={6} />
            </div>

            <div className={styles.formGroup}>
              <p className={styles.consent}>
                ご依頼送信ボタンを押すことで免責事項にも同意したことになるります。しっかり確認されましたか？ <span style={{color: '#c00'}}>＊</span>
              </p>
              <div className={styles.consentRadio}>
                <label className={styles.radioLabel}>
                  <input type="radio" name="consent" value="yes" required />
                  <span>はい</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="consent" value="no" />
                  <span>いいえ</span>
                </label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
                {isSubmitting ? '送信中...' : '依頼を送信する'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
