export const cardAclubs = { value: 1, display: 'A', suit: 'clubs', flipped: false };
export const card2clubs = { value: 2, display: '2', suit: 'clubs', flipped: false };
export const card3clubs = { value: 3, display: '3', suit: 'clubs', flipped: false };
export const card4clubs = { value: 4, display: '4', suit: 'clubs', flipped: false };
export const card5clubs = { value: 5, display: '5', suit: 'clubs', flipped: false };
export const card6clubs = { value: 6, display: '6', suit: 'clubs', flipped: false };
export const card7clubs = { value: 7, display: '7', suit: 'clubs', flipped: false };
export const card8clubs = { value: 8, display: '8', suit: 'clubs', flipped: false };
export const card9clubs = { value: 9, display: '9', suit: 'clubs', flipped: false };
export const card10clubs = { value: 10, display: '10', suit: 'clubs', flipped: false };
export const cardJclubs = { value: 11, display: 'J', suit: 'clubs', flipped: false };
export const cardQclubs = { value: 12, display: 'Q', suit: 'clubs', flipped: false };
export const cardKclubs = { value: 13, display: 'K', suit: 'clubs', flipped: false };
export const cardAhearts = { value: 1, display: 'A', suit: 'hearts', flipped: false };
export const card2hearts = { value: 2, display: '2', suit: 'hearts', flipped: false };
export const card3hearts = { value: 3, display: '3', suit: 'hearts', flipped: false };
export const card4hearts = { value: 4, display: '4', suit: 'hearts', flipped: false };
export const card5hearts = { value: 5, display: '5', suit: 'hearts', flipped: false };
export const card6hearts = { value: 6, display: '6', suit: 'hearts', flipped: false };
export const card7hearts = { value: 7, display: '7', suit: 'hearts', flipped: false };
export const card8hearts = { value: 8, display: '8', suit: 'hearts', flipped: false };
export const card9hearts = { value: 9, display: '9', suit: 'hearts', flipped: false };
export const card10hearts = { value: 10, display: '10', suit: 'hearts', flipped: false };
export const cardJhearts = { value: 11, display: 'J', suit: 'hearts', flipped: false };
export const cardQhearts = { value: 12, display: 'Q', suit: 'hearts', flipped: false };
export const cardKhearts = { value: 13, display: 'K', suit: 'hearts', flipped: false };
export const cardAspades = { value: 1, display: 'A', suit: 'spades', flipped: false };
export const card2spades = { value: 2, display: '2', suit: 'spades', flipped: false };
export const card3spades = { value: 3, display: '3', suit: 'spades', flipped: false };
export const card4spades = { value: 4, display: '4', suit: 'spades', flipped: false };
export const card5spades = { value: 5, display: '5', suit: 'spades', flipped: false };
export const card6spades = { value: 6, display: '6', suit: 'spades', flipped: false };
export const card7spades = { value: 7, display: '7', suit: 'spades', flipped: false };
export const card8spades = { value: 8, display: '8', suit: 'spades', flipped: false };
export const card9spades = { value: 9, display: '9', suit: 'spades', flipped: false };
export const card10spades = { value: 10, display: '10', suit: 'spades', flipped: false };
export const cardJspades = { value: 11, display: 'J', suit: 'spades', flipped: false };
export const cardQspades = { value: 12, display: 'Q', suit: 'spades', flipped: false };
export const cardKspades = { value: 13, display: 'K', suit: 'spades', flipped: false };
export const cardAdiamonds = { value: 1, display: 'A', suit: 'diamonds', flipped: false };
export const card2diamonds = { value: 2, display: '2', suit: 'diamonds', flipped: false };
export const card3diamonds = { value: 3, display: '3', suit: 'diamonds', flipped: false };
export const card4diamonds = { value: 4, display: '4', suit: 'diamonds', flipped: false };
export const card5diamonds = { value: 5, display: '5', suit: 'diamonds', flipped: false };
export const card6diamonds = { value: 6, display: '6', suit: 'diamonds', flipped: false };
export const card7diamonds = { value: 7, display: '7', suit: 'diamonds', flipped: false };
export const card8diamonds = { value: 8, display: '8', suit: 'diamonds', flipped: false };
export const card9diamonds = { value: 9, display: '9', suit: 'diamonds', flipped: false };
export const card10diamonds = {
    value: 10,
    display: '10',
    suit: 'diamonds',
    flipped: false
};
export const cardJdiamonds = {
    value: 11,
    display: 'J',
    suit: 'diamonds',
    flipped: false
};
export const cardQdiamonds = {
    value: 12,
    display: 'Q',
    suit: 'diamonds',
    flipped: false
};
export const cardKdiamonds = {
    value: 13,
    display: 'K',
    suit: 'diamonds',
    flipped: false
};
export const cards = [
    cardAclubs,
    card2clubs,
    card3clubs,
    card4clubs,
    card5clubs,
    card6clubs,
    card7clubs,
    card8clubs,
    card9clubs,
    card10clubs,
    cardJclubs,
    cardQclubs,
    cardKclubs,
    cardAhearts,
    card2hearts,
    card3hearts,
    card4hearts,
    card5hearts,
    card6hearts,
    card7hearts,
    card8hearts,
    card9hearts,
    card10hearts,
    cardJhearts,
    cardQhearts,
    cardKhearts,
    cardAspades,
    card2spades,
    card3spades,
    card4spades,
    card5spades,
    card6spades,
    card7spades,
    card8spades,
    card9spades,
    card10spades,
    cardJspades,
    cardQspades,
    cardKspades,
    cardAdiamonds,
    card2diamonds,
    card3diamonds,
    card4diamonds,
    card5diamonds,
    card6diamonds,
    card7diamonds,
    card8diamonds,
    card9diamonds,
    card10diamonds,
    cardJdiamonds,
    cardQdiamonds,
    cardKdiamonds
];
export function shuffle(input) {
    let cards = input.slice(0);
    let currentIndex = cards.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
    return cards;
}
export function notNextToEachOther(cards) {
    for (var i = 0; i < cards.length - 1; i++) {
        if (cards[i].value === cards[i + 1].value) {
            return false;
        }
    }
    return true;
}
export function getShuffledCardsForGame(input) {
    let cards = shuffle(input.slice(0));
    while (!notNextToEachOther(cards)) {
        cards = shuffle(input.slice(0));
    }
    return cards;
}
//# sourceMappingURL=index.js.map