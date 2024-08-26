import { ExamI } from '@/interfaces';

export const hiraganaExam: ExamI = {
  tries: 3,
  questions: [
    {
      title: 'あ',
      options: ['a', 'i', 'u', 'o'],
      correctIndex: 0,
    },
    {
      title: 'い',
      options: ['u', 'i', 'e', 'ki'],
      correctIndex: 1,
    },
    {
      title: 'う',
      options: ['a', 'u', 'e', 'fu'],
      correctIndex: 1,
    },
    {
      title: 'え',
      options: ['su', 'ro', 'e', 'ni'],
      correctIndex: 2,
    },
    {
      title: 'お',
      options: ['a', 'o', 'wa', 'no'],
      correctIndex: 1,
    },
    {
      title: 'か',
      options: ['a', 'su', 'o', 'ka'],
      correctIndex: 3,
    },
    {
      title: 'き',
      options: ['ki', 'sa', 'chi', 'i'],
      correctIndex: 0,
    },
    {
      title: 'く',
      options: ['ko', 'ku', 'a', 'to'],
      correctIndex: 1,
    },
    {
      title: 'け',
      options: ['ka', 'ki', 'ku', 'ke'],
      correctIndex: 3,
    },
    {
      title: 'こ',
      options: ['ki', 'ko', 'so', 'o'],
      correctIndex: 1,
    },
    {
      title: 'さ',
      options: ['shi', 'sa', 'su', 'se'],
      correctIndex: 1,
    },
    {
      title: 'し',
      options: ['shi', 'so', 'sa', 'su'],
      correctIndex: 0,
    },
    {
      title: 'す',
      options: ['sa', 'su', 'so', 'shi'],
      correctIndex: 1,
    },
    {
      title: 'せ',
      options: ['se', 'shi', 'sa', 'so'],
      correctIndex: 0,
    },
    {
      title: 'そ',
      options: ['so', 'su', 'shi', 'se'],
      correctIndex: 0,
    },
    {
      title: 'た',
      options: ['ta', 'chi', 'te', 'to'],
      correctIndex: 0,
    },
    {
      title: 'ち',
      options: ['chi', 'ta', 'tsu', 'te'],
      correctIndex: 0,
    },
    {
      title: 'つ',
      options: ['te', 'to', 'tsu', 'ta'],
      correctIndex: 2,
    },
    {
      title: 'て',
      options: ['to', 'te', 'ta', 'chi'],
      correctIndex: 1,
    },
    {
      title: 'と',
      options: ['to', 'tsu', 'te', 'ta'],
      correctIndex: 0,
    },
    {
      title: 'な',
      options: ['na', 'ni', 'nu', 'ne'],
      correctIndex: 0,
    },
    {
      title: 'に',
      options: ['ne', 'ni', 'nu', 'no'],
      correctIndex: 1,
    },
    {
      title: 'ぬ',
      options: ['na', 'no', 'nu', 'ne'],
      correctIndex: 2,
    },
    {
      title: 'ね',
      options: ['no', 'na', 'ne', 'ni'],
      correctIndex: 2,
    },
    {
      title: 'の',
      options: ['no', 'nu', 'ni', 'ne'],
      correctIndex: 0,
    },
    {
      title: 'は',
      options: ['ha', 'hi', 'fu', 'ho'],
      correctIndex: 0,
    },
    {
      title: 'ひ',
      options: ['ho', 'hi', 'ha', 'fu'],
      correctIndex: 1,
    },
    {
      title: 'ふ',
      options: ['fu', 'he', 'ho', 'hi'],
      correctIndex: 0,
    },
    {
      title: 'へ',
      options: ['ho', 'he', 'ha', 'fu'],
      correctIndex: 1,
    },
    {
      title: 'ほ',
      options: ['ha', 'ho', 'he', 'fu'],
      correctIndex: 1,
    },
    {
      title: 'ま',
      options: ['ma', 'mi', 'mu', 'me'],
      correctIndex: 0,
    },
    {
      title: 'み',
      options: ['me', 'mi', 'ma', 'mo'],
      correctIndex: 1,
    },
    {
      title: 'む',
      options: ['mu', 'mo', 'ma', 'me'],
      correctIndex: 0,
    },
    {
      title: 'め',
      options: ['mo', 'mu', 'me', 'mi'],
      correctIndex: 2,
    },
    {
      title: 'も',
      options: ['me', 'mo', 'mu', 'ma'],
      correctIndex: 1,
    },
    {
      title: 'や',
      options: ['ya', 'yu', 'yo', 'wa'],
      correctIndex: 0,
    },
    {
      title: 'ゆ',
      options: ['yo', 'yu', 'ya', 'wa'],
      correctIndex: 1,
    },
    {
      title: 'よ',
      options: ['yo', 'ya', 'yu', 'wa'],
      correctIndex: 0,
    },
    {
      title: 'ら',
      options: ['ra', 'ri', 'ru', 're'],
      correctIndex: 0,
    },
    {
      title: 'り',
      options: ['re', 'ri', 'ra', 'ro'],
      correctIndex: 1,
    },
    {
      title: 'る',
      options: ['ru', 're', 'ro', 'ra'],
      correctIndex: 0,
    },
    {
      title: 'れ',
      options: ['ro', 're', 'ra', 'ri'],
      correctIndex: 1,
    },
    {
      title: 'ろ',
      options: ['ra', 'ro', 'ri', 'ru'],
      correctIndex: 1,
    },
    {
      title: 'わ',
      options: ['wa', 'wo', 'yo', 'yu'],
      correctIndex: 0,
    },
    {
      title: 'を',
      options: ['wo', 'wa', 'yo', 'yu'],
      correctIndex: 0,
    },
    {
      title: 'ん',
      options: ['n', 'wa', 'wo', 'yo'],
      correctIndex: 0,
    },
  ],
};

