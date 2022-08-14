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
            name: 'Heading Home',
            artist: 'AW',
            lrc: '/music/lrc/HeadingHome.lrc',
            cover: '/assets/avatar.png',
            url: '/music/song/HeadingHome.mp3'
                  },
		 

		{
            name: 'aimai',
            artist: 'aimai',
            lrc: '/music/lrc/aimai.lrc',
            cover: '/assets/avatar.png',
            url: '/music/song/aimai.mp3'
                  },
		 
        
        
		
		{
            name: 'Stronger',
            artist: 'stronger',
            lrc: '/music/lrc/stronger.lrc',
            cover: '/assets/avatar.png',
            url: '/music/song/stronger.mp3'
                  },
		 
      
		
		{
            name: 'Hope not',
            artist: 'black pink',
            lrc: '/music/lrc/HopeNot.lrc',
            cover: '/assets/avatar.png',
            url: '/music/song/HopeNot.mp3'
                  },
		 
        
		{
            name: 'Blame',
            artist: 'Blame',
            lrc: '/music/lrc/Blame.lrc',
            cover: '/assets/avatar.png',
            url: '/music/song/Blame.mp3'
                  },
		 
		 
        ]
});