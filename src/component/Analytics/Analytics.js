import React, { Fragment, lazy, Suspense } from "react";

const BuyerList = lazy(() => import("../BuyerList"));
const Graph = lazy(() => import("../../Graph/Chart"));

function Analytics() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BuyerList />
        <Graph />
      </Suspense>
    </>
  );
}
export default React.memo(Analytics);
