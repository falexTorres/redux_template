
jQuery(document).ready(function() {
  var helloworld = React.createClass({displayName: "helloworld",
    render: function() {
      return (
        React.createElement("h1", null, "Hello, world")
      );
    }
  });

  ReactDOM.render(
    React.createElement("helloworld", null),
    document.getElementById('example')
  );
})

