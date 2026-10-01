/* ------------------------------------------------------------------
   Phone screens for each project, drawn in HTML + SVG so they stay
   sharp at any size. Swap any of them for a real screenshot by
   putting an <img> in SCREENS[id] instead, e.g.:
     sakan: () => '<img class="ui-shot" src="assets/screens/sakan.png" alt="">'
------------------------------------------------------------------- */
(function () {
  const status = (dark) => `
    <div class="ui-status${dark ? " ui-status--dark" : ""}">
      <span>9:41</span>
      <span class="ui-status-icons">
        <svg viewBox="0 0 18 12" width="16" height="11"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>
        <svg viewBox="0 0 16 12" width="15" height="11"><path d="M8 11.5 5.6 9a3.4 3.4 0 0 1 4.8 0zM3.4 6.8a6.6 6.6 0 0 1 9.2 0l-1.1 1.1a5 5 0 0 0-7 0zM1.1 4.5a9.8 9.8 0 0 1 13.8 0l-1.1 1.1a8.2 8.2 0 0 0-11.6 0z"/></svg>
        <svg viewBox="0 0 26 12" width="24" height="11"><rect x=".5" y=".5" width="22" height="11" rx="3" fill="none" stroke="currentColor" opacity=".45"/><rect x="2" y="2" width="17" height="8" rx="1.8"/><rect x="23.5" y="4" width="2" height="4" rx="1" opacity=".45"/></svg>
      </span>
    </div>`;

  const icon = {
    search: '<svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="9" r="6"/><path d="m14 14 4 4" stroke-linecap="round"/></svg>',
    sliders: '<svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h9M16 6h1M3 14h3M10 14h7"/><circle cx="14" cy="6" r="2"/><circle cx="8" cy="14" r="2"/></svg>',
    heart: '<svg viewBox="0 0 20 20" width="16" height="16"><path d="M10 17.5S2.5 13 2.5 7.6A4.1 4.1 0 0 1 10 5.3a4.1 4.1 0 0 1 7.5 2.3C17.5 13 10 17.5 10 17.5z"/></svg>',
    home: '<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9 10 3l7 6v8H3z" stroke-linejoin="round"/></svg>',
    map: '<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M2 5l5-2 6 2 5-2v12l-5 2-6-2-5 2z"/><path d="M7 3v12M13 5v12"/></svg>',
    chat: '<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 4h14v10H8l-4 3v-3H3z"/></svg>',
    user: '<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10" cy="7" r="3.5"/><path d="M3.5 17a6.5 6.5 0 0 1 13 0" stroke-linecap="round"/></svg>',
    pin: '<svg viewBox="0 0 20 20" width="14" height="14"><path d="M10 18s6-5.6 6-10A6 6 0 0 0 4 8c0 4.4 6 10 6 10z"/><circle cx="10" cy="8" r="2.2" fill="#fff"/></svg>',
    star: '<svg viewBox="0 0 20 20" width="11" height="11"><path d="m10 1.8 2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.7l-5.1 2.8L6 11.8l-4.3-4 5.8-.7z"/></svg>',
    check: '<svg viewBox="0 0 20 20" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 10.5 3.5 3.5 7.5-8"/></svg>',
    phone: '<svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M5 2.5h3l1.5 4-2 1.3a9 9 0 0 0 4.7 4.7l1.3-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 3 4.5a2 2 0 0 1 2-2z"/></svg>',
  };

  const tabbar = (active) => {
    const items = [icon.home, icon.map, icon.chat, icon.user];
    return `<nav class="ui-tabbar">${items
      .map((i, n) => `<span class="${n === active ? "on" : ""}">${i}</span>`)
      .join("")}</nav>`;
  };

  const SCREENS = {
    sakan: () => `
      ${status()}
      <div class="ui-pad">
        <p class="ui-kicker">Good evening, Omar</p>
        <p class="ui-title">Find your next home</p>
        <div class="ui-search">${icon.search}<span>Search area or compound</span><b>${icon.sliders}</b></div>
        <div class="ui-chips"><span class="on">Apartment</span><span>Villa</span><span>Under 3M</span><span>3+ beds</span></div>
      </div>
      <div class="ui-map">
        <svg viewBox="0 0 270 132" preserveAspectRatio="none">
          <rect width="270" height="132" fill="#E3ECE7"/>
          <path d="M150 0h52v40h-52z M18 78h70v54H18z" fill="#CFE3D6"/>
          <path d="M0 52h270M0 104h270M96 0v132M210 0v132M40 0l60 132" stroke="#fff" stroke-width="7" fill="none"/>
          <path d="M0 26h270M150 0v132" stroke="#fff" stroke-width="3" fill="none"/>
        </svg>
        <span class="ui-pin" style="left:22px;top:36px">2.1M</span>
        <span class="ui-pin ui-pin--on" style="left:118px;top:62px">2.45M</span>
        <span class="ui-pin" style="left:196px;top:16px">3.8M</span>
        <span class="ui-pin" style="left:170px;top:92px">1.9M</span>
      </div>
      <div class="ui-listing">
        <div class="ui-listing-img">
          <svg viewBox="0 0 240 96" preserveAspectRatio="xMidYMax slice">
            <rect width="240" height="96" fill="#BFD9CC"/>
            <rect x="40" y="22" width="76" height="74" fill="#F5F7F6"/><rect x="116" y="40" width="70" height="56" fill="#E1E9E5"/>
            <g fill="#8FB3A3"><rect x="50" y="32" width="14" height="12"/><rect x="72" y="32" width="14" height="12"/><rect x="94" y="32" width="14" height="12"/><rect x="50" y="52" width="14" height="12"/><rect x="72" y="52" width="14" height="12"/><rect x="94" y="52" width="14" height="12"/><rect x="126" y="50" width="16" height="12"/><rect x="152" y="50" width="16" height="12"/><rect x="126" y="70" width="16" height="12"/><rect x="152" y="70" width="16" height="12"/></g>
            <rect x="72" y="74" width="16" height="22" fill="#0E7C66"/>
          </svg>
          <span class="ui-badge">Price dropped 5%</span>
          <span class="ui-heart">${icon.heart}</span>
        </div>
        <div class="ui-listing-body">
          <p><strong>EGP 2,450,000</strong> <s>2,580,000</s></p>
          <p class="ui-muted">3 bd, 2 ba, 165 m², New Mansoura</p>
        </div>
      </div>
      <div class="ui-listing-row">
        <i><svg viewBox="0 0 46 46" width="46" height="46"><rect width="46" height="46" fill="#CFE3D6"/><rect x="10" y="12" width="26" height="34" fill="#F5F7F6"/><g fill="#8FB3A3"><rect x="14" y="17" width="6" height="5"/><rect x="26" y="17" width="6" height="5"/><rect x="14" y="27" width="6" height="5"/><rect x="26" y="27" width="6" height="5"/></g></svg></i>
        <span><strong>EGP 1,900,000</strong><em>2 bd, 1 ba, 120 m², Talkha</em></span>
        <b>${icon.heart}</b>
      </div>
      ${tabbar(0)}`,

    zaheb: () => `
      ${status(true)}
      <svg class="ui-fullmap" viewBox="0 0 280 604" preserveAspectRatio="none">
        <rect width="280" height="604" fill="#161A24"/>
        <g fill="#1E2331"><rect x="14" y="70" width="80" height="90" rx="4"/><rect x="112" y="70" width="60" height="140" rx="4"/><rect x="190" y="40" width="70" height="120" rx="4"/><rect x="14" y="180" width="80" height="120" rx="4"/><rect x="190" y="180" width="70" height="80" rx="4"/><rect x="112" y="230" width="60" height="100" rx="4"/><rect x="190" y="280" width="70" height="110" rx="4"/><rect x="14" y="320" width="80" height="70" rx="4"/></g>
        <path d="M0 60h280M0 170h280M0 310h280M103 0v430M181 0v430" stroke="#262C3D" stroke-width="10" fill="none"/>
        <path d="M232 100 H181 V170 H103 V310 H52 V382" stroke="#FFB020" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" class="ui-route"/>
        <circle cx="52" cy="382" r="7" fill="#fff"/><circle cx="52" cy="382" r="3" fill="#161A24"/>
      </svg>
      <span class="ui-car" aria-hidden="true"></span>
      <div class="ui-seg"><span class="on">Ride</span><span>Delivery</span></div>
      <div class="ui-sheet">
        <span class="ui-grab"></span>
        <p class="ui-kicker">Driver on the way</p>
        <p class="ui-title">Arriving in 4 min</p>
        <div class="ui-driver">
          <span class="ui-avatar">AM</span>
          <div><strong>Ahmed M.</strong><p class="ui-muted">${icon.star} 4.9, white Elantra</p></div>
          <span class="ui-plate">ق ص ر 482</span>
        </div>
        <div class="ui-row2"><span class="ui-btn ui-btn--ghost">${icon.phone} Call</span><span class="ui-btn">${icon.chat} Message</span></div>
      </div>`,

    cityguide: () => `
      ${status()}
      <div class="ui-pad">
        <div class="ui-head">
          <span class="ui-loc">${icon.pin} Downtown</span>
          <span class="ui-avatar ui-avatar--sm">N</span>
        </div>
        <p class="ui-title">What do you need today?</p>
        <div class="ui-search">${icon.search}<span>Shops, services, food</span></div>
        <div class="ui-cats">
          <span><i style="--c:#FFE1EA"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#C2185B" stroke-width="1.8" stroke-linecap="round"><path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 0-3 2-3 5s1 4 3 4v9"/></svg></i>Food</span>
          <span><i style="--c:#E2F1FF"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1565C0" stroke-width="1.8" stroke-linecap="round"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/></svg></i>Pharmacy</span>
          <span><i style="--c:#FFF1DA"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#B26A00" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 5.5a4 4 0 0 0 5 5L12 18l-3 3-6-6 3-3 7.5-7.5z"/></svg></i>Repairs</span>
          <span><i style="--c:#E6F6EC"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2E7D32" stroke-width="1.8" stroke-linecap="round"><circle cx="7" cy="17" r="3"/><circle cx="17" cy="17" r="3"/><path d="M9 15 18 4M15 15 6 4"/></svg></i>Salons</span>
        </div>
        <p class="ui-sub">Popular nearby</p>
        <div class="ui-vendors">
          <div><i style="background:#F8BBD0"></i><span><strong>Bab El Sharq Grill</strong><em>Food, 0.6 km</em></span><b>${icon.star} 4.8</b></div>
          <div><i style="background:#BBDEFB"></i><span><strong>Al Shifa Pharmacy</strong><em>Pharmacy, 0.9 km</em></span><b>${icon.star} 4.7</b></div>
          <div><i style="background:#FFE0B2"></i><span><strong>Quick Fix Phones</strong><em>Repairs, 1.2 km</em></span><b>${icon.star} 4.6</b></div>
        </div>
      </div>
      <span class="ui-fab">${icon.chat}<em>2</em></span>
      ${tabbar(0)}`,

    weideliver: () => `
      ${status(true)}
      <div class="ui-dark-top">
        <div class="ui-head">
          <span><p class="ui-kicker">Driver mode</p><p class="ui-title">You're online</p></span>
          <span class="ui-toggle on"><i></i></span>
        </div>
        <p class="ui-earn"><span>Today</span><strong>EGP 640</strong><span>9 jobs</span></p>
      </div>
      <div class="ui-pad">
        <div class="ui-job">
          <div class="ui-head">
            <span><p class="ui-kicker">New job</p><p class="ui-title ui-title--sm">2.4 km, about 12 min</p></span>
            <span class="ui-ring"><svg viewBox="0 0 36 36" width="40" height="40"><circle cx="18" cy="18" r="15" fill="none" stroke="#FDE3D3" stroke-width="3.5"/><circle class="ui-ring-arc" cx="18" cy="18" r="15" fill="none" stroke="#F06A1D" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="94.2" stroke-dashoffset="30" transform="rotate(-90 18 18)"/></svg><b>24s</b></span>
          </div>
          <ol class="ui-route-list"><li><strong>Pickup</strong> Fresh Basket, Gomhoria St.</li><li><strong>Drop-off</strong> El Mashaya, building 12</li></ol>
          <span class="ui-btn ui-btn--block">Accept job</span>
        </div>
        <p class="ui-sub">This week</p>
        <div class="ui-bars">
          <span style="--h:46%"><em>S</em></span><span style="--h:62%"><em>M</em></span><span style="--h:38%"><em>T</em></span><span style="--h:74%"><em>W</em></span><span class="on" style="--h:88%"><em>T</em></span><span style="--h:12%"><em>F</em></span><span style="--h:8%"><em>S</em></span>
        </div>
        <p class="ui-muted ui-center">EGP 3,180 earned so far</p>
      </div>`,

    wafeyyat: () => `
      ${status()}
      <div class="ui-pad">
        <p class="ui-kicker">Your arrangements</p>
        <p class="ui-title">We'll go one step at a time</p>
        <div class="ui-progress"><span style="width:40%"></span></div>
        <p class="ui-muted">2 of 5 complete. Services shown match your practice.</p>
        <ul class="ui-steps">
          <li class="done"><i>${icon.check}</i><span><strong>Obituary</strong><em>Shared with family</em></span></li>
          <li class="done"><i>${icon.check}</i><span><strong>Burial</strong><em>Arranged</em></span></li>
          <li class="now"><i></i><span><strong>Funeral service</strong><em>Choose a venue</em></span></li>
          <li><i></i><span><strong>Prayers</strong><em>Times and details</em></span></li>
          <li><i></i><span><strong>Documents</strong><em>3 documents needed</em></span></li>
        </ul>
        <span class="ui-btn ui-btn--block">Continue</span>
      </div>`,

    reserva: () => `
      ${status()}
      <div class="ui-pad">
        <div class="ui-head"><p class="ui-title">Your cart</p><span class="ui-muted">2 items</span></div>
        <div class="ui-cart">
          <div><i style="background:linear-gradient(160deg,#E9E1FF,#CDBBFF)"><svg viewBox="0 0 40 40" width="34" height="34"><path d="M10 12 16 8h8l6 4-3 5-2-1v16H15V16l-2 1z" fill="#7A3CFF" opacity=".85"/></svg></i><span><strong>Linen overshirt</strong><em>Size M</em><b>EGP 650</b></span><u>– 1 +</u></div>
          <div><i style="background:linear-gradient(160deg,#FFF0D9,#FFD9A3)"><svg viewBox="0 0 40 40" width="34" height="34"><path d="M11 15h18l-2 17H13z" fill="#C77700" opacity=".85"/><path d="M15 15a5 5 0 0 1 10 0" fill="none" stroke="#C77700" stroke-width="2"/></svg></i><span><strong>Canvas tote</strong><em>Sand</em><b>EGP 250</b></span><u>– 1 +</u></div>
        </div>
        <div class="ui-voucher"><i>${icon.check}</i><span><strong>SAVE15</strong> applied</span><b>– EGP 135</b></div>
        <div class="ui-wallet"><span><strong>Use wallet</strong><em>EGP 300 available</em></span><span class="ui-toggle on"><i></i></span></div>
        <dl class="ui-sum">
          <div><dt>Subtotal</dt><dd>EGP 900</dd></div>
          <div><dt>Voucher</dt><dd>– EGP 135</dd></div>
          <div><dt>Wallet</dt><dd>– EGP 300</dd></div>
          <div class="total"><dt>Total</dt><dd>EGP 465</dd></div>
        </dl>
        <span class="ui-btn ui-btn--block">Checkout</span>
      </div>`,
  };

  window.renderScreen = function (id) {
    const fn = SCREENS[id];
    return `<div class="ui ui--${id}" aria-hidden="true">${fn ? fn() : ""}</div>`;
  };
})();
