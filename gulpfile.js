var glob = require('glob');

glob.sync('./gulp/tasks/*.js').forEach(function(task) {
  require(task);
});
