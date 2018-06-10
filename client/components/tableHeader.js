import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
          <tr key={'header'} className="header">
            <th className="name">FIRSTNAME</th>
            <th className="user">USERNAME</th>
            <th className="email">EMAIL</th>
            <th className="phone">PHONE</th>
            <th className="company">COMPANY</th>
          </tr>
    )
  }
}

