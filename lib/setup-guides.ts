// Per-platform onboarding content for /setup/<platform> routes.
// Content lifted from the original standalone HTML guides; the visual
// language is rendered by components/SetupGuide.tsx using the site's
// existing dark + purple design tokens.

export type InfoCell = { label: string; value: string };
export type ChecklistItem = string;

export type Step = {
  title: string;
  // paragraphs may contain inline <code>, <strong>, <em>, <span class="path">
  // we accept either plain strings or rich nodes via the "html" prop.
  paragraphs: string[]; // each entry is HTML-allowed inline content
  note?: string; // optional callout shown under the step (HTML allowed)
};

export type PathOption = {
  label: string;
  title: string;
  body: string;
};

export type ReplyItem = {
  num: string;
  title: string; // HTML allowed
  hint: string;
};

export type ExampleField = { field: string; value: string };

export type TimelineItem = { when: string; what: string };
export type FaqItem = { q: string; a: string }; // a is HTML allowed

export type Callout = {
  label: string;
  title: string;
  body: string; // HTML allowed
};

export type CodeBlock = {
  // Already-formatted lines. We render in a styled <pre>.
  // Allowed inline span classes: comment | tag | string | attr
  lines: string[]; // raw HTML lines
};

export type SetupGuideData = {
  platformSlug: string;
  platformLabel: string; // shown in top-right tag: "Wix · Setup Guide"
  timeRequired: string;
  password?: string; // overrides "Password needed" cell
  passwordLabel?: string; // override label text (e.g. "Developer needed")
  liveWithin?: string; // default "48 hours"
  // Hero
  heroTitle: string; // HTML allowed (use <em> for accent gradient text)
  heroLede: string;
  // Optional sections
  callout?: Callout;
  pathSectionTitle?: string;
  pathSectionIntro?: string;
  pathOptions?: PathOption[];
  pathNote?: string;
  checklist: ChecklistItem[];
  codeIntro?: string;
  codeBlock?: CodeBlock;
  codeNote?: string;
  stepsTitle: string;
  steps: Step[];
  replyTitle: string;
  replySubtitle?: string;
  replyItems: ReplyItem[];
  example: ExampleField[];
  timeline: TimelineItem[];
  faq: FaqItem[];
  stuckTitle?: string;
  stuckBody?: string;
};

const TIMELINE_STANDARD: TimelineItem[] = [
  {
    when: "Today",
    what: "You finish the platform-side setup and reply with your details.",
  },
  {
    when: "Within 24 hours",
    what: "We log in, build the connection, configure your auto-reply, and run a test submission ourselves.",
  },
  {
    when: "Within 48 hours",
    what: "You get a confirmation email. You submit a test on your own form and watch your phone buzz in under 60 seconds.",
  },
  {
    when: "From day three onward",
    what: "Every real lead triggers your alert. You call them while they're still deciding. You book more jobs.",
  },
];

// ───────────────────────────────────────────── WIX
export const wix: SetupGuideData = {
  platformSlug: "wix",
  platformLabel: "Wix · Setup Guide",
  timeRequired: "~5 minutes",
  password: "None — OAuth",
  heroTitle:
    "Let's connect your Wix site to <em>instant lead alerts.</em>",
  heroLede:
    "This is the one thing we need from you to wire everything up. It takes about five minutes and you won't share any passwords — Wix uses a secure handshake that lets you authorize the connection without exposing your credentials.",
  checklist: [
    "Your Wix login (just to be logged in — we never see it)",
    "The phone number where you want SMS alerts to land",
    "About five uninterrupted minutes",
  ],
  stepsTitle: "Six steps. That's it.",
  steps: [
    {
      title: "Log into your Wix account",
      paragraphs: [
        "Head to <code>wix.com</code> and log in. From your dashboard, open the website that has the contact form you want connected.",
      ],
    },
    {
      title: "Open the App Market",
      paragraphs: [
        'In the left-hand menu of your Wix dashboard, find <span class="path">App Market</span>. It\'s sometimes shown as a small grid icon.',
      ],
    },
    {
      title: "Search for Zapier",
      paragraphs: [
        "In the search bar at the top, type <strong>Zapier</strong>. Click the result, then click the blue <strong>Add to Site</strong> button. Wix will confirm — click <strong>Add to Site</strong> once more.",
      ],
      note:
        "<strong>What is Zapier?</strong> It's the middleware we use to listen for your form submissions and trigger the SMS alerts. Standard, widely-trusted tool — you don't need to know how it works.",
    },
    {
      title: "Connect your Zapier account",
      paragraphs: [
        "Wix will redirect you to Zapier to authorize the connection.",
        "<strong>No Zapier account yet?</strong> Click <strong>Sign Up</strong>. The free plan works — we cover the paid features on our end.",
        "<strong>Already have one?</strong> Log in with your existing email.",
        "When prompted, click <strong>Allow</strong> to give Zapier permission to read form submissions from your Wix site. You'll see a confirmation that says <em>\"Wix connected successfully.\"</em>",
      ],
    },
    {
      title: "Send us your details",
      paragraphs: [
        "Reply to our setup email with the four things listed in the next section. That's everything we need to build the connection on our side.",
      ],
    },
    {
      title: "We take it from here",
      paragraphs: [
        "Within 48 hours we'll wire up the alert system, run a test submission ourselves, and email you a confirmation that everything is live. You'll then run your own test to see your phone buzz in real time.",
      ],
    },
  ],
  replyTitle: "What to send back to us.",
  replySubtitle: "Hit reply on our setup email and include",
  replyItems: [
    {
      num: "01",
      title: "The email you used to log into Zapier",
      hint: "So we can find the right account and build your Zap.",
    },
    {
      num: "02",
      title: "The phone number for SMS alerts",
      hint: "This is where every new lead text will land.",
    },
    {
      num: "03",
      title: "Your website URL",
      hint: "So we can identify the exact form on your site.",
    },
    {
      num: "04",
      title:
        'Custom auto-reply message <span class="opacity-60">(optional)</span>',
      hint:
        "The text your customer gets the second they submit your form. If you skip this, we use our default.",
    },
  ],
  example: [
    { field: "Zapier email:", value: "mike@mikesroofing.com" },
    { field: "SMS phone:", value: "(612) 555-0182" },
    { field: "Site URL:", value: "mikesroofing.com" },
    {
      field: "Auto-reply:",
      value:
        '"Thanks! We\'ll call you back within the hour during business hours."',
    },
  ],
  timeline: [
    {
      when: "Today",
      what:
        "You install the Zapier app on your Wix site and reply with your details.",
    },
    TIMELINE_STANDARD[1],
    TIMELINE_STANDARD[2],
    TIMELINE_STANDARD[3],
  ],
  faq: [
    {
      q: "Will this slow down my website?",
      a: "No. Zapier runs in the background after a form is submitted — your site loads exactly the same as it does today.",
    },
    {
      q: "Can I cancel later?",
      a: "Yes. Go to your Wix App Market, click Manage Apps, and remove Zapier. The connection breaks and your site goes back to its old setup. <strong>No long-term contract — cancel anytime.</strong>",
    },
    {
      q: "What if I change my phone number?",
      a: "Email us. Takes 30 seconds to update on our end.",
    },
    {
      q: "Does this work for multiple forms on my site?",
      a: "Yes. Mention which forms you want connected when you reply and we'll wire them all up.",
    },
    {
      q: "What about spam form submissions?",
      a: "We can add basic filters (ignore submissions with no phone number, ignore obvious bot patterns). Mention it when we set up.",
    },
  ],
};

