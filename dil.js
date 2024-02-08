let defaultdil = 'tr';

const dil = {
    tr: {
        baslik: "Zehra Karakaya",
        aciklama: "Yazılım Mühendisi",
        hakkimda: "Hakkımda",
        hakkimdaprag1:"Merhaba! Ben Zehra Karakaya. Lisans eğitimimi Atatürk Üniversitesi Bilgisayar Mühendisliği bölümünde tamamladım ve o zamandan beri çeşitli projelerde yer aldım. Web geliştirmeye olan tutkum, nesnelerin interneti (IoT) dünyasına olan ilgimle birleşti. IoT, teknolojinin sınırlarını zorlama ve günlük yaşamı daha akıllı hale getirme potansiyeliyle beni derinden etkiliyor.",
        hakkimdaprag2:"Bu alanda aldığım eğitimler ve gerçekleştirdiğim projeler, bu heyecan verici teknolojiyle nasıl etkileşimde bulunduğumu gösteriyor. Hem donanım hem de yazılım alanlarında kendimi sürekli geliştirmeye odaklanarak, IoT projelerinde benzersiz çözümler üretmeye çalışıyorum.",
        hakkimdaprag3:"Gömülü IoT sistemlerini ve IoT güvenliğini içeren çeşitli eğitimler aldım ve bu süreçte M2M ve Otonom araçlarda IoT kullanımı projelerini gerçekleştirdim. Her bir proje, IoT'nin gücünü kullanarak nasıl sorunlara çözüm getirebileceğimizi keşfetme fırsatı sağladı.",
        hakkimdaprag4:"Gelecekte, nesnelerin internetiyle ilgili daha fazla yenilikçi projeye katılmak ve bu alanda derinlemesine çalışmak istiyorum. Eğer benimle aynı tutkuyu paylaşıyorsanız veya birlikte çalışabileceğimiz projeler biliyorsanız, lütfen zehrakarakayabm@gmail.com üzerinden bana ulaşın.",
        projeler:"Projeler",
        port:"Portföy Web Sitesi",
        portdef1:"Kişisel portföy web sitem, benim dijital varlığımı sergilemek ve benimle ilgilenenlerle bağlantı kurmak için tasarlandı. Bu projeyi oluştururken, modern tasarım ilkelerini ve kullanıcı deneyimini öncelikli kılmaya çalıştım.",
        portdef2:"Web sitemde, yaptığım projeleri ve edindiğim yetenekleri detaylı bir şekilde sunarak, potansiyel işverenlere ve iş ortaklarınanasıl değer katabileceğimi göstermeyi amaçladım. HTML, CSS ve JavaScript ile oluşturulan bu web sitesi, responsive bir tasarıma sahiptir ve farklı cihazlarda rahatlıkla görüntülenebilir.",
        portdef3:" Web sitem, ziyaretçilere interaktif bir deneyim sunmak amacıyla özel olarak geliştirilmiş animasyonlar ve geçiş efektleri içerir ve bu site, benimle iletişim kurmak isteyen kişilere bir kapı aralamak için tasarlanmıştır.",
        detay:"Detaylar",
        csharp:"C# ile Veri Yapıları ve Algoritmalar",
        description:" Kullanılan temel veri yapıları ve algoritmaları C# ile örneklendirildi ve bu örneklendirmeler organize edildi. Repo içinde güncellemeler devam ediyor.",
        git:"GitHub Repo",
        skill:"Yetenekler",
        iletisim:"İletişim",
        time:"Zaman Yönetimi",
        empati:"Empati Kurma ve Dinleme",
        problem:"Problem Çözme",
        ana:"Analitik Düşünme",
        per:"Mükemmelliyetçilik ve Detay Odaklılık",
        mes:"Mesajınızı İletin",
        s:"Gönder"
    },
    en: {
        baslik: "Zehra Karakaya",
        aciklama: "Software Engineer",
        hakkimda: "About me",
        hakkimdaprag1:"Hello! I am Zehra Karakaya. I completed my undergraduate education at Atatürk University Computer Engineering department and since then I have been involved in various projects. My passion for web development has merged with my interest in the world of the internet of things (IoT). IoT fascinates me deeply with its potential to push the boundaries of technology and make everyday life smarter.",
        hakkimdaprag2:"The training I received and the projects I carried out in this field show how I interact with this exciting technology. By focusing on continuous improvement in both hardware and software fields, I try to produce unique solutions in IoT projects.",
        hakkimdaprag3:"I received various trainings including embedded IoT systems and IoT security, and during this period, I carried out projects on the use of IoT in M2M and Autonomous vehicles. Each project provided an opportunity to explore how we can solve problems using the power of IoT.",   
        hakkimdaprag4:"In the future, I would like to participate in more innovative projects related to the Internet of Things and study in depth in this field. If you share the same passion as me or know projects we can work on together, please contact me via zehrakarakayabm@gmail.com.",
        projeler:"Projects",
        port:"Portfolio Website",
        portdef1:"My personal portfolio website was designed to showcase my digital presence and connect with those interested in me. When creating this project, I tried to prioritize modern design principles and user experience.",
        portdef2:"On my website, I strive to demonstrate the value I can bring to potential employers and business partners by providing detailed insights into the projects I have undertaken and the skills I have acquired. Developed using HTML, CSS, and JavaScript, the site features a responsive design for optimal viewing across various devices",
        portdef3:"My website includes specially developed animations and transition effects to provide visitors with an interactive experience. This site is designed to open a door for individuals who wish to communicate with me.",
        detay:"Details",
        csharp:"Data Structures and Algorithms with C#",
        description:" Fundamental data structures and algorithms were exemplified with C# and organized within this repository. Updates are ongoing within the repository.",
        git:"GitHub Repo",
        skill:"Skills",
        iletisim:"Contact",
        time:"Time Management",
        empati:"Empathy and Active Listening",
        problem:"Problem-Solving Ability",
        ana:"Analytical Thinking",
        per:"Excellence and Attention to Detail",
        mes:"Leave a Message",
        s:"Send"
    }
};
function changeLanguage(lang) {
    if(lang !== defaultdil)
      defaultdil=lang;

   updateTexts();
} //dil değiştirme işlemi için kullanılır.

function updateTexts(){

    for (const id in dil[defaultdil]) {
        const element = document.getElementById(id);
        if (element) {
          element.textContent = dil[defaultdil][id];
        }
      }
}
