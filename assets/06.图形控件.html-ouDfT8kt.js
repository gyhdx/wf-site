import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,c as s,o,a as i,b as n,e as t,d as r}from"./app-DBc2jY3V.js";const u="/wf-site/assets/2023110414081772-YIQZIct2.png",v="/wf-site/assets/image-20250224191252016-DGKlGeSG.png",m="/wf-site/assets/image-20250224192621721-Cij8EVNo.png",c="/wf-site/assets/image-20250224193743852-BO_YVgSD.png",b="/wf-site/assets/image-20250224194700173-C8s6cCjk.png",g="/wf-site/assets/image-20250224195253449-DQ8UzG2M.png",q="/wf-site/assets/image-20250224200613786-FTS6ZW9q.png",p={},h={href:"https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/graphics-multimedia/path-markup-syntax?view=netframeworkdesktop-4.8",target:"_blank",rel:"noopener noreferrer"};function P(S,e){const d=a("ExternalLinkIcon");return o(),s("div",null,[e[3]||(e[3]=i('<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><p>形状是WPF另一大系列控件。WPF所有的形状都继承于Shape基类。那么，WPF提供了哪些可用的形状呢？我们用一张图来说明它的子类。</p><figure><img src="'+u+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><table><thead><tr><th>形状名称</th><th>说明</th></tr></thead><tbody><tr><td>Ellipse</td><td>椭圆形</td></tr><tr><td>Line</td><td>在两个点之间绘制直线。</td></tr><tr><td>Rectangle</td><td>绘制矩形。</td></tr><tr><td>Polyline</td><td>绘制一系列相互连接的直线。</td></tr><tr><td>Polygon</td><td>绘制多边形，它是由一系列相互连接的线条构成的闭合形状。</td></tr><tr><td>Path</td><td>绘制一系列相互连接的直线和曲线。</td></tr></tbody></table><p>Shape是一个抽象基类，它不能被实例化，所以我们在使用时只能实例化它的子类。而Shape的父类是FrameworkElement，所以，所有的Shape子类都是一个UIElement 类，因此形状对象可以用在面板和大多数控件中。 由于 Canvas 面板支持其子对象的绝对位置，因此特别适合创建复杂的图形。</p><h2 id="_1-shape概述" tabindex="-1"><a class="header-anchor" href="#_1-shape概述" aria-hidden="true">#</a> 1.Shape概述</h2><p>属性成员</p><table><thead><tr><th>属性名称</th><th>说明</th></tr></thead><tbody><tr><td>Stroke</td><td>获取或设置Shape的边框颜色画刷</td></tr><tr><td>StrokeEndLineCap</td><td>获取或设置Shape描述线的末端的样式</td></tr><tr><td>StrokeStartLineCap</td><td>获取或设置Shape描述线的开头的样式</td></tr><tr><td>StrokeThickness</td><td>获取或设置Shape边框的厚度</td></tr><tr><td>Fill</td><td>获取或设置Shape的内部填充颜色</td></tr><tr><td>StrokeDashOffset</td><td>获取或设置短划线模式内短划线开始处的距离</td></tr><tr><td>RenderedGeometry</td><td>获取或设置Shape的几何</td></tr><tr><td>Stretch</td><td>获取或设置Shape的填充模式</td></tr><tr><td>StrokeDashArray</td><td>获取或设置勾勒形状轮廓的短划线和间隙的模式的值</td></tr><tr><td>StrokeMiterLimit</td><td>获取或设置一个限制到一半的斜接长度比</td></tr><tr><td>StrokeDashCap</td><td>获取或设置 System.Windows.Media.PenLineCap 枚举值，该值指定如何绘制虚线的末端。</td></tr><tr><td>GeometryTransform</td><td>获取或设置Shape的转换</td></tr><tr><td>StrokeLineJoin</td><td>获取或设置Shape的顶点处使用的联接类型。</td></tr><tr><td>DefiningGeometry</td><td>获取Shape的Geometry</td></tr></tbody></table><h2 id="_2-ellipse椭圆" tabindex="-1"><a class="header-anchor" href="#_2-ellipse椭圆" aria-hidden="true">#</a> 2.Ellipse椭圆</h2><p>Ellipse继承于Shape，Shape继承于FrameworkElement，所以，它可以设置其 Width 和 Height。 使用其 Fill 属性指定用于绘制椭圆形内部的 Brush。 使用其 Stroke 属性指定用于绘制椭圆形轮廓的 Brush。 StrokeThickness 属性指定椭圆形轮廓的粗细。</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;StackPanel&gt;
    
    &lt;Ellipse Width=&quot;100&quot; Height=&quot;50&quot; StrokeThickness=&quot;3&quot; Stroke=&quot;Red&quot; Fill=&quot;AntiqueWhite&quot;&gt;
        &lt;Ellipse.Triggers&gt;
            &lt;EventTrigger RoutedEvent=&quot;Loaded&quot;&gt;
                &lt;BeginStoryboard&gt;
                    &lt;Storyboard&gt;
                        &lt;DoubleAnimation From=&quot;100&quot; To=&quot;200&quot; Duration=&quot;0:0:2&quot; AutoReverse=&quot;False&quot; RepeatBehavior=&quot;Forever&quot; Storyboard.TargetProperty=&quot;(Ellipse.Width)&quot; &gt;&lt;/DoubleAnimation&gt;
                        &lt;DoubleAnimation From=&quot;50&quot; To=&quot;100&quot; Duration=&quot;0:0:2&quot; AutoReverse=&quot;False&quot; RepeatBehavior=&quot;Forever&quot; Storyboard.TargetProperty=&quot;(Ellipse.Width)&quot; &gt;&lt;/DoubleAnimation&gt;
                    &lt;/Storyboard&gt;
                &lt;/BeginStoryboard&gt;
            &lt;/EventTrigger&gt;
        &lt;/Ellipse.Triggers&gt;
    &lt;/Ellipse&gt;
    &lt;Grid Grid.Column=&quot;1&quot;&gt;
        &lt;Grid.RowDefinitions&gt;
            &lt;RowDefinition/&gt;
            &lt;RowDefinition Height=&quot;auto&quot;/&gt;
        &lt;/Grid.RowDefinitions&gt;
        &lt;Ellipse Width=&quot;{Binding ElementName=slider,Path=Value}&quot; 
                 Height=&quot;{Binding ElementName=slider,Path=Value}&quot; 
                 Fill=&quot;Green&quot;/&gt;
        &lt;Slider x:Name=&quot;slider&quot; Grid.Row=&quot;1&quot; Value=&quot;50&quot; Maximum=&quot;200&quot;/&gt;
    &lt;/Grid&gt;
&lt;/StackPanel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="image-20250224191252016" tabindex="0" loading="lazy"><figcaption>image-20250224191252016</figcaption></figure><p>第一个椭圆用了一个事件Triggers和Storyboard故事板，演示了椭圆大小的动画改变，在第二个椭圆中，宽度和高度相等，便出现了一个正圆，利用Binding对象将Slider的Value和椭圆的尺寸绑定起来，以此滑动改变椭圆大小。</p><h2 id="_3-line线段" tabindex="-1"><a class="header-anchor" href="#_3-line线段" aria-hidden="true">#</a> 3.Line线段</h2><p>Line(线段)继承于Shape，它自身只有4个属性，分别用于定义线段两端的端点坐标。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public sealed class Line : Shape
{
    public static readonly DependencyProperty X1Property;
    public static readonly DependencyProperty Y1Property;
    public static readonly DependencyProperty X2Property;
    public static readonly DependencyProperty Y2Property;
 
    public Line();
 
    public double X1 { get; set; }
    public double Y1 { get; set; }
    public double X2 { get; set; }
    public double Y2 { get; set; }
    protected override Geometry DefiningGeometry { get; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中X1,Y1表示第一个点坐标，X2,Y2表示第二个点坐标。</p><p>下面的属性位于Shape基类，在Line线段中设置后，会有意想不到的效果。</p><p>StrokeStartLineCap属性：表示线段前头的开关。</p><p>Stroke：线条颜色。</p><p>StrokeThickness：线条宽度。</p><p>StrokeDashArray：设置虚线。</p><p>StrokeDashOffset：虚线位置偏移量。</p><p>接下来，我们以一个示例来说明Line的用法。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();

        Loaded += (s, e) =&gt;
        {
            int number = 10;
            Task.Run(() =&gt;
            {
                
                while(true)
                {
                    if (number == 1) number = 10;
                    //偏移线段位置
                    Application.Current.Dispatcher.BeginInvoke(new Action(() =&gt;
                    {
                        xLine.StrokeDashOffset = number;
                    }));
                    number--;
                    Thread.Sleep(200);
                }
                
            });
        };
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Canvas&gt;
    &lt;Line x:Name=&quot;xLine&quot; X1=&quot;10&quot; X2=&quot;100&quot; Y1=&quot;10&quot; Y2=&quot;300&quot; StrokeThickness=&quot;5&quot; Stroke=&quot;Black&quot; StrokeDashArray=&quot;2,1&quot;/&gt;
    &lt;Line X1=&quot;{Binding ElementName=x1,Path=Value}&quot;
          Y1=&quot;{Binding ElementName=y1,Path=Value}&quot;
          X2=&quot;{Binding ElementName=x2,Path=Value}&quot;
          Y2=&quot;{Binding ElementName=y2,Path=Value}&quot;
          StrokeStartLineCap=&quot;Round&quot;
          Stroke=&quot;Red&quot;
          StrokeThickness=&quot;5&quot;/&gt;
    &lt;Slider x:Name=&quot;x1&quot; 
            Value=&quot;10&quot; 
            Maximum=&quot;450&quot; 
            Width=&quot;450&quot; 
            Canvas.Left=&quot;10&quot; 
            Canvas.Top=&quot;237&quot;/&gt;
    &lt;Slider x:Name=&quot;y1&quot; 
            Value=&quot;10&quot; 
            Maximum=&quot;450&quot; 
            Width=&quot;450&quot; 
            Canvas.Left=&quot;10&quot; 
            Canvas.Top=&quot;256&quot;/&gt;
    &lt;Slider x:Name=&quot;x2&quot; 
            Value=&quot;300&quot; 
            Maximum=&quot;450&quot; 
            Width=&quot;450&quot; 
            Canvas.Left=&quot;10&quot; 
            Canvas.Top=&quot;276&quot;/&gt;
    &lt;Slider x:Name=&quot;y2&quot; 
            Value=&quot;300&quot; 
            Maximum=&quot;450&quot; 
            Width=&quot;450&quot; 
            Canvas.Left=&quot;10&quot; 
            Canvas.Top=&quot;295&quot;/&gt;
&lt;/Canvas&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="image-20250224192621721" tabindex="0" loading="lazy"><figcaption>image-20250224192621721</figcaption></figure><h2 id="_4-rectangle矩形" tabindex="-1"><a class="header-anchor" href="#_4-rectangle矩形" aria-hidden="true">#</a> 4.Rectangle矩形</h2><p>Rectangle是一个比较简单而实用的图形控件，继承于Shape，有两个属性比较常用，即RadiusX和RadiusY，表示设置矩形的圆角。所以，通过这两个属性的设置，矩形也可以画出一个圆。</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Canvas x:Name=&quot;canvas&quot;&gt;
    &lt;Rectangle Height=&quot;100&quot; Width=&quot;200&quot; Fill=&quot;LightGreen&quot; Canvas.Left=&quot;200&quot; Canvas.Top=&quot;10&quot;/&gt;

    &lt;Rectangle 
        Height=&quot;{Binding ElementName=slider, Path=Value}&quot;
        Width=&quot;{Binding ElementName=slider, Path=Value}&quot;
        RadiusX=&quot;{Binding ElementName=slider, Path=Value}&quot;
        RadiusY=&quot;{Binding ElementName=slider, Path=Value}&quot;
        Fill=&quot;red&quot;
        Canvas.Left=&quot;200&quot;
        Canvas.Top=&quot;150&quot;
               /&gt;

    &lt;Slider x:Name=&quot;slider&quot; Value=&quot;100&quot; Minimum=&quot;10&quot; Maximum=&quot;200&quot; Canvas.Top=&quot;300&quot; Width=&quot;500&quot; Canvas.Left=&quot;100&quot;/&gt;
&lt;/Canvas&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="image-20250224193743852" tabindex="0" loading="lazy"><figcaption>image-20250224193743852</figcaption></figure><h2 id="_5-polyline折线" tabindex="-1"><a class="header-anchor" href="#_5-polyline折线" aria-hidden="true">#</a> 5.Polyline折线</h2><p>Polyline表示由一系列线段组合绘制而成的折线，因为它有一个Points属性，用来保存这些点的坐标。这些坐标点用于绘制Polyline图形中各线段相接处的顶点。集合中第一个元素表示起点，最后一元素表示终点。</p><p>在XAML前端代码中定义Points的内容书写格式如下：假如我们有4个点，分别是起点(30,30)，中继点(200,30)，中继点(50,250)，终点(220,250)，那么，Points的内容书写为：Points=&quot;30,30 200,30 50,250 220,250&quot;</p><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();

    
    }

    private int count = 0;
    private Polyline polyline = null;

    private void Window_PreviewMouseLeftButtonUp(object sender, MouseButtonEventArgs e)
    {
        if (count++ == 0)
        {
            polyline = new Polyline();
            polyline.StrokeThickness = 5;
            polyline.Stroke = Brushes.Red;
            canvas.Children.Add(polyline);
        }

        var point = e.GetPosition(canvas);
        polyline.Points.Add(point);
    }

    private void Window_PreviewMouseRightButtonUp(object sender, MouseButtonEventArgs e)
    {
        count = 0;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Window x:Class=&quot;Wpfsession2.MainWindow&quot;
        xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
        xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
        xmlns:d=&quot;http://schemas.microsoft.com/expression/blend/2008&quot;
        xmlns:mc=&quot;http://schemas.openxmlformats.org/markup-compatibility/2006&quot;
        xmlns:forms=&quot;clr-namespace:System.Windows.Forms;assembly=System.Windows.Forms&quot;
        xmlns:local=&quot;clr-namespace:Wpfsession2&quot;
        mc:Ignorable=&quot;d&quot;
        PreviewMouseLeftButtonUp=&quot;Window_PreviewMouseLeftButtonUp&quot;
        PreviewMouseRightButtonUp=&quot;Window_PreviewMouseRightButtonUp&quot;
        Title=&quot;MainWindow&quot; Height=&quot;450&quot; Width=&quot;800&quot;&gt;
    &lt;Canvas x:Name=&quot;canvas&quot;&gt;
        &lt;Polyline  StrokeThickness=&quot;20&quot; Points=&quot;30,30 200,30 50,250 220,250&quot;&gt;
            &lt;Polyline.Stroke&gt;
                &lt;LinearGradientBrush StartPoint=&quot;30,30&quot;
                                     EndPoint=&quot;220,250&quot;
                                     MappingMode=&quot;Absolute&quot;&gt;
                    &lt;GradientStop Color=&quot;Red&quot; Offset=&quot;1&quot;/&gt;
                    &lt;GradientStop Color=&quot;Yellow&quot; Offset=&quot;0.66&quot;/&gt;
                    &lt;GradientStop Color=&quot;Green&quot; Offset=&quot;0.0&quot;/&gt;

                &lt;/LinearGradientBrush&gt;
            &lt;/Polyline.Stroke&gt;
        &lt;/Polyline&gt;
    &lt;/Canvas&gt;
&lt;/Window&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="image-20250224194700173" tabindex="0" loading="lazy"><figcaption>image-20250224194700173</figcaption></figure><h2 id="_6-polygon多边形" tabindex="-1"><a class="header-anchor" href="#_6-polygon多边形" aria-hidden="true">#</a> 6.Polygon多边形</h2><p>Polygon叫多边形，与Polyline类似，都有一个Points属性，只不过，Polygon会把起点和终点连接起来。就拿上一节的例子，我们只是简单地把Polyline换成Polygon，其它设置保持不变。</p><p>后端</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();


    }

    private int count = 0;
    private Polygon polygon = null;

    private void Window_PreviewMouseLeftButtonUp(object sender, MouseButtonEventArgs e)
    {
        if (count++ == 0)
        {
            polygon = new Polygon();
            polygon.StrokeThickness = 5;
            polygon.Stroke = Brushes.Red;
            canvas.Children.Add(polygon);
        }

        var point = e.GetPosition(canvas);
        polygon.Points.Add(point);
    }

    private void Window_PreviewMouseRightButtonUp(object sender, MouseButtonEventArgs e)
    {
        count = 0;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Window x:Class=&quot;Wpfsession2.MainWindow&quot;
        xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
        xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
        xmlns:d=&quot;http://schemas.microsoft.com/expression/blend/2008&quot;
        xmlns:mc=&quot;http://schemas.openxmlformats.org/markup-compatibility/2006&quot;
        xmlns:forms=&quot;clr-namespace:System.Windows.Forms;assembly=System.Windows.Forms&quot;
        xmlns:local=&quot;clr-namespace:Wpfsession2&quot;
        mc:Ignorable=&quot;d&quot;
        PreviewMouseLeftButtonUp=&quot;Window_PreviewMouseLeftButtonUp&quot;
        PreviewMouseRightButtonUp=&quot;Window_PreviewMouseRightButtonUp&quot;
        Title=&quot;MainWindow&quot; Height=&quot;450&quot; Width=&quot;800&quot;&gt;
    &lt;Canvas x:Name=&quot;canvas&quot;&gt;
        &lt;Polygon  StrokeThickness=&quot;20&quot; Points=&quot;30,30 200,30 50,250 220,250&quot;&gt;
            &lt;Polygon.Stroke&gt;
                &lt;LinearGradientBrush StartPoint=&quot;30,30&quot;
                                     EndPoint=&quot;220,250&quot;
                                     MappingMode=&quot;Absolute&quot;&gt;
                    &lt;GradientStop Color=&quot;Red&quot; Offset=&quot;1&quot;/&gt;
                    &lt;GradientStop Color=&quot;Yellow&quot; Offset=&quot;0.66&quot;/&gt;
                    &lt;GradientStop Color=&quot;Green&quot; Offset=&quot;0.0&quot;/&gt;

                &lt;/LinearGradientBrush&gt;
            &lt;/Polygon.Stroke&gt;
        &lt;/Polygon&gt;
    &lt;/Canvas&gt;
&lt;/Window&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="image-20250224195253449" tabindex="0" loading="lazy"><figcaption>image-20250224195253449</figcaption></figure><h2 id="_7-path路径" tabindex="-1"><a class="header-anchor" href="#_7-path路径" aria-hidden="true">#</a> 7.Path路径</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public sealed class Path : Shape
{
    public static readonly DependencyProperty DataProperty;
 
    public Path();
 
    public Geometry Data { get; set; }
 
    protected override Geometry DefiningGeometry { get; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从定义上看，Path只有一个Data属性，这个属性的类型为Geometry。而Geometry又是一个抽象类，所以我们不能直接使用它，那它肯定会有一系列可以实例化的子类。没错，Geometry表示一个几何，而几何的图形可以分为好几种。</p><table><thead><tr><th>几何名称</th><th>说明</th></tr></thead><tbody><tr><td>LineGeometry</td><td>直线几何</td></tr><tr><td>RectangleGeometry</td><td>矩形几何</td></tr><tr><td>EllipseGeometry</td><td>椭圆几何</td></tr><tr><td>PathGeometry</td><td>路径几何</td></tr><tr><td>StreamGeometry</td><td>PathGeometry的轻量级替代品，不支持 Bidning、动画等功能</td></tr><tr><td>CombinedGeometry</td><td>多图形组合，形成单一几何几何图形</td></tr><tr><td>GeometryGroup</td><td>多图形组合，形成几何图形组</td></tr></tbody></table><p>接下来，我们分别讲一下这几种几何的用法。</p><p><strong>一、LineGeometry直线几何</strong></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>&lt;Path Stroke=&quot;Blue&quot; Fill=&quot;Red&quot;&gt;
    &lt;Path.Data&gt;
        &lt;LineGeometry  StartPoint=&quot;10,20&quot; EndPoint=&quot;100,200&quot;/&gt;
    &lt;/Path.Data&gt;
&lt;/Path&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>二、RectangleGeometry矩形几何</strong></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>&lt;Path Stroke=&quot;Blue&quot; Fill=&quot;Red&quot;&gt;
    &lt;Path.Data&gt;
        &lt;RectangleGeometry Rect=&quot;50,20,30,40&quot; /&gt;
    &lt;/Path.Data&gt;
&lt;/Path&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>三、EllipseGeometry椭圆几何</strong></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>&lt;Path Stroke=&quot;Yellow&quot; Fill=&quot;LightGreen&quot;&gt;
    &lt;Path.Data&gt;
        &lt;EllipseGeometry Center=&quot;150,80&quot; RadiusX=&quot;60&quot; RadiusY=&quot;50&quot;/&gt;
    &lt;/Path.Data&gt;
&lt;/Path&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Line、Rectangle、Ellipse控件能够画出来的效果，Path都可以画出来。而接下来我们要分享的是，Line、Rectangle、Ellipse控件画不出来的效果，Path也能画出来。那就是PathGeometry路径几何。</p><h3 id="pathgeometry路径几何" tabindex="-1"><a class="header-anchor" href="#pathgeometry路径几何" aria-hidden="true">#</a> <strong>PathGeometry路径几何</strong></h3><p>PathGeometry微微有点复杂。它有一个Figures属性，可以容纳很多较复杂的图形。Figures是一个集合，其中的元素是PathFigure类型，而PathFigure中的Segments属性又是一个集合，其中的元素类型为PathSegment。</p><p>PathSegment是一个抽象类，我们可以实例化PathSegment的子类放到PathFigure中，然后把PathFigure放到PathGeometry中，这样就可以绘制不同的路径图形了。那么PathSegment有哪些子类呢？</p><table><thead><tr><th>LineSegment</th><th>直线段</th></tr></thead><tbody><tr><td>ArcSegment</td><td>圆弧线段</td></tr><tr><td>BezierSegment</td><td>三次方贝塞尔曲线段</td></tr><tr><td>QuadraticBezierSegmnt</td><td>二次方贝塞尔曲线段</td></tr><tr><td>PolyLineSegment</td><td>折线段</td></tr><tr><td>PolyBezierSegment</td><td>多三次方贝塞尔曲线段</td></tr><tr><td>PolyQuadraticBezierSegment</td><td>多二次方贝塞尔曲</td></tr><tr><td></td><td></td></tr></tbody></table><p>PathFigure有一个StartPoint属性表示起点坐标，而Segments集合中的元素就是上面那张表中的各种线段实例，它们将依次首尾相接，最终绘制成形。</p><p>我们以LineSegment和ArcSegment为例。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>&lt;Path Stroke=&quot;Black&quot; Fill=&quot;LightPink&quot; StrokeThickness=&quot;5&quot;&gt;
    &lt;Path.Data&gt;
        &lt;PathGeometry&gt;
            &lt;PathGeometry.Figures&gt;
                &lt;PathFigure StartPoint=&quot;150,200&quot;&gt;
                    &lt;LineSegment  Point=&quot;300,200&quot;/&gt;
                    &lt;ArcSegment Point=&quot;300 50&quot; 
                                Size=&quot;100 100&quot; 
                                SweepDirection=&quot;Clockwise&quot; 
                                IsLargeArc=&quot;False&quot;/&gt;
                    &lt;ArcSegment Point=&quot;300 200&quot; 
                                Size=&quot;100 100&quot; 
                                SweepDirection=&quot;Clockwise&quot; 
                                IsLargeArc=&quot;False&quot;/&gt;
                &lt;/PathFigure&gt;
            &lt;/PathGeometry.Figures&gt;
        &lt;/PathGeometry&gt;
    &lt;/Path.Data&gt;
&lt;/Path&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，PathFigure 图形的起点坐标为（150,200），然后第一个元素是线段，终点坐标为（300,200），图形的坐标原点是左上角（0，0），所以，往下就是Y轴正半轴方向，往右就是X轴正半轴方向。</p><p>然后，画了两条圆弧，第一条圆弧的起点坐标就是线段的终点坐标，即（300,200），圆弧的终点坐标为（300 50），大小为（100 100），第二条圆弧的终点坐标又回到了线段的终点坐标（300 200），于是就出现了图中的样子。</p><p>ArcSegment的常用属性如下： Point：指明圆弧连接的终点； Size：指明完整椭圆的横轴半径和纵轴半径； IsLargeArc：指明是否使用大弧去连接 ； SweepDirection ：指明圆弧是顺时针方向还是逆时针方向； RotationAngle：指明圆弧椭圆的旋转角度；</p><p>接下来，我们再讲一下<strong>BezierSegment</strong>贝塞尔曲线。</p><p><strong>BezierSegment</strong>需要4个坐标点来完成图形的绘制，分别是起点，控制点1，控制点2和终点。</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;PathFigure IsFilled=&quot;False&quot; StartPoint=&quot;5,5&quot;&gt;
    &lt;BezierSegment Point1=&quot;200,50&quot; Point2=&quot;50,200&quot;  Point3=&quot;350,250&quot;/&gt;
&lt;/PathFigure&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所示，（5，5）表示起点（StartPoint属性），Point1属性（200,50）和Point2属性（50,200）表示两个控制点，Point3属性（350,250）表示终点。</p><p>Path的标记语法</p>`,77)),n("p",null,[e[1]||(e[1]=t("通过上面的示例我们会发现要绘制复杂的图形，需要实例化各种子类，代码繁琐，这时就需要了解Path的路径标记语法，它大大减少了代码量。您可以从以下的表格或")),n("a",h,[e[0]||(e[0]=t("微软官网")),r(d)]),e[2]||(e[2]=t("中获得相关知识。"))]),e[4]||(e[4]=i(`<table><thead><tr><th>命令</th><th>用途</th><th>语法</th><th>示例</th><th>对应标签语法</th></tr></thead><tbody><tr><td>M</td><td>移动到起点坐标</td><td>M 起点</td><td>M 150,200</td><td>PathFigure StartPoint=&quot;150,200&quot;</td></tr><tr><td>L</td><td>绘制直线</td><td>L 终点</td><td>L 300,200</td><td>LineSegment Point=&quot;300,200&quot;</td></tr><tr><td>H</td><td>水平直线</td><td>H 终点横坐标</td><td></td><td></td></tr><tr><td>V</td><td>垂直直线</td><td>V 终点横坐标</td><td></td><td></td></tr><tr><td>A</td><td>绘制圆弧</td><td>A 母椭圆尺寸 旋转角度 是否大弧 顺时针/逆时针 终点</td><td>A 180，80 45 1 1 150，150</td><td>ArcSegment Size=&quot;180,80&quot; RotationAngle=&quot;45&quot; IsLargeArc=&quot;True&quot; SweepDirection=&quot;Clockwise&quot; Point=&quot;150,150&quot;</td></tr><tr><td>C</td><td>三次方贝塞尔曲线</td><td>C 控制点1 控制点2 终点</td><td>C 200,50 50,200 350,250</td><td>BezierSegment Point1=&quot;200,50&quot; Point2=&quot;50,200&quot; Point3=&quot;350,250&quot;</td></tr><tr><td>Q</td><td>二次方贝塞尔曲线</td><td>Q 控制点1 终点</td><td>Q 200,50 350,250</td><td>QuadraticBezierSegmnt Point1=&quot;200,50&quot; Point3=&quot;350,250&quot;</td></tr><tr><td>S</td><td>平滑三次方贝塞尔曲线</td><td>S 控制点2 终点</td><td>S 200,50 350,250</td><td></td></tr><tr><td>T</td><td>平滑二次方贝塞尔曲线</td><td>T 终点</td><td>T 350,250</td><td></td></tr><tr><td>Z</td><td>闭合图形</td><td>Z</td><td>M 10,150 L40,150 L40,250 L10,250 Z</td><td>Path Fill=&quot;HotPink&quot; Data=&quot;M 10,150 L40,150 L40,250 L10,250 Z&quot;</td></tr></tbody></table><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Path Fill=&quot;HotPink&quot; Data=&quot;M 10,150 L40,150 L40,250 L10,250 Z&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Canvas x:Name=&quot;canvas&quot;&gt;
    &lt;Path Stroke=&quot;Red&quot; Fill=&quot;AliceBlue&quot;&gt;
        &lt;Path.Data&gt;
            &lt;LineGeometry StartPoint=&quot;10 10&quot; EndPoint=&quot;250 250&quot;/&gt;
        &lt;/Path.Data&gt;
    &lt;/Path&gt;

    &lt;Path Stroke=&quot;Yellow&quot; Fill=&quot;AliceBlue&quot;&gt;
        &lt;Path.Data&gt;
            &lt;RectangleGeometry Rect=&quot;100 100 200 50&quot;/&gt;
        &lt;/Path.Data&gt;
    &lt;/Path&gt;

    &lt;Path Stroke=&quot;Green&quot; Fill=&quot;LightBlue&quot;&gt;
        &lt;Path.Data&gt;
            &lt;EllipseGeometry Center=&quot;300 300&quot; RadiusX=&quot;100&quot; RadiusY=&quot;60&quot;/&gt;
        &lt;/Path.Data&gt;
    &lt;/Path&gt;

    &lt;Path Stroke=&quot;Blue&quot; Fill=&quot;LightPink&quot;&gt;
        &lt;Path.Data&gt;
            &lt;PathGeometry&gt;
                &lt;PathGeometry.Figures&gt;
                    &lt;PathFigure StartPoint=&quot;150 200&quot;&gt;
                        &lt;LineSegment Point=&quot;300 200&quot;/&gt;
                        &lt;ArcSegment Point=&quot;300 50&quot; Size=&quot;100 100&quot; SweepDirection=&quot;Clockwise&quot; IsLargeArc=&quot;False&quot;/&gt;
                        &lt;ArcSegment Point=&quot;300 200&quot; Size=&quot;100 100&quot; SweepDirection=&quot;Clockwise&quot; IsLargeArc=&quot;False&quot;/&gt;
                    &lt;/PathFigure&gt;

                    &lt;PathFigure IsFilled=&quot;False&quot; StartPoint=&quot;5 5&quot;&gt;
                        &lt;BezierSegment Point1=&quot;200 50&quot; Point2=&quot;50 200&quot; Point3=&quot;350 250&quot;/&gt;
                    &lt;/PathFigure&gt;
                &lt;/PathGeometry.Figures&gt;
            &lt;/PathGeometry&gt;
        &lt;/Path.Data&gt;
    &lt;/Path&gt;

    &lt;Path Fill=&quot;HotPink&quot; Data=&quot;M 10,150 L40,150 L40,250 L10,250 Z&quot;/&gt;
&lt;/Canvas&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+q+'" alt="image-20250224200613786" tabindex="0" loading="lazy"><figcaption>image-20250224200613786</figcaption></figure>',5))])}const x=l(p,[["render",P],["__file","06.图形控件.html.vue"]]);export{x as default};
