import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriendForm extends React.Component {
  state = {
    newfriend: {
      name: '',
      age: '',
      email: ''
    }
  };

  handleChange = e => {
    this.setState({
      newfriend: {
        ...this.state.newfriend,
        [e.target.name]: e.target.value
      }
    });
  };

  postFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', this.state.newfriend)
      .then(res => {
        console.log('New friend added!', res)
        this.props.history.push('/protected')
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.postFriend}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.newfriend.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.newfriend.age}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.newfriend.email}
            onChange={this.handleChange}
          />
          <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  }
}

export default AddFriendForm;