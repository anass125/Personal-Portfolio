export const projects = [
  {
    slug: "passwordman",
    number: "01",
    title: "PassWordMan",
    subtitle: "Password Manager Application",
    category: "Full Stack",
    status: "Live",
    arc: 0,
    description:
      "A full-stack credential manager with JWT authentication, role-based access control, Redis caching, BullMQ background jobs and hardened APIs. Containerized with Docker.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "BullMQ", "JWT", "Docker"],
    links: [
      { label: "Live", href: "https://pass-word-man.vercel.app" },
      { label: "GitHub", href: "https://github.com/anass125/PassWordMan" },
    ],
    overview:
      "A full-stack credential manager that gives authenticated users access to their stored URL, username and password records. Access is secured with JWT authentication and role-based access control (RBAC). The backend is split into routes, controllers and services, and the APIs are hardened with several security layers.",
    facts: [
      { label: "Type", value: "Full-stack app" },
      { label: "Auth", value: "JWT + RBAC" },
      { label: "Caching", value: "Redis" },
      { label: "Deployment", value: "Docker, Vercel" },
    ],
    sectionsLabel: "WHAT I BUILT",
    sections: [
      {
        title: "Authentication & access",
        points: [
          "Secured access with JWT authentication and role-based access control (RBAC).",
          "Hashed user login credentials with bcrypt for secure authentication.",
        ],
      },
      {
        title: "API security",
        points: [
          "Hardened APIs with Helmet, CORS controls, rate limiting, XSS protection and MongoDB sanitization.",
        ],
      },
      {
        title: "Architecture",
        points: [
          "Structured REST APIs using routes, controllers and services to separate concerns and improve maintainability.",
        ],
      },
      {
        title: "Performance",
        points: [
          "Added Redis caching for frequently accessed credential data to reduce repeated database reads.",
          "Introduced BullMQ background jobs to move non-critical processing off the request-response path.",
        ],
      },
      {
        title: "Deployment",
        points: [
          "Containerized the application with Docker for consistent development and deployment environments.",
        ],
      },
    ],
  },

  {
    slug: "getmeachai",
    number: "02",
    title: "GetMeAChai",
    subtitle: "Crowdfunding Platform",
    category: "Full Stack",
    status: "Live",
    arc: 90,
    description:
      "A crowdfunding platform with creator profiles, dashboards, Google and GitHub OAuth, and end-to-end Razorpay payment handling.",
    tags: ["Next.js", "MongoDB", "NextAuth.js", "Razorpay", "Tailwind CSS"],
    links: [
      { label: "Live", href: "https://get-me-a-chai-rose.vercel.app" },
      { label: "GitHub", href: "https://github.com/anass125/GetMeAChai" },
    ],
    overview:
      "A full-stack crowdfunding platform with creator profiles, dashboards, authentication and payment workflows, built with the Next.js App Router.",
    facts: [
      { label: "Type", value: "Full-stack app" },
      { label: "Sign-in", value: "Google + GitHub" },
      { label: "Payments", value: "Razorpay" },
      { label: "Rendering", value: "App Router + SSR" },
    ],
    sectionsLabel: "WHAT I BUILT",
    sections: [
      {
        title: "Authentication",
        points: [
          "Implemented Google and GitHub OAuth with NextAuth.js, supporting two social login providers for streamlined onboarding.",
        ],
      },
      {
        title: "Payments",
        points: [
          "Integrated Razorpay with success and failure handling for end-to-end payment processing.",
        ],
      },
      {
        title: "Creator experience",
        points: [
          "Developed creator dashboards and dynamic profile pages using the Next.js App Router with server-side rendering.",
        ],
      },
      {
        title: "Data model",
        points: [
          "Designed MongoDB schemas for user, creator and payment data with clear relationships and application-level validation.",
        ],
      },
      {
        title: "Responsive UI",
        points: [
          "Built responsive UI across navigation, dashboards, payment flows and supporting pages for mobile and desktop.",
        ],
      },
    ],
  },

  {
    slug: "ebook-publication-website",
    number: "03",
    title: "E-Book Publication Website",
    subtitle: "Ebook Sales Website",
    category: "Website",
    status: "Live",
    arc: 180,
    description:
      "A website I built to sell my own ebook, From Bug Report to Root Cause. It has a benefits section, chapter overview, author page and a payment link.",
    tags: ["GitHub Pages", "Razorpay Payment Link"], // TODO: add the real tech stack
    links: [
      { label: "Live", href: "https://anass125.github.io/E-Book-Publication-Website/" },
      { label: "GitHub", href: "https://github.com/anass125/E-Book-Publication-Website" },
    ],
    overview:
      "A website I built to sell my ebook, From Bug Report to Root Cause. It walks a visitor from the problem to the purchase: a clear call to action, the benefits of the book, the full chapter list, an author page and a payment link.",
    facts: [
      { label: "Type", value: "Sales website" },
      { label: "Hosting", value: "GitHub Pages" },
      { label: "Checkout", value: "Razorpay link" },
      { label: "Pages", value: "Home + About" },
    ],
    sectionsLabel: "WHAT I BUILT",
    sections: [
      {
        title: "Landing page",
        points: [
          "A hero with the book title, a short promise and a Get the ebook call to action.",
          "Quick trust points: practical workflow, developer-focused and root-cause thinking.",
        ],
      },
      {
        title: "Benefits",
        points: [
          "A four-part benefits section: understand the problem, investigate systematically, find the root cause and prevent regressions.",
        ],
      },
      {
        title: "Contents",
        points: ["A numbered overview of all 10 chapters in the book."],
      },
      {
        title: "About the author",
        points: [
          "A separate About page that introduces me, my projects and my development journey.",
        ],
      },
      {
        title: "Checkout",
        points: ["Every Get the ebook button leads to a Razorpay payment link."],
      },
    ],
  },

  {
    slug: "bug-report-to-root-cause",
    number: "04",
    title: "From Bug Report to Root Cause",
    subtitle: "Published E-Book",
    category: "Publication",
    status: "Published",
    arc: 270,
    description:
      "A practical e-book on full-stack debugging and root-cause analysis. It teaches a structured way to investigate bugs and deliver reliable fixes.",
    tags: ["E-Book", "Debugging", "Root-Cause Analysis"],
    links: [
      { label: "Get the ebook", href: "https://rzp.io/rzp/pq5bv6sy" },
      { label: "Website", href: "https://anass125.github.io/E-Book-Publication-Website/" },
    ],
    overview:
      "A practical guide for developers on full-stack debugging and root-cause analysis. It teaches a repeatable way to move from symptoms to evidence, from evidence to understanding, and from understanding to a reliable fix.",
    facts: [
      { label: "Format", value: "E-book" },
      { label: "Audience", value: "Developers" },
      { label: "Chapters", value: "10" },
      { label: "Author", value: "Anas Shaikh" },
    ],
    sectionsLabel: "WHAT YOU LEARN",
    sections: [
      {
        title: "Understand the problem",
        points: [
          "Interpret bug reports, identify symptoms and separate observations from assumptions.",
        ],
      },
      {
        title: "Investigate systematically",
        points: [
          "Use a structured debugging workflow instead of randomly changing code and hoping for a fix.",
        ],
      },
      {
        title: "Find the root cause",
        points: [
          "Trace failures through your application and identify the underlying reason an issue occurs.",
        ],
      },
      {
        title: "Prevent regressions",
        points: [
          "Validate your fixes, communicate findings and reduce the chance of the same bug returning.",
        ],
      },
    ],
    chapters: [
      "Understanding bug reports",
      "Reproducing the issue",
      "Collecting useful evidence",
      "Reading logs and error messages",
      "Building a debugging hypothesis",
      "Tracing the execution flow",
      "Finding the root cause",
      "Implementing a reliable fix",
      "Testing and preventing regressions",
      "Writing a useful debugging report",
    ],
  },
];