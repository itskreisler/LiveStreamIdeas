"use strict";
// Inspired By
// https://codepen.io/abeatrize/pen/LJqYey
gsap.config({ trialWarn: false });
var _a, _b;
// Bongo Cat originally created by @StrayRogue and @DitzyFlama
const ID = "bongo-cat";
const s = (selector) => `#${ID} ${selector}`;
const notes = document.querySelectorAll(".note");
for (let note of notes) {
  (_a = note === null || note === void 0 ? void 0 : note.parentElement) ===
    null || _a === void 0
    ? void 0
    : _a.appendChild(note.cloneNode(true));
  (_b = note === null || note === void 0 ? void 0 : note.parentElement) ===
    null || _b === void 0
    ? void 0
    : _b.appendChild(note.cloneNode(true));
}
const music = { note: s(".music .note") };
const cat = {
  pawRight: {
    up: s(".paw-right .up"),
    down: s(".paw-right .down"),
  },
  pawLeft: {
    up: s(".paw-left .up"),
    down: s(".paw-left .down"),
  },
};
const style = getComputedStyle(document.documentElement);
const green = style.getPropertyValue("--green");
const pink = style.getPropertyValue("--pink");
const blue = style.getPropertyValue("--blue");
const orange = style.getPropertyValue("--orange");
const cyan = style.getPropertyValue("--cyan");
gsap.set(music.note, { scale: 0, autoAlpha: 1 });
const animatePawState = (selector) =>
  gsap.fromTo(
    selector,
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      duration: 0.01,
      repeatDelay: 0.19,
      yoyo: true,
      repeat: -1,
    }
  );
const tl = gsap.timeline();
tl.add(animatePawState(cat.pawLeft.up), "start")
  .add(animatePawState(cat.pawRight.down), "start")
  .add(animatePawState(cat.pawLeft.down), "start+=0.19")
  .add(animatePawState(cat.pawRight.up), "start+=0.19")
  .timeScale(1.6);
gsap.from(".terminal-code line", {
  drawSVG: "0%",
  duration: 0.1,
  stagger: 0.1,
  ease: "none",
  repeat: -1,
});
// typing for pipe function doesn't seem to be working for usage when partially applied?
const noteElFn = gsap.utils.pipe(gsap.utils.toArray, gsap.utils.shuffle);
const noteEls = noteElFn(music.note);
const numNotes = noteEls.length / 3;
const notesG1 = noteEls.splice(0, numNotes);
const notesG2 = noteEls.splice(0, numNotes);
const notesG3 = noteEls;
const colorizer = gsap.utils.random(
  [green, pink, blue, orange, cyan, "#a3a4ec", "#67b5c0", "#fd7c6e"],
  true
);
const rotator = gsap.utils.random(-50, 50, 1, true);
const dir = (amt) => `${gsap.utils.random(["-", "+"])}=${amt}`;
const animateNotes = (els) => {
  els.forEach((el) => {
    gsap.set(el, {
      stroke: colorizer(),
      rotation: rotator(),
      x: gsap.utils.random(-25, 25, 1),
    });
  });
  return gsap.fromTo(
    els,
    {
      autoAlpha: 1,
      y: 0,
      scale: 0,
    },
    {
      duration: 2,
      autoAlpha: 0,
      scale: 1,
      ease: "none",
      stagger: {
        from: "random",
        each: 0.5,
      },
      rotation: dir(gsap.utils.random(20, 30, 1)),
      x: dir(gsap.utils.random(40, 60, 1)),
      y: gsap.utils.random(-200, -220, 1),
      onComplete: () => animateNotes(els),
    }
  );
};
tl.add(animateNotes(notesG1))
  .add(animateNotes(notesG2), ">0.05")
  .add(animateNotes(notesG3), ">0.25");
