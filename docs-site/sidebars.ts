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
        'Contact-Us/Assistance',
        'Contact-Us/Partnerships',
      ],
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
        {
      type: 'category', 
      label: '🪙 | Tokenomics Overview', 
      link: {
        type: 'doc',
        id: 'Token-Economics/Tokenomics-Overview',
      },
      items: [
        'Token-Economics/Ecosystem-Earnings',
        'Token-Economics/Supply-Burning',
      ],
    },
  ],
};

export default sidebars;
