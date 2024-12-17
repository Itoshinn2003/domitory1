import { expect, test } from "vitest";
import { createSessionClients, noCookieClient } from "./apiClient";
import { GET } from "./utils";

// DeepL API: 正常系テスト
test(GET(noCookieClient.deepl), async () => {
  try {
    const apiClient = await createSessionClients();
    const res = await apiClient.deepl.get({
      query: { text: "Hello!", targetLanguage: "ja" },
    });

    // レスポンスが期待通りか確認
    expect(res.body).toEqual("こんにちは！");
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Translation error:", errorMessage);
    throw new Error(`DeepL API error: ${errorMessage}`);
  }
});
