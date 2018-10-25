const entry = require('./entry');
const job = require('./example-job');
const description = {
  name: 'example',
  time: '40 0 * * *',
  job
}
entry(description);
