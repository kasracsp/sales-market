//database
const databas = [{
  ancestor: "tech",
  persianName: "کالای دیجیتال",
  parent: [{
    name: "mobile",
    persianName: "موبایل",
    child: [{
      name: "nokia",
      persianName: "نوکیا",
      models: [{
        name: "گوشی موبایل نوکیا مدل G10 TA-1334 دو سیم کارت ظرفیت 64 گیگابایت همراه با رم 4 گیگابایت",
        previousPrice: 3370000,
        currentPrice: 3340000,
        url: "salesMarketItem.html?ancestor=tech&parent=mobile&child=nokia&modelId=G10",
        id: "G10",
        thumbnails: ["images/tech-pic/phone/nokia/nokia-g10/1.jpg", "images/tech-pic/phone/nokia/nokia-g10/2.jpg", "images/tech-pic/phone/nokia/nokia-g10/3.jpg"],
        color: ["black", "dust", "blue"]
      }, {
        name: "گوشی موبایل نوکیا مدل G20 TA-1365 دو سیم‌کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت ",
        previousPrice: 4400000,
        currentPrice: 4290000,
        url: "salesMarketItem.html?ancestor=tech&parent=mobile&child=nokia&modelId=G20-TA-1365",
        id: "G20-TA-1365",
        thumbnails: ["images/tech-pic/phone/nokia/nokia-g20/1.jpg", "images/tech-pic/phone/nokia/nokia-g20/2.jpg", "images/tech-pic/phone/nokia/nokia-g20/3.jpg", "images/tech-pic/phone/nokia/nokia-g20/4.jpg"],
        color: ["black", "blue"]
      }, {
        name: "گوشی موبایل نوکیا مدل 4G 8000 TA-1311 دو سیم کارت ظرفیت 4 گیگابایت و رم 512 مگابایت",
        previousPrice: 1820000,
        currentPrice: 1820000,
        url: "salesMarketItem.html?ancestor=tech&parent=mobile&child=nokia&modelId=G8000-TA-1311",
        id: "G8000-TA-1311",
        thumbnails: ["images/tech-pic/phone/nokia/nokia-TA/1.jpg", "images/tech-pic/phone/nokia/nokia-TA/2.jpg", "images/tech-pic/phone/nokia/nokia-TA/3.jpg", "images/tech-pic/phone/nokia/nokia-TA/4.jpg"],
        color: ["black", "white"]
      }]
    }, {
      name: "samsung",
      persianName: "سامسونگ",
      models: [{
        name: "گوشی موبایل سامسونگ مدل A52s 5G SM-A528B/DS دو سیم‌کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت ",
        previousPrice: 10000000,
        currentPrice: 9300000,
        url: "salesMarketItem.html?ancestor=tech&parent=mobile&child=samsung&modelId=A52s",
        id: "A52s",
        thumbnails: ["images/tech-pic/phone/samsung/samsung-A52s/1.jpg", "images/tech-pic/phone/samsung/samsung-A52s/2.jpg", "images/tech-pic/phone/samsung/samsung-A52s/3.jpg", "images/tech-pic/phone/samsung/samsung-A52s/4.jpg"],
        color: ["black", "purple", "pink"]
      }, {
        name: "گوشی موبایل سامسونگ مدل Galaxy A12 Nacho SM-A127F/DS دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت ",
        previousPrice: 3800000,
        currentPrice: 3800000,
        url: "salesMarketItem.html?ancestor=tech&parent=mobile&child=samsung&modelId=Galaxy-A12-Nacho",
        id: "Galaxy-A12-Nacho",
        thumbnails: ["images/tech-pic/phone/samsung/samsung-Galaxy-A12-Nacho/1.jpg", "images/tech-pic/phone/samsung/samsung-Galaxy-A12-Nacho/2.jpg", "images/tech-pic/phone/samsung/samsung-Galaxy-A12-Nacho/3.jpg"],
        color: ["white", "blue"]
      }, {
        name: "گوشی موبایل سامسونگ مدل Galaxy A22 SM-A225F/DSN دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",
        previousPrice: 5299000,
        currentPrice: 5299000,
        url: "salesMarketItem.html?ancestor=tech&parent=mobile&child=samsung&modelId=Galaxy-A22",
        id: "Galaxy-A22",
        thumbnails: ["images/tech-pic/phone/samsung/samsung-Galaxy-A22/1.jpg", "images/tech-pic/phone/samsung/samsung-Galaxy-A22/2.jpg", "images/tech-pic/phone/samsung/samsung-Galaxy-A22/3.jpg", "images/tech-pic/phone/samsung/samsung-Galaxy-A22/4.jpg"],
        color: ["black", "white"]
      }]
    }, {
      name: "iphone",
      persianName: "آیفون",
      models: [{
        name: "گوشی موبایل اپل مدل iPhone 12 Pro A2408 دو سیم‌ کارت ظرفیت 256 گیگابایت و 6 گیگابایت رم",
        previousPrice: 24489000,
        currentPrice: 24489000,
        url: "salesMarketItem.html?ancestor=tech&parent=mobile&child=iphone&modelId=iphone12-a2408",
        id: "iphone12-a2408",
        thumbnails: ["images/tech-pic/phone/iphone/iphone12-a2408/1.jpg", "images/tech-pic/phone/iphone/iphone12-a2408/2.jpg", "images/tech-pic/phone/iphone/iphone12-a2408/3.jpg", "images/tech-pic/phone/iphone/iphone12-a2408/4.jpg"],
        color: ["black", "purple", "blue"]
      }, {
        name: "گوشی موبایل اپل مدل iPhone 13 A2634 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",
        previousPrice: 26900000,
        currentPrice: 26249000,
        url: "salesMarketItem.html?ancestor=tech&parent=mobile&child=iphone&modelId=iphone13-A2634",
        id: "iphone13-A2634",
        thumbnails: ["images/tech-pic/phone/iphone/iphone13-A2634/1.jpg", "images/tech-pic/phone/iphone/iphone13-A2634/2.jpg", "images/tech-pic/phone/iphone/iphone13-A2634/3.jpg", "images/tech-pic/phone/iphone/iphone13-A2634/4.jpg", "images/tech-pic/phone/iphone/iphone13-A2634/5.jpg"],
        color: ["black", "pink", "white"]
      }, {
        name: "گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت ظرفیت 1 ترابایت و رم 6 گیگابایت ",
        previousPrice: 39650000,
        currentPrice: 39650000,
        url: "salesMarketItem.html?ancestor=tech&parent=mobile&child=iphone&modelId=iphone13-promax",
        id: "iphone13-promax",
        thumbnails: ["images/tech-pic/phone/iphone/iphone13-promax/1.jpg", "images/tech-pic/phone/iphone/iphone13-promax/2.jpg", "images/tech-pic/phone/iphone/iphone13-promax/3.jpg", "images/tech-pic/phone/iphone/iphone13-promax/4.jpg", "images/tech-pic/phone/iphone/iphone13-promax/5.jpg", "images/tech-pic/phone/iphone/iphone13-promax/6.jpg"],
        color: ["dust", "silver"]
      }]
    }]
  }, {
    name: "laptop",
    persianName: "لپتاپ",
    child: [{
      name: "acer",
      persianName: "ایسر",
      models: [{
        name: "لپ تاپ 15.6 اینچی ایسر مدل Nitro5 AN515-55-58HK",
        previousPrice: 27600000,
        currentPrice: 27600000,
        url: "salesMarketItem.html?ancestor=tech&parent=laptop&child=acer&modelId=acer-nitro",
        id: "acer-nitro",
        thumbnails: ["images/tech-pic/laptop/acer/acer-nitro/1.jpg", "images/tech-pic/laptop/acer/acer-nitro/2.jpg"],
        color: ["black"]
      }, {
        name: "لپ تاپ 15.6 اینچی ایسر مدل AN515 - 55 - 7569",
        previousPrice: 49800000,
        currentPrice: 49800000,
        url: "salesMarketItem.html?ancestor=tech&parent=laptop&child=acer&modelId=AN515",
        id: "AN515",
        thumbnails: ["images/tech-pic/laptop/acer/AN515/1.jpg", "images/tech-pic/laptop/acer/AN515/2.jpg", "images/tech-pic/laptop/acer/AN515/3.jpg", "images/tech-pic/laptop/acer/AN515/4.jpg"],
        color: ["black", "silver"]
      }, {
        name: "لپ تاپ ایسر 15 اینچی مدل Aspire 3 A315-57G-559W ",
        previousPrice: 23000000,
        currentPrice: 22400000,
        url: "salesMarketItem.html?ancestor=tech&parent=laptop&child=acer&modelId=AS3",
        id: "AS3",
        thumbnails: ["images/tech-pic/laptop/acer/Aspire3/1.jpg", "images/tech-pic/laptop/acer/Aspire3/2.jpg", "images/tech-pic/laptop/acer/Aspire3/3.jpg"],
        color: ["black", "silver"]
      }]
    }, {
      name: "apple",
      persianName: "اپل",
      models: [{
        name: "لپ تاپ 13 اینچی اپل مدل MacBook Air MGN63 2020",
        previousPrice: 33500000,
        currentPrice: 29840000,
        url: "salesMarketItem.html?ancestor=tech&parent=laptop&child=apple&modelId=MacBook-Air",
        id: "MacBook-Air",
        thumbnails: ["images/tech-pic/laptop/apple/MacBook-Air/1.jpg", "images/tech-pic/laptop/apple/MacBook-Air/2.jpg", "images/tech-pic/laptop/apple/MacBook-Air/3.jpg", "images/tech-pic/laptop/apple/MacBook-Air/4.jpg"],
        color: ["black"]
      }, {
        name: "لپ تاپ 13 اینچی اپل مدل MacBook Pro MYD92 2020 همراه با تاچ بار ",
        previousPrice: 78990000,
        currentPrice: 78990000,
        url: "salesMarketItem.html?ancestor=tech&parent=laptop&child=apple&modelId=MacBook-Pro-MYD92",
        id: "MacBook-Pro-MYD92",
        thumbnails: ["images/tech-pic/laptop/apple/MacBook-Pro-MYD92/1.jpg", "images/tech-pic/laptop/apple/MacBook-Pro-MYD92/2.jpg", "images/tech-pic/laptop/apple/MacBook-Pro-MYD92/3.jpg", "images/tech-pic/laptop/apple/MacBook-Pro-MYD92/4.jpg"],
        color: ["white", "silver"]
      }, {
        name: "لپ تاپ 13.3 اینچی اپل مدل MacBook Pro Z11C 2020 همراه با تاچ بار ",
        previousPrice: 35400000,
        currentPrice: 35400000,
        url: "salesMarketItem.html?ancestor=tech&parent=laptop&child=apple&modelId=MacBook-Pro-Z11C",
        id: "MacBook-Pro-Z11C",
        thumbnails: ["images/tech-pic/laptop/apple/MacBook-Pro-Z11C/1.jpg", "images/tech-pic/laptop/apple/MacBook-Pro-Z11C/2.jpg", "images/tech-pic/laptop/apple/MacBook-Pro-Z11C/3.jpg", "images/tech-pic/laptop/apple/MacBook-Pro-Z11C/4.jpg", "images/tech-pic/laptop/apple/MacBook-Pro-Z11C/5.jpg"],
        color: ["black", "white"]
      }]
    }, {
      name: "microsoft",
      persianName: "مایکروسافت",
      models: [{
        name: "لپ تاپ 15 اینچی مایکروسافت مدل Surface Book 3- B",
        previousPrice: 60365000,
        currentPrice: 60365000,
        url: "salesMarketItem.html?ancestor=tech&parent=laptop&child=microsoft&modelId=surface-book3-B",
        id: "surface-book3-B",
        thumbnails: ["images/tech-pic/laptop/microsoft/surface-book3-B/1.jpg", "images/tech-pic/laptop/microsoft/surface-book3-B/2.jpg", "images/tech-pic/laptop/microsoft/surface-book3-B/3.jpg", "images/tech-pic/laptop/microsoft/surface-book3-B/4.jpg", "images/tech-pic/laptop/microsoft/surface-book3-B/5.jpg"],
        color: ["black", "silver"]
      }, {
        name: "لپ تاپ 15 اینچی مایکروسافت مدل Surface Book 3- F ",
        previousPrice: 93965000,
        currentPrice: 93965000,
        url: "salesMarketItem.html?ancestor=tech&parent=laptop&child=microsoft&modelId=surface-book3-f",
        id: "surface-book3-f",
        thumbnails: ["images/tech-pic/laptop/microsoft/surface-book3-f/1.jpg", "images/tech-pic/laptop/microsoft/surface-book3-f/2.jpg", "images/tech-pic/laptop/microsoft/surface-book3-f/3.jpg", "images/tech-pic/laptop/microsoft/surface-book3-f/4.jpg"],
        color: ["black", "silver"]
      }, {
        name: "لپ تاپ 12.4 اینچی مایکروسافت مدل Surface Laptop Go - A",
        previousPrice: 31650000,
        currentPrice: 31650000,
        url: "salesMarketItem.html?ancestor=tech&parent=laptop&child=microsoft&modelId=surface-go-a",
        id: "surface-go-a",
        thumbnails: ["images/tech-pic/laptop/microsoft/surface-go-a/1.jpg", "images/tech-pic/laptop/microsoft/surface-go-a/2.jpg", "images/tech-pic/laptop/microsoft/surface-go-a/3.jpg", "images/tech-pic/laptop/microsoft/surface-go-a/4.jpg"],
        color: ["black", "silver"]
      }]
    }]
  }, {
    name: "camera",
    persianName: "دوربین",
    child: [{
      name: "canon",
      persianName: "کانن",
      models: [{
        name: "دوربین دیجیتال کانن مدل EOS 1300D به همراه لنز 18-55 میلی متر DC III ",
        previousPrice: 17400000,
        currentPrice: 16300000,
        url: "salesMarketItem.html?ancestor=tech&parent=camera&child=canon&modelId=1300D",
        id: "1300D",
        thumbnails: ["images/tech-pic/camera/canon/1300D/1.jpg", "images/tech-pic/camera/canon/1300D/2.jpg", "images/tech-pic/camera/canon/1300D/3.jpg", "images/tech-pic/camera/canon/1300D/4.jpg"],
        color: ["black"]
      }, {
        name: "دوربین دیجیتال کانن مدل EOS 2000D به همراه لنز 18-55 میلی متر DC III ",
        previousPrice: 12670000,
        currentPrice: 12670000,
        url: "salesMarketItem.html?ancestor=tech&parent=camera&child=canon&modelId=2000D",
        id: "2000D",
        thumbnails: ["images/tech-pic/camera/canon/2000D/1.jpg", "images/tech-pic/camera/canon/2000D/2.jpg", "images/tech-pic/camera/canon/2000D/3.jpg", "images/tech-pic/camera/canon/2000D/4.jpg"],
        color: ["black"]
      }, {
        name: "دوربین دیجیتال کانن مدل EOS 4000D به همراه لنز 18-55 میلی متر DC III ",
        previousPrice: 11450000,
        currentPrice: 11450000,
        url: "salesMarketItem.html?ancestor=tech&parent=camera&child=canon&modelId=4000D",
        id: "4000D",
        thumbnails: ["images/tech-pic/camera/canon/4000D/1.jpg", "images/tech-pic/camera/canon/4000D/2.jpg", "images/tech-pic/camera/canon/4000D/3.jpg", "images/tech-pic/camera/canon/4000D/4.jpg"],
        color: ["black"]
      }]
    }, {
      name: "nikon",
      persianName: "نیکون",
      models: [{
        name: "دوربین دیجیتال نیکون مدل D3500 به همراه لنز 18-55 میلی متر VR AF-P ",
        previousPrice: 21000000,
        currentPrice: 21000000,
        url: "salesMarketItem.html?ancestor=tech&parent=camera&child=nikon&modelId=D3500",
        id: "D3500",
        thumbnails: ["images/tech-pic/camera/nikon/D3500/1.jpg", "images/tech-pic/camera/nikon/D3500/2.jpg", "images/tech-pic/camera/nikon/D3500/3.jpg", "images/tech-pic/camera/nikon/D3500/4.jpg"],
        color: ["black"]
      }, {
        name: "دوربین دیجیتال نیکون مدل D5600 به همراه لنز 18-55 میلی متر VR AF-P ",
        previousPrice: 23840000,
        currentPrice: 23840000,
        url: "salesMarketItem.html?ancestor=tech&parent=camera&child=nikon&modelId=D5600",
        id: "D5600",
        thumbnails: ["images/tech-pic/camera/nikon/D5600/1.jpg", "images/tech-pic/camera/nikon/D5600/2.jpg", "images/tech-pic/camera/nikon/D5600/3.jpg", "images/tech-pic/camera/nikon/D5600/4.jpg", "images/tech-pic/camera/nikon/D5600/5.jpg"],
        color: ["black"]
      }, {
        name: "دوربین دیجیتال نیکون مدل D7500 به همراه لنز 18-140 میلی متر VR AF-S DX ",
        previousPrice: 38250000,
        currentPrice: 38250000,
        url: "salesMarketItem.html?ancestor=tech&parent=camera&child=nikon&modelId=D7500",
        id: "D7500",
        thumbnails: ["images/tech-pic/camera/nikon/D7500/1.jpg", "images/tech-pic/camera/nikon/D7500/2.jpg", "images/tech-pic/camera/nikon/D7500/3.jpg", "images/tech-pic/camera/nikon/D7500/4.jpg"],
        color: ["black"]
      }]
    }, {
      name: "sony",
      persianName: "سونی",
      models: [{
        name: "دوربین دیجیتال بدون آینه سونی مدل A7III بدون لنز ",
        previousPrice: 52200000,
        currentPrice: 52200000,
        url: "salesMarketItem.html?ancestor=tech&parent=camera&child=sony&modelId=A7III",
        id: "A7III",
        thumbnails: ["images/tech-pic/camera/sony/A7III/1.jpg", "images/tech-pic/camera/sony/A7III/2.jpg", "images/tech-pic/camera/sony/A7III/3.jpg", "images/tech-pic/camera/sony/A7III/4.jpg"],
        color: ["black"]
      }, {
        name: "دوربین دیجیتال بدون آینه سونی مدل Alpha A6400 به همراه لنز 16-50 میلی متر OSS",
        previousPrice: 32100000,
        currentPrice: 32100000,
        url: "salesMarketItem.html?ancestor=tech&parent=camera&child=sony&modelId=Alpha6400",
        id: "Alpha6400",
        thumbnails: ["images/tech-pic/camera/sony/Alpha6400/1.jpg", "images/tech-pic/camera/sony/Alpha6400/2.jpg", "images/tech-pic/camera/sony/Alpha6400/3.jpg", "images/tech-pic/camera/sony/Alpha6400/4.jpg"],
        color: ["black"]
      }, {
        name: "دوربین دیجیتال بدون آینه سونی مدل Alpha 6100",
        previousPrice: 29800000,
        currentPrice: 29800000,
        url: "salesMarketItem.html?ancestor=tech&parent=camera&child=sony&modelId=Alpha6100",
        id: "Alpha6100",
        thumbnails: ["images/tech-pic/camera/sony/Alpha6100/1.jpg", "images/tech-pic/camera/sony/Alpha6100/2.jpg"],
        color: ["black"]
      }]
    }]
  }]
}, {
  ancestor: "fashion",
  persianName: "مد و پوشاک",
  parent: [{
    name: "kids",
    persianName: "بچگانه",
    child: [{
      name: "babies",
      persianName: "نوزاد",
      models: [{
        name: "پالتو نوزادی دخترانه فیورلا مدل سروا کد 21501",
        previousPrice: 1045000,
        currentPrice: 430000,
        url: "salesMarketItem.html?ancestor=fashion&parent=kids&child=babies&modelId=kidspalto",
        id: "kidspalto",
        thumbnails: ["images/fashion-pic/kids/babies/palto/1.jpg", "images/fashion-pic/kids/babies/palto/2.jpg", "images/fashion-pic/kids/babies/palto/3.jpg"],
        color: ["grey", "red"],
        size: ["small", "medium", "large"]
      }, {
        name: "ژاکت نوزادی اوریجینال مارینز",
        previousPrice: 368000,
        currentPrice: 368000,
        url: "salesMarketItem.html?ancestor=fashion&parent=kids&child=babies&modelId=kidspoliver",
        id: "kidspoliver",
        thumbnails: ["images/fashion-pic/kids/babies/poliver/1.jpg", "images/fashion-pic/kids/babies/poliver/2.jpg"],
        color: ["grey", "blue"],
        size: ["small", "medium", "large"]
      }, {
        name: "ست سرهمی و کلاه نوزادی بی بی وان مدل گربه",
        previousPrice: 132000,
        currentPrice: 132000,
        url: "salesMarketItem.html?ancestor=fashion&parent=kids&child=babies&modelId=kidsset",
        id: "kidsset",
        thumbnails: ["images/fashion-pic/kids/babies/set/1.jpg", "images/fashion-pic/kids/babies/set/2.jpg"],
        color: ["yellow", "black"],
        size: ["small", "medium", "large"]
      }]
    }, {
      name: "boys",
      persianName: "پسرانه",
      models: [{
        name: "ست تی شرت و شلوار پسرانه مدل TOM کد 09",
        previousPrice: 75000,
        currentPrice: 50000,
        url: "salesMarketItem.html?ancestor=fashion&parent=kids&child=boys&modelId=tom09",
        id: "tom09",
        thumbnails: ["images/fashion-pic/kids/boys/tom/1.jpg"],
        color: ["grey"]
      }, {
        name: "ست تی شرت و شلوار پسرانه مادر",
        previousPrice: 290000,
        currentPrice: 188000,
        url: "salesMarketItem.html?ancestor=fashion&parent=kids&child=boys&modelId=mother",
        id: "mother",
        thumbnails: ["images/fashion-pic/kids/boys/mother/1.jpg", "images/fashion-pic/kids/boys/mother/2.jpg", "images/fashion-pic/kids/boys/mother/3.jpg"],
        color: ["blue"],
        size: ["small", "medium", "large"]
      }, {
        name: "ست تی شرت و شلوار پسرانه مدل دایناسور",
        previousPrice: 75000,
        currentPrice: 50000,
        url: "salesMarketItem.html?ancestor=fashion&parent=kids&child=boys&modelId=jana",
        id: "jana",
        thumbnails: ["images/fashion-pic/kids/boys/jana/1.jpg", "images/fashion-pic/kids/boys/jana/2.jpg", "images/fashion-pic/kids/boys/jana/3.jpg"],
        color: ["green"],
        size: ["small", "medium", "large"]
      }]
    }, {
      name: "girls",
      persianName: "دخترانه",
      models: [{
        name: "پیراهن دخترانه نکست مدل beautiful princess",
        previousPrice: 3800000,
        currentPrice: 3800000,
        url: "salesMarketItem.html?ancestor=fashion&parent=kids&child=girls&modelId=nextgirl",
        id: "nextgirl",
        thumbnails: ["images/fashion-pic/kids/girls/next/1.jpg", "images/fashion-pic/kids/girls/next/2.jpg", "images/fashion-pic/kids/girls/next/3.jpg"],
        color: ["pink"],
        size: ["small", "medium", "large"]
      }, {
        name: "پیراهن دخترانه مدل Geranium 2021",
        previousPrice: 1395000,
        currentPrice: 1395000,
        url: "salesMarketItem.html?ancestor=fashion&parent=kids&child=girls&modelId=lunagirl",
        id: "lunagirl",
        thumbnails: ["images/fashion-pic/kids/girls/Geranium/1.jpg", ],
        color: ["black"],
        size: ["small", "medium", "large"]
      }, {
        name: "پیراهن دخترانه لونا مدل مجلسی رنگ مشکی",
        previousPrice: 900000,
        currentPrice: 837000,
        url: "salesMarketItem.html?ancestor=fashion&parent=kids&child=girls&modelId=Geraniumgirl",
        id: "Geraniumgirl",
        thumbnails: ["images/fashion-pic/kids/girls/luna/1.jpg", "images/fashion-pic/kids/girls/luna/2.jpg", "images/fashion-pic/kids/girls/luna/3.jpg"],
        color: ["red"],
        size: ["small", "medium", "large"]
      }]
    }]
  }, {
    name: "men",
    persianName: "مردانه",
    child: [{
      name: "jacket",
      persianName: "کاپشن",
      models: [{
        name: "کاپشن مردانه مدل Da-KmA-Chm 3003",
        previousPrice: 1000000,
        currentPrice: 680000,
        url: "salesMarketItem.html?ancestor=fashion&parent=men&child=jacket&modelId=Da-KmA-Chm",
        id: "Da-KmA-Chm",
        thumbnails: ["images/fashion-pic/men/jacket/Da-KmA-Chm/1.jpg", "images/fashion-pic/men/jacket/Da-KmA-Chm/2.jpg", "images/fashion-pic/men/jacket/Da-KmA-Chm/3.jpg", "images/fashion-pic/men/jacket/Da-KmA-Chm/4.jpg"],
        color: ["black"],
        size: ["small", "medium", "large"]
      }, {
        name: "کاپشن مردانه چیبو مدل 725zd",
        previousPrice: 4850000,
        currentPrice: 2425000,
        url: "salesMarketItem.html?ancestor=fashion&parent=men&child=jacket&modelId=725zd",
        id: "725zd",
        thumbnails: ["images/fashion-pic/men/jacket/725zd/1.jpg", "images/fashion-pic/men/jacket/725zd/2.jpg", "images/fashion-pic/men/jacket/725zd/3.jpg", "images/fashion-pic/men/jacket/725zd/4.jpg"],
        color: ["navy"],
        size: ["small", "medium", "large"]
      }, {
        name: "پالتو مردانه مدل جودون رنگ ذغالی",
        previousPrice: 2500000,
        currentPrice: 890000,
        url: "salesMarketItem.html?ancestor=fashion&parent=men&child=jacket&modelId=jodon",
        id: "jodon",
        thumbnails: ["images/fashion-pic/men/jacket/jodon/1.jpg", "images/fashion-pic/men/jacket/jodon/2.jpg", "images/fashion-pic/men/jacket/jodon/3.jpg", "images/fashion-pic/men/jacket/jodon/4.jpg", "images/fashion-pic/men/jacket/jodon/5.jpg"],
        color: ["black", "grey"],
        size: ["small", "medium", "large"]
      }]
    }, {
      name: "Shirt",
      persianName: "پیراهن",
      models: [{
        name: "ژاکت مردانه پاییزان مدل PJ700",
        previousPrice: 320000,
        currentPrice: 320000,
        url: "salesMarketItem.html?ancestor=fashion&parent=men&child=Shirt&modelId=jacketPJ700",
        id: "jacketPJ700",
        thumbnails: ["images/fashion-pic/men/Shirt/jacket/1.jpg", "images/fashion-pic/men/Shirt/jacket/2.jpg", "images/fashion-pic/men/Shirt/jacket/3.jpg", "images/fashion-pic/men/Shirt/jacket/4.jpg", "images/fashion-pic/men/Shirt/jacket/5.jpg"],
        color: ["navy", "blue"],
        size: ["small", "medium", "large"]
      }, {
        name: "پلیور مردانه پاییزان کد P700",
        previousPrice: 2500000,
        currentPrice: 890000,
        url: "salesMarketItem.html?ancestor=fashion&parent=men&child=Shirt&modelId=poliverP700",
        id: "poliverP700",
        thumbnails: ["images/fashion-pic/men/Shirt/poliver/1.jpg", "images/fashion-pic/men/Shirt/poliver/2.jpg", "images/fashion-pic/men/Shirt/poliver/3.jpg", "images/fashion-pic/men/Shirt/poliver/4.jpg"],
        color: ["red", "black"],
        size: ["small", "medium", "large"]
      }, {
        name: "تی شرت مردانه طرح موزیک",
        previousPrice: 32000,
        currentPrice: 32000,
        url: "salesMarketItem.html?ancestor=fashion&parent=men&child=Shirt&modelId=t-shirt",
        id: "t-shirt",
        thumbnails: ["images/fashion-pic/men/Shirt/t-shirt/1.jpg", "images/fashion-pic/men/Shirt/t-shirt/2.jpg", "images/fashion-pic/men/Shirt/t-shirt/3.jpg"],
        color: ["black"],
        size: ["small", "medium", "large"]
      }]
    }, {
      name: "Pants",
      persianName: "شلوار",
      models: [{
        name: "شلوار مردانه مدل RR-40722",
        previousPrice: 118000,
        currentPrice: 73000,
        url: "salesMarketItem.html?ancestor=fashion&parent=men&child=Pants&modelId=RR-40722",
        id: "RR-40722",
        thumbnails: ["images/fashion-pic/men/Pants/parcheh/1.jpg", "images/fashion-pic/men/Pants/parcheh/2.jpg", "images/fashion-pic/men/Pants/parcheh/3.jpg"],
        color: ["khaki"],
        size: ["small", "medium", "large"]
      }, {
        name: "شلوار مردانه اکزاترس",
        previousPrice: 589000,
        currentPrice: 589000,
        url: "salesMarketItem.html?ancestor=fashion&parent=men&child=Pants&modelId=exactes",
        id: "exactes",
        thumbnails: ["images/fashion-pic/men/Pants/cotton/1.jpg", "images/fashion-pic/men/Pants/cotton/2.jpg", "images/fashion-pic/men/Pants/cotton/3.jpg", "images/fashion-pic/men/Pants/cotton/4.jpg", "images/fashion-pic/men/Pants/cotton/5.jpg"],
        color: ["green"],
        size: ["small", "medium", "large"]
      }, {
        name: "شلوار جین مردانه آر اِن اِس",
        previousPrice: 585000,
        currentPrice: 585000,
        url: "salesMarketItem.html?ancestor=fashion&parent=men&child=Pants&modelId=jeansRNS",
        id: "jeansRNS",
        thumbnails: ["images/fashion-pic/men/Pants/jeans/1.jpg", "images/fashion-pic/men/Pants/jeans/2.jpg", "images/fashion-pic/men/Pants/jeans/3.jpg", "images/fashion-pic/men/Pants/jeans/4.jpg"],
        color: ["blue"],
        size: ["small", "medium", "large"]
      }]
    }]
  }, {
    name: "women",
    persianName: "زنانه",
    child: [{
      name: "blouse",
      persianName: "پیراهن راحتی",
      models: [{
        name: "پلیور زنانه افراتین مدل گوزن سفید",
        previousPrice: 269000,
        currentPrice: 159000,
        url: "salesMarketItem.html?ancestor=fashion&parent=women&child=blouse&modelId=poliverwoman",
        id: "poliverwoman",
        thumbnails: ["images/fashion-pic/women/blouse/poliver/1.jpg", "images/fashion-pic/women/blouse/poliver/2.jpg", "images/fashion-pic/women/blouse/poliver/3.jpg"],
        color: ["navy", "black"],
        size: ["small", "medium", "large"]
      }, {
        name: "شومیز زنانه مارینا رینالدی",
        previousPrice: 14759000,
        currentPrice: 14759000,
        url: "salesMarketItem.html?ancestor=fashion&parent=women&child=blouse&modelId=marinaRinaldi",
        id: "marinaRinaldi",
        thumbnails: ["images/fashion-pic/women/blouse/shomiz/1.jpg", "images/fashion-pic/women/blouse/shomiz/2.jpg", "images/fashion-pic/women/blouse/shomiz/3.jpg"],
        color: ["white"],
        size: ["small", "medium", "large"]
      }, {
        name: "بلوز زنانه امپریو آرمانی",
        previousPrice: 10540000,
        currentPrice: 10540000,
        url: "salesMarketItem.html?ancestor=fashion&parent=women&child=blouse&modelId=armaniwoman",
        id: "armaniwoman",
        thumbnails: ["images/fashion-pic/women/blouse/armani/1.jpg", "images/fashion-pic/women/blouse/armani/2.jpg"],
        color: ["navy", "black"],
        size: ["small", "medium", "large"]
      }]
    }, {
      name: "official",
      persianName: "پیراهن رسمی",
      models: [{
        name: "پیراهن زنانه درس ایگو",
        previousPrice: 1380000,
        currentPrice: 1380000,
        url: "salesMarketItem.html?ancestor=fashion&parent=women&child=official&modelId=eigowomen",
        id: "eigowomen",
        thumbnails: ["images/fashion-pic/women/official/eigo/1.jpg", "images/fashion-pic/women/official/eigo/2.jpg", "images/fashion-pic/women/official/eigo/3.jpg"],
        color: ["red"],
        size: ["small", "medium", "large"]
      }, {
        name: "پیراهن زنانه جیزیا مدل پیکوک",
        previousPrice: 22000000,
        currentPrice: 22000000,
        url: "salesMarketItem.html?ancestor=fashion&parent=women&child=official&modelId=picokwomen",
        id: "picokwomen",
        thumbnails: ["images/fashion-pic/women/official/picok/1.jpg", "images/fashion-pic/women/official/picok/2.jpg", "images/fashion-pic/women/official/picok/3.jpg"],
        color: ["yellow"],
        size: ["small", "medium", "large"]
      }, {
        name: "پیراهن زنانه امپریو آرمانی",
        previousPrice: 10930000,
        currentPrice: 10930000,
        url: "salesMarketItem.html?ancestor=fashion&parent=women&child=official&modelId=armaniwomen",
        id: "armaniwomen",
        thumbnails: ["images/fashion-pic/women/official/armani/1.jpg", "images/fashion-pic/women/official/armani/2.jpg", "images/fashion-pic/women/official/armani/3.jpg"],
        color: ["black"],
        size: ["small", "medium", "large"]
      }]
    }, {
      name: "pants",
      persianName: "شلوار",
      models: [{
        name: "شلوار زنانه امپریو آرمانی",
        previousPrice: 8730000,
        currentPrice: 8730000,
        url: "salesMarketItem.html?ancestor=fashion&parent=women&child=pants&modelId=armanishalvar",
        id: "armanishalvar",
        thumbnails: ["images/fashion-pic/women/pants/armani/1.jpg", "images/fashion-pic/women/pants/armani/2.jpg", "images/fashion-pic/women/pants/armani/3.jpg"],
        color: ["grey"],
        size: ["small", "medium", "large"]
      }, {
        name: "شلوار زنانه",
        previousPrice: 173000,
        currentPrice: 173000,
        url: "salesMarketItem.html?ancestor=fashion&parent=women&child=pants&modelId=parchehshalvarwoman",
        id: "parchehshalvarwoman",
        thumbnails: ["images/fashion-pic/women/pants/parcheh/1.jpg", "images/fashion-pic/women/pants/parcheh/2.jpg", "images/fashion-pic/women/pants/parcheh/3.jpg", "images/fashion-pic/women/pants/parcheh/4.jpg"],
        color: ["grey"],
        size: ["small", "medium", "large"]
      }, {
        name: "شلوار زنانه مارینا رینالدی",
        previousPrice: 8149000,
        currentPrice: 8149000,
        url: "salesMarketItem.html?ancestor=fashion&parent=women&child=pants&modelId=rinaldishalvarwoman",
        id: "rinaldishalvarwoman",
        thumbnails: ["images/fashion-pic/women/pants/rinaldi/1.jpg", "images/fashion-pic/women/pants/rinaldi/2.jpg", "images/fashion-pic/women/pants/rinaldi/3.jpg"],
        color: ["navy"],
        size: ["small", "medium", "large"]
      }]
    }]
  }]
}, {
  ancestor: "kitchen",
  persianName: "خانه و آشپزخانه",
  parent: [{
    name: "appliances",
    persianName: "لوازم برقی خانگی",
    child: [{
      name: "refrigerator",
      persianName: "یخچال",
      models: [{
        name: "یخچال فریزر ساید بای ساید دوو مدل D2S-3133MW",
        previousPrice: 35000000,
        currentPrice: 31000000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=appliances&child=refrigerator&modelId=D2S-3133MW",
        id: "D2S-3133MW",
        thumbnails: ["images/kitchen-pic/appliances/refrigerator/D2S/1.jpg"],
        color: ["white"]
      }, {
        name: "یخچال و فریزر دوقلو دوو مدل D4LR-0020MW/D4LF-0020MW",
        previousPrice: 36500000,
        currentPrice: 36500000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=appliances&child=refrigerator&modelId=D4LR-0020MW",
        id: "D4LR-0020MW",
        thumbnails: ["images/kitchen-pic/appliances/refrigerator/D4LR/1.jpg", "images/kitchen-pic/appliances/refrigerator/D4LR/2.jpg", "images/kitchen-pic/appliances/refrigerator/D4LR/3.jpg"],
        color: ["white"]
      }, {
        name: "یخچال و فریزر دوو مدل D2BF-0291LW",
        previousPrice: 17400000,
        currentPrice: 17400000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=appliances&child=refrigerator&modelId=D2BF-0291LW",
        id: "D2BF-0291LW",
        thumbnails: ["images/kitchen-pic/appliances/refrigerator/D2BF/1.jpg", "images/kitchen-pic/appliances/refrigerator/D2BF/2.jpg", "images/kitchen-pic/appliances/refrigerator/D2BF/3.jpg"],
        color: ["white"]
      }]
    }, {
      name: "vaccumer",
      persianName: "جارو برقی",
      models: [{
        name: "جاروبرقی پاناسونیک مدل VC-813",
        previousPrice: 1770000,
        currentPrice: 1770000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=appliances&child=vaccumer&modelId=VC-813",
        id: "VC-813",
        thumbnails: ["images/kitchen-pic/appliances/vaccumer/VC-813/1.jpg"],
        color: ["black"]
      }, {
        name: "جاروبرقی پاناسونیک مدل MC-CJ911",
        previousPrice: 3200000,
        currentPrice: 3200000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=appliances&child=vaccumer&modelId=MC-CJ911",
        id: "MC-CJ911",
        thumbnails: ["images/kitchen-pic/appliances/vaccumer/MC-CJ911/1.jpg", "images/kitchen-pic/appliances/vaccumer/MC-CJ911/2.jpg", "images/kitchen-pic/appliances/vaccumer/MC-CJ911/3.jpg"],
        color: ["red"]
      }, {
        name: "جاروبرقی پاناسونیک مدل MC-CJ913",
        previousPrice: 6990000,
        currentPrice: 6990000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=appliances&child=vaccumer&modelId=MC-CJ913",
        id: "MC-CJ913",
        thumbnails: ["images/kitchen-pic/appliances/vaccumer/MC-CJ913/1.jpg", "images/kitchen-pic/appliances/vaccumer/MC-CJ913/2.jpg", "images/kitchen-pic/appliances/vaccumer/MC-CJ913/3.jpg"],
        color: ["black"]
      }]
    }, {
      name: "washing",
      persianName: "ماشین لباسشویی",
      models: [{
        name: "ماشین لباسشویی دوو مدل DWK-9543V",
        previousPrice: 15000000,
        currentPrice: 14700000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=appliances&child=washing&modelId=DWK-9543V",
        id: "DWK-9543V",
        thumbnails: ["images/kitchen-pic/appliances/washing/DWK-9543V/1.jpg", "images/kitchen-pic/appliances/washing/DWK-9543V/2.jpg"],
        color: ["white"]
      }, {
        name: "ماشین لباسشویی دوو سری کاریزما مدل DWK-8100 ظرفیت 8 کیلوگرم",
        previousPrice: 10380000,
        currentPrice: 10380000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=appliances&child=washing&modelId=DWK-8100",
        id: "DWK-8100",
        thumbnails: ["images/kitchen-pic/appliances/washing/DWK-8100/1.jpg"],
        color: ["white"]
      }, {
        name: "ماشین لباسشویی دوو مدل DWK-7100 ظرفیت ۷ کیلوگرم",
        previousPrice: 11000000,
        currentPrice: 9990000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=appliances&child=washing&modelId=DWK-7100",
        id: "DWK-7100",
        thumbnails: ["images/kitchen-pic/appliances/washing/DWK-7100/1.jpg"],
        color: ["white"]
      }]
    }]
  }, {
    name: "audios",
    persianName: "صوتی و تصویری",
    child: [{
      name: "cinema",
      persianName: "سینمای خانگی",
      models: [{
        name: "سینمای خانگی ال جی مدل LH-358HTS با توان خروجی 1200 وات",
        previousPrice: 15300000,
        currentPrice: 15300000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=audios&child=cinema&modelId=LH-358HTS",
        id: "LH-358HTS",
        thumbnails: ["images/kitchen-pic/audios/cinema/LH-358HTS/1.jpg", "images/kitchen-pic/audios/cinema/LH-358HTS/2.jpg", "images/kitchen-pic/audios/cinema/LH-358HTS/3.jpg"],
        color: ["black"]
      }, {
        name: "سینمای خانگی ال جی مدل LHD675",
        previousPrice: 15000000,
        currentPrice: 13991000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=audios&child=cinema&modelId=LHD675",
        id: "LHD675",
        thumbnails: ["images/kitchen-pic/audios/cinema/LHD675/1.jpg", "images/kitchen-pic/audios/cinema/LHD675/2.jpg"],
        color: ["black"]
      }]
    }, {
      name: "DVBT",
      persianName: "گیرنده دیجیتال",
      models: [{
        name: "گیرنده دیجیتال DVB-T دنای مدل STB1024BT",
        previousPrice: 350000,
        currentPrice: 350000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=audios&child=DVBT&modelId=STB1024BT",
        id: "STB1024BT",
        thumbnails: ["images/kitchen-pic/audios/DVBT/STB1024BT/1.jpg", "images/kitchen-pic/audios/DVBT/STB1024BT/2.jpg"],
        color: ["black"]
      }, {
        name: "گیرنده دیجیتال DVB-T دنای مدل STB1011H",
        previousPrice: 403000,
        currentPrice: 403000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=audios&child=DVBT&modelId=STB1011H",
        id: "STB1011H",
        thumbnails: ["images/kitchen-pic/audios/DVBT/STB1011H/1.jpg", "images/kitchen-pic/audios/DVBT/STB1011H/2.jpg"],
        color: ["black"]
      }, {
        name: "گیرنده دیجیتال DVB-T دنای مدل STB1024H",
        previousPrice: 316000,
        currentPrice: 316000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=audios&child=DVBT&modelId=STB1024H",
        id: "STB1024H",
        thumbnails: ["images/kitchen-pic/audios/DVBT/STB1024H/1.jpg", "images/kitchen-pic/audios/DVBT/STB1024H/2.jpg"],
        color: ["black"]
      }]
    }, {
      name: "television",
      persianName: "تلویزیون",
      models: [{
        name: "تلویزیون ال ای دی هوشمند دوو مدل DSL-43K5750 سایز 43 اینچ",
        previousPrice: 8000000,
        currentPrice: 8000000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=audios&child=television&modelId=DSL-43K5750",
        id: "DSL-43K5750",
        thumbnails: ["images/kitchen-pic/audios/television/DSL-43K5750/1.jpg", "images/kitchen-pic/audios/television/DSL-43K5750/2.jpg"],
        color: ["black"]
      }, {
        name: "تلویزیون ال ای دی هوشمند دوو مدل DSL-55K5700U سایز 55 اینچ",
        previousPrice: 149500000,
        currentPrice: 149500000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=audios&child=television&modelId=DSL-55K5700U",
        id: "DSL-55K5700U",
        thumbnails: ["images/kitchen-pic/audios/television/DSL-55K5700U/1.jpg", "images/kitchen-pic/audios/television/DSL-55K5700U/2.jpg"],
        color: ["black"]
      }, {
        name: "تلویزیون ال ای دی دوو مدل DLE-50K4310U سایز 50 اینچ",
        previousPrice: 10725000,
        currentPrice: 10725000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=audios&child=television&modelId=DLE-50K4310U",
        id: "DLE-50K4310U",
        thumbnails: ["images/kitchen-pic/audios/television/DLE-50K4310U/1.jpg", "images/kitchen-pic/audios/television/DLE-50K4310U/2.jpg"],
        color: ["black"]
      }]
    }]
  }, {
    name: "lamps",
    persianName: "نور و روشنایی",
    child: [{
      name: "bulb",
      persianName: "لامپ، چراغ و ریسه",
      models: [{
        name: "لامپ ال ای دی 10 وات بروکس پایه E27",
        previousPrice: 30000,
        currentPrice: 21000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=lamps&child=bulb&modelId=burux-E27",
        id: "burux-E27",
        thumbnails: ["images/kitchen-pic/lamps/bulb/E27/1.jpg", "images/kitchen-pic/lamps/bulb/E27/2.jpg"],
        color: ["white"]
      }, {
        name: "چراغ ال ای دی 40 وات بروکس مدل Linear",
        previousPrice: 160000,
        currentPrice: 160000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=lamps&child=bulb&modelId=burux-Linear",
        id: "burux-Linear",
        thumbnails: ["images/kitchen-pic/lamps/bulb/Linear/1.jpg", "images/kitchen-pic/lamps/bulb/Linear/2.jpg"],
        color: ["white"]
      }, {
        name: "لامپ هالوژن 7 وات بروکس کد 01 پایه GU10",
        previousPrice: 28000,
        currentPrice: 28000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=lamps&child=bulb&modelId=burux-GU10",
        id: "burux-GU10",
        thumbnails: ["images/kitchen-pic/lamps/bulb/GU10/1.jpg", "images/kitchen-pic/lamps/bulb/GU10/2.jpg"],
        color: ["white"]
      }]
    }, {
      name: "lostre",
      persianName: "لوستر و چراغ تزیینی",
      models: [{
        name: "وستر سقفی چشمه نور کد A2680/23-Pro مجموعه دو عددی",
        previousPrice: 1680000,
        currentPrice: 780000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=lamps&child=lostre&modelId=A268023-Pro",
        id: "A268023-Pro",
        thumbnails: ["images/kitchen-pic/lamps/lostre/A268023-Pro/1.jpg", "images/kitchen-pic/lamps/lostre/A268023-Pro/2.jpg"],
        color: ["yellow"]
      }, {
        name: "چراغ آویز چشمه نور کد L6325/3H",
        previousPrice: 2580000,
        currentPrice: 990000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=lamps&child=lostre&modelId=L63253H",
        id: "L63253H",
        thumbnails: ["images/kitchen-pic/lamps/lostre/L63253H/1.jpg", "images/kitchen-pic/lamps/lostre/L63253H/2.jpg"],
        color: ["white"]
      }, {
        name: "لوستر چشمه نور 15 شعله کد C2725",
        previousPrice: 30000000,
        currentPrice: 18680000,
        url: "salesMarketItem.html?ancestor=kitchen&parent=lamps&child=lostre&modelId=C2725",
        id: "C2725",
        thumbnails: ["images/kitchen-pic/lamps/lostre/C2725/1.jpg"],
        color: ["copper"]
      }]
    }]
  }]
}, {
  ancestor: "best-offer-goods",
  persianName: "پیشنهادات ویژه",
  parent: [{
    name: "fantastic-offer",
    persianName: "پیشنهاد ویژه",
    child: [{
      name: "all-goods",
      persianName: "همه ی کالاها",
      models: [{
        name: "گوشی موبایل نوکیا مدل G10 TA-1334 دو سیم کارت ظرفیت 64 گیگابایت همراه با رم 4 گیگابایت",
        previousPrice: 3370000,
        currentPrice: 3340000,
        url: "salesMarketItem.html?ancestor=tech&parent=mobile&child=nokia&modelId=G10",
        id: "G10",
        thumbnails: ["images/tech-pic/phone/nokia/nokia-g10/1.jpg", "images/tech-pic/phone/nokia/nokia-g10/2.jpg", "images/tech-pic/phone/nokia/nokia-g10/3.jpg"],
        color: ["black", "dust", "blue"]
      }, {
        name: "گوشی موبایل نوکیا مدل G20 TA-1365 دو سیم‌کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت ",
        previousPrice: 4400000,
        currentPrice: 4290000,
        url: "salesMarketItem.html?ancestor=tech&parent=mobile&child=nokia&modelId=G20-TA-1365",
        id: "G20-TA-1365",
        thumbnails: ["images/tech-pic/phone/nokia/nokia-g20/1.jpg", "images/tech-pic/phone/nokia/nokia-g20/2.jpg", "images/tech-pic/phone/nokia/nokia-g20/3.jpg", "images/tech-pic/phone/nokia/nokia-g20/4.jpg"],
        color: ["black", "blue"]
      }, {
        name: "گوشی موبایل سامسونگ مدل A52s 5G SM-A528B/DS دو سیم‌کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت ",
        previousPrice: 10000000,
        currentPrice: 9300000,
        url: "salesMarketItem.html?ancestor=tech&parent=mobile&child=samsung&modelId=A52s",
        id: "A52s",
        thumbnails: ["images/tech-pic/phone/samsung/samsung-A52s/1.jpg", "images/tech-pic/phone/samsung/samsung-A52s/2.jpg", "images/tech-pic/phone/samsung/samsung-A52s/3.jpg", "images/tech-pic/phone/samsung/samsung-A52s/4.jpg"],
        color: ["black", "purple", "pink"]
      }, {
        name: "گوشی موبایل اپل مدل iPhone 13 A2634 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",
        previousPrice: 26900000,
        currentPrice: 26249000,
        url: "salesMarketItem.html?ancestor=tech&parent=mobile&child=iphone&modelId=iphone13-A2634",
        id: "iphone13-A2634",
        thumbnails: ["images/tech-pic/phone/iphone/iphone13-A2634/1.jpg", "images/tech-pic/phone/iphone/iphone13-A2634/2.jpg", "images/tech-pic/phone/iphone/iphone13-A2634/3.jpg", "images/tech-pic/phone/iphone/iphone13-A2634/4.jpg", "images/tech-pic/phone/iphone/iphone13-A2634/5.jpg"],
        color: ["black", "pink", "white"]
      }, {
        name: "لپ تاپ ایسر 15 اینچی مدل Aspire 3 A315-57G-559W ",
        previousPrice: 23000000,
        currentPrice: 22400000,
        url: "salesMarketItem.html?ancestor=tech&parent=laptop&child=acer&modelId=AS3",
        id: "AS3",
        thumbnails: ["images/tech-pic/laptop/acer/Aspire3/1.jpg", "images/tech-pic/laptop/acer/Aspire3/2.jpg", "images/tech-pic/laptop/acer/Aspire3/3.jpg"],
        color: ["black", "silver"]
      }, {
        name: "لپ تاپ 13 اینچی اپل مدل MacBook Air MGN63 2020",
        previousPrice: 33500000,
        currentPrice: 29840000,
        url: "salesMarketItem.html?ancestor=tech&parent=laptop&child=apple&modelId=MacBook-Air",
        id: "MacBook-Air",
        thumbnails: ["images/tech-pic/laptop/apple/MacBook-Air/1.jpg", "images/tech-pic/laptop/apple/MacBook-Air/2.jpg", "images/tech-pic/laptop/apple/MacBook-Air/3.jpg", "images/tech-pic/laptop/apple/MacBook-Air/4.jpg"],
        color: ["black"]
      }, {
        name: "دوربین دیجیتال کانن مدل EOS 1300D به همراه لنز 18-55 میلی متر DC III ",
        previousPrice: 17400000,
        currentPrice: 16300000,
        url: "salesMarketItem.html?ancestor=tech&parent=camera&child=canon&modelId=1300D",
        id: "1300D",
        thumbnails: ["images/tech-pic/camera/canon/1300D/1.jpg", "images/tech-pic/camera/canon/1300D/2.jpg", "images/tech-pic/camera/canon/1300D/3.jpg", "images/tech-pic/camera/canon/1300D/4.jpg"],
        color: ["black"]
      }, {
        name: "دوربین دیجیتال کانن مدل EOS 2000D به همراه لنز 18-55 میلی متر DC III ",
        previousPrice: 12670000,
        currentPrice: 12670000,
        url: "salesMarketItem.html?ancestor=tech&parent=camera&child=canon&modelId=2000D",
        id: "2000D",
        thumbnails: ["images/tech-pic/camera/canon/2000D/1.jpg", "images/tech-pic/camera/canon/2000D/2.jpg", "images/tech-pic/camera/canon/2000D/3.jpg", "images/tech-pic/camera/canon/2000D/4.jpg"],
        color: ["black"]
      }, ]
    }]
  }]
}]
let shoppingList = []
const shoppingItems = document.querySelector(".shopping-items")
const shoppingItemTemp = document.querySelector("#shopping-item-temp")
const shoppingIndex = document.querySelector("#shopping-index")
//parse local storage
const shoppingListTemp = JSON.parse(localStorage.getItem("shoppingListSaved"))
if (shoppingListTemp) {
  shoppingList = shoppingListTemp
  setShoppingItems()
}
const categoryEls = document.querySelectorAll(".category")
const subCategoryEls = document.querySelectorAll(".sub-category")
const navbarThumbHolder = document.querySelector(".navbar-thumb-holder")
const overlay = document.querySelector(".overlay")
const navBar = document.querySelector(".navbar")
const openNavbar = document.querySelector(".open-navbar")
openNavbar.addEventListener("click", () => {
  navBar.classList.toggle("active")
})
const shoppingIcon = document.querySelector(".shopping-icon")
const shoppingBox = document.querySelector(".shopping-box")
//show nav
navbarThumbHolder.addEventListener("click", () => {
  overlay.classList.add("show")
  navBar.classList.add("show")
})
//show scrollabe navbar
const menuEl = document.querySelector(".menu")
const openMe = document.querySelector("#open-me")
window.addEventListener("scroll", (e) => {
  //	let scrollable=document.documentElement.scrollHeight-window.innerHeight
  let scrolled = window.scrollY
  if (scrolled > 300) {
    openMe.classList.add("active")
  } else {
    openMe.classList.remove("active")
  }
})
openMe.addEventListener("click", () => {
  overlay.classList.add("show")
  navBar.classList.add("show")
})
//overlay event action
overlay.addEventListener("click", () => {
  overlay.classList.remove("show")
  navBar.classList.remove("show")
})
//open and close each category items
categoryEls.forEach(category => {
  category.addEventListener("click", (e) => {
    const categories = e.target.closest(".categories")
    categories.classList.toggle("active")
  })
})
//open and close each sub category items
subCategoryEls.forEach(subCategory => {
  subCategory.addEventListener("click", (e) => {
    const categoryItems = e.target.closest(".category-items")
    categoryItems.classList.toggle("active")
  })
})
//setting shopping index
console.log(databas.lenght)
//open and close shopping box
shoppingIcon.addEventListener("click", () => {
  const shoppingItems = document.querySelector(".shopping-items")
  if (shoppingItems.hasChildNodes()) {
    shoppingBox.classList.toggle("show")
  }
})
//open and close search suggestions
const searchEl = document.querySelector("#search")
const suggestionEl = document.querySelector(".suggestion")
searchEl.addEventListener("input", () => {
  suggestionEl.innerHTML = ""
  if (searchEl.value == null || searchEl.value === "") {
    suggestionEl.classList.remove("show")
  } else {
    suggestionEl.classList.add("show")
    let datapar = databas.flatMap(data => {
      return data.parent
    })
    let datachil = datapar.flatMap(data => {
      return data.child
    })
    let modelsList = datachil.flatMap(data => {
      return data.models
    })
    const dataTemp = modelsList.filter(data => {
      let filteredData = data.name.toLowerCase().indexOf(searchEl.value.toLowerCase())
      if (filteredData > -1) {
        return data
      }
    })
    if (dataTemp.length > 0) {
      dataTemp.forEach(data => {
        let li = document.createElement("li")
        li.classList.add("suggestion-item")
        let a = document.createElement("a")
        a.href = data.url
        a.classList.add("suggestion-link")
        let img = document.createElement("img")
        img.classList.add("suggestion-thumb")
        img.src = data.thumbnails[0]
        a.appendChild(img)
        let p = document.createElement("p")
        p.classList.add("suggestion-name")
        p.textContent = data.name
        a.appendChild(p)
        li.appendChild(a)
        suggestionEl.appendChild(li)
      })
    } else {
      let li = document.createElement("li")
      li.classList.add("suggestion-item")
      let a = document.createElement("a")
      a.href = "#"
      a.classList.add("suggestion-link")
      let img = document.createElement("img")
      img.classList.add("suggestion-thumb")
      img.src = "images/social-media/warning.jpg"
      a.appendChild(img)
      let p = document.createElement("p")
      p.classList.add("suggestion-name")
      p.textContent = "محصولی یافت نشد!"
      a.appendChild(p)
      li.appendChild(a)
      suggestionEl.appendChild(li)
    }
  }
})
//close suggestion box when you click outside
searchEl.addEventListener("blur", () => {
  setTimeout(() => {
    suggestionEl.classList.remove("show")
  }, 200)
})
//footer goto-up
const gotoUp = document.querySelector(".goto-up")
if (gotoUp) {
  gotoUp.addEventListener("click", () => {
    document.documentElement.scrollTop  = 0
  })
}
//set shopping items
function setShoppingItems() {
  shoppingItems.innerHTML = ""
  shoppingList.forEach(item => {
    const shopItemTemp = document.importNode(shoppingItemTemp.content, true)
    const itemName = shopItemTemp.querySelector(".shopping-item-name")
    itemName.textContent = item.name
    const itemPrice = shopItemTemp.querySelector(".shopping-item-price")
    itemPrice.textContent = item.price.toLocaleString()
    shoppingItems.appendChild(shopItemTemp)
  })
  setShoppingIndex()
}

function setShoppingIndex() {
  if (shoppingItems.hasChildNodes()) {
    let totalQuentity=0
    shoppingList.forEach(item=>{
      totalQuentity+=parseInt(item.quentity)
    })
    shoppingIndex.style.opacity = 1
    shoppingIndex.textContent = totalQuentity
  } else {
    shoppingIndex.style.opacity = 0
  }
}

function setMyLocalStorage() {
  localStorage.setItem("shoppingListSaved", JSON.stringify(shoppingList))
}
//you can delete local storage by dremoving comment sign
//localStorage.clear()