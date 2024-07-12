// poem
var words=[
  '日落跌入昭招星野',
  '人间忽晚',
  '山河已秋',
  '青山有思',
  '白鹤忘机',
  '海风碧云',
  '夜渚月明',
  '山有扶苏',
  '隰有荷华',
  '愿如风有信',
  '长与日俱中',
  '落絮残莺半日天',
  '玉柔花醉只思眠',
  '惹窗映竹满炉烟',
  '云中谁寄锦书来',
  '雁字回时',
  '月满西楼',
  '我见青山多妩媚',
  '料青山见我也应如是',
  '醉后不知天在水',
  '满船清梦压星河',
  '三笑徒然当一痴',
  '人生若只如初见',
  '我余光中都是你',
  '人生自是有情痴',
  '此恨不关风与月',
  '因为你，我多少适应了这个世界',
  '寒窗对酒听雨雪',
  '夏簟烹茶卧风月',
  '今夜何夕',
  '见此良人',
  '愿我如星君如月',
  '夜夜流光相皎洁',
  '浮生暂寄梦中梦',
  '世事如闻风里风',
  '楼头残梦五更钟',
  '花底离愁三月雨',
  '吾与春风告过客',
  '君携秋水揽星河',
  '云想衣裳花想容',
  '春风拂槛露华浓',
  '休言半纸无多重',
  '万斛离愁尽耐担',
  '夜月一帘幽梦',
  '和光同尘',
  '杳霭流玉',
  '月落星沉',
  '霞姿月韵',
  '喜上眉梢',
  '醉后不知天在水',
  '满船星梦压星河',
  '落花人独立',
  '微雨燕双飞',
  '掬水月在手',
  '弄花香满衣',
  '夜深忽梦少年事',
  '唯梦闲人不梦君',
  '垆边人似月',
  '皓腕凝霜雪',
  '众里嫣然通一顾',
  '人间颜色如尘土',
  '若非群玉山头见',
  '会向瑶台月下逢',
  '竹萌触雪',
  '粟花缀柯',
  '气宇秋潭月',
  '文章阆苑春'
  /*
    '伤心桥下春波绿',
    '曾是惊鸿照影来',
    '当年明月在',
    '曾照彩云归',
    '归去来兮',
    '真堪偕隐',
    '画船听雨眠',
    '愿为江水',
    '与君重逢',
    '一日不见兮',
    '思之若狂',
    '好想回到那个夏天',
    '趴在桌子上偷偷看你',
    '偷偷表白一个叫dmz的女孩',
    '你曾是我灰色人生中的一道彩虹',
    '柳絮空缱绻',
    '南风知不知',
    '我见青山多妩媚',
    '料青山见我也应如是',
    '取次花丛懒回顾',
    '半缘修道半缘君',
    '三笑徒然当一痴',
    '人生若只如初见',
    '我余光中都是你',
    '人生自是有情痴',
    '此恨不关风与月',
    '因为你，我多少适应了这个世界',
    '春蚕到死丝方尽',
    '蜡炬成灰泪始干',
    '今夜何夕',
    '见此良人',
    '愿我如星君如月',
    '夜夜流光相皎洁',
    '情不所起',
    '一往而深',
    '玲珑骰子安红豆',
    '入骨相思知不知',
    '多情只有春庭月',
    '尤为离人照落花',
    '若有知音见采',
    '不辞唱遍阳春',
    '休言半纸无多重',
    '万斛离愁尽耐担',
    '夜月一帘幽梦',
    '和光同尘',
    '杳霭流玉',
    '月落星沉',
    '霞姿月韵',
    '喜上眉梢',
    '醉后不知天在水',
    '满船星梦压星河',
    '落花人独立',
    '微雨燕双飞',
    '掬水月在手',
    '弄花香满衣',
    '夜深忽梦少年事',
    '唯梦闲人不梦君',
    '垆边人似月',
    '皓腕凝霜雪',
    '众里嫣然通一顾',
    '人间颜色如尘土',
    '若非群玉山头见',
    '会向瑶台月下逢',
    '沉鱼落雁鸟惊喧',
    '羞花闭月花愁颤',
    '解释春风无限恨',
    '沉香亭北倚阑干'*/
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '今晚，整片星空将为你一人闪烁';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
          textthree.innerHTML = '';
      },10000)
      setTimeout(function(){
        textone.innerHTML = '竹萌触雪，粟花缀柯';
        texttwo.innerHTML = '';
        textthree.innerHTML = '';
      },15000)

      setTimeout(function(){
        textone.innerHTML = '你好！ 我叫王珂萌';
        texttwo.innerHTML = '             可萌可萌了';
        textthree.innerHTML = '';
      },20000)
      
      setTimeout(function(){
        textone.innerHTML = '小腿儿一蹬 与世无争';
        texttwo.innerHTML = '小脚一摊 认真摆烂';
        textthree.innerHTML = '';
      },25000)

      setTimeout(function(){
        textone.innerHTML = '横批：开心最重要';
        texttwo.innerHTML = '';
        textthree.innerHTML = '';
      },30000)
      setTimeout(function(){
        textone.innerHTML = '气宇秋潭月，文章阆苑春';
        texttwo.innerHTML = '';
        textthree.innerHTML = '';
      },35000)
      
      setTimeout(function(){
        textone.innerHTML = '你好！ 我叫刘章宇';
        texttwo.innerHTML = '       很高兴认识你';
        textthree.innerHTML = '';
      },40000)

      setTimeout(function(){
        textone.innerHTML = '吾与春风告过客';
        texttwo.innerHTML = '君携秋水揽星河';
        textthree.innerHTML = '';
      },45000)

      setTimeout(function(){
        textone.innerHTML = '雪沫乳花浮午盏，蓼茸蒿笋试春盘';
        texttwo.innerHTML = '人间有味是清欢';
        textthree.innerHTML = '';
      },50000)



      setTimeout(function(){
        textone.innerHTML = '江南又梦烟雨 长河流入故里';
        texttwo.innerHTML = '炊烟漫漫渡过百川千万里';
        textthree.innerHTML = '我听着笙笛曲 人间清欢可期';
      },100000)
      /*
      setTimeout(function(){
        textone.innerHTML = '小腿儿一蹬 与世无争';
        texttwo.innerHTML = '小脚一摊 认真摆烂';
        textthree.innerHTML = '';
      },28000)*/


 
