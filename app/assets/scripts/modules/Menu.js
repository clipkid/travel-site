import $ from 'jquery';

class Menu {
   constructor() {
      this.header = $('.header');
      this.menuIcon = $('.header__menu-icon');
      this.menuContent = $('.header__menu');
      this.events();
   }
   
   events() {
         this.menuIcon.click(this.toggleTheMenu.bind(this));
   }
   
   toggleTheMenu() {
      this.header.toggleClass('header-open')
      this.menuContent.toggleClass('header__menu-open');
      this.menuIcon.toggleClass('header__menu-icon-x');
   }
}

export default Menu;