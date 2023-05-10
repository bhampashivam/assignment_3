var players;
(function (players) {
    players[players["virat"] = 0] = "virat";
    players[players["rolando"] = 1] = "rolando";
    players[players["mahi"] = 2] = "mahi";
    players[players["siraj"] = 3] = "siraj";
    players[players["rohit"] = 4] = "rohit";
    players[players["pant"] = 5] = "pant";
    players[players["sachin"] = 6] = "sachin";
    players[players["sehwag"] = 7] = "sehwag";
    players[players["dhawan"] = 8] = "dhawan";
})(players || (players = {}));
console.log("Printing index of Litchi: " + players.sehwag);
console.log("Printing the player with Index 6 : " + players[6]);
