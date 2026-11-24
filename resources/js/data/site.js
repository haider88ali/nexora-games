// Single place to edit company details and games.
// TODO: replace placeholders (email, store URLs, game names) with real ones.
export const site = {
    name: 'Nexora Games',
    email: 'support@nexoragames.com',
    updated: 'November 24, 2026',
    appStoreUrl: '#',
    playStoreUrl: '#',
};

export const genres = [
    { key: 'simulation', title: 'Simulation', text: 'Build, manage and optimize tiny worlds. Deep enough to hook you, simple enough to play one-handed.' },
    { key: 'hyper', title: 'Hyper-Casual', text: 'One-tap mechanics, instant fun. Learn in two seconds, chase the high score for two hours.' },
    { key: 'multi', title: 'Multiplayer', text: 'Duel friends, join co-op squads and climb live leaderboards, with quick matches made for mobile.' },
    { key: '2d', title: '2D Games', text: 'Hand-crafted 2D art, juicy animation and tight controls tuned for phones.' },
];

export const games = [
    { name: 'Tiny Tycoon', genre: 'Simulation', blurb: 'Grow a pocket-size city from a single stall.', from: '#7c5cff', to: '#22d3ee', icon: 'city' },
    { name: 'Stack Rush', genre: 'Hyper-Casual', blurb: 'Tap to stack. Miss once and it all tumbles.', from: '#ff5c8a', to: '#ffb86b', icon: 'stack' },
    { name: 'Pixel Hopper', genre: '2D', blurb: 'Leap across floating islands in this charming platformer.', from: '#22d3ee', to: '#34d399', icon: 'hop' },
    { name: 'Idle Farmhands', genre: 'Simulation', blurb: 'Plant, harvest and automate your dream farm.', from: '#34d399', to: '#facc15', icon: 'farm' },
    { name: 'Color Dash', genre: 'Hyper-Casual', blurb: 'Match the gate color and race for the finish.', from: '#a78bfa', to: '#ff5c8a', icon: 'dash' },
    { name: 'Arena Clash', genre: 'Multiplayer', blurb: 'Real-time 1v1 duels. Outplay friends and rivals worldwide.', from: '#f43f5e', to: '#7c5cff', icon: 'versus' },
    { name: 'Squad Kitchen', genre: 'Multiplayer', blurb: 'Co-op chaos: cook, chop and serve together before time runs out.', from: '#f59e0b', to: '#ef4444', icon: 'team' },
    { name: 'Bubble Blaster', genre: '2D', blurb: 'Aim, pop and chain combos across 200+ levels.', from: '#38bdf8', to: '#7c5cff', icon: 'bubble' },
];

// Placeholder media from royalty-free sources: Picsum (Unsplash photos) and
// open-licensed sample clips (Blender CC-BY, MDN CC0). Swap for your own files.
export const pic = (seed, w, h) => `https://picsum.photos/seed/${encodeURIComponent('nexora-' + seed)}/${w}/${h}`;
export const videos = [
    'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_5MB.mp4',
    'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_5MB.mp4',
    'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    'https://download.samplelib.com/mp4/sample-10s.mp4',
];
export const trailer = { src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4', poster: pic('trailer', 1600, 900), title: 'Official Trailer — Tiny Tycoon 2.0' };

// Optional: set `image` on a game to your own screenshot/key-art (e.g. '/images/tiny-tycoon.jpg',
// placed in /public/images). Without it, an animated illustration is generated.
games.forEach((g, i) => {
    g.image = pic(g.name, 1600, 900);
    g.poster = null; // themed illustration is used; set your own screenshot path here
    g.video = videos[i] || null;
    g.tagline = ['Build it. Run it. Own it.', 'Tap. Stack. Don\'t blink.', 'Jump higher than the clouds.', 'Grow while you sleep.', 'Gates, speed and style.', 'Duel anyone, anywhere.', 'Cook together. Panic together.', 'Pop everything.'][i];
    g.tag = ['New', 'Trending', 'Out now', 'Update 2.0', 'Out now', 'Multiplayer', 'Co-op', 'Coming soon'][i];
});

export const news = [
    { title: 'Tiny Tycoon 2.0: new districts, night mode and daily contracts', date: 'Nov 20, 2026', tag: 'Update', from: '#7c5cff', to: '#22d3ee' },
    { title: 'Behind the scenes: how we tune the feel of a single tap', date: 'Nov 12, 2026', tag: 'Dev diary', from: '#ff5c8a', to: '#ffb86b' },
    { title: 'Pixel Hopper hits 1 million jumps in its first week', date: 'Nov 03, 2026', tag: 'Milestone', from: '#22d3ee', to: '#34d399' },
    { title: 'Join our playtest: Bubble Blaster levels 100–200', date: 'Oct 28, 2026', tag: 'Community', from: '#38bdf8', to: '#7c5cff' },
];

news.forEach((n, i) => { n.art = ['1f3d9', '1f3a8', '1f3c6', '1f388'][i]; });

// Cartoon art: Twemoji (c) Twitter/X, licensed CC-BY 4.0 — attribution is in the footer.
export const emoji = (code) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${code}.svg`;

export const friends = [
    { name: 'Nexo', img: emoji('1f431'), bg: '#ffd23f', blurb: 'The curious leader. Loves building cities and big ideas.' },
    { name: 'Pip', img: emoji('1f430'), bg: '#ff6fa5', blurb: 'Fast hops, faster taps. Hyper-casual champion.' },
    { name: 'Bumble', img: emoji('1f43b'), bg: '#a78bfa', blurb: 'Gentle giant who farms, cooks and shares snacks.' },
    { name: 'Zap', img: emoji('1f438'), bg: '#3ddc97', blurb: 'Bouncy, electric and always up for a duel.' },
    { name: 'Bolt', img: emoji('1f916'), bg: '#4cc3ff', blurb: 'Tinkerer bot who never skips a level.' },
];

// Emoji art per game (used on the game cards and icons)
const art = { city: '1f3d9', stack: '1f9f1', hop: '1f43c', farm: '1f69c', dash: '1f680', versus: '2694', team: '1f373', bubble: '1fae7' };
games.forEach(g => { g.art = emoji(art[g.icon]); });
