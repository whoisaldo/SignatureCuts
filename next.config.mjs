/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/SignatureCuts" : "";

const nextConfig = {
  output: "export",
  ...(basePath
    ? { basePath, assetPrefix: `${basePath}/` }
    : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
