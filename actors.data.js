console.log("Actor Data Loaded");

const actorsus = [
   {
        id:"1",
        name:"Brandon Anderson",
        role:"Versatile",
        photo:"https://images03-buddies.gammacdn.com/actors/62046/62046_500x750.jpg",  
			videos: function(){
				a = videosus.filter(x => x.actors.includes(this.name)); 
				return a;
			} 
		},
    {
        id:"2",
        name:"Damien White",
        role:"Top",
        photo:"https://images03-buddies.gammacdn.com/actors/63194/63194_200x300.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
    {
        id: "3",
        name: "Asher Haynes",
        role: "Versatile",
        photo: "https://cdn.helixstudios.com/img/1000h/media/stills/hx132_scene40_002.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
    {
        id: "4",
        name: "Ethan Tate",
        role: "Versatile",
        photo: "https://cdn.helixstudios.com/img/600x700/media/headshots/ethan-tate.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
    {
        id: "5",
        name: "Sammy Trazuka",
        role: "Top",
        photo: "https://cdn.helixstudios.com/img/600x700/media/headshots/sammy-trakuza.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
    {
        id: "6",
        name: "Josh Cavalin",
        role: "Bottom",
        photo: "https://cdn.helixstudios.com/img/600x700/media/headshots/josh-cavalin.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
    {
        id: "7",
        name: "Adam Reid",
        role: "Versatile",
        photo: "https://cdn.helixstudios.com/img/600x700/media/headshots/adam-reid.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
    {
        id: "8",
        name: "Travis Stevens",
        role: "Versatile",
        photo: "https://cdn.helixstudios.com/img/1000h/media/stills/hx130_scene98_003.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
    {
        id: "9",
        name: "Audrey Breeze",
        role: "Top",
        photo: "https://cdn.helixstudios.com/img/600x700/media/headshots/audrey-breeze.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
    {
        id: "10",
        name: "James Lewis",
        role: "Bottom",
        photo: "https://cdn.helixstudios.com/img/600x700/media/headshots/james-lewis.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
    {
        id: "11",
        name: "Garrett Kinsley",
        role: "Versatile",
        photo: "https://cdn.helixstudios.com/img/1000h/media/stills/hx128_scene45_003.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
    {
        id: "12",
        name: "Jacob Hansen",
        role: "Bottom",
        photo: "https://cdn.helixstudios.com/img/250h/media/stills/hx131_scene1_012.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
    {
        id: "13",
         name: "Noah Bentley",
         role: "Versatile",
        photo: "https://cdn.helixstudios.com/img/600x700/media/headshots/noah-bentley.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
     {
 id: "14",
 name: "Simon Best",
 role: "Bottom",
 photo: "https://cdn.helixstudios.com/img/600x700/media/headshots/simon-best.jpg",
 videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
     {
 id: "15",
 name: "Calvin Steel",
 role: "Top",
 photo: "https://cdn.helixstudios.com/img/600x700/media/headshots/calvin-steel.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
     {
 id: "16",
 name: "Edward Terrant",
 role: "Versatile",
 photo: "https://image-service-ht.project1content.com/018/8aa/2d7/2f4/432/884/f8f/c8f/1a5/30a/1d/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
     {
 id: "17",
 name: "Ryan Jacobs",
 role: "Bottom",
 photo: "https://image-service-ht.project1content.com/18c/983/959/289/438/cbf/646/028/0dc/746/4c/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
     {
 id: "18",
 name: "Chance (Corbin Fisher)",
 role: "Unknown",
 photo: "https://i.imgur.com/7J6nNKt.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "19",
 name: "Felix Harris",
 role: "Top",
 photo: "https://cdn.helixstudios.com/img/600x700/media/headshots/felix-harris.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "20",
 name: "Neil Scott",
 role: "Unknown",
 photo: "https://i.imgur.com/N0LQLOR.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "21",
 name: "Sly Conan",
 role: "Unknown",
 photo: "https://i.imgur.com/tVqoxZi.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "22",
 name: "Francis Gerard",
 role: "Bottom",
 photo: "https://i.imgur.com/7VxUL7J.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "23",
 name: "Dave Andrew",
 role: "Top",
 photo: "https://i.imgur.com/n8xvJbS.jpeg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "24",
 name: "Antu Burghos",
 role: "Bottom",
 photo: "https://i.imgur.com/ewZ8D3N.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "25",
 name: "Gil Donovan",
 role: "Top",
 photo: "https://i.imgur.com/eFwiwKS.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "26",
 name: "Jack Moon",
 role: "Unknown",
 photo: "https://i.imgur.com/Dx0kHDc.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "27",
 name: "Tommy Ameal",
 role: "Versatile",
 photo: "https://i.imgur.com/a8MlL1T.jpeg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "28",
 name: "Alejandro Dumas",
 role: "Bottom",
 photo: "https://i.imgur.com/tfD5dnd.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "29",
 name: "Rocco Steele",
 role: "Top",
 photo: "https://i.imgur.com/SiTAZl6.jpeg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "30",
 name: "Jake Porter",
 role: "Versatile",
 photo: "https://images02-buddies.gammacdn.com/actors/61250/61250_200x300.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "31",
 name: "Leeroy Jones",
 role: "Versatile",
 photo: "https://images04-buddies.gammacdn.com/actors/61535/61535_200x300.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "32",
 name: "Gabriel Nogueira",
 role: "Unknown",
 photo: "https://www.waybig.com/media/misc/model11397.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "33",
 name: "Devin Franco",
 role: "Versatile",
 photo: "https://cdn-w.lucasentertainment.com/lucasentertainment/content/models/Devin_Franco/Devin_Franco_26_October_2016.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "34",
 name: "Jake Genesis",
 role: "Versatile",
 photo: "https://t9m7r3c6.ssl.hwcdn.net/content/contentthumbs/10/20/1020-set-1x.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "35",
 name: "Isaac Jones",
 role: "Versatile",
 photo: "https://t9m7r3c6.ssl.hwcdn.net/content/contentthumbs/06/60/660-set-1x.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "36",
 name: "Morgan Black",
 role: "Versatile",
 photo: "https://t9m7r3c6.ssl.hwcdn.net/content/contentthumbs/10/18/1018-set-1x.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "37",
 name: "Samuel Colt",
 role: "Versatile",
 photo: "https://t9m7r3c6.ssl.hwcdn.net/content/contentthumbs/04/35/435-set-1x.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "38",
 name: "JJ Knight",
 role: "Versatile Top",
 photo: "https://image-service-ht.project1content.com/dba/a8d/8bf/480/46e/dbc/232/49f/726/bda/4d/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "39",
 name: "Michael DelRay",
 role: "Versatile Top",
 photo: "https://image-service-ht.project1content.com/175/655/0d4/e46/484/6ae/ca5/b8e/859/55f/ff/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "40",
 name: "Chris Damned",
 role: "Top",
 photo: "https://image-service-ht.project1content.com/44d/5d2/d0b/f8b/47e/3a7/3e7/d3d/7ea/416/25/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "41",
 name: "Nate Grimes",
 role: "Versatile",
 photo: "https://image-service-ht.project1content.com/604/444/e4e/d19/42a/bad/74f/9a7/6c0/fc6/bf/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "42",
 name: "Markie More",
 role: "Top",
 photo: "https://images01-buddies.gammacdn.com/actors/32875/32875_200x300.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "43",
 name: "Johnny Riley",
 role: "Versatile",
 photo: "https://images04-buddies.gammacdn.com/actors/38266/38266_200x300.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "44",
 name: "Edward Fox",
 role: "Top",
 photo: "https://assets.timtales.com/_processed_/f/e/csm_EdwardFox-19_8418162949.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "45",
 name: "Phoenix (TimTales)",
 role: "Bottom",
 photo: "http://www.coolgaymovies.com/images/pornstars/10877.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "46",
 name: "Gabriel Clark",
 role: "Versatile Top",
 photo: "https://image-service-ht.project1content.com/dbf/c6c/4e6/dee/47d/c90/443/84a/592/dba/06/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "47",
 name: "Thyle Knoxx",
 role: "Versatile Top",
 photo: "https://image-service-ht.project1content.com/eec/096/88c/537/4a0/09e/af8/b92/74a/382/aa/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "48",
 name: "Rafael Alencar",
 role: "Versatile Top",
 photo: "https://image-service-ht.project1content.com/edf/14e/fae/366/43f/0b2/7a5/2ff/7c1/0ac/c2/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "49",
 name: "Tino Cortez",
 role: "Bottom",
 photo: "https://image-service-ht.project1content.com/ac1/b80/0ed/c94/46b/184/e84/3c9/853/fc0/dd/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "50",
 name: "Elliott Blue",
 role: "Versatile Bottom",
 photo: "https://image-service-ht.project1content.com/fe4/787/34c/31c/460/eac/3ba/8c4/f33/32d/8d/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "51",
 name: "Brad Gray",
 role: "Versatile Bottom",
 photo: "https://image-service-ht.project1content.com/2c3/c40/646/1a4/45c/38f/7f3/b6d/4bd/9bb/f6/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "52",
 name: "William Seed",
 role: "Versatile Top",
 photo: "https://image-service-ht.project1content.com/817/753/6a0/083/478/9bd/fd6/aed/6dd/b64/e4/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "53",
 name: "Kit Cohen",
 role: "Versatile Bottom",
 photo: "https://image-service-ht.project1content.com/e5a/9a1/028/950/414/6b3/b7f/fb9/481/541/bd/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "54",
 name: "Alexy Taylor",
 role: "Versatile",
 photo: "https://image-service-ht.project1content.com/ee7/f1e/e84/e7a/4a9/f90/6b3/9d0/82c/d6c/04/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "55",
 name: "Derek",
 role: "Versatile",
 photo: "https://image-service-ht.project1content.com/615/6da/efb/42c/4d4/69b/f46/43a/a56/d32/51/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "56",
 name: "Dean Stuart",
 role: "Top",
 photo: "https://image-service-ht.project1content.com/053/6f0/f89/4a6/497/0a2/2f1/316/0e0/5fe/1f/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "57",
 name: "Zack Hunter",
 role: "Versatile Bottom",
 photo: "https://image-service-ht.project1content.com/a96/9d1/46b/bea/40d/6ac/819/f92/87e/a66/44/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "58",
 name: "Diego Sans",
 role: "Top",
 photo: "https://image-service-ht.project1content.com/e29/cd4/6fd/887/40c/58d/030/d1a/479/d46/f9/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "59",
 name: "Tommy Regan",
 role: "Bottom",
 photo: "https://image-service-ht.project1content.com/3fc/700/c7b/0de/4be/98e/ee2/cb4/f80/ef6/c1/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "60",
 name: "Jack King",
 role: "Versatile",
 photo: "https://image-service-ht.project1content.com/24f/6b0/94f/b65/4a4/98c/790/515/0d0/2a3/79/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "61",
 name: "Alex Mecum",
 role: "Versatile",
 photo: "https://image-service-ht.project1content.com/19c/115/899/65a/4e5/884/e25/ad0/061/be6/7f/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "62",
 name: "Chris Harder",
 role: "Versatile Bottom",
 photo: "https://image-service-ht.project1content.com/6b9/990/087/317/41f/7a9/1a8/d21/a5b/8e2/b5/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "63",
 name: "Erik Andrews",
 role: "Bottom",
 photo: "https://image-service-ht.project1content.com/838/7ba/aae/167/44f/3ba/cf3/8af/d21/21f/23/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "64",
 name: "Johnny Rapid",
 role: "Versatile",
 photo: "https://image-service-ht.project1content.com/e15/f34/27f/c4d/439/c86/477/604/ecf/5a6/95/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "65",
 name: "Vance Crawford",
 role: "Versatile",
 photo: "https://image-service-ht.project1content.com/97a/c7b/e6f/93c/4fb/a8d/a77/cec/a11/70b/12/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "66",
 name: "Tom Faulk",
 role: "Versatile",
 photo: "https://i.imgur.com/AFI2EbF.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
 {
 id: "67",
 name: "Haigen Sence",
 role: "Top",
 photo: "https://image-service-ht.project1content.com/d30/9f8/c84/20d/41e/0ab/e7d/85f/4b0/42f/8d/model/profile_001.jpg",  videos: function(){a = videosus.filter(x => x.actors.includes(this.name)); return a;} },
	
];