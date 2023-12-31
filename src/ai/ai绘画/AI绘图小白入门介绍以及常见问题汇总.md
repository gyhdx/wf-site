---
lang: zh-CN
title: ai绘画入门
description: AI绘图小白入门介绍以及常见问题汇总
order: 1
---

### 一、简介
最近在接触到AI绘图后，先后体验了安装和使用的全过程，这期间解决了不少的问题，同时也帮助一些群友解决了一些常见的问题，很多都是重复的问题。

因此特意创建了这个帖子，做一版简单的AI绘画教程，并总结了一部分的常见问题。

当然楼主本人也是刚入门而已，欢迎各位大佬批评指正！本帖持续更新！

### 二、AI绘画软件安装

软件名称：stable-diffusion-webui，这里大家直接可以参考B站秋叶大佬的视频，讲解的比较详细，软件主体我是直接使用的秋叶大佬的整合包

视频链接：https://www.bilibili.com/video/BV17d4y1C73R/?spm_id_from=333.788.video.desc.click&vd_source=e2fd6970c10a79acab398c60f1bba5c4

下载链接：https://pan.baidu.com/s/1tkn1dmZ7O8q1PxaTf4iK3w

提取码：7897

AI绘图小白入门介绍以及常见问题汇总（持续更新）

而且建议使用秋叶大佬提供的启动器，各个版本的整合包都能使用，不管是启动还是管理模型都非常的方便！使用启动器的话就不用按照上方视频里的方法生成自己的启动脚本，很简单。

启动器介绍视频链接：https://www.bilibili.com/video/BV1ne4y1V7QU/?spm_id_from=333.999.0.0&vd_source=e2fd6970c10a79acab398c60f1bba5c4

启动器下载链接：https://pan.baidu.com/s/1XHOx7zgO0IQVL-01opwXjA?pwd=uvdy

在下载完之后解压，按照启动器的介绍操作视频，安装启动器依赖，将启动器复制到主文件目录中，然后就直接使用启动器了。

### 三、绘画软件的使用

使用启动器以后，就比较方便了，直接双击A启动器.exe，启动之后就可以看到启动器主界面，在这里会有推荐的启动配置

AI绘图小白入门介绍以及常见问题汇总（持续更新）

如果是小白玩家的话，这里直接一键启动就好了，等熟悉以后可以在高级选项中自定义一些选项
AI绘图小白入门介绍以及常见问题汇总（持续更新）

也可以在版本管理这里更新到最新的SDwebUI版本
AI绘图小白入门介绍以及常见问题汇总（持续更新）


点击一键启动后，会出来一个黑框，第一次启动或者切换版本的时候，加载时间会长一点，请耐心等待！
AI绘图小白入门介绍以及常见问题汇总（持续更新）
黑框跑完是会自动弹到浏览器打开SDwebUI界面的，如果没有弹出浏览器，请自行复制IP地址到浏览器访问，一般情况下默认都是 http://127.0.0.1:7860/

AI绘图小白入门介绍以及常见问题汇总（持续更新）
上述界面是第一次开启的界面，左上角是主模型的选项（划重点！）如果后续下载了新的主模型，要在这里切换。

主模型决定了你绘画的总体风格，比如偏向真人绘画的主模型就是ChilloutMix，默认是没有的，需要自己下载（启动器里有，后面有教程）

简单说一下主界面的几个功能，我们最常用的就是文生图功能，也就是第一个标签txt2img，下面是简单介绍

![AI绘图小白入门介绍以及常见问题汇总（持续更新）](./img/watermark,text_REZMZGF0YS54eXrmjaLohLjorrrlnZs,type_ZmFuZ3poZW5naGVpdGk,color_ffffff,size_22,g_se,x_10,y_10.jpeg)

具体的描述词汇，也就是常说的tag可以先抄别人的，这里网上有很多分享的地方，比如civitai又有很多分享的，比如我们论坛，以及群里，标签超市也可以参考

标签超市链接：https://tags.novelai.dev/

civitai链接：https://civitai.com/

怎么写提示词：https://guide.novelai.dev/advanced/prompt-engineering/

帮助新手快速搭配tags以及清楚大部分tag:http://heizicao.gitee.io/novelai/#/book

civitai在模型评论区有很多分享的绘画，点开有秘咒

