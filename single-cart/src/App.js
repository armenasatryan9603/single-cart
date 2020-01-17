import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const images = [require('../public/images/a1.jpeg'), require('../public/images/a2.jpeg'), require('../public/images/a3.jpg')];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedImg: 0,
      isOpen: false ,
      sidebarIsOpen: false,
    };

  }

  chooseImg = (selectedImg) => {
    this.setState({
      selectedImg,
    });
  }

  togglePopup = () => {
    this.setState((state) => {
      return { isOpen: !state.isOpen };
    });
  }

  togglePopupSidebar = () => {
    this.setState((state) => {
      return { sidebarIsOpen: !state.sidebarIsOpen };
    });
  }

  renderImageBlock = () => {
    const { selectedImg } = this.state;
   
    return <div className='image-block'>
            <img src={images[selectedImg]} />
            <ul className='choose-img'>{images.map((img, index) => <li key={index} className={selectedImg === index ? 'active' : ''} onClick={() => this.chooseImg(index)}></li>)}</ul>
          </div>
  }

  renderOpoup = () => {
    return <div className='popup'>
      <div className='popup-title' onClick={this.togglePopup}>Вернуться</div>
      <p className='popup-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  }

  renderInfoBlock = () => {
    const { selectedImg } = this.state;
   
    return <div className='info-block'>
            <div>
              <ul>
                <li>Класс:</li>
                <li>Портебляемая точность:</li>
                <li>Сила света:</li>
                <li>Гарантия:</li>
                <li>Монтаж:</li>
                <li>Итого сумма:</li>
              </ul>
              <ul>
                <li>Standart</li>
                <li>50 VT</li>
                <li>3459</li>
                <li>3 года</li>
                <li>Да</li>
                <li>Рублей</li>
              </ul>
            </div>
            <div className='choose-img-info'>
              <div className='info'><span onClick={this.togglePopup} >i</span></div>
            </div>
            <ul className='images-block'>
              {images.map((url, index) => <li key={index} onClick={() => this.chooseImg(index)}><img src={url} /></li>)}
            </ul>

          </div>
  }

  renderListBlock = () => {
    return <div className='list-block'>
      <ul>
        <li>Вариант кухня</li>
        <li>Размеры</li>
        <li>Сенсор</li>
        <li>Питающий</li>
        <li>Блок питания</li>
        <li className='active'>Цвет свечения</li>
        <li className='disabled'>Монтаж</li>
        <li className='disabled'>Корзина</li>
      </ul>
    </div>
  }

  renderSidebar = () => {
    return <div class="sidenav">
            <a href="#about">Обучающая видео</a>
            <a href="#services">Оформления заказа</a>
            <a href="#clients">Оплата</a>
            <a href="#contact">Гарантия</a>
            <a href="#contact">Возраст</a>
            <a href="#contact">Контакты</a>
            <a href="#contact">Партнерам</a>
           </div>
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='menu-block'>
            <i onClick={this.togglePopupSidebar} className={`fas ${this.state.sidebarIsOpen ? 'fa-times' : 'fa-bars'}`}></i>
            <i className="fas fa-cart-arrow-down"></i>
          </div>
        </div>
        {this.state.isOpen && this.renderOpoup()}
        <div className='content'>
          {this.renderImageBlock()}
          {this.renderInfoBlock()}
          {this.renderListBlock()}
          {this.state.sidebarIsOpen && this.renderSidebar()}
        </div>


      </div>
    );
  }
}

export default App;
