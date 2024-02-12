
# baiyuanneko's WriteUp

## Quiz 0

在`index.html`的`<script>`标签里可以发现`signup()`会首先调用`ysqd()`然后`return -1`，后面真正的注册流程就不执行了。

解决方法有很多，比如可以直接把注册的那两行代码抄出来手动在控制台执行一遍：

```js
await fetch("https://rb.chihuo2104.dev/api/huohuorb?module=challenge0-signup&token=" + {Server_Provided_Token} + "&username=" + user

location.href="/quiz0-end"
```

### Quiz 0 彩蛋红包

如果上一步之后执行了`ysqd()`函数，会跳转到新页面，这时可以在`<script>`标签中发现 `navigator.userAgent.includes("Game Browser")` 这么一行。

在 UserAgent 字符串最后加一段 `Game Browser` 然后再请求即可。

## Quiz 1

这个每提交一次是能看到实时的分数的，所以可以判断哪题是对的哪题是错的。所以 Quiz 1 的大部分题目可以通过逐一尝试可能的结果来得到答案。

> 在“2023宁外这一年”汉字艺术展中，宁波外国语学校S2505班的司翰诺同学使用了什么词语来总结宁外这一年？

常规地使用 Google 和百度可能搜索不出来。这里用到的来源是微信公众号。微信公众号不能被其它搜索爬虫抓取，所以很容易被忽略。但是国内的中小学用这个来发布信息还是挺多的。

使用微信自带的**搜一搜**功能可以搜索微信公众号的内容。或者，电脑端搜索引擎中**搜狗**也可以搜到微信中的内容。总之方法还是很多的。

> 在2023年10月左右，Archlinux的什么编程语言相关包升级使得pacman本地产生冲突必须手动处理后才可以升级？

常见的编程语言就那么几种，全都试一遍就行了。

> 如图所示的是一个连杆机构，在力Fd和Fr的作用下处于平衡状态，此时推杆1、推杆2水平，摆杆处于垂直位置，请问在这个连杆中，销轴的受力形式是什么？（提示：以“受”开头，有三个汉字）

作业帮 / 小猿搜题 搜这题会发现能找到一道与这题题目中提到的结构一样但是问的对象不一样的题目。~~当你发现老师的题目在网上搜不到原题的时候.webp~~

题目中提示我们答案以受开头且有三个汉字，既然是汉字不用计算，我们可以打开 Google 搜索一下力都有哪几种受力形式。容易找到一个结果是 `材料受力方式的三种类型是：拉伸、剪切、弯曲。`那就全试一遍吧。试了之后可以发现答案是受剪切。

> 如果用数据结构的队列构建杨辉三角，编写输出前n行杨辉三角的python程序代码如下，请在程序划线处填入合适的代码。

```python
n = input()
que = []
head = tail = 0
que[tail] = 1
print(que[tail])
tail += 1
for i in range(2, n+1):
  que[tail] = 1
  print(que[tail], end=“”)
  tail += 1
  for j in range(i-2):
    ________________
    print(que[tail], end=“”)
    tail += 1
    head += 1
  que[tail] = 1
  print(que[tail], end=“”)
  tail += 1
  head += 1 
```

问 ChatGPT 可以得到答案 `que[tail] = que[head] + que[head + 1]`。

> 浙江省八一学校是浙江省军民共建的第一所学校，那么请问浙江省八一学校在什么时候成立？

Google 或百度都应该能很容易得到 `20230222` 的结果。

### Quiz 1 彩蛋红包

五题全部答对可以得到彩蛋红包。

## Quiz 2

容易发现题目参考的是 Hackergame 2023 的 小型大语言模型星球 这题。但是要略难一点，因为这题要求目标字符串中同时包含几个单词。我们可以直接使用 Hackergame 2023 官方题解中的 `gcg.py`，并作必要的修改（将`target string`修改为`good great awesome`）可以得到80分结果。

更极限一点的话，85 分可能还可行。100 分要求就有点高了，在 `RTX 3080 x2` 上跑了 34 分钟也没跑出来，而且这时候的 Loss 不低且降不下来，感觉希望不大。

## Quiz 3

简单 XSS。观察 `<script>` 标签可以发现需要评委端调用 `approve()`。

直接写 `<img src="./neko" onerror="approve()" />` 即可。