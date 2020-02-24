const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
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
            lrc: '',
            cover: 'https://bolerat.github.io/assets/avatar.png',
            url: 'https://jx.618g.com/kuwo.php'
                  },
		 
        ]
});