// ───────────────────────────────────────── WORDPRESS
export const wordpress: SetupGuideData = {
  platformSlug: "wordpress",
  platformLabel: "WordPress · Setup Guide",
  timeRequired: "~10 minutes",
  password: "None — OAuth",
  heroTitle:
    "Let's connect your WordPress site to <em>instant lead alerts.</em>",
  heroLede:
    "WordPress has the most flexible setup of any platform — there are a few different form plugins it could be running. This guide walks you through identifying yours and giving us the green light to wire everything up. About ten minutes total.",
  checklist: [
    "Your WordPress admin login (we never see your password)",
    "The phone number where you want SMS alerts to land",
    "About ten uninterrupted minutes",
  ],
  stepsTitle: "Six steps to live.",
  steps: [
    {
      title: "Log into your WordPress admin",
      paragraphs: [
        "Go to your site's admin URL — usually <code>yoursite.com/wp-admin</code> — and log in.",
        "You should land on the WordPress dashboard with a left-hand menu showing Posts, Pages, Plugins, etc.",
      ],
    },
    {
      title: "Identify your form plugin",
      paragraphs: [
        'In the left menu, click <span class="path">Plugins → Installed Plugins</span>. Look down the list for whichever of these you have active: <strong>WPForms</strong>, <strong>Gravity Forms</strong>, <strong>Contact Form 7</strong>, <strong>Ninja Forms</strong>, <strong>Formidable Forms</strong>, or <strong>Fluent Forms</strong>.',
      ],
      note:
        "<strong>Not sure?</strong> Don't worry — just send us a screenshot of your Plugins page and we'll identify it for you. Skip ahead to Step 5 if so.",
    },
    {
      title: "Install the Zapier add-on for your plugin",
      paragraphs: [
        "Most form plugins have a free or built-in Zapier integration. The exact path depends on your plugin:",
        "<strong>WPForms:</strong> WPForms → Addons → search \"Zapier\" → Install Addon → Activate.",
        "<strong>Gravity Forms:</strong> Forms → Add-Ons → find Zapier → Install → Activate.",
        "<strong>Contact Form 7:</strong> No native integration — we'll install a free helper plugin called <em>CF7 to Webhook</em> on your behalf. Skip this step.",
        "<strong>Ninja Forms / Fluent Forms / Formidable:</strong> Search \"Zapier\" in their addons or integrations menu and activate.",
      ],
      note:
        "<strong>Stuck?</strong> Skip this step. Reply to our setup email and we'll handle plugin installation for you remotely (with your permission).",
    },
    {
      title: "Connect your Zapier account",
      paragraphs: [
        "Inside your form plugin's Zapier section, click <strong>Connect to Zapier</strong>. You'll be redirected to Zapier.",
        "<strong>No Zapier account yet?</strong> Click Sign Up. The free plan works — we cover the paid features on our end.",
        "<strong>Already have one?</strong> Log in. When prompted, click <strong>Allow</strong> to authorize.",
      ],
    },
    {
      title: "Send us your details",
      paragraphs: [
        "Reply to our setup email with the four things listed in the next section. That's everything we need to build the connection on our side.",
      ],
    },
    {
      title: "We take it from here",
      paragraphs: [
        "Within 48 hours we'll wire up the alert system, run a test submission ourselves, and email you a confirmation that everything is live. You'll then run your own test to see your phone buzz in real time.",
      ],
    },
  ],
  replyTitle: "What to send back to us.",
  replySubtitle: "Hit reply on our setup email and include",
  replyItems: [
    {
      num: "01",
      title: "Your WordPress site URL",
      hint: "So we know exactly which site we're working on.",
    },
    {
      num: "02",
      title:
        'Your form plugin name <span class="opacity-60">(or screenshot of Plugins page)</span>',
      hint:
        "WPForms, Gravity Forms, Contact Form 7, etc. If unsure, screenshot is fine.",
    },
    {
      num: "03",
      title: "The phone number for SMS alerts",
      hint: "This is where every new lead text will land.",
    },
    {
      num: "04",
      title:
        'Custom auto-reply message <span class="opacity-60">(optional)</span>',
      hint:
        "The text your customer gets the second they submit. If skipped, we use our default.",
    },
  ],
  example: [
    { field: "Site URL:", value: "mikesroofing.com" },
    { field: "Form plugin:", value: "WPForms (Contact Us form)" },
    { field: "SMS phone:", value: "(612) 555-0182" },
    {
      field: "Auto-reply:",
      value:
        '"Thanks! We\'ll call you back within the hour during business hours."',
    },
  ],
  timeline: [
    {
      when: "Today",
      what:
        "You install the Zapier add-on for your plugin (or send us a screenshot and we handle it) and reply with your details.",
    },
    TIMELINE_STANDARD[1],
    TIMELINE_STANDARD[2],
    TIMELINE_STANDARD[3],
  ],
  faq: [
    {
      q: "Will this slow down my WordPress site?",
      a: "No. The Zapier add-on runs server-side after a form is submitted — your page load and visitor experience are unchanged.",
    },
    {
      q: "I have multiple forms. Can you connect all of them?",
      a: "Yes. Tell us which forms you want connected (or all of them) when you reply and we'll wire them up the same way.",
    },
    {
      q: "What if I don't know what plugin I'm using?",
      a: "Send us a screenshot of your <strong>Plugins → Installed Plugins</strong> page and we'll identify it. Or give us temporary admin access (a guest account) and we'll figure it out without you needing to.",
    },
    {
      q: "Can I cancel later?",
      a: "Yes. Deactivate the Zapier add-on from your Plugins page and the connection breaks. <strong>No long-term contract — cancel anytime.</strong>",
    },
    {
      q: "What if my site is hosted on WordPress.com (not self-hosted)?",
      a: "WordPress.com requires the Business plan or higher to install plugins. If you're on a lower tier, mention it when you reply and we'll suggest the cheapest path forward.",
    },
  ],
  stuckBody:
    "WordPress has more variation than other platforms, so if anything feels confusing, just reply. We can get on a five-minute call, send a screen recording, or remotely handle the plugin install ourselves if you'd rather we just take care of it.",
};

