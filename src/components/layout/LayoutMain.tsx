import React, { useEffect, useState } from "react";
import Head from "next/head";

import { Container, Row, Col } from "reactstrap";

const LayoutMain = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Thematics on Tour</title>
        <meta name="title" content="Thematics on Tour" key="title_name" />
        <meta name="description" content="Thematics on Tour Events" key="description_name" />

        <meta property="og:type" content="website" key="type_property" />
        <meta property="og:site_name" content="Thematics on Tour" key="name_property" />
        <meta property="og:title" content="Thematics on Tour" key="title_property" />
        <meta property="og:description" content="Thematics on Tour Events" key="description_property" />
        <meta property="og:keywords" content="SEO, Google, Speed test" key="keywords_property" />
        <meta property="og:url" content="https://www.carsvansandbikes.com" key="url" />
        <meta property="og:image" itemProp="image" content="" key="image" />
        <meta name="application-name" content="thematicsontour.com" key="appName" />
      </Head>

      <div>{children}</div>
    </>
  );
};

export default LayoutMain;
