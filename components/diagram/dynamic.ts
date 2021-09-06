import dynamic from "next/dynamic";

const DiagramDynamic = dynamic(() => import("./walkthrough-diagram"), {
  ssr: false,
});

export default DiagramDynamic;
