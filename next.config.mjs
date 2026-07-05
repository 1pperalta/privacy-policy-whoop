const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgSite = repoName.endsWith(".github.io");
const repoBasePath = isUserOrOrgSite && repoName ? "" : repoName ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: repoBasePath || undefined
};

export default nextConfig;
