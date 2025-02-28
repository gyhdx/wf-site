import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as t,a as p}from"./app-DBc2jY3V.js";const e="/wf-site/assets/image-20230929012446743-DafVlE7H.png",o="/wf-site/assets/image-20230929012539982-DN_tvN6R.png",i="/wf-site/assets/image-20231004223127282-Bb6WO4Op.png",c="/wf-site/assets/image-20231005000151065-BF5XhtmA.png",l={};function u(r,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h2 id="爬虫python" tabindex="-1"><a class="header-anchor" href="#爬虫python" aria-hidden="true">#</a> 爬虫python</h2><blockquote><p>学习地址：https://www.bilibili.com/video/BV1qB4y1D77o</p></blockquote><p>必须的python库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> requests
pip <span class="token function">install</span> bs4
pip <span class="token function">install</span> lxml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-requests库入门" tabindex="-1"><a class="header-anchor" href="#_1-requests库入门" aria-hidden="true">#</a> 1.requests库入门</h2><p>使用requests库</p><p>请求公共部分</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests

<span class="token comment"># 请求头信息</span>
headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) &quot;</span>
                  <span class="token string">&quot;Chrome/117.0.0.0 Safari/537.36&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get请求" tabindex="-1"><a class="header-anchor" href="#get请求" aria-hidden="true">#</a> get请求</h3><p>代码演示：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">getReq</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    url <span class="token operator">=</span> <span class="token string">&quot;https://movie.douban.com/j/chart/top_list?type=11&amp;interval_id=100%3A90&amp;action=&amp;start=0&amp;limit=1&quot;</span>

    <span class="token comment"># get请求携带的参数</span>
    param <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;type&#39;</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
        <span class="token string">&#39;interval_id&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;100:90&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;action&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;start&#39;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string">&#39;limit&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># 通过get方式请求url</span>
    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">,</span> params<span class="token operator">=</span>param<span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 关闭链接</span>
    resp<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行程序后</p><figure><img src="`+e+`" alt="image-20230929012446743" tabindex="0" loading="lazy"><figcaption>image-20230929012446743</figcaption></figure><h3 id="post请求" tabindex="-1"><a class="header-anchor" href="#post请求" aria-hidden="true">#</a> post请求</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">postReq</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    url <span class="token operator">=</span> <span class="token string">&quot;https://fanyi.baidu.com/sug&quot;</span>

    dat <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;kw&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ces&quot;</span>
    <span class="token punctuation">}</span>

    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token operator">=</span>dat<span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    resp<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果</p><figure><img src="`+o+`" alt="image-20230929012539982" tabindex="0" loading="lazy"><figcaption>image-20230929012539982</figcaption></figure><h2 id="_2-数据解析" tabindex="-1"><a class="header-anchor" href="#_2-数据解析" aria-hidden="true">#</a> 2.数据解析</h2><p>正则表达式</p><blockquote><p>https://docs.python.org/zh-cn/3/library/re.html</p></blockquote><h3 id="re解析" tabindex="-1"><a class="header-anchor" href="#re解析" aria-hidden="true">#</a> re解析</h3><blockquote><p>https://docs.python.org/zh-cn/3/library/re.html#</p></blockquote><h3 id="通过re进行一个爬虫案例" tabindex="-1"><a class="header-anchor" href="#通过re进行一个爬虫案例" aria-hidden="true">#</a> 通过re进行一个爬虫案例</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 获取dytt的下载链接</span>
