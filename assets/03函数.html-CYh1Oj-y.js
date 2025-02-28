import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as t,a as e}from"./app-DBc2jY3V.js";const p={};function i(l,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h2 id="_00-函数基础" tabindex="-1"><a class="header-anchor" href="#_00-函数基础" aria-hidden="true">#</a> 00.函数基础</h2><p>函数是一个命名了的代码块，我们通过调用函数执行相应的代码。函数可以有0个或多个参数，而且（通常）会产生一个结果。</p><p>在复杂的程序中，如果全部的代码都写在main函数中，main函数体将非常庞大臃肿。</p><p>把任务分工到其它的函数中，main函数只负责程序的核心流程，具体的任务由其它函数完成。</p><p>这种思想就是模块化编程。</p><h2 id="_01-函数的声明与定义" tabindex="-1"><a class="header-anchor" href="#_01-函数的声明与定义" aria-hidden="true">#</a> 01.函数的声明与定义</h2><p>声明和定义函数的语法：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>返回值的数据类型 函数名<span class="token punctuation">(</span>参数一的数据类型 参数一<span class="token punctuation">,</span> 参数二的数据类型 参数二<span class="token punctuation">,</span>……<span class="token punctuation">)</span><span class="token punctuation">{</span>
	实现函数功能的代码。
	<span class="token keyword">return</span> 返回值<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数的声明：让编译器知道函数的存在，包括返回值的数据类型、函数名和参数列表。</p><p>函数的定义：函数的实现过程。</p><p>注意：</p><ul><li>函数的声明和定义可以书写在一起，也可以分开，如果书写在一起，一般放在main函数的上面，如果分开，一般在main函数的上面声明，在main函数的下面定义。</li><li>如果函数的声明和定义分开书写，函数的声明后面一定要有分号，函数的定义后面一定不能写分号。</li><li>在同一个程序中，函数只需要声明和定义一次，也可以多次声明，但只能定义一次。</li><li>函数的声明必须和函数的定义一致（返回值的数据类型、函数名和参数列表），如果函数名和参数列表不同，表示它们不是同一个函数。</li><li>return语句返回值的数据类型必须与函数的声明一致。</li><li>在函数体中，return语句可以多次使用。</li><li>如果函数的重点是实现功能，不关心返回值，返回值的数据类型填void，return语句后面就空着。</li><li>函数可以没有任何参数。</li><li>函数名是标识符，必须满足标识符的命名规则。</li><li>在函数的声明和函数的定义中，参数命名可以不同，但是没必要这么书写。</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>using namespace std<span class="token punctuation">;</span>        <span class="token comment">// 指定缺省的命名空间。</span>
<span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">printTMT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">printTMT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;*&quot;</span> <span class="token operator">&lt;&lt;</span> j <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>i <span class="token operator">*</span> j<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;    &quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cout<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-函数的调用" tabindex="-1"><a class="header-anchor" href="#_02-函数的调用" aria-hidden="true">#</a> 02.函数的调用</h2><p>语法：函数名(参数一,参数二,……)</p><p>注意：</p><ul><li>声明函数的代码必须放在调用之前，定义函数的代码可以放在调用之后。</li><li>调用函数的时候，参数列表必须与函数的声明一致（参数的个数、书写的顺序和数据类型）。</li><li>不管在什么地方，都不能调用main函数，但是，在普通函数中，可以调用其它的普通函数。</li><li>调用函数的代码可以独占一条语句，也可以用于表达式（赋值运算、算术运算、关系运算、函数的参数）。</li><li>如果函数用于表达式中，返回值的数据类型要匹配（否则可能会被隐式转换或编译错误）。</li><li>如果函数有返回值，可以不关心它，忽略它。</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>using namespace std<span class="token punctuation">;</span>        <span class="token comment">// 指定缺省的命名空间。</span>
<span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">printTMT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> ca <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token function">printTMT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">printTMT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;*&quot;</span> <span class="token operator">&lt;&lt;</span> j <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>i <span class="token operator">*</span> j<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;    &quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cout<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-变量的作用域" tabindex="-1"><a class="header-anchor" href="#_03-变量的作用域" aria-hidden="true">#</a> 03.变量的作用域</h2><p>作用域是指程序中变量存在（或生效）的区域，超过该区域变量就不能被访问。</p><p>变量分全局变量和局部变量两种，全局变量在整个程序中都可以访问，局部变量只能在函数或语句块的内部才能访问。</p><p>C++中定义变量的场景主要有五种：</p><ul><li><p>1）在全部函数外面定义的是全局变量。</p></li><li><p>2）在头文件中定义的是全局变量。</p></li><li><p>3）在函数和语句块内部定义的是局部变量。</p></li><li><p>4）函数的参数是该函数的局部变量。</p></li><li><p>5）函数内部用static修饰的是静态局部变量。</p></li></ul><h3 id="_1-全局变量" tabindex="-1"><a class="header-anchor" href="#_1-全局变量" aria-hidden="true">#</a> <strong>1）全局变量</strong></h3><p>在整个程序生命周期内都是有效的，在定义位置之后的任意函数中都能访问。</p><p>全局变量在主程序退出时由系统收回内存空间。</p><h3 id="_2-局部变量" tabindex="-1"><a class="header-anchor" href="#_2-局部变量" aria-hidden="true">#</a> <strong>2）局部变量</strong></h3><p>在函数或语句块内部的语句使用，在函数或语句块外部是不可用的。</p><p>局部变量在函数返回或语句块结束时由系统收回内存空间。</p><h3 id="_3-静态局部变量" tabindex="-1"><a class="header-anchor" href="#_3-静态局部变量" aria-hidden="true">#</a> <strong>3）静态局部变量</strong></h3><p>用static修饰的局部变量生命周期和程序相同，并且只会被初始化一次。</p><p>其作用域为局部，当定义它的函数或语句块结束时，其作用域随之结束。</p><p>当程序想要使用全局变量的时候应该先考虑使用static（考虑到数据安全性）。</p><h3 id="_4-注意事项" tabindex="-1"><a class="header-anchor" href="#_4-注意事项" aria-hidden="true">#</a> <strong>4）注意事项</strong></h3><ul><li>全局变量和静态局部变量自动初始化为0。</li><li>局部变量不会自动初始化，其值是不确定的，程序中应该有初始化局部变量的代码，否则编译可能会报错（不同的编译器不一样）。</li><li>局部变量和全局变量的名称可以相同，在某函数或语句块内部，如果局部变量名与全局变量名相同，就会屏蔽全局变量而使用局部变量，如果想使用全局变量，可以在变量名前加两个冒号（::）。</li><li>for循环初始化语句中定义的变量的作用域是for语句块。</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int a = 1000;

int main() {
    {
        int a = 9;
        cout &lt;&lt; &quot;number a is &quot; &lt;&lt; a &lt;&lt; endl;
        cout &lt;&lt; &quot;ohter number a is &quot; &lt;&lt; ::a &lt;&lt; endl;
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-函数参数的传递" tabindex="-1"><a class="header-anchor" href="#_5-函数参数的传递" aria-hidden="true">#</a> 5）函数参数的传递</h3><p>调用函数的时候，调用者把数值赋给了函数的参数。</p><p>**实参：**调用者程序中书写的在函数名括号中的参数，可以是常量、变量和表达式。</p><p>**形参：**函数的参数列表。</p><p>在函数定义的代码中，修改形参的值，会不会影响实参。</p><h2 id="_04-函数分文件编写" tabindex="-1"><a class="header-anchor" href="#_04-函数分文件编写" aria-hidden="true">#</a> 04.函数分文件编写</h2><p><strong>头文件（*.h）</strong>：需要包含的头文件，声明全局变量，函数的声明，数据结构和类的声明等。</p><p><strong>源文件（*.cpp）</strong>：函数的定义、类的定义。</p><p>主程序：main函数，程序的核心流程，需要用#include &quot;头文件名&quot;把头文件包含进来。</p><p>编译：</p><p>Windows是集成开发环境，不需要写编译指令。</p><p>在Linux系统下，把全部的源文件一起编译，如：g++ -o demo demo.cpp tools.cpp girls.cpp</p><p>项目结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└─project
    ├─base
    │  ├─tools.h
    │  └─tools.cpp
    │          
    └─main.cpp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>base/tools.h</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span>         <span class="token comment">// 包含头文件。</span></span>

using namespace std<span class="token punctuation">;</span>        <span class="token comment">// 指定缺省的命名空间。</span>
<span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">printTMT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>base/tools.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;tools.h&quot;
int sum(int a, int b){
    return a + b;
}

void printTMT(){
    for (int i = 1; i &lt; 10; ++i) {
        for (int j = 1; j &lt;= i; ++j) {
            cout &lt;&lt; i &lt;&lt; &quot;*&quot; &lt;&lt; j &lt;&lt; &quot; = &quot; &lt;&lt; (i * j) &lt;&lt; &quot;    &quot;;
        }
        cout&lt;&lt;endl;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;base/tools.h&quot;

int a = 1000;
int main() {
    int ca = 1;
    printTMT();
    {
        int a = 9;
        cout &lt;&lt; &quot;number a is &quot; &lt;&lt; a &lt;&lt; endl;
        cout &lt;&lt; &quot;ohter number a is &quot; &lt;&lt; ::a &lt;&lt; endl;
    }
    sum(2, 3);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-递归函数" tabindex="-1"><a class="header-anchor" href="#_05-递归函数" aria-hidden="true">#</a> 05.递归函数</h2><p>一个函数可以调用另一个函数，作为特例，如果函数调用了自己，就像故事中提到了同样的故事一样，我们把函数在运行时调用自己的情况叫做递归。</p><p>递归函数中一定要有递归终止的条件，否则是死递归。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>using namespace std<span class="token punctuation">;</span>        <span class="token comment">// 指定缺省的命名空间。</span>
<span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> ca <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;please input ca:&quot;</span><span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> ca<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token function">sum</span><span class="token punctuation">(</span>ca<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
     <span class="token keyword">return</span> <span class="token function">sum</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">sum</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60)]))}const u=s(p,[["render",i],["__file","03函数.html.vue"]]);export{u as default};
