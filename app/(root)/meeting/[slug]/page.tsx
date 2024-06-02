import React from "react";

const Meeting = ({ params }: { params: { slug: string } }) => {
  return <div>Meeting Room : {params.slug} </div>;
};

export default Meeting;
