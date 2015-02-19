module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: './tmp',
      repositoryUrl: 'git@github.com:LesPepitos/website.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 5,
      key: '~/.ssh/',
      shallowClone: true
    },
    staging: {
      branch: 'master',
      deployTo: '/home/lespepitos-staging/',
      servers: 'lespepitos-staging@lespepitos.org'
    },
    prod: {
      branch: 'prod',
      deployTo: '/home/lespepitos-prod/',
      servers: 'lespepitos-prod@lespepitos.org'
    }
  });

  shipit.task('start', function () {
    shipit.emit('build');
  });

  shipit.on('build', function () {
    shipit.local('gulp build').then(function() {
      shipit.start('deploy');
    });
  });

  shipit.on('cleaned', function() {
    shipit.local('scp -r ./dist ' + shipit.config.servers + ':' +  shipit.config.deployTo + 'current');
  });
};
