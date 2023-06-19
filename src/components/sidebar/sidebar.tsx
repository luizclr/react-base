import {
  Container,
  List,
  ListItem,
  ListItemLink,
  SidebarContent,
  SidebarWrapper,
  Text,
  Version,
} from "~/components/sidebar/sidebar.styles";
import { BaseSidebarProps } from "~/components/sidebar/types";
import { PATHS } from "~/routes/paths";

export const BaseSidebar: React.FC<BaseSidebarProps> = ({
  handleLogoutClick,
  handleChangeThemeClick,
}: BaseSidebarProps) => {
  return (
    <SidebarWrapper data-testid="sidebar">
      <Text>React Base</Text>
      <SidebarContent>
        <List>
          <ListItem>
            <ListItemLink to={PATHS.HOME}>Home</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink to={PATHS.PROFILE}>Profile</ListItemLink>
          </ListItem>
          <ListItem gutters={true} onClick={handleLogoutClick}>
            Logout
          </ListItem>
        </List>
        <Container>
          <List>
            <ListItem gutters={true} onClick={handleChangeThemeClick}>
              Change theme
            </ListItem>
          </List>
          <Version>v0.1.0</Version>
        </Container>
      </SidebarContent>
    </SidebarWrapper>
  );
};