// ──────────────────────────────────────── SQUARESPACE
export const squarespace: SetupGuideData = {
  platformSlug: "squarespace",
  platformLabel: "Squarespace · Setup Guide",
  timeRequired: "~5 minutes",
  password: "None — OAuth",
  heroTitle:
    "Let's connect your Squarespace site to <em>instant lead alerts.</em>",
  heroLede:
    "Squarespace makes this easy — there's a built-in integration point that connects form submissions to our alert system. About five minutes of clicking. No passwords shared on your end.",
  callout: {
    label: "Plan requirement",
    title: "Business plan or higher required",
    body:
      "Squarespace's <strong>Personal plan does not support</strong> the form integration we use. If you're on Personal, you'll need to either upgrade to Business ($23/mo through Squarespace) or we'll build you a dedicated landing page that runs independently of your existing site. Mention which you'd prefer when you reply and we'll handle it from there.",
  },
  checklist: [
    "Your Squarespace login (we never see your password)",
    "Confirmation that you're on the Business plan or higher",
    "The phone number where you want SMS alerts to land",
    "About five uninterrupted minutes",
  ],
  stepsTitle: "Seven clicks. That's it.",
  steps: [
    {
      title: "Log into Squarespace",
      paragraphs: [
        "Head to <code>squarespace.com</code> and log in. Open the website with the contact form you want connected.",
      ],
    },
    {
      title: "Open Settings",
      paragraphs: [
        'From your Squarespace dashboard, click <span class="path">Settings</span> in the left-hand menu.',
      ],
    },
    {
      title: "Find the Advanced section",
      paragraphs: [
        'Scroll down inside Settings until you see <span class="path">Advanced</span>. Click to expand the menu.',
      ],
    },
    {
      title: "Open Form & Pop-Up Storage",
      paragraphs: [
        'Inside the Advanced menu, click <span class="path">Form &amp; Pop-Up Storage</span>. This is where Squarespace lets you connect external services to your contact forms.',
      ],
    },
    {
      title: "Connect Zapier",
      paragraphs: [
        "You'll see a list of services Squarespace can send form submissions to. Find <strong>Zapier</strong> and click <strong>Connect</strong>. A new window will open asking you to log in.",
        "<strong>No Zapier account?</strong> Click Sign Up. Free plan works — we cover the paid features on our end.",
        "<strong>Already have one?</strong> Log in. When prompted, click <strong>Allow</strong> or <strong>Authorize</strong> to give Zapier permission to receive form submissions from your Squarespace site.",
      ],
      note:
        "<strong>What is Zapier?</strong> The middleware we use to listen for your form submissions and trigger your SMS alerts. Standard tool, widely trusted, you never have to interact with it again after this step.",
    },
    {
      title: "Send us your details",
      paragraphs: [
        "Reply to our setup email with the four things listed in the next section. That's everything we need to build the connection.",
      ],
    },
    {
      title: "We take it from here",
      paragraphs: [
        "Within 48 hours we'll wire up the alert system, run a test submission ourselves, and email you a confirmation that everything is live.",
      ],
    },
  ],
  replyTitle: "What to send back to us.",
  replySubtitle: "Hit reply on our setup email and include",
  replyItems: [
    {
      num: "01",
      title: "The email you used to log into Zapier",
      hint: "So we can find the right account and build your Zap.",
    },
    {
      num: "02",
      title: "The phone number for SMS alerts",
      hint: "This is where every new lead text will land.",
    },
    {
      num: "03",
      title: "The exact name of the form on your site",
      hint:
        'e.g. "Contact Us" or "Get a Quote." Helps us connect to the right form if you have multiple.',
    },
    {
      num: "04",
      title:
        'Custom auto-reply message <span class="opacity-60">(optional)</span>',
      hint:
        "The text your customer gets the second they submit. If skipped, we use our default.",
    },
  ],
  example: [
    { field: "Zapier email:", value: "mike@mikesroofing.com" },
    { field: "SMS phone:", value: "(612) 555-0182" },
    { field: "Form name:", value: "Free Estimate Request" },
    {
      field: "Auto-reply:",
      value: '"Thanks! We\'ll call you back within the hour."',
    },
  ],
  timeline: [
    {
      when: "Today",
      what:
        "You connect Zapier in your Squarespace settings and reply with your details.",
    },
    TIMELINE_STANDARD[1],
    TIMELINE_STANDARD[2],
    TIMELINE_STANDARD[3],
  ],
  faq: [
    {
      q: "What if I'm on the Personal plan?",
      a: "Two options: <strong>(1)</strong> Upgrade to Business — $23/month through Squarespace, gives you immediate access to this integration. <strong>(2)</strong> Let us build you a separate landing page hosted on our infrastructure. That page works independently of your existing site and hooks into the alert system directly. Mention which you'd prefer when you reply.",
    },
    {
      q: "Will this slow down my Squarespace site?",
      a: "No. The integration runs in the background after a form is submitted — your site speed and visitor experience are unchanged.",
    },
    {
      q: "Does this work for multiple forms?",
      a: "Yes. If you have several forms (Contact, Quote Request, etc.), tell us which ones to connect when you reply and we'll wire them all up.",
    },
    {
      q: "Can I disconnect later?",
      a: "Yes. Settings → Advanced → Form &amp; Pop-Up Storage → click Zapier → Disconnect. <strong>No long-term contract — cancel anytime.</strong>",
    },
    {
      q: "What if I change my phone number?",
      a: "Email us. Takes 30 seconds to update on our end.",
    },
  ],
  stuckBody:
    "If any step is unclear or you're not sure which plan you're on, just hit reply. We can get on a five-minute call, send a screen recording, or walk you through it however is easiest.",
};

