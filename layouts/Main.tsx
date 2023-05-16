import Head from 'next/head';
import Header from 'components/header';
import { useRouter } from 'next/router';

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

export default ({ children, title = 'Next.js Ecommerce' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="zPnMGLNYLN_89V82xeiJFDE--NWuF5B0ponVI_iguKA" />
        <meta name="msvalidate.01" content="3846A2694A3BBD31ACD111EC5E58A93E" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{ title }</title>
        <meta name="description" content="Get powerful prescription medications from our online store - all without leaving your home! All of our medications come with a 100% satisfaction guarantee."/>
        <meta property="og:title" content="medicine | drug stores near me	| weight loss | tarnea | madurai | bangolore | online medicals madurai"/>
        <meta property="og:description" content="Find the best drugs, vitamins, and supplements at the best prices in your area with our online store"/>
        <meta property="og:url" content="https://snipcart.com/"/>
        <meta property="og:type" content="website"/>
        
      </Head>

      <Header />

      <main className={(pathname !== '/' ? 'main-page' : '')}>
        { children }
      </main>
    </div>
  )
}