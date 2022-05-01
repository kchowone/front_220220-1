'use stritc';

// a_06_js_grammer_02.js

//반복문
//while

let i = 0;
while(i <= 5){
  console.log('while:', i)
  i += 1;
}
console.log(i);

do{
  console.log( i );
  i-=1;
}while(i > 0);

//for, forEach


for(let j=0 ; j <= 5; j += 1){
  console.log('for:', j)
  if(j === 3 ){ break;}
}

for(let k=1; k<10; k+=1){
  for(let h=1; h<10; h+=1){
    //console.log(k + 'x' + h + '=' + (k*h) )
    console.log(`${k} x ${h} = ${k*h}`)
  }
}


for(let k=0; k<9; k+=1){
  let i = k + 1;
  for(let h=0; h<9; h+=1){
    let j = h +1 ;
    //console.log(k + 'x' + h + '=' + (k*h) )
    console.log(`${i} x ${j} = ${i*j}`)
  }
}

let parts = [
  'mouse', 'keyboard', 'pen', 'note', 'laptop', 'monitor'
];

let len = parts.length;

for(let i = 0; i < len; i+=1){
  console.log( parts[i])
}

//for(let i in parts) { console.log(parts[i]);} x

// let 아닌 conts를 쓰느냐!
// for 말고 for in을 왜 안쓰냐

// --------------------------
console.clear();

