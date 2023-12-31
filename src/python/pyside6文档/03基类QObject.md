---
order: 3
---



# 03.基类QObject

`QObject`是所有的Qt对象的基类,所有的对象都是直接或者间接的继承自QObject

## 对象名称,属性

### API

| 方法                       | 说明                                                         |
| -------------------------- | ------------------------------------------------------------ |
| setObjectName("唯一名称")  | 给一个Qt对象设置一个名称``一般这个名称是唯一的,当做对象的ID来使用 |
| objectName()               | 获取一个Qt对象的名称                                         |
| setProperty("属性名称",值) | 给一个Qt对象动态的添加一个属性与值                           |
| property("属性名称")       | 获取一个对象的属性值                                         |
| dynamicPropertyNames()     | 获取一个对象中所有通过setProperty()设置的属性名称            |

### 应用场景

- 用于qss的ID选择器,属性选择器,方便统一设置样式

  `QObject.qss`

  ```QSS
  QLabel#notice {
      font-size: 20px;
      color: gray;
      border: 1px solid gray;
      border-radius: 8px;
  }
  QLabel#notice[notice_level="normal"]{
      color: green;
      border-color: green;
  }
  QLabel#notice[notice_level="warning"]{
      color: yellow;
      border-color: yellow;
  }
  QLabel#notice[notice_level="error"]{
      color: red;
      border-color: red;
  }
  ```

- 用于装饰器的信号与槽

## 父子对象操作

### API

| 方法                           | 说明                                            |
| ------------------------------ | ----------------------------------------------- |
| setParent(parent)              | 设置父对象,父对象只能设置一个                   |
| parent()                       | 获取父对象                                      |
| children()                     | 获取所有直接子对象,不包括间接的子对象如孙子辈的 |
| findChild(参数1, 参数2, 参数3) | 获取某一个指定名称和类型的子对象                |

```
参数1:QObject对象或者多个QObject对象元组
```

<br />

```
参数2:setProperty设置的属性名称,可以省略
```

<br />

```
参数3:查找选项,有两个可选
```

`Qt.FindChildrenRecursively`(递归查找,默认选项)/`Qt.FindDirectChildrenOnly`(只查找直接子对象) |

### 应用场景

#### 内存管理机制

当创建一个QObject时,如果使用了其他对象作为其父对象 那么,它就会被添加到父对象的children()列表中.当父对象被销毁时,这个QObject也会被销毁

- 涉及到Qt对象内存管理机制
- 如果一个控件,没有任何父控件,那么就会被当成顶层控件(窗口)
- 如果想要一个控件被包含在另外一个控件内部,就需要设置父子关系

#### 顶层控件

如果一个控件,没有任何父控件,那么就会被当成顶层控件(窗口)

多个顶层窗口相互独立

如果想要一个控件被包含在另外一个控件内部,就需要设置父子关系

- 显示位置受父控件约束
- 生命周期也被父对象接管

### 案例

> 1.创建两个独立的窗口
>
>    > 要求
>
> > 设置不同的标题
> > 社会我顺哥
> > 人狠话不多
> > 涉及知识点
> > 创建窗口
> > 设置窗口标题
> > 掌握级别
> > 了解如果创建控件没有设置任何父对象, 会有什么效果

> 2.创建一个窗口, 包含另外两个子控件QWidget
>
>    > 要求
>
> > 两个子控件必须在同一个窗口内部
> > 涉及知识点
> > 控件的父子关系
> > 掌握级别
> > 掌握给一个控件设置父控件的两种方式

> 3.创建一个窗口, 包含多个子控件QWidget和QLabel
>
>    > 要求
>
> > 要求让所有的QLabel类型子控件都设置背景颜色为cyan
> > 即使后续再增加新的QLabel子控件
> > 涉及知识点
> > 控件的父子关系设置
> > 获取一个控件的子控件
> > 样式设置
> > 掌握级别
> > 了解

## 信号处理

### API

