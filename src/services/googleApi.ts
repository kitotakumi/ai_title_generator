// src/services/googleApi.ts
const GOOGLE_URL = 'https://www.googleapis.com/customsearch/v1';
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const GOOGLE_CSE_ID = process.env.REACT_APP_GOOGLE_CSE_ID;

export const getGoogleTitles = async (query: string): Promise<string> => {
  // URLオブジェクトを使ってパラメータを設定
  const url = new URL(GOOGLE_URL);
  url.searchParams.append('q', query);
  url.searchParams.append('key', GOOGLE_API_KEY!);
  url.searchParams.append('cx', GOOGLE_CSE_ID!);
  url.searchParams.append('num', '10');

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Google API HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // 結果の items 配列からタイトルを抽出し、改行区切りの文字列に連結
    const titles = data.items ? data.items.map((item: any) => item.title).join("\n") : "";
    return titles;
  } catch (error) {
    console.error("Google API エラー:", error);
    return "APIリクエストの上限に達しました";
  }
};
