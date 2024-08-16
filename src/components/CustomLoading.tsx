import { FunctionComponent } from "react";

import LoadingIndicator from "./LoadingIndicator";

interface IProps {
  className?: string;
  text?: string;
}

const CustomLoading: FunctionComponent<IProps> = ({ className, text }) => {
  return (
    <div
      className={`p-6 flex flex-col justify-center items-center gap-5 ${className}`}
    >
      <LoadingIndicator />
      <p>{text || "Veuillez patienter un instant..."}</p>
    </div>
  );
};

export default CustomLoading;
