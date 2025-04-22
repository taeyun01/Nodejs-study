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
    // console.log(file);
    if (isVideoFile(file)) {
      // console.log("video: ", file);
      move(file, videoDir);
    } else if (isCapturedFile(file)) {
      // console.log("captured: ", file);
      move(file, capturedDir);
    } else if (isDuplicatedFile(files, file)) {
      // console.log("duplicated: ", file);
      move(file, duplicatedDir);
    }
  });
}

// 파일이 mp4|mov 확장자를 가지고 있는지 확인
function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match; // match ? true : false 랑 동일
}

// 파일이 png|aae 확장자를 가지고 있는지 확인
function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}

// 파일이 IMG로 시작하는 동일한 이름에서 IMG_XXXX에서 IMG_EXXX으로 수정된 파일이 있는지 확인
function isDuplicatedFile(files, file) {
  // IMG_로 시작하지 않는 파일이거나, IMG_E로 수정된 버전 이라면 검사를 해주지 않아도됨
  if (!file.startsWith("IMG_") || file.startsWith("IMG_E")) {
    return false;
  }

  const edited = `IMG_E${file.split("_")[1]}`;
  const found = files.find((f) => f.includes(edited));
  return !!found;
}

// 파일을 옮기는 함수
function move(file, targetDir) {
  console.log(`${file} 파일이 ${path.basename(targetDir)} 폴더로 이동합니다.`);
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  fs.promises.rename(oldPath, newPath).catch(console.error);
}