// ───────────────────────────────────────── WEBFLOW
export const webflow: SetupGuideData = {
  platformSlug: "webflow",
  platformLabel: "Webflow · Setup Guide",
  timeRequired: "~5 minutes",
  password: "None — OAuth",
  heroTitle:
    "Let's connect your Webflow site to <em>instant lead alerts.</em>",
  heroLede:
    "Webflow has the cleanest integration path of any platform we work with — native Zapier support built right in. About five minutes of clicking and you're done on your end.",
  checklist: [
    "Your Webflow login (we never see your password)",
    "Access to the project containing your contact form",
    "The phone number where you want SMS alerts to land",
    "About five uninterrupted minutes",
  ],
  stepsTitle: "Five steps. The easiest of any platform.",
  steps: [
    {
      title: "Log into Webflow",
      paragraphs: [
        "Head to <code>webflow.com</code> and log into your dashboard. Open the project that contains the form you want connected.",
      ],
    },
    {
      title: "Open Project Settings",
      paragraphs: [
        'Once inside the project, click the gear icon or go to <span class="path">Project Settings</span>. Then navigate to the <span class="path">Integrations</span> tab.',
      ],
    },
    {
      title: "Find Zapier",
      paragraphs: [
        "Inside Integrations, scroll until you see <strong>Zapier</strong>. Click <strong>Connect to Zapier</strong>.",
      ],
      note:
        "<strong>What is Zapier?</strong> The middleware we use to listen for your form submissions and trigger the SMS alerts. Webflow has native support for it — that's why your setup is so simple.",
    },
    {
      title: "Authorize the connection",
      paragraphs: [
        "You'll be redirected to Zapier.",
        "<strong>No Zapier account?</strong> Click Sign Up. The free plan works — we cover the paid features on our end.",
        "<strong>Already have one?</strong> Log in. When prompted, click <strong>Allow</strong> to give Zapier permission to read form submissions from your Webflow site.",
      ],
    },
    {
      title: "Send us your details",
      paragraphs: [
        "Reply to our setup email with the four things listed in the next section. That's everything we need to wire up the alerts.",
      ],
    },
  ],
  replyTitle: "What to send back to us.",
  replySubtitle: "Hit reply on our setup email and include",
  replyItems: [
    {
      num: "01",
      title: "The email you used to log into Zapier",
      hint: "So we can find the right account and build your Zap.",
    },
    {
      num: "02",
      title: "The phone number for SMS alerts",
      hint: "This is where every new lead text will land.",
    },
    {
      num: "03",
      title: "Your Webflow site URL",
      hint: "So we know exactly which form to listen to.",
    },
    {
      num: "04",
      title:
        'Custom auto-reply message <span class="opacity-60">(optional)</span>',
      hint:
        "The text your customer gets the second they submit. If skipped, we use our default.",
    },
  ],
  example: [
    { field: "Zapier email:", value: "mike@mikesroofing.com" },
    { field: "SMS phone:", value: "(612) 555-0182" },
    { field: "Site URL:", value: "mikesroofing.com" },
    {
      field: "Auto-reply:",
      value: '"Thanks! We\'ll call you back within the hour."',
    },
  ],
  timeline: [
    {
      when: "Today",
      what:
        "You authorize Zapier inside Webflow's Project Settings and reply with your details.",
    },
    TIMELINE_STANDARD[1],
    TIMELINE_STANDARD[2],
    TIMELINE_STANDARD[3],
  ],
  faq: [
    {
      q: "Do I need a specific Webflow plan?",
      a: "Any paid Webflow plan with form submissions enabled works. If you're on the free Starter plan, you'll need to upgrade to a Basic plan or higher to receive form submissions — but if you already have a working contact form, you're set.",
    },
    {
      q: "Will this slow down my Webflow site?",
      a: "No. The integration runs server-side after submission — your site speed and visitor experience are identical.",
    },
    {
      q: "Does this work for multiple forms?",
      a: "Yes. Webflow's integration captures all form submissions. Tell us which forms to wire up when you reply.",
    },
    {
      q: "Can I disconnect later?",
      a: "Yes. Go to Project Settings → Integrations → Zapier → Disconnect. <strong>No long-term contract — cancel anytime.</strong>",
    },
    {
      q: "What if I'm using a custom-coded form?",
      a: "If your form uses Webflow's native form element, this works as-is. If it's fully custom with external endpoints, mention that when you reply and we'll find the cleanest path forward.",
    },
  ],
  stuckBody:
    "If any step is unclear, just hit reply. We can get on a five-minute call or send a screen recording.",
};

