～クイズアプリ～

【実装イメージ】
最初の画面を表示
↓
STARTボタンを押すと１つめの問題の文章を表示する
↓
選択肢の１つを選ぶと次の画面に遷移する
↓
次の問題を表示する
↓
以上の流れを5回繰り返す
↓
「結果発表」の文字を一定時間表示する（ゆらゆらエフェクト）
↓
「あなたの正解数は5問中〇問でした」と表示する（クラッカーのエフェクトを入れる）

◎useEffect の役割
今回の useEffect は、answerLogs が更新されるたびに呼ばれる。
もし answerLogs.length === MAX_QUIZ_LEN（すべての問題に回答済み＝5問回答）なら、
正解数をカウントして、
navigation で結果ページへ遷移する。
→ 「クイズが全部終わったタイミングを監視し、結果ページに移動する」 のが役割。


～npmコマンドおさらい～

npm create Vite@latest

npm install…役割：プロジェクトに必要なパッケージ（依存関係）をインストールする

npm run dev…　開発用サーバーを立ち上げる


npm install react-router-dom　react-router-domを追加するコマンド


テンプレートリテラル
…文字列と変数を連結させる時の書き方（バッククォートを使う）
<Display>
	{`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}
</Display>



.map()…配列要素に対して使えるJSに標準搭載されているメソッドでループ文の一種のようなもの
