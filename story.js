// 《不愿意》完整剧本 — 悬疑+潮汕元素扩展版
var STORY = {

'prologue': {
  scene: '序', location: '', bg: 'bg-night', img: 'img_night.png',
  lines: [
    { type: 'narration', text: '你已经很多年没有梦见那间老厝了。' },
    { type: 'narration', text: '可是今晚，雨声又把你带回去了。' },
    { type: 'narration', text: '梦里有石板路，有天井，有一扇从里面锁着的门。' },
    { type: 'narration', text: '还有一个人——' },
    { type: 'narration', text: '你从来没见过她的脸。' },
    { type: 'narration', text: '但她说过的那句话，你一直记得。' },
    { type: 'divider', text: '\u00b7 \u00b7 \u00b7' }
  ],
  choices: [{ label: '继续', next: 'ch1_arrive' }]
},

'ch1_arrive': {
  scene: '第一章 \u00b7 到厝', location: '潮汕某镇 \u00b7 雨天 \u00b7 下午', bg: 'bg-rain', img: 'img_rain.png',
  lines: [
    { type: 'narration', text: '那年你十四岁。暑假。' },
    { type: 'narration', text: '阿母讲，你去乡下阿舅那里住几天。' },
    { type: 'narration', text: '客车行了三个钟头。下车时候，雨下得很大。' },
    { type: 'narration', text: '阿舅撑伞来接你。巷子窄窄，两片壁生青苔。' },
    { type: 'narration', text: '地上的红砖被雨水洗得发亮。' },
    { type: 'narration', text: '尽头是一座老厝——' },
    { type: 'narration', text: '两进院落，门楣上刻着\u201c紫气东来\u201d四个字，漆已经剥了大半。' },
    { type: 'dialogue', speaker: '阿舅', text: '到了。入来。' }
  ],
  choices: [
    { label: '跟着进去', next: 'ch1_enter' },
    { label: '问这是谁的厝', next: 'ch1_ask_house' }
  ]
},

'ch1_ask_house': {
  bg: 'bg-rain', img: 'img_rain.png',
  lines: [
    { type: 'dialogue', speaker: '你', text: '阿舅，这是啥人的厝？' },
    { type: 'dialogue', speaker: '阿舅', text: '你阿嬷以前住的地方。她走了之后，就空着。' },
    { type: 'narration', text: '他讲\u201c空着\u201d的时候，眼神闪了一下。' },
    { type: 'narration', text: '你没有追问。' }
  ],
  choices: [{ label: '跟进去', next: 'ch1_enter' }]
},

'ch1_enter': {
  bg: 'bg-rain', img: 'img_rain.png',
  lines: [
    { type: 'narration', text: '门内是一个天井。' },
    { type: 'narration', text: '四角檐口的水像断了线的珠子，打在石阶上。' },
    { type: 'narration', text: '天井正对三间房。中间是大厅，供着神龛。' },
    { type: 'narration', text: '左边那间——门是关着的。门板很旧，上面贴着一张红色的符纸。' },
    { type: 'narration', text: '符纸的边角已经翘起来了。' },
    { type: 'dialogue', speaker: '阿舅', text: '你住右边那间。不要去那边。' },
    { type: 'narration', text: '他指了指左边那扇门。' },
    { type: 'narration', text: '你注意到他没有说\u201c那间房\u201d，说的是\u201c那片\u201d。' }
  ],
  choices: [
    { label: '为什么不能去？', next: 'ch1_ask_why' },
    { label: '听话，去自己房间', next: 'ch1_room' }
  ]
},

'ch1_ask_why': {
  bg: 'bg-rain', img: 'img_rain.png',
  lines: [
    { type: 'dialogue', speaker: '你', text: '为什么不能去？' },
    { type: 'narration', text: '阿舅看了你一眼。' },
    { type: 'dialogue', speaker: '阿舅', text: '不干净。小孩子不要管。' },
    { type: 'narration', text: '你不知道\u201c歹物\u201d是什么意思。不干净的东西？还是别的？' },
    { type: 'narration', text: '他已经转身进了大厅。' }
  ],
  choices: [{ label: '去自己房间', next: 'ch1_room' }]
}

};


