//import AppBar from './material-ui/AppBar';
var AppBar = require('./material-ui/AppBar');

var AppBarExampleIcon = React.createClass({
  render: function() {    
    return (
    <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
    );
  }
});

ReactDOM.render(
  <AppBarExampleIcon />,
  document.getElementById('playground')
);

