(function () {
  const host = window.location.hostname;
  const username = host.endsWith('.github.io') ? host.split('.')[0] : '';
  document.querySelectorAll('[data-github-profile]').forEach((link) => {
    if (username) {
      link.href = `https://github.com/${username}`;
      link.textContent = `github.com/${username}`;
    } else {
      link.href = 'https://github.com/';
      link.textContent = 'GitHub profile';
    }
  });

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
