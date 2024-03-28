import React from "react";

type Props = {};

const TitleSection = (props: Props) => {
  return (
    <div className="mx-auto mb-[60px] text-center">
      <h2 className="mb-3   text-6xl text-dark dark:text-white">
        Appartement récemment <span className="text-primary">ajoutée !</span>
      </h2>
    </div>
  );
};

export default TitleSection;