// ───────────────────────────────────────── GODADDY
export const godaddy: SetupGuideData = {
  platformSlug: "godaddy",
  platformLabel: "GoDaddy · Setup Guide",
  timeRequired: "~5 minutes",
  password: "None on your end",
  heroTitle:
    "Let's connect your GoDaddy site to <em>instant lead alerts.</em>",
  heroLede:
    "GoDaddy works a little differently than other platforms — it doesn't support direct integrations the same way. So we use one of two clean paths to get you set up. Both work, both go live in 48 hours.",
  pathSectionTitle: "We'll pick the right one with you.",
  pathSectionIntro:
    "GoDaddy's Website Builder is great for getting a site online quickly, but it doesn't expose form submissions to outside tools as cleanly as Wix or Squarespace do. So we work around it with one of these two approaches:",
  pathOptions: [
    {
      label: "Path A · Email forwarding",
      title: "Use your existing form",
      body:
        "We set up an email forwarding bridge so that every form submission email gets parsed in real time and triggers your SMS alert. Your existing GoDaddy form stays exactly as it is.",
    },
    {
      label: "Path B · Embedded form",
      title: "Drop in a fast-replacement form",
      body:
        "We provide a small embed code that replaces your existing form with one that connects directly to the alert system. Looks identical, works faster, gives us cleaner data.",
    },
  ],
  pathNote:
    "<strong>You don't have to choose now.</strong> Reply with your site details and we'll recommend the path that fits your specific GoDaddy setup. Most clients land on Path A — it's faster and requires no changes to your site.",
  checklist: [
    "Your GoDaddy login (we never see your password)",
    "The phone number where you want SMS alerts to land",
    "The email address where your contact form currently sends submissions",
    "About five minutes to confirm form settings",
  ],
  stepsTitle: "Four steps to live.",
  steps: [
    {
      title: "Log into GoDaddy",
      paragraphs: [
        "Head to <code>godaddy.com</code> and log in. Open your <strong>Websites + Marketing</strong> account (or whichever product hosts your site).",
      ],
    },
    {
      title: "Find your contact form",
      paragraphs: [
        "Open the editor for your site and locate the contact form on whichever page it lives. Click into it to see its current settings.",
        "Note down the <strong>email address where form submissions currently go</strong>. You'll need this when you reply to us.",
      ],
      note:
        "<strong>Not sure where it goes?</strong> Submit a test through your own form. The email that arrives will show you the destination.",
    },
    {
      title: "Send us your details",
      paragraphs: [
        "Reply to our setup email with the five things in the next section. Based on what you send, we'll tell you whether we're using Path A (email forwarding) or Path B (embedded form) and walk you through the next 30 seconds of setup.",
      ],
    },
    {
      title: "We take it from here",
      paragraphs: [
        "Within 48 hours we'll have the alert system wired up, run a test submission ourselves, and email you a confirmation that everything is live.",
      ],
    },
  ],
  replyTitle: "What to send back to us.",
  replySubtitle: "Hit reply on our setup email and include",
  replyItems: [
    {
      num: "01",
      title: "Your GoDaddy site URL",
      hint: "So we can see the form and pick the right path.",
    },
    {
      num: "02",
      title: "The email address your form currently sends to",
      hint:
        "e.g. info@mikesroofing.com — this is what we'll bridge to the alert system.",
    },
    {
      num: "03",
      title: "The phone number for SMS alerts",
      hint: "This is where every new lead text will land.",
    },
    {
      num: "04",
      title: "Which form fields you collect",
      hint:
        "e.g. name, phone, email, message. So our alerts include the right data.",
    },
    {
      num: "05",
      title:
        'Custom auto-reply message <span class="opacity-60">(optional)</span>',
      hint:
        "The text your customer gets the second they submit. If skipped, we use our default.",
    },
  ],
  example: [
    { field: "Site URL:", value: "mikesroofing.com" },
    { field: "Form email:", value: "info@mikesroofing.com" },
    { field: "SMS phone:", value: "(612) 555-0182" },
    { field: "Fields:", value: "name, phone, email, message" },
    {
      field: "Auto-reply:",
      value: '"Thanks! We\'ll call you back within the hour."',
    },
  ],
  timeline: [
    {
      when: "Today",
      what:
        "You confirm where your form sends submissions and reply with your details.",
    },
    {
      when: "Within 24 hours",
      what:
        "We pick the right path, build the connection, and either set up email parsing or send you a 1-line embed code to drop into your site.",
    },
    TIMELINE_STANDARD[2],
    TIMELINE_STANDARD[3],
  ],
  faq: [
    {
      q: "Why is GoDaddy different from other platforms?",
      a: "GoDaddy's Website Builder doesn't have a direct Zapier integration the way Wix or Squarespace do — but their form notification emails are reliable, so we use those as our trigger instead. From your perspective, the result is identical: form gets submitted, your phone buzzes in 60 seconds.",
    },
    {
      q: "Do I need to change my form?",
      a: "<strong>Probably not.</strong> Path A (email forwarding) means your existing form stays untouched. Path B (embed) only comes into play if your existing form is broken, missing fields, or you want a faster-converting design.",
    },
    {
      q: "Will this slow down my GoDaddy site?",
      a: "No. Everything happens server-side after submission. Your site loads exactly the same.",
    },
    {
      q: "What if I'm on a different GoDaddy product (Managed WordPress, etc.)?",
      a: "If your site is GoDaddy-hosted WordPress, follow our <strong>WordPress setup guide</strong> instead — that's a much smoother path. Mention it when you reply and we'll send the right one.",
    },
    {
      q: "Can I cancel later?",
      a: "Yes. Just email us and we disconnect everything on our end within 24 hours. <strong>No long-term contract — cancel anytime.</strong>",
    },
  ],
  stuckTitle: "GoDaddy can be quirky — we'll handle it.",
  stuckBody:
    "GoDaddy has more variation than other platforms (Website Builder, Managed WordPress, the older legacy editor, etc.), so if anything feels confusing, just hit reply. We can hop on a five-minute call and figure out the cleanest path with you in real time.",
};

