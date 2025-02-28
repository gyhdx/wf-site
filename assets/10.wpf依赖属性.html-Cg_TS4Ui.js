import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,a as t}from"./app-DBc2jY3V.js";const i="/wf-site/assets/image-20250120170956861-DOCc24e2.png",l="/wf-site/assets/image-20250120173940064-C9EBwp-J.png",p="/wf-site/assets/image-20250120172650230-Bhi5tyox.png",c={};function o(u,n){return e(),s("div",null,n[0]||(n[0]=[t('<h2 id="_1-wpf依赖属性" tabindex="-1"><a class="header-anchor" href="#_1-wpf依赖属性" aria-hidden="true">#</a> 1.WPF依赖属性</h2><p>依赖属性应用场景 1、要求属性支持绑定 2、自定义/扩展控件属性（一般都是要求支持绑定的） 3、验证/强制回调 4、继承 5、附加属性（一种特殊的依赖属性）</p><p>wpf的主要类</p><figure><img src="'+i+`" alt="image-20250120170956861" tabindex="0" loading="lazy"><figcaption>image-20250120170956861</figcaption></figure><h3 id="自定义一个依赖属性" tabindex="-1"><a class="header-anchor" href="#自定义一个依赖属性" aria-hidden="true">#</a> 自定义一个依赖属性</h3><p>DefaultValue 属性：表示依赖属性的默认值。</p><p>PropertyChangedCallback 属性：一个回调委托对象。当依赖属性值发现改变时触发执行。</p><p>CoerceValueCallback 属性：一个回调委托对象。表示强制转换时执行的业务逻辑，它会先于PropertyChangedCallback 委托触发。</p><p>依赖属性的声明。属性声明主要是继承dependencyObject类从而生成实现该功能。当然在具体使用时，可以继承其子类。也就变相基础该类</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>namespace WpfApp2.org
{
    internal class MyControlDp : Panel
    {
        //属性分为3步：定义、注册、包装

        #region 手写
        //1.定义

        //public static DependencyProperty myControlDp;

        ////注册
        //static MyControlDp ()
        //{
        //    myControlDp = DependencyProperty.Register(
        //        &quot;myCon&quot;,//属性名
        //         typeof(int),//数据类型
        //        typeof(MyControlDp),//类型该属性属于那个类型
        //        new PropertyMetadata(0)
        //        );
        //}

        ////定义与注册写在一起
        //public static DependencyProperty myControlDp =  DependencyProperty.Register(
        //        &quot;myCon&quot;,//属性名
        //         typeof(int),//数据类型
        //        typeof(MyControlDp),//类型该属性属于那个类型
        //        new PropertyMetadata(0)
        //        );

        ////3.包装
        //public int myCon { 
        //    get { return (int)GetValue(myControlDp); }
        //    set { SetValue(myControlDp, value); }
        //}
        #endregion

        #region 自动生成
        public int MyProperty
        {
            get { return (int)GetValue(MyPropertyProperty); }
            set { SetValue(MyPropertyProperty, value); }
        }

        // Using a DependencyProperty as the backing store for MyProperty.  This enables animation, styling, binding, etc...
        public static readonly DependencyProperty MyPropertyProperty =
            DependencyProperty.Register(
                &quot;MyProperty&quot;, 
                typeof(int), 
                typeof(MyControlDp), 
                new PropertyMetadata(0))
            ;
        #endregion


    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用自定义属性" tabindex="-1"><a class="header-anchor" href="#使用自定义属性" aria-hidden="true">#</a> 使用自定义属性</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Window</span> <span class="token attr-name"><span class="token namespace">x:</span>Class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>WpfApp2.Window1<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.microsoft.com/winfx/2006/xaml/presentation<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">xmlns:</span>x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.microsoft.com/winfx/2006/xaml<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">xmlns:</span>d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.microsoft.com/expression/blend/2008<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">xmlns:</span>mc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.openxmlformats.org/markup-compatibility/2006<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">xmlns:</span>local</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clr-namespace:WpfApp2.org<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">WindowStartupLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CenterScreen<span class="token punctuation">&quot;</span></span>
        
        <span class="token attr-name"><span class="token namespace">mc:</span>Ignorable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">Title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Window1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>450<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>800<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Grid</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Label</span> <span class="token attr-name">Content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span> <span class="token attr-name">HorizontalAlignment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Left<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Margin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>373,185,0,0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">VerticalAlignment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Top<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">local:</span>MyControlDp</span> <span class="token attr-name">Height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Red<span class="token punctuation">&quot;</span></span> <span class="token attr-name">MyProperty</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Margin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>250,239,250,96<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">local:</span>MyControlDp</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Grid</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Window</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>xmlns:local=&quot;clr-namespace:WpfApp2.org&quot;</code></p><p>MyControlDp是我们自定义的一个UI控件。</p><p>先声明自定义属性类所在的命名空间，然后通过local调用就可以使用我们定义的MyProperty属性</p><h3 id="依赖属性值回调" tabindex="-1"><a class="header-anchor" href="#依赖属性值回调" aria-hidden="true">#</a> 依赖属性值回调</h3><p>定义</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>        #region 自动生成
        public int MyProperty
        {
            get { return (int)GetValue(MyPropertyProperty); }
            set { SetValue(MyPropertyProperty, value); }
        }

        // Using a DependencyProperty as the backing store for MyProperty.  This enables animation, styling, binding, etc...
        public static readonly DependencyProperty MyPropertyProperty =
            DependencyProperty.Register(
                &quot;MyProperty&quot;, 
                typeof(int), 
                typeof(MyControlDp), 
                new PropertyMetadata(0, onChange))
            ;
        /// &lt;summary&gt;
        /// 属性发送变化时被激活
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;d&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;e&quot;&gt;&lt;/param&gt;
        /// &lt;exception cref=&quot;NotImplementedException&quot;&gt;&lt;/exception&gt;
        private static void onChange(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {
            //业务执行
            //e.NewValue;新值
            //e.OldValue;旧值
            int newVlaue = (int)e.NewValue;
        }
        #endregion
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在添加属性默认值时new PropertyMetadata(0, onChange))</p><p>添加一个回调函数。当MyProperty属性的值被修改时，就会触发onChange函数.</p><h3 id="验证回调-对属性做校验" tabindex="-1"><a class="header-anchor" href="#验证回调-对属性做校验" aria-hidden="true">#</a> 验证回调---对属性做校验</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>        // Using a DependencyProperty as the backing store for MyProperty.  This enables animation, styling, binding, etc...
        public static readonly DependencyProperty MyPropertyProperty =
            DependencyProperty.Register(
                &quot;MyProperty&quot;, 
                typeof(int), 
                typeof(MyControlDp), 
                new PropertyMetadata(1, onChange),
                new ValidateValueCallback(onValidata)
            );
        /// &lt;summary&gt;
        /// 对属性做校验
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;value&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        private static bool onValidata(object value)
        {
            int myProperty = (int)value;
            if (myProperty &lt;= 0)
            {
                return false;
            }
            return true;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>new ValidateValueCallback(onValidata)</code></p><p>声明该callback后，程序回自动对MyProperty属性的值做校验，如果校验不通过则值无效</p><figure><img src="`+l+'" alt="image-20250120173940064" tabindex="0" loading="lazy"><figcaption>image-20250120173940064</figcaption></figure><figure><img src="'+p+`" alt="image-20250120172650230" tabindex="0" loading="lazy"><figcaption>image-20250120172650230</figcaption></figure><h3 id="三种回调的执行顺序" tabindex="-1"><a class="header-anchor" href="#三种回调的执行顺序" aria-hidden="true">#</a> 三种回调的执行顺序</h3><p>先强制，再验证再改变</p><h2 id="_2-属性共享" tabindex="-1"><a class="header-anchor" href="#_2-属性共享" aria-hidden="true">#</a> 2.属性共享</h2><p>对于一些处于不同层次但使用相同属性的类，可以使用属性共享使用同一属性。而不是再次声明相同属性。</p><p>使用DependencyProperty.AddOwner()添加共享属性</p><p>例子：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>namespace WpfApp2.org
{
    internal class Class2 : Panel
    {


        public int MyProperty2
        {
            get { return (int)GetValue(MyProperty2Property); }
            set { SetValue(MyProperty2Property, value); }
        }

        // Using a DependencyProperty as the backing store for MyProperty2.  This enables animation, styling, binding, etc...
        public static readonly DependencyProperty MyProperty2Property =
            MyControlDp.MyPropertyProperty.AddOwner(typeof(Class2));


    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该属性就使用了上面定义的MyPropertyProperty</p><h2 id="_3-附加属性" tabindex="-1"><a class="header-anchor" href="#_3-附加属性" aria-hidden="true">#</a> 3.附加属性</h2><p>附加属性是一种依赖项属性，由W℉属性系统管理。不同之处在于附加属性被应用到的类并非定义附加属性的那个类。</p><p>为了定义附加属性，需要使用RegisterAttached()方法，而不是使用Register()方法。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>namespace WpfApp2.org
{
    internal class PropAttach
    {


        public static String GetMyProperty(DependencyObject obj)
        {
            return (String)obj.GetValue(MyPropertyProperty);
        }

        public static void SetMyProperty(DependencyObject obj, int value)
        {
            obj.SetValue(MyPropertyProperty, value);
        }

        // Using a DependencyProperty as the backing store for MyProperty.  This enables animation, styling, binding, etc...
        public static readonly DependencyProperty MyPropertyProperty =
            DependencyProperty.RegisterAttached(&quot;MyProperty&quot;, typeof(String), typeof(PropAttach), new PropertyMetadata(&quot;&quot;));


    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用自定义的附加属性</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Window</span> <span class="token attr-name"><span class="token namespace">x:</span>Class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>WpfApp2.xml.WinAttach<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.microsoft.com/winfx/2006/xaml/presentation<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">xmlns:</span>x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.microsoft.com/winfx/2006/xaml<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">xmlns:</span>d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.microsoft.com/expression/blend/2008<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">xmlns:</span>mc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.openxmlformats.org/markup-compatibility/2006<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">xmlns:</span>local</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clr-namespace:WpfApp2.org<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">mc:</span>Ignorable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">Title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>WinAttach<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>450<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>800<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Grid</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PasswordBox</span> <span class="token attr-name">Height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">local:</span>PropAttach.MyProperty</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>123<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Password</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>123<span class="token punctuation">&quot;</span></span> <span class="token attr-name">PasswordChar</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PasswordBox</span><span class="token punctuation">&gt;</span></span>
        
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Grid</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Window</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>xmlns:local=&quot;clr-namespace:WpfApp2.org&quot;</code> 声明好定义的附加属性的命名空间就可以直接使用。</p>`,41)]))}const v=a(c,[["render",o],["__file","10.wpf依赖属性.html.vue"]]);export{v as default};
