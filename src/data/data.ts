import { IChoiceGroup } from "../types/types";

export const choiceGroupData: IChoiceGroup[] = [
  {
    videoTitle: "A Heist with Markiplier",
    watchCode: "9TjfkXmwbTs",
    type: "start",
    showAt: 330,
    choices: [
      { text: "All Sneaky like", nextChoiceGroupWatchCode: "dHEAIpQDPdA" },
      { text: "Guns Blazing", nextChoiceGroupWatchCode: "AJUy9Q3RGl8" },
    ],
  },
  {
    videoTitle: "Guns Blazing",
    watchCode: "AJUy9Q3RGl8",
    type: "default",
    showAt: 145,
    choices: [
      { text: "Helicopter", nextChoiceGroupWatchCode: "d19r9sPihGM" },
      { text: "Car", nextChoiceGroupWatchCode: "hu60fNlVmF0" },
    ],
  },
  {
    videoTitle: "Car",
    watchCode: "hu60fNlVmF0",
    type: "default",
    showAt: 140,
    choices: [
      { text: "Walk to Base", nextChoiceGroupWatchCode: "o33XENKcP8M" },
      { text: "Try to Fix", nextChoiceGroupWatchCode: "WOkGbGV2Tcg" },
    ],
  },
  {
    videoTitle: "Walk to Base",
    watchCode: "o33XENKcP8M",
    type: "default",
    showAt: 105,
    choices: [
      { text: "Tell the Truth", nextChoiceGroupWatchCode: "Nv12neoLzBw" },
      { text: "I'm Fine!", nextChoiceGroupWatchCode: "n6EH5NhxUo4" },
    ],
  },
  {
    videoTitle: "I'm Fine!",
    watchCode: "n6EH5NhxUo4",
    type: "default",
    showAt: 150,
    choices: [
      { text: "The Scientist", nextChoiceGroupWatchCode: "-kqxCWQKPYI" },
      { text: "The Soldier", nextChoiceGroupWatchCode: "5za3hRrNVeg" },
    ],
  },
  {
    videoTitle: "The Soldier",
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
    videoTitle: "Ed's Hiding Something",
    watchCode: "xtTTrN3oBIo",
    type: "default",
    showAt: 190,
    choices: [
      { text: "PB&J", nextChoiceGroupWatchCode: "tj-11NRY64o" },
      { text: "Tuna", nextChoiceGroupWatchCode: "PCjbswYDp88" },
    ],
  },
  {
    videoTitle: "Tuna",
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
    videoTitle: "PB&J",
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
    videoTitle: "I'm Hiding Something",
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
    videoTitle: "The Scientist",
    watchCode: "-kqxCWQKPYI",
    type: "default",
    showAt: 270,
    choices: [
      { text: "ABSOLUTELY NOT!!", nextChoiceGroupWatchCode: "ex4vozijjdk" },
      { text: "For the Greater Good", nextChoiceGroupWatchCode: "N1xn5gXFch4" },
    ],
  },
  {
    videoTitle: "For the Greater Good",
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
    videoTitle: "ABSOLUTELY NOT!!",
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
    videoTitle: "Tell the Truth",
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
    videoTitle: "Try to Fix",
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
    videoTitle: "I Don't Trust Strangers",
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
    videoTitle: "An Adventure Sounds Lovely",
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
    videoTitle: "Don't Give the Statue",
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
    videoTitle: "Give the Statue",
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
    videoTitle: "Helicopter",
    watchCode: "d19r9sPihGM",
    showAt: 145,
    type: "default",
    choices: [
      { text: "Charm the Guards", nextChoiceGroupWatchCode: "BYpxqtEfKpk" },
      { text: "Rally the Prisoners", nextChoiceGroupWatchCode: "Ttld8M6RmfI" },
    ],
  },
  {
    videoTitle: "Rally the Prisoners",
    watchCode: "Ttld8M6RmfI",
    type: "default",
    showAt: 210,
    choices: [
      { text: "Prison Life for Me", nextChoiceGroupWatchCode: "4WoRALUW_8g" },
      { text: "I Want to Be Free", nextChoiceGroupWatchCode: "SFbD8rM2S5c" },
    ],
  },
  {
    videoTitle: "I Want to Be Free",
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
    videoTitle: "Thanks but No Thanks",
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
    videoTitle: "Thanks and also Yes Please",
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
    videoTitle: "Prison Life for Me",
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
    videoTitle: "Charm the Guards",
    watchCode: "BYpxqtEfKpk",
    type: "default",
    showAt: 250,
    choices: [
      { text: "Dig Dig Dig", nextChoiceGroupWatchCode: "6HtWfuz1wEA" },
      { text: "What's that?", nextChoiceGroupWatchCode: "tu8qAfSv4pQ" },
    ],
  },
  {
    videoTitle: "What's that?",
    watchCode: "tu8qAfSv4pQ",
    type: "default",
    showAt: 45,
    choices: [
      { text: "This Seems Safe", nextChoiceGroupWatchCode: "lSJT6ch3-GQ" },
      { text: "Oh HELL No!", nextChoiceGroupWatchCode: "cn4G5KQQFHw" },
    ],
  },
  {
    videoTitle: "Oh HELL No!",
    watchCode: "cn4G5KQQFHw",
    type: "default",
    showAt: 115,
    choices: [
      { text: "What's in the Box?", nextChoiceGroupWatchCode: "_EjgHql3mJ0" },
      { text: "Stick to the Plan", nextChoiceGroupWatchCode: "AS-mcpFmyMY" },
    ],
  },
  {
    videoTitle: "Stick to the Plan",
    watchCode: "AS-mcpFmyMY",
    type: "default",
    showAt: 195,
    choices: [
      { text: "Shoot Wade", nextChoiceGroupWatchCode: "XEdgaWtjEqg" },
      { text: "Open the Box", nextChoiceGroupWatchCode: "9n7Via0ect4" },
    ],
  },
  {
    videoTitle: "Open the Box",
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
    videoTitle: "Shoot Wade",
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
    videoTitle: "What's in the Box?",
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
    videoTitle: "This Seems Safe",
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
    videoTitle: "Dig Dig Dig",
    watchCode: "6HtWfuz1wEA",
    type: "default",
    showAt: 97,
    choices: [
      { text: "Stick to the Plan", nextChoiceGroupWatchCode: "6NdgRVlAmAo" },
      { text: "What's in the Box?", nextChoiceGroupWatchCode: "xuukkVAJ5wk" },
    ],
  },
  {
    videoTitle: "What's in the Box?",
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
    videoTitle: "Stick to the Plan",
    watchCode: "6NdgRVlAmAo",
    type: "default",
    showAt: 225,
    choices: [
      { text: "Shoot Bob", nextChoiceGroupWatchCode: "kKIm9otZZBg" },
      { text: "Open the Box", nextChoiceGroupWatchCode: "cI_hzj5g-aQ" },
    ],
  },
  {
    videoTitle: "Open the Box",
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
    videoTitle: "Shoot Bob",
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
    videoTitle: "All Sneaky Like",
    watchCode: "dHEAIpQDPdA",
    type: "default",
    showAt: 3 * 60 + 37,
    choices: [
      { text: "Dark Tunnel", nextChoiceGroupWatchCode: "g16M54TNU8o" },
      { text: "Light Tunnel", nextChoiceGroupWatchCode: "aPIHjZ7ik2U" },
    ],
  },
  {
    videoTitle: "Light Tunnel",
    watchCode: "aPIHjZ7ik2U",
    type: "default",
    showAt: 105,
    choices: [
      { text: "Wait For Rescue", nextChoiceGroupWatchCode: "MIV53FtqA1A" },
      { text: "Row Home", nextChoiceGroupWatchCode: "QUbuL0VN01o" },
    ],
  },
  {
    videoTitle: "Row Home",
    watchCode: "QUbuL0VN01o",
    type: "default",
    showAt: 105,
    choices: [
      { text: "Build a Sign", nextChoiceGroupWatchCode: "UPzKET34slc" },
      { text: "Find Shelter", nextChoiceGroupWatchCode: "h-k59Ci_smg" },
    ],
  },
  {
    videoTitle: "Find Shelter",
    watchCode: "h-k59Ci_smg",
    type: "default",
    showAt: 120,
    choices: [
      { text: "Enter the Cave", nextChoiceGroupWatchCode: "NrrnXtw23gI" },
      { text: "RUN AWAY!!", nextChoiceGroupWatchCode: "-EBnnTYEB80" },
    ],
  },
  {
    videoTitle: "RUN AWAY!!",
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
    videoTitle: "Enter the Cave",
    watchCode: "NrrnXtw23gI",
    type: "default",
    showAt: 102,
    choices: [
      { text: "You First", nextChoiceGroupWatchCode: "BXjHW86e4pc" },
      { text: "Me First", nextChoiceGroupWatchCode: "ojpitvj0aTg" },
    ],
  },
  {
    videoTitle: "Me First",
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
    videoTitle: "You First",
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
    videoTitle: "Build a Sign",
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
    videoTitle: "Wait For Rescue",
    watchCode: "MIV53FtqA1A",
    type: "default",
    showAt: 90,
    choices: [
      { text: "I Know Everything", nextChoiceGroupWatchCode: "ipGDwQDXcD0" },
      { text: "I Know Nothing", nextChoiceGroupWatchCode: "hYCiv0hvhcM" },
    ],
  },
  {
    videoTitle: "I Know Nothing",
    watchCode: "hYCiv0hvhcM",
    type: "default",
    showAt: 157,
    choices: [
      { text: "Treasured Gold", nextChoiceGroupWatchCode: "znKK8QMshHg" },
      { text: "Golden Treasure", nextChoiceGroupWatchCode: "VdwBhv69R54" },
    ],
  },
  {
    videoTitle: "Treasured Gold",
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
    videoTitle: "Golden Treasure",
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
    videoTitle: "I Know Everything",
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
    videoTitle: "Dark Tunnel",
    watchCode: "g16M54TNU8o",
    type: "default",
    showAt: 40,
    choices: [
      { text: "Split Up", nextChoiceGroupWatchCode: "4YoY5OOyn6k" },
      { text: "Don't Split Up", nextChoiceGroupWatchCode: "PSxr_Q1yNvE" },
    ],
  },
  {
    videoTitle: "Split Up",
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
    videoTitle: "Don't Split Up",
    watchCode: "PSxr_Q1yNvE",
    type: "default",
    showAt: 60,
    choices: [
      { text: "Split Up", nextChoiceGroupWatchCode: "WLDw07ew24g" },
      { text: "Don't Split Up", nextChoiceGroupWatchCode: "Skmtr32TyjA" },
    ],
  },
  {
    videoTitle: "Split Up",
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
    videoTitle: "Don't Split Up",
    watchCode: "Skmtr32TyjA",
    type: "default",
    showAt: 187,
    choices: [
      { text: "Split Up", nextChoiceGroupWatchCode: "jH_OAoT-icU" },
      { text: "Don't Split Up", nextChoiceGroupWatchCode: "POf2YIskmn4" },
    ],
  },
  {
    videoTitle: "Split Up",
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
    videoTitle: "Don't Split Up",
    watchCode: "POf2YIskmn4",
    type: "default",
    showAt: 55,
    choices: [
      { text: "Split Up", nextChoiceGroupWatchCode: "rJQdUfNcLt4" },
      { text: "Don't Split Up", nextChoiceGroupWatchCode: "55wOk9zdwXM" },
    ],
  },
  {
    videoTitle: "Split Up",
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
    videoTitle: "Split Up",
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
