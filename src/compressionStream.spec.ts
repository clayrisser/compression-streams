import CompressionStream from './compressionStream';
import Readable from './readable';
import Writable from './writable';

describe('new CompressionStream()', () => {
  it('should create new compression stream', () => {
    const compressionStream = new CompressionStream();
    expect(compressionStream).toMatchObject({
      readable: new Readable(),
      writable: new Writable()
    });
  });

  it('should read and write data', async () => {
    const compressionStream = new CompressionStream();
    const reader = compressionStream.readable.getReader();
    const writer = compressionStream.writable.getWriter();
    writer.write(new ArrayBuffer(0));
    writer.write(new ArrayBuffer(1));
    const { value, done } = await reader.read();
    expect({ value, done }).toMatchObject({
      value: new ArrayBuffer(0),
      done: false
    });
    expect({ value, done }).toMatchObject({
      value: new ArrayBuffer(1),
      done: false
    });
    writer.close();
    expect({ value, done }).toMatchObject({ done: true });
  });
});
