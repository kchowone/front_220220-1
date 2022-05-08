'use strict';
//  a_10_js_class.js

const DataSet = function(first, last, subject, count){
  this.first    =  first
  this.last     =  last
  this.subject  =  subject
  this.count    =  count
  this.fullname = this.first + ' ' + this.last;
};

let myData1 = new DataSet('chowon', 'kim' , 'math', '60');
console.log(myData1.fullname);
// myData {first : 'chowon', last: 'last' , subject : 'math' , count: '60' fullName:'chowon kim'}

//------------------------------------------------------
class DataSet2 {
  constructor (first, last, subject, count){
    this.first    =  first
    this.last     =  last
    this.subject  =  subject
    this.count    =  count
    this.fullname = this.first + ' ' + this.last;
  }
}

let myData2 = new DataSet2('xita', 'kim', 'korean', '80' );
console.log(myData2);

// ---------------------------------------------------------
