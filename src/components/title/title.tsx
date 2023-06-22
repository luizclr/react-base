import { PropsWithChildren } from "react";

import { Title as BaseTitle } from "~/components/title/title.styles";

export const Title: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => (
  <BaseTitle>{children}</BaseTitle>
);
