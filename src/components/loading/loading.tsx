import progressBar from "~/assets/img/progress-bar.gif";
import { Background, Text } from "~/components/loading/loading.styles";
import { useApp } from "~/state/app/hook";

export const Loading: React.FC = () => {
  const { isLoading } = useApp();

  return (
    <Background show={isLoading}>
      <Text>Loading...</Text>
      <img src={progressBar} />
    </Background>
  );
};