///
const ideas = [
  "¡Ask Me Anything!",
  "Talk about your Top 10 books",
  "Play Choice Chamber - let your viewers choose your destiny",
  "Show pictures from your travels and talk about it",
  "Talk about your favourite foods or show them",
  "Play a game that you always thought you would hate",
  'Play "Two truths and a lie", let the audience vote',
  "Play a game with a fan and coach them through it",
  "Review viewer's VOD from a game and coach or comment it",
  'Play <a href="http://www.boiteajeux.net/" target="_blank" rel="noopener noreferrer">Dixit</a> online with viewers',
  "Play speed chess against a viewer",
  "Review your favourite snacks",
  "Make a tier list of your favourite games, discuss",
  "Make a tier list of your favourite fruits, discuss",
  "Play a game from your childhood",
  'Play <a href="https://skribbl.io/" target="_blank" rel="noopener noreferrer">charades</a> with the viewers',
  "Play a game - let the viewers decide what you will do by voting",
  "Co-stream with your friend",
  "Interview other streamers",
  "Get one viewer on voice chat and interview them",
  "Play this or that with chat",
  'Play "<a href="http://willyoupressthebutton.com/" target="_blank" rel="noopener noreferrer">Will you press the button</a>" - discuss with chat',
  "Show of your favourite Pokemons",
  "Make a tier list of your favourite TV shows",
  "Play a quick 1v1 against a viewer",
  "Recite a poem",
  '<a href="https://www.youtube.com/watch?v=s9oZ7Ji-tUw&ab_channel=CrittaThaADDict" target="_blank" rel="noopener noreferrer">Rap a kids book</a>',
  "Invite two viewers on voice chat, recite a play by roles",
  "Read a weird Wattpad story",
  "Play a game with viewers. Make fun rules. For example: you play only with a certain weapon or choosing champions from one fraction.",
  'Play an old browser platformer like "<a href="http://www.flipline.com/games/papalouie/index.html" target="_blank" rel="noopener noreferrer">Papa Louie</a>"',
  "Ask the chat their opinion on a topic",
  "Go to Kickstarter, look at different products and review them",
  "Make a fashion show with your weirdest clothes",
  "Photoshop/edit a photo sent by a viewer",
  "Play a browser dress up game",
  "Review memes",
  "Read a fun subreddit",
  "Give your opinion about recent Internet drama",
  "Make a weird hairstyle",
  'Play a new indie game, <a href="https://store.steampowered.com/tags/en/Indie/#p=0&tab=NewReleases" target="_blank" rel="noopener noreferrer">check the list</a>',
  'Play a puzzle game like "Baba is You" or "Poly Bridge"',
  'Make your own <a href="https://live3d.io/vtuber_maker" target="_blank" rel="noopener noreferrer">vtuber avatar</a>',
  "Cook something",
  "Show your pet, tell a story about them. For example: how did you get it?",
  "Read patch notes for a game you play and review them",
  "Tell a story from your childhood",
  "Tell a story about your favourite teacher",
  "Tell a story about a first date",
  "Go on Google Streetview and walk around your home city, tell stories about places from your past",
  "Go on Google Streetview and wander around a place you would like to visit one day",
  "Go on Google Streetview and show a place you travelled to, talk about it",
  "Make a food degustation and stream. It does not have to be fancy - can even be fruits or snacks",
  "Have your viewers choose what will you play next",
  "Make a tier list of the best free games to play",
  "Visit your old Neopets account",
  'Play "<a href="http://either.io/" target="_blank" rel="noopener noreferrer">Would you rather...</a>" with chat',
  "Tell a story about your best friend",
  "Invite a friend that doesn't play games, teach them to play on stream",
  "Invite some friends and play DnD on stream",
  "Play DnD with your streamer friends",
  "Ask your viewers about their day",
  "Tell a story about your home Christmas/Holiday tradition",
  "Talk about a show you watched recently",
  "Make a tier list of your favourite pets",
  "Tell a story about your biggest accomplishment",
  "Tell a story about how you started streaming",
  "Tell a story about a childhood friend",
  "Talk about something that made you happy recently",
  "Talk about something that made you angry recently",
  "Talk about a small thing that made you smile recently",
  "Talk about something that made you sad recently",
  "When you were a kid, what did you want to be when you grew up?",
  "Talk about your first crush",
  "Talk about your celebrity crushes throughout your life",
  "Give tips about love to your viewers",
  "Talk about something you read recently that really interested you",
  "Show your favourite things",
  "Share a bit of knowledge about something you are passionate about",
  "Show a video that lives rent-free in your head",
  "Make a bucket list of things you would like to do in life, discuss with chat, have them suggest something",
  "Follow a Bob Ross tutorial IRL or in Photoshop/Paint.",
  "If you could go back to anytime in history, where would you go? Discuss with chat",
  "Show photos of your past Halloween costumes, discuss and tell stories about them",
  "Make a Q&A session",
  "Share your expertise on a topic",
  "Review news from a topic you are interested in (games, music, politics, anything)",
  "Invite another streamer for a 1v1",
  "Play Jackbox Party Game with viewers",
  "Stream in costume, prepare the costume (makeup, etc.) on stream",
  "Make a quick tutorial about something",
  "Show off your streaming setup",
  "Make a contest for your viewers",
  "Read a book out loud - just be careful about copyrights, so choose public domain books",
  "Try making music",
  'Play with art "<a href="https://experiments.withgoogle.com/collection/arts-culture" target="_blank" rel="noopener noreferrer">Experiments with Google</a>"',
  'Play with <a href="https://experiments.withgoogle.com/collection/ai" target="_blank" rel="noopener noreferrer">Experiments from Google</a>',
  "Dim the lights, tell a ghost story",
  "What advice would you give to your younger self?",
  "Share something you wish you knew before XYZ",
  "Talk about how to do something most people don't know how to do",
  "Learn to beatbox",
  "Make a funny sound every time somebody follows/subscribe",
  "Read chat messages using a funny voice",
  "Ask your viewers what they want to do",
  "Ask your viewers what they want to know about you",
  "Design your dream home in The Sims",
  "Go through a list of upcoming games, give your opinion about them and if you want to play them",
  "Show off your skins in a game",
  "Show your favourite and least favourite skin in a game",
  "Discuss your favourite and least favourite characters/roles in games",
  "Learn a new character/role",
  "Do an unboxing",
  "Play a weird one dollar game",
  "Design your own merch on stream",
  "Discuss and set up points/donation rewards",
  "Watch your top clips",
  "Watch your old clips",
  "Explain a game strategy",
  "Talk about what celebrity you look like, discuss with chat",
  'Find out which Disney princess are you. Or do other <a href="https://www.quotev.com/quizzes" target="_blank" rel="noopener noreferrer">weird quizes</a>.',
  "Play the Wikipedia game. Have your viewers pick two articles. Go from one to another only via hyperlinks.",
  "Learn a weird new language on Duolingo",
  "Talk about how each Moderator got their role",
  "Go through your game list, pick the ones you never played, discuss with chat and plan to play some on the next stream",
  'Ask your viewers how much time they spent in the [your main game], check how much you did. Most games have websites <a href="https://wol.gg/" target="_blank" rel="noopener noreferrer">like this</a>.',
  "Talk about how you started playing your first game",
  "Talk about any hobbies you had when you were younger? Were you good at them? Do you still enjoy them?",
  "Show off your favourite artists. Remember to [in most cases] not play their music if they are music artists ;) ",
  "Tell a story about a visit to Disneyland/Aquapark/other fun parks",
  "Make predictions for the next year/month, ask your viewers to create a clip of it, and review it when the time comes",
  "Talk about who were your idols when you were younger? Why?",
  "Talk about a thing that everyone likes but you don't",
  "Talk about something you like that many people don't",
  "Show the funniest photo of your animal",
  "Show the funniest photo from your childhood",
  "Play a game with an important setting changed",
  'Take the <a href="https://8values.github.io/" target="_blank" rel="noopener noreferrer">8 values test</a>',
  'Wander on <a href="https://theuselessweb.com/" target="_blank" rel="noopener noreferrer">The Useless Web</a>',
  'Play the <a href="http://www.foddy.net/Athletics.html" target="_blank" rel="noopener noreferrer">QWOP game</a>',
  "Play a dating sim game. Don't know where to start? Try Dream Daddy: A Dad Dating Simulator. Because why not?",
  "Take a Pottermore sorting quiz, and the wand one two",
  "Talk about the last conversation you had with a friend",
];
function randomidea() {
  let number = Math.floor(Math.random() * (ideas.length - 0) + 0);
  console.log(JSON.stringify({ number: number, text: ideas[number] }));
  return ideas[number];
}
document.addEventListener("DOMContentLoaded", () => {
  !(function () {
    const e = document.getElementById("shuffle-button"),
      t = document.getElementById("idea-content");
    e &&
      t &&
      ((t.innerHTML = randomidea()),
      e.addEventListener("click", (e) => {
        e.preventDefault(), (t.innerHTML = randomidea());
      }),
      window.addEventListener("keyup", (e) => {
        (" " !== e.key && "Space" !== e.key && "Spacebar" !== e.code) ||
          (t.innerHTML = randomidea());
      }));
      /* */
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("./serviceWorker.js")
          .then((res) => {
            console.log("Service Woker registrado");
          })
          .catch((err) => {
            console.log("ERROR AL REGISTART SERVICE WORKER ",err);
          });
      }
  })();
});
