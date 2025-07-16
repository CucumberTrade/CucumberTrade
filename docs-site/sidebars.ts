import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'Home',                    // doc id
      label: '🏡 | Home',            // sidebar label
    },
    {
      type: 'category',
      label: '☎️ | Contact Us',
      link: {
        type: 'doc',
        id: 'Contact-Us/contact-us',  // category index doc
      },
      items: [
        'Contact-Us/Socials',
        'Contact-Us/Assistance',
      ],
    },
    {
      type: 'doc',
      id: 'TGE',                    // doc id
      label: '🪙 | TGE',            // sidebar label
    },
    {
      type: 'doc',
      id: 'Getting-Started/Getting-Started',         // doc id
      label: '🚀 | Getting Started', // sidebar label
    },
  ],
};

export default sidebars;
