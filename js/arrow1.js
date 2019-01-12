// let circleArea = function (pi,r) {
//   let area = pi * r *r;
//   return area;
// };
// circleArea(3.14,5);

//위문장을 arrow function으로 바꾸세요.
//익명함수를 arrow function으로 바꿀수잇다: 입력 => 출력

// let circleArea = (pi,r) => {
//   let area = pi * r *r;
//   return area;
// };
// circleArea(3.14,5);
// let circleArea = (pi,r) => {
//   return area = pi * r *r;
// };
//문장이한줄이면 중괄호생략
//한줄이면 return도 생략
//만일 return문이 json이면 ()로 감싼다. 왜냐하면 중괄호인지 json인지 알 수 없기 땜에,
let circleArea = (pi,r) => pi * r *r;
console.log(circleArea(3.14,5));

