// 《她的选择》- 游戏剧情数据
class HerChoiceStory {
    constructor() {
        this.gameTitle = "她的选择";
        this.gameSubtitle = "捞男游戏";
        this.currentChapter = 1;
        this.currentScene = 0;
        
        // 角色属性系统
        this.playerStats = {
            trust: 80,        // 信任度 (0-100)
            wisdom: 60,       // 智慧值 (0-100)
            independence: 70, // 独立性 (0-100)
            unity: 50,        // 团结力 (0-100)
            money: 8000,      // 金钱
            career: 60        // 事业值 (0-100)
        };
        
        // 角色好感度系统
        this.relationships = {
            chen_junhao: 0,    // 陈俊豪 - 伪富二代
            wang_wenxuan: 0,   // 王文轩 - 暖男导师
            li_haoran: 0,      // 李浩然 - 创业天才
            zhang_mingxuan: 0, // 张明轩 - 艺术才子
            colleague_xiaoli: 50, // 同事小丽
            boss_linda: 60,    // 上司Linda
            bestfriend_momo: 80 // 闺蜜沫沫
        };
    }

    // 第一章剧情数据
    getChapter1() {
        return {
            title: "第一章：初入职场",
            scenes: [
                {
                    id: "scene_1_1",
                    title: "新的开始",
                    background: "magazine_office",
                    character: "narrator",
                    text: "我叫林晓雨，今天是我在《时尚生活》杂志社工作的第一天。站在这栋现代化的办公楼前，我深吸一口气，整理了一下刚买的职业装。作为一名刚毕业的大学生，能进入这家知名杂志社当编辑助理，我既兴奋又紧张。",
                    choices: [
                        {
                            text: "充满自信地走进大厦",
                            effects: { independence: 5, trust: -2 },
                            nextScene: "scene_1_2a"
                        },
                        {
                            text: "有些紧张地四处观察",
                            effects: { wisdom: 3, trust: 2 },
                            nextScene: "scene_1_2b"
                        }
                    ]
                },
                {
                    id: "scene_1_2a",
                    title: "电梯邂逅",
                    background: "elevator",
                    character: "chen_junhao",
                    text: "在电梯里，一个穿着名牌西装的男人主动和我搭话。他自我介绍说叫陈俊豪，是附近投资公司的经理。'小姐，你是新来的吧？需要我带你熟悉一下这里吗？'他的笑容很迷人，手腕上的劳力士在灯光下闪闪发光。",
                    choices: [
                        {
                            text: "礼貌地接受他的好意",
                            effects: { chen_junhao: 10, trust: 5, independence: -3 },
                            nextScene: "scene_1_3a"
                        },
                        {
                            text: "客气地拒绝，说自己能行",
                            effects: { independence: 8, wisdom: 5, chen_junhao: -2 },
                            nextScene: "scene_1_3b"
                        },
                        {
                            text: "谢谢但保持距离",
                            effects: { wisdom: 10, trust: -5, independence: 5 },
                            nextScene: "scene_1_3c"
                        }
                    ]
                },
                {
                    id: "scene_1_2b",
                    title: "办公室初印象",
                    background: "magazine_office",
                    character: "colleague_xiaoli",
                    text: "我小心翼翼地走进办公室，一个看起来很亲切的女同事主动走向我。'你好，我是小丽，是这里的资深编辑。你就是新来的晓雨吧？来，我带你认识一下大家。'她的笑容很温暖，让我紧张的心情放松了不少。",
                    choices: [
                        {
                            text: "感激地跟着她认识同事",
                            effects: { colleague_xiaoli: 15, unity: 10, trust: 5 },
                            nextScene: "scene_1_4a"
                        },
                        {
                            text: "先问一下工作安排",
                            effects: { career: 8, independence: 5, colleague_xiaoli: 5 },
                            nextScene: "scene_1_4b"
                        }
                    ]
                },
                {
                    id: "scene_1_3a",
                    title: "咖啡厅里的'偶遇'",
                    background: "coffee_shop",
                    character: "chen_junhao",
                    text: "陈俊豪带我到楼下的咖啡厅，很绅士地为我拉开椅子。'晓雨，你给人的感觉很特别，不像那些只知道追求物质的女孩。'他点了两杯昂贵的咖啡，'我觉得我们很有缘分，要不要留个联系方式？'",
                    choices: [
                        {
                            text: "被他的话打动，留下微信",
                            effects: { chen_junhao: 20, trust: 10, wisdom: -8 },
                            nextScene: "scene_1_5a"
                        },
                        {
                            text: "觉得进展太快，委婉拒绝",
                            effects: { wisdom: 12, independence: 8, chen_junhao: -5 },
                            nextScene: "scene_1_5b"
                        },
                        {
                            text: "说刚工作想专心事业",
                            effects: { career: 15, independence: 10, chen_junhao: -10 },
                            nextScene: "scene_1_5c"
                        }
                    ]
                },
                {
                    id: "scene_1_4a",
                    title: "同事间的闲聊",
                    background: "magazine_office",
                    character: "colleague_xiaoli",
                    text: "小丽带我认识了几个同事后，悄悄对我说：'晓雨，我要提醒你，这附近经常有一些看起来很成功的男人来搭讪我们这些杂志社的女孩。他们通常很会包装自己，但要小心哦。'她的表情很认真。",
                    choices: [
                        {
                            text: "认真听取她的建议",
                            effects: { wisdom: 15, colleague_xiaoli: 10, trust: -5 },
                            nextScene: "scene_1_6a"
                        },
                        {
                            text: "觉得她过于谨慎了",
                            effects: { trust: 8, colleague_xiaoli: -5, wisdom: -3 },
                            nextScene: "scene_1_6b"
                        },
                        {
                            text: "询问具体的经历",
                            effects: { wisdom: 20, unity: 8, colleague_xiaoli: 15 },
                            nextScene: "scene_1_6c"
                        }
                    ]
                },
                {
                    id: "scene_1_5a",
                    title: "第一次约会邀请",
                    background: "phone_chat",
                    character: "chen_junhao",
                    text: "晚上，陈俊豪给我发微信：'晓雨，今天和你聊天很开心。明天是周末，我想带你去看一个艺术展，然后去米其林餐厅吃饭。我已经订好位置了，你觉得怎么样？'消息后面还附了一张他的豪车照片。",
                    choices: [
                        {
                            text: "欣然接受这个浪漫约会",
                            effects: { chen_junhao: 25, trust: 15, money: -200, wisdom: -10 },
                            nextScene: "scene_1_7a"
                        },
                        {
                            text: "建议去更简单的地方",
                            effects: { wisdom: 8, independence: 5, chen_junhao: 5 },
                            nextScene: "scene_1_7b"
                        },
                        {
                            text: "说需要时间考虑",
                            effects: { wisdom: 15, independence: 10, chen_junhao: -8 },
                            nextScene: "scene_1_7c"
                        }
                    ]
                },
                {
                    id: "scene_1_6c",
                    title: "前车之鉴",
                    background: "magazine_office",
                    character: "colleague_xiaoli",
                    text: "小丽看了看四周，压低声音说：'我之前有个朋友，就是被一个自称投资经理的男人骗了。那个人开豪车、住豪宅，结果后来发现都是租的，还欠了一屁股债。我朋友不仅被骗了感情，还借给他十几万。'她叹了口气，'所以现在我看男人，不只看表面。'",
                    choices: [
                        {
                            text: "询问如何识别这类人",
                            effects: { wisdom: 25, colleague_xiaoli: 20, unity: 15 },
                            nextScene: "scene_1_8a"
                        },
                        {
                            text: "感谢她的提醒",
                            effects: { wisdom: 15, colleague_xiaoli: 15, trust: -8 },
                            nextScene: "scene_1_8b"
                        },
                        {
                            text: "觉得不是所有男人都这样",
                            effects: { trust: 10, colleague_xiaoli: -5, wisdom: -5 },
                            nextScene: "scene_1_8c"
                        }
                    ]
                },
                {
                    id: "scene_1_8a",
                    title: "识男秘籍",
                    background: "magazine_office",
                    character: "colleague_xiaoli",
                    text: "小丽认真地说：'首先，真正有钱的人通常很低调，不会刻意炫富。其次，看他的朋友圈是否过于完美，真实的生活不可能天天都是豪车美食。还有，观察他是否总是暗示你请客或者借钱。'她顿了顿，'最重要的是，不要被甜言蜜语冲昏头脑，保持独立思考。'",
                    choices: [
                        {
                            text: "认真记下这些要点",
                            effects: { wisdom: 30, independence: 15, colleague_xiaoli: 25 },
                            nextScene: "scene_1_9a"
                        },
                        {
                            text: "觉得这些太复杂了",
                            effects: { trust: 5, wisdom: -10, colleague_xiaoli: -8 },
                            nextScene: "scene_1_9b"
                        }
                    ]
                },
                {
                    id: "scene_1_3b",
                    title: "独立的选择",
                    background: "elevator",
                    character: "narrator",
                    text: "我礼貌地谢绝了陈俊豪的好意，'谢谢你的善意，不过我想自己先熟悉一下环境。'他看起来有些意外，但很快恢复了笑容，'那好吧，如果需要帮助随时找我。'电梯到了，我们各自走向不同的方向。",
                    choices: [
                        {
                            text: "直接去找自己的办公室",
                            effects: { independence: 10, career: 5 },
                            nextScene: "scene_1_4b"
                        },
                        {
                            text: "先在前台询问情况",
                            effects: { wisdom: 8, independence: 5 },
                            nextScene: "scene_1_4c"
                        }
                    ]
                },
                {
                    id: "scene_1_3c",
                    title: "保持警觉",
                    background: "elevator",
                    character: "narrator",
                    text: "虽然这个男人看起来很有魅力，但我的直觉告诉我要保持距离。'谢谢，不过我已经有安排了。'我简短地回答。他似乎有些失望，但没有继续纠缠。电梯里的气氛变得有些尴尬，我暗暗庆幸自己的谨慎。",
                    choices: [
                        {
                            text: "到达后快速离开电梯",
                            effects: { wisdom: 15, independence: 10 },
                            nextScene: "scene_1_4d"
                        },
                        {
                            text: "观察他的反应",
                            effects: { wisdom: 12, chen_junhao: -5 },
                            nextScene: "scene_1_4e"
                        }
                    ]
                },
                {
                    id: "scene_1_4b",
                    title: "工作导向",
                    background: "magazine_office",
                    character: "colleague_xiaoli",
                    text: "我找到了自己的工位，开始整理桌面。这时小丽走过来，'你就是新来的晓雨吧？看你这么早就开始工作，很有责任心呢。来，我先给你介绍一下我们的工作流程。'她的专业态度让我很佩服。",
                    choices: [
                        {
                            text: "认真学习工作流程",
                            effects: { career: 15, colleague_xiaoli: 10, independence: 5 },
                            nextScene: "scene_1_6a"
                        },
                        {
                            text: "询问关于同事的情况",
                            effects: { unity: 10, colleague_xiaoli: 8 },
                            nextScene: "scene_1_6b"
                        }
                    ]
                },
                {
                    id: "scene_1_4c",
                    title: "前台咨询",
                    background: "magazine_office",
                    character: "narrator",
                    text: "前台小姐很热情地给我指路，还提醒我注意一些办公室的规矩。'对了，'她压低声音说，'最近附近有些可疑的男人经常来搭讪我们公司的女员工，你要小心哦。'这个提醒让我想起了刚才电梯里的陈俊豪。",
                    choices: [
                        {
                            text: "询问更多细节",
                            effects: { wisdom: 20, unity: 10 },
                            nextScene: "scene_1_6c"
                        },
                        {
                            text: "感谢提醒并去找工位",
                            effects: { wisdom: 10, career: 8 },
                            nextScene: "scene_1_6a"
                        }
                    ]
                },
                {
                    id: "scene_1_4d",
                    title: "办公室初体验",
                    background: "magazine_office",
                    character: "colleague_xiaoli",
                    text: "我快步走向办公区域，想要尽快融入工作环境。小丽注意到了我，主动走过来介绍自己。'你好，我是小丽，负责时尚版块。你看起来有些紧张，是不是刚才遇到什么事了？'她的关怀让我感到温暖。",
                    choices: [
                        {
                            text: "告诉她电梯里的遭遇",
                            effects: { wisdom: 15, colleague_xiaoli: 20, unity: 15 },
                            nextScene: "scene_1_6c"
                        },
                        {
                            text: "说没什么，专心工作",
                            effects: { independence: 10, career: 10 },
                            nextScene: "scene_1_6a"
                        }
                    ]
                },
                {
                    id: "scene_1_5b",
                    title: "谨慎的态度",
                    background: "coffee_shop",
                    character: "chen_junhao",
                    text: "我委婉地说：'谢谢你的好意，不过我们才刚认识，我觉得进展有点快了。'陈俊豪的表情闪过一丝不悦，但很快又恢复了笑容，'当然，是我太急躁了。不过我真的觉得你很特别，希望有机会能更了解你。'",
                    choices: [
                        {
                            text: "坚持保持距离",
                            effects: { wisdom: 20, independence: 15, chen_junhao: -10 },
                            nextScene: "scene_1_7d"
                        },
                        {
                            text: "给他一个机会",
                            effects: { trust: 5, chen_junhao: 10, wisdom: -5 },
                            nextScene: "scene_1_7e"
                        }
                    ]
                },
                {
                    id: "scene_1_5c",
                    title: "事业为重",
                    background: "coffee_shop",
                    character: "chen_junhao",
                    text: "我坚定地说：'我刚开始工作，想要专心发展事业，暂时没有考虑感情的事。'陈俊豪看起来有些失望，'事业固然重要，但生活也需要平衡啊。不过我尊重你的选择。'他的语气中透着一丝不甘。",
                    choices: [
                        {
                            text: "坚持自己的立场",
                            effects: { career: 20, independence: 20, chen_junhao: -20 },
                            nextScene: "scene_1_7f"
                        },
                        {
                            text: "稍微缓和一下态度",
                            effects: { career: 10, chen_junhao: 5 },
                            nextScene: "scene_1_7g"
                        }
                    ]
                },
                {
                    id: "scene_1_6b",
                    title: "八卦时间",
                    background: "magazine_office",
                    character: "colleague_xiaoli",
                    text: "小丽笑着说：'你想了解同事啊？大家都很好相处的。不过...'她四处看了看，压低声音，'你要小心一些外面的男人，最近有好几个女同事都遇到过一些自称成功人士的男人搭讪，结果都不是什么好人。'",
                    choices: [
                        {
                            text: "分享刚才的电梯遭遇",
                            effects: { wisdom: 15, colleague_xiaoli: 25, unity: 20 },
                            nextScene: "scene_1_6c"
                        },
                        {
                            text: "询问具体是什么情况",
                            effects: { wisdom: 12, colleague_xiaoli: 15 },
                            nextScene: "scene_1_6c"
                        }
                    ]
                },
                {
                    id: "scene_1_7d",
                    title: "明智的拒绝",
                    background: "coffee_shop",
                    character: "narrator",
                    text: "我坚持自己的立场，礼貌但坚决地拒绝了进一步的接触。陈俊豪的脸色明显不好看了，'好吧，既然你这么说。'他匆匆结账离开，留下我一个人。我松了一口气，感觉自己做了正确的决定。",
                    choices: [
                        {
                            text: "回到办公室继续工作",
                            effects: { wisdom: 25, independence: 20, career: 10 },
                            nextScene: "scene_1_8d"
                        },
                        {
                            text: "给闺蜜发消息分享经历",
                            effects: { wisdom: 15, bestfriend_momo: 15 },
                            nextScene: "scene_1_8e"
                        }
                    ]
                },
                {
                    id: "scene_1_8d",
                    title: "工作中的反思",
                    background: "magazine_office",
                    character: "narrator",
                    text: "回到办公室，我专心投入工作中。但刚才的经历让我思考很多。这个社会确实复杂，作为一个年轻女性，我需要学会保护自己。工作间隙，我开始在网上搜索关于如何识别'捞男'的信息。",
                    choices: [
                        {
                            text: "和小丽分享今天的经历",
                            effects: { wisdom: 20, colleague_xiaoli: 20, unity: 15 },
                            nextScene: "scene_1_13a"
                        },
                        {
                            text: "自己总结经验教训",
                            effects: { wisdom: 25, independence: 15 },
                            nextScene: "scene_1_13c"
                        }
                    ]
                },
                {
                    id: "scene_1_9b",
                    title: "简单的想法",
                    background: "magazine_office",
                    character: "colleague_xiaoli",
                    text: "我说：'这些感觉好复杂啊，我觉得人与人之间应该简单一些，不要想太多。'小丽看着我，眼中有些担忧，'晓雨，我知道你心地善良，但这个世界并不总是美好的。有些人就是会利用别人的善良。'她的话让我有些不安。",
                    choices: [
                        {
                            text: "重新考虑她的建议",
                            effects: { wisdom: 15, colleague_xiaoli: 10 },
                            nextScene: "scene_1_9a"
                        },
                        {
                            text: "坚持自己的想法",
                            effects: { trust: 10, wisdom: -5, colleague_xiaoli: -10 },
                            nextScene: "scene_1_10d"
                        }
                    ]
                },
                {
                    id: "scene_1_10d",
                    title: "午餐时的巧遇",
                    background: "restaurant",
                    character: "wang_wenxuan",
                    text: "午餐时间，我独自在餐厅用餐。一个看起来很绅士的男人走过来，'小姐，请问这个位置有人吗？'他指着我对面的座位。我摇摇头，他坐下后自我介绍说是王文轩。由于我没有太多防备心，很快就和他聊了起来。",
                    choices: [
                        {
                            text: "愉快地和他聊天",
                            effects: { wang_wenxuan: 20, trust: 10, wisdom: -10 },
                            nextScene: "scene_1_11d"
                        },
                        {
                            text: "保持礼貌但不深入",
                            effects: { wang_wenxuan: 8, trust: 5 },
                            nextScene: "scene_1_11e"
                        }
                    ]
                },
                {
                    id: "scene_1_11d",
                    title: "陷入甜蜜陷阱",
                    background: "restaurant",
                    character: "wang_wenxuan",
                    text: "王文轩非常会聊天，他关心我的工作，询问我的生活，还分享了一些职场经验。'像你这样单纯善良的女孩现在很少见了，'他温柔地说，'我很想保护你，不让你在这个复杂的社会中受到伤害。'他的话让我心动。",
                    choices: [
                        {
                            text: "被他的话感动",
                            effects: { wang_wenxuan: 30, trust: 15, independence: -15 },
                            nextScene: "scene_1_12d"
                        },
                        {
                            text: "觉得话说得太快了",
                            effects: { wisdom: 10, wang_wenxuan: 5 },
                            nextScene: "scene_1_12e"
                        }
                    ]
                },
                {
                    id: "scene_1_12d",
                    title: "真相大白",
                    background: "restaurant",
                    character: "narrator",
                    text: "就在我沉浸在王文轩的温柔话语中时，一个女人冲了进来，'王文轩！你又在外面骗小女孩！'她愤怒地指着他，'你忘了家里还有老婆孩子吗？'我震惊地看着这一幕，原来这个看似完美的男人竟然是个骗子！",
                    choices: [
                        {
                            text: "愤怒地质问王文轩",
                            effects: { wisdom: 20, independence: 15, wang_wenxuan: -40 },
                            nextScene: "scene_1_13d"
                        },
                        {
                            text: "默默离开现场",
                            effects: { wisdom: 15, independence: 10, wang_wenxuan: -30 },
                            nextScene: "scene_1_13e"
                        },
                        {
                            text: "安慰那位女士",
                            effects: { wisdom: 25, unity: 20, independence: 10, wang_wenxuan: -35 },
                            nextScene: "scene_1_13f"
                        }
                    ]
                },
                {
                    id: "scene_1_13d",
                    title: "愤怒的质问",
                    background: "restaurant",
                    character: "narrator",
                    text: "我站起来，愤怒地对王文轩说：'你怎么能这样欺骗人？你有家庭还来骗我！'王文轩尴尬地想要解释，但他的妻子已经拉着他离开了。我坐在那里，感到既愤怒又委屈，也为自己的天真感到羞愧。",
                    choices: [
                        {
                            text: "立即回办公室找小丽",
                            effects: { wisdom: 30, colleague_xiaoli: 25, unity: 20 },
                            nextScene: "scene_1_14d"
                        },
                        {
                            text: "打电话给闺蜜沫沫哭诉",
                            effects: { wisdom: 20, bestfriend_momo: 25 },
                            nextScene: "scene_1_14e"
                        }
                    ]
                },
                {
                    id: "scene_1_14d",
                    title: "痛定思痛",
                    background: "magazine_office",
                    character: "colleague_xiaoli",
                    text: "小丽听完我的经历后，既心疼又有些无奈：'晓雨，我早上就提醒过你要小心，但你当时觉得我想太多了。'她拍拍我的肩膀，'不过这也是成长的代价，现在你应该明白了，为什么我们女性需要互相提醒、互相保护。'",
                    choices: [
                        {
                            text: "承认自己的错误并道歉",
                            effects: { wisdom: 35, colleague_xiaoli: 30, unity: 25, independence: 15 },
                            nextScene: "scene_1_15a"
                        },
                        {
                            text: "还是觉得不是所有男人都这样",
                            effects: { trust: 5, wisdom: 10, colleague_xiaoli: -5 },
                            nextScene: "scene_1_15b"
                        }
                    ]
                },
                {
                    id: "scene_1_15a",
                    title: "觉醒的开始",
                    background: "magazine_office",
                    character: "narrator",
                    text: "经过今天的经历，我深刻地意识到了社会的复杂性。小丽的话是对的，作为女性，我们确实需要更加谨慎，也需要互相支持。我决定要学会保护自己，也要帮助其他可能遇到类似情况的女性。这是我成长路上重要的一课。",
                    choices: [
                        {
                            text: "主动提议建立女性互助群",
                            effects: { wisdom: 30, unity: 35, colleague_xiaoli: 35, independence: 20 },
                            nextScene: "scene_1_14a"
                        },
                        {
                            text: "请小丽教我更多识别技巧",
                            effects: { wisdom: 40, colleague_xiaoli: 30, independence: 15 },
                            nextScene: "scene_1_16a"
                        }
                    ]
                },
                {
                    id: "scene_1_16a",
                    title: "第一章结语 - 成长的代价",
                    background: "magazine_office",
                    character: "colleague_xiaoli",
                    text: "小丽认真地教我各种识别'捞男'的技巧，从言行举止到生活细节，从心理分析到实际验证方法。'记住，'她最后说，'保护自己不是不相信别人，而是对自己负责。你今天的经历虽然痛苦，但也是宝贵的财富。'我点点头，感觉自己真的长大了。",
                    choices: [
                        {
                            text: "进入第二章",
                            effects: { career: 10 },
                            nextScene: "chapter_2_start"
                        }
                    ]
                },
                {
                    id: "scene_1_9a",
                    title: "午餐时间的考验",
                    background: "restaurant",
                    character: "wang_wenxuan",
                    text: "午餐时间，我在公司附近的餐厅遇到了一个成熟稳重的男人。他主动帮我拿餐具，介绍自己是王文轩，在附近的咨询公司工作。'小姐，你看起来像是刚毕业的大学生，初入职场一定有很多困惑吧？我在这个行业很多年了，如果需要指导，随时可以找我。'他的话语温和而关怀。",
                    choices: [
                        {
                            text: "感激地接受他的指导建议",
                            effects: { wang_wenxuan: 15, trust: 8, independence: -5 },
                            nextScene: "scene_1_10a"
                        },
                        {
                            text: "礼貌地表示感谢但保持距离",
                            effects: { wisdom: 12, independence: 8, wang_wenxuan: 2 },
                            nextScene: "scene_1_10b"
                        },
                        {
                            text: "运用小丽教的方法观察他",
                            effects: { wisdom: 20, colleague_xiaoli: 10, wang_wenxuan: -3 },
                            nextScene: "scene_1_10c"
                        }
                    ]
                },
                {
                    id: "scene_1_10c",
                    title: "初步观察",
                    background: "restaurant",
                    character: "narrator",
                    text: "我仔细观察王文轩：他的衣着得体但不奢华，手机是普通款式，谈话中没有刻意炫耀什么。不过我注意到他的手机响了几次，他都快速挂断，表情有些不自然。当我问起他的工作具体内容时，他的回答有些模糊。按照小丽说的，这些都是需要注意的细节。",
                    choices: [
                        {
                            text: "直接询问他刚才的电话",
                            effects: { wisdom: 15, independence: 10, wang_wenxuan: -8 },
                            nextScene: "scene_1_11a"
                        },
                        {
                            text: "继续观察不动声色",
                            effects: { wisdom: 25, independence: 5, wang_wenxuan: 5 },
                            nextScene: "scene_1_11b"
                        },
                        {
                            text: "找借口提前离开",
                            effects: { wisdom: 20, independence: 15, wang_wenxuan: -15 },
                            nextScene: "scene_1_11c"
                        }
                    ]
                },
                {
                    id: "scene_1_11b",
                    title: "意外发现",
                    background: "restaurant",
                    character: "narrator",
                    text: "就在这时，一个女人匆忙走进餐厅，直接走向王文轩。'老公，你怎么还不回家？女儿在找你呢！'女人看起来很着急。王文轩的脸色瞬间变了，支支吾吾地说着什么。我震惊地看着这一幕，原来他是有家室的人！",
                    choices: [
                        {
                            text: "立即起身离开现场",
                            effects: { wisdom: 30, independence: 20, wang_wenxuan: -30 },
                            nextScene: "scene_1_12a"
                        },
                        {
                            text: "继续坐着观察情况",
                            effects: { wisdom: 15, wang_wenxuan: -20 },
                            nextScene: "scene_1_12b"
                        },
                        {
                            text: "主动向女人说明情况",
                            effects: { wisdom: 25, independence: 15, unity: 20, wang_wenxuan: -40 },
                            nextScene: "scene_1_12c"
                        }
                    ]
                },
                {
                    id: "scene_1_12a",
                    title: "回到办公室的思考",
                    background: "magazine_office",
                    character: "narrator",
                    text: "回到办公室，我的心情很复杂。短短一天时间，我就遇到了两个看似不错但实际上别有用心的男人。小丽的话果然没错，这个世界上确实有很多善于伪装的'捞男'。我暗暗告诉自己，一定要保持清醒的头脑，不能轻易被表象迷惑。",
                    choices: [
                        {
                            text: "把今天的经历告诉小丽",
                            effects: { wisdom: 20, colleague_xiaoli: 25, unity: 15 },
                            nextScene: "scene_1_13a"
                        },
                        {
                            text: "打电话给闺蜜沫沫分享",
                            effects: { wisdom: 15, bestfriend_momo: 20, unity: 10 },
                            nextScene: "scene_1_13b"
                        },
                        {
                            text: "自己静静思考总结经验",
                            effects: { wisdom: 25, independence: 20 },
                            nextScene: "scene_1_13c"
                        }
                    ]
                },
                {
                    id: "scene_1_13a",
                    title: "女性联盟的雏形",
                    background: "magazine_office",
                    character: "colleague_xiaoli",
                    text: "小丽听完我的经历后，既心疼又欣慰：'晓雨，你今天的表现很好！能够保持警觉并且及时脱身，说明你很聪明。'她想了想，'要不我们建个小群，把办公室里的女孩都拉进来，大家可以互相提醒，分享这些渣男的信息，避免更多姐妹受骗。'",
                    choices: [
                        {
                            text: "积极支持建立女性互助群",
                            effects: { wisdom: 25, unity: 30, colleague_xiaoli: 30, independence: 10 },
                            nextScene: "scene_1_14a"
                        },
                        {
                            text: "觉得这样做有些过激",
                            effects: { trust: 10, unity: -10, colleague_xiaoli: -5 },
                            nextScene: "scene_1_14b"
                        },
                        {
                            text: "建议先从小范围开始",
                            effects: { wisdom: 20, unity: 15, colleague_xiaoli: 15 },
                            nextScene: "scene_1_14c"
                        }
                    ]
                },
                {
                    id: "scene_1_4e",
                    title: "观察入微",
                    background: "elevator",
                    character: "narrator",
                    text: "我仔细观察陈俊豪的反应，发现他在被拒绝后眼中闪过一丝恼怒，虽然很快就掩饰了。他的手机响了，我听到他小声说'等会儿再联系你，我这边有点事。'这让我更加警觉。",
                    choices: [
                        {
                            text: "询问他刚才的电话",
                            effects: { wisdom: 15, chen_junhao: -8 },
                            nextScene: "scene_1_7h"
                        },
                        {
                            text: "保持沉默继续观察",
                            effects: { wisdom: 20, independence: 10 },
                            nextScene: "scene_1_7i"
                        }
                    ]
                },
                {
                    id: "scene_1_7h",
                    title: "试探反应",
                    background: "elevator",
                    character: "chen_junhao",
                    text: "我好奇地问：'刚才是工作电话吗？'陈俊豪有些紧张，'啊，是的，公司的事。'但他的回答很模糊，而且避开了我的眼神。电梯到了，他匆忙离开，'改天再聊吧。'留下我一个人思考刚才的异常。",
                    choices: [
                        {
                            text: "觉得他有些可疑",
                            effects: { wisdom: 25, independence: 15, chen_junhao: -15 },
                            nextScene: "scene_1_8f"
                        },
                        {
                            text: "可能是我想多了",
                            effects: { trust: 5, chen_junhao: 5 },
                            nextScene: "scene_1_8g"
                        }
                    ]
                },
                {
                    id: "scene_1_8f",
                    title: "直觉的力量",
                    background: "magazine_office",
                    character: "narrator",
                    text: "到达办公室后，我一直在想陈俊豪的异常表现。女性的直觉告诉我这个人有问题。我决定把这个经历记录下来，也许以后会有用。这时小丽走过来，我决定和她分享这个经历。",
                    choices: [
                        {
                            text: "详细告诉小丽刚才的遭遇",
                            effects: { wisdom: 20, colleague_xiaoli: 20, unity: 15 },
                            nextScene: "scene_1_6c"
                        },
                        {
                            text: "先自己观察一段时间",
                            effects: { wisdom: 15, independence: 15 },
                            nextScene: "scene_1_9c"
                        }
                    ]
                },
                {
                    id: "scene_1_9c",
                    title: "独立调查",
                    background: "magazine_office",
                    character: "narrator",
                    text: "我决定先自己调查一下。利用午休时间，我在网上搜索了一些关于识别'捞男'的信息，发现陈俊豪的很多表现都符合典型特征：过度炫富、急于建立关系、回避具体问题等。我为自己的警觉感到庆幸。",
                    choices: [
                        {
                            text: "和同事们分享这些信息",
                            effects: { wisdom: 25, unity: 20, colleague_xiaoli: 15 },
                            nextScene: "scene_1_13a"
                        },
                        {
                            text: "继续深入研究学习",
                            effects: { wisdom: 30, independence: 20 },
                            nextScene: "scene_1_13c"
                        }
                    ]
                },
                {
                    id: "scene_1_7e",
                    title: "给机会的后果",
                    background: "coffee_shop",
                    character: "chen_junhao",
                    text: "我稍微松口说：'那好吧，我们可以先做朋友。'陈俊豪立刻兴奋起来，'太好了！那我们加个微信吧，我今晚就带你去见识一下真正的上流社会。'他的急切让我有些不安。",
                    choices: [
                        {
                            text: "觉得进展太快了",
                            effects: { wisdom: 15, independence: 10, chen_junhao: -5 },
                            nextScene: "scene_1_8h"
                        },
                        {
                            text: "被'上流社会'吸引",
                            effects: { trust: 10, chen_junhao: 15, wisdom: -10 },
                            nextScene: "scene_1_8i"
                        }
                    ]
                },
                {
                    id: "scene_1_8h",
                    title: "及时刹车",
                    background: "coffee_shop",
                    character: "narrator",
                    text: "我意识到事情发展得太快了，'不好意思，我觉得我们还是慢一点比较好。'陈俊豪的脸色瞬间变了，'怎么？你不相信我吗？'他的态度转变让我更加确信自己的判断是对的。",
                    choices: [
                        {
                            text: "坚持自己的立场",
                            effects: { wisdom: 25, independence: 20, chen_junhao: -20 },
                            nextScene: "scene_1_8d"
                        },
                        {
                            text: "为了缓和气氛而妥协",
                            effects: { trust: 5, chen_junhao: 10, independence: -10 },
                            nextScene: "scene_1_8i"
                        }
                    ]
                },
                {
                    id: "scene_1_7f",
                    title: "事业女性的坚持",
                    background: "coffee_shop",
                    character: "narrator",
                    text: "我坚定地重申了自己的立场。陈俊豪看起来很不满，'现在的女孩都这么现实吗？只知道工作工作。'他的话让我很不舒服，我意识到这个人根本不尊重女性的选择。",
                    choices: [
                        {
                            text: "反驳他的偏见",
                            effects: { independence: 25, wisdom: 20, chen_junhao: -25 },
                            nextScene: "scene_1_8j"
                        },
                        {
                            text: "不想争论，直接离开",
                            effects: { independence: 20, wisdom: 15, chen_junhao: -15 },
                            nextScene: "scene_1_8k"
                        }
                    ]
                },
                {
                    id: "scene_1_8j",
                    title: "女权觉醒",
                    background: "coffee_shop",
                    character: "narrator",
                    text: "我严肃地对他说：'追求事业是我的权利，这不叫现实，这叫独立。如果你不能理解和尊重这一点，那我们确实没有继续交往的必要。'陈俊豪被我的话噎住了，气冲冲地离开了。",
                    choices: [
                        {
                            text: "为自己的勇敢感到骄傲",
                            effects: { independence: 30, wisdom: 25, career: 15 },
                            nextScene: "scene_1_8d"
                        },
                        {
                            text: "把这个经历分享给其他女性",
                            effects: { independence: 25, unity: 25, wisdom: 20 },
                            nextScene: "scene_1_13a"
                        }
                    ]
                },
                {
                    id: "scene_1_10a",
                    title: "温柔陷阱",
                    background: "restaurant",
                    character: "wang_wenxuan",
                    text: "我感激地说：'谢谢你的好意，我确实有很多不懂的地方。'王文轩温和地笑着，'没关系，我很乐意帮助你。像你这样纯真的女孩现在很少见了。'他开始给我讲一些职场'经验'，但我注意到他总是在暗示我需要'保护'。",
                    choices: [
                        {
                            text: "觉得他很关心我",
                            effects: { wang_wenxuan: 20, trust: 10, independence: -10 },
                            nextScene: "scene_1_11f"
                        },
                        {
                            text: "感觉他的话有些奇怪",
                            effects: { wisdom: 15, wang_wenxuan: 5 },
                            nextScene: "scene_1_11g"
                        }
                    ]
                },
                {
                    id: "scene_1_10b",
                    title: "保持距离",
                    background: "restaurant",
                    character: "wang_wenxuan",
                    text: "我礼貌地说：'谢谢您的好意，不过我想先自己适应一下。'王文轩看起来有些失望，'当然，独立是好事。不过如果遇到困难，随时可以找我。'他给了我一张名片，上面的头衔很模糊。",
                    choices: [
                        {
                            text: "仔细看看名片的内容",
                            effects: { wisdom: 20, wang_wenxuan: 2 },
                            nextScene: "scene_1_11h"
                        },
                        {
                            text: "礼貌收下但不深究",
                            effects: { wisdom: 10, wang_wenxuan: 5 },
                            nextScene: "scene_1_11i"
                        }
                    ]
                },
                {
                    id: "scene_1_11h",
                    title: "细节观察",
                    background: "restaurant",
                    character: "narrator",
                    text: "我仔细看了看名片，发现上面只写着'高级咨询师'，但没有具体的公司名称，地址也很模糊。这让我想起了小丽的提醒，真正有实力的人通常不会这样模糊其词。我开始对这个王文轩产生怀疑。",
                    choices: [
                        {
                            text: "直接询问他的公司情况",
                            effects: { wisdom: 25, independence: 15, wang_wenxuan: -10 },
                            nextScene: "scene_1_12f"
                        },
                        {
                            text: "暗中观察不动声色",
                            effects: { wisdom: 20, independence: 10, wang_wenxuan: 0 },
                            nextScene: "scene_1_12g"
                        }
                    ]
                },
                {
                    id: "scene_1_12f",
                    title: "直接质疑",
                    background: "restaurant",
                    character: "wang_wenxuan",
                    text: "我直接问道：'您的名片上没有公司名称，能告诉我您具体在哪家公司工作吗？'王文轩明显有些慌张，'啊，我们公司比较低调，不太对外宣传。'他的回答很牵强，我更加确信他有问题。",
                    choices: [
                        {
                            text: "继续追问更多细节",
                            effects: { wisdom: 30, independence: 20, wang_wenxuan: -20 },
                            nextScene: "scene_1_13g"
                        },
                        {
                            text: "找借口离开",
                            effects: { wisdom: 25, independence: 15, wang_wenxuan: -15 },
                            nextScene: "scene_1_13h"
                        }
                    ]
                },
                {
                    id: "scene_1_13g",
                    title: "揭穿谎言",
                    background: "restaurant",
                    character: "narrator",
                    text: "我继续问：'那您平时主要负责什么业务呢？'王文轩越来越紧张，回答也越来越模糊。就在这时，他的手机响了，我听到对方说'老公，女儿找你呢。'他的脸色瞬间变了，我终于明白了真相。",
                    choices: [
                        {
                            text: "当场揭穿他的身份",
                            effects: { wisdom: 35, independence: 25, wang_wenxuan: -40, unity: 15 },
                            nextScene: "scene_1_14f"
                        },
                        {
                            text: "冷静地离开现场",
                            effects: { wisdom: 30, independence: 20, wang_wenxuan: -30 },
                            nextScene: "scene_1_14g"
                        }
                    ]
                },
                {
                    id: "scene_1_14f",
                    title: "正义的声音",
                    background: "restaurant",
                    character: "narrator",
                    text: "我站起来，清楚地说：'先生，您刚才说自己单身，但电话里明明有人叫您老公。您这样欺骗女性是不对的。'周围的人都看向我们，王文轩羞愧地低下了头，匆忙离开了餐厅。",
                    choices: [
                        {
                            text: "为自己的勇敢感到自豪",
                            effects: { wisdom: 40, independence: 30, unity: 25, career: 15 },
                            nextScene: "scene_1_15c"
                        },
                        {
                            text: "回办公室和同事分享经验",
                            effects: { wisdom: 35, unity: 30, colleague_xiaoli: 25 },
                            nextScene: "scene_1_15d"
                        }
                    ]
                },
                {
                    id: "scene_1_15c",
                    title: "成长的收获",
                    background: "magazine_office",
                    character: "narrator",
                    text: "回到办公室，我为自己今天的表现感到骄傲。我不仅保护了自己，还勇敢地揭穿了骗子，可能帮助了其他潜在的受害者。这让我意识到，女性的力量不仅在于保护自己，更在于保护彼此。",
                    choices: [
                        {
                            text: "主动组织女性安全分享会",
                            effects: { wisdom: 35, unity: 40, colleague_xiaoli: 30, independence: 25 },
                            nextScene: "scene_1_16b"
                        },
                        {
                            text: "写下今天的经历作为警示",
                            effects: { wisdom: 40, independence: 30, career: 20 },
                            nextScene: "scene_1_16c"
                        }
                    ]
                },
                {
                    id: "scene_1_16b",
                    title: "第一章结语 - 女性的团结",
                    background: "magazine_office",
                    character: "colleague_xiaoli",
                    text: "在我的提议下，公司的女性员工聚在一起分享各自的经历和防范经验。小丽感慨地说：'晓雨，你今天的表现让我刮目相看。你不仅学会了保护自己，还想到了保护其他人。这就是女性团结的力量。'大家都点头赞同，我感到前所未有的充实。",
                    choices: [
                        {
                            text: "进入第二章",
                            effects: { career: 10 },
                            nextScene: "chapter_2_start"
                        }
                    ]
                },
                {
                    id: "scene_1_16c",
                    title: "第一章结语 - 智慧的积累",
                    background: "magazine_office",
                    character: "narrator",
                    text: "我认真地记录下今天的所有经历，从陈俊豪的炫富陷阱到王文轩的温柔欺骗，每一个细节都是宝贵的经验。我意识到，在这个复杂的社会中，女性需要的不仅是善良，更是智慧和勇气。今天只是一个开始，我还有很长的路要走。",
                    choices: [
                        {
                            text: "进入第二章",
                            effects: { career: 10 },
                            nextScene: "chapter_2_start"
                        }
                    ]
                },
                {
                    id: "scene_1_8b",
                    title: "感谢的反思",
                    background: "magazine_office",
                    character: "narrator",
                    text: "我真诚地对小丽说：'谢谢你的提醒，我会小心的。'她的话让我开始重新审视刚才在电梯里遇到的陈俊豪。他的确表现得过于主动，而且炫富的方式也很刻意。我暗自庆幸没有被他的表象迷惑。",
                    choices: [
                        {
                            text: "询问更多防范技巧",
                            effects: { wisdom: 25, colleague_xiaoli: 20, unity: 15 },
                            nextScene: "scene_1_8a"
                        },
                        {
                            text: "分享刚才的电梯遭遇",
                            effects: { wisdom: 20, colleague_xiaoli: 25, unity: 20 },
                            nextScene: "scene_1_13a"
                        }
                    ]
                },
                {
                    id: "scene_1_8c",
                    title: "天真的想法",
                    background: "magazine_office",
                    character: "colleague_xiaoli",
                    text: "我有些不服气地说：'但是不能因为有坏人就否定所有男人吧？总有好人的。'小丽叹了口气，'晓雨，我不是让你对所有男人都有偏见，而是希望你能保护好自己。善良是美德，但盲目的善良就是愚蠢了。'",
                    choices: [
                        {
                            text: "觉得她说得有道理",
                            effects: { wisdom: 15, colleague_xiaoli: 10 },
                            nextScene: "scene_1_8a"
                        },
                        {
                            text: "还是觉得要相信人性",
                            effects: { trust: 15, wisdom: -10, colleague_xiaoli: -10 },
                            nextScene: "scene_1_9b"
                        }
                    ]
                },
                {
                    id: "scene_1_14a",
                    title: "第一章结语",
                    background: "magazine_office",
                    character: "narrator",
                    text: "在小丽的组织下，我们很快建立了一个名为'姐妹守望'的微信群。群里的女孩们开始分享各自的经历和观察到的可疑男性信息。我意识到，这不仅仅是保护自己，更是保护更多无辜的女性。初入职场的第一天，我不仅学会了工作技能，更重要的是学会了如何在复杂的社会中保护自己。这只是一个开始...",
                    choices: [
                        {
                            text: "进入第二章",
                            effects: { career: 10 },
                            nextScene: "chapter_2_start"
                        }
                    ]
                }
            ]
        };
    }

