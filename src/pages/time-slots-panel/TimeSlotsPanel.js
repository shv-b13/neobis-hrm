import React, {Component} from 'react';
import './TimeSlotsPanel.css';
import { api_base } from '../../App';
import Header from '../../components/Header/Header';
import { hours, STATUS_LIST } from '../../consts';
import StatusNotification from './StatusNotification';
import TimeSlotsTable from './TimeSlotsTable';
import moment from 'moment';
import 'moment/locale/ru';

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

    cancel = async() => {
      await fetch(`${api_base}/application/doCancelTimeslot`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${localStorage.getItem('token').replace(/"/g, "")}`
          }
      });
      this.getUserInfo();
    }

    render() {
        return (
          <div className='home'>
           <Header />
            <div className="content-wrapper">
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
                        <p className='interview-info-text'>{`Ваше интервью состоится ${moment(this.state.user.timeslot.time.split(' ')[0]).locale('ru').format('D MMMM')} ${this.state.user.timeslot.time.split(' ')[1]}`}</p>}
                    </div>
                    <button className='cancel-button' onClick={this.cancel}>Отменить</button>
                </div>
                <div className='time-slots-panel'>
                  {this.state.status === 'INTERVIEWING' || this.state.status === 'INTERVIEW_NOTIFICATION_IS_READ' ?
                  <TimeSlotsTable userslot={this.state.user.timeslot.time} updateUserInfo={this.getUserInfo.bind(this)}/> :
                  <StatusNotification status={this.state.status} updateUserInfo={this.getUserInfo.bind(this)}/>
                  }
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default TimeSlotsPanel;