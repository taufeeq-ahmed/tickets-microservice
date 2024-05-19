import React, { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import RootLayout from './layout';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => <RootLayout>{page}</RootLayout>);
    return getLayout(
        <Component {...pageProps} />
    )
};

export default MyApp;
