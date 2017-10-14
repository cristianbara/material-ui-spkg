require('./css/styles.css');
import injectTapEventPlugin from 'react-tap-event-plugin';
import ThemeProvider from './components/ThemeProvider';

import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import {GridList, GridTile} from 'material-ui/GridList';
import FontIcon from 'material-ui/FontIcon';
import SvgIcon from 'material-ui/SvgIcon';
import {
  List , 
  ListItem
} from 'material-ui/List';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import DropDownMenu from 'material-ui/DropDownMenu';
import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import SelectField from 'material-ui/SelectField';
import Slider from 'material-ui/Slider';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Toggle from 'material-ui/Toggle';
import Snackbar from 'material-ui/Snackbar';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import Subheader from 'material-ui/Subheader';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

if (window.alreadyInjected) {
  injectTapEventPlugin();
}
export {
  ThemeProvider,
  AppBar,
  AutoComplete ,
  Avatar,
  Badge,
  BottomNavigation, BottomNavigationItem,
  FlatButton, RaisedButton, FloatingActionButton, IconButton,
  Card, CardActions, CardHeader, CardMedia, CardTitle, CardText,
  Chip,
  DatePicker,
  Dialog,
  Divider,
  Drawer,
  GridList, GridTile,
  FontIcon,
  SvgIcon,
  List,
  ListItem,
  Menu,
  MenuItem,
  IconMenu,
  DropDownMenu,
  Paper,
  Popover,
  CircularProgress,
  LinearProgress,
  RefreshIndicator,
  SelectField,
  Slider,
  Checkbox,
  RadioButton, RadioButtonGroup,
  Toggle,
  Snackbar,
  Step, Stepper, StepLabel,
  Subheader,
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,
  TextField,
  TimePicker,
  Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle
};
