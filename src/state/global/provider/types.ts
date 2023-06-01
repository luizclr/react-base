import { StyledGuideProps } from "react-styled-guide";

import { ServicesTypes } from "~/state/types";

export type GlobalProviderProps = {
  services: ServicesTypes;
  styleGuide: StyledGuideProps;
};
