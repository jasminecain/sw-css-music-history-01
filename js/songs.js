var songs = [];
let newSongs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//Adding a song to the beginning
songs.unshift("Leave Out All the Rest > by Linkin Park on the album Minutes to Midnight");
console.log('new list of songs 1', songs);

//Adding a song to the end
songs.push("Immortals > by Fallout Boy on the album American Beauty");
console.log('new list of songs 2', songs);

// //Changing the symbols and removing characters
for (var i = 0; i < songs.length; i++) {
  newSongs += `<p>` + songs[i].replace(/>/g, '-').replace(/\*/g).replace(/@/g).replace(/\(/g).replace(/\!/) + `</p>`;
  // console.log(newSongs);
}

//printing strings to DOM
document.getElementById('song-content').innerHTML = newSongs;
console.log('newSongs', newSongs);

//=== My Songs ===//
// songs[songs.length] = "When You Beieve > by Mariah Carey on the album Number 1's";
// songs[songs.length] = "Girl on Fire > by Alicia Keys on the album Girl on Fire";
// songs[songs.length] = "Leave Out All the Rest > by Linkin Park on the album Minutes to Midnight";
// songs[songs.length] = "Glamourous Sky > by Mika Nakashima on the album The End";
// songs[songs.length] = "I My Me Mine > by 4Minute on the album I My Me Mine";
