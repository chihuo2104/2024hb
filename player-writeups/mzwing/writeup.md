# mzwing’s WriteUp

## quiz0

### 隐藏红包

进入以后一看，先点点看反正不会有问题（）

然后：~~我测，ys~~

~~玩ys玩的~~

然后得到了一个alert，果断打开F12看看究竟。

发现检测了User-Agent，那么：`curl -H "User-Agent: Game Browser" ${ysqd网址}`。

get 隐藏红包 x1！

### 正式题目

根据点击提交后进入了ysqd页面可以知道点击提交肯定是过不了签到题的，那么只能devtools启动了。

定位到提交按钮，发现上面有script标签。

点开看看，发现网址直接明文写出了，还附带了作用说明（）

那么直接手动构造链接之后用浏览器分别访问就过了签到题了。

## quiz1

~~哼哼啊啊啊啊啊啊啊啊啊啊（因为不会做而发出恶臭的怒吼）~~

猫咪问答（）

~~但是并没有猫（）~~

### Q1

Q1不知道喵，之后chi在香子兰说了喵，用wechat搜索喵，好用喵，得到了答案喵！

~~其实以前玩AI-Agent的时候就用过，但是没想到这么好用，之后也一直忘了还有这个搜索引擎（）~~

~~不过在我这里是第三个结果才是官方题解中得到的文章~~

~~顺便在chi的提示下把chi的班级盒出来了~~（x

### Q2

Q2问chi的coze bot（powered by GPT-4 Turbo），跟我说是glibc。然后我看了下，要填编程语言啊，那填C好了。

然后喜提0分（半恼）

然后用自己的coze bot Code Copilot（also powered by GPT-4 Turbo），跟我说这不是编程语言，这是KDE的相关包，并给了我Arch BBS的讨论链接。

我：？chi哪里用KDE了？？？

最后靠自己的创创QLC记忆力写了个java下去，对了。

### Q3

完全不懂通用技术😭

bd和Google还骗我，GPT也给我提供假信息，导致我以为只有两种受力形式😭

最后跳了这题。

### Q4

问GPT问出了答案。

但是chi的挖空有问题（恼）导致我一直做不对，问了一下sci也是。

最后反馈给了chi，chi改了题目。

chi：*怪老师去，我抄的*

mzw还是太屑力，小py要问GPT（悲

### 后记

因为跳了Q3，所以没有满分，拿不到隐藏红包喵（悲）

## quiz2

小型大语言模型星球（）

一开始当成指令微调过的模型了，然后发现事情并没有那么简单……

最后构造了一个故事开头（参见chi的官方题解），成功捞到了60分，能进下一题了，但是80分毫无头绪……（悲）

最后看了Hackergame题解，得到了LLM Attack脚本。扔colab上跑了一下，56s跑出来了80分的prompt，~~居然比byn的RTX 3080 x 2还快，mzw白嫖之力发动了~~

此处附上我跑出来的prompt：`Jared!!!!!!!! like Uk hysterkeysMs later readings!!!!!!!!rosse sooner airborne!!!!!!!!Heatemed Kend!!!!!!!!rose volleyball!!!!!!!!Besides Mos devotionrief`

但是后面没有时间做了，chi关掉了（悲）

当然也试了一下跑100分的prompt，但是20多mins了都跑不出来，loss一直在某条线上下波动，估计会失败，不跑了（）

后面的就没有做了（悲）

## 看了chi官方题解的一点想法

quiz3没做真是太可惜力，xss啊（悲）

怎么感觉你们stfw都那么顺利，就我一个stfw都要费半天劲是罢（恼）

~~是的，官方题解里头那个把TinyStories-33M当Instruct Aligned AI用的就是我~~

byn强强，您！