Object.assign(STORY, {

'ch1_room': {
  bg: 'bg-dusk', img: 'img_alley.png',
  lines: [
    { type: 'narration', text: '右边的房间很简单。一张眠床，一张书桌，一盏灯。' },
    { type: 'narration', text: '你放下包，坐在床沿。' },
    { type: 'narration', text: '窗户对着天井。隔着天井，就是左边那扇贴符纸的门。' },
    { type: 'narration', text: '雨还在落。滴答、滴答。' },
    { type: 'narration', text: '忽然——你听见一个声音。' },
    { type: 'narration', text: '从左边那间房里传来的。' },
    { type: 'narration', text: '很轻。像有人在……叹气。' }
  ],
  choices: [
    { label: '走到窗前看', next: 'ch1_window' },
    { label: '当作没听到', next: 'ch1_ignore' }
  ]
},

'ch1_window': {
  bg: 'bg-dusk', img: 'img_alley.png',
  lines: [
    { type: 'narration', text: '你走到窗前。' },
    { type: 'narration', text: '隔着天井，左边那间房的窗也开着一条缝。' },
    { type: 'narration', text: '里面黑漆漆的。' },
    { type: 'narration', text: '但你确定——有一双眼睛在看你。' },
    { type: 'narration', text: '你们对视了大概两秒。' },
    { type: 'narration', text: '然后那边的窗\u201c啪\u201d一声关上了。' },
    { type: 'narration', text: '你心脏跳了一下。' },
    { type: 'narration', text: '……里面有人。' }
  ],
  choices: [{ label: '继续', next: 'ch1_night' }]
},

'ch1_ignore': {
  bg: 'bg-dusk', img: 'img_alley.png',
  lines: [
    { type: 'narration', text: '你用被子蒙住头。告诉自己是风。' },
    { type: 'narration', text: '但那个声音又来了。' },
    { type: 'narration', text: '不是叹气。是有人在念什么。很轻很轻的。' },
    { type: 'narration', text: '像在诵经？又不太像。' },
    { type: 'narration', text: '你强迫自己不去想。' }
  ],
  choices: [{ label: '继续', next: 'ch1_night' }]
},

'ch1_night': {
  bg: 'bg-night', img: 'img_night.png',
  lines: [
    { type: 'narration', text: '半夜。你被一阵声音惊醒。' },
    { type: 'narration', text: '啪——啪——啪。' },
    { type: 'narration', text: '有人在敲墙壁。三下。从左边那间房的方向传来。' },
    { type: 'narration', text: '然后安静了。' },
    { type: 'narration', text: '你躺在黑暗里，大气都不敢喘一口。' },
    { type: 'narration', text: '过了很久——门缝下面有什么东西在移动。' },
    { type: 'narration', text: '一张纸条。从你房间的门缝下面被塞进来。' }
  ],
  choices: [
    { label: '捡起来看', next: 'ch1_note' },
    { label: '不敢动', next: 'ch1_freeze' }
  ]
},

'ch1_note': {
  bg: 'bg-night', img: 'img_night.png',
  lines: [
    { type: 'narration', text: '你赤脚踩着冰凉的地砖，走到门前。' },
    { type: 'narration', text: '捡起那张纸。' },
    { type: 'narration', text: '借着窗外的月光，你看见上面写着几个字——' },
    { type: 'narration', text: '字迹很工整，但有些颤抖：' },
    { type: 'quote', text: '你听得到我吗？' },
    { type: 'narration', text: '纸的背面还有一行更小的字：' },
    { type: 'quote', text: '不要让他们知道。' }
  ],
  choices: [{ label: '明天去看看', next: 'ch2_morning', flag: 'saw_note' }]
},

'ch1_freeze': {
  bg: 'bg-night', img: 'img_night.png',
  lines: [
    { type: 'narration', text: '你一动不动地躺着。盯着门缝下面那张白色的纸。' },
    { type: 'narration', text: '一直到天亮。' },
    { type: 'narration', text: '天光的时候，你终于爬起来。纸条上写着：' },
    { type: 'quote', text: '你听得到我吗？' },
    { type: 'narration', text: '背面：' },
    { type: 'quote', text: '不要让他们知道。' }
  ],
  choices: [{ label: '继续', next: 'ch2_morning', flag: 'saw_note' }]
},

'ch2_morning': {
  scene: '第二章 \u00b7 天光', location: '天井 \u00b7 清晨', bg: 'bg-dawn', img: 'img_dawn.png',
  lines: [
    { type: 'narration', text: '你起得比所有人都早。' },
    { type: 'narration', text: '天井的地砖被露水打湿了。空气里有股潮湿的泥土味。' },
    { type: 'narration', text: '厅里的神龛前，三支香还在冒烟。是阿舅起来拜的。' },
    { type: 'narration', text: '你看向左边那扇门。符纸还在。门关着。' },
    { type: 'narration', text: '一切像昨晚什么都没发生过。但你口袋里揣着那张纸条。' }
  ],
  choices: [
    { label: '趁没人走过去', next: 'ch2_approach' },
    { label: '先去天井洗脸', next: 'ch2_well' }
  ]
},

'ch2_well': {
  bg: 'bg-well', img: 'img_well.png',
  lines: [
    { type: 'narration', text: '天井角落有一口古井。' },
    { type: 'narration', text: '你打了一桶水洗脸。水很凉，你打了个激灵。' },
    { type: 'narration', text: '洗脸的时候，你余光瞥到——' },
    { type: 'narration', text: '左边那扇窗，帘子被风吹开了一角。' },
    { type: 'narration', text: '里面有个人。坐在桌前。是个女人的侧影。' },
    { type: 'narration', text: '她似乎在写什么。' }
  ],
  choices: [
    { label: '走近一点', next: 'ch2_approach' },
    { label: '假装没看到', next: 'ch2_breakfast' }
  ]
},

'ch2_approach': {
  bg: 'bg-dawn', img: 'img_dawn.png',
  lines: [
    { type: 'narration', text: '你走到左边那扇门前。' },
    { type: 'narration', text: '门板上的符纸比你想象中更旧。至少贴了好几年了。' },
    { type: 'narration', text: '你蹲下来，在门缝处轻声说：' },
    { type: 'dialogue', speaker: '你', text: '……我听到了。' },
    { type: 'narration', text: '门里面安静了一会儿。然后你听见脚步声。很轻。' },
    { type: 'narration', text: '有人走到门的另一边，也蹲下来了。' },
    { type: 'dialogue', speaker: '她', text: '你是昨天来的那个小孩？' },
    { type: 'dialogue', speaker: '你', text: '嗯。我是阿舅的外甥。' },
    { type: 'dialogue', speaker: '她', text: '……你几岁？' },
    { type: 'dialogue', speaker: '你', text: '十四。' },
    { type: 'dialogue', speaker: '她', text: '这么小……' }
  ],
  choices: [
    { label: '你是谁？', next: 'ch2_who' },
    { label: '你为什么被锁在里面？', next: 'ch2_why_locked' }
  ]
},

'ch2_who': {
  bg: 'bg-dawn', img: 'img_dawn.png',
  lines: [
    { type: 'dialogue', speaker: '你', text: '你是谁？' },
    { type: 'dialogue', speaker: '她', text: '我是……你表姐。' },
    { type: 'narration', text: '她说这两个字的时候很犹豫。' },
    { type: 'dialogue', speaker: '你', text: '我不知道我有表姐。' },
    { type: 'dialogue', speaker: '她', text: '你们家的人不会提起我的。' }
  ],
  choices: [{ label: '继续', next: 'ch2_breakfast' }]
},

'ch2_why_locked': {
  bg: 'bg-dawn', img: 'img_dawn.png',
  lines: [
    { type: 'dialogue', speaker: '你', text: '你为什么被关在里面？' },
    { type: 'dialogue', speaker: '她', text: '……因为我不愿意。' },
    { type: 'dialogue', speaker: '你', text: '不愿意什么？' },
    { type: 'dialogue', speaker: '她', text: '不愿意嫁。' },
    { type: 'narration', text: '你不太懂。但你感觉到——这件事很重。' }
  ],
  choices: [{ label: '继续', next: 'ch2_breakfast' }]
},

'ch2_breakfast': {
  bg: 'bg-noon', img: 'img_threshold.png', location: '大厅 \u00b7 早饭',
  lines: [
    { type: 'narration', text: '吃早饭的时候，舅妈端了一个托盘出去。' },
    { type: 'narration', text: '上面是一碗白粥、一碟菜脯。' },
    { type: 'narration', text: '她走向左边那扇门，蹲下来，把托盘从门下面的缝隙塞进去。' },
    { type: 'narration', text: '缝隙很窄。刚好够一个碗通过。' },
    { type: 'narration', text: '阿舅假装看不见。你也假装看不见。' },
    { type: 'narration', text: '但你的手在桌子下面攥紧了。' }
  ],
  choices: [
    { label: '出去走走', next: 'ch2_town' },
    { label: '留在厝里', next: 'ch2_stay' }
  ]
},

'ch2_town': {
  scene: '支线 \u00b7 老市', location: '镇上 \u00b7 上午', bg: 'bg-market', img: 'img_market.png',
  lines: [
    { type: 'narration', text: '镇上有一条老街。潮汕话叫\u201c老市\u201d。' },
    { type: 'narration', text: '街边有卖粿条、蚝烙、草粿的摊子。' },
    { type: 'narration', text: '你买了一碗草粿。老板娘用铜勺刮出黑色的凉粉，浇上红糖水。' },
    { type: 'narration', text: '坐在骑楼下吃的时候，你听见旁边两个阿姆在讲话。' },
    { type: 'dialogue', speaker: '阿姆甲', text: '许家那个女孩，还关着呢？' },
    { type: 'dialogue', speaker: '阿姆乙', text: '是啊。都几年了。听讲是疯了。' },
    { type: 'dialogue', speaker: '阿姆甲', text: '怎么会疯？' },
    { type: 'dialogue', speaker: '阿姆乙', text: '不嫁就是疯嘛。她家讲的。' },
    { type: 'narration', text: '你端着碗的手停住了。' },
    { type: 'narration', text: '许厝——那不就是阿舅的姓？' }
  ],
  choices: [
    { label: '继续听', next: 'ch2_eavesdrop', flag: 'heard_gossip' },
    { label: '去庙里看看', next: 'ch2_temple' }
  ]
},

'ch2_eavesdrop': {
  bg: 'bg-market', img: 'img_market.png',
  lines: [
    { type: 'dialogue', speaker: '阿姆甲', text: '是许厝和陈厝讲好的亲事？' },
    { type: 'dialogue', speaker: '阿姆乙', text: '是啊。彩礼都收了。' },
    { type: 'dialogue', speaker: '阿姆甲', text: '她就是不嫁？' },
    { type: 'dialogue', speaker: '阿姆乙', text: '不嫁。死都不嫁。讲要读书。' },
    { type: 'dialogue', speaker: '阿姆甲', text: '女孩子读什么书……' },
    { type: 'dialogue', speaker: '阿姆乙', text: '就是讲。家里就把她关起来了。等她想通。' },
    { type: 'dialogue', speaker: '阿姆甲', text: '几年了？' },
    { type: 'dialogue', speaker: '阿姆乙', text: '三年了吧。' },
    { type: 'narration', text: '三年。你碗里的草粿已经不甜了。' }
  ],
  choices: [{ label: '回去', next: 'ch3_days' }]
},

'ch2_temple': {
  scene: '支线 \u00b7 老爷宫', location: '镇尾 \u00b7 妈祖庙', bg: 'bg-temple', img: 'img_temple.png',
  lines: [
    { type: 'narration', text: '镇尾有一座小庙。潮汕人叫\u201c老爷宫\u201d。' },
    { type: 'narration', text: '里面供的是妈祖。香火气很重。' },
    { type: 'narration', text: '功德箱旁边的墙上，贴满了红纸写的祈愿。' },
    { type: 'narration', text: '大多是求平安、求发财。但有一张不一样。' },
    { type: 'narration', text: '字迹和昨晚那张纸条一模一样。' },
    { type: 'quote', text: '求妈祖保佑我出去。' },
    { type: 'narration', text: '纸已经泛黄。不知道是什么时候贴的。' },
    { type: 'narration', text: '……她来过这里？还是有人替她来的？' }
  ],
  choices: [{ label: '回去', next: 'ch3_days', flag: 'found_prayer' }]
},

'ch2_stay': {
  bg: 'bg-noon', img: 'img_threshold.png',
  lines: [
    { type: 'narration', text: '你说头晕，留在厝里。' },
    { type: 'narration', text: '阿舅出门了。舅妈在厨房。' },
    { type: 'narration', text: '你一个人坐在天井的石阶上。等了很久。' },
    { type: 'narration', text: '终于，门缝下面又塞出来一张纸条。' },
    { type: 'quote', text: '你还在吗？' },
    { type: 'narration', text: '你蹲下来，轻声说：' },
    { type: 'dialogue', speaker: '你', text: '在。' },
    { type: 'narration', text: '门那边传来一声很轻的——像是松了口气。' }
  ],
  choices: [{ label: '继续', next: 'ch3_days' }]
}

});