<span class="token keyword">def</span> <span class="token function">dyttDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    url <span class="token operator">=</span> <span class="token string">&quot;https://www.dytt89.com/&quot;</span>
    rsp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    rsp<span class="token punctuation">.</span>encoding <span class="token operator">=</span> <span class="token string">&quot;gb2312&quot;</span>  <span class="token comment"># 指定字符集</span>
    
    obj1 <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">r&#39;2023必看热片.*?&lt;ul&gt;(?P&lt;pageInfo&gt;.*?)&lt;/ul&gt;&#39;</span><span class="token punctuation">,</span> re<span class="token punctuation">.</span>S<span class="token punctuation">)</span>
    obj2 <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">r&quot;href=&#39;(?P&lt;href&gt;.*?)&#39; title=&quot;</span><span class="token punctuation">,</span> re<span class="token punctuation">.</span>S<span class="token punctuation">)</span>
    obj3 <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">r&#39;◎片　　名　(?P&lt;name&gt;.*?)&lt;br /&gt;.*?&lt;td style=&quot;WORD-WRAP: break-word&quot; bgcolor=&quot;#fdfddf&quot;&gt;&lt;a href=&quot;&#39;</span>
                      <span class="token string">r&#39;(?P&lt;downloadLink&gt;.*?)&quot;&gt;&#39;</span><span class="token punctuation">,</span> re<span class="token punctuation">.</span>S<span class="token punctuation">)</span>

    <span class="token comment"># 获取页面ul里li元素的信息</span>

    <span class="token comment"># obj4 = re.compile(r&#39;&#39;, re.S)</span>

    result <span class="token operator">=</span> obj1<span class="token punctuation">.</span>finditer<span class="token punctuation">(</span>rsp<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    childList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">for</span> it <span class="token keyword">in</span> result<span class="token punctuation">:</span>
        ul <span class="token operator">=</span> it<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token string">&#39;pageInfo&#39;</span><span class="token punctuation">)</span>
        <span class="token comment"># print(ul)</span>

        <span class="token comment"># 获取子页面的链接</span>
        result2 <span class="token operator">=</span> obj2<span class="token punctuation">.</span>finditer<span class="token punctuation">(</span>ul<span class="token punctuation">)</span>
        <span class="token keyword">for</span> link <span class="token keyword">in</span> result2<span class="token punctuation">:</span>
            <span class="token comment"># print(&quot;group dict: &quot;)</span>
            <span class="token comment"># print(link)</span>
            uri <span class="token operator">=</span> url <span class="token operator">+</span> link<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
            childList<span class="token punctuation">.</span>append<span class="token punctuation">(</span>uri<span class="token punctuation">)</span>
            <span class="token comment"># print(&quot;href link is : &quot; + uri)</span>
            <span class="token comment"># print(link.group(&quot;href&quot;).strip(&quot;/&quot;))</span>

    rsp<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> href <span class="token keyword">in</span> childList<span class="token punctuation">:</span>
        childRsp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>href<span class="token punctuation">)</span>
        childRsp<span class="token punctuation">.</span>encoding <span class="token operator">=</span> <span class="token string">&quot;gb2312&quot;</span>
        <span class="token comment"># print(href)</span>
        <span class="token comment"># print(childRsp.text)</span>
        result3 <span class="token operator">=</span> obj3<span class="token punctuation">.</span>search<span class="token punctuation">(</span>childRsp<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>result3<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>result3<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token string">&#39;downloadLink&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        childRsp<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><figure><img src="`+i+`" alt="image-20231004223127282" tabindex="0" loading="lazy"><figcaption>image-20231004223127282</figcaption></figure><h3 id="bs4解析-html" tabindex="-1"><a class="header-anchor" href="#bs4解析-html" aria-hidden="true">#</a> bs4解析-html</h3><blockquote><p>官方文档：https://beautifulsoup.readthedocs.io/zh_CN/v4.4.0/</p></blockquote><p>BeautifulSoup</p><p>主要是使用beautifulsoup的find_all()和find()两个方法从文件的css里获取信息位置。</p><p>案例-下载图片</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">bs4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 安装：pip install bs4</span>
    url <span class="token operator">=</span> <span class="token string">&quot;https://www.moyublog.com/hdwallpapers/&quot;</span>
    rsp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    rsp<span class="token punctuation">.</span>encoding <span class="token operator">=</span> <span class="token string">&quot;utf-8&quot;</span>
    <span class="token comment"># print(rsp.text)</span>

    <span class="token comment"># I,把页面源代码交给BeautifulSoup进行处理，生成bs对象</span>
    <span class="token comment"># html.parser  表示指定html解析器</span>
    page <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>rsp<span class="token punctuation">.</span>text<span class="token punctuation">,</span> <span class="token string">&quot;html.parser&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># 2.从bs对象获取数据</span>
    res1 <span class="token operator">=</span> page<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;section&quot;</span><span class="token punctuation">,</span> class_<span class="token operator">=</span><span class="token string">&quot;wrapper wfull&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> target<span class="token operator">=</span><span class="token string">&quot;_blank&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># 从图片网站获取图片</span>
    <span class="token comment"># 1.获取图片页面url</span>
    <span class="token comment"># print(res1)</span>
    i <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">for</span> link <span class="token keyword">in</span> res1<span class="token punctuation">:</span>
        href <span class="token operator">=</span> link<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">)</span>
        <span class="token comment"># print(href)</span>
        childPageRsp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>href<span class="token punctuation">)</span>
        childPageRsp<span class="token punctuation">.</span>encoding <span class="token operator">=</span> <span class="token string">&quot;utf-8&quot;</span>
        <span class="token comment"># 2.获取图片url</span>
        childPageInfo <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>childPageRsp<span class="token punctuation">.</span>text<span class="token punctuation">,</span> <span class="token string">&quot;html.parser&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 两种写法都可以</span>
        <span class="token comment"># imgUrl = childPageInfo.find(&#39;div&#39;, class_=&#39;photo-pic&#39;).find(&#39;img&#39;)</span>
        imgUrl <span class="token operator">=</span> childPageInfo<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> attrs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;photo-pic&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span>

        imgLink <span class="token operator">=</span> imgUrl<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># 下载图片</span>
        imgRsp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>imgLink<span class="token punctuation">)</span>
        <span class="token comment"># 获取图片二进制信息</span>
        <span class="token comment"># imgRsp.content  --code</span>
        <span class="token comment"># 使用链接最后的作为图片名称</span>
        imgName <span class="token operator">=</span> imgLink<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token comment"># 图片信息写入图片</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;img/&quot;</span><span class="token operator">+</span>imgName<span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>imgRsp<span class="token punctuation">.</span>content<span class="token punctuation">)</span>

        childPageRsp<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;img down over!   &quot;</span><span class="token punctuation">,</span> imgName<span class="token punctuation">)</span>
        i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token keyword">if</span> i <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
            <span class="token keyword">break</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">continue</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;all over&quot;</span><span class="token punctuation">)</span>
    rsp<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果</p><figure><img src="`+c+`" alt="image-20231005000151065" tabindex="0" loading="lazy"><figcaption>image-20231005000151065</figcaption></figure><h3 id="xpath解析" tabindex="-1"><a class="header-anchor" href="#xpath解析" aria-hidden="true">#</a> xpath解析</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># xpath的使用</span>
