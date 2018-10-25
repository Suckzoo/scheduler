const cron = require('cron');

module.exports = description => {
  const job = new cron.CronJob(description.time, async () => {
    try {
      await description.job();
    } catch (e) {
      console.error(`[${description.name}] FATAL: job failed!`);
      console.error(e);
    }
  }, null, true, 'Asia/Seoul');
  job.start();
}