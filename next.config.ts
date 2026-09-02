import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  /* Keep Fast Refresh state separate from production builds. */
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              typescript: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "removeAttrs",
                    params: {
                      attrs: "(class)",
                    },
                  },
                ],
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
  devIndicators: false,
  /* Dev server binds to 0.0.0.0, so allow /_next/* requests from private-network hosts. */
  allowedDevOrigins: [
    "127.0.0.1",
    "192.168.*.*",
    "10.*.*.*",
    "172.*.*.*",
    "*.local",
  ],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "metadata" }],
    ],
  },
});

export default withMDX(nextConfig);
