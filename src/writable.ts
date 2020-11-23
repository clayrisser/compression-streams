import Writer from './writer';

export default class Writable implements WritableStream<ArrayBuffer> {
  readonly locked: boolean = false;

  async abort(_reason?: any): Promise<void> {}

  getWriter(): Writer {
    return new Writer();
  }
}
