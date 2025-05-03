import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

const { randomInt } = require('crypto');

export class AppService {
  constructor(@InjectPinoLogger(AppService.name) private readonly logger: PinoLogger) {
  }

  async complexEndpoint() {
    const [dbResult, apiResult] = await Promise.all([this.simulateDbCall(), this.simulateApiCall(), this.logIteratively])
    return {dbResult, apiResult};
  }

  simulateDbCall() {
    const delay = randomInt(100, 300); // Random DB delay
    return new Promise((resolve) => {
      setTimeout(() => {
        this.logger.info(`[DB] Fetched data in ${delay} ms`);
        resolve({ data: 'db-result' });
      }, delay);
    });
  }

  simulateApiCall() {
    const delay = randomInt(200, 400); // Random API delay
    const shouldFail = Math.random() < 0.5;

    return new Promise((resolve) => {
      setTimeout(() => {
        if (shouldFail) {
          this.logger.info('[API] Failed after', delay, 'ms');
          resolve({data: "API error" });
        } else {
          this.logger.info('[API] Success after', delay, 'ms');
          resolve({ data: 'API success' });
        }
      }, delay);
    });
  }
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async logIteratively() {
    for (let i = 1; i <= 5; i++) {
      await this.sleep(200); // Wait 200ms
      this.logger.info(`[Iterative Logic] Step ${i}`);
    }
  }
}
