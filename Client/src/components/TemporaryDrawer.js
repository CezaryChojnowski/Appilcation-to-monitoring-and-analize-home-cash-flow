import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import GoToWalletsButton from './Wallet/GoToWalletsButton';
import GoToCategoriesButton from './Category/GoToCategoriesButton'
import GoToEventsButton from "./Event/GoToEventsButton";
import GoToPersonsButton from "./Person/GoToPersonsButton"
import GoToTransactionsButton from "./Transaction/GoToTransactionsButton";
import GoToDailyExpenses from "../GoToDailyExpenses"
import TravelMode from "./Event/TravelMode"
// import GoToCurrencyConverterButton from "./CurrencyConverter/GoToCurrencyConverterButton"
import "../../src/App.css"


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

// const changeState = () => {
//   console.log(state.close)
//     setState({close: true});
//     console.log(state.close)
// }

const sideList = side => (
    <div
      className="Temporary"
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, true)}
    >
      <List>
        <ListItem><GoToTransactionsButton/></ListItem>
        <ListItem><GoToWalletsButton/></ListItem>
        {/* <ListItem><GoToPersonsButton/></ListItem> */}
        <ListItem><GoToCategoriesButton/></ListItem>
        <ListItem><GoToEventsButton/></ListItem>
        {/* <ListItem><GoToCurrencyConverterButton/></ListItem> */}
        <ListItem><GoToDailyExpenses/></ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}><span className="navbar-toggler-icon"></span></Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}