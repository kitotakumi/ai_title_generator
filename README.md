# AIタイトル生成ツール
- このアプリは、検索キーワードを入力するとタイトル採点アルゴリズムに基づいて12個の記事タイトル案とGoogleの検索上位10件とGoogleサジェスト一覧を生成するWebアプリです。
- リポジトリは社内向けに作成したアプリをマスク・簡略化した模倣版です。

## アーキテクチャ図
<img alt="architecture" height="400px" src="https://github.com/kitotakumi/ai_title_generator/blob/main/architecture.png"/>

## デモンストレーション
https://github.com/user-attachments/assets/ccc70e0b-3b31-47a3-bc48-c83e3372dcea

## 技術スタック
- フロントエンド：React
- バックエンド：Python
- クラウドコンピューティング：AWS Lambda
- データベース：AWS DynamoDB
- ホスティング：AWS Amplify
- ユーザー認証：AWS Congnito
- セキュリティ：AWS API Gateway、AWS WAF
- AI：Dify、OpenAI
- Google API：Suggest API、Custom Search API

## 改善点
- フロントエンドからAPIを叩いてしまっているため、API Gateway, Lambdaを噛ませて叩くべき。
- googleログインを実装して、社内ドメインの場合のみ通すという実装が理想。


## 主な機能

- **認証機能**<br>
  AWS Cognitoを利用したユーザー認証。<br>
  ログイン画面に設置されている、社員しかアクセスできないNotionリンクからIDとPasswordを取得することで認証プロセスの実装を簡略化。
- **キーワード入力と結果表示**<br>
  ユーザーが入力した検索キーワードに基づき、AIの生成した記事タイトル案、Googleの検索結果と、Googleサジェスト一覧を表示。<br>
  Google検索結果をすぐに表示することでAIの生成待機時間を有効活用。
- **採点アルゴリズムに基づいてタイトルを生成・自己採点・ソート**<br>
  AIが記事タイトルの採点アルゴリズムを参考に記事タイトルを生成し、それに基づいて各タイトル案を自己採点。ソートした結果をユーザーに表示する。


## ディレクトリ構造
```
src
├── App.tsx
├── amplifyconfiguration.json
├── aws-exports.js
├── components
│   ├── ApiResponseDisplay.tsx
│   ├── Auth
│   │   ├── AuthProvider.tsx
│   │   └── Login.tsx
│   ├── CommonComponents.tsx
│   ├── Dashboard.tsx
│   ├── GoogleResultDisplay.tsx
│   └── KeywordInput.tsx
├── index.css
├── index.tsx
├── services
│   ├── difyApi.ts
│   └── googleApi.ts
├── styles
│   ├── App.css
│   └── Login.css
└── utils
    └── userId.ts

public
├── favicon.ico
├── index.html
├── logo.jpg
├── logo.png
├── manifest.json
├── package-lock.json
└── robots.txt
```


## セットアップ
```
git clone https://github.com/kitotakumi/ai_title_generator.git title_generator
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
