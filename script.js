const recipes = [
  {
    id: "guobaorou-cunlv",
    title: "村驴锅包肉",
    category: "东北菜",
    status: "已整理",
    image: "assets/guobaorou-cover.jpg",
    source: {
      label: "小红书分享链接；同标题公开页：Bilibili BV1xy411i7Mi",
      url: "https://www.bilibili.com/video/BV1xy411i7Mi/",
    },
    summary:
      "家庭厨房版大酸甜口锅包肉。重点是土豆淀粉提前泡透、油温够高、两次复炸，最后快速裹汁，才能外壳酥脆、不容易回软。",
    badges: ["外酥里嫩", "酸甜口", "不放鸡精味精", "3-4人份"],
    metrics: [
      ["400g", "猪通脊/外脊"],
      ["250g", "土豆淀粉"],
      ["90g : 75g", "白糖 : 9度米醋"],
      ["3次", "初炸 + 两次复炸"],
    ],
    ratios: [
      ["肉", "猪通脊/外脊 400g，切成比筷子头略厚的片。"],
      ["糊", "土豆淀粉 250g；喜欢薄糊可减到 210g，不建议再少。"],
      ["汁", "白糖 90g、9度米醋 75g、生抽 1/3 勺、盐半茶勺。"],
    ],
    shopping: [
      ["猪通脊/外脊", "400g；也可买猪里脊，尽量选纯瘦、筋膜少的。"],
      ["土豆淀粉", "250g；提前至少 1 小时泡水。"],
      ["白糖", "90g。"],
      ["9度米醋", "75g；酸度低的醋会让料汁变多，影响脆度。"],
      ["生抽", "1/3 勺，只用来调颜色。"],
      ["玉米淀粉", "2g，兑 2/3 勺清水后加入糖醋汁。"],
      ["盐", "腌肉半茶勺，料汁半茶勺。"],
      ["食用油", "炸肉需要多一些；糊里另加 2 勺，豆油颜色更好。"],
      ["香菜", "1 根，切寸段。"],
      ["大葱白", "1 段，去芯后斜切丝。"],
      ["蒜", "2-3 瓣，切片。"],
      ["姜", "薄薄 2 片，切细丝；不吃姜可省。"],
      ["胡萝卜", "少许，切丝调色。"],
    ],
    steps: [
      [
        "切肉",
        "400g 猪通脊/外脊斜刀切厚片，厚度和筷子头差不多。肉片太薄，炸完容易发干发柴；喜欢更松的口感，可以用刀背轻轻拍松。",
      ],
      [
        "洗肉并入底味",
        "切好的肉用清水洗两遍，洗掉多余血水，也让肉吸进一点水分。之后尽量攥干，加入半茶勺盐，抓到盐融化、肉片黏手起胶。",
      ],
      [
        "调糖醋汁",
        "碗里放白糖 90g、9度米醋 75g、生抽 1/3 勺、盐半茶勺。另用玉米淀粉 2g 加 2/3 勺清水搅匀，再倒进糖醋汁里。大酸甜口不要放味精或鸡精。",
      ],
      [
        "准备配菜",
        "香菜切寸段，蒜切片，姜切细丝，胡萝卜切少量细丝。葱白从中间剖开，取出芯，斜着顶刀切丝。配菜主要提味提色，别放太多，水分多会让锅包肉回软。",
      ],
      [
        "调酥炸糊",
        "250g 土豆淀粉提前至少 1 小时泡水，分层后把上层清水完全倒掉。淀粉会很硬，先抓碎，再放入肉片和 3 勺清水，慢慢抓匀。合适状态是肉片提起时没有干粉脱落，糊能缓慢流动。最后加 2 勺食用油抓匀。",
      ],
      [
        "测油温",
        "锅里放宽油。用筷子蘸一点面糊下锅，如果 3 秒才浮起，油温太低；面糊一进锅就迅速浮起，油温才合适。油温不够，肉容易粘成一坨，外壳也不蓬松。",
      ],
      [
        "第一遍炸",
        "全程大火，肉片分散下锅，哪里没肉下哪里。刚下锅不要急着翻，等外壳定型后再轻轻拨散。家庭锅小的话分两锅炸，炸到外壳坚硬、颜色还比较浅时捞出。",
      ],
      [
        "第一次复炸",
        "全部肉炸完后继续大火，等约 20 秒，把肉试探着下锅进行第一次复炸。炸约 30 秒就捞出，不要久炸，避免肉片发干。",
      ],
      [
        "第二次复炸",
        "继续把油温升高，到油面微微冒烟，大约再等 1 分多钟。肉片下锅第二次复炸，这次不死看时间，看状态：外壳金黄、局部呈枣红色时立刻捞出。",
      ],
      [
        "熬汁裹肉",
        "锅里留一点点油，大火烧到冒烟。糖醋汁下锅前再搅一下，倒入锅中不停搅动，约 20 秒熬到微微挂铲。可淋一点炸肉的热油激一下香气，再倒入锅包肉和配菜，快速翻匀后马上出锅。",
      ],
    ],
    tips: [
      ["淀粉不能随便换", "这版靠土豆淀粉形成硬脆外壳，玉米淀粉这里只用于料汁增稠。"],
      ["薄糊版本", "如果喜欢外壳薄一点，土豆淀粉可从 250g 减到 210g，再少就容易裹不住肉。"],
      ["油温是关键", "下肉后 3 秒左右能上浮，说明温度比较稳；面糊慢慢沉底，多半会粘、会软。"],
      ["裹汁要快", "汁熬到能挂住肉即可，肉和配菜进去后迅速翻匀，别在锅里久炒。"],
    ],
  },
  {
    id: "cold-chicken-wings-konglong",
    title: "恐龙饲养员冷吃鸡翅",
    category: "川味",
    status: "已整理",
    image: "assets/cold-chicken-wings-cover.jpg",
    source: {
      label: "抖音：恐龙饲养员《冷吃鸡翅放凉了更好吃，推荐麻辣口味》",
      url: "https://v.douyin.com/M_LGhjYhOwg/",
    },
    summary:
      "大批量冷吃鸡翅，主推麻辣口味，也附甜辣变体。核心是先把血水处理干净，腌足味，干粉薄薄挂住，炸到酥脆后再用辣椒花椒和干料快速翻匀。",
    badges: ["麻辣口味", "放凉更好吃", "可做甜辣", "适合聚餐"],
    metrics: [
      ["36个", "鸡翅中"],
      ["30分钟", "腌制时间"],
      ["80g : 20g", "红薯淀粉 : 土豆淀粉"],
      ["30秒", "二次复炸参考"],
    ],
    ratios: [
      ["腌料", "盐 8g、十三香 4g、鸡精 8g、白胡椒粉 3g、白糖 6g、生抽 20g。"],
      ["姜蒜水", "蒜 4 瓣、姜 2 片、水 80ml，打碎后只取姜蒜水。"],
      ["挂粉", "红薯淀粉 80g、土豆淀粉 20g，比例 4:1；不够就少量续粉。"],
      ["麻辣料", "麻辣鲜 2 勺约 20g、孜然粉 2 勺、辣椒面按口味、干辣椒 2 把、花椒 1 把、白芝麻。"],
      ["甜辣变体", "锅底油约 100g、白糖 100g，熬成枣红色糖色后再下辣椒、花椒和鸡翅。"],
    ],
    shopping: [
      ["鸡翅中", "36 个；视频用量很大，少做可以按比例减少。"],
      ["盐", "8g，用于腌鸡翅。"],
      ["十三香", "4g。"],
      ["鸡精", "8g。"],
      ["白胡椒粉", "3g，去腥增香。"],
      ["白糖", "腌料 6g；做甜辣口味另备 100g。"],
      ["生抽", "20g。"],
      ["蒜", "4 瓣，和姜、水一起打成姜蒜水。"],
      ["姜", "2 片。"],
      ["干辣椒", "200g；清洗后剪成辣椒丝，麻辣口味约用 2 把。"],
      ["花椒", "1 把；喜欢麻味可以略加。"],
      ["麻辣鲜", "2 勺，约 20g；超市常见调味粉。"],
      ["孜然粉", "2 勺；没有孜然粉可用孜然粒。"],
      ["辣椒面", "按自己能吃辣的程度添加。"],
      ["白芝麻", "出锅前撒。"],
      ["红薯淀粉", "80g；视频用有机红薯淀粉。"],
      ["土豆淀粉", "20g，和红薯淀粉按 4:1 混合。"],
      ["食用油", "炸鸡翅需要宽油；炒辣椒也用炸鸡翅的油。"],
    ],
    steps: [
      [
        "处理血水",
        "鸡翅先洗一遍。想保持完整，可以从鸡翅下方向上、沿两个骨头缝把血水挤出来；省事做法是用剪刀从两根骨头中间剪开，再放清水里浸泡。两种方法都能去掉鸡翅腥味的主要来源。",
      ],
      [
        "沥干并腌制",
        "鸡翅沥干水分，加入盐 8g、十三香 4g、鸡精 8g、白胡椒粉 3g、白糖 6g、生抽 20g。蒜 4 瓣、姜 2 片、清水 80ml 打碎，过滤或沉淀后只取姜蒜水倒入鸡翅里。抓匀后腌 30 分钟；有蒜粉也可以少撒一点。",
      ],
      [
        "处理干辣椒",
        "干辣椒 200g 用清水洗一遍，一是洗掉表面灰尘，二是让辣椒略微回潮，后面炒的时候不容易马上糊。洗好后剪成辣椒丝；能买到现成辣椒丝就更省事。",
      ],
      [
        "干粉挂糊",
        "准备一个大的保鲜袋，放红薯淀粉 80g、土豆淀粉 20g，先摇匀。把腌好的鸡翅分批放进袋子里摇，让表面均匀裹上干淀粉。粉不够就少量多次续一点，这样比整盆淀粉挂糊干净。",
      ],
      [
        "第一遍炸",
        "油烧热后用一只鸡翅试油温，鸡翅周围持续冒密集小泡就可以下锅。鸡翅外面是干淀粉，定型后轻轻拨散即可。每家油量和火力不同，不死看时间，看颜色：露肉处变金黄，淀粉处微微发黄，就可以捞出。",
      ],
      [
        "二次复炸",
        "把油温再次升高，手放在油面上方能明显感觉烫时，下鸡翅复炸。视频里复炸约 30 秒，重点看外层淀粉颜色：变成完整金黄色就立刻捞出。二次复炸会比一次炸到底更酥脆。",
      ],
      [
        "预调麻辣干料",
        "提前把干料调好：麻辣鲜 2 勺约 20g、孜然粉 2 勺，再按自己的吃辣程度加辣椒面，搅拌均匀。提前调好是为了后面炒鸡翅时不手忙脚乱。",
      ],
      [
        "炒麻辣口味",
        "锅里用刚才炸鸡翅的油，油稍微多一点，全程中火或中小火。下剪好的辣椒丝 2 把，炒到辣椒变香、略微发硬，再放花椒 1 把，扒拉两三下后马上倒入鸡翅，快速翻炒均匀。",
      ],
      [
        "撒料出锅",
        "先撒一半干料，翻匀后再撒另一半，再次翻炒均匀。出锅前撒白芝麻。冷吃鸡翅放凉后更好吃，外壳酥脆、里面多汁，不容易发柴。",
      ],
      [
        "甜辣变体",
        "锅底放油约 100g、白糖 100g，中小火把糖熬化，再转最小火让糖慢慢变色。糖从淡黄变到红色、接近枣红色时，立刻倒入辣椒、花椒和炸好的鸡翅，快速翻炒到糖衣均匀裹满鸡翅，最后撒白芝麻。",
      ],
    ],
    tips: [
      ["按比例缩放", "视频是 36 个鸡翅的大批量版本，少做时腌料、淀粉、干料都按比例减少即可。"],
      ["先去血水", "鸡翅腥味主要来自骨缝里的血水，剪开或挤血水这一步很值得做。"],
      ["辣椒要洗", "干辣椒洗一下再剪，既干净，也不容易下锅立刻糊。"],
      ["复炸看颜色", "复炸别硬套时间，淀粉壳变完整金黄色就捞，鸡肉颜色更深，不如外壳颜色好判断。"],
    ],
  },
  {
    id: "green-pepper-eggplant-bao-cunlv",
    title: "村驴青椒茄子包",
    category: "面点",
    status: "已整理",
    image: "assets/green-pepper-eggplant-bao-cover.jpg",
    source: {
      label: "抖音：村驴《好吃到跺脚的青椒茄子包，从发面到和馅全套保姆级教程》",
      url: "https://v.douyin.com/gyzeHFOJksQ/",
    },
    summary:
      "素馅青椒茄子包，从发面、炒馅到二次醒发都讲得很细。500g 面粉做 14-16 个包子，馅料先大火炒干再调味，包前再拌葱花，蒸出来皮蓬松宣软、内馅软糯酱香。",
    badges: ["素馅包子", "发面教程", "14-16个", "酱香微辣"],
    metrics: [
      ["500g", "中筋面粉"],
      ["750g + 250g", "茄子 + 辣椒"],
      ["50g", "黄豆酱"],
      ["15分钟 + 12分钟", "二次醒发 + 上汽蒸制"],
    ],
    ratios: [
      ["发面", "中筋面粉 500g、泡打粉 3g、温水 260g、酵母 5g、白糖 5g、食用油 15g。温水先留一小口，按面粉吸水性调整。"],
      ["馅料蔬菜", "茄子 750g、辣椒 250g、葱花 50g。茄子和辣椒先炒干，葱花等到包之前再拌进去。"],
      ["炒馅调味", "盐 2g；黄豆酱 50g、生抽 20g、蚝油 20g、老抽 3g、粗辣椒面 20g、细辣椒粉 10g、白糖 6g、鸡精 2g。"],
      ["蒸制", "关火温水二次醒发 15 分钟；重新开大火，水开上汽后计时 12 分钟，关火焖 2 分钟再开盖。"],
      ["半量参考", "做 7-8 个包子：面粉 250g、泡打粉 1.5g、温水约 130g、酵母 2.5g、白糖 2.5g、油约 8g；馅料和调味全部减半。"],
    ],
    shopping: [
      ["中筋面粉", "500g；英国可直接买 plain flour。"],
      ["泡打粉", "3g，可选；没有可以不放，但放了更蓬松。"],
      ["酵母", "5g，普通 instant yeast/fast action yeast 都可以。"],
      ["白糖", "发面 5g，炒馅 6g。"],
      ["食用油", "发面 15g；炒馅另备，比平时炒菜稍多一点，想要油亮口感可中途再补少量油。"],
      ["茄子", "750g，选皮嫩的长茄子；如果皮厚偏老，建议削皮。"],
      ["螺丝椒/青椒", "250g；英国不好买螺丝椒时，可用 long green pepper 或 mild green chilli。"],
      ["大葱", "葱花 50g，包之前再拌入馅里。"],
      ["盐", "2g，用来帮助茄子和辣椒出水变软。"],
      ["黄豆酱", "50g；不是郫县豆瓣酱。英国中超可找 soybean paste/黄豆酱。"],
      ["生抽", "20g。"],
      ["蚝油", "20g。"],
      ["老抽", "3g，只负责调颜色。"],
      ["粗辣椒面", "20g；不能吃辣可减量。"],
      ["细辣椒粉", "10g；不能吃辣可省略或少放。"],
      ["鸡精", "2g；不吃可省，鲜味会淡一点。"],
      ["蒸笼布/蒸纸", "防粘用；没有蒸笼布可以用打孔蒸纸。"],
    ],
    steps: [
      [
        "混合干粉",
        "盆里放中筋面粉 500g 和泡打粉 3g，先搅匀。泡打粉不要提前兑水，否则容易失效；没有泡打粉也可以不放。",
      ],
      [
        "化开酵母",
        "260g 温水里加入酵母 5g、白糖 5g，搅到融化。水温接近体温、摸起来一点也不烫即可，太热会影响酵母活性。",
      ],
      [
        "和成絮状",
        "把酵母水缓缓倒进面粉里，一边倒一边搅，哪里有干粉就往哪里倒。最后留一小口水先别倒，因为不同面粉吸水性不同；如果盆里还偏干，再把这口水补进去。",
      ],
      [
        "加油成团",
        "面粉基本变成絮状后，加入食用油 15g，揉成一个粗糙面团。刚开始会有点粘手，戴手套更顺。只要盆底和手上没有明显干粉，就先停手。",
      ],
      [
        "松弛再揉",
        "盖上盖子让面团松弛 5 分钟，让面粉和水充分融合。时间到后再简单揉一圈，面团会明显变光滑。",
      ],
      [
        "一次发酵",
        "面团盖保鲜膜，放温暖处发到 2 倍大。视频里家里约 24 度，发酵约 50 分钟；温度低要延长，温度高要缩短。判断状态比时间更准：体积明显膨胀，手指在中间戳洞后形成小窝但不塌，内部是均匀蜂窝。",
      ],
      [
        "切蔬菜",
        "茄子 750g 斜切片、切条、再切丁；丁不用太小，因为炒后会缩水。辣椒 250g 同样斜着切条再切丁。葱花 50g 单独放，等包之前再拌进馅里。",
      ],
      [
        "大火炒干馅料",
        "锅里放比平时炒菜稍多一点的油，转圈铺满锅底，大火把锅和油烧热约 1 分钟。倒入茄子和辣椒，先翻炒几下，再加盐 2g，继续最大火翻炒 4-5 分钟。炒到茄子、辣椒都变软，茄子丁变得半透明，锅里水汽明显减少。",
      ],
      [
        "调味炒香",
        "转最小火，想少油就直接放调料，想让包子馅油亮可以再补一点油并拌匀。加入黄豆酱 50g、生抽 20g、蚝油 20g、老抽 3g、粗辣椒面 20g、细辣椒粉 10g、白糖 6g、鸡精 2g。再转大火，把调料和茄子炒匀，闻到明显酱香和辣椒香就关火。",
      ],
      [
        "冷却馅料",
        "炒好的馅应该偏干，不应有很多油或汤汁渗出；油太多后面包的时候容易漏。为了赶上发面速度，可以把馅放进冰箱保鲜层快速降温。",
      ],
      [
        "揉面排气",
        "发好的面取出放案板上排气。只要不粘案板，暂时不要加干粉，避免面皮打花。先正常揉几下，再把面从一头搓成长条、搓细，整理回来后重复一次，让面团像橡皮泥一样细腻。",
      ],
      [
        "分面剂",
        "把面团搓成粗长条，均匀分成 14-16 个面剂，每个约 56g。面剂表面薄薄扑粉，团圆后用手掌压扁，盖上保鲜膜防止风干，用一个拿一个。",
      ],
      [
        "包前拌葱",
        "从冰箱取出茄子馅，倒入葱花 50g 拌匀。馅有一点温度没关系，但不能烫，否则会影响包子皮状态。",
      ],
      [
        "擀皮",
        "案板上少撒干粉防粘，取一个面剂，从边缘往中间擀，整体擀到和手掌差不多大。不要把皮擀得太薄，中间要厚一些，蒸出来才容易白胖蓬松。",
      ],
      [
        "包馅入笼",
        "放入茄子馅，用拇指在皮内侧把褶子一点点推出来并收口。馅在放置时会稍微出油，每包几个就重新搅拌一下再打馅。包好后放进铺了蒸笼布的笼屉，包子之间留出膨胀空间。",
      ],
      [
        "二次醒发",
        "蒸锅加水，大火先烧到手指试水像洗澡水一样温热但不烫，马上关火。放上包子笼屉，盖盖二次醒发 15 分钟。记住这 15 分钟全程关火。醒发好后轻按包子皮，会马上回弹。",
      ],
      [
        "蒸制和焖锅",
        "重新盖好盖子，开大火。等水开上汽，也就是锅边开始冒热气后，计时 12 分钟。时间到马上关火，但不要立刻开盖，焖 2 分钟再开，包子不容易塌。",
      ],
    ],
    tips: [
      ["水要留一口", "260g 是视频配方，但面粉品牌和环境湿度会影响吸水性，最后一小口水按状态加。"],
      ["馅要炒干", "茄子本身吸油又出水，大火 4-5 分钟要炒到丁变软、变半透明、锅里水汽少，这样后面更好包。"],
      ["黄豆酱别买错", "这里用黄豆酱做酱香味，不是郫县豆瓣酱；如果用豆瓣酱会更咸更辣，味型会变。"],
      ["葱花最后放", "葱花提前炒或提前拌进去会出水、变塌，包之前再拌更香。"],
      ["皮不能太薄", "包子皮要留厚度，尤其是中间厚一些，蒸出来才白胖宣软。"],
      ["二发看回弹", "二次醒发不是只看 15 分钟，轻按马上回弹才算到位；按下去不回弹说明还不够，塌下去则可能过发。"],
    ],
  },
  {
    id: "linyi-fried-chicken-cunlv",
    title: "村驴临沂炒鸡",
    category: "鲁菜",
    status: "已整理",
    image: "assets/linyi-fried-chicken-cover.jpg",
    source: {
      label: "小红书：村驴《从选鸡开始❗️手把手教您做临沂炒鸡❗️》（2024-07-28）",
      url: "https://www.xiaohongshu.com/discovery/item/66a59e7c000000000600f9a1",
    },
    summary:
      "家常版临沂炒鸡，原视频用约 1500g 鸡肉。关键是鸡块切小并充分擦干，热锅热油先煸姜，再大火把鸡肉炒到焦边、锅里的油变清，再下香料和炒鸡酱炖煮，最后大火收汁。",
    badges: ["临沂风味", "酱香微辣", "3斤鸡", "下饭硬菜"],
    metrics: [
      ["1500g", "鸡肉"],
      ["80g / 70g / 60g", "葱白 / 大蒜 / 姜"],
      ["10g : 10g : 20g : 40g", "生抽 : 老抽 : 蚝油 : 海鲜酱"],
      ["5-8分钟 + 25分钟", "大火炒鸡 + 中小火炖"],
    ],
    ratios: [
      ["主料", "鸡肉 1500g 左右，最好用二斤多的小公鸡；买不到可用半只肉食鸡或带骨鸡腿块，切小块。"],
      ["辅料", "大葱白 80g、大蒜 70g、姜 60g、螺丝椒 120g；红椒可少量用于配色。"],
      ["香料", "八角 2 个、白芷 2 片、青花椒 1 捏、红花椒 1 捏、香叶 1 片、毛砂仁 1 个、干辣椒段适量。白芷是核心香料；毛砂仁没有可不放。"],
      ["炒鸡酱", "生抽 1 勺约 10g、老抽 1 勺约 10g、蚝油 2 勺约 20g、海鲜酱 1 勺半约 40g。"],
      ["海鲜酱替代", "作者评论补充：没有海鲜酱可用 30g 甜面酱 + 10g 番茄酱，或 15g 甜面酱 + 15g 黄豆酱 + 10g 番茄酱。"],
      ["减量参考", "做 750g 鸡肉时，辅料、香料、炒鸡酱全部减半；炖煮时间按鸡块大小看状态，通常约 18-22 分钟后再收汁。"],
    ],
    shopping: [
      ["小公鸡/鸡肉", "1500g 左右；原视频推荐二斤多小公鸡，买不到可用半只肉食鸡。英国可用带骨鸡腿、鸡翅根和鸡块混合，尽量切小。"],
      ["大葱白", "80g，切斜的马蹄块。"],
      ["大蒜", "70g，约两头，去掉头尾更容易出味。"],
      ["姜", "60g，切片；这道菜姜要多，少了不香。"],
      ["螺丝椒", "120g，切滚刀块；英国可用 long green pepper 或 mild green chilli。"],
      ["红椒", "少量，可选，只用于配色。"],
      ["八角", "2 个。"],
      ["白芷", "2 片，作者强调不可少；中超或中药材区常见。"],
      ["青花椒", "1 捏。"],
      ["红花椒", "1 捏；花椒别放多，多了容易发苦。"],
      ["香叶", "1 片。"],
      ["毛砂仁", "1 个，可选；放的话从中间剪开。买不到就省略。"],
      ["干辣椒段", "适量，按自己能吃辣的程度加。"],
      ["生抽", "1 勺，约 10g。"],
      ["老抽", "1 勺，约 10g，上色用。"],
      ["蚝油", "2 勺，约 20g。"],
      ["海鲜酱", "1 勺半，约 40g；没有就按替代比例用甜面酱、番茄酱和黄豆酱调。"],
      ["猪油", "1 勺，增香；没有可不放，但香气会弱一点。"],
      ["食用油", "比平时炒菜稍多。"],
      ["味精", "收汁后 1 勺；不吃味精可省，但饭店味会淡一点。"],
    ],
    steps: [
      [
        "选鸡和切块",
        "优先选二斤多的小公鸡。原视频买不到小公鸡，所以用半只肉食鸡，鸡肉约 1500g。炒鸡的鸡块要比炖鸡更小，太大的块再对半切开，这样后面炒香和入味都更快。",
      ],
      [
        "洗净后充分擦干",
        "鸡块如果清洗过，一定要把水分充分擦干或沥干。水太多会让鸡肉在锅里先出汤，炒制时间被拉长，肉容易发柴，腥味也更明显。",
      ],
      [
        "准备辅料",
        "大葱白 80g 切斜的马蹄块；大蒜 70g 去掉头尾；姜 60g 切片；螺丝椒 120g 切滚刀块。红椒只是配色，自己吃可以不放。",
      ],
      [
        "准备香料",
        "八角 2 个、白芷 2 片、青花椒 1 捏、红花椒 1 捏、香叶 1 片、毛砂仁 1 个、干辣椒段适量。白芷不要省；毛砂仁没有可以不放，放的话从中间剪开，香味才容易出来。",
      ],
      [
        "调炒鸡酱",
        "碗里放生抽 1 勺约 10g、老抽 1 勺约 10g、蚝油 2 勺约 20g、海鲜酱 1 勺半约 40g，搅匀备用。海鲜酱没有时，可用作者评论里的替代比例调。",
      ],
      [
        "热锅润锅",
        "锅里放比平时炒菜稍多一点的油，再加 1 勺猪油。开最大火转锅，让油铺满锅底并把锅烧透。看到油面开始冒烟，说明锅和油都足够热。",
      ],
      [
        "先煸姜片",
        "油热后先下姜片，全程保持大火，把姜的香味煸出来。煸到姜片边缘微微焦黄，再下鸡肉。",
      ],
      [
        "下鸡肉先煎 20 秒",
        "鸡肉下锅后不要立刻翻，先用铲子按平摊开，让底面煎约 20 秒。这样鸡肉不容易粘锅，也能更快出焦香。",
      ],
      [
        "大火炒到焦边",
        "继续最大火翻炒。刚开始锅底汤汁会浑浊，这时不要急着下料炖。一直炒到每块鸡肉表面都有微微焦边，锅里的油从浑浊变清，才说明鸡肉炒到位。视频提示因为鸡肉含水量不同，这一步约 5-8 分钟。",
      ],
      [
        "下香料和酱",
        "倒入香料快速翻炒出香味，再倒入调好的炒鸡酱，把酱料炒香。酱料下锅后要炒开、炒匀，让鸡块表面先挂上酱香。",
      ],
      [
        "加开水炖",
        "加入开水，水量要完全没过鸡块。烧开后盖上盖子，转中小火，也就是比小火稍微大一点，炖约 25 分钟。",
      ],
      [
        "挑香料并收汁",
        "时间到后，把八角、白芷、香叶、毛砂仁等香料夹出来；喜欢吃姜片的话姜可以留。转大火，先下大蒜，炒到蒜香出来。",
      ],
      [
        "下葱椒",
        "倒入大葱和螺丝椒，红椒可选。继续大火翻炒均匀，同时把汤汁收浓。理想状态是汤汁变得浓稠、能挂在鸡块上，但锅底还有一点酱汁，不是完全炒干。",
      ],
      [
        "调味出锅",
        "汤汁收拢后加入 1 勺味精，再翻炒均匀即可盛出。原视频没有额外加盐，咸味主要来自生抽、老抽、蚝油和海鲜酱，出锅前先尝味再决定是否补盐。",
      ],
    ],
    tips: [
      ["鸡块要小", "临沂炒鸡不是大块炖鸡，块小才容易炒出焦边并快速入味。"],
      ["水分一定擦干", "鸡肉带水下锅，会先煮后炒，锅里浑汤太久，肉容易柴。"],
      ["大火炒到位再炖", "看到鸡肉有焦边、锅里油变清，再下香料和酱。油还浑浊时就加水，味道会腥、不香。"],
      ["白芷是核心", "白芷在视频里被强调不可少；毛砂仁是可选项，买不到可以省。"],
      ["花椒别贪多", "青花椒和红花椒各 1 捏即可，多了容易苦。"],
      ["必须加开水", "加冷水会让锅温骤降，肉质和香气都会受影响。"],
      ["海鲜酱替代", "没有海鲜酱时，按 30g 甜面酱 + 10g 番茄酱，或 15g 甜面酱 + 15g 黄豆酱 + 10g 番茄酱调。"],
    ],
  },
  {
    id: "placeholder-1",
    title: "下一道硬菜",
    category: "待整理",
    status: "待整理",
    image: "",
    summary: "留给你下一条视频链接。",
    badges: ["预留"],
  },
  {
    id: "placeholder-2",
    title: "朋友聚餐菜单",
    category: "待整理",
    status: "待整理",
    image: "",
    summary: "可以把适合一起上桌的菜放到这里。",
    badges: ["预留"],
  },
];

