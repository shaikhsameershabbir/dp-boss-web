import React from "react";

function page({ params }: { params: { starlineId: string } }) {
  const { starlineId } = params;
  console.log(
    "---qqqqqq-----------------------------q------------->>starlineId",
    starlineId
  );

  return <div>page</div>;
}

export default page;
