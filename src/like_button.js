//https://reactjs.org/docs/add-react-to-a-website.html

'use strict';

//Hello World!
ReactDOM.render(
  <h3>Hello, world!</h3>,
  document.getElementById('title')
);


//Like button
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);


