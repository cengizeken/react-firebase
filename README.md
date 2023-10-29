## 22.10.2023 tarihli Ödev
Ödev Video Linki:https://www.youtube.com/watch?v=Rf1bzCj5YEE&list=PLiYPP1v1hM95zFZUqX8qhmIjvrZQ4eEav

1. Önce bir folder oluştıralım. Folder büyük harf içermemeli. React büyük harf içeröeyen dosya ismi istiyor
2. Folder ımıızı VSCode ile açalım, yeni bir terminal oluşturup, __npx create-react-app .__ ile react uygulamamızı oluşturalım
3. Oluşturma işlemi bittikten sonra, npm start komutu ile projeyi çalıştıralım. yeni bir web sayfası açılacaktır.
4. şimdi gereksiz dosyaları(app.css, app.test.css, logo.svg) silelim
5. index.css içerisindeki tüm kodları silelim, app.js içerisindeki tüm kodları silelim
6. Tailwind css i yeni bir terminal açarak(çünkü react terminalinde projemiz çalışıyor) install edelim(https://tailwindcss.com/docs/installation), __npm install -D tailwindcss postcss autoprefixer__
7. __npm install -D tailwindcss postcss autoprefixer__:: Install tailwindcss and its peer dependencies vi npm, and then run the init command to generate both 'tailwind.config.js' and 'postcss.config.css'
8. Daha sonra __npx tailwindcss init -p__ ile init edecğiz ve dosyaları oluşturacağız. Root folder da bu dosyaları görebiliriz
9. tailwind.config.js içerisine content: ["./src/**/*.{js,jsx,ts,tsx,html}"] satırını oluşturalım. Bu satır ile, tailwind css i hangi dosyalarda kullanacağımızı söylüyoruz
10. src/index.css içerisine __@tailwind base;@tailwind components; @tailwind utilities;__ satırlarını kopyalayalım
11. Bazı durumlarda uygulamanın yeniden başlaması gerekebilir. bu nedenle tailwind css yazdığımızda(örnek olarak app.js de return <h1 className="text-6xl text-red-700">Hey, App component</h1>; yazdık ama çalışmadı) çalışmıyor ise, terminalleri kill edelim, tekrar terminal açıp __npm start__ ile uygulamamızı başlatalım.
12. .js dosyası içerisinde tailwind css yazımını kolylaşrırmak için, Tailwind CSS Intellisense extension unu kuralım
13. 1 den fazla sayfalı proje oluşturacağımız için React Router DOM kütüphanesini eklememiz(__npm -i react-router-dom__) gerekiyor. Bu komut ile olmuyor ise, __npm install --save react-router-dom__ ile kurabiliriz.
14. src altında pages klasörü oluşturalım, içerisine de Home.js isimli bir dosya oluşturalım. Home componentimizi app.js den çağıralım
15. App.js e __import {BrowserRouter as Router, Routes, Route} from "react-router-dom"__ yi import edelim
    ## 02 Firebase ve Firebase Auth isimli video
16. firebase.google.com  a  giderek postywebapp isimli bir firebase sayfası açalım. Setting project settings->add web app->Açılan sayfada app nick name olarak __postilla__ girip, hosting seçeneğini işaretlemeden __Register App__ i tıklayalım. İşlem bitince google bize SDK bilgilerini verecektir. Kendi projemizde Firebase i kullanabilmek için gerekli komut ve SDK bilgileri veriliyor.
17. Porjemize dönüp, yeni bir teminal açıp __npm install firebase__ yazalım ve projemize firebase i ekleyelim. Projemizde firebase i kullanmak için ise, src klasörü altında firebase.js dosyası oluşturalım ve içerisine firebase.google da uluşturduğumuz positlla sayfasına ait api bilgilerini(firebase config kısmı, __const firebaseConfig = { apiKey:... )__ kopyalayalım. Aslında __SDK setup and configuration__ kısmında yazan tüm kodların hepsini kopyalıyoruz.
18. Firebase::->Build->Authentication kısmına gelinir. Get Started butonuna basılır ve aktif edilir. E-mail/Password seçilir ve aktif edilir.(Email link olmadan)->Save butonuna basılır.
19. Projemizde bu Email/Password authentication kullanmak için ise firebase.js e  __import getAuth__ eklenir
--Artık projemizde kullanıcıla hesap ekleyebilir ve oluşturabilir.--
## 03 Kaydolma İşlemi isimli video
20. firebase e email ve password girilen kişiyi ekleme işlemi için, __signinwithemailandpassword__ fonksiyonunu import edeceğiz.
## 05 Şifremi unuttum İşlemi isimli video
21. ForgotPassword.js tasarlandı

## 06 Kimlik Doğrulama Akışı ve Layout isimli video
## 07 React Firebase Hooks Kullanımı isimli video
22. __npm i react-firebase-hooks__ ile firebase hooklarını install edelim. bu kütüphaneden, useAuthState fonksiyonunu kullanmak için
import {useAuthState} from "react-firebase-hooks/auth" ekleyelim. Nereye ekleyelim? MainLayout.js ye
## 09 Firestore Kurulumu ve Veri Okuma isimli video
23. Firebase e gidelim ve Buid->Fierstore Database seçelim. Start in test mode seçelim enable edelim.
24. Start collection a tıklayıp users adında bir colelction oluşturalım. Bu collection un elemanlarına da posts isimli bir collection ekleyelim. Colelciton içerisinde ise body(string):Hello, my First post, createAt(timeStamp):29.10.2023 14.33.19 ve createdBy(string):"userId" isimli bir colelction ekleyelim
25. Bu collection u uygulamadan okumak için, firebase.js e __import {getFireStore} from 'firebase/firestore'__ ekleyelim
## 10 Firestore'a Veri Ekleme isimli video
25. AddPost.js adında bir component oluşturalım