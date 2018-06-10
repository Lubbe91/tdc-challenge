import React from 'react';
import axios from 'axios';
import Users from './userData';

export default class Data extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            loading: false,
        }
      }

    componentWillMount() {
        this.setState({
            loading: true
        })
        axios.get('http://localhost:3000/api/users')
            .then( (response) => {
                const users = response.data;
                this.setState({ 
                    users: users,
                    loading: false, 
                });
            })
            .catch( (error) => {
                console.log(error);
            });
    }

  render() {
    return (
        this.state.loading ? <tr><td className="loading">Loading data...</td></tr>:
        this.state.users.map((user) =>
        <Users key={user.id} data={user}/>
        )
    )   
  }
}