| 方法                            | 说明                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| widget.信号方法.connect(槽函数) | 连接信号与槽                                                 |
| obj.disconnect()                | 取消连接信号与槽<br />obj:可为空间或信号 ``    控件:取消控件的所有信号连接``    信号:取消指定信号的连接 |
| widget.blockSignals(bool)       | 临时(取消)阻止指定控件所有的信号与槽的连接                   |
| widget.signalsBlocked()         | 信号是否被阻止                                               |
| widget.receivers(信号)          | 返回连接到信号的接收器数量                                   |

### 应用场景

- 监听信号, 响应用户行为
- 信号与槽机制

### 案例

> 1.当用户点击按钮的时候, 打印"点我嘎哈?"
>
>    > 要求
>
> > 用户点了按钮, 你就负责打印
> > 涉及知识点
> > 按钮创建, 设置
> > 监听按钮点击的信号
> > 掌握级别
> > 了解信号监听部分

> 2.在所有修改的窗口标题前, 添加前缀"撩课-"
>
>    > 要求
>
> > 比如, 后续我们修改标题为"Hello Sz"; 最终会自动变为"撩课-Hello Sz!"
> > 支持多次修改
> > 涉及知识点
> > 设置窗口标题
> > 监听窗口标题改变信号
> > 临时取消/恢复信号与槽的连接
> > 掌握级别
> > 了解信号监听部分

## 类型判定

### API

- isWidgetType() 是否是控件类型 继承自QWidget类
- inherits(父类) 一个对象是否继承(直接或者间接)自某个类

### 应用场景

过滤筛选控件

### 案例

> 1.创建一个窗口, 包含多个QLabel或其他控件
>
>    > 要求
>
> > 将包含在窗口内所有的QLabel控件, 设置背景色cyan
> > 涉及知识点
> > 子控件获取
> > 控件类型判定
> > 样式设置
> > 掌握级别
> > 掌握控件判定部分

## 对象删除

`obj.deleteLater()`

删除一个对象时, 也会解除它与父对象之间的关系 deleteLater()并没有将对象立即销毁,而是向主消息循环发送了一个event,下一次主消息循环收到这个event之后才会销毁对象 这样做的好处是可以在这些延迟删除的时间内完成一些操作,坏处就是内存释放会不及时

想要移除某一个对象的时候使用,bu同于python的del方法,会删除对象对应的子组件

## 事件处理

### API

| 方法                   | 说明 |
| ---------------------- | ---- |
| `childEvent()`         |      |
| `customEvent()`        |      |
| `eventFilter()`        |      |
| `installEventFilter()` |      |
| `removeEventFilter`    |      |
| `event()`              |      |

### 应用场景

- 事件机制
- 拦截事件, 监听特定行为

## 定时器

### API

| 方法                                       | 说明                                                         |
| ------------------------------------------ | ------------------------------------------------------------ |
| `startTimer(ms, Qt.TimerType) -> timer_id` | 开启一个定时器 ``    Qt.TimerType``        Qt.PreciseTimer 精确定时器:尽可能保持毫秒准确 ``        Qt.CoarseTimer 粗定时器:5%的误差间隔``        Qt.VeryCoarseTimer 很粗的定时器:只能到秒级``    timer_id 定时器的唯一标识 |
| `killTimer(timer_id)`                      | 根据定时器ID,杀死定时器                                      |
| `timerEvent()`                             | 定时器执行事件                                               |

### 应用场景

- 轮询
- 倒计时

### 案例

> 1.创建一个窗口, 并设置一个子控件QLabel
>
>    > 要求
>
> > 展示10s倒计时
> > 倒计时结束, 就停止计时
> > 涉及知识点
> > 标签额创建和设置
> > 自定义标签类的封装
> > 定时器的使用
> > 掌握级别
> > 了解定时器基本操作

> 2.创建一个窗口, 通过定时器不断增加该窗口的尺寸大小
>
>    > 要求
>
> > 每100ms 宽高均增加1px
> > 涉及知识点
> > 窗口控件的封装
> > 定时器的使用
> > 掌握级别
> > 了解定时器

## 语言翻译

`tr()`

应用场景:多语言国际化支持

## 信号

| 新号                          | 说明                         |
| ----------------------------- | ---------------------------- |
| objectNameChanged(objectName) | 对象名称发生改变时发射此信号 |
| destroyed(obj)                | 对象被销毁时, 发射此信号     |

