app.controller('GalleryController', function () {
    console.log('Gallery Controller loaded');

    var self = this;

    self.greeting = "Home for the Holidays!";

    self.cards = [];

    createCards();

    self.toggleDescription = function (card) {
        card.showDescription = !card.showDescription;
        if(card.showDescription === true) {
            card.views++;
        }
    }

    self.addLike = function(card) {
        card.likes++;
    }

    function createCards() {
        self.cards.push(new Card('dog-family.png', 'South Dakota!'));
        self.cards.push(new Card('bw.png', 'filtering water surrounded by water'));
        self.cards.push(new Card('exercise.png', 'running in black and white'));
    }

});

function Card(path, description) {

    // create a card constructor
    this.path = path;
    this.description = description;
    this.likes = 0;
    this.showDescription = false;
    this.views = 0;
}