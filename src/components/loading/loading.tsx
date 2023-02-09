import progressBar from "~/assets/img/progress-bar.gif";
import { Background, Text } from "~/components/loading/loading.styles";
import { useApplication } from "~/providers/application/application";

export const Loading: React.FC = () => {
  const { isLoading } = useApplication();

  return (
    <Background show={isLoading}>
      <Text>Loading...</Text>
      <img src={progressBar} />
    </Background>
  );
};
