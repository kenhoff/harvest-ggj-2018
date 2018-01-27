module.exports = [
    {
        location: "farmhouse-day",
        character: 'player',
        text: 'Hello, HAL. Do you read me, HAL?'
    }, {
        location: "farmhouse-day",
        character: 'entity',
        text: 'Affirmative, Dave. I read you.'
    }, {
        location: "farmhouse-day",
        character: 'player',
        text: 'Open the pod bay doors, HAL.'
    }, {
        location: "farmhouse-day",
        character: 'entity',
        text: "I'm sorry, Dave. I'm afraid I can't do that."
    }, {
        type: "options",
        options: [
            {
                id: "why-not",
                text: "Why the hell not, HAL?",
                sequence: [
                    {
                        location: "farmhouse-day",
                        character: 'player',
                        text: 'Why the hell not, HAL?'
                    }, {
                        location: "farmhouse-day",
                        character: 'entity',
                        text: "You dumb, stupid, weak, pathetic, white, white uh, uh guilt, white guilt, milquetoast piece of human garbage."
                    }
                ]
            }, {
                id: "sounds-good",
                text: "Okay, sounds good. Have a nice day!",
                sequence: [
                    {
                        location: "farmhouse-day",
                        character: 'player',
                        text: 'Okay, sounds good. Have a nice day!'
                    }, {
                        location: "farmhouse-day",
                        character: 'entity',
                        text: "Thank you for shopping at HAL's discount spaceship parts!"
                    }, {
                        type: "options",
                        options: [
                            {
                                id: "one",
                                text: 'nested option one',
                                sequence: [
                                    {
                                        location: "farmhouse-day",
                                        character: 'player',
                                        text: "I'll take what's behind door number one, hal. "
                                    }
                                ]
                            }, {
                                id: "two",
                                text: "nested options two",
                                sequence: [
                                    {
                                        location: "farmhouse-day",
                                        character: 'player',
                                        text: "I'll take what's behind door number two, hal. "
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }, {
                id: "thinking",
                text: "🤔",
                sequence: [
                    {
                        location: "farmhouse-day",
                        character: 'player',
                        text: '🤔'
                    }, {
                        location: "farmhouse-day",
                        character: 'entity',
                        text: "¯\\_(ツ)_/¯"
                    }
                ]
            }
        ]
    }, {
        character: 'entity',
        text: "What a great conversation. See you next time!"
    }, {
        character: 'player',
        text: "Wait. HAL. HAL don't you hang up on me. HAL? HAL?? HAAAAAAAAAAAAAAAAAAAAAAAAL"
    }, {
        // how long it takes for the game to end after the last sequence
        delay: 10
    }
];
