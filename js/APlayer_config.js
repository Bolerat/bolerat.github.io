const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    lrcType: 3,
    mutex: true,
    listFolded: false,

    audio: [
		{
            name: '随机',
            artist: 'Artist',
            lrc: '/music/lrc/请倾听.lrc',
            cover: 'http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg',
            url: 'https://api.uomg.com/api/rand.music?sort=热歌榜&format=mp3'
                  },
		 
        /*
		
		{
            name: 'aimai',
            artist: 'aimai',
            lrc: '/music/lrc/aimai.lrc',
            cover: '/assets/song.png',
            url: '/music/song/aimai.mp3'
                  },
		 
        
		
		{
            name: 'Heading Home',
            artist: 'AW',
            lrc: '/music/lrc/HeadingHome.lrc',
            cover: '/assets/song.png',
            url: '/music/song/HeadingHome.mp3'
                  },
		 
        
		
		{
            name: 'Stronger',
            artist: 'stronger',
            lrc: '/music/lrc/stronger.lrc',
            cover: '/assets/song.png',
            url: '/music/song/stronger.mp3'
                  },
		 
        
		
		{
            name: 'Hope not',
            artist: 'black pink',
            lrc: '/music/lrc/HopeNot.lrc',
            cover: '/assets/song.png',
            url: '/music/song/HopeNot.mp3'
                  },
		 
        
		{
            name: 'Blame',
            artist: 'Blame',
            lrc: '/music/lrc/Blame.lrc',
            cover: '/assets/song.png',
            url: '/music/song/Blame.mp3'
                  },
		 
		 */
        ]
});