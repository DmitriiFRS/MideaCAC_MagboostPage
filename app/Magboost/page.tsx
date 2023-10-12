
import styles  from './Magboost.module.scss';
import V8Video from '../MagboostV8RC/V8Video';
import V8Main from '../MagboostV8RC/V8Main';
import bg1 from '../../public/img/v8magboost/cubesbg1.png'
import bg2 from '../../public/img/v8magboost/cubesbg2.png'
import bg3 from '../../public/img/v8magboost/cubesbg3.png'
import bg4 from '../../public/img/v8magboost/cubesbg4.png'
import v8a1 from '../../public/img/v8magboost/v8 1.png'
import supersence from '../../public/icons/MagboostV8/supersence.svg'
import shieldBox from '../../public/icons/MagboostV8/supersence.svg'
import hyperlink from '../../public/icons/MagboostV8/supersence.svg'
import temp from '../../public/img/v8magboost/temp.png'
import MagboostMain from './Main/MagboostMain';
import MagboostVideo from './MagboostVideo';

const magboost = {
   video: '/video/Magboost-Main-Video.mp4',
   modelStartText: '/img/Innovation/MagboostStart.png',
   previewTitle: ['Midea MagBoost - это прорыв в системах охлаждения, который навсегда изменит ваши', 'представления о надежности и эффективности.',
   'Долговечность: Инновационные технологии и отсутствие трения увеличивают срок службы', 'оборудования и сокращают затраты на обслуживание и ремонт.',
   'Эффективность: Высокая энергоэффективность снижает потребление энергии, позволяя', 'экономить средства.',
   'Компактность: Усовершенствованная конструкция чиллеров и теплообменника обеспечивает', 'их удобное и компактное размещение.',
   'Минимальный шум: благодаря электромагнитной технологии снижается уровень шума.'],
   previewTitleTablet: ['Midea MagBoost - это прорыв в системах охлаждения, который', 'навсегда изменит ваши', 'представления о надежности и эффективности.',
   'Долговечность: Инновационные технологии и отсутствие трения увеличивают срок службы', 'оборудования и сокращают затраты на обслуживание и ремонт.',
   'Эффективность: Высокая энергоэффективность снижает потребление энергии, позволяя', 'экономить средства.',
   'Компактность: Усовершенствованная конструкция чиллеров и теплообменника обеспечивает', 'их удобное и компактное размещение.',
   'Минимальный шум: благодаря электромагнитной технологии снижается уровень шума.'],
   previewTitleMobile: ['Midea MagBoost - это прорыв в системах охлаждения,', 'который навсегда изменит ваши представления о', 'надежности и эффективности.',
   'Долговечность: Инновационные технологии и', 'отсутствие трения увеличивают срок службы', 'оборудования и сокращают затраты на', 'обслуживание и ремонт.',
   'Эффективность: Высокая энергоэффективность', 'снижает потребление энергии, позволяя', 'экономить средства.',
   'Компактность: Усовершенствованная конструкция', 'чиллеров и теплообменника обеспечивает', 'их удобное и компактное размещение.',
   'Минимальный шум: благодаря электромагнитной', 'технологии снижается уровень шума.'],
   titleBlock: [{
      bg: bg1,
      image: v8a1,
      vector: supersence,
      titles: ['Произвольная топология сети для подключения внутренних блоков (традиционная, звезда, петля, древовидная)',
      'Устойчивость к электромагнитным помехам от радиосвязи, высокого напряжения, другого оборудования',
      'Bозможность отключения одного внутреннего блока (режим технического обслуживания)',
      'Электропитания внутренних блоков от отдельных источников энергии']
   },
   {
      bg: bg2,
      image: v8a1,
      vector: shieldBox,
      titles: ['Степень защиты IP55 от влаги, соли, пыли и насекомых', 'Система микроканального охлаждения электронных компонентов хладагентом',
   'Встроенный циркуляционный вентилятор, PTC нагреватель и пять высокоточных температурных датчиков для поддержания постоянной температуры внутри шкафа управления и электроснабжения']
   },
   {
      bg: bg3,
      image: v8a1,
      vector: hyperlink,
      titles: ['19 датчиков в холодильном контуре для анализа состояния в режиме реального времени',
      'В случае отказа физического датчика система создает виртуальный датчик (система Digital twin)',
      'Контроль количества хладагента']
   }],
   titleBlock2: [{
      bg: bg4,
      title: 'Удобство проектирования и соответствие требованием заказчика',
      titles: [{
         title: 'Общая длина труб',
         range: '1100 м'
      },
      {
         title: 'Актуальная длина труб между внутренними и наржуными блоками',
         range: '200 м'
      },
      {
         title: 'Эквивалентная длина труб между внутренними и наржуными блоками',
         range: '260 м'
      },
      {
         title: 'Максимальный перепад по высоте между внутренними и наржуными блоками',
         range: '100 (110) м'
      },
      {
         title: 'Максимальное расстояние между первым разветвителем и последним внутренним блоком',
         range: '90 м'
      },
      {
         title: 'Максимальный перепад по высоте между внутренними блоками',
         range: '40 м'
      },]
   },
   {
      bg: temp,
      title: 'Широкий температурный диапазон'
   }]
}

function VRFv8Page() {
return (
   <section className={styles.magboost}>
      <MagboostVideo video={magboost.video} modelStartText={magboost.modelStartText} />
      <MagboostMain />
   </section>
)
}
export default VRFv8Page;