import React, {Component} from 'react';
import './StatusNotification.css';
import { STATUS_LIST } from '../../consts';
import InReview from '../../images/in-review.png';
import Declined from '../../images/declined.png';
import Success from '../../images/green-check-mark.png';
import Rejected from '../../images/rejected.png';
import { api_base } from '../../App.js';

class StatusNotification extends Component {
  changeStatus = async() => {
    await fetch(`${api_base}/application/doChangeStatus`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token').replace(/"/g, "")}`
                }
            });
    this.props.updateUserInfo();
  }
    render() {
        return (
            <div className="status-notification">
              <div className='notification-container'>
                {this.props.status === STATUS_LIST.APPROACH || this.props.status === STATUS_LIST.INTERVIEW_NOTIFICATION_IS_SENT &&
                  <div className='success-review'>
                    <img className='status-img' src={Success}/>
                    <p className='notification-title'>Поздравляем!</p>
                    <p className='step-message'>Поздравляем! Вы прошли отбор. Далее, вас ждет приглашение на интервью, следите за Вашим профилем!</p>
                    <button className='notification-button' onClick={this.changeStatus}>ОК</button>
                  </div>
                }

                {(this.props.status === STATUS_LIST.NOT_APPROACH || this.props.status === STATUS_LIST.INTERVIEW_DENIED) &&
                  <div className='fail-status'>
                    <img className='status-img' src={InReview}/>
                    <p className='step-message'>К сожалению, мы не готовы вас принять. Попробуйте в следующий раз. Новый набор будет в <span>следующем сезоне!</span></p>
                  </div>
                }
                {this.props.status === STATUS_LIST.INTERVIEW_SUCCESS && 
                  <div className='success-interview'>
                    <img className='status-img' src={Success}/>
                    <p className='notification-title'>Поздравляем!</p>
                    <p className='steps-title'>Дальнейшние шаги:</p>
                    <p className='step-message'><strong>Членский взнос.</strong> Чтобы стать мембером Необиса, вам необходимо оплатить членский взнос, который составляет 7000 сом. Вы можете оплатить взнос через Элсом.</p>
                    <p className='step-message'><strong>PIN ЭЛСОМ.</strong> Ваш одноразовый код для оплаты через кошелек "Элсом": (например) 254678. Оплатите по данному реквизиту в Личном кабинете "Элсом" или скачайте обновленное приложение в Google Play по ссылке ЭЛСОМ 2.0. Номер счета необходимо ввести в пункте «Разовый код оплаты». После завершения оплаты, сохраните чек.</p>
                  </div>
                }
                {this.props.status === STATUS_LIST.PAID &&
                  <div className='success-payment'>
                    <img className='status-img' src={Success}/>
                    <p className='notification-title'>Оплата прошла успешно!</p>
                    <p className='step-message'>Мы ждем вас на ориентационном дне, <span>26 мая</span> в <span>11:00</span>, по адресу <span>Байтик-Баатыра 70, 4 этаж</span></p>
                  </div>
                }
                {this.props.status === STATUS_LIST.IN_CONSIDER &&
                  <div className='success-payment'>
                    <img className='status-img' src={InReview}/>
                    <p className='step-message'>Ваша анкета находится на рассмотрении. В скором времени мы сообщим Вам о результатах и пригласим Вас на интервью. Проверяйте свой кабинет, чтобы быть в курсе</p>
                  </div>
                }
                {this.props.status === STATUS_LIST.INTERVIEWED &&
                  <div className='success-payment'>
                    <img className='status-img' src={InReview}/>
                    <p className='step-message'>Интервью с вами проведено! <br/>Ожидайте результатов.</p>
                  </div>
                }
              </div>
            </div>
        )
    }
}

export default StatusNotification;