import React from 'react';


export default class Users extends React.Component {
    constructor(){
        super()
        this.state = {
            showExtra: false,
        }
    }
    handleClick() {
        this.setState(prevState => ({
            showExtra: !prevState.showExtra
        }));
    }
  render() {
    return (
            <tr onClick={() => this.handleClick()}>
                <td className="name">{this.props.data.name}</td>
                <td className="user">{this.props.data.username}</td>
                <td className="email">{this.props.data.email}</td>
                <td className="phone">{this.props.data.phone}</td>
                <td className="company">{this.props.data.company.name}</td>
                {this.state.showExtra ?
                <td className="link">{this.props.data.website}</td>:
                <td className="moreInfo">See website</td>
                }
            </tr> 
    )
  }
}

