    export function avatar(){
    var possible = ["001-cat.svg",
                    "002-horse.svg",
                    "003-gorilla.svg",
                    "004-snake.svg",
                    "005-toucan.svg",
                    "006-jaguar.svg",
                    "007-frog.svg",
                    "008-lion.svg",
                    "009-antilope.svg",
                    "010-elephant.svg",
                    "011-giraffe.svg",
                    "012-dog.svg",
                    "013-zebra.svg",
                    "014-koala.svg",
                    "015-coyote.svg",
                    "016-ostrich.svg",
                    "017-duck.svg",
                    "018-tasmaniandevil.svg",
                    "019-shark.svg",
                    "020-fish.svg",
                    "021-octopus.svg",
                    "022-seastar.svg",
                    "023-goldfish.svg",
                    "024-medusa.svg",
                    "025-crocodile.svg",
                    "026-turtle.svg",
                    "027-snake.svg",
                    "028-lizard.svg",
                    "029-chameleon.svg",
                    "030-bug.svg",
                    "031-bee.svg",
                    "032-butterfly.svg",
                    "033-ant.svg",
                    "034-parrot.svg",
                    "035-caterpillar.svg",
                    "036-spider.svg",
                    "037-stingray.svg",
                    "038-scorpion.svg",
                    "039-lobster.svg",
                    "040-crab.svg",
                    "041-reindeer.svg",
                    "042-bear.svg",
                    "043-wolf.svg",
                    "044-owl.svg",
                    "045-rabbit.svg",
                    "046-bunny.svg",
                    "047-cow.svg",
                    "048-pig.svg",
                    "049-rooster.svg",
                    "050-sheep.svg"];
    var LenNum = possible.length;
    var pos = Math.random() * (LenNum - 1) + 1;
    var Num = Math.trunc(pos);
    var final = possible[Num];
    return(final);
    console.log("Made using Aarav Garg's Avatar Generator. © 2020");
    }
