IncomingMessage {
    _readableState:
     ReadableState {
       objectMode: false,
       highWaterMark: 16384,
       buffer: BufferList { head: null, tail: null, length: 0 },
       length: 0,
       pipes: null,
       pipesCount: 0,
       flowing: false,
       ended: true,
       endEmitted: true,
       reading: false,
       sync: false,
       needReadable: false,
       emittedReadable: false,
       readableListening: false,
       resumeScheduled: false,
       paused: true,
       emitClose: true,
       autoDestroy: false,
       destroyed: false,
       defaultEncoding: 'utf8',
       awaitDrain: 0,
       readingMore: false,
       decoder: null,
       encoding: null },
    readable: false,
    _events: [Object: null prototype] { readable: [Function: bound ] },
    _eventsCount: 1,
    _maxListeners: undefined,
    socket:
     Socket {
       connecting: false,
       _hadError: false,
       _handle:
        TCP {
          reading: true,
          onread: [Function: onStreamRead],
          onconnection: null,
          _consumed: true,
          [Symbol(owner)]: [Circular] },
       _parent: null,
       _host: null,
       _readableState:
        ReadableState {
          objectMode: false,
          highWaterMark: 16384,
          buffer: BufferList { head: null, tail: null, length: 0 },
          length: 0,
          pipes: null,
          pipesCount: 0,
          flowing: true,
          ended: false,
          endEmitted: false,
          reading: true,
          sync: false,
          needReadable: true,
          emittedReadable: false,
          readableListening: false,
          resumeScheduled: false,
          paused: false,
          emitClose: false,
          autoDestroy: false,
          destroyed: false,
          defaultEncoding: 'utf8',
          awaitDrain: 0,
          readingMore: false,
          decoder: null,
          encoding: null },
       readable: true,
       _events:
        [Object: null prototype] {
          end: [Array],
          drain: [Array],
          timeout: [Function: socketOnTimeout],
          data: [Function: bound socketOnData],
          error: [Function: socketOnError],
          close: [Array],
          resume: [Function: onSocketResume],
          pause: [Function: onSocketPause] },
       _eventsCount: 8,
       _maxListeners: undefined,
       _writableState:
        WritableState {
          objectMode: false,
          highWaterMark: 16384,
          finalCalled: false,
          needDrain: false,
          ending: false,
          ended: false,
          finished: false,
          destroyed: false,
          decodeStrings: false,
          defaultEncoding: 'utf8',
          length: 0,
          writing: false,
          corked: 0,
          sync: true,
          bufferProcessing: false,
          onwrite: [Function: bound onwrite],
          writecb: null,
          writelen: 0,
          bufferedRequest: null,
          lastBufferedRequest: null,
          pendingcb: 0,
          prefinished: false,
          errorEmitted: false,
          emitClose: false,
          autoDestroy: false,
          bufferedRequestCount: 0,
          corkedRequestsFree: [Object] },
       writable: true,
       allowHalfOpen: true,
       _sockname: null,
       _pendingData: null,
       _pendingEncoding: '',
       server:
        Server {
          _events: [Object],
          _eventsCount: 2,
          _maxListeners: undefined,
          _connections: 1,
          _handle: [TCP],
          _usingWorkers: false,
          _workers: [],
          _unref: false,
          allowHalfOpen: true,
          pauseOnConnect: false,
          httpAllowHalfOpen: false,
          timeout: 120000,
          keepAliveTimeout: 5000,
          _pendingResponseData: 0,
          maxHeadersCount: null,
          headersTimeout: 40000,
          _connectionKey: '6::::3000',
          [Symbol(IncomingMessage)]: [Function: IncomingMessage],
          [Symbol(ServerResponse)]: [Function: ServerResponse],
          [Symbol(asyncId)]: 10 },
       _server:
        Server {
          _events: [Object],
          _eventsCount: 2,
          _maxListeners: undefined,
          _connections: 1,
          _handle: [TCP],
          _usingWorkers: false,
          _workers: [],
          _unref: false,
          allowHalfOpen: true,
          pauseOnConnect: false,
          httpAllowHalfOpen: false,
          timeout: 120000,
          keepAliveTimeout: 5000,
          _pendingResponseData: 0,
          maxHeadersCount: null,
          headersTimeout: 40000,
          _connectionKey: '6::::3000',
          [Symbol(IncomingMessage)]: [Function: IncomingMessage],
          [Symbol(ServerResponse)]: [Function: ServerResponse],
          [Symbol(asyncId)]: 10 },
       timeout: 120000,
       parser:
        HTTPParser {
          '0': [Function: parserOnHeaders],
          '1': [Function: parserOnHeadersComplete],
          '2': [Function: parserOnBody],
          '3': [Function: parserOnMessageComplete],
          '4': [Function: bound onParserExecute],
          _headers: [],
          _url: '',
          socket: [Circular],
          incoming: [Circular],
          outgoing: null,
          maxHeaderPairs: 2000,
          _consumed: true,
          onIncoming: [Function: bound parserOnIncoming],
          parsingHeadersStart: 0,
          [Symbol(isReused)]: false },
       on: [Function: socketOnWrap],
       _paused: false,
       _httpMessage:
        ServerResponse {
          _events: [Object],
          _eventsCount: 1,
          _maxListeners: undefined,
          outputData: [],
          outputSize: 0,
          writable: true,
          _last: false,
          chunkedEncoding: false,
          shouldKeepAlive: true,
          useChunkedEncodingByDefault: true,
          sendDate: true,
          _removedConnection: false,
          _removedContLen: false,
          _removedTE: false,
          _contentLength: null,
          _hasBody: true,
          _trailer: '',
          finished: false,
          _headerSent: false,
          socket: [Circular],
          connection: [Circular],
          _header: null,
          _onPendingData: [Function: bound updateOutgoingData],
          _sent100: false,
          _expect_continue: false,
          req: [Circular],
          locals: [Object: null prototype] {},
          [Symbol(isCorked)]: false,
          [Symbol(outHeadersKey)]: [Object] },
       [Symbol(asyncId)]: 28,
       [Symbol(lastWriteQueueSize)]: 0,
       [Symbol(timeout)]:
        Timeout {
          _idleTimeout: 120000,
          _idlePrev: [TimersList],
          _idleNext: [TimersList],
          _idleStart: 4985,
          _onTimeout: [Function: bound ],
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: false,
          [Symbol(refed)]: false,
          [Symbol(asyncId)]: 29,
          [Symbol(triggerId)]: 28 },
       [Symbol(kBytesRead)]: 0,
       [Symbol(kBytesWritten)]: 0 },
    connection:
     Socket {
       connecting: false,
       _hadError: false,
       _handle:
        TCP {
          reading: true,
          onread: [Function: onStreamRead],
          onconnection: null,
          _consumed: true,
          [Symbol(owner)]: [Circular] },
       _parent: null,
       _host: null,
       _readableState:
        ReadableState {
          objectMode: false,
          highWaterMark: 16384,
          buffer: BufferList { head: null, tail: null, length: 0 },
          length: 0,
          pipes: null,
          pipesCount: 0,
          flowing: true,
          ended: false,
          endEmitted: false,
          reading: true,
          sync: false,
          needReadable: true,
          emittedReadable: false,
          readableListening: false,
          resumeScheduled: false,
          paused: false,
          emitClose: false,
          autoDestroy: false,
          destroyed: false,
          defaultEncoding: 'utf8',
          awaitDrain: 0,
          readingMore: false,
          decoder: null,
          encoding: null },
       readable: true,
       _events:
        [Object: null prototype] {
          end: [Array],
          drain: [Array],
          timeout: [Function: socketOnTimeout],
          data: [Function: bound socketOnData],
          error: [Function: socketOnError],
          close: [Array],
          resume: [Function: onSocketResume],
          pause: [Function: onSocketPause] },
       _eventsCount: 8,
       _maxListeners: undefined,
       _writableState:
        WritableState {
          objectMode: false,
          highWaterMark: 16384,
          finalCalled: false,
          needDrain: false,
          ending: false,
          ended: false,
          finished: false,
          destroyed: false,
          decodeStrings: false,
          defaultEncoding: 'utf8',
          length: 0,
          writing: false,
          corked: 0,
          sync: true,
          bufferProcessing: false,
          onwrite: [Function: bound onwrite],
          writecb: null,
          writelen: 0,
          bufferedRequest: null,
          lastBufferedRequest: null,
          pendingcb: 0,
          prefinished: false,
          errorEmitted: false,
          emitClose: false,
          autoDestroy: false,
          bufferedRequestCount: 0,
          corkedRequestsFree: [Object] },
       writable: true,
       allowHalfOpen: true,
       _sockname: null,
       _pendingData: null,
       _pendingEncoding: '',
       server:
        Server {
          _events: [Object],
          _eventsCount: 2,
          _maxListeners: undefined,
          _connections: 1,
          _handle: [TCP],
          _usingWorkers: false,
          _workers: [],
          _unref: false,
          allowHalfOpen: true,
          pauseOnConnect: false,
          httpAllowHalfOpen: false,
          timeout: 120000,
          keepAliveTimeout: 5000,
          _pendingResponseData: 0,
          maxHeadersCount: null,
          headersTimeout: 40000,
          _connectionKey: '6::::3000',
          [Symbol(IncomingMessage)]: [Function: IncomingMessage],
          [Symbol(ServerResponse)]: [Function: ServerResponse],
          [Symbol(asyncId)]: 10 },
       _server:
        Server {
          _events: [Object],
          _eventsCount: 2,
          _maxListeners: undefined,
          _connections: 1,
          _handle: [TCP],
          _usingWorkers: false,
          _workers: [],
          _unref: false,
          allowHalfOpen: true,
          pauseOnConnect: false,
          httpAllowHalfOpen: false,
          timeout: 120000,
          keepAliveTimeout: 5000,
          _pendingResponseData: 0,
          maxHeadersCount: null,
          headersTimeout: 40000,
          _connectionKey: '6::::3000',
          [Symbol(IncomingMessage)]: [Function: IncomingMessage],
          [Symbol(ServerResponse)]: [Function: ServerResponse],
          [Symbol(asyncId)]: 10 },
       timeout: 120000,
       parser:
        HTTPParser {
          '0': [Function: parserOnHeaders],
          '1': [Function: parserOnHeadersComplete],
          '2': [Function: parserOnBody],
          '3': [Function: parserOnMessageComplete],
          '4': [Function: bound onParserExecute],
          _headers: [],
          _url: '',
          socket: [Circular],
          incoming: [Circular],
          outgoing: null,
          maxHeaderPairs: 2000,
          _consumed: true,
          onIncoming: [Function: bound parserOnIncoming],
          parsingHeadersStart: 0,
          [Symbol(isReused)]: false },
       on: [Function: socketOnWrap],
       _paused: false,
       _httpMessage:
        ServerResponse {
          _events: [Object],
          _eventsCount: 1,
          _maxListeners: undefined,
          outputData: [],
          outputSize: 0,
          writable: true,
          _last: false,
          chunkedEncoding: false,
          shouldKeepAlive: true,
          useChunkedEncodingByDefault: true,
          sendDate: true,
          _removedConnection: false,
          _removedContLen: false,
          _removedTE: false,
          _contentLength: null,
          _hasBody: true,
          _trailer: '',
          finished: false,
          _headerSent: false,
          socket: [Circular],
          connection: [Circular],
          _header: null,
          _onPendingData: [Function: bound updateOutgoingData],
          _sent100: false,
          _expect_continue: false,
          req: [Circular],
          locals: [Object: null prototype] {},
          [Symbol(isCorked)]: false,
          [Symbol(outHeadersKey)]: [Object] },
       [Symbol(asyncId)]: 28,
       [Symbol(lastWriteQueueSize)]: 0,
       [Symbol(timeout)]:
        Timeout {
          _idleTimeout: 120000,
          _idlePrev: [TimersList],
          _idleNext: [TimersList],
          _idleStart: 4985,
          _onTimeout: [Function: bound ],
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: false,
          [Symbol(refed)]: false,
          [Symbol(asyncId)]: 29,
          [Symbol(triggerId)]: 28 },
       [Symbol(kBytesRead)]: 0,
       [Symbol(kBytesWritten)]: 0 },
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: true,
    headers:
     { 'user-agent': 'PostmanRuntime/7.11.0',
       accept: '*/*',
       'cache-control': 'no-cache',
       'postman-token': '3f4db800-c667-4e86-8d21-42e802df4900',
       host: 'localhost:3000',
       cookie: 'PHPSESSID=8kn5v3r8fmmn9t0ic6j681c5qs',
       'accept-encoding': 'gzip, deflate',
       'content-type':
        'multipart/form-data; boundary=--------------------------175550958079988995076325',
       'content-length': '22752',
       connection: 'keep-alive' },
    rawHeaders:
     [ 'User-Agent',
       'PostmanRuntime/7.11.0',
       'Accept',
       '*/*',
       'Cache-Control',
       'no-cache',
       'Postman-Token',
       '3f4db800-c667-4e86-8d21-42e802df4900',
       'Host',
       'localhost:3000',
       'cookie',
       'PHPSESSID=8kn5v3r8fmmn9t0ic6j681c5qs',
       'accept-encoding',
       'gzip, deflate',
       'content-type',
       'multipart/form-data; boundary=--------------------------175550958079988995076325',
       'content-length',
       '22752',
       'Connection',
       'keep-alive' ],
    trailers: {},
    rawTrailers: [],
    aborted: false,
    upgrade: false,
    url: '/member',
    method: 'POST',
    statusCode: null,
    statusMessage: null,
    client:
     Socket {
       connecting: false,
       _hadError: false,
       _handle:
        TCP {
          reading: true,
          onread: [Function: onStreamRead],
          onconnection: null,
          _consumed: true,
          [Symbol(owner)]: [Circular] },
       _parent: null,
       _host: null,
       _readableState:
        ReadableState {
          objectMode: false,
          highWaterMark: 16384,
          buffer: BufferList { head: null, tail: null, length: 0 },
          length: 0,
          pipes: null,
          pipesCount: 0,
          flowing: true,
          ended: false,
          endEmitted: false,
          reading: true,
          sync: false,
          needReadable: true,
          emittedReadable: false,
          readableListening: false,
          resumeScheduled: false,
          paused: false,
          emitClose: false,
          autoDestroy: false,
          destroyed: false,
          defaultEncoding: 'utf8',
          awaitDrain: 0,
          readingMore: false,
          decoder: null,
          encoding: null },
       readable: true,
       _events:
        [Object: null prototype] {
          end: [Array],
          drain: [Array],
          timeout: [Function: socketOnTimeout],
          data: [Function: bound socketOnData],
          error: [Function: socketOnError],
          close: [Array],
          resume: [Function: onSocketResume],
          pause: [Function: onSocketPause] },
       _eventsCount: 8,
       _maxListeners: undefined,
       _writableState:
        WritableState {
          objectMode: false,
          highWaterMark: 16384,
          finalCalled: false,
          needDrain: false,
          ending: false,
          ended: false,
          finished: false,
          destroyed: false,
          decodeStrings: false,
          defaultEncoding: 'utf8',
          length: 0,
          writing: false,
          corked: 0,
          sync: true,
          bufferProcessing: false,
          onwrite: [Function: bound onwrite],
          writecb: null,
          writelen: 0,
          bufferedRequest: null,
          lastBufferedRequest: null,
          pendingcb: 0,
          prefinished: false,
          errorEmitted: false,
          emitClose: false,
          autoDestroy: false,
          bufferedRequestCount: 0,
          corkedRequestsFree: [Object] },
       writable: true,
       allowHalfOpen: true,
       _sockname: null,
       _pendingData: null,
       _pendingEncoding: '',
       server:
        Server {
          _events: [Object],
          _eventsCount: 2,
          _maxListeners: undefined,
          _connections: 1,
          _handle: [TCP],
          _usingWorkers: false,
          _workers: [],
          _unref: false,
          allowHalfOpen: true,
          pauseOnConnect: false,
          httpAllowHalfOpen: false,
          timeout: 120000,
          keepAliveTimeout: 5000,
          _pendingResponseData: 0,
          maxHeadersCount: null,
          headersTimeout: 40000,
          _connectionKey: '6::::3000',
          [Symbol(IncomingMessage)]: [Function: IncomingMessage],
          [Symbol(ServerResponse)]: [Function: ServerResponse],
          [Symbol(asyncId)]: 10 },
       _server:
        Server {
          _events: [Object],
          _eventsCount: 2,
          _maxListeners: undefined,
          _connections: 1,
          _handle: [TCP],
          _usingWorkers: false,
          _workers: [],
          _unref: false,
          allowHalfOpen: true,
          pauseOnConnect: false,
          httpAllowHalfOpen: false,
          timeout: 120000,
          keepAliveTimeout: 5000,
          _pendingResponseData: 0,
          maxHeadersCount: null,
          headersTimeout: 40000,
          _connectionKey: '6::::3000',
          [Symbol(IncomingMessage)]: [Function: IncomingMessage],
          [Symbol(ServerResponse)]: [Function: ServerResponse],
          [Symbol(asyncId)]: 10 },
       timeout: 120000,
       parser:
        HTTPParser {
          '0': [Function: parserOnHeaders],
          '1': [Function: parserOnHeadersComplete],
          '2': [Function: parserOnBody],
          '3': [Function: parserOnMessageComplete],
          '4': [Function: bound onParserExecute],
          _headers: [],
          _url: '',
          socket: [Circular],
          incoming: [Circular],
          outgoing: null,
          maxHeaderPairs: 2000,
          _consumed: true,
          onIncoming: [Function: bound parserOnIncoming],
          parsingHeadersStart: 0,
          [Symbol(isReused)]: false },
       on: [Function: socketOnWrap],
       _paused: false,
       _httpMessage:
        ServerResponse {
          _events: [Object],
          _eventsCount: 1,
          _maxListeners: undefined,
          outputData: [],
          outputSize: 0,
          writable: true,
          _last: false,
          chunkedEncoding: false,
          shouldKeepAlive: true,
          useChunkedEncodingByDefault: true,
          sendDate: true,
          _removedConnection: false,
          _removedContLen: false,
          _removedTE: false,
          _contentLength: null,
          _hasBody: true,
          _trailer: '',
          finished: false,
          _headerSent: false,
          socket: [Circular],
          connection: [Circular],
          _header: null,
          _onPendingData: [Function: bound updateOutgoingData],
          _sent100: false,
          _expect_continue: false,
          req: [Circular],
          locals: [Object: null prototype] {},
          [Symbol(isCorked)]: false,
          [Symbol(outHeadersKey)]: [Object] },
       [Symbol(asyncId)]: 28,
       [Symbol(lastWriteQueueSize)]: 0,
       [Symbol(timeout)]:
        Timeout {
          _idleTimeout: 120000,
          _idlePrev: [TimersList],
          _idleNext: [TimersList],
          _idleStart: 4985,
          _onTimeout: [Function: bound ],
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: false,
          [Symbol(refed)]: false,
          [Symbol(asyncId)]: 29,
          [Symbol(triggerId)]: 28 },
       [Symbol(kBytesRead)]: 0,
       [Symbol(kBytesWritten)]: 0 },
    _consuming: true,
    _dumped: false,
    next: [Function: next],
    baseUrl: '',
    originalUrl: '/member',
    _parsedUrl:
     Url {
       protocol: null,
       slashes: null,
       auth: null,
       host: null,
       port: null,
       hostname: null,
       hash: null,
       search: null,
       query: null,
       pathname: '/member',
       path: '/member',
       href: '/member',
       _raw: '/member' },
    params: {},
    query: {},
    res:
     ServerResponse {
       _events:
        [Object: null prototype] { finish: [Function: bound resOnFinish] },
       _eventsCount: 1,
       _maxListeners: undefined,
       outputData: [],
       outputSize: 0,
       writable: true,
       _last: false,
       chunkedEncoding: false,
       shouldKeepAlive: true,
       useChunkedEncodingByDefault: true,
       sendDate: true,
       _removedConnection: false,
       _removedContLen: false,
       _removedTE: false,
       _contentLength: null,
       _hasBody: true,
       _trailer: '',
       finished: false,
       _headerSent: false,
       socket:
        Socket {
          connecting: false,
          _hadError: false,
          _handle: [TCP],
          _parent: null,
          _host: null,
          _readableState: [ReadableState],
          readable: true,
          _events: [Object],
          _eventsCount: 8,
          _maxListeners: undefined,
          _writableState: [WritableState],
          writable: true,
          allowHalfOpen: true,
          _sockname: null,
          _pendingData: null,
          _pendingEncoding: '',
          server: [Server],
          _server: [Server],
          timeout: 120000,
          parser: [HTTPParser],
          on: [Function: socketOnWrap],
          _paused: false,
          _httpMessage: [Circular],
          [Symbol(asyncId)]: 28,
          [Symbol(lastWriteQueueSize)]: 0,
          [Symbol(timeout)]:
           Timeout {
             _idleTimeout: 120000,
             _idlePrev: [TimersList],
             _idleNext: [TimersList],
             _idleStart: 4985,
             _onTimeout: [Function: bound ],
             _timerArgs: undefined,
             _repeat: null,
             _destroyed: false,
             [Symbol(refed)]: false,
             [Symbol(asyncId)]: 29,
             [Symbol(triggerId)]: 28 },
          [Symbol(kBytesRead)]: 0,
          [Symbol(kBytesWritten)]: 0 },
       connection:
        Socket {
          connecting: false,
          _hadError: false,
          _handle: [TCP],
          _parent: null,
          _host: null,
          _readableState: [ReadableState],
          readable: true,
          _events: [Object],
          _eventsCount: 8,
          _maxListeners: undefined,
          _writableState: [WritableState],
          writable: true,
          allowHalfOpen: true,
          _sockname: null,
          _pendingData: null,
          _pendingEncoding: '',
          server: [Server],
          _server: [Server],
          timeout: 120000,
          parser: [HTTPParser],
          on: [Function: socketOnWrap],
          _paused: false,
          _httpMessage: [Circular],
          [Symbol(asyncId)]: 28,
          [Symbol(lastWriteQueueSize)]: 0,
          [Symbol(timeout)]:
           Timeout {
             _idleTimeout: 120000,
             _idlePrev: [TimersList],
             _idleNext: [TimersList],
             _idleStart: 4985,
             _onTimeout: [Function: bound ],
             _timerArgs: undefined,
             _repeat: null,
             _destroyed: false,
             [Symbol(refed)]: false,
             [Symbol(asyncId)]: 29,
             [Symbol(triggerId)]: 28 },
          [Symbol(kBytesRead)]: 0,
          [Symbol(kBytesWritten)]: 0 },
       _header: null,
       _onPendingData: [Function: bound updateOutgoingData],
       _sent100: false,
       _expect_continue: false,
       req: [Circular],
       locals: [Object: null prototype] {},
       [Symbol(isCorked)]: false,
       [Symbol(outHeadersKey)]: [Object: null prototype] { 'x-powered-by': [Array] } },
    body:
     [Object: null prototype] {
       m_email: '222lghiifgjhj',
       m_name: 'GGYY2',
       m_mobile: '09535555555',
       m_password: '12345' },
    route:
     Route {
       path: '/member',
       stack: [ [Layer], [Layer] ],
       methods: { post: true } },
    files:
     [ { fieldname: 'avatar',
         originalname: '41d39bd6b64ace89fc9bca0988a3f0b3.jpg',
         encoding: '7bit',
         mimetype: 'image/jpeg',
         destination: 'tmp_uploads/',
         filename: 'e5b55c357f26c71690b59efb8b03c9a1',
         path: 'tmp_uploads\\e5b55c357f26c71690b59efb8b03c9a1',
         size: 22055 } ] }