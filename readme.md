## 工具介绍

一款用于chrome下的HTTP包重放工具
HTTP请求记录又2种模式，一种为记录全部标签页的请求，另一种为记录当前`devtool`所在标签页的请求。

## 使用流程

- F12打开后，选到pttools标签。
- 选择监听方式。
- 选择view即可修改HTTP请求。对于POST的HTTP请求，可以添加body的参数。

## 注意事项

- 在进行POST的时候，将以`application/x-www-form-urlencoded`的类型添加参数。
- 如无特殊需求，请自行删除`content-length`的内容。
- 重放某些攻击不生效可能原因是请求了缓存，通常对于图片会发生这种情况。可以勾选`Network`选项卡种的`Disable cache`


## TO-DO

- 添加更多的POST的请求type。[优先]
- 完善未知bug。[优先]
- 修改HTTP请求后，无法保留原始请求。(对vue不熟悉,还没有找到解决办法)
- current tab增加response预览功能。
- 等我学会前端，我就把它做的更酷炫。
- 此插件将保持更新与完善。

## 简单介绍

![](https://ws1.sinaimg.cn/large/007BTj79gy1g3xk7up846j30v90ik75q.jpg)

大体的流程如上。



## 已知问题

我在尝试修改请求头后，发现浏览器中出现了 **Provisional headers are shown** ，并且没有显示我修改的请求头，但是通过burp抓包已经存在该请求头。目前还没找到原因。

![](https://o1hy-1253938230.cos.ap-beijing.myqcloud.com/o1hy/b2c671826bccf-Snipaste_2019-07-02_10-39-57.png)

![](https://o1hy-1253938230.cos.ap-beijing.myqcloud.com/o1hy/3f4632d31f10b-Snipaste_2019-07-02_10-40-19.png)

![](https://o1hy-1253938230.cos.ap-beijing.myqcloud.com/o1hy/a8eeca4add9fa-Snipaste_2019-07-02_10-40-35.png)



## 近期更新

- 删除了LISTEN ALL TAB的方式
- 修改了json格式的数据提交方式。膜拜提供方：0140454的Hackbar作者。提交json格式的数据的方式，优秀。
- 修正了一些bug。

## TIPS

一项重要的修复为：之前提交头部总是失败的一个情况为，HTTP头部中存在形如`:method`这样的头部时候，就很容易失效。最终发现原因是HTTP/2中新增了5个伪报头字段。不属于常规HTTP头部字段，不允许终端自己产生。当chrom插件修改这几个字段，或者发送的包中存在了这几个字段的时候，就会头部修改失败。