export const katakanaExam: ExamI = {
  tries: 3,
  questions: [
    {
      title: 'ア',
      options: ['a', 'i', 'u', 'o'],
      correctIndex: 0,
    },
    {
      title: 'イ',
      options: ['u', 'i', 'e', 'ki'],
      correctIndex: 1,
    },
    {
      title: 'ウ',
      options: ['a', 'u', 'e', 'fu'],
      correctIndex: 1,
    },
    {
      title: 'エ',
      options: ['su', 'ro', 'e', 'ni'],
      correctIndex: 2,
    },
    {
      title: 'オ',
      options: ['a', 'o', 'wa', 'no'],
      correctIndex: 1,
    },
    {
      title: 'カ',
      options: ['a', 'su', 'o', 'ka'],
      correctIndex: 3,
    },
    {
      title: 'キ',
      options: ['ki', 'sa', 'chi', 'i'],
      correctIndex: 0,
    },
    {
      title: 'ク',
      options: ['ko', 'ku', 'a', 'to'],
      correctIndex: 1,
    },
    {
      title: 'ケ',
      options: ['ka', 'ki', 'ku', 'ke'],
      correctIndex: 3,
    },
    {
      title: 'コ',
      options: ['ki', 'ko', 'so', 'o'],
      correctIndex: 1,
    },
    {
      title: 'サ',
      options: ['shi', 'sa', 'su', 'se'],
      correctIndex: 1,
    },
    {
      title: 'シ',
      options: ['shi', 'so', 'sa', 'su'],
      correctIndex: 0,
    },
    {
      title: 'ス',
      options: ['sa', 'su', 'so', 'shi'],
      correctIndex: 1,
    },
    {
      title: 'セ',
      options: ['se', 'shi', 'sa', 'so'],
      correctIndex: 0,
    },
    {
      title: 'ソ',
      options: ['so', 'su', 'shi', 'se'],
      correctIndex: 0,
    },
    {
      title: 'タ',
      options: ['ta', 'chi', 'te', 'to'],
      correctIndex: 0,
    },
    {
      title: 'チ',
      options: ['chi', 'ta', 'tsu', 'te'],
      correctIndex: 0,
    },
    {
      title: 'ツ',
      options: ['te', 'to', 'tsu', 'ta'],
      correctIndex: 2,
    },
    {
      title: 'テ',
      options: ['to', 'te', 'ta', 'chi'],
      correctIndex: 1,
    },
    {
      title: 'ト',
      options: ['to', 'tsu', 'te', 'ta'],
      correctIndex: 0,
    },
    {
      title: 'ナ',
      options: ['na', 'ni', 'nu', 'ne'],
      correctIndex: 0,
    },
    {
      title: 'ニ',
      options: ['ne', 'ni', 'nu', 'no'],
      correctIndex: 1,
    },
    {
      title: 'ヌ',
      options: ['na', 'no', 'nu', 'ne'],
      correctIndex: 2,
    },
    {
      title: 'ネ',
      options: ['no', 'na', 'ne', 'ni'],
      correctIndex: 2,
    },
    {
      title: 'ノ',
      options: ['no', 'nu', 'ni', 'ne'],
      correctIndex: 0,
    },
    {
      title: 'ハ',
      options: ['ha', 'hi', 'fu', 'ho'],
      correctIndex: 0,
    },
    {
      title: 'ヒ',
      options: ['ho', 'hi', 'ha', 'fu'],
      correctIndex: 1,
    },
    {
      title: 'フ',
      options: ['fu', 'he', 'ho', 'hi'],
      correctIndex: 0,
    },
    {
      title: 'ヘ',
      options: ['ho', 'he', 'ha', 'fu'],
      correctIndex: 1,
    },
    {
      title: 'ホ',
      options: ['ha', 'ho', 'he', 'fu'],
      correctIndex: 1,
    },
    {
      title: 'マ',
      options: ['ma', 'mi', 'mu', 'me'],
      correctIndex: 0,
    },
    {
      title: 'ミ',
      options: ['me', 'mi', 'ma', 'mo'],
      correctIndex: 1,
    },
    {
      title: 'ム',
      options: ['mu', 'mo', 'ma', 'me'],
      correctIndex: 0,
    },
    {
      title: 'メ',
      options: ['mo', 'mu', 'me', 'mi'],
      correctIndex: 2,
    },
    {
      title: 'モ',
      options: ['me', 'mo', 'mu', 'ma'],
      correctIndex: 1,
    },
    {
      title: 'ヤ',
      options: ['ya', 'yu', 'yo', 'wa'],
      correctIndex: 0,
    },
    {
      title: 'ユ',
      options: ['yo', 'yu', 'ya', 'wa'],
      correctIndex: 1,
    },
    {
      title: 'ヨ',
      options: ['yo', 'ya', 'yu', 'wa'],
      correctIndex: 0,
    },
    {
      title: 'ラ',
      options: ['ra', 'ri', 'ru', 're'],
      correctIndex: 0,
    },
    {
      title: 'リ',
      options: ['re', 'ri', 'ra', 'ro'],
      correctIndex: 1,
    },
    {
      title: 'ル',
      options: ['ru', 're', 'ro', 'ra'],
      correctIndex: 0,
    },
    {
      title: 'レ',
      options: ['ro', 're', 'ra', 'ri'],
      correctIndex: 1,
    },
    {
      title: 'ロ',
      options: ['ra', 'ro', 'ri', 'ru'],
      correctIndex: 1,
    },
    {
      title: 'ワ',
      options: ['wa', 'wo', 'yo', 'yu'],
      correctIndex: 0,
    },
    {
      title: 'ヲ',
      options: ['wo', 'wa', 'yo', 'yu'],
      correctIndex: 0,
    },
    {
      title: 'ン',
      options: ['n', 'wa', 'wo', 'yo'],
      correctIndex: 0,
    },
  ],
};

export const EXAM_BY_ID: { [key: string]: ExamI } = {
  katakana: katakanaExam,
  hiragana: hiraganaExam,
};
