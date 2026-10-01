/* ------------------------------------------------------------------
   All site content lives here. Edit text, add store links, reorder
   projects — the page re-renders from this file. No build step.
------------------------------------------------------------------- */
window.SITE = {
  person: {
    name: "Elsayed Abdelmoneem",
    firstName: "Elsayed",
    email: "elsaed3766@gmail.com",
    phone: "+20 106 023 9912",
    whatsapp: "https://wa.me/201060239912",
    github: "https://github.com/elsayed235",
    linkedin: "https://www.linkedin.com/in/elsayed-abd-elmonem-arab/",
    cv: "assets/Elsayed_Abdelmoneem_CV.pdf",
    // Put your photo in assets/ and set its path here, e.g. "assets/profile.jpg".
    // Leave empty to show the EA monogram instead.
    photo: "",
  },

  roles: [
    "mobile team lead.",
    "Flutter engineer.",
    "Swift and Kotlin developer.",
    "Laravel and Firebase backend dev.",
  ],

  /* Store links: paste the real Google Play / App Store URLs into
     android / ios. While a link is empty the platform shows as a plain
     label instead of a button, so nothing on the page is a dead link.
     accent = the colour used for that project across the site. */
  projects: [
    {
      id: "sakan",
      accent: "#0E7C66",
      name: "Sakan",
      category: "Real estate platform",
      metric: "100K+ downloads",
      summary:
        "Property search with advanced filtering, saved and compare lists, price-change alerts, map browsing, and direct buyer-to-seller contact.",
      apps: [{ label: "Sakan", platforms: ["Android", "iOS"],
          android: "https://play.google.com/store/apps/details?id=co.sakan.android",
          ios: "https://apps.apple.com/us/app/%D8%B3%D9%83%D9%86-sakan/id1169622789" }],
      features: [
        ["Advanced filtering", "Search listings by area, price, property type and size, and refine results without starting over."],
        ["Saved and compare lists", "Shortlist properties and compare them side by side before reaching out."],
        ["Price-change notifications", "Buyers are notified the moment a saved property's price changes."],
        ["Map integration", "Browse listings on a map and open any property straight from its pin."],
        ["Direct contact", "Buyers reach sellers from the listing itself, no middle step."],
      ],
      challenge: "Keeping a large listing dataset fast and smooth on both Android and iOS.",
      approach:
        "Paginated loading, cached results and lightweight list items, so scrolling, filtering and map browsing stay responsive as the catalogue grows.",
      stack: ["Flutter", "Dart", "Maps", "Push notifications", "REST"],
    },
    {
      id: "zaheb",
      accent: "#E39A00",
      name: "Zaheb",
      category: "Ride-hailing and delivery",
      metric: "Driver and customer apps",
      summary:
        "Two apps on one system: customers request rides and deliveries, drivers get assigned, and both sides follow every status change live.",
      apps: [
        { label: "Driver app", platforms: ["Android", "iOS"],
          android: "https://play.google.com/store/apps/details?id=zaheb.driver.sa",
          ios: "https://apps.apple.com/us/app/zaheb-driver/id6476413695" },
        { label: "Customer app", platforms: ["Android", "iOS"],
          android: "https://play.google.com/store/apps/details?id=zaheb.client.sa",
          ios: "https://apps.apple.com/us/app/zaheb/id6476413582" },
      ],
      features: [
        ["Real-time location tracking", "Customers watch their driver approach on the map, second by second."],
        ["Driver assignment", "Requests are matched to an available driver and handed over automatically."],
        ["Order management", "Rides and deliveries share one order pipeline from request to drop-off."],
        ["Live status updates", "Accepted, arriving, picked up, delivered: both apps update at once."],
      ],
      challenge: "Keeping two separate apps in sync in real time.",
      approach:
        "A shared order state that both the driver and customer apps listen to, so a change on one side shows up on the other immediately.",
      stack: ["Flutter", "Maps", "Real-time updates", "Push notifications"],
    },
    {
      id: "cityguide",
      accent: "#D6336C",
      name: "City Guide",
      category: "City-wide services super-app",
      metric: "Multi-vendor marketplace",
      summary:
        "A marketplace connecting an entire city: businesses showcase their products and services, and customers order and talk to vendors directly.",
      apps: [{ label: "City Guide", platforms: ["Android", "iOS"],
          android: "https://play.google.com/store/apps/details?id=ta.daleel.masr.eg",
          ios: "https://apps.apple.com/us/app/%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9/id6504849336" }],
      features: [
        ["Vendor storefronts", "Every business gets its own page for products and services."],
        ["Ordering", "Customers order from any vendor in the city from one app."],
        ["Direct messaging", "Customers and vendors talk in-app to sort out details."],
        ["City-wide discovery", "Browse by category to find what's nearby."],
      ],
      challenge: "Serving very different kinds of businesses inside one app.",
      approach:
        "One flexible vendor model for products and services, with category-driven browsing so each customer only sees what's relevant.",
      stack: ["Flutter", "Chat", "REST", "Push notifications"],
    },
    {
      id: "weideliver",
      accent: "#E8601A",
      name: "Weideliver",
      category: "Delivery and logistics",
      metric: "Store and driver apps",
      summary:
        "A two-sided platform: merchants manage orders and dispatch from the store app, while drivers go online, accept jobs and track weekly earnings.",
      apps: [
        { label: "Store app", platforms: ["Android"],
          android: "https://play.google.com/store/apps/details?id=ua.suliitstore.app.com", ios: "" },
        { label: "Driver app", platforms: ["Android"],
          android: "https://play.google.com/store/apps/details?id=ua.suliitdriver.com", ios: "" },
      ],
      features: [
        ["Store dispatch", "Merchants manage incoming orders and dispatch them from one screen."],
        ["Online and offline", "Drivers choose when they're available and accept jobs as they come in."],
        ["Weekly earnings", "Drivers see what they've earned this week at a glance."],
        ["Own fleet or on-demand", "Businesses can use their own drivers, an on-demand pool, or both."],
      ],
      challenge: "Supporting a business's own fleet and an on-demand driver pool at the same time.",
      approach:
        "Dispatch rules that treat both driver types as one pool, so merchants don't have to think about where a driver comes from.",
      stack: ["Flutter", "Maps", "Real-time updates"],
    },
    {
      id: "wafeyyat",
      accent: "#3E5C80",
      name: "Wafeyyat",
      category: "After-death services",
      metric: "Guided arrangements",
      summary:
        "Guides families through obituary creation, burial and funeral arrangements, prayers and required documentation, with services filtered by religious practice.",
      apps: [{ label: "Wafeyyat", platforms: ["Android"],
          android: "https://play.google.com/store/apps/details?id=lbn.wafyyat.com", ios: "" }],
      features: [
        ["Obituary creation", "Families write and share an obituary in a few calm steps."],
        ["Burial and funeral arrangements", "Find and arrange the services needed, in one place."],
        ["Prayers", "Relevant prayer times and details, according to the family's practice."],
        ["Required documentation", "A clear list of the paperwork needed and where it stands."],
      ],
      challenge: "Designing for people going through one of the hardest days of their lives.",
      approach:
        "A quiet, step-by-step flow with clear progress, plain language and services filtered by religious practice, so families only see what applies to them.",
      stack: ["Flutter", "REST"],
    },
    {
      id: "reserva",
      accent: "#6E35F5",
      name: "Reserva",
      category: "E-commerce",
      metric: "Checkout, wallets, vouchers",
      summary:
        "Store management, product catalogues and order flows, with payments, vouchers, discounts and wallets handled in a checkout built to fail gracefully.",
      apps: [],
      features: [
        ["Store management", "Merchants manage products, stock and orders."],
        ["Product catalogues", "Browsable catalogues with categories and product detail."],
        ["Vouchers and discounts", "Codes and discounts applied correctly at checkout."],
        ["Wallets", "Customers pay fully or partly from their wallet balance."],
      ],
      challenge: "Checkout logic that stays correct with vouchers, discounts and wallets combined.",
      approach:
        "Strict validation at each checkout step and clear error handling, so customers always know what they'll pay and why.",
      stack: ["Flutter", "Payments", "REST"],
    },
  ],

  experience: [
    {
      company: "Code Craft",
      role: "Mobile Team Lead (Flutter)",
      place: "Software house",
      period: "Jan 2022 – Present",
      points: [
        "Lead the mobile team at a delivery-focused software house, taking client-defined scopes from planning through release.",
        "Own project planning, code reviews, and task distribution across the mobile team.",
        "Design and enforce standards for architecture, state management, and code quality across projects.",
        "Guide implementation of critical modules: payments, maps, push notifications, and in-app services.",
        "Mentor junior developers and run knowledge-sharing sessions to shorten onboarding time.",
        "Coordinate with product managers and client stakeholders to align mobile delivery with business goals.",
      ],
    },
    {
      company: "Treasure Company",
      role: "Flutter developer",
      place: "Dubai, remote, part-time",
      period: "Jan 2022 – Jul 2025",
      points: [
        "Implemented state management with Bloc and related best practices for smooth data flow and responsive UI.",
        "Used CI/CD pipelines and automated testing (unit, widget, integration) to streamline development and keep code quality high.",
        "Optimised performance by reducing app size, improving load times, and debugging.",
        "Took part in sprint planning, reviews, and retrospectives to deliver milestones on time.",
      ],
    },
    {
      company: "Awamer El Shabaka",
      role: "Flutter developer",
      place: "Saudi Arabia",
      period: "Jul 2020 – Jan 2022",
      points: [
        "Built multiple apps for Saudi Arabian customers.",
        "Kept up with Flutter releases, libraries and best practices, bringing new tools into the development process.",
        "Built and maintained documentation for internal and external stakeholders to keep knowledge transfer consistent.",
      ],
    },
  ],

  skills: [
    {
      name: "Flutter and Dart",
      text: "4+ years of production cross-platform apps: custom widgets, animations, and responsive, pixel-perfect UI.",
      tools: ["Flutter", "Dart", "Custom widgets", "Animations"],
    },
    {
      name: "Native mobile",
      text: "Swift for iOS and Kotlin/Java for Android when a feature needs the platform directly, including native module integration.",
      tools: ["Swift", "Kotlin", "Java", "Platform channels"],
    },
    {
      name: "Architecture and state",
      text: "Clean Architecture and MVVM using BLoC, Provider and GetX across large, modular codebases.",
      tools: ["Clean Architecture", "MVVM", "BLoC", "Provider", "GetX"],
    },
    {
      name: "Backend",
      text: "Ships his own endpoints in Laravel and Firebase Functions, and integrates REST, GraphQL and WebSockets.",
      tools: ["Laravel", "Firebase", "Firebase Functions", "REST", "GraphQL", "WebSockets", "AWS"],
    },
    {
      name: "AI-assisted engineering",
      text: "Daily use of Claude, Cursor and Copilot for feature delivery, refactoring and code review.",
      tools: ["Claude", "Cursor", "Copilot"],
    },
    {
      name: "AI agents and automation",
      text: "Builds tool-calling agents and MCP integrations that automate delivery and internal workflows.",
      tools: ["MCP", "Tool-calling agents", "Workflow automation"],
    },
    {
      name: "Quality and delivery",
      text: "CI/CD, unit, widget and integration testing, performance profiling, and Agile/Scrum delivery.",
      tools: ["GitHub Actions", "Bitrise", "Unit tests", "Widget tests", "Integration tests", "Git", "Scrum"],
    },
  ],

  stackMarquee: [
    "Flutter", "Dart", "Swift", "Kotlin", "BLoC", "Provider", "GetX", "Clean Architecture",
    "REST", "GraphQL", "WebSockets", "Laravel", "Firebase", "Firebase Functions", "AWS",
    "MCP", "Claude", "Cursor", "Copilot", "GitHub Actions", "Bitrise", "Git",
  ],
};
