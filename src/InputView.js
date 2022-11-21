const { Console } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');
const { generate } = require('./BridgeRandomNumberGenerator');
const { makeBridge } = require('./BridgeMaker');

const { INFO_MESSAGES } = require('./utils/messages');
const BridgeGame = require('./BridgeGame');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(INFO_MESSAGES.BRIDGE_SIZE, (userInput) => {
      try {
        Validator.bridgeSize(+userInput);

        BridgeGame.bridge = makeBridge(+userInput, generate);

        this.readMoving();
      } catch (error) {
        Console.print(error.message);

        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INFO_MESSAGES.MOVING, (userInput) => {
      try {
        Validator.moving(userInput);

        const readFuncs = {
          readMoving: this.readMoving.bind(this),
          readGameCommand: this.readGameCommand.bind(this),
        };

        BridgeGame.move(userInput, readFuncs);
      } catch (error) {
        Console.print(error.message);

        this.readMoving();
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(map, printResult) {
    Console.readLine(INFO_MESSAGES.RETRY, (userInput) => {
      try {
        Validator.retry(userInput);

        BridgeGame.retryCount += 1;

        userInput === 'R'
          ? BridgeGame.retry(this.readMoving.bind(this))
          : printResult(map);
      } catch (error) {
        Console.print(error.message);

        this.readGameCommand();
      }
    });
  },
};

module.exports = InputView;
