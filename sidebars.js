const scripts = require('./scripts');

const withPrefix = (id, item) => {
  if (typeof item === 'string') return `${id}/${item}`;
  if (item.items) return { type: 'category', collapsed: false, label: item.label, items: item.items.map((i) => withPrefix(id, i)) };
  return { ...item, id: `${id}/${item.id}` };
};

module.exports = Object.fromEntries(scripts.map((s) => [s.id, s.sidebar.map((item) => withPrefix(s.id, item))]));
