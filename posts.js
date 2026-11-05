// EDIT THIS FILE WHENEVER YOU WANT TO ADD A POST.
// Put a comma between entries. Newest posts are displayed first automatically.
// Dates can be YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS (24-hour time).
// For an image, put the file inside the images folder and set image: "images/photo.jpg".
// For no image, set image: null.
// For a multi-tweet story, use thread: ["First tweet", "Second tweet"].

const profile = {
  name: "Kalira Seibert",
  handle: "@kalira_seibert",
  bio: `Your favorite living mannequin.

Now freeze, and join my gallery 💜`
};

const posts = [
  {
    id: 3,
    date: "2026-10-03T06:52:00",
    text: `I'm not usually into memory loss/identity death I TFs, but there is something enticing about that final shudder before you completely, mentally shift into a character TF.`,
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
