import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

type TListElementProps = {
  onClick?: () => void;
  Icon?: React.ReactNode;
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
      {Icon && <ListItemIcon>{Icon}</ListItemIcon>}
      <ListItemText primary={text} style={{ color: color ?? "white" }} />
    </ListItemContainer>
  );
};

export default ListElement;
