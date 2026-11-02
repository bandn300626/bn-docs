// One entry per script: its docs live in docs/<id>/
module.exports = [
  {
    id: 'bn_fuel',
    name: 'B&N Fuel',
    description: 'Fuel system for Qbox: daily prices, fuelling by the litre, cash, bank and company payments, petrol can and admin panel.',
    sidebar: [
      { type: 'doc', id: 'README', label: 'Overview' },
      'installation',
      { label: 'Using it', items: ['fuelling', 'admin-panel'] },
      { label: 'Configuration', items: ['settings', 'languages', 'discord-logs', 'banks'] },
      { label: 'Reference', items: ['other-scripts', 'troubleshooting'] },
    ],
  },
];
