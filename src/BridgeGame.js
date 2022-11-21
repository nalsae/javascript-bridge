const BridgeMap = require('./BridgeMap');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  static bridge;
  static movingCount = 0;
  static currentState = [];
  static tryCount = 0;

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static move(moving, readFuncs) {
    const movingResult = this.bridge[this.movingCount] === moving;

    this.movingCount += 1;
    this.currentState = [
      ...this.currentState,
      [moving, movingResult ? 'O' : 'X'],
    ];

    const mapInfo = {
      gameState: this.currentState,
      originBridgeSize: this.bridge.length,
      tryCount: this.tryCount,
    };

    BridgeMap.createMap(mapInfo, readFuncs);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static retry(readMoving) {
    this.movingCount = 0;
    this.currentState = [];
    this.tryCount += 1;

    readMoving();
  }
}

module.exports = BridgeGame;
