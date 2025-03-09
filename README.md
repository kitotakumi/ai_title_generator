# AIタイトル生成ツール
- このアプリは、検索キーワードを入力するとタイトル採点アルゴリズムに基づいて12個の記事タイトル案とGoogleの検索上位10件とGoogleサジェスト一覧を生成するWebアプリです。
- 社内向けに作成したアプリをマスク・簡略化した模倣版です。

## アーキテクチャ図


## 主な機能

- **認証機能**  
  AWS Cognito を利用したユーザー認証（ユーザーID/パスワードによるサインイン）
- **キーワード入力と結果表示**  
  ユーザーが入力したキーワードに基づき、Google API および Dify API を呼び出し、タイトル案や検索結果を表示
- **ユニークユーザー識別**  
  初回アクセス時に生成した一意のユーザーID（UUID）を localStorage に保存し、dify へのデータ送信時の識別子として利用

## ディレクトリ構造
.
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
│   ├── googleApi.js
│   └── storeData.js
├── styles
│   ├── App.css
│   └── Login.css
└── utils
    └── userId.js


## セットアップ
git clone https://github.com/cuebic/generative_ai/title_generator title_generator
cd title_generator
npm install
.envファイルを入手してください。

## テスト
npm start

## デプロイ
amplify init
amplify add auth
amplify add hosting
amplify push
amplify publish
