var data = [{id: 1, author: "dennis ritchie", text: "this is comment one."}, {id: 2, author: "bjarne stroustrop", text: "this is comment two."}];

var Comment = React.createClass({displayName: "Comment",
  render: function() {
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.props.author
        ), 
        this.props.children
      )
    );
  }
});

var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        React.createElement(Comment, {author: comment.author, key: comment.id}, 
          comment.text
        )
      );
    });
    return (
      React.createElement("div", {className: "commentList"}, 
        commentNodes
      )
    );
  }
});

var CommentForm = React.createClass({displayName: "CommentForm",
  render: function() {
    return (
      React.createElement("div", {className: "commentForm"}, 
        "I am a comment form."
      )
    );
  }
});


var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.props.data}), 
        React.createElement("br", null), 
        React.createElement("hr", null), 
        React.createElement(CommentForm, null)
      )
    );
  }
});

ReactDOM.render(
  React.createElement(CommentBox, {data: data}),
  document.getElementById('example')
);
