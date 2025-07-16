import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'Home',                   
      label: '🏡 | Home',            
    },
    {
      type: 'category',
      label: '☎️ | Contact Us',
      link: {
        type: 'doc',
        id: 'Contact-Us/contact-us', 
      },
      items: [
        'Contact-Us/Socials',
        'Contact-Us/Assistance',
      ],
    },
    {
      type: 'doc',
      id: 'TGE',                   
      label: '🪙 | TGE',          
    },
    {
      type: 'category', 
      label: '🚀 | Ecosystem Overview', 
      link: {
        type: 'doc',
        id: 'Ecosystem-Overview/Ecosystem-Overview',
      },
      items: [
        'Ecosystem-Overview/Foundation',
        'Ecosystem-Overview/Core-ST',
        'Ecosystem-Overview/ExecInt',
      ],
    },
  ],
};

export default sidebars;