// ───────────────────────────────────────── SHOPIFY
export const shopify: SetupGuideData = {
  platformSlug: "shopify",
  platformLabel: "Shopify · Setup Guide",
  timeRequired: "~10 minutes",
  password: "None — OAuth",
  heroTitle:
    "Let's connect your Shopify site to <em>instant lead alerts.</em>",
  heroLede:
    "Shopify has solid integration support through both its native contact form and the Zapier app marketplace. About ten minutes of clicking on your end and we'll take it from there.",
  checklist: [
    "Your Shopify admin login (we never see your password)",
    "An active Shopify plan (Basic or higher)",
    "The phone number where you want SMS alerts to land",
    "About ten uninterrupted minutes",
  ],
  stepsTitle: "Six steps to live.",
  steps: [
    {
      title: "Log into your Shopify admin",
      paragraphs: [
        "Head to your admin URL — usually <code>yourstore.myshopify.com/admin</code> — and log in.",
      ],
    },
    {
      title: "Identify your contact form",
      paragraphs: [
        "Most Shopify sites use one of two form setups:",
        "<strong>Native Shopify contact form</strong> — built into your theme, usually on a /pages/contact page. Submissions go to your store email.",
        "<strong>Form app</strong> — apps like Form Builder, Hulk Forms, or POWR Form. These have their own admin areas.",
      ],
      note:
        "<strong>Not sure which you have?</strong> Send us your site URL and we'll identify it for you. Skip to Step 5 if so.",
    },
    {
      title: "Open the Shopify App Store",
      paragraphs: [
        'In your admin sidebar, click <span class="path">Apps</span>. Then click the search bar at the top and search for <strong>Zapier</strong>.',
        "Click <strong>Zapier for Shopify</strong> and select <strong>Add app</strong>. Confirm installation when prompted.",
      ],
    },
    {
      title: "Connect your Zapier account",
      paragraphs: [
        "After installation, Shopify will redirect you to Zapier to complete the connection.",
        "<strong>No Zapier account?</strong> Click Sign Up. The free plan works — we cover the paid features on our end.",
        "<strong>Already have one?</strong> Log in. When prompted, click <strong>Allow</strong> to authorize the connection between Shopify and Zapier.",
      ],
    },
    {
      title: "Send us your details",
      paragraphs: [
        "Reply to our setup email with the four things listed in the next section. That's everything we need to wire up the alerts.",
      ],
    },
    {
      title: "We take it from here",
      paragraphs: [
        "Within 48 hours we'll build the connection, configure your auto-reply, run a test submission ourselves, and email you a confirmation that everything is live.",
      ],
    },
  ],
  replyTitle: "What to send back to us.",
  replySubtitle: "Hit reply on our setup email and include",
  replyItems: [
    {
      num: "01",
      title: "Your Shopify store URL",
      hint: "e.g. yourstore.myshopify.com or your custom domain.",
    },
    {
      num: "02",
      title: "The email you used to log into Zapier",
      hint: "So we can find the right account and build your Zap.",
    },
    {
      num: "03",
      title: "The phone number for SMS alerts",
      hint: "This is where every new lead text will land.",
    },
    {
      num: "04",
      title:
        'Custom auto-reply message <span class="opacity-60">(optional)</span>',
      hint:
        "The text your customer gets the second they submit. If skipped, we use our default.",
    },
  ],
  example: [
    { field: "Store URL:", value: "mikesroofing.com" },
    { field: "Zapier email:", value: "mike@mikesroofing.com" },
    { field: "SMS phone:", value: "(612) 555-0182" },
    {
      field: "Auto-reply:",
      value: '"Thanks! We\'ll call you back within the hour."',
    },
  ],
  timeline: [
    {
      when: "Today",
      what:
        "You install the Zapier app from the Shopify App Store and reply with your details.",
    },
    TIMELINE_STANDARD[1],
    TIMELINE_STANDARD[2],
    TIMELINE_STANDARD[3],
  ],
  faq: [
    {
      q: "Will this slow down my Shopify store?",
      a: "No. Everything happens server-side after a form is submitted — your store speed, theme, and checkout experience are unchanged.",
    },
    {
      q: "I use a third-party form app instead of Shopify's native contact form. Will this still work?",
      a: "Yes. Most popular form apps (Form Builder, Hulk Forms, POWR, etc.) have their own Zapier integrations. Mention which app you're using when you reply and we'll wire it up directly through that app instead of the native form.",
    },
    {
      q: "Can I connect order notifications too, not just contact forms?",
      a: "Yes — Shopify is unique in that we can also trigger SMS alerts for new orders, abandoned carts, or quote requests. Mention which events you want connected when you reply.",
    },
    {
      q: "Does this require a paid Shopify plan?",
      a: "Yes — you need at least the Basic plan to use the Zapier integration. If you're on a development store or trial, mention it when you reply and we'll suggest the cleanest path forward.",
    },
    {
      q: "Can I cancel later?",
      a: "Yes. Go to Apps in your Shopify admin and uninstall Zapier. The connection breaks and your store returns to its previous setup. <strong>No long-term contract — cancel anytime.</strong>",
    },
  ],
  stuckBody:
    "Shopify has a lot of variation depending on theme and apps, so if anything feels confusing, just hit reply. We can hop on a five-minute call or send a screen recording walking through your specific setup.",
};

