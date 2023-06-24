# Day06 作业布置

## 一. 完成上课所有的操作练习







## 二. Git Tag是什么？有什么作用？

* Git tag可以给仓库历史中的某一个提交打上标签，这么做的好处是，如果将来这个重大版本出现了bug，可以迅速的定位到有标签的版本，利于维护和管理
* 一般分为轻量标签和附注标签:

``` shell
轻量标签:
$ git tag v1.0

附注标签可以通过-a和-m参数添加额外信息:
$ git tag -a v1.1 -m "xxxx(附注信息)"
```





## 三. 什么是Git branch？在开发中如何使用Git branch？有哪些Git flow？

Git branch:

* Git branch指的是仓库中的分支
* 当我们新建一个仓库时，默认会创建一个master的分支，并且这个分支会默认指向最后一次的提交历史
* 在开发中，设置多个分支可以提高开发效率，即一个分支开发失败，不会影响到另一个分支
* 开发中常见的分支命令：

``` shell
$ git branch  #查询、显示本地的所有分支
$ git checkout <branch> #切换到指定的分支
$ git branch <new branch> #创建新的分支
$ git branch -d <branch> #删除某个分支
$ git checkout -b <branch> #创建一个新的分支并且切换到这个分支上
```



常见的Git flow :

``` shell
master #一般作为主分支，也是默认分支
```

``` shell
hotfix #一般用于修复bug
```

``` shell
develop #一般用于开发，当有稳定版本时，合并到master分支中
```



## 四. 如何管理远程的branch？

管理远程分支：

``` shell
#分享一个分支，并且将其推送到有写入权限的仓库上:
$ git push <remote> <branch>


#跟踪远程分支:
#克隆一个仓库时，默认会创建一个跟踪origin/master的分支
#自己设置跟踪其他分支:
$ git checkout --track <remote>/<branch>

#删除远程分支:
$ git push origin --delete <branch>


#获取别人更新的远程分支信息:
$ git fetch <remote> <branch>


```





## 五. Git rebase的作用是什么？和git merge有什么区别？

Git rebase :

``` shell
#在Git中，rebase操作也被称为"变基"
#它的原理是找到两个分支的“祖先”，并且对比当前分支相对于该祖先的历史提交，提取相应的修改并存为临时文件，再把相应的分支指向底基，最后将之前存为临时文件的修改依次使用
```



git rebase和git merge的区别：

``` shell
#git rebase:对于历史的处理方法是简化历史记录，将两个分支的历史简化，整个历史更加简洁

#git merge:对于历史的处理方法是记录git的所有历史，那么分支的历史错综复杂，也全部记录下来

#特别注意:不要在main(主分支)上使用rebase
```





## 六. Git仓库管理源码的原理是什么？底层如何将他们关联起来？

``` shell
#Git仓库原理，当通过$git commit -m "xxxx"提交时:

#Git首先根据当前的索引生产一个tree object，充当新提交的一个快照。

#创建一个新的commit object，将这次commit的信息储存起来，并且parent指向上一个commit，组成一条链记录变更历史。

#将master分支的指针移到新的commit结点


```



## 七. 总结整理git常见的命令

git常见的命令：

``` shell
#创建版本库:
$ git clone <url>  #克隆远程版本库
$ git init #初始化本地版本库

#修改和提交:
$ git status #查看状态
$ git add <file> #跟踪指定的文件
$ git add .  #将文件添加到暂存区中
$ git commit -m #将暂存区的文件进行提交更新

#查看提交历史:
$ git log #查看提交的历史
$ git log -p <file> #查看指定文件的提交历史

#对分支和标签的操作:
#分支:
$ git branch #查看本地所有分支
$ git checkout <branch> #切换到指定的分支
$ git branch <new-branch> #创建新的分支
$ git branch -d <branch> #删除本地分支

#标签:
$ git tag <newtag> #基于最新提交创建标签
$ git tag #查看所有的本地标签
$ git tag -d <tagname> #删除指定的标签
$ git push --tags #上传所有标签到远程仓库

#分支合并:
$ git merge <branch> #合并指定分支到当前分支
$ git rebase <branch> #衍合指定分支到当前分支

#远程操作:

$ git remote add <remote> <url> #关联远程仓库
$ git remote -v #查看所关联的远程版本库信息
$ git fetch <remote> #从指定的远程仓库中获取代码、信息
$ git pull <remote> <branch> #获取远程仓库的代码并且合并
$ git push <remote> <branch> #上传本地库的代码至远程仓库并且合并


#远程分支的操作:
#分享一个分支，并且将其推送到有写入权限的仓库上:
$ git push <remote> <branch>


#跟踪远程分支:
#克隆一个仓库时，默认会创建一个跟踪origin/master的分支
#自己设置跟踪其他分支:
$ git checkout --track <remote>/<branch>

#删除远程分支:
$ git push origin --delete <branch>


#获取别人更新的远程分支信息:
$ git fetch <remote> <branch>



```

















































