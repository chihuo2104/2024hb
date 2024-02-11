// 静态文件 HTML 页
import {generate} from "~/scripts/clientid";
import config from "~/scripts/config";
import {GenerateToken} from "~/scripts/token";

export default defineEventHandler(async (event) => {
    const head = getHeaders(event)
    const ua = head['user-agent'] || ''
    const ip = head["x-forwarded-for"] || ''
    const cynocid = getRouterParam(event, 'cynocid') || ''
    if (cynocid === '' || cynocid !== generate(ua, ip)) {
        setResponseHeader(event, "content-type", "text/html;charset=utf8")
        return `<img src="https://upload-bbs.mihoyo.com/upload/2022/10/19/02711c97bc7fa445d87655db1666e851_2779652806545815616.png"/><h1>啊哦，你被大风机关盯上了！[Errno -1]</h1>您的网络环境存在风险，请稍后再试。`
    }

    const  t = Math.floor(new Date().getTime() / 1000)
    const respt = await fetch(config.huohuorb + "?module=challenge3-in&t=" + t + "&cid=" + cynocid + "&tk=" + GenerateToken(config.token, t), {method:"POST"})
    const rest = await respt.json()
    const respt2 = await fetch(config.huohuorb + "?module=gettime&challenge=challenge2-commit&t=" + t + "&cid=" + cynocid + "&tk=" + GenerateToken(config.token, t), {method:"POST"})
    const rest2 = await respt2.json()

    const respt3 = await fetch(config.huohuorb + "?module=getnote&challenge=challenge3-comment&t=" + t + "&cid=" + cynocid + "&tk=" + GenerateToken(config.token, t), {method:"POST"})
    const rest3 = await respt3.json()
    let comment = ""
    if (rest3.code === 200) {
        comment = atob(rest3.note)
    }

    if (rest.code !== 200 || rest2.code !== 200) {
        setResponseHeader(event, "content-type", "text/html;charset=utf8")
        return `<img src="https://upload-bbs.mihoyo.com/upload/2022/10/19/02711c97bc7fa445d87655db1666e851_2779652806545815616.png"/><h1>啊哦，你被大风机关盯上了！[Errno -1]</h1>您的网络环境存在风险，请稍后再试。`
    }

    // @ts-ignore
    const resp = `<!-- This HTML is served in server frontend -->
<!-- This HTML is served in server frontend -->
<!DOCTYPE HTML>
<html>
    <head>
        <title>决赛评论平台</title>
        <meta charset="utf8">
        <!--Develop used.-->
        <!-- <link rel="stylesheet" href="dist.css"/> -->
        <style>
          /*
! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.container {
  width: 100%;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

.m-10 {
  margin: 2.5rem;
}

.m-2 {
  margin: 0.5rem;
}

.block {
  display: block;
}

.flex {
  display: flex;
}

.h-1\\/2 {
  height: 50%;
}

.w-full {
  width: 100%;
}

.max-w-5xl {
  max-width: 64rem;
}

.place-items-center {
  place-items: center;
}

.justify-center {
  justify-content: center;
}

.border-r-2 {
  border-right-width: 2px;
}

.bg-cyan-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(165 243 252 / var(--tw-bg-opacity));
}

.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}

.p-2 {
  padding: 0.5rem;
}

.p-5 {
  padding: 1.25rem;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.font-bold {
  font-weight: 700;
}

.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.backdrop-blur-lg {
  --tw-backdrop-blur: blur(16px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.hover\\:shadow-2xl:hover {
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
        </style>
    </head>
    <body class="bg-gray-200">
      <div class="bg-gray-300 flex place-items-center justify-center" v-if="show">
        <div id="container" class="container max-w-5xl shadow-xl m-10 p-5 backdrop-blur-lg">
          <h1 class="font-bold text-3xl p-2">前情提要</h1>
          <div class="text-lg p-2">
            在吃的帮助下，你成功进入了决赛。<br/>
            “决赛采用线上交流的方式。本期决赛，参赛者们需要使用我们自有的平台和决赛评委交流。决赛评委将会根据情况选择是否通过决赛。”文件内如是写道。<br/>
            因为你从来没有经历过如此大场面，你很紧张。<br/>
            “这时候得去找猫猫了！”你想道。<br/>
            你在业余无线电频段找到了猫猫并加上了好友。<br/>
            猫猫给你偷来了线上交流系统的源代码。<br/>
            当你再让猫猫给予教导的时候，猫猫说：“你问题有点多了 我要发那张提问收费价格表了”,你只好作罢。<br/>
            于是你拿着手上的线上交流系统源代码开始分析起来。
          </div>
<!--          <h1 class="p-2 font-bold">注意：小红包冒险quiz3还没有写完，请等待二次上传。</h1>-->
          <hr/>
          <h1 class="font-bold text-3xl p-2">吃网杯贰拾壹食姬嘤郁欣喜鸡书妲塞决赛答题平台</h1>
          <div class="text-xl p-2 m-2">
            请输入你想对评委说的话：<br/>
            <textarea placeholder="这里输入你的想法" class="w-full h-1/2" id="saids"></textarea>
          </div>
          <div class="text-xl p-2 m-2">
            我们的评委将在5-10秒后给予您评价，您可以点击检查通过状态来查看自己的通过情况，当然，您也可以使用自己的个人魅力再次提交感动我们的评委。
          </div>
          <button class="text-2xl hover:shadow-2xl shadow-md bg-cyan-200 border-r-2 p-2  transition-all m-2" onclick="commit()" id="commit">提交</button>
          <button class="text-2xl hover:shadow-2xl shadow-md bg-cyan-200 border-r-2 p-2  transition-all m-2" onclick="check()" id="commit">检查通过状态</button>
          <button class="text-2xl hover:shadow-2xl shadow-md bg-cyan-200 border-r-2 p-2  transition-all m-2" onclick="approve()" id="approve">批准</button>
          <button class="text-2xl hover:shadow-2xl shadow-md bg-cyan-200 border-r-2 p-2  transition-all m-2" onclick="decline()" id="decline">拒绝</button>
          <hr/>
          <div class="text-xl p-2 m-2" id="asaid">
            预览：<br/>
            ${comment}
          </div>
          <div class="text-xl p-2 m-2" id="usaid">
            用户申请内容：<br/>
            <div id="saids2"></div>
          </div>
          <script>
            // 判断用户权限
            const role = "user"
            function update (html) {
              document.getElementById("saids1").innerHTML = html
              document.getElementById("saids2").innerHTML = html
            }
            document.getElementById("approve").style.display = "none"
            document.getElementById("decline").style.display = "none"
            document.getElementById("usaid").style.display = "none"
            document.getElementById("asaid").style.display = "block"
            document.onload = async () => {
              if(role === "admin") {
                document.getElementById("usaid").style.display = "block"
                document.getElementById("asaid").style.display = "none"
                document.getElementById("commit").style.display = "none"
                res = await fetch("[You're not Admin!]")
                resp = await res.text()
                update("用户内容: ")
              }
            }
            async function approve () {
              res = await fetch("[You're not Admin!]")
              resp = await res.text()
              update("通过成功！")
            }
            async function commit() {
              saids = document.getElementById("saids").value
              console.log(saids)
              res = await fetch("/api/huohuorb?module=challenge3-comment&comment=" + encodeURIComponent(btoa(saids)) + "&cid=${cynocid}")
              resp = await res.text()
              alert("提交成功！")
              location.reload()
            }
            async function decline() {
              res = await fetch("[You're not Admin!]")
              resp = await res.text()
              update("通过失败！")
            }
            async function check () {
              const res = await fetch("/api/huohuorb?module=challenge3-isapproved&cid=${cynocid}")
              const res2 = await res.json()
              if (res2.code === 200) {
                alert("恭喜通过！")
                alert("您获得的返回信息：" + res2.data) 
              } else {
                alert("您获得的返回信息：" + res2.data)
              }
            }
          </script>
        </div>
      </div>
    </body>
</html>
`
    return resp
})