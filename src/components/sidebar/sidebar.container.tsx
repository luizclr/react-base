import { useNavigate } from "react-router-dom";

import { BaseSidebar } from "~/components/sidebar/sidebar";
import { useApp } from "~/state/app/hook";
import { useAuth } from "~/state/auth/hook";
import { useTheme } from "~/state/theme/hook";
import { ThemeStyle } from "~/style-guide";

export const Sidebar: React.FC = () => {
  const { storageService } = useApp();
  const { themeStyle, setDarkTheme, setLightTheme } = useTheme();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleChangeThemeClick = (): void => {
    if (themeStyle === ThemeStyle.dark) {
      setLightTheme();
      storageService.set("themeStyle", ThemeStyle.light);
    } else {
      setDarkTheme();
      storageService.set("themeStyle", ThemeStyle.dark);
    }
  };

  const handleLogoutClick = (): void => {
    signOut();
    storageService.delete("token");
    storageService.delete("user");
    navigate("/login");
  };

  return (
    <BaseSidebar
      handleLogoutClick={handleLogoutClick}
      handleChangeThemeClick={handleChangeThemeClick}
    />
  );
};
