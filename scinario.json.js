var scinario_data = [
    {
        "id": 0,
        "msg": "初めまして！<br>ポケモンマスター羊の世界へようこそ！",
        "img": "hituji2.jpg",
        "choice": [
            {
                "goto": 1,
                "text": "次へ"
            }
        ]
    },
    {
        "id": 1,
        "msg": "まずは君の名前を教えてくれ",
        "img": "a.jpeg",
        "choice": [
            {
                "goto": 2,
                "text": "次へ"
            }
        ]
    },
    {
        "id": 2,
        "msg": "なるほど!player_nameというんだな！次に初めてふれる羊の名前を教えてくれ!",
        "img": "a.jpeg",
        "choice": [
            {
                "goto": 3,
                "text": "次へ"
            }
        ]
    },
    {
        "id": 3,
        "msg": "これから君の冒険の始まりだ！<br>それでは, 夢と冒険と！<br>ポケモンの世界へ！",
        "img": "a.jpeg",
        "choice": [
            {
                "goto": 4,
                "text": "次へ"
            }
        ]
    },
    {
        "id": 4,
        "msg": "4月1週目<br><br>snsで羊を飼育することが流行する。その理由は、人によって育成した子羊が変わるからだ。なぜこのような話をするかというと、今日山の麓で羊を拾ったからだ。",
        "img": "首.jpeg",
        "choice": [
            {
                "goto": 5,
                "text": "次へ"
            }
        ]
    },
    {
        "id": 5,
        "msg": "くっちーは",
        "img": "首.jpeg",
        "choice": [
            {
                "goto": 6,
                "text": "私が近づくとひどく怯えて警戒していた。多分、前の飼い主の影響だろう。"
            },
            {
                "goto": 6,
                "text": "私が近づくと甘えてきた。人懐っこい性格のようだ。多分、前の飼い主の影響だろう。"
            },
            {
                "goto": 6,
                "text": "私が近づいても興味を示さなかった。大人しい性格のようだ。多分、前の飼い主の影響だろう。"
            }
        ]
    },
    {
        "id": 6,
        "msg": "とりあえず、家に連れて帰って面倒を見てみる事にした。くっちーには動物病院で渡された餌とミルクを与えることにした。",
        "img": "首.jpeg",
        "choice": [
            {
                "goto": 7,
                "text": "草"
            },
            {
                "goto": 8,
                "text": "肉"
            },
            {
                "goto": 7,
                "text": "飼料"
            }
        ]
    },
    {
        "id": 7,
        "msg": "くっちーは美味しそうに餌を食べている",
        "img": "首.jpeg",
        "choice": [
            {
                "goto": 9,
                "text": "次へ"
            }
        ]
    },
    {
        "id": 8,
        "msg": "くっちーは嫌そうに餌を食べている",
        "img": "首.jpeg",
        "choice": [
            {
                "goto": 9,
                "text": "次へ"
            }
        ]
    },
    {
        "id": 9,
        "msg": "4月3週目<br>くっちーは二週間たった今、元気を取り戻したようだ。くっちーは",
        "img": "首.jpeg",
        "choice": [
            {
                "goto": 10,
                "text": "まだ私に警戒しているようだ。無理もない。まだ、一緒に住み始めて二週間だ。これから仲良くなっていこう。"
            }
        ]
    },
    {
        "id": 10,
        "msg": "今日はくっちーを散歩に連れて行った。まずは散歩する道を覚えて欲しいし、他の人に会って怯えて欲しく無いので、散歩は夜に行った。",
        "img": "首.jpeg",
        "choice": [
            {
                "goto":4,
                "text":"次へ"
            }
        ]
    }
]