let activeRecipeId = recipes[0].id;
let activeFilter = "all";

const recipeList = document.querySelector("#recipeList");
const recipeDetail = document.querySelector("#recipeDetail");
const searchInput = document.querySelector("#recipeSearch");
const cardTemplate = document.querySelector("#recipeCardTemplate");
const copyButton = document.querySelector("#copyShoppingList");
const printButton = document.querySelector("#printRecipe");

function getActiveRecipe() {
  return recipes.find((recipe) => recipe.id === activeRecipeId) || recipes[0];
}

function recipeMatches(recipe, query) {
  const haystack = [
    recipe.title,
    recipe.category,
    recipe.summary,
    ...(recipe.badges || []),
    ...(recipe.shopping || []).flat(),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.trim().toLowerCase());
}

function renderList() {
  const query = searchInput.value;
  const visibleRecipes = recipes.filter((recipe) => {
    const filterOk = activeFilter === "all" || recipe.category === activeFilter;
    return filterOk && recipeMatches(recipe, query);
  });

  recipeList.replaceChildren();

  visibleRecipes.forEach((recipe) => {
    const node = cardTemplate.content.firstElementChild.cloneNode(true);
    node.dataset.recipeId = recipe.id;
    node.classList.toggle("is-active", recipe.id === activeRecipeId);
    node.querySelector(".recipe-card-image").src =
      recipe.image || makePlaceholderImage(recipe.title);
    node.querySelector(".recipe-card-image").alt = `${recipe.title} 图片`;
    node.querySelector(".recipe-card-meta").textContent = `${recipe.category} · ${recipe.status}`;
    node.querySelector(".recipe-card-title").textContent = recipe.title;
    node.querySelector(".recipe-card-note").textContent = recipe.summary;
    node.addEventListener("click", () => {
      activeRecipeId = recipe.id;
      renderList();
      renderDetail();
    });
    recipeList.append(node);
  });
}

