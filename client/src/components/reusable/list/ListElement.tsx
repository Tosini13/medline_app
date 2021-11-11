import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

type TListElementProps = {
  onClick?: () => void;
  Icon: any;
  text: string;
  color?: string;
};

const ListElement: React.FC<TListElementProps> = ({
  onClick,
  Icon,
  text,
  color,
}) => {
  const ListItemContainer: React.FC = onClick
    ? ({ children }) => (
        <ListItem button onClick={onClick}>
          {children}
        </ListItem>
      )
    : ({ children }) => <ListItem>{children}</ListItem>;
  return (
    <ListItemContainer>
      <ListItemIcon>
        <Icon style={{ color: color ?? "white" }} />
      </ListItemIcon>
      <ListItemText primary={text} style={{ color: color ?? "white" }} />
    </ListItemContainer>
  );
};

export default ListElement;
