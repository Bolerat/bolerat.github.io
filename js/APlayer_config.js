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
            name: '热歌榜',
            artist: 'Artist',
            lrc: '/music/lrc/请倾听.lrc',
            cover: 'http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg',
            url: 'https://api.uomg.com/api/rand.music?sort=热歌榜&format=mp3'
                  },
		
		{
            name: '新歌榜',
            artist: 'Artist',
            lrc: '/music/lrc/请倾听.lrc',
            cover: 'http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg',
            url: 'https://api.uomg.com/api/rand.music?sort=新歌榜&format=mp3'
                  },
				  
	    {
            name: '飙升榜',
            artist: 'Artist',
            lrc: '/music/lrc/请倾听.lrc',
            cover: 'http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg',
            url: 'https://api.uomg.com/api/rand.music?sort=飙升榜&format=mp3'
                  },
				  
		{
            name: '抖音榜',
            artist: 'Artist',
            lrc: '/music/lrc/请倾听.lrc',
            cover: 'https://tvax2.sinaimg.cn/crop.0.0.690.690.180/006zpFxaly8gdi6j9n49zj30j60j6jrq.jpg?KID=imgbed,tva&Expires=1684321167&ssig=e%2F%2BRUJK4uA',
            url: 'https://api.uomg.com/api/rand.music?sort=抖音榜&format=mp3'
                  },
		
{
            name: '电音榜',
            artist: 'Artist',
            lrc: '/music/lrc/请倾听.lrc',
            cover: 'http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg',
            url: 'https://api.uomg.com/api/rand.music?sort=电音榜&format=mp3'
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