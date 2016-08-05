var jobNumber = 0;
setInterval(function () {
  console.log('Job executed - ' + jobNumber++ + ' times');
}, 2000);
