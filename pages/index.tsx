import Paper from "@material-ui/core/Paper";
import Head from "next/head";
import React, { useEffect } from "react";
import { Controls } from "../components/controls";
import { Layout } from "../components/layout";
import { MetaHead } from "../components/meta-head";
import Player from "../components/player/player";
import ReactGA from "react-ga";
import DiagramDynamic from "../components/diagram/dynamic";
import Typography from "@material-ui/core/Typography";

const Page: React.FC = () => {
  useEffect(() => {
    try {
      ReactGA.initialize("UA-206767304-1");
      ReactGA.pageview("/");
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Layout>
      <MetaHead
        title="A Heist with Markiplier"
        description="Everything’s finally ready so just stick to the plan and you’ll do great! You do remember the plan... right?"
      />
      <Head>
        <link rel="icon" href="/favicon-red.png" />
      </Head>
      <div className="container pb-5">
        <div className="d-flex flex-column">
          <h1 className="visually-hidden">A Heist with Markiplier</h1>
          <Player />
          <Controls />
          <Paper className="my-2 p-2 pt-4">
            <Typography className="text-center" variant="h5">
              Your walkthrough
            </Typography>
            <DiagramDynamic />
          </Paper>
          {/* <Paper className="py-4 my-2">
            <Endings />
          </Paper> */}
          {/* <Paper className="py-4">
            <ChoiceHistory />
          </Paper> */}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
