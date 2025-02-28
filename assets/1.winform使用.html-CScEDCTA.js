import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as s,a}from"./app-DBc2jY3V.js";const d="/wf-site/assets/image-20250107211325358-D2Sj3Wfv.png",l="/wf-site/assets/image-20250107211434286-CyGWAFgL.png",t="/wf-site/assets/image-20250107211515442-DbNAyO2J.png",r="/wf-site/assets/image-20250108110856987-DGdd-S7t.png",c="/wf-site/assets/image-20250110130006236-CzCcYnBB.png",v="/wf-site/assets/image-20250110131349080-DI0z6L-Z.png",o="/wf-site/assets/image-20250110133333758-DH-M0TbH.png",u="/wf-site/assets/image-20250110131748412-BMIspd9c.png",m="/wf-site/assets/image-20250110142920100-PzeQh8rF.png",b="/wf-site/assets/image-20250110155454552-P2mOhy5p.png",g={};function p(h,i){return s(),e("div",null,i[0]||(i[0]=[a('<h1 id="_1-第一个程序" tabindex="-1"><a class="header-anchor" href="#_1-第一个程序" aria-hidden="true">#</a> 1.第一个程序</h1><p>winform的项目结构</p><figure><img src="'+d+'" alt="image-20250107211325358" tabindex="0" loading="lazy"><figcaption>image-20250107211325358</figcaption></figure><p>分部类C#中可以在不同地方声明相同的类</p><p>比如<img src="'+l+'" alt="image-20250107211434286" loading="lazy"></p><p>在form1.cs中声明了form1，</p><figure><img src="'+t+'" alt="image-20250107211515442" tabindex="0" loading="lazy"><figcaption>image-20250107211515442</figcaption></figure><p>这个类在这里也被声明了。</p><p>因为这是使用partial把一个类的声明分开写在了两个地方，在编译时会把不同地方的相同类编译在一起。</p><h3 id="程序执行入口" tabindex="-1"><a class="header-anchor" href="#程序执行入口" aria-hidden="true">#</a> 程序执行入口</h3><figure><img src="'+r+`" alt="image-20250108110856987" tabindex="0" loading="lazy"><figcaption>image-20250108110856987</figcaption></figure><p>在program中的main方法是该程序的执行入口。</p><h1 id="_2-添加一个button" tabindex="-1"><a class="header-anchor" href="#_2-添加一个button" aria-hidden="true">#</a> 2.添加一个button</h1><p>添加button两种方式</p><h3 id="代码添加" tabindex="-1"><a class="header-anchor" href="#代码添加" aria-hidden="true">#</a> 代码添加</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>private void InitializeComponent()
{
    this.button1 = new System.Windows.Forms.Button();
    this.timer1 = new System.Timers.Timer();
    ((System.ComponentModel.ISupportInitialize)(this.timer1)).BeginInit();
    this.SuspendLayout();
    // 
    // button1
    // 
    this.button1.Location = new System.Drawing.Point(130, 109);
    this.button1.Name = &quot;button1&quot;;
    this.button1.Size = new System.Drawing.Size(79, 54);
    this.button1.TabIndex = 0;
    this.button1.Text = &quot;button1&quot;;
    this.button1.UseVisualStyleBackColor = true;
    // 
    // timer1
    // 
    this.timer1.SynchronizingObject = this;
    // 
    // Form1
    // 
    this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 18F);
    this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
    this.ClientSize = new System.Drawing.Size(800, 450);
    //button添加到from中
    this.Controls.Add(this.button1);
    
    this.Name = &quot;Form1&quot;;
    this.Text = &quot;Form1&quot;;
    ((System.ComponentModel.ISupportInitialize)(this.timer1)).EndInit();
    this.ResumeLayout(false);
}

private System.Timers.Timer timer1;

private System.Windows.Forms.Button button1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设计器添加" tabindex="-1"><a class="header-anchor" href="#设计器添加" aria-hidden="true">#</a> 设计器添加</h3><figure><img src="`+c+'" alt="image-20250110130006236" tabindex="0" loading="lazy"><figcaption>image-20250110130006236</figcaption></figure><p>直接拖过去就行。</p><h2 id="按钮添加事件" tabindex="-1"><a class="header-anchor" href="#按钮添加事件" aria-hidden="true">#</a> 按钮添加事件</h2><p>双击按钮可以直接添加一个click事件</p><figure><img src="'+v+`" alt="image-20250110131349080" tabindex="0" loading="lazy"><figcaption>image-20250110131349080</figcaption></figure><p>这个操作在代码中添加了</p><p>form1.designer.cs的InitializeComponent()方法中添加了</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>this.button1.Click += new System.EventHandler(this.button1_Click);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在form1.cs的form1这个类中添加了</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>private void button1_Click(object sender, EventArgs e)
{
    button1.Text = &quot;ces&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法。放在界面点击button时就会触发这个方法。</p><h4 id="事件event与委托" tabindex="-1"><a class="header-anchor" href="#事件event与委托" aria-hidden="true">#</a> 事件event与委托</h4><p>在上面的代码中</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>this.button1.Click += new System.EventHandler(this.button1_Click);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>+=代表的是注册一个事件</p><figure><img src="`+o+'" alt="image-20250110133333758" tabindex="0" loading="lazy"><figcaption>image-20250110133333758</figcaption></figure><p>即click中的addHandler方法。</p><h3 id="其他按钮事件" tabindex="-1"><a class="header-anchor" href="#其他按钮事件" aria-hidden="true">#</a> 其他按钮事件</h3><figure><img src="'+u+`" alt="image-20250110131748412" tabindex="0" loading="lazy"><figcaption>image-20250110131748412</figcaption></figure><p>可以在设计界面的小闪电下查看，已经绑定方法的时间会显示出方法名称。</p><h2 id="使用代码添加button" tabindex="-1"><a class="header-anchor" href="#使用代码添加button" aria-hidden="true">#</a> 使用代码添加button</h2><p>在form1.cs中的构造方法中</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public partial class Form1 : Form
{
    public Form1()
    {
        InitializeComponent();
        int x = 0;
        int y = 0;

        for (int i = 0; i &lt; 5; i++)
        {
            x += 60;
            Button btn = new Button();
            btn.Location = new Point(x,y);
            btn.Name = &quot;btn&quot; + i;
            btn.Size = new Size(50, 40);
            btn.Text = &quot;btn&quot; + i;
            btn.Click += new EventHandler(this.btn_Click);
            
            this.Controls.Add(btn);

        }
    }

    private void btn_Click(object sender, EventArgs e)
    {
        Button btn = sender as Button;
        btn.Text = &quot;btn_ddd&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="image-20250110142920100" tabindex="0" loading="lazy"><figcaption>image-20250110142920100</figcaption></figure><p>可以看到根据我们的代码生成了对应的按钮</p><p>其中btn_Click的sender对象表示当前被触发的btn对象。</p><h1 id="_3-界面切换" tabindex="-1"><a class="header-anchor" href="#_3-界面切换" aria-hidden="true">#</a> 3.界面切换</h1><figure><img src="'+b+`" alt="image-20250110155454552" tabindex="0" loading="lazy"><figcaption>image-20250110155454552</figcaption></figure><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>private void button1_Click(object sender, EventArgs e)
{
    String account = account_box.Text;
    String password = pass_box.Text;
    
    if (account == &quot;123&quot; &amp;&amp; password == &quot;456&quot;)
    {
        AccountInfo.getInstence().account = account;
        AccountInfo.getInstence().password = password;
        Form2 form2 = new Form2();
        //显示form2界面
        form2.Show();
        //隐藏form1界面
        this.Hide();
    }
    else
    {
        MessageBox.Show(&quot;账户或密码错误，请重新输入&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始界面为form1，如果想切换界面到form2.可以使用上面代码。</p><h2 id="在form2关闭整个进程" tabindex="-1"><a class="header-anchor" href="#在form2关闭整个进程" aria-hidden="true">#</a> 在form2关闭整个进程</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.Form2_FormClosing);


private void Form2_FormClosing(object sender, FormClosingEventArgs e)
{
    Application.Exit();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在form2绑定界面关闭程序</p><h1 id="_4-单例模式-设置全局数据" tabindex="-1"><a class="header-anchor" href="#_4-单例模式-设置全局数据" aria-hidden="true">#</a> 4.单例模式，设置全局数据</h1><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class AccountInfo
{
    private static AccountInfo _info;
    public String account;
    public String password;
    private AccountInfo()
    {
        
    }

    public static AccountInfo getInstence()
    {
        if (_info == null)
        {
            _info = new AccountInfo();
            
        }

        return _info;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52)]))}const x=n(g,[["render",p],["__file","1.winform使用.html.vue"]]);export{x as default};
