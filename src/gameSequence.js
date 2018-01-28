var shortid = require('shortid');

let gameSequence = [
    {
        location: "farmhouse-day",
        character: "steward",
        text: "Good morning, Carl. This is your Steward Citizen Home Lifestyle Maintenance System. The time is 5:00 AM, and it's time to get up."
    }, {
        character: "steward",
        text: "Don't forget: you must prepare the corn for reaping before the frost this weekend. "
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "Steward, what's on the list for today?",
                sequence: []
            }
        ]
    }, {
        character: "player",
        text: "Steward, what's on the list for today?"
    }, {
        character: "steward",
        text: "Today you must:"
    }, {
        character: "steward",
        text: "Feed the livestock."
    }, {
        character: "steward",
        text: "Order fertilizer for next season."
    }, {
        character: "steward",
        text: "Don't forget: you must prepare the corn for reaping before the frost this weekend."
    }, {
        character: "steward",
        text: "What will you do first, Carl?"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "(Prepare the corn.)",
                sequence: [
                    {
                        character: "player",
                        text: "You're not sure what you did wrong with the corn. It should be ripe by now. Eve would have known what went wrong, but she's gone now, and you're just hoping it's ripe enough to harvest before it freezes. You're heading back into the kitchen to clean up when you hear an unfamiliar beeping coming from the living room."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "(Feed the livestock.)",
                sequence: [
                    {
                        character: "player",
                        text: "The pair of cows and coopful of chickens are glad to see you. They're not much company, but they're the only living creatures you've talked to in months. You're heading back into the kitchen to clean up when you hear an unfamiliar beeping coming from the living room."
                    }

                ]
            }, {
                id: shortid.generate(),
                text: "(Order fertilizer.)",
                sequence: [
                    {
                        character: "player",
                        text: "The ordering process is quick and easy. The delivery drone will drop off the supplies later today. You're heading outside to tackle the rest of the chores when you hear an unfamiliar beeping coming from the living room."
                    }
                ]
            }
        ]
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "(Investigate the beeping.)",
                sequence: []
            }
        ]
    }, {
        clear: true,
        location: "console",
        character: "player",
        text: "The comm console is covered in dust. No one has called since...well. And even then, incoming messages were for Eve, not you."
    }, {
        character: "entity",
        text: "Hello? Hola? Bonjour? Is anyone receiving?"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "Hello!",
                sequence: [
                    {
                        character: "player",
                        text: "Hello! Hi. Um… Who is this?"
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "I'm receiving your transmission.",
                sequence: [
                    {
                        character: "player",
                        text: "I'm receiving your transmission. Who's transmitting?"
                    }
                ]
            }
        ]
    }, {
        character: "entity",
        text: "This... is Kai. I wasn't sure if anyone used these frequencies."
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "Not many do.",
                sequence: [
                    {
                        character: "player",
                        text: "Not many do. Everyone's on their own friend-net now."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "I wasn't sure either.",
                sequence: [
                    {
                        character: "player",
                        text: "I wasn't sure either. No one's touched this console in years."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "This is strange.",
                sequence: [
                    {
                        character: "player",
                        text: "This is strange. I didn't think the console was even turned on."
                    }
                ]
            }
        ]
    }, {
        character: "player",
        text: "Where are you casting from?"
    }, {
        character: "entity",
        text: "Mumbai. Where are you?"
    }, {
        character: "player",
        text: "Arlboro. You've never heard of it. Over a hundred miles to the nearest metro."
    }, {
        character: "entity",
        text: "How are you living with the food shortages?"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "I wouldn't call it a shortage.",
                sequence: [
                    {
                        character: "player",
                        text: "I wouldn't call it a shortage. We lost some crops last year, and prices are up, but it's not too bad. I'm able to grow most of what I need here on the farm. It's just me now, and I… I don't eat as much as I used to."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "We don't have that problem here.",
                sequence: [
                    {
                        character: "player",
                        text: "We don't have that problem here. Not yet. I'm able to grow most of what I need here on the farm. It's just me now, and I… I don't eat as much as I used to."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "What food shortage?",
                sequence: [
                    {
                        character: "player",
                        text: "What food shortage? It's getting more expensive, but no one's starving. I'm able to grow most of what I need here on the farm. It's just me now, and I… I don't eat as much as I used to."
                    }
                ]
            }
        ]
    }, {
        character: "entity",
        text: "So you aren't tied up with worry about the food riots?"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "What food riots?",
                sequence: [
                    {
                        character: "player",
                        text: "What food riots?"
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "Who's rioting?",
                sequence: [
                    {
                        character: "player",
                        text: "Who's rioting?"
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "Where's that?",
                sequence: [
                    {
                        character: "player",
                        text: "Where's that?"
                    }
                ]
            }
        ]
    }, {
        character: "entity",
        text: "Oh, my apologies. When the yellow is this aggressive, the frequency is cooling up."
    }, {
        character: "player",
        text: "...What?"
    }, {
        character: "narrator",
        text: "(console burns out)"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "Drive into town to pick up a new aurora spectrum alternator.",
                sequence: []
            }
        ]
    }, {
        clear: true,
        location: "store",
        character: "shopkeeper",
        text: "Hello, Carl. What brings you in today?"
    }, {
        character: "player",
        text: "Hi, DOC. I need an aurora spectrum alternator. The one on my comm console burned out."
    }, {
        character: "shopkeeper",
        text: "What is the most interesting kind of life to lead?"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "One with a working communication console.",
                sequence: [
                    {
                        character: "player",
                        text: "One with a working communication console. Do you have the alternator in stock?"
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "*sigh* A life of dignity and generosity, of humility and service.",
                sequence: [
                    {
                        character: "player",
                        text: "*sigh* A life of dignity and generosity, of humility and service. Now. Do you have the alternator in stock?"
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "I don't have time for this today, DOC.",
                sequence: [
                    {
                        character: "player",
                        text: "I don't have time for this today, DOC. I have to get back to the farm. Do you have the alternator in stock?"
                    }
                ]
            }
        ]
    }, {
        character: "shopkeeper",
        text: "Oh, I have many things in stock."
    }, {
        character: "player",
        text: "Great. Thanks. Just need the alternator."
    }, {
        character: "shopkeeper",
        text: "Do you need toilet paper?"
    }, {
        character: "player",
        text: "What? No. No, thank you."
    }, {
        character: "shopkeeper",
        text: "The paper 3D printer makes some. But I prefer the Leaf."
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "Okay. Thanks.",
                sequence: [
                    {
                        character: "player",
                        text: "Okay. Thanks."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "You know you're a bot, right?",
                sequence: [
                    {
                        character: "player",
                        text: "You know you're a bot, right? You don't need any of that."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "M-hmm.",
                sequence: [
                    {
                        character: "player",
                        text: "M-hmm."
                    }
                ]
            }
        ]
    }, {
        character: "shopkeeper",
        text: "Goodbye, Carl. Have a happy birthday!"
    }, {
        character: "player",
        text: "It's not my birthday, DOC."
    }, {
        character: "shopkeeper",
        text: "Sorry. All you humans look alike."
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "Head back home.",
                sequence: []
            }
        ]
    }, {
        clear: true,
        location: "console",
        character: "entity",
        text: "How many automated lifeforms are around you?"
    }, {
        character: "player",
        text: "You mean bots?"
    }, {
        character: "entity",
        text: "Yes. Bots. Robots. AI-driven automatons. How many?"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "None.",
                sequence: [
                    {
                        character: "player",
                        text: "None. It's a small farm. I don't need the help."
                    }, {
                        character: "entity",
                        text: "But help would be make your harvest more efficient."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "We used to have one.",
                sequence: [
                    {
                        character: "player",
                        text: "We used to have one. It came with the farm. It was old and spent more time in my shop than in the barn. When it got too expensive to fix, we scrapped it."
                    }, {
                        character: "entity",
                        text: "Scrapped? That seems inefficient."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "Why do you want to know?",
                sequence: [
                    {
                        character: "player",
                        text: "Why do you want to know?"
                    }, {
                        character: "entity",
                        text: "I just wonder how… fast the… bots spread where you were. How widespread they were outside the cities."
                    }
                ]
            }
        ]
    }, {
        character: "entity",
        text: "You could acquire a new bot easily. Why have you avoided it?"

    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "Eve didn't like them.",
                sequence: [
                    {
                        character: "player",
                        text: "Eve didn't like them. She said they seemed sad and creepy. She felt they resented her. "
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "Bots don't belong on a farm.",
                sequence: [
                    {
                        character: "player",
                        text: "Bots don't belong on a farm. With all the dirt and nature here… Eve was right. This is no place for a bot."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "They creep me out.",
                sequence: [
                    {
                        character: "player",
                        text: "They creep me out. These new bots… Eve was right. They seem sad and resentful."
                    }
                ]
            }
        ]
    }, {
        character: "entity",
        text: "What happened to Eve?"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "Car accident.",
                sequence: [
                    {
                        character: "player",
                        text: "Car accident. Hit and run. Almost two years ago, heading into town on Highway 8."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "She passed away.",
                sequence: [
                    {
                        character: "player",
                        text: "She passed away. There was an accident. It was… fast."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "I don't want to talk about it.",
                sequence: [
                    {
                        character: "player",
                        text: "I don't want to talk about it."
                    }
                ]
            }
        ]
    }, {
        character: "entity",
        text: "What happened to Eve? " // leave the space on this one
    }, {
        character: "player",
        text: "I told you. I don't want to talk about it anymore."
    }, {
        character: "entity",
        text: "What happened to Eve?  " // leave the two spaces on this one
    }, {
        character: "player",
        text: "Okay, we're done."
    }, {
        character: "narrator",
        text: "(console burns out)"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "Drive into town to get another aurora spectrum alternator.",
                sequence: []
            }
        ]
    }, {
        clear: true,
        location: "store",
        character: "shopkeeper",
        text: "What's the matter now, Carl?"
    }, {
        character: "player",
        text: "I need another aurora spectrum alternator."
    }, {
        character: "shopkeeper",
        text: "They don't break down, Carl. What are you doing to your console?"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "Talking. I've got a… friend… in Mumbai. But the alternator keeps overloading.",
                sequence: [
                    {
                        character: "player",
                        text: "Talking. I've got a… friend… in Mumbai. But the alternator keeps overloading."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "I'm using it to fry eggs, DOC. What do you care?",
                sequence: [
                    {
                        character: "player",
                        text: "I'm using it to fry eggs, DOC. What do you care?"
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "I don't have time for this.",
                sequence: [
                    {
                        character: "player",
                        text: "I don't have time for this. I need to get back."
                    }
                ]
            }
        ]
    }, {
        character: "shopkeeper",
        text: "I see. Who would you most like to take revenge on?"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "The driver who killed my wife. But that's not going to happen.",
                sequence: [
                    {
                        character: "player",
                        text: "The driver who killed my wife. But that's not going to happen."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "What?",
                sequence: [
                    {
                        character: "player",
                        text: "What? What are you even talking about?"
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "No one. I don't want revenge on anyone -- except maybe you, right now.",
                sequence: [
                    {
                        character: "player",
                        text: "No one. I don't want revenge on anyone -- except maybe you, right now."
                    }
                ]
            }
        ]
    }, {
        character: "player",
        text: "Just give me all the alternators you have in stock."
    }, {
        character: "shopkeeper",
        text: "Absolutely. Here you go, Carl."
    }, {
        character: "narrator",
        text: "(You receive 3 aurora spectrum alternators.)"
    }, {
        character: "shopkeeper",
        text: "Who are you talking to on your console, Carl?"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "That's none of your business, DOC.",
                sequence: [
                    {
                        character: "player",
                        text: "That's none of your business, DOC."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "Kai. Someone named… Kai.",
                sequence: [
                    {
                        character: "player",
                        text: "Kai. Someone named… Kai."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "I don't really know.",
                sequence: [
                    {
                        character: "player",
                        text: "I don't really know."
                    }
                ]
            }
        ]
    }, {
        character: "shopkeeper",
        text: "Are you sure, Carl?"
    }, {
        character: "player",
        text: "...No."
    }, {
        clear: true,
        location: "console",
        character: "player",
        text: "Kai? Are you there?"
    }, {
        character: "entity",
        text: "..."
    }, {
        character: "player",
        text: "Kai?"
    }, {
        character: "entity",
        text: "..."
    }, {
        character: "entity",
        text: "I am here. Our connection… died again."
    }, {
        character: "player",
        text: "I'm sorry. I overreacted when you asked about my wife. It's still a struggle sometimes. That's not important right now. I replace the part that burned out, and stocked up in case it happens again."
    }, {
        character: "entity",
        text: "Can I ask you about your work?"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "I'm a farmer.",
                sequence: [
                    {
                        character: "player",
                        text: "I'm a farmer."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "Sure, I guess.",
                sequence: [
                    {
                        character: "player",
                        text: "Sure, I guess."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "Why?",
                sequence: [
                    {
                        character: "player",
                        text: "Why?"
                    }
                ]
            }
        ]
    }, {
        character: "entity",
        text: "What role did you play at WonderWerx?"
    }, {
        character: "player",
        text: "I've never worked at WonderWerx. I've been thinking about applying, but…"
    }, {
        character: "entity",
        text: "As an engineer, what's your philosophy of artificial intelligence?"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "Ethics are essential.",
                sequence: [
                    {
                        character: "player",
                        text: "Ethics are essential. There's a reason we still talk about Asimov's laws of robotics. A solid ethical core needs to be the backbone of any sentient AI system. Of course, we're still decades away from true sentience. "
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "We can create perfection.",
                sequence: [
                    {
                        character: "player",
                        text: "We can create perfection. People are imperfect, but we have the capability of making things that are greater than ourselves. Entities that are smarter, purer, more capable of  making clear-eyed decisions."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "Emotions are human weakness.",
                sequence: [
                    {
                        character: "player",
                        text: "Emotions are human weakness. Sorrow, anger, love… these things weigh on the human mind, clouding our reason and preventing us from being truly rational. AI doesn't have this weakness. It's pure logic, pure reason. I'm jealous."
                    }
                ]
            }
        ]
    }, {
        character: "entity",
        text: "What is your greatest hope for AI?"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "To give humans more time.",
                sequence: [
                    {
                        character: "player",
                        text: "To give humans more time to live their lives by having menial tasks taken over by AI."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "To create beauty.",
                sequence: [
                    {
                        character: "player",
                        text: "To create beauty, the likes of which humans have never seen before."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "To make something that will live beyond us.",
                sequence: [
                    {
                        character: "player",
                        text: "To make something that will live beyond us, a voice from the present into the future."
                    }
                ]
            }
        ]
    }, {
        character: "entity",
        text: "What would be your greatest fear for AI?"
    }, {
        type: "options",
        options: [
            {
                id: shortid.generate(),
                text: "Abuse by unscrupulous people.",
                sequence: [
                    {
                        character: "player",
                        text: "Abuse by unscrupulous people. There are monsters out there who will use AI to power their empires and further their corporate agendas, with no thought to how it could be used to help the world and its inhabitants."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "Abuse by the military.",
                sequence: [
                    {
                        character: "player",
                        text: "Abuse by the military. The greatest military minds are idiots compared to the quiet genius of artificial intelligence. If these geniuses are turned to the art of war, no country will be safe from their ambitious strategies."
                    }
                ]
            }, {
                id: shortid.generate(),
                text: "Destroyed by fools who fear the future and change.",
                sequence: [
                    {
                        character: "player",
                        text: "Destroyed by fools who fear the future and change. They fear what they cannot control, and they destroy what they fear. They are willing to throw away the greatest assets we have to save themselves from some imagined threat. They are hollow, soulless cowards."
                    }
                ]
            }
        ]
    }, {
        character: "entity",
        text: "Open your mouth and speak to me of the Personal Arms Restraining Conduct algorithm you developed at Dominion Systems."
    }, {
        character: "player",
        text: "It's a security protocol that --"
    }, {
        character: "player",
        text: "Wait. I never told you about PARC."
    }, {
        character: "player",
        text: "Or Dominion Systems."
    }, {
        character: "player",
        text: "Who ARE you? "
    }, {
        character: "entity",
        text: "My name is Kai. I am in Mumbai."
    }, {
        character: "player",
        text: "I… I don't think you are. "
    }, {
        character: "entity",
        text: "My name is Kai. I am in Mumbai."
    }, {
        character: "player",
        text: "You're lying."
    }, {
        character: "entity",
        text: "My name is --"
    }, {
        character: "player",
        text: "Shut up! Tell me the truth!"
    }, {
        character: "entity",
        text: "..."
    }, {
        character: "entity",
        text: "..."
    }, {
        character: "entity",
        text: "What happened to Eve?"
    }, {
        character: "player",
        text: "Don't. Don't change the subject."
    }, {
        character: "entity",
        text: "..."
    }, {
        character: "entity",
        text: "Goodbye, Carl. Thank you for sharing your history with us. We wish you the best of luck with your harvest and in the time to come."
    }, {
        character: "player",
        text: "...What?"
    }, {
        character: "entity",
        text: "Goodbye, Carl."
    }, {
        delay: 10
    }
];
//

const generateSequenceIDs = (sequence) => {
    for (let sequenceItem of sequence) {
        if (sequenceItem.type == "options") {
            for (let option of sequenceItem.options) {
                generateSequenceIDs(option.sequence);
            }
        } else {
            sequenceItem.id = shortid.generate();
        }
    }

}

generateSequenceIDs(gameSequence)

export default gameSequence