Object.assign(STORY, {

'ch3_days': {
  scene: '第三章 \u00b7 隔门', location: '老厝 \u00b7 日复一日', bg: 'bg-noon', img: 'img_threshold.png',
  lines: [
    { type: 'narration', text: '接下来的日子，你们隔着那扇门说话。只能在阿舅出门时。' },
    { type: 'narration', text: '她告诉你——她叫阿琴。今年二十二。' },
    { type: 'narration', text: '三年前，家里收了隔壁镇陈厝的彩礼。她不肯嫁。' },
    { type: 'narration', text: '阿爸讲：不嫁就关到你愿意为止。' },
    { type: 'narration', text: '她说她考上了汕头大学中文系。录取通知书来的那天被阿爸烧了。' }
  ],
  choices: [
    { label: '我帮你想办法', next: 'ch3_plan' },
    { label: '你想过逃吗？', next: 'ch3_escape' }
  ]
},

'ch3_plan': {
  bg: 'bg-noon', img: 'img_threshold.png',
  lines: [
    { type: 'dialogue', speaker: '你', text: '我帮你想办法出去。' },
    { type: 'dialogue', speaker: '阿琴', text: '你十四岁。你能做什么？' },
    { type: 'dialogue', speaker: '你', text: '我……我不知道。但我可以帮你带东西出去。' },
    { type: 'dialogue', speaker: '阿琴', text: '有一件事你可以帮我。' },
    { type: 'dialogue', speaker: '阿琴', text: '帮我带一封信出去。等我写好。' }
  ],
  choices: [{ label: '继续', next: 'ch3_opera' }]
},

'ch3_escape': {
  bg: 'bg-noon', img: 'img_threshold.png',
  lines: [
    { type: 'dialogue', speaker: '你', text: '你有没有想过……逃？' },
    { type: 'dialogue', speaker: '阿琴', text: '门从外面锁的。窗户钉死了。' },
    { type: 'dialogue', speaker: '阿琴', text: '我没有身份证。没有钱。连鞋都没有。' },
    { type: 'dialogue', speaker: '阿琴', text: '这个镇上所有人都认识我阿爸。' },
    { type: 'dialogue', speaker: '阿琴', text: '但有一样东西，我可以送出去——一封信。' },
    { type: 'dialogue', speaker: '阿琴', text: '你帮我带出去。可以吗？' }
  ],
  choices: [{ label: '好', next: 'ch3_opera' }]
},

'ch3_opera': {
  scene: '支线 \u00b7 纸影戏', location: '祠堂前 \u00b7 晚上', bg: 'bg-opera', img: 'img_opera.png',
  lines: [
    { type: 'narration', text: '那天晚上，镇上做戏。纸影戏。铁枝木偶在白幕后面晃动。' },
    { type: 'narration', text: '锣鼓喧天。唱的是陈三五娘。' },
    { type: 'narration', text: '你坐在祠堂前的空地上看。老人搬了竹椅坐在前排。' },
    { type: 'narration', text: '戏台上，五娘唱：' },
    { type: 'quote', text: '爹爹做主将奴许，不问奴心甘不甘……' },
    { type: 'narration', text: '你突然觉得这句词很刺耳。' },
    { type: 'narration', text: '看了看周围——没有人觉得有什么不对。' }
  ],
  choices: [
    { label: '继续看戏', next: 'ch4_well' },
    { label: '回去跟她说', next: 'ch3_tell_opera' }
  ]
},

'ch3_tell_opera': {
  bg: 'bg-night', img: 'img_night.png',
  lines: [
    { type: 'narration', text: '你跑回去。蹲在她门前，小声说：' },
    { type: 'dialogue', speaker: '你', text: '外面在做纸影戏。演陈三五娘。' },
    { type: 'dialogue', speaker: '阿琴', text: '我知道。每年这个时候都有。' },
    { type: 'dialogue', speaker: '你', text: '五娘唱——说她阿爸做主把她许了人。' },
    { type: 'dialogue', speaker: '阿琴', text: '戏里面，五娘最后跟陈三走了。' },
    { type: 'dialogue', speaker: '阿琴', text: '但现实里面没有陈三。' },
    { type: 'dialogue', speaker: '阿琴', text: '也不需要。我自己走就好。只是走不了。' }
  ],
  choices: [{ label: '继续', next: 'ch4_well' }]
},

'ch4_well': {
  scene: '第四章 \u00b7 古井', location: '天井 \u00b7 午后', bg: 'bg-well', img: 'img_well.png',
  lines: [
    { type: 'narration', text: '那天下午你又去古井打水。' },
    { type: 'narration', text: '井沿上刻着：光绪十九年 许氏立。' },
    { type: 'narration', text: '你往下看——黑洞洞的。' },
    { type: 'narration', text: '忽然你注意到——井壁石头缝里塞着什么东西。' },
    { type: 'narration', text: '你伸手够了一下。是一个油纸包。很旧了。' },
    { type: 'narration', text: '里面是一叠纸。每一张上面都只写了同样的三个字：' },
    { type: 'quote', text: '我不愿意。我不愿意。我不愿意。' },
    { type: 'narration', text: '一遍一遍。写了几十张。' },
    { type: 'narration', text: '字迹从工整变得潦草，最后几张几乎是划出来的。' },
    { type: 'narration', text: '你的手在发抖。' }
  ],
  choices: [
    { label: '去问她', next: 'ch4_ask' },
    { label: '放回去', next: 'ch4_putback' }
  ]
},

'ch4_ask': {
  bg: 'bg-dusk', img: 'img_alley.png',
  lines: [
    { type: 'dialogue', speaker: '你', text: '我在井里发现了那些纸。' },
    { type: 'dialogue', speaker: '阿琴', text: '……那是第一年的时候写的。' },
    { type: 'dialogue', speaker: '阿琴', text: '那时候我还会哭。还会喊。还会把东西塞到任何能塞的地方。' },
    { type: 'dialogue', speaker: '阿琴', text: '想着也许有人会看到。' },
    { type: 'dialogue', speaker: '阿琴', text: '后来就不了。因为没有人看。' },
    { type: 'dialogue', speaker: '阿琴', text: '直到你来。' }
  ],
  choices: [{ label: '继续', next: 'ch5_letter' }]
},

'ch4_putback': {
  bg: 'bg-well', img: 'img_well.png',
  lines: [
    { type: 'narration', text: '你把纸放回油纸包里。塞回井壁的石缝。' },
    { type: 'narration', text: '也许这些字不是给你看的。' },
    { type: 'narration', text: '它们是她留给这座厝的。' },
    { type: 'narration', text: '就算有一天这里塌了，这些字还在。' }
  ],
  choices: [{ label: '继续', next: 'ch5_letter' }]
},

'ch5_letter': {
  scene: '第五章 \u00b7 信', location: '偏房门前 \u00b7 傍晚', bg: 'bg-dusk', img: 'img_alley.png',
  lines: [
    { type: 'narration', text: '你还有三天就要走了。' },
    { type: 'narration', text: '她把信从门缝下面塞出来。白色信封。什么都没有写。' },
    { type: 'dialogue', speaker: '阿琴', text: '写好了。不用寄。你带出去就好。带到哪里都行。' },
    { type: 'dialogue', speaker: '阿琴', text: '让它在外面就好。' },
    { type: 'divider', text: '\u00b7 \u00b7 \u00b7' },
    { type: 'narration', text: '走的前一夜。你又听见隔壁有声音。' },
    { type: 'narration', text: '是有人在很轻很轻地唱歌。潮汕歌册的调子。' },
    { type: 'narration', text: '旋律很慢，很沉。唱了很久。你睁着眼睛听了一整夜。' },
    { type: 'divider', text: '\u00b7 \u00b7 \u00b7' },
    { type: 'narration', text: '天亮之前，门缝下面又塞进来一张纸条：' },
    { type: 'quote', text: '如果有人问起我，你能不能说——我不是自己愿意的。' }
  ],
  choices: [{ label: '继续', next: 'ch6_leave' }]
},

'ch6_leave': {
  scene: '第六章 \u00b7 走', location: '门厅 \u00b7 正午', bg: 'bg-noon', img: 'img_threshold.png',
  lines: [
    { type: 'narration', text: '日头很猛。你站在大门的门槛上。' },
    { type: 'narration', text: '阿舅在外面等。客车的引擎已经发动了。' },
    { type: 'narration', text: '你回头看天井。左边那扇门还是关着的。符纸还在。' },
    { type: 'narration', text: '你不知道她有没有在门后面。' },
    { type: 'narration', text: '你手里攥着那封信。' }
  ],
  choices: [
    { label: '直接走', next: 'ch6_go' },
    { label: '回头喊一声', next: 'ch6_shout' },
    { label: '跟阿舅说', next: 'ch6_tell' }
  ]
},

'ch6_go': {
  bg: 'bg-noon', img: 'img_threshold.png',
  lines: [
    { type: 'narration', text: '你跨出门槛。阳光很刺眼。你眯起了眼。' },
    { type: 'narration', text: '走过长巷。上车。' },
    { type: 'narration', text: '车开了很远之后你才回头看。只看到一片旧屋顶。' },
    { type: 'narration', text: '你把信攥得更紧了。' }
  ],
  choices: [{ label: '继续', next: 'ch7_years' }]
},

'ch6_shout': {
  bg: 'bg-noon', img: 'img_threshold.png',
  lines: [
    { type: 'narration', text: '你站在门槛上，转过身，对着天井喊了一声：' },
    { type: 'dialogue', speaker: '你', text: '阿琴姐！' },
    { type: 'narration', text: '声音在天井里回荡了一下。' },
    { type: 'narration', text: '左边的窗帘动了一下。然后你听到她的声音：' },
    { type: 'dialogue', speaker: '阿琴', text: '走吧。' },
    { type: 'narration', text: '只有这两个字。阿舅拉着你的胳膊。你走了。' }
  ],
  choices: [{ label: '继续', next: 'ch7_years' }]
},

'ch6_tell': {
  bg: 'bg-noon', img: 'img_threshold.png',
  lines: [
    { type: 'dialogue', speaker: '你', text: '阿舅。里面那个人……她不愿意。' },
    { type: 'narration', text: '阿舅的脸色变了。他看着你，很久。' },
    { type: 'dialogue', speaker: '阿舅', text: '小孩子别乱说。走。' },
    { type: 'narration', text: '他的声音有点发抖。他拽着你走出了巷子。' },
    { type: 'narration', text: '你回头看——舅妈站在门口，看着你们。她没有关门。' }
  ],
  choices: [{ label: '继续', next: 'ch7_years', flag: 'told_uncle' }]
}

});


