// cluster.js
const cluster = require('cluster');
const os = require('os');

// **** Mock DB Call DREAM GROWTH
const numberOfUsersInDB = function() {
  this.count = this.count || 5;
  this.count = this.count * this.count;
  return this.count;
}
// ****

if (cluster.isMaster) {
  const cpus = os.cpus().length;

  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i<cpus; i++) {
    cluster.fork();
  }
 // Right after the fork loop within the isMaster=true block
 const updateWorkers = () => {
   const usersCount = numberOfUsersInDB();
   Object.values(cluster.workers).forEach(worker => {
     worker.send({ usersCount });
   });
 };

 updateWorkers();
 setInterval(updateWorkers, 10000);
} else {
  require('./www');
}