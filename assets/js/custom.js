/*
 * Progressive enhancements for the academic homepage:
 * theme switching, offset aware anchor scrolling, nav scroll spy
 * and a back-to-top control.
 */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function scrollOffset() {
    var masthead = doc.querySelector('.masthead');
    var height = masthead ? masthead.getBoundingClientRect().height : 62;
    return height + 26;
  }

  function sameDocument(url) {
    return url.origin === location.origin && url.pathname === location.pathname;
  }

  function parseUrl(href) {
    try {
      return new URL(href, location.href);
    } catch (e) {
      return null;
    }
  }

  function scrollTo(target) {
    var top = target.getBoundingClientRect().top + window.pageYOffset - scrollOffset();
    window.scrollTo({
      top: top < 0 ? 0 : top,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth'
    });
  }

  /* ---------------------------------------------------------------- theme */

  var themeToggles = doc.querySelectorAll('.theme-toggle');

  function setTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (persist) {
      try { localStorage.setItem('theme', theme); } catch (e) { /* storage disabled */ }
    }
    var meta = doc.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#080e1a' : '#ffffff');
    }
    Array.prototype.forEach.call(themeToggles, function (button) {
      var dark = theme === 'dark';
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  Array.prototype.forEach.call(themeToggles, function (button) {
    button.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
    });
  });

  setTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', false);

  /* --------------------------------------------- same page anchor links */

  doc.addEventListener('click', function (event) {
    if (event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
    if (!link || !link.hash || link.hash.length < 2) {
      return;
    }

    var url = parseUrl(link.getAttribute('href'));
    if (!url || !sameDocument(url)) {
      return;
    }

    var target = doc.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) {
      return;
    }

    // The theme binds its own scrolling to every anchor; take over here so
    // headings land below the sticky masthead instead of behind it.
    event.preventDefault();
    event.stopPropagation();
    scrollTo(target);

    try {
      history.pushState(null, '', url.pathname + url.search + url.hash);
    } catch (e) { /* ignore */ }
  }, true);

  /* --------------------------------------------------- nav scroll spy */

  var spyItems = [];

  Array.prototype.forEach.call(doc.querySelectorAll('.greedy-nav .masthead__menu-item:not(.masthead__brand-item) > a[href*="#"]'), function (link) {
    var url = parseUrl(link.getAttribute('href'));
    if (!url || !sameDocument(url)) {
      return;
    }
    var target = doc.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (target) {
      spyItems.push({ link: link, target: target });
    }
  });

  function updateSpy() {
    if (!spyItems.length) {
      return;
    }

    // The nav order does not always follow the document order, so pick the
    // section closest above the probe line rather than the last one in the list.
    var probe = window.pageYOffset + scrollOffset() + 8;
    var bestTop = -Infinity;
    var active = null;

    var atBottom = window.pageYOffset + window.innerHeight >=
      doc.documentElement.scrollHeight - 2;

    spyItems.forEach(function (item) {
      if (item.link.offsetParent === null) {
        item.link.classList.remove('is-active');
        return;
      }
      var top = item.target.getBoundingClientRect().top + window.pageYOffset;
      if ((atBottom || top <= probe) && top > bestTop) {
        bestTop = top;
        active = item;
      }
    });

    if (!active) {
      active = spyItems.filter(function (item) { return item.link.offsetParent !== null; })[0] || null;
    }

    spyItems.forEach(function (item) {
      item.link.classList.toggle('is-active', item === active);
    });
  }

  /* ------------------------------------------------------- news toggle */

  var newsList = doc.querySelector('.page__content > [id="-news"] + ul');

  if (newsList && newsList.children.length > 10) {
    var totalItems = newsList.children.length;
    var visibleItems = 10;

    newsList.classList.add('is-collapsed');

    var newsToggle = doc.createElement('button');
    newsToggle.type = 'button';
    newsToggle.className = 'news-toggle';

    var renderToggle = function () {
      var open = !newsList.classList.contains('is-collapsed');
      newsToggle.setAttribute('aria-expanded', String(open));
      newsToggle.classList.toggle('is-open', open);
      newsToggle.innerHTML = '<i class="fas fa-chevron-down" aria-hidden="true"></i><span>'
        + (open ? 'Show fewer' : 'Show all ' + totalItems + ' news items') + '</span>';
    };

    newsToggle.addEventListener('click', function () {
      var collapsed = newsList.classList.toggle('is-collapsed');
      renderToggle();
      if (collapsed) {
        var firstHidden = newsList.children[visibleItems];
        if (firstHidden && firstHidden.getBoundingClientRect().top < 0) {
          scrollTo(newsList);
        }
      }
    });

    renderToggle();
    newsList.parentNode.insertBefore(newsToggle, newsList.nextSibling);
  }

  /* ------------------------------------------------------ back to top */
  var toTop = doc.createElement('button');
  toTop.type = 'button';
  toTop.className = 'to-top';
  toTop.setAttribute('aria-label', 'Back to top');
  toTop.setAttribute('title', 'Back to top');
  toTop.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  });
  doc.body.appendChild(toTop);

  /* -------------------------------------------------- scroll pipeline */

  var masthead = doc.querySelector('.masthead');
  var ticking = false;

  function onScroll() {
    var y = window.pageYOffset;

    if (masthead) {
      masthead.classList.toggle('is-scrolled', y > 4);
    }
    toTop.classList.toggle('is-visible', y > 600);
    updateSpy();

    ticking = false;
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  onScroll();
})();
