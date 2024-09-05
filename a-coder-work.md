# 程序员的工作

## 专业介绍

**信息与计算科学**专业是数学与信息科学交叉的理科专业，注重数学基础与计算机应用能力的培养。该专业旨在培育能够在教育、政府、信息产业和金融业等领域从事理论研究、信息处理与软件开发的应用型高级人才。专业特色包括夯实数学基础，注重信息与应用数学两个方向，强调与计算机应用相结合，通过实习和项目实践训练学生解决实际问题的能力。

## 互联网的发展阶段

```mermaid
flowchart LR
    a(前互联网时代) --> b(互联网时代) --> c(移动互联网时代) --> d(人工智能+万物互联)
```

现在的软件行业发展已经进入了万物互联的时代，几乎所有的软件应用都要依赖于互联网。

上网的目的：聊天、追剧、打游戏 ……

**上网的本质目的是获取和消费资源。**

### 互联网服务框架

BS（Browser/Server）与CS（Client/Server）架构

```mermaid
flowchart LR
    a(浏览器 Browser) -- http协议-请求服务器 --> c(后台程序)
    c -- http协议-服务器响应 -->a
    b(客户端 Client) <-- 其他协议-请求与响应 --> c
    subgraph 服务器Server
    c <-- 数据库查询与返回 --> d(数据库)
    end
    subgraph 前端
    a
    b
    end
```

服务器：上网过程中，负责存放和对外提供资源的电脑。

浏览器/客户端：上网过程中，负责获取和消费资源的电脑。

![](https://raw.githubusercontent.com/hughxusu/lesson-index/developing/_images/1774310-20200706180730400-526445821.png)

> 软件行业是一种特殊的制造业，制造的东西并不是实体。

## 程序员的职业方向

<img src="https://raw.githubusercontent.com/hughxusu/lesson-index/developing/_images/pFGJ5Qg.png" />

## 程序员的职业技能

![](https://raw.githubusercontent.com/hughxusu/lesson-index/developing/_images/pFGJoLj.png)

## 看看都有哪些工作

[BOSS直聘](https://www.zhipin.com/beijing/?seoRefer=index)

## 程序员的发展

### 程序员能干多久

* 目前软件行业就业还是在增长阶段。
* 软件行业是一个技术迭代非常快的行业，程序员需要保持对新技术的敏感度和持续的学习能力。

### 程序员与AI

目前的人工智能发展可以一定程度的提高程序工作效率，但是并不能替代程序员的工作。

> 如果人工智能可以完全替代程序员，那99%的工作就可以由人工智能替代。

## 课外阅读

| 书名                                                         | 图书馆索书号 |
| ------------------------------------------------------------ | ------------ |
| [程序员的README](https://book.douban.com/subject/36457109/)  | TP311/78     |
| [软技能（代码之外的生存指南）](https://book.douban.com/subject/36044253/) | C913.2/398   |
