/* KOREA EASY airport transfer pages: shared page-level EN/JA/ZH renderer. */
const AIRPORT_LANG = {
  en: {
    back: '← Back to Main Guide', eyebrow: 'SEOUL AIRPORT TRANSFER GUIDE · 2026',
    summaryLabels: ['Fastest practical option', 'Typical time', 'Recommended card', 'Destination station'],
    routeKicker: 'RECOMMENDED ROUTE', routeLead: 'This is usually the easiest public-transport route for first-time visitors.',
    compareKicker: 'TRANSPORT COMPARISON', compareTitle: 'Which option should you choose?',
    terminalKicker: 'TERMINAL GUIDE', terminalTitle: 'Terminal 1 vs Terminal 2',
    terminal1: 'Incheon Airport Terminal 1', terminal2: 'Incheon Airport Terminal 2',
    terminal1Copy: 'After entering the public arrivals area, follow signs for Airport Railroad / AREX. If you need a T-money card, check airport convenience stores or official transport facilities.',
    terminal2Copy: 'Terminal 2 also connects directly to AREX. Follow Airport Railroad signs after leaving arrivals. Allow extra time to purchase or top up a transport card if needed.',
    terminalNotice: 'Airport shop locations, fares and operating details can change. Always confirm current information using airport signs and official transport information before travel.',
    tmoneyKicker: 'T-MONEY', tmoneyTitle: 'Do you need T-money?', tmoneyCopy: 'T-money is useful for Seoul subway and bus travel. If you plan to use regular public transport after arriving in Korea, it is convenient to prepare a card before heading into Seoul.',
    tmoneyList: ['Useful on Seoul subway and buses', 'Can reduce the need to buy individual tickets repeatedly', 'Keep some Korean won cash available for top-up situations'],
    tmoneyGuide: 'T-money Guide for Foreigners', airportGuide: 'Incheon Airport T1/T2 Guide',
    exitKicker: 'DESTINATION STATION', exitTitle: 'Which exit should you use?', afterKicker: 'AFTER ARRIVAL', afterTitle: 'What can you do here?',
    food: 'Food', shopping: 'Shopping', sights: 'Nearby sights', continueKicker: 'KOREA EASY', continueTitle: 'Continue planning your Seoul trip', mainGuide: 'Main Korea Travel Guide', explorer: 'Seoul Explorer', airportToSeoul: 'Airport to Seoul',
    footer: '© 2026 KOREA EASY · Independent visitor guide. Transport times, fares, exits and shop information may change.', recommended: 'Recommended', arex: 'AREX + Subway', bus: 'Airport Bus', taxi: 'Taxi', best: 'Best balance', easyLuggage: 'Easy with luggage', convenient: 'Most convenient', sourceNote: 'Current routes, fares and platform details can change. Check official airport and transit information before travel.'
  },
  ja: {
    back: '← メインガイドへ', eyebrow: 'ソウル 空港アクセスガイド · 2026',
    summaryLabels: ['実用的に最速', '目安時間', 'おすすめカード', '目的地の駅'],
    routeKicker: 'おすすめルート', routeLead: '初めての旅行者にとって、通常もっともわかりやすい公共交通ルートです。',
    compareKicker: '交通手段の比較', compareTitle: 'どの方法を選ぶ？',
    terminalKicker: 'ターミナル案内', terminalTitle: '第1ターミナルと第2ターミナル',
    terminal1: '仁川空港 第1ターミナル', terminal2: '仁川空港 第2ターミナル',
    terminal1Copy: '公共到着エリアに出たら、空港鉄道 / AREXの案内に従ってください。T-moneyが必要な場合は、空港のコンビニまたは公式交通施設を確認してください。',
    terminal2Copy: '第2ターミナルもAREXに直接接続しています。到着エリアを出た後、空港鉄道の案内に従ってください。交通カードの購入・チャージには余裕を見てください。',
    terminalNotice: '空港内の店舗、運賃、運行情報は変更される場合があります。出発前に空港表示と公式交通情報で必ず確認してください。',
    tmoneyKicker: 'T-MONEY', tmoneyTitle: 'T-moneyは必要？', tmoneyCopy: 'T-moneyはソウルの地下鉄とバスで便利です。到着後に公共交通を使う予定なら、ソウルへ向かう前に準備しておくと便利です。',
    tmoneyList: ['ソウルの地下鉄とバスで使える', '毎回個別のきっぷを買う手間を減らせる', 'チャージ用に少額の韓国ウォン現金を用意する'],
    tmoneyGuide: '外国人向けT-moneyガイド', airportGuide: '仁川空港 T1/T2 ガイド',
    exitKicker: '目的地の駅', exitTitle: 'どの出口を使う？', afterKicker: '到着後', afterTitle: 'このエリアでできること',
    food: 'グルメ', shopping: 'ショッピング', sights: '近くの見どころ', continueKicker: 'KOREA EASY', continueTitle: 'ソウル旅行を続けて計画', mainGuide: '韓国旅行メインガイド', explorer: 'ソウル探索', airportToSeoul: '空港からソウルへ',
    footer: '© 2026 KOREA EASY · 個人旅行者向けガイド。所要時間、運賃、出口、店舗情報は変更される場合があります。', recommended: 'おすすめ', arex: 'AREX + 地下鉄', bus: '空港バス', taxi: 'タクシー', best: 'バランスがよい', easyLuggage: '荷物が多くても楽', convenient: 'もっとも便利', sourceNote: '路線、運賃、ホーム情報は変わる場合があります。出発前に空港・交通機関の公式情報を確認してください。'
  },
  zh: {
    back: '← 返回主指南', eyebrow: '首尔机场交通指南 · 2026',
    summaryLabels: ['最快实用方式', '预计时间', '推荐交通卡', '目的地车站'],
    routeKicker: '推荐路线', routeLead: '这通常是首次到访旅客最容易使用的公共交通路线。',
    compareKicker: '交通方式比较', compareTitle: '应选择哪种方式？',
    terminalKicker: '航站楼指南', terminalTitle: '1号航站楼与2号航站楼',
    terminal1: '仁川机场1号航站楼', terminal2: '仁川机场2号航站楼',
    terminal1Copy: '进入公共到达区后，请按机场铁路 / AREX 指示前进。如需T-money卡，请查看机场便利店或官方交通设施。',
    terminal2Copy: '2号航站楼也直接连接AREX。离开到达区后请按机场铁路指示前进；如需购买或充值交通卡，请预留额外时间。',
    terminalNotice: '机场商店、票价和运营详情可能变动。出行前请始终通过机场标识和官方交通信息确认。',
    tmoneyKicker: 'T-MONEY', tmoneyTitle: '需要T-money吗？', tmoneyCopy: 'T-money适用于首尔地铁和巴士。如计划抵达后乘坐公共交通，前往首尔前准备一张会更方便。',
    tmoneyList: ['可用于首尔地铁和巴士', '减少反复购买单程票的需要', '请准备少量韩元现金用于充值'],
    tmoneyGuide: '外国人T-money指南', airportGuide: '仁川机场 T1/T2 指南',
    exitKicker: '目的地车站', exitTitle: '应该使用哪个出口？', afterKicker: '抵达后', afterTitle: '这里可以做什么？',
    food: '美食', shopping: '购物', sights: '附近景点', continueKicker: 'KOREA EASY', continueTitle: '继续规划您的首尔之旅', mainGuide: '韩国旅行主指南', explorer: '首尔探索', airportToSeoul: '机场前往首尔',
    footer: '© 2026 KOREA EASY · 独立旅行者指南。交通时间、票价、出口和商店信息可能变动。', recommended: '推荐', arex: 'AREX + 地铁', bus: '机场巴士', taxi: '出租车', best: '平衡最佳', easyLuggage: '携带行李更方便', convenient: '最方便', sourceNote: '路线、票价和站台详情可能变动。出发前请查询机场和交通官方信息。'
  }
};

