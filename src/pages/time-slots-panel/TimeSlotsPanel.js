import React, {Component} from 'react';
import './TimeSlotsPanel.css';
import { api_base } from '../../App';
import Header from '../../components/Header/Header';
import { hours, STATUS_LIST } from '../../consts';
import StatusNotification from './StatusNotification';
import TimeSlotsTable from './TimeSlotsTable';

class TimeSlotsPanel extends Component {
    state = {user: undefined, status: undefined}
    componentWillMount() {
      this.getUserInfo();
    }

    async getUserInfo(){
      const user_info_req = await fetch(`${api_base}/users/me`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token').replace(/"/g, "")}`
                }
            });
      const user_info_res = await user_info_req.json();
      this.setState({status: user_info_res.status, user: user_info_res});
    }

    render() {
        return (
            <div className="content-wrapper">
            <Header />
            <div className='panel-container'>
                <div className='account-panel'>
                    <div className='account-info'>
                    {this.state.user &&
                        <div className={'account-name'}>
                          <p>{this.state.user.name} {this.state.user.surname}</p>
                        </div>}
                    </div>
                    <div className='interview-info'>
                        <div className='green-circle'/>
                        {this.state.user && this.state.user.timeslot &&
                        <p className='interview-info-text'>{`Ваше интервью состоится в ${this.state.user.timeslot.time}`}</p>}
                    </div>
                    <button className='cancel-button'>Отменить</button>
                </div>
                <div className='time-slots-panel'>
                  {this.state.status === 'INTERVIEWING' ?
                  <TimeSlotsTable userslot={this.state.user.timeslot.time} updateUserInfo={this.getUserInfo.bind(this)}/> :
                  <StatusNotification status={this.state.status}/>
                  }
                </div>
            </div>
            </div>
        )
    }
}

export default TimeSlotsPanel;