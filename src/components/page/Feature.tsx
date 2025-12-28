import React from "react";

interface FeatureProps {
  feature: {
    title: string;
    description: string;
  };
}
function Feature({ feature }: FeatureProps) {
    const {title, description} = feature
  return (
    <div className="">
      <p className="uppercase text-xl font-bold pb-4">{title}</p>
      <p className="text-lg" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

export default Feature