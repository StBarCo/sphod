<!-- OpeningSentences -->

<script>
    import { litDay } from './litDay.js';
    import Scripture from './Scripture.svelte';
    import Rubric from './Rubric.svelte';
    // import {Button} from 'smelte';
    import { seasonTitle } from './season_title.js';

    function orThis(i) {
        return (i + 1) < ops[$litDay.service][thisSeason].length;
    }

    let thisSeason = $litDay.season;
    let buttonLabel = "At Any Time";
    

    function handleAtAnyTime() {
        if ($litDay.season != thisSeason) { 
            thisSeason = $litDay.season;
            buttonLabel = "At Any Time"; 
        }
        else { 
            thisSeason = "proper"; 
            buttonLabel = ($litDay.season === "proper") ? "At Any Time" : seasonTitle($litDay.season);
        }
    }

    let ops = {
          mp: {
              proper: [
                { text: "The Lord is in his holy temple; let all the earth keep silence before him."
                , ref: "Habakkuk 2:20"
                }
            ,   { text: "O send out your light and your truth, that they may lead me, and bring me to your holy hill, and to your dwelling."
                , ref: "Psalm 43:3"
                }
            ,   { text: "Thus says the One who is high and lifted up, who inhabits eternity, whose name is Holy: “I dwell in the high and holy place, and also with him who is of a contrite and lowly spirit, to revive the spirit of the lowly, and to revive the heart of the contrite.”"
                , ref: "Isaiah 57:15"
                }
            ,   { text: "The hour is coming, and is now here, when the true worshipers will worship the Father in spirit and truth, for the Father is seeking such people to worship him."
                , ref: "John 4:23"
                }
            ]
            , advent: [
                { text: "In the wilderness prepare the way of the Lord; make straight in the desert a highway for our God."
                , ref: "Isaiah 40:3"
                }
            ]
            , christmas: [
                { text: "Fear not, for behold, I bring you good news of great joy that will be for all the people. For unto you is born this day in the city of David a Savior, who is Christ the Lord."
                , ref: "Luke 2:10-11"
                }
            ]
            , epiphany: [
                { text: "From the rising of the sun to its setting my name will be great among the nations, and in every place incense will be offered to my name, and a pure offering. For my name will be great among the nations, says the Lord of hosts."
                , ref: "Malachi 1:11"
                }
            ]
            , lent: [
                { text: "Repent, for the kingdom of heaven is at hand."
                , ref: "Matthew 3:2"
                }
              ,
                { text: "Turn your face from my sins, and blot out all my misdeeds."
                , ref: "Psalm 51:9"
                }
              ,
                { text: "If anyone would come after me, let him deny himself and take up his cross and follow me."
                , ref: "Mark 8:34"
                }
            ]
            , holyweek: [
                { text: "Is it nothing to you, all you who pass by? Look and see if there is any sorrow like my sorrow, which was brought upon me, which the Lord inflicted on the day of his fierce anger."
                , ref: "Lamentations 1:12"
                }
            ]
            , easter: [
                { text: "If then you have been raised with Christ, seek the things that are above, where Christ is, seated at the right hand of God."
                , ref: "Colossians 3:1"
                }
            ]
            , ascension: [
                { text: "Since then we have a great high priest who has passed through the heavens, Jesus, the Son of God, let us hold fast our confession. Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need."
                , ref: "Hebrews 4:14, 16"
                }
            ]
            , pentecost: [
                { text: "You will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth."
                , ref: "Acts 1:8"
                }
            ]
            , trinity: [
                { text: "Holy, holy, holy, is the Lord God Almighty, who was and is and is to come!"
                , ref: "Revelation 4:8"
                }
            ]
            , thanksgiving: [
                { text: "Honor the Lord with your wealth and with the firstfruits of all your produce; then your barns will be filled with plenty, and your vats will be bursting with wine."
                , ref: "Proverbs 3:9-10"
                }
            ]
        }
        , ep: {
                proper: [
                    { text: "O worship the Lord in the beauty of holiness; let the whole earth stand in awe of him."
                    , ref: "Psalm 96:9"
                    }
                ]
            ,   advent: [
                    { text: "Therefore stay awake—for you do not know when the master of the house will come, in the evening, or at midnight, or when the rooster crows, or in the morning—lest he come suddenly and find you asleep."
                    , ref: "Mark 13:35-36"
                    }
                ]
            ,   christmas: [
                    { text: "Behold, the dwelling place of God is with man. He will dwell with them, and they will be his people, and God himself will be with them as their God. revelation 21:3"
                    , ref: "Mark 13:35-36"
                    }
                ]
            ,   epiphany: [
                    { text: "Nations shall come to your light, and kings to the brightness of your rising."
                    , ref: "Isaiah 60:3"
                    }
                ]
            ,   lent: [
                    { text: "If we say we have no sin, we deceive ourselves, and the truth is not in us. If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness."
                    , ref: "1 John 1:8-9"
                    }
                ,   { text: "For I acknowledge my faults, and my sin is ever before me."
                    , ref: "Daniel 9:9"
                    }
                ,   { text: "To the Lord our God belong mercy and forgiveness, for we have rebelled against him."
                    , ref: "Psalm 51:3"
                    }
                ]
            ,   holyweek: [
                    { text: "All we like sheep have gone astray; we have turned every one to his own way; and the Lord has laid on him the iniquity of us all."
                    , ref: "Isaiah 53:6"
                    }
                ]
            ,   easter: [
                    { text: "Thanks be to God, who gives us the victory through our Lord Jesus Christ."
                    , ref: "1 Corinthians 15:57"
                    }
                ]
            ,   ascension: [
                    { text: "For Christ has entered, not into holy places made with hands, which are copies of the true things, but into heaven itself, now to appear in the presence of God on our behalf."
                    , ref: "Hebrews 9:24"
                    }
                ]
            ,   pentecost: [
                    { text: "The Spirit and the Bride say, “Come.” And let the one who hears say, “Come.” And let the one who is thirsty come; let the one who desires take the water of life without price."
                    , ref: "Revelation 22:17"
                    }
                ,   { text: "There is a river whose streams make glad the city of God, the holy dwelling place of the Most High."
                    , ref: "Psalm 46:4"
                    }
                ]
            ,   trinity: [
                    { text: "Holy, holy, holy is the Lord of Hosts; the whole earth is full of his glory!"
                    , ref: "Isaiah 6:3"
                    }
                ]
            ,   thanksgiving: [
                    { text: "The Lord by wisdom founded the earth; by understanding he established the heavens; by his knowledge the deeps broke open, and the clouds drop down the dew."
                    , ref: "Proverbs 3:19-20"
                    }
                ]

            }
        }
</script>

<button on:click={handleAtAnyTime}>{buttonLabel}</button>
<h3>For {seasonTitle(thisSeason)}</h3>
<div>
    {#each ops[$litDay.service][thisSeason] as op, i }
        <Scripture text={op.text}, ref={op.ref} />
        {#if orThis(i) }
            <Rubric text={"or this"} />
        {/if}
    {/each}
</div>



