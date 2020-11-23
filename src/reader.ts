export default class Reader
  implements ReadableStreamDefaultReader<ArrayBuffer> {
  readonly closed: Promise<void> = Promise.resolve();

  async cancel(_reason?: any): Promise<void> {}

  async read(): Promise<ReadableStreamReadResult<ArrayBuffer>> {
    return {
      value: new ArrayBuffer(0),
      done: true
    };
  }

  releaseLock(): void {}
}