const ROUTE = {
  gangnam: {
    en:{title:'Incheon Airport<br>to Gangnam',lead:'The easiest ways to travel from Incheon International Airport Terminal 1 or Terminal 2 to Gangnam in southern Seoul. Compare AREX, subway and taxi, then check T-money, travel time and useful station exits.',summary:['AREX + Subway','About 80–100 min','T-money','Line 4'],summaryCopy:['Airport → Seoul Station → Sadang → Gangnam','Depends on terminal, waiting and transfer time','Useful for subway, bus and many local trips','Exit 10 or 11 depends on your destination'],steps:[['Arrive at T1 or T2','Finish immigration, baggage claim and customs.'],['Take AREX','Follow Airport Railroad / AREX signs toward Seoul Station.'],['Transfer at Seoul Station','Take Line 4 toward Sadang, then transfer to Line 2 toward Gangnam.'],['Arrive at Gangnam','Check your hotel or destination before choosing the exit.']],compare:[['Good for most solo travelers and couples with manageable luggage.',['Usually the most predictable','Avoids much of Seoul road traffic','Reliable subway connection to Gangnam']],['Convenient if the bus stop is close to your hotel.',['Less walking with large luggage','No subway transfer in many cases','Travel time depends on traffic']],['Useful for families, several suitcases, late-night arrivals or door-to-door travel.',['Direct to hotel','Higher cost','Tolls and traffic may affect final fare']]],station:'Gangnam Station',exits:[['Exit 10','Useful for the Gangnam-daero business and shopping area.'],['Exit 11','Useful for restaurants, cafes and shopping streets around Gangnam Station.']],exitNotice:'The best exit depends on your exact hotel or destination. Check the map before leaving the station, especially if you have luggage.',after:[['Korean BBQ, restaurants, cafes and international dining.','Fashion, beauty, underground shopping and major retail areas.','COEX, Starfield Library, Bongeunsa and southern Seoul attractions are within easy reach.']]},
    ja:{title:'仁川空港から<br>江南へ',lead:'仁川国際空港の第1・第2ターミナルからソウル南部の江南へ向かうわかりやすい方法です。AREX、地下鉄、タクシーを比較し、T-money、所要時間、便利な駅出口を確認できます。',summary:['AREX + 地下鉄','約80～100分','T-money','4号線'],summaryCopy:['空港 → ソウル駅 → 舎堂 → 江南','ターミナル、待ち時間、乗換時間で変動','地下鉄、バス、多くの市内移動で便利','目的地により出口10・11が便利'],steps:[['T1またはT2に到着','入国審査、荷物受取、税関を終えます。'],['AREXに乗車','ソウル駅方面の空港鉄道 / AREX案内に従います。'],['ソウル駅で乗換','舎堂方面の4号線に乗り、2号線江南方面へ乗り換えます。'],['江南に到着','出口を選ぶ前にホテルや目的地を確認します。']],compare:[['荷物が多すぎない一人旅・二人旅に向いています。',['通常もっとも予測しやすい','ソウルの道路渋滞をある程度避けられる','江南への地下鉄接続が安定']],['ホテルの近くにバス停があれば便利です。',['大きな荷物で歩く距離が少ない','多くの場合は地下鉄乗換なし','道路状況で所要時間が変動']],['家族、複数のスーツケース、深夜到着、ドアツードア移動に便利です。',['ホテルまで直行','費用は高め','通行料・渋滞で最終料金が変動']]],station:'江南駅',exits:[['出口10','江南大路のビジネス・ショッピングエリアに便利です。'],['出口11','江南駅周辺のレストラン、カフェ、買い物通りに便利です。']],exitNotice:'最適な出口はホテルや目的地で異なります。荷物がある場合は特に、駅を出る前に地図で確認してください。',after:[['韓国焼肉、レストラン、カフェ、各国料理。','ファッション、美容、地下商店街、大型小売エリア。','COEX、ピョルマダン図書館、奉恩寺、ソウル南部の観光地が近くにあります。']]},
    zh:{title:'仁川机场<br>前往江南',lead:'从仁川国际机场1号或2号航站楼前往首尔南部江南的便捷方式。比较AREX、地铁和出租车，并查看T-money、预计时间和实用车站出口。',summary:['AREX + 地铁','约80–100分钟','T-money','4号线'],summaryCopy:['机场 → 首尔站 → 舍堂 → 江南','因航站楼、等待和换乘时间而异','适用于地铁、巴士和多种市内出行','根据目的地选择10或11号出口'],steps:[['抵达T1或T2','完成入境、行李提取和海关手续。'],['乘坐AREX','按前往首尔站的机场铁路 / AREX 标识前进。'],['在首尔站换乘','乘坐4号线往舍堂方向，再换乘2号线往江南方向。'],['抵达江南','选择出口前请确认酒店或目的地。']],compare:[['适合大多数行李适量的单人旅客和情侣。',['通常最可预测','可避开部分首尔道路拥堵','前往江南的地铁连接可靠']],['若巴士站靠近酒店会很方便。',['携带大件行李步行更少','许多情况下无需换乘地铁','时间受交通影响']],['适合家庭、多个行李箱、深夜抵达或点对点出行。',['直达酒店','费用较高','过路费和堵车可能影响最终车费']]],station:'江南站',exits:[['10号出口','适合江南大路商务和购物区。'],['11号出口','适合江南站周边餐厅、咖啡馆和购物街。']],exitNotice:'最佳出口取决于酒店或具体目的地。特别是携带行李时，请在出站前查看地图。',after:[['韩式烤肉、餐厅、咖啡馆和国际餐饮。','时尚、美妆、地下购物和大型零售区。','COEX、星空图书馆、奉恩寺和首尔南部景点都很近。']]}
  },
  myeongdong: {
    en:{title:'Incheon Airport<br>to Myeongdong',lead:'The easiest ways to travel from Incheon International Airport Terminal 1 or Terminal 2 to Myeongdong in central Seoul. Compare AREX, subway and taxi, then check T-money, travel time and useful station exits.',summary:['AREX + Line 4','About 60–80 min','T-money','Line 4'],summaryCopy:['Airport → Seoul Station → Myeongdong','Depends on terminal, waiting and transfer time','Useful for subway, bus and many local trips','Exit 6, 8 or 9 depends on your destination'],steps:[['Arrive at T1 or T2','Finish immigration, baggage claim and customs.'],['Take AREX','Follow Airport Railroad / AREX signs toward Seoul Station.'],['Transfer at Seoul Station','Change to Seoul Subway Line 4 toward Myeongdong.'],['Arrive at Myeongdong','Check your hotel or destination before choosing the exit.']],compare:[['Good for most solo travelers and couples with manageable luggage.',['Usually the most predictable','Avoids much of Seoul road traffic','Easy connection to Line 4']],['Convenient if the bus stop is close to your hotel.',['Less walking with large luggage','No subway transfer in many cases','Travel time depends on traffic']],['Useful for families, several suitcases, late-night arrivals or door-to-door travel.',['Direct to hotel','Higher cost','Tolls and traffic may affect final fare']]],station:'Myeongdong Station',exits:[['Exit 6','Commonly used for the main Myeongdong shopping area and central streets.'],['Exit 8 / 9','Useful for different hotel, restaurant and shopping directions around Myeongdong.']],exitNotice:'The best exit depends on your exact hotel or destination. Check the map before leaving the station, especially if you have luggage.',after:[['Korean noodles, BBQ, street food, cafes and traditional restaurants.','Beauty stores, fashion, souvenirs and large retail areas.','Namsan, N Seoul Tower, Namdaemun and central Seoul attractions are nearby.']]},
    ja:{title:'仁川空港から<br>明洞へ',lead:'仁川国際空港の第1・第2ターミナルからソウル中心部の明洞へ向かうわかりやすい方法です。AREX、地下鉄、タクシーを比較し、T-money、所要時間、便利な駅出口を確認できます。',summary:['AREX + 4号線','約60～80分','T-money','4号線'],summaryCopy:['空港 → ソウル駅 → 明洞','ターミナル、待ち時間、乗換時間で変動','地下鉄、バス、多くの市内移動で便利','目的地により出口6・8・9が便利'],steps:[['T1またはT2に到着','入国審査、荷物受取、税関を終えます。'],['AREXに乗車','ソウル駅方面の空港鉄道 / AREX案内に従います。'],['ソウル駅で乗換','明洞方面のソウル地下鉄4号線へ乗り換えます。'],['明洞に到着','出口を選ぶ前にホテルや目的地を確認します。']],compare:[['荷物が多すぎない一人旅・二人旅に向いています。',['通常もっとも予測しやすい','ソウルの道路渋滞をある程度避けられる','4号線への乗換がわかりやすい']],['ホテルの近くにバス停があれば便利です。',['大きな荷物で歩く距離が少ない','多くの場合は地下鉄乗換なし','道路状況で所要時間が変動']],['家族、複数のスーツケース、深夜到着、ドアツードア移動に便利です。',['ホテルまで直行','費用は高め','通行料・渋滞で最終料金が変動']]],station:'明洞駅',exits:[['出口6','明洞メインショッピングエリアと中心街に便利です。'],['出口8 / 9','明洞周辺のホテル、レストラン、買い物方面に便利です。']],exitNotice:'最適な出口はホテルや目的地で異なります。荷物がある場合は特に、駅を出る前に地図で確認してください。',after:[['韓国麺料理、焼肉、屋台グルメ、カフェ、伝統料理。','コスメ店、ファッション、土産物、大型小売エリア。','南山、Nソウルタワー、南大門、ソウル中心部の観光地が近くにあります。']]},
    zh:{title:'仁川机场<br>前往明洞',lead:'从仁川国际机场1号或2号航站楼前往首尔市中心明洞的便捷方式。比较AREX、地铁和出租车，并查看T-money、预计时间和实用车站出口。',summary:['AREX + 4号线','约60–80分钟','T-money','4号线'],summaryCopy:['机场 → 首尔站 → 明洞','因航站楼、等待和换乘时间而异','适用于地铁、巴士和多种市内出行','根据目的地选择6、8或9号出口'],steps:[['抵达T1或T2','完成入境、行李提取和海关手续。'],['乘坐AREX','按前往首尔站的机场铁路 / AREX 标识前进。'],['在首尔站换乘','换乘首尔地铁4号线前往明洞。'],['抵达明洞','选择出口前请确认酒店或目的地。']],compare:[['适合大多数行李适量的单人旅客和情侣。',['通常最可预测','可避开部分首尔道路拥堵','可方便换乘4号线']],['若巴士站靠近酒店会很方便。',['携带大件行李步行更少','许多情况下无需换乘地铁','时间受交通影响']],['适合家庭、多个行李箱、深夜抵达或点对点出行。',['直达酒店','费用较高','过路费和堵车可能影响最终车费']]],station:'明洞站',exits:[['6号出口','适合明洞主要购物区和中心街道。'],['8 / 9号出口','适合明洞周边不同方向的酒店、餐厅和购物区域。']],exitNotice:'最佳出口取决于酒店或具体目的地。特别是携带行李时，请在出站前查看地图。',after:[['韩式面食、烤肉、街头小吃、咖啡馆和传统餐厅。','美妆店、时尚、纪念品和大型零售区。','南山、N首尔塔、南大门和首尔市中心景点都很近。']]}
  }
};

