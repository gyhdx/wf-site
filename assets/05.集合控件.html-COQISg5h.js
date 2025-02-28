import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,c as s,o,a as d,b as n,e as t,d as l}from"./app-DBc2jY3V.js";const u="/wf-site/assets/image-20250224124431148-DAbDMn1I.png",c="/wf-site/assets/image-20250224133221400-BkwD1neI.png",m="/wf-site/assets/image-20250224135735218-BDfCWqRv.png",v="/wf-site/assets/image-20250224141606011-aRcd9qCa.png",b="/wf-site/assets/image-20250224165253318-BYalIcmO.png",g="/wf-site/assets/2023090609391974-yr53Gh6e.png",q="/wf-site/assets/2023090802411235-00mFCQrR.png",p="/wf-site/assets/202309080332578-9cNOcfo2.png",x="/wf-site/assets/2023090806382858-BGF8A5Jg.png",h="/wf-site/assets/2023090807065254-CvpR1VzY.png",C={},w={href:"http://www.wpfsoft.com/2023/08/29/1497.html",target:"_blank",rel:"noopener noreferrer"},I={href:"http://www.wpfsoft.com/2023/08/31/1652.html",target:"_blank",rel:"noopener noreferrer"};function S(B,e){const i=a("ExternalLinkIcon");return o(),s("div",null,[e[5]||(e[5]=d(`<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><p>很多时候，我们需要显示大量的数据，这些数据虽然众多，但是数据类型结构相同的，由于内容控件只能显示单个元素，要显示或操作多个元素组成的集合，那么，集合控件就派上用场了。WPF中的集合控件种类丰富，有类似表格的DataGrid，有单列表的ListBox，也有介于两者之前的ListView，还有，软件的菜单通常也是一个集合控件，以及软件下方的状态栏，同样也是一个集合控件。</p><p>WPF中常用的集合控件有：</p><table><thead><tr><th>控件名</th><th>说明</th></tr></thead><tbody><tr><td>ItemsControl</td><td>集合控件的基类，本身也是一个可以实例化的控件</td></tr><tr><td>ListBox</td><td>一个列表集合控件</td></tr><tr><td>ListView</td><td>表示用于显示数据项列表的控件，它可以有列头标题</td></tr><tr><td>DataGrid</td><td>表示可自定义的网格中显示数据的控件。</td></tr><tr><td>ComboBox</td><td>表示带有下拉列表的选择控件，通过单击控件上的箭头可显示或隐藏下拉列表。</td></tr><tr><td>TabControl</td><td>表示包含多个共享相同的空间在屏幕上的项的控件。</td></tr><tr><td>TreeView</td><td>用树结构(其中的项可以展开和折叠)中显示分层数据的控件</td></tr><tr><td>Menu</td><td>表示一个 Windows 菜单控件，该控件可用于按层次组织与命令和事件处理程序关联的元素。</td></tr><tr><td>ContextMenu</td><td>表示使控件能够公开特定于控件的上下文的功能的弹出菜单。</td></tr><tr><td>StatusBar</td><td>表示应用程序窗口中的水平栏中显示项和信息的控件。</td></tr></tbody></table><h2 id="_1-itemscontrol基类" tabindex="-1"><a class="header-anchor" href="#_1-itemscontrol基类" aria-hidden="true">#</a> 1.ItemsControl基类</h2><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><p><strong>1.Items属性</strong></p><p>ItemsControl类作为集合控件的基类，它提供了一个非常重要的属性，那就是Items属性。这个属性的类型是ItemCollection，也就是一个集合列表，那么这个列表的元素内容是object。</p><p>说明我们可以在集合控件中放任意引用类型的元素。</p><p><strong>2DisplayMemberPath属性</strong></p><p>这个属性用来获取或设置要显示的内容，它通常指某个数据源的某个属性名称，所以它是string类型。</p><p><strong>3HasItems属性</strong></p><p>这个属性用来判断当前集合控件是否有元素。</p><p><strong>4.IsTextSearchCaseSensitive属性</strong></p><p>这个属性如果为true，则搜索元素时区分大小写。</p><p><strong>5 IsTextSearchEnabled属性</strong></p><p>表示是否启用文字搜索。</p><p>好，接下来的几个属性将在后续进行学习，不过，我们先在这里了解一下它们的用途。</p><p><strong>6 ItemsPanel属性[重要]</strong></p><p>由于一个集合控件里面会显示多个数据项（一个数据代表一个家），那么这些数据项怎么排版？是像StackPanel一样水平或垂直排列，还是像WrapPanel瀑布流一样排例？这个ItemsPanel属性来决定。</p><p><strong>7 ItemTemplate属性[重要]</strong></p><p>在集合控件里，数据项有可能是一个复杂的实体，那么这些数据以什么样的UI布局界面呈现？也就是说，数据本身穿什么衣服？ItemTemplate属性就是来决定数据的外观的。如果把每个Item元素看成一个家，那么前面的ItemsPanel属性就是来决定邻里之间的实际距离以及房子和房子的排例走势。</p><p><strong>8 ItemContainerStyle属性[重要]</strong></p><p>ItemTemplate属性只能决定数据的外观，相当于这个家的内部装修以及家电家具的样式，而这个家外墙的装饰，则必须由ItemContainerStyle属性来承包。</p><p><strong>9 ItemContainerStyleSelector属性[重要]</strong></p><p>当我们选中这个集合控件中的某一项，并希望突出这一项，那就可以在ItemTemplateSelector属性中进行定义，也就是说，选择了某一项，某一项的外墙装饰发生改变。那同时要改变内部的样式呢？</p><p><strong>10 ItemTemplateSelector属性[重要]</strong></p><p>如果选中了某一项，并希望它的数据模块被重新定义，以突出这一项被选中，可以设置ItemTemplateSelector属性</p><p><strong>11 Template属性[重要]</strong></p><p>还记得吗？ItemsControl类继承于Control类，而Control类中有一个叫Template的属性，所以ItemsControl类自然也就拥有了这个属性，这是一个什么属性？它是ControlTemplate类，也就是控件模板，所以，如果我们希望把ItemsControl类本身的外观进行重定义，那就需要去设置Template属性</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Grid&gt;
    &lt;ItemsControl Margin=&quot;5&quot; Padding=&quot;5&quot; IsTextSearchEnabled=&quot;True&quot;&gt;
        &lt;Button Content=&quot;enter&quot; Margin=&quot;0 5&quot;/&gt;
        &lt;Border Height=&quot;20&quot; Background=&quot;AntiqueWhite&quot; Margin=&quot;0 5&quot;/&gt;
        &lt;TextBlock Text=&quot;Hello World&quot; Margin=&quot;0 5&quot; Background=&quot;LightBlue&quot;/&gt;
        &lt;ItemsControl Height=&quot;35&quot; Background=&quot;GhostWhite&quot;/&gt;
        &lt;CheckBox Content=&quot;CheckBox#元素&quot; Margin=&quot;0 5&quot;/&gt;
        &lt;StackPanel Orientation=&quot;Horizontal&quot;&gt;
            &lt;RadioButton Content=&quot;初级&quot;/&gt;
            &lt;RadioButton Content=&quot;中级&quot;/&gt;
            &lt;RadioButton Content=&quot;高级&quot;/&gt;
        &lt;/StackPanel&gt;
        this is a textblock
        &lt;Control Height=&quot;20&quot; Background=&quot;Aquamarine&quot;/&gt;
        &lt;ProgressBar Value=&quot;20&quot; Height=&quot;20&quot; Margin=&quot;0 5&quot;/&gt;
    &lt;/ItemsControl&gt;
&lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="image-20250224124431148" tabindex="0" loading="lazy"><figcaption>image-20250224124431148</figcaption></figure><p>首先，我们在XMAL中实例化了一个ItemsControl控件，然后在ItemsControl里面实例化了一系列子控件，它们分别是Button、Border、TextBlock、ItemsControl、CheckBox、StackPanel、RadioButton、字符串、Label、Control和ProgressBar。</p><p>除了Control没有显示出来，其它全部都呈现在ItemsControl控件之中，因为这些子控件全部都在ItemsControl类的Items集合里面，那么，Control虽然能实例化，为什么没有显示出来呢？就连没有控件的字符串都能显示出来，这里面肯定有原因。</p><p>是的，这里我们引出一个知识点，那就是控件模板，因为**Control基类虽然有Background属性，但是我们并没有给Control基类的Template属性设置一个控件模板，所以Control能实例化，但是不能显示。**只能看到一个高度为30的空白区域。</p><p>而Border在设置Background属性后，为什么能显示？因为Border是一个装饰器，它继承于Decorator基类。</p><p>为什么单纯的字符串也能显示呢？因为实际上这个字符串外面被包裹了一层ContentPresenter实例，这个字符串是被赋值到了ContentPresenter的Content属性上，而ContentPresenter的ContentTemplate有一个默认模板。</p><h2 id="_2-selector基类" tabindex="-1"><a class="header-anchor" href="#_2-selector基类" aria-hidden="true">#</a> 2.Selector基类</h2><p>Selector继承于ItemsControl，但它是一个抽象类，所以不能被实例化。从命名上看，它是一个选择器。</p><h3 id="selector类的属性" tabindex="-1"><a class="header-anchor" href="#selector类的属性" aria-hidden="true">#</a> Selector类的属性</h3><table><thead><tr><th>属性名称</th><th>说明</th></tr></thead><tbody><tr><td>SelectedValue</td><td>获取或设置SelectedValuePath属性指定的元素的属性值</td></tr><tr><td>SelectedItem</td><td>获取或设置当前所选内容中的第一项或如果所选内容为空则返回 null</td></tr><tr><td>SelectedIndex</td><td>获取或设置当前所选内容或返回的第一项的索引为负一 (-1) 如果所选内容为空。</td></tr><tr><td>SelectedValuePath</td><td>获取或设置SelectedItem当前元素的某个属性名，这个元素属性名将决定SelectedValue的值</td></tr><tr><td>IsSynchronizedWithCurrentItem</td><td>是否同步当前项。</td></tr></tbody></table><p>SelectedItem和SelectedValue有点类似，都是object类型。但是，他们俩不一定指同一个内容。比如，我们将有这样一个数据实体类。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class Person
{
    public string Name { get; set; }
    public string Address { get; set; }
    public int Age { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们实例化多个Person组成一个集合绑定到Items属性中，这个时候选中某一个元素，SelectedItem便等于这个Person元素，但是SelectedValue是什么，要看SelectedValuePath的值，如果SelectedValuePath的值指向的是Person.Name，那么SelectedValue就是一个字符串，如果SelectedValuePath指向的是Person的Age ，那么SelectedValue就是一个int整数，**只有*<em>不设置*<em>SelectedValuePath时，SelectedValue和SelectedItem两者才相等，即Person实例</em></em>。</p><h2 id="_3-listbox列表控件" tabindex="-1"><a class="header-anchor" href="#_3-listbox列表控件" aria-hidden="true">#</a> 3.ListBox列表控件</h2><p>ListBox是一个列表控件，用于显示条目类的数据，默认每行只能显示一个内容项，当然，我们可以通过修改它的数据模板，来自定义每一行（元素）的数据外观，达到显示更多数据的目的。</p><p><strong>属性分析</strong></p><p>ListBox自身的属性比较少，SelectionMode 属性比较重要，它可以决定当前的ListBox控件是单选还是多选，它的值为Extended时，表示用户需要按下shift键才能多选。如果SelectionMode为多选状态，那么多选的结果保存在哪去了？</p><p>答案是SelectedItems 属性。</p><p>另外，ListBox还自带了滚动条，如果内容超出显示区域，这时滚动条便起作用。</p><p>我们在上一章节提过DisplayMemberPath、SelectedValuePath、SelectedItem和SelectedValue，</p><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><p>后端</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class person
{
    public string name { get; set; }
    public int age { get; set; }
    public string address { get; set; }
}
/// &lt;summary&gt;
/// MainWindow.xaml 的交互逻辑
/// &lt;/summary&gt;
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        listBox.ItemsSource = new List&lt;person&gt;
        {
            new person { name = &quot;张三&quot;, age = 20, address = &quot;北京&quot; },
            new person { name = &quot;李四&quot;, age = 21, address = &quot;上海&quot; },
            new person { name = &quot;王五&quot;, age = 22, address = &quot;广州&quot; },
            new person { name = &quot;赵六&quot;, age = 23, address = &quot;深圳&quot; },
            new person { name = &quot;孙七&quot;, age = 24, address = &quot;杭州&quot; }
        };

    }

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        var selectItem = listBox.SelectedItem;
        var selectValue = listBox.SelectedValue;
        textBlock.Text = $&quot;{selectItem}, {selectValue}&quot;;

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>&lt;StackPanel Orientation=&quot;Vertical&quot;&gt;
    &lt;ListBox x:Name=&quot;listBox&quot; MaxHeight=&quot;200&quot; DisplayMemberPath=&quot;name&quot; SelectedValuePath=&quot;age&quot;/&gt;
    &lt;Button Content=&quot;结果&quot; Click=&quot;Button_Click&quot;/&gt;
    &lt;TextBlock x:Name=&quot;textBlock&quot;/&gt;
&lt;/StackPanel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="image-20250224133221400" tabindex="0" loading="lazy"><figcaption>image-20250224133221400</figcaption></figure><h3 id="listboxitem子项" tabindex="-1"><a class="header-anchor" href="#listboxitem子项" aria-hidden="true">#</a> <strong>ListBoxItem子项</strong></h3><p>其实，ListBox还有它专门配合业务开发的子项控件——ListBoxItem。ListBoxItem继承于ContentControl内容控件，仔细想，这意味着什么？还记得我们在分享ContentControl提过”它有一个叫Content属性“一嘴吗？Content属性可以容纳任意引用类型，也就是说，ListBoxItem也可以容纳任意引用类型，也就是说，ListBox的子项也可以容纳任意的引用类型。</p><h2 id="_4-listview数据列表控件" tabindex="-1"><a class="header-anchor" href="#_4-listview数据列表控件" aria-hidden="true">#</a> 4.ListView数据列表控件</h2><p>ListView继承于ListBox，在ListBox控件的基础上增加了数据视图。从而让我们可以很轻松的设置每一列的标题，以显示某个数据表结构及内容。</p><p>ListView类增加了一个叫View的属性，这个属性用来定义控件的数据样式，决定数据怎样显示。View属性的类型是ViewBase，但是，我们真正在使用View属性时，实际上实例化的是GridView类，因为GridView类是ViewBase的子类。所以，我们要看了解一下GridView的定义。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class GridView : ViewBase, IAddChild
{
    public static readonly DependencyProperty ColumnCollectionProperty;
    public static readonly DependencyProperty ColumnHeaderContainerStyleProperty;
    public static readonly DependencyProperty ColumnHeaderTemplateProperty;
    public static readonly DependencyProperty ColumnHeaderTemplateSelectorProperty;
    public static readonly DependencyProperty ColumnHeaderStringFormatProperty;
    public static readonly DependencyProperty AllowsColumnReorderProperty;
    public static readonly DependencyProperty ColumnHeaderContextMenuProperty;
    public static readonly DependencyProperty ColumnHeaderToolTipProperty;
 
    public GridView();
 
    public static ResourceKey GridViewItemContainerStyleKey { get; }
    public static ResourceKey GridViewStyleKey { get; }
    public static ResourceKey GridViewScrollViewerStyleKey { get; }
    public string ColumnHeaderStringFormat { get; set; }
    public DataTemplateSelector ColumnHeaderTemplateSelector { get; set; }
    public DataTemplate ColumnHeaderTemplate { get; set; }
    public Style ColumnHeaderContainerStyle { get; set; }
    public GridViewColumnCollection Columns { get; }
    public object ColumnHeaderToolTip { get; set; }
    public bool AllowsColumnReorder { get; set; }
    public ContextMenu ColumnHeaderContextMenu { get; set; }
    protected internal override object ItemContainerDefaultStyleKey { get; }
    protected internal override object DefaultStyleKey { get; }
 
    public static GridViewColumnCollection GetColumnCollection(DependencyObject element);
    public static void SetColumnCollection(DependencyObject element, GridViewColumnCollection collection);
    public static bool ShouldSerializeColumnCollection(DependencyObject obj);
    public override string ToString();
    protected virtual void AddChild(object column);
    protected virtual void AddText(string text);
    protected internal override void ClearItem(ListViewItem item);
    protected internal override IViewAutomationPeer GetAutomationPeer(ListView parent);
    protected internal override void PrepareItem(ListViewItem item);
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GridView提供了一些可供设置的模板和样式属性，这些我们先放一边，在WPF基础章节的内容学习中，我们先学习它的Columns 属性，它是一个集合属性，而集合中元素的类型是GridViewColumn。</p><p>GridViewColumn最关键的只有两个属性，分别是标题和要显示的成员（指向了Person实体的某个属性名）。</p><h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    class person
    {
        public string name { get; set; }
        public int age { get; set; }
        public string address { get; set; }
    }
    /// &lt;summary&gt;
    /// MainWindow.xaml 的交互逻辑
    /// &lt;/summary&gt;
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            listBox.ItemsSource = new List&lt;person&gt;
            {
                new person { name = &quot;张三&quot;, age = 20, address = &quot;北京&quot; },
                new person { name = &quot;李四&quot;, age = 21, address = &quot;上海&quot; },
                new person { name = &quot;王五&quot;, age = 22, address = &quot;广州&quot; },
                new person { name = &quot;赵六&quot;, age = 23, address = &quot;深圳&quot; },
                new person { name = &quot;孙七&quot;, age = 24, address = &quot;杭州&quot; }
            };

        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
         
        }

        private void listBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (listBox == null) return;
            if (listBox.SelectedItem == null) return;
            
            var selectItem = listBox.SelectedItem;
            _name.Text = (selectItem as person).name;
            _age.Text = (selectItem as person).age.ToString();
            _address.Text = (selectItem as person).address;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Grid&gt;
    &lt;Grid.ColumnDefinitions&gt;
        &lt;ColumnDefinition Width=&quot;*&quot;/&gt;
        &lt;ColumnDefinition Width=&quot;*&quot;/&gt;
    &lt;/Grid.ColumnDefinitions&gt;
    &lt;ListView Grid.Column=&quot;0&quot; x:Name=&quot;listBox&quot; MaxHeight=&quot;200&quot; SelectionChanged=&quot;listBox_SelectionChanged&quot;&gt;
        &lt;ListView.View&gt;
            &lt;GridView&gt;
                &lt;GridViewColumn Header=&quot;姓名&quot; DisplayMemberBinding=&quot;{Binding name}&quot;/&gt;
                &lt;GridViewColumn Header=&quot;年龄&quot; DisplayMemberBinding=&quot;{Binding age}&quot;/&gt;
                &lt;GridViewColumn Header=&quot;地址&quot; DisplayMemberBinding=&quot;{Binding address}&quot;/&gt;
            &lt;/GridView&gt;
        &lt;/ListView.View&gt;
    &lt;/ListView&gt;
    &lt;StackPanel Grid.Column=&quot;1&quot; Orientation=&quot;Vertical&quot;&gt;
        &lt;StackPanel Orientation=&quot;Horizontal&quot;&gt;
            &lt;TextBlock Text=&quot;姓名 :&quot; Margin=&quot;10&quot;/&gt;
            &lt;TextBlock x:Name=&quot;_name&quot;  Margin=&quot;10&quot;/&gt;
        &lt;/StackPanel&gt;
        &lt;StackPanel Orientation=&quot;Horizontal&quot;&gt;
            &lt;TextBlock Text=&quot;年龄 :&quot; Margin=&quot;10&quot;/&gt;
            &lt;TextBlock x:Name=&quot;_age&quot;  Margin=&quot;10&quot;/&gt;
        &lt;/StackPanel&gt;
        &lt;StackPanel Orientation=&quot;Horizontal&quot;&gt;
            &lt;TextBlock Text=&quot;地址 :&quot; Margin=&quot;10&quot;/&gt;
            &lt;TextBlock x:Name=&quot;_address&quot;  Margin=&quot;10&quot;/&gt;
        &lt;/StackPanel&gt;
        &lt;Button Content=&quot;结果&quot; Click=&quot;Button_Click&quot; Margin=&quot;20&quot; Width=&quot;200&quot; Height=&quot;50&quot; FontSize=&quot;20&quot;/&gt;
        
    &lt;/StackPanel&gt;
&lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="image-20250224135735218" tabindex="0" loading="lazy"><figcaption>image-20250224135735218</figcaption></figure><p>事件处理</p><p>在ListView控件的SelectionChanged事件中，我们先将sender转成ListView ，再从中获取当前选中项（即person），最后显示详细信息在界面上即可。这样就演示了数据怎么加载显示到ListView，又怎么样从ListView上获取的过程。</p><p>而类似于ListView的效果效果，还有一个专门用来显示数据的控件，它叫DataGrid，从某种意义上来说，它甚至可以开发类似Excel表格的效果。</p><h2 id="_5-datagrid数据表格控件" tabindex="-1"><a class="header-anchor" href="#_5-datagrid数据表格控件" aria-hidden="true">#</a> 5.DataGrid数据表格控件</h2><p>DataGrid是一个可以多选的数据表格控件。所以，它继承一个支持多选的父类——MultiSelector。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public abstract class MultiSelector : Selector
{
    protected MultiSelector();
 
    public IList SelectedItems { get; }
    protected bool CanSelectMultipleItems { get; set; }
    protected bool IsUpdatingSelectedItems { get; }
 
    public void SelectAll();
    public void UnselectAll();
    protected void BeginUpdateSelectedItems();
    protected void EndUpdateSelectedItems();
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的定义来看，DataGrid多选的结果会保存在SelectedItems 只读属性中，CanSelectMultipleItems 属性用来设置是否开启多选。</p><p>事件成员</p><p>DataGrid一共有23个事件成员，它们分别如下所示</p><table><thead><tr><th>事件名称</th><th>说明</th></tr></thead><tbody><tr><td>Sorting</td><td>对列进行排序时发生。</td></tr><tr><td>AutoGeneratedColumns</td><td>所有列的自动生成完成后发生。</td></tr><tr><td>AutoGeneratingColumn</td><td>自动生成单独的列时出现。</td></tr><tr><td>ColumnHeaderDragDelta</td><td>每次鼠标位置发生更改时在用户拖动列标题时发生。</td></tr><tr><td>ColumnHeaderDragStarted</td><td>当用户开始使用鼠标拖动列标题时发生。</td></tr><tr><td>ColumnHeaderDragCompleted</td><td>当用户使用鼠标拖动后释放列标题时发生。</td></tr><tr><td>SelectedCellsChanged</td><td>发生时 DataGrid.SelectedCells 集合更改。</td></tr><tr><td>ColumnReordering</td><td>在列移至的显示顺序中的新位置之前发生。</td></tr><tr><td>RowDetailsVisibilityChanged</td><td>当某一行的可见性详细信息元素更改时发生。</td></tr><tr><td>UnloadingRow</td><td>发生时 DataGridRow 对象将成为可供重用。</td></tr><tr><td>LoadingRowDetails</td><td>新的行的详细信息模板应用于行时发生。</td></tr><tr><td>InitializingNewItem</td><td>创建一个新项时出现。</td></tr><tr><td>PreparingCellForEdit</td><td>在单元格进入编辑模式时发生。</td></tr><tr><td>BeginningEdit</td><td>发生行或单元格进入编辑模式之前。</td></tr><tr><td>CurrentCellChanged</td><td>在 DataGrid.CurrentCell 属性的值更改后发生。</td></tr><tr><td>CellEditEnding</td><td>在单元格的编辑将在提交或取消前发生。</td></tr><tr><td>RowEditEnding</td><td>在提交或取消行编辑之前发生。</td></tr><tr><td>LoadingRow</td><td>加载row时</td></tr><tr><td>ColumnDisplayIndexChanged</td><td>其中一个列更改属性时</td></tr><tr><td>UnloadingRowDetails</td><td>行详细信息元素成为可供重用时发生。</td></tr><tr><td>AddingNewItem</td><td>新项添加到DataGrid之前发生</td></tr><tr><td>CopyingRowClipboardContent</td><td>默认行内容准备好之后发生。</td></tr><tr><td>ColumnReordered</td><td>在列移至的显示顺序中的新位置时发生。</td></tr></tbody></table><h3 id="datagrid属性" tabindex="-1"><a class="header-anchor" href="#datagrid属性" aria-hidden="true">#</a> DataGrid属性</h3><p>属性分析</p><p>DataGrid提供了大量的依赖属性，合理充分利用这些属性，在开发ERP、CMS、报表等软件时可达到事半功倍的效果。下面我们以表格的形式，先了解一下各属性的功能，然后在本节中学习一些基础属性，以掌握该控件的基本用法，剩下的属性放到模板样式的章节中学习。</p><table><thead><tr><th>属性名称</th><th>说明</th><th>备注</th></tr></thead><tbody><tr><td>FocusBorderBrushKey</td><td>获取引用焦点的单元格的默认边框画笔的键。</td><td></td></tr><tr><td>SelectAllCommand</td><td>表示指示想要选择的所有单元格的命令</td><td></td></tr><tr><td>HeadersVisibilityConverter</td><td>获取标题显示隐藏的转换器，即HeadersVisibility属性的转换器</td><td></td></tr><tr><td>RowDetailsScrollingConverter</td><td>获取将转换为一个布尔值转换器</td><td></td></tr><tr><td>DeleteCommand</td><td>表示指示想要删除当前行的命令。</td><td></td></tr><tr><td>RowHeaderTemplate</td><td>获取或设置行标题的模板。</td><td>重要</td></tr><tr><td>RowHeaderTemplateSelector</td><td>获取或设置行标题的模板选择器。</td><td></td></tr><tr><td>VerticalScrollBarVisibility</td><td>是否显示垂直滚动条</td><td></td></tr><tr><td>HorizontalScrollBarVisibility</td><td>是否显示水平滚动条</td><td></td></tr><tr><td>CanUserAddRows</td><td>是否可以添加新行</td><td>重要</td></tr><tr><td>CurrentItem</td><td>当前选中行（一般指绑定的数据源的某一个元素）</td><td>常用</td></tr><tr><td>CurrentColumn</td><td>获取或设置包含当前单元格的列。</td><td></td></tr><tr><td>CurrentCell</td><td>获取或设置具有焦点的单元格。</td><td></td></tr><tr><td>CanUserDeleteRows</td><td>是否可以删除行</td><td>重要</td></tr><tr><td>RowHeaderStyle</td><td>获取或设置应用于所有行标题的样式。</td><td>重要</td></tr><tr><td>RowDetailsVisibilityMode</td><td>获取或设置一个值，该值指示何时显示某行的详细信息部分。</td><td></td></tr><tr><td>IsReadOnly</td><td>当前控件是否只读</td><td>常用</td></tr><tr><td>ColumnHeaderStyle</td><td>获取或设置所有列标题的样式</td><td>重要</td></tr><tr><td>RowStyle</td><td>获取或设置应用到的所有行的样式。</td><td>重要</td></tr><tr><td>HeadersVisibility</td><td>获取或设置用于指定行和列标题的可见性的值。</td><td></td></tr><tr><td>AreRowDetailsFrozen</td><td>获取或设置一个值，该值指示是否可水平滚动行详细信息。</td><td></td></tr><tr><td>AlternatingRowBackground</td><td>获取或设置交替行上使用的背景画笔。</td><td>重要</td></tr><tr><td>RowBackground</td><td>获取或设置用于行背景的默认画笔。</td><td></td></tr><tr><td>RowStyleSelector</td><td>获取或设置行的样式选择器。</td><td></td></tr><tr><td>RowValidationRules</td><td>获取用于验证每个行中的数据的规则。</td><td></td></tr><tr><td>RowValidationErrorTemplate</td><td>获取或设置用于以可视方式指示行验证中的错误的模板。</td><td></td></tr><tr><td>VerticalGridLinesBrush</td><td>获取或设置用于绘制垂直网格线的画笔。</td><td>常用</td></tr><tr><td>HorizontalGridLinesBrush</td><td>获取或设置用于绘制水平网格线的画笔。</td><td></td></tr><tr><td>GridLinesVisibility</td><td>获取或设置一个值，该值指示显示哪些网格线。</td><td></td></tr><tr><td>MaxColumnWidth</td><td>获取或设置列和标头中的最大宽度约束</td><td></td></tr><tr><td>MinColumnWidth</td><td>获取或设置列和标头中的最小宽度约束</td><td></td></tr><tr><td>ColumnWidth</td><td>获取或设置标准宽度和列和中的标头的大小调整模式</td><td></td></tr><tr><td>CanUserResizeColumns</td><td>获取或设置用户是否可以通过使用鼠标调整列的宽度。</td><td></td></tr><tr><td>Columns</td><td>获取一个集合中的所有列</td><td>常用</td></tr><tr><td>RowHeaderWidth</td><td>获取或设置行标题列的宽度。</td><td></td></tr><tr><td>RowHeaderActualWidth</td><td>获取呈现的行标题列的宽度。</td><td></td></tr><tr><td>ColumnHeaderHeight</td><td>获取或设置列标题行的高度。</td><td></td></tr><tr><td>CellStyle</td><td>获取或设置所有单元格的样式</td><td>常用</td></tr><tr><td>RowDetailsTemplate</td><td>获取或设置用于显示行详细信息的模板。</td><td></td></tr><tr><td>MinRowHeight</td><td>获取或设置行和中的标头的最小高度约束</td><td></td></tr><tr><td>CanUserResizeRows</td><td>获取或设置用户是否可以通过使用鼠标调整行的高度。</td><td></td></tr><tr><td>RowHeight</td><td>获取或设置的所有行的建议的高度。</td><td></td></tr><tr><td>RowDetailsTemplateSelector</td><td>获取或设置用于行详细信息的模板选择器。</td><td></td></tr><tr><td>CellsPanelHorizontalOffset</td><td>获取DataGridCellsPanel的水平偏移量</td><td></td></tr><tr><td>ClipboardCopyMode</td><td>获取或设置一个值，指示如何将内容复制到剪贴板。</td><td></td></tr><tr><td>NonFrozenColumns ViewportHorizontalOffset</td><td>获取在视区的可滚动列的水平偏移量。</td><td></td></tr><tr><td>FrozenColumnCount</td><td>获取或设置非滚动列的数量。</td><td>常用</td></tr><tr><td>AutoGenerateColumns</td><td>获取或设置一个值，该值指示是否自动创建列。</td><td>常用</td></tr><tr><td>NewItemMargin</td><td>获取或设置新的项目行的边距。</td><td></td></tr><tr><td>CanUserSortColumns</td><td>是否可以单击列标题来对列排序。</td><td>常用</td></tr><tr><td>SelectionUnit</td><td>选择行的模式</td><td></td></tr><tr><td>SelectionMode</td><td>是否支持多选</td><td>重要</td></tr><tr><td>SelectedCells</td><td>获取当前选定的单元格的列表。</td><td></td></tr><tr><td>HandlesScrolling</td><td>是否支持自定义键盘滚动。</td><td></td></tr></tbody></table><p>在上述表格中，Columns属性是DataGrid最基本的一个属性。它是一个ObservableCollection&lt;DataGridColumn&gt;类型的集合，表示DataGrid的列的集合。其实DataGridColumn只是一个抽象基类，我们真正在实例化时，是实例化DataGridColumn的子类，然后放到Columns属性中。</p><p>那么DataGridColumn有哪些子类呢？</p><ul><li>DataGridTextColumn 表示文本内容的列</li><li>DataGridCheckBoxColumn 表示复选框的列</li><li>DataGridComboBoxColumn 表示下拉框的列</li><li>DataGridTemplateColumn 表示模板的列（万金油）</li></ul><p>在本列中，我们将以最简单的DataGridTextColumn 为例。</p><h3 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例</h3><p>后端同ListView</p><p>前端</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Grid&gt;
    &lt;Grid.ColumnDefinitions&gt;
        &lt;ColumnDefinition Width=&quot;*&quot;/&gt;
        &lt;ColumnDefinition Width=&quot;*&quot;/&gt;
    &lt;/Grid.ColumnDefinitions&gt;
    &lt;DataGrid Grid.Column=&quot;0&quot; x:Name=&quot;listBox&quot; SelectionChanged=&quot;listBox_SelectionChanged&quot; IsReadOnly=&quot;True&quot; CanUserAddRows=&quot;False&quot; Margin=&quot;10&quot;
              AutoGenerateColumns=&quot;False&quot;&gt;
        &lt;DataGrid.Columns&gt;
            &lt;DataGridTextColumn Header=&quot;姓名&quot; Binding=&quot;{Binding name}&quot; Width=&quot;50&quot;/&gt;
            &lt;DataGridTextColumn Header=&quot;年龄&quot; Binding=&quot;{Binding age}&quot; Width=&quot;50&quot;/&gt;
            &lt;DataGridTextColumn Header=&quot;地址&quot; Binding=&quot;{Binding address}&quot; Width=&quot;auto&quot;/&gt;
        &lt;/DataGrid.Columns&gt;    
    &lt;/DataGrid&gt;
    &lt;StackPanel Grid.Column=&quot;1&quot; Orientation=&quot;Vertical&quot;&gt;
        &lt;StackPanel Orientation=&quot;Horizontal&quot;&gt;
            &lt;TextBlock Text=&quot;姓名 :&quot; Margin=&quot;10&quot;/&gt;
            &lt;TextBlock x:Name=&quot;_name&quot;  Margin=&quot;10&quot;/&gt;
        &lt;/StackPanel&gt;
        &lt;StackPanel Orientation=&quot;Horizontal&quot;&gt;
            &lt;TextBlock Text=&quot;年龄 :&quot; Margin=&quot;10&quot;/&gt;
            &lt;TextBlock x:Name=&quot;_age&quot;  Margin=&quot;10&quot;/&gt;
        &lt;/StackPanel&gt;
        &lt;StackPanel Orientation=&quot;Horizontal&quot;&gt;
            &lt;TextBlock Text=&quot;地址 :&quot; Margin=&quot;10&quot;/&gt;
            &lt;TextBlock x:Name=&quot;_address&quot;  Margin=&quot;10&quot;/&gt;
        &lt;/StackPanel&gt;
        &lt;Button Content=&quot;结果&quot; Click=&quot;Button_Click&quot; Margin=&quot;20&quot; Width=&quot;200&quot; Height=&quot;50&quot; FontSize=&quot;20&quot;/&gt;
        
    &lt;/StackPanel&gt;
&lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="image-20250224141606011" tabindex="0" loading="lazy"><figcaption>image-20250224141606011</figcaption></figure><p><strong>我们将DataGrid的IsReadOnly=&quot;True&quot;，这是因为我们直接将数据元素一条一条的加入到DataGrid的Items属性中，而Items属性本身是一个只读属性，不支持写入。</strong></p><p><strong>这就要用到ItemsControl基类中的ItemsSource数据源属性。</strong></p><p><strong>我们需要采用DataGrid另外一种赋值方式——数据源赋值。即把一个集合绑定到该属性上，这样在前端就可以编辑数据源，从而不会引发报错。</strong></p><h2 id="_6-combobox下拉框控件" tabindex="-1"><a class="header-anchor" href="#_6-combobox下拉框控件" aria-hidden="true">#</a> 6.ComboBox下拉框控件</h2><p>ComboBox表示带有下拉列表的控件，实际上您可以把它看成两个部分组成，一个类似TextBox文本输入框，所以它有一个Text文本属性，用于获取ComboBox框的文本值，另一个是类似ListBox的列表框，用于显示ComboBox绑定的所有数据源。</p><p>ComboBox继承于Selector，所以，它只能是单选操作。由于这个控件由两个部分构成，所以在用法上，我们也可以有两种主要用法——类似TextBox用法和类似ListBox用法。</p><p>属性成员</p><table><thead><tr><th>属性名称</th><th>说明</th></tr></thead><tbody><tr><td>ShouldPreserveUserEnteredPrefix</td><td>是否保留用户的输入，或者输入替换匹配项。</td></tr><tr><td>IsEditable</td><td>是否启用或禁用编辑文本框中文本</td></tr><tr><td>Text</td><td>获取或设置当前选定项的文本。</td></tr><tr><td>IsReadOnly</td><td>文本内容是否只读</td></tr><tr><td>SelectionBoxItem</td><td>获取在选择框中显示的项。</td></tr><tr><td>MaxDropDownHeight</td><td>获取或设置一个组合框下拉列表的最大高度。</td></tr><tr><td>SelectionBoxItemStringFormat</td><td>指定选择框中文本的显示格式</td></tr><tr><td>StaysOpenOnEdit</td><td>在编辑输入框文本时，希望下拉框保持打开，则为true</td></tr><tr><td>IsSelectionBoxHighlighted</td><td>是否突出显示SelectionBoxItem</td></tr><tr><td>IsDropDownOpen</td><td>是否打开组合框下拉列表。</td></tr><tr><td>SelectionBoxItemTemplate</td><td>获取选择框内容的项模板。</td></tr></tbody></table><h3 id="combobox示例" tabindex="-1"><a class="header-anchor" href="#combobox示例" aria-hidden="true">#</a> ComboBox示例</h3><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class person
{
    public string name { get; set; }
    public int age { get; set; }
    public string address { get; set; }
}
/// &lt;summary&gt;
/// MainWindow.xaml 的交互逻辑
/// &lt;/summary&gt;
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        comboxBox2.ItemsSource = new List&lt;person&gt;
        {
            new person { name = &quot;张三&quot;, age = 20, address = &quot;北京&quot; },
            new person { name = &quot;李四&quot;, age = 21, address = &quot;上海&quot; },
            new person { name = &quot;王五&quot;, age = 22, address = &quot;广州&quot; },
            new person { name = &quot;赵六&quot;, age = 23, address = &quot;深圳&quot; },
            new person { name = &quot;孙七&quot;, age = 24, address = &quot;杭州&quot; }
        };

    }

    private void comboxBox1_TextChanged(object sender, TextChangedEventArgs e)
    {

    }

    private void comboxBox2_TextChanged(object sender, TextChangedEventArgs e)
    {
        if (comboxBox2 == null) return;
        if (comboxBox2.SelectedItem == null) return;

        var selectItem = comboxBox2.SelectedItem;
        _name.Text = (selectItem as person).name;
        _age.Text = (selectItem as person).age.ToString();
        _address.Text = (selectItem as person).address;
    }

    private void Button_Click(object sender, RoutedEventArgs e)
    {

    }

    private void comboxBox2_SelectionChanged(object sender, SelectionChangedEventArgs e)
    {
        if (sender == null) return;
        var combox = sender as ComboBox;
        if (combox.SelectedItem == null) return;

        var selectItem = combox.SelectedItem;
        _name.Text = (selectItem as person).name;
        _age.Text = (selectItem as person).age.ToString();
        _address.Text = (selectItem as person).address;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Grid&gt;
    &lt;Grid.ColumnDefinitions&gt;
        &lt;ColumnDefinition Width=&quot;*&quot;/&gt;
        &lt;ColumnDefinition Width=&quot;*&quot;/&gt;
    &lt;/Grid.ColumnDefinitions&gt;
    &lt;StackPanel Grid.Column=&quot;0&quot; VerticalAlignment=&quot;Center&quot;&gt;
        &lt;ComboBox x:Name=&quot;comboxBox1&quot; IsEditable=&quot;True&quot; Height=&quot;30&quot; Margin=&quot;30 50&quot;
                  TextBoxBase.TextChanged=&quot;comboxBox1_TextChanged&quot;/&gt;
        &lt;ComboBox x:Name=&quot;comboxBox2&quot; IsEditable=&quot;False&quot; Height=&quot;30&quot; Margin=&quot;30 50&quot;
                  VerticalAlignment=&quot;Top&quot; DisplayMemberPath=&quot;name&quot;
                  SelectionChanged=&quot;comboxBox2_SelectionChanged&quot;/&gt;
    &lt;/StackPanel&gt;
    &lt;StackPanel Grid.Column=&quot;1&quot; Orientation=&quot;Vertical&quot;&gt;
        &lt;StackPanel Orientation=&quot;Horizontal&quot;&gt;
            &lt;TextBlock Text=&quot;姓名 :&quot; Margin=&quot;10&quot;/&gt;
            &lt;TextBlock x:Name=&quot;_name&quot;  Margin=&quot;10&quot;/&gt;
        &lt;/StackPanel&gt;
        &lt;StackPanel Orientation=&quot;Horizontal&quot;&gt;
            &lt;TextBlock Text=&quot;年龄 :&quot; Margin=&quot;10&quot;/&gt;
            &lt;TextBlock x:Name=&quot;_age&quot;  Margin=&quot;10&quot;/&gt;
        &lt;/StackPanel&gt;
        &lt;StackPanel Orientation=&quot;Horizontal&quot;&gt;
            &lt;TextBlock Text=&quot;地址 :&quot; Margin=&quot;10&quot;/&gt;
            &lt;TextBlock x:Name=&quot;_address&quot;  Margin=&quot;10&quot;/&gt;
        &lt;/StackPanel&gt;
        &lt;Button Content=&quot;结果&quot; Click=&quot;Button_Click&quot; Margin=&quot;20&quot; Width=&quot;200&quot; Height=&quot;50&quot; FontSize=&quot;20&quot;/&gt;
        
    &lt;/StackPanel&gt;
&lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+'" alt="image-20250224165253318" tabindex="0" loading="lazy"><figcaption>image-20250224165253318</figcaption></figure><h2 id="_7-tabcontrol控件" tabindex="-1"><a class="header-anchor" href="#_7-tabcontrol控件" aria-hidden="true">#</a> 7.TabControl控件</h2><p>TabControl表示包含多个共享相同的空间在屏幕上的项的控件。它也是继承于Selector基类，所以TabControl也只支持单选操作。另外，TabControl的元素只能是TabItem，这个TabItem继承于HeaderedContentControl类，所以TabControl的元素实际上是一个带标题的ContentControl内容控件。</p>',110)),n("p",null,[e[2]||(e[2]=t("我们曾经在聊")),n("a",w,[e[0]||(e[0]=t("GroupBox控件")),l(i)]),e[3]||(e[3]=t("和")),n("a",I,[e[1]||(e[1]=t("Expander折叠控件")),l(i)]),e[4]||(e[4]=t("时都曾提到过这个HeaderedContentControl类，原来大家都用了这个带标题的内容控件。所以TabControl控件看起来就像是多个GroupBox组合而来。"))]),e[6]||(e[6]=d(`<p>属性成员</p><table><thead><tr><th>属性名称</th><th>说明</th></tr></thead><tbody><tr><td>ContentTemplate</td><td>表示TabItem元素的内容模板</td></tr><tr><td>SelectedContentStringFormat</td><td>当前所选内容的格式</td></tr><tr><td>SelectedContentTemplateSelector</td><td>获取当前选定的TabItem项的模板选择器</td></tr><tr><td>SelectedContentTemplate</td><td>当前选定的TabItem项的模板</td></tr><tr><td>SelectedContent</td><td>当前选定的TabItem项里面的内容（也是一些控件）</td></tr><tr><td>TabStripPlacement</td><td>获取或设置选项卡标题相对于选项卡上内容的对齐方式。</td></tr><tr><td>ContentStringFormat</td><td>指定如何设置内容的格式</td></tr><tr><td>ContentTemplateSelector</td><td>获取或设置内容模板选择器</td></tr></tbody></table><p>TabControl的SelectedContent可能是我们比较常用的一个属性，事实上，TabControl通常被当成布局控件来使用。</p><h3 id="tabcontrol示例" tabindex="-1"><a class="header-anchor" href="#tabcontrol示例" aria-hidden="true">#</a> TabControl示例</h3><p>前端代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Window x:Class=&quot;HelloWorld.MainWindow&quot;
        xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
        xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
        xmlns:d=&quot;http://schemas.microsoft.com/expression/blend/2008&quot;
        xmlns:mc=&quot;http://schemas.openxmlformats.org/markup-compatibility/2006&quot;
        xmlns:local=&quot;clr-namespace:HelloWorld&quot; 
        xmlns:forms=&quot;clr-namespace:System.Windows.Forms;assembly=System.Windows.Forms&quot;
        mc:Ignorable=&quot;d&quot; FontSize=&quot;14&quot;
        Title=&quot;WPF中文网之控件课程 - www.wpfsoft.com&quot; Height=&quot;350&quot; Width=&quot;500&quot;&gt;
    &lt;Grid&gt;
        &lt;Grid.RowDefinitions&gt;
            &lt;RowDefinition/&gt;
            &lt;RowDefinition Height=&quot;50&quot;/&gt;
        &lt;/Grid.RowDefinitions&gt;
        &lt;TabControl x:Name=&quot;_tabControl&quot; Grid.Row=&quot;0&quot; SelectionChanged=&quot;_tabControl_SelectionChanged&quot;&gt;
            &lt;TabItem Header=&quot;首页&quot;&gt;
                &lt;Border Background=&quot;LightBlue&quot;&gt;
                    &lt;TextBlock Text=&quot;首页的界面&quot; FontSize=&quot;24&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;/&gt;
                &lt;/Border&gt;
            &lt;/TabItem&gt;
            &lt;TabItem Header=&quot;WPF目录&quot;&gt;
                &lt;Border Background=&quot;LightCoral&quot;&gt;
                    &lt;TextBlock Text=&quot;WPF目录的界面&quot; FontSize=&quot;24&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;/&gt;
                &lt;/Border&gt;
            &lt;/TabItem&gt;
            &lt;TabItem Header=&quot;官方文档&quot;&gt;
                &lt;Border Background=&quot;LightCyan&quot;&gt;
                    &lt;TextBlock Text=&quot;官方文档的界面&quot; FontSize=&quot;24&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;/&gt;
                &lt;/Border&gt;
            &lt;/TabItem&gt;
            &lt;TabItem Header=&quot;付费课程&quot;&gt;
                &lt;Border Background=&quot;LightGoldenrodYellow&quot;&gt;
                    &lt;TextBlock Text=&quot;付费课程的界面&quot; FontSize=&quot;24&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;/&gt;
                &lt;/Border&gt;
            &lt;/TabItem&gt;
            &lt;TabItem Header=&quot;统计&quot;&gt;
                &lt;Border Background=&quot;LightGreen&quot;&gt;
                    &lt;TextBlock Text=&quot;统计的界面&quot; FontSize=&quot;24&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;/&gt;
                &lt;/Border&gt;
            &lt;/TabItem&gt;
        &lt;/TabControl&gt;
        &lt;TextBlock x:Name=&quot;_textBlock&quot; TextWrapping=&quot;Wrap&quot; Grid.Row=&quot;1&quot;/&gt;
    &lt;/Grid&gt;
&lt;/Window&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public partial class MainWindow : Window
{        
    public MainWindow()
    {
        InitializeComponent(); 
    }
 
    private void _tabControl_SelectionChanged(object sender, SelectionChangedEventArgs e)
    {
        var tab = sender as TabControl;
        var item = tab.SelectedItem as TabItem;
        var content = tab.SelectedContent;
        _textBlock.Text = &quot;标题:&quot; + item.Header.ToString() + &quot; 内容:&quot; + content;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>我们订阅了TabControl控件的SelectionChanged事件，并在回调函数中获取了当前选中的TabItem对象以及它里面的内容。</p><h2 id="_8-treeview树控件" tabindex="-1"><a class="header-anchor" href="#_8-treeview树控件" aria-hidden="true">#</a> 8.TreeView树控件</h2><p>TreeView其实是一个比较复杂的控件，像操作系统的资源管理器就是一个TreeView。所以它常用于显示文件夹、目录等具有层级结构的数据。TreeView由节点和分支构成，每个节点可以包含零个或多个子节点，分支表示父子关系。在TreeView中，每个节点表示为TreeViewItem对象，可以通过TreeView的Items属性来获取或设置TreeViewItem对象集合。</p><p>在使用TreeView加载节点时，需要掌握一些递归思想。</p><p>一、TreeViewItem元素简介</p><p>TreeViewItem作为TreeView唯一的元素类型，它继承于HeaderedItemsControl（带标题），而HeaderedItemsControl又继承于ItemsControl，由此可见，TreeViewItem元素本身也是一个集合控件。</p><p>TreeViewItem有两个常用的属性，分别是IsSelected属性和IsExpanded属性，IsSelected表示当前元素是否选中，IsExpanded表示当前元素是否展开。</p><h3 id="属性-1" tabindex="-1"><a class="header-anchor" href="#属性-1" aria-hidden="true">#</a> 属性</h3><p>SelectedValuePath属性：获取或设置SelectedItem或SelectedValue的路径。</p><p>SelectedValue属性：获取SelectedItem的值</p><p>SelectedItem属性：获取当前选中的项</p><h3 id="treeview示例" tabindex="-1"><a class="header-anchor" href="#treeview示例" aria-hidden="true">#</a> TreeView示例</h3><p>接下来，我们以一个简单的示例，模仿操作系统的资源管理器的目录加载。</p><p>前端代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Window x:Class=&quot;HelloWorld.MainWindow&quot;
        xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
        xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
        xmlns:d=&quot;http://schemas.microsoft.com/expression/blend/2008&quot;
        xmlns:mc=&quot;http://schemas.openxmlformats.org/markup-compatibility/2006&quot;
        xmlns:local=&quot;clr-namespace:HelloWorld&quot; 
        xmlns:forms=&quot;clr-namespace:System.Windows.Forms;assembly=System.Windows.Forms&quot;
        mc:Ignorable=&quot;d&quot; FontSize=&quot;14&quot;
        Title=&quot;WPF中文网之控件课程 - www.wpfsoft.com&quot; Height=&quot;350&quot; Width=&quot;500&quot;&gt;
    &lt;Grid&gt;
        &lt;Grid.RowDefinitions&gt;
            &lt;RowDefinition Height=&quot;auto&quot;/&gt;
            &lt;RowDefinition/&gt;
        &lt;/Grid.RowDefinitions&gt;
        &lt;StackPanel Orientation=&quot;Horizontal&quot;&gt;
            &lt;TextBlock Text=&quot;根目录&quot; VerticalAlignment=&quot;Center&quot; Margin=&quot;3&quot;/&gt;
            &lt;TextBox x:Name=&quot;_TextBox&quot; Width=&quot;380&quot; Height=&quot;25&quot; Margin=&quot;3&quot;/&gt;
            &lt;Button Content=&quot;选择...&quot; MinWidth=&quot;45&quot; Margin=&quot;3&quot; Click=&quot;Button_Click&quot;/&gt;
        &lt;/StackPanel&gt;
        &lt;TreeView x:Name=&quot;_TreeView&quot; Grid.Row=&quot;1&quot; SelectedItemChanged=&quot;_TreeView_SelectedItemChanged&quot;/&gt;
    &lt;/Grid&gt;
&lt;/Window&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public partial class MainWindow : Window
{        
    public MainWindow()
    {
        InitializeComponent();            
    }        
 
    private void Button_Click(object sender, RoutedEventArgs e)
    {
        System.Windows.Forms.FolderBrowserDialog dialog = new System.Windows.Forms.FolderBrowserDialog();
        if (dialog.ShowDialog() == System.Windows.Forms.DialogResult.OK)
        {
            _TextBox.Text = dialog.SelectedPath;
            LoadTreeView(dialog.SelectedPath);
 
        }
    }
 
    private void LoadTreeView(string rootPath)
    {
        // 设置根节点
        TreeViewItem rootNode = new TreeViewItem();
        rootNode.Header = &quot;根目录&quot;;
 
        // 加载子文件夹和文件
        LoadSubDirectory(rootNode, rootPath);
 
        // 将根节点添加到TreeView中
        _TreeView.Items.Add(rootNode);
    }
 
    private void LoadSubDirectory(TreeViewItem node, string path)
    {
        try
        {
            DirectoryInfo dirInfo = new DirectoryInfo(path);
 
            // 加载子文件夹
            foreach (DirectoryInfo subDirInfo in dirInfo.GetDirectories())
            {
                TreeViewItem subNode = new TreeViewItem();
                subNode.Header = subDirInfo.Name;
 
                LoadSubDirectory(subNode, subDirInfo.FullName);
 
                node.Items.Add(subNode);
            }
 
            // 加载文件
            foreach (FileInfo fileInfo in dirInfo.GetFiles())
            {
                TreeViewItem subNode = new TreeViewItem();
                subNode.Header = fileInfo.Name;
 
                node.Items.Add(subNode);
            }
        }
        catch (Exception ex)
        {
            MessageBox.Show(ex.Message);
        }
    }
 
    private void _TreeView_SelectedItemChanged(object sender, RoutedPropertyChangedEventArgs&lt;object&gt; e)
    {
        // 获取选中的节点
        TreeViewItem selectedNode = _TreeView.SelectedItem as TreeViewItem;
 
        // 显示选中节点的Header
        if (selectedNode != null)
        {
            MessageBox.Show(selectedNode.Header.ToString());
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+q+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>首先，通过鼠标操作，选择TreeView的根目录，然后，利用DirectoryInfo获取当前所有目录，再利用递归调用，一层一层的获取所有子目录，最后以TreeViewItem元素一层层加载到控件中。</p><h2 id="_9-menu菜单" tabindex="-1"><a class="header-anchor" href="#_9-menu菜单" aria-hidden="true">#</a> 9.Menu菜单</h2><p>Menu控件继承于MenuBase，而MenuBase继承于ItemsControl。</p><p>学习Menu之前，要先了解一下MenuBase基类。它是一个抽象类，拥有一个ItemContainerTemplateSelector模板选择器，并重写了一些关于键盘和鼠标的方法。</p><p>Menu的子项必须为MenuItem。这个MenuItem和前面的TreeViewItem类似，拥有共同的HeaderedItemsControl父类，也就是说，MenuItem本身也是一个集合控件，若要以代码形式加载Menu的内容，也必须要掌握递归的加载思路。</p><p>MenuItem从鼠标的交互上，提供了两种方式。第一种是提供了Click事件，开发者可以订阅该事件以编写相应的业务逻辑。第二种是提供了ICommand接口属性和CommandParameter命令参数，以WPF命令的形式开发业务逻辑。</p><h3 id="menu示例" tabindex="-1"><a class="header-anchor" href="#menu示例" aria-hidden="true">#</a> Menu示例</h3><p>前端代码</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Window x:Class=&quot;HelloWorld.MainWindow&quot;
        xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
        xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
        xmlns:d=&quot;http://schemas.microsoft.com/expression/blend/2008&quot;
        xmlns:mc=&quot;http://schemas.openxmlformats.org/markup-compatibility/2006&quot;
        xmlns:local=&quot;clr-namespace:HelloWorld&quot; 
        xmlns:forms=&quot;clr-namespace:System.Windows.Forms;assembly=System.Windows.Forms&quot;
        mc:Ignorable=&quot;d&quot; FontSize=&quot;14&quot;
        Title=&quot;WPF中文网之控件课程 - www.wpfsoft.com&quot; Height=&quot;350&quot; Width=&quot;500&quot;&gt;
    &lt;Grid&gt;
        &lt;Grid.RowDefinitions&gt;
            &lt;RowDefinition Height=&quot;auto&quot;/&gt;
            &lt;RowDefinition/&gt;
        &lt;/Grid.RowDefinitions&gt;        
        &lt;Menu x:Name=&quot;_Menu&quot;&gt;
            &lt;MenuItem Header=&quot;文件&quot;&gt;
                &lt;MenuItem Header=&quot;新建&quot; Click=&quot;MenuItem_Click&quot;/&gt;
                &lt;MenuItem Header=&quot;打开&quot; Click=&quot;MenuItem_Click&quot;&gt;
                    &lt;MenuItem.Icon&gt;
                        &lt;Image Source=&quot;/Images/logo.png&quot;/&gt;
                    &lt;/MenuItem.Icon&gt;
                &lt;/MenuItem&gt;
            &lt;/MenuItem&gt;                      
            &lt;MenuItem Header=&quot;编辑&quot;/&gt;
            &lt;MenuItem Header=&quot;视图&quot;/&gt;
            &lt;MenuItem Header=&quot;项目&quot;/&gt;
            &lt;MenuItem Header=&quot;调试&quot;/&gt;
            &lt;MenuItem Header=&quot;测试&quot;/&gt;
            &lt;MenuItem Header=&quot;分析&quot;/&gt;
            &lt;MenuItem Header=&quot;工具&quot;/&gt;
            &lt;MenuItem Header=&quot;帮助&quot;/&gt;
        &lt;/Menu&gt;
        &lt;TextBlock x:Name=&quot;_TextBlock&quot; Grid.Row=&quot;1&quot; HorizontalAlignment=&quot;Center&quot; VerticalAlignment=&quot;Center&quot;&gt;&lt;/TextBlock&gt;
    &lt;/Grid&gt;
&lt;/Window&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public partial class MainWindow : Window
{        
    public MainWindow()
    {
        InitializeComponent();            
    }
 
    private void MenuItem_Click(object sender, RoutedEventArgs e)
    {
        var item = sender as MenuItem;
        _TextBlock.Text = $&quot;你单击了 {item.Header}&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>上面演示了Menu最基本的用法</p><h2 id="_10-contextmenu上下文菜单" tabindex="-1"><a class="header-anchor" href="#_10-contextmenu上下文菜单" aria-hidden="true">#</a> 10.ContextMenu上下文菜单</h2><p>ContextMenu上下文菜单必须要依附于一个“宿主控件”。由于FrameworkElement基类有一个叫ContextMenu的属性，代表了鼠标右键时弹出一个菜单，所以大多数控件都可以设置“上下文菜单”。</p><p>ContextMenu继承于MenuBase，而MenuBase继承于ItemsControl。所以，ContextMenu本质上也是一个集合控件。而它的元素则是MenuItem。在用法上，与Menu控件差不多。</p><p>属性成员</p><table><thead><tr><th>属性名称</th><th>说明</th></tr></thead><tbody><tr><td>HorizontalOffset</td><td>获取或设置目标原点和弹出项对齐之间的水平距离点。</td></tr><tr><td>StaysOpen</td><td>是否保持打开状态</td></tr><tr><td>CustomPopupPlacementCallback</td><td>获取或设置ContextMenu指示在屏幕位置的回调</td></tr><tr><td>HasDropShadow</td><td>是否有投影出现的上下文菜单。</td></tr><tr><td>Placement</td><td>获取或设置ContextMenu显示的相对位置</td></tr><tr><td>PlacementRectangle</td><td>获取或设置相对于其上下文菜单位于在打开时的区域。</td></tr><tr><td>PlacementTarget</td><td>获取或设置ContextMenu打开时的相对控件</td></tr><tr><td>IsOpen</td><td>是否打开</td></tr><tr><td>VerticalOffset</td><td>获取或设置目标原点和弹出项对齐之间的垂直距离点。</td></tr></tbody></table><h3 id="contextmenu示例" tabindex="-1"><a class="header-anchor" href="#contextmenu示例" aria-hidden="true">#</a> ContextMenu示例</h3><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Grid&gt;
    &lt;Border Background=&quot;LightBlue&quot; Width=&quot;200&quot; Height=&quot;100&quot; CornerRadius=&quot;15&quot;&gt;
        &lt;Border.ContextMenu&gt;
            &lt;ContextMenu&gt;
                &lt;MenuItem Header=&quot;复制&quot;/&gt;
                &lt;MenuItem Header=&quot;粘贴&quot;/&gt;
                &lt;MenuItem Header=&quot;删除&quot;/&gt;
                &lt;MenuItem Header=&quot;关于&quot;/&gt;
            &lt;/ContextMenu&gt;
        &lt;/Border.ContextMenu&gt;
    &lt;/Border&gt;        
&lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+x+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_11-statusbar状态栏" tabindex="-1"><a class="header-anchor" href="#_11-statusbar状态栏" aria-hidden="true">#</a> 11.StatusBar状态栏</h2><p>StatusBar是一个“包容性”极强的控件，通常的作用是作为程序的状态内容显示。它同样继承于ItemsControl基类，所以，它也是一个集合控件。</p><p>它的元素是StatusBarItem类型，而StatusBarItem继承于ContentControl内容控件，所以，本质上讲，StatusBar的元素可以是任意类型的控件。因为StatusBarItem元素有一个叫Content的属性。</p><p>这个控件其实并不常用，通常情况下被当成一个布局控件来使用。</p><p>如下所示</p><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Grid&gt;
    &lt;Grid.RowDefinitions&gt;
        &lt;RowDefinition/&gt;
        &lt;RowDefinition Height=&quot;auto&quot;/&gt;
    &lt;/Grid.RowDefinitions&gt;
    &lt;StatusBar Grid.Row=&quot;1&quot;&gt;
        &lt;StatusBarItem Content=&quot;版权所有 @WPF中文网&quot;/&gt;
        &lt;StatusBarItem&gt;
            &lt;CheckBox Content=&quot;CheckBox&quot;/&gt;
        &lt;/StatusBarItem&gt;
        &lt;StatusBarItem&gt;
            &lt;RadioButton Content=&quot;RadioButton&quot;/&gt;
        &lt;/StatusBarItem&gt;
        &lt;StatusBarItem&gt;
            &lt;Button Content=&quot;Button&quot;/&gt;
        &lt;/StatusBarItem&gt;
        &lt;TextBlock Text=&quot;文字块&quot;/&gt;
    &lt;/StatusBar&gt;
&lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如上所示，StatusBar的元素除了StatusBarItem，甚至可以直接实例化其它控件，比如最后一个TextBlock就是这样的用法。</p>',56))])}const M=r(C,[["render",S],["__file","05.集合控件.html.vue"]]);export{M as default};
