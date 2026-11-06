// You normally do not need to edit this file.
const feed = document.getElementById('feed');
const search = document.getElementById('search');
const empty = document.getElementById('empty');
document.getElementById('top-name').textContent = profile.name;
document.getElementById('profile-name').textContent = profile.name;
document.getElementById('profile-handle').textContent = profile.handle;
document.getElementById('profile-bio').textContent = profile.bio;
document.getElementById('post-count').textContent = `${posts.length} posts`;
document.getElementById('archive-count').textContent =
  `${posts.length} ${posts.length === 1 ? 'post' : 'posts'}`;

function make(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}
function displayDate(value) {
  const date = new Date(value.length === 10 ? value + 'T12:00:00' : value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
}
function addImages(parent, post) {
  const images = Array.isArray(post.images) ? post.images : (post.image ? [post.image] : []);
  if (!images.length) return;
  const wrapper = make('div', 'tweet-images' + (images.length === 2 ? ' two' : ''));
  images.forEach(src => {
    const img = make('img', 'tweet-image');
    img.src = src;
    img.alt = 'Image attached to archived post';
    img.loading = 'lazy';
    wrapper.append(img);
  });
  parent.append(wrapper);
}
function render(query = '') {
  feed.replaceChildren();
  const q = query.trim().toLowerCase();
  const sorted = [...posts].sort((a, b) => {
  if (a.pinned && !b.pinned) return -1;
  if (!a.pinned && b.pinned) return 1;

  return new Date(b.date) - new Date(a.date);
});
  const filtered = sorted.filter(post => [post.text || '', ...(post.thread || [])].join(' ').toLowerCase().includes(q));
  empty.hidden = filtered.length !== 0;
  filtered.forEach(post => {
    const article = make('article','tweet');
    if (post.pinned) {
  article.append(make('div', 'pinned-label', '📌 Pinned'));
}
    const avatar = make('img', 'avatar');
avatar.src = 'images/profile.webp';
avatar.alt = 'Kalira Seibert';
article.append(avatar);
    const content = make('div','tweet-content');
    const header = make('div','tweet-header');
    header.append(make('strong','',profile.name),make('span','meta',`${profile.handle} · ${displayDate(post.date)}`));
    content.append(header);
    const parts = Array.isArray(post.thread) ? post.thread : [post.text || ''];
    parts.forEach((part, i) => {
      const section = make('div',i ? 'thread-part' : '');
      if (parts.length > 1) section.append(make('div','thread-label',`Part ${i+1} of ${parts.length}`));
      section.append(make('p','tweet-text',part));
      content.append(section);
    });
    addImages(content, post);
    if (post.url) {
      const link = make('a','source-link','View original post');
      link.href = post.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      content.append(link);
    }
    content.append(make('div','tweet-footer','♡    ↻    ◇'));
    article.append(content);
    feed.append(article);
  });
}
search.addEventListener('input', () => render(search.value));
render();
