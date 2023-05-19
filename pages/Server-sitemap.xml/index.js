import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  let posts = await fetch("https://seo-nextjstest.vercel.app/api/products");
  posts = await posts.json();
  const newsSitemaps = posts.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}product/${item.id}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...newsSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}