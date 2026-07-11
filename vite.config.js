import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pagesはリポジトリ名のサブディレクトリ配下
  // (例: https://ユーザー名.github.io/リポジトリ名/)に公開されるため、
  // base を相対パス './' にしておく。
  // これによりビルド後のJS/CSSの参照パスがどの階層に置かれても
  // 正しく解決されるようになる(絶対パス '/' のままだと
  // GitHub Pagesでは404になり、画面が真っ白になってしまう)。
  base: './',
  server: {
    port: 3000,
    open: true
  }
})
