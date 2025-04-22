//* 버퍼에 대해서 알아보기
// 버퍼는 고정된 사이즈의 메모리 덩어리다.
// 숫자 배열의 형태이다. byte of data 데이터에 있는 바이트 그 자체를 가르킨다.

//* 버퍼를 만들어서 살펴보자
const buffer = Buffer.from("Hello");
console.log(buffer); // 유니코드로 변환되어 표현된다.
console.log("버퍼의 크기: ", buffer.length);
console.log(buffer[0]); // 72 -> 배열 인덱스로 접근하면 아스키코드로 변환되어 표현된다. H -> 72
console.log(buffer[1]); // 101 -> e -> 101
console.log(buffer.toString()); // Hello -> 버퍼를 문자열로 변환 (toString은 인코딩을 전달할 수 있음 (F12확인)) 기본 값은 utf-8임

//* 직접 버퍼를 만들 수 있다.
const buffer2 = Buffer.alloc(2); // 2바이트 크기의 버퍼를 만든다. <Buffer 00 00>
const buffer3 = Buffer.allocUnsafe(2); //
buffer2[0] = 72;
buffer2[1] = 105;
console.log(buffer2); // <Buffer 48 69>
console.log(buffer2.toString()); // Hi

buffer2.copy(buffer3); // buffer2의 내용을 buffer3에 복사한다.
console.log(buffer3);
console.log(buffer3.toString());

//* concat -> 여러가지 버퍼를 모을 수 있음
const newBuffer = Buffer.concat([buffer, buffer2, buffer3]);
console.log("newBuffer: ", newBuffer.toString());
