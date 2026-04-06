import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "portfolio";

const nextConfig: NextConfig = isGithubPages
  ? {
      output: "export",
      trailingSlash: true,
      basePath: `/${repoName}`,
      assetPrefix: `/${repoName}/`,
      images: {
        unoptimized: true,
      },
    }
  : {};

export default nextConfig;
