import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,c as u,o as s,a as r,b as t,e as i,d as n}from"./app-DBc2jY3V.js";const c="/wf-site/assets/2023082003241758-5T6alwX6.png",v="/wf-site/assets/2023081707313811-OmvXYqx1.png",m="/wf-site/assets/image-20240613212300556-CfWu6ydz.png",q="/wf-site/assets/image-20250222155021160-BW43FOUF.png",b="/wf-site/assets/image-20250222155839912-zzhtlTIA.png",g="/wf-site/assets/Snipaste_2024-06-13_21-39-08-C8ZqHjmF.png",p="/wf-site/assets/image-20240613220751993-CgNTOuRF.png",h="/wf-site/assets/image-20240613220759371-DzDpzilO.png",C="/wf-site/assets/image-20240613220232387-DlYDR-Ju.png",f="/wf-site/assets/Snipaste_2024-06-13_21-53-35-Cx0gydB5.png",x="/wf-site/assets/image-20250222173418428-DjQlvNaj.png",B="/wf-site/assets/image-20250222175435288-DSUcWMsG.png",P={};function y(G,e){const l=o("ColumnDefinition"),d=o("RowDefinition");return s(),u("div",null,[e[12]||(e[12]=r(`<h2 id="_1-wpf布局" tabindex="-1"><a class="header-anchor" href="#_1-wpf布局" aria-hidden="true">#</a> 1.WPF布局</h2><p>原则：</p><ul><li>1.做适应性程序，不要显示设置元素的尺寸，只设置最大最小值</li><li>2.不要使用屏幕坐标指定元素位置，元素位置有其所在容器指定</li><li>2.布局容器可以嵌套</li></ul><p>常见容器</p><table><thead><tr><th>控件名称</th><th>布局方式</th></tr></thead><tbody><tr><td>Grid</td><td>网格，根据自定义行和列来设置控件的布局</td></tr><tr><td>StackPanel</td><td>栈式面板，包含的元素在竖直或水平方向排成一条直线</td></tr><tr><td>WrapPanel</td><td>自动折行面板，包含的元素在排满一行后，自动换行</td></tr><tr><td>DockPanel</td><td>泊靠式面板，内部的元素可以选择泊靠方向</td></tr><tr><td>UniformGrid</td><td>网格,UniformGrid就是Grid的简化版，每个单元格的大小相同。</td></tr><tr><td>Canvas</td><td>画布，内部元素根据像素为单位绝对坐标进行定位</td></tr><tr><td>Border</td><td>装饰的控件，此控件用于绘制边框及背景，在Border中只能有一个子控件</td></tr></tbody></table><h2 id="_2-panel基类" tabindex="-1"><a class="header-anchor" href="#_2-panel基类" aria-hidden="true">#</a> 2.panel基类</h2><p>Panel其实是一个抽象类，不可以实例化，<strong>WPF所有的布局控件都从Panel继承而来</strong>。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public abstract class Panel : FrameworkElement, IAddChild
{
    public static readonly DependencyProperty BackgroundProperty;
    public static readonly DependencyProperty IsItemsHostProperty;
    public static readonly DependencyProperty ZIndexProperty;
 
    protected Panel();
 
    public bool HasLogicalOrientationPublic { get; }
    public Orientation LogicalOrientationPublic { get; }
    public bool IsItemsHost { get; set; }
    public UIElementCollection Children { get; }
    public Brush Background { get; set; }
    protected override int VisualChildrenCount { get; }
    protected internal UIElementCollection InternalChildren { get; }
    protected internal override IEnumerator LogicalChildren { get; }
    protected internal virtual Orientation LogicalOrientation { get; }
    protected internal virtual bool HasLogicalOrientation { get; }
 
    public static int GetZIndex(UIElement element);
    public static void SetZIndex(UIElement element, int value);
    public bool ShouldSerializeChildren();
    protected virtual UIElementCollection CreateUIElementCollection(FrameworkElement logicalParent);
    protected override Visual GetVisualChild(int index);
    protected virtual void OnIsItemsHostChanged(bool oldIsItemsHost, bool newIsItemsHost);
    protected override void OnRender(DrawingContext dc);
    protected internal override void OnVisualChildrenChanged(DependencyObject visualAdded, DependencyObject visualRemoved);
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从它的代码定义来看，它继承于FrameworkElement基类和IAddChild接口。所以，所有 Panel 元素都支持 FrameworkElement 定义的基本大小调整和定位属性，包括 Height、Width、HorizontalAlignment、VerticalAlignment、Margin 和 LayoutTransform。</p><p>它有一个Background属性，意味着所有的布局控件都可以设置背景颜色。另外，它还有一个Children属性，这是一个集合属性，也就是说，所有的布局控件都可以添加多个子元素。</p><p>什么是ZIndex？这是Panel提供的一个附加属性。假如一个单行单列的Grid布局控件中有两个Button,正常情况下，这两个Button都会以撑满Grid的方式呈现在Grid中，那么，到底哪一个Button在上面，哪一个Button在下面呢？就看这两个Button的Panel.ZIndex附加属性的值，值越大越在上面，而值较小的那个Button将被上面的Button遮盖，从而在视觉上，用户只能看到一个Button。</p><blockquote><p>附加属性</p><p>附加属性的一个用途是允许子元素存储实际上由父元素定义的属性的唯一值。 此功能的一项应用是让子元素通知父级它们希望如何在用户界面 (UI) 中呈现，这对应用程序布局非常有用。</p></blockquote><p>Panel的Background属性。有时候我们希望在布局控件上实现鼠标点击事件的获取，请记得一定要给Background属性设置一个颜色值，如果不希望有具体的颜色，那就设置成Transparent 。不然，您会踩坑的！<strong>因为布局控件的Background属性没有值时，是不能引发鼠标相关事件的</strong>。</p><p><strong>只要继承于UIElement的类（或控件），都可以添加到Panel或Panel子类的Children中，从而在前端呈现出来。</strong></p><p>WPF提供了六个用于UI布局的Panel子类，分别是：Grid、StackPanel、WrapPanel、DockPanel、 VirtualizingStackPanel和 Canvas。 这些面板元素易于使用、功能齐全并且可扩展，足以适用于大多数应用程序。</p><figure><img src="`+c+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>一个Panel 的呈现就是测量和排列子控件，然后在屏幕上绘制它们。所以在布局的过程中会经过一系列的计算，那么子控件越多，执行的计算次数就越多，则性能就会变差。如果不需要进行复杂的布局，则尽量少用复杂布局控件（如 Grid和自定义复杂的Panel）；如果能简单布局实现就尽量使用构造相对简单的布局（如 Canvas、UniformGrid等），这种布局可带来更好的性能。 如果有可能，我们应尽量避免调用 UpdateLayout方法。</p><p>布局系统为Panel中的每个子控件完成两个处理过程：测量处理过程（Measure）和排列处理过程（Arrange）。每个子 Panel 均提供自己的 MeasureOverride 和 ArrangeOverride 方法，以实现自己特定的布局行为。</p><p>每个派生 Panel 元素都以不同方式处理大小调整约束。 了解 Panel 如何处理水平或垂直方向上的约束可以使布局更容易预测。</p><table><thead><tr><th>控件名称</th><th>x维度</th><th>y维度</th></tr></thead><tbody><tr><td>Grid</td><td>约束</td><td>约束，Auto 应用于行和列的情形除外</td></tr><tr><td>StackPanel（垂直）</td><td>约束</td><td>按内容约束</td></tr><tr><td>StackPanel（水平）</td><td>按内容约束</td><td>约束</td></tr><tr><td>DockPanel</td><td>约束</td><td>约束</td></tr><tr><td>WrapPanel</td><td>按内容约束</td><td>按内容约束</td></tr><tr><td>Canvas</td><td>按内容约束</td><td>按内容约束</td></tr></tbody></table><h2 id="_3-grid面板-类似于一个table" tabindex="-1"><a class="header-anchor" href="#_3-grid面板-类似于一个table" aria-hidden="true">#</a> 3.Grid面板（类似于一个table）</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class Grid : Panel, IAddChild
{
    public static readonly DependencyProperty ShowGridLinesProperty;
    public static readonly DependencyProperty ColumnProperty;
    public static readonly DependencyProperty RowProperty;
    public static readonly DependencyProperty ColumnSpanProperty;
    public static readonly DependencyProperty RowSpanProperty;
    public static readonly DependencyProperty IsSharedSizeScopeProperty;
 
    public Grid();
 
    public ColumnDefinitionCollection ColumnDefinitions { get; }
    public bool ShowGridLines { get; set; }
    public RowDefinitionCollection RowDefinitions { get; }
    protected override int VisualChildrenCount { get; }
    protected internal override IEnumerator LogicalChildren { get; }
 
    public static int GetColumn(UIElement element);
    public static int GetColumnSpan(UIElement element);
    public static bool GetIsSharedSizeScope(UIElement element);
    public static int GetRow(UIElement element);
    public static int GetRowSpan(UIElement element);
    public static void SetColumn(UIElement element, int value);
    public static void SetColumnSpan(UIElement element, int value);
    public static void SetIsSharedSizeScope(UIElement element, bool value);
    public static void SetRow(UIElement element, int value);
    public static void SetRowSpan(UIElement element, int value);
    public bool ShouldSerializeColumnDefinitions();
    public bool ShouldSerializeRowDefinitions();
    protected override Size ArrangeOverride(Size arrangeSize);
    protected override Visual GetVisualChild(int index);
    protected override Size MeasureOverride(Size constraint);
    protected internal override void OnVisualChildrenChanged(DependencyObject visualAdded, DependencyObject visualRemoved);
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Grid有两个非常关键的属性ColumnDefinitions和RowDefinitions，分别表示列的数量集合和行的数量集合。ColumnDefinitions集合中的元素类型是ColumnDefinition类，RowDefinitions集合中元素类型是RowDefinition类。默认的Gridr控件没有定义行数和列数，也就是说，Grid默认情况下，行数和列数都等于1，那么它就只有一个单元格。</p><h3 id="grid控件行高和列宽的设置" tabindex="-1"><a class="header-anchor" href="#grid控件行高和列宽的设置" aria-hidden="true">#</a> Grid控件行高和列宽的设置</h3><p>Grid控件的行高和列宽的设置十分丰富，了解它们的用法，有助于设计出更出色的布局。</p>`,26)),t("table",null,[e[10]||(e[10]=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"说明")])],-1)),t("tbody",null,[t("tr",null,[e[1]||(e[1]=t("td",null,"绝对设置尺寸",-1)),t("td",null,[e[0]||(e[0]=i("使用设备无关单位准确地设置尺寸，就是给一个实际的数字，但通常将此值指定为整数（像素）。如：")),n(l,{Width:"100"})])]),t("tr",null,[e[3]||(e[3]=t("td",null,"自动设置尺寸",-1)),t("td",null,[e[2]||(e[2]=i("值为Auto，实际作用就是取实际控件所需的最小值，每行和每列的尺寸刚好满足需要，这是最有用的尺寸设置方式。如：")),n(l,{Width:"Auto"})])]),t("tr",null,[e[9]||(e[9]=t("td",null,"按比例设置设置尺寸",-1)),t("td",null,[e[4]||(e[4]=i("按比例将空间分割到一组行和列中。这是对所有行和列的标准设置。通常值为")),e[5]||(e[5]=t("em",null,"或N",-1)),e[6]||(e[6]=i("，实际作用就是取尽可能大的值，当某一列或行被定义为")),e[7]||(e[7]=t("em",null,"则是尽可能大，当出现多列或行被定义为",-1)),e[8]||(e[8]=i("则是代表几者之间按比例方设置尺寸。如：")),n(l,{Width:"*"})])])])]),t("blockquote",null,[e[11]||(e[11]=t("p",null,"指定权重，即第2列的宽度是第1列的两倍",-1)),n(d,{Height:"*"}),n(d,{Height:"2*"})]),e[13]||(e[13]=r(`<div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Grid Margin=&quot;5&quot;&gt;
    &lt;Grid.RowDefinitions&gt;
        &lt;RowDefinition/&gt;
        &lt;RowDefinition/&gt;
    &lt;/Grid.RowDefinitions&gt;
    &lt;Grid.ColumnDefinitions&gt;
        &lt;ColumnDefinition Width=&quot;120&quot;/&gt;
        &lt;ColumnDefinition/&gt;
    &lt;/Grid.ColumnDefinitions&gt;
    &lt;Border Grid.Row=&quot;0&quot; Grid.RowSpan=&quot;2&quot; Grid.Column=&quot;0&quot; Grid.ColumnSpan=&quot;2&quot; BorderBrush=&quot;Gray&quot; BorderThickness=&quot;1&quot;/&gt;
    &lt;Border Grid.Row=&quot;0&quot; Grid.Column=&quot;0&quot; Grid.ColumnSpan=&quot;2&quot; BorderBrush=&quot;Gray&quot; BorderThickness=&quot;0 0 0 1&quot;/&gt;
    &lt;Border Grid.Row=&quot;0&quot; Grid.RowSpan=&quot;2&quot; Grid.Column=&quot;0&quot; BorderBrush=&quot;Gray&quot; BorderThickness=&quot;0 0 1 0&quot;/&gt;
    &lt;Button Grid.Row=&quot;0&quot; Grid.Column=&quot;0&quot; Content=&quot;WPF中文网1&quot; Panel.ZIndex=&quot;1&quot; Margin=&quot;20&quot; /&gt;
    &lt;Button Grid.Row=&quot;0&quot; Grid.Column=&quot;1&quot; Content=&quot;WPF中文网2&quot; Panel.ZIndex=&quot;0&quot; Margin=&quot;20&quot; /&gt;
    &lt;Button Grid.Row=&quot;1&quot; Grid.Column=&quot;0&quot; Content=&quot;WPF中文网3&quot; Panel.ZIndex=&quot;1&quot; Margin=&quot;20&quot; /&gt;
    &lt;Button Grid.Row=&quot;1&quot; Grid.Column=&quot;1&quot; Content=&quot;WPF中文网4&quot; Panel.ZIndex=&quot;0&quot; Margin=&quot;20&quot; /&gt;
&lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;Grid&gt;
        &lt;Grid.RowDefinitions&gt;
            &lt;RowDefinition Height=&quot;90*&quot;/&gt;
            &lt;RowDefinition Height=&quot;284*&quot;/&gt;
            &lt;RowDefinition Height=&quot;61*&quot;/&gt;
        &lt;/Grid.RowDefinitions&gt;
        &lt;Grid.ColumnDefinitions&gt;
            &lt;ColumnDefinition Width=&quot;197*&quot;/&gt;
            &lt;ColumnDefinition Width=&quot;443*&quot;/&gt;
            &lt;ColumnDefinition Width=&quot;80*&quot;/&gt;
            &lt;ColumnDefinition Width=&quot;80*&quot;/&gt;
        &lt;/Grid.ColumnDefinitions&gt;
        &lt;Label x:Name=&quot;label&quot; Content=&quot;请输入你的留言&quot;  Margin=&quot;5,2&quot; Height=&quot;25&quot; Grid.Column=&quot;0&quot; Grid.Row=&quot;0&quot; HorizontalContentAlignment=&quot;Center&quot;/&gt;
        &lt;ComboBox x:Name=&quot;cbbType&quot; Grid.Column=&quot;1&quot; Grid.Row=&quot;0&quot;  Margin=&quot;5,5,5,5&quot; Grid.ColumnSpan=&quot;3&quot;/&gt;
        &lt;TextBox x:Name=&quot;txtContent&quot; Grid.ColumnSpan=&quot;4&quot; Grid.Column=&quot;0&quot; Margin=&quot;5,5,5,5&quot; Grid.Row=&quot;1&quot; /&gt;
        &lt;Button x:Name=&quot;btnSub&quot; Grid.Column=&quot;2&quot; Content=&quot;确定&quot;  Margin=&quot;4,4,4,4&quot; Grid.Row=&quot;2&quot; /&gt;
        &lt;Button x:Name=&quot;btnClear&quot; Grid.Column=&quot;3&quot; Content=&quot;清理&quot;  Margin=&quot;4,4,4,4&quot; Grid.Row=&quot;2&quot; /&gt;


    &lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="image-20240613212300556" tabindex="0" loading="lazy"><figcaption>image-20240613212300556</figcaption></figure><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;Grid&gt;
        &lt;Grid.ColumnDefinitions&gt;
            &lt;ColumnDefinition Width=&quot;*&quot; /&gt;
            &lt;ColumnDefinition Width=&quot;*&quot; /&gt;
        &lt;/Grid.ColumnDefinitions&gt;

        &lt;Border Grid.Column=&quot;1&quot; BorderBrush=&quot;Black&quot; BorderThickness=&quot;1 0 0 1&quot; Margin=&quot;10&quot;/&gt;

        &lt;Button Grid.Column=&quot;1&quot; x:Name=&quot;btn&quot; Width=&quot;70&quot; Height=&quot;30&quot; Content=&quot;load&quot;  &gt;&lt;/Button&gt;

    &lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+q+`" alt="image-20250222155021160" tabindex="0" loading="lazy"><figcaption>image-20250222155021160</figcaption></figure><p><strong>BorderThickness可以通过使用4个参数来控制边框是否显示</strong></p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>特点：1.可以定义任意行和列，可以跨行、跨列</p><p>2.行列宽度可以设置为绝对值、相对比例、自动调整等方式</p><p>应用场景：</p><p>1.UI的大布局设计</p><p>2.ui整体尺寸需要改变时。</p><p><strong>Grid控件绝对是WPF中所有布局控件中最好用的一个，因为它自适应屏幕的宽度，最关键的一点是，它在呈现时，其ActualWidth实际宽度和ActualHeight实际高度会有一个计算值，我们在业务开发中，有时候要根据父控件的实际宽度和高度来计算子控件的呈现位置和大小。</strong></p><h2 id="_4-uniformgrid-均匀分布" tabindex="-1"><a class="header-anchor" href="#_4-uniformgrid-均匀分布" aria-hidden="true">#</a> 4.UniformGrid （均匀分布）</h2><p>UniformGrid和Grid有些相似，只不过UniformGrid的每个单元格面积都是相等的，不管是横向的单元格，或是纵向的单元格，它们会平分整个UniformGrid。</p><h3 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class UniformGrid : Panel
{
    public static readonly DependencyProperty FirstColumnProperty;
    public static readonly DependencyProperty ColumnsProperty;
    public static readonly DependencyProperty RowsProperty;
 
    public UniformGrid();
 
    public int FirstColumn { get; set; }
    public int Columns { get; set; }
    public int Rows { get; set; }
 
    protected override Size ArrangeOverride(Size arrangeSize);
    protected override Size MeasureOverride(Size constraint);
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UniformGrid控件提供了3个属性，分别是FirstColumn、Columns 、Rows 。FirstColumn表示第一行要空几个单元格，后面两个属性分别用于设置行数和列数。接下来我们以实际的例子来分析这3个属性的用法。</p><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;UniformGrid Columns=&quot;3&quot; Rows=&quot;4&quot; FirstColumn=&quot;2&quot;&gt;
        &lt;Button Content=&quot;Button 1&quot; Margin=&quot;5&quot;/&gt;
        &lt;Button Content=&quot;Button 2&quot; Margin=&quot;5&quot;/&gt;
        &lt;Button Content=&quot;Button 3&quot; Margin=&quot;5&quot;/&gt;
        &lt;Button Content=&quot;Button 4&quot; Margin=&quot;5&quot;/&gt;
        &lt;Button Content=&quot;Button 5&quot; Margin=&quot;5&quot;/&gt;
        &lt;Button Content=&quot;Button 6&quot; Margin=&quot;5&quot;/&gt;
        &lt;Button Content=&quot;Button 7&quot; Margin=&quot;5&quot;/&gt;
        &lt;Button Content=&quot;Button 8&quot; Margin=&quot;5&quot;/&gt;
        &lt;Button Content=&quot;Button 9&quot; Margin=&quot;5&quot;/&gt;
        &lt;Button Content=&quot;Button 10&quot; Margin=&quot;5&quot;/&gt;
    &lt;/UniformGrid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="image-20250222155839912" tabindex="0" loading="lazy"><figcaption>image-20250222155839912</figcaption></figure><h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h3><p>UniformGrid控件使用非常简单方便，通常用于局部的布局</p><h2 id="_5-stackpanel-栈式布局" tabindex="-1"><a class="header-anchor" href="#_5-stackpanel-栈式布局" aria-hidden="true">#</a> 5.StackPanel 栈式布局</h2><p>【1】布局特点 第一、可以把内部元素在纵向域者横向上紧凑排列，形成栈式布局，通俗来说就是把元素堆到一块。 第二、当把前面的元素去掉后，后面的会整体向前移动，占领原有元素空间。 【2】适用场合 第一、同类型原型需要紧凑排列（比如制作菜单或者列婊） 第二、移除其中的元素后能的够自动补缺的布局，或者动画。 【3】三个属性 第一、Orientaion属性：决定内部元素是横向还是纵向积累。 第二、HorizontalAlignment属性：决定内部元素水平方上的对齐方式。 第三、VerticalAlignment属性：决定内元素垂直方向上的对齐方式。</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Window x:Class=&quot;WpfApp1.StackPannelDemo&quot;
        xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
        xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
        xmlns:d=&quot;http://schemas.microsoft.com/expression/blend/2008&quot;
        xmlns:mc=&quot;http://schemas.openxmlformats.org/markup-compatibility/2006&quot;
        xmlns:local=&quot;clr-namespace:WpfApp1&quot;
        mc:Ignorable=&quot;d&quot;
        Title=&quot;StackPannelDemo&quot; Height=&quot;180&quot; Width=&quot;300&quot; WindowStartupLocation=&quot;CenterScreen&quot;&gt;
    &lt;Grid&gt;
        &lt;GroupBox Header=&quot;请选择昵称：&quot; Margin=&quot;12&quot; BorderBrush=&quot;Black&quot;&gt;
            &lt;StackPanel&gt;
                &lt;CheckBox Content=&quot;a.china&quot;/&gt;
                &lt;CheckBox Content=&quot;b.english&quot;/&gt;
                &lt;CheckBox Content=&quot;c.good&quot;/&gt;
                &lt;CheckBox Content=&quot;d.bad&quot;/&gt;
                &lt;StackPanel Orientation=&quot;Horizontal&quot; HorizontalAlignment=&quot;Right&quot;&gt;
                    &lt;Button x:Name=&quot;btnSub&quot; Content=&quot;submit&quot; Width=&quot;60&quot; Margin=&quot;3&quot;/&gt;
                    &lt;Button x:Name=&quot;btnClear&quot; Content=&quot;clear&quot; Width=&quot;60&quot; Margin=&quot;3&quot;/&gt;
                &lt;/StackPanel&gt;
            &lt;/StackPanel&gt;
        &lt;/GroupBox&gt;
        
    &lt;/Grid&gt;
&lt;/Window&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="Snipaste_2024-06-13_21-39-08" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-06-13_21-39-08</figcaption></figure><h2 id="_6-wrappanel面板-流式布局-类似web中div的loat" tabindex="-1"><a class="header-anchor" href="#_6-wrappanel面板-流式布局-类似web中div的loat" aria-hidden="true">#</a> 6.WrapPanel面板（流式布局，类似web中div的loat)</h2><p>WrapPanel控件表示将其子控件从左到右的顺序排列，如果第一行显示不了，则自动换至第二行，继续显示剩余的子控件。</p><h3 id="定义-2" tabindex="-1"><a class="header-anchor" href="#定义-2" aria-hidden="true">#</a> 定义</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class WrapPanel : Panel
{
    public static readonly DependencyProperty ItemWidthProperty;
    public static readonly DependencyProperty ItemHeightProperty;
    public static readonly DependencyProperty OrientationProperty;
 
    public WrapPanel();
 
    public double ItemWidth { get; set; }
    public double ItemHeight { get; set; }
    public Orientation Orientation { get; set; }
 
    protected override Size ArrangeOverride(Size finalSize);
    protected override Size MeasureOverride(Size constraint);
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个控件比较简单，只提供了3个属性，分别是Orientation代表子控件的排列方向，ItemWidth代表子控件的（最大）宽度，ItemHeight代表子控件的（最大）高度。默认的排列方向是水平方向</p><p>注意一个细节，<strong>WrapPanel的子元素的高度和宽度都是根据子元素自身内容的尺寸呈现</strong>。另外，当WrapPanel处于水平排列时，子元素的HorizontalAlignment是不起作用的。</p><p>【1】布局特点 第一、在流延伸的方向上会排列尽可能多的控件，排列不下的控件会新起一行。 第二、使用Orientaion属性控制流延伸的方向。 【2】适用场合 需要根据容器大小动态排列控件的场合。</p><h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Window x:Class=&quot;WpfApp1.wrapPanelDemo&quot;
        xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
        xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
        xmlns:d=&quot;http://schemas.microsoft.com/expression/blend/2008&quot;
        xmlns:mc=&quot;http://schemas.openxmlformats.org/markup-compatibility/2006&quot;
        xmlns:local=&quot;clr-namespace:WpfApp1&quot;
        mc:Ignorable=&quot;d&quot;
        Title=&quot;wrapPanelDemo&quot; Height=&quot;200&quot; Width=&quot;300&quot; WindowStartupLocation=&quot;CenterScreen&quot;&gt;
    &lt;Grid&gt;
        &lt;WrapPanel&gt;
            &lt;Button Content=&quot;11&quot; Width=&quot;30&quot; Height=&quot;30&quot;/&gt;
            &lt;Button Content=&quot;11&quot; Width=&quot;30&quot; Height=&quot;30&quot;/&gt;
            &lt;Button Content=&quot;11&quot; Width=&quot;30&quot; Height=&quot;30&quot;/&gt;
            &lt;Button Content=&quot;11&quot; Width=&quot;30&quot; Height=&quot;30&quot;/&gt;
            &lt;Button Content=&quot;11&quot; Width=&quot;30&quot; Height=&quot;30&quot;/&gt;
            &lt;Button Content=&quot;11&quot; Width=&quot;30&quot; Height=&quot;30&quot;/&gt;
            &lt;Button Content=&quot;11&quot; Width=&quot;30&quot; Height=&quot;30&quot;/&gt;
            &lt;Button Content=&quot;11&quot; Width=&quot;30&quot; Height=&quot;30&quot;/&gt;
            &lt;Button Content=&quot;11&quot; Width=&quot;30&quot; Height=&quot;30&quot;/&gt;
            &lt;Button Content=&quot;11&quot; Width=&quot;30&quot; Height=&quot;30&quot;/&gt;
            &lt;Button Content=&quot;11&quot; Width=&quot;30&quot; Height=&quot;30&quot;/&gt;
        &lt;/WrapPanel&gt;
    &lt;/Grid&gt;
&lt;/Window&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="image-20240613220751993" tabindex="0" loading="lazy"><figcaption>image-20240613220751993</figcaption></figure><figure><img src="'+h+`" alt="image-20240613220759371" tabindex="0" loading="lazy"><figcaption>image-20240613220759371</figcaption></figure><h2 id="_7-dockpanel面板-停靠" tabindex="-1"><a class="header-anchor" href="#_7-dockpanel面板-停靠" aria-hidden="true">#</a> 7.DockPanel面板（停靠）</h2><p>【1】布局特点 根据Dock属性值，元素向指定访向累积，切吩DockPanel内部剩余空间，就像船舶停靠一样。 【2】适用场合 需要自动填满乘剩余空间的布局。（最后一个元素自动填满DockPanel内的乘剩余空间）</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Window x:Class=&quot;WpfApp1.DockPanelDemo&quot;
        xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
        xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
        xmlns:d=&quot;http://schemas.microsoft.com/expression/blend/2008&quot;
        xmlns:mc=&quot;http://schemas.openxmlformats.org/markup-compatibility/2006&quot;
        xmlns:local=&quot;clr-namespace:WpfApp1&quot;
        mc:Ignorable=&quot;d&quot;
        Title=&quot;DockPanelDemo&quot; Height=&quot;300&quot; Width=&quot;400&quot; WindowStartupLocation=&quot;CenterScreen&quot;&gt;
    &lt;Grid&gt;
        &lt;DockPanel&gt;
            &lt;TextBox DockPanel.Dock=&quot;Top&quot; BorderBrush=&quot;Black&quot; Height=&quot;30&quot;/&gt;
            &lt;TreeView DockPanel.Dock=&quot;Left&quot; BorderBrush=&quot;Black&quot; Width=&quot;60&quot;/&gt;
            &lt;ListBox BorderBrush=&quot;Black&quot;/&gt;
        &lt;/DockPanel&gt;
    &lt;/Grid&gt;
&lt;/Window&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+C+`" alt="image-20240613220232387" tabindex="0" loading="lazy"><figcaption>image-20240613220232387</figcaption></figure><h2 id="_8-canvas面板-译文-画布" tabindex="-1"><a class="header-anchor" href="#_8-canvas面板-译文-画布" aria-hidden="true">#</a> 8.Canvas面板（译文：画布）</h2><p>Canvas控件允许我们像Winform一样拖拽子控件进行布局，而子控件的位置相对于Canvas来说是绝对的，所以我将它称为绝对布局。</p><h3 id="定义-3" tabindex="-1"><a class="header-anchor" href="#定义-3" aria-hidden="true">#</a> 定义</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class Canvas : Panel
{
    public static readonly DependencyProperty LeftProperty;
    public static readonly DependencyProperty TopProperty;
    public static readonly DependencyProperty RightProperty;
    public static readonly DependencyProperty BottomProperty;
 
    public Canvas();
 
    public static double GetBottom(UIElement element);
    public static double GetLeft(UIElement element);
    public static double GetRight(UIElement element);
    public static double GetTop(UIElement element);
    public static void SetBottom(UIElement element, double length);
    public static void SetLeft(UIElement element, double length);
    public static void SetRight(UIElement element, double length);
    public static void SetTop(UIElement element, double length);
    protected override Size ArrangeOverride(Size arrangeSize);
    protected override Geometry GetLayoutClip(Size layoutSlotSize);
    protected override Size MeasureOverride(Size constraint);
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>观察它的结构，我们可以看到它提供了4个依赖属性，分别是LeftProperty，RightProperty，TopProperty和BottomProperty。其实是将这4个属性附加到子元素身上，以此来设置子元素距离Canvas上下左右的像素位置。</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><p>【1】布局特点 第一、在面板内部，我们可以通过x和y的坐标属性，直接控制控件的位置，非常类似winform中的top 和Ieft定位。 第二、我们可以直接通过拖放的形式选择控件的位置。 【2】适用场合 第一、一经设计基本上不会有改动的小布局。 第二、需要使用绝对定位的布局。 第三、依赖于横纵坐标的动画。</p><h3 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Window x:Class=&quot;WpfApp1.CanvasDemo&quot;
        xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
        xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
        xmlns:d=&quot;http://schemas.microsoft.com/expression/blend/2008&quot;
        xmlns:mc=&quot;http://schemas.openxmlformats.org/markup-compatibility/2006&quot;
        xmlns:local=&quot;clr-namespace:WpfApp1&quot;
        mc:Ignorable=&quot;d&quot;
        Title=&quot;CanvasDemo使用&quot; Height=&quot;200&quot; Width=&quot;320&quot; WindowStartupLocation=&quot;CenterOwner&quot;&gt;
    &lt;Grid&gt;
        &lt;Canvas Margin=&quot;10&quot;&gt;
            &lt;Label Content=&quot;username&quot; Canvas.Left=&quot;37&quot; Canvas.Top=&quot;31&quot;/&gt;
            &lt;TextBox x:Name=&quot;txtUsername&quot; Canvas.Left=&quot;120&quot; VerticalContentAlignment=&quot;Center&quot; Canvas.Top=&quot;35&quot; Width=&quot;120&quot;/&gt;
            &lt;Label Content=&quot;password&quot; Canvas.Left=&quot;38&quot; Canvas.Top=&quot;65&quot; RenderTransformOrigin=&quot;-0.277,-0.59&quot; HorizontalAlignment=&quot;Left&quot; VerticalAlignment=&quot;Center&quot;/&gt;
            &lt;PasswordBox x:Name=&quot;txtPassword&quot; Canvas.Left=&quot;120&quot; VerticalContentAlignment=&quot;Center&quot; Canvas.Top=&quot;73&quot; Width=&quot;120&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Top&quot;/&gt;
            &lt;Button x:Name=&quot;btnLogin&quot; Content=&quot;login&quot; Width=&quot;60&quot; Canvas.Left=&quot;70&quot; Canvas.Top=&quot;109&quot;/&gt;
            &lt;Button x:Name=&quot;btnExit&quot; Content=&quot;exit&quot; Width=&quot;60&quot; Canvas.Left=&quot;161&quot; Canvas.Top=&quot;109&quot; HorizontalAlignment=&quot;Left&quot; VerticalAlignment=&quot;Center&quot;/&gt;

        &lt;/Canvas&gt;
    &lt;/Grid&gt;
&lt;/Window&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+f+`" alt="Snipaste_2024-06-13_21-53-35" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-06-13_21-53-35</figcaption></figure><pre><code>## 9.Border 边框布局
</code></pre><p>Border并不是一个布局控件，因为它并不是Panel的子类，而是Decorator装饰器的子类，而Decorator继承于FrameworkElement。要了解Border的用法，我们要先看看它的父类Decorator。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class Decorator : FrameworkElement, IAddChild
{
    public Decorator();
 
    public virtual UIElement Child { get; set; }
    protected override int VisualChildrenCount { get; }
    protected internal override IEnumerator LogicalChildren { get; }
 
    protected override Size ArrangeOverride(Size arrangeSize);
    protected override Visual GetVisualChild(int index);
    protected override Size MeasureOverride(Size constraint);
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Decorator 装饰器只有一个Child 属性，说明Decorator只能容纳一个子元素（UIElement），也就是<strong>Border只能容纳一个子元素</strong>。那我们再看看Border的结构定义：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	public class Border : Decorator
{
    public static readonly DependencyProperty BorderThicknessProperty;
    public static readonly DependencyProperty PaddingProperty;
    public static readonly DependencyProperty CornerRadiusProperty;
    public static readonly DependencyProperty BorderBrushProperty;
    public static readonly DependencyProperty BackgroundProperty;
 
    public Border();
 
    public Thickness BorderThickness { get; set; }
    public Thickness Padding { get; set; }
    public CornerRadius CornerRadius { get; set; }
    public Brush BorderBrush { get; set; }
    public Brush Background { get; set; }
 
    protected override Size ArrangeOverride(Size finalSize);
    protected override Size MeasureOverride(Size constraint);
    protected override void OnRender(DrawingContext dc);
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们直接以表格的形式给出Border的相关属性。</p><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>BorderThickness</td><td>设置Border边框的厚度（像素宽度）</td></tr><tr><td>Padding</td><td>设置子元素相对于Border边框的距离</td></tr><tr><td>CornerRadius</td><td>设置Border的圆角</td></tr><tr><td>BorderBrush</td><td>设置Border边框的颜色画刷</td></tr><tr><td>Background</td><td>设置Border的背景颜色画刷</td></tr></tbody></table><p><strong>正是因为Border有这么多实用的属性， 所以， 我们通常在布局界面时，Border（装饰器）控件是首选。</strong></p><h3 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;StackPanel HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot; Orientation=&quot;Horizontal&quot;&gt;
        &lt;Border Height=&quot;50&quot; Width=&quot;90&quot; Background=&quot;LightBlue&quot; Margin=&quot;10&quot;&gt;
            &lt;TextBlock Text=&quot;border示例1&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;/&gt;
        &lt;/Border&gt;

        &lt;Border Height=&quot;50&quot; Width=&quot;90&quot; Background=&quot;LightGreen&quot; Margin=&quot;10&quot; CornerRadius=&quot;15&quot;&gt;
            &lt;TextBlock Text=&quot;border示例2&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;/&gt;
        &lt;/Border&gt;

        &lt;Border Height=&quot;80&quot; Width=&quot;80&quot; Background=&quot;OrangeRed&quot; Margin=&quot;10&quot; CornerRadius=&quot;40&quot;&gt;
            &lt;TextBlock Text=&quot;border示例3&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;/&gt;
        &lt;/Border&gt;
    &lt;/StackPanel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+x+`" alt="image-20250222173418428" tabindex="0" loading="lazy"><figcaption>image-20250222173418428</figcaption></figure><p>当长宽相同CornerRadius弧度为长一半时，会形成一个圆。</p><h2 id="_10-gridsplitter分割窗口" tabindex="-1"><a class="header-anchor" href="#_10-gridsplitter分割窗口" aria-hidden="true">#</a> 10.GridSplitter分割窗口</h2><p>GridSplitter控件用来分割窗体的布局，必须放在Grid栅格控件中配合使用，通过鼠标按住GridSplitter进行左右或上下拖动，即可调整行列尺寸。</p><p>注意事项：</p><p>1、如果您希望GridSplitter控件可以水平调整左右的Grid列宽时，那么HorizontalAlignment属性必须设置为Stretch或者Center。</p><p>2、如果您希望GridSplitter控件可以垂直调整行高，那么VerticalAlignment属性必须设置为Stretch或者Center。</p><p>3、ShowsPreview属性表示拖动时是否及时绘制调整尺寸。</p><h3 id="示例-5" tabindex="-1"><a class="header-anchor" href="#示例-5" aria-hidden="true">#</a> 示例</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>    &lt;Grid&gt;
        &lt;Grid.ColumnDefinitions&gt;
            &lt;ColumnDefinition Width=&quot;*&quot;/&gt;
            &lt;ColumnDefinition Width=&quot;*&quot;/&gt;
            &lt;ColumnDefinition Width=&quot;*&quot;/&gt;
        &lt;/Grid.ColumnDefinitions&gt;
        &lt;Border Grid.Column=&quot;0&quot; Background=&quot;LightBlue&quot;&gt;
            &lt;TextBlock TextWrapping=&quot;Wrap&quot; Padding=&quot;10&quot; LineHeight=&quot;20&quot;&gt;
                SCL是西门子公司推出的一种PLC编程语言，其英文全称为“StructuredControl Language”，中文翻译为“结构化控制语言”。西门子SCL语言是基于PASCL语言的，它在PASCL语言的基础上，加上了PLC编程的输入、输出、定时器、计数器、位存储器等特征，使其既具有高级语言的特点，又适合PLC的数据处理。
            &lt;/TextBlock&gt;
        &lt;/Border&gt;
        &lt;GridSplitter Grid.Column=&quot;1&quot; Width=&quot;5&quot; HorizontalAlignment=&quot;Center&quot;   ShowsPreview=&quot;False&quot;/&gt;
        &lt;Border Grid.Column=&quot;2&quot; Background=&quot;Orange&quot;&gt;
            &lt;TextBlock TextWrapping=&quot;Wrap&quot; Padding=&quot;10&quot; LineHeight=&quot;20&quot;&gt;
                西门子SCL语言支持布尔型、整型、实型等基本数据类型及日期时间、指针、用户自定义数据等复杂数据类型，提供了丰富的运算符可以构建逻辑表达式、数学表达式、关系表达式等各种表达式，提供了判断、选择、循环等语句用于程序控制，同时还提供了基本指令、扩展指令、工艺指令及通信指令等丰富的指令，可以满足所有PLC控制的要求。
            &lt;/TextBlock&gt;
        &lt;/Border&gt;
    &lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+B+'" alt="image-20250222175435288" tabindex="0" loading="lazy"><figcaption>image-20250222175435288</figcaption></figure>',75))])}const w=a(P,[["render",y],["__file","03.wpf布局.html.vue"]]);export{w as default};
