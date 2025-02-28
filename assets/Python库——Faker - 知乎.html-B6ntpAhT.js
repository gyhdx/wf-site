import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,c as o,o as c,b as s,a as l,e as a,d as i}from"./app-DBc2jY3V.js";const u={},m={href:"https://link.zhihu.com/?target=https%3A//pypi.org/project/Faker/",target:"_blank",rel:"noopener noreferrer"};function d(r,n){const e=p("ExternalLinkIcon");return c(),o("div",null,[n[2]||(n[2]=s("p",null,"在编写程序过程中，我们常常需要用到很多数据来进行测试。如果要是手动制造数据的话，肯定要花费大把精力，这不合理。此时我们应该使用Faker这个Python库，用它来生成各种各样的伪数据。",-1)),n[3]||(n[3]=s("blockquote",null,[s("p",null,"来源：https://zhuanlan.zhihu.com/p/87203290")],-1)),n[4]||(n[4]=s("p",null,"在编写程序过程中，我们常常需要用到很多数据来进行测试。如果要是手动制造数据的话，肯定要花费大把精力，这不合理。此时我们应该使用Faker这个Python库，用它来生成各种各样的伪数据。",-1)),n[5]||(n[5]=s("h2",{id:"安装faker",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装faker","aria-hidden":"true"},"#"),a(" 安装Faker")],-1)),n[6]||(n[6]=s("p",null,"使用pip安装",-1)),s("p",null,[n[1]||(n[1]=a("或者去Faker的")),s("a",m,[n[0]||(n[0]=a("PyPI页面")),i(e)])]),n[7]||(n[7]=l(`<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> faker <span class="token keyword">import</span> Faker   <span class="token comment"># 1</span>
 
fake <span class="token operator">=</span> Faker<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment"># 2</span>
 
fake<span class="token punctuation">.</span>name<span class="token punctuation">(</span><span class="token punctuation">)</span>               <span class="token comment"># 3</span>
<span class="token comment"># Donna Kelly</span>
 
fake<span class="token punctuation">.</span>address<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment"># 4</span>
<span class="token comment"># 519 Donna River</span>
<span class="token comment"># Port Natalie, SD 87384</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>1.</strong> 从faker模块导入Faker这个类。</p><p><strong>2.</strong> 实例化，保存到变量fake中。</p><p><strong>3.</strong> 调用name()方法随机生成一个名字。</p><p><strong>4.</strong> 调用address()方法随机生成地址信息。</p><p>如果要生成中文的随机数据，我们可以在实例化时给locale参数传入‘zh_CN’这个值：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> faker <span class="token keyword">import</span> Faker           
 
fake <span class="token operator">=</span> Faker<span class="token punctuation">(</span>locale<span class="token operator">=</span><span class="token string">&#39;zh_CN&#39;</span><span class="token punctuation">)</span>       
 
fake<span class="token punctuation">.</span>name<span class="token punctuation">(</span><span class="token punctuation">)</span>                        
<span class="token comment"># 庞超</span>
 
fake<span class="token punctuation">.</span>address<span class="token punctuation">(</span><span class="token punctuation">)</span>                     
<span class="token comment"># 河北省辛集县合川张街p座 489476</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要生成中文繁体字，则可以传入中国台湾这个地区的值&#39;zh_TW&#39;(当然地址显示的是台湾的)：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> faker <span class="token keyword">import</span> Faker           
 
fake <span class="token operator">=</span> Faker<span class="token punctuation">(</span>locale<span class="token operator">=</span><span class="token string">&#39;zh_TW&#39;</span><span class="token punctuation">)</span>       
 
fake<span class="token punctuation">.</span>name<span class="token punctuation">(</span><span class="token punctuation">)</span>                        
<span class="token comment"># 羅婉婷</span>
 
fake<span class="token punctuation">.</span>address<span class="token punctuation">(</span><span class="token punctuation">)</span>                     
<span class="token comment"># 16934 大里縣水源巷35號之0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要生成其他语种或地区的数据，我们可以传入相应的地区值：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ar_EG <span class="token operator">-</span> Arabic <span class="token punctuation">(</span>Egypt<span class="token punctuation">)</span>
ar_PS <span class="token operator">-</span> Arabic <span class="token punctuation">(</span>Palestine<span class="token punctuation">)</span>
ar_SA <span class="token operator">-</span> Arabic <span class="token punctuation">(</span>Saudi Arabia<span class="token punctuation">)</span>
bg_BG <span class="token operator">-</span> Bulgarian
bs_BA <span class="token operator">-</span> Bosnian
cs_CZ <span class="token operator">-</span> Czech
de_DE <span class="token operator">-</span> German
dk_DK <span class="token operator">-</span> Danish
el_GR <span class="token operator">-</span> Greek
en_AU <span class="token operator">-</span> English <span class="token punctuation">(</span>Australia<span class="token punctuation">)</span>
en_CA <span class="token operator">-</span> English <span class="token punctuation">(</span>Canada<span class="token punctuation">)</span>
en_GB <span class="token operator">-</span> English <span class="token punctuation">(</span>Great Britain<span class="token punctuation">)</span>
en_NZ <span class="token operator">-</span> English <span class="token punctuation">(</span>New Zealand<span class="token punctuation">)</span>
en_US <span class="token operator">-</span> English <span class="token punctuation">(</span>United States<span class="token punctuation">)</span>
es_ES <span class="token operator">-</span> Spanish <span class="token punctuation">(</span>Spain<span class="token punctuation">)</span>
es_MX <span class="token operator">-</span> Spanish <span class="token punctuation">(</span>Mexico<span class="token punctuation">)</span>
et_EE <span class="token operator">-</span> Estonian
fa_IR <span class="token operator">-</span> Persian <span class="token punctuation">(</span>Iran<span class="token punctuation">)</span>
fi_FI <span class="token operator">-</span> Finnish
fr_FR <span class="token operator">-</span> French
hi_IN <span class="token operator">-</span> Hindi
hr_HR <span class="token operator">-</span> Croatian
hu_HU <span class="token operator">-</span> Hungarian
hy_AM <span class="token operator">-</span> Armenian
it_IT <span class="token operator">-</span> Italian
ja_JP <span class="token operator">-</span> Japanese
ka_GE <span class="token operator">-</span> Georgian <span class="token punctuation">(</span>Georgia<span class="token punctuation">)</span>
ko_KR <span class="token operator">-</span> Korean
lt_LT <span class="token operator">-</span> Lithuanian
lv_LV <span class="token operator">-</span> Latvian
ne_NP <span class="token operator">-</span> Nepali
nl_NL <span class="token operator">-</span> Dutch <span class="token punctuation">(</span>Netherlands<span class="token punctuation">)</span>
no_NO <span class="token operator">-</span> Norwegian
pl_PL <span class="token operator">-</span> Polish
pt_BR <span class="token operator">-</span> Portuguese <span class="token punctuation">(</span>Brazil<span class="token punctuation">)</span>
pt_PT <span class="token operator">-</span> Portuguese <span class="token punctuation">(</span>Portugal<span class="token punctuation">)</span>
ro_RO <span class="token operator">-</span> Romanian
ru_RU <span class="token operator">-</span> Russian
sl_SI <span class="token operator">-</span> Slovene
sv_SE <span class="token operator">-</span> Swedish
tr_TR <span class="token operator">-</span> Turkish
uk_UA <span class="token operator">-</span> Ukrainian
zh_CN <span class="token operator">-</span> Chinese <span class="token punctuation">(</span>China Mainland<span class="token punctuation">)</span>
zh_TW <span class="token operator">-</span> Chinese <span class="token punctuation">(</span>China Taiwan<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他方法" tabindex="-1"><a class="header-anchor" href="#其他方法" aria-hidden="true">#</a> 其他方法</h2><blockquote><p>注：个别方法具有针对性，比如province()方法适用中国，但不适用美国及其他一些国家。</p></blockquote><p><strong>地址相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>address<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment"># 地址</span>
<span class="token comment"># &#39;香港特别行政区大冶县上街钟街k座 664713&#39;</span>
 
fake<span class="token punctuation">.</span>building_number<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 楼名    </span>
<span class="token comment"># &#39;v座&#39;</span>
 
fake<span class="token punctuation">.</span>city<span class="token punctuation">(</span><span class="token punctuation">)</span>               <span class="token comment"># 完整城市名</span>
<span class="token comment"># &#39;长春县&#39;</span>
 
fake<span class="token punctuation">.</span>city_name<span class="token punctuation">(</span><span class="token punctuation">)</span>          <span class="token comment"># 城市名字(不带市县)</span>
<span class="token comment"># &#39;梧州&#39;</span>
 
fake<span class="token punctuation">.</span>city_suffix<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 城市后缀名</span>
<span class="token comment"># &#39;市&#39;</span>
 
fake<span class="token punctuation">.</span>country<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment"># 国家名称</span>
<span class="token comment"># &#39;厄立特里亚&#39;</span>
 
fake<span class="token punctuation">.</span>country_code<span class="token punctuation">(</span>representation<span class="token operator">=</span><span class="token string">&quot;alpha-2&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;BZ&#39;                    # 国家编号</span>
 
fake<span class="token punctuation">.</span>district<span class="token punctuation">(</span><span class="token punctuation">)</span>           <span class="token comment"># 地区</span>
<span class="token comment"># &#39;沙湾&#39;</span>
 
fake<span class="token punctuation">.</span>postcode<span class="token punctuation">(</span><span class="token punctuation">)</span>           <span class="token comment"># 邮编</span>
<span class="token comment"># &#39;332991&#39;</span>
 
fake<span class="token punctuation">.</span>province<span class="token punctuation">(</span><span class="token punctuation">)</span>           <span class="token comment"># 省</span>
<span class="token comment"># &#39;河北省&#39;</span>
 
fake<span class="token punctuation">.</span>street_address<span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment"># 街道地址</span>
<span class="token comment"># &#39;武汉街D座&#39;</span>
 
fake<span class="token punctuation">.</span>street_name<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 街道名称</span>
<span class="token comment"># &#39;广州路&#39;</span>
 
fake<span class="token punctuation">.</span>street_suffix<span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment"># 街道后缀名</span>
<span class="token comment"># &#39;路&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>汽车相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>license_plate<span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment"># 牌照</span>
<span class="token comment"># &#39;ZCO 000&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>银行相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>bank_country<span class="token punctuation">(</span><span class="token punctuation">)</span>          <span class="token comment"># 银行所属国家</span>
<span class="token comment"># &#39;GB&#39;</span>
 
fake<span class="token punctuation">.</span>bban<span class="token punctuation">(</span><span class="token punctuation">)</span>                  <span class="token comment"># 基本银行账号</span>
<span class="token comment"># &#39;TPET9323218579379&#39;          </span>
 
fake<span class="token punctuation">.</span>iban<span class="token punctuation">(</span><span class="token punctuation">)</span>                  <span class="token comment"># 国际银行代码</span>
<span class="token comment"># &#39;GB82IRVM1531009974701&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>条形码相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>ean<span class="token punctuation">(</span>length<span class="token operator">=</span><span class="token number">13</span><span class="token punctuation">)</span>    <span class="token comment"># EAN条形码</span>
<span class="token comment"># &#39;5456457843465&#39;</span>
 
fake<span class="token punctuation">.</span>ean13<span class="token punctuation">(</span><span class="token punctuation">)</span>           <span class="token comment"># EAN13条形码</span>
<span class="token comment"># &#39;2689789887590&#39;</span>
 
fake<span class="token punctuation">.</span>ean8<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment"># EAN8条形码</span>
<span class="token comment"># &#39;52227936&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>颜色相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>color_name<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 颜色名称</span>
<span class="token comment"># &#39;Orange&#39;</span>
 
fake<span class="token punctuation">.</span>hex_color<span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment"># 颜色十六进制值</span>
<span class="token comment"># &#39;#a5cb7c&#39;</span>
 
fake<span class="token punctuation">.</span>rgb_color<span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment"># 颜色RGB值</span>
<span class="token comment"># &#39;15,245,42&#39;</span>
 
fake<span class="token punctuation">.</span>rgb_css_color<span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment"># CSS颜色值</span>
<span class="token comment"># &#39;rgb(15,70,13)&#39;</span>
 
fake<span class="token punctuation">.</span>safe_color_name<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># 安全色</span>
<span class="token comment"># &#39;aqua&#39;</span>
 
fake<span class="token punctuation">.</span>safe_hex_color<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 安全色十六进制值</span>
<span class="token comment"># &#39;#881100&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>公司相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>bs<span class="token punctuation">(</span><span class="token punctuation">)</span>                 <span class="token comment"># 商业用词</span>
<span class="token comment"># &#39;synthesize strategic vortals&#39;</span>
 
fake<span class="token punctuation">.</span>catch_phrase<span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment"># 妙句(口号)</span>
<span class="token comment"># &#39;Robust even-keeled service-desk&#39;</span>
 
fake<span class="token punctuation">.</span>company<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment"># 公司名称</span>
<span class="token comment"># &#39;富罳科技有限公司&#39;</span>
 
fake<span class="token punctuation">.</span>company_prefix<span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment"># 公司名称前缀</span>
<span class="token comment"># &#39;商软冠联&#39;</span>
 
fake<span class="token punctuation">.</span>company_suffix<span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment"># 公司名称后缀</span>
<span class="token comment"># &#39;网络有限公司&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>信用卡相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>credit_card_expire<span class="token punctuation">(</span>start<span class="token operator">=</span><span class="token string">&quot;now&quot;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;+10y&quot;</span><span class="token punctuation">,</span> date_format<span class="token operator">=</span><span class="token string">&quot;%m/%y&quot;</span><span class="token punctuation">)</span>    <span class="token comment"># 过期年月</span>
<span class="token comment"># &#39;11/20&#39;                                                </span>
 
fake<span class="token punctuation">.</span>credit_card_full<span class="token punctuation">(</span>card_type<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>            <span class="token comment"># 完整信用卡信息</span>
<span class="token comment"># &#39;VISA 16 digit\\n秀珍 卢\\n4653084445257690 11/19\\nCVC: 935\\n&#39;</span>
 
fake<span class="token punctuation">.</span>credit_card_number<span class="token punctuation">(</span>card_type<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>          <span class="token comment"># 信用卡卡号</span>
<span class="token comment"># &#39;4339481813664365360&#39;</span>
 
fake<span class="token punctuation">.</span>credit_card_provider<span class="token punctuation">(</span>card_type<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>        <span class="token comment"># 信用卡提供商</span>
<span class="token comment"># &#39;VISA 19 digit&#39;</span>
 
fake<span class="token punctuation">.</span>credit_card_security_code<span class="token punctuation">(</span>card_type<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>   <span class="token comment"># 信用卡安全码</span>
<span class="token comment"># &#39;597&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>货币相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>cryptocurrency<span class="token punctuation">(</span><span class="token punctuation">)</span>           <span class="token comment"># 加密货币代码+名称</span>
<span class="token comment"># (&#39;TRX&#39;, &#39;TRON&#39;)</span>
 
fake<span class="token punctuation">.</span>cryptocurrency_code<span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment"># 加密货币代码</span>
<span class="token comment"># &#39;MZC&#39;</span>
 
fake<span class="token punctuation">.</span>cryptocurrency_name<span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment"># 加密货币名称</span>
<span class="token comment"># &#39;Ripple&#39;</span>
 
fake<span class="token punctuation">.</span>currency<span class="token punctuation">(</span><span class="token punctuation">)</span>                 <span class="token comment"># 货币代码+名称</span>
<span class="token comment"># (&#39;GNF&#39;, &#39;Guinean franc&#39;)</span>
 
fake<span class="token punctuation">.</span>currency_code<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment"># 货币代码</span>
<span class="token comment"># &#39;SOS&#39;</span>
 
fake<span class="token punctuation">.</span>currency_name<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment"># 货币名称</span>
<span class="token comment"># &#39;Lebanese pound&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>时间相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>am_pm<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># AM或PM</span>
<span class="token comment"># &#39;PM&#39;</span>
 
fake<span class="token punctuation">.</span>century<span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment"># 世纪</span>
<span class="token comment"># &#39;XII&#39;</span>
 
fake<span class="token punctuation">.</span>date<span class="token punctuation">(</span>pattern<span class="token operator">=</span><span class="token string">&quot;%Y-%m-%d&quot;</span><span class="token punctuation">,</span> end_datetime<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>            <span class="token comment"># 日期字符串(可设置格式和最大日期)</span>
<span class="token comment"># &#39;1998-05-13&#39;</span>
 
fake<span class="token punctuation">.</span>date_between<span class="token punctuation">(</span>start_date<span class="token operator">=</span><span class="token string">&quot;-30y&quot;</span><span class="token punctuation">,</span> end_date<span class="token operator">=</span><span class="token string">&quot;today&quot;</span><span class="token punctuation">)</span>      <span class="token comment"># 日期(可设置限定范围)</span>
<span class="token comment"># datetime.date(2014, 8, 17)</span>
 
fake<span class="token punctuation">.</span>date_between_dates<span class="token punctuation">(</span>date_start<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> date_end<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>     <span class="token comment"># 同上</span>
<span class="token comment"># datetime.date(2019, 10, 14)</span>
 
fake<span class="token punctuation">.</span>date_object<span class="token punctuation">(</span>end_datetime<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>                         <span class="token comment"># 日期(可设置最大日期)</span>
<span class="token comment"># datetime.date(1981, 12, 20)</span>
 
fake<span class="token punctuation">.</span>date_of_birth<span class="token punctuation">(</span>tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> minimum_age<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> maximum_age<span class="token operator">=</span><span class="token number">115</span><span class="token punctuation">)</span>    <span class="token comment"># 出生日期</span>
<span class="token comment"># datetime.date(1931, 12, 8)</span>
 
fake<span class="token punctuation">.</span>date_this_century<span class="token punctuation">(</span>before_today<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> after_today<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>       <span class="token comment"># 本世纪日期</span>
<span class="token comment"># datetime.date(2003, 5, 4)</span>
 
fake<span class="token punctuation">.</span>date_this_decade<span class="token punctuation">(</span>before_today<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> after_today<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>        <span class="token comment"># 本年代中的日期</span>
<span class="token comment"># datetime.date(2014, 1, 29)</span>
 
fake<span class="token punctuation">.</span>date_this_month<span class="token punctuation">(</span>before_today<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> after_today<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>         <span class="token comment"># 本月中的日期</span>
<span class="token comment"># datetime.date(2019, 10, 10)</span>
 
fake<span class="token punctuation">.</span>date_this_year<span class="token punctuation">(</span>before_today<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> after_today<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>          <span class="token comment"># 本年中的日期</span>
<span class="token comment"># datetime.date(2019, 3, 6)</span>
 
fake<span class="token punctuation">.</span>date_time<span class="token punctuation">(</span>tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> end_datetime<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>                     <span class="token comment"># 日期和时间</span>
<span class="token comment"># datetime.datetime(1990, 8, 11, 22, 25)</span>
 
fake<span class="token punctuation">.</span>date_time_ad<span class="token punctuation">(</span>tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> end_datetime<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> start_datetime<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>    <span class="token comment"># 日期和时间(从001年1月1日到现在)</span>
<span class="token comment"># datetime.datetime(244, 12, 17, 9, 59, 56)</span>
 
fake<span class="token punctuation">.</span>date_time_between<span class="token punctuation">(</span>start_date<span class="token operator">=</span><span class="token string">&quot;-30y&quot;</span><span class="token punctuation">,</span> end_date<span class="token operator">=</span><span class="token string">&quot;now&quot;</span><span class="token punctuation">,</span> tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>    <span class="token comment"># 日期时间(可设置限定范围)</span>
<span class="token comment"># datetime.datetime(1995, 4, 19, 17, 23, 51)</span>
 
fake<span class="token punctuation">.</span>date_time_between_dates<span class="token punctuation">(</span>datetime_start<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> datetime_end<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>    <span class="token comment"># 同上</span>
<span class="token comment"># datetime.datetime(2019, 10, 14, 14, 15, 36)                                  </span>
 
fake<span class="token punctuation">.</span>date_time_this_century<span class="token punctuation">(</span>before_now<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> after_now<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>     <span class="token comment"># 本世纪中的日期和时间</span>
<span class="token comment"># datetime.datetime(2009, 8, 26, 18, 27, 9)</span>
 
fake<span class="token punctuation">.</span>date_time_this_decade<span class="token punctuation">(</span>before_now<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> after_now<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>      <span class="token comment"># 本年代中的日期和时间</span>
<span class="token comment"># datetime.datetime(2019, 2, 24, 22, 18, 44)</span>
 
fake<span class="token punctuation">.</span>date_time_this_month<span class="token punctuation">(</span>before_now<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> after_now<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>       <span class="token comment"># 本月中的日期和时间</span>
<span class="token comment"># datetime.datetime(2019, 10, 3, 9, 20, 44)</span>
 
fake<span class="token punctuation">.</span>date_time_this_year<span class="token punctuation">(</span>before_now<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> after_now<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>        <span class="token comment"># 本年中的日期和时间</span>
<span class="token comment"># datetime.datetime(2019, 2, 10, 7, 3, 18)</span>
 
fake<span class="token punctuation">.</span>day_of_month<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># 几号</span>
<span class="token comment"># &#39;23&#39;</span>
 
fake<span class="token punctuation">.</span>day_of_week<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 星期几</span>
<span class="token comment"># &#39;Tuesday&#39;</span>
 
fake<span class="token punctuation">.</span>future_date<span class="token punctuation">(</span>end_date<span class="token operator">=</span><span class="token string">&quot;+30d&quot;</span><span class="token punctuation">,</span> tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>        <span class="token comment"># 未来日期</span>
<span class="token comment"># datetime.date(2019, 10, 28)</span>
 
fake<span class="token punctuation">.</span>future_datetime<span class="token punctuation">(</span>end_date<span class="token operator">=</span><span class="token string">&quot;+30d&quot;</span><span class="token punctuation">,</span> tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>    <span class="token comment"># 未来日期和时间</span>
<span class="token comment"># datetime.datetime(2019, 10, 28, 21, 4, 35)</span>
 
fake<span class="token punctuation">.</span>iso8601<span class="token punctuation">(</span>tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> end_datetime<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>          <span class="token comment"># iso8601格式日期和时间</span>
<span class="token comment"># &#39;1995-04-10T00:45:01&#39;</span>
 
fake<span class="token punctuation">.</span>month<span class="token punctuation">(</span><span class="token punctuation">)</span>                                          <span class="token comment"># 第几月</span>
<span class="token comment"># &#39;07&#39;</span>
 
fake<span class="token punctuation">.</span>month_name<span class="token punctuation">(</span><span class="token punctuation">)</span>                                     <span class="token comment"># 月份名称</span>
<span class="token comment"># &#39;December&#39;</span>
 
fake<span class="token punctuation">.</span>past_date<span class="token punctuation">(</span>start_date<span class="token operator">=</span><span class="token string">&quot;-30d&quot;</span><span class="token punctuation">,</span> tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>        <span class="token comment"># 过去日期</span>
<span class="token comment"># datetime.date(2019, 10, 3)</span>
 
fake<span class="token punctuation">.</span>past_datetime<span class="token punctuation">(</span>start_date<span class="token operator">=</span><span class="token string">&quot;-30d&quot;</span><span class="token punctuation">,</span> tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>    <span class="token comment"># 过去日期和时间</span>
<span class="token comment"># datetime.datetime(2019, 9, 30, 20, 25, 43)</span>
 
fake<span class="token punctuation">.</span>time<span class="token punctuation">(</span>pattern<span class="token operator">=</span><span class="token string">&quot;%H:%M:%S&quot;</span><span class="token punctuation">,</span> end_datetime<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>      <span class="token comment"># 时间(可设置格式和最大日期时间)</span>
<span class="token comment"># &#39;14:26:44&#39;</span>
 
fake<span class="token punctuation">.</span>time_delta<span class="token punctuation">(</span>end_datetime<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>                    <span class="token comment"># 时间间隔</span>
<span class="token comment"># datetime.timedelta(0)</span>
 
fake<span class="token punctuation">.</span>time_object<span class="token punctuation">(</span>end_datetime<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>                   <span class="token comment"># 时间(可设置最大日期时间)</span>
<span class="token comment"># datetime.time(4, 41, 39)</span>
 
fake<span class="token punctuation">.</span>time_series<span class="token punctuation">(</span>start_date<span class="token operator">=</span><span class="token string">&quot;-30d&quot;</span><span class="token punctuation">,</span> end_date<span class="token operator">=</span><span class="token string">&quot;now&quot;</span><span class="token punctuation">,</span> precision<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> distrib<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
<span class="token comment"># &lt;generator object Provider.time_series at 0x7fadf51e0930&gt;</span>
 
fake<span class="token punctuation">.</span>timezone<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 时区</span>
<span class="token comment"># &#39;Asia/Baku&#39;</span>
 
fake<span class="token punctuation">.</span>unix_time<span class="token punctuation">(</span>end_datetime<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> start_datetime<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>    <span class="token comment"># UNIX时间戳</span>
<span class="token comment"># 393980728</span>
 
fake<span class="token punctuation">.</span>year<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 某年</span>
<span class="token comment"># &#39;2016&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>文件相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>file_extension<span class="token punctuation">(</span>category<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>                <span class="token comment"># 文件扩展名</span>
<span class="token comment"># &#39;avi&#39;</span>
 
fake<span class="token punctuation">.</span>file_name<span class="token punctuation">(</span>category<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> extension<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>     <span class="token comment"># 文件名</span>
<span class="token comment"># &#39;专业.pptx&#39;</span>
 
fake<span class="token punctuation">.</span>file_path<span class="token punctuation">(</span>depth<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> category<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> extension<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>    <span class="token comment"># 文件路径</span>
<span class="token comment"># &#39;/的话/以上.ods&#39;</span>
 
fake<span class="token punctuation">.</span>mime_type<span class="token punctuation">(</span>category<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>                     <span class="token comment"># MIME类型</span>
<span class="token comment"># &#39;application/xop+xml&#39;</span>
 
fake<span class="token punctuation">.</span>unix_device<span class="token punctuation">(</span>prefix<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>                     <span class="token comment"># UNIX设备</span>
<span class="token comment"># &#39;/dev/xvdq&#39;</span>
 
fake<span class="token punctuation">.</span>unix_partition<span class="token punctuation">(</span>prefix<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>                  <span class="token comment"># UNIX分区</span>
<span class="token comment"># &#39;/dev/xvdc6&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>坐标相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>coordinate<span class="token punctuation">(</span>center<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> radius<span class="token operator">=</span><span class="token number">0.001</span><span class="token punctuation">)</span>        <span class="token comment"># 坐标</span>
<span class="token comment"># Decimal(&#39;147.543284&#39;)</span>
 
fake<span class="token punctuation">.</span>latitude<span class="token punctuation">(</span><span class="token punctuation">)</span>                                   <span class="token comment"># 纬度</span>
<span class="token comment"># Decimal(&#39;66.519139&#39;)</span>
 
fake<span class="token punctuation">.</span>latlng<span class="token punctuation">(</span><span class="token punctuation">)</span>                                     <span class="token comment"># 经纬度</span>
<span class="token comment"># (Decimal(&#39;55.3370965&#39;), Decimal(&#39;-15.427896&#39;))</span>
 
fake<span class="token punctuation">.</span>local_latlng<span class="token punctuation">(</span>country_code<span class="token operator">=</span><span class="token string">&quot;US&quot;</span><span class="token punctuation">,</span> coords_only<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>    <span class="token comment"># 返回某个国家某地的经纬度</span>
<span class="token comment"># (&#39;25.67927&#39;, &#39;-80.31727&#39;, &#39;Kendall&#39;, &#39;US&#39;, &#39;America/New_York&#39;)</span>
 
fake<span class="token punctuation">.</span>location_on_land<span class="token punctuation">(</span>coords_only<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>                   <span class="token comment"># 返回地球上某个位置的经纬度</span>
<span class="token comment"># (&#39;42.50729&#39;, &#39;1.53414&#39;, &#39;les Escaldes&#39;, &#39;AD&#39;, &#39;Europe/Andorra&#39;)</span>
 
fake<span class="token punctuation">.</span>longitude<span class="token punctuation">(</span><span class="token punctuation">)</span>                                   <span class="token comment"># 经度</span>
<span class="token comment"># Decimal(&#39;70.815233&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>网络相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>ascii_company_email<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>        <span class="token comment"># 企业邮箱(ascii编码)</span>
<span class="token comment"># &#39;qiuyan@xiulan.cn&#39;</span>
 
fake<span class="token punctuation">.</span>ascii_email<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>                <span class="token comment"># 企业邮箱+免费邮箱(ascii编码)</span>
<span class="token comment"># &#39;lei59@78.net&#39;</span>
 
fake<span class="token punctuation">.</span>ascii_free_email<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>           <span class="token comment"># 免费邮箱(ascii编码)</span>
<span class="token comment"># &#39;pcheng@gmail.com&#39;</span>
 
fake<span class="token punctuation">.</span>ascii_safe_email<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>           <span class="token comment"># 安全邮箱(ascii编码)</span>
<span class="token comment"># &#39;fangyan@example.org&#39;</span>
 
fake<span class="token punctuation">.</span>company_email<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>              <span class="token comment"># 企业邮箱</span>
<span class="token comment"># &#39;scao@pingjing.net&#39;</span>
 
fake<span class="token punctuation">.</span>domain_name<span class="token punctuation">(</span>levels<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>                       <span class="token comment"># 域名</span>
<span class="token comment"># &#39;dy.cn&#39;</span>
 
fake<span class="token punctuation">.</span>domain_word<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>                <span class="token comment"># 二级域名</span>
<span class="token comment"># &#39;gangxiuying&#39;</span>
 
fake<span class="token punctuation">.</span>email<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>                      <span class="token comment"># 企业邮箱+免费邮箱</span>
<span class="token comment"># &#39;na13@ding.cn&#39;</span>
 
fake<span class="token punctuation">.</span>free_email<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>                 <span class="token comment"># 免费邮箱</span>
<span class="token comment"># &#39;fang48@hotmail.com&#39;</span>
 
fake<span class="token punctuation">.</span>free_email_domain<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>          <span class="token comment"># 免费邮箱域名</span>
<span class="token comment"># &#39;yahoo.com&#39;</span>
 
fake<span class="token punctuation">.</span>hostname<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>                   <span class="token comment"># 主机名</span>
<span class="token comment"># &#39;lt-70.53.cn&#39;</span>
 
fake<span class="token punctuation">.</span>image_url<span class="token punctuation">(</span>width<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>          <span class="token comment"># 图片URL</span>
<span class="token comment"># &#39;https://placekitten.com/752/243&#39;</span>
 
fake<span class="token punctuation">.</span>ipv4<span class="token punctuation">(</span>network<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> address_class<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> private<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>    <span class="token comment"># ipv4</span>
<span class="token comment"># &#39;160.152.149.78&#39;</span>
 
fake<span class="token punctuation">.</span>ipv4_network_class<span class="token punctuation">(</span><span class="token punctuation">)</span>                                     <span class="token comment"># ipv4网络等级</span>
<span class="token comment"># &#39;b&#39;</span>
 
fake<span class="token punctuation">.</span>ipv4_private<span class="token punctuation">(</span>network<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> address_class<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>          <span class="token comment"># 私有ipv4</span>
<span class="token comment"># &#39;10.99.124.57&#39;</span>
 
fake<span class="token punctuation">.</span>ipv4_public<span class="token punctuation">(</span>network<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> address_class<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>           <span class="token comment"># 公共ipv4</span>
<span class="token comment"># &#39;169.120.29.235&#39;</span>
 
fake<span class="token punctuation">.</span>ipv6<span class="token punctuation">(</span>network<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>                                      <span class="token comment"># ipv6</span>
<span class="token comment"># &#39;f392:573f:d60f:9aed:2a4c:36d7:fe5b:7034&#39;</span>
 
fake<span class="token punctuation">.</span>mac_address<span class="token punctuation">(</span><span class="token punctuation">)</span>                            <span class="token comment"># MAC地址</span>
<span class="token comment"># &#39;62:67:79:8c:c2:40&#39;</span>
 
fake<span class="token punctuation">.</span>safe_email<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>              <span class="token comment"># 安全邮箱</span>
<span class="token comment"># &#39;jing58@example.org&#39;</span>
 
fake<span class="token punctuation">.</span>slug<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>                    <span class="token comment"># URL中的slug</span>
<span class="token comment"># &#39;&#39;</span>
 
fake<span class="token punctuation">.</span>tld<span class="token punctuation">(</span><span class="token punctuation">)</span>                                    <span class="token comment"># 顶级域名</span>
<span class="token comment"># &#39;cn&#39;</span>
 
fake<span class="token punctuation">.</span>uri<span class="token punctuation">(</span><span class="token punctuation">)</span>                                    <span class="token comment"># URI</span>
<span class="token comment"># &#39;http://yi.com/list/main/explore/register.php&#39;</span>
 
fake<span class="token punctuation">.</span>uri_extension<span class="token punctuation">(</span><span class="token punctuation">)</span>                          <span class="token comment"># URI扩展</span>
<span class="token comment"># &#39;.php&#39;</span>
 
fake<span class="token punctuation">.</span>uri_page<span class="token punctuation">(</span><span class="token punctuation">)</span>                               <span class="token comment"># URI页</span>
<span class="token comment"># &#39;terms&#39;</span>
 
fake<span class="token punctuation">.</span>uri_path<span class="token punctuation">(</span>deep<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>                      <span class="token comment"># URI路径</span>
<span class="token comment"># &#39;blog/tags/blog&#39;</span>
 
fake<span class="token punctuation">.</span>url<span class="token punctuation">(</span>schemes<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>                        <span class="token comment"># URL</span>
<span class="token comment"># &#39;http://liutao.cn/&#39;</span>
 
fake<span class="token punctuation">.</span>user_name<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>               <span class="token comment"># 用户名</span>
<span class="token comment"># &#39;xiulan80&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>图书相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>isbn10<span class="token punctuation">(</span>separator<span class="token operator">=</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span>        <span class="token comment"># ISBN-10图书编号</span>
<span class="token comment"># &#39;0-588-73943-X&#39;</span>
 
fake<span class="token punctuation">.</span>isbn13<span class="token punctuation">(</span>separator<span class="token operator">=</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span>        <span class="token comment"># ISBN-13图书编号</span>
<span class="token comment"># &#39;978-1-116-51399-8&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>职位相关</strong></p><p><strong>文本相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>paragraph<span class="token punctuation">(</span>nb_sentences<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> variable_nb_sentences<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> ext_word_list<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>    <span class="token comment"># 单个段落</span>
<span class="token comment"># &#39;最新事情生产.方面解决名称责任而且.类型其实内容发生电脑.音乐具有今年是一.&#39;</span>
 
fake<span class="token punctuation">.</span>paragraphs<span class="token punctuation">(</span>nb<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> ext_word_list<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>                                         <span class="token comment"># 多个段落                                            </span>
<span class="token comment"># [&#39;使用评论管理.没有广告工作评论是否.&#39;, &#39;帖子而且专业.这些比较完全发现准备设计工具.&#39;, &#39;完成详细发生空间汽车.新闻电影您的游戏这种操作网站知道.&#39;]</span>
 
fake<span class="token punctuation">.</span>sentence<span class="token punctuation">(</span>nb_words<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">,</span> variable_nb_words<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> ext_word_list<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>    <span class="token comment"># 单个句子</span>
<span class="token comment"># &#39;直接这样点击单位对于时候.&#39;</span>
 
fake<span class="token punctuation">.</span>sentences<span class="token punctuation">(</span>nb<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> ext_word_list<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>                                 <span class="token comment"># 多个句子</span>
<span class="token comment"># [&#39;电话国际项目管理.&#39;, &#39;软件之后提高一样次数电影规定.&#39;, &#39;东西会员发展什么不断经济.&#39;]</span>
 
fake<span class="token punctuation">.</span>text<span class="token punctuation">(</span>max_nb_chars<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">,</span> ext_word_list<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>                          <span class="token comment"># 单个文本</span>
<span class="token comment"># (&#39;资源信息得到因此开发资源资料.\\n&#39;</span>
<span class="token comment">#  &#39;国家这样等级需要用户如此.电话非常一切游戏所以学校类型.不要正在如果来源认为投资在线.\\n&#39;</span>
<span class="token comment">#  &#39;这些更新密码其中起来实现有些.以上事情重要通过.\\n&#39;</span>
<span class="token comment">#  &#39;但是就是介绍最大深圳简介设计.历史这种可以出现中心社区.\\n&#39;</span>
<span class="token comment">#  &#39;政府当然包括简介全国内容生活.有些地址以上.回复这些来自搜索现在不断经营不断.\\n&#39;</span>
<span class="token comment">#  &#39;操作为什孩子报告东西拥有如此.相关特别业务日本这种.合作问题准备比较谢谢.&#39;)</span>
 
fake<span class="token punctuation">.</span>texts<span class="token punctuation">(</span>nb_texts<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> max_nb_chars<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">,</span> ext_word_list<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>             <span class="token comment"># 多个文本</span>
<span class="token comment"># [   &#39;地址控制无法正在必须中心积分一些.支持制作安全.\\n&#39;</span>
<span class="token comment">#     &#39;比较最新最大她的功能能够是一.主题选择当前显示.\\n&#39;</span>
<span class="token comment">#     &#39;的话社会现在地区阅读继续所有.美国数据正在深圳不能.\\n&#39;</span>
<span class="token comment">#     &#39;能够查看其中生活商品.谢谢认为之后以及以下之后这里.\\n&#39;</span>
<span class="token comment">#     &#39;活动支持人民这么今年.要求包括生活运行技术社会.\\n&#39;</span>
<span class="token comment">#     &#39;当前更多游戏.下载一点开发论坛法律为了美国.\\n&#39;</span>
<span class="token comment">#     &#39;如何更新个人谢谢作为还有论坛.销售销售法律学生这么责任一些.&#39;,</span>
<span class="token comment">#     &#39;日本最大方法活动主题到了结果.教育还有孩子觉得简介出现国际.东西国家图片威望品牌.\\n&#39;</span>
<span class="token comment">#     &#39;那些会员现在准备可能.威望部分文件主题东西业务一切之间.所以必须当前方法.\\n&#39;</span>
<span class="token comment">#     &#39;等级大小重要可能下载孩子.来源感觉业务文件以后深圳学校.网络什么新闻都是安全.\\n&#39;</span>
<span class="token comment">#     &#39;资料重要成功谢谢时候音乐安全相关.电脑系列日期.工具使用搜索来源首页.\\n&#39;</span>
<span class="token comment">#     &#39;直接企业影响大小什么.相关品牌选择她的规定来源推荐.&#39;,</span>
<span class="token comment">#     &#39;中文文化数据内容系统.他们这些之间深圳.\\n&#39;</span>
<span class="token comment">#     &#39;联系城市出现部分都是政府生活.社会同时人民市场现在决定需要.其他政府简介深圳教育加入对于.\\n&#39;</span>
<span class="token comment">#     &#39;运行是一语言安全通过大小学生.商品然后信息由于虽然.\\n&#39;</span>
<span class="token comment">#     &#39;因为关于选择希望行业具有深圳.出现价格那么下载提高知道人员.设备直接显示事情帖子正在两个关于.\\n&#39;</span>
<span class="token comment">#     &#39;系列公司大家.论坛所以完全文章标准.活动中国工具电脑.\\n&#39;</span>
<span class="token comment">#     &#39;主题作者不能.进行国家系统地区增加.经验质量价格我的.&#39;]</span>
 
fake<span class="token punctuation">.</span>word<span class="token punctuation">(</span>ext_word_list<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>                                            <span class="token comment"># 单个词语</span>
<span class="token comment"># &#39;新闻&#39;</span>
 
fake<span class="token punctuation">.</span>words<span class="token punctuation">(</span>nb<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> ext_word_list<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> unique<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>                       <span class="token comment"># 多个词语</span>
<span class="token comment"># [&#39;选择&#39;, &#39;历史&#39;, &#39;规定&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编码相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>binary<span class="token punctuation">(</span>length<span class="token operator">=</span><span class="token number">1048576</span><span class="token punctuation">)</span>                <span class="token comment"># 二进制</span>
<span class="token comment"># (b&#39;\\xbf\\xce\\x01Y:\\xf7\\xf4\\xe0G]\\x94*Rb\\x9f\\x85\\xb6\\xcd\\x83\\x15\\t\\xbc\\x16\\x8d&#39;</span>
<span class="token comment">#  b&#39;\\xcb\\n\\x90\\x10S\\x1e85\\x91\\xae\\x06\\xbdq.\\xf6c\\x1f\\xfd\\x94=\\\\\\xf9_\\xc2&#39;</span>
<span class="token comment">#  b&#39;t\\xe0{\\x15\\xd9\\x8fW7\\xe5[\\x0b\\x84\\xd2\\x94\\xf4\\xd91\\xd2\\x91\\x01\\xb5\\xeej\\x84&#39;</span>
<span class="token comment">#  b&#39;*\\x81\\x96\\xa7\\xa9\\xda\\x1f\\xee\\x9a\\xb0\\x1d\\xef\\xad\\x92\\x1c\\x0f\\xa0U6\\xaf&#39;</span>
<span class="token comment">#  b&#39;x5\\x9f\\x93\\\\b \\xf7kq\\xfe\\x97(\\xe0Q\\x89*\\xbb\\x8b\\x9a\\x14\\xd2\\xfe\\x07&#39;</span>
<span class="token comment">#  b&#39;\\xfe\\xcfYy\\x16\\x12\\xef\\xe3\\xd9%\\x95\\\\\\x80O\\xec\\x9f\\xf7\\x88\\xfal&#39;</span>
<span class="token comment">#  b&#39;\\x11\\x93\\x94\\xb1\\xd9\\xf6b\\xf0\\x7f\\xa2\\x95\\x93[\\x98\\xf3\\xe0$\\xdd\\xe0D&#39;</span>
<span class="token comment">#  b&#39;\\xde\\x8c\\xe3\\xe0\\xc0f\\xab\\x1c\\xf6\\xdf]\\xbe8U\\x11\\xc7\\xce\\xf6f\\xc9&#39;</span>
<span class="token comment">#  b&#39;1\\xa6\\xda\\x85\\xe6.\\xda\\xd1_\\x8a\\xbe\\x05\\xbf\\xf4*x [\\xb9\\xc3\\xbb\\x99\\xa1\\xbe&#39;</span>
<span class="token comment">#  b&#39;GT\\xb75\\x96\\x8a\\x9a:\`o\\x1bm\\xe9KzT\\x0c\\xdc\\xb1\\xe7ssiN\\xcb2\\x8eY&#39;</span>
<span class="token comment">#  b&#39;\\xd1\\xb4\\x8c+\\xe9\\xc1Ph\\x0fD\\x0f\\xd5}\\n/K$\\x85J\\xaf\\x1d\\xb2\\xd0R\\xa7n0l&#39;</span>
<span class="token comment">#  b&#39;\\xafQ\\x91\\x95\\xac]a\\xe1\\x8f\\x1f\\x9e\`e\\xd2\\x1f\\xaa\\xeb\\xf3[}(\\xd60\\x01&#39;</span>
<span class="token comment">#  b&#39;Y\\r\\xe2XCW\\xba\\xa3\\xad\\xe4OP\\x891=\\xff\\xae\\xb9\\x9d\\xa2!\\xfa2\\r\\x81\\xfat\\xfb&#39;</span>
<span class="token comment">#  b&#39;3t%\\xd5\\x11B\\x94Os\\x8d\\xc5\\xae%\\xa6\\x93}[p\\x02\\xd7\\xba\\xa4\\xf0?R\\xbb\\xf6\\xb1&#39;</span>
<span class="token comment">#  b&#39;h\\x12J\\x05\\xce\\xf9\\xcd\\xc6\\xa7\\xed\\x80\\x9e\\x9e\\xf8q]\\xab\\x9a\\xd7\\xd6&#39;</span>
<span class="token comment">#  b&#39;\\xad\\xecK\\x1d=\\xb0?\\xb2\\x83\\t&lt;\\xb2ZGl\\x9f\\x8dmI\\x1d\\xf1jh\\xd3s\\x9d\\xd6\\xf9&#39;</span>
<span class="token comment">#  b&#39;\\x8e\\xbfs\\xa9_\\xe0\\xaf\\x86O\\xde|\\x17\\xb5\\x8b\\xe4:Z\\xa1\\x01f\\xc9l[Z&#39;</span>
<span class="token comment">#  b&#39;\\xb4\\x7fS\\x0f7\\x9c\\x9d\\xdd\\xd3PY\\x86\\xf4\\xec\\xcb\\x87\\x05\\xafU-\\xaebY~&#39;</span>
<span class="token comment">#  b&quot;\\x9f\\xec\\xf6\\x9c\\x84\\x99&#39;S\\xd4\\t.\\xd0x\\xbb\\x01&lt;&amp;\\xdd\\xfc6M\\xa9|R&quot;</span>
<span class="token comment">#  b&#39;\\xec\\xf9b\\xcdz\\x9a\\x97p\\xb5\\xb6\\x13\\xd9\\xab\\x91C\\xe4\\x95\\xc9\\x18\\xaeAi\\\\N&#39;</span>
<span class="token comment">#  b&quot;#\\x99\\t+Z\\xd2\\xf1\\x89\\xa0L\\x04\\xef\\xaf&lt;\\xc4\\xfbO\\xcd\\x83\\xd4\\x17&#39;C\\x10&quot;</span>
<span class="token comment">#  b&#39;\\x0b\\xd6\\xb5Cv\\x98}E\\xc9;\\xbf\\x05\\xab\\xc7 W\\xa8\\xbcmX\\x06\\x865\\xbe\\\\f\\xedc&#39;</span>
<span class="token comment">#  b&#39;\\xacb\\xc8\\x84\\xc0KI\\xd5\\xea\\x888\\x93^\\xfcE\\xee,^(\\x97g\\xd17\\xcd8\\xabU\\x95&#39;</span>
<span class="token comment">#  b&#39;\\x17~]\\x08\\x11\\xa4\\xbf\\xed\\xf3\\xabm\\x15l\\xde\\xf5\\x06c\\xe1\\xad+&#39;</span>
<span class="token comment">#  b&#39;\\xed\\xd1\\xa5\\xda\\x15\\xbax\\xac}\\x8e\\xd7\\x8831\\x04\\xb3\\xae\\xc7\\xb4\\x04&#39;</span>
<span class="token comment">#  b&#39;y\\xda!\\xeb\\x1e\\xcd\\n+\\x94#4\\xe51\\xc8\\xe9t\\n.:\\xfd\\xcfc\\x1a\\xcf\\x99VY\\x11&#39;</span>
<span class="token comment">#  b&#39;Y\\x1bF\\xe9\\x9e\\xebK\\x86WD\\x80\\x12\\xf1\\x11z\\xf6\\xe3vV4\\xbcB\\n^k(\\x1aw&#39;</span>
<span class="token comment">#  b&#39;&lt;\\xfd\\x95z\\t\\xf7\\xaa_F%n\\xc4\\xeb\\x94\\xcd\\x80\\xffh\\xbe{^\\x04\\xe3\\xe7&#39;</span>
<span class="token comment">#  b&#39;\\xab\\xa3\\xd9\\x037\\x86\\xde~J\\x15th\\x98_\\xda\\xe25\\xeaO\\xc8\\x15\\xae\\xd7\\xa9&#39;</span>
<span class="token comment">#  b&#39;\\x80\\x9as\\xef&lt;FU\\xb2\\x10\\x7fN\\x05\\x8dd_\\xef\\x0bQO-\\x9diW\\xdc\\xcdV\\xbe*&#39;</span>
<span class="token comment">#  b&#39;\\x13\\xa7$\\x08\\xe4\\xb8\\x96bd\\xcf\\xe7\\xd6h\\xe9.{Z:S\\xef\\xc4\\x14R\\x91&#39;</span>
<span class="token comment">#  b&quot;\\xce\\xd3\\xcd\\xe3\\xbc\\x9f!Y\\x05A\\xa00\\x11\\xca\\xaa\\xeb\\xc4&#39;)\\xb3\\xdcF\\x8e\\xfa&quot;</span>
<span class="token comment">#  b&#39;\\xbd\\x9b:\\xae\\x1f\\xbe&lt;7]\\x93E\\xc2\\x1b\\x17\\xc95x\\x8f\\x88|\\xb8^\\xea\\x06&#39;</span>
<span class="token comment">#  b&#39;(\\x9d\\xc5\\xeb\\x8a|\\x9f\\x05\\x83\\xfe\\xf5KsUy\\xdc\\xd1S\\x96\\xda\\xc5q\\xc4\\xfd&#39;</span>
<span class="token comment">#  b&#39;\\xeb\\xc4&quot;\\x14Y\\x1cU\\x99\\xe8\\x11r\\x04\\x941\\xa1\\xac^c\\xbbG\\xc4\\xd8\\xb70&#39;</span>
<span class="token comment">#  b&#39;\\xadX\\x98\\xad\\xf8\\xc1\\x11\\x10\\xbc\\x00\\x80\\x84\\x05\\x07b\\x8c0\\x93\\xe6\\xd8&#39;</span>
<span class="token comment">#  b&#39;\\xe2I\\xea\\xecm+-\\x8aY\\xb8F\\x0e\\x19#zH{/\\xcb\\x88\\xac\\xa9\\xfe\\x84cH[_&#39;</span>
<span class="token comment">#  b&#39;0d\\xc6\\xc4\\x0b\\r\\x9ef\\n\\xb3\\x97d\\xb4;\\xf1\\x014kv\\xd9h\\xad\\x18/\\xe6\\xf1r\\xa1&#39;</span>
<span class="token comment">#  b&#39;3\\x9cz\\xf7\\x90\\r\\xaf\\xed\\x85\\x07\\x80\\xbb\\xc2\\x82\\xe4\\xcc\\x91\\xc8\\xdf\\x9a&#39;</span>
<span class="token comment">#  b&#39;\`St\\xd8\\x98\\xbb\\xac\\xe9\\x93\\xe0*\\xd7\\x9b/)\\x93\\x08\\xc1\\x0cxhD\\xd2\\xf1&#39;</span>
<span class="token comment">#  b&#39;\\xbe5\\xe1\\x1f:\\x04\\x07\\xf1\\xb4\\xaeJ\\xe2\\xe0[\\x9e\\xa4\\x9b\\xed)\\xbf\\xc2}+\\x88&#39;</span>
<span class="token comment">#  b&#39;\\x08I^f\\x82-\\xa2o\\xb2\\xc3\\x85\\xc5;Z\\x13B\\xf76~\\x9af\\xf7\\xa9\\x1a\\xa4\\xd4\\xb8b&#39;)</span>
 
fake<span class="token punctuation">.</span>boolean<span class="token punctuation">(</span>chance_of_getting_true<span class="token operator">=</span><span class="token number">50</span><span class="token punctuation">)</span>    <span class="token comment"># 布尔值</span>
<span class="token comment"># True</span>
 
fake<span class="token punctuation">.</span>md5<span class="token punctuation">(</span>raw_output<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>                 <span class="token comment"># Md5</span>
<span class="token comment"># &#39;0712ca7a3be00aa01c823de37dc61230&#39;</span>
 
fake<span class="token punctuation">.</span>null_boolean<span class="token punctuation">(</span><span class="token punctuation">)</span>                        <span class="token comment"># NULL+布尔值</span>
<span class="token comment"># True</span>
 
fake<span class="token punctuation">.</span>password<span class="token punctuation">(</span>length<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> special_chars<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> digits<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> upper_case<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> lower_case<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>                           <span class="token comment"># 密码</span>
<span class="token comment"># &#39;^7cSoHR1^r&#39;</span>
 
fake<span class="token punctuation">.</span>sha1<span class="token punctuation">(</span>raw_output<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>                <span class="token comment"># SHA1</span>
<span class="token comment"># &#39;f89f039d9fc00860651d9a567ac27990ae609445&#39;</span>
 
fake<span class="token punctuation">.</span>sha256<span class="token punctuation">(</span>raw_output<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>              <span class="token comment"># SHA256</span>
<span class="token comment"># &#39;675a85aa0d29583200f75351e35b4af0335af835fc617382cbd9fece258b6520&#39;</span>
 
fake<span class="token punctuation">.</span>uuid4<span class="token punctuation">(</span>cast_to<span class="token operator">=</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;str&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>          <span class="token comment"># UUID4</span>
<span class="token comment"># &#39;0d7be36a-febd-4f9f-bf1e-791c0ee1227b&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>人物相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>first_name<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment"># 名字</span>
<span class="token comment"># &#39;强&#39;</span>
 
fake<span class="token punctuation">.</span>first_name_female<span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment"># 名字(女)</span>
<span class="token comment"># &#39;桂荣&#39;</span>
 
fake<span class="token punctuation">.</span>first_name_male<span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment"># 名字(男)</span>
<span class="token comment"># &#39;志强&#39;</span>
 
fake<span class="token punctuation">.</span>first_romanized_name<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 名字(罗马文)</span>
<span class="token comment"># &#39;Chao&#39;</span>
 
fake<span class="token punctuation">.</span>last_name<span class="token punctuation">(</span><span class="token punctuation">)</span>             <span class="token comment"># 姓</span>
<span class="token comment"># &#39;宋&#39;</span>
 
fake<span class="token punctuation">.</span>last_name_female<span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment"># 姓(女)</span>
<span class="token comment"># &#39;陆&#39;</span>
 
fake<span class="token punctuation">.</span>last_name_male<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 姓(男)</span>
<span class="token comment"># &#39;曾&#39;</span>
 
fake<span class="token punctuation">.</span>last_romanized_name<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># 姓(罗马文)</span>
<span class="token comment"># &#39;Xie&#39;</span>
 
fake<span class="token punctuation">.</span>name<span class="token punctuation">(</span><span class="token punctuation">)</span>                  <span class="token comment"># 姓名</span>
<span class="token comment"># &#39;王凯&#39;</span>
 
fake<span class="token punctuation">.</span>name_female<span class="token punctuation">(</span><span class="token punctuation">)</span>           <span class="token comment"># 姓名(女)</span>
<span class="token comment"># &#39;戴丽丽&#39;</span>
 
fake<span class="token punctuation">.</span>name_male<span class="token punctuation">(</span><span class="token punctuation">)</span>             <span class="token comment"># 姓名(男)</span>
<span class="token comment"># &#39;刘荣&#39;</span>
 
fake<span class="token punctuation">.</span>prefix<span class="token punctuation">(</span><span class="token punctuation">)</span>                <span class="token comment"># 称谓</span>
<span class="token comment"># &#39;&#39;</span>
 
fake<span class="token punctuation">.</span>prefix_female<span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment"># 称谓(女)</span>
<span class="token comment"># &#39;&#39;</span>
 
fake<span class="token punctuation">.</span>prefix_male<span class="token punctuation">(</span><span class="token punctuation">)</span>           <span class="token comment"># 称谓(男)</span>
<span class="token comment"># &#39;&#39;</span>
 
fake<span class="token punctuation">.</span>romanized_name<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 称谓(罗马文)</span>
<span class="token comment"># &#39;Guiying Chang&#39;</span>
 
fake<span class="token punctuation">.</span>suffix<span class="token punctuation">(</span><span class="token punctuation">)</span>                <span class="token comment"># 姓名后缀(中文不适用)</span>
<span class="token comment"># &#39;&#39;</span>
 
fake<span class="token punctuation">.</span>suffix_female<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;&#39;</span>
 
fake<span class="token punctuation">.</span>suffix_male<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>电话相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>msisdn<span class="token punctuation">(</span><span class="token punctuation">)</span>                <span class="token comment"># 完整手机号码(加了国家和国内区号)</span>
<span class="token comment"># &#39;9067936325890&#39;</span>
 
fake<span class="token punctuation">.</span>phone_number<span class="token punctuation">(</span><span class="token punctuation">)</span>          <span class="token comment"># 手机号</span>
<span class="token comment"># &#39;18520149907&#39;</span>
 
fake<span class="token punctuation">.</span>phonenumber_prefix<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 区号</span>
<span class="token comment"># 145</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>档案相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>profile<span class="token punctuation">(</span>fields<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> sex<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>        <span class="token comment"># 档案(完整)</span>
<span class="token comment"># {   &#39;address&#39;: &#39;河南省昆明市清河哈尔滨路H座 496152&#39;,</span>
<span class="token comment">#     &#39;birthdate&#39;: datetime.date(2014, 11, 20),</span>
<span class="token comment">#     &#39;blood_group&#39;: &#39;AB+&#39;,</span>
<span class="token comment">#     &#39;company&#39;: &#39;易动力信息有限公司&#39;,</span>
<span class="token comment">#     &#39;current_location&#39;: (Decimal(&#39;77.504143&#39;), Decimal(&#39;-167.365806&#39;)),</span>
<span class="token comment">#     &#39;job&#39;: &#39;培训策划&#39;,</span>
<span class="token comment">#     &#39;mail&#39;: &#39;liangyang@yahoo.com&#39;,</span>
<span class="token comment">#     &#39;name&#39;: &#39;杨磊&#39;,</span>
<span class="token comment">#     &#39;residence&#39;: &#39;澳门特别行政区台北县西夏兴城街L座 803680&#39;,</span>
<span class="token comment">#     &#39;sex&#39;: &#39;F&#39;,</span>
<span class="token comment">#     &#39;ssn&#39;: &#39;140722200004166520&#39;,</span>
<span class="token comment">#     &#39;username&#39;: &#39;lei65&#39;,</span>
<span class="token comment">#     &#39;website&#39;: [   &#39;http://www.29.cn/&#39;,</span>
<span class="token comment">#                    &#39;http://www.lei.cn/&#39;,</span>
<span class="token comment">#                    &#39;http://lishao.net/&#39;,</span>
<span class="token comment">#                    &#39;https://www.feng.net/&#39;]}</span>
 
fake<span class="token punctuation">.</span>simple_profile<span class="token punctuation">(</span>sex<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>               <span class="token comment"># 档案(简单)</span>
<span class="token comment"># {   &#39;address&#39;: &#39;广西壮族自治区南宁市花溪孙街c座 653694&#39;,</span>
<span class="token comment">#     &#39;birthdate&#39;: datetime.date(1993, 12, 16),</span>
<span class="token comment">#     &#39;mail&#39;: &#39;haomin@yahoo.com&#39;,</span>
<span class="token comment">#     &#39;name&#39;: &#39;任秀英&#39;,</span>
<span class="token comment">#     &#39;sex&#39;: &#39;F&#39;,</span>
<span class="token comment">#     &#39;username&#39;: &#39;iding&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Python相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>pybool<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># Python布尔值</span>
<span class="token comment"># False</span>
 
fake<span class="token punctuation">.</span>pydecimal<span class="token punctuation">(</span>left_digits<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> right_digits<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> positive<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> min_value<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> max_value<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>  <span class="token comment"># Python十进制数</span>
<span class="token comment"># Decimal(&#39;-837022273798.0&#39;)</span>
 
fake<span class="token punctuation">.</span>pydict<span class="token punctuation">(</span>nb_elements<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> variable_nb_elements<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token operator">*</span>value_types<span class="token punctuation">)</span>    <span class="token comment"># Python字典</span>
<span class="token comment"># {   &#39;一种&#39;: 6381,</span>
<span class="token comment">#     &#39;可以&#39;: -9242847.69292,</span>
<span class="token comment">#     &#39;地址&#39;: 9668,</span>
<span class="token comment">#     &#39;拥有&#39;: &#39;jVBverSGAJvHsrcZPFDg&#39;,</span>
<span class="token comment">#     &#39;控制&#39;: Decimal(&#39;-98521.0&#39;),</span>
<span class="token comment">#     &#39;本站&#39;: datetime.datetime(1983, 5, 30, 22, 51, 22),</span>
<span class="token comment">#     &#39;来源&#39;: &#39;MRTmgbdlwNlqHiIDUVTN&#39;,</span>
<span class="token comment">#     &#39;标题&#39;: 929,</span>
<span class="token comment">#     &#39;注册&#39;: &#39;QvYtlygVIopYPasYHCQr&#39;,</span>
<span class="token comment">#     &#39;解决&#39;: -7138575.3,</span>
<span class="token comment">#     &#39;问题&#39;: 1115.0}</span>
 
fake<span class="token punctuation">.</span>pyfloat<span class="token punctuation">(</span>left_digits<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> right_digits<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> positive<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> min_value<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> max_value<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>        <span class="token comment"># Python浮点数</span>
<span class="token comment"># 6.7442382094132</span>
 
fake<span class="token punctuation">.</span>pyint<span class="token punctuation">(</span>min_value<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> max_value<span class="token operator">=</span><span class="token number">9999</span><span class="token punctuation">,</span> step<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>    <span class="token comment"># Python整型值</span>
<span class="token comment"># 8326</span>
 
fake<span class="token punctuation">.</span>pyiterable<span class="token punctuation">(</span>nb_elements<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> variable_nb_elements<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token operator">*</span>value_types<span class="token punctuation">)</span>    <span class="token comment"># Python可迭代对象</span>
<span class="token comment"># {&#39;gang42@gmail.com&#39;, Decimal(&#39;-638462592926556.0&#39;), 5383, 1608, 185608.962728, datetime.datetime(2013, 8, 7, 10, 44, 51), &#39;xvqHfWdLyTkaFoguvnqd&#39;, datetime.datetime(1999, 9, 10, 4, 41, 29), Decimal(&#39;4627589014.65023&#39;), &#39;http://57.cn/category/&#39;, &#39;UZJwIrsLowvwVGAChwzB&#39;, Decimal(&#39;68.623476938&#39;), &#39;mtUbDpTHnQAPVjXzknIM&#39;}</span>
 
fake<span class="token punctuation">.</span>pylist<span class="token punctuation">(</span>nb_elements<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> variable_nb_elements<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token operator">*</span>value_types<span class="token punctuation">)</span>    <span class="token comment"># Python列表</span>
<span class="token comment"># [   589,</span>
<span class="token comment">#     &#39;https://www.yangbai.cn/main/&#39;,</span>
<span class="token comment">#     &#39;http://fang.cn/faq/&#39;,</span>
<span class="token comment">#     &#39;HvtSTwWqDtughQLYibOd&#39;,</span>
<span class="token comment">#     Decimal(&#39;-3541501.934427&#39;),</span>
<span class="token comment">#     2758,</span>
<span class="token comment">#     datetime.datetime(2018, 2, 22, 9, 51, 8),</span>
<span class="token comment">#     5375,</span>
<span class="token comment">#     &#39;UVXMfCqJyZwBkfgGhQiH&#39;,</span>
<span class="token comment">#     &#39;HfxybvRTPwaFmuhwvKLT&#39;,</span>
<span class="token comment">#     Decimal(&#39;-21565647052012.8&#39;),</span>
<span class="token comment">#     &#39;wEqWsXKTputijSMWhCIb&#39;]</span>
 
fake<span class="token punctuation">.</span>pyset<span class="token punctuation">(</span>nb_elements<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> variable_nb_elements<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token operator">*</span>value_types<span class="token punctuation">)</span>    <span class="token comment"># Python集合</span>
<span class="token comment"># {7105, &#39;sidMFYVhXjkNZnHHimJJ&#39;, &#39;yexiuying@kw.cn&#39;, &#39;GPxoyEYixUGAoRCiEmDe&#39;, datetime.datetime(2001, 6, 17, 12, 49, 57), &#39;vOsPAdmmCmkJxeBUpBJP&#39;, -75011.0}</span>
 
fake<span class="token punctuation">.</span>pystr<span class="token punctuation">(</span>min_chars<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> max_chars<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>    <span class="token comment"># Python字符串</span>
<span class="token comment"># &#39;NOlWELuogcxSfRjYauSV&#39;</span>
 
fake<span class="token punctuation">.</span>pystruct<span class="token punctuation">(</span>count<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token operator">*</span>value_types<span class="token punctuation">)</span>       <span class="token comment"># Python结构</span>
<span class="token comment"># (   [   &#39;SQeHWPNdooccsfbZslee&#39;,</span>
<span class="token comment">#         &#39;nDXibfaPXSpmIpxtDUWP&#39;,</span>
<span class="token comment">#         &#39;DrZHepzMfNPRrxgcXwvR&#39;,</span>
<span class="token comment">#         988.956374402,</span>
<span class="token comment">#         7239,</span>
<span class="token comment">#         4885,</span>
<span class="token comment">#         datetime.datetime(1972, 6, 13, 14, 18, 11),</span>
<span class="token comment">#         -582284.9732,</span>
<span class="token comment">#         datetime.datetime(1997, 8, 23, 9, 19, 6),</span>
<span class="token comment">#         &#39;http://www.hu.cn/homepage.php&#39;],</span>
<span class="token comment">#     {   &#39;一般&#39;: &#39;oqUQKBhqNylyofEditXs&#39;,</span>
<span class="token comment">#         &#39;不要&#39;: &#39;qTlztJembuRZHFEzZnGO&#39;,</span>
<span class="token comment">#         &#39;价格&#39;: -2100690667.387,</span>
<span class="token comment">#         &#39;国内&#39;: datetime.datetime(1989, 9, 3, 11, 27, 11),</span>
<span class="token comment">#         &#39;密码&#39;: &#39;aWaufuJAzfgeuhyXAwDL&#39;,</span>
<span class="token comment">#         &#39;开发&#39;: &#39;aJvNisEMynJcAPhbNAHa&#39;,</span>
<span class="token comment">#         &#39;方法&#39;: &#39;WVEqHUnnkpUbAnllUqKL&#39;,</span>
<span class="token comment">#         &#39;汽车&#39;: &#39;bfQlaULiNfjgkrqQUCnL&#39;,</span>
<span class="token comment">#         &#39;用户&#39;: &#39;WDYNlInLyCcIXMFgyLDS&#39;,</span>
<span class="token comment">#         &#39;那个&#39;: &#39;qWivpUnOcTwGDhOXihOb&#39;},</span>
<span class="token comment">#     {   &#39;个人&#39;: {   1: &#39;http://www.ik.cn/categories/tags/search/homepage/&#39;,</span>
<span class="token comment">#                   2: [   &#39;gBSKOBAYYlPwILaWgory&#39;,</span>
<span class="token comment">#                          &#39;xoeueUWWgbvNHDxKYASD&#39;,</span>
<span class="token comment">#                          &#39;nkcelmDSpqiQasuKvNZg&#39;],</span>
<span class="token comment">#                   3: {   1: 2000,</span>
<span class="token comment">#                          2: &#39;SeDZKUpCxrCLlrDIlPxV&#39;,</span>
<span class="token comment">#                          3: [Decimal(&#39;7833105.737&#39;), Decimal(&#39;-7.994&#39;)]}},</span>
<span class="token comment">#         &#39;帖子&#39;: {   0: &#39;HXTKojcilYqgYmFUMjuk&#39;,</span>
<span class="token comment">#                   1: [6887, 3635, &#39;http://hezhu.com/list/main/terms.html&#39;],</span>
<span class="token comment">#                   2: {   0: &#39;hkong@fujiang.cn&#39;,</span>
<span class="token comment">#                          1: 4676,</span>
<span class="token comment">#                          2: [&#39;JYEFavcRqcsdpnSMwENU&#39;, &#39;vxu@gmail.com&#39;]}},</span>
<span class="token comment">#         &#39;应该&#39;: {   7: &#39;EmzzdZrmUpIetxPktXAU&#39;,</span>
<span class="token comment">#                   8: [   Decimal(&#39;4786692875733.0&#39;),</span>
<span class="token comment">#                          datetime.datetime(2016, 10, 11, 10, 38, 20),</span>
<span class="token comment">#                          &#39;ghtelDQAsBeYDaokgbYg&#39;],</span>
<span class="token comment">#                   9: {   7: &#39;yanding@yahoo.com&#39;,</span>
<span class="token comment">#                          8: &#39;dtjdazSyZCStWkVYwIvK&#39;,</span>
<span class="token comment">#                          9: [&#39;TPTzKNGReDCJmrfTkKmd&#39;, &#39;TKQmVfrNRioICuqCrrDQ&#39;]}},</span>
<span class="token comment">#         &#39;我的&#39;: {   3: &#39;http://17.cn/home/&#39;,</span>
<span class="token comment">#                   4: [   &#39;https://www.guiyingsu.cn/category/&#39;,</span>
<span class="token comment">#                          &#39;gweRIERFoojbKxRiiliG&#39;,</span>
<span class="token comment">#                          &#39;dMjUNjDRCSpdrNAlHXRp&#39;],</span>
<span class="token comment">#                   5: {   3: &#39;YeIsIoVHcIgAQWYZkQiR&#39;,</span>
<span class="token comment">#                          4: &#39;hGDzyNMVafuDMXSbbhzY&#39;,</span>
<span class="token comment">#                          5: [977, &#39;xCFBFdaPHNyFscSCqEWd&#39;]}},</span>
<span class="token comment">#         &#39;或者&#39;: {   9: &#39;owgjdYQvTWZIZRewhkev&#39;,</span>
<span class="token comment">#                   10: [&#39;nHusiXLRunAMvynwjJgu&#39;, 6500, &#39;cQRHfcdFJGUyPDlIocqG&#39;],</span>
<span class="token comment">#                   11: {   9: &#39;sETogfbiwRIqFlrGXeiT&#39;,</span>
<span class="token comment">#                           10: &#39;tliang@kong.cn&#39;,</span>
<span class="token comment">#                           11: [   &#39;https://chaohao.cn/register.html&#39;,</span>
<span class="token comment">#                                   &#39;fang21@yahoo.com&#39;]}},</span>
<span class="token comment">#         &#39;技术&#39;: {   4: 8843,</span>
<span class="token comment">#                   5: [-5660697068472.0, 7952, -52210308185.53],</span>
<span class="token comment">#                   6: {   4: 6477,</span>
<span class="token comment">#                          5: 8669,</span>
<span class="token comment">#                          6: [&#39;sGueDRKWFAtTExnruySP&#39;, &#39;YZcIHHkbDRLUgeHhblCu&#39;]}},</span>
<span class="token comment">#         &#39;深圳&#39;: {   5: 2532,</span>
<span class="token comment">#                   6: [   Decimal(&#39;66661967013036.0&#39;),</span>
<span class="token comment">#                          &#39;lei14@yahoo.com&#39;,</span>
<span class="token comment">#                          &#39;https://www.fangyao.cn/categories/search.html&#39;],</span>
<span class="token comment">#                   7: {   5: datetime.datetime(1988, 9, 11, 2, 30, 1),</span>
<span class="token comment">#                          6: 50.1,</span>
<span class="token comment">#                          7: [   &#39;https://www.gang.cn/&#39;,</span>
<span class="token comment">#                                 &#39;http://www.liao.cn/posts/app/main.html&#39;]}},</span>
<span class="token comment">#         &#39;生产&#39;: {   2: 2187,</span>
<span class="token comment">#                   3: [   8629589.339,</span>
<span class="token comment">#                          &#39;QvftOABFsahZurjYIPTr&#39;,</span>
<span class="token comment">#                          &#39;GumqSZMuOSIfrUzjTzKO&#39;],</span>
<span class="token comment">#                   4: {   2: 1982,</span>
<span class="token comment">#                          3: &#39;WatxfisQAelRTuwopoOA&#39;,</span>
<span class="token comment">#                          4: [&#39;xiacheng@00.cn&#39;, &#39;flrVEiuWlEnJjbxCazQG&#39;]}},</span>
<span class="token comment">#         &#39;起来&#39;: {   6: &#39;luming@yahoo.com&#39;,</span>
<span class="token comment">#                   7: [   &#39;http://www.yu.cn/home.php&#39;,</span>
<span class="token comment">#                          &#39;vvmhckwxQGnMCafhjXIA&#39;,</span>
<span class="token comment">#                          Decimal(&#39;-511928454.48&#39;)],</span>
<span class="token comment">#                   8: {   6: &#39;https://www.naguiying.cn/&#39;,</span>
<span class="token comment">#                          7: 279.928,</span>
<span class="token comment">#                          8: [5034, &#39;shaochao@17.cn&#39;]}},</span>
<span class="token comment">#         &#39;那么&#39;: {   8: &#39;PNrBODNdjLnhalWpVMXk&#39;,</span>
<span class="token comment">#                   9: [   datetime.datetime(1973, 7, 4, 11, 42, 8),</span>
<span class="token comment">#                          &#39;iye@gmail.com&#39;,</span>
<span class="token comment">#                          &#39;iEPyTnfNhNhWWXbkStQC&#39;],</span>
<span class="token comment">#                   10: {   8: Decimal(&#39;-227034846260.0&#39;),</span>
<span class="token comment">#                           9: Decimal(&#39;616424892362.0&#39;),</span>
<span class="token comment">#                           10: [   &#39;AjpDMNozhUbedUuOZWdL&#39;,</span>
<span class="token comment">#                                   datetime.datetime(1972, 10, 27, 8, 36, 39)]}}})</span>
 
fake<span class="token punctuation">.</span>pytuple<span class="token punctuation">(</span>nb_elements<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> variable_nb_elements<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token operator">*</span>value_types<span class="token punctuation">)</span>    <span class="token comment"># Python元组</span>
<span class="token comment"># (   Decimal(&#39;989085669.60574&#39;),</span>
<span class="token comment">#     &#39;yang44@hotmail.com&#39;,</span>
<span class="token comment">#     794,</span>
<span class="token comment">#     datetime.datetime(1989, 12, 11, 4, 10, 40),</span>
<span class="token comment">#     234,</span>
<span class="token comment">#     &#39;TyEwXywfUShjlUVwtMAk&#39;,</span>
<span class="token comment">#     &#39;NLUdMSRYoBHmGGPhbwor&#39;,</span>
<span class="token comment">#     -69.356824324)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>身份证相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>ssn<span class="token punctuation">(</span>min_age<span class="token operator">=</span><span class="token number">18</span><span class="token punctuation">,</span> max_age<span class="token operator">=</span><span class="token number">90</span><span class="token punctuation">)</span>    <span class="token comment"># 身份证</span>
<span class="token comment"># &#39;410622198603154708&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>用户代理相关</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fake<span class="token punctuation">.</span>android_platform_token<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 安卓</span>
<span class="token comment"># &#39;Android 5.0.1&#39;</span>
 
fake<span class="token punctuation">.</span>chrome<span class="token punctuation">(</span>version_from<span class="token operator">=</span><span class="token number">13</span><span class="token punctuation">,</span> version_to<span class="token operator">=</span><span class="token number">63</span><span class="token punctuation">,</span> build_from<span class="token operator">=</span><span class="token number">800</span><span class="token punctuation">,</span> build_to<span class="token operator">=</span><span class="token number">899</span><span class="token punctuation">)</span>    <span class="token comment"># Chrome</span>
<span class="token comment"># (&#39;Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_10_9) AppleWebKit/534.0 (KHTML, &#39;</span>
<span class="token comment">#  &#39;like Gecko) Chrome/62.0.826.0 Safari/534.0&#39;)</span>
 
fake<span class="token punctuation">.</span>firefox<span class="token punctuation">(</span><span class="token punctuation">)</span>                       <span class="token comment"># FireFox</span>
<span class="token comment"># (&#39;Mozilla/5.0 (Windows NT 5.1; cs-CZ; rv:1.9.0.20) Gecko/2010-12-02 06:14:30 &#39;</span>
<span class="token comment">#  &#39;Firefox/3.6.5&#39;)</span>
 
fake<span class="token punctuation">.</span>internet_explorer<span class="token punctuation">(</span><span class="token punctuation">)</span>             <span class="token comment"># Ie</span>
<span class="token comment"># &#39;Mozilla/5.0 (compatible; MSIE 7.0; Windows 95; Trident/3.0)&#39;    </span>
 
fake<span class="token punctuation">.</span>ios_platform_token<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment"># ios</span>
<span class="token comment"># &#39;iPhone; CPU iPhone OS 5_1_1 like Mac OS X&#39;</span>
 
fake<span class="token punctuation">.</span>linux_platform_token<span class="token punctuation">(</span><span class="token punctuation">)</span>          <span class="token comment"># Linux</span>
<span class="token comment"># &#39;X11; Linux i686&#39;</span>
 
fake<span class="token punctuation">.</span>linux_processor<span class="token punctuation">(</span><span class="token punctuation">)</span>               <span class="token comment"># Linux处理器</span>
<span class="token comment"># &#39;x86_64&#39;</span>
 
fake<span class="token punctuation">.</span>mac_platform_token<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment"># Mac</span>
<span class="token comment"># &#39;Macintosh; U; PPC Mac OS X 10_11_2&#39;</span>
 
fake<span class="token punctuation">.</span>mac_processor<span class="token punctuation">(</span><span class="token punctuation">)</span>                 <span class="token comment"># Mac处理器</span>
<span class="token comment"># &#39;Intel&#39;</span>
 
fake<span class="token punctuation">.</span>opera<span class="token punctuation">(</span><span class="token punctuation">)</span>                         <span class="token comment"># Opera</span>
<span class="token comment"># &#39;Opera/8.32.(Windows 98; Win 9x 4.90; mr-IN) Presto/2.9.188 Version/10.00&#39;</span>
 
fake<span class="token punctuation">.</span>safari<span class="token punctuation">(</span><span class="token punctuation">)</span>                        <span class="token comment"># Safari</span>
<span class="token comment"># (&#39;Mozilla/5.0 (Windows; U; Windows NT 6.0) AppleWebKit/533.43.6 (KHTML, like &#39;</span>
<span class="token comment">#  &#39;Gecko) Version/4.0.5 Safari/533.43.6&#39;)</span>
 
fake<span class="token punctuation">.</span>user_agent<span class="token punctuation">(</span><span class="token punctuation">)</span>                    <span class="token comment"># 随机用户代理</span>
<span class="token comment"># &#39;Mozilla/5.0 (compatible; MSIE 9.0; Windows 95; Trident/3.0)&#39;</span>
 
fake<span class="token punctuation">.</span>windows_platform_token<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># Windows</span>
<span class="token comment"># &#39;Windows NT 6.2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,57))])}const b=t(u,[["render",d],["__file","Python库——Faker - 知乎.html.vue"]]);export{b as default};
