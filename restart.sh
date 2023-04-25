# Next.jsをリビルドし再スタート
pm2 stop blog

# 最新のmainブランチに更新
git pull

# Next.jsをリビルドし再スタート
npm run build
pm2 start ecosystem.config.js