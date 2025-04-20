const path = require("path");
const os = require("os");
const fs = require("fs");

// 1. 사용자가 원하는 폴더의 이름을 받아옴

const folder = process.argv[2]; // 사용자가 원하는 폴더의 이름
const workingDir = path.join(os.homedir(), "Pictures", folder); // 현재 운영체제에 있는 홈 디렉토리에다가 Pictures 폴더 안에 사용자가 원하는 폴더에서 작업을 하기위한 설정

// 폴더이름을 입력하지 않았거나 사용자가 test가 아니라 존재하지 않는 경로 일 때
if (!folder || !fs.existsSync(workingDir)) {
  console.error("Please enter folder name in Pictures");
  return;
}

// console.log(workingDir);

// TODO: 2. 그 폴더안에 video, captured, duplicated 폴더를 만듬

// TODO: 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4|mov는 video 폴더로, png|aae는 captured 폴더로, IMG_1234는 원본파일 IMG_E1234는 편집파일, E가 붙은 파일은 duplicated 폴더로 옮김
