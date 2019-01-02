/**
  随机获取名言.

  author:prd.
  version:2016.7.22
  note:名言均来自[一个](https://www.wufazhuce.com)

  使用示例(关于使用的调用,请参考最底部的函数.):
        1.先引入本js.
        2.在想使用的地方,调用getMingYan()函数即可获取名言.[getMingYanHref()获取可以跳转至One的名言,getMingYanContent():只获取名言内容]
        3.名言中存储为json数据,index对应One的每一期号,content是名言.
        4.请尊重版权,在展示名言的同时,可将名言链接至One.例如:<a href="https://wufazhuce.com/one/14">是狼是人，日久见心。</br> - </br>小饭</a>其中的14为期号.
*/
var mingyan=new Array();
mingyan.push("{'index':1165,'content':'失眠就像是，一个无人认领的梦，一段言无所向的人生，和一场明知故犯的恋情。你不愿这些发生，但你也清楚这些早晚要发生，就像终于盼来了困意，却也迎来了黎明。</br> - </br>郑执'}");
mingyan.push("{'index':1068,'content':'天青色等烟雨，而我在等你。</br> - </br>方文山'}");
mingyan.push("{'index':449,'content':'世上只有一种真正的英雄主义，那就是认清生活的真相后依然热爱生活。</br> - </br>罗曼·罗兰'}");
mingyan.push("{'index':717,'content':'所有的悲伤，总会留下一丝欢乐的线索。所有的遗憾，总会留下一处完美的角落。我在冰封的深海，找寻希望的缺口。却在午夜惊醒时，蓦然瞥见绝美的月光。</br> - </br>《缺口》'}");
mingyan.push("{'index':1048,'content':'我要一步一步往上爬，在最高点乘着叶片往前飞。小小的天留过的泪和汗，总有一天我有属于我的天。 </br> - </br>周杰伦《蜗牛》'}");
mingyan.push("{'index':235,'content':'很多事不用问值不值得，只用问，它对你来说，是不是有如珍宝。</br> - </br>柴静'}");
mingyan.push("{'index':1299,'content':'很想打一个不说话的电话，只要你在电话那端，我可以枕着电话筒就好。 </br> - </br>《蒙马特遗书》'}");
mingyan.push("{'index':1064,'content':'这个世界上，从来就没有最好的，只有最合适的。比如云朵和天空，微风和草地，比如我眼中的你，以及，你眼中的我。 </br> - </br>烟波人长安《我有个恋爱想和你谈下》'}");
mingyan.push("{'index':1239,'content':'改变是为了更好地陪伴。 </br> - </br>韩寒'}");
mingyan.push("{'index':755,'content':'这世界只有一种乡愁，是你不在身边的时候。 </br> - </br>my little airport'}");
mingyan.push("{'index':739,'content':'恋爱的纪念物，从来就不是那些你送给我的手表和项链，甚至也不是那些甜蜜的短信和合照。恋爱最珍贵的纪念物，是你留在我身上的，如同河川留给地形的，那些你对我造成的改变。</br> - </br>蔡康永'}");
mingyan.push("{'index':109,'content':'世间所有的相遇，都是久别重逢。</br> - </br>《一代宗师》'}");
mingyan.push("{'index':593,'content':'你是我温暖的手套，冰冷的啤酒，带着阳光味道的衬衫，日复一日的梦想。</br> - </br>《恋爱的犀牛》'}");
mingyan.push("{'index':1194,'content':'我们曾如此渴望命运的波澜，到最后才发现，人生最曼妙的风景，竟是内心的淡定与从容。</br> - </br>网络'}");
mingyan.push("{'index':1286,'content':'如果你过得不幸福，我所做的一切才是徒劳。 </br> - </br>东野圭吾'}");
mingyan.push("{'index':629,'content':'我可以接受失败，但绝不能接受未奋斗过的自己。</br> - </br>宫崎骏'}");
mingyan.push("{'index':224,'content':'我们的小缺点让我们找到对的人。</br> - </br>《心灵捕手》'}");
mingyan.push("{'index':534,'content':'听到一些事，明明不相干的，也会在心中拐好几个弯，想到你。</br> - </br>张爱玲'}");
mingyan.push("{'index':579,'content':'像一朵向日葵，在夜里默默地坚持，一直爱着你，用我自己的方式。</br> - </br>蓝又时《孤单心事》'}");
mingyan.push("{'index':826,'content':'愿生活可以如诗般自由，吃想吃的饭，见想见的人，看喜欢的风景，做可以做的事。心不老，有人一起胡闹，你还在，我依然。</br> - </br>张皓宸'}");
mingyan.push("{'index':425,'content':'我们领教了世界是何等凶顽，同时又得知世界也可以变得温存和美好。 </br> - </br>村上春树'}");
mingyan.push("{'index':1102,'content':'你知道吗？如果我明天就死掉的话，我会因为今天见到你，而觉得无憾。</br> - </br>《不再让你孤单》'}");
mingyan.push("{'index':572,'content':'在这不长的生命中可以遇见一个闪闪发光的人，是多好的事吧，就算你们没有在一起，也至少把他当成信仰一般遥远地爱过，这青春就无悔了吧。</br> - </br>张皓宸'}");
mingyan.push("{'index':92,'content':'无所谓从哪儿来，也无所谓到哪儿去。 为活着找个理由，只为更好的活着。From 史铁生《命若琴弦》'}");
mingyan.push("{'index':1093,'content':'后来我把很多人都称作老师，但是像你一样担心我的，没有一个。 </br> - </br>乌冬'}");
mingyan.push("{'index':305,'content':'挫折，是老天在帮你规划更长远的东西，只是现在还不能告诉你。</br> - </br>周杰伦'}");
mingyan.push("{'index':33,'content':'很多人可以走进你的生活，很少人可以走进你的生命。</br> - </br>朱威廉'}");
mingyan.push("{'index':892,'content':'还记得你说世界美好事情真的特别多，只是很容易擦肩而过。</br> - </br>《吟游诗人》'}");
mingyan.push("{'index':415,'content':'通常百年也难出一个伽利略或爱因斯坦，凡夫俗子最好安分点，别老想吃天鹅肉。</br> - </br>阿瑟·克拉克'}");
mingyan.push("{'index':251,'content':'在我小时候，我极力装得像个大人，当我已经不再是小孩的时候，我又希望像个孩子。</br> - </br>列夫·托尔斯泰'}");
mingyan.push("{'index':1224,'content':'“爱情”的定义，简单到不能再简单——只要在一起就好。附加的形容词越多，离它的本意就越远。</br> - </br>灰鸽'}");
mingyan.push("{'index':1010,'content':'夏天要是一直这样就好了，一会儿梨花带雨，一会儿晚来风急，空气濡湿清洌，一头撞进风里像撞进什么人怀里。 </br> - </br>郭大侠'}");
mingyan.push("{'index':549,'content':'就这样我慢慢等待，等待你的身影破雾走来。 </br> - </br>安德雷森'}");
mingyan.push("{'index':372,'content':'时间一天天过去，好像什么都没变，但当你某天回首，却发现一切怎么都不同了。</br> - </br>《生活大爆炸》'}");
mingyan.push("{'index':1278,'content':'我们以为，惊喜是刻意制造的浪漫，但很多时候，惊喜可能只是一个温暖的小发现。惊喜就是，你用你独有的方式，爱着我。 </br> - </br>咪蒙'}");
mingyan.push("{'index':462,'content':'如果我们不争取，如果我们不配拥有未来，我们就得永远活在现状。或者更糟，得活在过去。我想爱的用意大概就在这里，爱是争取未来的方式。 </br> - </br>格里高利·大卫·罗伯兹'}");
mingyan.push("{'index':693,'content':'时间是熟睡的脸，说着梦的语言。我小心地翻译着一字一句，原来它说，重复地说，是爱你让我的时间停留，停留。</br> - </br>陈绮贞《时间的歌》'}");
mingyan.push("{'index':247,'content':'从前的日色变得慢。车，马，邮件都慢。一生只够爱一个人。</br> - </br>木心'}");
mingyan.push("{'index':766,'content':'为了一个不知能否实现的愿望，人有时会豁出一辈子的。笑其愚蠢的人，毕竟只是人生中的过客而已。</br> - </br>芥川龙之介'}");
mingyan.push("{'index':702,'content':'多活十年又如何。你最多能比别人多活80或90岁那十年。不能多活20岁这十年。</br> - </br>三坨土'}");
mingyan.push("{'index':1021,'content':'最美的不是下雨天，是曾与你躲过雨的屋檐。</br> - </br>方文山'}");
mingyan.push("{'index':893,'content':'你在我身边也好，在天边也罢，想到世界的角落有一个你，觉得整个世界也变得温柔安定了。</br> - </br>琦殿'}");
mingyan.push("{'index':538,'content':'当一个人爱着你，他说你名字的方式都跟别人不一样。你知道你的名字放在他嘴里是最安全的。</br> - </br>比利'}");
mingyan.push("{'index':503,'content':'我今天才知道，我之所以漂泊就是在向你靠近。</br> - </br>《廊桥遗梦》'}");
mingyan.push("{'index':482,'content':'等待亦是约会的一部分。</br> - </br>古贺春华'}");
mingyan.push("{'index':1357,'content':'世界没有悲剧和喜剧之分，如果你能从悲剧中走出来，那就是喜剧；如果你沉缅于喜剧之中，那它就是悲剧。 </br> - </br>上德若谷'}");
mingyan.push("{'index':1233,'content':'明知分离苦，相遇也难挡得住。难在不愿放弃遇见，难在没有勇气道别，这就是人生。</br> - </br>符嘉超'}");
mingyan.push("{'index':610,'content':'你爱上一个人的那个瞬间，是会永远永远留在心里的，这瞬间，便是生活的勇气，便是黑夜里点亮的一盏明灯。</br> - </br>《东京爱情故事》'}");
mingyan.push("{'index':769,'content':'人不应该是插在花瓶里供人观赏的静物，而是蔓延在草原上随风起舞的韵律。生命不是安排，而是追求，人生的意义也许永远没有答案，但也要尽情感受这种没有答案的人生。</br> - </br>弗吉尼亚·伍尔芙'}");
mingyan.push("{'index':842,'content':'你在乎谁，你说了算。谁在乎你，你说了不算，时间说了算。</br> - </br>郑执'}");

/**
    随机获取名言.

    直接调用此函数即可.
*/
function getMingYan(){
  return (mingyan[parseInt(Math.random()*(mingyan.length-1)+1)]);
}

/*
  获取名言,并链接至One.
*/
function getMingYanHref(){
  var item = getItem();
  return "<a href='https://wufazhuce.com/one/"+item.index+"' target='_blank'>"+item.content+"</a>";
}

function getItem(){
  return eval('(' +(mingyan[parseInt(Math.random()*(mingyan.length-1)+1)])+ ')');
}

/*
  只获取内容.
*/
function getMingYanContent(){
  var item = getItem();
  return item['content'];
}