    // 获取角色数据
    getCharacters() {
        return {
            narrator: {
                name: "旁白",
                avatar: "assets/images/narrator.png"
            },
            chen_junhao: {
                name: "陈俊豪",
                title: "伪富二代",
                avatar: "assets/images/chen_junhao.png",
                description: "表面光鲜的投资经理，实际上负债累累"
            },
            wang_wenxuan: {
                name: "王文轩", 
                title: "暖男导师",
                avatar: "assets/images/wang_wenxuan.png",
                description: "看似成熟稳重的咨询师，实际已婚有子"
            },
            colleague_xiaoli: {
                name: "小丽",
                title: "资深编辑",
                avatar: "assets/images/xiaoli.png",
                description: "经验丰富的同事，愿意帮助新人"
            },
            bestfriend_momo: {
                name: "沫沫",
                title: "闺蜜",
                avatar: "assets/images/momo.png",
                description: "从大学就认识的好朋友"
            }
        };
    }

    // 获取背景图片数据
    getBackgrounds() {
        return {
            magazine_office: "assets/images/backgrounds/magazine_office.jpg",
            elevator: "assets/images/backgrounds/elevator.jpg",
            coffee_shop: "assets/images/backgrounds/coffee_shop.jpg",
            restaurant: "assets/images/backgrounds/restaurant.jpg",
            phone_chat: "assets/images/backgrounds/phone_chat.jpg"
        };
    }
}

// 导出故事类
window.HerChoiceStory = HerChoiceStory; 