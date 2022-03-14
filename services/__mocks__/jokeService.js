const jokeService = () => {
  console.log("Mocked Joke");
  return Promise.resolve([
    {
      error: false,
      category: "Programming",
      type: "twopart",
      setup: "What is the most used language in programming?",
      delivery: "Profanity.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 193,
      safe: true,
      lang: "en",
    },
  ]);
};

const jokeServiceById = (id) => {
  console.log("Mocked Joke By ID");
  return Promise.resolve([
    {
      error: false,
      category: "Programming",
      type: "single",
      joke: "// This line doesn't actually do anything, but the code stops working when I delete it.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 12,
      safe: true,
      lang: "en",
    },
  ]);
};

module.exports = { jokeService, jokeServiceById };
