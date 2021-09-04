import Paper from "@material-ui/core/Paper";
import Head from "next/head";
import React from "react";
import { Controls } from "../components/controls";
import { Endings } from "../components/endings";
import { Layout } from "../components/layout";
import { MetaHead } from "../components/meta-head";
import Player from "../components/player/player";

const Page: React.FC = () => {
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
          <Player />
          <Controls />
          <Paper className="py-4 my-2">
            <Endings />
          </Paper>
          {/* <Paper className="py-4">
            <ChoiceHistory />
          </Paper> */}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
