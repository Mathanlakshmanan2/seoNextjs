import React, { Fragment } from 'react';
import Router from 'next/router';
import {wrapper} from '../store';

// types
import type { AppProps } from 'next/app';

// global styles
import 'swiper/swiper.scss';
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';
import '../assets/css/styles.scss';

import * as gtag from './../utils/gtag';
import Head from 'next/head';

const isProduction = process.env.NODE_ENV === 'production';

// only events on production
if(isProduction) {
  
  // Notice how we track pageview when route is changed
  Router.events.on('routeChangeComplete', (url: string) => gtag.pageview(url));
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" />
    </Head>
    <Component {...pageProps} />
  </Fragment>
);

export default wrapper.withRedux(MyApp);