py -3 --version   پیدا کردن ورژن پایتون در ویندوز
python3 --version پیدا کردن ورژن پایتون در لینوکس و مک
pip --version    پیدا کردن ورژن پیپ

برای نصب پیپ اول فایل زیر رو دانلود کن
https://bootstrap.pypa.io/get-pip.py
بعد برو به همون فولدری که فایل رو دانلود کردی و بزن 
python get-pip.py
بعد یک 
pip -V
بگیر ازش
پیغام زیر هم برای آپگرید پیپ هست
python -m pip install --upgrade pip
و دستور زیر برای داونگرید به ورژنی که میخوای
python -m pip install pip==18.0

برای اینکه پایتون رو به اینوارومنت ویندوز اضافه کنی باید سرچ کنی 
advance system settings
حالا آدرسی که پایتون توش نصب شده رو پیدا کن
C:\Users\****\AppData\Local\Programs\Python\Python310
حالا توی قسمت 
system variable 
قسمت 
path 
رو ادیت کن و دو تا فولدری که بالا به دست آوردی بهش اضافه کن

چیزهایی که نیاز داریم برای اجرا 
VS Code
VS Code Python extension
Python 3


برای اینکه ورژن مفسرت رو ببینی هم باید 
Ctrl+Shift+P
رو بزنی 
بعد باید دستور 
Python: Select Interprete
رو وارد کنیم و ایتر بزنیم

برای نصب پکیج های پایتون هم از دستور زیر استفاده کن
python -m pip install matplotlib
یا با دستور زیر هم میتونی نصب کنی 
pip install pandas

برای اجرای یک فایل پایتون هم میتونی دستور زیر رو وارد کنی 
python App.py