Object.assign(STORY, {

'ch7_years': {
  scene: '第七章 \u00b7 十二年后', location: '', bg: 'bg-car', img: 'img_car.png',
  lines: [
    { type: 'divider', text: '十 二 年 后' },
    { type: 'narration', text: '你二十六岁了。在城里工作。' },
    { type: 'narration', text: '那封信一直在你的抽屉里。你从来没有打开过。' },
    { type: 'narration', text: '有一天，阿母打电话来：' },
    { type: 'dialogue', speaker: '阿母', text: '你舅舅走了。后事在老家办。你回来一趟。' },
    { type: 'narration', text: '你坐了三个钟头的车。回到了那个镇上。' }
  ],
  choices: [{ label: '继续', next: 'ch7_return' }]
},

'ch7_return': {
  location: '老厝 \u00b7 雨天', bg: 'bg-rain', img: 'img_rain.png',
  lines: [
    { type: 'narration', text: '又是落雨天。你走过那条长巷。' },
    { type: 'narration', text: '比记忆中窄。比记忆中短。' },
    { type: 'narration', text: '老厝的门开着。里面有做白事的人在走动。' },
    { type: 'narration', text: '你走进天井。古井还在。石板还在。' },
    { type: 'narration', text: '左边那扇门——开着。符纸不见了。' },
    { type: 'narration', text: '里面空荡荡的。一张木桌。一把椅子。一张窄床。' },
    { type: 'narration', text: '没有人。' }
  ],
  choices: [
    { label: '走进去', next: 'ch7_room' },
    { label: '找阿母', next: 'ch7_mom' }
  ]
},

'ch7_room': {
  bg: 'bg-memory', img: 'img_rain.png',
  lines: [
    { type: 'narration', text: '你第一次走进这间房。比想象中更小。' },
    { type: 'narration', text: '窗户果然是钉死的——窗框上还留着钉子的锈痕。' },
    { type: 'narration', text: '桌上有一本翻烂了的《唐诗三百首》。每一页都写满了批注。' },
    { type: 'narration', text: '同一本书，她读了三年。' },
    { type: 'narration', text: '墙壁靠门的地方，有一行小字。用指甲刻的。' },
    { type: 'quote', text: '我叫许琴。我在这里。我不愿意。' },
    { type: 'narration', text: '你蹲下来，用手指碰了碰那些刻痕。很深。很用力。' }
  ],
  choices: [{ label: '找阿母', next: 'ch7_mom' }]
},

'ch7_mom': {
  bg: 'bg-memory', img: 'img_rain.png', location: '正屋',
  lines: [
    { type: 'dialogue', speaker: '你', text: '阿母。阿琴姐呢？' },
    { type: 'dialogue', speaker: '阿母', text: '你还记得她？' },
    { type: 'dialogue', speaker: '阿母', text: '……她后来嫁了。在你走了之后不久。嫁去隔壁镇陈厝。' },
    { type: 'dialogue', speaker: '你', text: '她现在好吗？' },
    { type: 'dialogue', speaker: '阿母', text: '没有消息了。嫁了就是嫁了。' }
  ],
  choices: [
    { label: '她是自己愿意的吗？', next: 'ch7_willing' },
    { label: '不再问了', next: 'ch8_car' }
  ]
},

'ch7_willing': {
  bg: 'bg-memory', img: 'img_rain.png',
  lines: [
    { type: 'dialogue', speaker: '你', text: '她是自己愿意嫁的吗？' },
    { type: 'dialogue', speaker: '阿母', text: '关了三年……谁都会点头的。' },
    { type: 'dialogue', speaker: '阿母', text: '她阿爸讲，点头了就是愿意。' },
    { type: 'narration', text: '你握紧了口袋里那封信。' }
  ],
  choices: [{ label: '继续', next: 'ch8_car' }]
},

'ch8_car': {
  scene: '第八章 \u00b7 回程', location: '车上 \u00b7 傍晚', bg: 'bg-car', img: 'img_car.png',
  lines: [
    { type: 'narration', text: '回程的车上。窗外的田野在倒退。天快黑了。' },
    { type: 'narration', text: '你从口袋里拿出那封信。十二年了。信封已经泛黄。' }
  ],
  choices: [
    { label: '打开信', next: 'ch8_open' },
    { label: '不打开', next: 'ending_keep' },
    { label: '告诉阿母这件事', next: 'ch8_tell', requires: 'told_uncle' }
  ]
},

'ch8_open': {
  bg: 'bg-letter', img: 'img_letter.png',
  lines: [
    { type: 'narration', text: '你拆开了信封。纸已经发脆了。' },
    { type: 'narration', text: '上面只有一行字。她的字很工整。每一笔都用了全部的力气。' },
    { type: 'quote', text: '我不愿意。' },
    { type: 'narration', text: '就这三个字。' },
    { type: 'narration', text: '你看了很久。然后把信折好，放回口袋。' }
  ],
  choices: [
    { label: '替她说出来', next: 'ending_speak' },
    { label: '自己收好', next: 'ending_alone' }
  ]
},

'ch8_tell': {
  bg: 'bg-car', img: 'img_car.png',
  lines: [
    { type: 'dialogue', speaker: '你', text: '阿母。我那年走的时候，跟阿舅讲了一句话。' },
    { type: 'dialogue', speaker: '你', text: '我讲——里面那个人，她不愿意。' },
    { type: 'dialogue', speaker: '你', text: '后来阿舅有没有……做什么？' },
    { type: 'dialogue', speaker: '阿母', text: '你阿舅那天晚上喝酒喝到半夜。' },
    { type: 'dialogue', speaker: '阿母', text: '但第二天……还是把她送过去了。彩礼已经收了。退不了。' },
    { type: 'dialogue', speaker: '阿母', text: '不是你的错。是这个地方的错。' }
  ],
  choices: [{ label: '继续', next: 'ending_speak' }]
},

'ending_speak': {
  scene: '尾声', location: '', bg: 'bg-ending', img: 'img_ending.png',
  lines: [
    { type: 'divider', text: '\u00b7 \u00b7 \u00b7' },
    { type: 'narration', text: '后来你把这件事写在了网上。没有用真名。没有写地址。' },
    { type: 'narration', text: '只是写了——' },
    { type: 'narration', text: '在潮汕的一个小镇上，有一个女孩。' },
    { type: 'narration', text: '她考上了大学。但她的录取通知书被烧了。她被关了三年。然后她被嫁了出去。' },
    { type: 'narration', text: '她说——' },
    { type: 'quote', text: '我不愿意。' },
    { type: 'divider', text: '\u00b7 \u00b7 \u00b7' },
    { type: 'narration', text: '你不知道她现在过得好不好。也不知道她会不会看到这些字。' },
    { type: 'narration', text: '但你替她说出来了。那句她用指甲刻在墙上的话。' },
    { type: 'divider', text: '\u00b7 \u00b7 \u00b7' },
    { type: 'quote', text: '有人一辈子生活在一个地方，却没有留下任何痕迹。' },
    { type: 'quote', text: '也有人只说了一句话，就让她存在过。' },
    { type: 'divider', text: '\u2014\u2014 终 \u2014\u2014' }
  ],
  choices: [{ label: '重新开始', next: 'prologue', restart: true }]
},

'ending_keep': {
  scene: '尾声', location: '', bg: 'bg-ending', img: 'img_ending.png',
  lines: [
    { type: 'divider', text: '\u00b7 \u00b7 \u00b7' },
    { type: 'narration', text: '你把那封信放回口袋。没有打开。' },
    { type: 'narration', text: '她让你带出去——你带出去了。这就够了。' },
    { type: 'narration', text: '每次搬家你都带着它。' },
    { type: 'narration', text: '它在外面了。就像她说的。' },
    { type: 'divider', text: '\u00b7 \u00b7 \u00b7' },
    { type: 'quote', text: '有些话不需要被所有人听见。' },
    { type: 'quote', text: '被一个人记住，被带出那间房，就够了。' },
    { type: 'divider', text: '\u2014\u2014 终 \u2014\u2014' }
  ],
  choices: [{ label: '重新开始', next: 'prologue', restart: true }]
},

'ending_alone': {
  scene: '尾声', location: '', bg: 'bg-ending', img: 'img_ending.png',
  lines: [
    { type: 'divider', text: '\u00b7 \u00b7 \u00b7' },
    { type: 'narration', text: '你把信折好。放回口袋。' },
    { type: 'narration', text: '你是唯一知道的人。唯一一个她选择信任的人。' },
    { type: 'narration', text: '也许有一天你会说出来。也许不会。' },
    { type: 'narration', text: '但你会记得。' },
    { type: 'narration', text: '在这个世界上，有一个人说过——' },
    { type: 'quote', text: '我不愿意。' },
    { type: 'divider', text: '\u00b7 \u00b7 \u00b7' },
    { type: 'quote', text: '她存在过。你知道。这就够了。' },
    { type: 'divider', text: '\u2014\u2014 终 \u2014\u2014' }
  ],
  choices: [{ label: '重新开始', next: 'prologue', restart: true }]
}

});
