import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as n,a as d}from"./app-DBc2jY3V.js";const l="/wf-site/assets/image-20250222182649512-Cyqil2ui.png",a="/wf-site/assets/image-20250222184409691-C8oXEJRo.png",r="/wf-site/assets/image-20250222190626695-DHvyOmdM.png",o="/wf-site/assets/image-20250222191040817-CxUenDZh.png",s="/wf-site/assets/image-20250222194252920-HNpXysWg.png",u="/wf-site/assets/image-20250223135835121-y0Xj3hj_.png",c="/wf-site/assets/image-20250223141854128-CbCtI4Zr.png",v="/wf-site/assets/image-20250223143816771-D8rUeLKC.png",m="/wf-site/assets/image-20250223145039278-CgEu-Sea.png",g="/wf-site/assets/2023082902440428-DR6HVA9w.png",b="/wf-site/assets/2023082902453495-A1kKTRol.png",p="/wf-site/assets/image-20250223152445050-D9Ium9U0.png",q="/wf-site/assets/image-20250223160751018-D1ufVpQq.png",h="/wf-site/assets/image-20250223161226103-B8v2kDil.png",x="/wf-site/assets/image-20250223161511997-DzwcFLUi.png",C="/wf-site/assets/image-20250223163605478-sDTaf7hi.png",B="/wf-site/assets/image-20250223164744916-DYRdZhto.png",T="/wf-site/assets/image-20250223165603177-CurWbnZf.png",S="/wf-site/assets/image-20250223171312145-Ng_E_9zk.png",k="/wf-site/assets/image-20250223171757274-BT1cZ91B.png",y="/wf-site/assets/image-20250223173113044-BU1QQo5l.png",f="/wf-site/assets/image-20250223181337042-p9F9WrWL.png",P={};function D(_,e){return n(),i("div",null,e[0]||(e[0]=[d(`<h2 id="_1-control基类" tabindex="-1"><a class="header-anchor" href="#_1-control基类" aria-hidden="true">#</a> 1.Control基类</h2><p>Control是许多控件的基类。比如最常见的按钮（Button）、单选(RadioButton)、复选（CheckBox）、文本框（TextBox）、ListBox、DataGrid、日期控件等等。这些控件通常用于展示程序的数据或获取用户输入的数据，我们可以将这一类型的控件称为内容控件或数据控件，它们与前面的布局控件有一定的区别，布局控件更专注于界面，而内容控件更专注于数据（业务）。</p><p><strong>Control类虽然可以实例化，但是在界面上是不会有任何显示的</strong>。只有那些继承了Control的子类（控件）才会在界面上显示，而且所呈现的样子各不相同，为什么会是这样呢？</p><p>因为Control类提供了一个控件模板（ControlTemplate），而几乎所有的子类都对这个ControlTemplate进行了各自的实现，所以在呈现子类时，我们才会看到Button拥有Button的样子，TextBox拥有TextBox的样子。</p><h3 id="control的结构定义" tabindex="-1"><a class="header-anchor" href="#control的结构定义" aria-hidden="true">#</a> Control的结构定义</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class Control : FrameworkElement
{
public static readonly DependencyProperty BorderBrushProperty;
public static readonly RoutedEvent PreviewMouseDoubleClickEvent;
public static readonly DependencyProperty TemplateProperty;
public static readonly DependencyProperty PaddingProperty;
public static readonly DependencyProperty IsTabStopProperty;
public static readonly DependencyProperty TabIndexProperty;
public static readonly DependencyProperty VerticalContentAlignmentProperty;
public static readonly DependencyProperty HorizontalContentAlignmentProperty;
public static readonly RoutedEvent MouseDoubleClickEvent;
public static readonly DependencyProperty FontStyleProperty;
public static readonly DependencyProperty FontStretchProperty;
public static readonly DependencyProperty FontSizeProperty;
public static readonly DependencyProperty FontFamilyProperty;
public static readonly DependencyProperty ForegroundProperty;
public static readonly DependencyProperty BackgroundProperty;
public static readonly DependencyProperty BorderThicknessProperty;
public static readonly DependencyProperty FontWeightProperty;
 
public Control();
 
public FontStyle FontStyle { get; set; }
public FontStretch FontStretch { get; set; }
public double FontSize { get; set; }
public FontFamily FontFamily { get; set; }
public Brush Foreground { get; set; }
public Brush Background { get; set; }
public Thickness BorderThickness { get; set; }
public bool IsTabStop { get; set; }
public VerticalAlignment VerticalContentAlignment { get; set; }
public int TabIndex { get; set; }
public Thickness Padding { get; set; }
public ControlTemplate Template { get; set; }
public FontWeight FontWeight { get; set; }
public Brush BorderBrush { get; set; }
public HorizontalAlignment HorizontalContentAlignment { get; set; }
protected internal virtual bool HandlesScrolling { get; }
 
public event MouseButtonEventHandler MouseDoubleClick;
public event MouseButtonEventHandler PreviewMouseDoubleClick;
 
public override string ToString();
protected override Size ArrangeOverride(Size arrangeBounds);
protected override Size MeasureOverride(Size constraint);
protected virtual void OnMouseDoubleClick(MouseButtonEventArgs e);
protected virtual void OnPreviewMouseDoubleClick(MouseButtonEventArgs e);
protected virtual void OnTemplateChanged(ControlTemplate oldTemplate, ControlTemplate newTemplate);
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Control基类为它的子类们提供了哪些</p><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>FontStyle</td><td>获取或设置控件的字体结构，类似于Word中字体的常规、斜体或倾斜</td></tr><tr><td>FontStretch</td><td>获取或设置紧缩或在屏幕上展开一种字体的程度。</td></tr><tr><td>FontSize</td><td>获取或设置字体大小。</td></tr><tr><td>FontFamily</td><td>获取或设置控件的字体系列。如：微软雅黑 = &quot;Microsoft YaHei UI&quot;</td></tr><tr><td>Foreground</td><td>获取或设置控件的字体颜色，也就是所谓的前景色画笔，它是一个刷子（Brush）</td></tr><tr><td>Background</td><td>获取或设置一个用于描述控件的背景画笔。</td></tr><tr><td>BorderThickness</td><td>获取或设置控件的边框宽度。</td></tr><tr><td>IsTabStop</td><td>获取或设置一个值，该值指示控件是否包括在选项卡上的导航窗格中。</td></tr><tr><td>VerticalContentAlignment</td><td>获取或设置控件的内容的垂直对齐方式。</td></tr><tr><td>TabIndex</td><td>获取或设置一个值，确定当用户导航控件通过使用 TAB 键元素接收焦点的顺序。</td></tr><tr><td>Padding</td><td>获取或设置在控件中的填充量。</td></tr><tr><td><strong>Template</strong></td><td><strong>获取或设置控件模板。</strong></td></tr><tr><td>FontWeight</td><td>获取或设置指定的字体粗细。</td></tr><tr><td>BorderBrush</td><td>获取或设置一个用于描述一个控件的边框背景画笔。</td></tr><tr><td>HorizontalContentAlignment</td><td>获取或设置控件的内容的水平对齐方式。</td></tr></tbody></table><p>大部分的属性都比较好理解，这里着重介绍一下Template属性。如果把人比作是一个Control(控件)，那么”着装“就是Template（模板）。在大街上，我们会看到不同着装的人来来往往。</p><p>所以<strong>Control的Template定义了控件的外观</strong>（着装）。</p><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><p>Control类还提供了两个事件，它们分别是PreviewMouseDoubleClick和MouseDoubleClick。</p><table><thead><tr><th>事件名称</th><th>说明</th></tr></thead><tbody><tr><td>PreviewMouseDoubleClick</td><td>表示鼠标双击或多次单击时触发的事件</td></tr><tr><td>MouseDoubleClick</td><td>表示鼠标双击或多次单击时触发的事件</td></tr></tbody></table><p>以Preview开头的事件叫隧道事件或预览事件，而MouseDoubleClick没有以Preview开头，所以它叫冒泡事件。</p><p>冒泡事件事件的路由方向相反，是从目标控件位置开始，一直路由引发至最外层的Window窗体。</p><h2 id="_2-contentcontrol类-内容控件" tabindex="-1"><a class="header-anchor" href="#_2-contentcontrol类-内容控件" aria-hidden="true">#</a> 2.ContentControl类（内容控件）</h2><p>ContentControl是一个神奇的类！</p><p>为什么这么说呢，因为它有一个Content属性，关键是这个属性的类型是object。也就是说，本质上，它可以接收任意引用类型的实例。</p><p>但是，通常情况下，Content属性接收UI控件。因为，ContentControl控件最终会把Content属性里面的内容显示到界面上。</p><h3 id="结构定义" tabindex="-1"><a class="header-anchor" href="#结构定义" aria-hidden="true">#</a> 结构定义</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class ContentControl : Control, IAddChild
{
    public static readonly DependencyProperty ContentProperty;
    public static readonly DependencyProperty HasContentProperty;
    public static readonly DependencyProperty ContentTemplateProperty;
    public static readonly DependencyProperty ContentTemplateSelectorProperty;
    public static readonly DependencyProperty ContentStringFormatProperty;
 
    public ContentControl();
 
    public DataTemplate ContentTemplate { get; set; }
    public bool HasContent { get; }
    public object Content { get; set; }
    public string ContentStringFormat { get; set; }
    public DataTemplateSelector ContentTemplateSelector { get; set; }
    protected internal override IEnumerator LogicalChildren { get; }
 
    public virtual bool ShouldSerializeContent();
    protected virtual void AddChild(object value);
    protected virtual void AddText(string text);
    protected virtual void OnContentChanged(object oldContent, object newContent);
    protected virtual void OnContentStringFormatChanged(string oldContentStringFormat, string newContentStringFormat);
    protected virtual void OnContentTemplateChanged(DataTemplate oldContentTemplate, DataTemplate newContentTemplate);
    protected virtual void OnContentTemplateSelectorChanged(DataTemplateSelector oldContentTemplateSelector, DataTemplateSelector newContentTemplateSelector);
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ContentControl控件能不能容纳多个子控件？</strong></p><p>不能！因为ContentControl控件只能显示Content属性里面的内容，而Content属性是object，只能接收一个对象。</p><p>HasContent属性：表示ContentControl是否有内容。</p><p>ContentStringFormat属性：获取或设置ContentControl要显示字符串的格式。</p><p>ContentTemplateSelector属性：模板选择器， 我们会在模板一章节介绍。</p><h3 id="contenttemplate属性-内容模板" tabindex="-1"><a class="header-anchor" href="#contenttemplate属性-内容模板" aria-hidden="true">#</a> ContentTemplate属性（内容模板）</h3><p>ContentTemplate属性（内容模板）</p><p>这个属性表示获取或设置用来显示的内容的数据模板，说白了，就是决定“WPF中文网”这几个字的穿着，如果没有设置数据模板，它将以默认的数据模板来显示这几个字。接下来，我们演示一下这个属性的用法，并简要说明其中的关系。</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Grid&gt;
    &lt;ContentControl FontSize=&quot;30&quot; Foreground=&quot;GreenYellow&quot;&gt;

        &lt;ContentControl.ContentTemplate&gt;
            &lt;DataTemplate&gt;
                &lt;Border Height=&quot;50&quot; Width=&quot;500&quot; CornerRadius=&quot;10&quot; Background=&quot;BlanchedAlmond&quot; Margin=&quot;20&quot;&gt; 
                    &lt;TextBlock Text=&quot;{Binding}&quot; 
                               HorizontalAlignment=&quot;Center&quot; 
                               VerticalAlignment=&quot;Center&quot; 
                               FontSize=&quot;40&quot; 
                               Foreground=&quot;LightBlue&quot;/&gt;
                &lt;/Border&gt;
            &lt;/DataTemplate&gt;
            
        &lt;/ContentControl.ContentTemplate&gt;
        
        WPF-COntentControl
    &lt;/ContentControl&gt;
&lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="image-20250222182649512" tabindex="0" loading="lazy"><figcaption>image-20250222182649512</figcaption></figure><p>ContentControl类的ContentTemplate属性是DataTemplate类型，所以我们在xaml中实例化了一个DataTemplate（数据模板）对象，并在其中增加了一个TextBlock控件，将TextBlock控件的Text属性写成了Binding形式，并设置了字体颜色和大小。</p><p>关于数据模板中的TextBlock控件的Text属性写成了Binding(绑定)形式，这是指将ContentContent控件的Contnet属性绑定到TextBlock控件的Text属性中，写成伪代码就是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TextBlock.Text = ContentContent.Content
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-buttonbase基类" tabindex="-1"><a class="header-anchor" href="#_3-buttonbase基类" aria-hidden="true">#</a> 3.ButtonBase基类</h2><p>按钮，几乎每个具有UI界面的软件都会有它的身影，而按钮的形式也是有多种多样的，我们在这里简单的罗列一下。</p><table><thead><tr><th>按钮名称</th><th>说明</th></tr></thead><tbody><tr><td>Button</td><td>普通按钮</td></tr><tr><td>CheckBox</td><td>复选框按钮</td></tr><tr><td>RadioButton</td><td>单选框按钮</td></tr><tr><td>ToggleButton</td><td>是CheckBox、RadioButton的基类，表示可以切换状态</td></tr><tr><td>RepeatButton</td><td>重复，表示从按下到弹出过程中重复引发Click事件</td></tr><tr><td>GridViewColumnHeader</td><td>表示GridViewColumn 的列标题，其实它也是一个按钮</td></tr><tr><td>DataGridColumnHeader</td><td>表示DataGrid 列标题，也是一个按钮</td></tr><tr><td>DataGridRowHeader</td><td>表示DataGrid 行标题，也是一个按钮</td></tr></tbody></table><p>上面便是WPF中的按钮体系，这些按钮都有一个共同的基类ButtonBase。</p><p>**ButtonBase是一个抽象类，所以，它不能被实例化。**我们只能在它的子类中去使用它提供的一些属性、事件或方法成员。它只有一个事件，就是Click单击事件，毕竟鼠标双击事件在它的Control基类就有了嘛。另外，它还有一个非常厉害的Command属性，这个属性其实是一个接口，起什么作用呢？就是在单击按钮时，去执行这个Command属性所指定的一个具体命令。</p><p>这个Command命令是WPF命令系统里面的角色，也是WPF优于Winform的一个具体表现，Command命令也是MVVM模式中最重要的一环。我们会在后面专门探讨WPF的命令系统。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public abstract class ButtonBase : ContentControl, ICommandSource
{
    public static readonly RoutedEvent ClickEvent;
    public static readonly DependencyProperty CommandProperty;
    public static readonly DependencyProperty CommandParameterProperty;
    public static readonly DependencyProperty CommandTargetProperty;
    public static readonly DependencyProperty IsPressedProperty;
    public static readonly DependencyProperty ClickModeProperty;
 
    protected ButtonBase();
 
    public IInputElement CommandTarget { get; set; }
    public object CommandParameter { get; set; }
    public ICommand Command { get; set; }
    public bool IsPressed { get; protected set; }
    public ClickMode ClickMode { get; set; }
    protected override bool IsEnabledCore { get; }
 
    public event RoutedEventHandler Click;
 
    protected override void OnAccessKey(AccessKeyEventArgs e);
    protected virtual void OnClick();
    protected virtual void OnIsPressedChanged(DependencyPropertyChangedEventArgs e);
    protected override void OnKeyDown(KeyEventArgs e);
    protected override void OnKeyUp(KeyEventArgs e);
    protected override void OnLostKeyboardFocus(KeyboardFocusChangedEventArgs e);
    protected override void OnLostMouseCapture(MouseEventArgs e);
    protected override void OnMouseEnter(MouseEventArgs e);
    protected override void OnMouseLeave(MouseEventArgs e);
    protected override void OnMouseLeftButtonDown(MouseButtonEventArgs e);
    protected override void OnMouseLeftButtonUp(MouseButtonEventArgs e);
    protected override void OnMouseMove(MouseEventArgs e);
    protected internal override void OnRenderSizeChanged(SizeChangedInfo sizeInfo);
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="buttonbase的属性" tabindex="-1"><a class="header-anchor" href="#buttonbase的属性" aria-hidden="true">#</a> <strong>ButtonBase的属性</strong></h3><table><thead><tr><th>属性名称</th><th>说明</th></tr></thead><tbody><tr><td>CommandTarget</td><td>获取或设置要对其引发指定的命令的元素。</td></tr><tr><td>CommandParameter</td><td>获取或设置一个命令参数，这个参数是传递给Command 属性所指向的命令。</td></tr><tr><td>Command</td><td>获取或设置要在按此按钮时调用的命令。</td></tr><tr><td>IsPressed</td><td>获取当前按钮是否处于激活状态。</td></tr><tr><td>ClickMode</td><td>获取或设置按钮的单击模式</td></tr><tr><td>IsEnabledCore</td><td>获取的值 System.Windows.ContentElement.IsEnabled 属性。</td></tr></tbody></table><p>ButtonBase还提供了两个虚方法，分别是OnClick()和OnIsPressedChanged（）。说明这两个方法也是可以重写的，OnClick表示在按钮单击时执行的方法。</p><h2 id="_4-button按钮" tabindex="-1"><a class="header-anchor" href="#_4-button按钮" aria-hidden="true">#</a> 4.Button按钮</h2><p>Button因为继承了ButtonBase，而ButtonBase又继承了ContentControl，所以，Button可以通过设置Content属性来设置要显示的内容。例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Button Content=&quot;WPF中文网&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们使用Button的时机，通常是鼠标点击事件需要有响应操作时，所以，Button的Click事件是最好的选择。</p><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class Button : ButtonBase
{
    public static readonly DependencyProperty IsDefaultProperty;
    public static readonly DependencyProperty IsCancelProperty;
    public static readonly DependencyProperty IsDefaultedProperty;
 
    public Button();
 
    public bool IsDefault { get; set; }
    public bool IsCancel { get; set; }
    public bool IsDefaulted { get; }
 
    protected override void OnClick();
    protected override AutomationPeer OnCreateAutomationPeer();
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性分析</p><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>IsDefault</td><td>用户通过按 ENTER 键时调用的默认按钮。</td></tr><tr><td>IsCancel</td><td>用户可以通过按 ESC 键来激活取消按钮。</td></tr><tr><td>IsDefaulted</td><td>获取按钮是否为按 ENTER 键时调用的默认按钮。</td></tr></tbody></table><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;Grid&gt;
        &lt;Button x:Name=&quot;_btn&quot;
                Content=&quot;Exit&quot;
                Width=&quot;100&quot;
                Height=&quot;50&quot;
                Click=&quot;_btn_Click&quot;
                FontSize=&quot;20&quot;
                Background=&quot;AliceBlue&quot;
                IsDefault=&quot;True&quot;&gt;
            
        &lt;/Button&gt;
        
    &lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+a+`" alt="image-20250222184409691" tabindex="0" loading="lazy"><figcaption>image-20250222184409691</figcaption></figure><p>如上所示，我们在Window窗体中写了一个Button按钮，然后设置了一些属性，我们一一进行分析。</p><h3 id="x-name和name的区别" tabindex="-1"><a class="header-anchor" href="#x-name和name的区别" aria-hidden="true">#</a> <strong>x:Name和Name的区别</strong></h3><p>第一个设置是x:Name=&quot;_button&quot;。首先要解释x:Name是什么意思。在这里的x表示一个命令空间，也就是xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;，Name指的是这个控件的名称。请注意，由于Button继承了FrameworkElement类，而FrameworkElement类也有一个Name属性，但是这里设置的x:Name=&quot;_button&quot;并不是引用了FrameworkElement类的Name属性，而是指在xaml中为Button定义了一个叫“_button&quot;的名称，并把这个“_button&quot;映射到了Button的Name属性上，以便于我们在后端可以通过”_button“去引用这个按钮。</p><p>也就是说，如果某个控件本身也有一个Name属性，那么前端的x:Name就赋值给控件Name属性。</p><h3 id="content属性" tabindex="-1"><a class="header-anchor" href="#content属性" aria-hidden="true">#</a> <strong>Content属性</strong></h3><p>这是ContentControl控件的内容属性，用来设置Button的显示内容，除了是字符串，也可以设置为其它内容，比如一个图标、一个其它元素。</p><h3 id="width属性" tabindex="-1"><a class="header-anchor" href="#width属性" aria-hidden="true">#</a> <strong>Width属性</strong></h3><p>Width也不是Button本身的属性，而是FrameworkElement的宽度，由于Button继承了FrameworkElement，所以Width就成了按钮的宽度属性。</p><h3 id="height属性" tabindex="-1"><a class="header-anchor" href="#height属性" aria-hidden="true">#</a> <strong>Height属性</strong></h3><p>与上面的Width类似，同属于FrameworkElement的高度属性，在此成了Button的高度属性。</p><h3 id="click事件" tabindex="-1"><a class="header-anchor" href="#click事件" aria-hidden="true">#</a> <strong>Click事件</strong></h3><p>Click是一个事件，但不是Button的事件，而是它的基类ButtonBase的事件，事件和委托概念关系密切，因为要订阅一个事件，需要写一个回调函数，而这个回调函数的签名要和这个事件的声明委托签名保持一致。我们来看看Click的委托签名是什么样子的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public delegate void RoutedEventHandler(object sender, RoutedEventArgs e);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个委托规定了回调函数的签名，第一，要求回调函数的返回值是void，第二，要求回调函数有两个参数，且参数1是object类型，参数2是RoutedEventArgs类型。于是，我们在后端代码中写了这样一个回调函数。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>private void _button_Click(object sender, RoutedEventArgs e)
{
    this.Close();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后在前端，把这个回调函数的名称赋值给Click事件即可完成了在xaml代码中的事件订阅。</p><h3 id="isdefault属性" tabindex="-1"><a class="header-anchor" href="#isdefault属性" aria-hidden="true">#</a> <strong>IsDefault属性</strong></h3><p>这个属性是Button自身的属性，这里设置为true，表示这个button是一个默认按钮，我们按下F5启动程序后，直接按回车键，就相当于用鼠标点击了按钮，最终执行了回调函数里面的代码。即this.Close()语句。</p><p>this.Close()表示关闭当前窗体。</p><h3 id="通过c-代码订阅事件" tabindex="-1"><a class="header-anchor" href="#通过c-代码订阅事件" aria-hidden="true">#</a> <strong>通过C#代码订阅事件</strong></h3><p>我们还可以通过C#代码提供的事件订阅符号+=去订阅事件，接下来，我们将上面的例子简单修改一下，去掉在xaml中的订阅方式，在后端代码的构造函数中订阅事件。</p><p>前端代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Button Name=&quot;_button&quot; 
        Content=&quot;退出&quot; 
        Width=&quot;100&quot; 
        Height=&quot;25&quot; 
        IsDefault=&quot;True&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> /// &lt;summary&gt;
    /// MainWindow.xaml 的交互逻辑
    /// &lt;/summary&gt;
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            _button.Click += _button_Click;
        }
 
        private void _button_Click(object sender, RoutedEventArgs e)
        {
            this.Close();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后F5调试，效果是一模一样的。</p><h2 id="_5-togglebutton基类" tabindex="-1"><a class="header-anchor" href="#_5-togglebutton基类" aria-hidden="true">#</a> 5.ToggleButton基类</h2><p>因为ToggleButton作为CheckBox（复选框）和RadioButton（单选框）的基类，我们在学习CheckBox和RadioButton之前要先了解一下这个基类</p><p>ToggleButton基类提供了两个属性和三个事件</p><ul><li><p>IsThreeState属性为true表示控件支持3个状态，</p></li><li><p>IsChecked属性为true表示当前控件已被选中。Checked事件表示选中时引发的事件，Unchecked事件表示从选中状态改为未选状态时引发的事件，</p></li><li><p>Indeterminate事件表示不确定状态时引发的事件</p></li></ul><h2 id="_6-checkbox复选框" tabindex="-1"><a class="header-anchor" href="#_6-checkbox复选框" aria-hidden="true">#</a> 6.CheckBox复选框</h2><p>CheckBox继承于ToggleButton，而ToggleButton才继承于ButtonBase基类.CheckBox自身没有什么特别内容。一切都使用它的父类提供的属性、方法和事件。</p><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;Grid&gt;
        &lt;StackPanel Orientation=&quot;Vertical&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;&gt;
            &lt;TextBlock Text=&quot;选择课程： &quot; FontSize=&quot;20&quot;&gt;&lt;/TextBlock&gt;
            &lt;CheckBox x:Name=&quot;check1&quot; Content=&quot;语文&quot;  FontSize=&quot;20&quot; Margin=&quot;5&quot;/&gt;
            &lt;CheckBox x:Name=&quot;check2&quot; Content=&quot;数学&quot;  FontSize=&quot;20&quot; Margin=&quot;5&quot;/&gt;
            &lt;CheckBox x:Name=&quot;check3&quot; Content=&quot;英语&quot;  FontSize=&quot;20&quot; Margin=&quot;5&quot;/&gt;
            &lt;Button x:Name=&quot;btn&quot; Content=&quot;提交&quot; FontSize=&quot;20&quot; Margin=&quot;5&quot; Click=&quot;_btn_Click&quot;/&gt;
        &lt;/StackPanel&gt;
        
    &lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>        private void _btn_Click(object sender, RoutedEventArgs e)
        {
            string str = &quot;&quot;;
            if (check1.IsChecked.Value)
            {
                str += check1.Content + &quot; &quot;;
            }
            if (check2.IsChecked.Value)
            {
                str += check2.Content + &quot; &quot;;
            }
            if (check3.IsChecked.Value)
            {
                str += check3.Content + &quot; &quot;;
            }
            MessageBox.Show(&quot;已选择：&quot; + str);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="image-20250222190626695" tabindex="0" loading="lazy"><figcaption>image-20250222190626695</figcaption></figure><p>我们通过判断CheckBox的IsChecked属性，来获取前端用户的选择，这通常是CheckBox控件最常用的用法，由于IsChecked是一个依赖属性，它还可以参与绑定，形成MVMM的应用模式.</p><h2 id="_7-radiobutton单选框" tabindex="-1"><a class="header-anchor" href="#_7-radiobutton单选框" aria-hidden="true">#</a> 7.RadioButton单选框</h2><p>RadioButton也继承于ToggleButton，作用是单项选择，所以被称为单选框。本质上，它依然是一个按钮，一旦被选中，不会清除，除非它”旁边“的单选框被选中。</p><p>这个控件有一个重要属性叫GroupName——分组名称。默认值是一个空字符串。用来指定哪些RadioButton之间是互相排斥的。</p><p>示例，大部分使用CheckBox代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;Grid&gt;
        &lt;StackPanel Orientation=&quot;Vertical&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;&gt;
            &lt;TextBlock Text=&quot;选择课程： &quot; FontSize=&quot;20&quot;&gt;&lt;/TextBlock&gt;
            &lt;RadioButton x:Name=&quot;check1&quot; Content=&quot;语文&quot;  FontSize=&quot;20&quot; Margin=&quot;5&quot; GroupName=&quot;class&quot;/&gt;
            &lt;RadioButton x:Name=&quot;check2&quot; Content=&quot;数学&quot;  FontSize=&quot;20&quot; Margin=&quot;5&quot; GroupName=&quot;class&quot;/&gt;
            &lt;RadioButton x:Name=&quot;check3&quot; Content=&quot;一年纪&quot;  FontSize=&quot;20&quot; Margin=&quot;5&quot;/&gt;
            &lt;Button x:Name=&quot;btn&quot; Content=&quot;提交&quot; FontSize=&quot;20&quot; Margin=&quot;5&quot; Click=&quot;_btn_Click&quot;/&gt;
        &lt;/StackPanel&gt;
        
    &lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="image-20250222191040817" tabindex="0" loading="lazy"><figcaption>image-20250222191040817</figcaption></figure><h2 id="_8-repeatbutton重复按钮" tabindex="-1"><a class="header-anchor" href="#_8-repeatbutton重复按钮" aria-hidden="true">#</a> 8.RepeatButton重复按钮</h2><p>RepeatButton,顾名思义，重复执行的按钮。就是当按钮被按下时，所订阅的回调函数会不断被执行。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class RepeatButton : ButtonBase
{
    public static readonly DependencyProperty DelayProperty;
    public static readonly DependencyProperty IntervalProperty;
 
    public RepeatButton();
 
    public int Delay { get; set; }
    public int Interval { get; set; }
 
    protected override void OnClick();
    protected override AutomationPeer OnCreateAutomationPeer();
    protected override void OnKeyDown(KeyEventArgs e);
    protected override void OnKeyUp(KeyEventArgs e);
    protected override void OnLostMouseCapture(MouseEventArgs e);
    protected override void OnMouseEnter(MouseEventArgs e);
    protected override void OnMouseLeave(MouseEventArgs e);
    protected override void OnMouseLeftButtonDown(MouseButtonEventArgs e);
    protected override void OnMouseLeftButtonUp(MouseButtonEventArgs e);
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性分析" tabindex="-1"><a class="header-anchor" href="#属性分析" aria-hidden="true">#</a> 属性分析</h3><p>RepeatButton 自身提供了两个整型属性，分别是Delay 和Interval 。</p><p><strong>Delay 属性</strong>：表示延时重复执行的毫秒数，就是说，RepeatButton被按下后会立即执行一次回调函数，如果您不松开鼠标，在等待Delay 毫秒后，就开始进行重复执行阶段。</p><p><strong>Interval 属性</strong>：表示重复执行回调函数的时间间隔毫秒数。</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>前端代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;Grid&gt;
        &lt;StackPanel Orientation=&quot;Vertical&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;&gt;
            &lt;TextBlock Text=&quot;选择课程： &quot; FontSize=&quot;20&quot;&gt;&lt;/TextBlock&gt;
            &lt;RepeatButton Click=&quot;_btn_Click&quot; x:Name=&quot;check1&quot; Delay=&quot;1000&quot; Interval=&quot;500&quot; Content=&quot;加一&quot;  FontSize=&quot;20&quot; Margin=&quot;5&quot; Background=&quot;AliceBlue&quot;/&gt;
            
        &lt;/StackPanel&gt;
        
    &lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>        private void _btn_Click(object sender, RoutedEventArgs e)
        {
            Console.WriteLine($&quot;开始加1.现在时间: {DateTime.Now.ToLongTimeString()},&quot; +
                $&quot;。重复次数：{i++}&quot;);

        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-label标签" tabindex="-1"><a class="header-anchor" href="#_9-label标签" aria-hidden="true">#</a> 9.Label标签</h2><p>Label控件继承于ContentControl控件，它是一个文本标签，如果您想修改它的标签内容，请设置Content属性。我们曾提过ContentControl的Content属性是object类型，意味着Label的Content也是可以设置为任意的引用类型的。</p><p>我们给第二个标签的Content属性设置了一个按钮，并对按钮的Click事件做了订阅回调，F5运行，事实证明，此时的Button是可以正常使用 。只不过，通常情况下，我们的Label只是用来显示一段文字，很少在Contnet里面编写其它控件代码。如果要编写其它控件代码以实现更复杂的自定义控件效果，我们建议使用UserControl用户控件。</p><p>对于文本的显示，除了可以在Label中显示，我们还有一个控件也可以实现，那就是TextBlock文字块。而且，TextBlock控件直接从FrameworkElement基类继承而来，效率比Label标签更高。</p><h2 id="_10-textblock文字块" tabindex="-1"><a class="header-anchor" href="#_10-textblock文字块" aria-hidden="true">#</a> 10.TextBlock文字块</h2><p>TextBlock是专业处理文本显示的控件，在功能上比Label更全面。</p><h3 id="相关的属性。" tabindex="-1"><a class="header-anchor" href="#相关的属性。" aria-hidden="true">#</a> 相关的属性。</h3><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>FontWeight</td><td>获取或设置TextBlock的字体粗细</td></tr><tr><td>FontStyle</td><td>获取或设置TextBlock的字体样式，如斜体字体</td></tr><tr><td>FontFamily</td><td>获取或设置TextBlock的字体系列，如微软雅黑</td></tr><tr><td>Text</td><td>获取或设置TextBlock的字体内容。</td></tr><tr><td>ContentEnd</td><td>表示获取TextBlock内容的最末尾的TextPointer对象</td></tr><tr><td>Typography</td><td>获取此元素的内容当前有效的版式变体。</td></tr><tr><td>FontStretch</td><td>获取或设置 TextBlock 的常用字体拉伸特征。</td></tr><tr><td>BaselineOffset</td><td>获取或设置文本的每个行相对于基线的偏移量。</td></tr><tr><td>FontSize</td><td>获取或设置TextBlock的字号</td></tr><tr><td>TextWrapping</td><td>获取或设置TextBlock的文字的换行方式</td></tr><tr><td>Background</td><td>获取或设置TextBlock控件的背景颜色（画刷）</td></tr><tr><td>TextEffects</td><td>获取或设置要应用于此元素中的文本内容的效果。</td></tr><tr><td>LineHeight</td><td>获取或设置各行内容的高度。</td></tr><tr><td>Padding</td><td>指示内容区域的边界之间填充空间的宽度</td></tr><tr><td>TextAlignment</td><td>指示文本内容的水平对齐方式。</td></tr><tr><td>TextTrimming</td><td>获取或设置在内容超出内容区域时要采用的文本剪裁行为。</td></tr><tr><td>Foreground</td><td>获取或设置文本内容的字体颜色（画刷）</td></tr><tr><td>Inlines</td><td>这个属性是一个集合，其中的元素表示内联流内容元素，简单点说，一行文本可以看成是一个Inline元素，而TextBlock可以接受多个Inline。Run继承于Inline，实际使用中，我们会创建多个Run实例，可以单独为每个Run对象设置字体字号颜色等等。</td></tr><tr><td>ContentStart</td><td>表示获取TextBlock内容的最开始的TextPointer对象</td></tr></tbody></table><h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code> &lt;WrapPanel&gt;
     &lt;TextBlock Text=&quot;这是一个TextBlock块&quot; Margin=&quot;5&quot;/&gt;
     &lt;TextBlock Text=&quot;粗体文字&quot; FontWeight=&quot;Bold&quot; Margin=&quot;5&quot;/&gt;    
     &lt;TextBlock Text=&quot;细体文字&quot; FontWeight=&quot;Light&quot; Margin=&quot;5&quot;/&gt;    
     &lt;TextBlock Text=&quot;斜体文字&quot; FontStyle=&quot;Italic&quot; Margin=&quot;5&quot;/&gt;
     &lt;TextBlock Text=&quot;微软雅黑&quot; FontFamily=&quot;Microsoft YaHei UI&quot; Margin=&quot;5&quot;/&gt;    
     &lt;TextBlock Text=&quot;大号字体&quot; FontSize=&quot;30&quot; Margin=&quot;5&quot;/&gt;    
     &lt;TextBlock Text=&quot;红色文字&quot; Foreground=&quot;Red&quot; Margin=&quot;5&quot;/&gt;
     &lt;TextBlock Text=&quot;底色文字&quot; Foreground=&quot;Yellow&quot; Background=&quot;Red&quot; Margin=&quot;5&quot; Height=&quot;20&quot;/&gt;
     &lt;TextBlock Text=&quot;内间距文字&quot; Foreground=&quot;Yellow&quot; Background=&quot;Red&quot; Padding=&quot;10&quot; Margin=&quot;5&quot;/&gt;
     &lt;TextBlock Background=&quot;LightGray&quot; Height=&quot;25&quot;&gt;
         &lt;Run Foreground=&quot;Red&quot;&gt;这行文字&lt;/Run&gt;
         &lt;Run Foreground=&quot;Green&quot;&gt;由三部分&lt;/Run&gt;
         &lt;Run Foreground=&quot;Blue&quot;&gt;组成&lt;/Run&gt;
     &lt;/TextBlock&gt;
     &lt;Grid Width=&quot;150&quot; Height=&quot;100&quot; Margin=&quot;5&quot; Background=&quot;LightGoldenrodYellow&quot;&gt;
         &lt;TextBlock Text=&quot;这段文字体现了文字的文本换行属性TextWrapping&quot; TextWrapping=&quot;Wrap&quot; Margin=&quot;10&quot;/&gt;
     &lt;/Grid&gt;

     &lt;!--使用Run--&gt;
     &lt;Grid&gt;
         &lt;TextBlock x:Name=&quot;textblock&quot;  
                    Width=&quot;320&quot; 
                    Height=&quot;100&quot; 
                    FontSize=&quot;15&quot; 
                    FontFamily=&quot;微软雅黑&quot; 
                    FontWeight=&quot;Black&quot; 
                    FontStretch=&quot;Condensed&quot; 
                    Foreground=&quot;#dddddd&quot; 
                    Background=&quot;Teal&quot; 
                    TextAlignment=&quot;Center&quot; 
                    TextWrapping=&quot;Wrap&quot; 
                    TextTrimming=&quot;CharacterEllipsis&quot; 
                    Margin=&quot;10&quot; Padding=&quot;5&quot;
                    HorizontalAlignment=&quot;Left&quot; 
                    VerticalAlignment=&quot;Center&quot; 
                    LineHeight=&quot;30&quot; 
                    ToolTip=&quot;《临江仙·滚滚长江东逝水》&quot;&gt;
		&lt;Run Foreground=&quot;#CDB632&quot; TextDecorations=&quot;Underline&quot;&gt;
滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。
		&lt;/Run&gt;
		&lt;Run Text=&quot;白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中。 &quot;&gt;
		&lt;/Run&gt;
         &lt;/TextBlock&gt;
     &lt;/Grid&gt;
 &lt;/WrapPanel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+s+`" alt="image-20250222194252920" tabindex="0" loading="lazy"><figcaption>image-20250222194252920</figcaption></figure><h2 id="_11-textbox文本框" tabindex="-1"><a class="header-anchor" href="#_11-textbox文本框" aria-hidden="true">#</a> 11.TextBox文本框</h2><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><p>几乎所有的文本、数字、符号的输入都是用TextBox文本框来完成的。TextBox用来获取用户的键盘输入的信息，这也是一个常用的控件。它继承于TextBoxBase，而TextBoxBase又继承于Control</p><h3 id="textboxbase基类" tabindex="-1"><a class="header-anchor" href="#textboxbase基类" aria-hidden="true">#</a> TextBoxBase基类</h3><p>TextBoxBase基类都提供了哪些成员</p><p>属性成员</p><table><thead><tr><th>属性名称</th><th>说明</th></tr></thead><tbody><tr><td>VerticalScrollBarVisibility</td><td>垂直滚动条是否显示</td></tr><tr><td>HorizontalScrollBarVisibility</td><td>水平滚动条是否显示</td></tr><tr><td>AcceptsReturn</td><td>表示用户按下回车键时是否插入新行。</td></tr><tr><td>AcceptsTab</td><td>用来设置用户按下tab键的响应，为true表示插入一个制表符，否则将焦点移动到标记为制表位的下一个控件且不插入制表符。</td></tr><tr><td>IsReadOnlyCaretVisible</td><td>表示只读文本框是否显示插入符号，用得较少。</td></tr><tr><td>SelectionOpacity</td><td>用来设置用户选中的文本的透明度。</td></tr><tr><td>IsUndoEnabled</td><td>表示文本编辑控件是否启用撤消支持。</td></tr><tr><td>UndoLimit</td><td>获取或设置存储在撤消队列中的操作数目。</td></tr><tr><td>AutoWordSelection</td><td>表示自动选择字词，默认为false。</td></tr><tr><td>SelectionBrush</td><td>表示用户选择的文本段落的画笔，比较常用。</td></tr><tr><td>IsReadOnly</td><td>表示文本框是否只读，这个属性经常使用。</td></tr><tr><td>CaretBrush</td><td>表示获取或设置用于绘制的文本框中插入符号的画笔。</td></tr><tr><td>IsInactiveSelectionHighlightEnabled</td><td>表示获取或设置一个值，该值指示当文本框没有焦点时，文本框中是否显示选定的文本。</td></tr></tbody></table><p>事件成员</p><p>TextBoxBase基类提供了两个事件，分别是TextChanged和SelectionChanged。</p><p>TextChanged事件：只要文本框中的内容被修改，将会触发引事件，这通常用来做一些判断业务。比如某个文本框只能输入数字，那就可以去订阅TextChanged事件。</p><p>SelectionChanged事件：选中的文本框内容发生改变时引发的事件。</p><h3 id="textbox控件" tabindex="-1"><a class="header-anchor" href="#textbox控件" aria-hidden="true">#</a> TextBox控件</h3><p>属性成员</p><table><thead><tr><th>属性名称</th><th>说明</th></tr></thead><tbody><tr><td>MinLines</td><td>获取或设置最小可见的行数。</td></tr><tr><td>MaxLines</td><td>获取或设置可见行的最大数目。</td></tr><tr><td>Text</td><td>获取或设置文本框的文本内容。</td></tr><tr><td>CharacterCasing</td><td>获取或设置文本框字符的大小写形式，默认不转换。 它是一个枚举，Normal表示不转换大小写，Lower表示全部转换成小写，Upper表示全部转换成大写</td></tr><tr><td>MaxLength</td><td>获取或设置最大可以在文本框中手动输入的字符数。</td></tr><tr><td>TextAlignment</td><td>获取或设置文本框的内容的水平对齐方式。例如左对齐，右对齐，居在对齐和两端对齐。</td></tr><tr><td>CaretIndex</td><td>获取或设置插入点移动的插入位置索引。</td></tr><tr><td>SelectionLength</td><td>获取或设置一个值，该值在文本框中当前所选内容中的字符数。</td></tr><tr><td>SelectionStart</td><td>获取或设置当前所选内容的起始位置的字符索引。</td></tr><tr><td>Typography</td><td>获取文本框中的文本内容的当前有效的版式变体。</td></tr><tr><td>LineCount</td><td>获取文本框中的总行数。</td></tr><tr><td>TextDecorations</td><td>获取要应用于文本框中的文本修饰。</td></tr><tr><td>SelectedText</td><td>获取或设置文本框中当前选择的内容。</td></tr><tr><td>TextWrapping</td><td>获取或设置文本框中文本的换行方式。这个属性比较常用，在较长的文字段落显示时可以设置为Wrap，这样自动换行，界面呈现的效果比较令人满意。</td></tr></tbody></table><p>TextBox文本框本身没有任务事件，都是继承父类的事件。</p><h3 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例</h3><p>前端代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;StackPanel Orientation=&quot;Horizontal&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;&gt;
    &lt;TextBlock Text=&quot;用户名&quot; Margin=&quot;5&quot; FontSize=&quot;20&quot;&gt;&lt;/TextBlock&gt;
    &lt;TextBox x:Name=&quot;textB&quot; Width=&quot;100&quot; Height=&quot;25&quot; MaxLength=&quot;10&quot; CharacterCasing=&quot;Lower&quot;/&gt;
    &lt;Button x:Name=&quot;btn&quot; Content=&quot;enter&quot; Height=&quot;25&quot; Margin=&quot;5 0&quot; Click=&quot;_btn_Click&quot; FontSize=&quot;20&quot;/&gt;
&lt;/StackPanel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>private void _btn_Click(object sender, RoutedEventArgs e)
{
    MessageBox.Show($&quot;输入文本为：{textB.Text}&quot;);
    textB.TextChanged += TextB_TextChanged;


}

private void TextB_TextChanged(object sender, TextChangedEventArgs e)
{
    Console.WriteLine(&quot;文本框内容发生变化&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="image-20250223135835121" tabindex="0" loading="lazy"><figcaption>image-20250223135835121</figcaption></figure><p>我们使用了CharacterCasing=&quot;Upper&quot;这个设置，可以看到图片中的显示效果，虽然我在输入时是小写的china字符，但是，TextBox会转换成大写的CHINA，另外，总长度不能超过10个字符。</p><p>最后要获取TextBox文本框的内容，使用Text属性即可。</p><h2 id="_12-richtextbox富文本框" tabindex="-1"><a class="header-anchor" href="#_12-richtextbox富文本框" aria-hidden="true">#</a> 12.RichTextBox富文本框</h2><p>RichTextBox继承于TextBoxBase基类，所以很大程度上与TextBox控件类似，两者在某些情况下可以互相替换。但是，如果要为用户提供更强大的文档编辑功能，非RichTextBox莫属。</p><h3 id="richtextbox的结构定义" tabindex="-1"><a class="header-anchor" href="#richtextbox的结构定义" aria-hidden="true">#</a> RichTextBox的结构定义</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class RichTextBox : TextBoxBase, IAddChild
{
    public static readonly DependencyProperty IsDocumentEnabledProperty;
 
    public RichTextBox();
    public RichTextBox(FlowDocument document);
 
    public FlowDocument Document { get; set; }
    public bool IsDocumentEnabled { get; set; }
    public TextSelection Selection { get; }
    public TextPointer CaretPosition { get; set; }
    protected internal override IEnumerator LogicalChildren { get; }
 
    public TextPointer GetNextSpellingErrorPosition(TextPointer position, LogicalDirection direction);
    public TextPointer GetPositionFromPoint(Point point, bool snapToText);
    public SpellingError GetSpellingError(TextPointer position);
    public TextRange GetSpellingErrorRange(TextPointer position);
    public bool ShouldSerializeDocument();
    protected override Size MeasureOverride(Size constraint);
    protected override AutomationPeer OnCreateAutomationPeer();
    protected override void OnDpiChanged(DpiScale oldDpiScaleInfo, DpiScale newDpiScaleInfo);
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RichTextBox控件有一个带参数的构造函数，参数的类型是FlowDocument类，另外，它还有一个Document属性，类型也是FlowDocument类，说明RichTextBox控件的元素必须且只能是FlowDocument类</p><h3 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例</h3><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public MainWindow()
{
    InitializeComponent();
}
int i = 0;
private void _btn_Click(object sender, RoutedEventArgs e)
{
    //获取输入的文本
    TextRange textRange = new TextRange(_richText.Document.ContentStart, _richText.Document.ContentEnd);
    MessageBox.Show($&quot;输入文本为：{textRange.Text}&quot;);

    //向richTextBox中添加内容
    Paragraph paragraph = new Paragraph();
    Run run = new Run($&quot;当前时间：{DateTime.Now}&quot;);
    run.Foreground = Brushes.Red;
    paragraph.Inlines.Add(run);
    _richText.Document.Blocks.Add(paragraph);

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;StackPanel Orientation=&quot;Vertical&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;&gt;
    &lt;RichTextBox x:Name=&quot;_richText&quot; Margin=&quot;10 5&quot; Height=&quot;300&quot; Width=&quot;400&quot; FontSize=&quot;18&quot;&gt;
        &lt;FlowDocument&gt;
            &lt;Paragraph&gt;
                RichTextBox富文本框控件到底有什么强大的功能?
                &lt;Bold Foreground=&quot;Aquamarine&quot;&gt;请看下面.&lt;/Bold&gt;
            &lt;/Paragraph&gt;
            &lt;Paragraph Foreground=&quot;BlueViolet&quot;&gt;RichTextBox唯一的子元素是FlowDocument&lt;/Paragraph&gt;
            &lt;Paragraph Foreground=&quot;DarkBlue&quot;&gt;
                FlowDocument是指流文档,一个流文档由一个或多个Block构成，
                所以它有一个Blocks属性。Block只是一个抽象基类，
                所以流文档的子元素其实是继承了Block的子类，例如：
            &lt;/Paragraph&gt;
            &lt;List MarkerOffset=&quot;25&quot; MarkerStyle=&quot;Decimal&quot; StartIndex=&quot;1&quot;&gt;
                &lt;ListItem&gt;
                    &lt;Paragraph&gt;BlockUIContainer（UI元素容器）&lt;/Paragraph&gt;
                &lt;/ListItem&gt;
                &lt;ListItem&gt;
                    &lt;Paragraph&gt;List（有序列表）&lt;/Paragraph&gt;
                &lt;/ListItem&gt;
                &lt;ListItem&gt;
                    &lt;Paragraph&gt;Paragraph（段落）&lt;/Paragraph&gt;
                &lt;/ListItem&gt;
                &lt;ListItem&gt;
                    &lt;Paragraph&gt;Section（分组）&lt;/Paragraph&gt;
                &lt;/ListItem&gt;
                &lt;ListItem&gt;
                    &lt;Paragraph&gt;Table（网格）&lt;/Paragraph&gt;
                &lt;/ListItem&gt;
            &lt;/List&gt;
        &lt;/FlowDocument&gt;
    &lt;/RichTextBox&gt;
    &lt;Button x:Name=&quot;btn&quot; Content=&quot;enter&quot; Margin=&quot;10 5&quot; Click=&quot;_btn_Click&quot; Width=&quot;150&quot; Height=&quot;50&quot; FontSize=&quot;20&quot;/&gt;
&lt;/StackPanel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="image-20250223141854128" tabindex="0" loading="lazy"><figcaption>image-20250223141854128</figcaption></figure><p>如上所示，我们在窗体中实例化了一个RichTextBox控件，并实例化了一个FlowDocument对象。RichTextBox唯一的子元素是FlowDocument，</p><p>FlowDocument是指流文档,一个流文档由一个或多个Block构成，所以它有一个Blocks属性。Block只是一个抽象基类，FlowDocument流文档的子元素都继承了Block抽象基类，例如：</p><ul><li>BlockUIContainer（UI元素容器）</li><li>List（有序列表）</li><li>Paragraph（段落）</li><li>Section（分组）</li><li>Table（网格）</li></ul><p>BlockUIContainer是一个非常强大的段落元素，因为它可以直接包含WPF的控件。这样一来，我们就可以将设计的UI写入到流文档中显示或打印。</p><p>上面这五个元素继承了TextElement、FrameworkContentElement和ContentElement三个父素，所以实际上这五个子元素就拥有了许多字体属性的设置、资源、样式、数据绑定、以及各种事件的应用。</p><p>如果要获取RichTextBox的文本信息，可以使用TextRange类。FlowDocument类有两个属性，分别ContentStart和ContentEnd，表示文字内容的开始和结束。</p><p>所以通过TextRange类的Text，我们就能访问到RichTextBox控件的内容。</p><h2 id="_13-tooltip控件-提示工具" tabindex="-1"><a class="header-anchor" href="#_13-tooltip控件-提示工具" aria-hidden="true">#</a> 13.ToolTip控件（提示工具）</h2><p>ToolTip控件继承于ContentControl，它不能有逻辑或视觉父级，意思是说，它不能单独存在于WPF的视觉树上（不能以控件的形式实例化），它必须依附于某个控件。因为它的功能被设计成提示信息，当鼠标移动到某个控件上方时，悬停一会儿，就会显示这个ToolTip的内容。</p><p>通常ToolTip会显示一句话，用来阐述某个控件的说明。这个控件存在于FrameworkElement基类中，也就是ToolTip属性，这个属性在FrameworkElement虽然被声明成object，而不是ToolTip类型，但是，我们仍然可以自定义ToolTip的内容。重点：<strong>WPF几乎所有控件都可以拥有ToolTip小型提示弹窗</strong>！</p><p>因为ToolTip继承于ContentControl控件，所以，ToolTip拥有的Content属性就可以显示任何类型，比如字符串、图像、其它控件组合布局。</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;StackPanel Orientation=&quot;Vertical&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;&gt;
    &lt;Button x:Name=&quot;btn&quot; Content=&quot;enter&quot; Margin=&quot;10 5&quot; Click=&quot;_btn_Click&quot; Width=&quot;150&quot; Height=&quot;50&quot; FontSize=&quot;20&quot;
            ToolTip=&quot;this is a tips&quot;/&gt;
    &lt;Button x:Name=&quot;btn2&quot; Content=&quot;enter&quot; Margin=&quot;10 5&quot; Width=&quot;150&quot; Height=&quot;50&quot; FontSize=&quot;20&quot;&gt;
        &lt;Button.ToolTip&gt;
            &lt;StackPanel Background=&quot;DarkOrange&quot;&gt;
                &lt;TextBlock Text=&quot;This is a tooltip&quot; FontWeight=&quot;Bold&quot;/&gt;
                &lt;TextBlock Text=&quot;click this tip to enter&quot;/&gt;
                &lt;Border BorderBrush=&quot;Black&quot; BorderThickness=&quot;0 1 0 0&quot; Margin=&quot;0 4&quot;/&gt;
                &lt;TextBlock Text=&quot;《点击这里》&quot;/&gt;
            &lt;/StackPanel&gt;
        &lt;/Button.ToolTip&gt;
    &lt;/Button&gt;
&lt;/StackPanel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="image-20250223143816771" tabindex="0" loading="lazy"><figcaption>image-20250223143816771</figcaption></figure><p>虽然ToolTip可以自定义内容，但是，ToolTip的内容无法接收焦点。</p><p>与ToolTip有点类似的控件，还有一个叫Popup控件，也是一个弹出窗口，并可以在这个窗口内任意布局。</p><h2 id="_14-popup弹出窗口" tabindex="-1"><a class="header-anchor" href="#_14-popup弹出窗口" aria-hidden="true">#</a> 14.Popup弹出窗口</h2><p>Popup类似于ToolTip，在指定的元素或窗体中弹出一个具有任意内容的窗口。Popup继承于FrameworkElement，算得上是独门独户的控件，因为大多数控件都是从Shape、Control或Panel三个类继承而来。</p><p>属性成员</p><table><thead><tr><th>属性名称</th><th>说明</th></tr></thead><tbody><tr><td>HasDropShadow</td><td>只读属性，控件是否有投影效果。</td></tr><tr><td>AllowsTransparency</td><td>获取或设置控件是否包含透明内容。</td></tr><tr><td>PopupAnimation</td><td>获取或设置控件打开或关闭时的动画效果，None表示没有动画，Fade表示逐渐显示或淡出，Slide表示向上向下滑入，Scroll表示滚动效果。</td></tr><tr><td>PlacementRectangle</td><td>获取或设置控件打开时的矩形位置 。</td></tr><tr><td>PlacementTarget</td><td>获取或设置Popup控件在哪个控件身边打开（重点）。</td></tr><tr><td>VerticalOffset</td><td>获取或设置目标原点和 popup 对齐点之间的垂直距离。</td></tr><tr><td>HorizontalOffset</td><td>获取或设置目标原点和弹出项对齐之间的水平距离点。</td></tr><tr><td>StaysOpen</td><td>默认值为true，表示Popup打开后，如果失去焦点，Popup是否继续显示（重点）。</td></tr><tr><td>Child</td><td>获取或设置控件的内容，类似于ContentControl的Content属性，只能拥有一个元素（重点）。</td></tr><tr><td>IsOpen</td><td>获取或设置Popup控件是否可见。</td></tr><tr><td>Placement</td><td>枚举类，表示Popup 控件显示时的对齐方式。</td></tr></tbody></table><p>事件成员</p><p>Opened事件：Popup控件打开时引发的事件。</p><p>Closed事件：Popup控件关闭时引发的事件</p><h3 id="示例-5" tabindex="-1"><a class="header-anchor" href="#示例-5" aria-hidden="true">#</a> 示例</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;StackPanel Orientation=&quot;Vertical&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;&gt;
    &lt;CheckBox x:Name=&quot;btn&quot; Content=&quot;this is a checkbox&quot; Margin=&quot;10 5&quot; Click=&quot;_btn_Click&quot; Width=&quot;150&quot; Height=&quot;50&quot; FontSize=&quot;20&quot;
            ToolTip=&quot;this is a tips&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot; Background=&quot;AliceBlue&quot;/&gt;
    &lt;Popup x:Name=&quot;btn2&quot;  IsOpen=&quot;{Binding ElementName=btn,Path=IsChecked}&quot;
           PlacementTarget=&quot;{Binding ElementName=btn}&quot;
           StaysOpen=&quot;True&quot;
           &gt;

        &lt;StackPanel Background=&quot;DarkOrange&quot;&gt;
            &lt;TextBlock Text=&quot;This is a tooltip&quot; FontWeight=&quot;Bold&quot;/&gt;
            &lt;TextBlock Text=&quot;click this tip to enter&quot;/&gt;
            &lt;Border BorderBrush=&quot;Black&quot; BorderThickness=&quot;0 1 0 0&quot; Margin=&quot;0 4&quot;/&gt;
            &lt;TextBlock Text=&quot;《点击这里》&quot;/&gt;
        &lt;/StackPanel&gt;

    &lt;/Popup&gt;
&lt;/StackPanel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="image-20250223145039278" tabindex="0" loading="lazy"><figcaption>image-20250223145039278</figcaption></figure><p>我们分别实例化了名叫checkbox和myPopup控件，myPopup的IsOpen属性绑定了checkbox的IsChecked，意思是， 当用户点击checkbox时，checkbox的IsChecked属性为true，myPopup的IsOpen属性也为true，于是就可以显示myPopup的内容了。</p><p>同时，<strong>myPopup的PlacementTarget属性也绑定到了checkbox控件，意味着myPopup将显示在checkbox控件身边，至于具体位置，可以设置Placement属性</strong>，有兴趣的小伙伴可以去尝试一下。</p><h2 id="_15-image图像控件" tabindex="-1"><a class="header-anchor" href="#_15-image图像控件" aria-hidden="true">#</a> 15.Image图像控件</h2><p>Image也算是独门独户的控件，因为它也是直接继承于FrameworkElement基类。Image控件，顾名思义，就是图像显示控件。Image类能够加载显示的图片格式有.bmp、.gif、.ico、.jpg、.png、.wdp 和 .tiff。要注意的是，加载.gif动画图片时，仅显示第一帧。如果要显示gif图片，可以在nuget服务器中下载WpfAnimatedGif组件。</p><p><strong>属性成员</strong></p><table><thead><tr><th>属性名称</th><th>说明</th></tr></thead><tbody><tr><td>StretchDirection</td><td>枚举型，表示图像缩放的条件，UpOnly表示内容仅在小于父级时缩放；DownOnly表示内容仅大于父级时缩放；Both表示兼容前面两种缩放条件。</td></tr><tr><td>Stretch</td><td>枚举型，表示图像缩放的模式，None表示内容保持其原始大小；Fill表示调整内容大小以填充目标尺寸，且不保留纵横比；Uniform表示在保留纵横比基础上缩放；UniformToFill表示在保留纵横比基础上缩放，同时具有裁剪功能。</td></tr><tr><td>Source</td><td>图像源，其类型为ImageSource。</td></tr><tr><td>BaseUri</td><td>获取或设置基 统一资源标识符 (URI) 为 System.Windows.Controls.Image。</td></tr></tbody></table><p><strong>事件成员</strong></p><table><thead><tr><th>事件名称</th><th>说明</th></tr></thead><tbody><tr><td>DpiChanged</td><td>显示图像的屏幕的 DPI 发生更改后触发。</td></tr><tr><td>ImageFailed</td><td>在图像中失败时触发。</td></tr></tbody></table><p><strong>Image控件分析</strong></p><p>Image控件最关键的就是Source属性——即ImageSource类型。ImageSource是一个抽象类，表示具有高度、宽度及ImageMetadata对象的图像数据源。ImageSource有多个子类，如BitmapFrame、BitmapSource和DrawingImage。所以，我们如果要显示一张图片，需要将图片转化成BitmapSource或DrawingImage实例，赋值给Image控件的Source属性就行了。</p><h3 id="图片加载方式" tabindex="-1"><a class="header-anchor" href="#图片加载方式" aria-hidden="true">#</a> 图片加载方式</h3><p><strong>方式1</strong></p><p>图片下载后，导到入HelloWorld项目的Images目录中，然后就可以在前端代码中显示。</p><figure><img src="'+g+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Image Source=&quot;/Images/logo.png&quot; Width=&quot;120&quot; Height=&quot;120&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>方式2</strong></p><blockquote><p>统一资源标识Uri</p><p>WPF引入了统一资源标识Uri(Unified Resource Identifier)来标识和访问资源。其中较为常见的情况是用Uri加载图像。Uri表达式的一般形式为：协议+授权+路径，协议：pack://，授权：有两种。 一种用于访问编译时已经知道的文件，用application:/// 一种用于访问编译时不知道、运行时才知道的文件，用siteoforigin:/// 一般用逗号代替斜杠，也就是改写作application:,和pack:, 路径：分为绝对路径和相对路径。一般选用相对路径，普适性更强</p></blockquote><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Image Source=&quot;pack://application:,,,/Images/logo.png&quot; Width=&quot;120&quot; Height=&quot;120&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>明明Source是ImageSource类型，为什么可以接受一个代表图片路径的字符串呢？因为ImageSource类中有一个ToString()重载成员。</p><p><strong>方式3</strong></p><p>接下来，我们把这个张图片放到Debug目录中，试试用另一种方式加载本地图片。</p><figure><img src="`+b+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>此时，这张图片并没有导入到项目中，我们来看一下如何加载本地图片。</p><p>前端代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;WrapPanel&gt;
        &lt;Image Source=&quot;/Images/logo.png&quot; Width=&quot;120&quot; Height=&quot;120&quot;/&gt;
        &lt;Image x:Name=&quot;image2&quot; Width=&quot;120&quot; Height=&quot;120&quot;/&gt;
    &lt;/WrapPanel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            var path = Environment.CurrentDirectory + &quot;\\\\&quot; + &quot;logo.png&quot;;
            var imageSource = BitmapFrame.Create(new Uri(path), BitmapCreateOptions.None, BitmapCacheOption.OnLoad);
            image2.Source = imageSource;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在主窗体的构造函数中，我们获取了图片的完整地址，然后利用BitmapFrame类Create方法成员将本地图片加载进来并返回一个BitmapFrame对象，BitmapFrame对象继承于BitmapSource，所以我们可以将这个实例通过C#代码的方式赋值给image2的Source属性。</p><h3 id="示例-6" tabindex="-1"><a class="header-anchor" href="#示例-6" aria-hidden="true">#</a> 示例</h3><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>        public MainWindow()
        {
            InitializeComponent();

            try
            {
                var path = &quot;D:\\\\code\\\\Csharp\\\\WPFstudy\\\\Wpfsession1\\\\Wpfsession1\\\\img\\\\logo3.png&quot;;
                var img = BitmapFrame.Create(new Uri(path), BitmapCreateOptions.None, BitmapCacheOption.OnLoad);
                image2.Source = img;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;WrapPanel&gt;
        &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;120&quot; Height=&quot;120&quot; Stretch=&quot;UniformToFill&quot;/&gt;
        &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;120&quot; Height=&quot;120&quot;/&gt;
        &lt;Image Source=&quot;pack://application:,,,/img/logo2.png&quot; Width=&quot;120&quot; Height=&quot;120&quot;/&gt;
        &lt;Image x:Name=&quot;image2&quot; Width=&quot;120&quot; Height=&quot;120&quot;/&gt;
    &lt;/WrapPanel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="image-20250223152445050" tabindex="0" loading="lazy"><figcaption>image-20250223152445050</figcaption></figure><h2 id="_16-groupbox标题容器控件" tabindex="-1"><a class="header-anchor" href="#_16-groupbox标题容器控件" aria-hidden="true">#</a> 16.GroupBox标题容器控件</h2><p>GroupBox控件的功能是提供一个带标题的内容容器，它继承于HeaderedContentControl类，HeaderedContentControl继承于ContentControl类。通常它用来做一些局部的布局。由于GroupBox本身并没有什么成员，所以我们直接观察它的基类。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class HeaderedContentControl : ContentControl
{
    public static readonly DependencyProperty HeaderProperty;
    public static readonly DependencyProperty HasHeaderProperty;
    public static readonly DependencyProperty HeaderTemplateProperty;
    public static readonly DependencyProperty HeaderTemplateSelectorProperty;
    public static readonly DependencyProperty HeaderStringFormatProperty;
 
    public HeaderedContentControl();
 
    public DataTemplateSelector HeaderTemplateSelector { get; set; }
    public DataTemplate HeaderTemplate { get; set; }
    public string HeaderStringFormat { get; set; }
    public bool HasHeader { get; }
    public object Header { get; set; }
    protected internal override IEnumerator LogicalChildren { get; }
 
    public override string ToString();
    protected virtual void OnHeaderChanged(object oldHeader, object newHeader);
    protected virtual void OnHeaderStringFormatChanged(string oldHeaderStringFormat, string newHeaderStringFormat);
    protected virtual void OnHeaderTemplateChanged(DataTemplate oldHeaderTemplate, DataTemplate newHeaderTemplate);
    protected virtual void OnHeaderTemplateSelectorChanged(DataTemplateSelector oldHeaderTemplateSelector, DataTemplateSelector newHeaderTemplateSelector);
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个基类中，我们可以看到他继承于ContentControl基类，所以GroupBox要显示的内容都会放到Content属性中，而GroupBox的标题则放在Header属性中，注意，Header属性也是object。这足以说明GroupBox在私人定制方面的强大扩展性。</p><p>再加上HeaderTemplate属性，可以定制标题的外观。</p><h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Grid&gt;
    &lt;Grid.RowDefinitions&gt;
        &lt;RowDefinition Height=&quot;4*&quot;/&gt;
        &lt;RowDefinition Height=&quot;*&quot;/&gt;
    &lt;/Grid.RowDefinitions&gt;
    &lt;GroupBox  Header=&quot;缩略图&quot; FontSize=&quot;20&quot; Margin=&quot;10&quot; BorderBrush=&quot;Red&quot;&gt;
        &lt;WrapPanel&gt;
            &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
            &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
            &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
            &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
            &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
            &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
            &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
            &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
            &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
        &lt;/WrapPanel&gt;

    &lt;/GroupBox&gt;
&lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+q+`" alt="image-20250223160751018" tabindex="0" loading="lazy"><figcaption>image-20250223160751018</figcaption></figure><p>因为GroupBox的Content属性只能显示一个内容对象，如果要显示多个对象，那把给Content一个集合控件，比如上面的WrapPanel控件，这样就可以在WrapPanel控件中放多个子元素了。</p><p>在使用上，有一个集合控件与GroupBox类似，因为GroupBox只能显示一个区域，如果区域过大，在有限的窗体无法全部显示出来.</p><h2 id="_17-scrollviewer控件" tabindex="-1"><a class="header-anchor" href="#_17-scrollviewer控件" aria-hidden="true">#</a> 17.ScrollViewer控件</h2><p>如果某个控件的尺寸太大，当前界面无法全部显示，则可以将这个控件包含在ScrollViewer中，因为ScrollViewer控件封装了一个水平滚动条ScrollBar和一个垂直滚动条ScrollBar，所以，ScrollViewer就是一个包含其它可视元素的可滚动区域控件。</p><p>ScrollViewer继承于ContentControl，所以它也是一个内容控件，只能在Content属性中设置一个子元素，如果要在ScrollViewer中显示多个子元素，请设置一个集合控件。</p><p>ScrollViewer 控件既响应鼠标命令，也响应键盘命令，并定义许多可用于按预设的增量滚动内容的方法。 可以使用 ScrollChanged 事件来检测 ScrollViewer 状态的变化。</p><h3 id="属性成员" tabindex="-1"><a class="header-anchor" href="#属性成员" aria-hidden="true">#</a> 属性成员</h3><p>HorizontalScrollBarVisibility：是否隐藏水平滚动条，为true表示隐藏，此时水平方向不可滚动。</p><p>VerticalScrollBarVisibility：是否隐藏垂直滚动条，为true表示隐藏，此时垂直方向不可滚动。</p><h3 id="事件成员" tabindex="-1"><a class="header-anchor" href="#事件成员" aria-hidden="true">#</a> 事件成员</h3><p>ScrollChanged：当控件的滚动位置发生变化时将触发此事件。</p><h3 id="示例-7" tabindex="-1"><a class="header-anchor" href="#示例-7" aria-hidden="true">#</a> 示例</h3><p>垂直滚动条</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;Grid&gt;
        &lt;Grid.RowDefinitions&gt;
            &lt;RowDefinition Height=&quot;4*&quot;/&gt;
            &lt;RowDefinition Height=&quot;*&quot;/&gt;
        &lt;/Grid.RowDefinitions&gt;
        &lt;GroupBox  Header=&quot;缩略图&quot; FontSize=&quot;20&quot; Margin=&quot;10&quot; BorderBrush=&quot;Red&quot;&gt;
            &lt;ScrollViewer&gt;
                &lt;WrapPanel&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                &lt;/WrapPanel&gt;
            &lt;/ScrollViewer&gt;
        &lt;/GroupBox&gt;
    &lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="image-20250223161226103" tabindex="0" loading="lazy"><figcaption>image-20250223161226103</figcaption></figure><p>水平滚动条</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;Grid&gt;
        &lt;Grid.RowDefinitions&gt;
            &lt;RowDefinition Height=&quot;4*&quot;/&gt;
            &lt;RowDefinition Height=&quot;*&quot;/&gt;
        &lt;/Grid.RowDefinitions&gt;
        &lt;GroupBox  Header=&quot;缩略图&quot; FontSize=&quot;20&quot; Margin=&quot;10&quot; BorderBrush=&quot;Red&quot;&gt;
            &lt;ScrollViewer HorizontalScrollBarVisibility=&quot;Visible&quot; VerticalScrollBarVisibility=&quot;Disabled&quot;&gt; 
                &lt;StackPanel Orientation=&quot;Horizontal&quot;&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                    &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                &lt;/StackPanel&gt;
            &lt;/ScrollViewer&gt;
        &lt;/GroupBox&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+x+`" alt="image-20250223161511997" tabindex="0" loading="lazy"><figcaption>image-20250223161511997</figcaption></figure><h2 id="_18-scrollbar滚动条" tabindex="-1"><a class="header-anchor" href="#_18-scrollbar滚动条" aria-hidden="true">#</a> 18.ScrollBar滚动条</h2><p>ScrollBar表示一个滚动条，该滚动条具有一个滑动 Thumb，其位置对应于一个值。它继承于RangeBase抽象基类，RangeBase基类继承于Control基类。带滚动特质的还有两个控件，也继承于RangeBase抽象基类，它们分别是ProgressBar（进度条）和Slider（滑动条）</p><p>RangeBase 只有5个属性</p><table><thead><tr><th>属性名称</th><th>说明</th></tr></thead><tbody><tr><td>LargeChange</td><td>表示给Value属性加减的最大值。默认为1</td></tr><tr><td>SmallChange</td><td>表示给Value属性加减的最小值。默认为0.1</td></tr><tr><td>Value</td><td>获取或设置范围控件的当前数量。默认为0</td></tr><tr><td>Maximum</td><td>获取或设置Value属性的最大值</td></tr><tr><td>Minimum</td><td>获取或设置Value属性的最小值</td></tr></tbody></table><p>RangeBase事件成员</p><p>ValueChanged：当前Value属性发生改变时触发的事件。</p><p>总结，ScrollBar、ProgressBar和Slider都将继承上面的属性、方面与事件成员。</p><p>ScrollBar自身有两个属性是我们必须要掌握的，那就是Orientation 和ViewportSize 。</p><p>Orientation ：表示当前滚动条是水平的还是垂直的。</p><p>ViewportSize：获取或设置当前可见的可滚动内容的数量。默认值为0。</p><p>另外，它还有一个滚动事件Scroll可以使用。我们还是以实际的例子来说明它的用法吧。</p><h3 id="示例-8" tabindex="-1"><a class="header-anchor" href="#示例-8" aria-hidden="true">#</a> 示例</h3><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public partial class MainWindow : Window, INotifyPropertyChanged
{
    public MainWindow()
    {
        InitializeComponent();

        DataContext = this;
        Loaded += (s, e) =&gt;
        {
            //计算滚动条的最大值
            Maximum = element.ActualWidth - viewport.ActualWidth;
        };
    }

    private double maximum = 0;
    private double x = 0;
    /// &lt;summary&gt;
    /// 滚动条的当前值
    /// &lt;/summary&gt;
    public double X
    {
        get { return x; }
        set { x = value; CanvasLeft = -x; NotifyPropertyChanged(&quot;X&quot;); }
    }

    private double canvasLeft = 0;
    /// &lt;summary&gt;
    /// 相对于Canvas控件Left边距
    /// &lt;/summary&gt;
    public double CanvasLeft
    {
        get { return canvasLeft; }
        set { canvasLeft = value; NotifyPropertyChanged(&quot;CanvasLeft&quot;); }
    }
    /// &lt;summary&gt;
    /// 滚动条的最大值
    /// &lt;/summary&gt;
    public double Maximum
    {
        get { return maximum; }
        set { maximum = value; NotifyPropertyChanged(&quot;Maximum&quot;); }
    }
    int i = 0;
    

    public event PropertyChangedEventHandler PropertyChanged;

    /// &lt;summary&gt;
    /// 属性通知方法
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;propertyName&quot;&gt;&lt;/param&gt;
    protected virtual void NotifyPropertyChanged(string propertyName)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        }
    }
    private void _btn_Click(object sender, RoutedEventArgs e)
    {


    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Grid  x:Name=&quot;viewport&quot;&gt;
    &lt;Grid.RowDefinitions&gt;
        &lt;RowDefinition Height=&quot;4*&quot;/&gt;
        &lt;RowDefinition Height=&quot;*&quot;/&gt;
    &lt;/Grid.RowDefinitions&gt;
    &lt;GroupBox  Header=&quot;缩略图&quot; FontSize=&quot;20&quot; Margin=&quot;10&quot; BorderBrush=&quot;Red&quot;&gt;
        &lt;Canvas&gt;

            &lt;StackPanel Orientation=&quot;Horizontal&quot; Canvas.Left=&quot;{Binding CanvasLeft}&quot; x:Name=&quot;element&quot;&gt;
                &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
                &lt;Image Source=&quot;/img/logo.jpg&quot; Width=&quot;200&quot; Height=&quot;120&quot;/&gt;
            &lt;/StackPanel&gt;
        &lt;/Canvas&gt;
    &lt;/GroupBox&gt;
    &lt;ScrollBar Grid.Row=&quot;1&quot; Orientation=&quot;Horizontal&quot; 
               Maximum=&quot;{Binding Maximum}&quot;
               Value=&quot;{Binding X}&quot;
               ViewportSize=&quot;{Binding ElementName=viewport,Path=ActualWidth}&quot;
               HorizontalContentAlignment=&quot;Stretch&quot; Margin=&quot;0,0,0,70&quot;
               /&gt; 
    &lt;TextBlock Grid.Row=&quot;2&quot; Text=&quot;ScrollBar&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot; FontSize=&quot;24&quot;/&gt;
&lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+C+`" alt="image-20250223163605478" tabindex="0" loading="lazy"><figcaption>image-20250223163605478</figcaption></figure><p>StackPanel控件中增加了多张图片，使其不能完全在Canvas中显示出来，然后在下面实例化了一根水平滚动条。注意滚动条的其中三个参数使用了绑定，不熟悉的小伙伴可参阅数据绑定那一章节。</p><p>Maximum：表示这根滚动条的最大值。</p><p>Value：表示滚动条的当前值。</p><p>ViewportSize：表示滚动条要作用于某个控件的宽度（这里实际上指Grid的宽度）。</p><p>最后，我们将StackPanel控件的Canvas.Left依赖属性绑定到一个CanvasLeft属性。只要CanvasLeft属性的值发生改变，那么StackPanel相对于Canvas水平位置就发生改变。</p><p><strong>我们获取到滚动条的值X，然后取反后赋值给CanvasLeft属性，而CanvasLeft属性拥有“属性通知”功能，故而前端StackPanel的相对位置会随着用户拖动滚动条而变化。</strong></p><h2 id="_19-slider滑动条" tabindex="-1"><a class="header-anchor" href="#_19-slider滑动条" aria-hidden="true">#</a> 19.Slider滑动条</h2><p>Slider滑动条与ScrollBar滚动条有点相似，甚至某些情况下，两者还可以互换使用。Slider也继承于RangeBase基类，其功能是提供一个可以滑动取值的控件。</p><p>属性成员</p><table><thead><tr><th>属性名称</th><th>说明</th></tr></thead><tbody><tr><td>IsSnapToTickEnabled</td><td>Slider会有一些刻度线，如果要求Thumb移动到最近的刻度线，则可将该值设置为true。</td></tr><tr><td>AutoToolTipPrecision</td><td>获取或设置Slider的值的小数点位数。</td></tr><tr><td>AutoToolTipPlacement</td><td>获取或设置按下Thumb时是否显示提示工具。</td></tr><tr><td>Interval</td><td>获取或设置用户按下RepeatButton时执行增加减少命令的时间间隔（毫秒）。</td></tr><tr><td>Delay</td><td>获取或设置用户按下RepeatButton时延时多少毫秒后执行命令</td></tr><tr><td>IsDirectionReversed</td><td>获取或设置增加值的方向。</td></tr><tr><td>Orientation</td><td>获取或设置Slider的方向。水平或垂直。</td></tr><tr><td>TickFrequency</td><td>获取或设置刻度线之间的间隔。默认为1.0</td></tr><tr><td>Ticks</td><td>获取或设置为 System.Windows.Controls.Slider 显示的刻度线的位置。</td></tr><tr><td>SelectionStart</td><td>获取或设置 System.Windows.Controls.Slider 的指定选择内容的最大值。</td></tr><tr><td>TickPlacement</td><td>获取或设置刻度线的位置</td></tr><tr><td>IsSelectionRangeEnabled</td><td>获取或设置显示选择范围</td></tr><tr><td>IsMoveToPointEnabled</td><td>如果Thumb 立即移动到鼠标单击的位置，则为true。</td></tr><tr><td>SelectionEnd</td><td>获取或设置 System.Windows.Controls.Slider 的指定选择内容的最大值。</td></tr></tbody></table><h3 id="slider示例" tabindex="-1"><a class="header-anchor" href="#slider示例" aria-hidden="true">#</a> Slider示例</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;Grid  x:Name=&quot;viewport&quot;&gt;
        &lt;Grid.RowDefinitions&gt;
            &lt;RowDefinition Height=&quot;4*&quot;/&gt;
            &lt;RowDefinition Height=&quot;*&quot;/&gt;
            &lt;RowDefinition Height=&quot;*&quot;/&gt;
        &lt;/Grid.RowDefinitions&gt;
        &lt;Canvas Grid.Row=&quot;0&quot;&gt;
            &lt;Border BorderBrush=&quot;LightGray&quot; BorderThickness=&quot;1&quot; CornerRadius=&quot;5&quot; Padding=&quot;3&quot; Margin=&quot;3&quot;&gt;
                &lt;Image Source=&quot;/img/logo.jpg&quot; 
                       Width=&quot;{Binding ElementName=slider, Path=Value}&quot; 
                       Height=&quot;{Binding ElementName=slider, Path=Value}&quot;
                       /&gt;
            &lt;/Border&gt;
        &lt;/Canvas&gt;
        &lt;WrapPanel Grid.Row=&quot;1&quot;&gt;
            &lt;TextBlock FontSize=&quot;20&quot; Text=&quot;当前分辨率为：&quot;&gt;&lt;/TextBlock&gt;
            &lt;TextBlock FontSize=&quot;20&quot; Text=&quot;{Binding ElementName=slider, Path=Value}&quot;&gt;&lt;/TextBlock&gt;
        &lt;/WrapPanel&gt;
        &lt;DockPanel Grid.Row=&quot;2&quot;&gt;
            &lt;TextBlock Text=&quot;滑动改变图片大小&quot; Margin=&quot;3&quot; FontSize=&quot;20&quot; /&gt;
            &lt;Slider x:Name=&quot;slider&quot; Minimum=&quot;50&quot; Maximum=&quot;500&quot; Value=&quot;100&quot; Margin=&quot;3&quot;/&gt;
        &lt;/DockPanel&gt;

    &lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+B+`" alt="image-20250223164744916" tabindex="0" loading="lazy"><figcaption>image-20250223164744916</figcaption></figure><p>F5运行之后，我们可以拖动Slider的滑块，图片的尺寸因为绑定了Slider控件的Value属性，所以图片的大小会随着用户左右拖动而变化。</p><h2 id="_20-progressbar进度条" tabindex="-1"><a class="header-anchor" href="#_20-progressbar进度条" aria-hidden="true">#</a> 20.ProgressBar进度条</h2><p>ProgressBar进度条通常在我们执行某个任务需要花费大量时间时使用，这时可以采用进度条显示任务或线程的执行进度，以便给用户良好的使用体验。</p><p>ProgressBar自身只有两个属性，分别是IsIndeterminate和Orientation 。</p><p>IsIndeterminate属性：如果为true，表示以动画从左到右滑动的方式展示进度效果。</p><p>Orientation属性：表示进度条的方式，水平时从左至右增长，垂直时从下到上增长。</p><h3 id="示例-9" tabindex="-1"><a class="header-anchor" href="#示例-9" aria-hidden="true">#</a> 示例</h3><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>        public MainWindow()
        {
            InitializeComponent();

            Loaded += (s,e) =&gt;
            {
                Task.Run(() =&gt;
                {
                    for (int i = 0; i &lt;= 100; i++)
                    {
                        Dispatcher.Invoke(() =&gt;
                        {
                            _TextBlock.Text = $&quot;{i}%&quot;;
                            _ProgressBar.Value = i;
                        });
                        Task.Delay(100).Wait();
                    }
                    
                });
            };
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;StackPanel VerticalAlignment=&quot;Center&quot;&gt;
        &lt;ProgressBar x:Name=&quot;_ProgressBar&quot; 
                     IsIndeterminate=&quot;False&quot;  
                     Value=&quot;0&quot; 
                     Minimum=&quot;0&quot; 
                     Maximum=&quot;100&quot; 
                     Orientation=&quot;Horizontal&quot; 
                     Height=&quot;10&quot; 
                     Margin=&quot;15&quot;/&gt;
        &lt;TextBlock x:Name=&quot;_TextBlock&quot; 
                   Text=&quot;0%&quot; 
                   HorizontalAlignment=&quot;Center&quot;/&gt;
    &lt;/StackPanel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+T+`" alt="image-20250223165603177" tabindex="0" loading="lazy"><figcaption>image-20250223165603177</figcaption></figure><h2 id="_21-calendar日历控件" tabindex="-1"><a class="header-anchor" href="#_21-calendar日历控件" aria-hidden="true">#</a> 21.Calendar日历控件</h2><p>Calendar提供一个日历界面，供用户选择日期，它继承于Control基类。</p><h3 id="属性-1" tabindex="-1"><a class="header-anchor" href="#属性-1" aria-hidden="true">#</a> 属性</h3><p>属性成员</p><table><thead><tr><th>属性名称</th><th>说明</th></tr></thead><tbody><tr><td>DisplayDateStart</td><td>获取或设置可在日历中的第一个日期。</td></tr><tr><td>CalendarItemStyle</td><td>获取或设置CalendarItem的样式</td></tr><tr><td>CalendarDayButtonStyle</td><td>获取或设置CalendarDayButton的样式</td></tr><tr><td>CalendarButtonStyle</td><td>获取或设置CalendarButton的样式</td></tr><tr><td>BlackoutDates</td><td>获取标记为不可选择的日期的集合。</td></tr><tr><td>DisplayMode</td><td>获取或设置一个值，该值指示是否日历显示月、 年或十年。</td></tr><tr><td>DisplayDateEnd</td><td>获取或设置可在日历中的日期范围内的最后日期。</td></tr><tr><td>IsTodayHighlighted</td><td>获取或设置一个值，该值指示是否突出显示当前日期。默认true。</td></tr><tr><td>SelectedDate</td><td>获取或设置当前选定的日期。[重要]</td></tr><tr><td>SelectedDates</td><td>获取选定日期的集合。</td></tr><tr><td>SelectionMode</td><td>获取或设置一个值，指示允许包含什么样的选择。如果是多选的号，就可以从SelectedDates属性获取所有已选的日期。</td></tr><tr><td>DisplayDate</td><td>获取或设置要显示的日期。</td></tr><tr><td>FirstDayOfWeek</td><td>获取或设置在一天中被视为周的开始。</td></tr></tbody></table><p>事件成员</p><table><thead><tr><th>事件名称</th><th>说明</th></tr></thead><tbody><tr><td>SelectedDatesChanged</td><td>开启多选后，当所选集合的元素数量发生变化时引发</td></tr><tr><td>DisplayDateChanged</td><td>DisplayDate属性被修改后引发</td></tr><tr><td>SelectionModeChanged</td><td>SelectionMode属性（选择模式）发生改变后引发</td></tr><tr><td>DisplayModeChanged</td><td>DisplayMode属性（显示模式）发生改变后引发</td></tr></tbody></table><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>private void btn_Click(object sender, RoutedEventArgs e)
{
    var date = calender.SelectedDate;
    var list = calender.SelectedDates;
    MessageBox.Show($&quot;选择的日期：{date.ToString()}\\r\\n以选择数量：{list.Count}&quot;);

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;StackPanel HorizontalAlignment=&quot;Center&quot;&gt;
        &lt;Calendar x:Name=&quot;calender&quot;
            HorizontalAlignment=&quot;Left&quot;
            VerticalAlignment=&quot;Top&quot;
            Margin=&quot;0 15&quot;
            DisplayDateStart=&quot;2021/1/1 00:00:00&quot;
            DisplayDateEnd=&quot;2030/1/1 00:00:00&quot;
            SelectionMode=&quot;MultipleRange&quot;
            &gt;
            
        &lt;/Calendar&gt;
        &lt;Button x:Name=&quot;btn&quot; Content=&quot;Get Selected Dates&quot; Click=&quot;btn_Click&quot; Margin=&quot;0 15&quot;/&gt;
    &lt;/StackPanel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+S+`" alt="image-20250223171312145" tabindex="0" loading="lazy"><figcaption>image-20250223171312145</figcaption></figure><h2 id="_22-datepicker日期控件" tabindex="-1"><a class="header-anchor" href="#_22-datepicker日期控件" aria-hidden="true">#</a> 22.DatePicker日期控件</h2><p>DatePicker与Calender在某些属性上很相似，只是为了方便显示和操作，DatePicker将Calender进行了封装。</p><h3 id="属性-2" tabindex="-1"><a class="header-anchor" href="#属性-2" aria-hidden="true">#</a> 属性</h3><p>属性成员</p><table><thead><tr><th>属性成员</th><th>说明</th></tr></thead><tbody><tr><td>BlackoutDates</td><td>获取或设置为不可选择的日期的标记集合。不常用。</td></tr><tr><td>DisplayDateStart</td><td>获取或设置要显示的第一个日期。</td></tr><tr><td>DisplayDateEnd</td><td>获取或设置要显示的最后日期。</td></tr><tr><td>DisplayDate</td><td>获取或设置要显示的日期。</td></tr><tr><td>CalendarStyle</td><td>获取或设置呈现日历时所使用的样式。</td></tr><tr><td>IsTodayHighlighted</td><td>获取或设置一个值，该值指示是否将突出显示当前日期。</td></tr><tr><td>IsDropDownOpen</td><td>获取或设置一个值，该值指示Calendar 下拉列表是打开还是关闭。</td></tr><tr><td>SelectedDateFormat</td><td>获取或设置用于显示所选的日期的格式。</td></tr><tr><td>Text</td><td>获取DatePicker显示文本，或设置选定的日期</td></tr><tr><td>FirstDayOfWeek</td><td>获取或设置在一天中被视为周的开始。</td></tr><tr><td>SelectedDate</td><td>获取或设置当前选定的日期。</td></tr><tr><td>HasEffectiveKeyboardFocus</td><td>获取一个值，该值指示DatePicker 是否 具有焦点。</td></tr></tbody></table><p>事件成员</p><table><thead><tr><th>事件名称</th><th>说明</th></tr></thead><tbody><tr><td>CalendarClosed</td><td>DatePicker下拉列表关闭时引发此事件</td></tr><tr><td>CalendarOpened</td><td>DatePicker下拉列表打开时引发此事件</td></tr><tr><td>SelectedDateChanged</td><td>SelectedDate属性发生改变时引发此事件</td></tr><tr><td>DateValidationError</td><td>当Text属性不是日期形式的字符串时引发此事件</td></tr></tbody></table><p>接下来，我们以一个例子来说明它的用法</p><h3 id="datepicker示例" tabindex="-1"><a class="header-anchor" href="#datepicker示例" aria-hidden="true">#</a> DatePicker示例</h3><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>private void btn_Click(object sender, RoutedEventArgs e)
{
    var selectedDate = $&quot;查询日期:{startDate.SelectedDate} {endDate.SelectedDate}\\r\\n&quot;;
    var text = $&quot;文本值:{startDate.Text} {endDate.Text}&quot;;
    MessageBox.Show($&quot;{selectedDate} {text}&quot;);

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;StackPanel HorizontalAlignment=&quot;Center&quot;&gt;
    &lt;StackPanel Orientation=&quot;Horizontal&quot;&gt;
        &lt;TextBlock Text=&quot;Start Date: &quot; Margin=&quot;10&quot;/&gt;
        &lt;DatePicker x:Name=&quot;startDate&quot; Margin=&quot;10&quot;/&gt;
    &lt;/StackPanel&gt;
    &lt;StackPanel Orientation=&quot;Horizontal&quot;&gt;
        &lt;TextBlock Text=&quot;End Date: &quot; Margin=&quot;10&quot;/&gt;
        &lt;DatePicker x:Name=&quot;endDate&quot; Margin=&quot;10&quot;/&gt;
    &lt;/StackPanel&gt;
    &lt;Button x:Name=&quot;btn&quot; Content=&quot;Get Selected Dates&quot; Click=&quot;btn_Click&quot; Margin=&quot;0 15&quot;/&gt;
&lt;/StackPanel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+`" alt="image-20250223171757274" tabindex="0" loading="lazy"><figcaption>image-20250223171757274</figcaption></figure><h2 id="_23-expander折叠控件" tabindex="-1"><a class="header-anchor" href="#_23-expander折叠控件" aria-hidden="true">#</a> 23.Expander折叠控件</h2><p>Expander也是一个内容控件，它有一个标题属性和内容属性。</p><p>Expander自身只提供了两个属性，分别是ExpandDirection和IsExpanded。</p><p>ExpandDirection属性定义了Expander的内容在打开时的方向。它是一个枚举值，分别有Down、Up、Left和Right四个方向，默认方向为Down。</p><p>IsExpanded属性用来获取或设置内容窗口是否可见。比如在后端代码中，将这个属性赋值true，意味着展开Expander。</p><p>它还有两个事件成员，分别是Expanded和Collapsed，也就是其内容在展开和隐藏时触发。</p><h3 id="expander示例" tabindex="-1"><a class="header-anchor" href="#expander示例" aria-hidden="true">#</a> Expander示例</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;StackPanel&gt;
    &lt;TextBlock Text=&quot;控件课程&quot;/&gt;
    &lt;Expander Header=&quot;Expander控件&quot; ExpandDirection=&quot;Down&quot; Expanded=&quot;_expanded_fun&quot; Collapsed=&quot;_collapsed_fun&quot;&gt;
        &lt;Grid&gt;
            &lt;TextBlock TextWrapping=&quot;Wrap&quot; Padding=&quot;10&quot;&gt;
                表示 Windows 按钮控件，该按钮对 Click 事件做出反应。
                Button类 直接从 System.Windows.Controls.Primitives.ButtonBase 类继承。
                Button是内容模型ContentControl的子类。ContentControl内容属性为 Content。
                在用户单击 Button时做出响应的事件叫ButtonBase.Click 。
            &lt;/TextBlock&gt;
        &lt;/Grid&gt;
    &lt;/Expander&gt;

    &lt;Expander ExpandDirection=&quot;Down&quot; Expanded=&quot;_expanded_fun&quot; Collapsed=&quot;_collapsed_fun&quot;&gt;
        &lt;Expander.Header&gt;
            &lt;TextBlock Background=&quot;AliceBlue&quot; FontWeight=&quot;Bold&quot;&gt;Expander控件&lt;/TextBlock&gt;
        &lt;/Expander.Header&gt;
        &lt;Grid&gt;
            &lt;TextBlock TextWrapping=&quot;Wrap&quot; Padding=&quot;10&quot;&gt;
        表示 Windows 按钮控件，该按钮对 Click 事件做出反应。
        Button类 直接从 System.Windows.Controls.Primitives.ButtonBase 类继承。
        Button是内容模型ContentControl的子类。ContentControl内容属性为 Content。
        在用户单击 Button时做出响应的事件叫ButtonBase.Click 。
            &lt;/TextBlock&gt;
        &lt;/Grid&gt;
    &lt;/Expander&gt;
    &lt;Expander Header=&quot;Expander控件&quot; ExpandDirection=&quot;Left&quot; Expanded=&quot;_expanded_fun&quot; Collapsed=&quot;_collapsed_fun&quot;&gt;
        &lt;Grid&gt;
            &lt;TextBlock TextWrapping=&quot;Wrap&quot; Padding=&quot;10&quot;&gt;
        表示 Windows 按钮控件，该按钮对 Click 事件做出反应。
        Button类 直接从 System.Windows.Controls.Primitives.ButtonBase 类继承。
        Button是内容模型ContentControl的子类。ContentControl内容属性为 Content。
        在用户单击 Button时做出响应的事件叫ButtonBase.Click 。
            &lt;/TextBlock&gt;
        &lt;/Grid&gt;
    &lt;/Expander&gt;
    &lt;Expander Header=&quot;Expander控件&quot; ExpandDirection=&quot;Right&quot; Expanded=&quot;_expanded_fun&quot; Collapsed=&quot;_collapsed_fun&quot;&gt;
        &lt;Grid&gt;
            &lt;TextBlock TextWrapping=&quot;Wrap&quot; Padding=&quot;10&quot;&gt;
        表示 Windows 按钮控件，该按钮对 Click 事件做出反应。
        Button类 直接从 System.Windows.Controls.Primitives.ButtonBase 类继承。
        Button是内容模型ContentControl的子类。ContentControl内容属性为 Content。
        在用户单击 Button时做出响应的事件叫ButtonBase.Click 。
            &lt;/TextBlock&gt;
        &lt;/Grid&gt;
    &lt;/Expander&gt;
&lt;/StackPanel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+y+`" alt="image-20250223173113044" tabindex="0" loading="lazy"><figcaption>image-20250223173113044</figcaption></figure><h2 id="_24-mediaelement媒体播放器" tabindex="-1"><a class="header-anchor" href="#_24-mediaelement媒体播放器" aria-hidden="true">#</a> 24.MediaElement媒体播放器</h2><p>MediaElement，一个可以播放音频或视频的控件，继承于FrameworkElement基类。MediaElement包含了常见的音频或视频格式，如果您需要更强大的功能，可以考虑使用VLC库。</p><blockquote><p>官方说明</p></blockquote><blockquote><p>MediaElement 可以在两种不同的模式下使用，具体取决于驱动控件的内容：独立模式或时钟模式。 在独立模式下使用 时， MediaElement 类似于图像， Source 可以直接指定 URI。 在时钟模式下， MediaElement 可以将 视为动画的目标，因此它将在计时树中具有相应的 Timeline 和 Clock 条目。</p></blockquote><p>属性成员</p><table><thead><tr><th>属性名称</th><th>说明</th></tr></thead><tbody><tr><td>LoadedBehavior</td><td>获取或设置加载媒体的行为，如果加载希望手动控制播放，请设置为Manual。</td></tr><tr><td>CanPause</td><td>获取一个值，该值指示是否可以暂停媒体。</td></tr><tr><td>IsBuffering</td><td>获取一个值，该值指示是否缓冲媒体。</td></tr><tr><td>DownloadProgress</td><td>获取一个百分比值，该值为位于远程服务器上的内容完成的下载量。</td></tr><tr><td>BufferingProgress</td><td>获取一个值，该值指示缓冲进度的百分比。0-1之间</td></tr><tr><td>NaturalVideoHeight</td><td>获取与媒体关联的视频的高度。</td></tr><tr><td>NaturalDuration</td><td>获取介质的自然持续时间。也就是视频播放总时长。</td></tr><tr><td>HasAudio</td><td>获取一个值，该值指示媒体是否具有音频。</td></tr><tr><td>HasVideo</td><td>获取一个值，该值指示媒体是否具有视频。</td></tr><tr><td>Position</td><td>通过媒体的播放时间获取或设置进度的当前位置。</td></tr><tr><td>SpeedRatio</td><td>获取或设置媒体的速率。也就是按几倍播放视频。</td></tr><tr><td>UnloadedBehavior</td><td>获取或设置卸载媒体的行为。</td></tr><tr><td>NaturalVideoWidth</td><td>获取与媒体关联的视频的宽度。</td></tr><tr><td>ScrubbingEnabled</td><td>获取或设置一个值，该值指示MediaElement 是否将更新帧的查找操作在暂停状态。</td></tr><tr><td>Clock</td><td>获取或设置MediaElement 媒体播放相关联的时钟。</td></tr><tr><td>Balance</td><td>获取或设置扬声器的音量比。</td></tr><tr><td>Volume</td><td>获取或设置媒体的音量。0-1之间，默认0.5</td></tr><tr><td>StretchDirection</td><td>获取或设置一个值，确定扩展的限制应用于映像。</td></tr><tr><td>Stretch</td><td>获取或设置MediaElement媒体的拉伸方式。</td></tr><tr><td>Source</td><td>获取或设置MediaElement媒体源[重点]</td></tr><tr><td>IsMuted</td><td>是否静音</td></tr></tbody></table><p>三、事件成员</p><table><thead><tr><th>事件名称</th><th>说明</th></tr></thead><tbody><tr><td>BufferingEnded</td><td>媒体缓冲结束时发生。</td></tr><tr><td>BufferingStarted</td><td>媒体缓冲开始时发生。</td></tr><tr><td>MediaOpened</td><td>媒体加载已完成时发生。</td></tr><tr><td>MediaFailed</td><td>遇到错误时发生。</td></tr><tr><td>MediaEnded</td><td>媒体结束时发生。</td></tr><tr><td>ScriptCommand</td><td>在媒体中遇到的脚本命令时发生。</td></tr></tbody></table><h3 id="mediaelement示例" tabindex="-1"><a class="header-anchor" href="#mediaelement示例" aria-hidden="true">#</a> MediaElement示例</h3><p>后端代码：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public partial class MainWindow : Window
{
    private string file = string.Empty;
    public MainWindow()
    {
        InitializeComponent();

        DispatcherTimer timer = new DispatcherTimer();
        timer.Interval = TimeSpan.FromSeconds(1);
        timer.Tick += (s, e) =&gt;
        {
            var ts = _MediaElement.Position;
            _ProgressBar.Value = ts.TotalMilliseconds;//更新当前播放进度
        };
        timer.Start();
    }

    private void OpenMedia(object sender, RoutedEventArgs e)
    {
        var openFileDialog = new Microsoft.Win32.OpenFileDialog()
        {
            Filter = &quot;视频文件 (.mp4)|*.mp4&quot;,
            Multiselect = true
        };
        var result = openFileDialog.ShowDialog();
        if (result == true)
        {
            file = openFileDialog.FileName;
            _MediaElement.MediaOpened -= _MediaElement_MediaOpened;
            _MediaElement.MediaOpened += _MediaElement_MediaOpened;
            _MediaElement.Source = new Uri(file);
            this.Title = file;
            _TextBlock.Text = file;
        }

    }

    private void _MediaElement_MediaOpened(object sender, RoutedEventArgs e)
    {
        if (_MediaElement.NaturalDuration.HasTimeSpan)
        {
            TimeSpan ts = _MediaElement.NaturalDuration.TimeSpan;
            _ProgressBar.Maximum = ts.TotalMilliseconds;//设置播放进度条总长
        }
    }

    private void PlayMedia(object sender, RoutedEventArgs e)
    {
        _MediaElement.Play();//播放
        _Boeder.Visibility = Visibility.Hidden;
    }

    private void StopMedia(object sender, RoutedEventArgs e)
    {
        _MediaElement.Pause();//暂停
    }

    private void BackMedia(object sender, RoutedEventArgs e)
    {
        _MediaElement.Position -= TimeSpan.FromSeconds(1);//快退10秒
    }

    private void ForwardMedia(object sender, RoutedEventArgs e)
    {
        _MediaElement.Position += TimeSpan.FromSeconds(1);//快进10秒
    }

    private void _Slider_ValueChanged(object sender, RoutedPropertyChangedEventArgs&lt;double&gt; e)
    {
        _MediaElement.Volume = _Slider.Value;//设置音量
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端代码：</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Grid&gt;
    &lt;Grid.RowDefinitions&gt;
        &lt;RowDefinition /&gt;
        &lt;RowDefinition Height=&quot;Auto&quot;/&gt;
        &lt;RowDefinition Height=&quot;Auto&quot;/&gt;
    &lt;/Grid.RowDefinitions&gt;
    &lt;Grid Grid.Row=&quot;0&quot;&gt;
        &lt;MediaElement x:Name=&quot;_MediaElement&quot; LoadedBehavior=&quot;Manual&quot;/&gt;
        &lt;Border x:Name=&quot;_Boeder&quot; Background=&quot;Black&quot;&gt;
            &lt;TextBlock x:Name=&quot;_TextBlock&quot; Text=&quot;MediaElement | 媒体播放器&quot; Foreground=&quot;AliceBlue&quot;
                       FontSize=&quot;20&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;
                       /&gt;
        &lt;/Border&gt;
    &lt;/Grid&gt;

    &lt;WrapPanel Orientation=&quot;Horizontal&quot; Grid.Row=&quot;1&quot;&gt;
        &lt;Button Content=&quot;打开&quot; Width=&quot;60&quot; Height=&quot;25&quot; Margin=&quot;5&quot; Click=&quot;OpenMedia&quot;/&gt;
        &lt;Button Content=&quot;播放&quot; Width=&quot;60&quot; Height=&quot;25&quot; Margin=&quot;5&quot; Click=&quot;PlayMedia&quot;/&gt;
        &lt;Button Content=&quot;停止&quot; Width=&quot;60&quot; Height=&quot;25&quot; Margin=&quot;5&quot; Click=&quot;StopMedia&quot;/&gt;
        &lt;Button Content=&quot;后退&quot; Width=&quot;60&quot; Height=&quot;25&quot; Margin=&quot;5&quot; Click=&quot;BackMedia&quot;/&gt;
        &lt;Button Content=&quot;前进&quot; Width=&quot;60&quot; Height=&quot;25&quot; Margin=&quot;5&quot; Click=&quot;ForwardMedia&quot;/&gt;
        &lt;TextBlock Text=&quot;音量&quot; Margin=&quot;5&quot; VerticalAlignment=&quot;Center&quot;/&gt;
        &lt;Slider x:Name=&quot;_Slider&quot; Width=&quot;120&quot; Height=&quot;25&quot; VerticalAlignment=&quot;Center&quot; Maximum=&quot;100&quot; Value=&quot;20&quot; Margin=&quot;5&quot; ValueChanged=&quot;_Slider_ValueChanged&quot;/&gt;
    &lt;/WrapPanel&gt;

    &lt;Grid Grid.Row=&quot;2&quot;&gt;
        &lt;ProgressBar x:Name=&quot;_ProgressBar&quot; Height=&quot;10&quot; Margin=&quot;5&quot; VerticalAlignment=&quot;Center&quot;/&gt;
    &lt;/Grid&gt;
&lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+f+'" alt="image-20250223181337042" tabindex="0" loading="lazy"><figcaption>image-20250223181337042</figcaption></figure>',333)]))}const I=t(P,[["render",D],["__file","04.内容控件.html.vue"]]);export{I as default};
