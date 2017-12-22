describe("Dummy test", function() {
    it("bazingaApp should be defined on window load", function() {
        expect(bazingaApp).toBeDefined();
        // expect(typeofBazingaApp).toEqual(Object);
    });
});

// describe("Player", function () {
//     var player;
//     var song;

//     // beforeEach(function () {
//     //     player = new Player();
//     //     song = new Song();
//     // });

//     it("should be able to play a Song", function () {
//         player.play(song);
//         expect(player.currentlyPlayingSong).toEqual(song);

//         //demonstrates use of custom matcher
//         expect(player).toBePlaying(song);
//     });
//     it("should be loaded as window property", function() {
//         expect(BazingaApp.)toBeDefined();
//     });
// })