![AI绘图小白入门介绍以及常见问题汇总（持续更新）](./img/watermark,text_REZMZGF0YS54eXrmjaLohLjorrrlnZs,type_ZmFuZ3poZW5naGVpdGk,color_ffffff,size_22,g_se,x_10,y_10-1698935564216-3.jpeg)

注意！种子值不用抄，固定种子值只会生成同一张图片！

AI绘画群里有其他大佬分享的秘咒，可以参考

主界面其他参数作用及效果说明：https://guide.novelai.dev/guide/configuration/param-basic#参数介绍

### 四、安装中文插件

SDwebUI默认是英文的界面，中文需要安装中文插件，详细步骤如下：
![AI绘图小白入门介绍以及常见问题汇总（持续更新）](./img/watermark,text_REZMZGF0YS54eXrmjaLohLjorrrlnZs,type_ZmFuZ3poZW5naGVpdGk,color_ffffff,size_22,g_se,x_10,y_10-1698935583835-6.jpeg)

![AI绘图小白入门介绍以及常见问题汇总（持续更新）](./img/watermark,text_REZMZGF0YS54eXrmjaLohLjorrrlnZs,type_ZmFuZ3poZW5naGVpdGk,color_ffffff,size_22,g_se,x_10,y_10-1698935599995-9.jpeg)找到下面这个安装
![AI绘图小白入门介绍以及常见问题汇总（持续更新）](./img/watermark,text_REZMZGF0YS54eXrmjaLohLjorrrlnZs,type_ZmFuZ3poZW5naGVpdGk,color_ffffff,size_22,g_se,x_10,y_10-1698935612746-12.jpeg)
![AI绘图小白入门介绍以及常见问题汇总（持续更新）](./img/watermark,text_REZMZGF0YS54eXrmjaLohLjorrrlnZs,type_ZmFuZ3poZW5naGVpdGk,color_ffffff,size_22,g_se,x_10,y_10-1698935619242-15.jpeg)
重启后界面就是中文界面了

当然拓展里也有很多其他的插件，大家自行决定是否安装，秋叶大佬还介绍了一个tag自动补全的插件

视频链接：https://www.bilibili.com/video/BV1sG4y1h7sP/?spm_id_from=333.999.0.0&vd_source=e2fd6970c10a79acab398c60f1bba5c4

### 五、各类模型介绍


参考秋叶的介绍文章：【AI绘画】全部模型种类总结 / 使用方法 / 简易训练指导——魔导绪论

### 六、stable-diffusion模型切换
默认的模型在界面左上角
![AI绘图小白入门介绍以及常见问题汇总（持续更新）](./img/watermark,text_REZMZGF0YS54eXrmjaLohLjorrrlnZs,type_ZmFuZ3poZW5naGVpdGk,color_ffffff,size_22,g_se,x_10,y_10-1698935634730-18.jpeg)

这个模型一般是大部分整合包下载的时候会带的一个模型，但画出来的图大部分都是偏二次元的风格。

大家可以自行下载自己喜欢的模型，比如真人向的ChilloutMix。


大家可以去civitai下载自己喜欢的模型

civitai链接：https://civitai.com/

![AI绘图小白入门介绍以及常见问题汇总（持续更新）](./img/watermark,text_REZMZGF0YS54eXrmjaLohLjorrrlnZs,type_ZmFuZ3poZW5naGVpdGk,color_ffffff,size_22,g_se,x_10,y_10-1698935646408-21.jpeg)
主模型一般有ckpt（CHECKPOINT MERGE）和safetensors两种。存在位置一般在.\stable-diffusion-webui\models\Stable-diffusion\下
![AI绘图小白入门介绍以及常见问题汇总（持续更新）](./img/watermark,text_REZMZGF0YS54eXrmjaLohLjorrrlnZs,type_ZmFuZ3poZW5naGVpdGk,color_ffffff,size_22,g_se,x_10,y_10-1698935658347-24.jpeg)
大家自行下载的Stable Diffusion 模型需要放在这个文件下，然后在UI界面刷新就会看到
![AI绘图小白入门介绍以及常见问题汇总（持续更新）](./img/watermark,text_REZMZGF0YS54eXrmjaLohLjorrrlnZs,type_ZmFuZ3poZW5naGVpdGk,color_ffffff,size_22,g_se,x_10,y_10-1698935667905-27.jpeg)
更简单的下载模型的方法就是在启动器的模型管理界面，直接下载自己需要的模型
AI绘图小白入门介绍以及常见问题汇总（持续更新）
比如上文说的ChilloutMix，搜出来有很多个版本，效果有细微的不同，硬盘大的可以都下载，硬盘紧张的下一个就行
AI绘图小白入门介绍以及常见问题汇总（持续更新)
下载完直接到UI界面切换就好了，然后就可以愉快的绘画了！

