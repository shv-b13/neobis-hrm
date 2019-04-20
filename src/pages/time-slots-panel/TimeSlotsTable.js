import React, {Component} from 'react';
import { hours } from '../../consts';
import { api_base } from '../../App';
import './TimeSlotsTable.css';
import free from '../../images/plus.png';
import taken from '../../images/gray-line.png';
import circled_plus from '../../images/circled-plus.png';
import white_check_mark from '../../images/white-check-mark.png';
import moment from 'moment';
import 'moment/locale/ru';

class TimeSlotsTable extends Component {

    state = {loading: false, previousClicked: undefined, userslot: this.props.userslot !== null ? this.props.userslot.replace(" ", '-').slice(0,this.props.userslot.length-6) : null, count: 0}
    async componentWillMount() {
      const time_slots_req = await fetch(`${api_base}/interview/time_slots`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `token ${localStorage.getItem('token').replace(/"/g, "")}`
                }
            });
      const time_slots_res = await time_slots_req.json();
      this.setState({slots: time_slots_res});
      this.props.updateUserInfo();
    }

    async componentWillReceiveProps(nextProps){
      if(nextProps.userslot!==this.state.userslot){
        this.setState({userslot: nextProps.userslot ? nextProps.userslot.replace(" ", '-').slice(0,this.props.userslot.length-6) : null });
        const time_slots_req = await fetch(`${api_base}/interview/time_slots`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `token ${localStorage.getItem('token').replace(/"/g, "")}`
                }
            });
      const time_slots_res = await time_slots_req.json();
      this.setState({slots: time_slots_res});
      }
    }

    showSlots(e){
      if(this.state.previousClicked) 
        document.getElementById(this.state.previousClicked).style.display = 'none';
      const show = e.target.className;
      document.getElementById(show).style.display = 'block';
      this.state.previousClicked = show;
    }

    hideSlots(e){
      const show = e.target.className;
      document.getElementById(show).style.display = 'none';
    }

    doCount = () => {
      console.log(this.state.count)
      this.setState({count: this.state.count + 1})
    }

    async takeSlot(id){
      const take_slot_req = await fetch(`${api_base}/interview/time_slots`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Token ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({id: id}),
            });
      const take_slot_res = await take_slot_req.json();
      this.props.updateUserInfo();
    }
    render() {
        return (
            <div>
              <div className='message-title'></div>
                <div className='table-slots-info'>
                  <p className='table-slots-info-text'>Выберите время и дату для интервью</p>
                  <div className='colors-info'>
                    <div className='gray'><div className='gray-circle'/>&nbsp;-&nbsp;<p className='color-info-text'>дата занята</p></div>
                    <div className='green' onClick={this.doCount}><div className='green-circle'/>&nbsp;-&nbsp;<p className='color-info-text'>дата свободна</p></div>
                  </div>
                </div>
                <div className='time-slots'>
                  <table>
                  <tbody>
                  <tr><th className={'month-title'} key={'month-title'}>April</th></tr>
                    {hours.map(hour => {
                      return <tr><th className={'time-hours'} key={hour}>{hour}</th></tr>
                    })}
                  </tbody>
                  </table>
                  {this.state.slots && this.state.slots.map(day => {
                      return (
                          <table className='day-column'>
                            <tbody>
                              <tr className='date-row'>
                                <th>{moment(day.date).locale('ru').format('D MMMM')}</th>
                              </tr>
                              {day.data.map(hour => {
                                if(hour.slots.length > 0 && hour.slots.every((slot) => slot.is_free === false)) {
                                  return <tr><td id={`${day}-${hour.time}`}>this is gray</td></tr>
                                }
                                if(hour.slots.length > 0) {
                                  return <tr className='interview-button'>
                                  <div className='time-slot'>
                                    <span className='time-slot-title'>Интервью</span>
                                    <span className='time-slot-time'>{hour.time}</span>
                                  </div>
                                  <button
                                    onFocus={this.showSlots.bind(this)}
                                    onBlur={this.hideSlots.bind(this)}
                                    className={`${day.date}-${hour.time}`}
                                    style={{
                                      backgroundImage: this.state.userslot===`${day.date}-${hour.time.slice(0,hour.time.length-8)}` ? "url(" + white_check_mark + ")" : "url(" + circled_plus + ")"
                                    }}
                                    >
                                  <div className='time-slots-container' id={`${day.date}-${hour.time}`}>
                                      {hour.slots.map(slot => {
                                        return <div className={'time-slot-button'} onClick={()=>this.takeSlot(slot.id)}>{slot.time}
                                          {slot.is_free ? <img className={'time-slot-icon'} src={free}/> : <img className={'time-slot-icon'} src={taken}/>}
                                        </div>
                                      })}
                                  </div>
                                  </button>
                                  </tr>
                                }
                                else {return <tr><td id={`${day}-${hour.time}`}></td></tr>}
                              })}
                            </tbody>
                          </table>
                      )
                  })}
                </div>
                {this.state.count === 5 && <img className='hitormiss' src={'https://images-cdn.9gag.com/photo/awA5yj4_700b.jpg'}/>}
            </div>
        )
    }
}

export default TimeSlotsTable;