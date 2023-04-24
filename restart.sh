# Next.jsをリビルドし再スタート
pm2 stop blog
npm run build
pm2 start ecosystem.config.js