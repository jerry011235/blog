---
title: "一步一步教你向google提交sitemap"
date: 2015-05-06 17:53:11
categories: [探索学习]
tags: [hexo]
toc: ture
---
在已经生成站点地图的情况下我们来向google提交sitemap，用于让google能够找到我们的博客。
# 验证网站
首先google要验证你是否是你网站的管理员。
1.登录你的谷歌账号，打开[webmaster](https://www.google.com/webmasters/verification/home?hl=en)（也可以打开[webmaster中文界面][1]），然后点击`ADD A SITE`添加网站：
![](https://i.ibb.co/GRczFSL/google-sitemap0.png)

输入你的网址（例如`http://starwindy.oschina.io/`）后，点击continue.
<!--more-->
## HTML标记验证
2.点击alternate methods选择验证方法。
![](https://i.ibb.co/gFpkFmM/google-sitemap1.png)
3.点击HTML tag，我们选择HTML标记验证方法。
![](https://i.ibb.co/d0J0zTr/google-sitemap2.png)
![](https://i.ibb.co/MNMvXZN/google-sitemap3.png)

在这里你可以看到一串meta代码，一会儿要在我们的主页中加进去，你可以点击`show me an example`查看例子，就是在`<head>`和`<title>`之间插入这段代码。
## 插入meta代码
** 最重要的一步 **：
4.编辑`D:\hexo\themes\你的主题文件\layout\_partial\head.ejs`，在`<head>`下面，`<title>`上面插入代码保存后就行了。

然后我们可以在gitcafe中查看（实际上可以不查看)
5.因为我们的hexo博客是托管在gitcafe上的，所以我们登录gitcafe账号，选中项目，然后点击右侧的`master`，选择`gitcafe-pages`,如图。
![](https://i.ibb.co/J5fgsYt/google-sitemap4.png)

6.点击左侧的`index.html`,这个就是我们的主页文件了。
![](https://i.ibb.co/gVn40fk/google-sitemap5.png)


7.然后回到谷歌页面点击verify按钮即完成验证。
![](https://i.ibb.co/yNtRfTM/google-sitemap7.png)

成功后可以看到这样的画面。
![](https://i.ibb.co/fVRCwK1/google-sitemap8.png)

# 添加sitemap
接下来还要把你的网址的sitemap添加进去。
8.点击进入[Webmaster Tools](https://www.google.com/webmasters/tools/home?hl=en "webmasters tools")，然后点击你的网址。
![](https://i.ibb.co/287Qr6G/google-sitemap9.png)

9.点击右边的sitemaps.
![](https://i.ibb.co/8P6ssj6/google-sitemap10.png)

10.点击右上角的ADD/TEST SITEMAP.
![](https://i.ibb.co/pRSSQgh/google-sitemap11.png)
![](https://i.ibb.co/5MqXWB3/google-sitemap12.png)

11.在弹出的框内直接填入`sitemap.xml`，然后按submit sitemap按钮就大功告成了！

参考：[｜Hexo优化｜如何向google提交sitemap（详细）](https://fionat.github.io/blog/2013/10/23/sitemap/)


  [1]: https://www.google.com/webmasters/verification/home?hl=zh-CN
