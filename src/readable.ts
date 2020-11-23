import Reader from './reader';

export default class Readable implements ReadableStream<ArrayBuffer> {
  readonly locked: boolean = false;

  async cancel(_reason?: any): Promise<void> {}

  getReader(options: { mode: 'byob' }): ReadableStreamBYOBReader;
  getReader(): Reader;
  getReader(_options?: { mode: 'byob' }): Reader | ReadableStreamBYOBReader {
    return new Reader();
  }

  pipeThrough<T>(
    {
      readable
    }: { writable: WritableStream<ArrayBuffer>; readable: ReadableStream<T> },
    _options?: PipeOptions
  ): ReadableStream<T> {
    return readable;
  }

  async pipeTo(
    _dest: WritableStream<ArrayBuffer>,
    _options?: PipeOptions
  ): Promise<void> {}

  tee(): [ReadableStream<ArrayBuffer>, ReadableStream<ArrayBuffer>] {
    return [new Readable(), new Readable()];
  }
}
