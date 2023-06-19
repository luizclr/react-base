import { useNavigate } from "react-router-dom";
import { ThemeTypes, useTheme } from "react-styled-guide";

import { BaseSidebar } from "~/components/sidebar/sidebar";
import { PATHS } from "~/routes/paths";
import { useApp } from "~/state/app/hook";
import { useAuth } from "~/state/auth/hook";

export const Sidebar: React.FC = () => {
  const { storageService } = useApp();
  const { theme, setDarkTheme, setLightTheme } = useTheme();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleChangeThemeClick = (): void => {
    if (theme === ThemeTypes.dark) {
      setLightTheme();
      storageService.set("theme", ThemeTypes.light);
    } else {
      setDarkTheme();
      storageService.set("theme", ThemeTypes.dark);
    }
  };

  const handleLogoutClick = (): void => {
    signOut();
    storageService.delete("token");
    storageService.delete("user");
    navigate(PATHS.LOGIN);
  };

  return (
    <BaseSidebar
      handleLogoutClick={handleLogoutClick}
      handleChangeThemeClick={handleChangeThemeClick}
    />
  );
};
