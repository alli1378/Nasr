# نسخهٔ Next.js پروژهٔ Alireza Nasr

این پروژه تبدیل مستقیم فایل‌های `index.html` و `styles.css` به Next.js با App Router و JavaScript است. متن‌ها، ترتیب بخش‌ها، کلاس‌ها، رنگ‌ها و طراحی نسخهٔ اصلی حفظ شده‌اند. فایل `app/styles.css` عیناً از CSS اصلی کپی شده است.

## اجرا

به Node.js نسخهٔ 20.9 یا بالاتر نیاز دارید. داخل پوشهٔ پروژه اجرا کنید:

```sh
npm install
npm run dev
```

سپس نشانی `http://localhost:3000` را باز کنید.

برای ساخت و اجرای نسخهٔ نهایی:

```sh
npm run build
npm start
```

## فایل‌های عکس و رزومه

فایل‌های زیر همراه ورودی نبودند. آن‌ها را بعداً با **همین نام‌ها** داخل `public/assets/` قرار دهید. مسیرها از قبل در کد تنظیم شده‌اند؛ فایل تصویری جایگزین یا ساختگی اضافه نشده است.

- `logo.png`
- `your-cv.pdf`
- `aliimg.png`
- `arrow.png`
- `comin.png`
- `time.png`
- `code.png`
- `AI Assistant Cuts Support Time 40%.png`
- `HDetect Neon Object Detection.png`
- `Neon Face Recognition Access Granted.png`
- `Neon License Plate Recognition Dashboard.png`
- `Askly Anonymous Feedback Platform.png`
- `Mircode Futuristic Team Showcase.png`

نام فایل اول پروژه شامل کاراکتر `%` است. این کاراکتر در نشانی داخل کد به شکل `%25` نوشته شده؛ نام خود فایل باید همان `AI Assistant Cuts Support Time 40%.png` باشد.

تا زمان اضافه‌کردن فایل‌ها، تصاویر نمایش داده نمی‌شوند و لینک دانلود رزومه فایل قابل دانلودی ندارد. فونت‌های Google و آیکون‌های Font Awesome مانند نسخهٔ اصلی از اینترنت بارگذاری می‌شوند.

## محل کدها

- `app/page.js`: همان صفحهٔ اصلی با JSX، لودینگ، بسته‌شدن منوی موبایل و سال فوتر.
- `app/layout.js`: ساختار HTML، عنوان صفحه، توضیحات، فونت‌ها و آیکون‌ها.
- `app/styles.css`: CSS اصلی بدون تغییر.
- `app/tailwind.css`: دستورات Tailwind.
- `tailwind.config.js`: همان تنظیمات رنگ، فونت و سایهٔ HTML اصلی.
- `public/assets/`: محل افزودن تصاویر و PDF رزومه.

Tailwind به‌جای CDN هنگام build تولید می‌شود؛ کلاس‌های HTML اصلی حفظ شده‌اند. لینک‌های شبکه‌های اجتماعی نیز عین ورودی هستند.

مراجع راه‌اندازی: [Next.js](https://nextjs.org/docs/app/getting-started/installation) و [Tailwind CSS 3](https://v3.tailwindcss.com/docs/guides/nextjs).
