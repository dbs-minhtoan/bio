(function () {
  'use strict';

  var root = document.documentElement;

  // ----- Theme toggle -----
  var themeBtn = document.getElementById('themeToggle');
  function isDark() {
    var t = root.dataset.theme;
    if (t) return t === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  themeBtn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('cv-theme', next); } catch (e) {}
  });

  // ----- Print / Save as PDF -----
  document.getElementById('printBtn').addEventListener('click', function () {
    window.print();
  });

  // ----- Project filter -----
  var chips = document.querySelectorAll('.chip[data-filter]');
  var projects = document.querySelectorAll('.project');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var filter = chip.dataset.filter;
      chips.forEach(function (c) {
        c.classList.toggle('is-active', c === chip);
        c.setAttribute('aria-pressed', c === chip ? 'true' : 'false');
      });
      projects.forEach(function (p) {
        var tags = (p.dataset.tags || '').split(' ');
        p.hidden = filter !== 'all' && tags.indexOf(filter) === -1;
      });
    });
  });

  // Jumping to a project (e.g. from "Key projects") always shows it
  document.querySelectorAll('.job-projects a').forEach(function (a) {
    a.addEventListener('click', function () {
      var target = document.querySelector(a.getAttribute('href'));
      if (target && target.hidden) chips[0].click();
    });
  });

  // ----- Footer year -----
  document.getElementById('year').textContent = new Date().getFullYear();

  // ----- Reveal on scroll -----
  if ('IntersectionObserver' in window) {
    var items = document.querySelectorAll('.block, .job, .project');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) {
      el.classList.add('reveal');
      io.observe(el);
    });
    window.addEventListener('beforeprint', function () {
      items.forEach(function (el) { el.classList.add('is-visible'); });
    });
  }
})();
