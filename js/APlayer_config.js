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
            cover: 'https://bolerat.github.io/assets/avatar.png',
            url: 'https://jx.618g.com/kuwo.php'
                  },
		 
        ]
		[
		{
            name: 'Believer',
            artist: 'Imagine Dragons',
            lrc: '/music/lrc/Believer.lrc',
            cover: 'https://bolerat.github.io/assets/avatar.png',
            url: '/music/song/Believer.mp3'
                  },
		 
        ]
		[
		{
            name: '勾指起誓',
            artist: '洛天依 / ilem',
            lrc: '/music/lrc/勾指起誓.lrc',
            cover: 'https://bolerat.github.io/assets/avatar.png',
            url: '/music/song/勾指起誓.mp3'
                  },
		 
        ]
		[
		{
            name: 'No Fear',
            artist: 'Greyson Chance',
            lrc: '/music/lrc/No Fear.lrc',
            cover: 'https://bolerat.github.io/assets/avatar.png',
            url: '/music/song/No Fear.mp3'
                  },
		 
        ]
		[
		{
            name: '愿',
            artist: '宫阁',
            lrc: '/music/lrc/愿.lrc',
            cover: 'https://bolerat.github.io/assets/avatar.png',
            url: '/music/song/愿.mp3'
                  },
		 
        ][
		{
            name: '东京不太热',
            artist: '洛天依',
            lrc: '/music/lrc/.lrc',
            cover: 'https://bolerat.github.io/assets/avatar.png',
            url: '/music/song/东京不太热.mp3'
                  },
		 
        ][
		{
            name: '欧若拉',
            artist: '夏苏烦',
            lrc: '/music/lrc/欧若拉.lrc',
            cover: 'https://bolerat.github.io/assets/avatar.png',
            url: '/music/song/欧若拉.mp3'
                  },
		 
        ]
});