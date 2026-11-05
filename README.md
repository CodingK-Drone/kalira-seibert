# Writing Archive - beginner instructions

## See your site
Open `index.html` in a web browser. No installation needed.

## Change the writer's name
Open `posts.js` and edit the three lines inside `const profile`.

## Add a new post
Open `posts.js`. Add a new entry inside `const posts = [ ... ];` like this:

```js
  {
    id: 4,
    date: "2026-11-05T18:30:00",
    text: `Paste the writing here.`,
    image: null
  },
```

Keep a comma between each entry. Give each post a different ID. Posts sort newest first by date regardless of where you put them in the file. You can delete an entry to remove it from the site.

## Add an image
Put the image in `images/` (e.g. `images/sunset.jpg`), then set `image: "images/sunset.jpg"` on the post. For two images, you can instead use `images: ["images/one.jpg", "images/two.jpg"]`.

## Add a story spanning several tweets
Use `thread: ["First tweet", "Second tweet", "Third tweet"]` instead of `text:`.

## Publish on GitHub Pages
1. Create a PUBLIC repository at https://github.com/new (e.g. `twitter-archive`).
2. Upload `index.html`, `style.css`, `posts.js`, `script.js`, and the `images` folder if you use images. Keep them at the repository root.
3. Open repository Settings > Pages > Build and deployment.
4. Select Deploy from a branch > main > / (root), then Save.
5. Your site will be at `https://YOURUSERNAME.github.io/twitter-archive/` after deployment.
6. To add posts later, edit `posts.js` on GitHub using the pencil icon, then commit changes. The live site updates automatically after deployment.

**Important:** A public GitHub repository exposes the writing and image files to everyone. Get the writer's permission before publishing. Do not upload private messages or sensitive personal information.
