Feature('ウェブサイトのアクセシビリティテスト');

Scenario('test something',  ({ I }) => {
    I.amOnPage('http://localhost:9090/');

  // ナビゲーションの確認
  I.seeElement('[role="navigation"]');
  I.see('ホーム', '[role="navigation"]');
  I.see('ニュース', '[role="navigation"]');
  I.see('連絡先', '[role="navigation"]');

  // メインコンテンツの記事を確認
  I.seeElement('[role="main"]');
  I.see('記事のタイトル', '[role="main"]');
  I.click('詳細を見る', '[role="main"]');

  // お問い合わせフォームに移動して入力
  I.seeElement('[role="form"]');
  I.fillField('input[aria-required="true"][name="name"]', 'テスト太郎');
  I.fillField('input[aria-required="true"][name="email"]', 'test@example.com');
  I.selectOption('inquiryType', '商品について');
  I.click('男性');
  I.checkOption('#subscribeYes');
  I.fillField('message', 'これはテストメッセージです。');

  // フォームを送信
  I.click('送信');

  // 送信確認メッセージ（仮）を確認
  I.see('お問い合わせありがとうございます', '[role="alert"]');
});