// ────────────────────────────────────────── CUSTOM
export const custom: SetupGuideData = {
  platformSlug: "custom",
  platformLabel: "Custom Site · Setup Guide",
  timeRequired: "~10 minutes",
  passwordLabel: "Developer needed",
  password: "Sometimes",
  heroTitle:
    "Let's connect your custom-built site to <em>instant lead alerts.</em>",
  heroLede:
    "If your website was built by a developer or uses custom code, you've actually got the most flexibility of any setup we work with. We have a few clean paths depending on how your site is structured. We'll pick the right one with you.",
  pathSectionTitle: "We'll pick the right one with you.",
  pathSectionIntro:
    'Custom sites range from "I have a developer on speed dial" to "I built it myself with HTML and CSS three years ago." Here\'s how we handle each:',
  pathOptions: [
    {
      label: "Path A · Webhook drop-in",
      title: "One-line code addition",
      body:
        "If you (or your developer) can access the form's submit handler, we provide a single endpoint URL to add. Takes about 60 seconds of code change.",
    },
    {
      label: "Path B · Replacement form",
      title: "Drop-in form embed",
      body:
        "We provide a small embed snippet that replaces your existing form. Same look, instant connection to alerts, no backend changes needed on your end.",
    },
    {
      label: "Path C · Landing page",
      title: "We build a fresh page",
      body:
        "If your site is hard to modify or you'd rather not touch it, we build a dedicated landing page (hosted by us) that handles everything. Great for running paid ads to.",
    },
    {
      label: "Path D · Direct integration",
      title: "Work with your developer",
      body:
        "If you have a developer, we can talk to them directly. We provide the spec, they wire it up, we test it together. Cleanest long-term solution.",
    },
  ],
  pathNote:
    "<strong>Not sure which fits?</strong> Reply with your site URL and a quick description of how it was built. We'll recommend the best path within a few hours.",
  checklist: [
    "Your website URL",
    "The phone number where you want SMS alerts to land",
    "An idea of who built/maintains your site (you, a developer, an agency)",
    "Access to your site's source files <strong>or</strong> developer contact info — whichever applies",
  ],
  codeIntro:
    "For Path A (the one-line code addition), we send you or your developer a webhook URL that the form should POST submissions to. Here's a simplified example of what that looks like in practice:",
  codeBlock: {
    lines: [
      '<span class="comment">// Add this to your form\'s submit handler:</span>',
      '<span class="tag">fetch</span>(<span class="string">\'https://hooks.dockintake.com/your-unique-id\'</span>, {',
      '  <span class="attr">method</span>: <span class="string">\'POST\'</span>,',
      '  <span class="attr">headers</span>: { <span class="string">\'Content-Type\'</span>: <span class="string">\'application/json\'</span> },',
      '  <span class="attr">body</span>: <span class="tag">JSON.stringify</span>({',
      '    <span class="attr">name</span>: formData.name,',
      '    <span class="attr">phone</span>: formData.phone,',
      '    <span class="attr">email</span>: formData.email,',
      '    <span class="attr">message</span>: formData.message',
      "  })",
      "});",
    ],
  },
  codeNote:
    "<strong>You don't need to write this yourself.</strong> If you have a developer, we send them this directly. If you don't, we recommend Path B (embed) or Path C (landing page) — both are zero-code on your end.",
  stepsTitle: "Four steps to live.",
  steps: [
    {
      title: "Send us your site details",
      paragraphs: [
        "Reply to our setup email with the four things in the next section. Include a quick description of who maintains your site so we know which path to recommend.",
      ],
    },
    {
      title: "We pick the right path with you",
      paragraphs: [
        "Within a few hours of your reply, we'll come back with:",
        "— The recommended path (A, B, C, or D)<br>— The specific code, embed snippet, or developer spec you'll need<br>— Estimated time to live",
      ],
    },
    {
      title: "You (or your developer) apply the change",
      paragraphs: [
        "Depending on the path:",
        "<strong>Path A or D:</strong> Your developer adds the webhook (60 seconds of work).",
        "<strong>Path B:</strong> You drop our embed snippet into the page where your form lives.",
        "<strong>Path C:</strong> You don't have to do anything — we build the landing page and send you the URL.",
      ],
    },
    {
      title: "We test and confirm live",
      paragraphs: [
        "Within 48 hours we'll run a test submission ourselves and email you a confirmation that everything is working. You'll then run your own test to see your phone buzz in real time.",
      ],
    },
  ],
  replyTitle: "What to send back to us.",
  replySubtitle: "Hit reply on our setup email and include",
  replyItems: [
    {
      num: "01",
      title: "Your website URL",
      hint: "So we can see the form and assess the best integration path.",
    },
    {
      num: "02",
      title: "Who built/maintains your site",
      hint:
        '"I built it myself", "I have a developer named Alex", "An agency built it but I have access", etc.',
    },
    {
      num: "03",
      title: "The phone number for SMS alerts",
      hint: "This is where every new lead text will land.",
    },
    {
      num: "04",
      title:
        'Custom auto-reply message <span class="opacity-60">(optional)</span>',
      hint:
        "The text your customer gets the second they submit. If skipped, we use our default.",
    },
  ],
  example: [
    { field: "Site URL:", value: "mikesroofing.com" },
    { field: "Built by:", value: "Developer named Alex (his email below)" },
    { field: "SMS phone:", value: "(612) 555-0182" },
    {
      field: "Auto-reply:",
      value: '"Thanks! We\'ll call you back within the hour."',
    },
    { field: "Dev contact:", value: "alex@somewebagency.com" },
  ],
  timeline: [
    {
      when: "Today",
      what:
        "You reply with your site details and a quick description of how it's maintained.",
    },
    {
      when: "Within a few hours",
      what:
        "We come back with the recommended path, the exact code/embed/spec, and any next steps for you or your developer.",
    },
    {
      when: "Within 24-48 hours",
      what:
        "The change goes live on your site (or our landing page is published). We run a test submission ourselves to confirm.",
    },
    TIMELINE_STANDARD[2],
    TIMELINE_STANDARD[3],
  ],
  faq: [
    {
      q: "I don't have a developer. Can I still do this?",
      a: "Yes. Path B (embed) or Path C (we build you a landing page) both require zero technical work on your end. Mention this when you reply and we'll go straight to one of those.",
    },
    {
      q: "Will this slow down my custom site?",
      a: "No. The webhook fires asynchronously after form submission — your site's performance is unchanged.",
    },
    {
      q: "My site is hosted somewhere weird (CodePen, GitHub Pages, a server I built myself). Does that matter?",
      a: "Not really. As long as your form submits somewhere we can intercept (or we can replace it with our embed), we can wire up alerts regardless of where the site is hosted.",
    },
    {
      q: "My developer left and I can't reach them. Now what?",
      a: "This is more common than you'd think. Path C (we build you a landing page) is usually the cleanest move in that scenario — fresh page, full control, no dependence on the old developer.",
    },
    {
      q: "Can I cancel later?",
      a: "Yes. Depending on the path, cancellation is either removing the webhook line of code, removing the embed snippet, or simply letting the hosted landing page expire. <strong>No long-term contract — cancel anytime.</strong>",
    },
  ],
  stuckTitle: "Custom sites are our favorite to work with.",
  stuckBody:
    "Custom builds give us the most flexibility, but they also have the most variation, so if anything feels unclear, just hit reply. We can hop on a five-minute call, talk directly to your developer, or send a screen recording walking through what we're seeing on your specific site.",
};

export const ALL_GUIDES: Record<string, SetupGuideData> = {
  wix,
  wordpress,
  squarespace,
  webflow,
  godaddy,
  shopify,
  custom,
};
