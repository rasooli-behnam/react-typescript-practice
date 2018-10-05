import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";

interface ItemsProps extends WithStyles<typeof styles> {
  items: Item[];
}

interface Item {
  imageSource: string;
  title: string;
  description: string;
}

class Items extends React.Component<ItemsProps, any> {
  public render() {
    const { classes, items } = this.props;

    return (
      <List className={classes.root}>
        {items.map((item, index) => (
          <ListItem>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={item.imageSource}
                title={item.title}
              />
              <CardContent>
                <Typography variant="headline">{item.title}</Typography>
                <Typography component="p">{item.description}</Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    );
  }
}

const styles = createStyles({
  root: {
    maxWidth: 350,
    position: "absolute",
    right: 0,
    left: 0,
    margin: "auto"
  },
  card: {
    maxWidth: 300
  },
  media: {
    height: 160,
    width: 300
  }
});

export default withStyles(styles)(Items);
