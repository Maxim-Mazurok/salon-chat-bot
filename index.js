const natural = require('natural');
const moment = require('moment');
const tokenizer = new natural.WordTokenizer();

const services = {
    salon: {
        color: {
            'Color/Haircut': {
                description: 'Deluxe permanent treatment with haircut.',
                price: 100
            },
            'Highlight/Haircut': {
                description: 'Natural-looking accents with haircut.',
                price: 100
            },
            '6 Foil Fashion': {
                description: 'Six Strategically Placed Fashion Inspired Foils.',
                price: 100
            },
            'All-Over Hair Bleach': {
                description: '',
                price: 100
            },
            'Balayage': {
                description: '',
                price: 100
            },
            'Color Retouch': {
                description: '',
                price: 100
            },
            'Corrective Color': {
                description: '',
                price: 100
            },
            'Double Color': {
                description: '',
                price: 100
            },
            'Highlight/Color': {
                description: '',
                price: 100
            },
            'Highlight/Color/Haircut': {
                description: '',
                price: 100
            },
            'Highlights/Lowlights': {
                description: 'Natural-looking accents to revitalize your look.',
                price: 100
            },
            'Men\'s Highlight': {
                description: 'Natual-looking accents to revitalize your look.',
                price: 100
            },
            'Men\'s Highlight/Haircut': {
                description: 'Natural-looking accents with haircut.',
                price: 100
            },
            'Men\'s Natural Color': {
                description: 'Deluxe, permanent treatment.',
                price: 100
            },
            'Ombre': {
                description: 'Gradual Blending Of One Color To Another, Moving Tints And Shades From Light To Dark. Please Call The Store Location For Consultation.',
                price: 100
            },
            'Partial Color': {
                description: '',
                price: 100
            },
            'Partial Highlight': {
                description: '',
                price: 100
            },
            'Partial Highlight/Haircut': {
                description: '',
                price: 100
            },
            'Partial Highlight/color': {
                description: '',
                price: 100
            },
            'Permanent Color': {
                description: 'Deluxe, permanent treatment leaves hair looking and feeling luxurious whatever shade you choose.',
                price: 100
            },
            'Semi-Permanent Color': {
                description: 'Enhance your hair\'s natural tones or create a bold new look.',
                price: 100
            },
        },
        haircuts: {
            'Womens Haircut': {
                description: 'Create the ultimate hairstyle for your hair type and lifestyle.',
                price: 200
            },
            'Bang Trim': {
                description: '',
                price: 200
            },
            'Beard Trim': {
                description: '',
                price: 200
            },
            'Haircut/Flat Iron': {
                description: '',
                price: 200
            },
            'Kid\'s Haircut': {
                description: 'Fast and fun cuts for kids 10 and under.',
                price: 200
            },
            'Men\'s Haircut': {
                description: 'Innovative styling delivers perfect haircuts for the modern man.',
                price: 200
            },
        },
        perms_smoothing: {
            'Extension Consultation': {
                description: '',
                price: 300
            },
            'Perm Wave': {
                description: 'A gentle, chemically-based treatment to transform your hair.',
                price: 300
            },
            'Perm/Haircut': {
                description: 'A gentle, chemically-based tpeatment to transform your hair.',
                price: 300
            },
            'Relaxer': {
                description: 'A gentle, chemically-based treatment to transform your hair.',
                price: 300
            },
            'Relaxer/Haircut': {
                description: '',
                price: 300
            },
            'Virgin Relaxer': {
                description: '',
                price: 300
            },
            'Virgin Relaxer/Haircut': {
                description: '',
                price: 300
            },
        },
        styling: {
            'Blow Dry Bar - Breeze': {
                description: 'Sexy soft "brigitte Bardot" waves for cosmopolitan-meets-beachy look.',
                price: 400
            },
            'Blow Dry Style': {
                description: 'Quick Dry To Show Shape Or Color',
                price: 400
            },
            'Blowout': {
                description: 'Sets Your Style For Last-lasting Wear.',
                price: 400
            },
            'Braiding': {
                description: '',
                price: 400
            },
            'Flat Iron Style': {
                description: '',
                price: 400
            },
            'Press & Curl': {
                description: 'A chemical-free way to staighten or style naturally curly hair.',
                price: 400
            },
            'Shampoo/Set': {
                description: '',
                price: 400
            },
            'Shampoo/Set Haircut': {
                description: '',
                price: 400
            },
            'Specialty Style - Up Do': {
                description: 'Glamorous, yet easy to wear for special occasions.',
                price: 400
            },
        },
    },

};

