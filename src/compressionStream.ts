import Readable from './readable';
import Writable from './writable';

export default class CompressionStream {
  readable = new Readable();

  writable = new Writable();
}
