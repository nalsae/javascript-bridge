## 💡 Features List of Bridge Game

## 📌 Abstract

- 다리 건너기 게임 구현에 필요한 기능들을 작성한 문서입니다.
- 게임 실행 중 일어날 수 있는 상황을 크게 4가지로 구분했고, 이는 다음과 같습니다.
  1. 게임 시작
  2. 게임 진행
  3. 게임 결과
  4. 예외 상황
- 본 문서에서는 각 게임 상황 발생 시 필요한 기능들을 목록화하였습니다.

## 📌 Structure of Directory

```
javascript-bridge
   ├─ docs
   │  └─ README.md
   ├─ src
   │  ├─ App.js
   │  ├─ BridgeMaker.js
   │  ├─ BridgeRandomNumberGenerator.js
   │  ├─ model
   │  │  ├─ BridgeGame.js
   │  │  └─ BridgeMap.js
   │  ├─ utils
   │  │  ├─ constants.js
   │  │  ├─ errorHandler.js
   │  │  ├─ messages.js
   │  │  └─ validator.js
   │  └─ view
   │     ├─ InputView.js
   │     └─ OutputView.js
   └─ __tests__
      ├─ ApplicationTest.js
      ├─ BridgeGameTest.js
      └─ BridgeMapTest.js
```

## 📌 Cases

### 🔸 Start Game

- [x] 게임을 시작하는 문구를 출력한다.
- [x] 다리의 길이를 입력해달라는 안내 문구를 출력하고, 3 ~ 20 사이의 숫자를 입력 값으로 받는다.

### 🔸 Progress Game

- [x] 플레이어의 입력 값에 따라 0 혹은 1의 숫자로 구성된 다리 배열을 생성한다.
- [x] 생성한 다리 배열의 요소를 "U" 혹은 "D"로 변환한다.
- [x] 다리 생성이 완료되면 이동할 칸을 선택해달라는 안내 문구를 출력하고, 플레이어에게 "U" 혹은 "D"를 입력 값으로 받는다.
- [x] 플레이어의 입력 값에 따라 "O" 혹은 "X"로 현재 라운드의 진행 상황을 출력한다.
- [x] 다리 배열의 마지막까지 플레이어에게 입력 값을 받고 진행 상황을 출력하는 과정을 반복한다.

### 🔸 End Game

- [x] 다리 배열의 마지막까지 "O"가 반복해서 출력되면 게임 성공을 안내하는 문구와 시도한 횟수를 출력하고, 게임을 종료한다.
- [x] "X"가 출력되면 게임 실패를 안내하는 문구와 시도한 횟수를 출력하고, 플레이어에게 재시도 여부를 입력 값으로 받는다.
- [x] 플레이어의 입력 값에 따라 재시도 혹은 종료한다.

### 🔸 Error Case

- [x] 다리 길이의 입력 값이 3 ~ 20 사이의 숫자가 아니면 에러 메시지를 출력하고, 입력을 다시 받는다.
- [x] 이동할 칸의 입력 값이 "U" 혹은 "D"가 아니면 에러 메시지를 출력하고, 입력을 다시 받는다.
- [x] 재시도 여부의 입력 값이 "R" 혹은 "Q"가 아니면 에러 메시지를 출력하고, 입력을 다시 받는다.
