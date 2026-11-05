// EDIT THIS FILE WHENEVER YOU WANT TO ADD A POST.
// Put a comma between entries. Newest posts are displayed first automatically.
// Dates can be YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS (24-hour time).
// For an image, put the file inside the images folder and set image: "images/photo.jpg".
// For no image, set image: null.
// For a multi-tweet story, use thread: ["First tweet", "Second tweet"].

const profile = {
  name: "the writer",
  handle: "@writer",
  bio: "a collection of words worth keeping."
};

const posts = [
  {
    id: 3,
    date: "2026-11-04T14:35:00",
    text: `This is an example of a recent post. Replace this with your friend's writing!`,
    image: null
  },
  {
    id: 2,
    date: "2026-10-28T10:00:00",
    thread: [
      `This is the first tweet of a longer story.`,
      `This is the second tweet. You can add as many parts as you need.`,
      `And this is how the story ends.`
    ],
    image: null
  },
  {
    id: 1,
    date: "2024-03-15",
    text: `An older post. Even if you add it last, it appears in the right place by date.`,
    image: null
  }
];
