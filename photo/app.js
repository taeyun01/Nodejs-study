const path = require("path");
const os = require("os");
const fs = require("fs");

//* 1. 사용자가 원하는 폴더의 이름을 받아옴
const folder = process.argv[2]; // 사용자가 원하는 폴더의 이름
const workingDir = path.join(os.homedir(), "Pictures", folder); // 현재 운영체제에 있는 홈 디렉토리에다가 Pictures 폴더 안에 사용자가 원하는 폴더에서 작업을 하기위한 설정
// console.log(workingDir);

// 폴더이름을 입력하지 않았거나 사용자가 test가 아니라 존재하지 않는 경로 일 때
if (!folder || !fs.existsSync(workingDir)) {
  console.error("Please enter folder name in Pictures");
  return;
}

//* 2. test폴더안에 video, captured, duplicated 폴더를 만듬
const videoDir = path.join(workingDir, "video");
const capturedDir = path.join(workingDir, "captured");
const duplicatedDir = path.join(workingDir, "duplicated");

// Sync방식으로 사용하는 이유는 폴더를 만들고 파일들을 처리해줘야 하기 때문에 동기적으로 처리해줘야 하기 때문에 Sync방식으로 사용
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir); // 만들고자하는 폴더가 존재하지 않으면 생성 (중복된 폴더는 생성하지 않음)
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

//* 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4|mov는 video 폴더로, png|aae는 captured 폴더로, IMG_1234는 원본파일 IMG_E1234는 편집파일, E가 붙은 파일은 duplicated 폴더로 옮김

// workingDir안에 있는 파일들을 다 읽어옴. 성공 시, 실패시,
fs.promises
  .readdir(workingDir) // 폴더안에 있는 파일들을 다 읽어옴.
  .then(processFiles) // 읽어온 파일들을 처리해줌.  전달하는 인자가 호출하는 인자가 동일하다면 생략 가능 .then(files => processFiles(files)) -> .then(processFiles)
  .catch(console.log); // 실패 시, 오류 메시지를 출력해줌.

function processFiles(files) {
  files.forEach((file) => {
    console.log(file);
    if (isVideoFile(file)) {
      console.log("video", file);
    } else if (isCapturedFile(file)) {
      console.log("captured", file);
    } else if (isDuplicatedFile(file)) {
      console.log("duplicated", file);
    }
  });
}

function isVideoFile(file) {
  return true;
}

function isCapturedFile(file) {
  return true;
}

function isDuplicatedFile(file) {
  return true;
}
