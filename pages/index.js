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

      git config --global user.email "you@example.com"
      git config --global user.name "Your Name"
      اول یک ریپازیتوری در ریموت خودت بساز 
      بعد اون لینک https که میده از ریپازیتوری رو بردار و بیار 
      برای پوش کردن 
      
      git push -u origin master

      git push adress branchname 
    
    
    با دستور زیر میتونی آخرین ورژن آپدیت شده رو از گیت هاب اضافه کنی به پروژه ات
    
    git pull origin master
    
    برای اینکه یک برنامه رو در termux ببندی مثل خارج شدن از برنامه های در حال اجرای node js باید ctrol + c  رو بزنی 
      
    </div>
  )
}
