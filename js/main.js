/* LAWOPS — progressive enhancement (vanilla JS, no dependencies) */
(function () {
  'use strict';

  /* ---------- Loading screen (1.5s) ---------- */
  var loader = document.getElementById('loader');
  if (loader) {
    document.documentElement.classList.add('is-loading');
    var loaderCounter = loader.querySelector('[data-loader-counter]');

    if (loaderCounter) {
      var loaderStart = performance.now();
      var loaderTick = function () {
        var t = Math.min((performance.now() - loaderStart) / 1500, 1);
        var eased = t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
        var count = Math.max(1, Math.round(eased * 100));
        loaderCounter.textContent = String(count).padStart(2, '0') + '%';
        if (t < 1) requestAnimationFrame(loaderTick);
      };
      requestAnimationFrame(loaderTick);
    }

    setTimeout(function () {
      loader.classList.add('is-done');
      document.documentElement.classList.remove('is-loading');
    }, 2000);

    setTimeout(function () {
      loader.remove();
    }, 2650);
  }

  /* ---------- Sticky nav state ---------- */
  var nav = document.getElementById('nav');
  var onScroll = function () {
    if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector('[data-nav-toggle]');
  var navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealTargets = document.querySelectorAll('.section, .footer');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
    revealTargets.forEach(function (el) {
      if (!el.classList.contains('module-section') && !el.classList.contains('audience')) el.classList.add('reveal');
    });
    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Active nav link highlighting ---------- */
  var links = document.querySelectorAll('.nav__link');
  var linkTargets = document.querySelectorAll(
    'main section[id], [data-panel]'
  );
  if ('IntersectionObserver' in window) {
    var linkObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (l) {
          l.classList.toggle('is-active', l.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    linkTargets.forEach(function (s) { linkObserver.observe(s); });
  }

  /* ---------- Tab switcher ---------- */
  var tabs = document.querySelectorAll('[data-tab]');
  var panels = document.querySelectorAll('[data-panel]');
  var activateTab = function (name) {
    tabs.forEach(function (t) {
      var active = t.getAttribute('data-tab') === name;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', String(active));
    });
    panels.forEach(function (panel) {
      panel.classList.toggle('is-active', panel.getAttribute('data-panel') === name);
    });
  };
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      activateTab(tab.getAttribute('data-tab'));
    });
  });
  var hashTab = (window.location.hash || '').replace('#panel-', '');
  if (hashTab) activateTab(hashTab);

  /* ---------- Early access: audience toggle ---------- */
  var eaOptions = document.querySelectorAll('[data-ea]');
  var eaAudience = document.getElementById('ea-audience');
  eaOptions.forEach(function (opt) {
    opt.addEventListener('click', function () {
      var val = opt.getAttribute('data-ea');
      eaOptions.forEach(function (o) {
        var active = o === opt;
        o.classList.toggle('is-active', active);
        o.setAttribute('aria-selected', String(active));
      });
      if (eaAudience) eaAudience.value = val;
    });
  });

  /* ---------- Early access form validation (mock submit) ---------- */
  var form = document.getElementById('earlyaccessForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      ['name', 'email', 'message'].forEach(function (field) {
        var input = form.querySelector('[name="' + field + '"]');
        var error = form.querySelector('[data-error-for="' + field + '"]');
        var value = input ? input.value.trim() : '';
        var message = '';

        if (!value) message = 'This field is required.';
        else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          message = 'Please enter a valid email address.';
        }

        if (input) input.classList.toggle('is-invalid', !!message);
        if (error) error.textContent = message;
        if (message) valid = false;
      });

      if (valid) {
        var success = form.querySelector('[data-ea-success]');
        if (success) success.hidden = false;
        form.reset();
      }
    });
  }
  /* Login form validation (mock submit) */
  var loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      ['email', 'password'].forEach(function (field) {
        var input = loginForm.querySelector('[name="' + field + '"]');
        var error = loginForm.querySelector('[data-error-for="' + field + '"]');
        var value = input ? input.value.trim() : '';
        var message = '';

        if (!value) message = 'This field is required.';
        else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          message = 'Please enter a valid email address.';
        }

        if (input) input.classList.toggle('is-invalid', !!message);
        if (error) error.textContent = message;
        if (message) valid = false;
      });

      if (valid) {
        var loginSuccess = loginForm.querySelector('[data-login-success]');
        if (loginSuccess) loginSuccess.hidden = false;
        loginForm.reset();
      }
    });
  }

  /* Login password visibility toggle */
  var loginToggle = document.querySelector('[data-login-toggle]');
  var loginPassword = document.getElementById('login-password');
  if (loginToggle && loginPassword) {
    loginToggle.addEventListener('click', function () {
      var show = loginPassword.type === 'password';
      loginPassword.type = show ? 'text' : 'password';
      loginToggle.textContent = show ? 'Hide' : 'Show';
      loginToggle.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    });
  }

  /* ---------- Scroll-scrubbed module carousel (sticky horizontal) ---------- */
  var modulesScroll = document.querySelector('.modules-scroll');
  var moduleSlides = modulesScroll ? modulesScroll.querySelectorAll('.modules-slide') : [];
  var slideCount = moduleSlides.length;
  var modulesCounter = document.querySelector('[data-modules-counter]');
  var modulesDotsWrap = document.querySelector('[data-modules-dots]');
  var modulesReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  var scrubActive = function () {
    return !!modulesScroll && window.matchMedia('(min-width: 768px)').matches && !modulesReduced.matches;
  };

  var setModulesActive = function (index, fast) {
    moduleSlides.forEach(function (slide, i) {
      var active = i === index;
      slide.classList.toggle('is-active', active);
      slide.classList.toggle('is-visible', active);
      slide.classList.toggle('is-fast', active && fast);
    });
    if (modulesCounter) {
      modulesCounter.textContent = index === 0 ? 'The Platform' : 'Module 0' + index;
    }
    if (modulesDotsWrap) {
      for (var d = 0; d < modulesDotsWrap.children.length; d++) {
        modulesDotsWrap.children[d].classList.toggle('is-active', d === index);
      }
    }
  };

  if (modulesScroll && slideCount) {
    modulesScroll.style.setProperty('--slide-count', slideCount);

    if (modulesDotsWrap) {
      var dotsFrag = document.createDocumentFragment();
      for (var di = 0; di < slideCount; di++) {
        var dot = document.createElement('span');
        dot.className = 'modules-scroll__dot';
        dotsFrag.appendChild(dot);
      }
      modulesDotsWrap.appendChild(dotsFrag);
    }

    var TWEEN_FAST_MS = 280;
    var TWEEN_WALK_MS = 450;
    var SETTLE_FAST_MS = 280;
    var SETTLE_WALK_MS = 900;
    var SETTLE_ARRIVE_MS = 2600;
    var STILL_SCROLL_PX = 60;

    var loopRunning = false;
    var lastTick = 0;
    var currentIdx = 0;
    var stepIdx = 0;
    var state = 'idle';
    var settleElapsed = 0;
    var tweenStart = 0;
    var tweenDur = 0;
    var tweenFrom = 0;
    var tweenTo = 0;
    var heldP = 0;
    var programmaticUntil = 0;
    var lastScrollY = window.scrollY;
    var lastScrollT = performance.now();
    var velocity = 0;

    var easeOutCubic = function (t) {
      return 1 - Math.pow(1 - t, 3);
    };

    var beginStep = function (dir) {
      stepIdx = currentIdx + dir;
      if (stepIdx < 0 || stepIdx >= slideCount) {
        state = 'idle';
        return;
      }
      beginTween();
    };

    var beginTween = function () {
      tweenFrom = heldP;
      tweenTo = stepIdx / (slideCount - 1);
      tweenStart = performance.now();
      tweenDur = Math.abs(velocity) > STILL_SCROLL_PX ? TWEEN_FAST_MS : TWEEN_WALK_MS;
      state = 'tween';
    };

    var modulesFrame = function () {
      if (!scrubActive()) return;
      var now = performance.now();
      if (now < programmaticUntil) {
        lastTick = now;
        return;
      }
      var dt = now - lastTick > 100 ? 0 : now - lastTick;
      lastTick = now;
      var rect = modulesScroll.getBoundingClientRect();
      var total = rect.height - window.innerHeight;
      var p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      var target = Math.round(p * (slideCount - 1));
      var actively = Math.abs(velocity) > STILL_SCROLL_PX;

      if (state === 'idle') {
        if (actively && target > currentIdx) beginStep(1);
        else if (actively && target < currentIdx) beginStep(-1);
      } else if (state === 'tween') {
        if (actively && target !== currentIdx && (target > currentIdx) !== (stepIdx > currentIdx)) {
          beginStep(target > currentIdx ? 1 : -1);
        }
        var t = (now - tweenStart) / tweenDur;
        if (t >= 1) {
          heldP = tweenTo;
          currentIdx = stepIdx;
          state = 'settle';
          settleElapsed = 0;
        } else {
          heldP = tweenFrom + (tweenTo - tweenFrom) * easeOutCubic(t);
        }
      } else if (state === 'settle') {
        settleElapsed += dt;
        var settleDur = Math.abs(velocity) > STILL_SCROLL_PX ? SETTLE_FAST_MS : (target !== currentIdx ? SETTLE_WALK_MS : SETTLE_ARRIVE_MS);
        if (settleElapsed >= settleDur) {
          if (target > currentIdx) beginStep(1);
          else if (target < currentIdx) beginStep(-1);
          else state = 'idle';
        }
      }

      modulesScroll.style.setProperty('--modules-progress', heldP.toFixed(4));
      setModulesActive(currentIdx, Math.abs(velocity) > STILL_SCROLL_PX || target !== currentIdx);
    };

    var modulesLoop = function () {
      modulesFrame();
      if (scrubActive() && state !== 'idle') {
        requestAnimationFrame(modulesLoop);
      } else {
        loopRunning = false;
      }
    };

    var modulesOnScroll = function () {
      var now = performance.now();
      var dt = Math.max(now - lastScrollT, 8);
      var dy = window.scrollY - lastScrollY;
      velocity = 0.75 * velocity + 0.25 * ((dy / dt) * 1000);
      lastScrollY = window.scrollY;
      lastScrollT = now;
      if (loopRunning) return;
      loopRunning = true;
      requestAnimationFrame(modulesLoop);
    };
    window.addEventListener('scroll', modulesOnScroll, { passive: true });

    var modulesSlidesObserver = null;
    if ('IntersectionObserver' in window) {
      modulesSlidesObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      }, { threshold: 0.3 });
    }

    var modulesMode = null;
    var syncModulesMode = function () {
      var enabled = scrubActive();
      if (enabled === modulesMode) return;
      modulesMode = enabled;
      if (enabled) {
        if (modulesSlidesObserver) {
          moduleSlides.forEach(function (s) { modulesSlidesObserver.unobserve(s); });
        }
        modulesFrame();
      } else {
        state = 'idle';
        currentIdx = 0;
        stepIdx = 0;
        heldP = 0;
        lastTick = 0;
        programmaticUntil = 0;
        velocity = 0;
        loopRunning = false;
        if (modulesSlidesObserver) {
          moduleSlides.forEach(function (s) { modulesSlidesObserver.observe(s); });
        }
      }
    };

    window.addEventListener('resize', function () {
      syncModulesMode();
      modulesOnScroll();
    });
    syncModulesMode();
    modulesOnScroll();

    /* Footer #module-0N links: scroll to the matching slide */
    var snapToModule = function (hash) {
      if (!scrubActive()) return false;
      var m = /^#module-0([1-6])$/.exec(hash);
      if (!m) return false;
      var index = parseInt(m[1], 10);
      if (index < 1 || index >= slideCount) return false;
      var rect = modulesScroll.getBoundingClientRect();
      var total = rect.height - window.innerHeight;
      var top = rect.top + window.scrollY + (index / (slideCount - 1)) * total;
      programmaticUntil = performance.now() + 1200;
      state = 'idle';
      stepIdx = index;
      currentIdx = index;
      heldP = index / (slideCount - 1);
      lastTick = 0;
      modulesScroll.style.setProperty('--modules-progress', heldP.toFixed(4));
      setModulesActive(index, false);
      window.scrollTo({ top: top, behavior: 'smooth' });
      return true;
    };

    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#module-"]');
      if (link && snapToModule(link.getAttribute('href'))) e.preventDefault();
    });

    if (window.location.hash) {
      setTimeout(function () { snapToModule(window.location.hash); }, 0);
    }
  }

  /* ---------- Custom cursor (dot + trailing ring) ---------- */
  var dot = document.querySelector('.cursor-dot');
  var ring = document.querySelector('.cursor-ring');
  var finePointer = window.matchMedia('(pointer: fine)');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (dot && ring && finePointer.matches && !reducedMotion.matches) {
    var mouseX = -100, mouseY = -100;
    var ringX = -100, ringY = -100;
    var visible = false;
    var raf = null;

    var place = function (el, x, y) {
      el.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    };

    var tick = function () {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      place(ring, ringX, ringY);
      if (Math.abs(mouseX - ringX) > 0.5 || Math.abs(mouseY - ringY) > 0.5) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    };

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      place(dot, mouseX, mouseY);
      if (!visible) {
        visible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        place(ring, mouseX, mouseY);
        ringX = mouseX;
        ringY = mouseY;
      }
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
      visible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      if (raf) { cancelAnimationFrame(raf); raf = null; }
    });

    var HOVER_SELECTOR = 'a, button, input, select, textarea, label, .btn, [role="button"]';
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest(HOVER_SELECTOR)) ring.classList.add('is-hover');
    }, { passive: true });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest(HOVER_SELECTOR)) ring.classList.remove('is-hover');
    }, { passive: true });
  }
})();