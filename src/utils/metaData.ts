// 外部サイトのタイトル・説明・イメージを取得する


import fetch from "node-fetch";
import cheerio from "cheerio";

export interface EternalMetaData {
	title: string | null;
	description: string | null;
	thumbnail: string | null;
  }


export async function getMetadata(url: string): Promise<EternalMetaData> {
	try {
		const response = await fetch(url);
		const html = await response.text();
		const $ = cheerio.load(html);

		// タイトルを取得する
		const title = $("meta[property='og:title']").attr("content") || $("title").text() || null;

		// 説明を取得する
		const description = $("meta[property='og:description']").attr("content") || $("meta[name='description']").attr("content") || null;

		// イメージを取得する
		const thumbnail = $("meta[property='og:image']").attr("content") || null;

		return { title, description, thumbnail };
	} catch (error) {
		console.error(`Error fetching metadata: ${(error as Error).message}`);
		return { title: null, description: null, thumbnail: null };
	}
}