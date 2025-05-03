import { Injectable } from '@nestjs/common';
const { randomInt } = require('crypto');

@Injectable()
export class AppService {
  async complexEndpoint() {

    const [dbResult, apiResult] = await Promise.all([this.simulateDbCall(), this.simulateApiCall(), this.logIteratively])
    return {dbResult, apiResult};
  }

  simulateDbCall() {
    const delay = randomInt(100, 300); // Random DB delay
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('[DB] Fetched data in', delay, 'ms');
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
          console.log('[API] Failed after', delay, 'ms');
          resolve({data: "API error" });
        } else {
          console.log('[API] Success after', delay, 'ms');
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
      console.log(`[Iterative Logic] Step ${i}`);
    }
  }
}
