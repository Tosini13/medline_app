import { Hidden, ListItem, ListItemProps, ListItemIcon, ListItemText } from "@mui/material";

type TListElementProps = {
  onClick?: () => void;
  Icon?: React.ReactNode;
  text: string;
  color?: string;
} & ListItemProps;

const ListElement: React.FC<TListElementProps> = ({
  onClick,
  Icon,
  text,
  color,
  ...props
}) => {
  const ListItemContainer: React.FC = onClick
    ? ({ children }) => (
      <ListItem onClick={onClick} button>
        {children}
      </ListItem>
    )
    : ({ children }) => <ListItem {...props}>{children}</ListItem>;
  return (
    <ListItemContainer>
      {Icon && <ListItemIcon>{Icon}</ListItemIcon>}
      <Hidden mdDown>
        <ListItemText primary={text} style={{ color: color ?? "white" }} />
      </Hidden>
      <Hidden mdUp>
        <ListItemText primary={text} style={{ color: color ?? "white" }} />
      </Hidden>
    </ListItemContainer>
  );
};

export default ListElement;
