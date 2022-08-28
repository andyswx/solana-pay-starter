import React from "react";
import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />

      <title>SolCaps</title>
      <meta name="title" content="SolCaps" />
      <meta name="description" content="Caps and Snapbacks bought with Solana." />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://solcaps.xyz/" />
      <meta property="og:title" content="SolCaps" />
      <meta property="og:description" content="Caps and Snapbacks bought with Solana." />
      <meta property="og:image" content="https://miro.medium.com/max/1200/1*bPFhA3IXnFU_Q_oITCNzEw.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://solcaps.xyz/" />
      <meta property="twitter:title" content="SolCaps" />
      <meta property="twitter:description" content="Caps and Snapbacks bought with Solana." />
      <meta property="twitter:image" content="https://miro.medium.com/max/1200/1*bPFhA3IXnFU_Q_oITCNzEw.png" />
    </Head>
  );
}
