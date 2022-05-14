export default function Home() {
  return (
    <div className="container">

      اول یک بار یزن 
      git --version
      ببین که نصبه روی سیستمت یا نه 
    اگر نصب نبود 
    در Termux
    apt update && apt upgrade
    pkg install git

    اگر میخواهی پروژه ای از گیت دانلود کنی بزن
    clone "url"
    url رو میتونی از همون آدرس بار گیت هم برداری 

      git init 
      git add -A
      اگر پیام زیر برات اومد
      warning: LF will be replaced by CRLF in pages/index.js.
      The file will have its original line endings in your working directory
       باید بزنی 
       git config core.autocrlf true

      git config --global user.email "csshahab47@gmail.com" 
      git config --global user.name "shkh" 
      git add -A 
      git commit -m "my first commit"

      git config --global user.email "csshahab47@gmail.com"
      git config --global user.name "shkh"
      اول یک ریپازیتوری در ریموت خودت بساز 
      بعد اون لینک https که میده از ریپازیتوری رو بردار و بیار 
      برای پوش کردن 
      
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
> Cloning into `YOUR-REPOSITORY`...
Username: shkh
Password: <type your password or personal access token (GitHub)
Now cache the given record in your computer to remembers the token:

$ git config --global credential.helper cache


If needed, anytime you can delete the cache record by:

$ git config --global --unset credential.helper
$ git config --system --unset credential.helper
Now try to pull with -v to verify

$ git pull -v

Linux/Debian (Clone as follows):

git clone https://<tokenhere>@github.com/<user>/<repo>.git



git push origin master

    
    برای اینکه یک برنامه رو در termux ببندی مثل خارج شدن از برنامه های در حال اجرای node js باید ctrol + c  رو بزنی 
    
    ببین این پوش شده 
      
    </div>
  )
}
