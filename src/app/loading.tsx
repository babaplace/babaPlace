import Loader from "@/ui/components/Loader";
import React from "react";

const loading = () => {
  return (
    <div className="my-20 flex justify-center">
      <div>
        <Loader />
      </div>
    </div>
  );
};

export default loading;
