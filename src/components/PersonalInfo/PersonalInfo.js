import React, {Component} from 'react';
import './PersonalInfo.css';
import {api_base} from "../../App";

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            phone: '',
            gender: '',
            dob: '',
            address: '',
            university: 1,
            grad_year: '',
            department: 1,
            experience: '',

        };


        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDobChange = this.handleDobChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleUniversityChange = this.handleUniversityChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handleGradYearChange = this.handleGradYearChange.bind(this);
        this.handleExperienceChange = this.handleExperienceChange.bind(this);
        this.handleHobbyChange = this.handleHobbyChange.bind(this);
        this.handleReasonChange = this.handleReasonChange.bind(this);
    }


    handleEmailChange(event) {
        console.log('E-mail was changed', event.target.value);
        this.setState({email: event.target.value})
    }

    handleNameChange(event) {
        console.log('Name was changed', event.target.value);
        this.setState({name: event.target.value})
    }

    handlePhoneChange(event) {
        console.log('Phone was changed', event.target.value);
        this.setState({phone: event.target.value})
    }

    handleSurnameChange(event) {
        console.log('Surname was changed', event.target.value);
        this.setState({surname: event.target.value});
    }

    handleGenderChange(event) {
        console.log('gender was changed', event.target.value);
        this.setState({gender: event.target.value});
    }

    handleDobChange(event) {
        console.log('dob was changed', event.target.value);
        this.setState({dob: event.target.value});
    }

    handleAddressChange(event) {
        console.log('address was changed', event.target.value);
        this.setState({address: event.target.value});
    }

    handleUniversityChange(event) {
        console.log('University was changed', event.target.value);
        this.setState({university: event.target.value});
    }

    handleDepartmentChange(event) {
        console.log('Department was changed', event.target.value);
        this.setState({department: event.target.value});
    }

    handleGradYearChange(event) {
        console.log('Grad year was changed', event.target.value);
        this.setState({grad_year: event.target.value});
    }

    handleExperienceChange(event) {
        console.log('Experience was changed', event.target.value);
        this.setState({experience: event.target.value});
    }

    handleHobbyChange(event) {
        console.log('Hobby was changed', event.target.value);
        this.setState({hobby: event.target.value});
    }

    handleReasonChange(event) {
        console.log('Reason was changed', event.target.value);
        this.setState({reason: event.target.value});
    }


    componentDidMount() {
        fetch(`${api_base}/registration/values`, {
            method: 'GET'
        }).then((data) => {
            if (data.ok)
                (data.json().then((arr) => {
                    let universityParent = document.getElementById('university');
                    let departmentParent = document.getElementById('departments');
                    for (let i in arr.universities) {
                        let newItem = document.createElement("option");
                        newItem.innerHTML = arr.universities[i].name;
                        let Id = (parseInt(i, 10));
                        newItem.value = Id + 1;
                        // console.log(arr.universities[i].name); // output university name
                        universityParent.appendChild(newItem);
                    }
                    for (let i in arr.departments) {
                        let newItem = document.createElement("option");
                        newItem.innerHTML = arr.departments[i].name;
                        let Id = (parseInt(i, 10));
                        newItem.value = Id + 1;

                        // console.log(arr.departments[i].name); // output university name
                        departmentParent.appendChild(newItem);
                    }

                }));

            else alert("Ошибка при получении данных");
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Form is submitted. Values: ', this.state);
        const postt = new FormData();
        postt.append('name', this.state.name);
        postt.append('surname', this.state.surname);
        postt.append('email', this.state.email);
        postt.append('phone', this.state.phone);
        postt.append('gender', this.state.gender);
        postt.append('Dob', this.state.dob);
        postt.append('address', this.state.address);
        postt.append('department', this.state.department);
        postt.append('university', this.state.university);
        postt.append('grad_year', this.state.grad_year);
        postt.append('experience', this.state.experience);
        postt.append('hobby', this.state.hobby);
        postt.append('reason', this.state.reason);

        fetch(`${api_base}/application`, {
            method: 'POST', // or 'PUT'
            body: postt, // data can be `string` or {object}!
        })
    }


    render() {
        return (
            <div>
                <h1>
                    Recruitment
                </h1>
                <p> Recruitment can refer to processes involved in choosing individuals for unpaid roles.
                    Managers, human resource generalists and recruitment specialists may be tasked with carrying out
                    recruitment,
                    but in some cases public-sector employment agencies,
                    commercial recruitment agencies, or specialist search consultancies are used to undertake parts of
                    the process.
                </p>

                <h3 class='field_text1'>
                    Разделы анкеты
                </h3>

                <div class='block1'>
                    <p class='block_text'>Личные данные</p>
                </div>
                <div class='block2'>
                    <p class='block_text1'>О вас</p>
                </div>
                <div class='block3'>
                    <p class='block_text2'>
                        Дополнительные вопросы</p>
                </div>

                <h3 class='field_text'>
                    Заполните поля
                </h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div class='field'>
                            <input class="field_name"
                                   type="text"
                                   placeholder="Имя"
                                   required
                                   pattern="^[A-Za-zА-Яа-яЁё\s]{2,32}$"
                                   value={this.state.name}
                                   onChange={this.handleNameChange}
                            />
                            <input class="field_surname"
                                   type="text"
                                   name="Surname"
                                   placeholder="Фамилия"
                                   required
                                   pattern="^[A-Za-zА-Яа-яЁё\s]{2,32}$"
                                   value={this.state.surname}
                                   onChange={this.handleSurnameChange}
                            />
                            <input class="field_phone"
                                   type="tel"
                                   name="Phone"
                                   required
                                   pattern="\+[0-9]{12}"
                                   placeholder="+996123456789"
                                   value={this.state.phone}
                                   onChange={this.handlePhoneChange}
                            />
                            <input class="field_email"
                                   type="email"
                                   name="Email"
                                   required
                                   placeholder="E-mail"
                                   value={this.state.email}
                                   onChange={this.handleEmailChange}
                            />
                            <select id="checkbox_div" onChange={this.handleGenderChange} value={this.state.value}>

                                <option selected> Пол</option>

                                <option value="1"> М</option>
                                <option value="2"> Ж</option>
                                <option value="3"> Другое</option>

                            </select>

                            <input class="field_dob"
                                   type="date"

                                   name="Dob"
                                   required
                                   placeholder="Дата рождения "
                                   pattern="[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}"
                                   value={this.state.dob}
                                   onChange={this.handleDobChange}
                            />
                        </div>
                        <div class='about_you'>
                            <input class="field_name"
                                   type="text"
                                   name="address"
                                   required
                                   placeholder="Адрес"
                                   value={this.state.address}
                                   onChange={this.handleAddressChange}
                            />
                            <select id="university" onChange={this.handleUniversityChange} value={this.state.value}>
                            </select>
                            <input class="field_phone"
                                   type="text"
                                   name="grad_year"
                                   required
                                   placeholder="Дата выпуска"
                                   pattern="[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}"
                                   value={this.state.grad_year}
                                   onChange={this.handleGradYearChange}
                            />
                            <select id="departments" onChange={this.handleDepartmentChange} value={this.state.value}>
                            </select>

                            <input class="field_experience"
                                   type="number"
                                   name="Experience"
                                   placeholder="Стаж"
                                   min={0}
                                   max={20}
                                   required
                                   pattern="[0-9]{,2}"
                                   value={this.state.experience}
                                   onChange={this.handleExperienceChange}
                            />
                        </div>
                        <div class='questions'>
                    <textarea class="field_quest1"
                              type="text"
                              name="hobby"
                              required
                              placeholder="Почему вы решили подать в Необис?"
                              minLength={1}
                              value={this.state.hobby}
                              onChange={this.handleHobbyChange}
                    />

                            <textarea class="field_quest2"
                                      type="text"
                                      name="reason"
                                      required
                                      placeholder="Почему вы выбрали такое направление?"
                                      minLength={1}
                                      value={this.state.reason}
                                      onChange={this.handleReasonChange}
                            />

                            <button class="button_send">ОТПРАВИТЬ</button>
                        </div>
                    </form>
                    <button onClick={() => {
                        document.getElementsByClassName("about_you")[0].style.visibility = 'visible';
                        document.getElementsByClassName("button_next")[0].style.visibility = 'hidden';
                        document.getElementsByClassName("button_nextto")[0].style.visibility = 'visible';
                        document.getElementsByClassName("block2")[0].style.background = '#32B482';
                        document.getElementsByClassName("block1")[0].style.background = '#FFFFFF';
                        document.getElementsByClassName("block_text")[0].style.color = '#E6E6E6';
                        document.getElementsByClassName("block_text1")[0].style.color = '#FFFFFF'
                    }} class="button_next">ДАЛЕЕ
                    </button>
                    <button onClick={() => {
                        document.getElementsByClassName("about_you")[0].style.visibility = 'hidden';
                        document.getElementsByClassName("questions")[0].style.visibility = 'visible';
                        document.getElementsByClassName("button_nextto")[0].style.visibility = 'hidden';
                        document.getElementsByClassName("button_send")[0].style.visibility = 'visible';
                        document.getElementsByClassName("block3")[0].style.background = '#32B482';
                        document.getElementsByClassName("block2")[0].style.background = '#FFFFFF';
                        document.getElementsByClassName("block_text1")[0].style.color = '#E6E6E6';
                        document.getElementsByClassName("block_text2")[0].style.color = '#FFFFFF'
                    }} class="button_nextto">ДАЛЕЕ
                    </button>

                </div>
            </div>
        )
    }
}

export default PersonalInfo;