function makePlaceholderImage(title) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="176" height="160" viewBox="0 0 176 160">
      <rect width="176" height="160" fill="#dceaf0"/>
      <rect x="18" y="20" width="140" height="120" rx="12" fill="#fff8e9"/>
      <circle cx="88" cy="76" r="30" fill="#b83c32" opacity=".88"/>
      <path d="M58 106h60" stroke="#2f755e" stroke-width="8" stroke-linecap="round"/>
      <text x="88" y="134" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="#24211f">${title.slice(0, 6)}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderDetail() {
  const recipe = getActiveRecipe();

  if (!recipe.shopping) {
    recipeDetail.innerHTML = `
      <section class="recipe-hero">
        <div class="recipe-hero-copy">
          <div class="badge-row">${(recipe.badges || []).map((badge) => `<span class="badge">${badge}</span>`).join("")}</div>
          <h2>${recipe.title}</h2>
          <p>${recipe.summary}</p>
        </div>
        <div class="recipe-hero-image" style="background-image:url('${recipe.image || makePlaceholderImage(recipe.title)}')"></div>
      </section>
    `;
    return;
  }

  recipeDetail.innerHTML = `
    <section class="recipe-hero">
      <div class="recipe-hero-copy">
        <div class="badge-row">${recipe.badges.map((badge) => `<span class="badge">${badge}</span>`).join("")}</div>
        <h2>${recipe.title}</h2>
        <p>${recipe.summary}</p>
        <div class="source-line">
          <span>来源整理：</span>
          <a href="${recipe.source.url}" target="_blank" rel="noreferrer">${recipe.source.label}</a>
        </div>
      </div>
      <div class="recipe-hero-image" style="background-image:url('${recipe.image}')"></div>
    </section>

    <section class="detail-grid">
      <aside class="shopping-panel">
        <div class="section-title">
          <h3>采购清单</h3>
          <span class="section-kicker">${recipe.shopping.length} 项</span>
        </div>
        <ul class="checklist">
          ${recipe.shopping
            .map(
              ([name, note], index) => `
                <li>
                  <input type="checkbox" id="ingredient-${index}" />
                  <label for="ingredient-${index}">
                    <span class="ingredient-name">${name}</span>
                    <span class="ingredient-note">${note}</span>
                  </label>
                </li>`
            )
            .join("")}
        </ul>
      </aside>

      <div class="main-panel">
        <div class="metrics">
          ${recipe.metrics
            .map(
              ([value, label]) => `
                <div class="metric">
                  <strong>${value}</strong>
                  <span>${label}</span>
                </div>`
            )
            .join("")}
        </div>

        <div class="section-title">
          <h3>核心比例</h3>
          <span class="section-kicker">按原视频口播整理</span>
        </div>
        <div class="ratio-grid">
          ${recipe.ratios
            .map(
              ([label, value]) => `
                <div class="ratio">
                  <strong>${label}</strong>
                  <span>${value}</span>
                </div>`
            )
            .join("")}
        </div>

        <div class="section-title">
          <h3>详细步骤</h3>
          <span class="section-kicker">${recipe.steps.length} 步</span>
        </div>
        <ol class="steps">
          ${recipe.steps
            .map(
              ([title, body]) => `
                <li>
                  <div>
                    <span class="step-title">${title}</span>
                    <p class="step-body">${body}</p>
                  </div>
                </li>`
            )
            .join("")}
        </ol>

        <div class="tips">
          ${recipe.tips
            .map(
              ([title, body]) => `
                <div class="tip">
                  <strong>${title}</strong>
                  <p>${body}</p>
                </div>`
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function copyShoppingList() {
  const recipe = getActiveRecipe();
  if (!recipe.shopping) return;

  const text = [
    `${recipe.title}采购清单`,
    ...recipe.shopping.map(([name, note]) => `- ${name}：${note}`),
  ].join("\n");

  navigator.clipboard
    .writeText(text)
    .then(() => showToast("采购清单已复制"))
    .catch(() => showToast("复制失败，请手动选择清单"));
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.append(toast);
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  window.setTimeout(() => {
    toast.classList.remove("is-visible");
    window.setTimeout(() => toast.remove(), 220);
  }, 1800);
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeFilter = tab.dataset.filter;
    document.querySelectorAll(".tab").forEach((item) => {
      item.classList.toggle("is-active", item === tab);
    });
    renderList();
  });
});

searchInput.addEventListener("input", renderList);
copyButton.addEventListener("click", copyShoppingList);
printButton.addEventListener("click", () => window.print());

renderList();
renderDetail();

if (window.lucide) {
  window.lucide.createIcons();
}
