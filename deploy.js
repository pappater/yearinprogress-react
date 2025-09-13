const ghpages = require('gh-pages');

ghpages.publish('build', {
  branch: 'gh-pages',
  repo: 'https://github.com/pappater/yearinprogress-react.git',
  message: 'Deploy to GitHub Pages',
}, (err) => {
  if (err) {
    console.error('Deployment failed:', err);
  } else {
    console.log('Deployment successful!');
  }
});
