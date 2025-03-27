# Viem emitOnBegin bug demo


When you run `npm run start`, if you do not have an Internet connection, the following error gets logged to console and the program stops.


```
ErrorEvent {
  [Symbol(kTarget)]: WebSocket {
    _events: [Object: null prototype] { error: [Function], open: [Function] },
    _eventsCount: 2,
    _maxListeners: undefined,
    _binaryType: 'nodebuffer',
    _closeCode: 1006,
    _closeFrameReceived: false,
    _closeFrameSent: false,
    _closeMessage: <Buffer >,
    _closeTimer: null,
    _errorEmitted: true,
    _extensions: {},
    _paused: false,
    _protocol: '',
    _readyState: 3,
    _receiver: null,
    _sender: null,
    _socket: null,
    _bufferedAmount: 0,
    _isServer: false,
    _redirects: 0,
    _autoPong: true,
    _url: 'wss://rpc-ws.chiliz.com/',
    _req: null,
    [Symbol(shapeMode)]: false,
    [Symbol(kCapture)]: false
  },
  [Symbol(kType)]: 'error',
  [Symbol(kError)]: Error: getaddrinfo ENOTFOUND rpc-ws.chiliz.com
      at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:120:26) {
    errno: -3008,
    code: 'ENOTFOUND',
    syscall: 'getaddrinfo',
    hostname: 'rpc-ws.chiliz.com'
  },
  [Symbol(kMessage)]: 'getaddrinfo ENOTFOUND rpc-ws.chiliz.com'
}
ErrorEvent {
  [Symbol(kTarget)]: WebSocket {
    _events: [Object: null prototype] { error: [Function], open: [Function] },
    _eventsCount: 2,
    _maxListeners: undefined,
    _binaryType: 'nodebuffer',
    _closeCode: 1006,
    _closeFrameReceived: false,
    _closeFrameSent: false,
    _closeMessage: <Buffer >,
    _closeTimer: null,
    _errorEmitted: true,
    _extensions: {},
    _paused: false,
    _protocol: '',
    _readyState: 3,
    _receiver: null,
    _sender: null,
    _socket: null,
    _bufferedAmount: 0,
    _isServer: false,
    _redirects: 0,
    _autoPong: true,
    _url: 'wss://rpc-ws.chiliz.com/',
    _req: null,
    [Symbol(shapeMode)]: false,
    [Symbol(kCapture)]: false
  },
  [Symbol(kType)]: 'error',
  [Symbol(kError)]: Error: getaddrinfo ENOTFOUND rpc-ws.chiliz.com
      at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:120:26) {
    errno: -3008,
    code: 'ENOTFOUND',
    syscall: 'getaddrinfo',
    hostname: 'rpc-ws.chiliz.com'
  },
  [Symbol(kMessage)]: 'getaddrinfo ENOTFOUND rpc-ws.chiliz.com'
}
```

What I would expect to happen instead is that `onError` gets called, like happens when you use `emitOnBegin: false`

