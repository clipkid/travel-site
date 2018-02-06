import Menu from './modules/Menu';
import ScrollReveal from './modules/ScrollReveal';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';


var menu = new Menu();
// var scrollReveal = new ScrollReveal();
new ScrollReveal($('.feature-item'), '85%');
new ScrollReveal($('.testimonial'), '60%');
var stickyHeader = new StickyHeader();

// var $ = require('jquery');
// // var Person = require('./modules/Person');
// import Person from './modules/Person';
// 
// class Adult extends Person {
//    payTaxes() {
//       console.log(this.name + ' owes $0 in taxes.');
//    }
// }
// 
// // alert('testing abc');
// 
// var john = new Person("John Doe", "blue");
// john.greet();
// 
// var jane = new Adult("Jane Smith", "orange");
// jane.greet();
// 
// jane.payTaxes();

