const shapes={
 combat:'<path d="m4 3 7 7-2 2-7-7V3h2ZM20 3l-7 7 2 2 7-7V3h-2ZM4 20l5-5m6 0 5 5M2 17l5 5m10 0 5-5"/>',
 abilities:'<path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z"/>',
 attributes:'<path d="M6 3h12v18H6zM9 7h6M9 11h6M9 15h3"/>',
 status:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/><path d="m5 12 4 0 2-4 2 8 2-4h4"/>',
 inventory:'<path d="M4 7h16v14H4zM9 7V3h6v4M4 11h16M10 10v4h4v-4"/>',
 journal:'<path d="M12 5v16M3 3c4 0 6 0 9 2 3-2 5-2 9-2v16c-4 0-6 0-9 2-3-2-5-2-9-2V3Z"/>',
 settings:'<path d="m10 2 4 0 1 3 3 1 3 0 1 4-2 2 0 3 1 3-3 3-3-1-3 0-2 2-4-1 0-3-1-3-3-1 0-4 3-1 1-3 3-1Z"/><circle cx="12" cy="12" r="3"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
 play:'<path d="m8 4 12 8-12 8V4Z"/>',
 finish:'<path d="m4 12 5 5L20 6"/>',
 flash:'<circle cx="12" cy="12" r="4"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/>',
 lotus:'<path d="M12 22C3 20 1 12 3 8c4 0 7 3 9 8 2-5 5-8 9-8 2 4 0 12-9 14ZM12 16C7 10 8 5 12 1c4 4 5 9 0 15Z"/>',
};
export function icon(name,cls=''){return `<svg class="ui-icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[name]||shapes.abilities}</svg>`;}
