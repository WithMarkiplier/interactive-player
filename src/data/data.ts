import { IChoiceGroup } from "../types/types";

export const choiceGroupData: IChoiceGroup[] = [
  {
    title: "A Heist with Markiplier",
    watchCode: "9TjfkXmwbTs",
    type: "start",
    showAt: 330,
    choices: [
      { text: "All sneaky like", nextChoiceGroupWatchCode: "dHEAIpQDPdA" },
      { text: "Guns Blazing", nextChoiceGroupWatchCode: "AJUy9Q3RGl8" },
    ],
  },
  {
    title: "Guns Blazing",
    watchCode: "AJUy9Q3RGl8",
    type: "default",
    showAt: 145,
    choices: [
      { text: "Helicopter", nextChoiceGroupWatchCode: "d19r9sPihGM" },
      { text: "Car", nextChoiceGroupWatchCode: "hu60fNlVmF0" },
    ],
  },
  {
    title: "Car",
    watchCode: "hu60fNlVmF0",
    type: "default",
    showAt: 140,
    choices: [
      { text: "Walk to Base", nextChoiceGroupWatchCode: "o33XENKcP8M" },
      { text: "Try to Fix", nextChoiceGroupWatchCode: "WOkGbGV2Tcg" },
    ],
  },
  {
    title: "Walk to Base",
    watchCode: "o33XENKcP8M",
    type: "default",
    showAt: 105,
    choices: [
      { text: "Tell the Truth", nextChoiceGroupWatchCode: "Nv12neoLzBw" },
      { text: "I'm Fine!", nextChoiceGroupWatchCode: "n6EH5NhxUo4" },
    ],
  },
  {
    title: "I'm Fine!",
    watchCode: "n6EH5NhxUo4",
    type: "default",
    showAt: 150,
    choices: [
      { text: "The Scientist", nextChoiceGroupWatchCode: "-kqxCWQKPYI" },
      { text: "The Soldier", nextChoiceGroupWatchCode: "5za3hRrNVeg" },
    ],
  },
  {
    title: "The Soldier",
    watchCode: "5za3hRrNVeg",
    type: "default",
    showAt: 139,
    choices: [
      { text: "I'm Hiding Something", nextChoiceGroupWatchCode: "Xe5GSBQcKmU" },
      {
        text: "Ed's Hiding Something",
        nextChoiceGroupWatchCode: "xtTTrN3oBIo",
      },
    ],
  },
  {
    title: "Ed's Hiding Something",
    watchCode: "xtTTrN3oBIo",
    type: "default",
    showAt: 190,
    choices: [
      { text: "PB&J", nextChoiceGroupWatchCode: "tj-11NRY64o" },
      { text: "Tuna", nextChoiceGroupWatchCode: "PCjbswYDp88" },
    ],
  },
  {
    title: "Tuna",
    watchCode: "PCjbswYDp88",
    type: "end",
    showAt: 70,
    ending: {
      endingNumber: 8,
      endingCode: "R",
      endingName: "The cure",
    },
  },
  {
    title: "PB&J",
    watchCode: "tj-11NRY64o",
    type: "end",
    showAt: 68,
    ending: {
      endingNumber: 9,
      endingCode: "9",
      endingName: "Friends of the dead",
    },
  },
  {
    title: "I'm Hiding Something",
    watchCode: "Xe5GSBQcKmU",
    type: "end",
    showAt: 28,
    ending: {
      endingNumber: 7,
      endingCode: "e",
      endingName: "What did you expect?",
    },
  },
  {
    title: "The Scientist",
    watchCode: "-kqxCWQKPYI",
    type: "default",
    showAt: 270,
    choices: [
      { text: "ABSOLUTELY NOT!!", nextChoiceGroupWatchCode: "ex4vozijjdk" },
      { text: "For the Greater Good", nextChoiceGroupWatchCode: "N1xn5gXFch4" },
    ],
  },
  {
    title: "For the Greater Good",
    watchCode: "N1xn5gXFch4",
    type: "end",
    showAt: 98,
    ending: {
      endingNumber: 6,
      endingCode: "E",
      endingName: "The end",
    },
  },
  {
    title: "ABSOLUTELY NOT!!",
    watchCode: "ex4vozijjdk",
    type: "end",
    showAt: 98,
    ending: {
      endingNumber: 5,
      endingCode: "e",
      endingName: "The coward's way out",
    },
  },
  {
    title: "Tell the Truth",
    watchCode: "Nv12neoLzBw",
    type: "end",
    showAt: 108,
    ending: {
      endingNumber: 1,
      endingCode: "L",
      endingName: "Clever girl",
    },
  },
  {
    title: "Try to Fix",
    watchCode: "WOkGbGV2Tcg",
    type: "default",
    showAt: 110,
    choices: [
      {
        text: "An Adventure Sounds Lovely",
        nextChoiceGroupWatchCode: "xrWThWmZINE",
      },
      {
        text: "I Don't Trust Strangers",
        nextChoiceGroupWatchCode: "M4HiiGiRKJE",
      },
    ],
  },
  {
    title: "I Don't Trust Strangers",
    watchCode: "M4HiiGiRKJE",
    type: "end",
    showAt: 100,
    ending: {
      endingNumber: 1,
      endingCode: "L",
      endingName: "Clever girl",
    },
  },
  {
    title: "An Adventure Sounds Lovely",
    watchCode: "xrWThWmZINE",
    type: "default",
    showAt: 123,
    choices: [
      {
        text: "Give the Statue",
        nextChoiceGroupWatchCode: "zelFSJm6yu8",
      },
      {
        text: "Don't Give the Statue",
        nextChoiceGroupWatchCode: "Vy8hCbhZtvc",
      },
    ],
  },
  {
    title: "Don't Give the Statue",
    watchCode: "Vy8hCbhZtvc",
    type: "end",
    showAt: 57,
    ending: {
      endingNumber: 2,
      endingCode: "h",
      endingName: "Monkey see, monkey kill",
    },
  },
  {
    title: "Give the Statue",
    watchCode: "zelFSJm6yu8",
    type: "end",
    showAt: 170,
    ending: {
      endingNumber: 3,
      endingCode: "3",
      endingName: "A heavenly adventure",
    },
  },
  {
    title: "Helicopter",
    watchCode: "d19r9sPihGM",
    showAt: 145,
    type: "default",
    choices: [
      { text: "Charm the Guards", nextChoiceGroupWatchCode: "BYpxqtEfKpk" },
      { text: "Rally the Prisoners", nextChoiceGroupWatchCode: "Ttld8M6RmfI" },
    ],
  },
  {
    title: "Rally the Prisoners",
    watchCode: "Ttld8M6RmfI",
    type: "default",
    showAt: 210,
    choices: [
      { text: "Prison Life for Me", nextChoiceGroupWatchCode: "4WoRALUW_8g" },
      { text: "I Want to Be Free", nextChoiceGroupWatchCode: "SFbD8rM2S5c" },
    ],
  },
  {
    title: "I Want to Be Free",
    watchCode: "SFbD8rM2S5c",
    type: "default",
    showAt: 125,
    choices: [
      {
        text: "Thanks and also Yes Please",
        nextChoiceGroupWatchCode: "4Z4_t1LemOU",
      },
      { text: "Thanks but No Thanks", nextChoiceGroupWatchCode: "O6VB51PihWY" },
    ],
  },
  {
    title: "Thanks but No Thanks",
    watchCode: "O6VB51PihWY",
    type: "end",
    showAt: 72,
    ending: {
      endingNumber: 11,
      endingCode: "5",
      endingName: "Dance to the death",
    },
  },
  {
    title: "Thanks and also Yes Please",
    watchCode: "4Z4_t1LemOU",
    type: "end",
    showAt: 334,
    ending: {
      endingNumber: 12,
      endingCode: "9",
      endingName: "I want to be free",
    },
  },
  {
    title: "Prison Life for Me",
    watchCode: "4WoRALUW_8g",
    type: "end",
    showAt: 73,
    ending: {
      endingNumber: 10,
      endingCode: "Z",
      endingName: "Life sentence",
    },
  },
  {
    title: "Charm the Guards",
    watchCode: "BYpxqtEfKpk",
    type: "default",
    showAt: 250,
    choices: [
      { text: "Dig Dig Dig", nextChoiceGroupWatchCode: "6HtWfuz1wEA" },
      { text: "What's that?", nextChoiceGroupWatchCode: "tu8qAfSv4pQ" },
    ],
  },
  {
    title: "What's that?",
    watchCode: "tu8qAfSv4pQ",
    type: "default",
    showAt: 45,
    choices: [
      { text: "This Seems Safe", nextChoiceGroupWatchCode: "lSJT6ch3-GQ" },
      { text: "Oh HELL No!", nextChoiceGroupWatchCode: "cn4G5KQQFHw" },
    ],
  },
  {
    title: "Oh HELL No!",
    watchCode: "cn4G5KQQFHw",
    type: "default",
    showAt: 115,
    choices: [
      { text: "What's in the Box?", nextChoiceGroupWatchCode: "_EjgHql3mJ0" },
      { text: "Stick to the Plan", nextChoiceGroupWatchCode: "AS-mcpFmyMY" },
    ],
  },
  {
    title: "Stick to the Plan",
    watchCode: "AS-mcpFmyMY",
    type: "default",
    showAt: 195,
    choices: [
      { text: "Shoot Wade", nextChoiceGroupWatchCode: "XEdgaWtjEqg" },
      { text: "Open the Box", nextChoiceGroupWatchCode: "9n7Via0ect4" },
    ],
  },
  {
    title: "Open the Box",
    watchCode: "9n7Via0ect4",
    type: "end",
    showAt: 194,
    ending: {
      endingNumber: 16,
      endingCode: "U",
      endingName: "The interview",
    },
  },
  {
    title: "Shoot Wade",
    watchCode: "XEdgaWtjEqg",
    type: "end",
    showAt: 55,
    ending: {
      endingNumber: 18,
      endingCode: "2",
      endingName: "It was MY joke",
    },
  },
  {
    title: "What's in the Box?",
    watchCode: "_EjgHql3mJ0",
    type: "end",
    showAt: 88,
    ending: {
      endingNumber: 14,
      endingCode: "W",
      endingName: "Be quiet!",
    },
  },
  {
    title: "This Seems Safe",
    watchCode: "lSJT6ch3-GQ",
    type: "end",
    showAt: 55,
    ending: {
      endingNumber: 19,
      endingCode: "b",
      endingName: "The enigma of happy trails penitentiary",
    },
  },
  {
    title: "Dig Dig Dig",
    watchCode: "6HtWfuz1wEA",
    type: "default",
    showAt: 97,
    choices: [
      { text: "Stick to the Plan", nextChoiceGroupWatchCode: "6NdgRVlAmAo" },
      { text: "What's in the Box?", nextChoiceGroupWatchCode: "xuukkVAJ5wk" },
    ],
  },
  {
    title: "What's in the Box?",
    watchCode: "xuukkVAJ5wk",
    type: "end",
    showAt: 80,
    ending: {
      endingNumber: 13,
      endingCode: "Y",
      endingName: "Shut up!",
    },
  },
  {
    title: "Stick to the Plan",
    watchCode: "6NdgRVlAmAo",
    type: "default",
    showAt: 225,
    choices: [
      { text: "Shoot Bob", nextChoiceGroupWatchCode: "kKIm9otZZBg" },
      { text: "Open the Box", nextChoiceGroupWatchCode: "cI_hzj5g-aQ" },
    ],
  },
  {
    title: "Open the Box",
    watchCode: "cI_hzj5g-aQ",
    type: "end",
    showAt: 77,
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
    showAt: 59,
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
    showAt: 3 * 60 + 37,
    choices: [
      { text: "Dark Tunnel", nextChoiceGroupWatchCode: "g16M54TNU8o" },
      { text: "Light Tunnel", nextChoiceGroupWatchCode: "aPIHjZ7ik2U" },
    ],
  },
  {
    title: "Light Tunnel",
    watchCode: "aPIHjZ7ik2U",
    type: "default",
    showAt: 105,
    choices: [
      { text: "Wait For Rescue", nextChoiceGroupWatchCode: "MIV53FtqA1A" },
      { text: "Row Home", nextChoiceGroupWatchCode: "QUbuL0VN01o" },
    ],
  },
  {
    title: "Row Home",
    watchCode: "QUbuL0VN01o",
    type: "default",
    showAt: 105,
    choices: [
      { text: "Build a Sign", nextChoiceGroupWatchCode: "UPzKET34slc" },
      { text: "Find Shelter", nextChoiceGroupWatchCode: "h-k59Ci_smg" },
    ],
  },
  {
    title: "Find Shelter",
    watchCode: "h-k59Ci_smg",
    type: "default",
    showAt: 120,
    choices: [
      { text: "Enter the Cave", nextChoiceGroupWatchCode: "NrrnXtw23gI" },
      { text: "RUN AWAY!!", nextChoiceGroupWatchCode: "-EBnnTYEB80" },
    ],
  },
  {
    title: "RUN AWAY!!",
    watchCode: "-EBnnTYEB80",
    type: "end",
    showAt: 27,
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
    showAt: 102,
    choices: [
      { text: "You First", nextChoiceGroupWatchCode: "BXjHW86e4pc" },
      { text: "Me First", nextChoiceGroupWatchCode: "ojpitvj0aTg" },
    ],
  },
  {
    title: "Me First",
    watchCode: "ojpitvj0aTg",
    type: "end",
    showAt: 146,
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
    showAt: 96,
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
    showAt: 154,
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
    showAt: 90,
    choices: [
      { text: "I Know Everything", nextChoiceGroupWatchCode: "ipGDwQDXcD0" },
      { text: "I Know Nothing", nextChoiceGroupWatchCode: "hYCiv0hvhcM" },
    ],
  },
  {
    title: "I Know Nothing",
    watchCode: "hYCiv0hvhcM",
    type: "default",
    showAt: 157,
    choices: [
      { text: "Treasured Gold", nextChoiceGroupWatchCode: "znKK8QMshHg" },
      { text: "Golden Treasure", nextChoiceGroupWatchCode: "VdwBhv69R54" },
    ],
  },
  {
    title: "Treasured Gold",
    watchCode: "znKK8QMshHg",
    type: "end",
    showAt: 198,
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
    showAt: 159,
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
    showAt: 39,
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
    showAt: 40,
    choices: [
      { text: "Split Up", nextChoiceGroupWatchCode: "4YoY5OOyn6k" },
      { text: "Don't Split Up", nextChoiceGroupWatchCode: "PSxr_Q1yNvE" },
    ],
  },
  {
    title: "Split Up",
    watchCode: "4YoY5OOyn6k",
    type: "end",
    showAt: 25,
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
    showAt: 60,
    choices: [
      { text: "Split Up", nextChoiceGroupWatchCode: "WLDw07ew24g" },
      { text: "Don't Split Up", nextChoiceGroupWatchCode: "Skmtr32TyjA" },
    ],
  },
  {
    title: "Split Up",
    watchCode: "WLDw07ew24g",
    type: "end",
    showAt: 34,
    ending: {
      endingNumber: 28,
      endingCode: "Q",
      endingName: "Are you serious?",
    },
  },
  {
    title: "Don't Split Up",
    watchCode: "Skmtr32TyjA",
    type: "default",
    showAt: 187,
    choices: [
      { text: "Split Up", nextChoiceGroupWatchCode: "WLDw07ew24g" },
      { text: "Don't Split Up", nextChoiceGroupWatchCode: "POf2YIskmn4" },
    ],
  },
  {
    title: "Split Up",
    watchCode: "jH_OAoT-icU",
    type: "end",
    showAt: 230,
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
    showAt: 55,
    choices: [
      { text: "Split Up", nextChoiceGroupWatchCode: "rJQdUfNcLt4" },
      { text: "Don't Split Up", nextChoiceGroupWatchCode: "55wOk9zdwXM" },
    ],
  },
  {
    title: "Split Up",
    watchCode: "rJQdUfNcLt4",
    type: "end",
    showAt: 74,
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
    showAt: 138,
    ending: {
      endingNumber: 30,
      endingCode: "3",
      endingName: "Once more, with feeling",
    },
  },
];
