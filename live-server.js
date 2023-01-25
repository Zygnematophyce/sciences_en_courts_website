import liveServer from 'live-server';

const params = {
  port: 8080,
  host: "0.0.0.0",
  file: "index.html",
  logLvel: 2
};

liveServer.start(params);
