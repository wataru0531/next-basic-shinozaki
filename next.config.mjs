/** @type {import('next').NextConfig} */


const nextConfig = {
  // データ取得時にキャッシュしたかどうかをターミナルで確認できる。
  // cache hit とでればキャッシュを使っているということ
  logging: {
    fetches: {
      fullUrl: true,
    }
  }
};

export default nextConfig;
