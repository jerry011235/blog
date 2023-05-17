---
title: Xcopy的exclude参数无法读取文件
date: 2017-01-20 13:52:17
tags: [Xcopy, cmd]
categories: [探索学习]
---
Xcopy的exclude参数可以用于在复制文件夹时可以排除某些指定文件或文件夹。但是如果直接写如下命令会报错，调整成相对地址或绝对地址也不行：
`xcopy "D:\1" "E:\1\" /e /y /d /i /exclude:README.md`

出错信息：
```
无法读取文件: README.md
复制了 0 个文件
```
解决办法为命令改成如下：
`xcopy "D:\1" "E:\1\" /e /y /d /i /exclude:uncopy.txt`
然后在此bat文件的**同级目录**下新建uncopy.txt文件。
里面写`readme`即可。
如果有其他不复制的文件，把他们对应的字符串都写上去，用**回车**来分割。

```
  /EXCLUDE:file1[+file2][+file3]...
               指定含有字符串的文件列表。每一个字符串
               必须在文件的单独行中。如果有任何
               字符串与要被复制的文件的绝对路径
               相符，那个文件将不会得到复制。
               例如，指定如 \obj\ 或 .obj 的字符串会排除
               目录 obj 下面的所有文件或带有
               .obj 扩展名的文件。
```
参考：[关于xcopy的exclude参数的使用][1]


  [1]: http://blog.sina.com.cn/s/blog_3f7e41390100b5i2.html