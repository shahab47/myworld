export default function Home() {
  return (
    <div className="container">
    
    
    
    …or create a new repository on the command line
echo "# reactToDoList" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/shahab47/reactToDoList.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/shahab47/reactToDoList.git
git branch -M main
git push -u origin main
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

      اول یک بار یزن 
      git --version
      ببین که نصبه روی سیستمت یا نه 
    اگر نصب نبود 
    در Termux
    {/* apt update && apt upgrade */}
    pkg install git

    اگر میخواهی پروژه ای از گیت دانلود کنی بزن
    clone "url"
    url رو میتونی از همون آدرس بار گیت هم برداری 

      git init 
      git add -A
      git status
      اگر پیام زیر برات اومد
      warning: LF will be replaced by CRLF in pages/index.js.
      The file will have its original line endings in your working directory
       باید بزنی 
       git config core.autocrlf true

      git config --global user.email "csshahab47@gmail.com" 
      git config --global user.name "shkh" 
      
      git add -A 
      git commit -m "my first commit"

    
      اول یک ریپازیتوری در ریموت خودت بساز 
      بعد اون لینک https که میده از ریپازیتوری رو بردار و بیار 
      برای پوش کردن 
      
      git push origin master
اگر ا
رور داد یکبار این دستور رو بزن
git add -A
git commit -m "message"
git pull --rebase

      اگر که مطمئنی این پروژه لوکالت کاملا درسته فقط از دستور زیر استفاده کن
      git push -u origin master

      git push adress branchname 
    
    
    با دستور زیر میتونی آخرین ورژن آپدیت شده رو از گیت هاب اضافه کنی به پروژه ات
    
    git pull origin master

با دستور زیر هم میتونی تغییرات لوکال رو به گیت سرور بدی 

که بعدش ازت یوزر نیم و پسورد میخواد
که البته بعدش پیغام زیر رو به ما داد
موقعی که با گیت هاب داشتیم کار میکردیم
 
Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.

که باید به لینک زیر بری و حلش کنی 

https://stackoverflow.com/questions/68775869/support-for-password-authentication-was-removed-please-use-a-personal-access-to

For Linux, you need to configure the local GIT client with a username and email address,

$ git config --global user.name "shkh"
$ git config --global user.email "csshahab47@gmail.com"
$ git config -l
Once GIT is configured, we can begin using it to access GitHub. Example:

$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
 Cloning into `YOUR-REPOSITORY`...
Username: shkh
{/* Password: <type your password or personal access token (GitHub) */}

Now cache the given record in your computer to remembers the token:

// $ git config --global credential.helper cache


// If needed, anytime you can delete the cache record by:

// $ git config --global --unset credential.helper
// $ git config --system --unset credential.helper
// Now try to pull with -v to verify

// $ git pull -v



{/* // git clone https://<tokenhere>@github.com/<user>/<repo>.git */}



git push origin master
اگر بعد از دستور پوش این ارور رو گرفتی 

{/* // ! [rejected]        master -> master (non-fast-forward) */}
// error: failed to push some refs to 'https://github.com/shahab47/myworld'
// hint: Updates were rejected because the tip of your current branch is behind
// hint: its remote counterpart. Integrate the remote changes (e.g.
// hint: 'git pull ...') before pushing again.
// hint: See the 'Note about fast-forwards' in 'git push --help' for details.
// git pull --rebase


// PS: If you are annoyed by Git asking for username/token again and again, follow these three simple steps
// Run nano ~/.git-credentials. Remove the GitHub line and save it.

// git config --global credential.helper store

// Risky as physically the token is saved in file ~/.git-credentials

// Run git pull and provide the username and password only once

// It will not ask for the username and access token again and again now!



    
    برای اینکه یک برنامه رو در termux ببندی مثل خارج شدن از برنامه های در حال اجرای node js باید ctrol + c  رو بزنی 
    
    پاک کردن پوشه در لینوکس
    
    rm -rf myfolder
    
    پاک کردن فایل 
    rm myfile.txt


    سیستم مدیریت محتوا داریم ما که بهش میگن 
    cms 
    {/* https://www.youtube.com/watch?v=6FnwAbd2SDY&ab_channel=TraversyMedia */}
    {/* https://strapi.io/integrations/nextjs-cms */}
    بررسی سیستم های مدیریت محتوا 
    {/* https://jamstack.org/headless-cms/ */}
    https://jacekjeznach.com/
https://bruno-simon.com/#cybertruck
http://www.rleonardi.com/
https://iuri.is/
https://prashantsani.com/
https://albinotonnina.com/
http://riccardozanutta.com/
http://driesvanbroeck.be/
    روش‌های مختلفی برای پیاده سازی Web API‌ها وجود دارد که از جمله‌ی آنها REST و GraphQL را می‌توان نام برد
    
ساخت اپلیکیشن برای موبایل با پایتون
    https://realpython.com/mobile-app-kivy-python/


    https://www.mongodb.com/languages/mern-stack-tutorial
      
    </div>
  )
}
