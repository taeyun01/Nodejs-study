console.log("변경 후 저장하면 바로 반영됨");

// 설치: npm i underscore
// 제거: npm un underscore

// 버전 확인 및 업데이트 확인: npm view underscore (dependencies가 많으면 일일이 확인이 어려움)

// 업데이트가 필요한 모듈을 나열해줌: npm outdated (업데이트할 내용이 없으면 안뜸)
// Package     Current  Wanted  Latest  Location                 Depended by
// underscore   1.12.1  1.13.7  1.13.7  node_modules/underscore  npm
// Current과 Wanted가 다르면 업데이트를 할 수 있음
// npm update 명령어를 이용하여 업데이트가 필요한 모든 모듈 Wanted 버젼으로 업데이트
// npm update underscore 는 특정 라이브러리만 Wanted 버젼으로 업데이트

// ===========================================================
// 개발 모드로 설치
// nodemon은 서버를 재시작 할 필요 없이 변경 사항을 바로 반영해줌
// nodemon은 개발환경에서만 필요하기 때문에 npm i nodemon --save-dev 으로 개발환경으로 설치
// package.json에서 scripts를 수정하여 사용 ex) "start": "nodemon app"
// 이렇게 하면 npm start 명령어로 실행 가능
