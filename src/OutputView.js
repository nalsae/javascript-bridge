const { Console } = require('@woowacourse/mission-utils');
const { INFO_MESSAGES } = require('./utils/messages');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(gameInfo, readFuncs) {
    const { map, lastResult, originBridgeSize, currentBridgeSize, tryCount } =
      gameInfo;
    const { readMoving, readGameCommand } = readFuncs;

    Console.print(map);

    lastResult === 'X' && readGameCommand(map, this.printResult.bind(this));
    lastResult === 'O' && originBridgeSize !== currentBridgeSize
      ? readMoving()
      : this.printResult(map, true, tryCount);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(map, isSuccess, tryCount) {
    const { RESULT_TITLE, SUCCESS_TITLE, TRY_TITLE } = INFO_MESSAGES;

    const gameResult = `${RESULT_TITLE}${map}\n`;
    const successResult = `${SUCCESS_TITLE}${isSuccess ? '성공' : '실패'}`;
    const tryResult = `${TRY_TITLE}${tryCount}`;

    const resultMessage = `${gameResult}${successResult}${tryResult}`;

    Console.print(resultMessage);

    this.endGame();
  },

  endGame() {
    Console.close();
  },
};

module.exports = OutputView;
