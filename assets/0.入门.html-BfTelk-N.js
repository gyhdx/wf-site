import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,c as r,o as v,a as d,b as i,d as s,e as n}from"./app-DBc2jY3V.js";const u="/wf-site/assets/image-20231118200858449-B6J0ENt3.png",c="/wf-site/assets/image-20231118201042410-EcKk1dlT.png",o="/wf-site/assets/image-20231118201149891-6o5kvCVn.png",m="/wf-site/assets/栈帧-DMZOuZTp.jpg",b="/wf-site/assets/cpp_while_loop-CtNfIoEQ.png",p="/wf-site/assets/cpp_for_loop-CVy779f6.png",g={},h={href:"https://wyh317.github.io/img/%E6%A0%88%E5%B8%A7.jpg",target:"_blank",rel:"noopener noreferrer"},x={style:{"text-align":"left"}},f={href:"https://www.runoob.com/csharp/csharp-while-loop.html",target:"_blank",rel:"noopener noreferrer"},y={style:{"text-align":"left"}},q={href:"https://www.runoob.com/csharp/csharp-for-loop.html",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"left"}},B={href:"https://www.runoob.com/csharp/csharp-do-while-loop.html",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"left"}},w={href:"https://www.runoob.com/csharp/csharp-nested-loops.html",target:"_blank",rel:"noopener noreferrer"},k={style:{"text-align":"left"}},S={href:"https://www.runoob.com/csharp/csharp-break-statement.html",target:"_blank",rel:"noopener noreferrer"},W={style:{"text-align":"left"}},T={href:"https://www.runoob.com/csharp/csharp-continue-statement.html",target:"_blank",rel:"noopener noreferrer"};function M(_,e){const l=t("ExternalLinkIcon");return v(),r("div",null,[e[16]||(e[16]=d('<h2 id="_1-第一个程序" tabindex="-1"><a class="header-anchor" href="#_1-第一个程序" aria-hidden="true">#</a> 1.第一个程序</h2><p>选择模板</p><figure><img src="'+u+'" alt="image-20231118200858449" tabindex="0" loading="lazy"><figcaption>image-20231118200858449</figcaption></figure><p>确定项目名称</p><figure><img src="'+c+`" alt="image-20231118201042410" tabindex="0" loading="lazy"><figcaption>image-20231118201042410</figcaption></figure><p>然后直接创建就可以。</p><p>代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace test1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(&quot;hello word&quot;);
            Console.ReadKey();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><figure><img src="`+o+`" alt="image-20231118201149891" tabindex="0" loading="lazy"><figcaption>image-20231118201149891</figcaption></figure><h2 id="_2-代码结构" tabindex="-1"><a class="header-anchor" href="#_2-代码结构" aria-hidden="true">#</a> 2.代码结构</h2><p>C# 文件的后缀为 <strong>.cs</strong>。</p><p>以下创建一个 <strong>test.cs</strong> 文件，文件包含了可以打印出 &quot;Hello World&quot; 的简单代码：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
namespace HelloWorldApplication
{
   class HelloWorld
   {
      static void Main(string[] args)
      {
         /* 我的第一个 C# 程序*/
         Console.WriteLine(&quot;Hello World&quot;);
         Console.ReadKey();
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个 C# 程序主要包括以下部分：</p><ul><li>命名空间声明（Namespace declaration）:命名空间是一种把相关的类型声明分组并命名的方法。既然程序是一组相关的类型声明，那么通常会把程序声明在你创建的命名空间内部。一个 <strong>namespace</strong> 里包含了一系列的类。<em>HelloWorldApplication</em> 命名空间包含了类 <em>HelloWorld</em>。</li><li>一个 class：类一般包含多个方法。方法定义了类的行为。在这里，<em>HelloWorld</em> 类只有一个 <strong>Main</strong> 方法。</li><li>Class 方法：class中的方法</li><li>Class 属性</li><li>一个 Main 方法：程序执行入口</li><li>语句（Statements）&amp; 表达式（Expressions）</li><li>注释</li></ul><h2 id="访问级别" tabindex="-1"><a class="header-anchor" href="#访问级别" aria-hidden="true">#</a> 访问级别</h2><p>类有两种访问级别：</p><ul><li>public：可以被任何程序集中的代码访问</li><li>internal：默认的访问级别，仅可以被自己所在的程序集中的类看到</li></ul><p>类中的成员有5种访问级别：</p><ul><li>私有的（private）：只能被自己类中的成员访问，不能被其他的类访问，即使是继承自它的类也不行</li><li>公有的（public）：所有的类都可以自由访问</li><li>受保护的（protected）：和private类似，唯一不同的是，它允许该类的派生类来访问</li><li>内部的（internal）：对程序集内部的所有类可见，对程序集外部的所有类不可见</li><li>受保护内部的（protected internal）：相当于internal与protected的并集，即对程序集内部的类可见，也对继承自该类的类可见。</li></ul><h2 id="_3-变量" tabindex="-1"><a class="header-anchor" href="#_3-变量" aria-hidden="true">#</a> 3.变量</h2><h3 id="变量名称" tabindex="-1"><a class="header-anchor" href="#变量名称" aria-hidden="true">#</a> 变量名称</h3><p>变量不能以数字，C#关键字命名</p><h3 id="变量类型" tabindex="-1"><a class="header-anchor" href="#变量类型" aria-hidden="true">#</a> 变量类型</h3><p>C#提供了16种预定义类型，包括13种简单类型和3种非简单类型</p><h4 id="值类型-value-types" tabindex="-1"><a class="header-anchor" href="#值类型-value-types" aria-hidden="true">#</a> 值类型（Value types）</h4><table><thead><tr><th style="text-align:center;">类型</th><th style="text-align:left;">描述</th><th style="text-align:center;">范围</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:center;">bool</td><td style="text-align:left;">布尔值</td><td style="text-align:center;">True 或 False</td><td style="text-align:left;">False</td></tr><tr><td style="text-align:center;">byte</td><td style="text-align:left;">8 位无符号整数</td><td style="text-align:center;">0 到 255</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:center;">char</td><td style="text-align:left;">16 位 Unicode 字符</td><td style="text-align:center;">U +0000 到 U +ffff</td><td style="text-align:left;">&#39;\\0&#39;</td></tr><tr><td style="text-align:center;">decimal</td><td style="text-align:left;">128 位精确的十进制值，28-29 有效位数</td><td style="text-align:center;">(-7.9 x 1028 到 7.9 x 1028) / 100 到 28</td><td style="text-align:left;">0.0M</td></tr><tr><td style="text-align:center;">double</td><td style="text-align:left;">64 位双精度浮点型</td><td style="text-align:center;">(+/-)5.0 x 10-324 到 (+/-)1.7 x 10308</td><td style="text-align:left;">0.0D</td></tr><tr><td style="text-align:center;">float</td><td style="text-align:left;">32 位单精度浮点型</td><td style="text-align:center;">-3.4 x 1038 到 + 3.4 x 1038</td><td style="text-align:left;">0.0F</td></tr><tr><td style="text-align:center;">int</td><td style="text-align:left;">32 位有符号整数类型</td><td style="text-align:center;">-2,147,483,648 到 2,147,483,647</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:center;">long</td><td style="text-align:left;">64 位有符号整数类型</td><td style="text-align:center;">-9,223,372,036,854,775,808 到 9,223,372,036,854,775,807</td><td style="text-align:left;">0L</td></tr><tr><td style="text-align:center;">sbyte</td><td style="text-align:left;">8 位有符号整数类型</td><td style="text-align:center;">-128 到 127</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:center;">short</td><td style="text-align:left;">16 位有符号整数类型</td><td style="text-align:center;">-32,768 到 32,767</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:center;">uint</td><td style="text-align:left;">32 位无符号整数类型</td><td style="text-align:center;">0 到 4,294,967,295</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:center;">ulong</td><td style="text-align:left;">64 位无符号整数类型</td><td style="text-align:center;">0 到 18,446,744,073,709,551,615</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:center;">ushort</td><td style="text-align:left;">16 位无符号整数类型</td><td style="text-align:center;">0 到 65,535</td><td style="text-align:left;">0</td></tr></tbody></table><h4 id="引用类型-reference-types" tabindex="-1"><a class="header-anchor" href="#引用类型-reference-types" aria-hidden="true">#</a> 引用类型（Reference types）</h4><ul><li>object：所有其他类的基类</li><li>string：多个Unicode字符组成的序列</li><li>dynamic：在使用动态语言编写的程序集时使用</li></ul><p>C#语言是静态的，但基于.NET的一些其他语言却是动态的，也就是说变量的类型直到运行时才会被解析。由于它们是.NET语言，所以C#程序需要使用这些语言编写的程序集。问题是程序集中的类型直到运行时才会被解析，而C#又要引用这样的类型并且需要在编译的时候解析类型。为了解决这个问题，有了dynamic关键字。</p><p>在编译时，编译器不会对dynamic类型的变量进行类型检查。相反，它将与该变量及该变量的操作有关的所有信息打包。在运行时会对这些信息进行检查，以确保它与变量所代表的实际类型保持一致性，否则将在运行时抛出异常。</p><h4 id="指针类型-pointer-types" tabindex="-1"><a class="header-anchor" href="#指针类型-pointer-types" aria-hidden="true">#</a> 指针类型（Pointer types）</h4><p>指针类型变量存储另一种类型的内存地址。C# 中的指针与 C 或 C++ 中的指针有相同的功能。</p><p>声明指针类型的语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type* identifier;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>namespace myStudy
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            // Console.WriteLine(&quot;hello world&quot;);
            // Console.ReadKey();

            Console.WriteLine(&quot;请输入：&quot;);

            String str = Console.ReadLine();
            //
            // String num = str + 20;
			// 将string转为了int类型
            int num = int.Parse(str) + 20;
            Console.WriteLine(&quot;输出结果为:&quot; + num.ToString());
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-输入输出" tabindex="-1"><a class="header-anchor" href="#_3-输入输出" aria-hidden="true">#</a> 3.输入输出</h2><p>示例：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>namespace myStudy
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            // Console.WriteLine(&quot;hello world&quot;);
            // Console.ReadKey();

            Console.WriteLine(&quot;请输入：&quot;);

            String str = Console.ReadLine();

            String num = str + 20;
            Console.WriteLine(&quot;输出结果为:&quot; + num);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用console的write与read方法进行数据的控制台输入输出。</p><h2 id="_4-if判断" tabindex="-1"><a class="header-anchor" href="#_4-if判断" aria-hidden="true">#</a> 4.if判断</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>namespace myStudy
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine(&quot;请输入：&quot;);

            string str = Console.ReadLine();
 
            if (str.Equals(&quot;aa&quot;))
            {
                Console.WriteLine(&quot;input is aa&quot;);
            }
            else
            {
                Console.WriteLine(&quot;input not aa&quot;);
            }
            
            if (int.Parse(str) == 20)
            {
                Console.WriteLine(&quot;输入的是20&quot;);
            }
            else if (1 == 2)
            {
                Console.WriteLine(&quot;cc&quot;);
            }
            else
            {
                Console.WriteLine(&quot;输入的数据不是20&quot;);
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和Java的if使用类似</p><h2 id="_5-方法" tabindex="-1"><a class="header-anchor" href="#_5-方法" aria-hidden="true">#</a> 5.方法</h2><h4 id="c-中定义方法" tabindex="-1"><a class="header-anchor" href="#c-中定义方法" aria-hidden="true">#</a> C# 中定义方法</h4><p><strong>使用和Java类似</strong></p><p>当定义一个方法时，从根本上说是在声明它的结构的元素。在 C# 中，定义方法的语法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Access Specifier&gt; &lt;Return Type&gt; &lt;Method Name&gt;(Parameter List)
{
   Method Body
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是方法的各个元素：</p><ul><li><strong>Access Specifier</strong>：访问修饰符，这个决定了变量或方法对于另一个类的可见性。</li><li><strong>Return type</strong>：返回类型，一个方法可以返回一个值。返回类型是方法返回的值的数据类型。如果方法不返回任何值，则返回类型为 <strong>void</strong>。</li><li><strong>Method name</strong>：方法名称，是一个唯一的标识符，且是大小写敏感的。它不能与类中声明的其他标识符相同。</li><li><strong>Parameter list</strong>：参数列表，使用圆括号括起来，该参数是用来传递和接收方法的数据。参数列表是指方法的参数类型、顺序和数量。参数是可选的，也就是说，一个方法可能不包含参数。</li><li><strong>Method body</strong>：方法主体，包含了完成任务所需的指令集。</li></ul><p>下面的代码片段显示一个函数 <em>FindMax</em>，它接受两个整数值，并返回两个中的较大值。它有 public 访问修饰符，所以它可以使用类的实例从类的外部进行访问。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class NumberManipulator
{
   public int FindMax(int num1, int num2)
   {
      /* 局部变量声明 */
      int result;

      if (num1 &gt; num2)
         result = num1;
      else
         result = num2;

      return result;
   }
   ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参数传递" tabindex="-1"><a class="header-anchor" href="#参数传递" aria-hidden="true">#</a> 参数传递</h4><p>当调用带有参数的方法时，您需要向方法传递参数。在 C# 中，有以下几种向方法传递参数的方式：</p><p><strong>参数类型总结：</strong></p><table><thead><tr><th>参数类型</th><th>修饰符</th><th>是否在声明时使用</th><th>是否在调用是使用</th><th>执行</th></tr></thead><tbody><tr><td>值参数</td><td>无</td><td></td><td></td><td>系统把实参的值复制给形参，二者在栈中位置不同</td></tr><tr><td>引用参数</td><td>ref</td><td>是</td><td>是</td><td>形参是实参的别名，二者在栈中位置相同</td></tr><tr><td>输出参数</td><td>out</td><td>是</td><td>是</td><td>在读取输出参数前必须对其写入，除此之外和引用参数类似</td></tr><tr><td>参数数组</td><td>params</td><td>是</td><td>否</td><td>允许传递可变数目的实参到方法</td></tr></tbody></table><h5 id="值传递" tabindex="-1"><a class="header-anchor" href="#值传递" aria-hidden="true">#</a> 值传递</h5><p>Java中使用的类似</p><h5 id="引用参数" tabindex="-1"><a class="header-anchor" href="#引用参数" aria-hidden="true">#</a> 引用参数</h5><p>引用参数是一个对变量的<strong>内存位置的引用</strong>。当按引用传递参数时，与值参数不同的是，它不会为这些参数创建一个新的存储位置。引用参数表示与提供给方法的实际参数具有相同的内存位置。</p><p>在 C# 中，使用 <strong>ref</strong> 关键字声明引用参数。下面的实例演示了这点：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
namespace CalculatorApplication
{
   class NumberManipulator
   {
      public void swap(ref int x, ref int y)
      {
         int temp;

         temp = x; /* 保存 x 的值 */
         x = y;    /* 把 y 赋值给 x */
         y = temp; /* 把 temp 赋值给 y */
       }
   
      static void Main(string[] args)
      {
         NumberManipulator n = new NumberManipulator();
         /* 局部变量定义 */
         int a = 100;
         int b = 200;

         Console.WriteLine(&quot;在交换之前，a 的值： {0}&quot;, a);
         Console.WriteLine(&quot;在交换之前，b 的值： {0}&quot;, b);

         /* 调用函数来交换值 */
         n.swap(ref a, ref b);

         Console.WriteLine(&quot;在交换之后，a 的值： {0}&quot;, a);
         Console.WriteLine(&quot;在交换之后，b 的值： {0}&quot;, b);
 
         Console.ReadLine();

      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当上面的代码被编译和执行时，它会产生下列结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在交换之前，a 的值：100
在交换之前，b 的值：200
在交换之后，a 的值：200
在交换之后，b 的值：100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果表明，<em>swap</em> 函数内的值改变了，且这个改变可以在 <em>Main</em> 函数中反映出来。</p><h5 id="输出传递参数" tabindex="-1"><a class="header-anchor" href="#输出传递参数" aria-hidden="true">#</a> 输出传递参数</h5><p>return 语句可用于只从函数中返回一个值。但是，可以使用 <strong>输出参数</strong> 来从函数中返回两个值。输出参数会把方法输出的数据赋给自己，其他方面与引用参数相似。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;

namespace CalculatorApplication
{
   class NumberManipulator
   {
      public void getValue(out int x )
      {
         int temp = 5;
         x = temp;
      }
   
      static void Main(string[] args)
      {
         NumberManipulator n = new NumberManipulator();
         /* 局部变量定义 */
         int a = 100;
         
         Console.WriteLine(&quot;在方法调用之前，a 的值： {0}&quot;, a);
         
         /* 调用函数来获取值 */
         n.getValue(out a);

         Console.WriteLine(&quot;在方法调用之后，a 的值： {0}&quot;, a);
         Console.ReadLine();

      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当上面的代码被编译和执行时，它会产生下列结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在方法调用之前，a 的值： 100
在方法调用之后，a 的值： 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提供给输出参数的变量不需要赋值。</p><p>当需要从一个参数没有指定初始值的方法中返回值时，输出参数特别有用。请看下面的实例，来理解这一点：</p><p>实例</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;

namespace CalculatorApplication
{
   class NumberManipulator
   {
      public void getValues(out int x, out int y )
      {
          Console.WriteLine(&quot;请输入第一个值： &quot;);
          x = Convert.ToInt32(Console.ReadLine());
          Console.WriteLine(&quot;请输入第二个值： &quot;);
          y = Convert.ToInt32(Console.ReadLine());
      }
   
      static void Main(string[] args)
      {
         NumberManipulator n = new NumberManipulator();
         /* 局部变量定义 */
         int a , b;
         
         /* 调用函数来获取值 */
         n.getValues(out a, out b);

         Console.WriteLine(&quot;在方法调用之后，a 的值： {0}&quot;, a);
         Console.WriteLine(&quot;在方法调用之后，b 的值： {0}&quot;, b);
         Console.ReadLine();
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当上面的代码被编译和执行时，它会产生下列结果（取决于用户输入）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>请输入第一个值：
7
请输入第二个值：
8
在方法调用之后，a 的值： 7
在方法调用之后，b 的值： 8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="参数数组" tabindex="-1"><a class="header-anchor" href="#参数数组" aria-hidden="true">#</a> 参数数组</h5><p>参数数组允许0个或多个实参对应一个特殊的形参,修饰符为params</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//形参inVals可以代表0个或多个实参
void ListInts(params int[] inVals){

}
Copy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在参数列表中只能有一个参数数组，并且是列表中的最后一个</li><li>由参数数组表示的所有参数必须具有相同的类型</li></ul><p>参数数组在方法声明中需要params修饰符，而在调用时不需要（不同于引用参数和输出参数，它们在以上两个地方都需要修饰符）</p><p>可以有如下两种方式为参数数组提供实参：</p><ol><li><p>用一个逗号分隔的该数据类型元素的列表,使用这种方法时，编译器做如下的事：</p><ul><li><p>接收实参列表，用它们在堆中创建并初始化一个数组</p></li><li><p>把数组的引用作为形参保存在栈中</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>ListInts(10, 20, 30)
Copy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>用数组作为实参</p><p>在这种情况下，编译器会直接使用传入的数组，也就是说栈中的形参指向内存中intArray的位置</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>int[] intArray = {1, 2, 3};
ListInts(intArray);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h5 id="命名参数" tabindex="-1"><a class="header-anchor" href="#命名参数" aria-hidden="true">#</a> 命名参数</h5><p>在使用命名参数时，需要在方法调用中包含参数名。而方法的声明无需任何改变</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class MyClass{
    //方法中的参数声明一如平常
    public int Calc(int a, int b, int c){
        return a + b + c;
    }
    static void Main(){
        MyClass mc = new MyClass();
        int result = mc.Calc(c: 2, a: 4, b: 3);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h5><p>所谓可选参数就是在调用方法的时候可以包含这个参数，也可以忽略它。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class MyClass{
    //b为可选参数，默认值为3
    public int Calc(int a, int b = 3){
        return a + b;
    }
    static void Main(){
        MyClass mc = new MyClass();
        int ro = mc.Calc(5, 6);
        int r1 = mc.Calc(5);
        Console.WriteLine(&quot;{0}, {1}&quot;, ro, r1);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码会输出11，8</p><p>只要值类型的默认值在编译的时候可以确定，就可以使用值参数作为可选参数。而只有在默认值为null的时候，引用参数才可以作为可选参数。</p><p>总结下来，一个方法的声明中，参数要按照必填参数、可选参数、params参数的先后顺序声明。</p><p>可以忽略最后一个可选参数，或者最后n个可选参数，但是不可以随机选择省略任意的可选参数，省略必须从最后开始。</p><h4 id="栈帧" tabindex="-1"><a class="header-anchor" href="#栈帧" aria-hidden="true">#</a> 栈帧</h4><p>在调用方法的时候，内存从栈的顶部开始分配，保存和方法关联的一些数据项。这块内存叫做方法的栈帧</p><p>栈帧保存如下的内容：</p><ul><li><p>返回地址</p></li><li><p>为参数分配的内存</p></li><li><p>各种和方法调用相关的其他管理数据项</p><p>在方法调用的时候，整个栈帧都会压入栈。在方法退出的时候，整个栈帧都会从栈上弹出。</p></li></ul>`,99)),i("figure",null,[i("a",h,[e[0]||(e[0]=i("img",{src:m,alt:"栈帧",tabindex:"0",loading:"lazy"},null,-1)),s(l)]),e[1]||(e[1]=i("figcaption",null,"栈帧",-1))]),e[17]||(e[17]=i("h2",{id:"_6-循环",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_6-循环","aria-hidden":"true"},"#"),n(" 6.循环")],-1)),e[18]||(e[18]=i("p",null,"C# 提供了以下几种循环类型。点击链接查看每个类型的细节。",-1)),i("table",null,[e[10]||(e[10]=i("thead",null,[i("tr",null,[i("th",{style:{"text-align":"left"}},"循环类型"),i("th",{style:{"text-align":"left"}},"描述")])],-1)),i("tbody",null,[i("tr",null,[i("td",x,[i("a",f,[e[2]||(e[2]=n("while 循环")),s(l)])]),e[3]||(e[3]=i("td",{style:{"text-align":"left"}},"当给定条件为真时，重复语句或语句组。它会在执行循环主体之前测试条件。",-1))]),i("tr",null,[i("td",y,[i("a",q,[e[4]||(e[4]=n("for/foreach 循环")),s(l)])]),e[5]||(e[5]=i("td",{style:{"text-align":"left"}},"多次执行一个语句序列，简化管理循环变量的代码。",-1))]),i("tr",null,[i("td",C,[i("a",B,[e[6]||(e[6]=n("do...while 循环")),s(l)])]),e[7]||(e[7]=i("td",{style:{"text-align":"left"}},"除了它是在循环主体结尾测试条件外，其他与 while 语句类似。",-1))]),i("tr",null,[i("td",L,[i("a",w,[e[8]||(e[8]=n("嵌套循环")),s(l)])]),e[9]||(e[9]=i("td",{style:{"text-align":"left"}},"您可以在 while、for 或 do..while 循环内使用一个或多个循环。",-1))])])]),e[19]||(e[19]=i("p",null,[i("strong",null,"循环控制语句")],-1)),e[20]||(e[20]=i("p",null,"循环控制语句更改执行的正常序列。当执行离开一个范围时，所有在该范围中创建的自动对象都会被销毁。",-1)),e[21]||(e[21]=i("p",null,"C# 提供了下列的控制语句。点击链接查看每个语句的细节。",-1)),i("table",null,[e[15]||(e[15]=i("thead",null,[i("tr",null,[i("th",{style:{"text-align":"left"}},"控制语句"),i("th",{style:{"text-align":"left"}},"描述")])],-1)),i("tbody",null,[i("tr",null,[i("td",k,[i("a",S,[e[11]||(e[11]=n("break 语句")),s(l)])]),e[12]||(e[12]=i("td",{style:{"text-align":"left"}},[n("终止 "),i("strong",null,"loop"),n(" 或 "),i("strong",null,"switch"),n(" 语句，程序流将继续执行紧接着 loop 或 switch 的下一条语句。")],-1))]),i("tr",null,[i("td",W,[i("a",T,[e[13]||(e[13]=n("continue 语句")),s(l)])]),e[14]||(e[14]=i("td",{style:{"text-align":"left"}},"跳过本轮循环，开始下一轮循环。",-1))])])]),e[22]||(e[22]=d(`<h3 id="while循环" tabindex="-1"><a class="header-anchor" href="#while循环" aria-hidden="true">#</a> while循环</h3><p>C# 中 <strong>while</strong> 循环的语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while(condition)
{
   statement(s);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，<strong>statement(s)</strong> 可以是一个单独的语句，也可以是几个语句组成的代码块。<strong>condition</strong> 可以是任意的表达式，当为任意非零值时都为真。当条件为真时执行循环。</p><p><strong>流程图</strong></p><figure><img src="`+b+`" alt="C# 中的 while 循环" tabindex="0" loading="lazy"><figcaption>C# 中的 while 循环</figcaption></figure><p>示例</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;

namespace Loops
{
    
    class Program
    {
        static void Main(string[] args)
        {
            /* 局部变量定义 */
            int a = 10;

            /* while 循环执行 */
            while (a &lt; 20)
            {
                Console.WriteLine(&quot;a 的值： {0}&quot;, a);
                a++;
            }
            Console.ReadLine();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环" aria-hidden="true">#</a> for循环</h3><p>C# 中 <strong>for</strong> 循环的语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for ( init; condition; increment )
{
   statement(s);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是 for 循环的控制流：</p><ol><li><strong>init</strong> 会首先被执行，且只会执行一次。这一步允许您声明并初始化任何循环控制变量。您也可以不在这里写任何语句，只要有一个分号出现即可。</li><li>接下来，会判断 <strong>condition</strong>。如果为真，则执行循环主体。如果为假，则不执行循环主体，且控制流会跳转到紧接着 for 循环的下一条语句。</li><li>在执行完 for 循环主体后，控制流会跳回上面的 <strong>increment</strong> 语句。该语句允许您更新循环控制变量。该语句可以留空，只要在条件后有一个分号出现即可。</li><li>条件再次被判断。如果为真，则执行循环，这个过程会不断重复（循环主体，然后增加步值，再然后重新判断条件）。在条件变为假时，for 循环终止。</li></ol><p><strong>流程图</strong></p><figure><img src="`+p+`" alt="C# 中的 for 循环" tabindex="0" loading="lazy"><figcaption>C# 中的 for 循环</figcaption></figure><p>示例</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;

namespace Loops
{
    
    class Program
    {
        static void Main(string[] args)
        {
            /* for 循环执行 */
            for (int a = 10; a &lt; 20; a = a + 1)
            {
                Console.WriteLine(&quot;a 的值： {0}&quot;, a);
            }
            Console.ReadLine();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> foreach</h4><p>C# 也支持 foreach 循环，使用 foreach 可以迭代数组或者一个集合对象。</p><p>C# 的 foreach 循环可以用来遍历集合类型，例如数组、列表、字典等。它是一个简化版的 for 循环，使得代码更加简洁易读。</p><p>以下是 foreach 循环的语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>foreach (var item in collection)
{
    // 循环
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>collection 是要遍历的集合，item 是当前遍历到的元素。</p><p>示例</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        // 创建一个字符串列表
        List&lt;string&gt; myStrings = new List&lt;string&gt;();

        // 向列表添加一些字符串元素
        myStrings.Add(&quot;Google&quot;);
        myStrings.Add(&quot;Runoob&quot;);
        myStrings.Add(&quot;Taobao&quot;);

        // 使用 foreach 循环遍历列表中的元素
        foreach (string s in myStrings)
        {
            Console.WriteLine(s);
        }

        // 等待用户按下任意键后退出程序
        Console.ReadKey();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-类" tabindex="-1"><a class="header-anchor" href="#_7-类" aria-hidden="true">#</a> 7.类</h2><p>类成员包括数据成员（保存数据）和函数成员（执行代码） 其中数据成员包括：</p><ul><li>字段</li><li>常量（用const修饰，包括本地常量和成员常量，本地常量声明在方法内，成员常量声明在类中）</li></ul><blockquote><p>常量</p><p>成员常量表现的和静态量相似，但唯一不同的是，成员常量没有自己的存储位置，而是在编译时被编译器替换。此外，不能将成员常量声明为static。与const有着相同作用的是readonly，不同的是，const字段只能在字段的声明语句中初始化，而readonly也可以在构造函数中初始化。因此const字段的值必须在编译时确定，而randonly字段的值可以在运行时决定。</p></blockquote><p>函数成员包括：</p><ul><li>方法</li><li>属性</li><li>构造函数、析构函数</li><li>索引</li></ul><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3><p>就是一个简单的方法</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    class MyClass
    {
        private int a = 0;


        public void myInfo()
        {
            Console.WriteLine(&quot;this is my class&quot;);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><p>属性是一组称为访问器的方法（set访问器为属性赋值，get访问器从属性中获取值）。它是类中的函数成员，因此不需为属性分配内存。</p><p>写入和读取属性的代码和访问字段一样。属性会根据是写入还是读取，来隐式地调用适当的访问器</p><p>属性通常和字段关联，一种常见的方式是在类中将字段声明为private以封装字段，并声明一个public属性用get和set访问器来控制对该字段的访问。和属性关联的字段成为后备字段</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    class MyClass
    {
        private int realvale = 0;

        public int MyValue
        {
            set
            {
                realvale = value;
            }

            get
            {
                return realvale;
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对外访问接口，类似于java的get与set方法只不过属性将原始参数给屏蔽了。属性可以只有单get或单set方法。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class RightTriangle{
    public double A = 3;
    public double B = 4;
    //只读属性，计算直角三角形的第三边
    public double Hypotenuse{
        get{
            return Math.Sqrt((A * A) + (B * B));
        }
    }
}

class Program{
    static void Main(){
        RightTriangle c = new RightTriangle();
        Console.WriteLine(&quot;Hypotenuse: {0}&quot;, c.Hypotenuse);
    }
}

上述代码将输出5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h3><p>使用方式与Java类似</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
namespace LineApplication
{
   class Line
   {
      private double length;   // 线条的长度
      public Line()
      {
         Console.WriteLine(&quot;对象已创建&quot;);
      }

      public void setLength( double len )
      {
         length = len;
      }
      public double getLength()
      {
         return length;
      }

      static void Main(string[] args)
      {
         Line line = new Line();    
         // 设置线条长度
         line.setLength(6.0);
         Console.WriteLine(&quot;线条的长度： {0}&quot;, line.getLength());
         Console.ReadKey();
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-中的析构函数" tabindex="-1"><a class="header-anchor" href="#c-中的析构函数" aria-hidden="true">#</a> C# 中的析构函数</h3><p>类的 <strong>析构函数</strong> 是类的一个特殊的成员函数，当类的对象超出范围时执行。</p><p>析构函数的名称是在类的名称前加上一个波浪形（~）作为前缀，它不返回值，也不带任何参数。</p><p>析构函数用于在结束程序（比如关闭文件、释放内存等）之前释放资源。析构函数不能继承或重载。</p><p>下面的实例说明了析构函数的概念：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
namespace LineApplication
{
   class Line
   {
      private double length;   // 线条的长度
      public Line()  // 构造函数
      {
         Console.WriteLine(&quot;对象已创建&quot;);
      }
      ~Line() //析构函数
      {
         Console.WriteLine(&quot;对象已删除&quot;);
      }

      public void setLength( double len )
      {
         length = len;
      }
      public double getLength()
      {
         return length;
      }

      static void Main(string[] args)
      {
         Line line = new Line();
         // 设置线条长度
         line.setLength(6.0);
         Console.WriteLine(&quot;线条的长度： {0}&quot;, line.getLength());           
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当上面的代码被编译和执行时，它会产生下列结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>对象已创建
线条的长度： 6
对象已删除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类似与Java中Object类的finalize()方法。</p><h3 id="c-类的静态成员" tabindex="-1"><a class="header-anchor" href="#c-类的静态成员" aria-hidden="true">#</a> C# 类的静态成员</h3><p>我们可以使用 <strong>static</strong> 关键字把类成员定义为静态的。当我们声明一个类成员为静态时，意味着无论有多少个类的对象被创建，只会有一个该静态成员的副本。</p><p>关键字 <strong>static</strong> 意味着类中只有一个该成员的实例。静态变量用于定义常量，因为它们的值可以通过直接调用类而不需要创建类的实例来获取。静态变量可在成员函数或类的定义外部进行初始化。你也可以在类的定义内部初始化静态变量。</p><p>下面的实例演示了<strong>静态变量</strong>的用法：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
namespace StaticVarApplication
{
    class StaticVar
    {
       public static int num;
        public void count()
        {
            num++;
        }
        public int getNum()
        {
            return num;
        }
    }
    class StaticTester
    {
        static void Main(string[] args)
        {
            StaticVar s1 = new StaticVar();
            StaticVar s2 = new StaticVar();
            s1.count();
            s1.count();
            s1.count();
            s2.count();
            s2.count();
            s2.count();         
            Console.WriteLine(&quot;s1 的变量 num： {0}&quot;, s1.getNum());
            Console.WriteLine(&quot;s2 的变量 num： {0}&quot;, s2.getNum());
            Console.ReadKey();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当上面的代码被编译和执行时，它会产生下列结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>s1 的变量 num： 6
s2 的变量 num： 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引器" tabindex="-1"><a class="header-anchor" href="#索引器" aria-hidden="true">#</a> 索引器</h3><p>可以认为索引器是为类的多个数据成员提供get和set访问器的属性</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class Class1{
    private int Temp0;
    private int Temp1;
    //和属性不同的是，索引器有参数（索引参数），并且使用this而不是名称
    //索引器声明
    public int this [int index]{    
        get{
            return (index == 0) ? Temp0 : Temp1;
        }
        set{
            if(index == 0)
                Temp0 = value;   //value为set访问器的隐式变量
            else
                Temp1 = value;
        }
    }
}

class Example{
    static void Main(){
        Class1 a = new Class1();
        //使用索引参数0或1读取数据成员
        Console.WriteLine(&quot;T0: {0}, T1 : {1}&quot;, a[0], a[1]);
        //使用索引参数0或1对数据成员进行写入
        a[0] = 15;
        a[1] = 20;
        Console.WriteLine(&quot;T0: {0}, T1 : {1}&quot;, a[0], a[1]);
    }
}

以上代码会输出：
T0: 0, T1: 0
T0: 15, T1: 20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类似map的功能</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
namespace IndexerApplication
{
   class IndexedNames
   {
      private string[] namelist = new string[size];
      static public int size = 10;
      public IndexedNames()
      {
         for (int i = 0; i &lt; size; i++)
         {
          namelist[i] = &quot;N. A.&quot;;
         }
      }
      public string this[int index]
      {
         get
         {
            string tmp;

            if( index &gt;= 0 &amp;&amp; index &lt;= size-1 )
            {
               tmp = namelist[index];
            }
            else
            {
               tmp = &quot;&quot;;
            }

            return ( tmp );
         }
         set
         {
            if( index &gt;= 0 &amp;&amp; index &lt;= size-1 )
            {
               namelist[index] = value;
            }
         }
      }
      public int this[string name]
      {
         get
         {
            int index = 0;
            while(index &lt; size)
            {
               if (namelist[index] == name)
               {
                return index;
               }
               index++;
            }
            return index;
         }

      }

      static void Main(string[] args)
      {
         IndexedNames names = new IndexedNames();
         names[0] = &quot;Zara&quot;;
         names[1] = &quot;Riz&quot;;
         names[2] = &quot;Nuha&quot;;
         names[3] = &quot;Asif&quot;;
         names[4] = &quot;Davinder&quot;;
         names[5] = &quot;Sunil&quot;;
         names[6] = &quot;Rubic&quot;;
         // 使用带有 int 参数的第一个索引器
         for (int i = 0; i &lt; IndexedNames.size; i++)
         {
            Console.WriteLine(names[i]);
         }
         // 使用带有 string 参数的第二个索引器
         Console.WriteLine(names[&quot;Nuha&quot;]);
         Console.ReadKey();
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽象成员" tabindex="-1"><a class="header-anchor" href="#抽象成员" aria-hidden="true">#</a> 抽象成员</h3><p>类似于Java中的抽象方法。它使用abstract标记，并且必须是函数成员（方法、属性、事件、索引）。不能有实现代码块，抽象成员的实现用分号表示。即每一个抽象成员的声明后都要带一个分号</p><p>如：以下声明了两个抽象成员，一个名为PrintStuff的抽象方法和一个名为MyProperty的抽象属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>abstract public void PrintStuff(string s);
abstract public int MyProperty{
    get;    //分号代替实现
    set;
}
Copy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>抽象类：只能被继承，不能用来创建实例，用abstract修饰符标注</li><li>密封类：与抽象类相反，只能被用来创建实例，不能被继承。用sealed修饰符标注</li></ul><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p>c#的继承机制与Java相似</p><h2 id="_8-异常处理" tabindex="-1"><a class="header-anchor" href="#_8-异常处理" aria-hidden="true">#</a> 8.异常处理</h2><p>异常是在程序执行期间出现的问题。C# 中的异常是对程序运行时出现的特殊情况的一种响应，比如尝试除以零。</p><p>异常提供了一种把程序控制权从某个部分转移到另一个部分的方式。C# 异常处理时建立在四个关键词之上的：<strong>try</strong>、<strong>catch</strong>、<strong>finally</strong> 和 <strong>throw</strong>。</p><ul><li><strong>try</strong>：一个 try 块标识了一个将被激活的特定的异常的代码块。后跟一个或多个 catch 块。</li><li><strong>catch</strong>：程序通过异常处理程序捕获异常。catch 关键字表示异常的捕获。</li><li><strong>finally</strong>：finally 块用于执行给定的语句，不管异常是否被抛出都会执行。例如，如果您打开一个文件，不管是否出现异常文件都要被关闭。</li><li><strong>throw</strong>：当问题出现时，程序抛出一个异常。使用 throw 关键字来完成。</li></ul><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><p>假设一个块将出现异常，一个方法使用 try 和 catch 关键字捕获异常。try/catch 块内的代码为受保护的代码，使用 try/catch 语法如下所示：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>try
{
   // 引起异常的语句
}
catch( ExceptionName e1 )
{
   // 错误处理代码
}
catch( ExceptionName e2 )
{
   // 错误处理代码
}
catch( ExceptionName eN )
{
   // 错误处理代码
}
finally
{
   // 要执行的语句
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以列出多个 catch 语句捕获不同类型的异常，以防 try 块在不同的情况下生成多个异常。</p><h3 id="c-中的异常类" tabindex="-1"><a class="header-anchor" href="#c-中的异常类" aria-hidden="true">#</a> C# 中的异常类</h3><p>C# 异常是使用类来表示的。C# 中的异常类主要是直接或间接地派生于 <strong>System.Exception</strong> 类。<strong>System.ApplicationException</strong> 和 <strong>System.SystemException</strong> 类是派生于 System.Exception 类的异常类。</p><p><strong>System.ApplicationException</strong> 类支持由应用程序生成的异常。所以程序员定义的异常都应派生自该类。</p><p><strong>System.SystemException</strong> 类是所有预定义的系统异常的基类。</p><p>下表列出了一些派生自 System.SystemException 类的预定义的异常类：</p><table><thead><tr><th style="text-align:left;">异常类</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">System.IO.IOException</td><td style="text-align:left;">处理 I/O 错误。</td></tr><tr><td style="text-align:left;">System.IndexOutOfRangeException</td><td style="text-align:left;">处理当方法指向超出范围的数组索引时生成的错误。</td></tr><tr><td style="text-align:left;">System.ArrayTypeMismatchException</td><td style="text-align:left;">处理当数组类型不匹配时生成的错误。</td></tr><tr><td style="text-align:left;">System.NullReferenceException</td><td style="text-align:left;">处理当依从一个空对象时生成的错误。</td></tr><tr><td style="text-align:left;">System.DivideByZeroException</td><td style="text-align:left;">处理当除以零时生成的错误。</td></tr><tr><td style="text-align:left;">System.InvalidCastException</td><td style="text-align:left;">处理在类型转换期间生成的错误。</td></tr><tr><td style="text-align:left;">System.OutOfMemoryException</td><td style="text-align:left;">处理空闲内存不足生成的错误。</td></tr><tr><td style="text-align:left;">System.StackOverflowException</td><td style="text-align:left;">处理栈溢出生成的错误。</td></tr></tbody></table><h3 id="创建用户自定义异常" tabindex="-1"><a class="header-anchor" href="#创建用户自定义异常" aria-hidden="true">#</a> 创建用户自定义异常</h3><p>用户自定义的异常类是派生自 <strong>ApplicationException</strong> 类.</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
namespace UserDefinedException
{
   class TestTemperature
   {
      static void Main(string[] args)
      {
         Temperature temp = new Temperature();
         try
         {
            temp.showTemp();
         }
         catch(TempIsZeroException e)
         {
            Console.WriteLine(&quot;TempIsZeroException: {0}&quot;, e.Message);
         }
         Console.ReadKey();
      }
   }
}
public class TempIsZeroException: ApplicationException
{
   public TempIsZeroException(string message): base(message)
   {
   }
}
public class Temperature
{
   int temperature = 0;
   public void showTemp()
   {
      if(temperature == 0)
      {
         throw (new TempIsZeroException(&quot;Zero Temperature found&quot;));
      }
      else
      {
         Console.WriteLine(&quot;Temperature: {0}&quot;, temperature);
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-操作符重载" tabindex="-1"><a class="header-anchor" href="#_9-操作符重载" aria-hidden="true">#</a> 9.操作符重载</h2><p>如果面对一个用户自定义的类或结构，运算符就会不知道如何取处理它。运算符重载允许用户自己定义C#运算符来操作自定义类型的操作数。</p><ul><li>为类或结构重载一个运算符x，可以声明一个名称为<code>operator x</code>的方法并实现它的行为（如<code>operator +</code>和<code>operator -</code>等）。一元运算符的重载方法带有一个单独的class或struct类型的参数，二元运算符重载的方法带有两个参数，其中至少有一个是class或struct类型。</li><li>声明必须同时使用static和public的修饰符</li><li>运算符必须要是要操作的类或结构的成员</li></ul><p>如下代码声明了LimitedInt类的两个重载的运算符：一个是加运算符，另一个是取负运算符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class LimitedInt Return{
    public static LimitedInt operator + (LimitedInt x, double y){
        LimitedInt li = new LimitedInt();
        li.TheValue = x.TheValue + (int)y;
        return li;
    }

    public static LimitedInt operator - (LimitedInt x){
        LimitedInt li = new LimitedInt();
        li.TheValue = 0;
        return li;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可重载和不可重载运算符" tabindex="-1"><a class="header-anchor" href="#可重载和不可重载运算符" aria-hidden="true">#</a> 可重载和不可重载运算符</h3><p>下表描述了 C# 中运算符重载的能力：</p><table><thead><tr><th style="text-align:left;">运算符</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">+, -, !, ~, ++, --</td><td style="text-align:left;">这些一元运算符只有一个操作数，且可以被重载。</td></tr><tr><td style="text-align:left;">+, -, *, /, %</td><td style="text-align:left;">这些二元运算符带有两个操作数，且可以被重载。</td></tr><tr><td style="text-align:left;">==, !=, &lt;, &gt;, &lt;=, &gt;=</td><td style="text-align:left;">这些比较运算符可以被重载。</td></tr><tr><td style="text-align:left;">&amp;&amp;, ||</td><td style="text-align:left;">这些条件逻辑运算符不能被直接重载。</td></tr><tr><td style="text-align:left;">+=, -=, *=, /=, %=</td><td style="text-align:left;">这些赋值运算符不能被重载。</td></tr><tr><td style="text-align:left;">=, ., ?:, -&gt;, new, is, sizeof, typeof</td><td style="text-align:left;">这些运算符不能被重载。</td></tr></tbody></table><p>针对上述讨论，让我们扩展上面的实例，重载更多的运算符：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;

namespace OperatorOvlApplication
{
    class Box
    {
       private double length;      // 长度
       private double breadth;     // 宽度
       private double height;      // 高度
      
       public double getVolume()
       {
         return length * breadth * height;
       }
      public void setLength( double len )
      {
          length = len;
      }

      public void setBreadth( double bre )
      {
          breadth = bre;
      }

      public void setHeight( double hei )
      {
          height = hei;
      }
      // 重载 + 运算符来把两个 Box 对象相加
      public static Box operator+ (Box b, Box c)
      {
          Box box = new Box();
          box.length = b.length + c.length;
          box.breadth = b.breadth + c.breadth;
          box.height = b.height + c.height;
          return box;
      }
      
      public static bool operator == (Box lhs, Box rhs)
      {
          bool status = false;
          if (lhs.length == rhs.length &amp;&amp; lhs.height == rhs.height 
             &amp;&amp; lhs.breadth == rhs.breadth)
          {
              status = true;
          }
          return status;
      }
      public static bool operator !=(Box lhs, Box rhs)
      {
          bool status = false;
          if (lhs.length != rhs.length || lhs.height != rhs.height 
              || lhs.breadth != rhs.breadth)
          {
              status = true;
          }
          return status;
      }
      public static bool operator &lt;(Box lhs, Box rhs)
      {
          bool status = false;
          if (lhs.length &lt; rhs.length &amp;&amp; lhs.height 
              &lt; rhs.height &amp;&amp; lhs.breadth &lt; rhs.breadth)
          {
              status = true;
          }
          return status;
      }

      public static bool operator &gt;(Box lhs, Box rhs)
      {
          bool status = false;
          if (lhs.length &gt; rhs.length &amp;&amp; lhs.height 
              &gt; rhs.height &amp;&amp; lhs.breadth &gt; rhs.breadth)
          {
              status = true;
          }
          return status;
      }

      public static bool operator &lt;=(Box lhs, Box rhs)
      {
          bool status = false;
          if (lhs.length &lt;= rhs.length &amp;&amp; lhs.height 
              &lt;= rhs.height &amp;&amp; lhs.breadth &lt;= rhs.breadth)
          {
              status = true;
          }
          return status;
      }

      public static bool operator &gt;=(Box lhs, Box rhs)
      {
          bool status = false;
          if (lhs.length &gt;= rhs.length &amp;&amp; lhs.height 
             &gt;= rhs.height &amp;&amp; lhs.breadth &gt;= rhs.breadth)
          {
              status = true;
          }
          return status;
      }
      public override string ToString()
      {
          return String.Format(&quot;({0}, {1}, {2})&quot;, length, breadth, height);
      }
   
   }
    
   class Tester
   {
      static void Main(string[] args)
      {
        Box Box1 = new Box();          // 声明 Box1，类型为 Box
        Box Box2 = new Box();          // 声明 Box2，类型为 Box
        Box Box3 = new Box();          // 声明 Box3，类型为 Box
        Box Box4 = new Box();
        double volume = 0.0;   // 体积

        // Box1 详述
        Box1.setLength(6.0);
        Box1.setBreadth(7.0);
        Box1.setHeight(5.0);

        // Box2 详述
        Box2.setLength(12.0);
        Box2.setBreadth(13.0);
        Box2.setHeight(10.0);

       // 使用重载的 ToString() 显示两个盒子
        Console.WriteLine(&quot;Box1： {0}&quot;, Box1.ToString());
        Console.WriteLine(&quot;Box2： {0}&quot;, Box2.ToString());
        
        // Box1 的体积
        volume = Box1.getVolume();
        Console.WriteLine(&quot;Box1 的体积： {0}&quot;, volume);

        // Box2 的体积
        volume = Box2.getVolume();
        Console.WriteLine(&quot;Box2 的体积： {0}&quot;, volume);

        // 把两个对象相加
        Box3 = Box1 + Box2;
        Console.WriteLine(&quot;Box3： {0}&quot;, Box3.ToString());
        // Box3 的体积
        volume = Box3.getVolume();
        Console.WriteLine(&quot;Box3 的体积： {0}&quot;, volume);

        //comparing the boxes
        if (Box1 &gt; Box2)
          Console.WriteLine(&quot;Box1 大于 Box2&quot;);
        else
          Console.WriteLine(&quot;Box1 不大于 Box2&quot;);
        if (Box1 &lt; Box2)
          Console.WriteLine(&quot;Box1 小于 Box2&quot;);
        else
          Console.WriteLine(&quot;Box1 不小于 Box2&quot;);
        if (Box1 &gt;= Box2)
          Console.WriteLine(&quot;Box1 大于等于 Box2&quot;);
        else
          Console.WriteLine(&quot;Box1 不大于等于 Box2&quot;);
        if (Box1 &lt;= Box2)
          Console.WriteLine(&quot;Box1 小于等于 Box2&quot;);
        else
          Console.WriteLine(&quot;Box1 不小于等于 Box2&quot;);
        if (Box1 != Box2)
          Console.WriteLine(&quot;Box1 不等于 Box2&quot;);
        else
          Console.WriteLine(&quot;Box1 等于 Box2&quot;);
        Box4 = Box3;
        if (Box3 == Box4)
          Console.WriteLine(&quot;Box3 等于 Box4&quot;);
        else
          Console.WriteLine(&quot;Box3 不等于 Box4&quot;);

        Console.ReadKey();
      }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-c-结构体-struct" tabindex="-1"><a class="header-anchor" href="#_10-c-结构体-struct" aria-hidden="true">#</a> 10.C# 结构体（Struct）</h2><p>在 C# 中，结构体是值类型数据结构。它使得一个单一变量可以存储各种数据类型的相关数据。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
using System.Text;
     
struct Books
{
   public string title;
   public string author;
   public string subject;
   public int book_id;
};  

public class testStructure
{
   public static void Main(string[] args)
   {

      Books Book1;        /* 声明 Book1，类型为 Books */
      Books Book2;        /* 声明 Book2，类型为 Books */

      /* book 1 详述 */
      Book1.title = &quot;C Programming&quot;;
      Book1.author = &quot;Nuha Ali&quot;; 
      Book1.subject = &quot;C Programming Tutorial&quot;;
      Book1.book_id = 6495407;

      /* book 2 详述 */
      Book2.title = &quot;Telecom Billing&quot;;
      Book2.author = &quot;Zara Ali&quot;;
      Book2.subject =  &quot;Telecom Billing Tutorial&quot;;
      Book2.book_id = 6495700;

      /* 打印 Book1 信息 */
      Console.WriteLine( &quot;Book 1 title : {0}&quot;, Book1.title);
      Console.WriteLine(&quot;Book 1 author : {0}&quot;, Book1.author);
      Console.WriteLine(&quot;Book 1 subject : {0}&quot;, Book1.subject);
      Console.WriteLine(&quot;Book 1 book_id :{0}&quot;, Book1.book_id);

      /* 打印 Book2 信息 */
      Console.WriteLine(&quot;Book 2 title : {0}&quot;, Book2.title);
      Console.WriteLine(&quot;Book 2 author : {0}&quot;, Book2.author);
      Console.WriteLine(&quot;Book 2 subject : {0}&quot;, Book2.subject);
      Console.WriteLine(&quot;Book 2 book_id : {0}&quot;, Book2.book_id);       

      Console.ReadKey();

   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-结构的特点" tabindex="-1"><a class="header-anchor" href="#c-结构的特点" aria-hidden="true">#</a> C# 结构的特点</h3><p>您已经用了一个简单的名为 Books 的结构。在 C# 中的结构与传统的 C 或 C++ 中的结构不同。C# 中的结构有以下特点：</p><ul><li>结构可带有方法、字段、索引、属性、运算符方法和事件。</li><li>结构可定义构造函数，但不能定义析构函数。但是，您不能为结构定义无参构造函数。无参构造函数(默认)是自动定义的，且不能被改变。</li><li>与类不同，结构不能继承其他的结构或类。</li><li>结构不能作为其他结构或类的基础结构。</li><li>结构可实现一个或多个接口。</li><li>结构成员不能指定为 abstract、virtual 或 protected。</li><li>当您使用 <strong>New</strong> 操作符创建一个结构对象时，会调用适当的构造函数来创建结构。与类不同，结构可以不使用 New 操作符即可被实例化。</li><li>如果不使用 New 操作符，只有在所有的字段都被初始化之后，字段才被赋值，对象才被使用。</li></ul><h3 id="类-vs-结构" tabindex="-1"><a class="header-anchor" href="#类-vs-结构" aria-hidden="true">#</a> 类 vs 结构</h3><p>类和结构有以下几个基本的不同点：</p><ul><li>类是引用类型，结构是值类型。</li><li>结构不支持继承。</li><li>结构不能声明默认的构造函数。</li></ul><p>C# 中结构类型和类类型在语法上非常相似，他们都是一种数据结构，都可以包括数据成员和方法成员。</p><p><strong>结构和类的区别：</strong></p><ul><li>1、结构是值类型，它在栈中分配空间；而类是引用类型，它在堆中分配空间，栈中保存的只是引用。</li><li>2、结构类型直接存储成员数据，让其他类的数据位于堆中，位于栈中的变量保存的是指向堆中数据对象的引用。</li></ul><p>C# 中的简单类型，如int、double、bool等都是结构类型。如果需要的话，甚至可以使用结构类型结合运算符运算重载，再为 C# 语言创建出一种新的值类型来。</p><p>由于结构是值类型，并且直接存储数据，因此在一个对象的主要成员为数据且数据量不大的情况下，使用结构会带来更好的性能。</p><p>因为结构是值类型，因此在为结构分配内存，或者当结构超出了作用域被删除时，性能会非常好，因为他们将内联或者保存在堆栈中。当把一个结构类型的变量赋值给另一个结构时，对性能的影响取决于结构的大小，如果结构的数据成员非常多而且复杂，就会造成损失，接下来使用一段代码来说明这个问题。</p><p>结构和类的适用场合分析：</p><ul><li>1、当堆栈的空间很有限，且有大量的逻辑对象时，创建类要比创建结构好一些；</li><li>2、对于点、矩形和颜色这样的轻量对象，假如要声明一个含有许多个颜色对象的数组，则CLR需要为每个对象分配内存，在这种情况下，使用结构的成本较低；</li><li>3、在表现抽象和多级别的对象层次时，类是最好的选择，因为结构不支持继承。</li><li>4、大多数情况下，目标类型只是含有一些数据，或者以数据为主。</li></ul><p>重写上面的构造体</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
using System.Text;
     
struct Books
{
   private string title;
   private string author;
   private string subject;
   private int book_id;
   public void setValues(string t, string a, string s, int id)
   {
      title = t;
      author = a;
      subject = s;
      book_id =id; 
   }
   public void display()
   {
      Console.WriteLine(&quot;Title : {0}&quot;, title);
      Console.WriteLine(&quot;Author : {0}&quot;, author);
      Console.WriteLine(&quot;Subject : {0}&quot;, subject);
      Console.WriteLine(&quot;Book_id :{0}&quot;, book_id);
   }

};  

public class testStructure
{
   public static void Main(string[] args)
   {

      Books Book1 = new Books(); /* 声明 Book1，类型为 Books */
      Books Book2 = new Books(); /* 声明 Book2，类型为 Books */

      /* book 1 详述 */
      Book1.setValues(&quot;C Programming&quot;,
      &quot;Nuha Ali&quot;, &quot;C Programming Tutorial&quot;,6495407);

      /* book 2 详述 */
      Book2.setValues(&quot;Telecom Billing&quot;,
      &quot;Zara Ali&quot;, &quot;Telecom Billing Tutorial&quot;, 6495700);

      /* 打印 Book1 信息 */
      Book1.display();

      /* 打印 Book2 信息 */
      Book2.display(); 

      Console.ReadKey();

   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-c-可空类型-nullable" tabindex="-1"><a class="header-anchor" href="#_11-c-可空类型-nullable" aria-hidden="true">#</a> 11.C# 可空类型（Nullable）</h2><h3 id="c-单问号-与-双问号" tabindex="-1"><a class="header-anchor" href="#c-单问号-与-双问号" aria-hidden="true">#</a> C# 单问号 ? 与 双问号 ??</h3><p><strong>?</strong> 单问号用于对 <strong>int、double、bool</strong> 等无法直接赋值为 null 的数据类型进行 null 的赋值，意思是这个数据类型是 Nullable 类型的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int? i = 3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等同于：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Nullable&lt;int&gt; i = new Nullable&lt;int&gt;(3);
int i; //默认值0
int? ii; //默认值null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>??</strong> 双问号用于判断一个变量在为 null 的时候返回一个指定的值。</p><h3 id="c-可空类型-nullable" tabindex="-1"><a class="header-anchor" href="#c-可空类型-nullable" aria-hidden="true">#</a> C# 可空类型（Nullable）</h3><p>C# 提供了一个特殊的数据类型，<strong>nullable</strong> 类型（可空类型），可空类型可以表示其基础值类型正常范围内的值，再加上一个 null 值。</p><p>例如，Nullable&lt; Int32 &gt;，读作&quot;可空的 Int32&quot;，可以被赋值为 -2,147,483,648 到 2,147,483,647 之间的任意值，也可以被赋值为 null 值。类似的，Nullable&lt; bool &gt; 变量可以被赋值为 true 或 false 或 null。</p><p>在处理数据库和其他包含可能未赋值的元素的数据类型时，将 null 赋值给数值类型或布尔型的功能特别有用。例如，数据库中的布尔型字段可以存储值 true 或 false，或者，该字段也可以未定义。</p><p>声明一个 <strong>nullable</strong> 类型（可空类型）的语法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt; data_type&gt; ? &lt;variable_name&gt; = null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
namespace CalculatorApplication
{
   class NullablesAtShow
   {
      static void Main(string[] args)
      {
         int? num1 = null;
         int? num2 = 45;
         double? num3 = new double?();
         double? num4 = 3.14157;
         
         bool? boolval = new bool?();

         // 显示值
         
         Console.WriteLine(&quot;显示可空类型的值： {0}, {1}, {2}, {3}&quot;, 
                            num1, num2, num3, num4);
         Console.WriteLine(&quot;一个可空的布尔值： {0}&quot;, boolval);
         Console.ReadLine();

      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当上面的代码被编译和执行时，它会产生下列结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>显示可空类型的值： , 45,  , 3.14157
一个可空的布尔值：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="null-合并运算符" tabindex="-1"><a class="header-anchor" href="#null-合并运算符" aria-hidden="true">#</a> Null 合并运算符（ ?? ）</h3><p>Null 合并运算符用于定义可空类型和引用类型的默认值。Null 合并运算符为类型转换定义了一个预设值，以防可空类型的值为 Null。Null 合并运算符把操作数类型隐式转换为另一个可空（或不可空）的值类型的操作数的类型。</p><p>如果第一个操作数的值为 null，则运算符返回第二个操作数的值，否则返回第一个操作数的值。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
namespace CalculatorApplication
{
   class NullablesAtShow
   {
         
      static void Main(string[] args)
      {
         
         double? num1 = null;
         double? num2 = 3.14157;
         double num3;
         num3 = num1 ?? 5.34;      // num1 如果为空值则返回 5.34
         Console.WriteLine(&quot;num3 的值： {0}&quot;, num3);
         num3 = num2 ?? 5.34;
         Console.WriteLine(&quot;num3 的值： {0}&quot;, num3);
         Console.ReadLine();

      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当上面的代码被编译和执行时，它会产生下列结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>num3 的值： 5.34
num3 的值： 3.14157
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>??</strong> 可以理解为三元运算符的简化形式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>num3 = num1 ?? 5.34;
num3 = (num1 == null) ? 5.34 : num1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,143))])}const E=a(g,[["render",M],["__file","0.入门.html.vue"]]);export{E as default};
