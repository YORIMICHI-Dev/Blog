// 環境変数の型チェック
declare namespace NodeJS {
	interface ProcessEnv {
    	NEXT_PUBLIC_GITHUB_URL: string;
    	NEXT_PUBLIC_TWITTER_URL: string;
    	NEXT_PUBLIC_BLOG_NAME: string;

		AWS_REGION: string;
		AWS_ACCESS_KEY_ID: string;
		AWS_SECRET_ACCESS_KEY: string;
		AWS_S3_BUCKET: string;
  	}
}