### 七、lora安装和使用(新版)

#### 7.1 简介

lora是一个很强大的微调模型，与Stable Diffusion 模型(ckpt/CHECKPOINT)，也就是主模型不同，他可以在更细粒度上决定AI绘画的成品，比如大家常见的指定人脸，或者指定风格，就需要大家自行训练lora模型，然后使用。具体介绍可见秋叶大佬的视频

视频链接：https://www.bilibili.com/video/BV1Py4y1d7eJ/?spm_id_from=333.999.0.0&vd_source=e2fd6970c10a79acab398c60f1bba5c4

论坛内也有很多大佬出过使用的教程帖子，如：

sdlou：[LORA模型]以chilloutmix为基底练的试验模型——美女真人模型

#### 7.2 原生lora安装使用(新版)
现在新版的SDwebUI已经自带lora了，不需要插件了。

首先在启动器里将版本更新到最新的稳定版
AI绘图小白入门介绍以及常见问题汇总（持续更新）
启动后点击这里的小红点，就会显示出来
![AI绘图小白入门介绍以及常见问题汇总（持续更新）](./img/watermark,text_REZMZGF0YS54eXrmjaLohLjorrrlnZs,type_ZmFuZ3poZW5naGVpdGk,color_ffffff,size_22,g_se,x_10,y_10-1698935686717-30.jpeg)
第一次打开可能会报错，提示一个路径没有文件，因为这是原生lora模型的存放位置改变了，跟插件的位置不一样

原生lora模型存放路径为..\stable-diffusion-webui\models\Lora

原生lora使用方法
把lora文件放在这个文件夹下再点击Refresh就可以看到了，直接选择想使用的lora模型就行

![AI绘图小白入门介绍以及常见问题汇总（持续更新）](./img/watermark,text_REZMZGF0YS54eXrmjaLohLjorrrlnZs,type_ZmFuZ3poZW5naGVpdGk,color_ffffff,size_22,g_se,x_10,y_10-1698935701274-33.jpeg)
原生lora也可以多个叠加使用，直接放在描述词里了

#### 7.3 插件lora安装和使用(旧方法)

参考视频链接：https://www.bilibili.com/video/BV1Py4y1d7eJ/?spm_id_from=333.999.0.0&vd_source=e2fd6970c10a79acab398c60f1bba5c4

安装Additional Networks插件，主界面下面会有
![AI绘图小白入门介绍以及常见问题汇总（持续更新）](./img/watermark,text_REZMZGF0YS54eXrmjaLohLjorrrlnZs,type_ZmFuZ3poZW5naGVpdGk,color_ffffff,size_22,g_se,x_10,y_10-1698935714660-36.jpeg)
当然可以多个一起用，自行摸索吧！

#### 7.4 如何训练自己的lora模型？

可以先参考秋叶大佬的视频，滚石大佬正在做教程，我后面也会出一个，等把链接放在这里。

秋叶视频链接：https://www.bilibili.com/video/BV1fs4y1x7p2/?spm_id_from=333.999.0.0

注意！这里有一个新手很容易搞混的问题，就是容易把lora模型和stable-diffusion(ckpt)主模型搞混

二者一般在模型下载的地方就有说明模型类型说明，比如
AI绘图小白入门介绍以及常见问题汇总（持续更新）
AI绘图小白入门介绍以及常见问题汇总（持续更新）
有的lora模型文件类型也是safetensors，很容易跟ckpt搞混，二者的存放位置是不一样的，而且现在有了原生lora，跟插件lora的存放位置还不一样

Stable Diffusion 模型(ckpt/CHECKPOINT)存放位置是..\stable-diffusion-webui\models\Stable-diffusion\

