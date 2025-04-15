console.log("hello");

// 설치: npm i underscore
// 제거: npm un underscore

// 버전 확인 및 업데이트 확인: npm view underscore (dependencies가 많으면 일일이 확인이 어려움)

// 업데이트가 필요한 모듈을 나열해줌: npm outdated (업데이트할 내용이 없으면 안뜸)
// Package     Current  Wanted  Latest  Location                 Depended by
// underscore   1.12.1  1.13.7  1.13.7  node_modules/underscore  npm
// Current과 Wanted가 다르면 업데이트를 할 수 있음
// npm update 명령어를 이용하여 업데이트가 필요한 모든 모듈 Wanted 버젼으로 업데이트
// npm update underscore 는 특정 라이브러리만 Wanted 버젼으로 업데이트
