import { Sidebar } from "~/components/sidebar/sidebar.container";
import { BaseContent, BaseWrapper, Title } from "~/pages/base/base.styles";

export const Base: React.FC = () => {
  return (
    <BaseWrapper>
      <Sidebar />
      <BaseContent>
        <Title>React Base</Title>
      </BaseContent>
    </BaseWrapper>
  );
};