<span class="token comment"># 因为html是xml的一个子集使用解析xml的工具也可以解析html、</span>
<span class="token comment"># 安装 ： pip install lxml</span>
<span class="token keyword">def</span> <span class="token function">xpathUse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment"># result = tree.xpath(&quot;/book&quot;) #/表示层级关系，第一个/是根节点</span>
    <span class="token comment"># result = tree.xpath(&quot;/book/name&quot;)</span>
    <span class="token comment"># result=tree,xpath(&quot;/book/name/text()&quot;)#text()拿文本</span>
    <span class="token comment"># result = tree.xpath(&quot;/book/author//nick/text()&quot;)  # // 后代</span>
    <span class="token comment"># result = tree.xpath(&quot;/book/author/*/nick/text()&quot;)  # *任意的节点。通配符（会儿）</span>
    tree <span class="token operator">=</span> etree<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token string">&quot;a.html&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># res = tree.xpath(&quot;/html/body/ul/li/a/text()&quot;)</span>
    <span class="token comment"># []表示索引</span>
    <span class="token comment"># res = tree.xpath(&quot;/html/body/ul/li[1]/a/text()&quot;)</span>
    <span class="token comment"># @href=&#39;www.ss.com&#39; 指定元素</span>
    <span class="token comment"># res = tree.xpath(&quot;/html/body/ol/li/a[@href=&#39;www.ss.com&#39;]/text()&quot;)</span>
    <span class="token comment"># print(res)</span>

    <span class="token comment">#多级获取数据</span>
    olList <span class="token operator">=</span> tree<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&quot;/html/body/ol/li&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> li <span class="token keyword">in</span> olList<span class="token punctuation">:</span>
        <span class="token comment"># 从li里获取数据</span>
        res <span class="token operator">=</span> li<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&quot;./a/text()&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token comment"># @获取属性的值</span>
        res <span class="token operator">=</span> li<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&quot;./a/@href&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-request进阶" tabindex="-1"><a class="header-anchor" href="#_3-request进阶" aria-hidden="true">#</a> 3.request进阶</h2><h3 id="_1-获取cookie" tabindex="-1"><a class="header-anchor" href="#_1-获取cookie" aria-hidden="true">#</a> 1.获取cookie</h3><p>有两种方式：</p><ul><li>通过request的session来请求login接口从而保存cookie数据</li><li>直接把cookie写入请求的header中</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    aimUrl <span class="token operator">=</span> <span class="token string">&quot;https://www.xxx.com/getData&quot;</span>
    
    <span class="token comment"># 通过session保存cookie</span>
    session <span class="token operator">=</span> requests<span class="token punctuation">.</span>session<span class="token punctuation">(</span><span class="token punctuation">)</span>
    data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;username&#39;</span><span class="token punctuation">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;password&#39;</span><span class="token punctuation">:</span><span class="token string">&quot;xxx&quot;</span>
    <span class="token punctuation">}</span>
    loginUrl <span class="token operator">=</span> <span class="token string">&quot;https://www.xxx.com/login&quot;</span>
    session<span class="token punctuation">.</span>post<span class="token punctuation">(</span>loginUrl<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    rsp <span class="token operator">=</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span>aimUrl<span class="token punctuation">)</span>
    
    <span class="token comment"># 直接把cookie写入请求</span>
    rsp2 <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>aimUrl<span class="token punctuation">,</span> headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;cookie&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;xx:xx&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="防盗链" tabindex="-1"><a class="header-anchor" href="#防盗链" aria-hidden="true">#</a> 防盗链</h3><p>请求时链接会有一些规则，防止请求错误所以需要进行防盗链。</p><p>案例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">getPearVideo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    baseUrl <span class="token operator">=</span> <span class="token string">&quot;https://www.pearvideo.com/video_1642157&quot;</span>
    uid <span class="token operator">=</span> baseUrl<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    videoReqUrl <span class="token operator">=</span> <span class="token string">&#39;https://www.pearvideo.com/videoStatus.jsp?contId=&#39;</span> <span class="token operator">+</span> uid <span class="token operator">+</span> <span class="token string">&#39;&amp;mrd=0.932583187049618&#39;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;请求的链接是: {}&#39;</span><span class="token punctuation">,</span> videoReqUrl<span class="token punctuation">)</span>
    <span class="token comment"># 请求头信息</span>
    headers <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) &quot;</span>
                      <span class="token string">&quot;Chrome/117.0.0.0 Safari/537.36&quot;</span><span class="token punctuation">,</span>
        <span class="token comment"># 防盗链，用于溯源</span>
        <span class="token string">&quot;Referer&quot;</span><span class="token punctuation">:</span> <span class="token string">&#39;https://www.pearvideo.com/video_1642157&#39;</span>
    <span class="token punctuation">}</span>

    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>videoReqUrl<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>text<span class="token punctuation">)</span>

    dicts <span class="token operator">=</span> resp<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
    aimSrUrl <span class="token operator">=</span> dicts<span class="token punctuation">[</span><span class="token string">&#39;videoInfo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;videos&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;srcUrl&#39;</span><span class="token punctuation">]</span>
    st <span class="token operator">=</span> dicts<span class="token punctuation">[</span><span class="token string">&#39;systemTime&#39;</span><span class="token punctuation">]</span>
    <span class="token comment"># https://video.pearvideo.com/mp4/third/20200114/cont-1642157-11956977-141026-hd.mp4</span>
    <span class="token comment"># https://video.pearvideo.com/mp4/third/20200114/1702219719971-11956977-141026-hd.mp4</span>
    srcUrl <span class="token operator">=</span> aimSrUrl<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>st<span class="token punctuation">,</span> <span class="token string-interpolation"><span class="token string">f&#39;cont-</span><span class="token interpolation"><span class="token punctuation">{</span>uid<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
	<span class="token comment"># 保存文件</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;a.mp4&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>srcUrl<span class="token punctuation">)</span><span class="token punctuation">.</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代理" tabindex="-1"><a class="header-anchor" href="#代理" aria-hidden="true">#</a> 代理</h3><p>防止请求次数过多ip被封，导致无法访问链接。故使用代理</p><p>案例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">daili</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    proxies <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;https&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://181.112.151.221:443&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">}</span>
    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">,</span> proxies<span class="token operator">=</span>proxies<span class="token punctuation">)</span>
    resp<span class="token punctuation">.</span>encoding <span class="token operator">=</span> <span class="token string">&#39;utf-8&#39;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-提高爬取效率" tabindex="-1"><a class="header-anchor" href="#_4-提高爬取效率" aria-hidden="true">#</a> 4.提高爬取效率</h2><h3 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程" aria-hidden="true">#</a> 多线程</h3><p>python中线程的使用</p><p>通过target指定</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">th1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;fun&#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    t <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>th1<span class="token punctuation">)</span>
    t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继承thread类</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">th2</span><span class="token punctuation">(</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;fun&#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># t = Thread(target=th1)</span>
    <span class="token comment"># t.start()</span>
    tt <span class="token operator">=</span> th2<span class="token punctuation">(</span><span class="token punctuation">)</span>
    tt<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对多线程执行的任务传参</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">th3</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> name2<span class="token operator">=</span><span class="token string">&#39;gg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> name2<span class="token punctuation">,</span> i<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># t = Thread(target=th1)</span>
    <span class="token comment"># t.start()</span>
    <span class="token comment"># tt = th2()</span>
    <span class="token comment"># tt.start()</span>
    <span class="token comment"># for i in range(10000):</span>
    <span class="token comment">#     print(&#39;main&#39;, i)</span>
    t <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>th3<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;ww&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># args参数必须是一个元组</span>
    t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    t1 <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>th3<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;ss&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继承的方式重写构造函数直接在类声明时写就行</p><h3 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池" aria-hidden="true">#</a> 线程池</h3><p>一次性开启多个线程，把任务交给线程池来执行</p><p>使用：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">th3</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> name2<span class="token operator">=</span><span class="token string">&#39;gg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> name2<span class="token punctuation">,</span> i<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> ThreadPoolExecutor<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">as</span> t<span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            t<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>th3<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&#39;线程</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    <span class="token comment"># 执行线程池的时候主线程会被暂时挂起等待线程池任务执行完成后在执行后续代码（守护线程）</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例-爬取北京菜价</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;data.csv&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span>
csvWriter <span class="token operator">=</span> csv<span class="token punctuation">.</span>writer<span class="token punctuation">(</span>f<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">threadPoolPro</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">:</span>
    url <span class="token operator">=</span> <span class="token string">&#39;http://www.xinfadi.com.cn/getPriceData.html&#39;</span>
    data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;limit&#39;</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token string">&#39;current&#39;</span><span class="token punctuation">:</span> page
    <span class="token punctuation">}</span>
    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token operator">=</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> item <span class="token keyword">in</span> resp<span class="token punctuation">:</span>
        <span class="token comment"># 数据处理</span>
        value <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;dict_values&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;([&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;])&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token comment"># 保存数据到csv</span>
        csvWriter<span class="token punctuation">.</span>writerow<span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;page </span><span class="token interpolation"><span class="token punctuation">{</span>page<span class="token punctuation">}</span></span><span class="token string"> save finish&#39;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> ThreadPoolExecutor<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pool<span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            pool<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>threadPoolPro<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;all finish&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">downloadImg</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> url<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> aiohttp<span class="token punctuation">.</span>ClientSession<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> session<span class="token punctuation">:</span>
        <span class="token keyword">async</span> <span class="token keyword">with</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token keyword">as</span> resp<span class="token punctuation">:</span>
            <span class="token comment"># 将返回值写入文件</span>
            <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
                f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token keyword">await</span> resp<span class="token punctuation">.</span>content<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;down&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># t = Thread(target=th1)</span>
    <span class="token comment"># t.start()</span>
    <span class="token comment"># tt = th2()</span>
    <span class="token comment"># tt.start()</span>
    <span class="token comment"># for i in range(10000):</span>
    <span class="token comment">#     print(&#39;main&#39;, i)</span>

    <span class="token comment"># t = Thread(target=th3, args=(&#39;ww&#39;,))  # args参数必须是一个元组</span>
    <span class="token comment"># t.start()</span>
    <span class="token comment"># t1 = Thread(target=th3, args=(&#39;ss&#39;, &#39;dd&#39;))</span>
    <span class="token comment"># t1.start()</span>

    <span class="token comment"># with ThreadPoolExecutor(20) as t:</span>
    <span class="token comment">#     for i in range(10):</span>
    <span class="token comment">#         t.submit(th3, name=f&#39;线程{i}&#39;)</span>
    <span class="token comment"># # 执行线程池的时候主线程会被暂时挂起等待线程池任务执行完成后在执行后续代码（守护线程）</span>
    <span class="token comment"># print(&#39;end&#39;)</span>

    <span class="token comment"># 案例</span>
    <span class="token comment"># with ThreadPoolExecutor(50) as pool:</span>
    <span class="token comment">#     for i in range(1, 200):</span>
    <span class="token comment">#         pool.submit(threadPoolPro, i)</span>
    <span class="token comment"># print(&#39;all finish&#39;)</span>

    task <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>new_event_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> url <span class="token keyword">in</span> urls<span class="token punctuation">:</span>
        task<span class="token punctuation">.</span>append<span class="token punctuation">(</span>loop<span class="token punctuation">.</span>create_task<span class="token punctuation">(</span>downloadImg<span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    loop<span class="token punctuation">.</span>run_until_complete<span class="token punctuation">(</span>asyncio<span class="token punctuation">.</span>wait<span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-selenium" tabindex="-1"><a class="header-anchor" href="#_5-selenium" aria-hidden="true">#</a> 5.selenium</h2><blockquote><p>文档：https://python-selenium-zh.readthedocs.io/zh-cn/latest/</p></blockquote><h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1.安装</h3><p>https://registry.npmmirror.com/binary.html?path=chromedriver/</p><h3 id="_2-配置driver" tabindex="-1"><a class="header-anchor" href="#_2-配置driver" aria-hidden="true">#</a> 2.配置driver</h3><p>内网地址：https://registry.npmmirror.com/binary.html?path=chromedriver/</p><p>外网地址：http://chromedriver.storage.googleapis.com/index.html</p>`,74)]))}const m=s(l,[["render",u],["__file","爬虫python.html.vue"]]);export{m as default};