lora插件模型存放位置是..\extensions\sd-webui-additional-networks\models\lora

原生lora模型存放路径为..\stable-diffusion-webui\models\Lora

大家从别人那里获取到lora模型的话，如果是最新版，直接放到原生lora模型的文件夹就行，然后直接使用，不需要装插件了。

### 八、模型融合
这里参考秋叶大佬的视频吧！

视频链接：https://www.bilibili.com/video/BV1Ae4y1s79r/?spm_id_from=333.999.0.0&vd_source=e2fd6970c10a79acab398c60f1bba5c4

常见模型没有好效果的话，试试融合模型也许有不错的效果！

### 九、部分补充内容

sdlou道友补充了一部分内容，也非常有用

链接：https://dfldata.xyz/forum.php?mod=viewthread&tid=12762&extra=page=1

### 十、常见问题汇总（持续更新）

#### 1.lora模型放在哪里？

答：lora插件模型存放位置是..\extensions\sd-webui-additional-networks\models\lora

原生lora模型存放路径为..\stable-diffusion-webui\models\Lora

#### 2.Stable Diffusion 模型(ckpt/CHECKPOINT)主模型放在哪里？

答：..\stable-diffusion-webui\models\Stable-diffusion\

#### 3.为什么我画的图都是二次元的？
答：切换模型，参考上面的第五部分！

#### 4.为什么我画的图都是同一张？
答：因为你固定了种子值，抄别人秘咒的时候种子值不用抄

#### 5.为什么我局部重绘的图边缘感很强，有点模糊
答：调高蒙版模糊，模糊的问题可能是由于迭代偏低/描述词对图片影响过高/蒙版过小/未使用vae/模型效果一般/采样器/的问题(sdlou道友的回答),另外可以切换专门的用于重绘的模型，比如uberRealisticPornMerge_urpmv12Inpainting-inpainting.safetensors

#### 6.为什么运行lora训练脚本后提示找不到accelerate库？
AI绘图小白入门介绍以及常见问题汇总（持续更新）
答：

首先确认自己是否运行了install-cn.ps1文件，如果运行完了还报这个错误，修改train.ps1文件，将accelerate launch改成python -m accelerate.command.launch，保存，重新运行脚本。

#### 7.运行install-cn.ps1文件报错提示“其他依赖安装失败”！

答：如果装了git的话，在lora-scripts文件夹右键 git bash here，弹出一个黑色窗口，然后把强制更新.bat拖进去后按回车，更新后再跑就行了。

如果没安装git，右键没有git bash here这个选项，先安装一个git，下载链接：https://git-scm.com/download/win

安装完git再按照上面第一步强制更新，然后再跑install-cn.ps1

#### 8.常见跑图错误先看下方链接有无解答
答：链接：https://guide.novelai.dev/guide/configuration/troubleshoot

#### 9.主界面各个参数有什么用？
答：见链接：https://guide.novelai.dev/guide/configuration/param-basic#参数介绍

#### 10.怎么训练模型？
答：https://guide.novelai.dev/advanced/finetuning/

#### 11.模型训练问题速查：
答：

问题速查:
- CUDA out of memory： 炸显存 换启动参数 换显卡
- DefaultCPUAllocator: 炸内存 加虚拟内存 加内存条
- CUDA driver initialization failed: 装CUDA驱动
- Training models with lowvram not possible: 这点显存还想炼丹？

训练配置要求:
训练embedding、hypernetwork 使用 384 分辨率需要6G显存， 使用512分辨率需要 8G 以上显存
训练dreambooth 最少需要12G显存
共享显存不是显存

#### 12.使用图片预处理打标签的时候，deepbooru报错
答：deepbooru模型损坏，重新下载替换，替换位置.\stable-diffusion-webui\models\torch_deepdanbooru

下载链接：[url=https://pan.baidu.com/s/1HF5J3_ie5TXv24dGwbhZKA?pwd=aaki  作者：秋葉aaaki https://www.bilibili.com/read/cv19916508?spm_id_from=333.999.0.0 出处：bilibili]https://pan.baidu.com/s/1HF5J3_ie5TXv24dGwbhZKA?pwd=aaki  作者：秋葉aaaki https://www.bilibili.com/read/cv19916508?spm_id_from=333.999.0.0 出处：bilibili[/url]