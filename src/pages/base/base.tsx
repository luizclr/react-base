import { Title } from "~/pages/base/base.styles";
import { useTheme } from "~/state/theme/hook";
import { ThemeStyle } from "~/style-guide";

export const Base: React.FC = () => {
  const { themeStyle, setDarkTheme, setLightTheme } = useTheme();

  const handleClick = (): void => {
    if (themeStyle === ThemeStyle.dark) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  return (
    <>
      <Title>React Base</Title>
      <button type="button" onClick={handleClick}>
        change theme
      </button>
    </>
  );
};