function transferPage(routeName){
  const root=document.getElementById('app'); if(!root)return;
  let lang=localStorage.getItem('airportTransferLang')||'en'; const route=ROUTE[routeName];
  function list(items){return `<ul>${items.map(item=>`<li>${item}</li>`).join('')}</ul>`}
  function render(){const l=AIRPORT_LANG[lang],r=route[lang];document.documentElement.lang=lang==='zh'?'zh-CN':lang;document.querySelectorAll('.pageLang button').forEach(button=>button.classList.toggle('on',button.dataset.lang===lang));root.innerHTML=`
    <header><nav class="wrap"><a class="brand" href="/">KOREA <span>EASY</span></a><div class="navRight"><a class="back" href="/">${l.back}</a><div class="pageLang"><button data-lang="en">EN</button><button data-lang="ja">日本語</button><button data-lang="zh">中文</button></div></div></nav></header>
    <main><section class="hero wrap"><div class="eyebrow">${l.eyebrow}</div><h1>${r.title}</h1><p class="lead">${r.lead}</p><div class="summary">${r.summary.map((value,index)=>`<div class="card"><div class="label">${l.summaryLabels[index]}</div><div class="big">${value}</div><div class="muted">${r.summaryCopy[index]}</div></div>`).join('')}</div></section>
    <section class="dark"><div class="wrap"><div class="eyebrow">${l.routeKicker}</div><h2>${l.arex}</h2><p class="muted">${l.routeLead}</p><div class="route">${r.steps.map((step,index)=>`<div class="card step"><div class="num">${index+1}</div><h3>${step[0]}</h3><div class="muted">${step[1]}</div></div>`).join('')}</div></div></section>
    <section class="wrap"><div class="eyebrow">${l.compareKicker}</div><h2>${l.compareTitle}</h2><div class="compare">${r.compare.map((item,index)=>`<div class="card ${index===0?'best':''}">${index===0?`<span class="pill">${l.recommended}</span>`:''}<h3>${[l.arex,l.bus,l.taxi][index]}</h3><div class="price">${[l.best,l.easyLuggage,l.convenient][index]}</div><div class="muted">${item[0]}</div>${list(item[1])}</div>`).join('')}</div></section>
    <section class="wrap"><div class="eyebrow">${l.terminalKicker}</div><h2>${l.terminalTitle}</h2><div class="info"><div class="card"><h3>${l.terminal1}</h3><p class="muted">${l.terminal1Copy}</p></div><div class="card"><h3>${l.terminal2}</h3><p class="muted">${l.terminal2Copy}</p></div></div><div class="notice">${l.terminalNotice}</div></section>
    <section class="wrap"><div class="eyebrow">${l.tmoneyKicker}</div><h2>${l.tmoneyTitle}</h2><div class="card"><p>${l.tmoneyCopy}</p>${list(l.tmoneyList)}<div class="links"><a class="btn primary" href="/tmoney-guide-foreigners.html">${l.tmoneyGuide}</a><a class="btn" href="/incheon-airport-to-seoul.html">${l.airportGuide}</a></div></div></section>
    <section class="wrap"><div class="eyebrow">${l.exitKicker} · ${r.station}</div><h2>${l.exitTitle}</h2><div class="info">${r.exits.map(exit=>`<div class="card"><h3>${exit[0]}</h3><div class="muted">${exit[1]}</div></div>`).join('')}</div><div class="notice">${r.exitNotice}</div></section>
    <section class="wrap"><div class="eyebrow">${l.afterKicker}</div><h2>${l.afterTitle}</h2><div class="compare">${r.after[0].map((text,index)=>`<div class="card"><h3>${[l.food,l.shopping,l.sights][index]}</h3><div class="muted">${text}</div></div>`).join('')}</div></section>
    <section class="dark"><div class="wrap"><div class="eyebrow">${l.continueKicker}</div><h2>${l.continueTitle}</h2><div class="links"><a class="btn" href="/">${l.mainGuide}</a><a class="btn" href="/seoul-explorer.html">${l.explorer}</a><a class="btn" href="/tmoney-guide-foreigners.html">${l.tmoneyGuide}</a><a class="btn" href="/incheon-airport-to-seoul.html">${l.airportToSeoul}</a></div></div></section></main>
    <footer><div class="wrap">${l.footer}<br><span>${l.sourceNote}</span></div></footer>`;
    root.querySelectorAll('.pageLang button').forEach(button=>button.addEventListener('click',()=>{lang=button.dataset.lang;localStorage.setItem('airportTransferLang',lang);render()}));
  }
  render();
}
