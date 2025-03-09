# AIタイトル生成ツール
- このアプリは、検索キーワードを入力するとタイトル採点アルゴリズムに基づいて12個の記事タイトル案とGoogleの検索上位10件とGoogleサジェスト一覧を生成するWebアプリです。
- Amplifyでホスティング、Congitoでユーザー認証を行っています。
- リポジトリは社内向けに作成したアプリをマスク・簡略化した模倣版です。

## アーキテクチャ図
<img alt="architecture" height="530px" src="https://github.com/kitotakumi/ai_title_generator/blob/main/ai_title_generator_architecture.png" />

## 主な機能

- **認証機能**<br>
  AWS Cognitoを利用したユーザー認証。<br>
  ログイン画面に設置されている、社員しかアクセスできないNotionリンクからIDとPasswordを取得することで認証プロセスの実装を簡略化。
- **キーワード入力と結果表示**<br>
  ユーザーが入力した検索キーワードに基づき、Googleの検索結果とAIの生成した記事タイトル案を表示。<br>
  Google検索結果をすぐに表示することでAIの生成待機時間を有効活用。
- **採点アルゴリズムに基づいてタイトルを生成・自己採点・ソート**<br>
  AIが記事タイトルの採点アルゴリズムを参考に記事タイトルを生成し、それに基づいて各タイトル案を自己採点。ソートした結果をユーザーに表示する。


## ディレクトリ構造
```
src
├── App.js
├── amplifyconfiguration.json
├── aws-exports.js
├── components
│   ├── ApiResponseDisplay.js
│   ├── Auth
│   │   ├── AuthProvider.jsx
│   │   └── Login.jsx
│   ├── CommonComponents.jsx
│   ├── Dashboard.jsx
│   ├── GoogleResultDisplay.js
│   └── KeywordInput.js
├── index.css
├── index.js
├── services
│   ├── difyApi.js
│   └── googleApi.js
├── styles
│   ├── App.css
│   └── Login.css
└── utils
    └── userId.js
```


## セットアップ
```
git clone https://github.com/cuebic/generative_ai/title_generator title_generator
cd title_generator
npm install
```
.envファイルが必要になります。

## テスト
```
npm start
```

## デプロイ
```
amplify init
amplify add auth
amplify add hosting
amplify push
amplify publish
```
