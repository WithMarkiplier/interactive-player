import { IChoiceGroup } from "../types/types";

export const data: IChoiceGroup[] = [
  {
    title: "A Heist with Markiplier",
    watchCode: "9TjfkXmwbTs",
    type: "start",
    choices: [
      { text: "All sneaky like", nextChoiceGroupWatchCode: "dHEAIpQDPdA" },
      { text: "Guns Blazing", nextChoiceGroupWatchCode: "AJUy9Q3RGl8" },
    ],
  },
  {
    title: "Guns Blazing",
    watchCode: "AJUy9Q3RGl8",
    type: "default",
    choices: [
      { text: "Helicopter", nextChoiceGroupWatchCode: "d19r9sPihGM" },
      { text: "Car", nextChoiceGroupWatchCode: "" },
    ],
  },
  {
    title: "Helicopter",
    watchCode: "d19r9sPihGM",
    type: "default",
    choices: [
      { text: "Charm the Guards", nextChoiceGroupWatchCode: "BYpxqtEfKpk" },
      { text: "Rally the Prisoners", nextChoiceGroupWatchCode: "" },
    ],
  },
  {
    title: "Charm the Guards",
    watchCode: "BYpxqtEfKpk",
    type: "default",
    choices: [
      { text: "Dig Dig Dig", nextChoiceGroupWatchCode: "6HtWfuz1wEA" },
      { text: "What's that?", nextChoiceGroupWatchCode: "" },
    ],
  },
  {
    title: "Dig Dig Dig",
    watchCode: "6HtWfuz1wEA",
    type: "default",
    choices: [
      { text: "Stick to the Plan", nextChoiceGroupWatchCode: "6NdgRVlAmAo" },
      { text: "What's in the Box?", nextChoiceGroupWatchCode: "" },
    ],
  },
  {
    title: "Stick to the Plan",
    watchCode: "6NdgRVlAmAo",
    type: "default",
    choices: [
      { text: "Shoot Bob", nextChoiceGroupWatchCode: "kKIm9otZZBg" },
      { text: "Open the Box", nextChoiceGroupWatchCode: "cI_hzj5g-aQ" },
    ],
  },
  {
    title: "Open the Box",
    watchCode: "cI_hzj5g-aQ",
    type: "end",
    ending: {
      endingNumber: 15,
      endingCode: "C",
      endingName: "Time is on our side",
    },
  },
  {
    title: "Shoot Bob",
    watchCode: "kKIm9otZZBg",
    type: "end",
    ending: {
      endingNumber: 17,
      endingCode: "B",
      endingName: "It was ME the whole time",
    },
  },
  {
    title: "All Sneaky Like",
    watchCode: "dHEAIpQDPdA",
    type: "default",
    choices: [
      { text: "Dark Tunnel", nextChoiceGroupWatchCode: "g16M54TNU8o" },
      { text: "Light Tunnel", nextChoiceGroupWatchCode: "aPIHjZ7ik2U" },
    ],
  },
  {
    title: "Light Tunnel",
    watchCode: "aPIHjZ7ik2U",
    type: "default",
    choices: [
      { text: "Wait For Rescue", nextChoiceGroupWatchCode: "MIV53FtqA1A" },
      { text: "Row Home", nextChoiceGroupWatchCode: "QUbuL0VN01o" },
    ],
  },
  {
    title: "Row Home",
    watchCode: "QUbuL0VN01o",
    type: "default",
    choices: [
      { text: "Build a Sign", nextChoiceGroupWatchCode: "UPzKET34slc" },
      { text: "Find Shelter", nextChoiceGroupWatchCode: "h-k59Ci_smg" },
    ],
  },
  {
    title: "Find Shelter",
    watchCode: "h-k59Ci_smg",
    type: "default",
    choices: [
      { text: "Enter the Cave", nextChoiceGroupWatchCode: "NrrnXtw23gI" },
      { text: "RUN AWAY!!", nextChoiceGroupWatchCode: "-EBnnTYEB80" },
    ],
  },
  {
    title: "RUN AWAY!!",
    watchCode: "-EBnnTYEB80",
    type: "end",
    ending: {
      endingNumber: 26,
      endingCode: "A",
      endingName: "Fresh meat",
    },
  },
  {
    title: "Enter the Cave",
    watchCode: "NrrnXtw23gI",
    type: "default",
    choices: [
      { text: "You First", nextChoiceGroupWatchCode: "BXjHW86e4pc" },
      { text: "Me First", nextChoiceGroupWatchCode: "ojpitvj0aTg" },
    ],
  },
  {
    title: "Me First",
    watchCode: "ojpitvj0aTg",
    type: "end",
    ending: {
      endingNumber: 25,
      endingCode: "8",
      endingName: "Don't judge a book by its human-skin cover",
    },
  },
  {
    title: "You First",
    watchCode: "BXjHW86e4pc",
    type: "end",
    ending: {
      endingNumber: 24,
      endingCode: "J",
      endingName: "Imma firin' mah lazarrr!",
    },
  },
  {
    title: "Build a Sign",
    watchCode: "UPzKET34slc",
    type: "end",
    ending: {
      endingNumber: 23,
      endingCode: "H",
      endingName: "Not again...",
    },
  },
  {
    title: "Wait For Rescue",
    watchCode: "MIV53FtqA1A",
    type: "default",
    choices: [
      { text: "I Know Everything", nextChoiceGroupWatchCode: "ipGDwQDXcD0" },
      { text: "I Know Nothing", nextChoiceGroupWatchCode: "hYCiv0hvhcM" },
    ],
  },
  {
    title: "I Know Nothing",
    watchCode: "hYCiv0hvhcM",
    type: "default",
    choices: [
      { text: "Treasured Gold", nextChoiceGroupWatchCode: "znKK8QMshHg" },
      { text: "Golden Treasure", nextChoiceGroupWatchCode: "VdwBhv69R54" },
    ],
  },
  {
    title: "Treasured Gold",
    watchCode: "znKK8QMshHg",
    type: "end",
    ending: {
      endingNumber: 22,
      endingCode: "i",
      endingName: "A pirate's life for me",
    },
  },
  {
    title: "Golden Treasure",
    watchCode: "VdwBhv69R54",
    type: "end",
    ending: {
      endingNumber: 21,
      endingCode: "v",
      endingName: "In the soulstone",
    },
  },
  {
    title: "I Know Everything",
    watchCode: "ipGDwQDXcD0",
    type: "end",
    ending: {
      endingNumber: 20,
      endingCode: "7",
      endingName: "I believe I can fly",
    },
  },
  {
    title: "Dark Tunnel",
    watchCode: "g16M54TNU8o",
    type: "default",
    choices: [
      { text: "Split Up", nextChoiceGroupWatchCode: "4YoY5OOyn6k" },
      { text: "Don't Split Up", nextChoiceGroupWatchCode: "PSxr_Q1yNvE" },
    ],
  },
  {
    title: "Split Up",
    watchCode: "4YoY5OOyn6k",
    type: "end",
    ending: {
      endingNumber: 27,
      endingCode: "L",
      endingName: "When will you learn?",
    },
  },
  {
    title: "Don't Split Up",
    watchCode: "PSxr_Q1yNvE",
    type: "default",
    choices: [
      { text: "Split Up", nextChoiceGroupWatchCode: "WLDw07ew24g" },
      { text: "Don't Split Up", nextChoiceGroupWatchCode: "Skmtr32TyjA" },
    ],
  },
  {
    title: "Split Up",
    watchCode: "WLDw07ew24g",
    type: "end",
    ending: {
      endingNumber: 28,
      endingCode: "Q",
      endingName: "One last split up",
    },
  },
  {
    title: "Don't Split Up",
    watchCode: "Skmtr32TyjA",
    type: "default",
    choices: [
      { text: "Split Up", nextChoiceGroupWatchCode: "WLDw07ew24g" },
      { text: "Don't Split Up", nextChoiceGroupWatchCode: "POf2YIskmn4" },
    ],
  },
  {
    title: "Split Up",
    watchCode: "jH_OAoT-icU",
    type: "end",
    ending: {
      endingNumber: 31,
      endingCode: "7",
      endingName: "Ignorance is bliss",
    },
  },
  {
    title: "Don't Split Up",
    watchCode: "POf2YIskmn4",
    type: "default",
    choices: [
      { text: "Split Up", nextChoiceGroupWatchCode: "rJQdUfNcLt4" },
      { text: "Don't Split Up", nextChoiceGroupWatchCode: "55wOk9zdwXM" },
    ],
  },
  {
    title: "Split Up",
    watchCode: "rJQdUfNcLt4",
    type: "end",
    ending: {
      endingNumber: 29,
      endingCode: "6",
      endingName: "One last split up",
    },
  },
  {
    title: "Split Up",
    watchCode: "55wOk9zdwXM",
    type: "end",
    ending: {
      endingNumber: 30,
      endingCode: "3",
      endingName: "Once more, with feeling",
    },
  },
];
