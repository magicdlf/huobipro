# README
## 环境要求
nodejs 6.0以上版本

## 准备工作
1. 注册火币账号，在账号安全中心获取uid
2. 登录www.huobi.com，在API设置中，生成access_key和secret_key，并保存到本地文件中
3. 安装nodejs 6.0以上的版本，如果是windows的用户，推荐使用gitbash作为命令行窗口

## Demo说明
1. demo_crawler.js
同时用rest和ws取行情数据，并返回其中的差异。
WebSocket的demo主要演示了订阅数据以及心跳包和连接中断的处理方法。
Rest的demo主要提供了数据压缩(gzip)和保持请求连接 Keep-alive 的功能，提升抓取的成功率。

2. demo_sdk.js
演示交易接口的调试流程，按照程序注释的步骤逐步完成账号信息。

## 使用指南
在命令行中执行:
```
npm install
node demo_sdk.js 
node demo_crawler.js
```

## 服务器选址
推荐选择(阿里云、亚马逊)东京的节点，开机后测速...
```
curl -vso /dev/null https://api.huobipro.com/market/depth\?symbol\=btcusdt\&type\=step1 -A "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.221 Safari/537.36 SE 2.X MetaSr 1.0" --trace-time
```
响应时间通常应该<30ms

## 联系作者
magicdlf (QQ:2797820732)
最新demo代码:
https://github.com/magicdlf/huobipro

## Hosts
```
1.32.242.10 otc.huobipro.com
1.32.242.10 otc-api.huobipro.com
1.32.242.10 l10n-uc.huobi.cn
1.32.242.10 api.growingio.com
1.32.242.10 uc-cn.huobi.com  
104.20.136.68 uc.huobi.pro
104.20.137.68 content.huobi.pro
54.65.137.35 www.huobi.com
104.20.206.64 www.huobipro.com
104.20.207.64 api.huobipro.com
54.230.159.30 www.binance.com
52.84.35.186 resource.binance.com
13.112.58.91 stream2.binance.com
52.84.35.183 stream3.binance.com
104.16.174.181 www.bitfinex.com
104.16.173.181 api.bitfinex.com
52.17.4.242 www.bitmex.com
52.222.238.28 static.bitmex.com
178.62.14.205 sentry.bitmex.com
```

## 注册推荐
可以使用我的邀请码注册火币，邀请人会收到一定比例的佣金返还。(有效期限注册后的六个月内)
https://www.huobipro.com/zh-cn/topic/invited/?invite_code=2z223

