arac_bilgi = [
    {
        id: 'bwm116d_1234',
        model: '116d',
        yil : 2015,
        renk : 'white',
        servis_kayit :[
                {
                    id:'bwm116d_1234_1',
                    tarih:'30.01.2016',
                    km : 13000,
                    toplam_ucret:900,
                    servis_detay:[
                        {id : 'bwm116d_123_1',acıklama:'yağ değişim ücreti', fiyat: 300,},
                        { id : 'bwm116d_123_2',acıklama:'filtre değişim ücreti', fiyat: 300,},
                        {id : 'bwm116d_123_3',acıklama:'fren hidroliği değişim ücreti',fiyat: 300,}] 
                },
    
                {
                    id:'bwm116d_1234_2',
                    tarih:'30.01.2017',
                    km : 26000,
                    toplam_ucret:1500,
                    servis_detay:[
                        { id : 'bwm116d_123_1',acıklama:'yağ değişim ücreti',fiyat: 300,},
                        {id : 'bwm116d_123_2',acıklama:'filtre değişim ücreti',fiyat: 700,},
                        {id : 'bwm116d_123_3',acıklama:'fren hidroliği değişim ücreti',fiyat: 500,}
                    ]       
                },
        ]
          
    },
    {
        id: 'ford_focus_1234',
        model: 'focus',
        yil : 2012,
        renk : 'white',
        servis_kayit :[
                {
                    id:'ford_focus_1234',
                    tarih:'30.01.2014',
                    km : 94000,
                    toplam_ucret:3000,
                    servis_detay:[
                        {id : 'ford_focus_1234',acıklama:'yağ değişim ücreti', fiyat: 300,},
                        { id : 'ford_focus_1234',acıklama:'filtre değişim ücreti', fiyat: 300,},
                        {id : 'ford_focus_1234',acıklama:'fren hidroliği değişim ücreti',fiyat: 300,}] 
                },
    
                {
                    id:'ford_focus_1234',
                    tarih:'30.01.2016',
                    km : 114000,
                    toplam_ucret:3000,
                    servis_detay:[
                        { id : 'ford_focus_1234',acıklama:'yağ değişim ücreti',fiyat: 300,},
                        {id : 'ford_focus_1234',acıklama:'filtre değişim ücreti',fiyat: 700,},
                        {id : 'ford_focus_1234',acıklama:'fren hidroliği değişim ücreti',fiyat: 500,}
                    ]       
                },
        ]
          
    },
    {
        id: 'honda_civic_1234',
        model: 'civic',
        yil : 2018,
        renk : 'space_gray',
        servis_kayit :[
                {
                    id:'honda_civic_1234',
                    tarih:'30.01.2019',
                    km : 55000,
                    toplam_ucret:2200,
                    servis_detay:[
                        {id : 'honda_civic_1234',acıklama:'yağ değişim ücreti', fiyat: 300,},
                        { id : 'honda_civic_1234',acıklama:'filtre değişim ücreti', fiyat: 300,},
                        {id : 'honda_civic_1234',acıklama:'fren hidroliği değişim ücreti',fiyat: 300,}] 
                },
    
                {
                    id:'honda_civic_1234',
                    tarih:'30.01.2020',
                    km : 65000,
                    toplam_ucret:1500,
                    servis_detay:[
                        { id : 'honda_civic_1234',acıklama:'yağ değişim ücreti',fiyat: 300,},
                        {id : 'honda_civic_1234',acıklama:'filtre değişim ücreti',fiyat: 700,},
                        {id : 'honda_civic_1234',acıklama:'fren hidroliği değişim ücreti',fiyat: 500,}
                    ]       
                },
        ]
          
    }
]
console.log(arac_bilgi);
console.log(typeof arac_bilgi);
console.log(arac_bilgi[0]);
console.log(arac_bilgi[0].id);
console.log(arac_bilgi[0].model);
console.log(arac_bilgi[0].renk);
console.log(arac_bilgi[0].servis_kayit);
console.log(arac_bilgi[0].servis_kayit[0]);
console.log(arac_bilgi[0].servis_kayit[0].km);
console.log(arac_bilgi[0].servis_kayit[0].toplam_ucret);
console.log(arac_bilgi[0].servis_kayit[0].servis_detay[0]);