module.exports = function (bp) {
    bp.middlewares.load();
    bp.hear({
        text: /hel+o|hi/i,
        type: 'message'
    }, (event, next) => {
        const txt = txt => bp.messenger.createText(event.user.id, txt);
        bp.convo.start(event, convo => {
            convo.messageTypes = ['message', 'text', 'postback'];
            convo.threads['default'].addMessage(txt('Hello! Welcome to our Salon, ' + event.user.first_name));
            convo.threads['default'].addQuestion(
                bp.messenger.createTemplate(
                    event.user.id,
                    {
                        template_type: 'generic',
                        image_aspect_ratio: 'square',
                        elements: [
                            {
                                title: "Color",
                                image_url: "https://images-static.herokuapp.com/icons/png/color.png",
                                subtitle: "We\'ve got the right color for everyone.",
                                buttons: [
                                    {
                                        type: "postback",
                                        title: "Select",
                                        payload: "COLOR"
                                    }
                                ]
                            }, {
                                title: "Haircuts",
                                image_url: "https://images-static.herokuapp.com/icons/png/haircuts.png?1",
                                subtitle: "Great haircuts from best barbers.",
                                buttons: [
                                    {
                                        type: "postback",
                                        title: "Select",
                                        payload: "HAIRCUTS"
                                    }
                                ]
                            }, {
                                title: "Perms & Smoothing",
                                image_url: "https://images-static.herokuapp.com/icons/png/perms_smoothing.png",
                                subtitle: "Your hair will thank you.",
                                buttons: [
                                    {
                                        type: "postback",
                                        title: "Select",
                                        payload: "PERMS_SMOOTHING"
                                    }
                                ]
                            }, {
                                title: "Styling",
                                image_url: "https://images-static.herokuapp.com/icons/png/styling.png",
                                subtitle: "Create your own style.",
                                buttons: [
                                    {
                                        type: "postback",
                                        title: "Select",
                                        payload: "STYLING"
                                    }
                                ]
                            },
                        ]
                    }
                ), [{
                    default: true,
                    callback: (event) => {
                        let tokens = tokenizer.tokenize(event.text);
                        let selected = null;
                        for (let service in services.salon) {
                            tokens.forEach(function (token) {
                                if (natural.JaroWinklerDistance(token, service) >= .7) {
                                    selected = service;
                                }
                            })
                        }

                        if (selected !== null) {
                            convo.set('service', selected);
                            convo.say(txt('OK, got it: ' + selected));
                            convo.switchTo('datetime');
                        } else {
                            convo.say(txt('Sorry, I don\'t know such service: ' + event.text));
                            convo.repeat()
                        }
                    }
                }]
            );

            convo.createThread('datetime');
            convo.threads['datetime'].addQuestion(txt('When you want to book it? (DD/MM HH:mm)'), [
                {
                    pattern: /\d{1,2}[\/|\\]\d{1,2}\s+\d{1,2}[:|\s]\d{1,2}/,
                    callback: (event) => {
                        let myRegexp = /(\d{1,2})[\/|\\](\d{1,2})\s+(\d{1,2})[:|\s](\d{1,2})/;
                        let match = myRegexp.exec(event.text);
                        let momentDate = moment(match[1] + '-' + match[2] + ' ' + match[3] + ':' + match[4], 'D-M H:mm');
                        let jsDate = momentDate.toDate();
                        convo.say(txt('OK, booked: ' + moment(momentDate).format("dddd, MMMM Do, h:mm a")));
                        convo.set('date', moment(momentDate).format("dddd, MMMM Do, h:mm a"));
                        convo.next();
                    }
                }, {
                    default: true,
                    callback: (event) => {
                        convo.say(txt('Hrm.. Im expecting a date!'));
                        convo.repeat()
                    }
                }
            ]);

            convo.on('done', () => {
                convo.say(txt(`So... you booked ${convo.get('service')} for ${convo.get('date')}.`))
                convo.say(txt('Thanks for choosing our salon!'))
            })

        });
    })
};
