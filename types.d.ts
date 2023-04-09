// 環境変数の方をチェックします
declare namespace NodeJS {
	interface ProcessEnv {
    	NEXT_PUBLIC_GITHUB_URL: string;
    	NEXT_PUBLIC_TWITTER_URL: string;
    	NEXT_PUBLIC_BLOG_NAME: string;
  	}
}

