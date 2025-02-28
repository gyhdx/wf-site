import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as a,a as i}from"./app-DBc2jY3V.js";const t="/wf-site/assets/image-20250110171905459-Bxx6kY6E.png",l="/wf-site/assets/image-20250110172037584-C7HFxwpN.png",c="/wf-site/assets/image-20250110172120494-BjZ9cQY7.png",d="/wf-site/assets/image-20250110172142133-BqtGf0ta.png",o="/wf-site/assets/image-20250110173943175-A5OjhpfI.png",u="/wf-site/assets/image-20250110174211025-CnCRe2Gh.png",r="/wf-site/assets/image-20250110175155015-E5Rv7pUI.png",p="/wf-site/assets/image-20250110175503864-S46K9Nws.png",v="/wf-site/assets/image-20250110185308701-CcD4RQ3M.png",m="/wf-site/assets/image-20250110185528764-BKYEfXqS.png",b={};function g(k,n){return a(),e("div",null,n[0]||(n[0]=[i('<h2 id="_1-创建数据库及数据表" tabindex="-1"><a class="header-anchor" href="#_1-创建数据库及数据表" aria-hidden="true">#</a> 1.创建数据库及数据表</h2><figure><img src="'+t+'" alt="image-20250110171905459" tabindex="0" loading="lazy"><figcaption>image-20250110171905459</figcaption></figure><p>创建数据表</p><figure><img src="'+l+'" alt="image-20250110172037584" tabindex="0" loading="lazy"><figcaption>image-20250110172037584</figcaption></figure><p>保存以后</p><figure><img src="'+c+'" alt="image-20250110172120494" tabindex="0" loading="lazy"><figcaption>image-20250110172120494</figcaption></figure><figure><img src="'+d+'" alt="image-20250110172142133" tabindex="0" loading="lazy"><figcaption>image-20250110172142133</figcaption></figure><p>可以向数据库写入数据。</p><p>设置主键</p><figure><img src="'+o+'" alt="image-20250110173943175" tabindex="0" loading="lazy"><figcaption>image-20250110173943175</figcaption></figure><figure><img src="'+u+`" alt="image-20250110174211025" tabindex="0" loading="lazy"><figcaption>image-20250110174211025</figcaption></figure><p>选择是把主键设置为自增的。</p><h2 id="_2-sql语句" tabindex="-1"><a class="header-anchor" href="#_2-sql语句" aria-hidden="true">#</a> 2.sql语句</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">TOP</span> <span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>username<span class="token punctuation">]</span>
      <span class="token punctuation">,</span><span class="token punctuation">[</span>passwpord<span class="token punctuation">]</span>
      <span class="token punctuation">,</span><span class="token punctuation">[</span>nickname<span class="token punctuation">]</span>
  <span class="token keyword">FROM</span> <span class="token punctuation">[</span>testDB<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>dbo<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>userT<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体查看https://javaguide.cn/database/sql/sql-syntax-summary.html</p><h2 id="_3-c-连接sqlserver" tabindex="-1"><a class="header-anchor" href="#_3-c-连接sqlserver" aria-hidden="true">#</a> 3.c#连接sqlserver</h2><h3 id="_1-需要system-data-client" tabindex="-1"><a class="header-anchor" href="#_1-需要system-data-client" aria-hidden="true">#</a> 1.需要system.data.client</h3><figure><img src="`+r+'" alt="image-20250110175155015" tabindex="0" loading="lazy"><figcaption>image-20250110175155015</figcaption></figure><p>.net core需要导入这个包。。net framework中包含了这个包可以直接使用。</p><p>rider的包管理</p><figure><img src="'+p+`" alt="image-20250110175503864" tabindex="0" loading="lazy"><figcaption>image-20250110175503864</figcaption></figure><h3 id="_2-代码连接数据库" tabindex="-1"><a class="header-anchor" href="#_2-代码连接数据库" aria-hidden="true">#</a> 2.代码连接数据库</h3><h4 id="查询语句" tabindex="-1"><a class="header-anchor" href="#查询语句" aria-hidden="true">#</a> 查询语句</h4><p>查询定式。数据库连接离不开这几步。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>public <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    SqlConnection connection <span class="token operator">=</span> new <span class="token function">SqlConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//方式1：server指定数据库位置，</span>
    <span class="token comment">//localhost是本地数据库</span>
    <span class="token comment">//Database要连接的数据库</span>
    <span class="token comment">//Trusted_Connection默认连接方式</span>
    connection<span class="token punctuation">.</span>ConnectionString <span class="token operator">=</span> <span class="token string">&quot;Server=localhost;Database=testDB;Trusted_Connection=true&quot;</span><span class="token punctuation">;</span>
    connection<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//创建查询语句</span>
    SqlCommand command <span class="token operator">=</span> new <span class="token function">SqlCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    command<span class="token punctuation">.</span>Connection <span class="token operator">=</span> connection<span class="token punctuation">;</span>
    command<span class="token punctuation">.</span>CommandText <span class="token operator">=</span> <span class="token string">&quot;select * from userT;&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">//添加连接</span>
    SqlDataAdapter adapter <span class="token operator">=</span> new <span class="token function">SqlDataAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    adapter<span class="token punctuation">.</span>SelectCommand <span class="token operator">=</span> command<span class="token punctuation">;</span>

    <span class="token comment">//启动查询命令</span>
    DataSet dataSet <span class="token operator">=</span> new <span class="token function">DataSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    adapter<span class="token punctuation">.</span><span class="token function">Fill</span><span class="token punctuation">(</span>dataSet<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">//查询结束关闭来连接</span>
    connection<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//获取数据库查询结果</span>
    DataTable table <span class="token operator">=</span> dataSet<span class="token punctuation">.</span>Tables<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">//数据显示</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> table<span class="token punctuation">.</span>Rows<span class="token punctuation">.</span>Count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>$<span class="token string">&quot;{table.Rows[i][&quot;</span>username<span class="token string">&quot;]}  {table.Rows[i][&quot;</span>password<span class="token string">&quot;]} {table.Rows[i][&quot;</span>nickName<span class="token string">&quot;]}\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="插入语句" tabindex="-1"><a class="header-anchor" href="#插入语句" aria-hidden="true">#</a> 插入语句</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public static void insterData()
{
    SqlConnection connection = new SqlConnection();
    connection.ConnectionString = &quot;Server=localhost;Database=testDB;Trusted_Connection=true&quot;;
    connection.Open();

    //创建查询语句
    String name = &quot;gxx&quot;;
    String password = &quot;111111&quot;;
    String nickname = &quot;gx&quot;;
    String insertSql = $&quot;insert into userT values (&#39;{name}&#39;,&#39;{password}&#39;,&#39;{nickname}&#39;)&quot;;
    SqlCommand command = new SqlCommand(insertSql, connection);
    int count = command.ExecuteNonQuery();
    connection.Close();
    
    Console.Write($&quot;受影响行数:{count}&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-orm框架" tabindex="-1"><a class="header-anchor" href="#_3-orm框架" aria-hidden="true">#</a> 3.ORM框架</h2><p>entity Framework:微软官方提供的ORm框架</p><figure><img src="`+v+'" alt="image-20250110185308701" tabindex="0" loading="lazy"><figcaption>image-20250110185308701</figcaption></figure><p>引入框架</p><p>新增了依赖和两个config文件</p><figure><img src="'+m+`" alt="image-20250110185528764" tabindex="0" loading="lazy"><figcaption>image-20250110185528764</figcaption></figure><h3 id="新增一个实体类" tabindex="-1"><a class="header-anchor" href="#新增一个实体类" aria-hidden="true">#</a> 新增一个实体类</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>namespace connectionSQLserver.EF6
{
    [Table(&quot;userT&quot;)]//指定数据库中的表
    public class UserModelEF
    {
        public String username { get; set; }
        public String password { get; set; }
        public String nickname { get; set; }
        [Key]//指定id为主键
        public int id { get; set; }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意两点：</p><p>1.table指定要查询的数据表</p><p>2.key：指定好对应的主键</p><h3 id="新增db连接类" tabindex="-1"><a class="header-anchor" href="#新增db连接类" aria-hidden="true">#</a> 新增DB连接类</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>namespace connectionSQLserver.EF6
{
    public class MyDBContext:DbContext
    {
        public MyDBContext() : base(&quot;Server=localhost;Database=testDB;Trusted_Connection=true&quot;)
        {
            
        }

        public DbSet&lt;UserModelEF&gt; userT { get; set; }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继承DbContext，在构造方法中指定好数据库及其连接方式。</p><p>userT：设置获取数据表的方式。</p><h3 id="使用orm操作数据库" tabindex="-1"><a class="header-anchor" href="#使用orm操作数据库" aria-hidden="true">#</a> 使用ORM操作数据库</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public static void Main(string[] args)
{
    MyDBContext context = new MyDBContext();
    List&lt;UserModelEF&gt; list = context.userT.ToList();
    //关闭数据库链接
    context.Dispose();
    for (int i = 0; i &lt; list.Count; i++)
    {
        Console.Write(
            $&quot;id = {list[i].id}, name = {list[i].username},password = {list[i].password},nickname = {list[i].nickname}\\n&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用lambda表达式添加条件数据" tabindex="-1"><a class="header-anchor" href="#使用lambda表达式添加条件数据" aria-hidden="true">#</a> 使用lambda表达式添加条件数据</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public static void getUser2()
{
    List&lt;UserModelEF&gt; list = null;
    using (MyDBContext context = new MyDBContext())
    {
        list = context.userT.Where(e=&gt;e.username == &quot;wf&quot;).ToList();
    }
    for (int i = 0; i &lt; list.Count; i++)
    {
        Console.Write(
            $&quot;id = {list[i].id}, name = {list[i].username},password = {list[i].password},nickname = {list[i].nickname}\\n&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接入ORM框架EF完成。</p><h3 id="使用语法糖释放数据库连接" tabindex="-1"><a class="header-anchor" href="#使用语法糖释放数据库连接" aria-hidden="true">#</a> 使用语法糖释放数据库连接</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public static void getUser2()
{
    List&lt;UserModelEF&gt; list = null;
    using (MyDBContext context = new MyDBContext())
    {
        list = context.userT.ToList();
    }

    for (int i = 0; i &lt; list.Count; i++)
    {
        Console.Write(
            $&quot;id = {list[i].id}, name = {list[i].username},password = {list[i].password},nickname = {list[i].nickname}\\n&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-linq使用" tabindex="-1"><a class="header-anchor" href="#_4-linq使用" aria-hidden="true">#</a> 4.linq使用</h2><p>https://www.yuque.com/ziyuebingling-go45s/qa25cw/4b4a876d-915c-424f-98c1-2cccbf1b4aa3</p><h2 id="_5-修改数据的两种方式" tabindex="-1"><a class="header-anchor" href="#_5-修改数据的两种方式" aria-hidden="true">#</a> 5.修改数据的两种方式</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//在查询出来后直接修改
public static void updateUser()
{
    using (MyDBContext context = new MyDBContext())
    {
        UserModelEF modelEf = context.userT.FirstOrDefault(e =&gt; e.username == &quot;wf&quot;);
        modelEf.password = &quot;wfce&quot;;
        context.SaveChanges();
    }
}

//对之前查询的数据进行修改
public static void updateUser2()
{
    List&lt;UserModelEF&gt; list = null;
    using (MyDBContext context = new MyDBContext())
    {
        list = context.userT.Where(e=&gt;e.username == &quot;wf&quot;).ToList();
    }

    UserModelEF modelEf = list[0];
    using (MyDBContext context = new MyDBContext())
    {
        context.userT.Attach(modelEf);
        context.Entry(modelEf).State = System.Data.Entity.EntityState.Modified;

        modelEf.password = &quot;123456&quot;;
        context.SaveChanges();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为在MyDBContext context = new MyDBContext()的生命周期内会监控查询结果的变化，所以第一张方式可以修改对应的值。但如果想要对已查询出的值进行修改，就要重新把它添加到context的生命周期中并且修改其状态。</p><h2 id="_6-使属性不映射到数据库的办法" tabindex="-1"><a class="header-anchor" href="#_6-使属性不映射到数据库的办法" aria-hidden="true">#</a> 6.使属性不映射到数据库的办法</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[Table(&quot;studentT&quot;)]
public class StudentModelEF
{
    [Key]
    public int ID { get; set; }
    
    public String username { get; set; }
    
    public String password { get; set; }
    
    public Int32 score { get; set; }
    
    public String sender {get; set; }
        
    [NotMapped]
    public String sex{
    
    get
    {
        if (sender.Equals(&quot;1&quot;))
        {
            return &quot;男&quot;;
        }
        else if (sender.Equals(&quot;2&quot;))
        {
            return &quot;女&quot;;
        }
        else
        {
            return &quot;not set&quot;;
        }
    }
    set
    {
        sex = sender;
    }
    }
    
    public String school { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在entityFramework中使用[NotMapped]注解注释对应属性就不会在与数据库映射时使用。</p>`,57)]))}const q=s(b,[["render",g],["__file","2.SqlSever使用.html.vue"]]);export{q as default};
