(self.webpackChunkbugtracker_ionic = self.webpackChunkbugtracker_ionic || []).push([
  [8792],
  {
    1656: (cn, vt, ne) => {
      'use strict';
      ne.d(vt, { c: () => Ue, r: () => he });
      const Ue = (y, D) => {
          y.componentOnReady ? y.componentOnReady().then(M => D(M)) : he(() => D(y));
        },
        he = y =>
          'function' == typeof __zone_symbol__requestAnimationFrame
            ? __zone_symbol__requestAnimationFrame(y)
            : 'function' == typeof requestAnimationFrame
              ? requestAnimationFrame(y)
              : setTimeout(y);
    },
    6031: (cn, vt, ne) => {
      'use strict';
      ne.d(vt, { L: () => de, a: () => Ke, b: () => Ue, c: () => st, d: () => bt, g: () => y });
      const de = 'ionViewWillEnter',
        Ke = 'ionViewDidEnter',
        Ue = 'ionViewWillLeave',
        st = 'ionViewDidLeave',
        bt = 'ionViewWillUnload',
        y = D => (D.classList.contains('ion-page') ? D : D.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs') || D);
    },
    3503: (cn, vt, ne) => {
      'use strict';
      ne.d(vt, { c: () => J });
      var de = ne(8476),
        Ke = ne(5638);
      let Ue;
      const bt = G => G.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
        Fe = G => (
          void 0 === Ue && (Ue = void 0 === G.style.animationName && void 0 !== G.style.webkitAnimationName ? '-webkit-' : ''), Ue
        ),
        S = (G, P, x) => {
          const me = P.startsWith('animation') ? Fe(G) : '';
          G.style.setProperty(me + P, x);
        },
        Me = (G, P) => {
          const x = P.startsWith('animation') ? Fe(G) : '';
          G.style.removeProperty(x + P);
        },
        he = [],
        oe = (G = [], P) => {
          if (void 0 !== P) {
            const x = Array.isArray(P) ? P : [P];
            return [...G, ...x];
          }
          return G;
        },
        J = G => {
          let P,
            x,
            me,
            De,
            We,
            Ee,
            b,
            xe,
            U,
            ie,
            Pe,
            Rt,
            Xe,
            Ne = [],
            y = [],
            D = [],
            M = !1,
            L = {},
            N = [],
            W = [],
            Ie = {},
            tt = 0,
            Bt = !1,
            Z = !1,
            Et = !0,
            qe = !1,
            xt = !0,
            Fn = !1;
          const Zt = G,
            tr = [],
            yt = [],
            wn = [],
            qt = [],
            ae = [],
            H = [],
            X = [],
            Qe = [],
            Tt = [],
            Yt = [],
            Xt = [],
            hn = 'function' == typeof AnimationEffect || (void 0 !== de.w && 'function' == typeof de.w.AnimationEffect),
            Gt = 'function' == typeof Element && 'function' == typeof Element.prototype.animate && hn,
            ar = () => Xt,
            Ii = (k, _e) => {
              const f = _e.findIndex(p => p.c === k);
              f > -1 && _e.splice(f, 1);
            },
            bo = (k, _e) => ((_e?.oneTimeCallback ? yt : tr).push({ c: k, o: _e }), Xe),
            Wr = () => {
              if (Gt)
                Xt.forEach(k => {
                  k.cancel();
                }),
                  (Xt.length = 0);
              else {
                const k = qt.slice();
                (0, Ke.r)(() => {
                  k.forEach(_e => {
                    Me(_e, 'animation-name'),
                      Me(_e, 'animation-duration'),
                      Me(_e, 'animation-timing-function'),
                      Me(_e, 'animation-iteration-count'),
                      Me(_e, 'animation-delay'),
                      Me(_e, 'animation-play-state'),
                      Me(_e, 'animation-fill-mode'),
                      Me(_e, 'animation-direction');
                  });
                });
              }
            },
            w = () => {
              H.forEach(k => {
                k?.parentNode && k.parentNode.removeChild(k);
              }),
                (H.length = 0);
            },
            en = () => (void 0 !== We ? We : b ? b.getFill() : 'both'),
            _t = () => (void 0 !== U ? U : void 0 !== Ee ? Ee : b ? b.getDirection() : 'normal'),
            Sn = () => (Bt ? 'linear' : void 0 !== me ? me : b ? b.getEasing() : 'linear'),
            wt = () => (Z ? 0 : void 0 !== ie ? ie : void 0 !== x ? x : b ? b.getDuration() : 0),
            sn = () => (void 0 !== De ? De : b ? b.getIterations() : 1),
            Le = () => (void 0 !== Pe ? Pe : void 0 !== P ? P : b ? b.getDelay() : 0),
            Ye = () => {
              0 !== tt &&
                (tt--,
                0 === tt &&
                  ((() => {
                    we(), Tt.forEach(_ => _()), Yt.forEach(_ => _());
                    const k = Et ? 1 : 0,
                      _e = N,
                      f = W,
                      p = Ie;
                    qt.forEach(_ => {
                      const C = _.classList;
                      _e.forEach(j => C.add(j)), f.forEach(j => C.remove(j));
                      for (const j in p) p.hasOwnProperty(j) && S(_, j, p[j]);
                    }),
                      (ie = void 0),
                      (U = void 0),
                      (Pe = void 0),
                      tr.forEach(_ => _.c(k, Xe)),
                      yt.forEach(_ => _.c(k, Xe)),
                      (yt.length = 0),
                      (xt = !0),
                      Et && (qe = !0),
                      (Et = !0);
                  })(),
                  b && b.animationFinish()));
            },
            I = (k = !0) => {
              w();
              const _e = (G => (
                G.forEach(P => {
                  for (const x in P)
                    if (P.hasOwnProperty(x)) {
                      const me = P[x];
                      if ('easing' === x) (P['animation-timing-function'] = me), delete P[x];
                      else {
                        const De = bt(x);
                        De !== x && ((P[De] = me), delete P[x]);
                      }
                    }
                }),
                G
              ))(Ne);
              qt.forEach(f => {
                if (_e.length > 0) {
                  const p = ((G = []) =>
                    G.map(P => {
                      const x = P.offset,
                        me = [];
                      for (const De in P) P.hasOwnProperty(De) && 'offset' !== De && me.push(`${De}: ${P[De]};`);
                      return `${100 * x}% { ${me.join(' ')} }`;
                    }).join(' '))(_e);
                  Rt =
                    void 0 !== G
                      ? G
                      : (G => {
                          let P = he.indexOf(G);
                          return P < 0 && (P = he.push(G) - 1), `ion-animation-${P}`;
                        })(p);
                  const _ = ((G, P, x) => {
                    var me;
                    const De = (G => {
                        const P = void 0 !== G.getRootNode ? G.getRootNode() : G;
                        return P.head || P;
                      })(x),
                      We = Fe(x),
                      Ee = De.querySelector('#' + G);
                    if (Ee) return Ee;
                    const Ne = (null !== (me = x.ownerDocument) && void 0 !== me ? me : document).createElement('style');
                    return (
                      (Ne.id = G),
                      (Ne.textContent = `@${We}keyframes ${G} { ${P} } @${We}keyframes ${G}-alt { ${P} }`),
                      De.appendChild(Ne),
                      Ne
                    );
                  })(Rt, p, f);
                  H.push(_),
                    S(f, 'animation-duration', `${wt()}ms`),
                    S(f, 'animation-timing-function', Sn()),
                    S(f, 'animation-delay', `${Le()}ms`),
                    S(f, 'animation-fill-mode', en()),
                    S(f, 'animation-direction', _t());
                  const C = sn() === 1 / 0 ? 'infinite' : sn().toString();
                  S(f, 'animation-iteration-count', C),
                    S(f, 'animation-play-state', 'paused'),
                    k && S(f, 'animation-name', `${_.id}-alt`),
                    (0, Ke.r)(() => {
                      S(f, 'animation-name', _.id || null);
                    });
                }
              });
            },
            ft = (k = !0) => {
              (() => {
                X.forEach(p => p()), Qe.forEach(p => p());
                const k = y,
                  _e = D,
                  f = L;
                qt.forEach(p => {
                  const _ = p.classList;
                  k.forEach(C => _.add(C)), _e.forEach(C => _.remove(C));
                  for (const C in f) f.hasOwnProperty(C) && S(p, C, f[C]);
                });
              })(),
                Ne.length > 0 &&
                  (Gt
                    ? (qt.forEach(k => {
                        const _e = k.animate(Ne, {
                          id: Zt,
                          delay: Le(),
                          duration: wt(),
                          easing: Sn(),
                          iterations: sn(),
                          fill: en(),
                          direction: _t(),
                        });
                        _e.pause(), Xt.push(_e);
                      }),
                      Xt.length > 0 &&
                        (Xt[0].onfinish = () => {
                          Ye();
                        }))
                    : I(k)),
                (M = !0);
            },
            ht = k => {
              if (((k = Math.min(Math.max(k, 0), 0.9999)), Gt))
                Xt.forEach(_e => {
                  (_e.currentTime = _e.effect.getComputedTiming().delay + wt() * k), _e.pause();
                });
              else {
                const _e = `-${wt() * k}ms`;
                qt.forEach(f => {
                  Ne.length > 0 && (S(f, 'animation-delay', _e), S(f, 'animation-play-state', 'paused'));
                });
              }
            },
            fn = k => {
              Xt.forEach(_e => {
                _e.effect.updateTiming({ delay: Le(), duration: wt(), easing: Sn(), iterations: sn(), fill: en(), direction: _t() });
              }),
                void 0 !== k && ht(k);
            },
            ot = (k = !0, _e) => {
              (0, Ke.r)(() => {
                qt.forEach(f => {
                  S(f, 'animation-name', Rt || null),
                    S(f, 'animation-duration', `${wt()}ms`),
                    S(f, 'animation-timing-function', Sn()),
                    S(f, 'animation-delay', void 0 !== _e ? `-${_e * wt()}ms` : `${Le()}ms`),
                    S(f, 'animation-fill-mode', en() || null),
                    S(f, 'animation-direction', _t() || null);
                  const p = sn() === 1 / 0 ? 'infinite' : sn().toString();
                  S(f, 'animation-iteration-count', p),
                    k && S(f, 'animation-name', `${Rt}-alt`),
                    (0, Ke.r)(() => {
                      S(f, 'animation-name', Rt || null);
                    });
                });
              });
            },
            qn = (k = !1, _e = !0, f) => (
              k &&
                ae.forEach(p => {
                  p.update(k, _e, f);
                }),
              Gt ? fn(f) : ot(_e, f),
              Xe
            ),
            ee = () => {
              M &&
                (Gt
                  ? Xt.forEach(k => {
                      k.pause();
                    })
                  : qt.forEach(k => {
                      S(k, 'animation-play-state', 'paused');
                    }),
                (Fn = !0));
            },
            z = () => {
              (xe = void 0), Ye();
            },
            we = () => {
              xe && clearTimeout(xe);
            },
            Ft = k =>
              new Promise(_e => {
                k?.sync && ((Z = !0), bo(() => (Z = !1), { oneTimeCallback: !0 })),
                  M || ft(),
                  qe && (Gt ? (ht(0), fn()) : ot(), (qe = !1)),
                  xt && ((tt = ae.length + 1), (xt = !1));
                const f = () => {
                    Ii(p, yt), _e();
                  },
                  p = () => {
                    Ii(f, wn), _e();
                  };
                bo(p, { oneTimeCallback: !0 }),
                  ((k, _e) => {
                    wn.push({ c: k, o: { oneTimeCallback: !0 } });
                  })(f),
                  ae.forEach(_ => {
                    _.play();
                  }),
                  Gt
                    ? (Xt.forEach(k => {
                        k.play();
                      }),
                      (0 === Ne.length || 0 === qt.length) && Ye())
                    : (() => {
                        if (
                          (we(),
                          (0, Ke.r)(() => {
                            qt.forEach(k => {
                              Ne.length > 0 && S(k, 'animation-play-state', 'running');
                            });
                          }),
                          0 === Ne.length || 0 === qt.length)
                        )
                          Ye();
                        else {
                          const k = Le() || 0,
                            _e = wt() || 0,
                            f = sn() || 1;
                          isFinite(f) && (xe = setTimeout(z, k + _e * f + 100)),
                            ((G, P) => {
                              let x;
                              const me = { passive: !0 },
                                We = Ee => {
                                  G === Ee.target &&
                                    (x && x(),
                                    we(),
                                    (0, Ke.r)(() => {
                                      qt.forEach(k => {
                                        Me(k, 'animation-duration'), Me(k, 'animation-delay'), Me(k, 'animation-play-state');
                                      }),
                                        (0, Ke.r)(Ye);
                                    }));
                                };
                              G &&
                                (G.addEventListener('webkitAnimationEnd', We, me),
                                G.addEventListener('animationend', We, me),
                                (x = () => {
                                  G.removeEventListener('webkitAnimationEnd', We, me), G.removeEventListener('animationend', We, me);
                                }));
                            })(qt[0]);
                        }
                      })(),
                  (Fn = !1);
              }),
            gn = (k, _e) => {
              const f = Ne[0];
              return void 0 === f || (void 0 !== f.offset && 0 !== f.offset) ? (Ne = [{ offset: 0, [k]: _e }, ...Ne]) : (f[k] = _e), Xe;
            };
          return (Xe = {
            parentAnimation: b,
            elements: qt,
            childAnimations: ae,
            id: Zt,
            animationFinish: Ye,
            from: gn,
            to: (k, _e) => {
              const f = Ne[Ne.length - 1];
              return void 0 === f || (void 0 !== f.offset && 1 !== f.offset) ? (Ne = [...Ne, { offset: 1, [k]: _e }]) : (f[k] = _e), Xe;
            },
            fromTo: (k, _e, f) => gn(k, _e).to(k, f),
            parent: k => ((b = k), Xe),
            play: Ft,
            pause: () => (
              ae.forEach(k => {
                k.pause();
              }),
              ee(),
              Xe
            ),
            stop: () => {
              ae.forEach(k => {
                k.stop();
              }),
                M && (Wr(), (M = !1)),
                (Bt = !1),
                (Z = !1),
                (xt = !0),
                (U = void 0),
                (ie = void 0),
                (Pe = void 0),
                (tt = 0),
                (qe = !1),
                (Et = !0),
                (Fn = !1),
                wn.forEach(k => k.c(0, Xe)),
                (wn.length = 0);
            },
            destroy: k => (
              ae.forEach(_e => {
                _e.destroy(k);
              }),
              (k => {
                Wr(), k && w();
              })(k),
              (qt.length = 0),
              (ae.length = 0),
              (Ne.length = 0),
              (tr.length = 0),
              (yt.length = 0),
              (M = !1),
              (xt = !0),
              Xe
            ),
            keyframes: k => {
              const _e = Ne !== k;
              return (
                (Ne = k),
                _e &&
                  (k => {
                    Gt
                      ? ar().forEach(_e => {
                          const f = _e.effect;
                          if (f.setKeyframes) f.setKeyframes(k);
                          else {
                            const p = new KeyframeEffect(f.target, k, f.getTiming());
                            _e.effect = p;
                          }
                        })
                      : I();
                  })(Ne),
                Xe
              );
            },
            addAnimation: k => {
              if (null != k)
                if (Array.isArray(k)) for (const _e of k) _e.parent(Xe), ae.push(_e);
                else k.parent(Xe), ae.push(k);
              return Xe;
            },
            addElement: k => {
              if (null != k)
                if (1 === k.nodeType) qt.push(k);
                else if (k.length >= 0) for (let _e = 0; _e < k.length; _e++) qt.push(k[_e]);
                else console.error('Invalid addElement value');
              return Xe;
            },
            update: qn,
            fill: k => ((We = k), qn(!0), Xe),
            direction: k => ((Ee = k), qn(!0), Xe),
            iterations: k => ((De = k), qn(!0), Xe),
            duration: k => (!Gt && 0 === k && (k = 1), (x = k), qn(!0), Xe),
            easing: k => ((me = k), qn(!0), Xe),
            delay: k => ((P = k), qn(!0), Xe),
            getWebAnimations: ar,
            getKeyframes: () => Ne,
            getFill: en,
            getDirection: _t,
            getDelay: Le,
            getIterations: sn,
            getEasing: Sn,
            getDuration: wt,
            afterAddRead: k => (Tt.push(k), Xe),
            afterAddWrite: k => (Yt.push(k), Xe),
            afterClearStyles: (k = []) => {
              for (const _e of k) Ie[_e] = '';
              return Xe;
            },
            afterStyles: (k = {}) => ((Ie = k), Xe),
            afterRemoveClass: k => ((W = oe(W, k)), Xe),
            afterAddClass: k => ((N = oe(N, k)), Xe),
            beforeAddRead: k => (X.push(k), Xe),
            beforeAddWrite: k => (Qe.push(k), Xe),
            beforeClearStyles: (k = []) => {
              for (const _e of k) L[_e] = '';
              return Xe;
            },
            beforeStyles: (k = {}) => ((L = k), Xe),
            beforeRemoveClass: k => ((D = oe(D, k)), Xe),
            beforeAddClass: k => ((y = oe(y, k)), Xe),
            onFinish: bo,
            isRunning: () => 0 !== tt && !Fn,
            progressStart: (k = !1, _e) => (
              ae.forEach(f => {
                f.progressStart(k, _e);
              }),
              ee(),
              (Bt = k),
              M || ft(),
              qn(!1, !0, _e),
              Xe
            ),
            progressStep: k => (
              ae.forEach(_e => {
                _e.progressStep(k);
              }),
              ht(k),
              Xe
            ),
            progressEnd: (k, _e, f) => (
              (Bt = !1),
              ae.forEach(p => {
                p.progressEnd(k, _e, f);
              }),
              void 0 !== f && (ie = f),
              (qe = !1),
              (Et = !0),
              0 === k
                ? ((U = 'reverse' === _t() ? 'normal' : 'reverse'),
                  'reverse' === U && (Et = !1),
                  Gt ? (qn(), ht(1 - _e)) : ((Pe = (1 - _e) * wt() * -1), qn(!1, !1)))
                : 1 === k && (Gt ? (qn(), ht(_e)) : ((Pe = _e * wt() * -1), qn(!1, !1))),
              void 0 !== k && !b && Ft(),
              Xe
            ),
          });
        };
    },
    464: (cn, vt, ne) => {
      'use strict';
      ne.d(vt, { E: () => et, a: () => de, s: () => Me });
      const de = he => {
          try {
            if (he instanceof S) return he.value;
            if (!st() || 'string' != typeof he || '' === he) return he;
            if (he.includes('onload=')) return '';
            const Re = document.createDocumentFragment(),
              re = document.createElement('div');
            Re.appendChild(re),
              (re.innerHTML = he),
              Fe.forEach(G => {
                const P = Re.querySelectorAll(G);
                for (let x = P.length - 1; x >= 0; x--) {
                  const me = P[x];
                  me.parentNode ? me.parentNode.removeChild(me) : Re.removeChild(me);
                  const De = Ue(me);
                  for (let We = 0; We < De.length; We++) Ke(De[We]);
                }
              });
            const fe = Ue(Re);
            for (let G = 0; G < fe.length; G++) Ke(fe[G]);
            const oe = document.createElement('div');
            oe.appendChild(Re);
            const J = oe.querySelector('div');
            return null !== J ? J.innerHTML : oe.innerHTML;
          } catch (Re) {
            return console.error(Re), '';
          }
        },
        Ke = he => {
          if (he.nodeType && 1 !== he.nodeType) return;
          if (typeof NamedNodeMap < 'u' && !(he.attributes instanceof NamedNodeMap)) return void he.remove();
          for (let re = he.attributes.length - 1; re >= 0; re--) {
            const fe = he.attributes.item(re),
              oe = fe.name;
            if (!bt.includes(oe.toLowerCase())) {
              he.removeAttribute(oe);
              continue;
            }
            const J = fe.value,
              G = he[oe];
            ((null != J && J.toLowerCase().includes('javascript:')) || (null != G && G.toLowerCase().includes('javascript:'))) &&
              he.removeAttribute(oe);
          }
          const Re = Ue(he);
          for (let re = 0; re < Re.length; re++) Ke(Re[re]);
        },
        Ue = he => (null != he.children ? he.children : he.childNodes),
        st = () => {
          var he;
          const Re = window,
            re = null === (he = Re?.Ionic) || void 0 === he ? void 0 : he.config;
          return !re || (re.get ? re.get('sanitizerEnabled', !0) : !0 === re.sanitizerEnabled || void 0 === re.sanitizerEnabled);
        },
        bt = ['class', 'id', 'href', 'src', 'name', 'slot'],
        Fe = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
      class S {
        constructor(Re) {
          this.value = Re;
        }
      }
      const Me = he => {
          const Re = window,
            re = Re.Ionic;
          if (!re || !re.config || 'Object' === re.config.constructor.name)
            return (Re.Ionic = Re.Ionic || {}), (Re.Ionic.config = Object.assign(Object.assign({}, Re.Ionic.config), he)), Re.Ionic.config;
        },
        et = !1;
    },
    5938: (cn, vt, ne) => {
      'use strict';
      ne.d(vt, { C: () => bt, a: () => Ue, d: () => st });
      var de = ne(467),
        Ke = ne(5638);
      const Ue = (function () {
          var Fe = (0, de.A)(function* (S, Me, it, et, he, Re) {
            var re;
            if (S) return S.attachViewToDom(Me, it, he, et);
            if (!(Re || 'string' == typeof it || it instanceof HTMLElement)) throw new Error('framework delegate is missing');
            const fe = 'string' == typeof it ? (null === (re = Me.ownerDocument) || void 0 === re ? void 0 : re.createElement(it)) : it;
            return (
              et && et.forEach(oe => fe.classList.add(oe)),
              he && Object.assign(fe, he),
              Me.appendChild(fe),
              yield new Promise(oe => (0, Ke.c)(fe, oe)),
              fe
            );
          });
          return function (Me, it, et, he, Re, re) {
            return Fe.apply(this, arguments);
          };
        })(),
        st = (Fe, S) => {
          if (S) {
            if (Fe) return Fe.removeViewFromDom(S.parentElement, S);
            S.remove();
          }
          return Promise.resolve();
        },
        bt = () => {
          let Fe, S;
          return {
            attachViewToDom: (function () {
              var et = (0, de.A)(function* (he, Re, re = {}, fe = []) {
                var oe, J;
                let G;
                if (((Fe = he), Re)) {
                  const x =
                    'string' == typeof Re ? (null === (oe = Fe.ownerDocument) || void 0 === oe ? void 0 : oe.createElement(Re)) : Re;
                  fe.forEach(me => x.classList.add(me)),
                    Object.assign(x, re),
                    Fe.appendChild(x),
                    (G = x),
                    yield new Promise(me => (0, Ke.c)(x, me));
                } else if (
                  Fe.children.length > 0 &&
                  ('ION-MODAL' === Fe.tagName || 'ION-POPOVER' === Fe.tagName) &&
                  !(G = Fe.children[0]).classList.contains('ion-delegate-host')
                ) {
                  const me = null === (J = Fe.ownerDocument) || void 0 === J ? void 0 : J.createElement('div');
                  me.classList.add('ion-delegate-host'),
                    fe.forEach(De => me.classList.add(De)),
                    me.append(...Fe.children),
                    Fe.appendChild(me),
                    (G = me);
                }
                const P = document.querySelector('ion-app') || document.body;
                return (S = document.createComment('ionic teleport')), Fe.parentNode.insertBefore(S, Fe), P.appendChild(Fe), G ?? Fe;
              });
              return function (Re, re) {
                return et.apply(this, arguments);
              };
            })(),
            removeViewFromDom: () => (Fe && S && (S.parentNode.insertBefore(Fe, S), S.remove()), Promise.resolve()),
          };
        };
    },
    8221: (cn, vt, ne) => {
      'use strict';
      ne.d(vt, { G: () => bt });
      class Ke {
        constructor(S, Me, it, et, he) {
          (this.id = Me), (this.name = it), (this.disableScroll = he), (this.priority = 1e6 * et + Me), (this.ctrl = S);
        }
        canStart() {
          return !!this.ctrl && this.ctrl.canStart(this.name);
        }
        start() {
          return !!this.ctrl && this.ctrl.start(this.name, this.id, this.priority);
        }
        capture() {
          if (!this.ctrl) return !1;
          const S = this.ctrl.capture(this.name, this.id, this.priority);
          return S && this.disableScroll && this.ctrl.disableScroll(this.id), S;
        }
        release() {
          this.ctrl && (this.ctrl.release(this.id), this.disableScroll && this.ctrl.enableScroll(this.id));
        }
        destroy() {
          this.release(), (this.ctrl = void 0);
        }
      }
      class Ue {
        constructor(S, Me, it, et) {
          (this.id = Me), (this.disable = it), (this.disableScroll = et), (this.ctrl = S);
        }
        block() {
          if (this.ctrl) {
            if (this.disable) for (const S of this.disable) this.ctrl.disableGesture(S, this.id);
            this.disableScroll && this.ctrl.disableScroll(this.id);
          }
        }
        unblock() {
          if (this.ctrl) {
            if (this.disable) for (const S of this.disable) this.ctrl.enableGesture(S, this.id);
            this.disableScroll && this.ctrl.enableScroll(this.id);
          }
        }
        destroy() {
          this.unblock(), (this.ctrl = void 0);
        }
      }
      const st = 'backdrop-no-scroll',
        bt = new (class de {
          constructor() {
            (this.gestureId = 0), (this.requestedStart = new Map()), (this.disabledGestures = new Map()), (this.disabledScroll = new Set());
          }
          createGesture(S) {
            var Me;
            return new Ke(this, this.newID(), S.name, null !== (Me = S.priority) && void 0 !== Me ? Me : 0, !!S.disableScroll);
          }
          createBlocker(S = {}) {
            return new Ue(this, this.newID(), S.disable, !!S.disableScroll);
          }
          start(S, Me, it) {
            return this.canStart(S) ? (this.requestedStart.set(Me, it), !0) : (this.requestedStart.delete(Me), !1);
          }
          capture(S, Me, it) {
            if (!this.start(S, Me, it)) return !1;
            const et = this.requestedStart;
            let he = -1e4;
            if (
              (et.forEach(Re => {
                he = Math.max(he, Re);
              }),
              he === it)
            ) {
              (this.capturedId = Me), et.clear();
              const Re = new CustomEvent('ionGestureCaptured', { detail: { gestureName: S } });
              return document.dispatchEvent(Re), !0;
            }
            return et.delete(Me), !1;
          }
          release(S) {
            this.requestedStart.delete(S), this.capturedId === S && (this.capturedId = void 0);
          }
          disableGesture(S, Me) {
            let it = this.disabledGestures.get(S);
            void 0 === it && ((it = new Set()), this.disabledGestures.set(S, it)), it.add(Me);
          }
          enableGesture(S, Me) {
            const it = this.disabledGestures.get(S);
            void 0 !== it && it.delete(Me);
          }
          disableScroll(S) {
            this.disabledScroll.add(S), 1 === this.disabledScroll.size && document.body.classList.add(st);
          }
          enableScroll(S) {
            this.disabledScroll.delete(S), 0 === this.disabledScroll.size && document.body.classList.remove(st);
          }
          canStart(S) {
            return !(void 0 !== this.capturedId || this.isDisabled(S));
          }
          isCaptured() {
            return void 0 !== this.capturedId;
          }
          isScrollDisabled() {
            return this.disabledScroll.size > 0;
          }
          isDisabled(S) {
            const Me = this.disabledGestures.get(S);
            return !!(Me && Me.size > 0);
          }
          newID() {
            return this.gestureId++, this.gestureId;
          }
        })();
    },
    3113: (cn, vt, ne) => {
      'use strict';
      ne.r(vt),
        ne.d(vt, {
          MENU_BACK_BUTTON_PRIORITY: () => it,
          OVERLAY_BACK_BUTTON_PRIORITY: () => Me,
          blockHardwareBackButton: () => Fe,
          shouldUseCloseWatcher: () => bt,
          startHardwareBackButton: () => S,
        });
      var de = ne(467),
        Ke = ne(8476),
        Ue = ne(611);
      ne(4363);
      const bt = () => Ue.c.get('experimentalCloseWatcher', !1) && void 0 !== Ke.w && 'CloseWatcher' in Ke.w,
        Fe = () => {
          document.addEventListener('backbutton', () => {});
        },
        S = () => {
          const et = document;
          let he = !1;
          const Re = () => {
            if (he) return;
            let re = 0,
              fe = [];
            const oe = new CustomEvent('ionBackButton', {
              bubbles: !1,
              detail: {
                register(P, x) {
                  fe.push({ priority: P, handler: x, id: re++ });
                },
              },
            });
            et.dispatchEvent(oe);
            const J = (function () {
                var P = (0, de.A)(function* (x) {
                  try {
                    if (x?.handler) {
                      const me = x.handler(G);
                      null != me && (yield me);
                    }
                  } catch (me) {
                    console.error(me);
                  }
                });
                return function (me) {
                  return P.apply(this, arguments);
                };
              })(),
              G = () => {
                if (fe.length > 0) {
                  let P = { priority: Number.MIN_SAFE_INTEGER, handler: () => {}, id: -1 };
                  fe.forEach(x => {
                    x.priority >= P.priority && (P = x);
                  }),
                    (he = !0),
                    (fe = fe.filter(x => x.id !== P.id)),
                    J(P).then(() => (he = !1));
                }
              };
            G();
          };
          if (bt()) {
            let re;
            const fe = () => {
              re?.destroy(),
                (re = new Ke.w.CloseWatcher()),
                (re.onclose = () => {
                  Re(), fe();
                });
            };
            fe();
          } else et.addEventListener('backbutton', Re);
        },
        Me = 100,
        it = 99;
    },
    5638: (cn, vt, ne) => {
      'use strict';
      ne.d(vt, {
        a: () => Me,
        b: () => it,
        c: () => Ue,
        d: () => J,
        e: () => oe,
        f: () => fe,
        g: () => et,
        h: () => re,
        i: () => S,
        j: () => We,
        k: () => bt,
        l: () => G,
        m: () => st,
        n: () => Re,
        o: () => P,
        p: () => De,
        q: () => Ee,
        r: () => he,
        s: () => Ne,
        t: () => de,
        u: () => x,
        v: () => me,
      });
      const de = (y, D = 0) =>
          new Promise(M => {
            Ke(y, D, M);
          }),
        Ke = (y, D = 0, M) => {
          let b, L;
          const N = { passive: !0 },
            Ie = () => {
              b && b();
            },
            tt = Bt => {
              (void 0 === Bt || y === Bt.target) && (Ie(), M(Bt));
            };
          return (
            y &&
              (y.addEventListener('webkitTransitionEnd', tt, N),
              y.addEventListener('transitionend', tt, N),
              (L = setTimeout(tt, D + 500)),
              (b = () => {
                void 0 !== L && (clearTimeout(L), (L = void 0)),
                  y.removeEventListener('webkitTransitionEnd', tt, N),
                  y.removeEventListener('transitionend', tt, N);
              })),
            Ie
          );
        },
        Ue = (y, D) => {
          y.componentOnReady ? y.componentOnReady().then(M => D(M)) : he(() => D(y));
        },
        st = y => void 0 !== y.componentOnReady,
        bt = (y, D = []) => {
          const M = {};
          return (
            D.forEach(b => {
              y.hasAttribute(b) && (null !== y.getAttribute(b) && (M[b] = y.getAttribute(b)), y.removeAttribute(b));
            }),
            M
          );
        },
        Fe = [
          'role',
          'aria-activedescendant',
          'aria-atomic',
          'aria-autocomplete',
          'aria-braillelabel',
          'aria-brailleroledescription',
          'aria-busy',
          'aria-checked',
          'aria-colcount',
          'aria-colindex',
          'aria-colindextext',
          'aria-colspan',
          'aria-controls',
          'aria-current',
          'aria-describedby',
          'aria-description',
          'aria-details',
          'aria-disabled',
          'aria-errormessage',
          'aria-expanded',
          'aria-flowto',
          'aria-haspopup',
          'aria-hidden',
          'aria-invalid',
          'aria-keyshortcuts',
          'aria-label',
          'aria-labelledby',
          'aria-level',
          'aria-live',
          'aria-multiline',
          'aria-multiselectable',
          'aria-orientation',
          'aria-owns',
          'aria-placeholder',
          'aria-posinset',
          'aria-pressed',
          'aria-readonly',
          'aria-relevant',
          'aria-required',
          'aria-roledescription',
          'aria-rowcount',
          'aria-rowindex',
          'aria-rowindextext',
          'aria-rowspan',
          'aria-selected',
          'aria-setsize',
          'aria-sort',
          'aria-valuemax',
          'aria-valuemin',
          'aria-valuenow',
          'aria-valuetext',
        ],
        S = (y, D) => {
          let M = Fe;
          return D && D.length > 0 && (M = M.filter(b => !D.includes(b))), bt(y, M);
        },
        Me = (y, D, M, b) => {
          var L;
          if (typeof window < 'u') {
            const N = window,
              W = null === (L = N?.Ionic) || void 0 === L ? void 0 : L.config;
            if (W) {
              const Ie = W.get('_ael');
              if (Ie) return Ie(y, D, M, b);
              if (W._ael) return W._ael(y, D, M, b);
            }
          }
          return y.addEventListener(D, M, b);
        },
        it = (y, D, M, b) => {
          var L;
          if (typeof window < 'u') {
            const N = window,
              W = null === (L = N?.Ionic) || void 0 === L ? void 0 : L.config;
            if (W) {
              const Ie = W.get('_rel');
              if (Ie) return Ie(y, D, M, b);
              if (W._rel) return W._rel(y, D, M, b);
            }
          }
          return y.removeEventListener(D, M, b);
        },
        et = (y, D = y) => y.shadowRoot || D,
        he = y =>
          'function' == typeof __zone_symbol__requestAnimationFrame
            ? __zone_symbol__requestAnimationFrame(y)
            : 'function' == typeof requestAnimationFrame
              ? requestAnimationFrame(y)
              : setTimeout(y),
        Re = y => !!y.shadowRoot && !!y.attachShadow,
        re = y => {
          const D = y.closest('ion-item');
          return D ? D.querySelector('ion-label') : null;
        },
        fe = y => {
          if ((y.focus(), y.classList.contains('ion-focusable'))) {
            const D = y.closest('ion-app');
            D && D.setFocus([y]);
          }
        },
        oe = (y, D) => {
          let M;
          const b = y.getAttribute('aria-labelledby'),
            L = y.id;
          let N = null !== b && '' !== b.trim() ? b : D + '-lbl',
            W = null !== b && '' !== b.trim() ? document.getElementById(b) : re(y);
          return (
            W
              ? (null === b && (W.id = N), (M = W.textContent), W.setAttribute('aria-hidden', 'true'))
              : '' !== L.trim() &&
                ((W = document.querySelector(`label[for="${L}"]`)),
                W && ('' !== W.id ? (N = W.id) : (W.id = N = `${L}-lbl`), (M = W.textContent))),
            { label: W, labelId: N, labelText: M }
          );
        },
        J = (y, D, M, b, L) => {
          if (y || Re(D)) {
            let N = D.querySelector('input.aux-input');
            N || ((N = D.ownerDocument.createElement('input')), (N.type = 'hidden'), N.classList.add('aux-input'), D.appendChild(N)),
              (N.disabled = L),
              (N.name = M),
              (N.value = b || '');
          }
        },
        G = (y, D, M) => Math.max(y, Math.min(D, M)),
        P = (y, D) => {
          if (!y) {
            const M = 'ASSERT: ' + D;
            throw (console.error(M), new Error(M));
          }
        },
        x = y => y.timeStamp || Date.now(),
        me = y => {
          if (y) {
            const D = y.changedTouches;
            if (D && D.length > 0) {
              const M = D[0];
              return { x: M.clientX, y: M.clientY };
            }
            if (void 0 !== y.pageX) return { x: y.pageX, y: y.pageY };
          }
          return { x: 0, y: 0 };
        },
        De = y => {
          const D = 'rtl' === document.dir;
          switch (y) {
            case 'start':
              return D;
            case 'end':
              return !D;
            default:
              throw new Error(`"${y}" is not a valid value for [side]. Use "start" or "end" instead.`);
          }
        },
        We = (y, D) => {
          const M = y._original || y;
          return { _original: y, emit: Ee(M.emit.bind(M), D) };
        },
        Ee = (y, D = 0) => {
          let M;
          return (...b) => {
            clearTimeout(M), (M = setTimeout(y, D, ...b));
          };
        },
        Ne = (y, D) => {
          if ((y ?? (y = {}), D ?? (D = {}), y === D)) return !0;
          const M = Object.keys(y);
          if (M.length !== Object.keys(D).length) return !1;
          for (const b of M) if (!(b in D) || y[b] !== D[b]) return !1;
          return !0;
        };
    },
    405: (cn, vt, ne) => {
      'use strict';
      ne.r(vt), ne.d(vt, { GESTURE_CONTROLLER: () => de.G, createGesture: () => it });
      var de = ne(8221);
      const Ke = (re, fe, oe, J) => {
          const G = Ue(re) ? { capture: !!J.capture, passive: !!J.passive } : !!J.capture;
          let P, x;
          return (
            re.__zone_symbol__addEventListener
              ? ((P = '__zone_symbol__addEventListener'), (x = '__zone_symbol__removeEventListener'))
              : ((P = 'addEventListener'), (x = 'removeEventListener')),
            re[P](fe, oe, G),
            () => {
              re[x](fe, oe, G);
            }
          );
        },
        Ue = re => {
          if (void 0 === st)
            try {
              const fe = Object.defineProperty({}, 'passive', {
                get: () => {
                  st = !0;
                },
              });
              re.addEventListener('optsTest', () => {}, fe);
            } catch {
              st = !1;
            }
          return !!st;
        };
      let st;
      const S = re => (re instanceof Document ? re : re.ownerDocument),
        it = re => {
          let fe = !1,
            oe = !1,
            J = !0,
            G = !1;
          const P = Object.assign({ disableScroll: !1, direction: 'x', gesturePriority: 0, passive: !0, maxAngle: 40, threshold: 10 }, re),
            x = P.canStart,
            me = P.onWillStart,
            De = P.onStart,
            We = P.onEnd,
            Ee = P.notCaptured,
            Ne = P.onMove,
            y = P.threshold,
            D = P.passive,
            M = P.blurOnStart,
            b = {
              type: 'pan',
              startX: 0,
              startY: 0,
              startTime: 0,
              currentX: 0,
              currentY: 0,
              velocityX: 0,
              velocityY: 0,
              deltaX: 0,
              deltaY: 0,
              currentTime: 0,
              event: void 0,
              data: void 0,
            },
            L = ((re, fe, oe) => {
              const J = oe * (Math.PI / 180),
                G = 'x' === re,
                P = Math.cos(J),
                x = fe * fe;
              let me = 0,
                De = 0,
                We = !1,
                Ee = 0;
              return {
                start(Ne, y) {
                  (me = Ne), (De = y), (Ee = 0), (We = !0);
                },
                detect(Ne, y) {
                  if (!We) return !1;
                  const D = Ne - me,
                    M = y - De,
                    b = D * D + M * M;
                  if (b < x) return !1;
                  const L = Math.sqrt(b),
                    N = (G ? D : M) / L;
                  return (Ee = N > P ? 1 : N < -P ? -1 : 0), (We = !1), !0;
                },
                isGesture: () => 0 !== Ee,
                getDirection: () => Ee,
              };
            })(P.direction, P.threshold, P.maxAngle),
            N = de.G.createGesture({ name: re.gestureName, priority: re.gesturePriority, disableScroll: re.disableScroll }),
            tt = () => {
              fe && ((G = !1), Ne && Ne(b));
            },
            Bt = () =>
              !!N.capture() &&
              ((fe = !0),
              (J = !1),
              (b.startX = b.currentX),
              (b.startY = b.currentY),
              (b.startTime = b.currentTime),
              me ? me(b).then(xe) : xe(),
              !0),
            xe = () => {
              M &&
                (() => {
                  if (typeof document < 'u') {
                    const qe = document.activeElement;
                    qe?.blur && qe.blur();
                  }
                })(),
                De && De(b),
                (J = !0);
            },
            U = () => {
              (fe = !1), (oe = !1), (G = !1), (J = !0), N.release();
            },
            ie = qe => {
              const xt = fe,
                Rt = J;
              if ((U(), Rt)) {
                if ((et(b, qe), xt)) return void (We && We(b));
                Ee && Ee(b);
              }
            },
            Pe = ((re, fe, oe, J, G) => {
              let P,
                x,
                me,
                De,
                We,
                Ee,
                Ne,
                y = 0;
              const D = Z => {
                  (y = Date.now() + 2e3),
                    fe(Z) &&
                      (!x && oe && (x = Ke(re, 'touchmove', oe, G)),
                      me || (me = Ke(Z.target, 'touchend', b, G)),
                      De || (De = Ke(Z.target, 'touchcancel', b, G)));
                },
                M = Z => {
                  y > Date.now() || (fe(Z) && (!Ee && oe && (Ee = Ke(S(re), 'mousemove', oe, G)), Ne || (Ne = Ke(S(re), 'mouseup', L, G))));
                },
                b = Z => {
                  N(), J && J(Z);
                },
                L = Z => {
                  W(), J && J(Z);
                },
                N = () => {
                  x && x(), me && me(), De && De(), (x = me = De = void 0);
                },
                W = () => {
                  Ee && Ee(), Ne && Ne(), (Ee = Ne = void 0);
                },
                Ie = () => {
                  N(), W();
                },
                tt = (Z = !0) => {
                  Z
                    ? (P || (P = Ke(re, 'touchstart', D, G)), We || (We = Ke(re, 'mousedown', M, G)))
                    : (P && P(), We && We(), (P = We = void 0), Ie());
                };
              return {
                enable: tt,
                stop: Ie,
                destroy: () => {
                  tt(!1), (J = oe = fe = void 0);
                },
              };
            })(
              P.el,
              qe => {
                const xt = Re(qe);
                return (
                  !(
                    oe ||
                    !J ||
                    (he(qe, b),
                    (b.startX = b.currentX),
                    (b.startY = b.currentY),
                    (b.startTime = b.currentTime = xt),
                    (b.velocityX = b.velocityY = b.deltaX = b.deltaY = 0),
                    (b.event = qe),
                    x && !1 === x(b)) ||
                    (N.release(), !N.start())
                  ) && ((oe = !0), 0 === y ? Bt() : (L.start(b.startX, b.startY), !0))
                );
              },
              qe => {
                fe
                  ? !G && J && ((G = !0), et(b, qe), requestAnimationFrame(tt))
                  : (et(b, qe), L.detect(b.currentX, b.currentY) && (!L.isGesture() || !Bt()) && Et());
              },
              ie,
              { capture: !1, passive: D },
            ),
            Et = () => {
              U(), Pe.stop(), Ee && Ee(b);
            };
          return {
            enable(qe = !0) {
              qe || (fe && ie(void 0), U()), Pe.enable(qe);
            },
            destroy() {
              N.destroy(), Pe.destroy();
            },
          };
        },
        et = (re, fe) => {
          if (!fe) return;
          const oe = re.currentX,
            J = re.currentY,
            G = re.currentTime;
          he(fe, re);
          const P = re.currentX,
            x = re.currentY,
            De = (re.currentTime = Re(fe)) - G;
          if (De > 0 && De < 100) {
            const Ee = (x - J) / De;
            (re.velocityX = ((P - oe) / De) * 0.7 + 0.3 * re.velocityX), (re.velocityY = 0.7 * Ee + 0.3 * re.velocityY);
          }
          (re.deltaX = P - re.startX), (re.deltaY = x - re.startY), (re.event = fe);
        },
        he = (re, fe) => {
          let oe = 0,
            J = 0;
          if (re) {
            const G = re.changedTouches;
            if (G && G.length > 0) {
              const P = G[0];
              (oe = P.clientX), (J = P.clientY);
            } else void 0 !== re.pageX && ((oe = re.pageX), (J = re.pageY));
          }
          (fe.currentX = oe), (fe.currentY = J);
        },
        Re = re => re.timeStamp || Date.now();
    },
    5384: (cn, vt, ne) => {
      'use strict';
      ne.d(vt, { m: () => re });
      var de = ne(467),
        Ke = ne(8476),
        Ue = ne(3113),
        st = ne(4929),
        bt = ne(5638),
        Fe = ne(611),
        S = ne(3503);
      const Me = fe => (0, S.c)().duration(fe ? 400 : 300),
        it = fe => {
          let oe, J;
          const G = fe.width + 8,
            P = (0, S.c)(),
            x = (0, S.c)();
          fe.isEndSide ? ((oe = G + 'px'), (J = '0px')) : ((oe = -G + 'px'), (J = '0px')),
            P.addElement(fe.menuInnerEl).fromTo('transform', `translateX(${oe})`, `translateX(${J})`);
          const De = 'ios' === (0, Fe.b)(fe),
            We = De ? 0.2 : 0.25;
          return x.addElement(fe.backdropEl).fromTo('opacity', 0.01, We), Me(De).addAnimation([P, x]);
        },
        et = fe => {
          let oe, J;
          const G = (0, Fe.b)(fe),
            P = fe.width;
          fe.isEndSide ? ((oe = -P + 'px'), (J = P + 'px')) : ((oe = P + 'px'), (J = -P + 'px'));
          const x = (0, S.c)().addElement(fe.menuInnerEl).fromTo('transform', `translateX(${J})`, 'translateX(0px)'),
            me = (0, S.c)().addElement(fe.contentEl).fromTo('transform', 'translateX(0px)', `translateX(${oe})`),
            De = (0, S.c)().addElement(fe.backdropEl).fromTo('opacity', 0.01, 0.32);
          return Me('ios' === G).addAnimation([x, me, De]);
        },
        he = fe => {
          const oe = (0, Fe.b)(fe),
            J = fe.width * (fe.isEndSide ? -1 : 1) + 'px',
            G = (0, S.c)().addElement(fe.contentEl).fromTo('transform', 'translateX(0px)', `translateX(${J})`);
          return Me('ios' === oe).addAnimation(G);
        },
        re = (() => {
          const fe = new Map(),
            oe = [],
            J = (function () {
              var U = (0, de.A)(function* (ie) {
                const Pe = yield Ee(ie, !0);
                return !!Pe && Pe.open();
              });
              return function (Pe) {
                return U.apply(this, arguments);
              };
            })(),
            G = (function () {
              var U = (0, de.A)(function* (ie) {
                const Pe = yield void 0 !== ie ? Ee(ie, !0) : Ne();
                return void 0 !== Pe && Pe.close();
              });
              return function (Pe) {
                return U.apply(this, arguments);
              };
            })(),
            P = (function () {
              var U = (0, de.A)(function* (ie) {
                const Pe = yield Ee(ie, !0);
                return !!Pe && Pe.toggle();
              });
              return function (Pe) {
                return U.apply(this, arguments);
              };
            })(),
            x = (function () {
              var U = (0, de.A)(function* (ie, Pe) {
                const Et = yield Ee(Pe);
                return Et && (Et.disabled = !ie), Et;
              });
              return function (Pe, Et) {
                return U.apply(this, arguments);
              };
            })(),
            me = (function () {
              var U = (0, de.A)(function* (ie, Pe) {
                const Et = yield Ee(Pe);
                return Et && (Et.swipeGesture = ie), Et;
              });
              return function (Pe, Et) {
                return U.apply(this, arguments);
              };
            })(),
            De = (function () {
              var U = (0, de.A)(function* (ie) {
                if (null != ie) {
                  const Pe = yield Ee(ie);
                  return void 0 !== Pe && Pe.isOpen();
                }
                return void 0 !== (yield Ne());
              });
              return function (Pe) {
                return U.apply(this, arguments);
              };
            })(),
            We = (function () {
              var U = (0, de.A)(function* (ie) {
                const Pe = yield Ee(ie);
                return !!Pe && !Pe.disabled;
              });
              return function (Pe) {
                return U.apply(this, arguments);
              };
            })(),
            Ee = (function () {
              var U = (0, de.A)(function* (ie, Pe = !1) {
                if ((yield xe(), 'start' === ie || 'end' === ie)) {
                  const qe = oe.filter(Rt => Rt.side === ie && !Rt.disabled);
                  if (qe.length >= 1)
                    return (
                      qe.length > 1 &&
                        Pe &&
                        (0, st.p)(
                          `menuController queried for a menu on the "${ie}" side, but ${qe.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`,
                          qe.map(Rt => Rt.el),
                        ),
                      qe[0].el
                    );
                  const xt = oe.filter(Rt => Rt.side === ie);
                  if (xt.length >= 1)
                    return (
                      xt.length > 1 &&
                        Pe &&
                        (0, st.p)(
                          `menuController queried for a menu on the "${ie}" side, but ${xt.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`,
                          xt.map(Rt => Rt.el),
                        ),
                      xt[0].el
                    );
                } else if (null != ie) return Z(qe => qe.menuId === ie);
                return Z(qe => !qe.disabled) || (oe.length > 0 ? oe[0].el : void 0);
              });
              return function (Pe) {
                return U.apply(this, arguments);
              };
            })(),
            Ne = (function () {
              var U = (0, de.A)(function* () {
                return yield xe(), Ie();
              });
              return function () {
                return U.apply(this, arguments);
              };
            })(),
            y = (function () {
              var U = (0, de.A)(function* () {
                return yield xe(), tt();
              });
              return function () {
                return U.apply(this, arguments);
              };
            })(),
            D = (function () {
              var U = (0, de.A)(function* () {
                return yield xe(), Bt();
              });
              return function () {
                return U.apply(this, arguments);
              };
            })(),
            M = (U, ie) => {
              fe.set(U, ie);
            },
            N = (function () {
              var U = (0, de.A)(function* (ie, Pe, Et) {
                if (Bt()) return !1;
                if (Pe) {
                  const qe = yield Ne();
                  qe && ie.el !== qe && (yield qe.setOpen(!1, !1));
                }
                return ie._setOpen(Pe, Et);
              });
              return function (Pe, Et, qe) {
                return U.apply(this, arguments);
              };
            })(),
            Ie = () => Z(U => U._isOpen),
            tt = () => oe.map(U => U.el),
            Bt = () => oe.some(U => U.isAnimating),
            Z = U => {
              const ie = oe.find(U);
              if (void 0 !== ie) return ie.el;
            },
            xe = () => Promise.all(Array.from(document.querySelectorAll('ion-menu')).map(U => new Promise(ie => (0, bt.c)(U, ie))));
          return (
            M('reveal', he),
            M('push', et),
            M('overlay', it),
            null == Ke.d ||
              Ke.d.addEventListener('ionBackButton', U => {
                const ie = Ie();
                ie && U.detail.register(Ue.MENU_BACK_BUTTON_PRIORITY, () => ie.close());
              }),
            {
              registerAnimation: M,
              get: Ee,
              getMenus: y,
              getOpen: Ne,
              isEnabled: We,
              swipeGesture: me,
              isAnimating: D,
              isOpen: De,
              enable: x,
              toggle: P,
              close: G,
              open: J,
              _getOpenSync: Ie,
              _createAnimation: (U, ie) => {
                const Pe = fe.get(U);
                if (!Pe) throw new Error('animation not registered');
                return Pe(ie);
              },
              _register: U => {
                oe.indexOf(U) < 0 && oe.push(U);
              },
              _unregister: U => {
                const ie = oe.indexOf(U);
                ie > -1 && oe.splice(ie, 1);
              },
              _setOpen: N,
            }
          );
        })();
    },
    4929: (cn, vt, ne) => {
      'use strict';
      ne.d(vt, { a: () => Ke, b: () => Ue, p: () => de });
      const de = (st, ...bt) => console.warn(`[Ionic Warning]: ${st}`, ...bt),
        Ke = (st, ...bt) => console.error(`[Ionic Error]: ${st}`, ...bt),
        Ue = (st, ...bt) => console.error(`<${st.tagName.toLowerCase()}> must be used inside ${bt.join(' or ')}.`);
    },
    4363: (cn, vt, ne) => {
      'use strict';
      ne.d(vt, {
        B: () => Re,
        H: () => Bt,
        a: () => z,
        b: () => It,
        c: () => Rt,
        d: () => tr,
        e: () => k,
        f: () => Zt,
        g: () => Xe,
        h: () => Ie,
        i: () => _t,
        j: () => re,
        r: () => F,
        w: () => _e,
      });
      var de = ne(467);
      let st,
        bt,
        Fe,
        S = !1,
        Me = !1,
        it = !1,
        et = !1,
        he = !1;
      const Re = { isDev: !1, isBrowser: !0, isServer: !1, isTesting: !1 },
        re = f => {
          const p = new URL(f, te.$resourcesUrl$);
          return p.origin !== Jn.location.origin ? p.href : p.pathname;
        },
        me = 's-id',
        De = 'sty-id',
        Ne = 'slot-fb{display:contents}slot-fb[hidden]{display:none}',
        y = 'http://www.w3.org/1999/xlink',
        D = {},
        N = f => 'object' == (f = typeof f) || 'function' === f;
      function W(f) {
        var p, _, C;
        return null !==
          (C =
            null === (_ = null === (p = f.head) || void 0 === p ? void 0 : p.querySelector('meta[name="csp-nonce"]')) || void 0 === _
              ? void 0
              : _.getAttribute('content')) && void 0 !== C
          ? C
          : void 0;
      }
      const Ie = (f, p, ..._) => {
          let C = null,
            j = null,
            R = null,
            $ = !1,
            ue = !1;
          const ve = [],
            pe = Be => {
              for (let B = 0; B < Be.length; B++)
                (C = Be[B]),
                  Array.isArray(C)
                    ? pe(C)
                    : null != C &&
                      'boolean' != typeof C &&
                      (($ = 'function' != typeof f && !N(C)) && (C = String(C)),
                      $ && ue ? (ve[ve.length - 1].$text$ += C) : ve.push($ ? tt(null, C) : C),
                      (ue = $));
            };
          if ((pe(_), p)) {
            p.key && (j = p.key), p.name && (R = p.name);
            {
              const Be = p.className || p.class;
              Be &&
                (p.class =
                  'object' != typeof Be
                    ? Be
                    : Object.keys(Be)
                        .filter(B => Be[B])
                        .join(' '));
            }
          }
          if ('function' == typeof f) return f(null === p ? {} : p, ve, xe);
          const be = tt(f, null);
          return (be.$attrs$ = p), ve.length > 0 && (be.$children$ = ve), (be.$key$ = j), (be.$name$ = R), be;
        },
        tt = (f, p) => ({ $flags$: 0, $tag$: f, $text$: p, $elm$: null, $children$: null, $attrs$: null, $key$: null, $name$: null }),
        Bt = {},
        xe = { forEach: (f, p) => f.map(U).forEach(p), map: (f, p) => f.map(U).map(p).map(ie) },
        U = f => ({ vattrs: f.$attrs$, vchildren: f.$children$, vkey: f.$key$, vname: f.$name$, vtag: f.$tag$, vtext: f.$text$ }),
        ie = f => {
          if ('function' == typeof f.vtag) {
            const _ = Object.assign({}, f.vattrs);
            return f.vkey && (_.key = f.vkey), f.vname && (_.name = f.vname), Ie(f.vtag, _, ...(f.vchildren || []));
          }
          const p = tt(f.vtag, f.vtext);
          return (p.$attrs$ = f.vattrs), (p.$children$ = f.vchildren), (p.$key$ = f.vkey), (p.$name$ = f.vname), p;
        },
        Et = (f, p, _, C, j, R, $) => {
          let ue, ve, pe, be;
          if (1 === R.nodeType) {
            for (
              ue = R.getAttribute('c-id'),
                ue &&
                  ((ve = ue.split('.')),
                  (ve[0] === $ || '0' === ve[0]) &&
                    ((pe = {
                      $flags$: 0,
                      $hostId$: ve[0],
                      $nodeId$: ve[1],
                      $depth$: ve[2],
                      $index$: ve[3],
                      $tag$: R.tagName.toLowerCase(),
                      $elm$: R,
                      $attrs$: null,
                      $children$: null,
                      $key$: null,
                      $name$: null,
                      $text$: null,
                    }),
                    p.push(pe),
                    R.removeAttribute('c-id'),
                    f.$children$ || (f.$children$ = []),
                    (f.$children$[pe.$index$] = pe),
                    (f = pe),
                    C && '0' === pe.$depth$ && (C[pe.$index$] = pe.$elm$))),
                be = R.childNodes.length - 1;
              be >= 0;
              be--
            )
              Et(f, p, _, C, j, R.childNodes[be], $);
            if (R.shadowRoot)
              for (be = R.shadowRoot.childNodes.length - 1; be >= 0; be--) Et(f, p, _, C, j, R.shadowRoot.childNodes[be], $);
          } else if (8 === R.nodeType)
            (ve = R.nodeValue.split('.')),
              (ve[1] === $ || '0' === ve[1]) &&
                ((ue = ve[0]),
                (pe = {
                  $flags$: 0,
                  $hostId$: ve[1],
                  $nodeId$: ve[2],
                  $depth$: ve[3],
                  $index$: ve[4],
                  $elm$: R,
                  $attrs$: null,
                  $children$: null,
                  $key$: null,
                  $name$: null,
                  $tag$: null,
                  $text$: null,
                }),
                't' === ue
                  ? ((pe.$elm$ = R.nextSibling),
                    pe.$elm$ &&
                      3 === pe.$elm$.nodeType &&
                      ((pe.$text$ = pe.$elm$.textContent),
                      p.push(pe),
                      R.remove(),
                      f.$children$ || (f.$children$ = []),
                      (f.$children$[pe.$index$] = pe),
                      C && '0' === pe.$depth$ && (C[pe.$index$] = pe.$elm$)))
                  : pe.$hostId$ === $ &&
                    ('s' === ue
                      ? ((pe.$tag$ = 'slot'),
                        (R['s-sn'] = ve[5] ? (pe.$name$ = ve[5]) : ''),
                        (R['s-sr'] = !0),
                        C &&
                          ((pe.$elm$ = ee.createElement(pe.$tag$)),
                          pe.$name$ && pe.$elm$.setAttribute('name', pe.$name$),
                          R.parentNode.insertBefore(pe.$elm$, R),
                          R.remove(),
                          '0' === pe.$depth$ && (C[pe.$index$] = pe.$elm$)),
                        _.push(pe),
                        f.$children$ || (f.$children$ = []),
                        (f.$children$[pe.$index$] = pe))
                      : 'r' === ue && (C ? R.remove() : ((j['s-cr'] = R), (R['s-cn'] = !0)))));
          else if (f && 'style' === f.$tag$) {
            const Be = tt(null, R.textContent);
            (Be.$elm$ = R), (Be.$index$ = '0'), (f.$children$ = [Be]);
          }
        },
        qe = (f, p) => {
          if (1 === f.nodeType) {
            let _ = 0;
            for (; _ < f.childNodes.length; _++) qe(f.childNodes[_], p);
            if (f.shadowRoot) for (_ = 0; _ < f.shadowRoot.childNodes.length; _++) qe(f.shadowRoot.childNodes[_], p);
          } else if (8 === f.nodeType) {
            const _ = f.nodeValue.split('.');
            'o' === _[0] && (p.set(_[1] + '.' + _[2], f), (f.nodeValue = ''), (f['s-en'] = _[3]));
          }
        },
        Rt = f => Ut.push(f),
        Xe = f => I(f).$modeName$,
        Zt = f => I(f).$hostElement$,
        tr = (f, p, _) => {
          const C = Zt(f);
          return { emit: j => yt(C, p, { bubbles: !!(4 & _), composed: !!(2 & _), cancelable: !!(1 & _), detail: j }) };
        },
        yt = (f, p, _) => {
          const C = te.ce(p, _);
          return f.dispatchEvent(C), C;
        },
        wn = new WeakMap(),
        qt = (f, p, _) => {
          let C = Er.get(f);
          ut && _ ? ((C = C || new CSSStyleSheet()), 'string' == typeof C ? (C = p) : C.replaceSync(p)) : (C = p), Er.set(f, C);
        },
        ae = (f, p, _) => {
          var C;
          const j = X(p, _),
            R = Er.get(j);
          if (((f = 11 === f.nodeType ? f : ee), R))
            if ('string' == typeof R) {
              let ue,
                $ = wn.get((f = f.head || f));
              if (($ || wn.set(f, ($ = new Set())), !$.has(j))) {
                if (f.host && (ue = f.querySelector(`[${De}="${j}"]`))) ue.innerHTML = R;
                else {
                  (ue = ee.createElement('style')), (ue.innerHTML = R);
                  const ve = null !== (C = te.$nonce$) && void 0 !== C ? C : W(ee);
                  null != ve && ue.setAttribute('nonce', ve), f.insertBefore(ue, f.querySelector('link'));
                }
                4 & p.$flags$ && (ue.innerHTML += Ne), $ && $.add(j);
              }
            } else f.adoptedStyleSheets.includes(R) || (f.adoptedStyleSheets = [...f.adoptedStyleSheets, R]);
          return j;
        },
        X = (f, p) => 'sc-' + (p && 32 & f.$flags$ ? f.$tagName$ + '-' + p : f.$tagName$),
        Qe = f => f.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{'),
        Tt = (f, p, _, C, j, R) => {
          if (_ !== C) {
            let $ = ht(f, p),
              ue = p.toLowerCase();
            if ('class' === p) {
              const ve = f.classList,
                pe = Xt(_),
                be = Xt(C);
              ve.remove(...pe.filter(Be => Be && !be.includes(Be))), ve.add(...be.filter(Be => Be && !pe.includes(Be)));
            } else if ('style' === p) {
              for (const ve in _) (!C || null == C[ve]) && (ve.includes('-') ? f.style.removeProperty(ve) : (f.style[ve] = ''));
              for (const ve in C) (!_ || C[ve] !== _[ve]) && (ve.includes('-') ? f.style.setProperty(ve, C[ve]) : (f.style[ve] = C[ve]));
            } else if ('key' !== p)
              if ('ref' === p) C && C(f);
              else if ($ || 'o' !== p[0] || 'n' !== p[1]) {
                const ve = N(C);
                if (($ || (ve && null !== C)) && !j)
                  try {
                    if (f.tagName.includes('-')) f[p] = C;
                    else {
                      const be = C ?? '';
                      'list' === p ? ($ = !1) : (null == _ || f[p] != be) && (f[p] = be);
                    }
                  } catch {}
                let pe = !1;
                ue !== (ue = ue.replace(/^xlink\:?/, '')) && ((p = ue), (pe = !0)),
                  null == C || !1 === C
                    ? (!1 !== C || '' === f.getAttribute(p)) && (pe ? f.removeAttributeNS(y, p) : f.removeAttribute(p))
                    : (!$ || 4 & R || j) && !ve && ((C = !0 === C ? '' : C), pe ? f.setAttributeNS(y, p, C) : f.setAttribute(p, C));
              } else if (((p = '-' === p[2] ? p.slice(3) : ht(Jn, ue) ? ue.slice(2) : ue[2] + p.slice(3)), _ || C)) {
                const ve = p.endsWith(hn);
                (p = p.replace(Gt, '')), _ && te.rel(f, p, _, ve), C && te.ael(f, p, C, ve);
              }
          }
        },
        Yt = /\s/,
        Xt = f => (f ? f.split(Yt) : []),
        hn = 'Capture',
        Gt = new RegExp(hn + '$'),
        Wn = (f, p, _, C) => {
          const j = 11 === p.$elm$.nodeType && p.$elm$.host ? p.$elm$.host : p.$elm$,
            R = (f && f.$attrs$) || D,
            $ = p.$attrs$ || D;
          for (C of ar(Object.keys(R))) C in $ || Tt(j, C, R[C], void 0, _, p.$flags$);
          for (C of ar(Object.keys($))) Tt(j, C, R[C], $[C], _, p.$flags$);
        };
      function ar(f) {
        return f.includes('ref') ? [...f.filter(p => 'ref' !== p), 'ref'] : f;
      }
      const Pr = (f, p, _, C) => {
          var j;
          const R = p.$children$[_];
          let ue,
            ve,
            pe,
            $ = 0;
          if (
            (S || ((it = !0), 'slot' === R.$tag$ && (st && C.classList.add(st + '-s'), (R.$flags$ |= R.$children$ ? 2 : 1))),
            null !== R.$text$)
          )
            ue = R.$elm$ = ee.createTextNode(R.$text$);
          else if (1 & R.$flags$) ue = R.$elm$ = ee.createTextNode('');
          else {
            if (
              (et || (et = 'svg' === R.$tag$),
              (ue = R.$elm$ =
                ee.createElementNS(
                  et ? 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml',
                  2 & R.$flags$ ? 'slot-fb' : R.$tag$,
                )),
              et && 'foreignObject' === R.$tag$ && (et = !1),
              Wn(null, R, et),
              (f => null != f)(st) && ue['s-si'] !== st && ue.classList.add((ue['s-si'] = st)),
              R.$children$)
            )
              for ($ = 0; $ < R.$children$.length; ++$) (ve = Pr(f, R, $, ue)), ve && ue.appendChild(ve);
            'svg' === R.$tag$ ? (et = !1) : 'foreignObject' === ue.tagName && (et = !0);
          }
          return (
            (ue['s-hn'] = Fe),
            3 & R.$flags$ &&
              ((ue['s-sr'] = !0),
              (ue['s-cr'] = bt),
              (ue['s-sn'] = R.$name$ || ''),
              (ue['s-rf'] = null === (j = R.$attrs$) || void 0 === j ? void 0 : j.ref),
              (pe = f && f.$children$ && f.$children$[_]),
              pe && pe.$tag$ === R.$tag$ && f.$elm$ && Gr(f.$elm$, !1)),
            ue
          );
        },
        Gr = (f, p) => {
          te.$flags$ |= 1;
          const _ = Array.from(f.childNodes);
          for (let C = _.length - 1; C >= 0; C--) {
            const j = _[C];
            j['s-hn'] !== Fe &&
              j['s-ol'] &&
              (Lo(j).insertBefore(j, bo(j)), j['s-ol'].remove(), (j['s-ol'] = void 0), (j['s-sh'] = void 0), (it = !0)),
              p && Gr(j, p);
          }
          te.$flags$ &= -2;
        },
        Tr = (f, p, _, C, j, R) => {
          let ue,
            $ = (f['s-cr'] && f['s-cr'].parentNode) || f;
          for ($.shadowRoot && $.tagName === Fe && ($ = $.shadowRoot); j <= R; ++j)
            C[j] && ((ue = Pr(null, _, j, f)), ue && ((C[j].$elm$ = ue), $.insertBefore(ue, bo(p))));
        },
        Co = (f, p, _) => {
          for (let C = p; C <= _; ++C) {
            const j = f[C];
            if (j) {
              const R = j.$elm$;
              Y(j), R && ((Me = !0), R['s-ol'] ? R['s-ol'].remove() : Gr(R, !0), R.remove());
            }
          }
        },
        po = (f, p, _ = !1) => f.$tag$ === p.$tag$ && ('slot' === f.$tag$ ? f.$name$ === p.$name$ : !!_ || f.$key$ === p.$key$),
        bo = f => (f && f['s-ol']) || f,
        Lo = f => (f['s-ol'] ? f['s-ol'] : f).parentNode,
        Wr = (f, p, _ = !1) => {
          const C = (p.$elm$ = f.$elm$),
            j = f.$children$,
            R = p.$children$,
            $ = p.$tag$,
            ue = p.$text$;
          let ve;
          null === ue
            ? ((et = 'svg' === $ || ('foreignObject' !== $ && et)),
              ('slot' === $ && !S) || Wn(f, p, et),
              null !== j && null !== R
                ? ((f, p, _, C, j = !1) => {
                    let Yn,
                      er,
                      R = 0,
                      $ = 0,
                      ue = 0,
                      ve = 0,
                      pe = p.length - 1,
                      be = p[0],
                      Be = p[pe],
                      B = C.length - 1,
                      tn = C[0],
                      un = C[B];
                    for (; R <= pe && $ <= B; )
                      if (null == be) be = p[++R];
                      else if (null == Be) Be = p[--pe];
                      else if (null == tn) tn = C[++$];
                      else if (null == un) un = C[--B];
                      else if (po(be, tn, j)) Wr(be, tn, j), (be = p[++R]), (tn = C[++$]);
                      else if (po(Be, un, j)) Wr(Be, un, j), (Be = p[--pe]), (un = C[--B]);
                      else if (po(be, un, j))
                        ('slot' === be.$tag$ || 'slot' === un.$tag$) && Gr(be.$elm$.parentNode, !1),
                          Wr(be, un, j),
                          f.insertBefore(be.$elm$, Be.$elm$.nextSibling),
                          (be = p[++R]),
                          (un = C[--B]);
                      else if (po(Be, tn, j))
                        ('slot' === be.$tag$ || 'slot' === un.$tag$) && Gr(Be.$elm$.parentNode, !1),
                          Wr(Be, tn, j),
                          f.insertBefore(Be.$elm$, be.$elm$),
                          (Be = p[--pe]),
                          (tn = C[++$]);
                      else {
                        for (ue = -1, ve = R; ve <= pe; ++ve)
                          if (p[ve] && null !== p[ve].$key$ && p[ve].$key$ === tn.$key$) {
                            ue = ve;
                            break;
                          }
                        ue >= 0
                          ? ((er = p[ue]),
                            er.$tag$ !== tn.$tag$ ? (Yn = Pr(p && p[$], _, ue, f)) : (Wr(er, tn, j), (p[ue] = void 0), (Yn = er.$elm$)),
                            (tn = C[++$]))
                          : ((Yn = Pr(p && p[$], _, $, f)), (tn = C[++$])),
                          Yn && Lo(be.$elm$).insertBefore(Yn, bo(be.$elm$));
                      }
                    R > pe ? Tr(f, null == C[B + 1] ? null : C[B + 1].$elm$, _, C, $, B) : $ > B && Co(p, R, pe);
                  })(C, j, p, R, _)
                : null !== R
                  ? (null !== f.$text$ && (C.textContent = ''), Tr(C, null, p, R, 0, R.length - 1))
                  : null !== j && Co(j, 0, j.length - 1),
              et && 'svg' === $ && (et = !1))
            : (ve = C['s-cr'])
              ? (ve.parentNode.textContent = ue)
              : f.$text$ !== ue && (C.data = ue);
        },
        w = f => {
          const p = f.childNodes;
          for (const _ of p)
            if (1 === _.nodeType) {
              if (_['s-sr']) {
                const C = _['s-sn'];
                _.hidden = !1;
                for (const j of p)
                  if (j !== _)
                    if (j['s-hn'] !== _['s-hn'] || '' !== C) {
                      if (1 === j.nodeType && (C === j.getAttribute('slot') || C === j['s-sn'])) {
                        _.hidden = !0;
                        break;
                      }
                    } else if (1 === j.nodeType || (3 === j.nodeType && '' !== j.textContent.trim())) {
                      _.hidden = !0;
                      break;
                    }
              }
              w(_);
            }
        },
        A = [],
        le = f => {
          let p, _, C;
          for (const j of f.childNodes) {
            if (j['s-sr'] && (p = j['s-cr']) && p.parentNode) {
              _ = p.parentNode.childNodes;
              const R = j['s-sn'];
              for (C = _.length - 1; C >= 0; C--)
                if (((p = _[C]), !p['s-cn'] && !p['s-nr'] && p['s-hn'] !== j['s-hn']))
                  if (T(p, R)) {
                    let $ = A.find(ue => ue.$nodeToRelocate$ === p);
                    (Me = !0),
                      (p['s-sn'] = p['s-sn'] || R),
                      $
                        ? (($.$nodeToRelocate$['s-sh'] = j['s-hn']), ($.$slotRefNode$ = j))
                        : ((p['s-sh'] = j['s-hn']), A.push({ $slotRefNode$: j, $nodeToRelocate$: p })),
                      p['s-sr'] &&
                        A.map(ue => {
                          T(ue.$nodeToRelocate$, p['s-sn']) &&
                            (($ = A.find(ve => ve.$nodeToRelocate$ === p)), $ && !ue.$slotRefNode$ && (ue.$slotRefNode$ = $.$slotRefNode$));
                        });
                  } else A.some($ => $.$nodeToRelocate$ === p) || A.push({ $nodeToRelocate$: p });
            }
            1 === j.nodeType && le(j);
          }
        },
        T = (f, p) =>
          1 === f.nodeType ? (null === f.getAttribute('slot') && '' === p) || f.getAttribute('slot') === p : f['s-sn'] === p || '' === p,
        Y = f => {
          f.$attrs$ && f.$attrs$.ref && f.$attrs$.ref(null), f.$children$ && f.$children$.map(Y);
        },
        rt = (f, p) => {
          p && !f.$onRenderResolve$ && p['s-p'] && p['s-p'].push(new Promise(_ => (f.$onRenderResolve$ = _)));
        },
        at = (f, p) => {
          if (((f.$flags$ |= 16), !(4 & f.$flags$))) return rt(f, f.$ancestorComponent$), _e(() => pt(f, p));
          f.$flags$ |= 512;
        },
        pt = (f, p) => {
          const C = f.$lazyInstance$;
          let j;
          return (
            p &&
              ((f.$flags$ |= 256),
              f.$queuedListeners$ && (f.$queuedListeners$.map(([R, $]) => wt(C, R, $)), (f.$queuedListeners$ = void 0)),
              (j = wt(C, 'componentWillLoad'))),
            (j = Je(j, () => wt(C, 'componentWillRender'))),
            Je(j, () => St(f, C, p))
          );
        },
        Je = (f, p) => (lt(f) ? f.then(p) : p()),
        lt = f => f instanceof Promise || (f && f.then && 'function' == typeof f.then),
        St = (function () {
          var f = (0, de.A)(function* (p, _, C) {
            var j;
            const R = p.$hostElement$,
              ue = R['s-rc'];
            C &&
              (f => {
                const p = f.$cmpMeta$,
                  _ = f.$hostElement$,
                  C = p.$flags$,
                  R = ae(_.shadowRoot ? _.shadowRoot : _.getRootNode(), p, f.$modeName$);
                10 & C && ((_['s-sc'] = R), _.classList.add(R + '-h'), 2 & C && _.classList.add(R + '-s'));
              })(p);
            jt(p, _, R, C), ue && (ue.map(pe => pe()), (R['s-rc'] = void 0));
            {
              const pe = null !== (j = R['s-p']) && void 0 !== j ? j : [],
                be = () => en(p);
              0 === pe.length ? be() : (Promise.all(pe).then(be), (p.$flags$ |= 4), (pe.length = 0));
            }
          });
          return function (_, C, j) {
            return f.apply(this, arguments);
          };
        })(),
        jt = (f, p, _, C) => {
          try {
            (p = p.render && p.render()),
              (f.$flags$ &= -17),
              (f.$flags$ |= 2),
              ((f, p, _ = !1) => {
                var C, j, R, $;
                const ue = f.$hostElement$,
                  ve = f.$cmpMeta$,
                  pe = f.$vnode$ || tt(null, null),
                  be = (f => f && f.$tag$ === Bt)(p) ? p : Ie(null, null, p);
                if (
                  ((Fe = ue.tagName),
                  ve.$attrsToReflect$ && ((be.$attrs$ = be.$attrs$ || {}), ve.$attrsToReflect$.map(([Be, B]) => (be.$attrs$[B] = ue[Be]))),
                  _ && be.$attrs$)
                )
                  for (const Be of Object.keys(be.$attrs$))
                    ue.hasAttribute(Be) && !['key', 'ref', 'style', 'class'].includes(Be) && (be.$attrs$[Be] = ue[Be]);
                if (
                  ((be.$tag$ = null),
                  (be.$flags$ |= 4),
                  (f.$vnode$ = be),
                  (be.$elm$ = pe.$elm$ = ue.shadowRoot || ue),
                  (st = ue['s-sc']),
                  (S = !!(1 & ve.$flags$)),
                  (bt = ue['s-cr']),
                  (Me = !1),
                  Wr(pe, be, _),
                  (te.$flags$ |= 1),
                  it)
                ) {
                  le(be.$elm$);
                  for (const Be of A) {
                    const B = Be.$nodeToRelocate$;
                    if (!B['s-ol']) {
                      const tn = ee.createTextNode('');
                      (tn['s-nr'] = B), B.parentNode.insertBefore((B['s-ol'] = tn), B);
                    }
                  }
                  for (const Be of A) {
                    const B = Be.$nodeToRelocate$,
                      tn = Be.$slotRefNode$;
                    if (tn) {
                      const un = tn.parentNode;
                      let Yn = tn.nextSibling;
                      {
                        let er = null === (C = B['s-ol']) || void 0 === C ? void 0 : C.previousSibling;
                        for (; er; ) {
                          let On = null !== (j = er['s-nr']) && void 0 !== j ? j : null;
                          if (On && On['s-sn'] === B['s-sn'] && un === On.parentNode) {
                            for (On = On.nextSibling; On === B || On?.['s-sr']; ) On = On?.nextSibling;
                            if (!On || !On['s-nr']) {
                              Yn = On;
                              break;
                            }
                          }
                          er = er.previousSibling;
                        }
                      }
                      ((!Yn && un !== B.parentNode) || B.nextSibling !== Yn) &&
                        B !== Yn &&
                        (!B['s-hn'] && B['s-ol'] && (B['s-hn'] = B['s-ol'].parentNode.nodeName),
                        un.insertBefore(B, Yn),
                        1 === B.nodeType && (B.hidden = null !== (R = B['s-ih']) && void 0 !== R && R)),
                        B && 'function' == typeof tn['s-rf'] && tn['s-rf'](B);
                    } else 1 === B.nodeType && (_ && (B['s-ih'] = null !== ($ = B.hidden) && void 0 !== $ && $), (B.hidden = !0));
                  }
                }
                Me && w(be.$elm$), (te.$flags$ &= -2), (A.length = 0), (bt = void 0);
              })(f, p, C);
          } catch (j) {
            fn(j, f.$hostElement$);
          }
          return null;
        },
        en = f => {
          const _ = f.$hostElement$,
            j = f.$lazyInstance$,
            R = f.$ancestorComponent$;
          wt(j, 'componentDidRender'),
            64 & f.$flags$
              ? wt(j, 'componentDidUpdate')
              : ((f.$flags$ |= 64), sn(_), wt(j, 'componentDidLoad'), f.$onReadyResolve$(_), R || Sn()),
            f.$onInstanceResolve$(_),
            f.$onRenderResolve$ && (f.$onRenderResolve$(), (f.$onRenderResolve$ = void 0)),
            512 & f.$flags$ && qr(() => at(f, !1)),
            (f.$flags$ &= -517);
        },
        _t = f => {
          {
            const p = I(f),
              _ = p.$hostElement$.isConnected;
            return _ && 2 == (18 & p.$flags$) && at(p, !1), _;
          }
        },
        Sn = f => {
          sn(ee.documentElement), qr(() => yt(Jn, 'appload', { detail: { namespace: 'ionic' } }));
        },
        wt = (f, p, _) => {
          if (f && f[p])
            try {
              return f[p](_);
            } catch (C) {
              fn(C);
            }
        },
        sn = f => f.classList.add('hydrated'),
        nn = (f, p, _) => {
          var C;
          const j = f.prototype;
          if (p.$members$) {
            f.watchers && (p.$watchers$ = f.watchers);
            const R = Object.entries(p.$members$);
            if (
              (R.map(([$, [ue]]) => {
                31 & ue || (2 & _ && 32 & ue)
                  ? Object.defineProperty(j, $, {
                      get() {
                        return ((f, p) => I(this).$instanceValues$.get(p))(0, $);
                      },
                      set(ve) {
                        ((f, p, _, C) => {
                          const j = I(f),
                            R = j.$hostElement$,
                            $ = j.$instanceValues$.get(p),
                            ue = j.$flags$,
                            ve = j.$lazyInstance$;
                          _ = ((f, p) =>
                            null == f || N(f)
                              ? f
                              : 4 & p
                                ? 'false' !== f && ('' === f || !!f)
                                : 2 & p
                                  ? parseFloat(f)
                                  : 1 & p
                                    ? String(f)
                                    : f)(_, C.$members$[p][0]);
                          const pe = Number.isNaN($) && Number.isNaN(_);
                          if ((!(8 & ue) || void 0 === $) && _ !== $ && !pe && (j.$instanceValues$.set(p, _), ve)) {
                            if (C.$watchers$ && 128 & ue) {
                              const Be = C.$watchers$[p];
                              Be &&
                                Be.map(B => {
                                  try {
                                    ve[B](_, $, p);
                                  } catch (tn) {
                                    fn(tn, R);
                                  }
                                });
                            }
                            2 == (18 & ue) && at(j, !1);
                          }
                        })(this, $, ve, p);
                      },
                      configurable: !0,
                      enumerable: !0,
                    })
                  : 1 & _ &&
                    64 & ue &&
                    Object.defineProperty(j, $, {
                      value(...ve) {
                        var pe;
                        const be = I(this);
                        return null === (pe = be?.$onInstancePromise$) || void 0 === pe
                          ? void 0
                          : pe.then(() => {
                              var Be;
                              return null === (Be = be.$lazyInstance$) || void 0 === Be ? void 0 : Be[$](...ve);
                            });
                      },
                    });
              }),
              1 & _)
            ) {
              const $ = new Map();
              (j.attributeChangedCallback = function (ue, ve, pe) {
                te.jmp(() => {
                  var be;
                  const Be = $.get(ue);
                  if (this.hasOwnProperty(Be)) (pe = this[Be]), delete this[Be];
                  else {
                    if (j.hasOwnProperty(Be) && 'number' == typeof this[Be] && this[Be] == pe) return;
                    if (null == Be) {
                      const B = I(this),
                        tn = B?.$flags$;
                      if (tn && !(8 & tn) && 128 & tn && pe !== ve) {
                        const un = B.$lazyInstance$,
                          Yn = null === (be = p.$watchers$) || void 0 === be ? void 0 : be[ue];
                        Yn?.forEach(er => {
                          null != un[er] && un[er].call(un, pe, ve, ue);
                        });
                      }
                      return;
                    }
                  }
                  this[Be] = (null !== pe || 'boolean' != typeof this[Be]) && pe;
                });
              }),
                (f.observedAttributes = Array.from(
                  new Set([
                    ...Object.keys(null !== (C = p.$watchers$) && void 0 !== C ? C : {}),
                    ...R.filter(([ue, ve]) => 15 & ve[0]).map(([ue, ve]) => {
                      var pe;
                      const be = ve[1] || ue;
                      return $.set(be, ue), 512 & ve[0] && (null === (pe = p.$attrsToReflect$) || void 0 === pe || pe.push([ue, be])), be;
                    }),
                  ]),
                ));
            }
          }
          return f;
        },
        nt = (function () {
          var f = (0, de.A)(function* (p, _, C, j) {
            let R;
            if (!(32 & _.$flags$)) {
              if (((_.$flags$ |= 32), C.$lazyBundleId$)) {
                if (((R = qn(C)), R.then)) {
                  const be = () => {};
                  (R = yield R), be();
                }
                R.isProxied || ((C.$watchers$ = R.watchers), nn(R, C, 2), (R.isProxied = !0));
                const pe = () => {};
                _.$flags$ |= 8;
                try {
                  new R(_);
                } catch (be) {
                  fn(be);
                }
                (_.$flags$ &= -9), (_.$flags$ |= 128), pe(), Mn(_.$lazyInstance$);
              } else (R = p.constructor), customElements.whenDefined(C.$tagName$).then(() => (_.$flags$ |= 128));
              if (R.style) {
                let pe = R.style;
                'string' != typeof pe && (pe = pe[(_.$modeName$ = (f => Ut.map(p => p(f)).find(p => !!p))(p))]);
                const be = X(C, _.$modeName$);
                if (!Er.has(be)) {
                  const Be = () => {};
                  qt(be, pe, !!(1 & C.$flags$)), Be();
                }
              }
            }
            const $ = _.$ancestorComponent$,
              ue = () => at(_, !0);
            $ && $['s-rc'] ? $['s-rc'].push(ue) : ue();
          });
          return function (_, C, j, R) {
            return f.apply(this, arguments);
          };
        })(),
        Mn = f => {
          wt(f, 'connectedCallback');
        },
        O = f => {
          const p = (f['s-cr'] = ee.createComment(''));
          (p['s-cn'] = !0), f.insertBefore(p, f.firstChild);
        },
        an = f => {
          wt(f, 'disconnectedCallback');
        },
        Ot = (function () {
          var f = (0, de.A)(function* (p) {
            if (!(1 & te.$flags$)) {
              const _ = I(p);
              _.$rmListeners$ && (_.$rmListeners$.map(C => C()), (_.$rmListeners$ = void 0)),
                _?.$lazyInstance$ ? an(_.$lazyInstance$) : _?.$onReadyPromise$ && _.$onReadyPromise$.then(() => an(_.$lazyInstance$));
            }
          });
          return function (_) {
            return f.apply(this, arguments);
          };
        })(),
        It = (f, p = {}) => {
          var _;
          const j = [],
            R = p.exclude || [],
            $ = Jn.customElements,
            ue = ee.head,
            ve = ue.querySelector('meta[charset]'),
            pe = ee.createElement('style'),
            be = [],
            Be = ee.querySelectorAll(`[${De}]`);
          let B,
            tn = !0,
            un = 0;
          for (
            Object.assign(te, p), te.$resourcesUrl$ = new URL(p.resourcesUrl || './', ee.baseURI).href, te.$flags$ |= 2;
            un < Be.length;
            un++
          )
            qt(Be[un].getAttribute(De), Qe(Be[un].innerHTML), !0);
          let Yn = !1;
          if (
            (f.map(er => {
              er[1].map(On => {
                var Ha;
                const Sr = { $flags$: On[0], $tagName$: On[1], $members$: On[2], $listeners$: On[3] };
                4 & Sr.$flags$ && (Yn = !0),
                  (Sr.$members$ = On[2]),
                  (Sr.$listeners$ = On[3]),
                  (Sr.$attrsToReflect$ = []),
                  (Sr.$watchers$ = null !== (Ha = On[4]) && void 0 !== Ha ? Ha : {});
                const ai = Sr.$tagName$,
                  za = class extends HTMLElement {
                    constructor(Yi) {
                      super(Yi),
                        ft((Yi = this), Sr),
                        1 & Sr.$flags$ && Yi.attachShadow({ mode: 'open', delegatesFocus: !!(16 & Sr.$flags$) });
                    }
                    connectedCallback() {
                      B && (clearTimeout(B), (B = null)),
                        tn
                          ? be.push(this)
                          : te.jmp(() =>
                              (f => {
                                if (!(1 & te.$flags$)) {
                                  const p = I(f),
                                    _ = p.$cmpMeta$,
                                    C = () => {};
                                  if (1 & p.$flags$)
                                    Ct(f, p, _.$listeners$),
                                      p?.$lazyInstance$
                                        ? Mn(p.$lazyInstance$)
                                        : p?.$onReadyPromise$ && p.$onReadyPromise$.then(() => Mn(p.$lazyInstance$));
                                  else {
                                    let j;
                                    if (((p.$flags$ |= 1), (j = f.getAttribute(me)), j)) {
                                      if (1 & _.$flags$) {
                                        const R = ae(f.shadowRoot, _, f.getAttribute('s-mode'));
                                        f.classList.remove(R + '-h', R + '-s');
                                      }
                                      ((f, p, _, C) => {
                                        const R = f.shadowRoot,
                                          $ = [],
                                          ve = R ? [] : null,
                                          pe = (C.$vnode$ = tt(p, null));
                                        te.$orgLocNodes$ || qe(ee.body, (te.$orgLocNodes$ = new Map())),
                                          (f[me] = _),
                                          f.removeAttribute(me),
                                          Et(pe, $, [], ve, f, f, _),
                                          $.map(be => {
                                            const Be = be.$hostId$ + '.' + be.$nodeId$,
                                              B = te.$orgLocNodes$.get(Be),
                                              tn = be.$elm$;
                                            B && we && '' === B['s-en'] && B.parentNode.insertBefore(tn, B.nextSibling),
                                              R || ((tn['s-hn'] = p), B && ((tn['s-ol'] = B), (tn['s-ol']['s-nr'] = tn))),
                                              te.$orgLocNodes$.delete(Be);
                                          }),
                                          R &&
                                            ve.map(be => {
                                              be && R.appendChild(be);
                                            });
                                      })(f, _.$tagName$, j, p);
                                    }
                                    j || (12 & _.$flags$ && O(f));
                                    {
                                      let R = f;
                                      for (; (R = R.parentNode || R.host); )
                                        if ((1 === R.nodeType && R.hasAttribute('s-id') && R['s-p']) || R['s-p']) {
                                          rt(p, (p.$ancestorComponent$ = R));
                                          break;
                                        }
                                    }
                                    _.$members$ &&
                                      Object.entries(_.$members$).map(([R, [$]]) => {
                                        if (31 & $ && f.hasOwnProperty(R)) {
                                          const ue = f[R];
                                          delete f[R], (f[R] = ue);
                                        }
                                      }),
                                      nt(f, p, _);
                                  }
                                  C();
                                }
                              })(this),
                            );
                    }
                    disconnectedCallback() {
                      te.jmp(() => Ot(this));
                    }
                    componentOnReady() {
                      return I(this).$onReadyPromise$;
                    }
                  };
                (Sr.$lazyBundleId$ = er[0]), !R.includes(ai) && !$.get(ai) && (j.push(ai), $.define(ai, nn(za, Sr, 1)));
              });
            }),
            j.length > 0 &&
              (Yn && (pe.textContent += Ne),
              (pe.textContent += j + '{visibility:hidden}.hydrated{visibility:inherit}'),
              pe.innerHTML.length))
          ) {
            pe.setAttribute('data-styles', '');
            const er = null !== (_ = te.$nonce$) && void 0 !== _ ? _ : W(ee);
            null != er && pe.setAttribute('nonce', er), ue.insertBefore(pe, ve ? ve.nextSibling : ue.firstChild);
          }
          (tn = !1), be.length ? be.map(er => er.connectedCallback()) : te.jmp(() => (B = setTimeout(Sn, 30)));
        },
        Ct = (f, p, _, C) => {
          _ &&
            _.map(([j, R, $]) => {
              const ue = Qn(f, j),
                ve = Pt(p, $),
                pe = ln(j);
              te.ael(ue, R, ve, pe), (p.$rmListeners$ = p.$rmListeners$ || []).push(() => te.rel(ue, R, ve, pe));
            });
        },
        Pt = (f, p) => _ => {
          try {
            256 & f.$flags$ ? f.$lazyInstance$[p](_) : (f.$queuedListeners$ = f.$queuedListeners$ || []).push([p, _]);
          } catch (C) {
            fn(C);
          }
        },
        Qn = (f, p) => (4 & p ? ee : 8 & p ? Jn : 16 & p ? ee.body : f),
        ln = f => (ke ? { passive: !!(1 & f), capture: !!(2 & f) } : !!(2 & f)),
        Ye = new WeakMap(),
        I = f => Ye.get(f),
        F = (f, p) => Ye.set((p.$lazyInstance$ = f), p),
        ft = (f, p) => {
          const _ = { $flags$: 0, $hostElement$: f, $cmpMeta$: p, $instanceValues$: new Map() };
          return (
            (_.$onInstancePromise$ = new Promise(C => (_.$onInstanceResolve$ = C))),
            (_.$onReadyPromise$ = new Promise(C => (_.$onReadyResolve$ = C))),
            (f['s-p'] = []),
            (f['s-rc'] = []),
            Ct(f, _, p.$listeners$),
            Ye.set(f, _)
          );
        },
        ht = (f, p) => p in f,
        fn = (f, p) => (0, console.error)(f, p),
        ot = new Map(),
        qn = (f, p, _) => {
          const C = f.$tagName$.replace(/-/g, '_'),
            j = f.$lazyBundleId$,
            R = ot.get(j);
          return R ? R[C] : ne(8996)(`./${j}.entry.js`).then($ => (ot.set(j, $), $[C]), fn);
        },
        Er = new Map(),
        Ut = [],
        Jn = typeof window < 'u' ? window : {},
        ee = Jn.document || { head: {} },
        te = {
          $flags$: 0,
          $resourcesUrl$: '',
          jmp: f => f(),
          raf: f => requestAnimationFrame(f),
          ael: (f, p, _, C) => f.addEventListener(p, _, C),
          rel: (f, p, _, C) => f.removeEventListener(p, _, C),
          ce: (f, p) => new CustomEvent(f, p),
        },
        z = f => {
          Object.assign(te, f);
        },
        we = !0,
        ke = (() => {
          let f = !1;
          try {
            ee.addEventListener(
              'e',
              null,
              Object.defineProperty({}, 'passive', {
                get() {
                  f = !0;
                },
              }),
            );
          } catch {}
          return f;
        })(),
        ut = (() => {
          try {
            return new CSSStyleSheet(), 'function' == typeof new CSSStyleSheet().replaceSync;
          } catch {}
          return !1;
        })(),
        gt = [],
        Ft = [],
        Lt = (f, p) => _ => {
          f.push(_), he || ((he = !0), p && 4 & te.$flags$ ? qr(Kt) : te.raf(Kt));
        },
        gn = f => {
          for (let p = 0; p < f.length; p++)
            try {
              f[p](performance.now());
            } catch (_) {
              fn(_);
            }
          f.length = 0;
        },
        Kt = () => {
          gn(gt), gn(Ft), (he = gt.length > 0) && te.raf(Kt);
        },
        qr = f => Promise.resolve(void 0).then(f),
        k = Lt(gt, !1),
        _e = Lt(Ft, !0);
    },
    8476: (cn, vt, ne) => {
      'use strict';
      ne.d(vt, { d: () => Ke, w: () => de });
      const de = typeof window < 'u' ? window : void 0,
        Ke = typeof document < 'u' ? document : void 0;
    },
    7555: (cn, vt, ne) => {
      'use strict';
      ne.d(vt, { b: () => Fe, c: () => S, d: () => Me, e: () => y, g: () => b, l: () => Ee, s: () => D, t: () => he, w: () => Ne });
      var de = ne(467),
        Ke = ne(4363),
        Ue = ne(5638);
      const Fe = 'ionViewWillLeave',
        S = 'ionViewDidLeave',
        Me = 'ionViewWillUnload',
        he = L =>
          new Promise((N, W) => {
            (0, Ke.w)(() => {
              Re(L),
                re(L).then(
                  Ie => {
                    Ie.animation && Ie.animation.destroy(), fe(L), N(Ie);
                  },
                  Ie => {
                    fe(L), W(Ie);
                  },
                );
            });
          }),
        Re = L => {
          const N = L.enteringEl,
            W = L.leavingEl;
          M(N, W, L.direction),
            L.showGoBack ? N.classList.add('can-go-back') : N.classList.remove('can-go-back'),
            D(N, !1),
            N.style.setProperty('pointer-events', 'none'),
            W && (D(W, !1), W.style.setProperty('pointer-events', 'none'));
        },
        re = (function () {
          var L = (0, de.A)(function* (N) {
            const W = yield oe(N);
            return W && Ke.B.isBrowser ? J(W, N) : G(N);
          });
          return function (W) {
            return L.apply(this, arguments);
          };
        })(),
        fe = L => {
          const N = L.enteringEl,
            W = L.leavingEl;
          N.classList.remove('ion-page-invisible'),
            N.style.removeProperty('pointer-events'),
            void 0 !== W && (W.classList.remove('ion-page-invisible'), W.style.removeProperty('pointer-events'));
        },
        oe = (function () {
          var L = (0, de.A)(function* (N) {
            return N.leavingEl && N.animated && 0 !== N.duration
              ? N.animationBuilder
                ? N.animationBuilder
                : 'ios' === N.mode
                  ? (yield Promise.resolve().then(ne.bind(ne, 4569))).iosTransitionAnimation
                  : (yield Promise.resolve().then(ne.bind(ne, 2942))).mdTransitionAnimation
              : void 0;
          });
          return function (W) {
            return L.apply(this, arguments);
          };
        })(),
        J = (function () {
          var L = (0, de.A)(function* (N, W) {
            yield P(W, !0);
            const Ie = N(W.baseEl, W);
            De(W.enteringEl, W.leavingEl);
            const tt = yield me(Ie, W);
            return (
              W.progressCallback && W.progressCallback(void 0), tt && We(W.enteringEl, W.leavingEl), { hasCompleted: tt, animation: Ie }
            );
          });
          return function (W, Ie) {
            return L.apply(this, arguments);
          };
        })(),
        G = (function () {
          var L = (0, de.A)(function* (N) {
            const W = N.enteringEl,
              Ie = N.leavingEl;
            return yield P(N, !1), De(W, Ie), We(W, Ie), { hasCompleted: !0 };
          });
          return function (W) {
            return L.apply(this, arguments);
          };
        })(),
        P = (function () {
          var L = (0, de.A)(function* (N, W) {
            (void 0 !== N.deepWait ? N.deepWait : W) && (yield Promise.all([y(N.enteringEl), y(N.leavingEl)])),
              yield x(N.viewIsReady, N.enteringEl);
          });
          return function (W, Ie) {
            return L.apply(this, arguments);
          };
        })(),
        x = (function () {
          var L = (0, de.A)(function* (N, W) {
            N && (yield N(W));
          });
          return function (W, Ie) {
            return L.apply(this, arguments);
          };
        })(),
        me = (L, N) => {
          const W = N.progressCallback,
            Ie = new Promise(tt => {
              L.onFinish(Bt => tt(1 === Bt));
            });
          return W ? (L.progressStart(!0), W(L)) : L.play(), Ie;
        },
        De = (L, N) => {
          Ee(N, Fe), Ee(L, 'ionViewWillEnter');
        },
        We = (L, N) => {
          Ee(L, 'ionViewDidEnter'), Ee(N, S);
        },
        Ee = (L, N) => {
          if (L) {
            const W = new CustomEvent(N, { bubbles: !1, cancelable: !1 });
            L.dispatchEvent(W);
          }
        },
        Ne = () => new Promise(L => (0, Ue.r)(() => (0, Ue.r)(() => L()))),
        y = (function () {
          var L = (0, de.A)(function* (N) {
            const W = N;
            if (W) {
              if (null != W.componentOnReady) {
                if (null != (yield W.componentOnReady())) return;
              } else if (null != W.__registerHost) return void (yield new Promise(tt => (0, Ue.r)(tt)));
              yield Promise.all(Array.from(W.children).map(y));
            }
          });
          return function (W) {
            return L.apply(this, arguments);
          };
        })(),
        D = (L, N) => {
          N
            ? (L.setAttribute('aria-hidden', 'true'), L.classList.add('ion-page-hidden'))
            : ((L.hidden = !1), L.removeAttribute('aria-hidden'), L.classList.remove('ion-page-hidden'));
        },
        M = (L, N, W) => {
          void 0 !== L && (L.style.zIndex = 'back' === W ? '99' : '101'), void 0 !== N && (N.style.zIndex = '100');
        },
        b = L => (L.classList.contains('ion-page') ? L : L.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs') || L);
    },
    611: (cn, vt, ne) => {
      'use strict';
      ne.d(vt, { a: () => he, b: () => tt, c: () => Ue, i: () => Bt });
      var de = ne(4363);
      class Ke {
        constructor() {
          this.m = new Map();
        }
        reset(xe) {
          this.m = new Map(Object.entries(xe));
        }
        get(xe, U) {
          const ie = this.m.get(xe);
          return void 0 !== ie ? ie : U;
        }
        getBoolean(xe, U = !1) {
          const ie = this.m.get(xe);
          return void 0 === ie ? U : 'string' == typeof ie ? 'true' === ie : !!ie;
        }
        getNumber(xe, U) {
          const ie = parseFloat(this.m.get(xe));
          return isNaN(ie) ? (void 0 !== U ? U : NaN) : ie;
        }
        set(xe, U) {
          this.m.set(xe, U);
        }
      }
      const Ue = new Ke(),
        it = 'ionic-persist-config',
        he = (Z, xe) => ('string' == typeof Z && ((xe = Z), (Z = void 0)), (Z => Re(Z))(Z).includes(xe)),
        Re = (Z = window) => {
          if (typeof Z > 'u') return [];
          Z.Ionic = Z.Ionic || {};
          let xe = Z.Ionic.platforms;
          return (
            null == xe && ((xe = Z.Ionic.platforms = re(Z)), xe.forEach(U => Z.document.documentElement.classList.add(`plt-${U}`))), xe
          );
        },
        re = Z => {
          const xe = Ue.get('platform');
          return Object.keys(W).filter(U => {
            const ie = xe?.[U];
            return 'function' == typeof ie ? ie(Z) : W[U](Z);
          });
        },
        oe = Z => !!(L(Z, /iPad/i) || (L(Z, /Macintosh/i) && We(Z))),
        P = Z => L(Z, /android|sink/i),
        We = Z => N(Z, '(any-pointer:coarse)'),
        Ne = Z => y(Z) || D(Z),
        y = Z => !!(Z.cordova || Z.phonegap || Z.PhoneGap),
        D = Z => {
          const xe = Z.Capacitor;
          return !!xe?.isNative;
        },
        L = (Z, xe) => xe.test(Z.navigator.userAgent),
        N = (Z, xe) => {
          var U;
          return null === (U = Z.matchMedia) || void 0 === U ? void 0 : U.call(Z, xe).matches;
        },
        W = {
          ipad: oe,
          iphone: Z => L(Z, /iPhone/i),
          ios: Z => L(Z, /iPhone|iPod/i) || oe(Z),
          android: P,
          phablet: Z => {
            const xe = Z.innerWidth,
              U = Z.innerHeight,
              ie = Math.min(xe, U),
              Pe = Math.max(xe, U);
            return ie > 390 && ie < 520 && Pe > 620 && Pe < 800;
          },
          tablet: Z => {
            const xe = Z.innerWidth,
              U = Z.innerHeight,
              ie = Math.min(xe, U),
              Pe = Math.max(xe, U);
            return oe(Z) || (Z => P(Z) && !L(Z, /mobile/i))(Z) || (ie > 460 && ie < 820 && Pe > 780 && Pe < 1400);
          },
          cordova: y,
          capacitor: D,
          electron: Z => L(Z, /electron/i),
          pwa: Z => {
            var xe;
            return !!(
              (null !== (xe = Z.matchMedia) && void 0 !== xe && xe.call(Z, '(display-mode: standalone)').matches) ||
              Z.navigator.standalone
            );
          },
          mobile: We,
          mobileweb: Z => We(Z) && !Ne(Z),
          desktop: Z => !We(Z),
          hybrid: Ne,
        };
      let Ie;
      const tt = Z => (Z && (0, de.g)(Z)) || Ie,
        Bt = (Z = {}) => {
          if (typeof window > 'u') return;
          const xe = window.document,
            U = window,
            ie = (U.Ionic = U.Ionic || {}),
            Pe = {};
          Z._ael && (Pe.ael = Z._ael), Z._rel && (Pe.rel = Z._rel), Z._ce && (Pe.ce = Z._ce), (0, de.a)(Pe);
          const Et = Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    (Z => {
                      try {
                        const xe = Z.sessionStorage.getItem(it);
                        return null !== xe ? JSON.parse(xe) : {};
                      } catch {
                        return {};
                      }
                    })(U),
                  ),
                  { persistConfig: !1 },
                ),
                ie.config,
              ),
              (Z => {
                const xe = {};
                return (
                  Z.location.search
                    .slice(1)
                    .split('&')
                    .map(U => U.split('='))
                    .map(([U, ie]) => [decodeURIComponent(U), decodeURIComponent(ie)])
                    .filter(([U]) => ((Z, xe) => Z.substr(0, xe.length) === xe)(U, 'ionic:'))
                    .map(([U, ie]) => [U.slice(6), ie])
                    .forEach(([U, ie]) => {
                      xe[U] = ie;
                    }),
                  xe
                );
              })(U),
            ),
            Z,
          );
          Ue.reset(Et),
            Ue.getBoolean('persistConfig') &&
              ((Z, xe) => {
                try {
                  Z.sessionStorage.setItem(it, JSON.stringify(xe));
                } catch {
                  return;
                }
              })(U, Et),
            Re(U),
            (ie.config = Ue),
            (ie.mode = Ie = Ue.get('mode', xe.documentElement.getAttribute('mode') || (he(U, 'ios') ? 'ios' : 'md'))),
            Ue.set('mode', Ie),
            xe.documentElement.setAttribute('mode', Ie),
            xe.documentElement.classList.add(Ie),
            Ue.getBoolean('_testing') && Ue.set('animated', !1);
          const qe = Rt => {
              var Xe;
              return null === (Xe = Rt.tagName) || void 0 === Xe ? void 0 : Xe.startsWith('ION-');
            },
            xt = Rt => ['ios', 'md'].includes(Rt);
          (0, de.c)(Rt => {
            for (; Rt; ) {
              const Xe = Rt.mode || Rt.getAttribute('mode');
              if (Xe) {
                if (xt(Xe)) return Xe;
                qe(Rt) && console.warn('Invalid ionic mode: "' + Xe + '", expected: "ios" or "md"');
              }
              Rt = Rt.parentElement;
            }
            return Ie;
          });
        };
    },
    4569: (cn, vt, ne) => {
      'use strict';
      ne.r(vt), ne.d(vt, { iosTransitionAnimation: () => re, shadow: () => S });
      var de = ne(3503),
        Ke = ne(7555);
      ne(8476), ne(4363);
      const Fe = oe => document.querySelector(`${oe}.ion-cloned-element`),
        S = oe => oe.shadowRoot || oe,
        Me = oe => {
          const J = 'ION-TABS' === oe.tagName ? oe : oe.querySelector('ion-tabs'),
            G = 'ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large';
          if (null != J) {
            const P = J.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');
            return null != P ? P.querySelector(G) : null;
          }
          return oe.querySelector(G);
        },
        it = (oe, J) => {
          const G = 'ION-TABS' === oe.tagName ? oe : oe.querySelector('ion-tabs');
          let P = [];
          if (null != G) {
            const x = G.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');
            null != x && (P = x.querySelectorAll('ion-buttons'));
          } else P = oe.querySelectorAll('ion-buttons');
          for (const x of P) {
            const me = x.closest('ion-header'),
              De = me && !me.classList.contains('header-collapse-condense-inactive'),
              We = x.querySelector('ion-back-button'),
              Ee = x.classList.contains('buttons-collapse');
            if (null !== We && ('start' === x.slot || '' === x.slot) && ((Ee && De && J) || !Ee)) return We;
          }
          return null;
        },
        he = (oe, J, G, P, x, me, De, We, Ee) => {
          var Ne, y;
          const D = J ? `calc(100% - ${x.right + 4}px)` : x.left - 4 + 'px',
            M = J ? 'right' : 'left',
            b = J ? 'left' : 'right',
            L = J ? 'right' : 'left',
            N =
              (null === (Ne = me.textContent) || void 0 === Ne ? void 0 : Ne.trim()) ===
              (null === (y = We.textContent) || void 0 === y ? void 0 : y.trim()),
            Ie = (Ee.height - fe) / De.height,
            tt = N ? `scale(${Ee.width / De.width}, ${Ie})` : `scale(${Ie})`,
            Bt = 'scale(1)',
            xe = S(P).querySelector('ion-icon').getBoundingClientRect(),
            U = J ? xe.width / 2 - (xe.right - x.right) + 'px' : x.left - xe.width / 2 + 'px',
            ie = J ? `-${window.innerWidth - x.right}px` : `${x.left}px`,
            Pe = `${Ee.top}px`,
            Et = `${x.top}px`,
            Rt = G
              ? [
                  { offset: 0, transform: `translate3d(${ie}, ${Et}, 0)` },
                  { offset: 1, transform: `translate3d(${U}, ${Pe}, 0)` },
                ]
              : [
                  { offset: 0, transform: `translate3d(${U}, ${Pe}, 0)` },
                  { offset: 1, transform: `translate3d(${ie}, ${Et}, 0)` },
                ],
            Zt = G
              ? [
                  { offset: 0, opacity: 1, transform: Bt },
                  { offset: 1, opacity: 0, transform: tt },
                ]
              : [
                  { offset: 0, opacity: 0, transform: tt },
                  { offset: 1, opacity: 1, transform: Bt },
                ],
            wn = G
              ? [
                  { offset: 0, opacity: 1, transform: 'scale(1)' },
                  { offset: 0.2, opacity: 0, transform: 'scale(0.6)' },
                  { offset: 1, opacity: 0, transform: 'scale(0.6)' },
                ]
              : [
                  { offset: 0, opacity: 0, transform: 'scale(0.6)' },
                  { offset: 0.6, opacity: 0, transform: 'scale(0.6)' },
                  { offset: 1, opacity: 1, transform: 'scale(1)' },
                ],
            qt = (0, de.c)(),
            ae = (0, de.c)(),
            H = (0, de.c)(),
            X = Fe('ion-back-button'),
            Qe = S(X).querySelector('.button-text'),
            Tt = S(X).querySelector('ion-icon');
          (X.text = P.text),
            (X.mode = P.mode),
            (X.icon = P.icon),
            (X.color = P.color),
            (X.disabled = P.disabled),
            X.style.setProperty('display', 'block'),
            X.style.setProperty('position', 'fixed'),
            ae.addElement(Tt),
            qt.addElement(Qe),
            H.addElement(X),
            H.beforeStyles({ position: 'absolute', top: '0px', [L]: '0px' }).keyframes(Rt),
            qt
              .beforeStyles({ 'transform-origin': `${M} top` })
              .beforeAddWrite(() => {
                P.style.setProperty('display', 'none'), X.style.setProperty(M, D);
              })
              .afterAddWrite(() => {
                P.style.setProperty('display', ''), X.style.setProperty('display', 'none'), X.style.removeProperty(M);
              })
              .keyframes(Zt),
            ae.beforeStyles({ 'transform-origin': `${b} center` }).keyframes(wn),
            oe.addAnimation([qt, ae, H]);
        },
        Re = (oe, J, G, P, x, me, De, We) => {
          var Ee, Ne;
          const y = J ? 'right' : 'left',
            D = J ? `calc(100% - ${x.right}px)` : `${x.left}px`,
            b = `${x.top}px`,
            N = J ? `-${window.innerWidth - We.right - 8}px` : We.x - 8 + 'px',
            Ie = We.y - 2 + 'px',
            tt =
              (null === (Ee = De.textContent) || void 0 === Ee ? void 0 : Ee.trim()) ===
              (null === (Ne = P.textContent) || void 0 === Ne ? void 0 : Ne.trim()),
            Z = We.height / (me.height - fe),
            xe = 'scale(1)',
            U = tt ? `scale(${We.width / me.width}, ${Z})` : `scale(${Z})`,
            Et = G
              ? [
                  { offset: 0, opacity: 0, transform: `translate3d(${N}, ${Ie}, 0) ${U}` },
                  { offset: 0.1, opacity: 0 },
                  { offset: 1, opacity: 1, transform: `translate3d(0px, ${b}, 0) ${xe}` },
                ]
              : [
                  { offset: 0, opacity: 0.99, transform: `translate3d(0px, ${b}, 0) ${xe}` },
                  { offset: 0.6, opacity: 0 },
                  { offset: 1, opacity: 0, transform: `translate3d(${N}, ${Ie}, 0) ${U}` },
                ],
            qe = Fe('ion-title'),
            xt = (0, de.c)();
          (qe.innerText = P.innerText),
            (qe.size = P.size),
            (qe.color = P.color),
            xt.addElement(qe),
            xt
              .beforeStyles({ 'transform-origin': `${y} top`, height: `${x.height}px`, display: '', position: 'relative', [y]: D })
              .beforeAddWrite(() => {
                P.style.setProperty('opacity', '0');
              })
              .afterAddWrite(() => {
                P.style.setProperty('opacity', ''), qe.style.setProperty('display', 'none');
              })
              .keyframes(Et),
            oe.addAnimation(xt);
        },
        re = (oe, J) => {
          var G;
          try {
            const P = 'cubic-bezier(0.32,0.72,0,1)',
              x = 'opacity',
              me = 'transform',
              De = '0%',
              Ee = 'rtl' === oe.ownerDocument.dir,
              Ne = Ee ? '-99.5%' : '99.5%',
              y = Ee ? '33%' : '-33%',
              D = J.enteringEl,
              M = J.leavingEl,
              b = 'back' === J.direction,
              L = D.querySelector(':scope > ion-content'),
              N = D.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'),
              W = D.querySelectorAll(':scope > ion-header > ion-toolbar'),
              Ie = (0, de.c)(),
              tt = (0, de.c)();
            if (
              (Ie.addElement(D)
                .duration((null !== (G = J.duration) && void 0 !== G ? G : 0) || 540)
                .easing(J.easing || P)
                .fill('both')
                .beforeRemoveClass('ion-page-invisible'),
              M && null != oe)
            ) {
              const U = (0, de.c)();
              U.addElement(oe), Ie.addAnimation(U);
            }
            if (
              (L || 0 !== W.length || 0 !== N.length
                ? (tt.addElement(L), tt.addElement(N))
                : tt.addElement(D.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')),
              Ie.addAnimation(tt),
              b
                ? tt.beforeClearStyles([x]).fromTo('transform', `translateX(${y})`, `translateX(${De})`).fromTo(x, 0.8, 1)
                : tt.beforeClearStyles([x]).fromTo('transform', `translateX(${Ne})`, `translateX(${De})`),
              L)
            ) {
              const U = S(L).querySelector('.transition-effect');
              if (U) {
                const ie = U.querySelector('.transition-cover'),
                  Pe = U.querySelector('.transition-shadow'),
                  Et = (0, de.c)(),
                  qe = (0, de.c)(),
                  xt = (0, de.c)();
                Et.addElement(U).beforeStyles({ opacity: '1', display: 'block' }).afterStyles({ opacity: '', display: '' }),
                  qe.addElement(ie).beforeClearStyles([x]).fromTo(x, 0, 0.1),
                  xt.addElement(Pe).beforeClearStyles([x]).fromTo(x, 0.03, 0.7),
                  Et.addAnimation([qe, xt]),
                  tt.addAnimation([Et]);
              }
            }
            const Bt = D.querySelector('ion-header.header-collapse-condense'),
              { forward: Z, backward: xe } = ((oe, J, G, P, x) => {
                const me = it(P, G),
                  De = Me(x),
                  We = Me(P),
                  Ee = it(x, G),
                  Ne = null !== me && null !== De && !G,
                  y = null !== We && null !== Ee && G;
                if (Ne) {
                  const D = De.getBoundingClientRect(),
                    M = me.getBoundingClientRect(),
                    b = S(me).querySelector('.button-text'),
                    L = b.getBoundingClientRect(),
                    W = S(De).querySelector('.toolbar-title').getBoundingClientRect();
                  Re(oe, J, G, De, D, W, b, L), he(oe, J, G, me, M, b, L, De, W);
                } else if (y) {
                  const D = We.getBoundingClientRect(),
                    M = Ee.getBoundingClientRect(),
                    b = S(Ee).querySelector('.button-text'),
                    L = b.getBoundingClientRect(),
                    W = S(We).querySelector('.toolbar-title').getBoundingClientRect();
                  Re(oe, J, G, We, D, W, b, L), he(oe, J, G, Ee, M, b, L, We, W);
                }
                return { forward: Ne, backward: y };
              })(Ie, Ee, b, D, M);
            if (
              (W.forEach(U => {
                const ie = (0, de.c)();
                ie.addElement(U), Ie.addAnimation(ie);
                const Pe = (0, de.c)();
                Pe.addElement(U.querySelector('ion-title'));
                const Et = (0, de.c)(),
                  qe = Array.from(U.querySelectorAll('ion-buttons,[menuToggle]')),
                  xt = U.closest('ion-header'),
                  Rt = xt?.classList.contains('header-collapse-condense-inactive');
                let Xe;
                (Xe = qe.filter(
                  b
                    ? wn => {
                        const qt = wn.classList.contains('buttons-collapse');
                        return (qt && !Rt) || !qt;
                      }
                    : wn => !wn.classList.contains('buttons-collapse'),
                )),
                  Et.addElement(Xe);
                const Fn = (0, de.c)();
                Fn.addElement(U.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'));
                const Zt = (0, de.c)();
                Zt.addElement(S(U).querySelector('.toolbar-background'));
                const tr = (0, de.c)(),
                  yt = U.querySelector('ion-back-button');
                if ((yt && tr.addElement(yt), ie.addAnimation([Pe, Et, Fn, Zt, tr]), Et.fromTo(x, 0.01, 1), Fn.fromTo(x, 0.01, 1), b))
                  Rt || Pe.fromTo('transform', `translateX(${y})`, `translateX(${De})`).fromTo(x, 0.01, 1),
                    Fn.fromTo('transform', `translateX(${y})`, `translateX(${De})`),
                    tr.fromTo(x, 0.01, 1);
                else if (
                  (Bt || Pe.fromTo('transform', `translateX(${Ne})`, `translateX(${De})`).fromTo(x, 0.01, 1),
                  Fn.fromTo('transform', `translateX(${Ne})`, `translateX(${De})`),
                  Zt.beforeClearStyles([x, 'transform']),
                  xt?.translucent
                    ? Zt.fromTo('transform', Ee ? 'translateX(-100%)' : 'translateX(100%)', 'translateX(0px)')
                    : Zt.fromTo(x, 0.01, 'var(--opacity)'),
                  Z || tr.fromTo(x, 0.01, 1),
                  yt && !Z)
                ) {
                  const qt = (0, de.c)();
                  qt
                    .addElement(S(yt).querySelector('.button-text'))
                    .fromTo('transform', Ee ? 'translateX(-100px)' : 'translateX(100px)', 'translateX(0px)'),
                    ie.addAnimation(qt);
                }
              }),
              M)
            ) {
              const U = (0, de.c)(),
                ie = M.querySelector(':scope > ion-content'),
                Pe = M.querySelectorAll(':scope > ion-header > ion-toolbar'),
                Et = M.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
              if (
                (ie || 0 !== Pe.length || 0 !== Et.length
                  ? (U.addElement(ie), U.addElement(Et))
                  : U.addElement(M.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')),
                Ie.addAnimation(U),
                b)
              ) {
                U.beforeClearStyles([x]).fromTo('transform', `translateX(${De})`, Ee ? 'translateX(-100%)' : 'translateX(100%)');
                const qe = (0, Ke.g)(M);
                Ie.afterAddWrite(() => {
                  'normal' === Ie.getDirection() && qe.style.setProperty('display', 'none');
                });
              } else U.fromTo('transform', `translateX(${De})`, `translateX(${y})`).fromTo(x, 1, 0.8);
              if (ie) {
                const qe = S(ie).querySelector('.transition-effect');
                if (qe) {
                  const xt = qe.querySelector('.transition-cover'),
                    Rt = qe.querySelector('.transition-shadow'),
                    Xe = (0, de.c)(),
                    Fn = (0, de.c)(),
                    Zt = (0, de.c)();
                  Xe.addElement(qe).beforeStyles({ opacity: '1', display: 'block' }).afterStyles({ opacity: '', display: '' }),
                    Fn.addElement(xt).beforeClearStyles([x]).fromTo(x, 0.1, 0),
                    Zt.addElement(Rt).beforeClearStyles([x]).fromTo(x, 0.7, 0.03),
                    Xe.addAnimation([Fn, Zt]),
                    U.addAnimation([Xe]);
                }
              }
              Pe.forEach(qe => {
                const xt = (0, de.c)();
                xt.addElement(qe);
                const Rt = (0, de.c)();
                Rt.addElement(qe.querySelector('ion-title'));
                const Xe = (0, de.c)(),
                  Fn = qe.querySelectorAll('ion-buttons,[menuToggle]'),
                  Zt = qe.closest('ion-header'),
                  tr = Zt?.classList.contains('header-collapse-condense-inactive'),
                  yt = Array.from(Fn).filter(Qe => {
                    const Tt = Qe.classList.contains('buttons-collapse');
                    return (Tt && !tr) || !Tt;
                  });
                Xe.addElement(yt);
                const wn = (0, de.c)(),
                  qt = qe.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])');
                qt.length > 0 && wn.addElement(qt);
                const ae = (0, de.c)();
                ae.addElement(S(qe).querySelector('.toolbar-background'));
                const H = (0, de.c)(),
                  X = qe.querySelector('ion-back-button');
                if (
                  (X && H.addElement(X),
                  xt.addAnimation([Rt, Xe, wn, H, ae]),
                  Ie.addAnimation(xt),
                  H.fromTo(x, 0.99, 0),
                  Xe.fromTo(x, 0.99, 0),
                  wn.fromTo(x, 0.99, 0),
                  b)
                ) {
                  if (
                    (tr || Rt.fromTo('transform', `translateX(${De})`, Ee ? 'translateX(-100%)' : 'translateX(100%)').fromTo(x, 0.99, 0),
                    wn.fromTo('transform', `translateX(${De})`, Ee ? 'translateX(-100%)' : 'translateX(100%)'),
                    ae.beforeClearStyles([x, 'transform']),
                    Zt?.translucent
                      ? ae.fromTo('transform', 'translateX(0px)', Ee ? 'translateX(-100%)' : 'translateX(100%)')
                      : ae.fromTo(x, 'var(--opacity)', 0),
                    X && !xe)
                  ) {
                    const Tt = (0, de.c)();
                    Tt.addElement(S(X).querySelector('.button-text')).fromTo(
                      'transform',
                      `translateX(${De})`,
                      `translateX(${(Ee ? -124 : 124) + 'px'})`,
                    ),
                      xt.addAnimation(Tt);
                  }
                } else
                  tr || Rt.fromTo('transform', `translateX(${De})`, `translateX(${y})`).fromTo(x, 0.99, 0).afterClearStyles([me, x]),
                    wn.fromTo('transform', `translateX(${De})`, `translateX(${y})`).afterClearStyles([me, x]),
                    H.afterClearStyles([x]),
                    Rt.afterClearStyles([x]),
                    Xe.afterClearStyles([x]);
              });
            }
            return Ie;
          } catch (P) {
            throw P;
          }
        },
        fe = 10;
    },
    2942: (cn, vt, ne) => {
      'use strict';
      ne.r(vt), ne.d(vt, { mdTransitionAnimation: () => bt });
      var de = ne(3503),
        Ke = ne(7555);
      ne(8476), ne(4363);
      const bt = (Fe, S) => {
        var Me, it, et;
        const re = 'back' === S.direction,
          oe = S.leavingEl,
          J = (0, Ke.g)(S.enteringEl),
          G = J.querySelector('ion-toolbar'),
          P = (0, de.c)();
        if (
          (P.addElement(J).fill('both').beforeRemoveClass('ion-page-invisible'),
          re
            ? P.duration((null !== (Me = S.duration) && void 0 !== Me ? Me : 0) || 200).easing('cubic-bezier(0.47,0,0.745,0.715)')
            : P.duration((null !== (it = S.duration) && void 0 !== it ? it : 0) || 280)
                .easing('cubic-bezier(0.36,0.66,0.04,1)')
                .fromTo('transform', 'translateY(40px)', 'translateY(0px)')
                .fromTo('opacity', 0.01, 1),
          G)
        ) {
          const x = (0, de.c)();
          x.addElement(G), P.addAnimation(x);
        }
        if (oe && re) {
          P.duration((null !== (et = S.duration) && void 0 !== et ? et : 0) || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
          const x = (0, de.c)();
          x
            .addElement((0, Ke.g)(oe))
            .onFinish(me => {
              1 === me && x.elements.length > 0 && x.elements[0].style.setProperty('display', 'none');
            })
            .fromTo('transform', 'translateY(0px)', 'translateY(40px)')
            .fromTo('opacity', 1, 0),
            P.addAnimation(x);
        }
        return P;
      };
    },
    5516: (cn, vt, ne) => {
      'use strict';
      ne.d(vt, {
        B: () => Xe,
        G: () => Fn,
        O: () => Zt,
        a: () => Re,
        b: () => re,
        c: () => G,
        d: () => tr,
        e: () => yt,
        f: () => Bt,
        g: () => xe,
        h: () => Pe,
        i: () => qe,
        j: () => x,
        k: () => me,
        m: () => oe,
        n: () => Ne,
        o: () => Ie,
        s: () => Rt,
      });
      var de = ne(467),
        Ke = ne(8476),
        Ue = ne(3113),
        st = ne(611),
        bt = ne(5938),
        Fe = ne(5638),
        S = ne(4929);
      let Me = 0,
        it = 0;
      const et = new WeakMap(),
        he = ae => ({
          create: H => De(ae, H),
          dismiss: (H, X, Qe) => L(document, H, X, ae, Qe),
          getTop: () =>
            (0, de.A)(function* () {
              return Ie(document, ae);
            })(),
        }),
        Re = he('ion-alert'),
        re = he('ion-action-sheet'),
        oe = he('ion-modal'),
        G = he('ion-popover'),
        x = ae => {
          typeof document < 'u' && b(document);
          const H = Me++;
          ae.overlayIndex = H;
        },
        me = ae => (ae.hasAttribute('id') || (ae.id = 'ion-overlay-' + ++it), ae.id),
        De = (ae, H) =>
          typeof window < 'u' && typeof window.customElements < 'u'
            ? window.customElements.whenDefined(ae).then(() => {
                const X = document.createElement(ae);
                return (
                  X.classList.add('overlay-hidden'),
                  Object.assign(X, Object.assign(Object.assign({}, H), { hasController: !0 })),
                  U(document).appendChild(X),
                  new Promise(Qe => (0, Fe.c)(X, Qe))
                );
              })
            : Promise.resolve(),
        We =
          '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',
        Ne = (ae, H) => {
          const X = ae.querySelector(We);
          D(X, H);
        },
        y = (ae, H) => {
          const X = Array.from(ae.querySelectorAll(We));
          D(X.length > 0 ? X[X.length - 1] : null, H);
        },
        D = (ae, H) => {
          let X = ae;
          const Qe = ae?.shadowRoot;
          Qe && (X = Qe.querySelector(We) || ae), X ? (0, Fe.f)(X) : H.focus();
        },
        b = ae => {
          0 === Me &&
            ((Me = 1),
            ae.addEventListener(
              'focus',
              H => {
                ((ae, H) => {
                  const X = Ie(H, 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover'),
                    Qe = ae.target;
                  X &&
                    Qe &&
                    !X.classList.contains('ion-disable-focus-trap') &&
                    (X.shadowRoot
                      ? (() => {
                          if (X.contains(Qe)) X.lastFocus = Qe;
                          else if ('ION-TOAST' === Qe.tagName) D(X.lastFocus, X);
                          else {
                            const Xt = X.lastFocus;
                            Ne(X, X), Xt === H.activeElement && y(X, X), (X.lastFocus = H.activeElement);
                          }
                        })()
                      : (() => {
                          if (X === Qe) X.lastFocus = void 0;
                          else if ('ION-TOAST' === Qe.tagName) D(X.lastFocus, X);
                          else {
                            const Xt = (0, Fe.g)(X);
                            if (!Xt.contains(Qe)) return;
                            const hn = Xt.querySelector('.ion-overlay-wrapper');
                            if (!hn) return;
                            if (hn.contains(Qe) || Qe === Xt.querySelector('ion-backdrop')) X.lastFocus = Qe;
                            else {
                              const Gt = X.lastFocus;
                              Ne(hn, X), Gt === H.activeElement && y(hn, X), (X.lastFocus = H.activeElement);
                            }
                          }
                        })());
                })(H, ae);
              },
              !0,
            ),
            ae.addEventListener('ionBackButton', H => {
              const X = Ie(ae);
              X?.backdropDismiss &&
                H.detail.register(Ue.OVERLAY_BACK_BUTTON_PRIORITY, () => {
                  X.dismiss(void 0, Xe);
                });
            }),
            (0, Ue.shouldUseCloseWatcher)() ||
              ae.addEventListener('keydown', H => {
                if ('Escape' === H.key) {
                  const X = Ie(ae);
                  X?.backdropDismiss && X.dismiss(void 0, Xe);
                }
              }));
        },
        L = (ae, H, X, Qe, Tt) => {
          const Yt = Ie(ae, Qe, Tt);
          return Yt ? Yt.dismiss(H, X) : Promise.reject('overlay does not exist');
        },
        W = (ae, H) =>
          ((ae, H) => (
            void 0 === H && (H = 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast'),
            Array.from(ae.querySelectorAll(H)).filter(X => X.overlayIndex > 0)
          ))(ae, H).filter(X => !(ae => ae.classList.contains('overlay-hidden'))(X)),
        Ie = (ae, H, X) => {
          const Qe = W(ae, H);
          return void 0 === X ? Qe[Qe.length - 1] : Qe.find(Tt => Tt.id === X);
        },
        tt = (ae = !1) => {
          const X = U(document).querySelector('ion-router-outlet, ion-nav, #ion-view-container-root');
          X && (ae ? X.setAttribute('aria-hidden', 'true') : X.removeAttribute('aria-hidden'));
        },
        Bt = (function () {
          var ae = (0, de.A)(function* (H, X, Qe, Tt, Yt) {
            var Xt, hn;
            if (H.presented) return;
            tt(!0),
              wn(H.el),
              (H.presented = !0),
              H.willPresent.emit(),
              null === (Xt = H.willPresentShorthand) || void 0 === Xt || Xt.emit();
            const Gt = (0, st.b)(H),
              Wn = H.enterAnimation ? H.enterAnimation : st.c.get(X, 'ios' === Gt ? Qe : Tt);
            (yield ie(H, Wn, H.el, Yt)) && (H.didPresent.emit(), null === (hn = H.didPresentShorthand) || void 0 === hn || hn.emit()),
              'ION-TOAST' !== H.el.tagName && Z(H.el),
              H.keyboardClose && (null === document.activeElement || !H.el.contains(document.activeElement)) && H.el.focus(),
              H.el.removeAttribute('aria-hidden');
          });
          return function (X, Qe, Tt, Yt, Xt) {
            return ae.apply(this, arguments);
          };
        })(),
        Z = (function () {
          var ae = (0, de.A)(function* (H) {
            let X = document.activeElement;
            if (!X) return;
            const Qe = X?.shadowRoot;
            Qe && (X = Qe.querySelector(We) || X),
              yield H.onDidDismiss(),
              (null === document.activeElement || document.activeElement === document.body) && X.focus();
          });
          return function (X) {
            return ae.apply(this, arguments);
          };
        })(),
        xe = (function () {
          var ae = (0, de.A)(function* (H, X, Qe, Tt, Yt, Xt, hn) {
            var Gt, Wn;
            if (!H.presented) return !1;
            void 0 !== Ke.d && 1 === W(Ke.d).length && tt(!1), (H.presented = !1);
            try {
              H.el.style.setProperty('pointer-events', 'none'),
                H.willDismiss.emit({ data: X, role: Qe }),
                null === (Gt = H.willDismissShorthand) || void 0 === Gt || Gt.emit({ data: X, role: Qe });
              const ar = (0, st.b)(H),
                Pr = H.leaveAnimation ? H.leaveAnimation : st.c.get(Tt, 'ios' === ar ? Yt : Xt);
              Qe !== Fn && (yield ie(H, Pr, H.el, hn)),
                H.didDismiss.emit({ data: X, role: Qe }),
                null === (Wn = H.didDismissShorthand) || void 0 === Wn || Wn.emit({ data: X, role: Qe }),
                (et.get(H) || []).forEach(Tr => Tr.destroy()),
                et.delete(H),
                H.el.classList.add('overlay-hidden'),
                H.el.style.removeProperty('pointer-events'),
                void 0 !== H.el.lastFocus && (H.el.lastFocus = void 0);
            } catch (ar) {
              console.error(ar);
            }
            return H.el.remove(), qt(), !0;
          });
          return function (X, Qe, Tt, Yt, Xt, hn, Gt) {
            return ae.apply(this, arguments);
          };
        })(),
        U = ae => ae.querySelector('ion-app') || ae.body,
        ie = (function () {
          var ae = (0, de.A)(function* (H, X, Qe, Tt) {
            Qe.classList.remove('overlay-hidden');
            const Xt = X(H.el, Tt);
            (!H.animated || !st.c.getBoolean('animated', !0)) && Xt.duration(0),
              H.keyboardClose &&
                Xt.beforeAddWrite(() => {
                  const Gt = Qe.ownerDocument.activeElement;
                  Gt?.matches('input,ion-input, ion-textarea') && Gt.blur();
                });
            const hn = et.get(H) || [];
            return et.set(H, [...hn, Xt]), yield Xt.play(), !0;
          });
          return function (X, Qe, Tt, Yt) {
            return ae.apply(this, arguments);
          };
        })(),
        Pe = (ae, H) => {
          let X;
          const Qe = new Promise(Tt => (X = Tt));
          return (
            Et(ae, H, Tt => {
              X(Tt.detail);
            }),
            Qe
          );
        },
        Et = (ae, H, X) => {
          const Qe = Tt => {
            (0, Fe.b)(ae, H, Qe), X(Tt);
          };
          (0, Fe.a)(ae, H, Qe);
        },
        qe = ae => 'cancel' === ae || ae === Xe,
        xt = ae => ae(),
        Rt = (ae, H) => {
          if ('function' == typeof ae)
            return st.c.get(
              '_zoneGate',
              xt,
            )(() => {
              try {
                return ae(H);
              } catch (Qe) {
                throw Qe;
              }
            });
        },
        Xe = 'backdrop',
        Fn = 'gesture',
        Zt = 39,
        tr = ae => {
          let X,
            H = !1;
          const Qe = (0, bt.C)(),
            Tt = (hn = !1) => {
              if (X && !hn) return { delegate: X, inline: H };
              const { el: Gt, hasController: Wn, delegate: ar } = ae;
              return (H = null !== Gt.parentNode && !Wn), (X = H ? ar || Qe : ar), { inline: H, delegate: X };
            };
          return {
            attachViewToDom: (function () {
              var hn = (0, de.A)(function* (Gt) {
                const { delegate: Wn } = Tt(!0);
                if (Wn) return yield Wn.attachViewToDom(ae.el, Gt);
                const { hasController: ar } = ae;
                if (ar && void 0 !== Gt) throw new Error('framework delegate is missing');
                return null;
              });
              return function (Wn) {
                return hn.apply(this, arguments);
              };
            })(),
            removeViewFromDom: () => {
              const { delegate: hn } = Tt();
              hn && void 0 !== ae.el && hn.removeViewFromDom(ae.el.parentElement, ae.el);
            },
          };
        },
        yt = () => {
          let ae;
          const H = () => {
            ae && (ae(), (ae = void 0));
          };
          return {
            addClickListener: (Qe, Tt) => {
              H();
              const Yt = void 0 !== Tt ? document.getElementById(Tt) : null;
              Yt
                ? (ae = ((hn, Gt) => {
                    const Wn = () => {
                      Gt.present();
                    };
                    return (
                      hn.addEventListener('click', Wn),
                      () => {
                        hn.removeEventListener('click', Wn);
                      }
                    );
                  })(Yt, Qe))
                : (0, S.p)(
                    `A trigger element with the ID "${Tt}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`,
                    Qe,
                  );
            },
            removeClickListener: H,
          };
        },
        wn = ae => {
          var H;
          if (void 0 === Ke.d) return;
          const X = W(Ke.d);
          for (let Qe = X.length - 1; Qe >= 0; Qe--) {
            const Tt = X[Qe],
              Yt = null !== (H = X[Qe + 1]) && void 0 !== H ? H : ae;
            (Yt.hasAttribute('aria-hidden') || 'ION-TOAST' !== Yt.tagName) && Tt.setAttribute('aria-hidden', 'true');
          }
        },
        qt = () => {
          if (void 0 === Ke.d) return;
          const ae = W(Ke.d);
          for (let H = ae.length - 1; H >= 0; H--) {
            const X = ae[H];
            if ((X.removeAttribute('aria-hidden'), 'ION-TOAST' !== X.tagName)) break;
          }
        };
    },
    8314: (cn, vt, ne) => {
      'use strict';
      var de = ne(467);
      let Ue = null,
        bt = 1;
      const Fe = Symbol('SIGNAL');
      function S(e) {
        const n = Ue;
        return (Ue = e), n;
      }
      function fe(e) {
        if ((!Ne(e) || e.dirty) && (e.dirty || e.lastCleanEpoch !== bt)) {
          if (!e.producerMustRecompute(e) && !me(e)) return (e.dirty = !1), void (e.lastCleanEpoch = bt);
          e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = bt);
        }
      }
      function me(e) {
        y(e);
        for (let n = 0; n < e.producerNode.length; n++) {
          const t = e.producerNode[n],
            r = e.producerLastReadVersion[n];
          if (r !== t.version || (fe(t), r !== t.version)) return !0;
        }
        return !1;
      }
      function Ee(e, n) {
        if (
          ((function D(e) {
            (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
          })(e),
          y(e),
          1 === e.liveConsumerNode.length)
        )
          for (let r = 0; r < e.producerNode.length; r++) Ee(e.producerNode[r], e.producerIndexOfThis[r]);
        const t = e.liveConsumerNode.length - 1;
        if (
          ((e.liveConsumerNode[n] = e.liveConsumerNode[t]),
          (e.liveConsumerIndexOfThis[n] = e.liveConsumerIndexOfThis[t]),
          e.liveConsumerNode.length--,
          e.liveConsumerIndexOfThis.length--,
          n < e.liveConsumerNode.length)
        ) {
          const r = e.liveConsumerIndexOfThis[n],
            o = e.liveConsumerNode[n];
          y(o), (o.producerIndexOfThis[r] = n);
        }
      }
      function Ne(e) {
        return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
      }
      function y(e) {
        (e.producerNode ??= []), (e.producerIndexOfThis ??= []), (e.producerLastReadVersion ??= []);
      }
      let tt = null;
      function yt(e) {
        return 'function' == typeof e;
      }
      function wn(e) {
        const t = e(r => {
          Error.call(r), (r.stack = new Error().stack);
        });
        return (t.prototype = Object.create(Error.prototype)), (t.prototype.constructor = t), t;
      }
      const qt = wn(
        e =>
          function (t) {
            e(this),
              (this.message = t
                ? `${t.length} errors occurred during unsubscription:\n${t.map((r, o) => `${o + 1}) ${r.toString()}`).join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = t);
          },
      );
      function ae(e, n) {
        if (e) {
          const t = e.indexOf(n);
          0 <= t && e.splice(t, 1);
        }
      }
      class H {
        constructor(n) {
          (this.initialTeardown = n), (this.closed = !1), (this._parentage = null), (this._finalizers = null);
        }
        unsubscribe() {
          let n;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: t } = this;
            if (t)
              if (((this._parentage = null), Array.isArray(t))) for (const i of t) i.remove(this);
              else t.remove(this);
            const { initialTeardown: r } = this;
            if (yt(r))
              try {
                r();
              } catch (i) {
                n = i instanceof qt ? i.errors : [i];
              }
            const { _finalizers: o } = this;
            if (o) {
              this._finalizers = null;
              for (const i of o)
                try {
                  Tt(i);
                } catch (s) {
                  (n = n ?? []), s instanceof qt ? (n = [...n, ...s.errors]) : n.push(s);
                }
            }
            if (n) throw new qt(n);
          }
        }
        add(n) {
          var t;
          if (n && n !== this)
            if (this.closed) Tt(n);
            else {
              if (n instanceof H) {
                if (n.closed || n._hasParent(this)) return;
                n._addParent(this);
              }
              (this._finalizers = null !== (t = this._finalizers) && void 0 !== t ? t : []).push(n);
            }
        }
        _hasParent(n) {
          const { _parentage: t } = this;
          return t === n || (Array.isArray(t) && t.includes(n));
        }
        _addParent(n) {
          const { _parentage: t } = this;
          this._parentage = Array.isArray(t) ? (t.push(n), t) : t ? [t, n] : n;
        }
        _removeParent(n) {
          const { _parentage: t } = this;
          t === n ? (this._parentage = null) : Array.isArray(t) && ae(t, n);
        }
        remove(n) {
          const { _finalizers: t } = this;
          t && ae(t, n), n instanceof H && n._removeParent(this);
        }
      }
      H.EMPTY = (() => {
        const e = new H();
        return (e.closed = !0), e;
      })();
      const X = H.EMPTY;
      function Qe(e) {
        return e instanceof H || (e && 'closed' in e && yt(e.remove) && yt(e.add) && yt(e.unsubscribe));
      }
      function Tt(e) {
        yt(e) ? e() : e.unsubscribe();
      }
      const Yt = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        Xt = {
          setTimeout(e, n, ...t) {
            const { delegate: r } = Xt;
            return r?.setTimeout ? r.setTimeout(e, n, ...t) : setTimeout(e, n, ...t);
          },
          clearTimeout(e) {
            const { delegate: n } = Xt;
            return (n?.clearTimeout || clearTimeout)(e);
          },
          delegate: void 0,
        };
      function hn(e) {
        Xt.setTimeout(() => {
          const { onUnhandledError: n } = Yt;
          if (!n) throw e;
          n(e);
        });
      }
      function Gt() {}
      const Wn = Gr('C', void 0, void 0);
      function Gr(e, n, t) {
        return { kind: e, value: n, error: t };
      }
      let Tr = null;
      function Co(e) {
        if (Yt.useDeprecatedSynchronousErrorHandling) {
          const n = !Tr;
          if ((n && (Tr = { errorThrown: !1, error: null }), e(), n)) {
            const { errorThrown: t, error: r } = Tr;
            if (((Tr = null), t)) throw r;
          }
        } else e();
      }
      class po extends H {
        constructor(n) {
          super(), (this.isStopped = !1), n ? ((this.destination = n), Qe(n) && n.add(this)) : (this.destination = Y);
        }
        static create(n, t, r) {
          return new w(n, t, r);
        }
        next(n) {
          this.isStopped
            ? T(
                (function Pr(e) {
                  return Gr('N', e, void 0);
                })(n),
                this,
              )
            : this._next(n);
        }
        error(n) {
          this.isStopped
            ? T(
                (function ar(e) {
                  return Gr('E', void 0, e);
                })(n),
                this,
              )
            : ((this.isStopped = !0), this._error(n));
        }
        complete() {
          this.isStopped ? T(Wn, this) : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
        }
        _next(n) {
          this.destination.next(n);
        }
        _error(n) {
          try {
            this.destination.error(n);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const bo = Function.prototype.bind;
      function Lo(e, n) {
        return bo.call(e, n);
      }
      class Wr {
        constructor(n) {
          this.partialObserver = n;
        }
        next(n) {
          const { partialObserver: t } = this;
          if (t.next)
            try {
              t.next(n);
            } catch (r) {
              A(r);
            }
        }
        error(n) {
          const { partialObserver: t } = this;
          if (t.error)
            try {
              t.error(n);
            } catch (r) {
              A(r);
            }
          else A(n);
        }
        complete() {
          const { partialObserver: n } = this;
          if (n.complete)
            try {
              n.complete();
            } catch (t) {
              A(t);
            }
        }
      }
      class w extends po {
        constructor(n, t, r) {
          let o;
          if ((super(), yt(n) || !n)) o = { next: n ?? void 0, error: t ?? void 0, complete: r ?? void 0 };
          else {
            let i;
            this && Yt.useDeprecatedNextContext
              ? ((i = Object.create(n)),
                (i.unsubscribe = () => this.unsubscribe()),
                (o = { next: n.next && Lo(n.next, i), error: n.error && Lo(n.error, i), complete: n.complete && Lo(n.complete, i) }))
              : (o = n);
          }
          this.destination = new Wr(o);
        }
      }
      function A(e) {
        Yt.useDeprecatedSynchronousErrorHandling
          ? (function Ii(e) {
              Yt.useDeprecatedSynchronousErrorHandling && Tr && ((Tr.errorThrown = !0), (Tr.error = e));
            })(e)
          : hn(e);
      }
      function T(e, n) {
        const { onStoppedNotification: t } = Yt;
        t && Xt.setTimeout(() => t(e, n));
      }
      const Y = {
          closed: !0,
          next: Gt,
          error: function le(e) {
            throw e;
          },
          complete: Gt,
        },
        Te = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function rt(e) {
        return e;
      }
      function pt(e) {
        return 0 === e.length
          ? rt
          : 1 === e.length
            ? e[0]
            : function (t) {
                return e.reduce((r, o) => o(r), t);
              };
      }
      let Je = (() => {
        class e {
          constructor(t) {
            t && (this._subscribe = t);
          }
          lift(t) {
            const r = new e();
            return (r.source = this), (r.operator = t), r;
          }
          subscribe(t, r, o) {
            const i = (function jt(e) {
              return (
                (e && e instanceof po) ||
                ((function St(e) {
                  return e && yt(e.next) && yt(e.error) && yt(e.complete);
                })(e) &&
                  Qe(e))
              );
            })(t)
              ? t
              : new w(t, r, o);
            return (
              Co(() => {
                const { operator: s, source: a } = this;
                i.add(s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i));
              }),
              i
            );
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (r) {
              t.error(r);
            }
          }
          forEach(t, r) {
            return new (r = lt(r))((o, i) => {
              const s = new w({
                next: a => {
                  try {
                    t(a);
                  } catch (l) {
                    i(l), s.unsubscribe();
                  }
                },
                error: i,
                complete: o,
              });
              this.subscribe(s);
            });
          }
          _subscribe(t) {
            var r;
            return null === (r = this.source) || void 0 === r ? void 0 : r.subscribe(t);
          }
          [Te]() {
            return this;
          }
          pipe(...t) {
            return pt(t)(this);
          }
          toPromise(t) {
            return new (t = lt(t))((r, o) => {
              let i;
              this.subscribe(
                s => (i = s),
                s => o(s),
                () => r(i),
              );
            });
          }
        }
        return (e.create = n => new e(n)), e;
      })();
      function lt(e) {
        var n;
        return null !== (n = e ?? Yt.Promise) && void 0 !== n ? n : Promise;
      }
      const en = wn(
        e =>
          function () {
            e(this), (this.name = 'ObjectUnsubscribedError'), (this.message = 'object unsubscribed');
          },
      );
      let _t = (() => {
        class e extends Je {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(t) {
            const r = new Sn(this, this);
            return (r.operator = t), r;
          }
          _throwIfClosed() {
            if (this.closed) throw new en();
          }
          next(t) {
            Co(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers || (this.currentObservers = Array.from(this.observers));
                for (const r of this.currentObservers) r.next(t);
              }
            });
          }
          error(t) {
            Co(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = t);
                const { observers: r } = this;
                for (; r.length; ) r.shift().error(t);
              }
            });
          }
          complete() {
            Co(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: t } = this;
                for (; t.length; ) t.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0), (this.observers = this.currentObservers = null);
          }
          get observed() {
            var t;
            return (null === (t = this.observers) || void 0 === t ? void 0 : t.length) > 0;
          }
          _trySubscribe(t) {
            return this._throwIfClosed(), super._trySubscribe(t);
          }
          _subscribe(t) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
          }
          _innerSubscribe(t) {
            const { hasError: r, isStopped: o, observers: i } = this;
            return r || o
              ? X
              : ((this.currentObservers = null),
                i.push(t),
                new H(() => {
                  (this.currentObservers = null), ae(i, t);
                }));
          }
          _checkFinalizedStatuses(t) {
            const { hasError: r, thrownError: o, isStopped: i } = this;
            r ? t.error(o) : i && t.complete();
          }
          asObservable() {
            const t = new Je();
            return (t.source = this), t;
          }
        }
        return (e.create = (n, t) => new Sn(n, t)), e;
      })();
      class Sn extends _t {
        constructor(n, t) {
          super(), (this.destination = n), (this.source = t);
        }
        next(n) {
          var t, r;
          null === (r = null === (t = this.destination) || void 0 === t ? void 0 : t.next) || void 0 === r || r.call(t, n);
        }
        error(n) {
          var t, r;
          null === (r = null === (t = this.destination) || void 0 === t ? void 0 : t.error) || void 0 === r || r.call(t, n);
        }
        complete() {
          var n, t;
          null === (t = null === (n = this.destination) || void 0 === n ? void 0 : n.complete) || void 0 === t || t.call(n);
        }
        _subscribe(n) {
          var t, r;
          return null !== (r = null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(n)) && void 0 !== r ? r : X;
        }
      }
      class wt extends _t {
        constructor(n) {
          super(), (this._value = n);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(n) {
          const t = super._subscribe(n);
          return !t.closed && n.next(this._value), t;
        }
        getValue() {
          const { hasError: n, thrownError: t, _value: r } = this;
          if (n) throw t;
          return this._throwIfClosed(), r;
        }
        next(n) {
          super.next((this._value = n));
        }
      }
      function sn(e) {
        return yt(e?.lift);
      }
      function Le(e) {
        return n => {
          if (sn(n))
            return n.lift(function (t) {
              try {
                return e(t, this);
              } catch (r) {
                this.error(r);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
      function Ce(e, n, t, r, o) {
        return new nn(e, n, t, r, o);
      }
      class nn extends po {
        constructor(n, t, r, o, i, s) {
          super(n),
            (this.onFinalize = i),
            (this.shouldUnsubscribe = s),
            (this._next = t
              ? function (a) {
                  try {
                    t(a);
                  } catch (l) {
                    n.error(l);
                  }
                }
              : super._next),
            (this._error = o
              ? function (a) {
                  try {
                    o(a);
                  } catch (l) {
                    n.error(l);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = r
              ? function () {
                  try {
                    r();
                  } catch (a) {
                    n.error(a);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var n;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: t } = this;
            super.unsubscribe(), !t && (null === (n = this.onFinalize) || void 0 === n || n.call(this));
          }
        }
      }
      function nt(e, n) {
        return Le((t, r) => {
          let o = 0;
          t.subscribe(
            Ce(r, i => {
              r.next(e.call(n, i, o++));
            }),
          );
        });
      }
      class O extends Error {
        constructor(n, t) {
          super(
            (function an(e, n) {
              return `NG0${Math.abs(e)}${n ? ': ' + n : ''}`;
            })(n, t),
          ),
            (this.code = n);
        }
      }
      function ln(e) {
        return { toString: e }.toString();
      }
      const Ye = '__parameters__';
      function ht(e, n, t) {
        return ln(() => {
          const r = (function ft(e) {
            return function (...t) {
              if (e) {
                const r = e(...t);
                for (const o in r) this[o] = r[o];
              }
            };
          })(n);
          function o(...i) {
            if (this instanceof o) return r.apply(this, i), this;
            const s = new o(...i);
            return (a.annotation = s), a;
            function a(l, c, u) {
              const d = l.hasOwnProperty(Ye) ? l[Ye] : Object.defineProperty(l, Ye, { value: [] })[Ye];
              for (; d.length <= u; ) d.push(null);
              return (d[u] = d[u] || []).push(s), l;
            }
          }
          return t && (o.prototype = Object.create(t.prototype)), (o.prototype.ngMetadataName = e), (o.annotationCls = o), o;
        });
      }
      const ot = globalThis;
      function Ut(e) {
        for (let n in e) if (e[n] === Ut) return n;
        throw Error('Could not find renamed property on target object.');
      }
      function Jn(e, n) {
        for (const t in n) n.hasOwnProperty(t) && !e.hasOwnProperty(t) && (e[t] = n[t]);
      }
      function ee(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(ee).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const n = e.toString();
        if (null == n) return '' + n;
        const t = n.indexOf('\n');
        return -1 === t ? n : n.substring(0, t);
      }
      function te(e, n) {
        return null == e || '' === e ? (null === n ? '' : n) : null == n || '' === n ? e : e + ' ' + n;
      }
      const we = Ut({ __forward_ref__: Ut });
      function ke(e) {
        return (
          (e.__forward_ref__ = ke),
          (e.toString = function () {
            return ee(this());
          }),
          e
        );
      }
      function ye(e) {
        return ut(e) ? e() : e;
      }
      function ut(e) {
        return 'function' == typeof e && e.hasOwnProperty(we) && e.__forward_ref__ === ke;
      }
      function B(e) {
        return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 };
      }
      function un(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function Yn(e) {
        return On(e, ai) || On(e, Yi);
      }
      function On(e, n) {
        return e.hasOwnProperty(n) ? e[n] : null;
      }
      function Sr(e) {
        return e && (e.hasOwnProperty(za) || e.hasOwnProperty(QM)) ? e[za] : null;
      }
      const ai = Ut({ ɵprov: Ut }),
        za = Ut({ ɵinj: Ut }),
        Yi = Ut({ ngInjectableDef: Ut }),
        QM = Ut({ ngInjectorDef: Ut });
      class He {
        constructor(n, t) {
          (this._desc = n),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof t
              ? (this.__NG_ELEMENT_ID__ = t)
              : void 0 !== t && (this.ɵprov = B({ token: this, providedIn: t.providedIn || 'root', factory: t.factory }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function xf(e) {
        return e && !!e.ɵproviders;
      }
      const Ga = Ut({ ɵcmp: Ut }),
        Rf = Ut({ ɵdir: Ut }),
        Of = Ut({ ɵpipe: Ut }),
        Nv = Ut({ ɵmod: Ut }),
        li = Ut({ ɵfac: Ut }),
        Wa = Ut({ __NG_ELEMENT_ID__: Ut }),
        kv = Ut({ __NG_ENV_ID__: Ut });
      function $t(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function Nf(e, n) {
        throw new O(-201, !1);
      }
      var rn = (function (e) {
        return (
          (e[(e.Default = 0)] = 'Default'),
          (e[(e.Host = 1)] = 'Host'),
          (e[(e.Self = 2)] = 'Self'),
          (e[(e.SkipSelf = 4)] = 'SkipSelf'),
          (e[(e.Optional = 8)] = 'Optional'),
          e
        );
      })(rn || {});
      let kf;
      function Pv() {
        return kf;
      }
      function Xr(e) {
        const n = kf;
        return (kf = e), n;
      }
      function Fv(e, n, t) {
        const r = Yn(e);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : t & rn.Optional
            ? null
            : void 0 !== n
              ? n
              : void Nf();
      }
      const qa = {},
        Pf = '__NG_DI_FLAG__',
        jc = 'ngTempTokenPath',
        oA = /\n/gm,
        Lv = '__source';
      let Es;
      function Ti(e) {
        const n = Es;
        return (Es = e), n;
      }
      function aA(e, n = rn.Default) {
        if (void 0 === Es) throw new O(-203, !1);
        return null === Es ? Fv(e, void 0, n) : Es.get(e, n & rn.Optional ? null : void 0, n);
      }
      function dt(e, n = rn.Default) {
        return (Pv() || aA)(ye(e), n);
      }
      function ce(e, n = rn.Default) {
        return dt(e, Uc(n));
      }
      function Uc(e) {
        return typeof e > 'u' || 'number' == typeof e ? e : (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
      }
      function Ff(e) {
        const n = [];
        for (let t = 0; t < e.length; t++) {
          const r = ye(e[t]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new O(900, !1);
            let o,
              i = rn.Default;
            for (let s = 0; s < r.length; s++) {
              const a = r[s],
                l = lA(a);
              'number' == typeof l ? (-1 === l ? (o = a.token) : (i |= l)) : (o = a);
            }
            n.push(dt(o, i));
          } else n.push(dt(r));
        }
        return n;
      }
      function Xa(e, n) {
        return (e[Pf] = n), (e.prototype[Pf] = n), e;
      }
      function lA(e) {
        return e[Pf];
      }
      const Hc = Xa(ht('Optional'), 8),
        zc = Xa(ht('SkipSelf'), 4);
      function Ki(e, n) {
        return e.hasOwnProperty(li) ? e[li] : null;
      }
      function ws(e, n) {
        e.forEach(t => (Array.isArray(t) ? ws(t, n) : n(t)));
      }
      function Vv(e, n, t) {
        n >= e.length ? e.push(t) : e.splice(n, 0, t);
      }
      function Gc(e, n) {
        return n >= e.length - 1 ? e.pop() : e.splice(n, 1)[0];
      }
      const $o = {},
        mn = [],
        Qi = new He(''),
        Uv = new He('', -1),
        Vf = new He('');
      class qc {
        get(n, t = qa) {
          if (t === qa) {
            const r = new Error(`NullInjectorError: No provider for ${ee(n)}!`);
            throw ((r.name = 'NullInjectorError'), r);
          }
          return t;
        }
      }
      var Xc = (function (e) {
          return (e[(e.OnPush = 0)] = 'OnPush'), (e[(e.Default = 1)] = 'Default'), e;
        })(Xc || {}),
        Eo = (function (e) {
          return (e[(e.Emulated = 0)] = 'Emulated'), (e[(e.None = 2)] = 'None'), (e[(e.ShadowDom = 3)] = 'ShadowDom'), e;
        })(Eo || {}),
        zn = (function (e) {
          return (
            (e[(e.None = 0)] = 'None'),
            (e[(e.SignalBased = 1)] = 'SignalBased'),
            (e[(e.HasDecoratorInputTransform = 2)] = 'HasDecoratorInputTransform'),
            e
          );
        })(zn || {});
      function gA(e, n, t) {
        let r = e.length;
        for (;;) {
          const o = e.indexOf(n, t);
          if (-1 === o) return o;
          if (0 === o || e.charCodeAt(o - 1) <= 32) {
            const i = n.length;
            if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
          }
          t = o + 1;
        }
      }
      function Bf(e, n, t) {
        let r = 0;
        for (; r < t.length; ) {
          const o = t[r];
          if ('number' == typeof o) {
            if (0 !== o) break;
            r++;
            const i = t[r++],
              s = t[r++],
              a = t[r++];
            e.setAttribute(n, s, a, i);
          } else {
            const i = o,
              s = t[++r];
            zv(i) ? e.setProperty(n, i, s) : e.setAttribute(n, i, s), r++;
          }
        }
        return r;
      }
      function Hv(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function zv(e) {
        return 64 === e.charCodeAt(0);
      }
      function Za(e, n) {
        if (null !== n && 0 !== n.length)
          if (null === e || 0 === e.length) e = n.slice();
          else {
            let t = -1;
            for (let r = 0; r < n.length; r++) {
              const o = n[r];
              'number' == typeof o ? (t = o) : 0 === t || Gv(e, t, o, null, -1 === t || 2 === t ? n[++r] : null);
            }
          }
        return e;
      }
      function Gv(e, n, t, r, o) {
        let i = 0,
          s = e.length;
        if (-1 === n) s = -1;
        else
          for (; i < e.length; ) {
            const a = e[i++];
            if ('number' == typeof a) {
              if (a === n) {
                s = -1;
                break;
              }
              if (a > n) {
                s = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const a = e[i];
          if ('number' == typeof a) break;
          if (a === t) {
            if (null === r) return void (null !== o && (e[i + 1] = o));
            if (r === e[i + 1]) return void (e[i + 2] = o);
          }
          i++, null !== r && i++, null !== o && i++;
        }
        -1 !== s && (e.splice(s, 0, n), (i = s + 1)),
          e.splice(i++, 0, t),
          null !== r && e.splice(i++, 0, r),
          null !== o && e.splice(i++, 0, o);
      }
      const Wv = 'ng-template';
      function mA(e, n, t, r) {
        let o = 0;
        if (r) {
          for (; o < n.length && 'string' == typeof n[o]; o += 2)
            if ('class' === n[o] && -1 !== gA(n[o + 1].toLowerCase(), t, 0)) return !0;
        } else if (jf(e)) return !1;
        if (((o = n.indexOf(1, o)), o > -1)) {
          let i;
          for (; ++o < n.length && 'string' == typeof (i = n[o]); ) if (i.toLowerCase() === t) return !0;
        }
        return !1;
      }
      function jf(e) {
        return 4 === e.type && e.value !== Wv;
      }
      function vA(e, n, t) {
        return n === (4 !== e.type || t ? e.value : Wv);
      }
      function yA(e, n, t) {
        let r = 4;
        const o = e.attrs,
          i =
            null !== o
              ? (function CA(e) {
                  for (let n = 0; n < e.length; n++) if (Hv(e[n])) return n;
                  return e.length;
                })(o)
              : 0;
        let s = !1;
        for (let a = 0; a < n.length; a++) {
          const l = n[a];
          if ('number' != typeof l) {
            if (!s)
              if (4 & r) {
                if (((r = 2 | (1 & r)), ('' !== l && !vA(e, l, t)) || ('' === l && 1 === n.length))) {
                  if (wo(r)) return !1;
                  s = !0;
                }
              } else if (8 & r) {
                if (null === o || !mA(e, o, l, t)) {
                  if (wo(r)) return !1;
                  s = !0;
                }
              } else {
                const c = n[++a],
                  u = DA(l, o, jf(e), t);
                if (-1 === u) {
                  if (wo(r)) return !1;
                  s = !0;
                  continue;
                }
                if ('' !== c) {
                  let d;
                  if (((d = u > i ? '' : o[u + 1].toLowerCase()), 2 & r && c !== d)) {
                    if (wo(r)) return !1;
                    s = !0;
                  }
                }
              }
          } else {
            if (!s && !wo(r) && !wo(l)) return !1;
            if (s && wo(l)) continue;
            (s = !1), (r = l | (1 & r));
          }
        }
        return wo(r) || s;
      }
      function wo(e) {
        return !(1 & e);
      }
      function DA(e, n, t, r) {
        if (null === n) return -1;
        let o = 0;
        if (r || !t) {
          let i = !1;
          for (; o < n.length; ) {
            const s = n[o];
            if (s === e) return o;
            if (3 === s || 6 === s) i = !0;
            else {
              if (1 === s || 2 === s) {
                let a = n[++o];
                for (; 'string' == typeof a; ) a = n[++o];
                continue;
              }
              if (4 === s) break;
              if (0 === s) {
                o += 4;
                continue;
              }
            }
            o += i ? 1 : 2;
          }
          return -1;
        }
        return (function bA(e, n) {
          let t = e.indexOf(4);
          if (t > -1)
            for (t++; t < e.length; ) {
              const r = e[t];
              if ('number' == typeof r) return -1;
              if (r === n) return t;
              t++;
            }
          return -1;
        })(n, e);
      }
      function qv(e, n, t = !1) {
        for (let r = 0; r < n.length; r++) if (yA(e, n[r], t)) return !0;
        return !1;
      }
      function EA(e, n) {
        e: for (let t = 0; t < n.length; t++) {
          const r = n[t];
          if (e.length === r.length) {
            for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function Xv(e, n) {
        return e ? ':not(' + n.trim() + ')' : n;
      }
      function wA(e) {
        let n = e[0],
          t = 1,
          r = 2,
          o = '',
          i = !1;
        for (; t < e.length; ) {
          let s = e[t];
          if ('string' == typeof s)
            if (2 & r) {
              const a = e[++t];
              o += '[' + s + (a.length > 0 ? '="' + a + '"' : '') + ']';
            } else 8 & r ? (o += '.' + s) : 4 & r && (o += ' ' + s);
          else '' !== o && !wo(s) && ((n += Xv(i, o)), (o = '')), (r = s), (i = i || !wo(r));
          t++;
        }
        return '' !== o && (n += Xv(i, o)), n;
      }
      function Oe(e) {
        return ln(() => {
          const n = Yv(e),
            t = {
              ...n,
              decls: e.decls,
              vars: e.vars,
              template: e.template,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              onPush: e.changeDetection === Xc.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (n.standalone && e.dependencies) || null,
              getStandaloneInjector: null,
              signals: e.signals ?? !1,
              data: e.data || {},
              encapsulation: e.encapsulation || Eo.Emulated,
              styles: e.styles || mn,
              _: null,
              schemas: e.schemas || null,
              tView: null,
              id: '',
            };
          Kv(t);
          const r = e.dependencies;
          return (
            (t.directiveDefs = Zc(r, !1)),
            (t.pipeDefs = Zc(r, !0)),
            (t.id = (function xA(e) {
              let n = 0;
              const t = [
                e.selectors,
                e.ngContentSelectors,
                e.hostVars,
                e.hostAttrs,
                e.consts,
                e.vars,
                e.decls,
                e.encapsulation,
                e.standalone,
                e.signals,
                e.exportAs,
                JSON.stringify(e.inputs),
                JSON.stringify(e.outputs),
                Object.getOwnPropertyNames(e.type.prototype),
                !!e.contentQueries,
                !!e.viewQuery,
              ].join('|');
              for (const o of t) n = (Math.imul(31, n) + o.charCodeAt(0)) | 0;
              return (n += 2147483648), 'c' + n;
            })(t)),
            t
          );
        });
      }
      function SA(e) {
        return Qt(e) || hr(e);
      }
      function MA(e) {
        return null !== e;
      }
      function Vo(e) {
        return ln(() => ({
          type: e.type,
          bootstrap: e.bootstrap || mn,
          declarations: e.declarations || mn,
          imports: e.imports || mn,
          exports: e.exports || mn,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function Zv(e, n) {
        if (null == e) return $o;
        const t = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            const o = e[r];
            let i,
              s,
              a = zn.None;
            Array.isArray(o) ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i)) : ((i = o), (s = o)),
              n ? ((t[i] = a !== zn.None ? [r, a] : r), (n[i] = s)) : (t[i] = r);
          }
        return t;
      }
      function ct(e) {
        return ln(() => {
          const n = Yv(e);
          return Kv(n), n;
        });
      }
      function Qt(e) {
        return e[Ga] || null;
      }
      function hr(e) {
        return e[Rf] || null;
      }
      function wr(e) {
        return e[Of] || null;
      }
      function Mr(e, n) {
        const t = e[Nv] || null;
        if (!t && !0 === n) throw new Error(`Type ${ee(e)} does not have '\u0275mod' property.`);
        return t;
      }
      function Yv(e) {
        const n = {};
        return {
          type: e.type,
          providersResolver: null,
          factory: null,
          hostBindings: e.hostBindings || null,
          hostVars: e.hostVars || 0,
          hostAttrs: e.hostAttrs || null,
          contentQueries: e.contentQueries || null,
          declaredInputs: n,
          inputTransforms: null,
          inputConfig: e.inputs || $o,
          exportAs: e.exportAs || null,
          standalone: !0 === e.standalone,
          signals: !0 === e.signals,
          selectors: e.selectors || mn,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: Zv(e.inputs, n),
          outputs: Zv(e.outputs),
          debugInfo: null,
        };
      }
      function Kv(e) {
        e.features?.forEach(n => n(e));
      }
      function Zc(e, n) {
        if (!e) return null;
        const t = n ? wr : SA;
        return () => ('function' == typeof e ? e() : e).map(r => t(r)).filter(MA);
      }
      function Ts(e) {
        return { ɵproviders: e };
      }
      function RA(...e) {
        return { ɵproviders: Uf(0, e), ɵfromNgModule: !0 };
      }
      function Uf(e, ...n) {
        const t = [],
          r = new Set();
        let o;
        const i = s => {
          t.push(s);
        };
        return (
          ws(n, s => {
            const a = s;
            Yc(a, i, [], r) && ((o ||= []), o.push(a));
          }),
          void 0 !== o && Qv(o, i),
          t
        );
      }
      function Qv(e, n) {
        for (let t = 0; t < e.length; t++) {
          const { ngModule: r, providers: o } = e[t];
          Hf(o, i => {
            n(i, r);
          });
        }
      }
      function Yc(e, n, t, r) {
        if (!(e = ye(e))) return !1;
        let o = null,
          i = Sr(e);
        const s = !i && Qt(e);
        if (i || s) {
          if (s && !s.standalone) return !1;
          o = e;
        } else {
          const l = e.ngModule;
          if (((i = Sr(l)), !i)) return !1;
          o = l;
        }
        const a = r.has(o);
        if (s) {
          if (a) return !1;
          if ((r.add(o), s.dependencies)) {
            const l = 'function' == typeof s.dependencies ? s.dependencies() : s.dependencies;
            for (const c of l) Yc(c, n, t, r);
          }
        } else {
          if (!i) return !1;
          {
            if (null != i.imports && !a) {
              let c;
              r.add(o);
              try {
                ws(i.imports, u => {
                  Yc(u, n, t, r) && ((c ||= []), c.push(u));
                });
              } finally {
              }
              void 0 !== c && Qv(c, n);
            }
            if (!a) {
              const c = Ki(o) || (() => new o());
              n({ provide: o, useFactory: c, deps: mn }, o),
                n({ provide: Vf, useValue: o, multi: !0 }, o),
                n({ provide: Qi, useValue: () => dt(o), multi: !0 }, o);
            }
            const l = i.providers;
            if (null != l && !a) {
              const c = e;
              Hf(l, u => {
                n(u, c);
              });
            }
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      function Hf(e, n) {
        for (let t of e) xf(t) && (t = t.ɵproviders), Array.isArray(t) ? Hf(t, n) : n(t);
      }
      const OA = Ut({ provide: String, useValue: Ut });
      function zf(e) {
        return null !== e && 'object' == typeof e && OA in e;
      }
      function Ji(e) {
        return 'function' == typeof e;
      }
      const Gf = new He(''),
        Kc = {},
        kA = {};
      let Wf;
      function Qc() {
        return void 0 === Wf && (Wf = new qc()), Wf;
      }
      class lr {}
      class Ss extends lr {
        get destroyed() {
          return this._destroyed;
        }
        constructor(n, t, r, o) {
          super(),
            (this.parent = t),
            (this.source = r),
            (this.scopes = o),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            Xf(n, s => this.processProvider(s)),
            this.records.set(Uv, Ms(void 0, this)),
            o.has('environment') && this.records.set(lr, Ms(void 0, this));
          const i = this.records.get(Gf);
          null != i && 'string' == typeof i.value && this.scopes.add(i.value), (this.injectorDefTypes = new Set(this.get(Vf, mn, rn.Self)));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          const n = S(null);
          try {
            for (const r of this._ngOnDestroyHooks) r.ngOnDestroy();
            const t = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (const r of t) r();
          } finally {
            this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), S(n);
          }
        }
        onDestroy(n) {
          return this.assertNotDestroyed(), this._onDestroyHooks.push(n), () => this.removeOnDestroy(n);
        }
        runInContext(n) {
          this.assertNotDestroyed();
          const t = Ti(this),
            r = Xr(void 0);
          try {
            return n();
          } finally {
            Ti(t), Xr(r);
          }
        }
        get(n, t = qa, r = rn.Default) {
          if ((this.assertNotDestroyed(), n.hasOwnProperty(kv))) return n[kv](this);
          r = Uc(r);
          const i = Ti(this),
            s = Xr(void 0);
          try {
            if (!(r & rn.SkipSelf)) {
              let l = this.records.get(n);
              if (void 0 === l) {
                const c =
                  (function VA(e) {
                    return 'function' == typeof e || ('object' == typeof e && e instanceof He);
                  })(n) && Yn(n);
                (l = c && this.injectableDefInScope(c) ? Ms(qf(n), Kc) : null), this.records.set(n, l);
              }
              if (null != l) return this.hydrate(n, l);
            }
            return (r & rn.Self ? Qc() : this.parent).get(n, (t = r & rn.Optional && t === qa ? null : t));
          } catch (a) {
            if ('NullInjectorError' === a.name) {
              if (((a[jc] = a[jc] || []).unshift(ee(n)), i)) throw a;
              return (function cA(e, n, t, r) {
                const o = e[jc];
                throw (
                  (n[Lv] && o.unshift(n[Lv]),
                  (e.message = (function uA(e, n, t, r = null) {
                    e = e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1) ? e.slice(2) : e;
                    let o = ee(n);
                    if (Array.isArray(n)) o = n.map(ee).join(' -> ');
                    else if ('object' == typeof n) {
                      let i = [];
                      for (let s in n)
                        if (n.hasOwnProperty(s)) {
                          let a = n[s];
                          i.push(s + ':' + ('string' == typeof a ? JSON.stringify(a) : ee(a)));
                        }
                      o = `{${i.join(', ')}}`;
                    }
                    return `${t}${r ? '(' + r + ')' : ''}[${o}]: ${e.replace(oA, '\n  ')}`;
                  })('\n' + e.message, o, t, r)),
                  (e.ngTokenPath = o),
                  (e[jc] = null),
                  e)
                );
              })(a, n, 'R3InjectorError', this.source);
            }
            throw a;
          } finally {
            Xr(s), Ti(i);
          }
        }
        resolveInjectorInitializers() {
          const n = S(null),
            t = Ti(this),
            r = Xr(void 0);
          try {
            const i = this.get(Qi, mn, rn.Self);
            for (const s of i) s();
          } finally {
            Ti(t), Xr(r), S(n);
          }
        }
        toString() {
          const n = [],
            t = this.records;
          for (const r of t.keys()) n.push(ee(r));
          return `R3Injector[${n.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new O(205, !1);
        }
        processProvider(n) {
          let t = Ji((n = ye(n))) ? n : ye(n && n.provide);
          const r = (function FA(e) {
            return zf(e) ? Ms(void 0, e.useValue) : Ms(ty(e), Kc);
          })(n);
          if (!Ji(n) && !0 === n.multi) {
            let o = this.records.get(t);
            o || ((o = Ms(void 0, Kc, !0)), (o.factory = () => Ff(o.multi)), this.records.set(t, o)), (t = n), o.multi.push(n);
          }
          this.records.set(t, r);
        }
        hydrate(n, t) {
          const r = S(null);
          try {
            return (
              t.value === Kc && ((t.value = kA), (t.value = t.factory())),
              'object' == typeof t.value &&
                t.value &&
                (function $A(e) {
                  return null !== e && 'object' == typeof e && 'function' == typeof e.ngOnDestroy;
                })(t.value) &&
                this._ngOnDestroyHooks.add(t.value),
              t.value
            );
          } finally {
            S(r);
          }
        }
        injectableDefInScope(n) {
          if (!n.providedIn) return !1;
          const t = ye(n.providedIn);
          return 'string' == typeof t ? 'any' === t || this.scopes.has(t) : this.injectorDefTypes.has(t);
        }
        removeOnDestroy(n) {
          const t = this._onDestroyHooks.indexOf(n);
          -1 !== t && this._onDestroyHooks.splice(t, 1);
        }
      }
      function qf(e) {
        const n = Yn(e),
          t = null !== n ? n.factory : Ki(e);
        if (null !== t) return t;
        if (e instanceof He) throw new O(204, !1);
        if (e instanceof Function)
          return (function PA(e) {
            if (e.length > 0) throw new O(204, !1);
            const t = (function Ha(e) {
              return (e && (e[ai] || e[Yi])) || null;
            })(e);
            return null !== t ? () => t.factory(e) : () => new e();
          })(e);
        throw new O(204, !1);
      }
      function ty(e, n, t) {
        let r;
        if (Ji(e)) {
          const o = ye(e);
          return Ki(o) || qf(o);
        }
        if (zf(e)) r = () => ye(e.useValue);
        else if (
          (function ey(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...Ff(e.deps || []));
        else if (
          (function Jv(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => dt(ye(e.useExisting));
        else {
          const o = ye(e && (e.useClass || e.provide));
          if (
            !(function LA(e) {
              return !!e.deps;
            })(e)
          )
            return Ki(o) || qf(o);
          r = () => new o(...Ff(e.deps));
        }
        return r;
      }
      function Ms(e, n, t = !1) {
        return { factory: e, value: n, multi: t ? [] : void 0 };
      }
      function Xf(e, n) {
        for (const t of e) Array.isArray(t) ? Xf(t, n) : t && xf(t) ? Xf(t.ɵproviders, n) : n(t);
      }
      function Bo(e, n) {
        e instanceof Ss && e.assertNotDestroyed();
        const r = Ti(e),
          o = Xr(void 0);
        try {
          return n();
        } finally {
          Ti(r), Xr(o);
        }
      }
      function ny() {
        return (
          void 0 !== Pv() ||
          null !=
            (function sA() {
              return Es;
            })()
        );
      }
      const Xn = 0,
        Se = 1,
        Dt = 2,
        nr = 3,
        Io = 4,
        Ar = 5,
        io = 6,
        xs = 7,
        Ln = 8,
        cr = 9,
        To = 10,
        Nt = 11,
        Ka = 12,
        oy = 13,
        Rs = 14,
        Kn = 15,
        Qa = 16,
        Os = 17,
        ci = 18,
        Ja = 19,
        iy = 20,
        Mi = 21,
        tu = 22,
        es = 23,
        Vt = 25,
        Yf = 1,
        jo = 7,
        Ns = 9,
        rr = 10;
      var Kf = (function (e) {
        return (e[(e.None = 0)] = 'None'), (e[(e.HasTransplantedViews = 2)] = 'HasTransplantedViews'), e;
      })(Kf || {});
      function xr(e) {
        return Array.isArray(e) && 'object' == typeof e[Yf];
      }
      function Rr(e) {
        return Array.isArray(e) && !0 === e[Yf];
      }
      function Qf(e) {
        return !!(4 & e.flags);
      }
      function ts(e) {
        return e.componentOffset > -1;
      }
      function ru(e) {
        return !(1 & ~e.flags);
      }
      function So(e) {
        return !!e.template;
      }
      function Jf(e) {
        return !!(512 & e[Dt]);
      }
      class QA {
        constructor(n, t, r) {
          (this.previousValue = n), (this.currentValue = t), (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function cy(e, n, t, r) {
        null !== n ? n.applyValueToInputSignal(n, r) : (e[t] = r);
      }
      function Kr() {
        return uy;
      }
      function uy(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = ex), JA;
      }
      function JA() {
        const e = fy(this),
          n = e?.current;
        if (n) {
          const t = e.previous;
          if (t === $o) e.previous = n;
          else for (let r in n) t[r] = n[r];
          (e.current = null), this.ngOnChanges(n);
        }
      }
      function ex(e, n, t, r, o) {
        const i = this.declaredInputs[r],
          s =
            fy(e) ||
            (function tx(e, n) {
              return (e[dy] = n);
            })(e, { previous: $o, current: null }),
          a = s.current || (s.current = {}),
          l = s.previous,
          c = l[i];
        (a[i] = new QA(c && c.currentValue, t, l === $o)), cy(e, n, o, t);
      }
      Kr.ngInherit = !0;
      const dy = '__ngSimpleChanges__';
      function fy(e) {
        return e[dy] || null;
      }
      const Uo = function (e, n, t) {};
      let gy = !1;
      function An(e) {
        for (; Array.isArray(e); ) e = e[Xn];
        return e;
      }
      function Fr(e, n) {
        return An(n[e.index]);
      }
      function nl(e, n) {
        return e.data[n];
      }
      function so(e, n) {
        const t = n[e];
        return xr(t) ? t : t[Xn];
      }
      function oh(e) {
        return !(128 & ~e[Dt]);
      }
      function Ho(e, n) {
        return null == n ? null : e[n];
      }
      function my(e) {
        e[Os] = 0;
      }
      function ax(e) {
        1024 & e[Dt] || ((e[Dt] |= 1024), oh(e) && rl(e));
      }
      function ih(e) {
        return !!(9216 & e[Dt] || e[es]?.dirty);
      }
      function sh(e) {
        e[To].changeDetectionScheduler?.notify(1),
          ih(e)
            ? rl(e)
            : 64 & e[Dt] &&
              ((function rx() {
                return gy;
              })()
                ? ((e[Dt] |= 1024), rl(e))
                : e[To].changeDetectionScheduler?.notify());
      }
      function rl(e) {
        e[To].changeDetectionScheduler?.notify();
        let n = ns(e);
        for (; null !== n && !(8192 & n[Dt]) && ((n[Dt] |= 8192), oh(n)); ) n = ns(n);
      }
      function ou(e, n) {
        if (!(256 & ~e[Dt])) throw new O(911, !1);
        null === e[Mi] && (e[Mi] = []), e[Mi].push(n);
      }
      function ns(e) {
        const n = e[nr];
        return Rr(n) ? n[nr] : n;
      }
      const kt = { lFrame: Ty(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
      function Dy() {
        return kt.bindingsEnabled;
      }
      function Ps() {
        return null !== kt.skipHydrationRootTNode;
      }
      function Q() {
        return kt.lFrame.lView;
      }
      function on() {
        return kt.lFrame.tView;
      }
      function ol(e) {
        return (kt.lFrame.contextLView = e), e[Ln];
      }
      function il(e) {
        return (kt.lFrame.contextLView = null), e;
      }
      function In() {
        let e = _y();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function _y() {
        return kt.lFrame.currentTNode;
      }
      function zo(e, n) {
        const t = kt.lFrame;
        (t.currentTNode = e), (t.isParent = n);
      }
      function lh() {
        return kt.lFrame.isParent;
      }
      function ch() {
        kt.lFrame.isParent = !1;
      }
      function Mo() {
        return kt.lFrame.bindingIndex++;
      }
      function yx(e, n) {
        const t = kt.lFrame;
        (t.bindingIndex = t.bindingRootIndex = e), uh(n);
      }
      function uh(e) {
        kt.lFrame.currentDirectiveIndex = e;
      }
      function iu(e) {
        kt.lFrame.currentQueryIndex = e;
      }
      function _x(e) {
        const n = e[Se];
        return 2 === n.type ? n.declTNode : 1 === n.type ? e[Ar] : null;
      }
      function wy(e, n, t) {
        if (t & rn.SkipSelf) {
          let o = n,
            i = e;
          for (; !((o = o.parent), null !== o || t & rn.Host || ((o = _x(i)), null === o || ((i = i[Rs]), 10 & o.type))); );
          if (null === o) return !1;
          (n = o), (e = i);
        }
        const r = (kt.lFrame = Iy());
        return (r.currentTNode = n), (r.lView = e), !0;
      }
      function hh(e) {
        const n = Iy(),
          t = e[Se];
        (kt.lFrame = n),
          (n.currentTNode = t.firstChild),
          (n.lView = e),
          (n.tView = t),
          (n.contextLView = e),
          (n.bindingIndex = t.bindingStartIndex),
          (n.inI18n = !1);
      }
      function Iy() {
        const e = kt.lFrame,
          n = null === e ? null : e.child;
        return null === n ? Ty(e) : n;
      }
      function Ty(e) {
        const n = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = n), n;
      }
      function Sy() {
        const e = kt.lFrame;
        return (kt.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
      }
      const My = Sy;
      function ph() {
        const e = Sy();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function Or() {
        return kt.lFrame.selectedIndex;
      }
      function rs(e) {
        kt.lFrame.selectedIndex = e;
      }
      function $n() {
        const e = kt.lFrame;
        return nl(e.tView, e.selectedIndex);
      }
      let xy = !0;
      function al() {
        return xy;
      }
      function Go(e) {
        xy = e;
      }
      function su(e, n) {
        for (let t = n.directiveStart, r = n.directiveEnd; t < r; t++) {
          const i = e.data[t].type.prototype,
            { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: l, ngAfterViewChecked: c, ngOnDestroy: u } = i;
          s && (e.contentHooks ??= []).push(-t, s),
            a && ((e.contentHooks ??= []).push(t, a), (e.contentCheckHooks ??= []).push(t, a)),
            l && (e.viewHooks ??= []).push(-t, l),
            c && ((e.viewHooks ??= []).push(t, c), (e.viewCheckHooks ??= []).push(t, c)),
            null != u && (e.destroyHooks ??= []).push(t, u);
        }
      }
      function au(e, n, t) {
        Ry(e, n, 3, t);
      }
      function lu(e, n, t, r) {
        (3 & e[Dt]) === t && Ry(e, n, t, r);
      }
      function gh(e, n) {
        let t = e[Dt];
        (3 & t) === n && ((t &= 16383), (t += 1), (e[Dt] = t));
      }
      function Ry(e, n, t, r) {
        const i = r ?? -1,
          s = n.length - 1;
        let a = 0;
        for (let l = void 0 !== r ? 65535 & e[Os] : 0; l < s; l++)
          if ('number' == typeof n[l + 1]) {
            if (((a = n[l]), null != r && a >= r)) break;
          } else n[l] < 0 && (e[Os] += 65536), (a < i || -1 == i) && (Sx(e, t, n, l), (e[Os] = (4294901760 & e[Os]) + l + 2)), l++;
      }
      function Oy(e, n) {
        Uo(4, e, n);
        const t = S(null);
        try {
          n.call(e);
        } finally {
          S(t), Uo(5, e, n);
        }
      }
      function Sx(e, n, t, r) {
        const o = t[r] < 0,
          i = t[r + 1],
          a = e[o ? -t[r] : t[r]];
        o ? e[Dt] >> 14 < e[Os] >> 16 && (3 & e[Dt]) === n && ((e[Dt] += 16384), Oy(a, i)) : Oy(a, i);
      }
      const Fs = -1;
      class ll {
        constructor(n, t, r) {
          (this.factory = n), (this.resolving = !1), (this.canSeeViewProviders = t), (this.injectImpl = r);
        }
      }
      function vh(e) {
        return e !== Fs;
      }
      function cl(e) {
        return 32767 & e;
      }
      function ul(e, n) {
        let t = (function Ox(e) {
            return e >> 16;
          })(e),
          r = n;
        for (; t > 0; ) (r = r[Rs]), t--;
        return r;
      }
      let yh = !0;
      function cu(e) {
        const n = yh;
        return (yh = e), n;
      }
      const Ny = 255,
        ky = 5;
      let Nx = 0;
      const Wo = {};
      function uu(e, n) {
        const t = Py(e, n);
        if (-1 !== t) return t;
        const r = n[Se];
        r.firstCreatePass && ((e.injectorIndex = n.length), Dh(r.data, e), Dh(n, null), Dh(r.blueprint, null));
        const o = du(e, n),
          i = e.injectorIndex;
        if (vh(o)) {
          const s = cl(o),
            a = ul(o, n),
            l = a[Se].data;
          for (let c = 0; c < 8; c++) n[i + c] = a[s + c] | l[s + c];
        }
        return (n[i + 8] = o), i;
      }
      function Dh(e, n) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, n);
      }
      function Py(e, n) {
        return -1 === e.injectorIndex || (e.parent && e.parent.injectorIndex === e.injectorIndex) || null === n[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function du(e, n) {
        if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
        let t = 0,
          r = null,
          o = n;
        for (; null !== o; ) {
          if (((r = Uy(o)), null === r)) return Fs;
          if ((t++, (o = o[Rs]), -1 !== r.injectorIndex)) return r.injectorIndex | (t << 16);
        }
        return Fs;
      }
      function _h(e, n, t) {
        !(function kx(e, n, t) {
          let r;
          'string' == typeof t ? (r = t.charCodeAt(0) || 0) : t.hasOwnProperty(Wa) && (r = t[Wa]), null == r && (r = t[Wa] = Nx++);
          const o = r & Ny;
          n.data[e + (o >> ky)] |= 1 << o;
        })(e, n, t);
      }
      function Fy(e, n, t) {
        if (t & rn.Optional || void 0 !== e) return e;
        Nf();
      }
      function Ly(e, n, t, r) {
        if ((t & rn.Optional && void 0 === r && (r = null), !(t & (rn.Self | rn.Host)))) {
          const o = e[cr],
            i = Xr(void 0);
          try {
            return o ? o.get(n, r, t & rn.Optional) : Fv(n, r, t & rn.Optional);
          } finally {
            Xr(i);
          }
        }
        return Fy(r, 0, t);
      }
      function $y(e, n, t, r = rn.Default, o) {
        if (null !== e) {
          if (2048 & n[Dt] && !(r & rn.Self)) {
            const s = (function Vx(e, n, t, r, o) {
              let i = e,
                s = n;
              for (; null !== i && null !== s && 2048 & s[Dt] && !(512 & s[Dt]); ) {
                const a = Vy(i, s, t, r | rn.Self, Wo);
                if (a !== Wo) return a;
                let l = i.parent;
                if (!l) {
                  const c = s[iy];
                  if (c) {
                    const u = c.get(t, Wo, r);
                    if (u !== Wo) return u;
                  }
                  (l = Uy(s)), (s = s[Rs]);
                }
                i = l;
              }
              return o;
            })(e, n, t, r, Wo);
            if (s !== Wo) return s;
          }
          const i = Vy(e, n, t, r, Wo);
          if (i !== Wo) return i;
        }
        return Ly(n, t, r, o);
      }
      function Vy(e, n, t, r, o) {
        const i = (function Lx(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const n = e.hasOwnProperty(Wa) ? e[Wa] : void 0;
          return 'number' == typeof n ? (n >= 0 ? n & Ny : $x) : n;
        })(t);
        if ('function' == typeof i) {
          if (!wy(n, e, r)) return r & rn.Host ? Fy(o, 0, r) : Ly(n, t, r, o);
          try {
            let s;
            if (((s = i(r)), null != s || r & rn.Optional)) return s;
            Nf();
          } finally {
            My();
          }
        } else if ('number' == typeof i) {
          let s = null,
            a = Py(e, n),
            l = Fs,
            c = r & rn.Host ? n[Kn][Ar] : null;
          for (
            (-1 === a || r & rn.SkipSelf) &&
            ((l = -1 === a ? du(e, n) : n[a + 8]), l !== Fs && jy(r, !1) ? ((s = n[Se]), (a = cl(l)), (n = ul(l, n))) : (a = -1));
            -1 !== a;

          ) {
            const u = n[Se];
            if (By(i, a, u.data)) {
              const d = Fx(a, n, t, s, r, c);
              if (d !== Wo) return d;
            }
            (l = n[a + 8]), l !== Fs && jy(r, n[Se].data[a + 8] === c) && By(i, a, n) ? ((s = u), (a = cl(l)), (n = ul(l, n))) : (a = -1);
          }
        }
        return o;
      }
      function Fx(e, n, t, r, o, i) {
        const s = n[Se],
          a = s.data[e + 8],
          u = (function fu(e, n, t, r, o) {
            const i = e.providerIndexes,
              s = n.data,
              a = 1048575 & i,
              l = e.directiveStart,
              u = i >> 20,
              g = o ? a + u : e.directiveEnd;
            for (let m = r ? a : a + u; m < g; m++) {
              const v = s[m];
              if ((m < l && t === v) || (m >= l && v.type === t)) return m;
            }
            if (o) {
              const m = s[l];
              if (m && So(m) && m.type === t) return l;
            }
            return null;
          })(a, s, t, null == r ? ts(a) && yh : r != s && !!(3 & a.type), o & rn.Host && i === a);
        return null !== u ? os(n, s, u, a) : Wo;
      }
      function os(e, n, t, r) {
        let o = e[t];
        const i = n.data;
        if (
          (function Mx(e) {
            return e instanceof ll;
          })(o)
        ) {
          const s = o;
          s.resolving &&
            (function tA(e, n) {
              throw (n && n.join(' > '), new O(-200, e));
            })(
              (function yn(e) {
                return 'function' == typeof e
                  ? e.name || e.toString()
                  : 'object' == typeof e && null != e && 'function' == typeof e.type
                    ? e.type.name || e.type.toString()
                    : $t(e);
              })(i[t]),
            );
          const a = cu(s.canSeeViewProviders);
          s.resolving = !0;
          const c = s.injectImpl ? Xr(s.injectImpl) : null;
          wy(e, r, rn.Default);
          try {
            (o = e[t] = s.factory(void 0, i, e, r)),
              n.firstCreatePass &&
                t >= r.directiveStart &&
                (function Tx(e, n, t) {
                  const { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = n.type.prototype;
                  if (r) {
                    const s = uy(n);
                    (t.preOrderHooks ??= []).push(e, s), (t.preOrderCheckHooks ??= []).push(e, s);
                  }
                  o && (t.preOrderHooks ??= []).push(0 - e, o),
                    i && ((t.preOrderHooks ??= []).push(e, i), (t.preOrderCheckHooks ??= []).push(e, i));
                })(t, i[t], n);
          } finally {
            null !== c && Xr(c), cu(a), (s.resolving = !1), My();
          }
        }
        return o;
      }
      function By(e, n, t) {
        return !!(t[n + (e >> ky)] & (1 << e));
      }
      function jy(e, n) {
        return !(e & rn.Self || (e & rn.Host && n));
      }
      class gr {
        constructor(n, t) {
          (this._tNode = n), (this._lView = t);
        }
        get(n, t, r) {
          return $y(this._tNode, this._lView, n, Uc(r), t);
        }
      }
      function $x() {
        return new gr(In(), Q());
      }
      function Gn(e) {
        return ln(() => {
          const n = e.prototype.constructor,
            t = n[li] || Ch(n),
            r = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== r; ) {
            const i = o[li] || Ch(o);
            if (i && i !== t) return i;
            o = Object.getPrototypeOf(o);
          }
          return i => new i();
        });
      }
      function Ch(e) {
        return ut(e)
          ? () => {
              const n = Ch(ye(e));
              return n && n();
            }
          : Ki(e);
      }
      function Uy(e) {
        const n = e[Se],
          t = n.type;
        return 2 === t ? n.declTNode : 1 === t ? e[Ar] : null;
      }
      function fi(e) {
        return (function Px(e, n) {
          if ('class' === n) return e.classes;
          if ('style' === n) return e.styles;
          const t = e.attrs;
          if (t) {
            const r = t.length;
            let o = 0;
            for (; o < r; ) {
              const i = t[o];
              if (Hv(i)) break;
              if (0 === i) o += 2;
              else if ('number' == typeof i) for (o++; o < r && 'string' == typeof t[o]; ) o++;
              else {
                if (i === n) return t[o + 1];
                o += 2;
              }
            }
          }
          return null;
        })(In(), e);
      }
      function qy(e, n = null, t = null, r) {
        const o = Xy(e, n, t, r);
        return o.resolveInjectorInitializers(), o;
      }
      function Xy(e, n = null, t = null, r, o = new Set()) {
        const i = [t || mn, RA(e)];
        return (r = r || ('object' == typeof e ? void 0 : ee(e))), new Ss(i, n || Qc(), r || null, o);
      }
      let Nn = (() => {
        class e {
          static {
            this.THROW_IF_NOT_FOUND = qa;
          }
          static {
            this.NULL = new qc();
          }
          static create(t, r) {
            if (Array.isArray(t)) return qy({ name: '' }, r, t, '');
            {
              const o = t.name ?? '';
              return qy({ name: o }, t.parent, t.providers, o);
            }
          }
          static {
            this.ɵprov = B({ token: e, providedIn: 'any', factory: () => dt(Uv) });
          }
          static {
            this.__NG_ELEMENT_ID__ = -1;
          }
        }
        return e;
      })();
      function Eh(e) {
        return e.ngOriginalError;
      }
      class qo {
        constructor() {
          this._console = console;
        }
        handleError(n) {
          const t = this._findOriginalError(n);
          this._console.error('ERROR', n), t && this._console.error('ORIGINAL ERROR', t);
        }
        _findOriginalError(n) {
          let t = n && Eh(n);
          for (; t && Eh(t); ) t = Eh(t);
          return t || null;
        }
      }
      const Yy = new He('', { providedIn: 'root', factory: () => ce(qo).handleError.bind(void 0) });
      let Vs = (() => {
        class e {
          static {
            this.__NG_ELEMENT_ID__ = Xx;
          }
          static {
            this.__NG_ENV_ID__ = t => t;
          }
        }
        return e;
      })();
      class qx extends Vs {
        constructor(n) {
          super(), (this._lView = n);
        }
        onDestroy(n) {
          return (
            ou(this._lView, n),
            () =>
              (function ah(e, n) {
                if (null === e[Mi]) return;
                const t = e[Mi].indexOf(n);
                -1 !== t && e[Mi].splice(t, 1);
              })(this._lView, n)
          );
        }
      }
      function Xx() {
        return new qx(Q());
      }
      function Zx() {
        return Bs(In(), Q());
      }
      function Bs(e, n) {
        return new ge(Fr(e, n));
      }
      let ge = (() => {
        class e {
          constructor(t) {
            this.nativeElement = t;
          }
          static {
            this.__NG_ELEMENT_ID__ = Zx;
          }
        }
        return e;
      })();
      function wh(e) {
        return n => {
          setTimeout(e, void 0, n);
        };
      }
      const xn = class Yx extends _t {
        constructor(n = !1) {
          super(), (this.destroyRef = void 0), (this.__isAsync = n), ny() && (this.destroyRef = ce(Vs, { optional: !0 }) ?? void 0);
        }
        emit(n) {
          const t = S(null);
          try {
            super.next(n);
          } finally {
            S(t);
          }
        }
        subscribe(n, t, r) {
          let o = n,
            i = t || (() => null),
            s = r;
          if (n && 'object' == typeof n) {
            const l = n;
            (o = l.next?.bind(l)), (i = l.error?.bind(l)), (s = l.complete?.bind(l));
          }
          this.__isAsync && ((i = wh(i)), o && (o = wh(o)), s && (s = wh(s)));
          const a = super.subscribe({ next: o, error: i, complete: s });
          return n instanceof H && n.add(a), a;
        }
      };
      function pu(e) {
        return !(128 & ~e.flags);
      }
      const Th = new Map();
      let Jx = 0;
      const Mh = '__ngContext__';
      function Nr(e, n) {
        xr(n)
          ? ((e[Mh] = n[Ja]),
            (function tR(e) {
              Th.set(e[Ja], e);
            })(n))
          : (e[Mh] = n);
      }
      function lD(e) {
        return uD(e[Ka]);
      }
      function cD(e) {
        return uD(e[Io]);
      }
      function uD(e) {
        for (; null !== e && !Rr(e); ) e = e[Io];
        return e;
      }
      let Ah;
      const vu = new He('', { providedIn: 'root', factory: () => DR }),
        DR = 'ng',
        yD = new He(''),
        Xo = new He('', { providedIn: 'platform', factory: () => 'unknown' }),
        DD = new He('', {
          providedIn: 'root',
          factory: () =>
            (function Ai() {
              if (void 0 !== Ah) return Ah;
              if (typeof document < 'u') return document;
              throw new O(210, !1);
            })()
              .body?.querySelector('[ngCspNonce]')
              ?.getAttribute('ngCspNonce') || null,
        });
      let _D = () => null;
      function Lh(e, n, t = !1) {
        return _D(e, n, t);
      }
      const ID = new He('', { providedIn: 'root', factory: () => !1 });
      function ao(e) {
        return e instanceof Function ? e() : e;
      }
      var Ri = (function (e) {
        return (e[(e.Important = 1)] = 'Important'), (e[(e.DashCase = 2)] = 'DashCase'), e;
      })(Ri || {});
      let Yh;
      function Kh(e, n) {
        return Yh(e, n);
      }
      function Ws(e, n, t, r, o) {
        if (null != r) {
          let i,
            s = !1;
          Rr(r) ? (i = r) : xr(r) && ((s = !0), (r = r[Xn]));
          const a = An(r);
          0 === e && null !== t
            ? null == o
              ? JD(n, t, a)
              : is(n, t, a, o || null, !0)
            : 1 === e && null !== t
              ? is(n, t, a, o || null, !0)
              : 2 === e
                ? (function bl(e, n, t) {
                    const r = Ru(e, n);
                    r &&
                      (function IO(e, n, t, r) {
                        e.removeChild(n, t, r);
                      })(e, r, n, t);
                  })(n, a, s)
                : 3 === e && n.destroyNode(a),
            null != i &&
              (function MO(e, n, t, r, o) {
                const i = t[jo];
                i !== An(t) && Ws(n, e, r, i, o);
                for (let a = rr; a < t.length; a++) {
                  const l = t[a];
                  Nu(l[Se], l, e, n, r, i);
                }
              })(n, e, i, t, o);
        }
      }
      function Au(e, n, t) {
        return e.createElement(n, t);
      }
      function YD(e, n) {
        n[To].changeDetectionScheduler?.notify(1), Nu(e, n, n[Nt], 2, null, null);
      }
      function KD(e, n) {
        const t = e[Ns],
          r = t.indexOf(n);
        t.splice(r, 1);
      }
      function _l(e, n) {
        if (e.length <= rr) return;
        const t = rr + n,
          r = e[t];
        if (r) {
          const o = r[Qa];
          null !== o && o !== e && KD(o, r), n > 0 && (e[t - 1][Io] = r[Io]);
          const i = Gc(e, rr + n);
          !(function yO(e, n) {
            YD(e, n), (n[Xn] = null), (n[Ar] = null);
          })(r[Se], r);
          const s = i[ci];
          null !== s && s.detachView(i[Se]), (r[nr] = null), (r[Io] = null), (r[Dt] &= -129);
        }
        return r;
      }
      function xu(e, n) {
        if (!(256 & n[Dt])) {
          const t = n[Nt];
          t.destroyNode && Nu(e, n, t, 3, null, null),
            (function _O(e) {
              let n = e[Ka];
              if (!n) return ep(e[Se], e);
              for (; n; ) {
                let t = null;
                if (xr(n)) t = n[Ka];
                else {
                  const r = n[rr];
                  r && (t = r);
                }
                if (!t) {
                  for (; n && !n[Io] && n !== e; ) xr(n) && ep(n[Se], n), (n = n[nr]);
                  null === n && (n = e), xr(n) && ep(n[Se], n), (t = n && n[Io]);
                }
                n = t;
              }
            })(n);
        }
      }
      function ep(e, n) {
        if (256 & n[Dt]) return;
        const t = S(null);
        try {
          (n[Dt] &= -129),
            (n[Dt] |= 256),
            n[es] &&
              (function De(e) {
                if ((y(e), Ne(e))) for (let n = 0; n < e.producerNode.length; n++) Ee(e.producerNode[n], e.producerIndexOfThis[n]);
                (e.producerNode.length = e.producerLastReadVersion.length = e.producerIndexOfThis.length = 0),
                  e.liveConsumerNode && (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
              })(n[es]),
            (function wO(e, n) {
              let t;
              if (null != e && null != (t = e.destroyHooks))
                for (let r = 0; r < t.length; r += 2) {
                  const o = n[t[r]];
                  if (!(o instanceof ll)) {
                    const i = t[r + 1];
                    if (Array.isArray(i))
                      for (let s = 0; s < i.length; s += 2) {
                        const a = o[i[s]],
                          l = i[s + 1];
                        Uo(4, a, l);
                        try {
                          l.call(a);
                        } finally {
                          Uo(5, a, l);
                        }
                      }
                    else {
                      Uo(4, o, i);
                      try {
                        i.call(o);
                      } finally {
                        Uo(5, o, i);
                      }
                    }
                  }
                }
            })(e, n),
            (function EO(e, n) {
              const t = e.cleanup,
                r = n[xs];
              if (null !== t)
                for (let i = 0; i < t.length - 1; i += 2)
                  if ('string' == typeof t[i]) {
                    const s = t[i + 3];
                    s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
                  } else t[i].call(r[t[i + 1]]);
              null !== r && (n[xs] = null);
              const o = n[Mi];
              if (null !== o) {
                n[Mi] = null;
                for (let i = 0; i < o.length; i++) (0, o[i])();
              }
            })(e, n),
            1 === n[Se].type && n[Nt].destroy();
          const r = n[Qa];
          if (null !== r && Rr(n[nr])) {
            r !== n[nr] && KD(r, n);
            const o = n[ci];
            null !== o && o.detachView(e);
          }
          !(function nR(e) {
            Th.delete(e[Ja]);
          })(n);
        } finally {
          S(t);
        }
      }
      function tp(e, n, t) {
        return (function QD(e, n, t) {
          let r = n;
          for (; null !== r && 40 & r.type; ) r = (n = r).parent;
          if (null === r) return t[Xn];
          {
            const { componentOffset: o } = r;
            if (o > -1) {
              const { encapsulation: i } = e.data[r.directiveStart + o];
              if (i === Eo.None || i === Eo.Emulated) return null;
            }
            return Fr(r, t);
          }
        })(e, n.parent, t);
      }
      function is(e, n, t, r, o) {
        e.insertBefore(n, t, r, o);
      }
      function JD(e, n, t) {
        e.appendChild(n, t);
      }
      function e_(e, n, t, r, o) {
        null !== r ? is(e, n, t, r, o) : JD(e, n, t);
      }
      function Ru(e, n) {
        return e.parentNode(n);
      }
      function t_(e, n, t) {
        return r_(e, n, t);
      }
      let np,
        r_ = function n_(e, n, t) {
          return 40 & e.type ? Fr(e, t) : null;
        };
      function Ou(e, n, t, r) {
        const o = tp(e, r, n),
          i = n[Nt],
          a = t_(r.parent || n[Ar], r, n);
        if (null != o)
          if (Array.isArray(t)) for (let l = 0; l < t.length; l++) e_(i, o, t[l], a, !1);
          else e_(i, o, t, a, !1);
        void 0 !== np && np(i, r, n, t, o);
      }
      function Cl(e, n) {
        if (null !== n) {
          const t = n.type;
          if (3 & t) return Fr(n, e);
          if (4 & t) return rp(-1, e[n.index]);
          if (8 & t) {
            const r = n.child;
            if (null !== r) return Cl(e, r);
            {
              const o = e[n.index];
              return Rr(o) ? rp(-1, o) : An(o);
            }
          }
          if (32 & t) return Kh(n, e)() || An(e[n.index]);
          {
            const r = i_(e, n);
            return null !== r ? (Array.isArray(r) ? r[0] : Cl(ns(e[Kn]), r)) : Cl(e, n.next);
          }
        }
        return null;
      }
      function i_(e, n) {
        return null !== n ? e[Kn][Ar].projection[n.projection] : null;
      }
      function rp(e, n) {
        const t = rr + e + 1;
        if (t < n.length) {
          const r = n[t],
            o = r[Se].firstChild;
          if (null !== o) return Cl(r, o);
        }
        return n[jo];
      }
      function op(e, n, t, r, o, i, s) {
        for (; null != t; ) {
          const a = r[t.index],
            l = t.type;
          if ((s && 0 === n && (a && Nr(An(a), r), (t.flags |= 2)), 32 & ~t.flags))
            if (8 & l) op(e, n, t.child, r, o, i, !1), Ws(n, e, o, a, i);
            else if (32 & l) {
              const c = Kh(t, r);
              let u;
              for (; (u = c()); ) Ws(n, e, o, u, i);
              Ws(n, e, o, a, i);
            } else 16 & l ? a_(e, n, r, t, o, i) : Ws(n, e, o, a, i);
          t = s ? t.projectionNext : t.next;
        }
      }
      function Nu(e, n, t, r, o, i) {
        op(t, r, e.firstChild, n, o, i, !1);
      }
      function a_(e, n, t, r, o, i) {
        const s = t[Kn],
          l = s[Ar].projection[r.projection];
        if (Array.isArray(l)) for (let c = 0; c < l.length; c++) Ws(n, e, o, l[c], i);
        else {
          let c = l;
          const u = s[nr];
          pu(r) && (c.flags |= 128), op(e, n, c, u, o, i, !0);
        }
      }
      function l_(e, n, t) {
        '' === t ? e.removeAttribute(n, 'class') : e.setAttribute(n, 'class', t);
      }
      function c_(e, n, t) {
        const { mergedAttrs: r, classes: o, styles: i } = t;
        null !== r && Bf(e, n, r),
          null !== o && l_(e, n, o),
          null !== i &&
            (function xO(e, n, t) {
              e.setAttribute(n, 'style', t);
            })(e, n, i);
      }
      const Ht = {};
      function kn(e = 1) {
        u_(on(), Q(), Or() + e, !1);
      }
      function u_(e, n, t, r) {
        if (!r)
          if (3 & ~n[Dt]) {
            const i = e.preOrderHooks;
            null !== i && lu(n, i, 0, t);
          } else {
            const i = e.preOrderCheckHooks;
            null !== i && au(n, i, t);
          }
        rs(t);
      }
      function h(e, n = rn.Default) {
        const t = Q();
        return null === t ? dt(e, n) : $y(In(), t, ye(e), n);
      }
      function f_(e, n, t, r, o, i) {
        const s = S(null);
        try {
          let a = null;
          o & zn.SignalBased && (a = n[r][Fe]),
            null !== a && void 0 !== a.transformFn && (i = a.transformFn(i)),
            o & zn.HasDecoratorInputTransform && (i = e.inputTransforms[r].call(n, i)),
            null !== e.setInput ? e.setInput(n, a, i, t, r) : cy(n, a, r, i);
        } finally {
          S(s);
        }
      }
      function ku(e, n, t, r, o, i, s, a, l, c, u) {
        const d = n.blueprint.slice();
        return (
          (d[Xn] = o),
          (d[Dt] = 204 | r),
          (null !== c || (e && 2048 & e[Dt])) && (d[Dt] |= 2048),
          my(d),
          (d[nr] = d[Rs] = e),
          (d[Ln] = t),
          (d[To] = s || (e && e[To])),
          (d[Nt] = a || (e && e[Nt])),
          (d[cr] = l || (e && e[cr]) || null),
          (d[Ar] = i),
          (d[Ja] = (function eR() {
            return Jx++;
          })()),
          (d[io] = u),
          (d[iy] = c),
          (d[Kn] = 2 == n.type ? e[Kn] : d),
          d
        );
      }
      function qs(e, n, t, r, o) {
        let i = e.data[n];
        if (null === i)
          (i = (function ip(e, n, t, r, o) {
            const i = _y(),
              s = lh(),
              l = (e.data[n] = (function $O(e, n, t, r, o, i) {
                let s = n ? n.injectorIndex : -1,
                  a = 0;
                return (
                  Ps() && (a |= 128),
                  {
                    type: t,
                    index: r,
                    insertBeforeIndex: null,
                    injectorIndex: s,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    componentOffset: -1,
                    propertyBindings: null,
                    flags: a,
                    providerIndexes: 0,
                    value: o,
                    attrs: i,
                    mergedAttrs: null,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: null,
                    outputs: null,
                    tView: null,
                    next: null,
                    prev: null,
                    projectionNext: null,
                    child: null,
                    parent: n,
                    projection: null,
                    styles: null,
                    stylesWithoutHost: null,
                    residualStyles: void 0,
                    classes: null,
                    classesWithoutHost: null,
                    residualClasses: void 0,
                    classBindings: 0,
                    styleBindings: 0,
                  }
                );
              })(0, s ? i : i && i.parent, t, n, r, o));
            return (
              null === e.firstChild && (e.firstChild = l),
              null !== i && (s ? null == i.child && null !== l.parent && (i.child = l) : null === i.next && ((i.next = l), (l.prev = i))),
              l
            );
          })(e, n, t, r, o)),
            (function vx() {
              return kt.lFrame.inI18n;
            })() && (i.flags |= 32);
        else if (64 & i.type) {
          (i.type = t), (i.value = r), (i.attrs = o);
          const s = (function sl() {
            const e = kt.lFrame,
              n = e.currentTNode;
            return e.isParent ? n : n.parent;
          })();
          i.injectorIndex = null === s ? -1 : s.injectorIndex;
        }
        return zo(i, !0), i;
      }
      function El(e, n, t, r) {
        if (0 === t) return -1;
        const o = n.length;
        for (let i = 0; i < t; i++) n.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function h_(e, n, t, r, o) {
        const i = Or(),
          s = 2 & r;
        try {
          rs(-1), s && n.length > Vt && u_(e, n, Vt, !1), Uo(s ? 2 : 0, o), t(r, o);
        } finally {
          rs(i), Uo(s ? 3 : 1, o);
        }
      }
      function sp(e, n, t) {
        if (Qf(n)) {
          const r = S(null);
          try {
            const i = n.directiveEnd;
            for (let s = n.directiveStart; s < i; s++) {
              const a = e.data[s];
              a.contentQueries && a.contentQueries(1, t[s], s);
            }
          } finally {
            S(r);
          }
        }
      }
      function ap(e, n, t) {
        Dy() &&
          ((function GO(e, n, t, r) {
            const o = t.directiveStart,
              i = t.directiveEnd;
            ts(t) &&
              (function QO(e, n, t) {
                const r = Fr(n, e),
                  o = p_(t);
                let s = 16;
                t.signals ? (s = 4096) : t.onPush && (s = 64);
                const a = Pu(e, ku(e, o, null, s, r, n, null, e[To].rendererFactory.createRenderer(r, t), null, null, null));
                e[n.index] = a;
              })(n, t, e.data[o + t.componentOffset]),
              e.firstCreatePass || uu(t, n),
              Nr(r, n);
            const s = t.initialInputs;
            for (let a = o; a < i; a++) {
              const l = e.data[a],
                c = os(n, e, a, t);
              Nr(c, n), null !== s && JO(0, a - o, c, l, 0, s), So(l) && (so(t.index, n)[Ln] = os(n, e, a, t));
            }
          })(e, n, t, Fr(t, n)),
          !(64 & ~t.flags) && D_(e, n, t));
      }
      function lp(e, n, t = Fr) {
        const r = n.localNames;
        if (null !== r) {
          let o = n.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const s = r[i + 1],
              a = -1 === s ? t(n, e) : e[s];
            e[o++] = a;
          }
        }
      }
      function p_(e) {
        const n = e.tView;
        return null === n || n.incompleteFirstPass
          ? (e.tView = cp(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id))
          : n;
      }
      function cp(e, n, t, r, o, i, s, a, l, c, u) {
        const d = Vt + r,
          g = d + o,
          m = (function OO(e, n) {
            const t = [];
            for (let r = 0; r < n; r++) t.push(r < e ? null : Ht);
            return t;
          })(d, g),
          v = 'function' == typeof c ? c() : c;
        return (m[Se] = {
          type: e,
          blueprint: m,
          template: t,
          queries: null,
          viewQuery: a,
          declTNode: n,
          data: m.slice().fill(null, d),
          bindingStartIndex: d,
          expandoStartIndex: g,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof i ? i() : i,
          pipeRegistry: 'function' == typeof s ? s() : s,
          firstChild: null,
          schemas: l,
          consts: v,
          incompleteFirstPass: !1,
          ssrId: u,
        });
      }
      let g_ = () => null;
      function m_(e, n, t, r, o) {
        for (let i in n) {
          if (!n.hasOwnProperty(i)) continue;
          const s = n[i];
          if (void 0 === s) continue;
          r ??= {};
          let a,
            l = zn.None;
          Array.isArray(s) ? ((a = s[0]), (l = s[1])) : (a = s);
          let c = i;
          if (null !== o) {
            if (!o.hasOwnProperty(i)) continue;
            c = o[i];
          }
          0 === e ? v_(r, t, c, a, l) : v_(r, t, c, a);
        }
        return r;
      }
      function v_(e, n, t, r, o) {
        let i;
        e.hasOwnProperty(t) ? (i = e[t]).push(n, r) : (i = e[t] = [n, r]), void 0 !== o && i.push(o);
      }
      function up(e, n, t, r) {
        if (Dy()) {
          const o = null === r ? null : { '': -1 },
            i = (function qO(e, n) {
              const t = e.directiveRegistry;
              let r = null,
                o = null;
              if (t)
                for (let i = 0; i < t.length; i++) {
                  const s = t[i];
                  if (qv(n, s.selectors, !1))
                    if ((r || (r = []), So(s)))
                      if (null !== s.findHostDirectiveDefs) {
                        const a = [];
                        (o = o || new Map()), s.findHostDirectiveDefs(s, a, o), r.unshift(...a, s), dp(e, n, a.length);
                      } else r.unshift(s), dp(e, n, 0);
                    else (o = o || new Map()), s.findHostDirectiveDefs?.(s, r, o), r.push(s);
                }
              return null === r ? null : [r, o];
            })(e, t);
          let s, a;
          null === i ? (s = a = null) : ([s, a] = i),
            null !== s && y_(e, n, t, s, o, a),
            o &&
              (function XO(e, n, t) {
                if (n) {
                  const r = (e.localNames = []);
                  for (let o = 0; o < n.length; o += 2) {
                    const i = t[n[o + 1]];
                    if (null == i) throw new O(-301, !1);
                    r.push(n[o], i);
                  }
                }
              })(t, r, o);
        }
        t.mergedAttrs = Za(t.mergedAttrs, t.attrs);
      }
      function y_(e, n, t, r, o, i) {
        for (let c = 0; c < r.length; c++) _h(uu(t, n), e, r[c].type);
        !(function YO(e, n, t) {
          (e.flags |= 1), (e.directiveStart = n), (e.directiveEnd = n + t), (e.providerIndexes = n);
        })(t, e.data.length, r.length);
        for (let c = 0; c < r.length; c++) {
          const u = r[c];
          u.providersResolver && u.providersResolver(u);
        }
        let s = !1,
          a = !1,
          l = El(e, n, r.length, null);
        for (let c = 0; c < r.length; c++) {
          const u = r[c];
          (t.mergedAttrs = Za(t.mergedAttrs, u.hostAttrs)),
            KO(e, t, n, l, u),
            ZO(l, u, o),
            null !== u.contentQueries && (t.flags |= 4),
            (null !== u.hostBindings || null !== u.hostAttrs || 0 !== u.hostVars) && (t.flags |= 64);
          const d = u.type.prototype;
          !s && (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) && ((e.preOrderHooks ??= []).push(t.index), (s = !0)),
            !a && (d.ngOnChanges || d.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(t.index), (a = !0)),
            l++;
        }
        !(function VO(e, n, t) {
          const o = n.directiveEnd,
            i = e.data,
            s = n.attrs,
            a = [];
          let l = null,
            c = null;
          for (let u = n.directiveStart; u < o; u++) {
            const d = i[u],
              g = t ? t.get(d) : null,
              v = g ? g.outputs : null;
            (l = m_(0, d.inputs, u, l, g ? g.inputs : null)), (c = m_(1, d.outputs, u, c, v));
            const E = null === l || null === s || jf(n) ? null : eN(l, u, s);
            a.push(E);
          }
          null !== l && (l.hasOwnProperty('class') && (n.flags |= 8), l.hasOwnProperty('style') && (n.flags |= 16)),
            (n.initialInputs = a),
            (n.inputs = l),
            (n.outputs = c);
        })(e, t, i);
      }
      function D_(e, n, t) {
        const r = t.directiveStart,
          o = t.directiveEnd,
          i = t.index,
          s = (function Dx() {
            return kt.lFrame.currentDirectiveIndex;
          })();
        try {
          rs(i);
          for (let a = r; a < o; a++) {
            const l = e.data[a],
              c = n[a];
            uh(a), (null !== l.hostBindings || 0 !== l.hostVars || null !== l.hostAttrs) && WO(l, c);
          }
        } finally {
          rs(-1), uh(s);
        }
      }
      function WO(e, n) {
        null !== e.hostBindings && e.hostBindings(1, n);
      }
      function dp(e, n, t) {
        (n.componentOffset = t), (e.components ??= []).push(n.index);
      }
      function ZO(e, n, t) {
        if (t) {
          if (n.exportAs) for (let r = 0; r < n.exportAs.length; r++) t[n.exportAs[r]] = e;
          So(n) && (t[''] = e);
        }
      }
      function KO(e, n, t, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = Ki(o.type)),
          s = new ll(i, So(o), h);
        (e.blueprint[r] = s),
          (t[r] = s),
          (function HO(e, n, t, r, o) {
            const i = o.hostBindings;
            if (i) {
              let s = e.hostBindingOpCodes;
              null === s && (s = e.hostBindingOpCodes = []);
              const a = ~n.index;
              (function zO(e) {
                let n = e.length;
                for (; n > 0; ) {
                  const t = e[--n];
                  if ('number' == typeof t && t < 0) return t;
                }
                return 0;
              })(s) != a && s.push(a),
                s.push(t, r, i);
            }
          })(e, n, r, El(e, t, o.hostVars, Ht), o);
      }
      function Zo(e, n, t, r, o, i) {
        const s = Fr(e, n);
        !(function fp(e, n, t, r, o, i, s) {
          if (null == i) e.removeAttribute(n, o, t);
          else {
            const a = null == s ? $t(i) : s(i, r || '', o);
            e.setAttribute(n, o, a, t);
          }
        })(n[Nt], s, i, e.value, t, r, o);
      }
      function JO(e, n, t, r, o, i) {
        const s = i[n];
        if (null !== s) for (let a = 0; a < s.length; ) f_(r, t, s[a++], s[a++], s[a++], s[a++]);
      }
      function eN(e, n, t) {
        let r = null,
          o = 0;
        for (; o < t.length; ) {
          const i = t[o];
          if (0 !== i)
            if (5 !== i) {
              if ('number' == typeof i) break;
              if (e.hasOwnProperty(i)) {
                null === r && (r = []);
                const s = e[i];
                for (let a = 0; a < s.length; a += 3)
                  if (s[a] === n) {
                    r.push(i, s[a + 1], s[a + 2], t[o + 1]);
                    break;
                  }
              }
              o += 2;
            } else o += 2;
          else o += 4;
        }
        return r;
      }
      function __(e, n, t, r) {
        return [e, !0, 0, n, null, r, null, t, null, null];
      }
      function C_(e, n) {
        const t = e.contentQueries;
        if (null !== t) {
          const r = S(null);
          try {
            for (let o = 0; o < t.length; o += 2) {
              const s = t[o + 1];
              if (-1 !== s) {
                const a = e.data[s];
                iu(t[o]), a.contentQueries(2, n[s], s);
              }
            }
          } finally {
            S(r);
          }
        }
      }
      function Pu(e, n) {
        return e[Ka] ? (e[oy][Io] = n) : (e[Ka] = n), (e[oy] = n), n;
      }
      function hp(e, n, t) {
        iu(0);
        const r = S(null);
        try {
          n(e, t);
        } finally {
          S(r);
        }
      }
      function Fu(e, n) {
        const t = e[cr],
          r = t ? t.get(qo, null) : null;
        r && r.handleError(n);
      }
      function pp(e, n, t, r, o) {
        for (let i = 0; i < t.length; ) {
          const s = t[i++],
            a = t[i++],
            l = t[i++];
          f_(e.data[s], n[s], r, a, l, o);
        }
      }
      function pi(e, n, t) {
        const r = (function tl(e, n) {
          return An(n[e]);
        })(n, e);
        !(function ZD(e, n, t) {
          e.setValue(n, t);
        })(e[Nt], r, t);
      }
      function tN(e, n) {
        const t = so(n, e),
          r = t[Se];
        !(function nN(e, n) {
          for (let t = n.length; t < e.blueprint.length; t++) n.push(e.blueprint[t]);
        })(r, t);
        const o = t[Xn];
        null !== o && null === t[io] && (t[io] = Lh(o, t[cr])), gp(r, t, t[Ln]);
      }
      function gp(e, n, t) {
        hh(n);
        try {
          const r = e.viewQuery;
          null !== r && hp(1, r, t);
          const o = e.template;
          null !== o && h_(e, n, o, 1, t),
            e.firstCreatePass && (e.firstCreatePass = !1),
            n[ci]?.finishViewCreation(e),
            e.staticContentQueries && C_(e, n),
            e.staticViewQueries && hp(2, e.viewQuery, t);
          const i = e.components;
          null !== i &&
            (function rN(e, n) {
              for (let t = 0; t < n.length; t++) tN(e, n[t]);
            })(n, i);
        } catch (r) {
          throw (e.firstCreatePass && ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)), r);
        } finally {
          (n[Dt] &= -5), ph();
        }
      }
      function Xs(e, n) {
        return !n || null === n.firstChild || pu(e);
      }
      function Il(e, n, t, r = !0) {
        const o = n[Se];
        if (
          ((function CO(e, n, t, r) {
            const o = rr + r,
              i = t.length;
            r > 0 && (t[o - 1][Io] = n), r < i - rr ? ((n[Io] = t[o]), Vv(t, rr + r, n)) : (t.push(n), (n[Io] = null)), (n[nr] = t);
            const s = n[Qa];
            null !== s &&
              t !== s &&
              (function bO(e, n) {
                const t = e[Ns];
                n[Kn] !== n[nr][nr][Kn] && (e[Dt] |= Kf.HasTransplantedViews), null === t ? (e[Ns] = [n]) : t.push(n);
              })(s, n);
            const a = n[ci];
            null !== a && a.insertView(e), sh(n), (n[Dt] |= 128);
          })(o, n, e, t),
          r)
        ) {
          const s = rp(t, e),
            a = n[Nt],
            l = Ru(a, e[jo]);
          null !== l &&
            (function DO(e, n, t, r, o, i) {
              (r[Xn] = o), (r[Ar] = n), Nu(e, r, t, 1, o, i);
            })(o, e[Ar], a, n, l, s);
        }
        const i = n[io];
        null !== i && null !== i.firstChild && (i.firstChild = null);
      }
      function Tl(e, n, t, r, o = !1) {
        for (; null !== t; ) {
          const i = n[t.index];
          null !== i && r.push(An(i)), Rr(i) && T_(i, r);
          const s = t.type;
          if (8 & s) Tl(e, n, t.child, r);
          else if (32 & s) {
            const a = Kh(t, n);
            let l;
            for (; (l = a()); ) r.push(l);
          } else if (16 & s) {
            const a = i_(n, t);
            if (Array.isArray(a)) r.push(...a);
            else {
              const l = ns(n[Kn]);
              Tl(l[Se], l, a, r, !0);
            }
          }
          t = o ? t.projectionNext : t.next;
        }
        return r;
      }
      function T_(e, n) {
        for (let t = rr; t < e.length; t++) {
          const r = e[t],
            o = r[Se].firstChild;
          null !== o && Tl(r[Se], r, o, n);
        }
        e[jo] !== e[Xn] && n.push(e[jo]);
      }
      let S_ = [];
      const aN = {
          version: 0,
          lastCleanEpoch: 0,
          dirty: !1,
          producerNode: void 0,
          producerLastReadVersion: void 0,
          producerIndexOfThis: void 0,
          nextProducerIndex: 0,
          liveConsumerNode: void 0,
          liveConsumerIndexOfThis: void 0,
          consumerAllowSignalWrites: !1,
          consumerIsAlwaysLive: !1,
          producerMustRecompute: () => !1,
          producerRecomputeValue: () => {},
          consumerMarkedDirty: () => {},
          consumerOnSignalRead: () => {},
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: e => {
            rl(e.lView);
          },
          consumerOnSignalRead() {
            this.lView[es] = this;
          },
        },
        M_ = 100;
      function Lu(e, n = !0, t = 0) {
        const r = e[To],
          o = r.rendererFactory;
        o.begin?.();
        try {
          !(function lN(e, n) {
            vp(e, n);
            let t = 0;
            for (; ih(e); ) {
              if (t === M_) throw new O(103, !1);
              t++, vp(e, 1);
            }
          })(e, t);
        } catch (s) {
          throw (n && Fu(e, s), s);
        } finally {
          o.end?.(), r.inlineEffectRunner?.flush();
        }
      }
      function cN(e, n, t, r) {
        const o = n[Dt];
        if (!(256 & ~o)) return;
        n[To].inlineEffectRunner?.flush(), hh(n);
        let s = null,
          a = null;
        (function uN(e) {
          return 2 !== e.type;
        })(e) &&
          ((a = (function oN(e) {
            return (
              e[es] ??
              (function iN(e) {
                const n = S_.pop() ?? Object.create(aN);
                return (n.lView = e), n;
              })(e)
            );
          })(n)),
          (s = (function P(e) {
            return e && (e.nextProducerIndex = 0), S(e);
          })(a)));
        try {
          my(n),
            (function by(e) {
              return (kt.lFrame.bindingIndex = e);
            })(e.bindingStartIndex),
            null !== t && h_(e, n, t, 2, r);
          const l = !(3 & ~o);
          if (l) {
            const d = e.preOrderCheckHooks;
            null !== d && au(n, d, null);
          } else {
            const d = e.preOrderHooks;
            null !== d && lu(n, d, 0, null), gh(n, 0);
          }
          if (
            ((function dN(e) {
              for (let n = lD(e); null !== n; n = cD(n)) {
                if (!(n[Dt] & Kf.HasTransplantedViews)) continue;
                const t = n[Ns];
                for (let r = 0; r < t.length; r++) {
                  ax(t[r]);
                }
              }
            })(n),
            A_(n, 0),
            null !== e.contentQueries && C_(e, n),
            l)
          ) {
            const d = e.contentCheckHooks;
            null !== d && au(n, d);
          } else {
            const d = e.contentHooks;
            null !== d && lu(n, d, 1), gh(n, 1);
          }
          !(function RO(e, n) {
            const t = e.hostBindingOpCodes;
            if (null !== t)
              try {
                for (let r = 0; r < t.length; r++) {
                  const o = t[r];
                  if (o < 0) rs(~o);
                  else {
                    const i = o,
                      s = t[++r],
                      a = t[++r];
                    yx(s, i), a(2, n[i]);
                  }
                }
              } finally {
                rs(-1);
              }
          })(e, n);
          const c = e.components;
          null !== c && R_(n, c, 0);
          const u = e.viewQuery;
          if ((null !== u && hp(2, u, r), l)) {
            const d = e.viewCheckHooks;
            null !== d && au(n, d);
          } else {
            const d = e.viewHooks;
            null !== d && lu(n, d, 2), gh(n, 2);
          }
          if ((!0 === e.firstUpdatePass && (e.firstUpdatePass = !1), n[tu])) {
            for (const d of n[tu]) d();
            n[tu] = null;
          }
          n[Dt] &= -73;
        } catch (l) {
          throw (rl(n), l);
        } finally {
          null !== a &&
            ((function x(e, n) {
              if ((S(n), e && void 0 !== e.producerNode && void 0 !== e.producerIndexOfThis && void 0 !== e.producerLastReadVersion)) {
                if (Ne(e))
                  for (let t = e.nextProducerIndex; t < e.producerNode.length; t++) Ee(e.producerNode[t], e.producerIndexOfThis[t]);
                for (; e.producerNode.length > e.nextProducerIndex; )
                  e.producerNode.pop(), e.producerLastReadVersion.pop(), e.producerIndexOfThis.pop();
              }
            })(a, s),
            (function sN(e) {
              e.lView[es] !== e && ((e.lView = null), S_.push(e));
            })(a)),
            ph();
        }
      }
      function A_(e, n) {
        for (let t = lD(e); null !== t; t = cD(t)) for (let r = rr; r < t.length; r++) x_(t[r], n);
      }
      function fN(e, n, t) {
        x_(so(n, e), t);
      }
      function x_(e, n) {
        oh(e) && vp(e, n);
      }
      function vp(e, n) {
        const r = e[Se],
          o = e[Dt],
          i = e[es];
        let s = !!(0 === n && 16 & o);
        if (((s ||= !!(64 & o && 0 === n)), (s ||= !!(1024 & o)), (s ||= !(!i?.dirty || !me(i))), i && (i.dirty = !1), (e[Dt] &= -9217), s))
          cN(r, e, r.template, e[Ln]);
        else if (8192 & o) {
          A_(e, 1);
          const a = r.components;
          null !== a && R_(e, a, 1);
        }
      }
      function R_(e, n, t) {
        for (let r = 0; r < n.length; r++) fN(e, n[r], t);
      }
      function Sl(e) {
        for (e[To].changeDetectionScheduler?.notify(); e; ) {
          e[Dt] |= 64;
          const n = ns(e);
          if (Jf(e) && !n) return e;
          e = n;
        }
        return null;
      }
      class Ml {
        get rootNodes() {
          const n = this._lView,
            t = n[Se];
          return Tl(t, n, t.firstChild, []);
        }
        constructor(n, t, r = !0) {
          (this._lView = n),
            (this._cdRefInjectingView = t),
            (this.notifyErrorHandler = r),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[Ln];
        }
        set context(n) {
          this._lView[Ln] = n;
        }
        get destroyed() {
          return !(256 & ~this._lView[Dt]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const n = this._lView[nr];
            if (Rr(n)) {
              const t = n[8],
                r = t ? t.indexOf(this) : -1;
              r > -1 && (_l(n, r), Gc(t, r));
            }
            this._attachedToViewContainer = !1;
          }
          xu(this._lView[Se], this._lView);
        }
        onDestroy(n) {
          ou(this._lView, n);
        }
        markForCheck() {
          Sl(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[Dt] &= -129;
        }
        reattach() {
          sh(this._lView), (this._lView[Dt] |= 128);
        }
        detectChanges() {
          (this._lView[Dt] |= 1024), Lu(this._lView, this.notifyErrorHandler);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new O(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null), YD(this._lView[Se], this._lView);
        }
        attachToAppRef(n) {
          if (this._attachedToViewContainer) throw new O(902, !1);
          (this._appRef = n), sh(this._lView);
        }
      }
      let xo = (() => {
        class e {
          static {
            this.__NG_ELEMENT_ID__ = gN;
          }
        }
        return e;
      })();
      const hN = xo,
        pN = class extends hN {
          constructor(n, t, r) {
            super(), (this._declarationLView = n), (this._declarationTContainer = t), (this.elementRef = r);
          }
          get ssrId() {
            return this._declarationTContainer.tView?.ssrId || null;
          }
          createEmbeddedView(n, t) {
            return this.createEmbeddedViewImpl(n, t);
          }
          createEmbeddedViewImpl(n, t, r) {
            const o = (function wl(e, n, t, r) {
              const o = S(null);
              try {
                const i = n.tView,
                  l = ku(
                    e,
                    i,
                    t,
                    4096 & e[Dt] ? 4096 : 16,
                    null,
                    n,
                    null,
                    null,
                    r?.injector ?? null,
                    r?.embeddedViewInjector ?? null,
                    r?.dehydratedView ?? null,
                  );
                l[Qa] = e[n.index];
                const u = e[ci];
                return null !== u && (l[ci] = u.createEmbeddedView(i)), gp(i, l, t), l;
              } finally {
                S(o);
              }
            })(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: t, dehydratedView: r });
            return new Ml(o);
          }
        };
      function gN() {
        return (function $u(e, n) {
          return 4 & e.type ? new pN(n, e, Bs(e, n)) : null;
        })(In(), Q());
      }
      class Ep {}
      class VN {}
      class $_ {}
      class jN {
        resolveComponentFactory(n) {
          throw (function BN(e) {
            const n = Error(`No component factory found for ${ee(e)}.`);
            return (n.ngComponent = e), n;
          })(n);
        }
      }
      let Hu = (() => {
        class e {
          static {
            this.NULL = new jN();
          }
        }
        return e;
      })();
      class B_ {}
      let HN = (() => {
        class e {
          static {
            this.ɵprov = B({ token: e, providedIn: 'root', factory: () => null });
          }
        }
        return e;
      })();
      const wp = {},
        j_ = new Set();
      function Yo(e) {
        j_.has(e) || (j_.add(e), performance?.mark?.('mark_feature_usage', { detail: { feature: e } }));
      }
      function U_(...e) {}
      class se {
        constructor({
          enableLongStackTrace: n = !1,
          shouldCoalesceEventChangeDetection: t = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new xn(!1)),
            (this.onMicrotaskEmpty = new xn(!1)),
            (this.onStable = new xn(!1)),
            (this.onError = new xn(!1)),
            typeof Zone > 'u')
          )
            throw new O(908, !1);
          Zone.assertZonePatched();
          const o = this;
          (o._nesting = 0),
            (o._outer = o._inner = Zone.current),
            Zone.TaskTrackingZoneSpec && (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
            n && Zone.longStackTraceZoneSpec && (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !r && t),
            (o.shouldCoalesceRunChangeDetection = r),
            (o.lastRequestAnimationFrameId = -1),
            (o.nativeRequestAnimationFrame = (function zN() {
              const e = 'function' == typeof ot.requestAnimationFrame;
              let n = ot[e ? 'requestAnimationFrame' : 'setTimeout'],
                t = ot[e ? 'cancelAnimationFrame' : 'clearTimeout'];
              if (typeof Zone < 'u' && n && t) {
                const r = n[Zone.__symbol__('OriginalDelegate')];
                r && (n = r);
                const o = t[Zone.__symbol__('OriginalDelegate')];
                o && (t = o);
              }
              return { nativeRequestAnimationFrame: n, nativeCancelAnimationFrame: t };
            })().nativeRequestAnimationFrame),
            (function qN(e) {
              const n = () => {
                !(function WN(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(ot, () => {
                      e.fakeTopEventTask ||
                        (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                          'fakeTopEventTask',
                          () => {
                            (e.lastRequestAnimationFrameId = -1),
                              Tp(e),
                              (e.isCheckStableRunning = !0),
                              Ip(e),
                              (e.isCheckStableRunning = !1);
                          },
                          void 0,
                          () => {},
                          () => {},
                        )),
                        e.fakeTopEventTask.invoke();
                    })),
                    Tp(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (t, r, o, i, s, a) => {
                  if (
                    (function XN(e) {
                      return !(!Array.isArray(e) || 1 !== e.length) && !0 === e[0].data?.__ignore_ng_zone__;
                    })(a)
                  )
                    return t.invokeTask(o, i, s, a);
                  try {
                    return H_(e), t.invokeTask(o, i, s, a);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection && 'eventTask' === i.type) || e.shouldCoalesceRunChangeDetection) && n(), z_(e);
                  }
                },
                onInvoke: (t, r, o, i, s, a, l) => {
                  try {
                    return H_(e), t.invoke(o, i, s, a, l);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && n(), z_(e);
                  }
                },
                onHasTask: (t, r, o, i) => {
                  t.hasTask(o, i),
                    r === o &&
                      ('microTask' == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask), Tp(e), Ip(e))
                        : 'macroTask' == i.change && (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (t, r, o, i) => (t.handleError(o, i), e.runOutsideAngular(() => e.onError.emit(i)), !1),
              });
            })(o);
        }
        static isInAngularZone() {
          return typeof Zone < 'u' && !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!se.isInAngularZone()) throw new O(909, !1);
        }
        static assertNotInAngularZone() {
          if (se.isInAngularZone()) throw new O(909, !1);
        }
        run(n, t, r) {
          return this._inner.run(n, t, r);
        }
        runTask(n, t, r, o) {
          const i = this._inner,
            s = i.scheduleEventTask('NgZoneEvent: ' + o, n, GN, U_, U_);
          try {
            return i.runTask(s, t, r);
          } finally {
            i.cancelTask(s);
          }
        }
        runGuarded(n, t, r) {
          return this._inner.runGuarded(n, t, r);
        }
        runOutsideAngular(n) {
          return this._outer.run(n);
        }
      }
      const GN = {};
      function Ip(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Tp(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function H_(e) {
        e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function z_(e) {
        e._nesting--, Ip(e);
      }
      class G_ {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new xn()),
            (this.onMicrotaskEmpty = new xn()),
            (this.onStable = new xn()),
            (this.onError = new xn());
        }
        run(n, t, r) {
          return n.apply(t, r);
        }
        runGuarded(n, t, r) {
          return n.apply(t, r);
        }
        runOutsideAngular(n) {
          return n();
        }
        runTask(n, t, r, o) {
          return n.apply(t, r);
        }
      }
      var ss = (function (e) {
        return (
          (e[(e.EarlyRead = 0)] = 'EarlyRead'),
          (e[(e.Write = 1)] = 'Write'),
          (e[(e.MixedReadWrite = 2)] = 'MixedReadWrite'),
          (e[(e.Read = 3)] = 'Read'),
          e
        );
      })(ss || {});
      const W_ = { destroy() {} };
      function Mp(e, n) {
        !n &&
          (function Jc(e) {
            if (!ny()) throw new O(-203, !1);
          })();
        const t = n?.injector ?? ce(Nn);
        if (
          !(function Ao(e) {
            return 'browser' === (e ?? ce(Nn)).get(Xo);
          })(t)
        )
          return W_;
        Yo('NgAfterNextRender');
        const r = t.get(Nl),
          o = (r.handler ??= new X_()),
          i = n?.phase ?? ss.MixedReadWrite,
          s = () => {
            o.unregister(l), a();
          },
          a = t.get(Vs).onDestroy(s),
          l = Bo(
            t,
            () =>
              new q_(i, () => {
                s(), e();
              }),
          );
        return o.register(l), { destroy: s };
      }
      class q_ {
        constructor(n, t) {
          (this.phase = n),
            (this.callbackFn = t),
            (this.zone = ce(se)),
            (this.errorHandler = ce(qo, { optional: !0 })),
            ce(Ep, { optional: !0 })?.notify(1);
        }
        invoke() {
          try {
            this.zone.runOutsideAngular(this.callbackFn);
          } catch (n) {
            this.errorHandler?.handleError(n);
          }
        }
      }
      class X_ {
        constructor() {
          (this.executingCallbacks = !1),
            (this.buckets = { [ss.EarlyRead]: new Set(), [ss.Write]: new Set(), [ss.MixedReadWrite]: new Set(), [ss.Read]: new Set() }),
            (this.deferredCallbacks = new Set());
        }
        register(n) {
          (this.executingCallbacks ? this.deferredCallbacks : this.buckets[n.phase]).add(n);
        }
        unregister(n) {
          this.buckets[n.phase].delete(n), this.deferredCallbacks.delete(n);
        }
        execute() {
          this.executingCallbacks = !0;
          for (const n of Object.values(this.buckets)) for (const t of n) t.invoke();
          this.executingCallbacks = !1;
          for (const n of this.deferredCallbacks) this.buckets[n.phase].add(n);
          this.deferredCallbacks.clear();
        }
        destroy() {
          for (const n of Object.values(this.buckets)) n.clear();
          this.deferredCallbacks.clear();
        }
      }
      let Nl = (() => {
        class e {
          constructor() {
            (this.handler = null), (this.internalCallbacks = []);
          }
          execute() {
            this.executeInternalCallbacks(), this.handler?.execute();
          }
          executeInternalCallbacks() {
            const t = [...this.internalCallbacks];
            this.internalCallbacks.length = 0;
            for (const r of t) r();
          }
          ngOnDestroy() {
            this.handler?.destroy(), (this.handler = null), (this.internalCallbacks.length = 0);
          }
          static {
            this.ɵprov = B({ token: e, providedIn: 'root', factory: () => new e() });
          }
        }
        return e;
      })();
      function Gu(e, n, t) {
        let r = t ? e.styles : null,
          o = t ? e.classes : null,
          i = 0;
        if (null !== n)
          for (let s = 0; s < n.length; s++) {
            const a = n[s];
            'number' == typeof a ? (i = a) : 1 == i ? (o = te(o, a)) : 2 == i && (r = te(r, a + ': ' + n[++s] + ';'));
          }
        t ? (e.styles = r) : (e.stylesWithoutHost = r), t ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      class K_ extends Hu {
        constructor(n) {
          super(), (this.ngModule = n);
        }
        resolveComponentFactory(n) {
          const t = Qt(n);
          return new Fl(t, this.ngModule);
        }
      }
      function Q_(e) {
        const n = [];
        for (const t in e) {
          if (!e.hasOwnProperty(t)) continue;
          const r = e[t];
          void 0 !== r && n.push({ propName: Array.isArray(r) ? r[0] : r, templateName: t });
        }
        return n;
      }
      class Wu {
        constructor(n, t) {
          (this.injector = n), (this.parentInjector = t);
        }
        get(n, t, r) {
          r = Uc(r);
          const o = this.injector.get(n, wp, r);
          return o !== wp || t === wp ? o : this.parentInjector.get(n, t, r);
        }
      }
      class Fl extends $_ {
        get inputs() {
          const n = this.componentDef,
            t = n.inputTransforms,
            r = Q_(n.inputs);
          if (null !== t) for (const o of r) t.hasOwnProperty(o.propName) && (o.transform = t[o.propName]);
          return r;
        }
        get outputs() {
          return Q_(this.componentDef.outputs);
        }
        constructor(n, t) {
          super(),
            (this.componentDef = n),
            (this.ngModule = t),
            (this.componentType = n.type),
            (this.selector = (function IA(e) {
              return e.map(wA).join(',');
            })(n.selectors)),
            (this.ngContentSelectors = n.ngContentSelectors ? n.ngContentSelectors : []),
            (this.isBoundToModule = !!t);
        }
        create(n, t, r, o) {
          const i = S(null);
          try {
            let s = (o = o || this.ngModule) instanceof lr ? o : o?.injector;
            s && null !== this.componentDef.getStandaloneInjector && (s = this.componentDef.getStandaloneInjector(s) || s);
            const a = s ? new Wu(n, s) : n,
              l = a.get(B_, null);
            if (null === l) throw new O(407, !1);
            const c = a.get(HN, null),
              g = {
                rendererFactory: l,
                sanitizer: c,
                inlineEffectRunner: null,
                afterRenderEventManager: a.get(Nl, null),
                changeDetectionScheduler: a.get(Ep, null),
              },
              m = l.createRenderer(null, this.componentDef),
              v = this.componentDef.selectors[0][0] || 'div',
              E = r
                ? (function NO(e, n, t, r) {
                    const i = r.get(ID, !1) || t === Eo.ShadowDom,
                      s = e.selectRootElement(n, i);
                    return (
                      (function kO(e) {
                        g_(e);
                      })(s),
                      s
                    );
                  })(m, r, this.componentDef.encapsulation, a)
                : Au(
                    m,
                    v,
                    (function JN(e) {
                      const n = e.toLowerCase();
                      return 'svg' === n ? 'svg' : 'math' === n ? 'math' : null;
                    })(v),
                  );
            let V = 512;
            this.componentDef.signals ? (V |= 4096) : this.componentDef.onPush || (V |= 16);
            let q = null;
            null !== E && (q = Lh(E, a, !0));
            const K = cp(0, null, null, 1, 0, null, null, null, null, null, null),
              Ge = ku(null, K, null, V, null, null, g, m, a, null, q);
            let At, Jt;
            hh(Ge);
            try {
              const En = this.componentDef;
              let br,
                wi = null;
              En.findHostDirectiveDefs ? ((br = []), (wi = new Map()), En.findHostDirectiveDefs(En, br, wi), br.push(En)) : (br = [En]);
              const KM = (function t1(e, n) {
                  const t = e[Se],
                    r = Vt;
                  return (e[r] = n), qs(t, r, 2, '#host', null);
                })(Ge, E),
                g8 = (function n1(e, n, t, r, o, i, s) {
                  const a = o[Se];
                  !(function r1(e, n, t, r) {
                    for (const o of e) n.mergedAttrs = Za(n.mergedAttrs, o.hostAttrs);
                    null !== n.mergedAttrs && (Gu(n, n.mergedAttrs, !0), null !== t && c_(r, t, n));
                  })(r, e, n, s);
                  let l = null;
                  null !== n && (l = Lh(n, o[cr]));
                  const c = i.rendererFactory.createRenderer(n, t);
                  let u = 16;
                  t.signals ? (u = 4096) : t.onPush && (u = 64);
                  const d = ku(o, p_(t), null, u, o[e.index], e, i, c, null, null, l);
                  return a.firstCreatePass && dp(a, e, r.length - 1), Pu(o, d), (o[e.index] = d);
                })(KM, E, En, br, Ge, g, m);
              (Jt = nl(K, Vt)),
                E &&
                  (function i1(e, n, t, r) {
                    if (r) Bf(e, t, ['ng-version', '17.3.12']);
                    else {
                      const { attrs: o, classes: i } = (function TA(e) {
                        const n = [],
                          t = [];
                        let r = 1,
                          o = 2;
                        for (; r < e.length; ) {
                          let i = e[r];
                          if ('string' == typeof i) 2 === o ? '' !== i && n.push(i, e[++r]) : 8 === o && t.push(i);
                          else {
                            if (!wo(o)) break;
                            o = i;
                          }
                          r++;
                        }
                        return { attrs: n, classes: t };
                      })(n.selectors[0]);
                      o && Bf(e, t, o), i && i.length > 0 && l_(e, t, i.join(' '));
                    }
                  })(m, En, E, r),
                void 0 !== t &&
                  (function s1(e, n, t) {
                    const r = (e.projection = []);
                    for (let o = 0; o < n.length; o++) {
                      const i = t[o];
                      r.push(null != i ? Array.from(i) : null);
                    }
                  })(Jt, this.ngContentSelectors, t),
                (At = (function o1(e, n, t, r, o, i) {
                  const s = In(),
                    a = o[Se],
                    l = Fr(s, o);
                  y_(a, o, s, t, null, r);
                  for (let u = 0; u < t.length; u++) Nr(os(o, a, s.directiveStart + u, s), o);
                  D_(a, o, s), l && Nr(l, o);
                  const c = os(o, a, s.directiveStart + s.componentOffset, s);
                  if (((e[Ln] = o[Ln] = c), null !== i)) for (const u of i) u(c, n);
                  return sp(a, s, o), c;
                })(g8, En, br, wi, Ge, [a1])),
                gp(K, Ge, null);
            } finally {
              ph();
            }
            return new e1(this.componentType, At, Bs(Jt, Ge), Ge, Jt);
          } finally {
            S(i);
          }
        }
      }
      class e1 extends VN {
        constructor(n, t, r, o, i) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = i),
            (this.previousInputValues = null),
            (this.instance = t),
            (this.hostView = this.changeDetectorRef = new Ml(o, void 0, !1)),
            (this.componentType = n);
        }
        setInput(n, t) {
          const r = this._tNode.inputs;
          let o;
          if (null !== r && (o = r[n])) {
            if (
              ((this.previousInputValues ??= new Map()), this.previousInputValues.has(n) && Object.is(this.previousInputValues.get(n), t))
            )
              return;
            const i = this._rootLView;
            pp(i[Se], i, o, n, t), this.previousInputValues.set(n, t), Sl(so(this._tNode.index, i));
          }
        }
        get injector() {
          return new gr(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(n) {
          this.hostView.onDestroy(n);
        }
      }
      function a1() {
        const e = In();
        su(Q()[Se], e);
      }
      let go = (() => {
        class e {
          static {
            this.__NG_ELEMENT_ID__ = l1;
          }
        }
        return e;
      })();
      function l1() {
        return (function tC(e, n) {
          let t;
          const r = n[e.index];
          return Rr(r) ? (t = r) : ((t = __(r, n, null, e)), (n[e.index] = t), Pu(n, t)), nC(t, n, e, r), new J_(t, e, n);
        })(In(), Q());
      }
      const c1 = go,
        J_ = class extends c1 {
          constructor(n, t, r) {
            super(), (this._lContainer = n), (this._hostTNode = t), (this._hostLView = r);
          }
          get element() {
            return Bs(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new gr(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const n = du(this._hostTNode, this._hostLView);
            if (vh(n)) {
              const t = ul(n, this._hostLView),
                r = cl(n);
              return new gr(t[Se].data[r + 8], t);
            }
            return new gr(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(n) {
            const t = eC(this._lContainer);
            return (null !== t && t[n]) || null;
          }
          get length() {
            return this._lContainer.length - rr;
          }
          createEmbeddedView(n, t, r) {
            let o, i;
            'number' == typeof r ? (o = r) : null != r && ((o = r.index), (i = r.injector));
            const a = n.createEmbeddedViewImpl(t || {}, i, null);
            return this.insertImpl(a, o, Xs(this._hostTNode, null)), a;
          }
          createComponent(n, t, r, o, i) {
            const s =
              n &&
              !(function Ya(e) {
                return 'function' == typeof e;
              })(n);
            let a;
            if (s) a = t;
            else {
              const v = t || {};
              (a = v.index), (r = v.injector), (o = v.projectableNodes), (i = v.environmentInjector || v.ngModuleRef);
            }
            const l = s ? n : new Fl(Qt(n)),
              c = r || this.parentInjector;
            if (!i && null == l.ngModule) {
              const E = (s ? c : this.parentInjector).get(lr, null);
              E && (i = E);
            }
            Qt(l.componentType ?? {});
            const m = l.create(c, o, null, i);
            return this.insertImpl(m.hostView, a, Xs(this._hostTNode, null)), m;
          }
          insert(n, t) {
            return this.insertImpl(n, t, !0);
          }
          insertImpl(n, t, r) {
            const o = n._lView;
            if (
              (function sx(e) {
                return Rr(e[nr]);
              })(o)
            ) {
              const a = this.indexOf(n);
              if (-1 !== a) this.detach(a);
              else {
                const l = o[nr],
                  c = new J_(l, l[Ar], l[nr]);
                c.detach(c.indexOf(n));
              }
            }
            const i = this._adjustIndex(t),
              s = this._lContainer;
            return Il(s, o, i, r), n.attachToViewContainerRef(), Vv(Rp(s), i, n), n;
          }
          move(n, t) {
            return this.insert(n, t);
          }
          indexOf(n) {
            const t = eC(this._lContainer);
            return null !== t ? t.indexOf(n) : -1;
          }
          remove(n) {
            const t = this._adjustIndex(n, -1),
              r = _l(this._lContainer, t);
            r && (Gc(Rp(this._lContainer), t), xu(r[Se], r));
          }
          detach(n) {
            const t = this._adjustIndex(n, -1),
              r = _l(this._lContainer, t);
            return r && null != Gc(Rp(this._lContainer), t) ? new Ml(r) : null;
          }
          _adjustIndex(n, t = 0) {
            return n ?? this.length + t;
          }
        };
      function eC(e) {
        return e[8];
      }
      function Rp(e) {
        return e[8] || (e[8] = []);
      }
      let nC = function oC(e, n, t, r) {
          if (e[jo]) return;
          let o;
          (o =
            8 & t.type
              ? An(r)
              : (function u1(e, n) {
                  const t = e[Nt],
                    r = t.createComment(''),
                    o = Fr(n, e);
                  return (
                    is(
                      t,
                      Ru(t, o),
                      r,
                      (function TO(e, n) {
                        return e.nextSibling(n);
                      })(t, o),
                      !1,
                    ),
                    r
                  );
                })(n, t)),
            (e[jo] = o);
        },
        Op = () => !1;
      function zt(e) {
        let n = (function IC(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          t = !0;
        const r = [e];
        for (; n; ) {
          let o;
          if (So(e)) o = n.ɵcmp || n.ɵdir;
          else {
            if (n.ɵcmp) throw new O(903, !1);
            o = n.ɵdir;
          }
          if (o) {
            if (t) {
              r.push(o);
              const s = e;
              (s.inputs = Xu(e.inputs)),
                (s.inputTransforms = Xu(e.inputTransforms)),
                (s.declaredInputs = Xu(e.declaredInputs)),
                (s.outputs = Xu(e.outputs));
              const a = o.hostBindings;
              a && k1(e, a);
              const l = o.viewQuery,
                c = o.contentQueries;
              if ((l && O1(e, l), c && N1(e, c), x1(e, o), Jn(e.outputs, o.outputs), So(o) && o.data.animation)) {
                const u = e.data;
                u.animation = (u.animation || []).concat(o.data.animation);
              }
            }
            const i = o.features;
            if (i)
              for (let s = 0; s < i.length; s++) {
                const a = i[s];
                a && a.ngInherit && a(e), a === zt && (t = !1);
              }
          }
          n = Object.getPrototypeOf(n);
        }
        !(function R1(e) {
          let n = 0,
            t = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const o = e[r];
            (o.hostVars = n += o.hostVars), (o.hostAttrs = Za(o.hostAttrs, (t = Za(t, o.hostAttrs))));
          }
        })(r);
      }
      function x1(e, n) {
        for (const t in n.inputs) {
          if (!n.inputs.hasOwnProperty(t) || e.inputs.hasOwnProperty(t)) continue;
          const r = n.inputs[t];
          if (void 0 !== r && ((e.inputs[t] = r), (e.declaredInputs[t] = n.declaredInputs[t]), null !== n.inputTransforms)) {
            const o = Array.isArray(r) ? r[0] : r;
            if (!n.inputTransforms.hasOwnProperty(o)) continue;
            (e.inputTransforms ??= {}), (e.inputTransforms[o] = n.inputTransforms[o]);
          }
        }
      }
      function Xu(e) {
        return e === $o ? {} : e === mn ? [] : e;
      }
      function O1(e, n) {
        const t = e.viewQuery;
        e.viewQuery = t
          ? (r, o) => {
              n(r, o), t(r, o);
            }
          : n;
      }
      function N1(e, n) {
        const t = e.contentQueries;
        e.contentQueries = t
          ? (r, o, i) => {
              n(r, o, i), t(r, o, i);
            }
          : n;
      }
      function k1(e, n) {
        const t = e.hostBindings;
        e.hostBindings = t
          ? (r, o) => {
              n(r, o), t(r, o);
            }
          : n;
      }
      class as {}
      class xC {}
      class jp extends as {
        constructor(n, t, r) {
          super(),
            (this._parent = t),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new K_(this));
          const o = Mr(n);
          (this._bootstrapComponents = ao(o.bootstrap)),
            (this._r3Injector = Xy(
              n,
              t,
              [{ provide: as, useValue: this }, { provide: Hu, useValue: this.componentFactoryResolver }, ...r],
              ee(n),
              new Set(['environment']),
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(n));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const n = this._r3Injector;
          !n.destroyed && n.destroy(), this.destroyCbs.forEach(t => t()), (this.destroyCbs = null);
        }
        onDestroy(n) {
          this.destroyCbs.push(n);
        }
      }
      class Up extends xC {
        constructor(n) {
          super(), (this.moduleType = n);
        }
        create(n) {
          return new jp(this.moduleType, n, []);
        }
      }
      class RC extends as {
        constructor(n) {
          super(), (this.componentFactoryResolver = new K_(this)), (this.instance = null);
          const t = new Ss(
            [...n.providers, { provide: as, useValue: this }, { provide: Hu, useValue: this.componentFactoryResolver }],
            n.parent || Qc(),
            n.debugName,
            new Set(['environment']),
          );
          (this.injector = t), n.runEnvironmentInitializers && t.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(n) {
          this.injector.onDestroy(n);
        }
      }
      function Zu(e, n, t = null) {
        return new RC({ providers: e, parent: n, debugName: t, runEnvironmentInitializers: !0 }).injector;
      }
      let ki = (() => {
        class e {
          constructor() {
            (this.taskId = 0), (this.pendingTasks = new Set()), (this.hasPendingTasks = new wt(!1));
          }
          get _hasPendingTasks() {
            return this.hasPendingTasks.value;
          }
          add() {
            this._hasPendingTasks || this.hasPendingTasks.next(!0);
            const t = this.taskId++;
            return this.pendingTasks.add(t), t;
          }
          remove(t) {
            this.pendingTasks.delete(t), 0 === this.pendingTasks.size && this._hasPendingTasks && this.hasPendingTasks.next(!1);
          }
          ngOnDestroy() {
            this.pendingTasks.clear(), this._hasPendingTasks && this.hasPendingTasks.next(!1);
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
          }
        }
        return e;
      })();
      function Ku(e) {
        return (
          !!(function Hp(e) {
            return null !== e && ('function' == typeof e || 'object' == typeof e);
          })(e) &&
          (Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e))
        );
      }
      function or(e, n, t) {
        return !Object.is(e[n], t) && ((e[n] = t), !0);
      }
      function eo(e, n, t, r, o, i, s, a) {
        const l = Q(),
          c = on(),
          u = e + Vt,
          d = c.firstCreatePass
            ? (function q1(e, n, t, r, o, i, s, a, l) {
                const c = n.consts,
                  u = qs(n, e, 4, s || null, Ho(c, a));
                up(n, t, u, Ho(c, l)), su(n, u);
                const d = (u.tView = cp(2, u, r, o, i, n.directiveRegistry, n.pipeRegistry, null, n.schemas, c, null));
                return null !== n.queries && (n.queries.template(n, u), (d.queries = n.queries.embeddedTView(u))), u;
              })(u, c, l, n, t, r, o, i, s)
            : c.data[u];
        zo(d, !1);
        const g = OC(c, l, d, e);
        al() && Ou(c, l, g, d), Nr(g, l);
        const m = __(g, l, g, d);
        return (
          (l[u] = m),
          Pu(l, m),
          (function rC(e, n, t) {
            return Op(e, n, t);
          })(m, d, l),
          ru(d) && ap(c, l, d),
          null != s && lp(l, d, a),
          eo
        );
      }
      let OC = function NC(e, n, t, r) {
        return Go(!0), n[Nt].createComment('');
      };
      function vo(e, n, t, r) {
        const o = Q();
        return or(o, Mo(), n) && (on(), Zo($n(), o, e, n, t, r)), vo;
      }
      function Zn(e, n, t) {
        const r = Q();
        return (
          or(r, Mo(), n) &&
            (function Jr(e, n, t, r, o, i, s, a) {
              const l = Fr(n, t);
              let u,
                c = n.inputs;
              !a && null != c && (u = c[r])
                ? (pp(e, t, u, r, o),
                  ts(n) &&
                    (function jO(e, n) {
                      const t = so(n, e);
                      16 & t[Dt] || (t[Dt] |= 64);
                    })(t, n.index))
                : 3 & n.type &&
                  ((r = (function BO(e) {
                    return 'class' === e
                      ? 'className'
                      : 'for' === e
                        ? 'htmlFor'
                        : 'formaction' === e
                          ? 'formAction'
                          : 'innerHtml' === e
                            ? 'innerHTML'
                            : 'readonly' === e
                              ? 'readOnly'
                              : 'tabindex' === e
                                ? 'tabIndex'
                                : e;
                  })(r)),
                  (o = null != s ? s(o, n.value || '', r) : o),
                  i.setProperty(l, r, o));
            })(on(), $n(), r, e, n, r[Nt], t, !1),
          Zn
        );
      }
      function ng(e, n, t, r, o) {
        const s = o ? 'class' : 'style';
        pp(e, t, n.inputs[s], s, r);
      }
      function vn(e, n, t, r) {
        const o = Q(),
          i = on(),
          s = Vt + e,
          a = o[Nt],
          l = i.firstCreatePass
            ? (function yP(e, n, t, r, o, i) {
                const s = n.consts,
                  l = qs(n, e, 2, r, Ho(s, o));
                return (
                  up(n, t, l, Ho(s, i)),
                  null !== l.attrs && Gu(l, l.attrs, !1),
                  null !== l.mergedAttrs && Gu(l, l.mergedAttrs, !0),
                  null !== n.queries && n.queries.elementStart(n, l),
                  l
                );
              })(s, i, o, n, t, r)
            : i.data[s],
          c = Sb(i, o, l, a, n, e);
        o[s] = c;
        const u = ru(l);
        return (
          zo(l, !0),
          c_(a, c, l),
          !(function Vl(e) {
            return !(32 & ~e.flags);
          })(l) &&
            al() &&
            Ou(i, o, c, l),
          0 ===
            (function lx() {
              return kt.lFrame.elementDepthCount;
            })() && Nr(c, o),
          (function cx() {
            kt.lFrame.elementDepthCount++;
          })(),
          u && (ap(i, o, l), sp(i, l, o)),
          null !== r && lp(o, l),
          vn
        );
      }
      function Tn() {
        let e = In();
        lh() ? ch() : ((e = e.parent), zo(e, !1));
        const n = e;
        (function dx(e) {
          return kt.skipHydrationRootTNode === e;
        })(n) &&
          (function gx() {
            kt.skipHydrationRootTNode = null;
          })(),
          (function ux() {
            kt.lFrame.elementDepthCount--;
          })();
        const t = on();
        return (
          t.firstCreatePass && (su(t, e), Qf(e) && t.queries.elementEnd(e)),
          null != n.classesWithoutHost &&
            (function xx(e) {
              return !!(8 & e.flags);
            })(n) &&
            ng(t, n, Q(), n.classesWithoutHost, !0),
          null != n.stylesWithoutHost &&
            (function Rx(e) {
              return !!(16 & e.flags);
            })(n) &&
            ng(t, n, Q(), n.stylesWithoutHost, !1),
          Tn
        );
      }
      function $r(e, n, t, r) {
        return vn(e, n, t, r), Tn(), $r;
      }
      let Sb = (e, n, t, r, o, i) => (
        Go(!0),
        Au(
          r,
          o,
          (function Ay() {
            return kt.lFrame.currentNamespace;
          })(),
        )
      );
      function ld() {
        return Q();
      }
      const pa = 'en-US';
      let Nb = pa;
      function Bn(e, n, t, r) {
        const o = Q(),
          i = on(),
          s = In();
        return (
          (function fg(e, n, t, r, o, i, s) {
            const a = ru(r),
              c =
                e.firstCreatePass &&
                (function E_(e) {
                  return e.cleanup || (e.cleanup = []);
                })(e),
              u = n[Ln],
              d = (function b_(e) {
                return e[xs] || (e[xs] = []);
              })(n);
            let g = !0;
            if (3 & r.type || s) {
              const E = Fr(r, n),
                V = s ? s(E) : E,
                q = d.length,
                K = s ? At => s(An(At[r.index])) : r.index;
              let Ge = null;
              if (
                (!s &&
                  a &&
                  (Ge = (function bF(e, n, t, r) {
                    const o = e.cleanup;
                    if (null != o)
                      for (let i = 0; i < o.length - 1; i += 2) {
                        const s = o[i];
                        if (s === t && o[i + 1] === r) {
                          const a = n[xs],
                            l = o[i + 2];
                          return a.length > l ? a[l] : null;
                        }
                        'string' == typeof s && (i += 2);
                      }
                    return null;
                  })(e, n, o, r.index)),
                null !== Ge)
              )
                ((Ge.__ngLastListenerFn__ || Ge).__ngNextListenerFn__ = i), (Ge.__ngLastListenerFn__ = i), (g = !1);
              else {
                i = aE(r, n, u, i, !1);
                const At = t.listen(V, o, i);
                d.push(i, At), c && c.push(o, K, q, q + 1);
              }
            } else i = aE(r, n, u, i, !1);
            const m = r.outputs;
            let v;
            if (g && null !== m && (v = m[o])) {
              const E = v.length;
              if (E)
                for (let V = 0; V < E; V += 2) {
                  const Jt = n[v[V]][v[V + 1]].subscribe(i),
                    En = d.length;
                  d.push(i, Jt), c && c.push(o, r.index, En, -(En + 1));
                }
            }
          })(i, o, o[Nt], s, e, n, r),
          Bn
        );
      }
      function sE(e, n, t, r) {
        const o = S(null);
        try {
          return Uo(6, n, t), !1 !== t(r);
        } catch (i) {
          return Fu(e, i), !1;
        } finally {
          Uo(7, n, t), S(o);
        }
      }
      function aE(e, n, t, r, o) {
        return function i(s) {
          if (s === Function) return r;
          Sl(e.componentOffset > -1 ? so(e.index, n) : n);
          let l = sE(n, t, r, s),
            c = i.__ngNextListenerFn__;
          for (; c; ) (l = sE(n, t, c, s) && l), (c = c.__ngNextListenerFn__);
          return o && !1 === l && s.preventDefault(), l;
        };
      }
      function yo(e = 1) {
        return (function Cx(e) {
          return (kt.lFrame.contextLView = (function vy(e, n) {
            for (; e > 0; ) (n = n[Rs]), e--;
            return n;
          })(e, kt.lFrame.contextLView))[Ln];
        })(e);
      }
      function EF(e, n) {
        let t = null;
        const r = (function _A(e) {
          const n = e.attrs;
          if (null != n) {
            const t = n.indexOf(5);
            if (!(1 & t)) return n[t + 1];
          }
          return null;
        })(e);
        for (let o = 0; o < n.length; o++) {
          const i = n[o];
          if ('*' !== i) {
            if (null === r ? qv(e, i, !0) : EA(r, i)) return o;
          } else t = o;
        }
        return t;
      }
      function je(e) {
        const n = Q()[Kn][Ar];
        if (!n.projection) {
          const r = (n.projection = (function Wc(e, n) {
              const t = [];
              for (let r = 0; r < e; r++) t.push(n);
              return t;
            })(e ? e.length : 1, null)),
            o = r.slice();
          let i = n.child;
          for (; null !== i; ) {
            const s = e ? EF(i, e) : 0;
            null !== s && (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i)), (i = i.next);
          }
        }
      }
      function $e(e, n = 0, t) {
        const r = Q(),
          o = on(),
          i = qs(o, Vt + e, 16, null, t || null);
        null === i.projection && (i.projection = n),
          ch(),
          (!r[io] || Ps()) &&
            32 & ~i.flags &&
            (function SO(e, n, t) {
              a_(n[Nt], 0, n, t, tp(e, t, n), t_(t.parent || n[Ar], t, n));
            })(o, r, i);
      }
      function vr(e, n = '') {
        const t = Q(),
          r = on(),
          o = e + Vt,
          i = r.firstCreatePass ? qs(r, o, 1, n, null) : r.data[o],
          s = TE(r, t, i, n, e);
        (t[o] = s), al() && Ou(r, t, s, i), zo(i, !1);
      }
      let TE = (e, n, t, r, o) => (
        Go(!0),
        (function Qh(e, n) {
          return e.createText(n);
        })(n[Nt], r)
      );
      function ma(e) {
        return fs('', e, ''), ma;
      }
      function fs(e, n, t) {
        const r = Q(),
          o = (function oa(e, n, t, r) {
            return or(e, Mo(), t) ? n + $t(t) + r : Ht;
          })(r, e, n, t);
        return o !== Ht && pi(r, Or(), o), fs;
      }
      function gg(e, n, t, r, o) {
        if (((e = ye(e)), Array.isArray(e))) for (let i = 0; i < e.length; i++) gg(e[i], n, t, r, o);
        else {
          const i = on(),
            s = Q(),
            a = In();
          let l = Ji(e) ? e : ye(e.provide);
          const c = ty(e),
            u = 1048575 & a.providerIndexes,
            d = a.directiveStart,
            g = a.providerIndexes >> 20;
          if (Ji(e) || !e.multi) {
            const m = new ll(c, o, h),
              v = vg(l, n, o ? u : u + g, d);
            -1 === v
              ? (_h(uu(a, s), i, l),
                mg(i, e, n.length),
                n.push(l),
                a.directiveStart++,
                a.directiveEnd++,
                o && (a.providerIndexes += 1048576),
                t.push(m),
                s.push(m))
              : ((t[v] = m), (s[v] = m));
          } else {
            const m = vg(l, n, u + g, d),
              v = vg(l, n, u, u + g),
              V = v >= 0 && t[v];
            if ((o && !V) || (!o && !(m >= 0 && t[m]))) {
              _h(uu(a, s), i, l);
              const q = (function zF(e, n, t, r, o) {
                const i = new ll(e, t, h);
                return (i.multi = []), (i.index = n), (i.componentProviders = 0), LE(i, o, r && !t), i;
              })(o ? HF : UF, t.length, o, r, c);
              !o && V && (t[v].providerFactory = q),
                mg(i, e, n.length, 0),
                n.push(l),
                a.directiveStart++,
                a.directiveEnd++,
                o && (a.providerIndexes += 1048576),
                t.push(q),
                s.push(q);
            } else mg(i, e, m > -1 ? m : v, LE(t[o ? v : m], c, !o && r));
            !o && r && V && t[v].componentProviders++;
          }
        }
      }
      function mg(e, n, t, r) {
        const o = Ji(n),
          i = (function NA(e) {
            return !!e.useClass;
          })(n);
        if (o || i) {
          const l = (i ? ye(n.useClass) : n).prototype.ngOnDestroy;
          if (l) {
            const c = e.destroyHooks || (e.destroyHooks = []);
            if (!o && n.multi) {
              const u = c.indexOf(t);
              -1 === u ? c.push(t, [r, l]) : c[u + 1].push(r, l);
            } else c.push(t, l);
          }
        }
      }
      function LE(e, n, t) {
        return t && e.componentProviders++, e.multi.push(n) - 1;
      }
      function vg(e, n, t, r) {
        for (let o = t; o < r; o++) if (n[o] === e) return o;
        return -1;
      }
      function UF(e, n, t, r) {
        return yg(this.multi, []);
      }
      function HF(e, n, t, r) {
        const o = this.multi;
        let i;
        if (this.providerFactory) {
          const s = this.providerFactory.componentProviders,
            a = os(t, t[Se], this.providerFactory.index, r);
          (i = a.slice(0, s)), yg(o, i);
          for (let l = s; l < a.length; l++) i.push(a[l]);
        } else (i = []), yg(o, i);
        return i;
      }
      function yg(e, n) {
        for (let t = 0; t < e.length; t++) n.push((0, e[t])());
        return n;
      }
      function Dn(e, n = []) {
        return t => {
          t.providersResolver = (r, o) =>
            (function jF(e, n, t) {
              const r = on();
              if (r.firstCreatePass) {
                const o = So(e);
                gg(t, r.data, r.blueprint, o, !0), gg(n, r.data, r.blueprint, o, !1);
              }
            })(r, o ? o(e) : e, n);
        };
      }
      let GF = (() => {
        class e {
          constructor(t) {
            (this._injector = t), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(t) {
            if (!t.standalone) return null;
            if (!this.cachedInjectors.has(t)) {
              const r = Uf(0, t.type),
                o = r.length > 0 ? Zu([r], this._injector, `Standalone[${t.type.name}]`) : null;
              this.cachedInjectors.set(t, o);
            }
            return this.cachedInjectors.get(t);
          }
          ngOnDestroy() {
            try {
              for (const t of this.cachedInjectors.values()) null !== t && t.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
          static {
            this.ɵprov = B({ token: e, providedIn: 'environment', factory: () => new e(dt(lr)) });
          }
        }
        return e;
      })();
      function $E(e) {
        Yo('NgStandalone'), (e.getStandaloneInjector = n => n.get(GF).getOrCreateStandaloneInjector(e));
      }
      let sw = (() => {
        class e {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'platform' });
          }
        }
        return e;
      })();
      const dw = new He(''),
        md = new He('');
      let Tg,
        wg = (() => {
          class e {
            constructor(t, r, o) {
              (this._ngZone = t),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                Tg ||
                  ((function o$(e) {
                    Tg = e;
                  })(o),
                  o.addToWindow(r)),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone = typeof Zone > 'u' ? null : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  this._isZoneStable = !1;
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      se.assertNotInAngularZone(),
                        queueMicrotask(() => {
                          (this._isZoneStable = !0), this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (this._pendingCount += 1), this._pendingCount;
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0)) throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                queueMicrotask(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb();
                  }
                });
              else {
                let t = this.getPendingTasks();
                this._callbacks = this._callbacks.filter(r => !r.updateCb || !r.updateCb(t) || (clearTimeout(r.timeoutId), !1));
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map(t => ({ source: t.source, creationLocation: t.creationLocation, data: t.data }))
                : [];
            }
            addCallback(t, r, o) {
              let i = -1;
              r &&
                r > 0 &&
                (i = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(s => s.timeoutId !== i)), t();
                }, r)),
                this._callbacks.push({ doneCb: t, timeoutId: i, updateCb: o });
            }
            whenStable(t, r, o) {
              if (o && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?',
                );
              this.addCallback(t, r, o), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(t) {
              this.registry.registerApplication(t, this);
            }
            unregisterApplication(t) {
              this.registry.unregisterApplication(t);
            }
            findProviders(t, r, o) {
              return [];
            }
            static {
              this.ɵfac = function (r) {
                return new (r || e)(dt(se), dt(Ig), dt(md));
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: e.ɵfac });
            }
          }
          return e;
        })(),
        Ig = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(t, r) {
              this._applications.set(t, r);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, r = !0) {
              return Tg?.findTestabilityInTree(this, t, r) ?? null;
            }
            static {
              this.ɵfac = function (r) {
                return new (r || e)();
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'platform' });
            }
          }
          return e;
        })();
      function tc(e) {
        return !!e && 'function' == typeof e.then;
      }
      function fw(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const nc = new He('');
      let Sg = (() => {
        class e {
          constructor() {
            (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, r) => {
                (this.resolve = t), (this.reject = r);
              })),
              (this.appInits = ce(nc, { optional: !0 }) ?? []);
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [];
            for (const o of this.appInits) {
              const i = o();
              if (tc(i)) t.push(i);
              else if (fw(i)) {
                const s = new Promise((a, l) => {
                  i.subscribe({ complete: a, error: l });
                });
                t.push(s);
              }
            }
            const r = () => {
              (this.done = !0), this.resolve();
            };
            Promise.all(t)
              .then(() => {
                r();
              })
              .catch(o => {
                this.reject(o);
              }),
              0 === t.length && r(),
              (this.initialized = !0);
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
          }
        }
        return e;
      })();
      const Mg = new He('');
      function gw(e, n) {
        return Array.isArray(n) ? n.reduce(gw, e) : { ...e, ...n };
      }
      let ei = (() => {
        class e {
          constructor() {
            (this._bootstrapListeners = []),
              (this._runningTick = !1),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this._views = []),
              (this.internalErrorHandler = ce(Yy)),
              (this.afterRenderEffectManager = ce(Nl)),
              (this.externalTestViews = new Set()),
              (this.beforeRender = new _t()),
              (this.afterTick = new _t()),
              (this.componentTypes = []),
              (this.components = []),
              (this.isStable = ce(ki).hasPendingTasks.pipe(nt(t => !t))),
              (this._injector = ce(lr));
          }
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          bootstrap(t, r) {
            const o = t instanceof $_;
            if (!this._injector.get(Sg).done)
              throw (
                (!o &&
                  (function Si(e) {
                    const n = Qt(e) || hr(e) || wr(e);
                    return null !== n && n.standalone;
                  })(t),
                new O(405, !1))
              );
            let s;
            (s = o ? t : this._injector.get(Hu).resolveComponentFactory(t)), this.componentTypes.push(s.componentType);
            const a = (function i$(e) {
                return e.isBoundToModule;
              })(s)
                ? void 0
                : this._injector.get(as),
              c = s.create(Nn.NULL, [], r || s.selector, a),
              u = c.location.nativeElement,
              d = c.injector.get(dw, null);
            return (
              d?.registerApplication(u),
              c.onDestroy(() => {
                this.detachView(c.hostView), vd(this.components, c), d?.unregisterApplication(u);
              }),
              this._loadComponent(c),
              c
            );
          }
          tick() {
            this._tick(!0);
          }
          _tick(t) {
            if (this._runningTick) throw new O(101, !1);
            const r = S(null);
            try {
              (this._runningTick = !0), this.detectChangesInAttachedViews(t);
            } catch (o) {
              this.internalErrorHandler(o);
            } finally {
              this.afterTick.next(), (this._runningTick = !1), S(r);
            }
          }
          detectChangesInAttachedViews(t) {
            let r = 0;
            const o = this.afterRenderEffectManager;
            for (;;) {
              if (r === M_) throw new O(103, !1);
              if (t) {
                const i = 0 === r;
                this.beforeRender.next(i);
                for (let { _lView: s, notifyErrorHandler: a } of this._views) a$(s, i, a);
              }
              if (
                (r++,
                o.executeInternalCallbacks(),
                ![...this.externalTestViews.keys(), ...this._views].some(({ _lView: i }) => Ag(i)) &&
                  (o.execute(), ![...this.externalTestViews.keys(), ...this._views].some(({ _lView: i }) => Ag(i))))
              )
                break;
            }
          }
          attachView(t) {
            const r = t;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(t) {
            const r = t;
            vd(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView), this.tick(), this.components.push(t);
            const r = this._injector.get(Mg, []);
            [...this._bootstrapListeners, ...r].forEach(o => o(t));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach(t => t()), this._views.slice().forEach(t => t.destroy());
              } finally {
                (this._destroyed = !0), (this._views = []), (this._bootstrapListeners = []), (this._destroyListeners = []);
              }
          }
          onDestroy(t) {
            return this._destroyListeners.push(t), () => vd(this._destroyListeners, t);
          }
          destroy() {
            if (this._destroyed) throw new O(406, !1);
            const t = this._injector;
            t.destroy && !t.destroyed && t.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
          }
        }
        return e;
      })();
      function vd(e, n) {
        const t = e.indexOf(n);
        t > -1 && e.splice(t, 1);
      }
      function a$(e, n, t) {
        (!n && !Ag(e)) ||
          (function l$(e, n, t) {
            let r;
            t ? ((r = 0), (e[Dt] |= 1024)) : (r = 64 & e[Dt] ? 0 : 1), Lu(e, n, r);
          })(e, t, n);
      }
      function Ag(e) {
        return ih(e);
      }
      class c$ {
        constructor(n, t) {
          (this.ngModuleFactory = n), (this.componentFactories = t);
        }
      }
      let mw = (() => {
          class e {
            compileModuleSync(t) {
              return new Up(t);
            }
            compileModuleAsync(t) {
              return Promise.resolve(this.compileModuleSync(t));
            }
            compileModuleAndAllComponentsSync(t) {
              const r = this.compileModuleSync(t),
                i = ao(Mr(t).declarations).reduce((s, a) => {
                  const l = Qt(a);
                  return l && s.push(new Fl(l)), s;
                }, []);
              return new c$(r, i);
            }
            compileModuleAndAllComponentsAsync(t) {
              return Promise.resolve(this.compileModuleAndAllComponentsSync(t));
            }
            clearCache() {}
            clearCacheFor(t) {}
            getModuleId(t) {}
            static {
              this.ɵfac = function (r) {
                return new (r || e)();
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
            }
          }
          return e;
        })(),
        f$ = (() => {
          class e {
            constructor() {
              (this.zone = ce(se)), (this.applicationRef = ce(ei));
            }
            initialize() {
              this._onMicrotaskEmptySubscription ||
                (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this.zone.run(() => {
                      this.applicationRef.tick();
                    });
                  },
                }));
            }
            ngOnDestroy() {
              this._onMicrotaskEmptySubscription?.unsubscribe();
            }
            static {
              this.ɵfac = function (r) {
                return new (r || e)();
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
            }
          }
          return e;
        })();
      function h$() {
        const e = ce(se),
          n = ce(qo);
        return t => e.runOutsideAngular(() => n.handleError(t));
      }
      let g$ = (() => {
        class e {
          constructor() {
            (this.subscription = new H()), (this.initialized = !1), (this.zone = ce(se)), (this.pendingTasks = ce(ki));
          }
          initialize() {
            if (this.initialized) return;
            this.initialized = !0;
            let t = null;
            !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (t = this.pendingTasks.add()),
              this.zone.runOutsideAngular(() => {
                this.subscription.add(
                  this.zone.onStable.subscribe(() => {
                    se.assertNotInAngularZone(),
                      queueMicrotask(() => {
                        null !== t &&
                          !this.zone.hasPendingMacrotasks &&
                          !this.zone.hasPendingMicrotasks &&
                          (this.pendingTasks.remove(t), (t = null));
                      });
                  }),
                );
              }),
              this.subscription.add(
                this.zone.onUnstable.subscribe(() => {
                  se.assertInAngularZone(), (t ??= this.pendingTasks.add());
                }),
              );
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
          }
        }
        return e;
      })();
      const mi = new He('', {
          providedIn: 'root',
          factory: () =>
            ce(mi, rn.Optional | rn.SkipSelf) ||
            (function m$() {
              return (typeof $localize < 'u' && $localize.locale) || pa;
            })(),
        }),
        xg = new He('');
      let _w = (() => {
          class e {
            constructor(t) {
              (this._injector = t), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
            }
            bootstrapModuleFactory(t, r) {
              const o = (function ZN(e = 'zone.js', n) {
                return 'noop' === e ? new G_() : 'zone.js' === e ? new se(n) : e;
              })(
                r?.ngZone,
                (function Dw(e) {
                  return {
                    enableLongStackTrace: !1,
                    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
                    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
                  };
                })({ eventCoalescing: r?.ngZoneEventCoalescing, runCoalescing: r?.ngZoneRunCoalescing }),
              );
              return o.run(() => {
                const i = (function j1(e, n, t) {
                    return new jp(e, n, t);
                  })(
                    t.moduleType,
                    this.injector,
                    (function yw(e) {
                      return [
                        { provide: se, useFactory: e },
                        {
                          provide: Qi,
                          multi: !0,
                          useFactory: () => {
                            const n = ce(f$, { optional: !0 });
                            return () => n.initialize();
                          },
                        },
                        {
                          provide: Qi,
                          multi: !0,
                          useFactory: () => {
                            const n = ce(g$);
                            return () => {
                              n.initialize();
                            };
                          },
                        },
                        { provide: Yy, useFactory: h$ },
                      ];
                    })(() => o),
                  ),
                  s = i.injector.get(qo, null);
                return (
                  o.runOutsideAngular(() => {
                    const a = o.onError.subscribe({
                      next: l => {
                        s.handleError(l);
                      },
                    });
                    i.onDestroy(() => {
                      vd(this._modules, i), a.unsubscribe();
                    });
                  }),
                  (function pw(e, n, t) {
                    try {
                      const r = t();
                      return tc(r)
                        ? r.catch(o => {
                            throw (n.runOutsideAngular(() => e.handleError(o)), o);
                          })
                        : r;
                    } catch (r) {
                      throw (n.runOutsideAngular(() => e.handleError(r)), r);
                    }
                  })(s, o, () => {
                    const a = i.injector.get(Sg);
                    return (
                      a.runInitializers(),
                      a.donePromise.then(
                        () => (
                          (function kb(e) {
                            'string' == typeof e && (Nb = e.toLowerCase().replace(/_/g, '-'));
                          })(i.injector.get(mi, pa) || pa),
                          this._moduleDoBootstrap(i),
                          i
                        ),
                      )
                    );
                  })
                );
              });
            }
            bootstrapModule(t, r = []) {
              const o = gw({}, r);
              return (function d$(e, n, t) {
                const r = new Up(t);
                return Promise.resolve(r);
              })(0, 0, t).then(i => this.bootstrapModuleFactory(i, o));
            }
            _moduleDoBootstrap(t) {
              const r = t.injector.get(ei);
              if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(o => r.bootstrap(o));
              else {
                if (!t.instance.ngDoBootstrap) throw new O(-403, !1);
                t.instance.ngDoBootstrap(r);
              }
              this._modules.push(t);
            }
            onDestroy(t) {
              this._destroyListeners.push(t);
            }
            get injector() {
              return this._injector;
            }
            destroy() {
              if (this._destroyed) throw new O(404, !1);
              this._modules.slice().forEach(r => r.destroy()), this._destroyListeners.forEach(r => r());
              const t = this._injector.get(xg, null);
              t && (t.forEach(r => r()), t.clear()), (this._destroyed = !0);
            }
            get destroyed() {
              return this._destroyed;
            }
            static {
              this.ɵfac = function (r) {
                return new (r || e)(dt(Nn));
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'platform' });
            }
          }
          return e;
        })(),
        Vi = null;
      const Cw = new He('');
      function bw(e, n, t = []) {
        const r = `Platform: ${n}`,
          o = new He(r);
        return (i = []) => {
          let s = Rg();
          if (!s || s.injector.get(Cw, !1)) {
            const a = [...t, ...i, { provide: o, useValue: !0 }];
            e
              ? e(a)
              : (function D$(e) {
                  if (Vi && !Vi.get(Cw, !1)) throw new O(400, !1);
                  (function hw() {
                    !(function Z(e) {
                      tt = e;
                    })(() => {
                      throw new O(600, !1);
                    });
                  })(),
                    (Vi = e);
                  const n = e.get(_w);
                  (function ww(e) {
                    e.get(yD, null)?.forEach(t => t());
                  })(e);
                })(
                  (function Ew(e = [], n) {
                    return Nn.create({
                      name: n,
                      providers: [{ provide: Gf, useValue: 'platform' }, { provide: xg, useValue: new Set([() => (Vi = null)]) }, ...e],
                    });
                  })(a, r),
                );
          }
          return (function _$(e) {
            const n = Rg();
            if (!n) throw new O(401, !1);
            return n;
          })();
        };
      }
      function Rg() {
        return Vi?.get(_w) ?? null;
      }
      let Ae = (() => {
        class e {
          static {
            this.__NG_ELEMENT_ID__ = b$;
          }
        }
        return e;
      })();
      function b$(e) {
        return (function E$(e, n, t) {
          if (ts(e) && !t) {
            const r = so(e.index, n);
            return new Ml(r, r);
          }
          return 47 & e.type ? new Ml(n[Kn], n) : null;
        })(In(), Q(), !(16 & ~e));
      }
      class Aw {
        constructor() {}
        supports(n) {
          return Ku(n);
        }
        create(n) {
          return new M$(n);
        }
      }
      const S$ = (e, n) => n;
      class M$ {
        constructor(n) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = n || S$);
        }
        forEachItem(n) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) n(t);
        }
        forEachOperation(n) {
          let t = this._itHead,
            r = this._removalsHead,
            o = 0,
            i = null;
          for (; t || r; ) {
            const s = !r || (t && t.currentIndex < Rw(r, o, i)) ? t : r,
              a = Rw(s, o, i),
              l = s.currentIndex;
            if (s === r) o--, (r = r._nextRemoved);
            else if (((t = t._next), null == s.previousIndex)) o++;
            else {
              i || (i = []);
              const c = a - o,
                u = l - o;
              if (c != u) {
                for (let g = 0; g < c; g++) {
                  const m = g < i.length ? i[g] : (i[g] = 0),
                    v = m + g;
                  u <= v && v < c && (i[g] = m + 1);
                }
                i[s.previousIndex] = u - c;
              }
            }
            a !== l && n(s, a, l);
          }
        }
        forEachPreviousItem(n) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) n(t);
        }
        forEachAddedItem(n) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) n(t);
        }
        forEachMovedItem(n) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) n(t);
        }
        forEachRemovedItem(n) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) n(t);
        }
        forEachIdentityChange(n) {
          let t;
          for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) n(t);
        }
        diff(n) {
          if ((null == n && (n = []), !Ku(n))) throw new O(900, !1);
          return this.check(n) ? this : null;
        }
        onDestroy() {}
        check(n) {
          this._reset();
          let o,
            i,
            s,
            t = this._itHead,
            r = !1;
          if (Array.isArray(n)) {
            this.length = n.length;
            for (let a = 0; a < this.length; a++)
              (i = n[a]),
                (s = this._trackByFn(a, i)),
                null !== t && Object.is(t.trackById, s)
                  ? (r && (t = this._verifyReinsertion(t, i, s, a)), Object.is(t.item, i) || this._addIdentityChange(t, i))
                  : ((t = this._mismatch(t, i, s, a)), (r = !0)),
                (t = t._next);
          } else
            (o = 0),
              (function G1(e, n) {
                if (Array.isArray(e)) for (let t = 0; t < e.length; t++) n(e[t]);
                else {
                  const t = e[Symbol.iterator]();
                  let r;
                  for (; !(r = t.next()).done; ) n(r.value);
                }
              })(n, a => {
                (s = this._trackByFn(o, a)),
                  null !== t && Object.is(t.trackById, s)
                    ? (r && (t = this._verifyReinsertion(t, a, s, o)), Object.is(t.item, a) || this._addIdentityChange(t, a))
                    : ((t = this._mismatch(t, a, s, o)), (r = !0)),
                  (t = t._next),
                  o++;
              }),
              (this.length = o);
          return this._truncate(t), (this.collection = n), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let n;
            for (n = this._previousItHead = this._itHead; null !== n; n = n._next) n._nextPrevious = n._next;
            for (n = this._additionsHead; null !== n; n = n._nextAdded) n.previousIndex = n.currentIndex;
            for (this._additionsHead = this._additionsTail = null, n = this._movesHead; null !== n; n = n._nextMoved)
              n.previousIndex = n.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(n, t, r, o) {
          let i;
          return (
            null === n ? (i = this._itTail) : ((i = n._prev), this._remove(n)),
            null !== (n = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null))
              ? (Object.is(n.item, t) || this._addIdentityChange(n, t), this._reinsertAfter(n, i, o))
              : null !== (n = null === this._linkedRecords ? null : this._linkedRecords.get(r, o))
                ? (Object.is(n.item, t) || this._addIdentityChange(n, t), this._moveAfter(n, i, o))
                : (n = this._addAfter(new A$(t, r), i, o)),
            n
          );
        }
        _verifyReinsertion(n, t, r, o) {
          let i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null);
          return (
            null !== i ? (n = this._reinsertAfter(i, n._prev, o)) : n.currentIndex != o && ((n.currentIndex = o), this._addToMoves(n, o)), n
          );
        }
        _truncate(n) {
          for (; null !== n; ) {
            const t = n._next;
            this._addToRemovals(this._unlink(n)), (n = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(n, t, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(n);
          const o = n._prevRemoved,
            i = n._nextRemoved;
          return (
            null === o ? (this._removalsHead = i) : (o._nextRemoved = i),
            null === i ? (this._removalsTail = o) : (i._prevRemoved = o),
            this._insertAfter(n, t, r),
            this._addToMoves(n, r),
            n
          );
        }
        _moveAfter(n, t, r) {
          return this._unlink(n), this._insertAfter(n, t, r), this._addToMoves(n, r), n;
        }
        _addAfter(n, t, r) {
          return (
            this._insertAfter(n, t, r),
            (this._additionsTail = null === this._additionsTail ? (this._additionsHead = n) : (this._additionsTail._nextAdded = n)),
            n
          );
        }
        _insertAfter(n, t, r) {
          const o = null === t ? this._itHead : t._next;
          return (
            (n._next = o),
            (n._prev = t),
            null === o ? (this._itTail = n) : (o._prev = n),
            null === t ? (this._itHead = n) : (t._next = n),
            null === this._linkedRecords && (this._linkedRecords = new xw()),
            this._linkedRecords.put(n),
            (n.currentIndex = r),
            n
          );
        }
        _remove(n) {
          return this._addToRemovals(this._unlink(n));
        }
        _unlink(n) {
          null !== this._linkedRecords && this._linkedRecords.remove(n);
          const t = n._prev,
            r = n._next;
          return null === t ? (this._itHead = r) : (t._next = r), null === r ? (this._itTail = t) : (r._prev = t), n;
        }
        _addToMoves(n, t) {
          return (
            n.previousIndex === t ||
              (this._movesTail = null === this._movesTail ? (this._movesHead = n) : (this._movesTail._nextMoved = n)),
            n
          );
        }
        _addToRemovals(n) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new xw()),
            this._unlinkedRecords.put(n),
            (n.currentIndex = null),
            (n._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = n), (n._prevRemoved = null))
              : ((n._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = n)),
            n
          );
        }
        _addIdentityChange(n, t) {
          return (
            (n.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail ? (this._identityChangesHead = n) : (this._identityChangesTail._nextIdentityChange = n)),
            n
          );
        }
      }
      class A$ {
        constructor(n, t) {
          (this.item = n),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class x$ {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(n) {
          null === this._head
            ? ((this._head = this._tail = n), (n._nextDup = null), (n._prevDup = null))
            : ((this._tail._nextDup = n), (n._prevDup = this._tail), (n._nextDup = null), (this._tail = n));
        }
        get(n, t) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup) if ((null === t || t <= r.currentIndex) && Object.is(r.trackById, n)) return r;
          return null;
        }
        remove(n) {
          const t = n._prevDup,
            r = n._nextDup;
          return null === t ? (this._head = r) : (t._nextDup = r), null === r ? (this._tail = t) : (r._prevDup = t), null === this._head;
        }
      }
      class xw {
        constructor() {
          this.map = new Map();
        }
        put(n) {
          const t = n.trackById;
          let r = this.map.get(t);
          r || ((r = new x$()), this.map.set(t, r)), r.add(n);
        }
        get(n, t) {
          const o = this.map.get(n);
          return o ? o.get(n, t) : null;
        }
        remove(n) {
          const t = n.trackById;
          return this.map.get(t).remove(n) && this.map.delete(t), n;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Rw(e, n, t) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return t && r < t.length && (o = t[r]), r + n + o;
      }
      function Nw() {
        return new Fg([new Aw()]);
      }
      let Fg = (() => {
        class e {
          static {
            this.ɵprov = B({ token: e, providedIn: 'root', factory: Nw });
          }
          constructor(t) {
            this.factories = t;
          }
          static create(t, r) {
            if (null != r) {
              const o = r.factories.slice();
              t = t.concat(o);
            }
            return new e(t);
          }
          static extend(t) {
            return { provide: e, useFactory: r => e.create(t, r || Nw()), deps: [[e, new zc(), new Hc()]] };
          }
          find(t) {
            const r = this.factories.find(o => o.supports(t));
            if (null != r) return r;
            throw new O(901, !1);
          }
        }
        return e;
      })();
      const P$ = bw(null, 'core', []);
      let F$ = (() => {
        class e {
          constructor(t) {}
          static {
            this.ɵfac = function (r) {
              return new (r || e)(dt(ei));
            };
          }
          static {
            this.ɵmod = Vo({ type: e });
          }
          static {
            this.ɵinj = un({});
          }
        }
        return e;
      })();
      function rI(e) {
        const n = Qt(e);
        if (!n) return null;
        const t = new Fl(n);
        return {
          get selector() {
            return t.selector;
          },
          get type() {
            return t.componentType;
          },
          get inputs() {
            return t.inputs;
          },
          get outputs() {
            return t.outputs;
          },
          get ngContentSelectors() {
            return t.ngContentSelectors;
          },
          get isStandalone() {
            return n.standalone;
          },
          get isSignal() {
            return n.signals;
          },
        };
      }
      let oI = null;
      function Bi() {
        return oI;
      }
      class DV {}
      const jr = new He('');
      let Vg = (() => {
        class e {
          historyGo(t) {
            throw new Error('');
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: () => ce(CV), providedIn: 'platform' });
          }
        }
        return e;
      })();
      const _V = new He('');
      let CV = (() => {
        class e extends Vg {
          constructor() {
            super(), (this._doc = ce(jr)), (this._location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return Bi().getBaseHref(this._doc);
          }
          onPopState(t) {
            const r = Bi().getGlobalEventTarget(this._doc, 'window');
            return r.addEventListener('popstate', t, !1), () => r.removeEventListener('popstate', t);
          }
          onHashChange(t) {
            const r = Bi().getGlobalEventTarget(this._doc, 'window');
            return r.addEventListener('hashchange', t, !1), () => r.removeEventListener('hashchange', t);
          }
          get href() {
            return this._location.href;
          }
          get protocol() {
            return this._location.protocol;
          }
          get hostname() {
            return this._location.hostname;
          }
          get port() {
            return this._location.port;
          }
          get pathname() {
            return this._location.pathname;
          }
          get search() {
            return this._location.search;
          }
          get hash() {
            return this._location.hash;
          }
          set pathname(t) {
            this._location.pathname = t;
          }
          pushState(t, r, o) {
            this._history.pushState(t, r, o);
          }
          replaceState(t, r, o) {
            this._history.replaceState(t, r, o);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(t = 0) {
            this._history.go(t);
          }
          getState() {
            return this._history.state;
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: () => new e(), providedIn: 'platform' });
          }
        }
        return e;
      })();
      function Bg(e, n) {
        if (0 == e.length) return n;
        if (0 == n.length) return e;
        let t = 0;
        return e.endsWith('/') && t++, n.startsWith('/') && t++, 2 == t ? e + n.substring(1) : 1 == t ? e + n : e + '/' + n;
      }
      function iI(e) {
        const n = e.match(/#|\?|$/),
          t = (n && n.index) || e.length;
        return e.slice(0, t - ('/' === e[t - 1] ? 1 : 0)) + e.slice(t);
      }
      function vi(e) {
        return e && '?' !== e[0] ? '?' + e : e;
      }
      let yi = (() => {
        class e {
          historyGo(t) {
            throw new Error('');
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: () => ce(aI), providedIn: 'root' });
          }
        }
        return e;
      })();
      const sI = new He('');
      let aI = (() => {
          class e extends yi {
            constructor(t, r) {
              super(),
                (this._platformLocation = t),
                (this._removeListenerFns = []),
                (this._baseHref = r ?? this._platformLocation.getBaseHrefFromDOM() ?? ce(jr).location?.origin ?? '');
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
            }
            onPopState(t) {
              this._removeListenerFns.push(this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t));
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return Bg(this._baseHref, t);
            }
            path(t = !1) {
              const r = this._platformLocation.pathname + vi(this._platformLocation.search),
                o = this._platformLocation.hash;
              return o && t ? `${r}${o}` : r;
            }
            pushState(t, r, o, i) {
              const s = this.prepareExternalUrl(o + vi(i));
              this._platformLocation.pushState(t, r, s);
            }
            replaceState(t, r, o, i) {
              const s = this.prepareExternalUrl(o + vi(i));
              this._platformLocation.replaceState(t, r, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(t = 0) {
              this._platformLocation.historyGo?.(t);
            }
            static {
              this.ɵfac = function (r) {
                return new (r || e)(dt(Vg), dt(sI, 8));
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
            }
          }
          return e;
        })(),
        bV = (() => {
          class e extends yi {
            constructor(t, r) {
              super(),
                (this._platformLocation = t),
                (this._baseHref = ''),
                (this._removeListenerFns = []),
                null != r && (this._baseHref = r);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
            }
            onPopState(t) {
              this._removeListenerFns.push(this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t));
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              const r = this._platformLocation.hash ?? '#';
              return r.length > 0 ? r.substring(1) : r;
            }
            prepareExternalUrl(t) {
              const r = Bg(this._baseHref, t);
              return r.length > 0 ? '#' + r : r;
            }
            pushState(t, r, o, i) {
              let s = this.prepareExternalUrl(o + vi(i));
              0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.pushState(t, r, s);
            }
            replaceState(t, r, o, i) {
              let s = this.prepareExternalUrl(o + vi(i));
              0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.replaceState(t, r, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(t = 0) {
              this._platformLocation.historyGo?.(t);
            }
            static {
              this.ɵfac = function (r) {
                return new (r || e)(dt(Vg), dt(sI, 8));
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: e.ɵfac });
            }
          }
          return e;
        })(),
        ji = (() => {
          class e {
            constructor(t) {
              (this._subject = new xn()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = t);
              const r = this._locationStrategy.getBaseHref();
              (this._basePath = (function IV(e) {
                if (new RegExp('^(https?:)?//').test(e)) {
                  const [, t] = e.split(/\/\/[^\/]+/);
                  return t;
                }
                return e;
              })(iI(lI(r)))),
                this._locationStrategy.onPopState(o => {
                  this._subject.emit({ url: this.path(!0), pop: !0, state: o.state, type: o.type });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(), (this._urlChangeListeners = []);
            }
            path(t = !1) {
              return this.normalize(this._locationStrategy.path(t));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(t, r = '') {
              return this.path() == this.normalize(t + vi(r));
            }
            normalize(t) {
              return e.stripTrailingSlash(
                (function wV(e, n) {
                  if (!e || !n.startsWith(e)) return n;
                  const t = n.substring(e.length);
                  return '' === t || ['/', ';', '?', '#'].includes(t[0]) ? t : n;
                })(this._basePath, lI(t)),
              );
            }
            prepareExternalUrl(t) {
              return t && '/' !== t[0] && (t = '/' + t), this._locationStrategy.prepareExternalUrl(t);
            }
            go(t, r = '', o = null) {
              this._locationStrategy.pushState(o, '', t, r), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + vi(r)), o);
            }
            replaceState(t, r = '', o = null) {
              this._locationStrategy.replaceState(o, '', t, r), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + vi(r)), o);
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(t = 0) {
              this._locationStrategy.historyGo?.(t);
            }
            onUrlChange(t) {
              return (
                this._urlChangeListeners.push(t),
                (this._urlChangeSubscription ??= this.subscribe(r => {
                  this._notifyUrlChangeListeners(r.url, r.state);
                })),
                () => {
                  const r = this._urlChangeListeners.indexOf(t);
                  this._urlChangeListeners.splice(r, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(), (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(t = '', r) {
              this._urlChangeListeners.forEach(o => o(t, r));
            }
            subscribe(t, r, o) {
              return this._subject.subscribe({ next: t, error: r, complete: o });
            }
            static {
              this.normalizeQueryParams = vi;
            }
            static {
              this.joinWithSlash = Bg;
            }
            static {
              this.stripTrailingSlash = iI;
            }
            static {
              this.ɵfac = function (r) {
                return new (r || e)(dt(yi));
              };
            }
            static {
              this.ɵprov = B({
                token: e,
                factory: () =>
                  (function EV() {
                    return new ji(dt(yi));
                  })(),
                providedIn: 'root',
              });
            }
          }
          return e;
        })();
      function lI(e) {
        return e.replace(/\/index.html$/, '');
      }
      function vI(e, n) {
        n = encodeURIComponent(n);
        for (const t of e.split(';')) {
          const r = t.indexOf('='),
            [o, i] = -1 == r ? [t, ''] : [t.slice(0, r), t.slice(r + 1)];
          if (o.trim() === n) return decodeURIComponent(i);
        }
        return null;
      }
      class dB {
        constructor(n, t, r, o) {
          (this.$implicit = n), (this.ngForOf = t), (this.index = r), (this.count = o);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let _I = (() => {
        class e {
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            this._trackByFn = t;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          constructor(t, r, o) {
            (this._viewContainer = t),
              (this._template = r),
              (this._differs = o),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const t = this._ngForOf;
              !this._differ && t && (this._differ = this._differs.find(t).create(this.ngForTrackBy));
            }
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const r = this._viewContainer;
            t.forEachOperation((o, i, s) => {
              if (null == o.previousIndex)
                r.createEmbeddedView(this._template, new dB(o.item, this._ngForOf, -1, -1), null === s ? void 0 : s);
              else if (null == s) r.remove(null === i ? void 0 : i);
              else if (null !== i) {
                const a = r.get(i);
                r.move(a, s), CI(a, o);
              }
            });
            for (let o = 0, i = r.length; o < i; o++) {
              const a = r.get(o).context;
              (a.index = o), (a.count = i), (a.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange(o => {
              CI(r.get(o.currentIndex), o);
            });
          }
          static ngTemplateContextGuard(t, r) {
            return !0;
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)(h(go), h(xo), h(Fg));
            };
          }
          static {
            this.ɵdir = ct({
              type: e,
              selectors: [['', 'ngFor', '', 'ngForOf', '']],
              inputs: { ngForOf: 'ngForOf', ngForTrackBy: 'ngForTrackBy', ngForTemplate: 'ngForTemplate' },
              standalone: !0,
            });
          }
        }
        return e;
      })();
      function CI(e, n) {
        e.context.$implicit = n.item;
      }
      let $d = (() => {
        class e {
          constructor(t, r) {
            (this._viewContainer = t),
              (this._context = new fB()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = r);
          }
          set ngIf(t) {
            (this._context.$implicit = this._context.ngIf = t), this._updateView();
          }
          set ngIfThen(t) {
            bI('ngIfThen', t), (this._thenTemplateRef = t), (this._thenViewRef = null), this._updateView();
          }
          set ngIfElse(t) {
            bI('ngIfElse', t), (this._elseTemplateRef = t), (this._elseViewRef = null), this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context)))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
          }
          static ngTemplateContextGuard(t, r) {
            return !0;
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)(h(go), h(xo));
            };
          }
          static {
            this.ɵdir = ct({
              type: e,
              selectors: [['', 'ngIf', '']],
              inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' },
              standalone: !0,
            });
          }
        }
        return e;
      })();
      class fB {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function bI(e, n) {
        if (n && !n.createEmbeddedView) throw new Error(`${e} must be a TemplateRef, but received '${ee(n)}'.`);
      }
      let nm = (() => {
        class e {
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵmod = Vo({ type: e });
          }
          static {
            this.ɵinj = un({});
          }
        }
        return e;
      })();
      const II = 'browser';
      function rm(e) {
        return e === II;
      }
      function TI(e) {
        return 'server' === e;
      }
      let HB = (() => {
        class e {
          static {
            this.ɵprov = B({ token: e, providedIn: 'root', factory: () => (rm(ce(Xo)) ? new zB(ce(jr), window) : new WB()) });
          }
        }
        return e;
      })();
      class zB {
        constructor(n, t) {
          (this.document = n), (this.window = t), (this.offset = () => [0, 0]);
        }
        setOffset(n) {
          this.offset = Array.isArray(n) ? () => n : n;
        }
        getScrollPosition() {
          return [this.window.scrollX, this.window.scrollY];
        }
        scrollToPosition(n) {
          this.window.scrollTo(n[0], n[1]);
        }
        scrollToAnchor(n) {
          const t = (function GB(e, n) {
            const t = e.getElementById(n) || e.getElementsByName(n)[0];
            if (t) return t;
            if ('function' == typeof e.createTreeWalker && e.body && 'function' == typeof e.body.attachShadow) {
              const r = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT);
              let o = r.currentNode;
              for (; o; ) {
                const i = o.shadowRoot;
                if (i) {
                  const s = i.getElementById(n) || i.querySelector(`[name="${n}"]`);
                  if (s) return s;
                }
                o = r.nextNode();
              }
            }
            return null;
          })(this.document, n);
          t && (this.scrollToElement(t), t.focus());
        }
        setHistoryScrollRestoration(n) {
          this.window.history.scrollRestoration = n;
        }
        scrollToElement(n) {
          const t = n.getBoundingClientRect(),
            r = t.left + this.window.pageXOffset,
            o = t.top + this.window.pageYOffset,
            i = this.offset();
          this.window.scrollTo(r - i[0], o - i[1]);
        }
      }
      class WB {
        setOffset(n) {}
        getScrollPosition() {
          return [0, 0];
        }
        scrollToPosition(n) {}
        scrollToAnchor(n) {}
        setHistoryScrollRestoration(n) {}
      }
      class SI {}
      class _j extends DV {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class im extends _j {
        static makeCurrent() {
          !(function yV(e) {
            oI ??= e;
          })(new im());
        }
        onAndCancel(n, t, r) {
          return (
            n.addEventListener(t, r),
            () => {
              n.removeEventListener(t, r);
            }
          );
        }
        dispatchEvent(n, t) {
          n.dispatchEvent(t);
        }
        remove(n) {
          n.parentNode && n.parentNode.removeChild(n);
        }
        createElement(n, t) {
          return (t = t || this.getDefaultDocument()).createElement(n);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(n) {
          return n.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(n) {
          return n instanceof DocumentFragment;
        }
        getGlobalEventTarget(n, t) {
          return 'window' === t ? window : 'document' === t ? n : 'body' === t ? n.body : null;
        }
        getBaseHref(n) {
          const t = (function Cj() {
            return (lc = lc || document.querySelector('base')), lc ? lc.getAttribute('href') : null;
          })();
          return null == t
            ? null
            : (function bj(e) {
                return new URL(e, document.baseURI).pathname;
              })(t);
        }
        resetBaseElement() {
          lc = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(n) {
          return vI(document.cookie, n);
        }
      }
      let lc = null,
        wj = (() => {
          class e {
            build() {
              return new XMLHttpRequest();
            }
            static {
              this.ɵfac = function (r) {
                return new (r || e)();
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: e.ɵfac });
            }
          }
          return e;
        })();
      const sm = new He('');
      let FI = (() => {
        class e {
          constructor(t, r) {
            (this._zone = r),
              (this._eventNameToPlugin = new Map()),
              t.forEach(o => {
                o.manager = this;
              }),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, r, o) {
            return this._findPluginFor(r).addEventListener(t, r, o);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            let r = this._eventNameToPlugin.get(t);
            if (r) return r;
            if (((r = this._plugins.find(i => i.supports(t))), !r)) throw new O(5101, !1);
            return this._eventNameToPlugin.set(t, r), r;
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)(dt(sm), dt(se));
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac });
          }
        }
        return e;
      })();
      class LI {
        constructor(n) {
          this._doc = n;
        }
      }
      const am = 'ng-app-id';
      let $I = (() => {
        class e {
          constructor(t, r, o, i = {}) {
            (this.doc = t),
              (this.appId = r),
              (this.nonce = o),
              (this.platformId = i),
              (this.styleRef = new Map()),
              (this.hostNodes = new Set()),
              (this.styleNodesInDOM = this.collectServerRenderedStyles()),
              (this.platformIsServer = TI(i)),
              this.resetHostNodes();
          }
          addStyles(t) {
            for (const r of t) 1 === this.changeUsageCount(r, 1) && this.onStyleAdded(r);
          }
          removeStyles(t) {
            for (const r of t) this.changeUsageCount(r, -1) <= 0 && this.onStyleRemoved(r);
          }
          ngOnDestroy() {
            const t = this.styleNodesInDOM;
            t && (t.forEach(r => r.remove()), t.clear());
            for (const r of this.getAllStyles()) this.onStyleRemoved(r);
            this.resetHostNodes();
          }
          addHost(t) {
            this.hostNodes.add(t);
            for (const r of this.getAllStyles()) this.addStyleToHost(t, r);
          }
          removeHost(t) {
            this.hostNodes.delete(t);
          }
          getAllStyles() {
            return this.styleRef.keys();
          }
          onStyleAdded(t) {
            for (const r of this.hostNodes) this.addStyleToHost(r, t);
          }
          onStyleRemoved(t) {
            const r = this.styleRef;
            r.get(t)?.elements?.forEach(o => o.remove()), r.delete(t);
          }
          collectServerRenderedStyles() {
            const t = this.doc.head?.querySelectorAll(`style[${am}="${this.appId}"]`);
            if (t?.length) {
              const r = new Map();
              return (
                t.forEach(o => {
                  null != o.textContent && r.set(o.textContent, o);
                }),
                r
              );
            }
            return null;
          }
          changeUsageCount(t, r) {
            const o = this.styleRef;
            if (o.has(t)) {
              const i = o.get(t);
              return (i.usage += r), i.usage;
            }
            return o.set(t, { usage: r, elements: [] }), r;
          }
          getStyleElement(t, r) {
            const o = this.styleNodesInDOM,
              i = o?.get(r);
            if (i?.parentNode === t) return o.delete(r), i.removeAttribute(am), i;
            {
              const s = this.doc.createElement('style');
              return (
                this.nonce && s.setAttribute('nonce', this.nonce),
                (s.textContent = r),
                this.platformIsServer && s.setAttribute(am, this.appId),
                t.appendChild(s),
                s
              );
            }
          }
          addStyleToHost(t, r) {
            const o = this.getStyleElement(t, r),
              i = this.styleRef,
              s = i.get(r)?.elements;
            s ? s.push(o) : i.set(r, { elements: [o], usage: 1 });
          }
          resetHostNodes() {
            const t = this.hostNodes;
            t.clear(), t.add(this.doc.head);
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)(dt(jr), dt(vu), dt(DD, 8), dt(Xo));
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac });
          }
        }
        return e;
      })();
      const lm = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/MathML/',
        },
        cm = /%COMP%/g,
        Mj = new He('', { providedIn: 'root', factory: () => !0 });
      function BI(e, n) {
        return n.map(t => t.replace(cm, e));
      }
      let jI = (() => {
        class e {
          constructor(t, r, o, i, s, a, l, c = null) {
            (this.eventManager = t),
              (this.sharedStylesHost = r),
              (this.appId = o),
              (this.removeStylesOnCompDestroy = i),
              (this.doc = s),
              (this.platformId = a),
              (this.ngZone = l),
              (this.nonce = c),
              (this.rendererByCompId = new Map()),
              (this.platformIsServer = TI(a)),
              (this.defaultRenderer = new um(t, s, l, this.platformIsServer));
          }
          createRenderer(t, r) {
            if (!t || !r) return this.defaultRenderer;
            this.platformIsServer && r.encapsulation === Eo.ShadowDom && (r = { ...r, encapsulation: Eo.Emulated });
            const o = this.getOrCreateRenderer(t, r);
            return o instanceof HI ? o.applyToHost(t) : o instanceof dm && o.applyStyles(), o;
          }
          getOrCreateRenderer(t, r) {
            const o = this.rendererByCompId;
            let i = o.get(r.id);
            if (!i) {
              const s = this.doc,
                a = this.ngZone,
                l = this.eventManager,
                c = this.sharedStylesHost,
                u = this.removeStylesOnCompDestroy,
                d = this.platformIsServer;
              switch (r.encapsulation) {
                case Eo.Emulated:
                  i = new HI(l, c, r, this.appId, u, s, a, d);
                  break;
                case Eo.ShadowDom:
                  return new Oj(l, c, t, r, s, a, this.nonce, d);
                default:
                  i = new dm(l, c, r, u, s, a, d);
              }
              o.set(r.id, i);
            }
            return i;
          }
          ngOnDestroy() {
            this.rendererByCompId.clear();
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)(dt(FI), dt($I), dt(vu), dt(Mj), dt(jr), dt(Xo), dt(se), dt(DD));
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac });
          }
        }
        return e;
      })();
      class um {
        constructor(n, t, r, o) {
          (this.eventManager = n),
            (this.doc = t),
            (this.ngZone = r),
            (this.platformIsServer = o),
            (this.data = Object.create(null)),
            (this.throwOnSyntheticProps = !0),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(n, t) {
          return t ? this.doc.createElementNS(lm[t] || t, n) : this.doc.createElement(n);
        }
        createComment(n) {
          return this.doc.createComment(n);
        }
        createText(n) {
          return this.doc.createTextNode(n);
        }
        appendChild(n, t) {
          (UI(n) ? n.content : n).appendChild(t);
        }
        insertBefore(n, t, r) {
          n && (UI(n) ? n.content : n).insertBefore(t, r);
        }
        removeChild(n, t) {
          n && n.removeChild(t);
        }
        selectRootElement(n, t) {
          let r = 'string' == typeof n ? this.doc.querySelector(n) : n;
          if (!r) throw new O(-5104, !1);
          return t || (r.textContent = ''), r;
        }
        parentNode(n) {
          return n.parentNode;
        }
        nextSibling(n) {
          return n.nextSibling;
        }
        setAttribute(n, t, r, o) {
          if (o) {
            t = o + ':' + t;
            const i = lm[o];
            i ? n.setAttributeNS(i, t, r) : n.setAttribute(t, r);
          } else n.setAttribute(t, r);
        }
        removeAttribute(n, t, r) {
          if (r) {
            const o = lm[r];
            o ? n.removeAttributeNS(o, t) : n.removeAttribute(`${r}:${t}`);
          } else n.removeAttribute(t);
        }
        addClass(n, t) {
          n.classList.add(t);
        }
        removeClass(n, t) {
          n.classList.remove(t);
        }
        setStyle(n, t, r, o) {
          o & (Ri.DashCase | Ri.Important) ? n.style.setProperty(t, r, o & Ri.Important ? 'important' : '') : (n.style[t] = r);
        }
        removeStyle(n, t, r) {
          r & Ri.DashCase ? n.style.removeProperty(t) : (n.style[t] = '');
        }
        setProperty(n, t, r) {
          null != n && (n[t] = r);
        }
        setValue(n, t) {
          n.nodeValue = t;
        }
        listen(n, t, r) {
          if ('string' == typeof n && !(n = Bi().getGlobalEventTarget(this.doc, n)))
            throw new Error(`Unsupported event target ${n} for event ${t}`);
          return this.eventManager.addEventListener(n, t, this.decoratePreventDefault(r));
        }
        decoratePreventDefault(n) {
          return t => {
            if ('__ngUnwrap__' === t) return n;
            !1 === (this.platformIsServer ? this.ngZone.runGuarded(() => n(t)) : n(t)) && t.preventDefault();
          };
        }
      }
      function UI(e) {
        return 'TEMPLATE' === e.tagName && void 0 !== e.content;
      }
      class Oj extends um {
        constructor(n, t, r, o, i, s, a, l) {
          super(n, i, s, l),
            (this.sharedStylesHost = t),
            (this.hostEl = r),
            (this.shadowRoot = r.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const c = BI(o.id, o.styles);
          for (const u of c) {
            const d = document.createElement('style');
            a && d.setAttribute('nonce', a), (d.textContent = u), this.shadowRoot.appendChild(d);
          }
        }
        nodeOrShadowRoot(n) {
          return n === this.hostEl ? this.shadowRoot : n;
        }
        appendChild(n, t) {
          return super.appendChild(this.nodeOrShadowRoot(n), t);
        }
        insertBefore(n, t, r) {
          return super.insertBefore(this.nodeOrShadowRoot(n), t, r);
        }
        removeChild(n, t) {
          return super.removeChild(this.nodeOrShadowRoot(n), t);
        }
        parentNode(n) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)));
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
      }
      class dm extends um {
        constructor(n, t, r, o, i, s, a, l) {
          super(n, i, s, a),
            (this.sharedStylesHost = t),
            (this.removeStylesOnCompDestroy = o),
            (this.styles = l ? BI(l, r.styles) : r.styles);
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles);
        }
        destroy() {
          this.removeStylesOnCompDestroy && this.sharedStylesHost.removeStyles(this.styles);
        }
      }
      class HI extends dm {
        constructor(n, t, r, o, i, s, a, l) {
          const c = o + '-' + r.id;
          super(n, t, r, i, s, a, l, c),
            (this.contentAttr = (function Aj(e) {
              return '_ngcontent-%COMP%'.replace(cm, e);
            })(c)),
            (this.hostAttr = (function xj(e) {
              return '_nghost-%COMP%'.replace(cm, e);
            })(c));
        }
        applyToHost(n) {
          this.applyStyles(), this.setAttribute(n, this.hostAttr, '');
        }
        createElement(n, t) {
          const r = super.createElement(n, t);
          return super.setAttribute(r, this.contentAttr, ''), r;
        }
      }
      let Nj = (() => {
        class e extends LI {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, r, o) {
            return t.addEventListener(r, o, !1), () => this.removeEventListener(t, r, o);
          }
          removeEventListener(t, r, o) {
            return t.removeEventListener(r, o);
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)(dt(jr));
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac });
          }
        }
        return e;
      })();
      const zI = ['alt', 'control', 'meta', 'shift'],
        kj = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        Pj = { alt: e => e.altKey, control: e => e.ctrlKey, meta: e => e.metaKey, shift: e => e.shiftKey };
      let Fj = (() => {
        class e extends LI {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return null != e.parseEventName(t);
          }
          addEventListener(t, r, o) {
            const i = e.parseEventName(r),
              s = e.eventCallback(i.fullKey, o, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(() => Bi().onAndCancel(t, i.domEventName, s));
          }
          static parseEventName(t) {
            const r = t.toLowerCase().split('.'),
              o = r.shift();
            if (0 === r.length || ('keydown' !== o && 'keyup' !== o)) return null;
            const i = e._normalizeKey(r.pop());
            let s = '',
              a = r.indexOf('code');
            if (
              (a > -1 && (r.splice(a, 1), (s = 'code.')),
              zI.forEach(c => {
                const u = r.indexOf(c);
                u > -1 && (r.splice(u, 1), (s += c + '.'));
              }),
              (s += i),
              0 != r.length || 0 === i.length)
            )
              return null;
            const l = {};
            return (l.domEventName = o), (l.fullKey = s), l;
          }
          static matchEventFullKeyCode(t, r) {
            let o = kj[t.key] || t.key,
              i = '';
            return (
              r.indexOf('code.') > -1 && ((o = t.code), (i = 'code.')),
              !(null == o || !o) &&
                ((o = o.toLowerCase()),
                ' ' === o ? (o = 'space') : '.' === o && (o = 'dot'),
                zI.forEach(s => {
                  s !== o && (0, Pj[s])(t) && (i += s + '.');
                }),
                (i += o),
                i === r)
            );
          }
          static eventCallback(t, r, o) {
            return i => {
              e.matchEventFullKeyCode(i, t) && o.runGuarded(() => r(i));
            };
          }
          static _normalizeKey(t) {
            return 'esc' === t ? 'escape' : t;
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)(dt(jr));
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac });
          }
        }
        return e;
      })();
      const Bj = bw(P$, 'browser', [
          { provide: Xo, useValue: II },
          {
            provide: yD,
            useValue: function Lj() {
              im.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: jr,
            useFactory: function Vj() {
              return (
                (function yR(e) {
                  Ah = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        jj = new He(''),
        qI = [
          {
            provide: md,
            useClass: class Ej {
              addToWindow(n) {
                (ot.getAngularTestability = (r, o = !0) => {
                  const i = n.findTestabilityInTree(r, o);
                  if (null == i) throw new O(5103, !1);
                  return i;
                }),
                  (ot.getAllAngularTestabilities = () => n.getAllTestabilities()),
                  (ot.getAllAngularRootElements = () => n.getAllRootElements()),
                  ot.frameworkStabilizers || (ot.frameworkStabilizers = []),
                  ot.frameworkStabilizers.push(r => {
                    const o = ot.getAllAngularTestabilities();
                    let i = o.length;
                    const s = function () {
                      i--, 0 == i && r();
                    };
                    o.forEach(a => {
                      a.whenStable(s);
                    });
                  });
              }
              findTestabilityInTree(n, t, r) {
                return null == t
                  ? null
                  : (n.getTestability(t) ??
                      (r
                        ? Bi().isShadowRoot(t)
                          ? this.findTestabilityInTree(n, t.host, !0)
                          : this.findTestabilityInTree(n, t.parentElement, !0)
                        : null));
              }
            },
            deps: [],
          },
          { provide: dw, useClass: wg, deps: [se, Ig, md] },
          { provide: wg, useClass: wg, deps: [se, Ig, md] },
        ],
        XI = [
          { provide: Gf, useValue: 'root' },
          {
            provide: qo,
            useFactory: function $j() {
              return new qo();
            },
            deps: [],
          },
          { provide: sm, useClass: Nj, multi: !0, deps: [jr, se, Xo] },
          { provide: sm, useClass: Fj, multi: !0, deps: [jr] },
          jI,
          $I,
          FI,
          { provide: B_, useExisting: jI },
          { provide: SI, useClass: wj, deps: [] },
          [],
        ];
      let Uj = (() => {
          class e {
            constructor(t) {}
            static withServerTransition(t) {
              return { ngModule: e, providers: [{ provide: vu, useValue: t.appId }] };
            }
            static {
              this.ɵfac = function (r) {
                return new (r || e)(dt(jj, 12));
              };
            }
            static {
              this.ɵmod = Vo({ type: e });
            }
            static {
              this.ɵinj = un({ providers: [...XI, ...qI], imports: [nm, F$] });
            }
          }
          return e;
        })(),
        Hj = (() => {
          class e {
            constructor(t) {
              this._doc = t;
            }
            getTitle() {
              return this._doc.title;
            }
            setTitle(t) {
              this._doc.title = t || '';
            }
            static {
              this.ɵfac = function (r) {
                return new (r || e)(dt(jr));
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
            }
          }
          return e;
        })();
      function Ve(e, n, t, r) {
        var s,
          o = arguments.length,
          i = o < 3 ? n : null === r ? (r = Object.getOwnPropertyDescriptor(n, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) i = Reflect.decorate(e, n, t, r);
        else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(n, t, i) : s(n, t)) || i);
        return o > 3 && i && Object.defineProperty(n, t, i), i;
      }
      function Ui(e) {
        return this instanceof Ui ? ((this.v = e), this) : new Ui(e);
      }
      function t0(e) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = (function gm(e) {
              var n = 'function' == typeof Symbol && Symbol.iterator,
                t = n && e[n],
                r = 0;
              if (t) return t.call(e);
              if (e && 'number' == typeof e.length)
                return {
                  next: function () {
                    return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
                  },
                };
              throw new TypeError(n ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
            })(e)),
            (t = {}),
            r('next'),
            r('throw'),
            r('return'),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(i) {
          t[i] =
            e[i] &&
            function (s) {
              return new Promise(function (a, l) {
                !(function o(i, s, a, l) {
                  Promise.resolve(l).then(function (c) {
                    i({ value: c, done: a });
                  }, s);
                })(a, l, (s = e[i](s)).done, s.value);
              });
            };
        }
      }
      ne(6935), 'function' == typeof SuppressedError && SuppressedError;
      const vm = e => e && 'number' == typeof e.length && 'function' != typeof e;
      function n0(e) {
        return yt(e?.then);
      }
      function r0(e) {
        return yt(e[Te]);
      }
      function o0(e) {
        return Symbol.asyncIterator && yt(e?.[Symbol.asyncIterator]);
      }
      function s0(e) {
        return new TypeError(
          `You provided ${null !== e && 'object' == typeof e ? 'an invalid object' : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
        );
      }
      const a0 = (function D2() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      })();
      function l0(e) {
        return yt(e?.[a0]);
      }
      function c0(e) {
        return (function e0(e, n, t) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
          var o,
            r = t.apply(e, n || []),
            i = [];
          return (
            (o = Object.create(('function' == typeof AsyncIterator ? AsyncIterator : Object).prototype)),
            a('next'),
            a('throw'),
            a('return', function s(m) {
              return function (v) {
                return Promise.resolve(v).then(m, d);
              };
            }),
            (o[Symbol.asyncIterator] = function () {
              return this;
            }),
            o
          );
          function a(m, v) {
            r[m] &&
              ((o[m] = function (E) {
                return new Promise(function (V, q) {
                  i.push([m, E, V, q]) > 1 || l(m, E);
                });
              }),
              v && (o[m] = v(o[m])));
          }
          function l(m, v) {
            try {
              !(function c(m) {
                m.value instanceof Ui ? Promise.resolve(m.value.v).then(u, d) : g(i[0][2], m);
              })(r[m](v));
            } catch (E) {
              g(i[0][3], E);
            }
          }
          function u(m) {
            l('next', m);
          }
          function d(m) {
            l('throw', m);
          }
          function g(m, v) {
            m(v), i.shift(), i.length && l(i[0][0], i[0][1]);
          }
        })(this, arguments, function* () {
          const t = e.getReader();
          try {
            for (;;) {
              const { value: r, done: o } = yield Ui(t.read());
              if (o) return yield Ui(void 0);
              yield yield Ui(r);
            }
          } finally {
            t.releaseLock();
          }
        });
      }
      function u0(e) {
        return yt(e?.getReader);
      }
      function no(e) {
        if (e instanceof Je) return e;
        if (null != e) {
          if (r0(e))
            return (function _2(e) {
              return new Je(n => {
                const t = e[Te]();
                if (yt(t.subscribe)) return t.subscribe(n);
                throw new TypeError('Provided object does not correctly implement Symbol.observable');
              });
            })(e);
          if (vm(e))
            return (function C2(e) {
              return new Je(n => {
                for (let t = 0; t < e.length && !n.closed; t++) n.next(e[t]);
                n.complete();
              });
            })(e);
          if (n0(e))
            return (function b2(e) {
              return new Je(n => {
                e.then(
                  t => {
                    n.closed || (n.next(t), n.complete());
                  },
                  t => n.error(t),
                ).then(null, hn);
              });
            })(e);
          if (o0(e)) return d0(e);
          if (l0(e))
            return (function E2(e) {
              return new Je(n => {
                for (const t of e) if ((n.next(t), n.closed)) return;
                n.complete();
              });
            })(e);
          if (u0(e))
            return (function w2(e) {
              return d0(c0(e));
            })(e);
        }
        throw s0(e);
      }
      function d0(e) {
        return new Je(n => {
          (function I2(e, n) {
            var t, r, o, i;
            return (function QI(e, n, t, r) {
              return new (t || (t = Promise))(function (i, s) {
                function a(u) {
                  try {
                    c(r.next(u));
                  } catch (d) {
                    s(d);
                  }
                }
                function l(u) {
                  try {
                    c(r.throw(u));
                  } catch (d) {
                    s(d);
                  }
                }
                function c(u) {
                  u.done
                    ? i(u.value)
                    : (function o(i) {
                        return i instanceof t
                          ? i
                          : new t(function (s) {
                              s(i);
                            });
                      })(u.value).then(a, l);
                }
                c((r = r.apply(e, n || [])).next());
              });
            })(this, void 0, void 0, function* () {
              try {
                for (t = t0(e); !(r = yield t.next()).done; ) if ((n.next(r.value), n.closed)) return;
              } catch (s) {
                o = { error: s };
              } finally {
                try {
                  r && !r.done && (i = t.return) && (yield i.call(t));
                } finally {
                  if (o) throw o.error;
                }
              }
              n.complete();
            });
          })(e, n).catch(t => n.error(t));
        });
      }
      function Ci(e, n, t, r = 0, o = !1) {
        const i = n.schedule(function () {
          t(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
        }, r);
        if ((e.add(i), !o)) return i;
      }
      function f0(e, n = 0) {
        return Le((t, r) => {
          t.subscribe(
            Ce(
              r,
              o => Ci(r, e, () => r.next(o), n),
              () => Ci(r, e, () => r.complete(), n),
              o => Ci(r, e, () => r.error(o), n),
            ),
          );
        });
      }
      function h0(e, n = 0) {
        return Le((t, r) => {
          r.add(e.schedule(() => t.subscribe(r), n));
        });
      }
      function p0(e, n) {
        if (!e) throw new Error('Iterable cannot be null');
        return new Je(t => {
          Ci(t, n, () => {
            const r = e[Symbol.asyncIterator]();
            Ci(
              t,
              n,
              () => {
                r.next().then(o => {
                  o.done ? t.complete() : t.next(o.value);
                });
              },
              0,
              !0,
            );
          });
        });
      }
      function fr(e, n) {
        return n
          ? (function R2(e, n) {
              if (null != e) {
                if (r0(e))
                  return (function T2(e, n) {
                    return no(e).pipe(h0(n), f0(n));
                  })(e, n);
                if (vm(e))
                  return (function M2(e, n) {
                    return new Je(t => {
                      let r = 0;
                      return n.schedule(function () {
                        r === e.length ? t.complete() : (t.next(e[r++]), t.closed || this.schedule());
                      });
                    });
                  })(e, n);
                if (n0(e))
                  return (function S2(e, n) {
                    return no(e).pipe(h0(n), f0(n));
                  })(e, n);
                if (o0(e)) return p0(e, n);
                if (l0(e))
                  return (function A2(e, n) {
                    return new Je(t => {
                      let r;
                      return (
                        Ci(t, n, () => {
                          (r = e[a0]()),
                            Ci(
                              t,
                              n,
                              () => {
                                let o, i;
                                try {
                                  ({ value: o, done: i } = r.next());
                                } catch (s) {
                                  return void t.error(s);
                                }
                                i ? t.complete() : t.next(o);
                              },
                              0,
                              !0,
                            );
                        }),
                        () => yt(r?.return) && r.return()
                      );
                    });
                  })(e, n);
                if (u0(e))
                  return (function x2(e, n) {
                    return p0(c0(e), n);
                  })(e, n);
              }
              throw s0(e);
            })(e, n)
          : no(e);
      }
      function g0(e) {
        return e && yt(e.schedule);
      }
      function ym(e) {
        return e[e.length - 1];
      }
      function uc(e) {
        return g0(ym(e)) ? e.pop() : void 0;
      }
      function mt(...e) {
        return fr(e, uc(e));
      }
      const { isArray: N2 } = Array,
        { getPrototypeOf: k2, prototype: P2, keys: F2 } = Object;
      const { isArray: $2 } = Array;
      function Dm(e) {
        return nt(n =>
          (function V2(e, n) {
            return $2(n) ? e(...n) : e(n);
          })(e, n),
        );
      }
      function Ud(...e) {
        const n = uc(e),
          t = (function m0(e) {
            return yt(ym(e)) ? e.pop() : void 0;
          })(e),
          { args: r, keys: o } = (function v0(e) {
            if (1 === e.length) {
              const n = e[0];
              if (N2(n)) return { args: n, keys: null };
              if (
                (function L2(e) {
                  return e && 'object' == typeof e && k2(e) === P2;
                })(n)
              ) {
                const t = F2(n);
                return { args: t.map(r => n[r]), keys: t };
              }
            }
            return { args: e, keys: null };
          })(e);
        if (0 === r.length) return fr([], n);
        const i = new Je(
          (function B2(e, n, t = rt) {
            return r => {
              D0(
                n,
                () => {
                  const { length: o } = e,
                    i = new Array(o);
                  let s = o,
                    a = o;
                  for (let l = 0; l < o; l++)
                    D0(
                      n,
                      () => {
                        const c = fr(e[l], n);
                        let u = !1;
                        c.subscribe(
                          Ce(
                            r,
                            d => {
                              (i[l] = d), u || ((u = !0), a--), a || r.next(t(i.slice()));
                            },
                            () => {
                              --s || r.complete();
                            },
                          ),
                        );
                      },
                      r,
                    );
                },
                r,
              );
            };
          })(
            r,
            n,
            o
              ? s =>
                  (function y0(e, n) {
                    return e.reduce((t, r, o) => ((t[r] = n[o]), t), {});
                  })(o, s)
              : rt,
          ),
        );
        return t ? i.pipe(Dm(t)) : i;
      }
      function D0(e, n, t) {
        e ? Ci(t, e, n) : n();
      }
      const Hd = wn(
        e =>
          function () {
            e(this), (this.name = 'EmptyError'), (this.message = 'no elements in sequence');
          },
      );
      function Dr(e, n, t = 1 / 0) {
        return yt(n)
          ? Dr((r, o) => nt((i, s) => n(r, i, o, s))(no(e(r, o))), t)
          : ('number' == typeof n && (t = n),
            Le((r, o) =>
              (function j2(e, n, t, r, o, i, s, a) {
                const l = [];
                let c = 0,
                  u = 0,
                  d = !1;
                const g = () => {
                    d && !l.length && !c && n.complete();
                  },
                  m = E => (c < r ? v(E) : l.push(E)),
                  v = E => {
                    i && n.next(E), c++;
                    let V = !1;
                    no(t(E, u++)).subscribe(
                      Ce(
                        n,
                        q => {
                          o?.(q), i ? m(q) : n.next(q);
                        },
                        () => {
                          V = !0;
                        },
                        void 0,
                        () => {
                          if (V)
                            try {
                              for (c--; l.length && c < r; ) {
                                const q = l.shift();
                                s ? Ci(n, s, () => v(q)) : v(q);
                              }
                              g();
                            } catch (q) {
                              n.error(q);
                            }
                        },
                      ),
                    );
                  };
                return (
                  e.subscribe(
                    Ce(n, m, () => {
                      (d = !0), g();
                    }),
                  ),
                  () => {
                    a?.();
                  }
                );
              })(r, o, e, t),
            ));
      }
      function ba(e = 1 / 0) {
        return Dr(rt, e);
      }
      function dc(...e) {
        return (function U2() {
          return ba(1);
        })()(fr(e, uc(e)));
      }
      function zd(e) {
        return new Je(n => {
          no(e()).subscribe(n);
        });
      }
      function uo(e, n) {
        const t = yt(e) ? e : () => e,
          r = o => o.error(t());
        return new Je(n ? o => n.schedule(r, 0, o) : r);
      }
      const Po = new Je(e => e.complete());
      function _m() {
        return Le((e, n) => {
          let t = null;
          e._refCount++;
          const r = Ce(n, void 0, void 0, void 0, () => {
            if (!e || e._refCount <= 0 || 0 < --e._refCount) return void (t = null);
            const o = e._connection,
              i = t;
            (t = null), o && (!i || o === i) && o.unsubscribe(), n.unsubscribe();
          });
          e.subscribe(r), r.closed || (t = e.connect());
        });
      }
      class Cm extends Je {
        constructor(n, t) {
          super(),
            (this.source = n),
            (this.subjectFactory = t),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            sn(n) && (this.lift = n.lift);
        }
        _subscribe(n) {
          return this.getSubject().subscribe(n);
        }
        getSubject() {
          const n = this._subject;
          return (!n || n.isStopped) && (this._subject = this.subjectFactory()), this._subject;
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: n } = this;
          (this._subject = this._connection = null), n?.unsubscribe();
        }
        connect() {
          let n = this._connection;
          if (!n) {
            n = this._connection = new H();
            const t = this.getSubject();
            n.add(
              this.source.subscribe(
                Ce(
                  t,
                  void 0,
                  () => {
                    this._teardown(), t.complete();
                  },
                  r => {
                    this._teardown(), t.error(r);
                  },
                  () => this._teardown(),
                ),
              ),
            ),
              n.closed && ((this._connection = null), (n = H.EMPTY));
          }
          return n;
        }
        refCount() {
          return _m()(this);
        }
      }
      function _r(e, n) {
        return Le((t, r) => {
          let o = null,
            i = 0,
            s = !1;
          const a = () => s && !o && r.complete();
          t.subscribe(
            Ce(
              r,
              l => {
                o?.unsubscribe();
                let c = 0;
                const u = i++;
                no(e(l, u)).subscribe(
                  (o = Ce(
                    r,
                    d => r.next(n ? n(l, d, u, c++) : d),
                    () => {
                      (o = null), a();
                    },
                  )),
                );
              },
              () => {
                (s = !0), a();
              },
            ),
          );
        });
      }
      function ro(e) {
        return e <= 0
          ? () => Po
          : Le((n, t) => {
              let r = 0;
              n.subscribe(
                Ce(t, o => {
                  ++r <= e && (t.next(o), e <= r && t.complete());
                }),
              );
            });
      }
      function kr(e, n) {
        return Le((t, r) => {
          let o = 0;
          t.subscribe(Ce(r, i => e.call(n, i, o++) && r.next(i)));
        });
      }
      function Gd(e) {
        return Le((n, t) => {
          let r = !1;
          n.subscribe(
            Ce(
              t,
              o => {
                (r = !0), t.next(o);
              },
              () => {
                r || t.next(e), t.complete();
              },
            ),
          );
        });
      }
      function _0(e = G2) {
        return Le((n, t) => {
          let r = !1;
          n.subscribe(
            Ce(
              t,
              o => {
                (r = !0), t.next(o);
              },
              () => (r ? t.complete() : t.error(e())),
            ),
          );
        });
      }
      function G2() {
        return new Hd();
      }
      function ps(e, n) {
        const t = arguments.length >= 2;
        return r => r.pipe(e ? kr((o, i) => e(o, i, r)) : rt, ro(1), t ? Gd(n) : _0(() => new Hd()));
      }
      function Ea(e, n) {
        return yt(n) ? Dr(e, n, 1) : Dr(e, 1);
      }
      function Hn(e, n, t) {
        const r = yt(e) || n || t ? { next: e, error: n, complete: t } : e;
        return r
          ? Le((o, i) => {
              var s;
              null === (s = r.subscribe) || void 0 === s || s.call(r);
              let a = !0;
              o.subscribe(
                Ce(
                  i,
                  l => {
                    var c;
                    null === (c = r.next) || void 0 === c || c.call(r, l), i.next(l);
                  },
                  () => {
                    var l;
                    (a = !1), null === (l = r.complete) || void 0 === l || l.call(r), i.complete();
                  },
                  l => {
                    var c;
                    (a = !1), null === (c = r.error) || void 0 === c || c.call(r, l), i.error(l);
                  },
                  () => {
                    var l, c;
                    a && (null === (l = r.unsubscribe) || void 0 === l || l.call(r)),
                      null === (c = r.finalize) || void 0 === c || c.call(r);
                  },
                ),
              );
            })
          : rt;
      }
      function ti(e) {
        return Le((n, t) => {
          let i,
            r = null,
            o = !1;
          (r = n.subscribe(
            Ce(t, void 0, void 0, s => {
              (i = no(e(s, ti(e)(n)))), r ? (r.unsubscribe(), (r = null), i.subscribe(t)) : (o = !0);
            }),
          )),
            o && (r.unsubscribe(), (r = null), i.subscribe(t));
        });
      }
      function bm(e) {
        return e <= 0
          ? () => Po
          : Le((n, t) => {
              let r = [];
              n.subscribe(
                Ce(
                  t,
                  o => {
                    r.push(o), e < r.length && r.shift();
                  },
                  () => {
                    for (const o of r) t.next(o);
                    t.complete();
                  },
                  void 0,
                  () => {
                    r = null;
                  },
                ),
              );
            });
      }
      function C0(e) {
        return nt(() => e);
      }
      function fc(e) {
        return Le((n, t) => {
          try {
            n.subscribe(t);
          } finally {
            t.add(e);
          }
        });
      }
      const Wt = 'primary',
        hc = Symbol('RouteTitle');
      class Y2 {
        constructor(n) {
          this.params = n || {};
        }
        has(n) {
          return Object.prototype.hasOwnProperty.call(this.params, n);
        }
        get(n) {
          if (this.has(n)) {
            const t = this.params[n];
            return Array.isArray(t) ? t[0] : t;
          }
          return null;
        }
        getAll(n) {
          if (this.has(n)) {
            const t = this.params[n];
            return Array.isArray(t) ? t : [t];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function wa(e) {
        return new Y2(e);
      }
      function K2(e, n, t) {
        const r = t.path.split('/');
        if (r.length > e.length || ('full' === t.pathMatch && (n.hasChildren() || r.length < e.length))) return null;
        const o = {};
        for (let i = 0; i < r.length; i++) {
          const s = r[i],
            a = e[i];
          if (s.startsWith(':')) o[s.substring(1)] = a;
          else if (s !== a.path) return null;
        }
        return { consumed: e.slice(0, r.length), posParams: o };
      }
      function ni(e, n) {
        const t = e ? Em(e) : void 0,
          r = n ? Em(n) : void 0;
        if (!t || !r || t.length != r.length) return !1;
        let o;
        for (let i = 0; i < t.length; i++) if (((o = t[i]), !b0(e[o], n[o]))) return !1;
        return !0;
      }
      function Em(e) {
        return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)];
      }
      function b0(e, n) {
        if (Array.isArray(e) && Array.isArray(n)) {
          if (e.length !== n.length) return !1;
          const t = [...e].sort(),
            r = [...n].sort();
          return t.every((o, i) => r[i] === o);
        }
        return e === n;
      }
      function E0(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function Hi(e) {
        return (function qj(e) {
          return !!e && (e instanceof Je || (yt(e.lift) && yt(e.subscribe)));
        })(e)
          ? e
          : tc(e)
            ? fr(Promise.resolve(e))
            : mt(e);
      }
      const J2 = {
          exact: function T0(e, n, t) {
            if (!gs(e.segments, n.segments) || !Wd(e.segments, n.segments, t) || e.numberOfChildren !== n.numberOfChildren) return !1;
            for (const r in n.children) if (!e.children[r] || !T0(e.children[r], n.children[r], t)) return !1;
            return !0;
          },
          subset: S0,
        },
        w0 = {
          exact: function eU(e, n) {
            return ni(e, n);
          },
          subset: function tU(e, n) {
            return Object.keys(n).length <= Object.keys(e).length && Object.keys(n).every(t => b0(e[t], n[t]));
          },
          ignored: () => !0,
        };
      function I0(e, n, t) {
        return (
          J2[t.paths](e.root, n.root, t.matrixParams) &&
          w0[t.queryParams](e.queryParams, n.queryParams) &&
          !('exact' === t.fragment && e.fragment !== n.fragment)
        );
      }
      function S0(e, n, t) {
        return M0(e, n, n.segments, t);
      }
      function M0(e, n, t, r) {
        if (e.segments.length > t.length) {
          const o = e.segments.slice(0, t.length);
          return !(!gs(o, t) || n.hasChildren() || !Wd(o, t, r));
        }
        if (e.segments.length === t.length) {
          if (!gs(e.segments, t) || !Wd(e.segments, t, r)) return !1;
          for (const o in n.children) if (!e.children[o] || !S0(e.children[o], n.children[o], r)) return !1;
          return !0;
        }
        {
          const o = t.slice(0, e.segments.length),
            i = t.slice(e.segments.length);
          return !!(gs(e.segments, o) && Wd(e.segments, o, r) && e.children[Wt]) && M0(e.children[Wt], n, i, r);
        }
      }
      function Wd(e, n, t) {
        return n.every((r, o) => w0[t](e[o].parameters, r.parameters));
      }
      class Ia {
        constructor(n = new Rn([], {}), t = {}, r = null) {
          (this.root = n), (this.queryParams = t), (this.fragment = r);
        }
        get queryParamMap() {
          return (this._queryParamMap ??= wa(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return oU.serialize(this);
        }
      }
      class Rn {
        constructor(n, t) {
          (this.segments = n), (this.children = t), (this.parent = null), Object.values(t).forEach(r => (r.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return qd(this);
        }
      }
      class pc {
        constructor(n, t) {
          (this.path = n), (this.parameters = t);
        }
        get parameterMap() {
          return (this._parameterMap ??= wa(this.parameters)), this._parameterMap;
        }
        toString() {
          return R0(this);
        }
      }
      function gs(e, n) {
        return e.length === n.length && e.every((t, r) => t.path === n[r].path);
      }
      let ms = (() => {
        class e {
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: () => new wm(), providedIn: 'root' });
          }
        }
        return e;
      })();
      class wm {
        parse(n) {
          const t = new gU(n);
          return new Ia(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment());
        }
        serialize(n) {
          const t = `/${gc(n.root, !0)}`,
            r = (function aU(e) {
              const n = Object.entries(e)
                .map(([t, r]) => (Array.isArray(r) ? r.map(o => `${Xd(t)}=${Xd(o)}`).join('&') : `${Xd(t)}=${Xd(r)}`))
                .filter(t => t);
              return n.length ? `?${n.join('&')}` : '';
            })(n.queryParams);
          return `${t}${r}${
            'string' == typeof n.fragment
              ? `#${(function iU(e) {
                  return encodeURI(e);
                })(n.fragment)}`
              : ''
          }`;
        }
      }
      const oU = new wm();
      function qd(e) {
        return e.segments.map(n => R0(n)).join('/');
      }
      function gc(e, n) {
        if (!e.hasChildren()) return qd(e);
        if (n) {
          const t = e.children[Wt] ? gc(e.children[Wt], !1) : '',
            r = [];
          return (
            Object.entries(e.children).forEach(([o, i]) => {
              o !== Wt && r.push(`${o}:${gc(i, !1)}`);
            }),
            r.length > 0 ? `${t}(${r.join('//')})` : t
          );
        }
        {
          const t = (function rU(e, n) {
            let t = [];
            return (
              Object.entries(e.children).forEach(([r, o]) => {
                r === Wt && (t = t.concat(n(o, r)));
              }),
              Object.entries(e.children).forEach(([r, o]) => {
                r !== Wt && (t = t.concat(n(o, r)));
              }),
              t
            );
          })(e, (r, o) => (o === Wt ? [gc(e.children[Wt], !1)] : [`${o}:${gc(r, !1)}`]));
          return 1 === Object.keys(e.children).length && null != e.children[Wt] ? `${qd(e)}/${t[0]}` : `${qd(e)}/(${t.join('//')})`;
        }
      }
      function A0(e) {
        return encodeURIComponent(e).replace(/%40/g, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',');
      }
      function Xd(e) {
        return A0(e).replace(/%3B/gi, ';');
      }
      function Im(e) {
        return A0(e).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
      }
      function Zd(e) {
        return decodeURIComponent(e);
      }
      function x0(e) {
        return Zd(e.replace(/\+/g, '%20'));
      }
      function R0(e) {
        return `${Im(e.path)}${(function sU(e) {
          return Object.entries(e)
            .map(([n, t]) => `;${Im(n)}=${Im(t)}`)
            .join('');
        })(e.parameters)}`;
      }
      const lU = /^[^\/()?;#]+/;
      function Tm(e) {
        const n = e.match(lU);
        return n ? n[0] : '';
      }
      const cU = /^[^\/()?;=#]+/,
        dU = /^[^=?&#]+/,
        hU = /^[^&#]+/;
      class gU {
        constructor(n) {
          (this.url = n), (this.remaining = n);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new Rn([], {})
              : new Rn([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const n = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(n);
            } while (this.consumeOptional('&'));
          return n;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const n = [];
          for (
            this.peekStartsWith('(') || n.push(this.parseSegment());
            this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

          )
            this.capture('/'), n.push(this.parseSegment());
          let t = {};
          this.peekStartsWith('/(') && (this.capture('/'), (t = this.parseParens(!0)));
          let r = {};
          return (
            this.peekStartsWith('(') && (r = this.parseParens(!1)), (n.length > 0 || Object.keys(t).length > 0) && (r[Wt] = new Rn(n, t)), r
          );
        }
        parseSegment() {
          const n = Tm(this.remaining);
          if ('' === n && this.peekStartsWith(';')) throw new O(4009, !1);
          return this.capture(n), new pc(Zd(n), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const n = {};
          for (; this.consumeOptional(';'); ) this.parseParam(n);
          return n;
        }
        parseParam(n) {
          const t = (function uU(e) {
            const n = e.match(cU);
            return n ? n[0] : '';
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let r = '';
          if (this.consumeOptional('=')) {
            const o = Tm(this.remaining);
            o && ((r = o), this.capture(r));
          }
          n[Zd(t)] = Zd(r);
        }
        parseQueryParam(n) {
          const t = (function fU(e) {
            const n = e.match(dU);
            return n ? n[0] : '';
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let r = '';
          if (this.consumeOptional('=')) {
            const s = (function pU(e) {
              const n = e.match(hU);
              return n ? n[0] : '';
            })(this.remaining);
            s && ((r = s), this.capture(r));
          }
          const o = x0(t),
            i = x0(r);
          if (n.hasOwnProperty(o)) {
            let s = n[o];
            Array.isArray(s) || ((s = [s]), (n[o] = s)), s.push(i);
          } else n[o] = i;
        }
        parseParens(n) {
          const t = {};
          for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
            const r = Tm(this.remaining),
              o = this.remaining[r.length];
            if ('/' !== o && ')' !== o && ';' !== o) throw new O(4010, !1);
            let i;
            r.indexOf(':') > -1 ? ((i = r.slice(0, r.indexOf(':'))), this.capture(i), this.capture(':')) : n && (i = Wt);
            const s = this.parseChildren();
            (t[i] = 1 === Object.keys(s).length ? s[Wt] : new Rn([], s)), this.consumeOptional('//');
          }
          return t;
        }
        peekStartsWith(n) {
          return this.remaining.startsWith(n);
        }
        consumeOptional(n) {
          return !!this.peekStartsWith(n) && ((this.remaining = this.remaining.substring(n.length)), !0);
        }
        capture(n) {
          if (!this.consumeOptional(n)) throw new O(4011, !1);
        }
      }
      function O0(e) {
        return e.segments.length > 0 ? new Rn([], { [Wt]: e }) : e;
      }
      function N0(e) {
        const n = {};
        for (const [r, o] of Object.entries(e.children)) {
          const i = N0(o);
          if (r === Wt && 0 === i.segments.length && i.hasChildren()) for (const [s, a] of Object.entries(i.children)) n[s] = a;
          else (i.segments.length > 0 || i.hasChildren()) && (n[r] = i);
        }
        return (function mU(e) {
          if (1 === e.numberOfChildren && e.children[Wt]) {
            const n = e.children[Wt];
            return new Rn(e.segments.concat(n.segments), n.children);
          }
          return e;
        })(new Rn(e.segments, n));
      }
      function Ta(e) {
        return e instanceof Ia;
      }
      function k0(e) {
        let n;
        const o = O0(
          (function t(i) {
            const s = {};
            for (const l of i.children) {
              const c = t(l);
              s[l.outlet] = c;
            }
            const a = new Rn(i.url, s);
            return i === e && (n = a), a;
          })(e.root),
        );
        return n ?? o;
      }
      function P0(e, n, t, r) {
        let o = e;
        for (; o.parent; ) o = o.parent;
        if (0 === n.length) return Sm(o, o, o, t, r);
        const i = (function yU(e) {
          if ('string' == typeof e[0] && 1 === e.length && '/' === e[0]) return new L0(!0, 0, e);
          let n = 0,
            t = !1;
          const r = e.reduce((o, i, s) => {
            if ('object' == typeof i && null != i) {
              if (i.outlets) {
                const a = {};
                return (
                  Object.entries(i.outlets).forEach(([l, c]) => {
                    a[l] = 'string' == typeof c ? c.split('/') : c;
                  }),
                  [...o, { outlets: a }]
                );
              }
              if (i.segmentPath) return [...o, i.segmentPath];
            }
            return 'string' != typeof i
              ? [...o, i]
              : 0 === s
                ? (i.split('/').forEach((a, l) => {
                    (0 == l && '.' === a) || (0 == l && '' === a ? (t = !0) : '..' === a ? n++ : '' != a && o.push(a));
                  }),
                  o)
                : [...o, i];
          }, []);
          return new L0(t, n, r);
        })(n);
        if (i.toRoot()) return Sm(o, o, new Rn([], {}), t, r);
        const s = (function DU(e, n, t) {
            if (e.isAbsolute) return new Kd(n, !0, 0);
            if (!t) return new Kd(n, !1, NaN);
            if (null === t.parent) return new Kd(t, !0, 0);
            const r = Yd(e.commands[0]) ? 0 : 1;
            return (function _U(e, n, t) {
              let r = e,
                o = n,
                i = t;
              for (; i > o; ) {
                if (((i -= o), (r = r.parent), !r)) throw new O(4005, !1);
                o = r.segments.length;
              }
              return new Kd(r, !1, o - i);
            })(t, t.segments.length - 1 + r, e.numberOfDoubleDots);
          })(i, o, e),
          a = s.processChildren ? vc(s.segmentGroup, s.index, i.commands) : $0(s.segmentGroup, s.index, i.commands);
        return Sm(o, s.segmentGroup, a, t, r);
      }
      function Yd(e) {
        return 'object' == typeof e && null != e && !e.outlets && !e.segmentPath;
      }
      function mc(e) {
        return 'object' == typeof e && null != e && e.outlets;
      }
      function Sm(e, n, t, r, o) {
        let s,
          i = {};
        r &&
          Object.entries(r).forEach(([l, c]) => {
            i[l] = Array.isArray(c) ? c.map(u => `${u}`) : `${c}`;
          }),
          (s = e === n ? t : F0(e, n, t));
        const a = O0(N0(s));
        return new Ia(a, i, o);
      }
      function F0(e, n, t) {
        const r = {};
        return (
          Object.entries(e.children).forEach(([o, i]) => {
            r[o] = i === n ? t : F0(i, n, t);
          }),
          new Rn(e.segments, r)
        );
      }
      class L0 {
        constructor(n, t, r) {
          if (((this.isAbsolute = n), (this.numberOfDoubleDots = t), (this.commands = r), n && r.length > 0 && Yd(r[0])))
            throw new O(4003, !1);
          const o = r.find(mc);
          if (o && o !== E0(r)) throw new O(4004, !1);
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class Kd {
        constructor(n, t, r) {
          (this.segmentGroup = n), (this.processChildren = t), (this.index = r);
        }
      }
      function $0(e, n, t) {
        if (((e ??= new Rn([], {})), 0 === e.segments.length && e.hasChildren())) return vc(e, n, t);
        const r = (function bU(e, n, t) {
            let r = 0,
              o = n;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; o < e.segments.length; ) {
              if (r >= t.length) return i;
              const s = e.segments[o],
                a = t[r];
              if (mc(a)) break;
              const l = `${a}`,
                c = r < t.length - 1 ? t[r + 1] : null;
              if (o > 0 && void 0 === l) break;
              if (l && c && 'object' == typeof c && void 0 === c.outlets) {
                if (!B0(l, c, s)) return i;
                r += 2;
              } else {
                if (!B0(l, {}, s)) return i;
                r++;
              }
              o++;
            }
            return { match: !0, pathIndex: o, commandIndex: r };
          })(e, n, t),
          o = t.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          const i = new Rn(e.segments.slice(0, r.pathIndex), {});
          return (i.children[Wt] = new Rn(e.segments.slice(r.pathIndex), e.children)), vc(i, 0, o);
        }
        return r.match && 0 === o.length
          ? new Rn(e.segments, {})
          : r.match && !e.hasChildren()
            ? Mm(e, n, t)
            : r.match
              ? vc(e, 0, o)
              : Mm(e, n, t);
      }
      function vc(e, n, t) {
        if (0 === t.length) return new Rn(e.segments, {});
        {
          const r = (function CU(e) {
              return mc(e[0]) ? e[0].outlets : { [Wt]: e };
            })(t),
            o = {};
          if (Object.keys(r).some(i => i !== Wt) && e.children[Wt] && 1 === e.numberOfChildren && 0 === e.children[Wt].segments.length) {
            const i = vc(e.children[Wt], n, t);
            return new Rn(e.segments, i.children);
          }
          return (
            Object.entries(r).forEach(([i, s]) => {
              'string' == typeof s && (s = [s]), null !== s && (o[i] = $0(e.children[i], n, s));
            }),
            Object.entries(e.children).forEach(([i, s]) => {
              void 0 === r[i] && (o[i] = s);
            }),
            new Rn(e.segments, o)
          );
        }
      }
      function Mm(e, n, t) {
        const r = e.segments.slice(0, n);
        let o = 0;
        for (; o < t.length; ) {
          const i = t[o];
          if (mc(i)) {
            const l = EU(i.outlets);
            return new Rn(r, l);
          }
          if (0 === o && Yd(t[0])) {
            r.push(new pc(e.segments[n].path, V0(t[0]))), o++;
            continue;
          }
          const s = mc(i) ? i.outlets[Wt] : `${i}`,
            a = o < t.length - 1 ? t[o + 1] : null;
          s && a && Yd(a) ? (r.push(new pc(s, V0(a))), (o += 2)) : (r.push(new pc(s, {})), o++);
        }
        return new Rn(r, {});
      }
      function EU(e) {
        const n = {};
        return (
          Object.entries(e).forEach(([t, r]) => {
            'string' == typeof r && (r = [r]), null !== r && (n[t] = Mm(new Rn([], {}), 0, r));
          }),
          n
        );
      }
      function V0(e) {
        const n = {};
        return Object.entries(e).forEach(([t, r]) => (n[t] = `${r}`)), n;
      }
      function B0(e, n, t) {
        return e == t.path && ni(n, t.parameters);
      }
      const yc = 'imperative';
      var dn = (function (e) {
        return (
          (e[(e.NavigationStart = 0)] = 'NavigationStart'),
          (e[(e.NavigationEnd = 1)] = 'NavigationEnd'),
          (e[(e.NavigationCancel = 2)] = 'NavigationCancel'),
          (e[(e.NavigationError = 3)] = 'NavigationError'),
          (e[(e.RoutesRecognized = 4)] = 'RoutesRecognized'),
          (e[(e.ResolveStart = 5)] = 'ResolveStart'),
          (e[(e.ResolveEnd = 6)] = 'ResolveEnd'),
          (e[(e.GuardsCheckStart = 7)] = 'GuardsCheckStart'),
          (e[(e.GuardsCheckEnd = 8)] = 'GuardsCheckEnd'),
          (e[(e.RouteConfigLoadStart = 9)] = 'RouteConfigLoadStart'),
          (e[(e.RouteConfigLoadEnd = 10)] = 'RouteConfigLoadEnd'),
          (e[(e.ChildActivationStart = 11)] = 'ChildActivationStart'),
          (e[(e.ChildActivationEnd = 12)] = 'ChildActivationEnd'),
          (e[(e.ActivationStart = 13)] = 'ActivationStart'),
          (e[(e.ActivationEnd = 14)] = 'ActivationEnd'),
          (e[(e.Scroll = 15)] = 'Scroll'),
          (e[(e.NavigationSkipped = 16)] = 'NavigationSkipped'),
          e
        );
      })(dn || {});
      class ri {
        constructor(n, t) {
          (this.id = n), (this.url = t);
        }
      }
      class Dc extends ri {
        constructor(n, t, r = 'imperative', o = null) {
          super(n, t), (this.type = dn.NavigationStart), (this.navigationTrigger = r), (this.restoredState = o);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class bi extends ri {
        constructor(n, t, r) {
          super(n, t), (this.urlAfterRedirects = r), (this.type = dn.NavigationEnd);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      var fo = (function (e) {
          return (
            (e[(e.Redirect = 0)] = 'Redirect'),
            (e[(e.SupersededByNewNavigation = 1)] = 'SupersededByNewNavigation'),
            (e[(e.NoDataFromResolver = 2)] = 'NoDataFromResolver'),
            (e[(e.GuardRejected = 3)] = 'GuardRejected'),
            e
          );
        })(fo || {}),
        Qd = (function (e) {
          return (
            (e[(e.IgnoredSameUrlNavigation = 0)] = 'IgnoredSameUrlNavigation'),
            (e[(e.IgnoredByUrlHandlingStrategy = 1)] = 'IgnoredByUrlHandlingStrategy'),
            e
          );
        })(Qd || {});
      class Sa extends ri {
        constructor(n, t, r, o) {
          super(n, t), (this.reason = r), (this.code = o), (this.type = dn.NavigationCancel);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Ma extends ri {
        constructor(n, t, r, o) {
          super(n, t), (this.reason = r), (this.code = o), (this.type = dn.NavigationSkipped);
        }
      }
      class Jd extends ri {
        constructor(n, t, r, o) {
          super(n, t), (this.error = r), (this.target = o), (this.type = dn.NavigationError);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class j0 extends ri {
        constructor(n, t, r, o) {
          super(n, t), (this.urlAfterRedirects = r), (this.state = o), (this.type = dn.RoutesRecognized);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class wU extends ri {
        constructor(n, t, r, o) {
          super(n, t), (this.urlAfterRedirects = r), (this.state = o), (this.type = dn.GuardsCheckStart);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class IU extends ri {
        constructor(n, t, r, o, i) {
          super(n, t), (this.urlAfterRedirects = r), (this.state = o), (this.shouldActivate = i), (this.type = dn.GuardsCheckEnd);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class TU extends ri {
        constructor(n, t, r, o) {
          super(n, t), (this.urlAfterRedirects = r), (this.state = o), (this.type = dn.ResolveStart);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class SU extends ri {
        constructor(n, t, r, o) {
          super(n, t), (this.urlAfterRedirects = r), (this.state = o), (this.type = dn.ResolveEnd);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class MU {
        constructor(n) {
          (this.route = n), (this.type = dn.RouteConfigLoadStart);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class AU {
        constructor(n) {
          (this.route = n), (this.type = dn.RouteConfigLoadEnd);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class xU {
        constructor(n) {
          (this.snapshot = n), (this.type = dn.ChildActivationStart);
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class RU {
        constructor(n) {
          (this.snapshot = n), (this.type = dn.ChildActivationEnd);
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class OU {
        constructor(n) {
          (this.snapshot = n), (this.type = dn.ActivationStart);
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class NU {
        constructor(n) {
          (this.snapshot = n), (this.type = dn.ActivationEnd);
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class U0 {
        constructor(n, t, r) {
          (this.routerEvent = n), (this.position = t), (this.anchor = r), (this.type = dn.Scroll);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${this.position ? `${this.position[0]}, ${this.position[1]}` : null}')`;
        }
      }
      class Am {}
      class xm {
        constructor(n) {
          this.url = n;
        }
      }
      class kU {
        constructor() {
          (this.outlet = null), (this.route = null), (this.injector = null), (this.children = new vs()), (this.attachRef = null);
        }
      }
      let vs = (() => {
        class e {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(t, r) {
            const o = this.getOrCreateContext(t);
            (o.outlet = r), this.contexts.set(t, o);
          }
          onChildOutletDestroyed(t) {
            const r = this.getContext(t);
            r && ((r.outlet = null), (r.attachRef = null));
          }
          onOutletDeactivated() {
            const t = this.contexts;
            return (this.contexts = new Map()), t;
          }
          onOutletReAttached(t) {
            this.contexts = t;
          }
          getOrCreateContext(t) {
            let r = this.getContext(t);
            return r || ((r = new kU()), this.contexts.set(t, r)), r;
          }
          getContext(t) {
            return this.contexts.get(t) || null;
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
          }
        }
        return e;
      })();
      class H0 {
        constructor(n) {
          this._root = n;
        }
        get root() {
          return this._root.value;
        }
        parent(n) {
          const t = this.pathFromRoot(n);
          return t.length > 1 ? t[t.length - 2] : null;
        }
        children(n) {
          const t = Rm(n, this._root);
          return t ? t.children.map(r => r.value) : [];
        }
        firstChild(n) {
          const t = Rm(n, this._root);
          return t && t.children.length > 0 ? t.children[0].value : null;
        }
        siblings(n) {
          const t = Om(n, this._root);
          return t.length < 2 ? [] : t[t.length - 2].children.map(o => o.value).filter(o => o !== n);
        }
        pathFromRoot(n) {
          return Om(n, this._root).map(t => t.value);
        }
      }
      function Rm(e, n) {
        if (e === n.value) return n;
        for (const t of n.children) {
          const r = Rm(e, t);
          if (r) return r;
        }
        return null;
      }
      function Om(e, n) {
        if (e === n.value) return [n];
        for (const t of n.children) {
          const r = Om(e, t);
          if (r.length) return r.unshift(n), r;
        }
        return [];
      }
      class Fo {
        constructor(n, t) {
          (this.value = n), (this.children = t);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Aa(e) {
        const n = {};
        return e && e.children.forEach(t => (n[t.value.outlet] = t)), n;
      }
      class z0 extends H0 {
        constructor(n, t) {
          super(n), (this.snapshot = t), Pm(this, n);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function G0(e) {
        const n = (function PU(e) {
            const i = new km([], {}, {}, '', {}, Wt, e, null, {});
            return new W0('', new Fo(i, []));
          })(e),
          t = new wt([new pc('', {})]),
          r = new wt({}),
          o = new wt({}),
          i = new wt({}),
          s = new wt(''),
          a = new oi(t, r, i, s, o, Wt, e, n.root);
        return (a.snapshot = n.root), new z0(new Fo(a, []), n);
      }
      class oi {
        constructor(n, t, r, o, i, s, a, l) {
          (this.urlSubject = n),
            (this.paramsSubject = t),
            (this.queryParamsSubject = r),
            (this.fragmentSubject = o),
            (this.dataSubject = i),
            (this.outlet = s),
            (this.component = a),
            (this._futureSnapshot = l),
            (this.title = this.dataSubject?.pipe(nt(c => c[hc])) ?? mt(void 0)),
            (this.url = n),
            (this.params = t),
            (this.queryParams = r),
            (this.fragment = o),
            (this.data = i);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (this._paramMap ??= this.params.pipe(nt(n => wa(n)))), this._paramMap;
        }
        get queryParamMap() {
          return (this._queryParamMap ??= this.queryParams.pipe(nt(n => wa(n)))), this._queryParamMap;
        }
        toString() {
          return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
        }
      }
      function Nm(e, n, t = 'emptyOnly') {
        let r;
        const { routeConfig: o } = e;
        return (
          (r =
            null === n || ('always' !== t && '' !== o?.path && (n.component || n.routeConfig?.loadComponent))
              ? { params: { ...e.params }, data: { ...e.data }, resolve: { ...e.data, ...(e._resolvedData ?? {}) } }
              : {
                  params: { ...n.params, ...e.params },
                  data: { ...n.data, ...e.data },
                  resolve: { ...e.data, ...n.data, ...o?.data, ...e._resolvedData },
                }),
          o && X0(o) && (r.resolve[hc] = o.title),
          r
        );
      }
      class km {
        get title() {
          return this.data?.[hc];
        }
        constructor(n, t, r, o, i, s, a, l, c) {
          (this.url = n),
            (this.params = t),
            (this.queryParams = r),
            (this.fragment = o),
            (this.data = i),
            (this.outlet = s),
            (this.component = a),
            (this.routeConfig = l),
            (this._resolve = c);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (this._paramMap ??= wa(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return (this._queryParamMap ??= wa(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return `Route(url:'${this.url.map(r => r.toString()).join('/')}', path:'${this.routeConfig ? this.routeConfig.path : ''}')`;
        }
      }
      class W0 extends H0 {
        constructor(n, t) {
          super(t), (this.url = n), Pm(this, t);
        }
        toString() {
          return q0(this._root);
        }
      }
      function Pm(e, n) {
        (n.value._routerState = e), n.children.forEach(t => Pm(e, t));
      }
      function q0(e) {
        const n = e.children.length > 0 ? ` { ${e.children.map(q0).join(', ')} } ` : '';
        return `${e.value}${n}`;
      }
      function Fm(e) {
        if (e.snapshot) {
          const n = e.snapshot,
            t = e._futureSnapshot;
          (e.snapshot = t),
            ni(n.queryParams, t.queryParams) || e.queryParamsSubject.next(t.queryParams),
            n.fragment !== t.fragment && e.fragmentSubject.next(t.fragment),
            ni(n.params, t.params) || e.paramsSubject.next(t.params),
            (function Q2(e, n) {
              if (e.length !== n.length) return !1;
              for (let t = 0; t < e.length; ++t) if (!ni(e[t], n[t])) return !1;
              return !0;
            })(n.url, t.url) || e.urlSubject.next(t.url),
            ni(n.data, t.data) || e.dataSubject.next(t.data);
        } else (e.snapshot = e._futureSnapshot), e.dataSubject.next(e._futureSnapshot.data);
      }
      function Lm(e, n) {
        const t =
          ni(e.params, n.params) &&
          (function nU(e, n) {
            return gs(e, n) && e.every((t, r) => ni(t.parameters, n[r].parameters));
          })(e.url, n.url);
        return t && !(!e.parent != !n.parent) && (!e.parent || Lm(e.parent, n.parent));
      }
      function X0(e) {
        return 'string' == typeof e.title || null === e.title;
      }
      let Z0 = (() => {
        class e {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = Wt),
              (this.activateEvents = new xn()),
              (this.deactivateEvents = new xn()),
              (this.attachEvents = new xn()),
              (this.detachEvents = new xn()),
              (this.parentContexts = ce(vs)),
              (this.location = ce(go)),
              (this.changeDetector = ce(Ae)),
              (this.environmentInjector = ce(lr)),
              (this.inputBinder = ce(ef, { optional: !0 })),
              (this.supportsBindingToComponentInputs = !0);
          }
          get activatedComponentRef() {
            return this.activated;
          }
          ngOnChanges(t) {
            if (t.name) {
              const { firstChange: r, previousValue: o } = t.name;
              if (r) return;
              this.isTrackedInParentContexts(o) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(o)),
                this.initializeOutletWithName();
            }
          }
          ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name),
              this.inputBinder?.unsubscribeFromRouteData(this);
          }
          isTrackedInParentContexts(t) {
            return this.parentContexts.getContext(t)?.outlet === this;
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if ((this.parentContexts.onChildOutletCreated(this.name, this), this.activated)) return;
            const t = this.parentContexts.getContext(this.name);
            t?.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.injector));
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new O(4012, !1);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new O(4012, !1);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
          }
          detach() {
            if (!this.activated) throw new O(4012, !1);
            this.location.detach();
            const t = this.activated;
            return (this.activated = null), (this._activatedRoute = null), this.detachEvents.emit(t.instance), t;
          }
          attach(t, r) {
            (this.activated = t),
              (this._activatedRoute = r),
              this.location.insert(t.hostView),
              this.inputBinder?.bindActivatedRouteToOutletComponent(this),
              this.attachEvents.emit(t.instance);
          }
          deactivate() {
            if (this.activated) {
              const t = this.component;
              this.activated.destroy(), (this.activated = null), (this._activatedRoute = null), this.deactivateEvents.emit(t);
            }
          }
          activateWith(t, r) {
            if (this.isActivated) throw new O(4013, !1);
            this._activatedRoute = t;
            const o = this.location,
              s = t.snapshot.component,
              a = this.parentContexts.getOrCreateContext(this.name).children,
              l = new $m(t, a, o.injector);
            (this.activated = o.createComponent(s, { index: o.length, injector: l, environmentInjector: r ?? this.environmentInjector })),
              this.changeDetector.markForCheck(),
              this.inputBinder?.bindActivatedRouteToOutletComponent(this),
              this.activateEvents.emit(this.activated.instance);
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵdir = ct({
              type: e,
              selectors: [['router-outlet']],
              inputs: { name: 'name' },
              outputs: { activateEvents: 'activate', deactivateEvents: 'deactivate', attachEvents: 'attach', detachEvents: 'detach' },
              exportAs: ['outlet'],
              standalone: !0,
              features: [Kr],
            });
          }
        }
        return e;
      })();
      class $m {
        __ngOutletInjector(n) {
          return new $m(this.route, this.childContexts, n);
        }
        constructor(n, t, r) {
          (this.route = n), (this.childContexts = t), (this.parent = r);
        }
        get(n, t) {
          return n === oi ? this.route : n === vs ? this.childContexts : this.parent.get(n, t);
        }
      }
      const ef = new He('');
      let Y0 = (() => {
        class e {
          constructor() {
            this.outletDataSubscriptions = new Map();
          }
          bindActivatedRouteToOutletComponent(t) {
            this.unsubscribeFromRouteData(t), this.subscribeToRouteData(t);
          }
          unsubscribeFromRouteData(t) {
            this.outletDataSubscriptions.get(t)?.unsubscribe(), this.outletDataSubscriptions.delete(t);
          }
          subscribeToRouteData(t) {
            const { activatedRoute: r } = t,
              o = Ud([r.queryParams, r.params, r.data])
                .pipe(_r(([i, s, a], l) => ((a = { ...i, ...s, ...a }), 0 === l ? mt(a) : Promise.resolve(a))))
                .subscribe(i => {
                  if (!t.isActivated || !t.activatedComponentRef || t.activatedRoute !== r || null === r.component)
                    return void this.unsubscribeFromRouteData(t);
                  const s = rI(r.component);
                  if (s) for (const { templateName: a } of s.inputs) t.activatedComponentRef.setInput(a, i[a]);
                  else this.unsubscribeFromRouteData(t);
                });
            this.outletDataSubscriptions.set(t, o);
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac });
          }
        }
        return e;
      })();
      function _c(e, n, t) {
        if (t && e.shouldReuseRoute(n.value, t.value.snapshot)) {
          const r = t.value;
          r._futureSnapshot = n.value;
          const o = (function LU(e, n, t) {
            return n.children.map(r => {
              for (const o of t.children) if (e.shouldReuseRoute(r.value, o.value.snapshot)) return _c(e, r, o);
              return _c(e, r);
            });
          })(e, n, t);
          return new Fo(r, o);
        }
        {
          if (e.shouldAttach(n.value)) {
            const i = e.retrieve(n.value);
            if (null !== i) {
              const s = i.route;
              return (s.value._futureSnapshot = n.value), (s.children = n.children.map(a => _c(e, a))), s;
            }
          }
          const r = (function $U(e) {
              return new oi(
                new wt(e.url),
                new wt(e.params),
                new wt(e.queryParams),
                new wt(e.fragment),
                new wt(e.data),
                e.outlet,
                e.component,
                e,
              );
            })(n.value),
            o = n.children.map(i => _c(e, i));
          return new Fo(r, o);
        }
      }
      const K0 = 'ngNavigationCancelingError';
      function Q0(e, n) {
        const { redirectTo: t, navigationBehaviorOptions: r } = Ta(n) ? { redirectTo: n, navigationBehaviorOptions: void 0 } : n,
          o = J0(!1, fo.Redirect);
        return (o.url = t), (o.navigationBehaviorOptions = r), o;
      }
      function J0(e, n) {
        const t = new Error(`NavigationCancelingError: ${e || ''}`);
        return (t[K0] = !0), (t.cancellationCode = n), t;
      }
      function eT(e) {
        return !!e && e[K0];
      }
      let tT = (() => {
        class e {
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵcmp = Oe({
              type: e,
              selectors: [['ng-component']],
              standalone: !0,
              features: [$E],
              decls: 1,
              vars: 0,
              template: function (r, o) {
                1 & r && $r(0, 'router-outlet');
              },
              dependencies: [Z0],
              encapsulation: 2,
            });
          }
        }
        return e;
      })();
      function Vm(e) {
        const n = e.children && e.children.map(Vm),
          t = n ? { ...e, children: n } : { ...e };
        return !t.component && !t.loadComponent && (n || t.loadChildren) && t.outlet && t.outlet !== Wt && (t.component = tT), t;
      }
      function ii(e) {
        return e.outlet || Wt;
      }
      function Cc(e) {
        if (!e) return null;
        if (e.routeConfig?._injector) return e.routeConfig._injector;
        for (let n = e.parent; n; n = n.parent) {
          const t = n.routeConfig;
          if (t?._loadedInjector) return t._loadedInjector;
          if (t?._injector) return t._injector;
        }
        return null;
      }
      class WU {
        constructor(n, t, r, o, i) {
          (this.routeReuseStrategy = n),
            (this.futureState = t),
            (this.currState = r),
            (this.forwardEvent = o),
            (this.inputBindingEnabled = i);
        }
        activate(n) {
          const t = this.futureState._root,
            r = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, r, n), Fm(this.futureState.root), this.activateChildRoutes(t, r, n);
        }
        deactivateChildRoutes(n, t, r) {
          const o = Aa(t);
          n.children.forEach(i => {
            const s = i.value.outlet;
            this.deactivateRoutes(i, o[s], r), delete o[s];
          }),
            Object.values(o).forEach(i => {
              this.deactivateRouteAndItsChildren(i, r);
            });
        }
        deactivateRoutes(n, t, r) {
          const o = n.value,
            i = t ? t.value : null;
          if (o === i)
            if (o.component) {
              const s = r.getContext(o.outlet);
              s && this.deactivateChildRoutes(n, t, s.children);
            } else this.deactivateChildRoutes(n, t, r);
          else i && this.deactivateRouteAndItsChildren(t, r);
        }
        deactivateRouteAndItsChildren(n, t) {
          n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot)
            ? this.detachAndStoreRouteSubtree(n, t)
            : this.deactivateRouteAndOutlet(n, t);
        }
        detachAndStoreRouteSubtree(n, t) {
          const r = t.getContext(n.value.outlet),
            o = r && n.value.component ? r.children : t,
            i = Aa(n);
          for (const s of Object.values(i)) this.deactivateRouteAndItsChildren(s, o);
          if (r && r.outlet) {
            const s = r.outlet.detach(),
              a = r.children.onOutletDeactivated();
            this.routeReuseStrategy.store(n.value.snapshot, { componentRef: s, route: n, contexts: a });
          }
        }
        deactivateRouteAndOutlet(n, t) {
          const r = t.getContext(n.value.outlet),
            o = r && n.value.component ? r.children : t,
            i = Aa(n);
          for (const s of Object.values(i)) this.deactivateRouteAndItsChildren(s, o);
          r && (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()), (r.attachRef = null), (r.route = null));
        }
        activateChildRoutes(n, t, r) {
          const o = Aa(t);
          n.children.forEach(i => {
            this.activateRoutes(i, o[i.value.outlet], r), this.forwardEvent(new NU(i.value.snapshot));
          }),
            n.children.length && this.forwardEvent(new RU(n.value.snapshot));
        }
        activateRoutes(n, t, r) {
          const o = n.value,
            i = t ? t.value : null;
          if ((Fm(o), o === i))
            if (o.component) {
              const s = r.getOrCreateContext(o.outlet);
              this.activateChildRoutes(n, t, s.children);
            } else this.activateChildRoutes(n, t, r);
          else if (o.component) {
            const s = r.getOrCreateContext(o.outlet);
            if (this.routeReuseStrategy.shouldAttach(o.snapshot)) {
              const a = this.routeReuseStrategy.retrieve(o.snapshot);
              this.routeReuseStrategy.store(o.snapshot, null),
                s.children.onOutletReAttached(a.contexts),
                (s.attachRef = a.componentRef),
                (s.route = a.route.value),
                s.outlet && s.outlet.attach(a.componentRef, a.route.value),
                Fm(a.route.value),
                this.activateChildRoutes(n, null, s.children);
            } else {
              const a = Cc(o.snapshot);
              (s.attachRef = null),
                (s.route = o),
                (s.injector = a),
                s.outlet && s.outlet.activateWith(o, s.injector),
                this.activateChildRoutes(n, null, s.children);
            }
          } else this.activateChildRoutes(n, null, r);
        }
      }
      class nT {
        constructor(n) {
          (this.path = n), (this.route = this.path[this.path.length - 1]);
        }
      }
      class tf {
        constructor(n, t) {
          (this.component = n), (this.route = t);
        }
      }
      function qU(e, n, t) {
        const r = e._root;
        return bc(r, n ? n._root : null, t, [r.value]);
      }
      function xa(e, n) {
        const t = Symbol(),
          r = n.get(e, t);
        return r === t
          ? 'function' != typeof e ||
            (function er(e) {
              return null !== Yn(e);
            })(e)
            ? n.get(e)
            : e
          : r;
      }
      function bc(e, n, t, r, o = { canDeactivateChecks: [], canActivateChecks: [] }) {
        const i = Aa(n);
        return (
          e.children.forEach(s => {
            (function ZU(e, n, t, r, o = { canDeactivateChecks: [], canActivateChecks: [] }) {
              const i = e.value,
                s = n ? n.value : null,
                a = t ? t.getContext(e.value.outlet) : null;
              if (s && i.routeConfig === s.routeConfig) {
                const l = (function YU(e, n, t) {
                  if ('function' == typeof t) return t(e, n);
                  switch (t) {
                    case 'pathParamsChange':
                      return !gs(e.url, n.url);
                    case 'pathParamsOrQueryParamsChange':
                      return !gs(e.url, n.url) || !ni(e.queryParams, n.queryParams);
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !Lm(e, n) || !ni(e.queryParams, n.queryParams);
                    default:
                      return !Lm(e, n);
                  }
                })(s, i, i.routeConfig.runGuardsAndResolvers);
                l ? o.canActivateChecks.push(new nT(r)) : ((i.data = s.data), (i._resolvedData = s._resolvedData)),
                  bc(e, n, i.component ? (a ? a.children : null) : t, r, o),
                  l && a && a.outlet && a.outlet.isActivated && o.canDeactivateChecks.push(new tf(a.outlet.component, s));
              } else s && Ec(n, a, o), o.canActivateChecks.push(new nT(r)), bc(e, null, i.component ? (a ? a.children : null) : t, r, o);
            })(s, i[s.value.outlet], t, r.concat([s.value]), o),
              delete i[s.value.outlet];
          }),
          Object.entries(i).forEach(([s, a]) => Ec(a, t.getContext(s), o)),
          o
        );
      }
      function Ec(e, n, t) {
        const r = Aa(e),
          o = e.value;
        Object.entries(r).forEach(([i, s]) => {
          Ec(s, o.component ? (n ? n.children.getContext(i) : null) : n, t);
        }),
          t.canDeactivateChecks.push(new tf(o.component && n && n.outlet && n.outlet.isActivated ? n.outlet.component : null, o));
      }
      function wc(e) {
        return 'function' == typeof e;
      }
      function rT(e) {
        return e instanceof Hd || 'EmptyError' === e?.name;
      }
      const nf = Symbol('INITIAL_VALUE');
      function Ra() {
        return _r(e =>
          Ud(
            e.map(n =>
              n.pipe(
                ro(1),
                (function z2(...e) {
                  const n = uc(e);
                  return Le((t, r) => {
                    (n ? dc(e, t, n) : dc(e, t)).subscribe(r);
                  });
                })(nf),
              ),
            ),
          ).pipe(
            nt(n => {
              for (const t of n)
                if (!0 !== t) {
                  if (t === nf) return nf;
                  if (!1 === t || t instanceof Ia) return t;
                }
              return !0;
            }),
            kr(n => n !== nf),
            ro(1),
          ),
        );
      }
      function oT(e) {
        return (function at(...e) {
          return pt(e);
        })(
          Hn(n => {
            if (Ta(n)) throw Q0(0, n);
          }),
          nt(n => !0 === n),
        );
      }
      class Bm {
        constructor(n) {
          this.segmentGroup = n || null;
        }
      }
      class jm extends Error {
        constructor(n) {
          super(), (this.urlTree = n);
        }
      }
      function Oa(e) {
        return uo(new Bm(e));
      }
      class gH {
        constructor(n, t) {
          (this.urlSerializer = n), (this.urlTree = t);
        }
        lineralizeSegments(n, t) {
          let r = [],
            o = t.root;
          for (;;) {
            if (((r = r.concat(o.segments)), 0 === o.numberOfChildren)) return mt(r);
            if (o.numberOfChildren > 1 || !o.children[Wt]) return uo(new O(4e3, !1));
            o = o.children[Wt];
          }
        }
        applyRedirectCommands(n, t, r) {
          const o = this.applyRedirectCreateUrlTree(t, this.urlSerializer.parse(t), n, r);
          if (t.startsWith('/')) throw new jm(o);
          return o;
        }
        applyRedirectCreateUrlTree(n, t, r, o) {
          const i = this.createSegmentGroup(n, t.root, r, o);
          return new Ia(i, this.createQueryParams(t.queryParams, this.urlTree.queryParams), t.fragment);
        }
        createQueryParams(n, t) {
          const r = {};
          return (
            Object.entries(n).forEach(([o, i]) => {
              if ('string' == typeof i && i.startsWith(':')) {
                const a = i.substring(1);
                r[o] = t[a];
              } else r[o] = i;
            }),
            r
          );
        }
        createSegmentGroup(n, t, r, o) {
          const i = this.createSegments(n, t.segments, r, o);
          let s = {};
          return (
            Object.entries(t.children).forEach(([a, l]) => {
              s[a] = this.createSegmentGroup(n, l, r, o);
            }),
            new Rn(i, s)
          );
        }
        createSegments(n, t, r, o) {
          return t.map(i => (i.path.startsWith(':') ? this.findPosParam(n, i, o) : this.findOrReturn(i, r)));
        }
        findPosParam(n, t, r) {
          const o = r[t.path.substring(1)];
          if (!o) throw new O(4001, !1);
          return o;
        }
        findOrReturn(n, t) {
          let r = 0;
          for (const o of t) {
            if (o.path === n.path) return t.splice(r), o;
            r++;
          }
          return n;
        }
      }
      const Um = { matched: !1, consumedSegments: [], remainingSegments: [], parameters: {}, positionalParamSegments: {} };
      function mH(e, n, t, r, o) {
        const i = Hm(e, n, t);
        return i.matched
          ? ((r = (function BU(e, n) {
              return e.providers && !e._injector && (e._injector = Zu(e.providers, n, `Route: ${e.path}`)), e._injector ?? n;
            })(n, r)),
            (function fH(e, n, t, r) {
              const o = n.canMatch;
              return o && 0 !== o.length
                ? mt(
                    o.map(s => {
                      const a = xa(s, e);
                      return Hi(
                        (function nH(e) {
                          return e && wc(e.canMatch);
                        })(a)
                          ? a.canMatch(n, t)
                          : Bo(e, () => a(n, t)),
                      );
                    }),
                  ).pipe(Ra(), oT())
                : mt(!0);
            })(r, n, t).pipe(nt(s => (!0 === s ? i : { ...Um }))))
          : mt(i);
      }
      function Hm(e, n, t) {
        if ('**' === n.path)
          return (function vH(e) {
            return {
              matched: !0,
              parameters: e.length > 0 ? E0(e).parameters : {},
              consumedSegments: e,
              remainingSegments: [],
              positionalParamSegments: {},
            };
          })(t);
        if ('' === n.path)
          return 'full' === n.pathMatch && (e.hasChildren() || t.length > 0)
            ? { ...Um }
            : { matched: !0, consumedSegments: [], remainingSegments: t, parameters: {}, positionalParamSegments: {} };
        const o = (n.matcher || K2)(t, e, n);
        if (!o) return { ...Um };
        const i = {};
        Object.entries(o.posParams ?? {}).forEach(([a, l]) => {
          i[a] = l.path;
        });
        const s = o.consumed.length > 0 ? { ...i, ...o.consumed[o.consumed.length - 1].parameters } : i;
        return {
          matched: !0,
          consumedSegments: o.consumed,
          remainingSegments: t.slice(o.consumed.length),
          parameters: s,
          positionalParamSegments: o.posParams ?? {},
        };
      }
      function iT(e, n, t, r) {
        return t.length > 0 &&
          (function _H(e, n, t) {
            return t.some(r => rf(e, n, r) && ii(r) !== Wt);
          })(e, t, r)
          ? { segmentGroup: new Rn(n, DH(r, new Rn(t, e.children))), slicedSegments: [] }
          : 0 === t.length &&
              (function CH(e, n, t) {
                return t.some(r => rf(e, n, r));
              })(e, t, r)
            ? { segmentGroup: new Rn(e.segments, yH(e, t, r, e.children)), slicedSegments: t }
            : { segmentGroup: new Rn(e.segments, e.children), slicedSegments: t };
      }
      function yH(e, n, t, r) {
        const o = {};
        for (const i of t)
          if (rf(e, n, i) && !r[ii(i)]) {
            const s = new Rn([], {});
            o[ii(i)] = s;
          }
        return { ...r, ...o };
      }
      function DH(e, n) {
        const t = {};
        t[Wt] = n;
        for (const r of e)
          if ('' === r.path && ii(r) !== Wt) {
            const o = new Rn([], {});
            t[ii(r)] = o;
          }
        return t;
      }
      function rf(e, n, t) {
        return (!(e.hasChildren() || n.length > 0) || 'full' !== t.pathMatch) && '' === t.path;
      }
      class wH {}
      class SH {
        constructor(n, t, r, o, i, s, a) {
          (this.injector = n),
            (this.configLoader = t),
            (this.rootComponentType = r),
            (this.config = o),
            (this.urlTree = i),
            (this.paramsInheritanceStrategy = s),
            (this.urlSerializer = a),
            (this.applyRedirects = new gH(this.urlSerializer, this.urlTree)),
            (this.absoluteRedirectCount = 0),
            (this.allowRedirects = !0);
        }
        noMatchError(n) {
          return new O(4002, `'${n.segmentGroup}'`);
        }
        recognize() {
          const n = iT(this.urlTree.root, [], [], this.config).segmentGroup;
          return this.match(n).pipe(
            nt(t => {
              const r = new km(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  Wt,
                  this.rootComponentType,
                  null,
                  {},
                ),
                o = new Fo(r, t),
                i = new W0('', o),
                s = (function vU(e, n, t = null, r = null) {
                  return P0(k0(e), n, t, r);
                })(r, [], this.urlTree.queryParams, this.urlTree.fragment);
              return (
                (s.queryParams = this.urlTree.queryParams),
                (i.url = this.urlSerializer.serialize(s)),
                this.inheritParamsAndData(i._root, null),
                { state: i, tree: s }
              );
            }),
          );
        }
        match(n) {
          return this.processSegmentGroup(this.injector, this.config, n, Wt).pipe(
            ti(r => {
              if (r instanceof jm) return (this.urlTree = r.urlTree), this.match(r.urlTree.root);
              throw r instanceof Bm ? this.noMatchError(r) : r;
            }),
          );
        }
        inheritParamsAndData(n, t) {
          const r = n.value,
            o = Nm(r, t, this.paramsInheritanceStrategy);
          (r.params = Object.freeze(o.params)), (r.data = Object.freeze(o.data)), n.children.forEach(i => this.inheritParamsAndData(i, r));
        }
        processSegmentGroup(n, t, r, o) {
          return 0 === r.segments.length && r.hasChildren()
            ? this.processChildren(n, t, r)
            : this.processSegment(n, t, r, r.segments, o, !0).pipe(nt(i => (i instanceof Fo ? [i] : [])));
        }
        processChildren(n, t, r) {
          const o = [];
          for (const i of Object.keys(r.children)) 'primary' === i ? o.unshift(i) : o.push(i);
          return fr(o).pipe(
            Ea(i => {
              const s = r.children[i],
                a = (function zU(e, n) {
                  const t = e.filter(r => ii(r) === n);
                  return t.push(...e.filter(r => ii(r) !== n)), t;
                })(t, i);
              return this.processSegmentGroup(n, a, s, i);
            }),
            (function q2(e, n) {
              return Le(
                (function W2(e, n, t, r, o) {
                  return (i, s) => {
                    let a = t,
                      l = n,
                      c = 0;
                    i.subscribe(
                      Ce(
                        s,
                        u => {
                          const d = c++;
                          (l = a ? e(l, u, d) : ((a = !0), u)), r && s.next(l);
                        },
                        o &&
                          (() => {
                            a && s.next(l), s.complete();
                          }),
                      ),
                    );
                  };
                })(e, n, arguments.length >= 2, !0),
              );
            })((i, s) => (i.push(...s), i)),
            Gd(null),
            (function X2(e, n) {
              const t = arguments.length >= 2;
              return r => r.pipe(e ? kr((o, i) => e(o, i, r)) : rt, bm(1), t ? Gd(n) : _0(() => new Hd()));
            })(),
            Dr(i => {
              if (null === i) return Oa(r);
              const s = sT(i);
              return (
                (function MH(e) {
                  e.sort((n, t) => (n.value.outlet === Wt ? -1 : t.value.outlet === Wt ? 1 : n.value.outlet.localeCompare(t.value.outlet)));
                })(s),
                mt(s)
              );
            }),
          );
        }
        processSegment(n, t, r, o, i, s) {
          return fr(t).pipe(
            Ea(a =>
              this.processSegmentAgainstRoute(a._injector ?? n, t, a, r, o, i, s).pipe(
                ti(l => {
                  if (l instanceof Bm) return mt(null);
                  throw l;
                }),
              ),
            ),
            ps(a => !!a),
            ti(a => {
              if (rT(a))
                return (function EH(e, n, t) {
                  return 0 === n.length && !e.children[t];
                })(r, o, i)
                  ? mt(new wH())
                  : Oa(r);
              throw a;
            }),
          );
        }
        processSegmentAgainstRoute(n, t, r, o, i, s, a) {
          return (function bH(e, n, t, r) {
            return !!(ii(e) === r || (r !== Wt && rf(n, t, e))) && Hm(n, e, t).matched;
          })(r, o, i, s)
            ? void 0 === r.redirectTo
              ? this.matchSegmentAgainstRoute(n, o, r, i, s)
              : this.allowRedirects && a
                ? this.expandSegmentAgainstRouteUsingRedirect(n, o, t, r, i, s)
                : Oa(o)
            : Oa(o);
        }
        expandSegmentAgainstRouteUsingRedirect(n, t, r, o, i, s) {
          const { matched: a, consumedSegments: l, positionalParamSegments: c, remainingSegments: u } = Hm(t, o, i);
          if (!a) return Oa(t);
          o.redirectTo.startsWith('/') && (this.absoluteRedirectCount++, this.absoluteRedirectCount > 31 && (this.allowRedirects = !1));
          const d = this.applyRedirects.applyRedirectCommands(l, o.redirectTo, c);
          return this.applyRedirects.lineralizeSegments(o, d).pipe(Dr(g => this.processSegment(n, r, t, g.concat(u), s, !1)));
        }
        matchSegmentAgainstRoute(n, t, r, o, i) {
          const s = mH(t, r, o, n);
          return (
            '**' === r.path && (t.children = {}),
            s.pipe(
              _r(a =>
                a.matched
                  ? this.getChildConfig((n = r._injector ?? n), r, o).pipe(
                      _r(({ routes: l }) => {
                        const c = r._loadedInjector ?? n,
                          { consumedSegments: u, remainingSegments: d, parameters: g } = a,
                          m = new km(
                            u,
                            g,
                            Object.freeze({ ...this.urlTree.queryParams }),
                            this.urlTree.fragment,
                            (function xH(e) {
                              return e.data || {};
                            })(r),
                            ii(r),
                            r.component ?? r._loadedComponent ?? null,
                            r,
                            (function RH(e) {
                              return e.resolve || {};
                            })(r),
                          ),
                          { segmentGroup: v, slicedSegments: E } = iT(t, u, d, l);
                        if (0 === E.length && v.hasChildren())
                          return this.processChildren(c, l, v).pipe(nt(q => (null === q ? null : new Fo(m, q))));
                        if (0 === l.length && 0 === E.length) return mt(new Fo(m, []));
                        const V = ii(r) === i;
                        return this.processSegment(c, l, v, E, V ? Wt : i, !0).pipe(nt(q => new Fo(m, q instanceof Fo ? [q] : [])));
                      }),
                    )
                  : Oa(t),
              ),
            )
          );
        }
        getChildConfig(n, t, r) {
          return t.children
            ? mt({ routes: t.children, injector: n })
            : t.loadChildren
              ? void 0 !== t._loadedRoutes
                ? mt({ routes: t._loadedRoutes, injector: t._loadedInjector })
                : (function dH(e, n, t, r) {
                    const o = n.canLoad;
                    return void 0 === o || 0 === o.length
                      ? mt(!0)
                      : mt(
                          o.map(s => {
                            const a = xa(s, e);
                            return Hi(
                              (function QU(e) {
                                return e && wc(e.canLoad);
                              })(a)
                                ? a.canLoad(n, t)
                                : Bo(e, () => a(n, t)),
                            );
                          }),
                        ).pipe(Ra(), oT());
                  })(n, t, r).pipe(
                    Dr(o =>
                      o
                        ? this.configLoader.loadChildren(n, t).pipe(
                            Hn(i => {
                              (t._loadedRoutes = i.routes), (t._loadedInjector = i.injector);
                            }),
                          )
                        : (function pH(e) {
                            return uo(J0(!1, fo.GuardRejected));
                          })(),
                    ),
                  )
              : mt({ routes: [], injector: n });
        }
      }
      function AH(e) {
        const n = e.value.routeConfig;
        return n && '' === n.path;
      }
      function sT(e) {
        const n = [],
          t = new Set();
        for (const r of e) {
          if (!AH(r)) {
            n.push(r);
            continue;
          }
          const o = n.find(i => r.value.routeConfig === i.value.routeConfig);
          void 0 !== o ? (o.children.push(...r.children), t.add(o)) : n.push(r);
        }
        for (const r of t) {
          const o = sT(r.children);
          n.push(new Fo(r.value, o));
        }
        return n.filter(r => !t.has(r));
      }
      function aT(e) {
        const n = e.children.map(t => aT(t)).flat();
        return [e, ...n];
      }
      function zm(e) {
        return _r(n => {
          const t = e(n);
          return t ? fr(t).pipe(nt(() => n)) : mt(n);
        });
      }
      let lT = (() => {
          class e {
            buildTitle(t) {
              let r,
                o = t.root;
              for (; void 0 !== o; ) (r = this.getResolvedTitleForRoute(o) ?? r), (o = o.children.find(i => i.outlet === Wt));
              return r;
            }
            getResolvedTitleForRoute(t) {
              return t.data[hc];
            }
            static {
              this.ɵfac = function (r) {
                return new (r || e)();
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: () => ce(LH), providedIn: 'root' });
            }
          }
          return e;
        })(),
        LH = (() => {
          class e extends lT {
            constructor(t) {
              super(), (this.title = t);
            }
            updateTitle(t) {
              const r = this.buildTitle(t);
              void 0 !== r && this.title.setTitle(r);
            }
            static {
              this.ɵfac = function (r) {
                return new (r || e)(dt(Hj));
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
            }
          }
          return e;
        })();
      const Na = new He('', { providedIn: 'root', factory: () => ({}) }),
        ka = new He('');
      let Gm = (() => {
        class e {
          constructor() {
            (this.componentLoaders = new WeakMap()), (this.childrenLoaders = new WeakMap()), (this.compiler = ce(mw));
          }
          loadComponent(t) {
            if (this.componentLoaders.get(t)) return this.componentLoaders.get(t);
            if (t._loadedComponent) return mt(t._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(t);
            const r = Hi(t.loadComponent()).pipe(
                nt(cT),
                Hn(i => {
                  this.onLoadEndListener && this.onLoadEndListener(t), (t._loadedComponent = i);
                }),
                fc(() => {
                  this.componentLoaders.delete(t);
                }),
              ),
              o = new Cm(r, () => new _t()).pipe(_m());
            return this.componentLoaders.set(t, o), o;
          }
          loadChildren(t, r) {
            if (this.childrenLoaders.get(r)) return this.childrenLoaders.get(r);
            if (r._loadedRoutes) return mt({ routes: r._loadedRoutes, injector: r._loadedInjector });
            this.onLoadStartListener && this.onLoadStartListener(r);
            const i = (function $H(e, n, t, r) {
                return Hi(e.loadChildren()).pipe(
                  nt(cT),
                  Dr(o => (o instanceof xC || Array.isArray(o) ? mt(o) : fr(n.compileModuleAsync(o)))),
                  nt(o => {
                    r && r(e);
                    let i,
                      s,
                      a = !1;
                    return (
                      Array.isArray(o)
                        ? ((s = o), !0)
                        : ((i = o.create(t).injector), (s = i.get(ka, [], { optional: !0, self: !0 }).flat())),
                      { routes: s.map(Vm), injector: i }
                    );
                  }),
                );
              })(r, this.compiler, t, this.onLoadEndListener).pipe(
                fc(() => {
                  this.childrenLoaders.delete(r);
                }),
              ),
              s = new Cm(i, () => new _t()).pipe(_m());
            return this.childrenLoaders.set(r, s), s;
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
          }
        }
        return e;
      })();
      function cT(e) {
        return (function VH(e) {
          return e && 'object' == typeof e && 'default' in e;
        })(e)
          ? e.default
          : e;
      }
      let Wm = (() => {
          class e {
            static {
              this.ɵfac = function (r) {
                return new (r || e)();
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: () => ce(BH), providedIn: 'root' });
            }
          }
          return e;
        })(),
        BH = (() => {
          class e {
            shouldProcessUrl(t) {
              return !0;
            }
            extract(t) {
              return t;
            }
            merge(t, r) {
              return t;
            }
            static {
              this.ɵfac = function (r) {
                return new (r || e)();
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
            }
          }
          return e;
        })();
      const uT = new He(''),
        dT = new He('');
      function jH(e, n, t) {
        const r = e.get(dT),
          o = e.get(jr);
        return e.get(se).runOutsideAngular(() => {
          if (!o.startViewTransition || r.skipNextTransition) return (r.skipNextTransition = !1), new Promise(c => setTimeout(c));
          let i;
          const s = new Promise(c => {
              i = c;
            }),
            a = o.startViewTransition(
              () => (
                i(),
                (function UH(e) {
                  return new Promise(n => {
                    Mp(n, { injector: e });
                  });
                })(e)
              ),
            ),
            { onViewTransitionCreated: l } = r;
          return l && Bo(e, () => l({ transition: a, from: n, to: t })), s;
        });
      }
      let sf = (() => {
        class e {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.currentTransition = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new _t()),
              (this.transitionAbortSubject = new _t()),
              (this.configLoader = ce(Gm)),
              (this.environmentInjector = ce(lr)),
              (this.urlSerializer = ce(ms)),
              (this.rootContexts = ce(vs)),
              (this.location = ce(ji)),
              (this.inputBindingEnabled = null !== ce(ef, { optional: !0 })),
              (this.titleStrategy = ce(lT)),
              (this.options = ce(Na, { optional: !0 }) || {}),
              (this.paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || 'emptyOnly'),
              (this.urlHandlingStrategy = ce(Wm)),
              (this.createViewTransition = ce(uT, { optional: !0 })),
              (this.navigationId = 0),
              (this.afterPreactivation = () => mt(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = o => this.events.next(new AU(o))),
              (this.configLoader.onLoadStartListener = o => this.events.next(new MU(o)));
          }
          complete() {
            this.transitions?.complete();
          }
          handleNavigationRequest(t) {
            const r = ++this.navigationId;
            this.transitions?.next({ ...this.transitions.value, ...t, id: r });
          }
          setupNavigations(t, r, o) {
            return (
              (this.transitions = new wt({
                id: 0,
                currentUrlTree: r,
                currentRawUrl: r,
                extractedUrl: this.urlHandlingStrategy.extract(r),
                urlAfterRedirects: this.urlHandlingStrategy.extract(r),
                rawUrl: r,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: yc,
                restoredState: null,
                currentSnapshot: o.snapshot,
                targetSnapshot: null,
                currentRouterState: o,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              this.transitions.pipe(
                kr(i => 0 !== i.id),
                nt(i => ({ ...i, extractedUrl: this.urlHandlingStrategy.extract(i.rawUrl) })),
                _r(i => {
                  let s = !1,
                    a = !1;
                  return mt(i).pipe(
                    _r(l => {
                      if (this.navigationId > i.id) return this.cancelNavigationTransition(i, '', fo.SupersededByNewNavigation), Po;
                      (this.currentTransition = i),
                        (this.currentNavigation = {
                          id: l.id,
                          initialUrl: l.rawUrl,
                          extractedUrl: l.extractedUrl,
                          trigger: l.source,
                          extras: l.extras,
                          previousNavigation: this.lastSuccessfulNavigation
                            ? { ...this.lastSuccessfulNavigation, previousNavigation: null }
                            : null,
                        });
                      const c = !t.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl();
                      if (!c && 'reload' !== (l.extras.onSameUrlNavigation ?? t.onSameUrlNavigation)) {
                        const d = '';
                        return (
                          this.events.next(new Ma(l.id, this.urlSerializer.serialize(l.rawUrl), d, Qd.IgnoredSameUrlNavigation)),
                          l.resolve(null),
                          Po
                        );
                      }
                      if (this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))
                        return mt(l).pipe(
                          _r(d => {
                            const g = this.transitions?.getValue();
                            return (
                              this.events.next(new Dc(d.id, this.urlSerializer.serialize(d.extractedUrl), d.source, d.restoredState)),
                              g !== this.transitions?.getValue() ? Po : Promise.resolve(d)
                            );
                          }),
                          (function OH(e, n, t, r, o, i) {
                            return Dr(s =>
                              (function IH(e, n, t, r, o, i, s = 'emptyOnly') {
                                return new SH(e, n, t, r, o, s, i).recognize();
                              })(e, n, t, r, s.extractedUrl, o, i).pipe(
                                nt(({ state: a, tree: l }) => ({ ...s, targetSnapshot: a, urlAfterRedirects: l })),
                              ),
                            );
                          })(
                            this.environmentInjector,
                            this.configLoader,
                            this.rootComponentType,
                            t.config,
                            this.urlSerializer,
                            this.paramsInheritanceStrategy,
                          ),
                          Hn(d => {
                            (i.targetSnapshot = d.targetSnapshot),
                              (i.urlAfterRedirects = d.urlAfterRedirects),
                              (this.currentNavigation = { ...this.currentNavigation, finalUrl: d.urlAfterRedirects });
                            const g = new j0(
                              d.id,
                              this.urlSerializer.serialize(d.extractedUrl),
                              this.urlSerializer.serialize(d.urlAfterRedirects),
                              d.targetSnapshot,
                            );
                            this.events.next(g);
                          }),
                        );
                      if (c && this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)) {
                        const { id: d, extractedUrl: g, source: m, restoredState: v, extras: E } = l,
                          V = new Dc(d, this.urlSerializer.serialize(g), m, v);
                        this.events.next(V);
                        const q = G0(this.rootComponentType).snapshot;
                        return (
                          (this.currentTransition = i =
                            { ...l, targetSnapshot: q, urlAfterRedirects: g, extras: { ...E, skipLocationChange: !1, replaceUrl: !1 } }),
                          (this.currentNavigation.finalUrl = g),
                          mt(i)
                        );
                      }
                      {
                        const d = '';
                        return (
                          this.events.next(new Ma(l.id, this.urlSerializer.serialize(l.extractedUrl), d, Qd.IgnoredByUrlHandlingStrategy)),
                          l.resolve(null),
                          Po
                        );
                      }
                    }),
                    Hn(l => {
                      const c = new wU(
                        l.id,
                        this.urlSerializer.serialize(l.extractedUrl),
                        this.urlSerializer.serialize(l.urlAfterRedirects),
                        l.targetSnapshot,
                      );
                      this.events.next(c);
                    }),
                    nt(
                      l => ((this.currentTransition = i = { ...l, guards: qU(l.targetSnapshot, l.currentSnapshot, this.rootContexts) }), i),
                    ),
                    (function rH(e, n) {
                      return Dr(t => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: o,
                          guards: { canActivateChecks: i, canDeactivateChecks: s },
                        } = t;
                        return 0 === s.length && 0 === i.length
                          ? mt({ ...t, guardsResult: !0 })
                          : (function oH(e, n, t, r) {
                              return fr(e).pipe(
                                Dr(o =>
                                  (function uH(e, n, t, r, o) {
                                    const i = n && n.routeConfig ? n.routeConfig.canDeactivate : null;
                                    return i && 0 !== i.length
                                      ? mt(
                                          i.map(a => {
                                            const l = Cc(n) ?? o,
                                              c = xa(a, l);
                                            return Hi(
                                              (function tH(e) {
                                                return e && wc(e.canDeactivate);
                                              })(c)
                                                ? c.canDeactivate(e, n, t, r)
                                                : Bo(l, () => c(e, n, t, r)),
                                            ).pipe(ps());
                                          }),
                                        ).pipe(Ra())
                                      : mt(!0);
                                  })(o.component, o.route, t, n, r),
                                ),
                                ps(o => !0 !== o, !0),
                              );
                            })(s, r, o, e).pipe(
                              Dr(a =>
                                a &&
                                (function KU(e) {
                                  return 'boolean' == typeof e;
                                })(a)
                                  ? (function iH(e, n, t, r) {
                                      return fr(n).pipe(
                                        Ea(o =>
                                          dc(
                                            (function aH(e, n) {
                                              return null !== e && n && n(new xU(e)), mt(!0);
                                            })(o.route.parent, r),
                                            (function sH(e, n) {
                                              return null !== e && n && n(new OU(e)), mt(!0);
                                            })(o.route, r),
                                            (function cH(e, n, t) {
                                              const r = n[n.length - 1],
                                                i = n
                                                  .slice(0, n.length - 1)
                                                  .reverse()
                                                  .map(s =>
                                                    (function XU(e) {
                                                      const n = e.routeConfig ? e.routeConfig.canActivateChild : null;
                                                      return n && 0 !== n.length ? { node: e, guards: n } : null;
                                                    })(s),
                                                  )
                                                  .filter(s => null !== s)
                                                  .map(s =>
                                                    zd(() =>
                                                      mt(
                                                        s.guards.map(l => {
                                                          const c = Cc(s.node) ?? t,
                                                            u = xa(l, c);
                                                          return Hi(
                                                            (function eH(e) {
                                                              return e && wc(e.canActivateChild);
                                                            })(u)
                                                              ? u.canActivateChild(r, e)
                                                              : Bo(c, () => u(r, e)),
                                                          ).pipe(ps());
                                                        }),
                                                      ).pipe(Ra()),
                                                    ),
                                                  );
                                              return mt(i).pipe(Ra());
                                            })(e, o.path, t),
                                            (function lH(e, n, t) {
                                              const r = n.routeConfig ? n.routeConfig.canActivate : null;
                                              if (!r || 0 === r.length) return mt(!0);
                                              const o = r.map(i =>
                                                zd(() => {
                                                  const s = Cc(n) ?? t,
                                                    a = xa(i, s);
                                                  return Hi(
                                                    (function JU(e) {
                                                      return e && wc(e.canActivate);
                                                    })(a)
                                                      ? a.canActivate(n, e)
                                                      : Bo(s, () => a(n, e)),
                                                  ).pipe(ps());
                                                }),
                                              );
                                              return mt(o).pipe(Ra());
                                            })(e, o.route, t),
                                          ),
                                        ),
                                        ps(o => !0 !== o, !0),
                                      );
                                    })(r, i, e, n)
                                  : mt(a),
                              ),
                              nt(a => ({ ...t, guardsResult: a })),
                            );
                      });
                    })(this.environmentInjector, l => this.events.next(l)),
                    Hn(l => {
                      if (((i.guardsResult = l.guardsResult), Ta(l.guardsResult))) throw Q0(0, l.guardsResult);
                      const c = new IU(
                        l.id,
                        this.urlSerializer.serialize(l.extractedUrl),
                        this.urlSerializer.serialize(l.urlAfterRedirects),
                        l.targetSnapshot,
                        !!l.guardsResult,
                      );
                      this.events.next(c);
                    }),
                    kr(l => !!l.guardsResult || (this.cancelNavigationTransition(l, '', fo.GuardRejected), !1)),
                    zm(l => {
                      if (l.guards.canActivateChecks.length)
                        return mt(l).pipe(
                          Hn(c => {
                            const u = new TU(
                              c.id,
                              this.urlSerializer.serialize(c.extractedUrl),
                              this.urlSerializer.serialize(c.urlAfterRedirects),
                              c.targetSnapshot,
                            );
                            this.events.next(u);
                          }),
                          _r(c => {
                            let u = !1;
                            return mt(c).pipe(
                              (function NH(e, n) {
                                return Dr(t => {
                                  const {
                                    targetSnapshot: r,
                                    guards: { canActivateChecks: o },
                                  } = t;
                                  if (!o.length) return mt(t);
                                  const i = new Set(o.map(l => l.route)),
                                    s = new Set();
                                  for (const l of i) if (!s.has(l)) for (const c of aT(l)) s.add(c);
                                  let a = 0;
                                  return fr(s).pipe(
                                    Ea(l =>
                                      i.has(l)
                                        ? (function kH(e, n, t, r) {
                                            const o = e.routeConfig,
                                              i = e._resolve;
                                            return (
                                              void 0 !== o?.title && !X0(o) && (i[hc] = o.title),
                                              (function PH(e, n, t, r) {
                                                const o = Em(e);
                                                if (0 === o.length) return mt({});
                                                const i = {};
                                                return fr(o).pipe(
                                                  Dr(s =>
                                                    (function FH(e, n, t, r) {
                                                      const o = Cc(n) ?? r,
                                                        i = xa(e, o);
                                                      return Hi(i.resolve ? i.resolve(n, t) : Bo(o, () => i(n, t)));
                                                    })(e[s], n, t, r).pipe(
                                                      ps(),
                                                      Hn(a => {
                                                        i[s] = a;
                                                      }),
                                                    ),
                                                  ),
                                                  bm(1),
                                                  C0(i),
                                                  ti(s => (rT(s) ? Po : uo(s))),
                                                );
                                              })(i, e, n, r).pipe(
                                                nt(s => ((e._resolvedData = s), (e.data = Nm(e, e.parent, t).resolve), null)),
                                              )
                                            );
                                          })(l, r, e, n)
                                        : ((l.data = Nm(l, l.parent, e).resolve), mt(void 0)),
                                    ),
                                    Hn(() => a++),
                                    bm(1),
                                    Dr(l => (a === s.size ? mt(t) : Po)),
                                  );
                                });
                              })(this.paramsInheritanceStrategy, this.environmentInjector),
                              Hn({
                                next: () => (u = !0),
                                complete: () => {
                                  u || this.cancelNavigationTransition(c, '', fo.NoDataFromResolver);
                                },
                              }),
                            );
                          }),
                          Hn(c => {
                            const u = new SU(
                              c.id,
                              this.urlSerializer.serialize(c.extractedUrl),
                              this.urlSerializer.serialize(c.urlAfterRedirects),
                              c.targetSnapshot,
                            );
                            this.events.next(u);
                          }),
                        );
                    }),
                    zm(l => {
                      const c = u => {
                        const d = [];
                        u.routeConfig?.loadComponent &&
                          !u.routeConfig._loadedComponent &&
                          d.push(
                            this.configLoader.loadComponent(u.routeConfig).pipe(
                              Hn(g => {
                                u.component = g;
                              }),
                              nt(() => {}),
                            ),
                          );
                        for (const g of u.children) d.push(...c(g));
                        return d;
                      };
                      return Ud(c(l.targetSnapshot.root)).pipe(Gd(null), ro(1));
                    }),
                    zm(() => this.afterPreactivation()),
                    _r(() => {
                      const { currentSnapshot: l, targetSnapshot: c } = i,
                        u = this.createViewTransition?.(this.environmentInjector, l.root, c.root);
                      return u ? fr(u).pipe(nt(() => i)) : mt(i);
                    }),
                    nt(l => {
                      const c = (function FU(e, n, t) {
                        const r = _c(e, n._root, t ? t._root : void 0);
                        return new z0(r, n);
                      })(t.routeReuseStrategy, l.targetSnapshot, l.currentRouterState);
                      return (
                        (this.currentTransition = i = { ...l, targetRouterState: c }), (this.currentNavigation.targetRouterState = c), i
                      );
                    }),
                    Hn(() => {
                      this.events.next(new Am());
                    }),
                    ((e, n, t, r) => nt(o => (new WU(n, o.targetRouterState, o.currentRouterState, t, r).activate(e), o)))(
                      this.rootContexts,
                      t.routeReuseStrategy,
                      l => this.events.next(l),
                      this.inputBindingEnabled,
                    ),
                    ro(1),
                    Hn({
                      next: l => {
                        (s = !0),
                          (this.lastSuccessfulNavigation = this.currentNavigation),
                          this.events.next(
                            new bi(l.id, this.urlSerializer.serialize(l.extractedUrl), this.urlSerializer.serialize(l.urlAfterRedirects)),
                          ),
                          this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),
                          l.resolve(!0);
                      },
                      complete: () => {
                        s = !0;
                      },
                    }),
                    (function Z2(e) {
                      return Le((n, t) => {
                        no(e).subscribe(Ce(t, () => t.complete(), Gt)), !t.closed && n.subscribe(t);
                      });
                    })(
                      this.transitionAbortSubject.pipe(
                        Hn(l => {
                          throw l;
                        }),
                      ),
                    ),
                    fc(() => {
                      !s && !a && this.cancelNavigationTransition(i, '', fo.SupersededByNewNavigation),
                        this.currentTransition?.id === i.id && ((this.currentNavigation = null), (this.currentTransition = null));
                    }),
                    ti(l => {
                      if (((a = !0), eT(l)))
                        this.events.next(new Sa(i.id, this.urlSerializer.serialize(i.extractedUrl), l.message, l.cancellationCode)),
                          (function VU(e) {
                            return eT(e) && Ta(e.url);
                          })(l)
                            ? this.events.next(new xm(l.url))
                            : i.resolve(!1);
                      else {
                        this.events.next(new Jd(i.id, this.urlSerializer.serialize(i.extractedUrl), l, i.targetSnapshot ?? void 0));
                        try {
                          i.resolve(t.errorHandler(l));
                        } catch (c) {
                          this.options.resolveNavigationPromiseOnError ? i.resolve(!1) : i.reject(c);
                        }
                      }
                      return Po;
                    }),
                  );
                }),
              )
            );
          }
          cancelNavigationTransition(t, r, o) {
            const i = new Sa(t.id, this.urlSerializer.serialize(t.extractedUrl), r, o);
            this.events.next(i), t.resolve(!1);
          }
          isUpdatingInternalState() {
            return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString();
          }
          isUpdatedBrowserUrl() {
            return (
              this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString() !==
                this.currentTransition?.extractedUrl.toString() && !this.currentTransition?.extras.skipLocationChange
            );
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
          }
        }
        return e;
      })();
      function HH(e) {
        return e !== yc;
      }
      let fT = (() => {
        class e {
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: () => ce(GH), providedIn: 'root' });
          }
        }
        return e;
      })();
      class zH {
        shouldDetach(n) {
          return !1;
        }
        store(n, t) {}
        shouldAttach(n) {
          return !1;
        }
        retrieve(n) {
          return null;
        }
        shouldReuseRoute(n, t) {
          return n.routeConfig === t.routeConfig;
        }
      }
      let GH = (() => {
          class e extends zH {
            static {
              this.ɵfac = (() => {
                let t;
                return function (o) {
                  return (t || (t = Gn(e)))(o || e);
                };
              })();
            }
            static {
              this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
            }
          }
          return e;
        })(),
        hT = (() => {
          class e {
            static {
              this.ɵfac = function (r) {
                return new (r || e)();
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: () => ce(WH), providedIn: 'root' });
            }
          }
          return e;
        })(),
        WH = (() => {
          class e extends hT {
            constructor() {
              super(...arguments),
                (this.location = ce(ji)),
                (this.urlSerializer = ce(ms)),
                (this.options = ce(Na, { optional: !0 }) || {}),
                (this.canceledNavigationResolution = this.options.canceledNavigationResolution || 'replace'),
                (this.urlHandlingStrategy = ce(Wm)),
                (this.urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred'),
                (this.currentUrlTree = new Ia()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.currentPageId = 0),
                (this.lastSuccessfulId = -1),
                (this.routerState = G0(null)),
                (this.stateMemento = this.createStateMemento());
            }
            getCurrentUrlTree() {
              return this.currentUrlTree;
            }
            getRawUrlTree() {
              return this.rawUrlTree;
            }
            restoredState() {
              return this.location.getState();
            }
            get browserPageId() {
              return 'computed' !== this.canceledNavigationResolution
                ? this.currentPageId
                : (this.restoredState()?.ɵrouterPageId ?? this.currentPageId);
            }
            getRouterState() {
              return this.routerState;
            }
            createStateMemento() {
              return { rawUrlTree: this.rawUrlTree, currentUrlTree: this.currentUrlTree, routerState: this.routerState };
            }
            registerNonRouterCurrentEntryChangeListener(t) {
              return this.location.subscribe(r => {
                'popstate' === r.type && t(r.url, r.state);
              });
            }
            handleRouterEvent(t, r) {
              if (t instanceof Dc) this.stateMemento = this.createStateMemento();
              else if (t instanceof Ma) this.rawUrlTree = r.initialUrl;
              else if (t instanceof j0) {
                if ('eager' === this.urlUpdateStrategy && !r.extras.skipLocationChange) {
                  const o = this.urlHandlingStrategy.merge(r.finalUrl, r.initialUrl);
                  this.setBrowserUrl(o, r);
                }
              } else
                t instanceof Am
                  ? ((this.currentUrlTree = r.finalUrl),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(r.finalUrl, r.initialUrl)),
                    (this.routerState = r.targetRouterState),
                    'deferred' === this.urlUpdateStrategy && (r.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, r)))
                  : t instanceof Sa && (t.code === fo.GuardRejected || t.code === fo.NoDataFromResolver)
                    ? this.restoreHistory(r)
                    : t instanceof Jd
                      ? this.restoreHistory(r, !0)
                      : t instanceof bi && ((this.lastSuccessfulId = t.id), (this.currentPageId = this.browserPageId));
            }
            setBrowserUrl(t, r) {
              const o = this.urlSerializer.serialize(t);
              if (this.location.isCurrentPathEqualTo(o) || r.extras.replaceUrl) {
                const s = { ...r.extras.state, ...this.generateNgRouterState(r.id, this.browserPageId) };
                this.location.replaceState(o, '', s);
              } else {
                const i = { ...r.extras.state, ...this.generateNgRouterState(r.id, this.browserPageId + 1) };
                this.location.go(o, '', i);
              }
            }
            restoreHistory(t, r = !1) {
              if ('computed' === this.canceledNavigationResolution) {
                const i = this.currentPageId - this.browserPageId;
                0 !== i
                  ? this.location.historyGo(i)
                  : this.currentUrlTree === t.finalUrl && 0 === i && (this.resetState(t), this.resetUrlToCurrentUrlTree());
              } else 'replace' === this.canceledNavigationResolution && (r && this.resetState(t), this.resetUrlToCurrentUrlTree());
            }
            resetState(t) {
              (this.routerState = this.stateMemento.routerState),
                (this.currentUrlTree = this.stateMemento.currentUrlTree),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t.finalUrl ?? this.rawUrlTree));
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                '',
                this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
              );
            }
            generateNgRouterState(t, r) {
              return 'computed' === this.canceledNavigationResolution ? { navigationId: t, ɵrouterPageId: r } : { navigationId: t };
            }
            static {
              this.ɵfac = (() => {
                let t;
                return function (o) {
                  return (t || (t = Gn(e)))(o || e);
                };
              })();
            }
            static {
              this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
            }
          }
          return e;
        })();
      var Ic = (function (e) {
        return (e[(e.COMPLETE = 0)] = 'COMPLETE'), (e[(e.FAILED = 1)] = 'FAILED'), (e[(e.REDIRECTING = 2)] = 'REDIRECTING'), e;
      })(Ic || {});
      function pT(e, n) {
        e.events
          .pipe(
            kr(t => t instanceof bi || t instanceof Sa || t instanceof Jd || t instanceof Ma),
            nt(t =>
              t instanceof bi || t instanceof Ma
                ? Ic.COMPLETE
                : t instanceof Sa && (t.code === fo.Redirect || t.code === fo.SupersededByNewNavigation)
                  ? Ic.REDIRECTING
                  : Ic.FAILED,
            ),
            kr(t => t !== Ic.REDIRECTING),
            ro(1),
          )
          .subscribe(() => {
            n();
          });
      }
      function qH(e) {
        throw e;
      }
      const XH = { paths: 'exact', fragment: 'ignored', matrixParams: 'ignored', queryParams: 'exact' },
        ZH = { paths: 'subset', fragment: 'ignored', matrixParams: 'ignored', queryParams: 'subset' };
      let Ir = (() => {
        class e {
          get currentUrlTree() {
            return this.stateManager.getCurrentUrlTree();
          }
          get rawUrlTree() {
            return this.stateManager.getRawUrlTree();
          }
          get events() {
            return this._events;
          }
          get routerState() {
            return this.stateManager.getRouterState();
          }
          constructor() {
            (this.disposed = !1),
              (this.isNgZoneEnabled = !1),
              (this.console = ce(sw)),
              (this.stateManager = ce(hT)),
              (this.options = ce(Na, { optional: !0 }) || {}),
              (this.pendingTasks = ce(ki)),
              (this.urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred'),
              (this.navigationTransitions = ce(sf)),
              (this.urlSerializer = ce(ms)),
              (this.location = ce(ji)),
              (this.urlHandlingStrategy = ce(Wm)),
              (this._events = new _t()),
              (this.errorHandler = this.options.errorHandler || qH),
              (this.navigated = !1),
              (this.routeReuseStrategy = ce(fT)),
              (this.onSameUrlNavigation = this.options.onSameUrlNavigation || 'ignore'),
              (this.config = ce(ka, { optional: !0 })?.flat() ?? []),
              (this.componentInputBindingEnabled = !!ce(ef, { optional: !0 })),
              (this.eventsSubscription = new H()),
              (this.isNgZoneEnabled = ce(se) instanceof se && se.isInAngularZone()),
              this.resetConfig(this.config),
              this.navigationTransitions.setupNavigations(this, this.currentUrlTree, this.routerState).subscribe({
                error: t => {
                  this.console.warn(t);
                },
              }),
              this.subscribeToNavigationEvents();
          }
          subscribeToNavigationEvents() {
            const t = this.navigationTransitions.events.subscribe(r => {
              try {
                const o = this.navigationTransitions.currentTransition,
                  i = this.navigationTransitions.currentNavigation;
                if (null !== o && null !== i)
                  if (
                    (this.stateManager.handleRouterEvent(r, i),
                    r instanceof Sa && r.code !== fo.Redirect && r.code !== fo.SupersededByNewNavigation)
                  )
                    this.navigated = !0;
                  else if (r instanceof bi) this.navigated = !0;
                  else if (r instanceof xm) {
                    const s = this.urlHandlingStrategy.merge(r.url, o.currentRawUrl),
                      a = {
                        info: o.extras.info,
                        skipLocationChange: o.extras.skipLocationChange,
                        replaceUrl: 'eager' === this.urlUpdateStrategy || HH(o.source),
                      };
                    this.scheduleNavigation(s, yc, null, a, { resolve: o.resolve, reject: o.reject, promise: o.promise });
                  }
                (function KH(e) {
                  return !(e instanceof Am || e instanceof xm);
                })(r) && this._events.next(r);
              } catch (o) {
                this.navigationTransitions.transitionAbortSubject.next(o);
              }
            });
            this.eventsSubscription.add(t);
          }
          resetRootComponentType(t) {
            (this.routerState.root.component = t), (this.navigationTransitions.rootComponentType = t);
          }
          initialNavigation() {
            this.setUpLocationChangeListener(),
              this.navigationTransitions.hasRequestedNavigation ||
                this.navigateToSyncWithBrowser(this.location.path(!0), yc, this.stateManager.restoredState());
          }
          setUpLocationChangeListener() {
            this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((t, r) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(t, 'popstate', r);
              }, 0);
            });
          }
          navigateToSyncWithBrowser(t, r, o) {
            const i = { replaceUrl: !0 },
              s = o?.navigationId ? o : null;
            if (o) {
              const l = { ...o };
              delete l.navigationId, delete l.ɵrouterPageId, 0 !== Object.keys(l).length && (i.state = l);
            }
            const a = this.parseUrl(t);
            this.scheduleNavigation(a, r, s, i);
          }
          get url() {
            return this.serializeUrl(this.currentUrlTree);
          }
          getCurrentNavigation() {
            return this.navigationTransitions.currentNavigation;
          }
          get lastSuccessfulNavigation() {
            return this.navigationTransitions.lastSuccessfulNavigation;
          }
          resetConfig(t) {
            (this.config = t.map(Vm)), (this.navigated = !1);
          }
          ngOnDestroy() {
            this.dispose();
          }
          dispose() {
            this.navigationTransitions.complete(),
              this.nonRouterCurrentEntryChangeSubscription &&
                (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(), (this.nonRouterCurrentEntryChangeSubscription = void 0)),
              (this.disposed = !0),
              this.eventsSubscription.unsubscribe();
          }
          createUrlTree(t, r = {}) {
            const { relativeTo: o, queryParams: i, fragment: s, queryParamsHandling: a, preserveFragment: l } = r,
              c = l ? this.currentUrlTree.fragment : s;
            let d,
              u = null;
            switch (a) {
              case 'merge':
                u = { ...this.currentUrlTree.queryParams, ...i };
                break;
              case 'preserve':
                u = this.currentUrlTree.queryParams;
                break;
              default:
                u = i || null;
            }
            null !== u && (u = this.removeEmptyProps(u));
            try {
              d = k0(o ? o.snapshot : this.routerState.snapshot.root);
            } catch {
              ('string' != typeof t[0] || !t[0].startsWith('/')) && (t = []), (d = this.currentUrlTree.root);
            }
            return P0(d, t, u, c ?? null);
          }
          navigateByUrl(t, r = { skipLocationChange: !1 }) {
            const o = Ta(t) ? t : this.parseUrl(t),
              i = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
            return this.scheduleNavigation(i, yc, null, r);
          }
          navigate(t, r = { skipLocationChange: !1 }) {
            return (
              (function YH(e) {
                for (let n = 0; n < e.length; n++) if (null == e[n]) throw new O(4008, !1);
              })(t),
              this.navigateByUrl(this.createUrlTree(t, r), r)
            );
          }
          serializeUrl(t) {
            return this.urlSerializer.serialize(t);
          }
          parseUrl(t) {
            try {
              return this.urlSerializer.parse(t);
            } catch {
              return this.urlSerializer.parse('/');
            }
          }
          isActive(t, r) {
            let o;
            if (((o = !0 === r ? { ...XH } : !1 === r ? { ...ZH } : r), Ta(t))) return I0(this.currentUrlTree, t, o);
            const i = this.parseUrl(t);
            return I0(this.currentUrlTree, i, o);
          }
          removeEmptyProps(t) {
            return Object.entries(t).reduce((r, [o, i]) => (null != i && (r[o] = i), r), {});
          }
          scheduleNavigation(t, r, o, i, s) {
            if (this.disposed) return Promise.resolve(!1);
            let a, l, c;
            s
              ? ((a = s.resolve), (l = s.reject), (c = s.promise))
              : (c = new Promise((d, g) => {
                  (a = d), (l = g);
                }));
            const u = this.pendingTasks.add();
            return (
              pT(this, () => {
                queueMicrotask(() => this.pendingTasks.remove(u));
              }),
              this.navigationTransitions.handleNavigationRequest({
                source: r,
                restoredState: o,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                rawUrl: t,
                extras: i,
                resolve: a,
                reject: l,
                promise: c,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState,
              }),
              c.catch(d => Promise.reject(d))
            );
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
          }
        }
        return e;
      })();
      class gT {}
      let e4 = (() => {
        class e {
          constructor(t, r, o, i, s) {
            (this.router = t), (this.injector = o), (this.preloadingStrategy = i), (this.loader = s);
          }
          setUpPreloading() {
            this.subscription = this.router.events
              .pipe(
                kr(t => t instanceof bi),
                Ea(() => this.preload()),
              )
              .subscribe(() => {});
          }
          preload() {
            return this.processRoutes(this.injector, this.router.config);
          }
          ngOnDestroy() {
            this.subscription && this.subscription.unsubscribe();
          }
          processRoutes(t, r) {
            const o = [];
            for (const i of r) {
              i.providers && !i._injector && (i._injector = Zu(i.providers, t, `Route: ${i.path}`));
              const s = i._injector ?? t,
                a = i._loadedInjector ?? s;
              ((i.loadChildren && !i._loadedRoutes && void 0 === i.canLoad) || (i.loadComponent && !i._loadedComponent)) &&
                o.push(this.preloadConfig(s, i)),
                (i.children || i._loadedRoutes) && o.push(this.processRoutes(a, i.children ?? i._loadedRoutes));
            }
            return fr(o).pipe(ba());
          }
          preloadConfig(t, r) {
            return this.preloadingStrategy.preload(r, () => {
              let o;
              o = r.loadChildren && void 0 === r.canLoad ? this.loader.loadChildren(t, r) : mt(null);
              const i = o.pipe(
                Dr(s =>
                  null === s
                    ? mt(void 0)
                    : ((r._loadedRoutes = s.routes), (r._loadedInjector = s.injector), this.processRoutes(s.injector ?? t, s.routes)),
                ),
              );
              return r.loadComponent && !r._loadedComponent ? fr([i, this.loader.loadComponent(r)]).pipe(ba()) : i;
            });
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)(dt(Ir), dt(mw), dt(lr), dt(gT), dt(Gm));
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
          }
        }
        return e;
      })();
      const qm = new He('');
      let mT = (() => {
        class e {
          constructor(t, r, o, i, s = {}) {
            (this.urlSerializer = t),
              (this.transitions = r),
              (this.viewportScroller = o),
              (this.zone = i),
              (this.options = s),
              (this.lastId = 0),
              (this.lastSource = 'imperative'),
              (this.restoredId = 0),
              (this.store = {}),
              (this.environmentInjector = ce(lr)),
              (s.scrollPositionRestoration ||= 'disabled'),
              (s.anchorScrolling ||= 'disabled');
          }
          init() {
            'disabled' !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration('manual'),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.transitions.events.subscribe(t => {
              t instanceof Dc
                ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                  (this.lastSource = t.navigationTrigger),
                  (this.restoredId = t.restoredState ? t.restoredState.navigationId : 0))
                : t instanceof bi
                  ? ((this.lastId = t.id), this.scheduleScrollEvent(t, this.urlSerializer.parse(t.urlAfterRedirects).fragment))
                  : t instanceof Ma &&
                    t.code === Qd.IgnoredSameUrlNavigation &&
                    ((this.lastSource = void 0),
                    (this.restoredId = 0),
                    this.scheduleScrollEvent(t, this.urlSerializer.parse(t.url).fragment));
            });
          }
          consumeScrollEvents() {
            return this.transitions.events.subscribe(t => {
              t instanceof U0 &&
                (t.position
                  ? 'top' === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : 'enabled' === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(t.position)
                  : t.anchor && 'enabled' === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(t.anchor)
                    : 'disabled' !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(t, r) {
            var o = this;
            this.zone.runOutsideAngular(
              (0, de.A)(function* () {
                yield new Promise(i => {
                  setTimeout(() => {
                    i();
                  }),
                    Mp(
                      () => {
                        i();
                      },
                      { injector: o.environmentInjector },
                    );
                }),
                  o.zone.run(() => {
                    o.transitions.events.next(new U0(t, 'popstate' === o.lastSource ? o.store[o.restoredId] : null, r));
                  });
              }),
            );
          }
          ngOnDestroy() {
            this.routerEventsSubscription?.unsubscribe(), this.scrollEventsSubscription?.unsubscribe();
          }
          static {
            this.ɵfac = function (r) {
              !(function d_() {
                throw new Error('invalid');
              })();
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac });
          }
        }
        return e;
      })();
      function si(e, n) {
        return { ɵkind: e, ɵproviders: n };
      }
      function yT() {
        const e = ce(Nn);
        return n => {
          const t = e.get(ei);
          if (n !== t.components[0]) return;
          const r = e.get(Ir),
            o = e.get(DT);
          1 === e.get(Xm) && r.initialNavigation(),
            e.get(_T, null, rn.Optional)?.setUpPreloading(),
            e.get(qm, null, rn.Optional)?.init(),
            r.resetRootComponentType(t.componentTypes[0]),
            o.closed || (o.next(), o.complete(), o.unsubscribe());
        };
      }
      const DT = new He('', { factory: () => new _t() }),
        Xm = new He('', { providedIn: 'root', factory: () => 1 }),
        _T = new He('');
      function o4(e) {
        return si(0, [
          { provide: _T, useExisting: e4 },
          { provide: gT, useExisting: e },
        ]);
      }
      function s4(e) {
        return si(9, [
          { provide: uT, useValue: jH },
          { provide: dT, useValue: { skipNextTransition: !!e?.skipInitialTransition, ...e } },
        ]);
      }
      const CT = new He('ROUTER_FORROOT_GUARD'),
        a4 = [
          ji,
          { provide: ms, useClass: wm },
          Ir,
          vs,
          {
            provide: oi,
            useFactory: function vT(e) {
              return e.routerState.root;
            },
            deps: [Ir],
          },
          Gm,
          [],
        ];
      let bT = (() => {
        class e {
          constructor(t) {}
          static forRoot(t, r) {
            return {
              ngModule: e,
              providers: [
                a4,
                [],
                { provide: ka, multi: !0, useValue: t },
                { provide: CT, useFactory: d4, deps: [[Ir, new Hc(), new zc()]] },
                { provide: Na, useValue: r || {} },
                r?.useHash ? { provide: yi, useClass: bV } : { provide: yi, useClass: aI },
                {
                  provide: qm,
                  useFactory: () => {
                    const e = ce(HB),
                      n = ce(se),
                      t = ce(Na),
                      r = ce(sf),
                      o = ce(ms);
                    return t.scrollOffset && e.setOffset(t.scrollOffset), new mT(o, r, e, n, t);
                  },
                },
                r?.preloadingStrategy ? o4(r.preloadingStrategy).ɵproviders : [],
                r?.initialNavigation ? f4(r) : [],
                r?.bindToComponentInputs ? si(8, [Y0, { provide: ef, useExisting: Y0 }]).ɵproviders : [],
                r?.enableViewTransitions ? s4().ɵproviders : [],
                [
                  { provide: ET, useFactory: yT },
                  { provide: Mg, multi: !0, useExisting: ET },
                ],
              ],
            };
          }
          static forChild(t) {
            return { ngModule: e, providers: [{ provide: ka, multi: !0, useValue: t }] };
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)(dt(CT, 8));
            };
          }
          static {
            this.ɵmod = Vo({ type: e });
          }
          static {
            this.ɵinj = un({});
          }
        }
        return e;
      })();
      function d4(e) {
        return 'guarded';
      }
      function f4(e) {
        return [
          'disabled' === e.initialNavigation
            ? si(3, [
                {
                  provide: nc,
                  multi: !0,
                  useFactory: () => {
                    const n = ce(Ir);
                    return () => {
                      n.setUpLocationChangeListener();
                    };
                  },
                },
                { provide: Xm, useValue: 2 },
              ]).ɵproviders
            : [],
          'enabledBlocking' === e.initialNavigation
            ? si(2, [
                { provide: Xm, useValue: 0 },
                {
                  provide: nc,
                  multi: !0,
                  deps: [Nn],
                  useFactory: n => {
                    const t = n.get(_V, Promise.resolve());
                    return () =>
                      t.then(
                        () =>
                          new Promise(r => {
                            const o = n.get(Ir),
                              i = n.get(DT);
                            pT(o, () => {
                              r(!0);
                            }),
                              (n.get(sf).afterPreactivation = () => (r(!0), i.closed ? mt(void 0) : i)),
                              o.initialNavigation();
                          }),
                      );
                  },
                },
              ]).ɵproviders
            : [],
        ];
      }
      const ET = new He('');
      class af {}
      class lf {}
      class ho {
        constructor(n) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            n
              ? 'string' == typeof n
                ? (this.lazyInit = () => {
                    (this.headers = new Map()),
                      n.split('\n').forEach(t => {
                        const r = t.indexOf(':');
                        if (r > 0) {
                          const o = t.slice(0, r),
                            i = o.toLowerCase(),
                            s = t.slice(r + 1).trim();
                          this.maybeSetNormalizedName(o, i), this.headers.has(i) ? this.headers.get(i).push(s) : this.headers.set(i, [s]);
                        }
                      });
                  })
                : typeof Headers < 'u' && n instanceof Headers
                  ? ((this.headers = new Map()),
                    n.forEach((t, r) => {
                      this.setHeaderEntries(r, t);
                    }))
                  : (this.lazyInit = () => {
                      (this.headers = new Map()),
                        Object.entries(n).forEach(([t, r]) => {
                          this.setHeaderEntries(t, r);
                        });
                    })
              : (this.headers = new Map());
        }
        has(n) {
          return this.init(), this.headers.has(n.toLowerCase());
        }
        get(n) {
          this.init();
          const t = this.headers.get(n.toLowerCase());
          return t && t.length > 0 ? t[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(n) {
          return this.init(), this.headers.get(n.toLowerCase()) || null;
        }
        append(n, t) {
          return this.clone({ name: n, value: t, op: 'a' });
        }
        set(n, t) {
          return this.clone({ name: n, value: t, op: 's' });
        }
        delete(n, t) {
          return this.clone({ name: n, value: t, op: 'd' });
        }
        maybeSetNormalizedName(n, t) {
          this.normalizedNames.has(t) || this.normalizedNames.set(t, n);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof ho ? this.copyFrom(this.lazyInit) : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate && (this.lazyUpdate.forEach(n => this.applyUpdate(n)), (this.lazyUpdate = null)));
        }
        copyFrom(n) {
          n.init(),
            Array.from(n.headers.keys()).forEach(t => {
              this.headers.set(t, n.headers.get(t)), this.normalizedNames.set(t, n.normalizedNames.get(t));
            });
        }
        clone(n) {
          const t = new ho();
          return (
            (t.lazyInit = this.lazyInit && this.lazyInit instanceof ho ? this.lazyInit : this),
            (t.lazyUpdate = (this.lazyUpdate || []).concat([n])),
            t
          );
        }
        applyUpdate(n) {
          const t = n.name.toLowerCase();
          switch (n.op) {
            case 'a':
            case 's':
              let r = n.value;
              if (('string' == typeof r && (r = [r]), 0 === r.length)) return;
              this.maybeSetNormalizedName(n.name, t);
              const o = ('a' === n.op ? this.headers.get(t) : void 0) || [];
              o.push(...r), this.headers.set(t, o);
              break;
            case 'd':
              const i = n.value;
              if (i) {
                let s = this.headers.get(t);
                if (!s) return;
                (s = s.filter(a => -1 === i.indexOf(a))),
                  0 === s.length ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, s);
              } else this.headers.delete(t), this.normalizedNames.delete(t);
          }
        }
        setHeaderEntries(n, t) {
          const r = (Array.isArray(t) ? t : [t]).map(i => i.toString()),
            o = n.toLowerCase();
          this.headers.set(o, r), this.maybeSetNormalizedName(n, o);
        }
        forEach(n) {
          this.init(), Array.from(this.normalizedNames.keys()).forEach(t => n(this.normalizedNames.get(t), this.headers.get(t)));
        }
      }
      class p4 {
        encodeKey(n) {
          return wT(n);
        }
        encodeValue(n) {
          return wT(n);
        }
        decodeKey(n) {
          return decodeURIComponent(n);
        }
        decodeValue(n) {
          return decodeURIComponent(n);
        }
      }
      const m4 = /%(\d[a-f0-9])/gi,
        v4 = { 40: '@', '3A': ':', 24: '$', '2C': ',', '3B': ';', '3D': '=', '3F': '?', '2F': '/' };
      function wT(e) {
        return encodeURIComponent(e).replace(m4, (n, t) => v4[t] ?? n);
      }
      function cf(e) {
        return `${e}`;
      }
      class zi {
        constructor(n = {}) {
          if (((this.updates = null), (this.cloneFrom = null), (this.encoder = n.encoder || new p4()), n.fromString)) {
            if (n.fromObject) throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function g4(e, n) {
              const t = new Map();
              return (
                e.length > 0 &&
                  e
                    .replace(/^\?/, '')
                    .split('&')
                    .forEach(o => {
                      const i = o.indexOf('='),
                        [s, a] = -1 == i ? [n.decodeKey(o), ''] : [n.decodeKey(o.slice(0, i)), n.decodeValue(o.slice(i + 1))],
                        l = t.get(s) || [];
                      l.push(a), t.set(s, l);
                    }),
                t
              );
            })(n.fromString, this.encoder);
          } else
            n.fromObject
              ? ((this.map = new Map()),
                Object.keys(n.fromObject).forEach(t => {
                  const r = n.fromObject[t],
                    o = Array.isArray(r) ? r.map(cf) : [cf(r)];
                  this.map.set(t, o);
                }))
              : (this.map = null);
        }
        has(n) {
          return this.init(), this.map.has(n);
        }
        get(n) {
          this.init();
          const t = this.map.get(n);
          return t ? t[0] : null;
        }
        getAll(n) {
          return this.init(), this.map.get(n) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(n, t) {
          return this.clone({ param: n, value: t, op: 'a' });
        }
        appendAll(n) {
          const t = [];
          return (
            Object.keys(n).forEach(r => {
              const o = n[r];
              Array.isArray(o)
                ? o.forEach(i => {
                    t.push({ param: r, value: i, op: 'a' });
                  })
                : t.push({ param: r, value: o, op: 'a' });
            }),
            this.clone(t)
          );
        }
        set(n, t) {
          return this.clone({ param: n, value: t, op: 's' });
        }
        delete(n, t) {
          return this.clone({ param: n, value: t, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map(n => {
                const t = this.encoder.encodeKey(n);
                return this.map
                  .get(n)
                  .map(r => t + '=' + this.encoder.encodeValue(r))
                  .join('&');
              })
              .filter(n => '' !== n)
              .join('&')
          );
        }
        clone(n) {
          const t = new zi({ encoder: this.encoder });
          return (t.cloneFrom = this.cloneFrom || this), (t.updates = (this.updates || []).concat(n)), t;
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom.keys().forEach(n => this.map.set(n, this.cloneFrom.map.get(n))),
              this.updates.forEach(n => {
                switch (n.op) {
                  case 'a':
                  case 's':
                    const t = ('a' === n.op ? this.map.get(n.param) : void 0) || [];
                    t.push(cf(n.value)), this.map.set(n.param, t);
                    break;
                  case 'd':
                    if (void 0 === n.value) {
                      this.map.delete(n.param);
                      break;
                    }
                    {
                      let r = this.map.get(n.param) || [];
                      const o = r.indexOf(cf(n.value));
                      -1 !== o && r.splice(o, 1), r.length > 0 ? this.map.set(n.param, r) : this.map.delete(n.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class y4 {
        constructor() {
          this.map = new Map();
        }
        set(n, t) {
          return this.map.set(n, t), this;
        }
        get(n) {
          return this.map.has(n) || this.map.set(n, n.defaultValue()), this.map.get(n);
        }
        delete(n) {
          return this.map.delete(n), this;
        }
        has(n) {
          return this.map.has(n);
        }
        keys() {
          return this.map.keys();
        }
      }
      function IT(e) {
        return typeof ArrayBuffer < 'u' && e instanceof ArrayBuffer;
      }
      function TT(e) {
        return typeof Blob < 'u' && e instanceof Blob;
      }
      function ST(e) {
        return typeof FormData < 'u' && e instanceof FormData;
      }
      class Sc {
        constructor(n, t, r, o) {
          let i;
          if (
            ((this.url = t),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = n.toUpperCase()),
            (function D4(e) {
              switch (e) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || o
              ? ((this.body = void 0 !== r ? r : null), (i = o))
              : (i = r),
            i &&
              ((this.reportProgress = !!i.reportProgress),
              (this.withCredentials = !!i.withCredentials),
              i.responseType && (this.responseType = i.responseType),
              i.headers && (this.headers = i.headers),
              i.context && (this.context = i.context),
              i.params && (this.params = i.params),
              (this.transferCache = i.transferCache)),
            (this.headers ??= new ho()),
            (this.context ??= new y4()),
            this.params)
          ) {
            const s = this.params.toString();
            if (0 === s.length) this.urlWithParams = t;
            else {
              const a = t.indexOf('?');
              this.urlWithParams = t + (-1 === a ? '?' : a < t.length - 1 ? '&' : '') + s;
            }
          } else (this.params = new zi()), (this.urlWithParams = t);
        }
        serializeBody() {
          return null === this.body
            ? null
            : 'string' == typeof this.body ||
                IT(this.body) ||
                TT(this.body) ||
                ST(this.body) ||
                (function _4(e) {
                  return typeof URLSearchParams < 'u' && e instanceof URLSearchParams;
                })(this.body)
              ? this.body
              : this.body instanceof zi
                ? this.body.toString()
                : 'object' == typeof this.body || 'boolean' == typeof this.body || Array.isArray(this.body)
                  ? JSON.stringify(this.body)
                  : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || ST(this.body)
            ? null
            : TT(this.body)
              ? this.body.type || null
              : IT(this.body)
                ? null
                : 'string' == typeof this.body
                  ? 'text/plain'
                  : this.body instanceof zi
                    ? 'application/x-www-form-urlencoded;charset=UTF-8'
                    : 'object' == typeof this.body || 'number' == typeof this.body || 'boolean' == typeof this.body
                      ? 'application/json'
                      : null;
        }
        clone(n = {}) {
          const t = n.method || this.method,
            r = n.url || this.url,
            o = n.responseType || this.responseType,
            i = n.transferCache ?? this.transferCache,
            s = void 0 !== n.body ? n.body : this.body,
            a = n.withCredentials ?? this.withCredentials,
            l = n.reportProgress ?? this.reportProgress;
          let c = n.headers || this.headers,
            u = n.params || this.params;
          const d = n.context ?? this.context;
          return (
            void 0 !== n.setHeaders && (c = Object.keys(n.setHeaders).reduce((g, m) => g.set(m, n.setHeaders[m]), c)),
            n.setParams && (u = Object.keys(n.setParams).reduce((g, m) => g.set(m, n.setParams[m]), u)),
            new Sc(t, r, s, { params: u, headers: c, context: d, reportProgress: l, responseType: o, withCredentials: a, transferCache: i })
          );
        }
      }
      var Gi = (function (e) {
        return (
          (e[(e.Sent = 0)] = 'Sent'),
          (e[(e.UploadProgress = 1)] = 'UploadProgress'),
          (e[(e.ResponseHeader = 2)] = 'ResponseHeader'),
          (e[(e.DownloadProgress = 3)] = 'DownloadProgress'),
          (e[(e.Response = 4)] = 'Response'),
          (e[(e.User = 5)] = 'User'),
          e
        );
      })(Gi || {});
      class Zm {
        constructor(n, t = Mc.Ok, r = 'OK') {
          (this.headers = n.headers || new ho()),
            (this.status = void 0 !== n.status ? n.status : t),
            (this.statusText = n.statusText || r),
            (this.url = n.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class uf extends Zm {
        constructor(n = {}) {
          super(n), (this.type = Gi.ResponseHeader);
        }
        clone(n = {}) {
          return new uf({
            headers: n.headers || this.headers,
            status: void 0 !== n.status ? n.status : this.status,
            statusText: n.statusText || this.statusText,
            url: n.url || this.url || void 0,
          });
        }
      }
      class ys extends Zm {
        constructor(n = {}) {
          super(n), (this.type = Gi.Response), (this.body = void 0 !== n.body ? n.body : null);
        }
        clone(n = {}) {
          return new ys({
            body: void 0 !== n.body ? n.body : this.body,
            headers: n.headers || this.headers,
            status: void 0 !== n.status ? n.status : this.status,
            statusText: n.statusText || this.statusText,
            url: n.url || this.url || void 0,
          });
        }
      }
      class Pa extends Zm {
        constructor(n) {
          super(n, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${n.url || '(unknown url)'}`
                : `Http failure response for ${n.url || '(unknown url)'}: ${n.status} ${n.statusText}`),
            (this.error = n.error || null);
        }
      }
      var Mc = (function (e) {
        return (
          (e[(e.Continue = 100)] = 'Continue'),
          (e[(e.SwitchingProtocols = 101)] = 'SwitchingProtocols'),
          (e[(e.Processing = 102)] = 'Processing'),
          (e[(e.EarlyHints = 103)] = 'EarlyHints'),
          (e[(e.Ok = 200)] = 'Ok'),
          (e[(e.Created = 201)] = 'Created'),
          (e[(e.Accepted = 202)] = 'Accepted'),
          (e[(e.NonAuthoritativeInformation = 203)] = 'NonAuthoritativeInformation'),
          (e[(e.NoContent = 204)] = 'NoContent'),
          (e[(e.ResetContent = 205)] = 'ResetContent'),
          (e[(e.PartialContent = 206)] = 'PartialContent'),
          (e[(e.MultiStatus = 207)] = 'MultiStatus'),
          (e[(e.AlreadyReported = 208)] = 'AlreadyReported'),
          (e[(e.ImUsed = 226)] = 'ImUsed'),
          (e[(e.MultipleChoices = 300)] = 'MultipleChoices'),
          (e[(e.MovedPermanently = 301)] = 'MovedPermanently'),
          (e[(e.Found = 302)] = 'Found'),
          (e[(e.SeeOther = 303)] = 'SeeOther'),
          (e[(e.NotModified = 304)] = 'NotModified'),
          (e[(e.UseProxy = 305)] = 'UseProxy'),
          (e[(e.Unused = 306)] = 'Unused'),
          (e[(e.TemporaryRedirect = 307)] = 'TemporaryRedirect'),
          (e[(e.PermanentRedirect = 308)] = 'PermanentRedirect'),
          (e[(e.BadRequest = 400)] = 'BadRequest'),
          (e[(e.Unauthorized = 401)] = 'Unauthorized'),
          (e[(e.PaymentRequired = 402)] = 'PaymentRequired'),
          (e[(e.Forbidden = 403)] = 'Forbidden'),
          (e[(e.NotFound = 404)] = 'NotFound'),
          (e[(e.MethodNotAllowed = 405)] = 'MethodNotAllowed'),
          (e[(e.NotAcceptable = 406)] = 'NotAcceptable'),
          (e[(e.ProxyAuthenticationRequired = 407)] = 'ProxyAuthenticationRequired'),
          (e[(e.RequestTimeout = 408)] = 'RequestTimeout'),
          (e[(e.Conflict = 409)] = 'Conflict'),
          (e[(e.Gone = 410)] = 'Gone'),
          (e[(e.LengthRequired = 411)] = 'LengthRequired'),
          (e[(e.PreconditionFailed = 412)] = 'PreconditionFailed'),
          (e[(e.PayloadTooLarge = 413)] = 'PayloadTooLarge'),
          (e[(e.UriTooLong = 414)] = 'UriTooLong'),
          (e[(e.UnsupportedMediaType = 415)] = 'UnsupportedMediaType'),
          (e[(e.RangeNotSatisfiable = 416)] = 'RangeNotSatisfiable'),
          (e[(e.ExpectationFailed = 417)] = 'ExpectationFailed'),
          (e[(e.ImATeapot = 418)] = 'ImATeapot'),
          (e[(e.MisdirectedRequest = 421)] = 'MisdirectedRequest'),
          (e[(e.UnprocessableEntity = 422)] = 'UnprocessableEntity'),
          (e[(e.Locked = 423)] = 'Locked'),
          (e[(e.FailedDependency = 424)] = 'FailedDependency'),
          (e[(e.TooEarly = 425)] = 'TooEarly'),
          (e[(e.UpgradeRequired = 426)] = 'UpgradeRequired'),
          (e[(e.PreconditionRequired = 428)] = 'PreconditionRequired'),
          (e[(e.TooManyRequests = 429)] = 'TooManyRequests'),
          (e[(e.RequestHeaderFieldsTooLarge = 431)] = 'RequestHeaderFieldsTooLarge'),
          (e[(e.UnavailableForLegalReasons = 451)] = 'UnavailableForLegalReasons'),
          (e[(e.InternalServerError = 500)] = 'InternalServerError'),
          (e[(e.NotImplemented = 501)] = 'NotImplemented'),
          (e[(e.BadGateway = 502)] = 'BadGateway'),
          (e[(e.ServiceUnavailable = 503)] = 'ServiceUnavailable'),
          (e[(e.GatewayTimeout = 504)] = 'GatewayTimeout'),
          (e[(e.HttpVersionNotSupported = 505)] = 'HttpVersionNotSupported'),
          (e[(e.VariantAlsoNegotiates = 506)] = 'VariantAlsoNegotiates'),
          (e[(e.InsufficientStorage = 507)] = 'InsufficientStorage'),
          (e[(e.LoopDetected = 508)] = 'LoopDetected'),
          (e[(e.NotExtended = 510)] = 'NotExtended'),
          (e[(e.NetworkAuthenticationRequired = 511)] = 'NetworkAuthenticationRequired'),
          e
        );
      })(Mc || {});
      function Ym(e, n) {
        return {
          body: n,
          headers: e.headers,
          context: e.context,
          observe: e.observe,
          params: e.params,
          reportProgress: e.reportProgress,
          responseType: e.responseType,
          withCredentials: e.withCredentials,
          transferCache: e.transferCache,
        };
      }
      let MT = (() => {
        class e {
          constructor(t) {
            this.handler = t;
          }
          request(t, r, o = {}) {
            let i;
            if (t instanceof Sc) i = t;
            else {
              let l, c;
              (l = o.headers instanceof ho ? o.headers : new ho(o.headers)),
                o.params && (c = o.params instanceof zi ? o.params : new zi({ fromObject: o.params })),
                (i = new Sc(t, r, void 0 !== o.body ? o.body : null, {
                  headers: l,
                  context: o.context,
                  params: c,
                  reportProgress: o.reportProgress,
                  responseType: o.responseType || 'json',
                  withCredentials: o.withCredentials,
                  transferCache: o.transferCache,
                }));
            }
            const s = mt(i).pipe(Ea(l => this.handler.handle(l)));
            if (t instanceof Sc || 'events' === o.observe) return s;
            const a = s.pipe(kr(l => l instanceof ys));
            switch (o.observe || 'body') {
              case 'body':
                switch (i.responseType) {
                  case 'arraybuffer':
                    return a.pipe(
                      nt(l => {
                        if (null !== l.body && !(l.body instanceof ArrayBuffer)) throw new Error('Response is not an ArrayBuffer.');
                        return l.body;
                      }),
                    );
                  case 'blob':
                    return a.pipe(
                      nt(l => {
                        if (null !== l.body && !(l.body instanceof Blob)) throw new Error('Response is not a Blob.');
                        return l.body;
                      }),
                    );
                  case 'text':
                    return a.pipe(
                      nt(l => {
                        if (null !== l.body && 'string' != typeof l.body) throw new Error('Response is not a string.');
                        return l.body;
                      }),
                    );
                  default:
                    return a.pipe(nt(l => l.body));
                }
              case 'response':
                return a;
              default:
                throw new Error(`Unreachable: unhandled observe type ${o.observe}}`);
            }
          }
          delete(t, r = {}) {
            return this.request('DELETE', t, r);
          }
          get(t, r = {}) {
            return this.request('GET', t, r);
          }
          head(t, r = {}) {
            return this.request('HEAD', t, r);
          }
          jsonp(t, r) {
            return this.request('JSONP', t, { params: new zi().append(r, 'JSONP_CALLBACK'), observe: 'body', responseType: 'json' });
          }
          options(t, r = {}) {
            return this.request('OPTIONS', t, r);
          }
          patch(t, r, o = {}) {
            return this.request('PATCH', t, Ym(o, r));
          }
          post(t, r, o = {}) {
            return this.request('POST', t, Ym(o, r));
          }
          put(t, r, o = {}) {
            return this.request('PUT', t, Ym(o, r));
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)(dt(af));
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac });
          }
        }
        return e;
      })();
      function xT(e, n) {
        return n(e);
      }
      function I4(e, n) {
        return (t, r) => n.intercept(t, { handle: o => e(o, r) });
      }
      const S4 = new He(''),
        Ac = new He(''),
        RT = new He(''),
        OT = new He('');
      function M4() {
        let e = null;
        return (n, t) => {
          null === e && (e = (ce(S4, { optional: !0 }) ?? []).reduceRight(I4, xT));
          const r = ce(ki),
            o = r.add();
          return e(n, t).pipe(fc(() => r.remove(o)));
        };
      }
      let NT = (() => {
        class e extends af {
          constructor(t, r) {
            super(), (this.backend = t), (this.injector = r), (this.chain = null), (this.pendingTasks = ce(ki));
            const o = ce(OT, { optional: !0 });
            this.backend = o ?? t;
          }
          handle(t) {
            if (null === this.chain) {
              const o = Array.from(new Set([...this.injector.get(Ac), ...this.injector.get(RT, [])]));
              this.chain = o.reduceRight(
                (i, s) =>
                  (function T4(e, n, t) {
                    return (r, o) => Bo(t, () => n(r, i => e(i, o)));
                  })(i, s, this.injector),
                xT,
              );
            }
            const r = this.pendingTasks.add();
            return this.chain(t, o => this.backend.handle(o)).pipe(fc(() => this.pendingTasks.remove(r)));
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)(dt(lf), dt(lr));
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac });
          }
        }
        return e;
      })();
      const N4 = /^\)\]\}',?\n/;
      let PT = (() => {
        class e {
          constructor(t) {
            this.xhrFactory = t;
          }
          handle(t) {
            if ('JSONP' === t.method) throw new O(-2800, !1);
            const r = this.xhrFactory;
            return (r.ɵloadImpl ? fr(r.ɵloadImpl()) : mt(null)).pipe(
              _r(
                () =>
                  new Je(i => {
                    const s = r.build();
                    if (
                      (s.open(t.method, t.urlWithParams),
                      t.withCredentials && (s.withCredentials = !0),
                      t.headers.forEach((E, V) => s.setRequestHeader(E, V.join(','))),
                      t.headers.has('Accept') || s.setRequestHeader('Accept', 'application/json, text/plain, */*'),
                      !t.headers.has('Content-Type'))
                    ) {
                      const E = t.detectContentTypeHeader();
                      null !== E && s.setRequestHeader('Content-Type', E);
                    }
                    if (t.responseType) {
                      const E = t.responseType.toLowerCase();
                      s.responseType = 'json' !== E ? E : 'text';
                    }
                    const a = t.serializeBody();
                    let l = null;
                    const c = () => {
                        if (null !== l) return l;
                        const E = s.statusText || 'OK',
                          V = new ho(s.getAllResponseHeaders()),
                          q =
                            (function k4(e) {
                              return 'responseURL' in e && e.responseURL
                                ? e.responseURL
                                : /^X-Request-URL:/m.test(e.getAllResponseHeaders())
                                  ? e.getResponseHeader('X-Request-URL')
                                  : null;
                            })(s) || t.url;
                        return (l = new uf({ headers: V, status: s.status, statusText: E, url: q })), l;
                      },
                      u = () => {
                        let { headers: E, status: V, statusText: q, url: K } = c(),
                          Ge = null;
                        V !== Mc.NoContent && (Ge = typeof s.response > 'u' ? s.responseText : s.response), 0 === V && (V = Ge ? Mc.Ok : 0);
                        let At = V >= 200 && V < 300;
                        if ('json' === t.responseType && 'string' == typeof Ge) {
                          const Jt = Ge;
                          Ge = Ge.replace(N4, '');
                          try {
                            Ge = '' !== Ge ? JSON.parse(Ge) : null;
                          } catch (En) {
                            (Ge = Jt), At && ((At = !1), (Ge = { error: En, text: Ge }));
                          }
                        }
                        At
                          ? (i.next(new ys({ body: Ge, headers: E, status: V, statusText: q, url: K || void 0 })), i.complete())
                          : i.error(new Pa({ error: Ge, headers: E, status: V, statusText: q, url: K || void 0 }));
                      },
                      d = E => {
                        const { url: V } = c(),
                          q = new Pa({ error: E, status: s.status || 0, statusText: s.statusText || 'Unknown Error', url: V || void 0 });
                        i.error(q);
                      };
                    let g = !1;
                    const m = E => {
                        g || (i.next(c()), (g = !0));
                        let V = { type: Gi.DownloadProgress, loaded: E.loaded };
                        E.lengthComputable && (V.total = E.total),
                          'text' === t.responseType && s.responseText && (V.partialText = s.responseText),
                          i.next(V);
                      },
                      v = E => {
                        let V = { type: Gi.UploadProgress, loaded: E.loaded };
                        E.lengthComputable && (V.total = E.total), i.next(V);
                      };
                    return (
                      s.addEventListener('load', u),
                      s.addEventListener('error', d),
                      s.addEventListener('timeout', d),
                      s.addEventListener('abort', d),
                      t.reportProgress &&
                        (s.addEventListener('progress', m), null !== a && s.upload && s.upload.addEventListener('progress', v)),
                      s.send(a),
                      i.next({ type: Gi.Sent }),
                      () => {
                        s.removeEventListener('error', d),
                          s.removeEventListener('abort', d),
                          s.removeEventListener('load', u),
                          s.removeEventListener('timeout', d),
                          t.reportProgress &&
                            (s.removeEventListener('progress', m), null !== a && s.upload && s.upload.removeEventListener('progress', v)),
                          s.readyState !== s.DONE && s.abort();
                      }
                    );
                  }),
              ),
            );
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)(dt(SI));
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac });
          }
        }
        return e;
      })();
      const Jm = new He(''),
        FT = new He('', { providedIn: 'root', factory: () => 'XSRF-TOKEN' }),
        LT = new He('', { providedIn: 'root', factory: () => 'X-XSRF-TOKEN' });
      class $T {}
      let L4 = (() => {
        class e {
          constructor(t, r, o) {
            (this.doc = t),
              (this.platform = r),
              (this.cookieName = o),
              (this.lastCookieString = ''),
              (this.lastToken = null),
              (this.parseCount = 0);
          }
          getToken() {
            if ('server' === this.platform) return null;
            const t = this.doc.cookie || '';
            return (
              t !== this.lastCookieString && (this.parseCount++, (this.lastToken = vI(t, this.cookieName)), (this.lastCookieString = t)),
              this.lastToken
            );
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)(dt(jr), dt(Xo), dt(FT));
            };
          }
          static {
            this.ɵprov = B({ token: e, factory: e.ɵfac });
          }
        }
        return e;
      })();
      function $4(e, n) {
        const t = e.url.toLowerCase();
        if (!ce(Jm) || 'GET' === e.method || 'HEAD' === e.method || t.startsWith('http://') || t.startsWith('https://')) return n(e);
        const r = ce($T).getToken(),
          o = ce(LT);
        return null != r && !e.headers.has(o) && (e = e.clone({ headers: e.headers.set(o, r) })), n(e);
      }
      var Wi = (function (e) {
        return (
          (e[(e.Interceptors = 0)] = 'Interceptors'),
          (e[(e.LegacyInterceptors = 1)] = 'LegacyInterceptors'),
          (e[(e.CustomXsrfConfiguration = 2)] = 'CustomXsrfConfiguration'),
          (e[(e.NoXsrfProtection = 3)] = 'NoXsrfProtection'),
          (e[(e.JsonpSupport = 4)] = 'JsonpSupport'),
          (e[(e.RequestsMadeViaParent = 5)] = 'RequestsMadeViaParent'),
          (e[(e.Fetch = 6)] = 'Fetch'),
          e
        );
      })(Wi || {});
      function Ds(e, n) {
        return { ɵkind: e, ɵproviders: n };
      }
      function V4(...e) {
        const n = [
          MT,
          PT,
          NT,
          { provide: af, useExisting: NT },
          { provide: lf, useExisting: PT },
          { provide: Ac, useValue: $4, multi: !0 },
          { provide: Jm, useValue: !0 },
          { provide: $T, useClass: L4 },
        ];
        for (const t of e) n.push(...t.ɵproviders);
        return Ts(n);
      }
      const VT = new He('');
      let j4 = (() => {
        class e {
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵmod = Vo({ type: e });
          }
          static {
            this.ɵinj = un({
              providers: [
                V4(
                  Ds(Wi.LegacyInterceptors, [
                    { provide: VT, useFactory: M4 },
                    { provide: Ac, useExisting: VT, multi: !0 },
                  ]),
                ),
              ],
            });
          }
        }
        return e;
      })();
      class q4 {
        constructor() {
          this.m = new Map();
        }
        reset(n) {
          this.m = new Map(Object.entries(n));
        }
        get(n, t) {
          const r = this.m.get(n);
          return void 0 !== r ? r : t;
        }
        getBoolean(n, t = !1) {
          const r = this.m.get(n);
          return void 0 === r ? t : 'string' == typeof r ? 'true' === r : !!r;
        }
        getNumber(n, t) {
          const r = parseFloat(this.m.get(n));
          return isNaN(r) ? (void 0 !== t ? t : NaN) : r;
        }
        set(n, t) {
          this.m.set(n, t);
        }
      }
      const qi = new q4(),
        ZT = e => KT(e),
        KT = (e = window) => {
          if (typeof e > 'u') return [];
          e.Ionic = e.Ionic || {};
          let n = e.Ionic.platforms;
          return null == n && ((n = e.Ionic.platforms = Q4(e)), n.forEach(t => e.document.documentElement.classList.add(`plt-${t}`))), n;
        },
        Q4 = e => {
          const n = qi.get('platform');
          return Object.keys(nS).filter(t => {
            const r = n?.[t];
            return 'function' == typeof r ? r(e) : nS[t](e);
          });
        },
        ev = e => !!(_s(e, /iPad/i) || (_s(e, /Macintosh/i) && ff(e))),
        QT = e => _s(e, /android|sink/i),
        ff = e => l3(e, '(any-pointer:coarse)'),
        JT = e => eS(e) || tS(e),
        eS = e => !!(e.cordova || e.phonegap || e.PhoneGap),
        tS = e => {
          const n = e.Capacitor;
          return !!n?.isNative;
        },
        _s = (e, n) => n.test(e.navigator.userAgent),
        l3 = (e, n) => {
          var t;
          return null === (t = e.matchMedia) || void 0 === t ? void 0 : t.call(e, n).matches;
        },
        nS = {
          ipad: ev,
          iphone: e => _s(e, /iPhone/i),
          ios: e => _s(e, /iPhone|iPod/i) || ev(e),
          android: QT,
          phablet: e => {
            const n = e.innerWidth,
              t = e.innerHeight,
              r = Math.min(n, t),
              o = Math.max(n, t);
            return r > 390 && r < 520 && o > 620 && o < 800;
          },
          tablet: e => {
            const n = e.innerWidth,
              t = e.innerHeight,
              r = Math.min(n, t),
              o = Math.max(n, t);
            return ev(e) || (e => QT(e) && !_s(e, /mobile/i))(e) || (r > 460 && r < 820 && o > 780 && o < 1400);
          },
          cordova: eS,
          capacitor: tS,
          electron: e => _s(e, /electron/i),
          pwa: e => {
            var n;
            return !!(
              (null !== (n = e.matchMedia) && void 0 !== n && n.call(e, '(display-mode: standalone)').matches) ||
              e.navigator.standalone
            );
          },
          mobile: ff,
          mobileweb: e => ff(e) && !JT(e),
          desktop: e => !ff(e),
          hybrid: JT,
        };
      var xc = ne(6031),
        c3 = ne(1656);
      const u3 = ['addListener', 'removeListener'],
        d3 = ['addEventListener', 'removeEventListener'],
        f3 = ['on', 'off'];
      function La(e, n, t, r) {
        if ((yt(t) && ((r = t), (t = void 0)), r)) return La(e, n, t).pipe(Dm(r));
        const [o, i] = (function g3(e) {
          return yt(e.addEventListener) && yt(e.removeEventListener);
        })(e)
          ? d3.map(s => a => e[s](n, a, t))
          : (function h3(e) {
                return yt(e.addListener) && yt(e.removeListener);
              })(e)
            ? u3.map(rS(e, n))
            : (function p3(e) {
                  return yt(e.on) && yt(e.off);
                })(e)
              ? f3.map(rS(e, n))
              : [];
        if (!o && vm(e)) return Dr(s => La(s, n, t))(no(e));
        if (!o) throw new TypeError('Invalid event target');
        return new Je(s => {
          const a = (...l) => s.next(1 < l.length ? l : l[0]);
          return o(a), () => i(a);
        });
      }
      function rS(e, n) {
        return t => r => e[t](n, r);
      }
      function v3(e, n) {
        return e === n;
      }
      function Xi(e) {
        return null == e || (('string' == typeof e || Array.isArray(e)) && 0 === e.length);
      }
      const Cr = new He('');
      function hf(e) {
        return null;
      }
      function QS(e) {
        return 'number' == typeof e ? e : parseFloat(e);
      }
      Promise.resolve(), Promise.resolve();
      let bs = (() => {
        class e {
          constructor() {
            this._validator = hf;
          }
          ngOnChanges(t) {
            if (this.inputName in t) {
              const r = this.normalizeInput(t[this.inputName].currentValue);
              (this._enabled = this.enabled(r)),
                (this._validator = this._enabled ? this.createValidator(r) : hf),
                this._onChange && this._onChange();
            }
          }
          validate(t) {
            return this._validator(t);
          }
          registerOnValidatorChange(t) {
            this._onChange = t;
          }
          enabled(t) {
            return null != t;
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵdir = ct({ type: e, features: [Kr] });
          }
        }
        return e;
      })();
      const az = { provide: Cr, useExisting: ke(() => bv), multi: !0 };
      let bv = (() => {
        class e extends bs {
          constructor() {
            super(...arguments),
              (this.inputName = 'max'),
              (this.normalizeInput = t => QS(t)),
              (this.createValidator = t =>
                (function lS(e) {
                  return n => {
                    if (Xi(n.value) || Xi(e)) return null;
                    const t = parseFloat(n.value);
                    return !isNaN(t) && t > e ? { max: { max: e, actual: n.value } } : null;
                  };
                })(t));
          }
          static {
            this.ɵfac = (() => {
              let t;
              return function (o) {
                return (t || (t = Gn(e)))(o || e);
              };
            })();
          }
          static {
            this.ɵdir = ct({
              type: e,
              selectors: [
                ['input', 'type', 'number', 'max', '', 'formControlName', ''],
                ['input', 'type', 'number', 'max', '', 'formControl', ''],
                ['input', 'type', 'number', 'max', '', 'ngModel', ''],
              ],
              hostVars: 1,
              hostBindings: function (r, o) {
                2 & r && vo('max', o._enabled ? o.max : null);
              },
              inputs: { max: 'max' },
              features: [Dn([az]), zt],
            });
          }
        }
        return e;
      })();
      const lz = { provide: Cr, useExisting: ke(() => Ev), multi: !0 };
      let Ev = (() => {
          class e extends bs {
            constructor() {
              super(...arguments),
                (this.inputName = 'min'),
                (this.normalizeInput = t => QS(t)),
                (this.createValidator = t =>
                  (function aS(e) {
                    return n => {
                      if (Xi(n.value) || Xi(e)) return null;
                      const t = parseFloat(n.value);
                      return !isNaN(t) && t < e ? { min: { min: e, actual: n.value } } : null;
                    };
                  })(t));
            }
            static {
              this.ɵfac = (() => {
                let t;
                return function (o) {
                  return (t || (t = Gn(e)))(o || e);
                };
              })();
            }
            static {
              this.ɵdir = ct({
                type: e,
                selectors: [
                  ['input', 'type', 'number', 'min', '', 'formControlName', ''],
                  ['input', 'type', 'number', 'min', '', 'formControl', ''],
                  ['input', 'type', 'number', 'min', '', 'ngModel', ''],
                ],
                hostVars: 1,
                hostBindings: function (r, o) {
                  2 & r && vo('min', o._enabled ? o.min : null);
                },
                inputs: { min: 'min' },
                features: [Dn([lz]), zt],
              });
            }
          }
          return e;
        })(),
        vz = (() => {
          class e {
            constructor(t, r) {
              (this.doc = t),
                (this.backButton = new _t()),
                (this.keyboardDidShow = new _t()),
                (this.keyboardDidHide = new _t()),
                (this.pause = new _t()),
                (this.resume = new _t()),
                (this.resize = new _t()),
                r.run(() => {
                  let o;
                  (this.win = t.defaultView),
                    (this.backButton.subscribeWithPriority = function (i, s) {
                      return this.subscribe(a => a.register(i, l => r.run(() => s(l))));
                    }),
                    Va(this.pause, t, 'pause', r),
                    Va(this.resume, t, 'resume', r),
                    Va(this.backButton, t, 'ionBackButton', r),
                    Va(this.resize, this.win, 'resize', r),
                    Va(this.keyboardDidShow, this.win, 'ionKeyboardDidShow', r),
                    Va(this.keyboardDidHide, this.win, 'ionKeyboardDidHide', r),
                    (this._readyPromise = new Promise(i => {
                      o = i;
                    })),
                    this.win?.cordova
                      ? t.addEventListener(
                          'deviceready',
                          () => {
                            o('cordova');
                          },
                          { once: !0 },
                        )
                      : o('dom');
                });
            }
            is(t) {
              return ((e, n) => ('string' == typeof e && ((n = e), (e = void 0)), ZT(e).includes(n)))(this.win, t);
            }
            platforms() {
              return ZT(this.win);
            }
            ready() {
              return this._readyPromise;
            }
            get isRTL() {
              return 'rtl' === this.doc.dir;
            }
            getQueryParam(t) {
              return yz(this.win.location.href, t);
            }
            isLandscape() {
              return !this.isPortrait();
            }
            isPortrait() {
              return this.win.matchMedia?.('(orientation: portrait)').matches;
            }
            testUserAgent(t) {
              const r = this.win.navigator;
              return !!(r?.userAgent && r.userAgent.indexOf(t) >= 0);
            }
            url() {
              return this.win.location.href;
            }
            width() {
              return this.win.innerWidth;
            }
            height() {
              return this.win.innerHeight;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(dt(jr), dt(se));
            }),
            (e.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })();
      const yz = (e, n) => {
          n = n.replace(/[[\]\\]/g, '\\$&');
          const r = new RegExp('[\\?&]' + n + '=([^&#]*)').exec(e);
          return r ? decodeURIComponent(r[1].replace(/\+/g, ' ')) : null;
        },
        Va = (e, n, t, r) => {
          n &&
            n.addEventListener(t, o => {
              r.run(() => {
                const i = o?.detail;
                e.next(i);
              });
            });
        };
      let Ba = (() => {
        class e {
          constructor(t, r, o, i) {
            (this.location = r),
              (this.serializer = o),
              (this.router = i),
              (this.direction = oM),
              (this.animated = iM),
              (this.guessDirection = 'forward'),
              (this.lastNavId = -1),
              i &&
                i.events.subscribe(s => {
                  if (s instanceof Dc) {
                    const a = s.restoredState ? s.restoredState.navigationId : s.id;
                    (this.guessDirection = a < this.lastNavId ? 'back' : 'forward'),
                      (this.guessAnimation = s.restoredState ? void 0 : this.guessDirection),
                      (this.lastNavId = 'forward' === this.guessDirection ? s.id : a);
                  }
                }),
              t.backButton.subscribeWithPriority(0, s => {
                this.pop(), s();
              });
          }
          navigateForward(t, r = {}) {
            return this.setDirection('forward', r.animated, r.animationDirection, r.animation), this.navigate(t, r);
          }
          navigateBack(t, r = {}) {
            return this.setDirection('back', r.animated, r.animationDirection, r.animation), this.navigate(t, r);
          }
          navigateRoot(t, r = {}) {
            return this.setDirection('root', r.animated, r.animationDirection, r.animation), this.navigate(t, r);
          }
          back(t = { animated: !0, animationDirection: 'back' }) {
            return this.setDirection('back', t.animated, t.animationDirection, t.animation), this.location.back();
          }
          pop() {
            var t = this;
            return (0, de.A)(function* () {
              let r = t.topOutlet;
              for (; r; ) {
                if (yield r.pop()) return !0;
                r = r.parentOutlet;
              }
              return !1;
            })();
          }
          setDirection(t, r, o, i) {
            (this.direction = t), (this.animated = Dz(t, r, o)), (this.animationBuilder = i);
          }
          setTopOutlet(t) {
            this.topOutlet = t;
          }
          consumeTransition() {
            let r,
              t = 'root';
            const o = this.animationBuilder;
            return (
              'auto' === this.direction
                ? ((t = this.guessDirection), (r = this.guessAnimation))
                : ((r = this.animated), (t = this.direction)),
              (this.direction = oM),
              (this.animated = iM),
              (this.animationBuilder = void 0),
              { direction: t, animation: r, animationBuilder: o }
            );
          }
          navigate(t, r) {
            if (Array.isArray(t)) return this.router.navigate(t, r);
            {
              const o = this.serializer.parse(t.toString());
              return (
                void 0 !== r.queryParams && (o.queryParams = { ...r.queryParams }),
                void 0 !== r.fragment && (o.fragment = r.fragment),
                this.router.navigateByUrl(o, r)
              );
            }
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(dt(vz), dt(ji), dt(ms), dt(Ir, 8));
          }),
          (e.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const Dz = (e, n, t) => {
          if (!1 !== n) {
            if (void 0 !== t) return t;
            if ('forward' === e || 'back' === e) return e;
            if ('root' === e && !0 === n) return 'forward';
          }
        },
        oM = 'auto',
        iM = void 0;
      let Iv = (() => {
        class e {
          get(t, r) {
            const o = Tv();
            return o ? o.get(t, r) : null;
          }
          getBoolean(t, r) {
            const o = Tv();
            return !!o && o.getBoolean(t, r);
          }
          getNumber(t, r) {
            const o = Tv();
            return o ? o.getNumber(t, r) : 0;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const sM = new He('USERCONFIG'),
        Tv = () => {
          if (typeof window < 'u') {
            const e = window.Ionic;
            if (e?.config) return e.config;
          }
          return null;
        };
      class aM {
        constructor(n = {}) {
          this.data = n;
        }
        get(n) {
          return this.data[n];
        }
      }
      let Fc = (() => {
        class e {
          constructor() {
            (this.zone = ce(se)), (this.applicationRef = ce(ei));
          }
          create(t, r, o) {
            return new _z(t, r, this.applicationRef, this.zone, o);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = B({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class _z {
        constructor(n, t, r, o, i) {
          (this.environmentInjector = n),
            (this.injector = t),
            (this.applicationRef = r),
            (this.zone = o),
            (this.elementReferenceKey = i),
            (this.elRefMap = new WeakMap()),
            (this.elEventsMap = new WeakMap());
        }
        attachViewToDom(n, t, r, o) {
          return this.zone.run(
            () =>
              new Promise(i => {
                const s = { ...r };
                void 0 !== this.elementReferenceKey && (s[this.elementReferenceKey] = n),
                  i(
                    Cz(
                      this.zone,
                      this.environmentInjector,
                      this.injector,
                      this.applicationRef,
                      this.elRefMap,
                      this.elEventsMap,
                      n,
                      t,
                      s,
                      o,
                      this.elementReferenceKey,
                    ),
                  );
              }),
          );
        }
        removeViewFromDom(n, t) {
          return this.zone.run(
            () =>
              new Promise(r => {
                const o = this.elRefMap.get(t);
                if (o) {
                  o.destroy(), this.elRefMap.delete(t);
                  const i = this.elEventsMap.get(t);
                  i && (i(), this.elEventsMap.delete(t));
                }
                r();
              }),
          );
        }
      }
      const Cz = (e, n, t, r, o, i, s, a, l, c, u) => {
          const g = (function vV(e, n) {
              const t = Qt(e),
                r = n.elementInjector || Qc();
              return new Fl(t).create(r, n.projectableNodes, n.hostElement, n.environmentInjector);
            })(a, { environmentInjector: n, elementInjector: Nn.create({ providers: Ez(l), parent: t }) }),
            m = g.instance,
            v = g.location.nativeElement;
          if (
            (l &&
              (u &&
                void 0 !== m[u] &&
                console.error(
                  `[Ionic Error]: ${u} is a reserved property when using ${s.tagName.toLowerCase()}. Rename or remove the "${u}" property from ${a.name}.`,
                ),
              Object.assign(m, l)),
            c)
          )
            for (const V of c) v.classList.add(V);
          const E = lM(e, m, v);
          return s.appendChild(v), r.attachView(g.hostView), o.set(v, g), i.set(v, E), v;
        },
        bz = [xc.L, xc.a, xc.b, xc.c, xc.d],
        lM = (e, n, t) =>
          e.run(() => {
            const r = bz
              .filter(o => 'function' == typeof n[o])
              .map(o => {
                const i = s => n[o](s.detail);
                return t.addEventListener(o, i), () => t.removeEventListener(o, i);
              });
            return () => r.forEach(o => o());
          }),
        cM = new He('NavParamsToken'),
        Ez = e => [
          { provide: cM, useValue: e },
          { provide: aM, useFactory: wz, deps: [cM] },
        ],
        wz = e => new aM(e),
        uM = (e, n) => ((e = e.filter(t => t.stackId !== n.stackId)).push(n), e),
        Mv = (e, n) => {
          const t = e.createUrlTree(['.'], { relativeTo: n });
          return e.serializeUrl(t);
        },
        dM = (e, n) => !n || e.stackId !== n.stackId,
        Fz = (e, n) => {
          if (!e) return;
          const t = fM(n);
          for (let r = 0; r < t.length; r++) {
            if (r >= e.length) return t[r];
            if (t[r] !== e[r]) return;
          }
        },
        fM = e =>
          e
            .split('/')
            .map(n => n.trim())
            .filter(n => '' !== n),
        hM = e => {
          e && (e.ref.destroy(), e.unlistenEvents());
        };
      class Lz {
        constructor(n, t, r, o, i, s) {
          (this.containerEl = t),
            (this.router = r),
            (this.navCtrl = o),
            (this.zone = i),
            (this.location = s),
            (this.views = []),
            (this.skipTransition = !1),
            (this.nextId = 0),
            (this.tabsPrefix = void 0 !== n ? fM(n) : void 0);
        }
        createView(n, t) {
          const r = Mv(this.router, t),
            o = n?.location?.nativeElement,
            i = lM(this.zone, n.instance, o);
          return { id: this.nextId++, stackId: Fz(this.tabsPrefix, r), unlistenEvents: i, element: o, ref: n, url: r };
        }
        getExistingView(n) {
          const t = Mv(this.router, n),
            r = this.views.find(o => o.url === t);
          return r && r.ref.changeDetectorRef.reattach(), r;
        }
        setActive(n) {
          const t = this.navCtrl.consumeTransition();
          let { direction: r, animation: o, animationBuilder: i } = t;
          const s = this.activeView,
            a = dM(n, s);
          a && ((r = 'back'), (o = void 0));
          const l = this.views.slice();
          let c;
          const u = this.router;
          u.getCurrentNavigation ? (c = u.getCurrentNavigation()) : u.navigations?.value && (c = u.navigations.value),
            c?.extras?.replaceUrl && this.views.length > 0 && this.views.splice(-1, 1);
          const d = this.views.includes(n),
            g = this.insertView(n, r);
          d || n.ref.changeDetectorRef.detectChanges();
          const m = n.animationBuilder;
          return (
            void 0 === i && 'back' === r && !a && void 0 !== m && (i = m),
            s && (s.animationBuilder = i),
            this.zone.runOutsideAngular(() =>
              this.wait(
                () => (
                  s && s.ref.changeDetectorRef.detach(),
                  n.ref.changeDetectorRef.reattach(),
                  this.transition(n, s, o, this.canGoBack(1), !1, i)
                    .then(() => $z(n, g, l, this.location, this.zone))
                    .then(() => ({ enteringView: n, direction: r, animation: o, tabSwitch: a }))
                ),
              ),
            )
          );
        }
        canGoBack(n, t = this.getActiveStackId()) {
          return this.getStack(t).length > n;
        }
        pop(n, t = this.getActiveStackId()) {
          return this.zone.run(() => {
            const r = this.getStack(t);
            if (r.length <= n) return Promise.resolve(!1);
            const o = r[r.length - n - 1];
            let i = o.url;
            const s = o.savedData;
            if (s) {
              const l = s.get('primary');
              l?.route?._routerState?.snapshot.url && (i = l.route._routerState.snapshot.url);
            }
            const { animationBuilder: a } = this.navCtrl.consumeTransition();
            return this.navCtrl.navigateBack(i, { ...o.savedExtras, animation: a }).then(() => !0);
          });
        }
        startBackTransition() {
          const n = this.activeView;
          if (n) {
            const t = this.getStack(n.stackId),
              r = t[t.length - 2],
              o = r.animationBuilder;
            return this.wait(() => this.transition(r, n, 'back', this.canGoBack(2), !0, o));
          }
          return Promise.resolve();
        }
        endBackTransition(n) {
          n
            ? ((this.skipTransition = !0), this.pop(1))
            : this.activeView && pM(this.activeView, this.views, this.views, this.location, this.zone);
        }
        getLastUrl(n) {
          const t = this.getStack(n);
          return t.length > 0 ? t[t.length - 1] : void 0;
        }
        getRootUrl(n) {
          const t = this.getStack(n);
          return t.length > 0 ? t[0] : void 0;
        }
        getActiveStackId() {
          return this.activeView ? this.activeView.stackId : void 0;
        }
        getActiveView() {
          return this.activeView;
        }
        hasRunningTask() {
          return void 0 !== this.runningTask;
        }
        destroy() {
          (this.containerEl = void 0), this.views.forEach(hM), (this.activeView = void 0), (this.views = []);
        }
        getStack(n) {
          return this.views.filter(t => t.stackId === n);
        }
        insertView(n, t) {
          return (
            (this.activeView = n),
            (this.views = ((e, n, t) =>
              'root' === t
                ? uM(e, n)
                : 'forward' === t
                  ? ((e, n) => (e.indexOf(n) >= 0 ? (e = e.filter(r => r.stackId !== n.stackId || r.id <= n.id)) : e.push(n), e))(e, n)
                  : ((e, n) => (e.indexOf(n) >= 0 ? e.filter(r => r.stackId !== n.stackId || r.id <= n.id) : uM(e, n)))(e, n))(
              this.views,
              n,
              t,
            )),
            this.views.slice()
          );
        }
        transition(n, t, r, o, i, s) {
          if (this.skipTransition) return (this.skipTransition = !1), Promise.resolve(!1);
          if (t === n) return Promise.resolve(!1);
          const a = n ? n.element : void 0,
            l = t ? t.element : void 0,
            c = this.containerEl;
          return a &&
            a !== l &&
            (a.classList.add('ion-page'), a.classList.add('ion-page-invisible'), a.parentElement !== c && c.appendChild(a), c.commit)
            ? c.commit(a, l, {
                duration: void 0 === r ? 0 : void 0,
                direction: r,
                showGoBack: o,
                progressAnimation: i,
                animationBuilder: s,
              })
            : Promise.resolve(!1);
        }
        wait(n) {
          var t = this;
          return (0, de.A)(function* () {
            void 0 !== t.runningTask && (yield t.runningTask, (t.runningTask = void 0));
            const r = (t.runningTask = n());
            return r.finally(() => (t.runningTask = void 0)), r;
          })();
        }
      }
      const $z = (e, n, t, r, o) =>
          'function' == typeof requestAnimationFrame
            ? new Promise(i => {
                requestAnimationFrame(() => {
                  pM(e, n, t, r, o), i();
                });
              })
            : Promise.resolve(),
        pM = (e, n, t, r, o) => {
          o.run(() => t.filter(i => !n.includes(i)).forEach(hM)),
            n.forEach(i => {
              const a = r.path().split('?')[0].split('#')[0];
              if (i !== e && i.url !== a) {
                const l = i.element;
                l.setAttribute('aria-hidden', 'true'), l.classList.add('ion-page-hidden'), i.ref.changeDetectorRef.detach();
              }
            });
        };
      let gM = (() => {
        class e {
          constructor(t, r, o, i, s, a, l, c) {
            (this.parentOutlet = c),
              (this.activatedView = null),
              (this.proxyMap = new WeakMap()),
              (this.currentActivatedRoute$ = new wt(null)),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.name = Wt),
              (this.stackWillChange = new xn()),
              (this.stackDidChange = new xn()),
              (this.activateEvents = new xn()),
              (this.deactivateEvents = new xn()),
              (this.parentContexts = ce(vs)),
              (this.location = ce(go)),
              (this.environmentInjector = ce(lr)),
              (this.inputBinder = ce(mM, { optional: !0 })),
              (this.supportsBindingToComponentInputs = !0),
              (this.config = ce(Iv)),
              (this.navCtrl = ce(Ba)),
              (this.nativeEl = i.nativeElement),
              (this.name = t || Wt),
              (this.tabsPrefix = 'true' === r ? Mv(s, l) : void 0),
              (this.stackCtrl = new Lz(this.tabsPrefix, this.nativeEl, s, this.navCtrl, a, o)),
              this.parentContexts.onChildOutletCreated(this.name, this);
          }
          get activatedComponentRef() {
            return this.activated;
          }
          set animation(t) {
            this.nativeEl.animation = t;
          }
          set animated(t) {
            this.nativeEl.animated = t;
          }
          set swipeGesture(t) {
            (this._swipeGesture = t),
              (this.nativeEl.swipeHandler = t
                ? {
                    canStart: () => this.stackCtrl.canGoBack(1) && !this.stackCtrl.hasRunningTask(),
                    onStart: () => this.stackCtrl.startBackTransition(),
                    onEnd: r => this.stackCtrl.endBackTransition(r),
                  }
                : void 0);
          }
          ngOnDestroy() {
            this.stackCtrl.destroy(), this.inputBinder?.unsubscribeFromRouteData(this);
          }
          getContext() {
            return this.parentContexts.getContext(this.name);
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if (!this.activated) {
              const t = this.getContext();
              t?.route && this.activateWith(t.route, t.injector);
            }
            new Promise(t => (0, c3.c)(this.nativeEl, t)).then(() => {
              void 0 === this._swipeGesture &&
                (this.swipeGesture = this.config.getBoolean('swipeBackEnabled', 'ios' === this.nativeEl.mode));
            });
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
          }
          detach() {
            throw new Error('incompatible reuse strategy');
          }
          attach(t, r) {
            throw new Error('incompatible reuse strategy');
          }
          deactivate() {
            if (this.activated) {
              if (this.activatedView) {
                const r = this.getContext();
                this.activatedView.savedData = new Map(r.children.contexts);
                const o = this.activatedView.savedData.get('primary');
                if ((o && r.route && (o.route = { ...r.route }), (this.activatedView.savedExtras = {}), r.route)) {
                  const i = r.route.snapshot;
                  (this.activatedView.savedExtras.queryParams = i.queryParams), (this.activatedView.savedExtras.fragment = i.fragment);
                }
              }
              const t = this.component;
              (this.activatedView = null), (this.activated = null), (this._activatedRoute = null), this.deactivateEvents.emit(t);
            }
          }
          activateWith(t, r) {
            if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
            this._activatedRoute = t;
            let o,
              i = this.stackCtrl.getExistingView(t);
            if (i) {
              o = this.activated = i.ref;
              const a = i.savedData;
              a && (this.getContext().children.contexts = a), this.updateActivatedRouteProxy(o.instance, t);
            } else {
              const a = t._futureSnapshot,
                l = this.parentContexts.getOrCreateContext(this.name).children,
                c = new wt(null),
                u = this.createActivatedRouteProxy(c, t),
                d = new Vz(u, l, this.location.injector);
              (o = this.activated =
                this.location.createComponent(a.routeConfig.component ?? a.component, {
                  index: this.location.length,
                  injector: d,
                  environmentInjector: r ?? this.environmentInjector,
                })),
                c.next(o.instance),
                (i = this.stackCtrl.createView(this.activated, t)),
                this.proxyMap.set(o.instance, u),
                this.currentActivatedRoute$.next({ component: o.instance, activatedRoute: t });
            }
            this.inputBinder?.bindActivatedRouteToOutletComponent(this), (this.activatedView = i), this.navCtrl.setTopOutlet(this);
            const s = this.stackCtrl.getActiveView();
            this.stackWillChange.emit({ enteringView: i, tabSwitch: dM(i, s) }),
              this.stackCtrl.setActive(i).then(a => {
                this.activateEvents.emit(o.instance), this.stackDidChange.emit(a);
              });
          }
          canGoBack(t = 1, r) {
            return this.stackCtrl.canGoBack(t, r);
          }
          pop(t = 1, r) {
            return this.stackCtrl.pop(t, r);
          }
          getLastUrl(t) {
            const r = this.stackCtrl.getLastUrl(t);
            return r ? r.url : void 0;
          }
          getLastRouteView(t) {
            return this.stackCtrl.getLastUrl(t);
          }
          getRootView(t) {
            return this.stackCtrl.getRootUrl(t);
          }
          getActiveStackId() {
            return this.stackCtrl.getActiveStackId();
          }
          createActivatedRouteProxy(t, r) {
            const o = new oi();
            return (
              (o._futureSnapshot = r._futureSnapshot),
              (o._routerState = r._routerState),
              (o.snapshot = r.snapshot),
              (o.outlet = r.outlet),
              (o.component = r.component),
              (o._paramMap = this.proxyObservable(t, 'paramMap')),
              (o._queryParamMap = this.proxyObservable(t, 'queryParamMap')),
              (o.url = this.proxyObservable(t, 'url')),
              (o.params = this.proxyObservable(t, 'params')),
              (o.queryParams = this.proxyObservable(t, 'queryParams')),
              (o.fragment = this.proxyObservable(t, 'fragment')),
              (o.data = this.proxyObservable(t, 'data')),
              o
            );
          }
          proxyObservable(t, r) {
            return t.pipe(
              kr(o => !!o),
              _r(o =>
                this.currentActivatedRoute$.pipe(
                  kr(i => null !== i && i.component === o),
                  _r(i => i && i.activatedRoute[r]),
                  (function m3(e, n = rt) {
                    return (
                      (e = e ?? v3),
                      Le((t, r) => {
                        let o,
                          i = !0;
                        t.subscribe(
                          Ce(r, s => {
                            const a = n(s);
                            (i || !e(o, a)) && ((i = !1), (o = a), r.next(s));
                          }),
                        );
                      })
                    );
                  })(),
                ),
              ),
            );
          }
          updateActivatedRouteProxy(t, r) {
            const o = this.proxyMap.get(t);
            if (!o) throw new Error('Could not find activated route proxy for view');
            (o._futureSnapshot = r._futureSnapshot),
              (o._routerState = r._routerState),
              (o.snapshot = r.snapshot),
              (o.outlet = r.outlet),
              (o.component = r.component),
              this.currentActivatedRoute$.next({ component: t, activatedRoute: r });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(fi('name'), fi('tabs'), h(ji), h(ge), h(Ir), h(se), h(oi), h(e, 12));
          }),
          (e.ɵdir = ct({
            type: e,
            selectors: [['ion-router-outlet']],
            inputs: { animated: 'animated', animation: 'animation', mode: 'mode', swipeGesture: 'swipeGesture', name: 'name' },
            outputs: {
              stackWillChange: 'stackWillChange',
              stackDidChange: 'stackDidChange',
              activateEvents: 'activate',
              deactivateEvents: 'deactivate',
            },
            exportAs: ['outlet'],
          })),
          e
        );
      })();
      class Vz {
        constructor(n, t, r) {
          (this.route = n), (this.childContexts = t), (this.parent = r);
        }
        get(n, t) {
          return n === oi ? this.route : n === vs ? this.childContexts : this.parent.get(n, t);
        }
      }
      const mM = new He('');
      let Bz = (() => {
        class e {
          constructor() {
            this.outletDataSubscriptions = new Map();
          }
          bindActivatedRouteToOutletComponent(t) {
            this.unsubscribeFromRouteData(t), this.subscribeToRouteData(t);
          }
          unsubscribeFromRouteData(t) {
            this.outletDataSubscriptions.get(t)?.unsubscribe(), this.outletDataSubscriptions.delete(t);
          }
          subscribeToRouteData(t) {
            const { activatedRoute: r } = t,
              o = Ud([r.queryParams, r.params, r.data])
                .pipe(_r(([i, s, a], l) => ((a = { ...i, ...s, ...a }), 0 === l ? mt(a) : Promise.resolve(a))))
                .subscribe(i => {
                  if (!t.isActivated || !t.activatedComponentRef || t.activatedRoute !== r || null === r.component)
                    return void this.unsubscribeFromRouteData(t);
                  const s = rI(r.component);
                  if (s) for (const { templateName: a } of s.inputs) t.activatedComponentRef.setInput(a, i[a]);
                  else this.unsubscribeFromRouteData(t);
                });
            this.outletDataSubscriptions.set(t, o);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = B({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function Uz(e) {
        return e?.componentInputBindingEnabled ? new Bz() : null;
      }
      const vM = e =>
        'function' == typeof __zone_symbol__requestAnimationFrame
          ? __zone_symbol__requestAnimationFrame(e)
          : 'function' == typeof requestAnimationFrame
            ? requestAnimationFrame(e)
            : setTimeout(e);
      class Jz {
        shouldDetach(n) {
          return !1;
        }
        shouldAttach(n) {
          return !1;
        }
        store(n, t) {}
        retrieve(n) {
          return null;
        }
        shouldReuseRoute(n, t) {
          if (n.routeConfig !== t.routeConfig) return !1;
          const r = n.params,
            o = t.params,
            i = Object.keys(r),
            s = Object.keys(o);
          if (i.length !== s.length) return !1;
          for (const a of i) if (o[a] !== r[a]) return !1;
          return !0;
        }
      }
      class yM {
        constructor(n) {
          this.ctrl = n;
        }
        create(n) {
          return this.ctrl.create(n || {});
        }
        dismiss(n, t, r) {
          return this.ctrl.dismiss(n, t, r);
        }
        getTop() {
          return this.ctrl.getTop();
        }
      }
      ne(3503), ne(7555), ne(4569), ne(2942), ne(405);
      var e6 = ne(611),
        t6 = ne(464),
        DM = (ne(5384), ne(5516)),
        n6 = (ne(8476), ne(4363));
      ne(8221), ne(3113);
      const o6 = e6.i,
        i6 = (function () {
          var e = (0, de.A)(function* (n, t) {
            if (!(typeof window > 'u'))
              return (
                yield o6(),
                (0, n6.b)(
                  JSON.parse(
                    '[["ion-menu_3",[[33,"ion-menu-button",{"color":[513],"disabled":[4],"menu":[1],"autoHide":[4,"auto-hide"],"type":[1],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]],[33,"ion-menu",{"contentId":[513,"content-id"],"menuId":[513,"menu-id"],"type":[1025],"disabled":[1028],"side":[513],"swipeGesture":[4,"swipe-gesture"],"maxEdgeStart":[2,"max-edge-start"],"isPaneVisible":[32],"isEndSide":[32],"isOpen":[64],"isActive":[64],"open":[64],"close":[64],"toggle":[64],"setOpen":[64]},[[16,"ionSplitPaneVisible","onSplitPaneChanged"],[2,"click","onBackdropClick"]],{"type":["typeChanged"],"disabled":["disabledChanged"],"side":["sideChanged"],"swipeGesture":["swipeGestureChanged"]}],[1,"ion-menu-toggle",{"menu":[1],"autoHide":[4,"auto-hide"],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]]]],["ion-fab_3",[[33,"ion-fab-button",{"color":[513],"activated":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1],"show":[4],"translucent":[4],"type":[1],"size":[1],"closeIcon":[1,"close-icon"]}],[1,"ion-fab",{"horizontal":[1],"vertical":[1],"edge":[4],"activated":[1028],"close":[64],"toggle":[64]},null,{"activated":["activatedChanged"]}],[1,"ion-fab-list",{"activated":[4],"side":[1]},null,{"activated":["activatedChanged"]}]]],["ion-refresher_2",[[0,"ion-refresher-content",{"pullingIcon":[1025,"pulling-icon"],"pullingText":[1,"pulling-text"],"refreshingSpinner":[1025,"refreshing-spinner"],"refreshingText":[1,"refreshing-text"]}],[32,"ion-refresher",{"pullMin":[2,"pull-min"],"pullMax":[2,"pull-max"],"closeDuration":[1,"close-duration"],"snapbackDuration":[1,"snapback-duration"],"pullFactor":[2,"pull-factor"],"disabled":[4],"nativeRefresher":[32],"state":[32],"complete":[64],"cancel":[64],"getProgress":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-back-button",[[33,"ion-back-button",{"color":[513],"defaultHref":[1025,"default-href"],"disabled":[516],"icon":[1],"text":[1],"type":[1],"routerAnimation":[16]}]]],["ion-toast",[[33,"ion-toast",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"color":[513],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"duration":[2],"header":[1],"layout":[1],"message":[1],"keyboardClose":[4,"keyboard-close"],"position":[1],"positionAnchor":[1,"position-anchor"],"buttons":[16],"translucent":[4],"animated":[4],"icon":[1],"htmlAttributes":[16],"swipeGesture":[1,"swipe-gesture"],"isOpen":[4,"is-open"],"trigger":[1],"revealContentToScreenReader":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"swipeGesture":["swipeGestureChanged"],"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-card_5",[[33,"ion-card",{"color":[513],"button":[4],"type":[1],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}],[32,"ion-card-content"],[33,"ion-card-header",{"color":[513],"translucent":[4]}],[33,"ion-card-subtitle",{"color":[513]}],[33,"ion-card-title",{"color":[513]}]]],["ion-item-option_3",[[33,"ion-item-option",{"color":[513],"disabled":[4],"download":[1],"expandable":[4],"href":[1],"rel":[1],"target":[1],"type":[1]}],[32,"ion-item-options",{"side":[1],"fireSwipeEvent":[64]}],[0,"ion-item-sliding",{"disabled":[4],"state":[32],"getOpenAmount":[64],"getSlidingRatio":[64],"open":[64],"close":[64],"closeOpened":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-accordion_2",[[49,"ion-accordion",{"value":[1],"disabled":[4],"readonly":[4],"toggleIcon":[1,"toggle-icon"],"toggleIconSlot":[1,"toggle-icon-slot"],"state":[32],"isNext":[32],"isPrevious":[32]},null,{"value":["valueChanged"]}],[33,"ion-accordion-group",{"animated":[4],"multiple":[4],"value":[1025],"disabled":[4],"readonly":[4],"expand":[1],"requestAccordionToggle":[64],"getAccordions":[64]},[[0,"keydown","onKeydown"]],{"value":["valueChanged"],"disabled":["disabledChanged"],"readonly":["readonlyChanged"]}]]],["ion-infinite-scroll_2",[[32,"ion-infinite-scroll-content",{"loadingSpinner":[1025,"loading-spinner"],"loadingText":[1,"loading-text"]}],[0,"ion-infinite-scroll",{"threshold":[1],"disabled":[4],"position":[1],"isLoading":[32],"complete":[64]},null,{"threshold":["thresholdChanged"],"disabled":["disabledChanged"]}]]],["ion-reorder_2",[[33,"ion-reorder",null,[[2,"click","onClick"]]],[0,"ion-reorder-group",{"disabled":[4],"state":[32],"complete":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-segment_2",[[33,"ion-segment-button",{"disabled":[1028],"layout":[1],"type":[1],"value":[8],"checked":[32],"setFocus":[64]},null,{"value":["valueChanged"]}],[33,"ion-segment",{"color":[513],"disabled":[4],"scrollable":[4],"swipeGesture":[4,"swipe-gesture"],"value":[1032],"selectOnFocus":[4,"select-on-focus"],"activated":[32]},[[0,"keydown","onKeyDown"]],{"color":["colorChanged"],"swipeGesture":["swipeGestureChanged"],"value":["valueChanged"],"disabled":["disabledChanged"]}]]],["ion-tab-bar_2",[[33,"ion-tab-button",{"disabled":[4],"download":[1],"href":[1],"rel":[1],"layout":[1025],"selected":[1028],"tab":[1],"target":[1]},[[8,"ionTabBarChanged","onTabBarChanged"]]],[33,"ion-tab-bar",{"color":[513],"selectedTab":[1,"selected-tab"],"translucent":[4],"keyboardVisible":[32]},null,{"selectedTab":["selectedTabChanged"]}]]],["ion-chip",[[33,"ion-chip",{"color":[513],"outline":[4],"disabled":[4]}]]],["ion-datetime-button",[[33,"ion-datetime-button",{"color":[513],"disabled":[516],"datetime":[1],"datetimePresentation":[32],"dateText":[32],"timeText":[32],"datetimeActive":[32],"selectedButton":[32]}]]],["ion-input",[[38,"ion-input",{"color":[513],"accept":[1],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearOnEdit":[4,"clear-on-edit"],"counter":[4],"counterFormatter":[16],"debounce":[2],"disabled":[4],"enterkeyhint":[1],"errorText":[1,"error-text"],"fill":[1],"inputmode":[1],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"legacy":[4],"max":[8],"maxlength":[2],"min":[8],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[4],"required":[4],"shape":[1],"spellcheck":[4],"step":[1],"size":[2],"type":[1],"value":[1032],"hasFocus":[32],"setFocus":[64],"getInputElement":[64]},null,{"debounce":["debounceChanged"],"disabled":["disabledChanged"],"placeholder":["placeholderChanged"],"value":["valueChanged"]}]]],["ion-searchbar",[[34,"ion-searchbar",{"color":[513],"animated":[4],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"cancelButtonIcon":[1,"cancel-button-icon"],"cancelButtonText":[1,"cancel-button-text"],"clearIcon":[1,"clear-icon"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"searchIcon":[1,"search-icon"],"showCancelButton":[1,"show-cancel-button"],"showClearButton":[1,"show-clear-button"],"spellcheck":[4],"type":[1],"value":[1025],"focused":[32],"noAnimate":[32],"setFocus":[64],"getInputElement":[64]},null,{"lang":["onLangChanged"],"dir":["onDirChanged"],"debounce":["debounceChanged"],"value":["valueChanged"],"showCancelButton":["showCancelButtonChanged"]}]]],["ion-toggle",[[33,"ion-toggle",{"color":[513],"name":[1],"checked":[1028],"disabled":[4],"value":[1],"enableOnOffLabels":[4,"enable-on-off-labels"],"labelPlacement":[1,"label-placement"],"legacy":[4],"justify":[1],"alignment":[1],"activated":[32]},null,{"disabled":["disabledChanged"]}]]],["ion-nav_2",[[1,"ion-nav",{"delegate":[16],"swipeGesture":[1028,"swipe-gesture"],"animated":[4],"animation":[16],"rootParams":[16],"root":[1],"push":[64],"insert":[64],"insertPages":[64],"pop":[64],"popTo":[64],"popToRoot":[64],"removeIndex":[64],"setRoot":[64],"setPages":[64],"setRouteId":[64],"getRouteId":[64],"getActive":[64],"getByIndex":[64],"canGoBack":[64],"getPrevious":[64]},null,{"swipeGesture":["swipeGestureChanged"],"root":["rootChanged"]}],[0,"ion-nav-link",{"component":[1],"componentProps":[16],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}]]],["ion-textarea",[[38,"ion-textarea",{"color":[513],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[4],"fill":[1],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"cols":[514],"rows":[2],"wrap":[1],"autoGrow":[516,"auto-grow"],"value":[1025],"counter":[4],"counterFormatter":[16],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"legacy":[4],"shape":[1],"hasFocus":[32],"setFocus":[64],"getInputElement":[64]},null,{"debounce":["debounceChanged"],"disabled":["disabledChanged"],"value":["valueChanged"]}]]],["ion-backdrop",[[33,"ion-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]],["ion-loading",[[34,"ion-loading",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"message":[1],"cssClass":[1,"css-class"],"duration":[2],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"spinner":[1025],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-breadcrumb_2",[[33,"ion-breadcrumb",{"collapsed":[4],"last":[4],"showCollapsedIndicator":[4,"show-collapsed-indicator"],"color":[1],"active":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"separator":[4],"target":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}],[33,"ion-breadcrumbs",{"color":[513],"maxItems":[2,"max-items"],"itemsBeforeCollapse":[2,"items-before-collapse"],"itemsAfterCollapse":[2,"items-after-collapse"],"collapsed":[32],"activeChanged":[32]},[[0,"collapsedClick","onCollapsedClick"]],{"maxItems":["maxItemsChanged"],"itemsBeforeCollapse":["maxItemsChanged"],"itemsAfterCollapse":["maxItemsChanged"]}]]],["ion-modal",[[33,"ion-modal",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"breakpoints":[16],"initialBreakpoint":[2,"initial-breakpoint"],"backdropBreakpoint":[2,"backdrop-breakpoint"],"handle":[4],"handleBehavior":[1,"handle-behavior"],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"presentingElement":[16],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"keepContentsMounted":[4,"keep-contents-mounted"],"canDismiss":[4,"can-dismiss"],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"setCurrentBreakpoint":[64],"getCurrentBreakpoint":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-route_4",[[0,"ion-route",{"url":[1],"component":[1],"componentProps":[16],"beforeLeave":[16],"beforeEnter":[16]},null,{"url":["onUpdate"],"component":["onUpdate"],"componentProps":["onComponentProps"]}],[0,"ion-route-redirect",{"from":[1],"to":[1]},null,{"from":["propDidChange"],"to":["propDidChange"]}],[0,"ion-router",{"root":[1],"useHash":[4,"use-hash"],"canTransition":[64],"push":[64],"back":[64],"printDebug":[64],"navChanged":[64]},[[8,"popstate","onPopState"],[4,"ionBackButton","onBackButton"]]],[1,"ion-router-link",{"color":[513],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}]]],["ion-avatar_3",[[33,"ion-avatar"],[33,"ion-badge",{"color":[513]}],[1,"ion-thumbnail"]]],["ion-col_3",[[1,"ion-col",{"offset":[1],"offsetXs":[1,"offset-xs"],"offsetSm":[1,"offset-sm"],"offsetMd":[1,"offset-md"],"offsetLg":[1,"offset-lg"],"offsetXl":[1,"offset-xl"],"pull":[1],"pullXs":[1,"pull-xs"],"pullSm":[1,"pull-sm"],"pullMd":[1,"pull-md"],"pullLg":[1,"pull-lg"],"pullXl":[1,"pull-xl"],"push":[1],"pushXs":[1,"push-xs"],"pushSm":[1,"push-sm"],"pushMd":[1,"push-md"],"pushLg":[1,"push-lg"],"pushXl":[1,"push-xl"],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"]},[[9,"resize","onResize"]]],[1,"ion-grid",{"fixed":[4]}],[1,"ion-row"]]],["ion-tab_2",[[1,"ion-tab",{"active":[1028],"delegate":[16],"tab":[1],"component":[1],"setActive":[64]},null,{"active":["changeActive"]}],[1,"ion-tabs",{"useRouter":[1028,"use-router"],"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64],"setRouteId":[64],"getRouteId":[64]}]]],["ion-img",[[1,"ion-img",{"alt":[1],"src":[1],"loadSrc":[32],"loadError":[32]},null,{"src":["srcChanged"]}]]],["ion-progress-bar",[[33,"ion-progress-bar",{"type":[1],"reversed":[4],"value":[2],"buffer":[2],"color":[513]}]]],["ion-range",[[33,"ion-range",{"color":[513],"debounce":[2],"name":[1],"label":[1],"dualKnobs":[4,"dual-knobs"],"min":[2],"max":[2],"pin":[4],"pinFormatter":[16],"snaps":[4],"step":[2],"ticks":[4],"activeBarStart":[1026,"active-bar-start"],"disabled":[4],"value":[1026],"labelPlacement":[1,"label-placement"],"legacy":[4],"ratioA":[32],"ratioB":[32],"pressedKnob":[32]},null,{"debounce":["debounceChanged"],"min":["minChanged"],"max":["maxChanged"],"activeBarStart":["activeBarStartChanged"],"disabled":["disabledChanged"],"value":["valueChanged"]}]]],["ion-split-pane",[[33,"ion-split-pane",{"contentId":[513,"content-id"],"disabled":[4],"when":[8],"visible":[32]},null,{"visible":["visibleChanged"],"disabled":["updateState"],"when":["updateState"]}]]],["ion-text",[[1,"ion-text",{"color":[513]}]]],["ion-item_8",[[33,"ion-item-divider",{"color":[513],"sticky":[4]}],[32,"ion-item-group"],[1,"ion-skeleton-text",{"animated":[4]}],[32,"ion-list",{"lines":[1],"inset":[4],"closeSlidingItems":[64]}],[33,"ion-list-header",{"color":[513],"lines":[1]}],[49,"ion-item",{"color":[513],"button":[4],"detail":[4],"detailIcon":[1,"detail-icon"],"disabled":[4],"download":[1],"fill":[1],"shape":[1],"href":[1],"rel":[1],"lines":[1],"counter":[4],"routerAnimation":[16],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"counterFormatter":[16],"multipleInputs":[32],"focusable":[32],"counterString":[32]},[[0,"ionInput","handleIonInput"],[0,"ionColor","labelColorChanged"],[0,"ionStyle","itemStyle"]],{"button":["buttonChanged"],"counterFormatter":["counterFormatterChanged"]}],[34,"ion-label",{"color":[513],"position":[1],"noAnimate":[32]},null,{"color":["colorChanged"],"position":["positionChanged"]}],[33,"ion-note",{"color":[513]}]]],["ion-select_3",[[33,"ion-select",{"cancelText":[1,"cancel-text"],"color":[513],"compareWith":[1,"compare-with"],"disabled":[4],"fill":[1],"interface":[1],"interfaceOptions":[8,"interface-options"],"justify":[1],"label":[1],"labelPlacement":[1,"label-placement"],"legacy":[4],"multiple":[4],"name":[1],"okText":[1,"ok-text"],"placeholder":[1],"selectedText":[1,"selected-text"],"toggleIcon":[1,"toggle-icon"],"expandedIcon":[1,"expanded-icon"],"shape":[1],"value":[1032],"isExpanded":[32],"open":[64]},null,{"disabled":["styleChanged"],"isExpanded":["styleChanged"],"placeholder":["styleChanged"],"value":["styleChanged"]}],[1,"ion-select-option",{"disabled":[4],"value":[8]}],[34,"ion-select-popover",{"header":[1],"subHeader":[1,"sub-header"],"message":[1],"multiple":[4],"options":[16]}]]],["ion-picker-internal",[[33,"ion-picker-internal",{"exitInputMode":[64]},[[1,"touchstart","preventTouchStartPropagation"]]]]],["ion-datetime_3",[[33,"ion-datetime",{"color":[1],"name":[1],"disabled":[4],"formatOptions":[16],"readonly":[4],"isDateEnabled":[16],"min":[1025],"max":[1025],"presentation":[1],"cancelText":[1,"cancel-text"],"doneText":[1,"done-text"],"clearText":[1,"clear-text"],"yearValues":[8,"year-values"],"monthValues":[8,"month-values"],"dayValues":[8,"day-values"],"hourValues":[8,"hour-values"],"minuteValues":[8,"minute-values"],"locale":[1],"firstDayOfWeek":[2,"first-day-of-week"],"titleSelectedDatesFormatter":[16],"multiple":[4],"highlightedDates":[16],"value":[1025],"showDefaultTitle":[4,"show-default-title"],"showDefaultButtons":[4,"show-default-buttons"],"showClearButton":[4,"show-clear-button"],"showDefaultTimeLabel":[4,"show-default-time-label"],"hourCycle":[1,"hour-cycle"],"size":[1],"preferWheel":[4,"prefer-wheel"],"showMonthAndYear":[32],"activeParts":[32],"workingParts":[32],"isTimePopoverOpen":[32],"forceRenderDate":[32],"confirm":[64],"reset":[64],"cancel":[64]},null,{"formatOptions":["formatOptionsChanged"],"disabled":["disabledChanged"],"min":["minChanged"],"max":["maxChanged"],"presentation":["presentationChanged"],"yearValues":["yearValuesChanged"],"monthValues":["monthValuesChanged"],"dayValues":["dayValuesChanged"],"hourValues":["hourValuesChanged"],"minuteValues":["minuteValuesChanged"],"value":["valueChanged"]}],[34,"ion-picker",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"columns":[16],"cssClass":[1,"css-class"],"duration":[2],"showBackdrop":[4,"show-backdrop"],"backdropDismiss":[4,"backdrop-dismiss"],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"getColumn":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}],[32,"ion-picker-column",{"col":[16]},null,{"col":["colChanged"]}]]],["ion-radio_2",[[33,"ion-radio",{"color":[513],"name":[1],"disabled":[4],"value":[8],"labelPlacement":[1,"label-placement"],"legacy":[4],"justify":[1],"alignment":[1],"checked":[32],"buttonTabindex":[32],"setFocus":[64],"setButtonTabindex":[64]},null,{"value":["valueChanged"],"checked":["styleChanged"],"color":["styleChanged"],"disabled":["styleChanged"]}],[0,"ion-radio-group",{"allowEmptySelection":[4,"allow-empty-selection"],"compareWith":[1,"compare-with"],"name":[1],"value":[1032]},[[4,"keydown","onKeydown"]],{"value":["valueChanged"]}]]],["ion-ripple-effect",[[1,"ion-ripple-effect",{"type":[1],"addRipple":[64]}]]],["ion-button_2",[[33,"ion-button",{"color":[513],"buttonType":[1025,"button-type"],"disabled":[516],"expand":[513],"fill":[1537],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"download":[1],"href":[1],"rel":[1],"shape":[513],"size":[513],"strong":[4],"target":[1],"type":[1],"form":[1]},null,{"disabled":["disabledChanged"]}],[1,"ion-icon",{"mode":[1025],"color":[1],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[513],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32]},null,{"name":["loadIcon"],"src":["loadIcon"],"icon":["loadIcon"],"ios":["loadIcon"],"md":["loadIcon"]}]]],["ion-action-sheet",[[34,"ion-action-sheet",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"header":[1],"subHeader":[1,"sub-header"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-alert",[[34,"ion-alert",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"header":[1],"subHeader":[1,"sub-header"],"message":[1],"buttons":[16],"inputs":[1040],"backdropDismiss":[4,"backdrop-dismiss"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[4,"keydown","onKeydown"]],{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"],"buttons":["buttonsChanged"],"inputs":["inputsChanged"]}]]],["ion-app_8",[[0,"ion-app",{"setFocus":[64]}],[1,"ion-content",{"color":[513],"fullscreen":[4],"forceOverscroll":[1028,"force-overscroll"],"scrollX":[4,"scroll-x"],"scrollY":[4,"scroll-y"],"scrollEvents":[4,"scroll-events"],"getScrollElement":[64],"getBackgroundElement":[64],"scrollToTop":[64],"scrollToBottom":[64],"scrollByPoint":[64],"scrollToPoint":[64]},[[9,"resize","onResize"]]],[36,"ion-footer",{"collapse":[1],"translucent":[4],"keyboardVisible":[32]}],[36,"ion-header",{"collapse":[1],"translucent":[4]}],[1,"ion-router-outlet",{"mode":[1025],"delegate":[16],"animated":[4],"animation":[16],"swipeHandler":[16],"commit":[64],"setRouteId":[64],"getRouteId":[64]},null,{"swipeHandler":["swipeHandlerChanged"]}],[33,"ion-title",{"color":[513],"size":[1]},null,{"size":["sizeChanged"]}],[33,"ion-toolbar",{"color":[513]},[[0,"ionStyle","childrenStyle"]]],[34,"ion-buttons",{"collapse":[4]}]]],["ion-picker-column-internal",[[33,"ion-picker-column-internal",{"disabled":[4],"items":[16],"value":[1032],"color":[513],"numericInput":[4,"numeric-input"],"isActive":[32],"scrollActiveItemIntoView":[64],"setValue":[64]},null,{"value":["valueChange"]}]]],["ion-popover",[[33,"ion-popover",{"hasController":[4,"has-controller"],"delegate":[16],"overlayIndex":[2,"overlay-index"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"keyboardClose":[4,"keyboard-close"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"showBackdrop":[4,"show-backdrop"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"triggerAction":[1,"trigger-action"],"trigger":[1],"size":[1],"dismissOnSelect":[4,"dismiss-on-select"],"reference":[1],"side":[1],"alignment":[1025],"arrow":[4],"isOpen":[4,"is-open"],"keyboardEvents":[4,"keyboard-events"],"keepContentsMounted":[4,"keep-contents-mounted"],"presented":[32],"presentFromTrigger":[64],"present":[64],"dismiss":[64],"getParentPopover":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"trigger":["onTriggerChange"],"triggerAction":["onTriggerChange"],"isOpen":["onIsOpenChange"]}]]],["ion-checkbox",[[33,"ion-checkbox",{"color":[513],"name":[1],"checked":[1028],"indeterminate":[1028],"disabled":[4],"value":[8],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"legacy":[4]},null,{"checked":["styleChanged"],"disabled":["styleChanged"]}]]],["ion-spinner",[[1,"ion-spinner",{"color":[513],"duration":[2],"name":[1],"paused":[4]}]]]]',
                  ),
                  t,
                )
              );
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })(),
        ze = ['*'],
        m6 = (e, n) => {
          const t = e.prototype;
          n.forEach(r => {
            Object.defineProperty(t, r, {
              get() {
                return this.el[r];
              },
              set(o) {
                this.z.runOutsideAngular(() => (this.el[r] = o));
              },
              configurable: !0,
            });
          });
        },
        v6 = (e, n) => {
          const t = e.prototype;
          n.forEach(r => {
            t[r] = function () {
              const o = arguments;
              return this.z.runOutsideAngular(() => this.el[r].apply(this.el, o));
            };
          });
        },
        bn = (e, n, t) => {
          t.forEach(r => (e[r] = La(n, r)));
        };
      function Ze(e) {
        return function (t) {
          const { defineCustomElementFn: r, inputs: o, methods: i } = e;
          return void 0 !== r && r(), o && m6(t, o), i && v6(t, i), t;
        };
      }
      let _M = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-app']],
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve([Ze({})], e)),
            e
          );
        })(),
        CM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-badge']],
              inputs: { color: 'color', mode: 'mode' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve([Ze({ inputs: ['color', 'mode'] })], e)),
            e
          );
        })(),
        bM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement), bn(this, this.el, ['ionFocus', 'ionBlur']);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-button']],
              inputs: {
                buttonType: 'buttonType',
                color: 'color',
                disabled: 'disabled',
                download: 'download',
                expand: 'expand',
                fill: 'fill',
                form: 'form',
                href: 'href',
                mode: 'mode',
                rel: 'rel',
                routerAnimation: 'routerAnimation',
                routerDirection: 'routerDirection',
                shape: 'shape',
                size: 'size',
                strong: 'strong',
                target: 'target',
                type: 'type',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve(
              [
                Ze({
                  inputs: [
                    'buttonType',
                    'color',
                    'disabled',
                    'download',
                    'expand',
                    'fill',
                    'form',
                    'href',
                    'mode',
                    'rel',
                    'routerAnimation',
                    'routerDirection',
                    'shape',
                    'size',
                    'strong',
                    'target',
                    'type',
                  ],
                }),
              ],
              e,
            )),
            e
          );
        })(),
        EM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-card']],
              inputs: {
                button: 'button',
                color: 'color',
                disabled: 'disabled',
                download: 'download',
                href: 'href',
                mode: 'mode',
                rel: 'rel',
                routerAnimation: 'routerAnimation',
                routerDirection: 'routerDirection',
                target: 'target',
                type: 'type',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve(
              [
                Ze({
                  inputs: [
                    'button',
                    'color',
                    'disabled',
                    'download',
                    'href',
                    'mode',
                    'rel',
                    'routerAnimation',
                    'routerDirection',
                    'target',
                    'type',
                  ],
                }),
              ],
              e,
            )),
            e
          );
        })(),
        wM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-card-content']],
              inputs: { mode: 'mode' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve([Ze({ inputs: ['mode'] })], e)),
            e
          );
        })(),
        IM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-card-header']],
              inputs: { color: 'color', mode: 'mode', translucent: 'translucent' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve([Ze({ inputs: ['color', 'mode', 'translucent'] })], e)),
            e
          );
        })(),
        TM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-card-title']],
              inputs: { color: 'color', mode: 'mode' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve([Ze({ inputs: ['color', 'mode'] })], e)),
            e
          );
        })(),
        SM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement), bn(this, this.el, ['ionScrollStart', 'ionScroll', 'ionScrollEnd']);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-content']],
              inputs: {
                color: 'color',
                forceOverscroll: 'forceOverscroll',
                fullscreen: 'fullscreen',
                scrollEvents: 'scrollEvents',
                scrollX: 'scrollX',
                scrollY: 'scrollY',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve(
              [
                Ze({
                  inputs: ['color', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY'],
                  methods: ['getScrollElement', 'scrollToTop', 'scrollToBottom', 'scrollByPoint', 'scrollToPoint'],
                }),
              ],
              e,
            )),
            e
          );
        })(),
        MM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-header']],
              inputs: { collapse: 'collapse', mode: 'mode', translucent: 'translucent' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve([Ze({ inputs: ['collapse', 'mode', 'translucent'] })], e)),
            e
          );
        })(),
        AM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-icon']],
              inputs: {
                color: 'color',
                flipRtl: 'flipRtl',
                icon: 'icon',
                ios: 'ios',
                lazy: 'lazy',
                md: 'md',
                mode: 'mode',
                name: 'name',
                sanitize: 'sanitize',
                size: 'size',
                src: 'src',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve([Ze({ inputs: ['color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src'] })], e)),
            e
          );
        })(),
        xM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-item']],
              inputs: {
                button: 'button',
                color: 'color',
                counter: 'counter',
                counterFormatter: 'counterFormatter',
                detail: 'detail',
                detailIcon: 'detailIcon',
                disabled: 'disabled',
                download: 'download',
                fill: 'fill',
                href: 'href',
                lines: 'lines',
                mode: 'mode',
                rel: 'rel',
                routerAnimation: 'routerAnimation',
                routerDirection: 'routerDirection',
                shape: 'shape',
                target: 'target',
                type: 'type',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve(
              [
                Ze({
                  inputs: [
                    'button',
                    'color',
                    'counter',
                    'counterFormatter',
                    'detail',
                    'detailIcon',
                    'disabled',
                    'download',
                    'fill',
                    'href',
                    'lines',
                    'mode',
                    'rel',
                    'routerAnimation',
                    'routerDirection',
                    'shape',
                    'target',
                    'type',
                  ],
                }),
              ],
              e,
            )),
            e
          );
        })(),
        RM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-label']],
              inputs: { color: 'color', mode: 'mode', position: 'position' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve([Ze({ inputs: ['color', 'mode', 'position'] })], e)),
            e
          );
        })(),
        OM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-list']],
              inputs: { inset: 'inset', lines: 'lines', mode: 'mode' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve([Ze({ inputs: ['inset', 'lines', 'mode'], methods: ['closeSlidingItems'] })], e)),
            e
          );
        })(),
        NM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement), bn(this, this.el, ['ionRefresh', 'ionPull', 'ionStart']);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-refresher']],
              inputs: {
                closeDuration: 'closeDuration',
                disabled: 'disabled',
                mode: 'mode',
                pullFactor: 'pullFactor',
                pullMax: 'pullMax',
                pullMin: 'pullMin',
                snapbackDuration: 'snapbackDuration',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve(
              [
                Ze({
                  inputs: ['closeDuration', 'disabled', 'mode', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration'],
                  methods: ['complete', 'cancel', 'getProgress'],
                }),
              ],
              e,
            )),
            e
          );
        })(),
        kM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-refresher-content']],
              inputs: {
                pullingIcon: 'pullingIcon',
                pullingText: 'pullingText',
                refreshingSpinner: 'refreshingSpinner',
                refreshingText: 'refreshingText',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve([Ze({ inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText'] })], e)),
            e
          );
        })(),
        PM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-spinner']],
              inputs: { color: 'color', duration: 'duration', name: 'name', paused: 'paused' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve([Ze({ inputs: ['color', 'duration', 'name', 'paused'] })], e)),
            e
          );
        })(),
        FM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-title']],
              inputs: { color: 'color', size: 'size' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve([Ze({ inputs: ['color', 'size'] })], e)),
            e
          );
        })(),
        LM = (() => {
          let e = class {
            constructor(t, r, o) {
              (this.z = o), t.detach(), (this.el = r.nativeElement);
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(h(Ae), h(ge), h(se));
            }),
            (e.ɵcmp = Oe({
              type: e,
              selectors: [['ion-toolbar']],
              inputs: { color: 'color', mode: 'mode' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (t, r) {
                1 & t && (je(), $e(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (e = Ve([Ze({ inputs: ['color', 'mode'] })], e)),
            e
          );
        })(),
        $c = (() => {
          class e extends gM {
            constructor(t, r, o, i, s, a, l, c) {
              super(t, r, o, i, s, a, l, c), (this.parentOutlet = c);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(fi('name'), fi('tabs'), h(ji), h(ge), h(Ir), h(se), h(oi), h(e, 12));
            }),
            (e.ɵdir = ct({ type: e, selectors: [['ion-router-outlet']], features: [zt] })),
            e
          );
        })();
      const AG = { provide: Cr, useExisting: ke(() => $M), multi: !0 };
      let $M = (() => {
        class e extends bv {}
        return (
          (e.ɵfac = (() => {
            let n;
            return function (r) {
              return (n || (n = Gn(e)))(r || e);
            };
          })()),
          (e.ɵdir = ct({
            type: e,
            selectors: [
              ['ion-input', 'type', 'number', 'max', '', 'formControlName', ''],
              ['ion-input', 'type', 'number', 'max', '', 'formControl', ''],
              ['ion-input', 'type', 'number', 'max', '', 'ngModel', ''],
            ],
            hostVars: 1,
            hostBindings: function (t, r) {
              2 & t && vo('max', r._enabled ? r.max : null);
            },
            features: [Dn([AG]), zt],
          })),
          e
        );
      })();
      const xG = { provide: Cr, useExisting: ke(() => VM), multi: !0 };
      let VM = (() => {
          class e extends Ev {}
          return (
            (e.ɵfac = (() => {
              let n;
              return function (r) {
                return (n || (n = Gn(e)))(r || e);
              };
            })()),
            (e.ɵdir = ct({
              type: e,
              selectors: [
                ['ion-input', 'type', 'number', 'min', '', 'formControlName', ''],
                ['ion-input', 'type', 'number', 'min', '', 'formControl', ''],
                ['ion-input', 'type', 'number', 'min', '', 'ngModel', ''],
              ],
              hostVars: 1,
              hostBindings: function (t, r) {
                2 & t && vo('min', r._enabled ? r.min : null);
              },
              features: [Dn([xG]), zt],
            })),
            e
          );
        })(),
        RG = (() => {
          class e extends yM {
            constructor() {
              super(DM.m), (this.angularDelegate = ce(Fc)), (this.injector = ce(Nn)), (this.environmentInjector = ce(lr));
            }
            create(t) {
              return super.create({ ...t, delegate: this.angularDelegate.create(this.environmentInjector, this.injector, 'modal') });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = B({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      class OG extends yM {
        constructor() {
          super(DM.c), (this.angularDelegate = ce(Fc)), (this.injector = ce(Nn)), (this.environmentInjector = ce(lr));
        }
        create(n) {
          return super.create({ ...n, delegate: this.angularDelegate.create(this.environmentInjector, this.injector, 'popover') });
        }
      }
      const NG = (e, n, t) => () => {
        const r = n.defaultView;
        if (r && typeof window < 'u') {
          (0, t6.s)({ ...e, _zoneGate: i => t.run(i) });
          const o = '__zone_symbol__addEventListener' in n.body ? '__zone_symbol__addEventListener' : 'addEventListener';
          return (function r6() {
            var e = [];
            if (typeof window < 'u') {
              var n = window;
              (!n.customElements ||
                (n.Element &&
                  (!n.Element.prototype.closest ||
                    !n.Element.prototype.matches ||
                    !n.Element.prototype.remove ||
                    !n.Element.prototype.getRootNode))) &&
                e.push(ne.e(7278).then(ne.t.bind(ne, 2190, 23))),
                ('function' != typeof Object.assign ||
                  !Object.entries ||
                  !Array.prototype.find ||
                  !Array.prototype.includes ||
                  !String.prototype.startsWith ||
                  !String.prototype.endsWith ||
                  (n.NodeList && !n.NodeList.prototype.forEach) ||
                  !n.fetch ||
                  !(function () {
                    try {
                      var r = new URL('b', 'http://a');
                      return (r.pathname = 'c%20d'), 'http://a/c%20d' === r.href && r.searchParams;
                    } catch {
                      return !1;
                    }
                  })() ||
                  typeof WeakMap > 'u') &&
                  e.push(ne.e(9329).then(ne.t.bind(ne, 7783, 23)));
            }
            return Promise.all(e);
          })().then(() =>
            i6(r, {
              exclude: ['ion-tabs', 'ion-tab'],
              syncQueue: !0,
              raf: vM,
              jmp: i => t.runOutsideAngular(i),
              ael(i, s, a, l) {
                i[o](s, a, l);
              },
              rel(i, s, a, l) {
                i.removeEventListener(s, a, l);
              },
            }),
          );
        }
      };
      let kG = (() => {
        class e {
          static forRoot(t) {
            return {
              ngModule: e,
              providers: [
                { provide: sM, useValue: t },
                { provide: nc, useFactory: NG, multi: !0, deps: [sM, jr, se] },
                { provide: mM, useFactory: Uz, deps: [Ir] },
              ],
            };
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = Vo({ type: e })),
          (e.ɵinj = un({ providers: [Fc, RG, OG], imports: [nm] })),
          e
        );
      })();
      const Ua = new Je(Gt);
      function BM(...e) {
        const n = uc(e),
          t = (function O2(e, n) {
            return 'number' == typeof ym(e) ? e.pop() : n;
          })(e, 1 / 0),
          r = e;
        return r.length ? (1 === r.length ? no(r[0]) : ba(t)(fr(r, n))) : Po;
      }
      const FG = { connector: () => new _t() };
      function jM(e, n = FG) {
        const { connector: t } = n;
        return Le((r, o) => {
          const i = t();
          no(
            e(
              (function PG(e) {
                return new Je(n => e.subscribe(n));
              })(i),
            ),
          ).subscribe(o),
            o.add(r.subscribe(i));
        });
      }
      class VG extends H {
        constructor(n, t) {
          super();
        }
        schedule(n, t = 0) {
          return this;
        }
      }
      const Ef = {
          setInterval(e, n, ...t) {
            const { delegate: r } = Ef;
            return r?.setInterval ? r.setInterval(e, n, ...t) : setInterval(e, n, ...t);
          },
          clearInterval(e) {
            const { delegate: n } = Ef;
            return (n?.clearInterval || clearInterval)(e);
          },
          delegate: void 0,
        },
        UM = { now: () => (UM.delegate || Date).now(), delegate: void 0 };
      class Vc {
        constructor(n, t = Vc.now) {
          (this.schedulerActionCtor = n), (this.now = t);
        }
        schedule(n, t = 0, r) {
          return new this.schedulerActionCtor(this, n).schedule(r, t);
        }
      }
      Vc.now = UM.now;
      const HM = new (class jG extends Vc {
          constructor(n, t = Vc.now) {
            super(n, t), (this.actions = []), (this._active = !1);
          }
          flush(n) {
            const { actions: t } = this;
            if (this._active) return void t.push(n);
            let r;
            this._active = !0;
            do {
              if ((r = n.execute(n.state, n.delay))) break;
            } while ((n = t.shift()));
            if (((this._active = !1), r)) {
              for (; (n = t.shift()); ) n.unsubscribe();
              throw r;
            }
          }
        })(
          class BG extends VG {
            constructor(n, t) {
              super(n, t), (this.scheduler = n), (this.work = t), (this.pending = !1);
            }
            schedule(n, t = 0) {
              var r;
              if (this.closed) return this;
              this.state = n;
              const o = this.id,
                i = this.scheduler;
              return (
                null != o && (this.id = this.recycleAsyncId(i, o, t)),
                (this.pending = !0),
                (this.delay = t),
                (this.id = null !== (r = this.id) && void 0 !== r ? r : this.requestAsyncId(i, this.id, t)),
                this
              );
            }
            requestAsyncId(n, t, r = 0) {
              return Ef.setInterval(n.flush.bind(n, this), r);
            }
            recycleAsyncId(n, t, r = 0) {
              if (null != r && this.delay === r && !1 === this.pending) return t;
              null != t && Ef.clearInterval(t);
            }
            execute(n, t) {
              if (this.closed) return new Error('executing a cancelled action');
              this.pending = !1;
              const r = this._execute(n, t);
              if (r) return r;
              !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }
            _execute(n, t) {
              let o,
                r = !1;
              try {
                this.work(n);
              } catch (i) {
                (r = !0), (o = i || new Error('Scheduled action threw falsy error'));
              }
              if (r) return this.unsubscribe(), o;
            }
            unsubscribe() {
              if (!this.closed) {
                const { id: n, scheduler: t } = this,
                  { actions: r } = t;
                (this.work = this.state = this.scheduler = null),
                  (this.pending = !1),
                  ae(r, this),
                  null != n && (this.id = this.recycleAsyncId(t, n, null)),
                  (this.delay = null),
                  super.unsubscribe();
              }
            }
          },
        ),
        UG = HM;
      function zM(e, n) {
        return n
          ? t =>
              dc(
                n.pipe(
                  ro(1),
                  (function HG() {
                    return Le((e, n) => {
                      e.subscribe(Ce(n, Gt));
                    });
                  })(),
                ),
                t.pipe(zM(e)),
              )
          : Dr((t, r) => no(e(t, r)).pipe(ro(1), C0(t)));
      }
      const Bc = 'Service workers are disabled or not supported by this browser';
      class wf {
        constructor(n) {
          if (((this.serviceWorker = n), n)) {
            const r = La(n, 'controllerchange').pipe(nt(() => n.controller)),
              i = dc(
                zd(() => mt(n.controller)),
                r,
              );
            (this.worker = i.pipe(kr(u => !!u))), (this.registration = this.worker.pipe(_r(() => n.getRegistration())));
            const c = La(n, 'message')
              .pipe(nt(u => u.data))
              .pipe(kr(u => u && u.type))
              .pipe(
                (function $G(e) {
                  return e
                    ? n => jM(e)(n)
                    : n =>
                        (function LG(e, n) {
                          const t = yt(e) ? e : () => e;
                          return yt(n) ? jM(n, { connector: t }) : r => new Cm(r, t);
                        })(new _t())(n);
                })(),
              );
            c.connect(), (this.events = c);
          } else
            this.worker =
              this.events =
              this.registration =
                (function qG(e) {
                  return zd(() => uo(new Error(e)));
                })(Bc);
        }
        postMessage(n, t) {
          return this.worker
            .pipe(
              ro(1),
              Hn(r => {
                r.postMessage({ action: n, ...t });
              }),
            )
            .toPromise()
            .then(() => {});
        }
        postMessageWithOperation(n, t, r) {
          const o = this.waitForOperationCompleted(r),
            i = this.postMessage(n, t);
          return Promise.all([i, o]).then(([, s]) => s);
        }
        generateNonce() {
          return Math.round(1e7 * Math.random());
        }
        eventsOfType(n) {
          let t;
          return (t = 'string' == typeof n ? r => r.type === n : r => n.includes(r.type)), this.events.pipe(kr(t));
        }
        nextEventOfType(n) {
          return this.eventsOfType(n).pipe(ro(1));
        }
        waitForOperationCompleted(n) {
          return this.eventsOfType('OPERATION_COMPLETED')
            .pipe(
              kr(t => t.nonce === n),
              ro(1),
              nt(t => {
                if (void 0 !== t.result) return t.result;
                throw new Error(t.error);
              }),
            )
            .toPromise();
        }
        get isEnabled() {
          return !!this.serviceWorker;
        }
      }
      let GM = (() => {
          class e {
            get isEnabled() {
              return this.sw.isEnabled;
            }
            constructor(t) {
              if (((this.sw = t), (this.pushManager = null), (this.subscriptionChanges = new _t()), !t.isEnabled))
                return (this.messages = Ua), (this.notificationClicks = Ua), void (this.subscription = Ua);
              (this.messages = this.sw.eventsOfType('PUSH').pipe(nt(o => o.data))),
                (this.notificationClicks = this.sw.eventsOfType('NOTIFICATION_CLICK').pipe(nt(o => o.data))),
                (this.pushManager = this.sw.registration.pipe(nt(o => o.pushManager)));
              const r = this.pushManager.pipe(_r(o => o.getSubscription()));
              this.subscription = BM(r, this.subscriptionChanges);
            }
            requestSubscription(t) {
              if (!this.sw.isEnabled || null === this.pushManager) return Promise.reject(new Error(Bc));
              const r = { userVisibleOnly: !0 };
              let o = this.decodeBase64(t.serverPublicKey.replace(/_/g, '/').replace(/-/g, '+')),
                i = new Uint8Array(new ArrayBuffer(o.length));
              for (let s = 0; s < o.length; s++) i[s] = o.charCodeAt(s);
              return (
                (r.applicationServerKey = i),
                this.pushManager
                  .pipe(
                    _r(s => s.subscribe(r)),
                    ro(1),
                  )
                  .toPromise()
                  .then(s => (this.subscriptionChanges.next(s), s))
              );
            }
            unsubscribe() {
              return this.sw.isEnabled
                ? this.subscription
                    .pipe(
                      ro(1),
                      _r(r => {
                        if (null === r) throw new Error('Not subscribed to push notifications.');
                        return r.unsubscribe().then(o => {
                          if (!o) throw new Error('Unsubscribe failed!');
                          this.subscriptionChanges.next(null);
                        });
                      }),
                    )
                    .toPromise()
                : Promise.reject(new Error(Bc));
            }
            decodeBase64(t) {
              return atob(t);
            }
            static {
              this.ɵfac = function (r) {
                return new (r || e)(dt(wf));
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: e.ɵfac });
            }
          }
          return e;
        })(),
        WM = (() => {
          class e {
            get isEnabled() {
              return this.sw.isEnabled;
            }
            constructor(t) {
              if (((this.sw = t), !t.isEnabled)) return (this.versionUpdates = Ua), void (this.unrecoverable = Ua);
              (this.versionUpdates = this.sw.eventsOfType([
                'VERSION_DETECTED',
                'VERSION_INSTALLATION_FAILED',
                'VERSION_READY',
                'NO_NEW_VERSION_DETECTED',
              ])),
                (this.unrecoverable = this.sw.eventsOfType('UNRECOVERABLE_STATE'));
            }
            checkForUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(Bc));
              const t = this.sw.generateNonce();
              return this.sw.postMessageWithOperation('CHECK_FOR_UPDATES', { nonce: t }, t);
            }
            activateUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(Bc));
              const t = this.sw.generateNonce();
              return this.sw.postMessageWithOperation('ACTIVATE_UPDATE', { nonce: t }, t);
            }
            static {
              this.ɵfac = function (r) {
                return new (r || e)(dt(wf));
              };
            }
            static {
              this.ɵprov = B({ token: e, factory: e.ɵfac });
            }
          }
          return e;
        })();
      const qM = new He('');
      function XG(e, n, t, r) {
        return () => {
          if (!rm(r) || !('serviceWorker' in navigator) || !1 === t.enabled) return;
          let o;
          if (
            (navigator.serviceWorker.addEventListener('controllerchange', () => {
              null !== navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({ action: 'INITIALIZE' });
            }),
            'function' == typeof t.registrationStrategy)
          )
            o = t.registrationStrategy();
          else {
            const [s, ...a] = (t.registrationStrategy || 'registerWhenStable:30000').split(':');
            switch (s) {
              case 'registerImmediately':
                o = mt(null);
                break;
              case 'registerWithDelay':
                o = XM(+a[0] || 0);
                break;
              case 'registerWhenStable':
                o = a[0] ? BM(ZM(e), XM(+a[0])) : ZM(e);
                break;
              default:
                throw new Error(`Unknown ServiceWorker registration strategy: ${t.registrationStrategy}`);
            }
          }
          e.get(se).runOutsideAngular(() =>
            o
              .pipe(ro(1))
              .subscribe(() =>
                navigator.serviceWorker
                  .register(n, { scope: t.scope })
                  .catch(s => console.error('Service worker registration failed with:', s)),
              ),
          );
        };
      }
      function XM(e) {
        return mt(null).pipe(
          (function WG(e, n = HM) {
            const t = (function GG(e = 0, n, t = UG) {
              let r = -1;
              return (
                null != n && (g0(n) ? (t = n) : (r = n)),
                new Je(o => {
                  let i = (function zG(e) {
                    return e instanceof Date && !isNaN(e);
                  })(e)
                    ? +e - t.now()
                    : e;
                  i < 0 && (i = 0);
                  let s = 0;
                  return t.schedule(function () {
                    o.closed || (o.next(s++), 0 <= r ? this.schedule(void 0, r) : o.complete());
                  }, i);
                })
              );
            })(e, n);
            return zM(() => t);
          })(e),
        );
      }
      function ZM(e) {
        return e.get(ei).isStable.pipe(kr(t => t));
      }
      function ZG(e, n) {
        return new wf(rm(n) && !1 !== e.enabled ? navigator.serviceWorker : void 0);
      }
      class Rv {}
      function YG(e, n = {}) {
        return Ts([
          GM,
          WM,
          { provide: qM, useValue: e },
          { provide: Rv, useValue: n },
          { provide: wf, useFactory: ZG, deps: [Rv, Xo] },
          { provide: nc, useFactory: XG, deps: [Nn, qM, Rv, Xo], multi: !0 },
        ]);
      }
      let KG = (() => {
        class e {
          static register(t, r = {}) {
            return { ngModule: e, providers: [YG(t, r)] };
          }
          static {
            this.ɵfac = function (r) {
              return new (r || e)();
            };
          }
          static {
            this.ɵmod = Vo({ type: e });
          }
          static {
            this.ɵinj = un({ providers: [GM, WM] });
          }
        }
        return e;
      })();
      let QG = (() => {
          class e {
            constructor() {}
            static ɵfac = function (r) {
              return new (r || e)();
            };
            static ɵcmp = Oe({
              type: e,
              selectors: [['app-root']],
              decls: 2,
              vars: 0,
              template: function (r, o) {
                1 & r && (vn(0, 'ion-app'), $r(1, 'ion-router-outlet'), Tn());
              },
              dependencies: [_M, $c],
              encapsulation: 2,
            });
          }
          return e;
        })(),
        YM = (() => {
          class e {
            http;
            apiUrl = 'http://localhost:8080/api';
            authToken = null;
            CACHE_PREFIX = 'bugtracker_cache_';
            CACHE_EXPIRY = 6048e5;
            constructor(t) {
              this.http = t;
            }
            setAuthToken(t) {
              (this.authToken = t), localStorage.setItem('auth_token', t);
            }
            getAuthToken() {
              return this.authToken || (this.authToken = localStorage.getItem('auth_token')), this.authToken;
            }
            clearAuthToken() {
              (this.authToken = null), localStorage.removeItem('auth_token');
            }
            getCachedData(t) {
              try {
                const r = localStorage.getItem(this.CACHE_PREFIX + t);
                if (!r) return null;
                const { data: o, timestamp: i } = JSON.parse(r);
                return Date.now() - i > this.CACHE_EXPIRY ? (localStorage.removeItem(this.CACHE_PREFIX + t), null) : o;
              } catch (r) {
                return console.error('Error reading cache:', r), null;
              }
            }
            setCachedData(t, r) {
              try {
                const o = { data: r, timestamp: Date.now() };
                localStorage.setItem(this.CACHE_PREFIX + t, JSON.stringify(o));
              } catch (o) {
                console.error('Error writing cache:', o);
              }
            }
            clearCachedData(t) {
              try {
                localStorage.removeItem(this.CACHE_PREFIX + t), console.log(`Cach\xe9 invalidado para: ${t}`);
              } catch (r) {
                console.error('Error clearing cache:', r);
              }
            }
            isOnline() {
              return navigator.onLine;
            }
            getHeaders() {
              const t = this.getAuthToken();
              let r = new ho({ 'Content-Type': 'application/json' });
              return t && (r = r.set('Authorization', `Bearer ${t}`)), r;
            }
            login(t, r) {
              return this.http.post(`${this.apiUrl}/authenticate`, { username: t, password: r });
            }
            getTickets() {
              const t = 'tickets';
              if (!this.isOnline()) {
                const r = this.getCachedData(t);
                return r
                  ? (console.log('Producci\xf3n - Offline: usando tickets del cach\xe9'), mt(r))
                  : uo(() => new Error('No hay conexi\xf3n y no hay datos en cach\xe9'));
              }
              return this.http.get(`${this.apiUrl}/tickets`, { headers: this.getHeaders() }).pipe(
                Hn(r => {
                  this.setCachedData(t, r), console.log('Producci\xf3n - Online: tickets obtenidos y guardados en cach\xe9');
                }),
                ti(r => {
                  if (!this.isOnline()) {
                    const o = this.getCachedData(t);
                    if (o) return console.log('Producci\xf3n - Conexi\xf3n perdida: usando tickets del cach\xe9'), mt(o);
                  }
                  return uo(() => r);
                }),
              );
            }
            getTicket(t) {
              return this.http.get(`${this.apiUrl}/tickets/${t}`, { headers: this.getHeaders() });
            }
            createTicket(t) {
              return this.http.post(`${this.apiUrl}/tickets`, t, { headers: this.getHeaders() }).pipe(
                Hn(() => {
                  this.clearCachedData('tickets');
                }),
              );
            }
            updateTicket(t) {
              return this.http.put(`${this.apiUrl}/tickets`, t, { headers: this.getHeaders() }).pipe(
                Hn(() => {
                  this.clearCachedData('tickets');
                }),
              );
            }
            deleteTicket(t) {
              return this.http.delete(`${this.apiUrl}/tickets/${t}`, { headers: this.getHeaders() }).pipe(
                Hn(() => {
                  this.clearCachedData('tickets');
                }),
              );
            }
            getProjects() {
              const t = 'projects';
              if (!this.isOnline()) {
                const r = this.getCachedData(t);
                return r
                  ? (console.log('Producci\xf3n - Offline: usando projects del cach\xe9'), mt(r))
                  : uo(() => new Error('No hay conexi\xf3n y no hay datos en cach\xe9'));
              }
              return this.http.get(`${this.apiUrl}/projects`, { headers: this.getHeaders() }).pipe(
                Hn(r => {
                  this.setCachedData(t, r), console.log('Producci\xf3n - Online: projects obtenidos y guardados en cach\xe9');
                }),
                ti(r => {
                  if (!this.isOnline()) {
                    const o = this.getCachedData(t);
                    if (o) return console.log('Producci\xf3n - Conexi\xf3n perdida: usando projects del cach\xe9'), mt(o);
                  }
                  return uo(() => r);
                }),
              );
            }
            getProject(t) {
              return this.http.get(`${this.apiUrl}/projects/${t}`, { headers: this.getHeaders() });
            }
            createProject(t) {
              return this.http.post(`${this.apiUrl}/projects`, t, { headers: this.getHeaders() }).pipe(
                Hn(() => {
                  this.clearCachedData('projects');
                }),
              );
            }
            updateProject(t) {
              return this.http.put(`${this.apiUrl}/projects`, t, { headers: this.getHeaders() }).pipe(
                Hn(() => {
                  this.clearCachedData('projects');
                }),
              );
            }
            deleteProject(t) {
              return this.http.delete(`${this.apiUrl}/projects/${t}`, { headers: this.getHeaders() }).pipe(
                Hn(() => {
                  this.clearCachedData('projects');
                }),
              );
            }
            static ɵfac = function (r) {
              return new (r || e)(dt(MT));
            };
            static ɵprov = B({ token: e, factory: e.ɵfac, providedIn: 'root' });
          }
          return e;
        })();
      function JG(e, n) {
        if (1 & e) {
          const t = ld();
          vn(0, 'div', 14)(1, 'ion-button', 15),
            Bn('click', function () {
              return ol(t), il(yo().loadDataOnClick());
            }),
            $r(2, 'ion-icon', 16),
            vr(3, ' Cargar Datos '),
            Tn(),
            vn(4, 'p', 17),
            vr(5, 'Presiona el bot\xf3n para cargar tickets y proyectos'),
            Tn()();
        }
      }
      function e8(e, n) {
        1 & e && (vn(0, 'div', 18), $r(1, 'ion-spinner', 19), vn(2, 'p'), vr(3, 'Cargando datos...'), Tn()());
      }
      function t8(e, n) {
        if (1 & e) {
          const t = ld();
          vn(0, 'div', 20)(1, 'ion-button', 21),
            Bn('click', function () {
              return ol(t), il(yo().loadDataOnClick());
            }),
            $r(2, 'ion-icon', 16),
            vr(3, ' Actualizar Datos '),
            Tn()();
        }
      }
      function n8(e, n) {
        if ((1 & e && (vn(0, 'ion-badge', 1), vr(1), Tn()), 2 & e)) {
          const t = yo(2);
          kn(), ma(t.tickets.length);
        }
      }
      function r8(e, n) {
        if ((1 & e && (vn(0, 'p', 36), vr(1), Tn()), 2 & e)) {
          const t = yo().$implicit;
          kn(), fs(' ', t.description, ' ');
        }
      }
      function o8(e, n) {
        if ((1 & e && (vn(0, 'ion-badge', 37), vr(1), Tn()), 2 & e)) {
          const t = yo().$implicit;
          kn(), fs(' ', t.priority, ' ');
        }
      }
      function i8(e, n) {
        if (
          (1 & e &&
            (vn(0, 'ion-item', 28),
            $r(1, 'ion-icon', 29),
            vn(2, 'ion-label')(3, 'h2', 30),
            vr(4),
            Tn(),
            eo(5, r8, 2, 1, 'p', 31),
            vn(6, 'div', 32)(7, 'ion-badge', 33),
            vr(8),
            Tn(),
            vn(9, 'ion-badge', 34),
            vr(10),
            Tn(),
            eo(11, o8, 2, 1, 'ion-badge', 35),
            Tn()()()),
          2 & e)
        ) {
          const t = n.$implicit,
            r = yo(2);
          kn(),
            Zn('name', 'BUG' === t.type ? 'bug-outline' : 'star-outline')('color', 'BUG' === t.type ? 'danger' : 'warning'),
            kn(3),
            ma(t.title),
            kn(),
            Zn('ngIf', t.description),
            kn(2),
            Zn('color', r.getStatusColor(t.status)),
            kn(),
            fs(' ', t.status, ' '),
            kn(),
            Zn('color', 'BUG' === t.type ? 'danger' : 'warning'),
            kn(),
            fs(' ', t.type, ' '),
            kn(),
            Zn('ngIf', t.priority);
        }
      }
      function s8(e, n) {
        1 & e &&
          (vn(0, 'ion-item', 38)(1, 'ion-label', 39), $r(2, 'ion-icon', 40), vn(3, 'p'), vr(4, 'No hay tickets disponibles'), Tn()()());
      }
      function a8(e, n) {
        if (
          (1 & e &&
            (vn(0, 'ion-card', 22)(1, 'ion-card-header')(2, 'ion-card-title'),
            $r(3, 'ion-icon', 23),
            vr(4, ' Tickets '),
            eo(5, n8, 2, 1, 'ion-badge', 24),
            Tn()(),
            vn(6, 'ion-card-content')(7, 'ion-list', 25),
            eo(8, i8, 12, 9, 'ion-item', 26)(9, s8, 5, 0, 'ion-item', 27),
            Tn()()()),
          2 & e)
        ) {
          const t = yo();
          kn(5), Zn('ngIf', t.tickets.length > 0), kn(3), Zn('ngForOf', t.tickets), kn(), Zn('ngIf', 0 === t.tickets.length && !t.loading);
        }
      }
      function l8(e, n) {
        if ((1 & e && (vn(0, 'ion-badge', 45), vr(1), Tn()), 2 & e)) {
          const t = yo(2);
          kn(), ma(t.projects.length);
        }
      }
      function c8(e, n) {
        if ((1 & e && (vn(0, 'ion-item', 46), $r(1, 'ion-icon', 47), vn(2, 'ion-label')(3, 'h2', 48), vr(4), Tn()()()), 2 & e)) {
          const t = n.$implicit;
          kn(4), ma(t.name);
        }
      }
      function u8(e, n) {
        1 & e &&
          (vn(0, 'ion-item', 38)(1, 'ion-label', 39), $r(2, 'ion-icon', 49), vn(3, 'p'), vr(4, 'No hay proyectos disponibles'), Tn()()());
      }
      function d8(e, n) {
        if (
          (1 & e &&
            (vn(0, 'ion-card', 41)(1, 'ion-card-header')(2, 'ion-card-title'),
            $r(3, 'ion-icon', 42),
            vr(4, ' Proyectos '),
            eo(5, l8, 2, 1, 'ion-badge', 43),
            Tn()(),
            vn(6, 'ion-card-content')(7, 'ion-list', 25),
            eo(8, c8, 5, 1, 'ion-item', 44)(9, u8, 5, 0, 'ion-item', 27),
            Tn()()()),
          2 & e)
        ) {
          const t = yo();
          kn(5),
            Zn('ngIf', t.projects.length > 0),
            kn(3),
            Zn('ngForOf', t.projects),
            kn(),
            Zn('ngIf', 0 === t.projects.length && !t.loading);
        }
      }
      const f8 = [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {
          path: 'home',
          component: (() => {
            class e {
              apiService;
              tickets = [];
              projects = [];
              loading = !1;
              constructor(t) {
                this.apiService = t;
              }
              ngOnInit() {
                console.log('HomePage initialized');
              }
              authenticateAndLoadData() {
                if (this.apiService.getAuthToken()) return console.log('Token encontrado, cargando datos...'), void this.loadData();
                console.log('No hay token, haciendo login autom\xe1tico...'),
                  this.apiService.login('admin', 'admin').subscribe({
                    next: r => {
                      const o = r.id_token;
                      o
                        ? (this.apiService.setAuthToken(o), console.log('Login exitoso, cargando datos...'), this.loadData())
                        : console.error('No se recibi\xf3 token en la respuesta:', r);
                    },
                    error: r => {
                      console.error('Error en login con admin:', r),
                        this.apiService.login('user', 'user').subscribe({
                          next: o => {
                            const i = o.id_token;
                            i
                              ? (this.apiService.setAuthToken(i),
                                console.log('Login exitoso con usuario "user", cargando datos...'),
                                this.loadData())
                              : console.error('No se recibi\xf3 token en la respuesta:', o);
                          },
                          error: o => {
                            console.error('Error en login con usuario "user":', o);
                          },
                        });
                    },
                  });
              }
              loadData() {
                (this.loading = !0),
                  this.apiService.getTickets().subscribe({
                    next: t => {
                      (this.tickets = t), (this.loading = !1), console.log('Tickets cargados:', t.length);
                    },
                    error: t => {
                      console.error('Error loading tickets:', t),
                        (this.loading = !1),
                        401 === t.status
                          ? (console.log('Token expirado o inv\xe1lido, intentando login de nuevo...'),
                            this.apiService.clearAuthToken(),
                            this.authenticateAndLoadData())
                          : 0 === this.tickets.length && console.log('No tickets loaded, showing empty state');
                    },
                  }),
                  this.apiService.getProjects().subscribe({
                    next: t => {
                      (this.projects = t), console.log('Projects cargados:', t.length);
                    },
                    error: t => {
                      console.error('Error loading projects:', t),
                        401 === t.status &&
                          (console.log('Token expirado al cargar projects, intentando login de nuevo...'),
                          this.apiService.clearAuthToken(),
                          this.authenticateAndLoadData());
                    },
                  });
              }
              loadDataOnClick() {
                this.loading || this.authenticateAndLoadData();
              }
              refresh(t) {
                this.loadData(),
                  setTimeout(() => {
                    t.target.complete();
                  }, 1e3);
              }
              getStatusColor(t) {
                switch (t) {
                  case 'OPEN':
                    return 'primary';
                  case 'IN_PROGRESS':
                    return 'warning';
                  case 'CLOSED':
                  case 'SOLVED':
                    return 'success';
                  default:
                    return 'medium';
                }
              }
              static ɵfac = function (r) {
                return new (r || e)(h(YM));
              };
              static ɵcmp = Oe({
                type: e,
                selectors: [['app-home']],
                decls: 19,
                vars: 7,
                consts: [
                  [3, 'translucent'],
                  ['color', 'primary'],
                  [2, 'display', 'inline-flex', 'align-items', 'center', 'gap', '8px'],
                  ['name', 'bug-outline'],
                  [3, 'fullscreen'],
                  ['collapse', 'condense'],
                  ['size', 'large'],
                  ['slot', 'fixed', 3, 'ionRefresh'],
                  [1, 'main-container'],
                  ['class', 'load-button-container', 4, 'ngIf'],
                  ['class', 'loading-container', 4, 'ngIf'],
                  ['class', 'reload-button-container', 4, 'ngIf'],
                  ['class', 'ticket-card', 4, 'ngIf'],
                  ['class', 'project-card', 4, 'ngIf'],
                  [1, 'load-button-container'],
                  ['expand', 'block', 'size', 'large', 'color', 'primary', 1, 'load-button', 3, 'click'],
                  ['slot', 'start', 'name', 'refresh-outline'],
                  [1, 'help-text'],
                  [1, 'loading-container'],
                  ['name', 'crescent', 'color', 'primary'],
                  [1, 'reload-button-container'],
                  ['expand', 'block', 'fill', 'outline', 'color', 'primary', 1, 'reload-button', 3, 'click'],
                  [1, 'ticket-card'],
                  ['name', 'list-outline', 'color', 'primary'],
                  ['color', 'primary', 4, 'ngIf'],
                  ['lines', 'full'],
                  ['class', 'ticket-item', 4, 'ngFor', 'ngForOf'],
                  ['class', 'empty-item', 4, 'ngIf'],
                  [1, 'ticket-item'],
                  ['slot', 'start', 3, 'name', 'color'],
                  [1, 'ticket-title'],
                  ['class', 'ticket-description', 4, 'ngIf'],
                  [1, 'badge-container'],
                  [1, 'status-badge', 3, 'color'],
                  [1, 'type-badge', 3, 'color'],
                  ['color', 'tertiary', 'class', 'priority-badge', 4, 'ngIf'],
                  [1, 'ticket-description'],
                  ['color', 'tertiary', 1, 'priority-badge'],
                  [1, 'empty-item'],
                  [1, 'empty-label'],
                  ['name', 'document-text-outline', 'color', 'medium'],
                  [1, 'project-card'],
                  ['name', 'folder-outline', 'color', 'success'],
                  ['color', 'success', 4, 'ngIf'],
                  ['class', 'project-item', 4, 'ngFor', 'ngForOf'],
                  ['color', 'success'],
                  [1, 'project-item'],
                  ['slot', 'start', 'name', 'folder', 'color', 'success'],
                  [1, 'project-name'],
                  ['name', 'folder-open-outline', 'color', 'medium'],
                ],
                template: function (r, o) {
                  1 & r &&
                    (vn(0, 'ion-header', 0)(1, 'ion-toolbar', 1)(2, 'ion-title')(3, 'span', 2),
                    $r(4, 'ion-icon', 3),
                    vr(5, ' BugTracker '),
                    Tn()()()(),
                    vn(6, 'ion-content', 4)(7, 'ion-header', 5)(8, 'ion-toolbar')(9, 'ion-title', 6),
                    vr(10, 'BugTracker'),
                    Tn()()(),
                    vn(11, 'ion-refresher', 7),
                    Bn('ionRefresh', function (s) {
                      return o.refresh(s);
                    }),
                    $r(12, 'ion-refresher-content'),
                    Tn(),
                    vn(13, 'div', 8),
                    eo(14, JG, 6, 0, 'div', 9)(15, e8, 4, 0, 'div', 10)(16, t8, 4, 0, 'div', 11)(17, a8, 10, 3, 'ion-card', 12)(
                      18,
                      d8,
                      10,
                      3,
                      'ion-card',
                      13,
                    ),
                    Tn()()),
                    2 & r &&
                      (Zn('translucent', !0),
                      kn(6),
                      Zn('fullscreen', !0),
                      kn(8),
                      Zn('ngIf', 0 === o.tickets.length && 0 === o.projects.length && !o.loading),
                      kn(),
                      Zn('ngIf', o.loading),
                      kn(),
                      Zn('ngIf', (o.tickets.length > 0 || o.projects.length > 0) && !o.loading),
                      kn(),
                      Zn('ngIf', o.tickets.length > 0 || !o.loading),
                      kn(),
                      Zn('ngIf', o.projects.length > 0 || !o.loading));
                },
                dependencies: [_I, $d, CM, bM, EM, wM, IM, TM, SM, MM, AM, xM, RM, OM, NM, kM, PM, FM, LM],
                styles: [
                  '.main-container[_ngcontent-%COMP%]{padding:16px;max-width:1200px;margin:0 auto}.load-button-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;padding:32px}.load-button-container[_ngcontent-%COMP%]   .load-button[_ngcontent-%COMP%]{--padding-start: 32px;--padding-end: 32px;--padding-top: 16px;--padding-bottom: 16px;font-size:18px;font-weight:600;border-radius:12px;box-shadow:0 4px 12px #3880ff4d;margin-bottom:16px;min-width:200px}.load-button-container[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%]{color:var(--ion-color-medium);font-size:14px;margin-top:16px;text-align:center}.reload-button-container[_ngcontent-%COMP%]{margin:16px 0}.reload-button-container[_ngcontent-%COMP%]   .reload-button[_ngcontent-%COMP%]{--border-radius: 12px;margin:0 16px}.loading-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:50vh}.loading-container[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{width:48px;height:48px;margin-bottom:16px}.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-medium);font-size:16px}ion-card[_ngcontent-%COMP%]{margin:16px;border-radius:16px;box-shadow:0 4px 16px #0000001a;overflow:hidden}ion-card.ticket-card[_ngcontent-%COMP%]{--background: #ffffff}ion-card.project-card[_ngcontent-%COMP%]{--background: #ffffff}ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--ion-color-primary-tint),var(--ion-color-primary));padding:20px}ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{color:#fff;font-size:22px;font-weight:600;display:flex;align-items:center;gap:12px}ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:28px}ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{margin-left:auto;font-size:14px;--padding-start: 12px;--padding-end: 12px;--padding-top: 6px;--padding-bottom: 6px}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:0}.ticket-item[_ngcontent-%COMP%]{--padding-start: 16px;--padding-end: 16px;--inner-padding-end: 0;border-bottom:1px solid var(--ion-color-light)}.ticket-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.ticket-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px;margin-right:12px}.ticket-item[_ngcontent-%COMP%]   .ticket-title[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:var(--ion-color-dark);margin-bottom:8px}.ticket-item[_ngcontent-%COMP%]   .ticket-description[_ngcontent-%COMP%]{font-size:14px;color:var(--ion-color-medium);margin-bottom:12px;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.ticket-item[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.ticket-item[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{font-size:11px;--padding-start: 8px;--padding-end: 8px;--padding-top: 4px;--padding-bottom: 4px;font-weight:500}.ticket-item[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%], .ticket-item[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%], .ticket-item[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%]{text-transform:capitalize}.project-item[_ngcontent-%COMP%]{--padding-start: 16px;--padding-end: 16px;--inner-padding-end: 0;border-bottom:1px solid var(--ion-color-light)}.project-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.project-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px;margin-right:12px}.project-item[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:var(--ion-color-dark)}.empty-item[_ngcontent-%COMP%]{--padding-start: 16px;--padding-end: 16px;min-height:100px}.empty-item[_ngcontent-%COMP%]   .empty-label[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:var(--ion-color-medium)}.empty-item[_ngcontent-%COMP%]   .empty-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:48px;margin-bottom:16px;opacity:.5}.empty-item[_ngcontent-%COMP%]   .empty-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;margin:0}ion-list[_ngcontent-%COMP%]{padding:8px 0}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-child{--border-width: 0}@media (min-width: 768px){.main-container[_ngcontent-%COMP%]{padding:24px}ion-card[_ngcontent-%COMP%]{margin:16px auto;max-width:800px}}',
                ],
              });
            }
            return e;
          })(),
        },
      ];
      let h8 = (() => {
          class e {
            static ɵfac = function (r) {
              return new (r || e)();
            };
            static ɵmod = Vo({ type: e });
            static ɵinj = un({ imports: [bT.forRoot(f8), bT] });
          }
          return e;
        })(),
        p8 = (() => {
          class e {
            static ɵfac = function (r) {
              return new (r || e)();
            };
            static ɵmod = Vo({ type: e, bootstrap: [QG] });
            static ɵinj = un({
              providers: [{ provide: fT, useClass: Jz }, YM],
              imports: [
                Uj,
                nm,
                kG.forRoot(),
                h8,
                j4,
                KG.register('ngsw-worker.js', { enabled: true, registrationStrategy: 'registerWhenStable:30000' }),
              ],
            });
          }
          return e;
        })();
      Bj()
        .bootstrapModule(p8)
        .catch(e => console.error(e));
    },
    6935: () => {
      'use strict';
      const cn = globalThis;
      function vt(w) {
        return (cn.__Zone_symbol_prefix || '__zone_symbol__') + w;
      }
      const Ke = Object.getOwnPropertyDescriptor,
        Ue = Object.defineProperty,
        st = Object.getPrototypeOf,
        bt = Object.create,
        Fe = Array.prototype.slice,
        S = 'addEventListener',
        Me = 'removeEventListener',
        it = vt(S),
        et = vt(Me),
        he = 'true',
        Re = 'false',
        re = vt('');
      function fe(w, A) {
        return Zone.current.wrap(w, A);
      }
      function oe(w, A, le, T, Y) {
        return Zone.current.scheduleMacroTask(w, A, le, T, Y);
      }
      const J = vt,
        G = typeof window < 'u',
        P = G ? window : void 0,
        x = (G && P) || globalThis,
        me = 'removeAttribute';
      function De(w, A) {
        for (let le = w.length - 1; le >= 0; le--) 'function' == typeof w[le] && (w[le] = fe(w[le], A + '_' + le));
        return w;
      }
      function Ee(w) {
        return !w || (!1 !== w.writable && !('function' == typeof w.get && typeof w.set > 'u'));
      }
      const Ne = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope,
        y = !('nw' in x) && typeof x.process < 'u' && '[object process]' === x.process.toString(),
        D = !y && !Ne && !(!G || !P.HTMLElement),
        M = typeof x.process < 'u' && '[object process]' === x.process.toString() && !Ne && !(!G || !P.HTMLElement),
        b = {},
        L = J('enable_beforeunload'),
        N = function (w) {
          if (!(w = w || x.event)) return;
          let A = b[w.type];
          A || (A = b[w.type] = J('ON_PROPERTY' + w.type));
          const le = this || w.target || x,
            T = le[A];
          let Y;
          return (
            D && le === P && 'error' === w.type
              ? ((Y = T && T.call(this, w.message, w.filename, w.lineno, w.colno, w.error)), !0 === Y && w.preventDefault())
              : ((Y = T && T.apply(this, arguments)),
                'beforeunload' === w.type && x[L] && 'string' == typeof Y ? (w.returnValue = Y) : null != Y && !Y && w.preventDefault()),
            Y
          );
        };
      function W(w, A, le) {
        let T = Ke(w, A);
        if ((!T && le && Ke(le, A) && (T = { enumerable: !0, configurable: !0 }), !T || !T.configurable)) return;
        const Y = J('on' + A + 'patched');
        if (w.hasOwnProperty(Y) && w[Y]) return;
        delete T.writable, delete T.value;
        const Te = T.get,
          rt = T.set,
          at = A.slice(2);
        let pt = b[at];
        pt || (pt = b[at] = J('ON_PROPERTY' + at)),
          (T.set = function (Je) {
            let lt = this;
            !lt && w === x && (lt = x),
              lt &&
                ('function' == typeof lt[pt] && lt.removeEventListener(at, N),
                rt && rt.call(lt, null),
                (lt[pt] = Je),
                'function' == typeof Je && lt.addEventListener(at, N, !1));
          }),
          (T.get = function () {
            let Je = this;
            if ((!Je && w === x && (Je = x), !Je)) return null;
            const lt = Je[pt];
            if (lt) return lt;
            if (Te) {
              let St = Te.call(this);
              if (St) return T.set.call(this, St), 'function' == typeof Je[me] && Je.removeAttribute(A), St;
            }
            return null;
          }),
          Ue(w, A, T),
          (w[Y] = !0);
      }
      function Ie(w, A, le) {
        if (A) for (let T = 0; T < A.length; T++) W(w, 'on' + A[T], le);
        else {
          const T = [];
          for (const Y in w) 'on' == Y.slice(0, 2) && T.push(Y);
          for (let Y = 0; Y < T.length; Y++) W(w, T[Y], le);
        }
      }
      const tt = J('originalInstance');
      function Bt(w) {
        const A = x[w];
        if (!A) return;
        (x[J(w)] = A),
          (x[w] = function () {
            const Y = De(arguments, w);
            switch (Y.length) {
              case 0:
                this[tt] = new A();
                break;
              case 1:
                this[tt] = new A(Y[0]);
                break;
              case 2:
                this[tt] = new A(Y[0], Y[1]);
                break;
              case 3:
                this[tt] = new A(Y[0], Y[1], Y[2]);
                break;
              case 4:
                this[tt] = new A(Y[0], Y[1], Y[2], Y[3]);
                break;
              default:
                throw new Error('Arg list too long.');
            }
          }),
          U(x[w], A);
        const le = new A(function () {});
        let T;
        for (T in le)
          ('XMLHttpRequest' === w && 'responseBlob' === T) ||
            (function (Y) {
              'function' == typeof le[Y]
                ? (x[w].prototype[Y] = function () {
                    return this[tt][Y].apply(this[tt], arguments);
                  })
                : Ue(x[w].prototype, Y, {
                    set: function (Te) {
                      'function' == typeof Te ? ((this[tt][Y] = fe(Te, w + '.' + Y)), U(this[tt][Y], Te)) : (this[tt][Y] = Te);
                    },
                    get: function () {
                      return this[tt][Y];
                    },
                  });
            })(T);
        for (T in A) 'prototype' !== T && A.hasOwnProperty(T) && (x[w][T] = A[T]);
      }
      function Z(w, A, le) {
        let T = w;
        for (; T && !T.hasOwnProperty(A); ) T = st(T);
        !T && w[A] && (T = w);
        const Y = J(A);
        let Te = null;
        if (T && (!(Te = T[Y]) || !T.hasOwnProperty(Y)) && ((Te = T[Y] = T[A]), Ee(T && Ke(T, A)))) {
          const at = le(Te, Y, A);
          (T[A] = function () {
            return at(this, arguments);
          }),
            U(T[A], Te);
        }
        return Te;
      }
      function xe(w, A, le) {
        let T = null;
        function Y(Te) {
          const rt = Te.data;
          return (
            (rt.args[rt.cbIdx] = function () {
              Te.invoke.apply(this, arguments);
            }),
            T.apply(rt.target, rt.args),
            Te
          );
        }
        T = Z(
          w,
          A,
          Te =>
            function (rt, at) {
              const pt = le(rt, at);
              return pt.cbIdx >= 0 && 'function' == typeof at[pt.cbIdx] ? oe(pt.name, at[pt.cbIdx], pt, Y) : Te.apply(rt, at);
            },
        );
      }
      function U(w, A) {
        w[J('OriginalDelegate')] = A;
      }
      let ie = !1,
        Pe = !1;
      function qe() {
        if (ie) return Pe;
        ie = !0;
        try {
          const w = P.navigator.userAgent;
          (-1 !== w.indexOf('MSIE ') || -1 !== w.indexOf('Trident/') || -1 !== w.indexOf('Edge/')) && (Pe = !0);
        } catch {}
        return Pe;
      }
      function xt(w) {
        return 'function' == typeof w;
      }
      function Rt(w) {
        return 'number' == typeof w;
      }
      let Xe = !1;
      if (typeof window < 'u')
        try {
          const w = Object.defineProperty({}, 'passive', {
            get: function () {
              Xe = !0;
            },
          });
          window.addEventListener('test', w, w), window.removeEventListener('test', w, w);
        } catch {
          Xe = !1;
        }
      const Fn = { useG: !0 },
        Zt = {},
        tr = {},
        yt = new RegExp('^' + re + '(\\w+)(true|false)$'),
        wn = J('propagationStopped');
      function qt(w, A) {
        const le = (A ? A(w) : w) + Re,
          T = (A ? A(w) : w) + he,
          Y = re + le,
          Te = re + T;
        (Zt[w] = {}), (Zt[w][Re] = Y), (Zt[w][he] = Te);
      }
      function ae(w, A, le, T) {
        const Y = (T && T.add) || S,
          Te = (T && T.rm) || Me,
          rt = (T && T.listeners) || 'eventListeners',
          at = (T && T.rmAll) || 'removeAllListeners',
          pt = J(Y),
          Je = '.' + Y + ':',
          lt = 'prependListener',
          St = '.' + lt + ':',
          jt = function (Le, Ce, nn) {
            if (Le.isRemoved) return;
            const nt = Le.callback;
            let Mn;
            'object' == typeof nt && nt.handleEvent && ((Le.callback = O => nt.handleEvent(O)), (Le.originalDelegate = nt));
            try {
              Le.invoke(Le, Ce, [nn]);
            } catch (O) {
              Mn = O;
            }
            const pn = Le.options;
            return (
              pn &&
                'object' == typeof pn &&
                pn.once &&
                Ce[Te].call(Ce, nn.type, Le.originalDelegate ? Le.originalDelegate : Le.callback, pn),
              Mn
            );
          };
        function en(Le, Ce, nn) {
          if (!(Ce = Ce || w.event)) return;
          const nt = Le || Ce.target || w,
            Mn = nt[Zt[Ce.type][nn ? he : Re]];
          if (Mn) {
            const pn = [];
            if (1 === Mn.length) {
              const O = jt(Mn[0], nt, Ce);
              O && pn.push(O);
            } else {
              const O = Mn.slice();
              for (let an = 0; an < O.length && (!Ce || !0 !== Ce[wn]); an++) {
                const Ot = jt(O[an], nt, Ce);
                Ot && pn.push(Ot);
              }
            }
            if (1 === pn.length) throw pn[0];
            for (let O = 0; O < pn.length; O++) {
              const an = pn[O];
              A.nativeScheduleMicroTask(() => {
                throw an;
              });
            }
          }
        }
        const _t = function (Le) {
            return en(this, Le, !1);
          },
          Sn = function (Le) {
            return en(this, Le, !0);
          };
        function wt(Le, Ce) {
          if (!Le) return !1;
          let nn = !0;
          Ce && void 0 !== Ce.useG && (nn = Ce.useG);
          const nt = Ce && Ce.vh;
          let Mn = !0;
          Ce && void 0 !== Ce.chkDup && (Mn = Ce.chkDup);
          let pn = !1;
          Ce && void 0 !== Ce.rt && (pn = Ce.rt);
          let O = Le;
          for (; O && !O.hasOwnProperty(Y); ) O = st(O);
          if ((!O && Le[Y] && (O = Le), !O || O[pt])) return !1;
          const an = Ce && Ce.eventNameToString,
            Ot = {},
            It = (O[pt] = O[Y]),
            Ct = (O[J(Te)] = O[Te]),
            Pt = (O[J(rt)] = O[rt]),
            Qn = (O[J(at)] = O[at]);
          let ln;
          Ce && Ce.prepend && (ln = O[J(Ce.prepend)] = O[Ce.prepend]);
          const fn = nn
              ? function (z) {
                  if (!Ot.isExisting) return It.call(Ot.target, Ot.eventName, Ot.capture ? Sn : _t, Ot.options);
                }
              : function (z) {
                  return It.call(Ot.target, Ot.eventName, z.invoke, Ot.options);
                },
            ot = nn
              ? function (z) {
                  if (!z.isRemoved) {
                    const we = Zt[z.eventName];
                    let ke;
                    we && (ke = we[z.capture ? he : Re]);
                    const ye = ke && z.target[ke];
                    if (ye)
                      for (let ut = 0; ut < ye.length; ut++)
                        if (ye[ut] === z) {
                          ye.splice(ut, 1),
                            (z.isRemoved = !0),
                            z.removeAbortListener && (z.removeAbortListener(), (z.removeAbortListener = null)),
                            0 === ye.length && ((z.allRemoved = !0), (z.target[ke] = null));
                          break;
                        }
                  }
                  if (z.allRemoved) return Ct.call(z.target, z.eventName, z.capture ? Sn : _t, z.options);
                }
              : function (z) {
                  return Ct.call(z.target, z.eventName, z.invoke, z.options);
                },
            Er =
              Ce && Ce.diff
                ? Ce.diff
                : function (z, we) {
                    const ke = typeof we;
                    return ('function' === ke && z.callback === we) || ('object' === ke && z.originalDelegate === we);
                  },
            Ut = Zone[J('UNPATCHED_EVENTS')],
            Jn = w[J('PASSIVE_EVENTS')],
            te = function (z, we, ke, ye, ut = !1, gt = !1) {
              return function () {
                const Ft = this || w;
                let Lt = arguments[0];
                Ce && Ce.transferEventName && (Lt = Ce.transferEventName(Lt));
                let gn = arguments[1];
                if (!gn) return z.apply(this, arguments);
                if (y && 'uncaughtException' === Lt) return z.apply(this, arguments);
                let Kt = !1;
                if ('function' != typeof gn) {
                  if (!gn.handleEvent) return z.apply(this, arguments);
                  Kt = !0;
                }
                if (nt && !nt(z, gn, Ft, arguments)) return;
                const qr = Xe && !!Jn && -1 !== Jn.indexOf(Lt),
                  k = (function ee(z) {
                    if ('object' == typeof z && null !== z) {
                      const we = { ...z };
                      return z.signal && (we.signal = z.signal), we;
                    }
                    return z;
                  })(
                    (function Mt(z, we) {
                      return !Xe && 'object' == typeof z && z
                        ? !!z.capture
                        : Xe && we
                          ? 'boolean' == typeof z
                            ? { capture: z, passive: !0 }
                            : z
                              ? 'object' == typeof z && !1 !== z.passive
                                ? { ...z, passive: !0 }
                                : z
                              : { passive: !0 }
                          : z;
                    })(arguments[2], qr),
                  ),
                  _e = k?.signal;
                if (_e?.aborted) return;
                if (Ut) for (let B = 0; B < Ut.length; B++) if (Lt === Ut[B]) return qr ? z.call(Ft, Lt, gn, k) : z.apply(this, arguments);
                const f = !!k && ('boolean' == typeof k || k.capture),
                  p = !(!k || 'object' != typeof k) && k.once,
                  _ = Zone.current;
                let C = Zt[Lt];
                C || (qt(Lt, an), (C = Zt[Lt]));
                const j = C[f ? he : Re];
                let ue,
                  R = Ft[j],
                  $ = !1;
                if (R) {
                  if ((($ = !0), Mn)) for (let B = 0; B < R.length; B++) if (Er(R[B], gn)) return;
                } else R = Ft[j] = [];
                const ve = Ft.constructor.name,
                  pe = tr[ve];
                pe && (ue = pe[Lt]),
                  ue || (ue = ve + we + (an ? an(Lt) : Lt)),
                  (Ot.options = k),
                  p && (Ot.options.once = !1),
                  (Ot.target = Ft),
                  (Ot.capture = f),
                  (Ot.eventName = Lt),
                  (Ot.isExisting = $);
                const be = nn ? Fn : void 0;
                be && (be.taskData = Ot), _e && (Ot.options.signal = void 0);
                const Be = _.scheduleEventTask(ue, gn, be, ke, ye);
                if (_e) {
                  Ot.options.signal = _e;
                  const B = () => Be.zone.cancelTask(Be);
                  z.call(_e, 'abort', B, { once: !0 }), (Be.removeAbortListener = () => _e.removeEventListener('abort', B));
                }
                return (
                  (Ot.target = null),
                  be && (be.taskData = null),
                  p && (Ot.options.once = !0),
                  (!Xe && 'boolean' == typeof Be.options) || (Be.options = k),
                  (Be.target = Ft),
                  (Be.capture = f),
                  (Be.eventName = Lt),
                  Kt && (Be.originalDelegate = gn),
                  gt ? R.unshift(Be) : R.push(Be),
                  ut ? Ft : void 0
                );
              };
            };
          return (
            (O[Y] = te(It, Je, fn, ot, pn)),
            ln &&
              (O[lt] = te(
                ln,
                St,
                function (z) {
                  return ln.call(Ot.target, Ot.eventName, z.invoke, Ot.options);
                },
                ot,
                pn,
                !0,
              )),
            (O[Te] = function () {
              const z = this || w;
              let we = arguments[0];
              Ce && Ce.transferEventName && (we = Ce.transferEventName(we));
              const ke = arguments[2],
                ye = !!ke && ('boolean' == typeof ke || ke.capture),
                ut = arguments[1];
              if (!ut) return Ct.apply(this, arguments);
              if (nt && !nt(Ct, ut, z, arguments)) return;
              const gt = Zt[we];
              let Ft;
              gt && (Ft = gt[ye ? he : Re]);
              const Lt = Ft && z[Ft];
              if (Lt)
                for (let gn = 0; gn < Lt.length; gn++) {
                  const Kt = Lt[gn];
                  if (Er(Kt, ut))
                    return (
                      Lt.splice(gn, 1),
                      (Kt.isRemoved = !0),
                      0 !== Lt.length ||
                        ((Kt.allRemoved = !0), (z[Ft] = null), ye || 'string' != typeof we) ||
                        (z[re + 'ON_PROPERTY' + we] = null),
                      Kt.zone.cancelTask(Kt),
                      pn ? z : void 0
                    );
                }
              return Ct.apply(this, arguments);
            }),
            (O[rt] = function () {
              const z = this || w;
              let we = arguments[0];
              Ce && Ce.transferEventName && (we = Ce.transferEventName(we));
              const ke = [],
                ye = H(z, an ? an(we) : we);
              for (let ut = 0; ut < ye.length; ut++) {
                const gt = ye[ut];
                ke.push(gt.originalDelegate ? gt.originalDelegate : gt.callback);
              }
              return ke;
            }),
            (O[at] = function () {
              const z = this || w;
              let we = arguments[0];
              if (we) {
                Ce && Ce.transferEventName && (we = Ce.transferEventName(we));
                const ke = Zt[we];
                if (ke) {
                  const gt = z[ke[Re]],
                    Ft = z[ke[he]];
                  if (gt) {
                    const Lt = gt.slice();
                    for (let gn = 0; gn < Lt.length; gn++) {
                      const Kt = Lt[gn];
                      this[Te].call(this, we, Kt.originalDelegate ? Kt.originalDelegate : Kt.callback, Kt.options);
                    }
                  }
                  if (Ft) {
                    const Lt = Ft.slice();
                    for (let gn = 0; gn < Lt.length; gn++) {
                      const Kt = Lt[gn];
                      this[Te].call(this, we, Kt.originalDelegate ? Kt.originalDelegate : Kt.callback, Kt.options);
                    }
                  }
                }
              } else {
                const ke = Object.keys(z);
                for (let ye = 0; ye < ke.length; ye++) {
                  const gt = yt.exec(ke[ye]);
                  let Ft = gt && gt[1];
                  Ft && 'removeListener' !== Ft && this[at].call(this, Ft);
                }
                this[at].call(this, 'removeListener');
              }
              if (pn) return this;
            }),
            U(O[Y], It),
            U(O[Te], Ct),
            Qn && U(O[at], Qn),
            Pt && U(O[rt], Pt),
            !0
          );
        }
        let sn = [];
        for (let Le = 0; Le < le.length; Le++) sn[Le] = wt(le[Le], T);
        return sn;
      }
      function H(w, A) {
        if (!A) {
          const Te = [];
          for (let rt in w) {
            const at = yt.exec(rt);
            let pt = at && at[1];
            if (pt && (!A || pt === A)) {
              const Je = w[rt];
              if (Je) for (let lt = 0; lt < Je.length; lt++) Te.push(Je[lt]);
            }
          }
          return Te;
        }
        let le = Zt[A];
        le || (qt(A), (le = Zt[A]));
        const T = w[le[Re]],
          Y = w[le[he]];
        return T ? (Y ? T.concat(Y) : T.slice()) : Y ? Y.slice() : [];
      }
      function X(w, A) {
        const le = w.Event;
        le &&
          le.prototype &&
          A.patchMethod(
            le.prototype,
            'stopImmediatePropagation',
            T =>
              function (Y, Te) {
                (Y[wn] = !0), T && T.apply(Y, Te);
              },
          );
      }
      const Tt = J('zoneTask');
      function Yt(w, A, le, T) {
        let Y = null,
          Te = null;
        le += T;
        const rt = {};
        function at(Je) {
          const lt = Je.data;
          lt.args[0] = function () {
            return Je.invoke.apply(this, arguments);
          };
          const St = Y.apply(w, lt.args);
          return Rt(St) ? (lt.handleId = St) : ((lt.handle = St), (lt.isRefreshable = xt(St.refresh))), Je;
        }
        function pt(Je) {
          const { handle: lt, handleId: St } = Je.data;
          return Te.call(w, lt ?? St);
        }
        (Y = Z(
          w,
          (A += T),
          Je =>
            function (lt, St) {
              if (xt(St[0])) {
                const jt = {
                    isRefreshable: !1,
                    isPeriodic: 'Interval' === T,
                    delay: 'Timeout' === T || 'Interval' === T ? St[1] || 0 : void 0,
                    args: St,
                  },
                  en = St[0];
                St[0] = function () {
                  try {
                    return en.apply(this, arguments);
                  } finally {
                    const { handle: nn, handleId: nt, isPeriodic: Mn, isRefreshable: pn } = jt;
                    !Mn && !pn && (nt ? delete rt[nt] : nn && (nn[Tt] = null));
                  }
                };
                const _t = oe(A, St[0], jt, at, pt);
                if (!_t) return _t;
                const { handleId: Sn, handle: wt, isRefreshable: sn, isPeriodic: Le } = _t.data;
                if (Sn) rt[Sn] = _t;
                else if (wt && ((wt[Tt] = _t), sn && !Le)) {
                  const Ce = wt.refresh;
                  wt.refresh = function () {
                    const { zone: nn, state: nt } = _t;
                    return (
                      'notScheduled' === nt
                        ? ((_t._state = 'scheduled'), nn._updateTaskCount(_t, 1))
                        : 'running' === nt && (_t._state = 'scheduling'),
                      Ce.call(this)
                    );
                  };
                }
                return wt ?? Sn ?? _t;
              }
              return Je.apply(w, St);
            },
        )),
          (Te = Z(
            w,
            le,
            Je =>
              function (lt, St) {
                const jt = St[0];
                let en;
                Rt(jt) ? ((en = rt[jt]), delete rt[jt]) : ((en = jt?.[Tt]), en ? (jt[Tt] = null) : (en = jt)),
                  en?.type ? en.cancelFn && en.zone.cancelTask(en) : Je.apply(w, St);
              },
          ));
      }
      function Wn(w, A, le) {
        if (!le || 0 === le.length) return A;
        const T = le.filter(Te => Te.target === w);
        if (!T || 0 === T.length) return A;
        const Y = T[0].ignoreProperties;
        return A.filter(Te => -1 === Y.indexOf(Te));
      }
      function ar(w, A, le, T) {
        w && Ie(w, Wn(w, A, le), T);
      }
      function Pr(w) {
        return Object.getOwnPropertyNames(w)
          .filter(A => A.startsWith('on') && A.length > 2)
          .map(A => A.substring(2));
      }
      function po(w, A, le, T, Y) {
        const Te = Zone.__symbol__(T);
        if (A[Te]) return;
        const rt = (A[Te] = A[T]);
        (A[T] = function (at, pt, Je) {
          return (
            pt &&
              pt.prototype &&
              Y.forEach(function (lt) {
                const St = `${le}.${T}::` + lt,
                  jt = pt.prototype;
                try {
                  if (jt.hasOwnProperty(lt)) {
                    const en = w.ObjectGetOwnPropertyDescriptor(jt, lt);
                    en && en.value
                      ? ((en.value = w.wrapWithCurrentZone(en.value, St)), w._redefineProperty(pt.prototype, lt, en))
                      : jt[lt] && (jt[lt] = w.wrapWithCurrentZone(jt[lt], St));
                  } else jt[lt] && (jt[lt] = w.wrapWithCurrentZone(jt[lt], St));
                } catch {}
              }),
            rt.call(A, at, pt, Je)
          );
        }),
          w.attachOriginToPatched(A[T], rt);
      }
      const Wr = (function de() {
        const w = globalThis,
          A = !0 === w[vt('forceDuplicateZoneCheck')];
        if (w.Zone && (A || 'function' != typeof w.Zone.__symbol__)) throw new Error('Zone already loaded.');
        return (
          (w.Zone ??= (function ne() {
            const w = cn.performance;
            function A(Mt) {
              w && w.mark && w.mark(Mt);
            }
            function le(Mt, Ye) {
              w && w.measure && w.measure(Mt, Ye);
            }
            A('Zone');
            let T = (() => {
              class Mt {
                static {
                  this.__symbol__ = vt;
                }
                static assertZonePatched() {
                  if (cn.Promise !== Ot.ZoneAwarePromise)
                    throw new Error(
                      'Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)',
                    );
                }
                static get root() {
                  let I = Mt.current;
                  for (; I.parent; ) I = I.parent;
                  return I;
                }
                static get current() {
                  return Ct.zone;
                }
                static get currentTask() {
                  return Pt;
                }
                static __load_patch(I, F, ft = !1) {
                  if (Ot.hasOwnProperty(I)) {
                    const ht = !0 === cn[vt('forceDuplicateZoneCheck')];
                    if (!ft && ht) throw Error('Already loaded patch: ' + I);
                  } else if (!cn['__Zone_disable_' + I]) {
                    const ht = 'Zone:' + I;
                    A(ht), (Ot[I] = F(cn, Mt, It)), le(ht, ht);
                  }
                }
                get parent() {
                  return this._parent;
                }
                get name() {
                  return this._name;
                }
                constructor(I, F) {
                  (this._parent = I),
                    (this._name = F ? F.name || 'unnamed' : '<root>'),
                    (this._properties = (F && F.properties) || {}),
                    (this._zoneDelegate = new Te(this, this._parent && this._parent._zoneDelegate, F));
                }
                get(I) {
                  const F = this.getZoneWith(I);
                  if (F) return F._properties[I];
                }
                getZoneWith(I) {
                  let F = this;
                  for (; F; ) {
                    if (F._properties.hasOwnProperty(I)) return F;
                    F = F._parent;
                  }
                  return null;
                }
                fork(I) {
                  if (!I) throw new Error('ZoneSpec required!');
                  return this._zoneDelegate.fork(this, I);
                }
                wrap(I, F) {
                  if ('function' != typeof I) throw new Error('Expecting function got: ' + I);
                  const ft = this._zoneDelegate.intercept(this, I, F),
                    ht = this;
                  return function () {
                    return ht.runGuarded(ft, this, arguments, F);
                  };
                }
                run(I, F, ft, ht) {
                  Ct = { parent: Ct, zone: this };
                  try {
                    return this._zoneDelegate.invoke(this, I, F, ft, ht);
                  } finally {
                    Ct = Ct.parent;
                  }
                }
                runGuarded(I, F = null, ft, ht) {
                  Ct = { parent: Ct, zone: this };
                  try {
                    try {
                      return this._zoneDelegate.invoke(this, I, F, ft, ht);
                    } catch (fn) {
                      if (this._zoneDelegate.handleError(this, fn)) throw fn;
                    }
                  } finally {
                    Ct = Ct.parent;
                  }
                }
                runTask(I, F, ft) {
                  if (I.zone != this)
                    throw new Error(
                      'A task can only be run in the zone of creation! (Creation: ' +
                        (I.zone || wt).name +
                        '; Execution: ' +
                        this.name +
                        ')',
                    );
                  const ht = I,
                    { type: fn, data: { isPeriodic: ot = !1, isRefreshable: qn = !1 } = {} } = I;
                  if (I.state === sn && (fn === an || fn === O)) return;
                  const Er = I.state != nn;
                  Er && ht._transitionTo(nn, Ce);
                  const Ut = Pt;
                  (Pt = ht), (Ct = { parent: Ct, zone: this });
                  try {
                    fn == O && I.data && !ot && !qn && (I.cancelFn = void 0);
                    try {
                      return this._zoneDelegate.invokeTask(this, ht, F, ft);
                    } catch (Jn) {
                      if (this._zoneDelegate.handleError(this, Jn)) throw Jn;
                    }
                  } finally {
                    const Jn = I.state;
                    if (Jn !== sn && Jn !== Mn)
                      if (fn == an || ot || (qn && Jn === Le)) Er && ht._transitionTo(Ce, nn, Le);
                      else {
                        const ee = ht._zoneDelegates;
                        this._updateTaskCount(ht, -1), Er && ht._transitionTo(sn, nn, sn), qn && (ht._zoneDelegates = ee);
                      }
                    (Ct = Ct.parent), (Pt = Ut);
                  }
                }
                scheduleTask(I) {
                  if (I.zone && I.zone !== this) {
                    let ft = this;
                    for (; ft; ) {
                      if (ft === I.zone)
                        throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${I.zone.name}`);
                      ft = ft.parent;
                    }
                  }
                  I._transitionTo(Le, sn);
                  const F = [];
                  (I._zoneDelegates = F), (I._zone = this);
                  try {
                    I = this._zoneDelegate.scheduleTask(this, I);
                  } catch (ft) {
                    throw (I._transitionTo(Mn, Le, sn), this._zoneDelegate.handleError(this, ft), ft);
                  }
                  return I._zoneDelegates === F && this._updateTaskCount(I, 1), I.state == Le && I._transitionTo(Ce, Le), I;
                }
                scheduleMicroTask(I, F, ft, ht) {
                  return this.scheduleTask(new rt(pn, I, F, ft, ht, void 0));
                }
                scheduleMacroTask(I, F, ft, ht, fn) {
                  return this.scheduleTask(new rt(O, I, F, ft, ht, fn));
                }
                scheduleEventTask(I, F, ft, ht, fn) {
                  return this.scheduleTask(new rt(an, I, F, ft, ht, fn));
                }
                cancelTask(I) {
                  if (I.zone != this)
                    throw new Error(
                      'A task can only be cancelled in the zone of creation! (Creation: ' +
                        (I.zone || wt).name +
                        '; Execution: ' +
                        this.name +
                        ')',
                    );
                  if (I.state === Ce || I.state === nn) {
                    I._transitionTo(nt, Ce, nn);
                    try {
                      this._zoneDelegate.cancelTask(this, I);
                    } catch (F) {
                      throw (I._transitionTo(Mn, nt), this._zoneDelegate.handleError(this, F), F);
                    }
                    return this._updateTaskCount(I, -1), I._transitionTo(sn, nt), (I.runCount = -1), I;
                  }
                }
                _updateTaskCount(I, F) {
                  const ft = I._zoneDelegates;
                  -1 == F && (I._zoneDelegates = null);
                  for (let ht = 0; ht < ft.length; ht++) ft[ht]._updateTaskCount(I.type, F);
                }
              }
              return Mt;
            })();
            const Y = {
              name: '',
              onHasTask: (Mt, Ye, I, F) => Mt.hasTask(I, F),
              onScheduleTask: (Mt, Ye, I, F) => Mt.scheduleTask(I, F),
              onInvokeTask: (Mt, Ye, I, F, ft, ht) => Mt.invokeTask(I, F, ft, ht),
              onCancelTask: (Mt, Ye, I, F) => Mt.cancelTask(I, F),
            };
            class Te {
              get zone() {
                return this._zone;
              }
              constructor(Ye, I, F) {
                (this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
                  (this._zone = Ye),
                  (this._parentDelegate = I),
                  (this._forkZS = F && (F && F.onFork ? F : I._forkZS)),
                  (this._forkDlgt = F && (F.onFork ? I : I._forkDlgt)),
                  (this._forkCurrZone = F && (F.onFork ? this._zone : I._forkCurrZone)),
                  (this._interceptZS = F && (F.onIntercept ? F : I._interceptZS)),
                  (this._interceptDlgt = F && (F.onIntercept ? I : I._interceptDlgt)),
                  (this._interceptCurrZone = F && (F.onIntercept ? this._zone : I._interceptCurrZone)),
                  (this._invokeZS = F && (F.onInvoke ? F : I._invokeZS)),
                  (this._invokeDlgt = F && (F.onInvoke ? I : I._invokeDlgt)),
                  (this._invokeCurrZone = F && (F.onInvoke ? this._zone : I._invokeCurrZone)),
                  (this._handleErrorZS = F && (F.onHandleError ? F : I._handleErrorZS)),
                  (this._handleErrorDlgt = F && (F.onHandleError ? I : I._handleErrorDlgt)),
                  (this._handleErrorCurrZone = F && (F.onHandleError ? this._zone : I._handleErrorCurrZone)),
                  (this._scheduleTaskZS = F && (F.onScheduleTask ? F : I._scheduleTaskZS)),
                  (this._scheduleTaskDlgt = F && (F.onScheduleTask ? I : I._scheduleTaskDlgt)),
                  (this._scheduleTaskCurrZone = F && (F.onScheduleTask ? this._zone : I._scheduleTaskCurrZone)),
                  (this._invokeTaskZS = F && (F.onInvokeTask ? F : I._invokeTaskZS)),
                  (this._invokeTaskDlgt = F && (F.onInvokeTask ? I : I._invokeTaskDlgt)),
                  (this._invokeTaskCurrZone = F && (F.onInvokeTask ? this._zone : I._invokeTaskCurrZone)),
                  (this._cancelTaskZS = F && (F.onCancelTask ? F : I._cancelTaskZS)),
                  (this._cancelTaskDlgt = F && (F.onCancelTask ? I : I._cancelTaskDlgt)),
                  (this._cancelTaskCurrZone = F && (F.onCancelTask ? this._zone : I._cancelTaskCurrZone)),
                  (this._hasTaskZS = null),
                  (this._hasTaskDlgt = null),
                  (this._hasTaskDlgtOwner = null),
                  (this._hasTaskCurrZone = null);
                const ft = F && F.onHasTask;
                (ft || (I && I._hasTaskZS)) &&
                  ((this._hasTaskZS = ft ? F : Y),
                  (this._hasTaskDlgt = I),
                  (this._hasTaskDlgtOwner = this),
                  (this._hasTaskCurrZone = this._zone),
                  F.onScheduleTask || ((this._scheduleTaskZS = Y), (this._scheduleTaskDlgt = I), (this._scheduleTaskCurrZone = this._zone)),
                  F.onInvokeTask || ((this._invokeTaskZS = Y), (this._invokeTaskDlgt = I), (this._invokeTaskCurrZone = this._zone)),
                  F.onCancelTask || ((this._cancelTaskZS = Y), (this._cancelTaskDlgt = I), (this._cancelTaskCurrZone = this._zone)));
              }
              fork(Ye, I) {
                return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, Ye, I) : new T(Ye, I);
              }
              intercept(Ye, I, F) {
                return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, Ye, I, F) : I;
              }
              invoke(Ye, I, F, ft, ht) {
                return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, Ye, I, F, ft, ht) : I.apply(F, ft);
              }
              handleError(Ye, I) {
                return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, Ye, I);
              }
              scheduleTask(Ye, I) {
                let F = I;
                if (this._scheduleTaskZS)
                  this._hasTaskZS && F._zoneDelegates.push(this._hasTaskDlgtOwner),
                    (F = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, Ye, I)),
                    F || (F = I);
                else if (I.scheduleFn) I.scheduleFn(I);
                else {
                  if (I.type != pn) throw new Error('Task is missing scheduleFn.');
                  _t(I);
                }
                return F;
              }
              invokeTask(Ye, I, F, ft) {
                return this._invokeTaskZS
                  ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, Ye, I, F, ft)
                  : I.callback.apply(F, ft);
              }
              cancelTask(Ye, I) {
                let F;
                if (this._cancelTaskZS) F = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, Ye, I);
                else {
                  if (!I.cancelFn) throw Error('Task is not cancelable');
                  F = I.cancelFn(I);
                }
                return F;
              }
              hasTask(Ye, I) {
                try {
                  this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, Ye, I);
                } catch (F) {
                  this.handleError(Ye, F);
                }
              }
              _updateTaskCount(Ye, I) {
                const F = this._taskCounts,
                  ft = F[Ye],
                  ht = (F[Ye] = ft + I);
                if (ht < 0) throw new Error('More tasks executed then were scheduled.');
                (0 != ft && 0 != ht) ||
                  this.hasTask(this._zone, {
                    microTask: F.microTask > 0,
                    macroTask: F.macroTask > 0,
                    eventTask: F.eventTask > 0,
                    change: Ye,
                  });
              }
            }
            class rt {
              constructor(Ye, I, F, ft, ht, fn) {
                if (
                  ((this._zone = null),
                  (this.runCount = 0),
                  (this._zoneDelegates = null),
                  (this._state = 'notScheduled'),
                  (this.type = Ye),
                  (this.source = I),
                  (this.data = ft),
                  (this.scheduleFn = ht),
                  (this.cancelFn = fn),
                  !F)
                )
                  throw new Error('callback is not defined');
                this.callback = F;
                const ot = this;
                this.invoke =
                  Ye === an && ft && ft.useG
                    ? rt.invokeTask
                    : function () {
                        return rt.invokeTask.call(cn, ot, this, arguments);
                      };
              }
              static invokeTask(Ye, I, F) {
                Ye || (Ye = this), Qn++;
                try {
                  return Ye.runCount++, Ye.zone.runTask(Ye, I, F);
                } finally {
                  1 == Qn && Sn(), Qn--;
                }
              }
              get zone() {
                return this._zone;
              }
              get state() {
                return this._state;
              }
              cancelScheduleRequest() {
                this._transitionTo(sn, Le);
              }
              _transitionTo(Ye, I, F) {
                if (this._state !== I && this._state !== F)
                  throw new Error(
                    `${this.type} '${this.source}': can not transition to '${Ye}', expecting state '${I}'${F ? " or '" + F + "'" : ''}, was '${this._state}'.`,
                  );
                (this._state = Ye), Ye == sn && (this._zoneDelegates = null);
              }
              toString() {
                return this.data && typeof this.data.handleId < 'u' ? this.data.handleId.toString() : Object.prototype.toString.call(this);
              }
              toJSON() {
                return { type: this.type, state: this.state, source: this.source, zone: this.zone.name, runCount: this.runCount };
              }
            }
            const at = vt('setTimeout'),
              pt = vt('Promise'),
              Je = vt('then');
            let jt,
              lt = [],
              St = !1;
            function en(Mt) {
              if ((jt || (cn[pt] && (jt = cn[pt].resolve(0))), jt)) {
                let Ye = jt[Je];
                Ye || (Ye = jt.then), Ye.call(jt, Mt);
              } else cn[at](Mt, 0);
            }
            function _t(Mt) {
              0 === Qn && 0 === lt.length && en(Sn), Mt && lt.push(Mt);
            }
            function Sn() {
              if (!St) {
                for (St = !0; lt.length; ) {
                  const Mt = lt;
                  lt = [];
                  for (let Ye = 0; Ye < Mt.length; Ye++) {
                    const I = Mt[Ye];
                    try {
                      I.zone.runTask(I, null, null);
                    } catch (F) {
                      It.onUnhandledError(F);
                    }
                  }
                }
                It.microtaskDrainDone(), (St = !1);
              }
            }
            const wt = { name: 'NO ZONE' },
              sn = 'notScheduled',
              Le = 'scheduling',
              Ce = 'scheduled',
              nn = 'running',
              nt = 'canceling',
              Mn = 'unknown',
              pn = 'microTask',
              O = 'macroTask',
              an = 'eventTask',
              Ot = {},
              It = {
                symbol: vt,
                currentZoneFrame: () => Ct,
                onUnhandledError: ln,
                microtaskDrainDone: ln,
                scheduleMicroTask: _t,
                showUncaughtError: () => !T[vt('ignoreConsoleErrorUncaughtError')],
                patchEventTarget: () => [],
                patchOnProperties: ln,
                patchMethod: () => ln,
                bindArguments: () => [],
                patchThen: () => ln,
                patchMacroTask: () => ln,
                patchEventPrototype: () => ln,
                isIEOrEdge: () => !1,
                getGlobalObjects: () => {},
                ObjectDefineProperty: () => ln,
                ObjectGetOwnPropertyDescriptor: () => {},
                ObjectCreate: () => {},
                ArraySlice: () => [],
                patchClass: () => ln,
                wrapWithCurrentZone: () => ln,
                filterProperties: () => [],
                attachOriginToPatched: () => ln,
                _redefineProperty: () => ln,
                patchCallbacks: () => ln,
                nativeScheduleMicroTask: en,
              };
            let Ct = { parent: null, zone: new T(null, null) },
              Pt = null,
              Qn = 0;
            function ln() {}
            return le('Zone', 'Zone'), T;
          })()),
          w.Zone
        );
      })();
      (function Lo(w) {
        (function Co(w) {
          w.__load_patch('ZoneAwarePromise', (A, le, T) => {
            const Y = Object.getOwnPropertyDescriptor,
              Te = Object.defineProperty,
              at = T.symbol,
              pt = [],
              Je = !1 !== A[at('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')],
              lt = at('Promise'),
              St = at('then'),
              jt = '__creationTrace__';
            (T.onUnhandledError = ee => {
              if (T.showUncaughtError()) {
                const te = ee && ee.rejection;
                te
                  ? console.error(
                      'Unhandled Promise rejection:',
                      te instanceof Error ? te.message : te,
                      '; Zone:',
                      ee.zone.name,
                      '; Task:',
                      ee.task && ee.task.source,
                      '; Value:',
                      te,
                      te instanceof Error ? te.stack : void 0,
                    )
                  : console.error(ee);
              }
            }),
              (T.microtaskDrainDone = () => {
                for (; pt.length; ) {
                  const ee = pt.shift();
                  try {
                    ee.zone.runGuarded(() => {
                      throw ee.throwOriginal ? ee.rejection : ee;
                    });
                  } catch (te) {
                    _t(te);
                  }
                }
              });
            const en = at('unhandledPromiseRejectionHandler');
            function _t(ee) {
              T.onUnhandledError(ee);
              try {
                const te = le[en];
                'function' == typeof te && te.call(this, ee);
              } catch {}
            }
            function Sn(ee) {
              return ee && ee.then;
            }
            function wt(ee) {
              return ee;
            }
            function sn(ee) {
              return ot.reject(ee);
            }
            const Le = at('state'),
              Ce = at('value'),
              nn = at('finally'),
              nt = at('parentPromiseValue'),
              Mn = at('parentPromiseState'),
              pn = 'Promise.then',
              O = null,
              an = !0,
              Ot = !1,
              It = 0;
            function Ct(ee, te) {
              return z => {
                try {
                  Mt(ee, te, z);
                } catch (we) {
                  Mt(ee, !1, we);
                }
              };
            }
            const Pt = function () {
                let ee = !1;
                return function (z) {
                  return function () {
                    ee || ((ee = !0), z.apply(null, arguments));
                  };
                };
              },
              Qn = 'Promise resolved with itself',
              ln = at('currentTaskTrace');
            function Mt(ee, te, z) {
              const we = Pt();
              if (ee === z) throw new TypeError(Qn);
              if (ee[Le] === O) {
                let ke = null;
                try {
                  ('object' == typeof z || 'function' == typeof z) && (ke = z && z.then);
                } catch (ye) {
                  return (
                    we(() => {
                      Mt(ee, !1, ye);
                    })(),
                    ee
                  );
                }
                if (te !== Ot && z instanceof ot && z.hasOwnProperty(Le) && z.hasOwnProperty(Ce) && z[Le] !== O) I(z), Mt(ee, z[Le], z[Ce]);
                else if (te !== Ot && 'function' == typeof ke)
                  try {
                    ke.call(z, we(Ct(ee, te)), we(Ct(ee, !1)));
                  } catch (ye) {
                    we(() => {
                      Mt(ee, !1, ye);
                    })();
                  }
                else {
                  ee[Le] = te;
                  const ye = ee[Ce];
                  if (
                    ((ee[Ce] = z), ee[nn] === nn && te === an && ((ee[Le] = ee[Mn]), (ee[Ce] = ee[nt])), te === Ot && z instanceof Error)
                  ) {
                    const ut = le.currentTask && le.currentTask.data && le.currentTask.data[jt];
                    ut && Te(z, ln, { configurable: !0, enumerable: !1, writable: !0, value: ut });
                  }
                  for (let ut = 0; ut < ye.length; ) F(ee, ye[ut++], ye[ut++], ye[ut++], ye[ut++]);
                  if (0 == ye.length && te == Ot) {
                    ee[Le] = It;
                    let ut = z;
                    try {
                      throw new Error(
                        'Uncaught (in promise): ' +
                          (function rt(ee) {
                            return ee && ee.toString === Object.prototype.toString
                              ? ((ee.constructor && ee.constructor.name) || '') + ': ' + JSON.stringify(ee)
                              : ee
                                ? ee.toString()
                                : Object.prototype.toString.call(ee);
                          })(z) +
                          (z && z.stack ? '\n' + z.stack : ''),
                      );
                    } catch (gt) {
                      ut = gt;
                    }
                    Je && (ut.throwOriginal = !0),
                      (ut.rejection = z),
                      (ut.promise = ee),
                      (ut.zone = le.current),
                      (ut.task = le.currentTask),
                      pt.push(ut),
                      T.scheduleMicroTask();
                  }
                }
              }
              return ee;
            }
            const Ye = at('rejectionHandledHandler');
            function I(ee) {
              if (ee[Le] === It) {
                try {
                  const te = le[Ye];
                  te && 'function' == typeof te && te.call(this, { rejection: ee[Ce], promise: ee });
                } catch {}
                ee[Le] = Ot;
                for (let te = 0; te < pt.length; te++) ee === pt[te].promise && pt.splice(te, 1);
              }
            }
            function F(ee, te, z, we, ke) {
              I(ee);
              const ye = ee[Le],
                ut = ye ? ('function' == typeof we ? we : wt) : 'function' == typeof ke ? ke : sn;
              te.scheduleMicroTask(
                pn,
                () => {
                  try {
                    const gt = ee[Ce],
                      Ft = !!z && nn === z[nn];
                    Ft && ((z[nt] = gt), (z[Mn] = ye));
                    const Lt = te.run(ut, void 0, Ft && ut !== sn && ut !== wt ? [] : [gt]);
                    Mt(z, !0, Lt);
                  } catch (gt) {
                    Mt(z, !1, gt);
                  }
                },
                z,
              );
            }
            const ht = function () {},
              fn = A.AggregateError;
            class ot {
              static toString() {
                return 'function ZoneAwarePromise() { [native code] }';
              }
              static resolve(te) {
                return te instanceof ot ? te : Mt(new this(null), an, te);
              }
              static reject(te) {
                return Mt(new this(null), Ot, te);
              }
              static withResolvers() {
                const te = {};
                return (
                  (te.promise = new ot((z, we) => {
                    (te.resolve = z), (te.reject = we);
                  })),
                  te
                );
              }
              static any(te) {
                if (!te || 'function' != typeof te[Symbol.iterator]) return Promise.reject(new fn([], 'All promises were rejected'));
                const z = [];
                let we = 0;
                try {
                  for (let ut of te) we++, z.push(ot.resolve(ut));
                } catch {
                  return Promise.reject(new fn([], 'All promises were rejected'));
                }
                if (0 === we) return Promise.reject(new fn([], 'All promises were rejected'));
                let ke = !1;
                const ye = [];
                return new ot((ut, gt) => {
                  for (let Ft = 0; Ft < z.length; Ft++)
                    z[Ft].then(
                      Lt => {
                        ke || ((ke = !0), ut(Lt));
                      },
                      Lt => {
                        ye.push(Lt), we--, 0 === we && ((ke = !0), gt(new fn(ye, 'All promises were rejected')));
                      },
                    );
                });
              }
              static race(te) {
                let z,
                  we,
                  ke = new this((gt, Ft) => {
                    (z = gt), (we = Ft);
                  });
                function ye(gt) {
                  z(gt);
                }
                function ut(gt) {
                  we(gt);
                }
                for (let gt of te) Sn(gt) || (gt = this.resolve(gt)), gt.then(ye, ut);
                return ke;
              }
              static all(te) {
                return ot.allWithCallback(te);
              }
              static allSettled(te) {
                return (this && this.prototype instanceof ot ? this : ot).allWithCallback(te, {
                  thenCallback: we => ({ status: 'fulfilled', value: we }),
                  errorCallback: we => ({ status: 'rejected', reason: we }),
                });
              }
              static allWithCallback(te, z) {
                let we,
                  ke,
                  ye = new this((Lt, gn) => {
                    (we = Lt), (ke = gn);
                  }),
                  ut = 2,
                  gt = 0;
                const Ft = [];
                for (let Lt of te) {
                  Sn(Lt) || (Lt = this.resolve(Lt));
                  const gn = gt;
                  try {
                    Lt.then(
                      Kt => {
                        (Ft[gn] = z ? z.thenCallback(Kt) : Kt), ut--, 0 === ut && we(Ft);
                      },
                      Kt => {
                        z ? ((Ft[gn] = z.errorCallback(Kt)), ut--, 0 === ut && we(Ft)) : ke(Kt);
                      },
                    );
                  } catch (Kt) {
                    ke(Kt);
                  }
                  ut++, gt++;
                }
                return (ut -= 2), 0 === ut && we(Ft), ye;
              }
              constructor(te) {
                const z = this;
                if (!(z instanceof ot)) throw new Error('Must be an instanceof Promise.');
                (z[Le] = O), (z[Ce] = []);
                try {
                  const we = Pt();
                  te && te(we(Ct(z, an)), we(Ct(z, Ot)));
                } catch (we) {
                  Mt(z, !1, we);
                }
              }
              get [Symbol.toStringTag]() {
                return 'Promise';
              }
              get [Symbol.species]() {
                return ot;
              }
              then(te, z) {
                let we = this.constructor?.[Symbol.species];
                (!we || 'function' != typeof we) && (we = this.constructor || ot);
                const ke = new we(ht),
                  ye = le.current;
                return this[Le] == O ? this[Ce].push(ye, ke, te, z) : F(this, ye, ke, te, z), ke;
              }
              catch(te) {
                return this.then(null, te);
              }
              finally(te) {
                let z = this.constructor?.[Symbol.species];
                (!z || 'function' != typeof z) && (z = ot);
                const we = new z(ht);
                we[nn] = nn;
                const ke = le.current;
                return this[Le] == O ? this[Ce].push(ke, we, te, te) : F(this, ke, we, te, te), we;
              }
            }
            (ot.resolve = ot.resolve), (ot.reject = ot.reject), (ot.race = ot.race), (ot.all = ot.all);
            const qn = (A[lt] = A.Promise);
            A.Promise = ot;
            const Er = at('thenPatched');
            function Ut(ee) {
              const te = ee.prototype,
                z = Y(te, 'then');
              if (z && (!1 === z.writable || !z.configurable)) return;
              const we = te.then;
              (te[St] = we),
                (ee.prototype.then = function (ke, ye) {
                  return new ot((gt, Ft) => {
                    we.call(this, gt, Ft);
                  }).then(ke, ye);
                }),
                (ee[Er] = !0);
            }
            return (
              (T.patchThen = Ut),
              qn &&
                (Ut(qn),
                Z(A, 'fetch', ee =>
                  (function Jn(ee) {
                    return function (te, z) {
                      let we = ee.apply(te, z);
                      if (we instanceof ot) return we;
                      let ke = we.constructor;
                      return ke[Er] || Ut(ke), we;
                    };
                  })(ee),
                )),
              (Promise[le.__symbol__('uncaughtPromiseErrors')] = pt),
              ot
            );
          });
        })(w),
          (function Ii(w) {
            w.__load_patch('toString', A => {
              const le = Function.prototype.toString,
                T = J('OriginalDelegate'),
                Y = J('Promise'),
                Te = J('Error'),
                rt = function () {
                  if ('function' == typeof this) {
                    const lt = this[T];
                    if (lt) return 'function' == typeof lt ? le.call(lt) : Object.prototype.toString.call(lt);
                    if (this === Promise) {
                      const St = A[Y];
                      if (St) return le.call(St);
                    }
                    if (this === Error) {
                      const St = A[Te];
                      if (St) return le.call(St);
                    }
                  }
                  return le.call(this);
                };
              (rt[T] = le), (Function.prototype.toString = rt);
              const at = Object.prototype.toString;
              Object.prototype.toString = function () {
                return 'function' == typeof Promise && this instanceof Promise ? '[object Promise]' : at.call(this);
              };
            });
          })(w),
          (function bo(w) {
            w.__load_patch('util', (A, le, T) => {
              const Y = Pr(A);
              (T.patchOnProperties = Ie), (T.patchMethod = Z), (T.bindArguments = De), (T.patchMacroTask = xe);
              const Te = le.__symbol__('BLACK_LISTED_EVENTS'),
                rt = le.__symbol__('UNPATCHED_EVENTS');
              A[rt] && (A[Te] = A[rt]),
                A[Te] && (le[Te] = le[rt] = A[Te]),
                (T.patchEventPrototype = X),
                (T.patchEventTarget = ae),
                (T.isIEOrEdge = qe),
                (T.ObjectDefineProperty = Ue),
                (T.ObjectGetOwnPropertyDescriptor = Ke),
                (T.ObjectCreate = bt),
                (T.ArraySlice = Fe),
                (T.patchClass = Bt),
                (T.wrapWithCurrentZone = fe),
                (T.filterProperties = Wn),
                (T.attachOriginToPatched = U),
                (T._redefineProperty = Object.defineProperty),
                (T.patchCallbacks = po),
                (T.getGlobalObjects = () => ({
                  globalSources: tr,
                  zoneSymbolEventNames: Zt,
                  eventNames: Y,
                  isBrowser: D,
                  isMix: M,
                  isNode: y,
                  TRUE_STR: he,
                  FALSE_STR: Re,
                  ZONE_SYMBOL_PREFIX: re,
                  ADD_EVENT_LISTENER_STR: S,
                  REMOVE_EVENT_LISTENER_STR: Me,
                }));
            });
          })(w);
      })(Wr),
        (function Tr(w) {
          w.__load_patch('legacy', A => {
            const le = A[w.__symbol__('legacyPatch')];
            le && le();
          }),
            w.__load_patch('timers', A => {
              const T = 'clear';
              Yt(A, 'set', T, 'Timeout'), Yt(A, 'set', T, 'Interval'), Yt(A, 'set', T, 'Immediate');
            }),
            w.__load_patch('requestAnimationFrame', A => {
              Yt(A, 'request', 'cancel', 'AnimationFrame'),
                Yt(A, 'mozRequest', 'mozCancel', 'AnimationFrame'),
                Yt(A, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
            }),
            w.__load_patch('blocking', (A, le) => {
              const T = ['alert', 'prompt', 'confirm'];
              for (let Y = 0; Y < T.length; Y++)
                Z(
                  A,
                  T[Y],
                  (rt, at, pt) =>
                    function (Je, lt) {
                      return le.current.run(rt, A, lt, pt);
                    },
                );
            }),
            w.__load_patch('EventTarget', (A, le, T) => {
              (function Gt(w, A) {
                A.patchEventPrototype(w, A);
              })(A, T),
                (function hn(w, A) {
                  if (Zone[A.symbol('patchEventTarget')]) return;
                  const {
                    eventNames: le,
                    zoneSymbolEventNames: T,
                    TRUE_STR: Y,
                    FALSE_STR: Te,
                    ZONE_SYMBOL_PREFIX: rt,
                  } = A.getGlobalObjects();
                  for (let pt = 0; pt < le.length; pt++) {
                    const Je = le[pt],
                      jt = rt + (Je + Te),
                      en = rt + (Je + Y);
                    (T[Je] = {}), (T[Je][Te] = jt), (T[Je][Y] = en);
                  }
                  const at = w.EventTarget;
                  at && at.prototype && A.patchEventTarget(w, A, [at && at.prototype]);
                })(A, T);
              const Y = A.XMLHttpRequestEventTarget;
              Y && Y.prototype && T.patchEventTarget(A, T, [Y.prototype]);
            }),
            w.__load_patch('MutationObserver', (A, le, T) => {
              Bt('MutationObserver'), Bt('WebKitMutationObserver');
            }),
            w.__load_patch('IntersectionObserver', (A, le, T) => {
              Bt('IntersectionObserver');
            }),
            w.__load_patch('FileReader', (A, le, T) => {
              Bt('FileReader');
            }),
            w.__load_patch('on_property', (A, le, T) => {
              !(function Gr(w, A) {
                if ((y && !M) || Zone[w.symbol('patchEvents')]) return;
                const le = A.__Zone_ignore_on_properties;
                let T = [];
                if (D) {
                  const Y = window;
                  T = T.concat([
                    'Document',
                    'SVGElement',
                    'Element',
                    'HTMLElement',
                    'HTMLBodyElement',
                    'HTMLMediaElement',
                    'HTMLFrameSetElement',
                    'HTMLFrameElement',
                    'HTMLIFrameElement',
                    'HTMLMarqueeElement',
                    'Worker',
                  ]);
                  const Te = (function Et() {
                    try {
                      const w = P.navigator.userAgent;
                      if (-1 !== w.indexOf('MSIE ') || -1 !== w.indexOf('Trident/')) return !0;
                    } catch {}
                    return !1;
                  })()
                    ? [{ target: Y, ignoreProperties: ['error'] }]
                    : [];
                  ar(Y, Pr(Y), le && le.concat(Te), st(Y));
                }
                T = T.concat([
                  'XMLHttpRequest',
                  'XMLHttpRequestEventTarget',
                  'IDBIndex',
                  'IDBRequest',
                  'IDBOpenDBRequest',
                  'IDBDatabase',
                  'IDBTransaction',
                  'IDBCursor',
                  'WebSocket',
                ]);
                for (let Y = 0; Y < T.length; Y++) {
                  const Te = A[T[Y]];
                  Te && Te.prototype && ar(Te.prototype, Pr(Te.prototype), le);
                }
              })(T, A);
            }),
            w.__load_patch('customElements', (A, le, T) => {
              !(function Xt(w, A) {
                const { isBrowser: le, isMix: T } = A.getGlobalObjects();
                (le || T) &&
                  w.customElements &&
                  'customElements' in w &&
                  A.patchCallbacks(A, w.customElements, 'customElements', 'define', [
                    'connectedCallback',
                    'disconnectedCallback',
                    'adoptedCallback',
                    'attributeChangedCallback',
                    'formAssociatedCallback',
                    'formDisabledCallback',
                    'formResetCallback',
                    'formStateRestoreCallback',
                  ]);
              })(A, T);
            }),
            w.__load_patch('XHR', (A, le) => {
              !(function Je(lt) {
                const St = lt.XMLHttpRequest;
                if (!St) return;
                const jt = St.prototype;
                let _t = jt[it],
                  Sn = jt[et];
                if (!_t) {
                  const It = lt.XMLHttpRequestEventTarget;
                  if (It) {
                    const Ct = It.prototype;
                    (_t = Ct[it]), (Sn = Ct[et]);
                  }
                }
                const wt = 'readystatechange',
                  sn = 'scheduled';
                function Le(It) {
                  const Ct = It.data,
                    Pt = Ct.target;
                  (Pt[rt] = !1), (Pt[pt] = !1);
                  const Qn = Pt[Te];
                  _t || ((_t = Pt[it]), (Sn = Pt[et])), Qn && Sn.call(Pt, wt, Qn);
                  const ln = (Pt[Te] = () => {
                    if (Pt.readyState === Pt.DONE)
                      if (!Ct.aborted && Pt[rt] && It.state === sn) {
                        const Ye = Pt[le.__symbol__('loadfalse')];
                        if (0 !== Pt.status && Ye && Ye.length > 0) {
                          const I = It.invoke;
                          (It.invoke = function () {
                            const F = Pt[le.__symbol__('loadfalse')];
                            for (let ft = 0; ft < F.length; ft++) F[ft] === It && F.splice(ft, 1);
                            !Ct.aborted && It.state === sn && I.call(It);
                          }),
                            Ye.push(It);
                        } else It.invoke();
                      } else !Ct.aborted && !1 === Pt[rt] && (Pt[pt] = !0);
                  });
                  return _t.call(Pt, wt, ln), Pt[T] || (Pt[T] = It), an.apply(Pt, Ct.args), (Pt[rt] = !0), It;
                }
                function Ce() {}
                function nn(It) {
                  const Ct = It.data;
                  return (Ct.aborted = !0), Ot.apply(Ct.target, Ct.args);
                }
                const nt = Z(
                    jt,
                    'open',
                    () =>
                      function (It, Ct) {
                        return (It[Y] = 0 == Ct[2]), (It[at] = Ct[1]), nt.apply(It, Ct);
                      },
                  ),
                  pn = J('fetchTaskAborting'),
                  O = J('fetchTaskScheduling'),
                  an = Z(
                    jt,
                    'send',
                    () =>
                      function (It, Ct) {
                        if (!0 === le.current[O] || It[Y]) return an.apply(It, Ct);
                        {
                          const Pt = { target: It, url: It[at], isPeriodic: !1, args: Ct, aborted: !1 },
                            Qn = oe('XMLHttpRequest.send', Ce, Pt, Le, nn);
                          It && !0 === It[pt] && !Pt.aborted && Qn.state === sn && Qn.invoke();
                        }
                      },
                  ),
                  Ot = Z(
                    jt,
                    'abort',
                    () =>
                      function (It, Ct) {
                        const Pt = (function en(It) {
                          return It[T];
                        })(It);
                        if (Pt && 'string' == typeof Pt.type) {
                          if (null == Pt.cancelFn || (Pt.data && Pt.data.aborted)) return;
                          Pt.zone.cancelTask(Pt);
                        } else if (!0 === le.current[pn]) return Ot.apply(It, Ct);
                      },
                  );
              })(A);
              const T = J('xhrTask'),
                Y = J('xhrSync'),
                Te = J('xhrListener'),
                rt = J('xhrScheduled'),
                at = J('xhrURL'),
                pt = J('xhrErrorBeforeScheduled');
            }),
            w.__load_patch('geolocation', A => {
              A.navigator &&
                A.navigator.geolocation &&
                (function We(w, A) {
                  const le = w.constructor.name;
                  for (let T = 0; T < A.length; T++) {
                    const Y = A[T],
                      Te = w[Y];
                    if (Te) {
                      if (!Ee(Ke(w, Y))) continue;
                      w[Y] = (at => {
                        const pt = function () {
                          return at.apply(this, De(arguments, le + '.' + Y));
                        };
                        return U(pt, at), pt;
                      })(Te);
                    }
                  }
                })(A.navigator.geolocation, ['getCurrentPosition', 'watchPosition']);
            }),
            w.__load_patch('PromiseRejectionEvent', (A, le) => {
              function T(Y) {
                return function (Te) {
                  H(A, Y).forEach(at => {
                    const pt = A.PromiseRejectionEvent;
                    if (pt) {
                      const Je = new pt(Y, { promise: Te.promise, reason: Te.rejection });
                      at.invoke(Je);
                    }
                  });
                };
              }
              A.PromiseRejectionEvent &&
                ((le[J('unhandledPromiseRejectionHandler')] = T('unhandledrejection')),
                (le[J('rejectionHandledHandler')] = T('rejectionhandled')));
            }),
            w.__load_patch('queueMicrotask', (A, le, T) => {
              !(function Qe(w, A) {
                A.patchMethod(
                  w,
                  'queueMicrotask',
                  le =>
                    function (T, Y) {
                      Zone.current.scheduleMicroTask('queueMicrotask', Y[0]);
                    },
                );
              })(A, T);
            });
        })(Wr);
    },
    8996: (cn, vt, ne) => {
      var de = {
        './ion-accordion_2.entry.js': [2375, 2076, 2375],
        './ion-action-sheet.entry.js': [8814, 2076, 8814],
        './ion-alert.entry.js': [5222, 2076, 5222],
        './ion-app_8.entry.js': [7720, 2076, 7720],
        './ion-avatar_3.entry.js': [1049, 1049],
        './ion-back-button.entry.js': [3162, 2076, 3162],
        './ion-backdrop.entry.js': [7240, 7240],
        './ion-breadcrumb_2.entry.js': [5933, 2076, 8314],
        './ion-button_2.entry.js': [4591, 4591],
        './ion-card_5.entry.js': [8584, 8584],
        './ion-checkbox.entry.js': [3511, 2076, 3511],
        './ion-chip.entry.js': [6024, 6024],
        './ion-col_3.entry.js': [5100, 5100],
        './ion-datetime-button.entry.js': [7428, 771, 7428],
        './ion-datetime_3.entry.js': [5266, 771, 2076, 2885],
        './ion-fab_3.entry.js': [4463, 2076, 4463],
        './ion-img.entry.js': [4183, 4183],
        './ion-infinite-scroll_2.entry.js': [4171, 2076, 4171],
        './ion-input.entry.js': [9344, 2076, 9344],
        './ion-item-option_3.entry.js': [5949, 2076, 5949],
        './ion-item_8.entry.js': [3506, 2076, 3506],
        './ion-loading.entry.js': [7372, 2076, 7372],
        './ion-menu_3.entry.js': [2075, 2076, 2075],
        './ion-modal.entry.js': [441, 2076, 441],
        './ion-nav_2.entry.js': [5712, 2076, 5712],
        './ion-picker-column-internal.entry.js': [1433, 2076, 1433],
        './ion-picker-internal.entry.js': [2628, 2628],
        './ion-popover.entry.js': [6433, 2076, 6433],
        './ion-progress-bar.entry.js': [9977, 9977],
        './ion-radio_2.entry.js': [8066, 2076, 8066],
        './ion-range.entry.js': [8477, 2076, 8477],
        './ion-refresher_2.entry.js': [5197, 2076, 5197],
        './ion-reorder_2.entry.js': [7030, 2076, 7030],
        './ion-ripple-effect.entry.js': [964, 964],
        './ion-route_4.entry.js': [8970, 8970],
        './ion-searchbar.entry.js': [8193, 2076, 8193],
        './ion-segment_2.entry.js': [2560, 2076, 2560],
        './ion-select_3.entry.js': [7076, 2076, 7076],
        './ion-spinner.entry.js': [8805, 2076, 8805],
        './ion-split-pane.entry.js': [5887, 5887],
        './ion-tab-bar_2.entry.js': [4406, 2076, 4406],
        './ion-tab_2.entry.js': [1102, 1102],
        './ion-text.entry.js': [1577, 1577],
        './ion-textarea.entry.js': [2348, 2076, 2348],
        './ion-toast.entry.js': [2415, 2076, 2415],
        './ion-toggle.entry.js': [3814, 2076, 3814],
      };
      function Ke(Ue) {
        if (!ne.o(de, Ue))
          return Promise.resolve().then(() => {
            var Fe = new Error("Cannot find module '" + Ue + "'");
            throw ((Fe.code = 'MODULE_NOT_FOUND'), Fe);
          });
        var st = de[Ue],
          bt = st[0];
        return Promise.all(st.slice(1).map(ne.e)).then(() => ne(bt));
      }
      (Ke.keys = () => Object.keys(de)), (Ke.id = 8996), (cn.exports = Ke);
    },
    467: (cn, vt, ne) => {
      'use strict';
      function de(Ue, st, bt, Fe, S, Me, it) {
        try {
          var et = Ue[Me](it),
            he = et.value;
        } catch (Re) {
          return void bt(Re);
        }
        et.done ? st(he) : Promise.resolve(he).then(Fe, S);
      }
      function Ke(Ue) {
        return function () {
          var st = this,
            bt = arguments;
          return new Promise(function (Fe, S) {
            var Me = Ue.apply(st, bt);
            function it(he) {
              de(Me, Fe, S, it, et, 'next', he);
            }
            function et(he) {
              de(Me, Fe, S, it, et, 'throw', he);
            }
            it(void 0);
          });
        };
      }
      ne.d(vt, { A: () => Ke });
    },
  },
  cn => {
    cn((cn.s = 8314));
  },
]);
