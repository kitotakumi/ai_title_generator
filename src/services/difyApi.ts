// src/services/difyApi.ts
import { getOrCreateUserId } from '../utils/userId';

const API_URL = 'https://api.dify.ai/v1/workflows/run';
const API_KEY = process.env.REACT_APP_API_KEY;

interface DifyPayload {
  inputs: {
    tkw: string;
    google: string;
  };
  response_mode: "blocking";
  user: string;
}

export const runDifyWorkflow = async (
  inputText: string,
  googleResult: string
): Promise<any> => {
  const payload: DifyPayload = {
    inputs: {
      tkw: inputText,
      google: googleResult,
    },
    response_mode: "blocking",
    user: getOrCreateUserId(),
  };

  console.log("dify に送信する payload:", payload);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY!}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`dify API エラー! ステータス: ${response.status}`, errorText);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonResponse = await response.json();
    console.log("dify API からのレスポンス:", jsonResponse);
    return jsonResponse.data.outputs;
  } catch (error) {
    console.error("dify API リクエストエラー:", error);
    throw error;
  }
};
