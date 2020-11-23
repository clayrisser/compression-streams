export default class Writer
  implements WritableStreamDefaultWriter<ArrayBuffer> {
  readonly closed: Promise<void> = Promise.resolve();

  readonly desiredSize: number | null = null;

  readonly ready: Promise<void> = Promise.resolve();

  async abort(_reason?: any): Promise<void> {}

  async close(): Promise<void> {}

  releaseLock(): void {}

  async write(_chunk: ArrayBuffer): Promise<void> {}
}
