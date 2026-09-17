const HIRAGANA = [
      {char:'あ', romaji:'a', row:'a', cat:'basic'}, {char:'い', romaji:'i', row:'a', cat:'basic'}, {char:'う', romaji:'u', row:'a', cat:'basic'}, {char:'え', romaji:'e', row:'a', cat:'basic'}, {char:'お', romaji:'o', row:'a', cat:'basic'},
      {char:'か', romaji:'ka', row:'ka', cat:'basic'}, {char:'き', romaji:'ki', row:'ka', cat:'basic'}, {char:'く', romaji:'ku', row:'ka', cat:'basic'}, {char:'け', romaji:'ke', row:'ka', cat:'basic'}, {char:'こ', romaji:'ko', row:'ka', cat:'basic'},
      {char:'さ', romaji:'sa', row:'sa', cat:'basic'}, {char:'し', romaji:'shi', row:'sa', cat:'basic'}, {char:'す', romaji:'su', row:'sa', cat:'basic'}, {char:'せ', romaji:'se', row:'sa', cat:'basic'}, {char:'そ', romaji:'so', row:'sa', cat:'basic'},
      {char:'た', romaji:'ta', row:'ta', cat:'basic'}, {char:'ち', romaji:'chi', row:'ta', cat:'basic'}, {char:'つ', romaji:'tsu', row:'ta', cat:'basic'}, {char:'て', romaji:'te', row:'ta', cat:'basic'}, {char:'と', romaji:'to', row:'ta', cat:'basic'},
      {char:'な', romaji:'na', row:'na', cat:'basic'}, {char:'に', romaji:'ni', row:'na', cat:'basic'}, {char:'ぬ', romaji:'nu', row:'na', cat:'basic'}, {char:'ね', romaji:'ne', row:'na', cat:'basic'}, {char:'の', romaji:'no', row:'na', cat:'basic'},
      {char:'は', romaji:'ha', row:'ha', cat:'basic'}, {char:'ひ', romaji:'hi', row:'ha', cat:'basic'}, {char:'ふ', romaji:'fu', row:'ha', cat:'basic'}, {char:'へ', romaji:'he', row:'ha', cat:'basic'}, {char:'ほ', romaji:'ho', row:'ha', cat:'basic'},
      {char:'ま', romaji:'ma', row:'ma', cat:'basic'}, {char:'み', romaji:'mi', row:'ma', cat:'basic'}, {char:'む', romaji:'mu', row:'ma', cat:'basic'}, {char:'め', romaji:'me', row:'ma', cat:'basic'}, {char:'も', romaji:'mo', row:'ma', cat:'basic'},
      {char:'や', romaji:'ya', row:'ya', cat:'basic'}, {char:'', romaji:'', row:'ya', cat:'basic'}, {char:'ゆ', romaji:'yu', row:'ya', cat:'basic'}, {char:'', romaji:'', row:'ya', cat:'basic'}, {char:'よ', romaji:'yo', row:'ya', cat:'basic'},
      {char:'ら', romaji:'ra', row:'ra', cat:'basic'}, {char:'り', romaji:'ri', row:'ra', cat:'basic'}, {char:'る', romaji:'ru', row:'ra', cat:'basic'}, {char:'れ', romaji:'re', row:'ra', cat:'basic'}, {char:'ろ', romaji:'ro', row:'ra', cat:'basic'},
      {char:'わ', romaji:'wa', row:'wa', cat:'basic'}, {char:'', romaji:'', row:'wa', cat:'basic'}, {char:'', romaji:'', row:'wa', cat:'basic'}, {char:'', romaji:'', row:'wa', cat:'basic'}, {char:'を', romaji:'wo', row:'wa', cat:'basic'},
      {char:'ん', romaji:'n', row:'n', cat:'basic'}, {char:'', romaji:'', row:'n', cat:'basic'}, {char:'', romaji:'', row:'n', cat:'basic'}, {char:'', romaji:'', row:'n', cat:'basic'}, {char:'', romaji:'', row:'n', cat:'basic'},
      {char:'が', romaji:'ga', row:'ga', cat:'extra'}, {char:'ぎ', romaji:'gi', row:'ga', cat:'extra'}, {char:'ぐ', romaji:'gu', row:'ga', cat:'extra'}, {char:'げ', romaji:'ge', row:'ga', cat:'extra'}, {char:'ご', romaji:'go', row:'ga', cat:'extra'},
      {char:'ざ', romaji:'za', row:'za', cat:'extra'}, {char:'じ', romaji:'ji', row:'za', cat:'extra'}, {char:'ず', romaji:'zu', row:'za', cat:'extra'}, {char:'ぜ', romaji:'ze', row:'za', cat:'extra'}, {char:'ぞ', romaji:'zo', row:'za', cat:'extra'},
      {char:'だ', romaji:'da', row:'da', cat:'extra'}, {char:'ぢ', romaji:'ji', row:'da', cat:'extra'}, {char:'づ', romaji:'zu', row:'da', cat:'extra'}, {char:'で', romaji:'de', row:'da', cat:'extra'}, {char:'ど', romaji:'do', row:'da', cat:'extra'},
      {char:'ば', romaji:'ba', row:'ba', cat:'extra'}, {char:'び', romaji:'bi', row:'ba', cat:'extra'}, {char:'ぶ', romaji:'bu', row:'ba', cat:'extra'}, {char:'べ', romaji:'be', row:'ba', cat:'extra'}, {char:'ぼ', romaji:'bo', row:'ba', cat:'extra'},
      {char:'ぱ', romaji:'pa', row:'pa', cat:'extra'}, {char:'ぴ', romaji:'pi', row:'pa', cat:'extra'}, {char:'ぷ', romaji:'pu', row:'pa', cat:'extra'}, {char:'ぺ', romaji:'pe', row:'pa', cat:'extra'}, {char:'ぽ', romaji:'po', row:'pa', cat:'extra'},
    ,

      // === YOON + っ + ー ===
      {char:'きゃ', romaji:'kya', row:'kya', cat:'yoon'}, {char:'きゅ', romaji:'kyu', row:'kya', cat:'yoon'}, {char:'きょ', romaji:'kyo', row:'kya', cat:'yoon'},
      {char:'しゃ', romaji:'sha', row:'sha', cat:'yoon'}, {char:'しゅ', romaji:'shu', row:'sha', cat:'yoon'}, {char:'しょ', romaji:'sho', row:'sha', cat:'yoon'},
      {char:'ちゃ', romaji:'cha', row:'cha', cat:'yoon'}, {char:'ちゅ', romaji:'chu', row:'cha', cat:'yoon'}, {char:'ちょ', romaji:'cho', row:'cha', cat:'yoon'},
      {char:'にゃ', romaji:'nya', row:'nya', cat:'yoon'}, {char:'にゅ', romaji:'nyu', row:'nya', cat:'yoon'}, {char:'にょ', romaji:'nyo', row:'nya', cat:'yoon'},
      {char:'ひゃ', romaji:'hya', row:'hya', cat:'yoon'}, {char:'ひゅ', romaji:'hyu', row:'hya', cat:'yoon'}, {char:'ひょ', romaji:'hyo', row:'hya', cat:'yoon'},
      {char:'みゃ', romaji:'mya', row:'mya', cat:'yoon'}, {char:'みゅ', romaji:'myu', row:'mya', cat:'yoon'}, {char:'みょ', romaji:'myo', row:'mya', cat:'yoon'},
      {char:'りゃ', romaji:'rya', row:'rya', cat:'yoon'}, {char:'りゅ', romaji:'ryu', row:'rya', cat:'yoon'}, {char:'りょ', romaji:'ryo', row:'rya', cat:'yoon'},
      {char:'ぎゃ', romaji:'gya', row:'gya', cat:'yoon_d'}, {char:'ぎゅ', romaji:'gyu', row:'gya', cat:'yoon_d'}, {char:'ぎょ', romaji:'gyo', row:'gya', cat:'yoon_d'},
      {char:'じゃ', romaji:'ja', row:'ja', cat:'yoon_d'}, {char:'じゅ', romaji:'ju', row:'ja', cat:'yoon_d'}, {char:'じょ', romaji:'jo', row:'ja', cat:'yoon_d'},
      {char:'びゃ', romaji:'bya', row:'bya', cat:'yoon_d'}, {char:'びゅ', romaji:'byu', row:'bya', cat:'yoon_d'}, {char:'びょ', romaji:'byo', row:'bya', cat:'yoon_d'},
      {char:'ぴゃ', romaji:'pya', row:'pya', cat:'yoon_d'}, {char:'ぴゅ', romaji:'pyu', row:'pya', cat:'yoon_d'}, {char:'ぴょ', romaji:'pyo', row:'pya', cat:'yoon_d'},
      {char:'っ', romaji:'(小) tsu', row:'small', cat:'yoon'},
      {char:'ー', romaji:'ー', row:'chouon', cat:'yoon'},
];

    const KATAKANA = [
      {char:'ア', romaji:'a', row:'a', cat:'basic'}, {char:'イ', romaji:'i', row:'a', cat:'basic'}, {char:'ウ', romaji:'u', row:'a', cat:'basic'}, {char:'エ', romaji:'e', row:'a', cat:'basic'}, {char:'オ', romaji:'o', row:'a', cat:'basic'},
      {char:'カ', romaji:'ka', row:'ka', cat:'basic'}, {char:'キ', romaji:'ki', row:'ka', cat:'basic'}, {char:'ク', romaji:'ku', row:'ka', cat:'basic'}, {char:'ケ', romaji:'ke', row:'ka', cat:'basic'}, {char:'コ', romaji:'ko', row:'ka', cat:'basic'},
      {char:'サ', romaji:'sa', row:'sa', cat:'basic'}, {char:'シ', romaji:'shi', row:'sa', cat:'basic'}, {char:'ス', romaji:'su', row:'sa', cat:'basic'}, {char:'セ', romaji:'se', row:'sa', cat:'basic'}, {char:'ソ', romaji:'so', row:'sa', cat:'basic'},
      {char:'タ', romaji:'ta', row:'ta', cat:'basic'}, {char:'チ', romaji:'chi', row:'ta', cat:'basic'}, {char:'ツ', romaji:'tsu', row:'ta', cat:'basic'}, {char:'テ', romaji:'te', row:'ta', cat:'basic'}, {char:'ト', romaji:'to', row:'ta', cat:'basic'},
      {char:'ナ', romaji:'na', row:'na', cat:'basic'}, {char:'ニ', romaji:'ni', row:'na', cat:'basic'}, {char:'ヌ', romaji:'nu', row:'na', cat:'basic'}, {char:'ネ', romaji:'ne', row:'na', cat:'basic'}, {char:'ノ', romaji:'no', row:'na', cat:'basic'},
      {char:'ハ', romaji:'ha', row:'ha', cat:'basic'}, {char:'ヒ', romaji:'hi', row:'ha', cat:'basic'}, {char:'フ', romaji:'fu', row:'ha', cat:'basic'}, {char:'ヘ', romaji:'he', row:'ha', cat:'basic'}, {char:'ホ', romaji:'ho', row:'ha', cat:'basic'},
      {char:'マ', romaji:'ma', row:'ma', cat:'basic'}, {char:'ミ', romaji:'mi', row:'ma', cat:'basic'}, {char:'ム', romaji:'mu', row:'ma', cat:'basic'}, {char:'メ', romaji:'me', row:'ma', cat:'basic'}, {char:'モ', romaji:'mo', row:'ma', cat:'basic'},
      {char:'ヤ', romaji:'ya', row:'ya', cat:'basic'}, {char:'', romaji:'', row:'ya', cat:'basic'}, {char:'ユ', romaji:'yu', row:'ya', cat:'basic'}, {char:'', romaji:'', row:'ya', cat:'basic'}, {char:'ヨ', romaji:'yo', row:'ya', cat:'basic'},
      {char:'ラ', romaji:'ra', row:'ra', cat:'basic'}, {char:'リ', romaji:'ri', row:'ra', cat:'basic'}, {char:'ル', romaji:'ru', row:'ra', cat:'basic'}, {char:'レ', romaji:'re', row:'ra', cat:'basic'}, {char:'ロ', romaji:'ro', row:'ra', cat:'basic'},
      {char:'ワ', romaji:'wa', row:'wa', cat:'basic'}, {char:'', romaji:'', row:'wa', cat:'basic'}, {char:'', romaji:'', row:'wa', cat:'basic'}, {char:'', romaji:'', row:'wa', cat:'basic'}, {char:'ヲ', romaji:'wo', row:'wa', cat:'basic'},
      {char:'ン', romaji:'n', row:'n', cat:'basic'}, {char:'', romaji:'', row:'n', cat:'basic'}, {char:'', romaji:'', row:'n', cat:'basic'}, {char:'', romaji:'', row:'n', cat:'basic'}, {char:'', romaji:'', row:'n', cat:'basic'},
      {char:'ガ', romaji:'ga', row:'ga', cat:'extra'}, {char:'ギ', romaji:'gi', row:'ga', cat:'extra'}, {char:'グ', romaji:'gu', row:'ga', cat:'extra'}, {char:'ゲ', romaji:'ge', row:'ga', cat:'extra'}, {char:'ゴ', romaji:'go', row:'ga', cat:'extra'},
      {char:'ザ', romaji:'za', row:'za', cat:'extra'}, {char:'ジ', romaji:'ji', row:'za', cat:'extra'}, {char:'ズ', romaji:'zu', row:'za', cat:'extra'}, {char:'ゼ', romaji:'ze', row:'za', cat:'extra'}, {char:'ゾ', romaji:'zo', row:'za', cat:'extra'},
      {char:'ダ', romaji:'da', row:'da', cat:'extra'}, {char:'ヂ', romaji:'ji', row:'da', cat:'extra'}, {char:'ヅ', romaji:'zu', row:'da', cat:'extra'}, {char:'デ', romaji:'de', row:'da', cat:'extra'}, {char:'ド', romaji:'do', row:'da', cat:'extra'},
      {char:'バ', romaji:'ba', row:'ba', cat:'extra'}, {char:'ビ', romaji:'bi', row:'ba', cat:'extra'}, {char:'ブ', romaji:'bu', row:'ba', cat:'extra'}, {char:'ベ', romaji:'be', row:'ba', cat:'extra'}, {char:'ボ', romaji:'bo', row:'ba', cat:'extra'},
      {char:'パ', romaji:'pa', row:'pa', cat:'extra'}, {char:'ピ', romaji:'pi', row:'pa', cat:'extra'}, {char:'プ', romaji:'pu', row:'pa', cat:'extra'}, {char:'ペ', romaji:'pe', row:'pa', cat:'extra'}, {char:'ポ', romaji:'po', row:'pa', cat:'extra'},
    ,

      // === YOON + っ + ー ===
      {char:'キャ', romaji:'kya', row:'kya', cat:'yoon'}, {char:'キュ', romaji:'kyu', row:'kya', cat:'yoon'}, {char:'キョ', romaji:'kyo', row:'kya', cat:'yoon'},
      {char:'シャ', romaji:'sha', row:'sha', cat:'yoon'}, {char:'シュ', romaji:'shu', row:'sha', cat:'yoon'}, {char:'ショ', romaji:'sho', row:'sha', cat:'yoon'},
      {char:'チャ', romaji:'cha', row:'cha', cat:'yoon'}, {char:'チュ', romaji:'chu', row:'cha', cat:'yoon'}, {char:'チョ', romaji:'cho', row:'cha', cat:'yoon'},
      {char:'ニャ', romaji:'nya', row:'nya', cat:'yoon'}, {char:'ニュ', romaji:'nyu', row:'nya', cat:'yoon'}, {char:'ニョ', romaji:'nyo', row:'nya', cat:'yoon'},
      {char:'ヒャ', romaji:'hya', row:'hya', cat:'yoon'}, {char:'ヒュ', romaji:'hyu', row:'hya', cat:'yoon'}, {char:'ヒョ', romaji:'hyo', row:'hya', cat:'yoon'},
      {char:'ミャ', romaji:'mya', row:'mya', cat:'yoon'}, {char:'ミュ', romaji:'myu', row:'mya', cat:'yoon'}, {char:'ミョ', romaji:'myo', row:'mya', cat:'yoon'},
      {char:'リャ', romaji:'rya', row:'rya', cat:'yoon'}, {char:'リュ', romaji:'ryu', row:'rya', cat:'yoon'}, {char:'リョ', romaji:'ryo', row:'rya', cat:'yoon'},
      {char:'ギャ', romaji:'gya', row:'gya', cat:'yoon_d'}, {char:'ギュ', romaji:'gyu', row:'gya', cat:'yoon_d'}, {char:'ギョ', romaji:'gyo', row:'gya', cat:'yoon_d'},
      {char:'ジャ', romaji:'ja', row:'ja', cat:'yoon_d'}, {char:'ジュ', romaji:'ju', row:'ja', cat:'yoon_d'}, {char:'ジョ', romaji:'jo', row:'ja', cat:'yoon_d'},
      {char:'ビャ', romaji:'bya', row:'bya', cat:'yoon_d'}, {char:'ビュ', romaji:'byu', row:'bya', cat:'yoon_d'}, {char:'ビョ', romaji:'byo', row:'bya', cat:'yoon_d'},
      {char:'ピャ', romaji:'pya', row:'pya', cat:'yoon_d'}, {char:'ピュ', romaji:'pyu', row:'pya', cat:'yoon_d'}, {char:'ピョ', romaji:'pyo', row:'pya', cat:'yoon_d'},
      {char:'ッ', romaji:'(小) tsu', row:'small', cat:'yoon'},
      {char:'ー', romaji:'ー', row:'chouon', cat:'yoon'},
];

    

    const BASIC_ROWS = [
      {id:'all', label:'Wszystkie'},
      {id:'a', label:'あ行'},
      {id:'ka', label:'か行'},
      {id:'sa', label:'さ行'},
      {id:'ta', label:'た行'},
      {id:'na', label:'な行'},
      {id:'ha', label:'は行'},
      {id:'ma', label:'ま行'},
      {id:'ya', label:'や行'},
      {id:'ra', label:'ら行'},
      {id:'wa', label:'わ行'},
      {id:'n', label:'ん'},
    ];

    const EXTRA_ROWS = [
      {id:'all', label:'Wszystkie'},
      {id:'ga', label:'が行'},
      {id:'za', label:'ざ行'},
      {id:'da', label:'だ行'},
      {id:'ba', label:'ば行'},
      {id:'pa', label:'ぱ行'},
    ];

    const YOON_ROWS = [
      {id:'all', label:'Wszystkie'},
      {id:'kya', label:'きゃ行'},
      {id:'sha', label:'しゃ行'},
      {id:'cha', label:'ちゃ行'},
      {id:'nya', label:'にゃ行'},
      {id:'hya', label:'ひゃ行'},
      {id:'mya', label:'みゃ行'},
      {id:'rya', label:'りゃ行'},
      {id:'small', label:'っ / ッ'},
      {id:'chouon', label:'ー'},
    ];

    const YOON_D_ROWS = [
      {id:'all', label:'Wszystkie'},
      {id:'gya', label:'ぎゃ行'},
      {id:'ja', label:'じゃ行'},
      {id:'bya', label:'びゃ行'},
      {id:'pya', label:'ぴゃ行'},
    ];

    let currentScript = 'hiragana';
    let currentMode = 'chart';
    let currentCat = 'basic';
    let activeRows = new Set(['all']);
    let flashIndex = 0;
    let flashDeck = [];
    let writeIndex = 0;
    let writeDeck = [];
    let quizCorrect = 0;
    let quizWrong = 0;
    let quizAnswered = false;
    let currentQuizItem = null;

    const savedFont = localStorage.getItem('hk_jp_font') === '1';
    if (savedFont) {
      document.body.classList.add('use-jp-font');
    }

    function getHardStats() {
      try { return JSON.parse(localStorage.getItem('hk_hard') || '{}'); }
      catch { return {}; }
    }

    function markHard(romaji, wasWrong) { /* disabled */ }

    function isHard(romaji) { return false; }

    function getAudioPath(romaji) {
      // Normalize romaji for file names
      let r = romaji.replace('(小) tsu', 'tsu').replace('ー', '');
      if (!r) return null;

      // Basic gojuon
      const basic = new Set([
        'a','i','u','e','o','ka','ki','ku','ke','ko','sa','shi','su','se','so',
        'ta','chi','tsu','te','to','na','ni','nu','ne','no','ha','hi','fu','he','ho',
        'ma','mi','mu','me','mo','ya','yu','yo','ra','ri','ru','re','ro','wa','wo','n'
      ]);
      // Dakuten / Handakuten
      const dakuten = new Set([
        'ga','gi','gu','ge','go','za','ji','zu','ze','zo','da','de','do',
        'ba','bi','bu','be','bo','pa','pi','pu','pe','po'
      ]);
      // Basic Yoon (kya, sha, cha...)
      const yoon = new Set([
        'kya','kyu','kyo','sha','shu','sho','cha','chu','cho',
        'nya','nyu','nyo','hya','hyu','hyo','mya','myu','myo','rya','ryu','ryo'
      ]);
      // Yoon with dakuten
      const yoonD = new Set([
        'gya','gyu','gyo','ja','ju','jo','bya','byu','byo','pya','pyu','pyo'
      ]);

      if (basic.has(r)) return `Hiragana-Katakana/${r}.mp3`;
      if (dakuten.has(r)) return `Dakuten-Handakuten/kanasound-${r}.mp3`;
      if (yoon.has(r)) return `Dakuten-HandakutenYoon1/kanasound-${r}.mp3`;
      if (yoonD.has(r)) return `Dakuten-HandakutenYoon/kanasound-${r}.mp3`;

      // small tsu / chouon - no dedicated files, fallback to speech
      return null;
    }

    let currentAudio = null;
    function speak(charOrRomaji, romajiHint) {
      // Prefer audio files; fall back to SpeechSynthesis
      const romaji = romajiHint || charOrRomaji;
      const path = getAudioPath(romaji);

      if (path) {
        if (currentAudio) {
          currentAudio.pause();
          currentAudio = null;
        }
        currentAudio = new Audio(path);
        currentAudio.play().catch(() => {
          // fallback if file missing
          speakFallback(charOrRomaji);
        });
        return;
      }
      speakFallback(charOrRomaji);
    }

    function speakFallback(text) {
      if (!window.speechSynthesis) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ja-JP';
      u.rate = 0.85;
      const voices = speechSynthesis.getVoices();
      const ja = voices.find(v => v.lang.startsWith('ja'));
      if (ja) u.voice = ja;
      speechSynthesis.speak(u);
    }

    if (window.speechSynthesis) {
      speechSynthesis.getVoices();
      speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
    }

    function getData() {
      return currentScript === 'hiragana' ? HIRAGANA : KATAKANA;
    }

    function getFilteredData(includeEmpty = false) {
      let data = getData();

      data = data.filter(d => d.cat === currentCat);

      if (!activeRows.has('all') ) {
        data = data.filter(d => activeRows.has(d.row));
      }

      return includeEmpty ? data : data.filter(d => d.char !== '');
    }

    function shuffle(arr) {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    function renderRowFilters() {
      const container = document.getElementById('rowFilters');
      container.innerHTML = '';

      let rows;
      if (currentCat === 'basic') rows = BASIC_ROWS;
      else if (currentCat === 'extra') rows = EXTRA_ROWS;
      else if (currentCat === 'yoon') rows = YOON_ROWS;
      else if (currentCat === 'yoon_d') rows = YOON_D_ROWS;
      else rows = [];

      rows.forEach(r => {
        const btn = document.createElement('button');
        btn.className = 'row-btn' + (activeRows.has(r.id) ? ' active' : '');
        btn.textContent = r.label;
        btn.onclick = () => {
          if (r.id === 'all') {
            activeRows = new Set(['all']);
          } else {
            activeRows.delete('all');
            if (activeRows.has(r.id)) {
              activeRows.delete(r.id);
              if (activeRows.size === 0) activeRows.add('all');
            } else {
              activeRows.add(r.id);
            }
          }
          renderRowFilters();
          refreshCurrentMode();
        };
        container.appendChild(btn);
      });
    }

    function refreshCurrentMode() {
      if (currentMode === 'chart') renderChart();
      else if (currentMode === 'flashcards') initFlashcards();
      else if (currentMode === 'quiz') nextQuiz();
      else if (currentMode === 'write') initWrite();
    }

    function renderChart() {
      const grid = document.getElementById('chartGrid');
      grid.innerHTML = '';
      const data = getFilteredData(true);
      const showEmpty = activeRows.has('all') ;

      data.forEach(item => {
        const cell = document.createElement('div');
        if (!item.char) {
          if (!showEmpty) return;
          cell.className = 'chart-cell empty';
        } else {
          cell.className = 'chart-cell';
          const hard = '';
          cell.innerHTML = `
            <button class="sound-btn" title="Dźwięk">🔊</button>
            <span class="char">${item.char}</span>
            <span class="romaji">${item.romaji}</span>
          `;
          cell.querySelector('.sound-btn').onclick = (e) => {
            e.stopPropagation();
            speak(item.char, item.romaji);
          };
          cell.onclick = () => speak(item.char, item.romaji);
        }
        grid.appendChild(cell);
      });
    }

    function initFlashcards() {
      flashDeck = shuffle(getFilteredData());
      flashIndex = 0;
      if (flashDeck.length === 0) {
        document.getElementById('flashChar').textContent = '–';
        document.getElementById('flashRomaji').textContent = 'Brak znaków';
        document.getElementById('flashTotal').textContent = '0';
        return;
      }
      showFlashcard();
    }

    function showFlashcard() {
      if (flashDeck.length === 0) return;
      const item = flashDeck[flashIndex];
      const showRomajiFirst = document.getElementById('showRomajiFirst').checked;
      const card = document.getElementById('flashcard');
      card.classList.remove('flipped');

      if (showRomajiFirst) {
        document.getElementById('flashChar').textContent = item.romaji;
        document.getElementById('flashRomaji').textContent = item.char;
      } else {
        document.getElementById('flashChar').textContent = item.char;
        document.getElementById('flashRomaji').textContent = item.romaji;
      }

      document.getElementById('flashIndex').textContent = flashIndex + 1;
      document.getElementById('flashTotal').textContent = flashDeck.length;

      if (document.getElementById('autoSpeak').checked) {
        setTimeout(() => speak(item.char, item.romaji), 250);
      }
    }

    function nextQuiz() {
      const data = getFilteredData();
      if (data.length === 0) {
        document.getElementById('quizChar').textContent = '–';
        document.getElementById('quizChoice').innerHTML = '';
        document.getElementById('quizFeedback').textContent = 'Brak znaków w filtrze';
        return;
      }

      quizAnswered = false;
      document.getElementById('quizFeedback').textContent = '';
      document.getElementById('quizFeedback').className = 'feedback';

      currentQuizItem = data[Math.floor(Math.random() * data.length)];
      const type = document.querySelector('input[name="quizType"]:checked').value;
      const charEl = document.getElementById('quizChar');
      charEl.style.animation = 'none';
      charEl.offsetHeight;
      charEl.style.animation = '';

      if (type === 'listen') {
        // Listening mode: hide character, play sound, show character options
        charEl.textContent = '🔊';
        document.getElementById('quizChoice').classList.remove('hidden');
        document.getElementById('quizType').classList.add('hidden');
        renderQuizOptions(data, true); // true = show characters instead of romaji
        setTimeout(() => speak(currentQuizItem.char, currentQuizItem.romaji), 300);
      } else if (type === 'choice') {
        charEl.textContent = currentQuizItem.char;
        document.getElementById('quizChoice').classList.remove('hidden');
        document.getElementById('quizType').classList.add('hidden');
        renderQuizOptions(data, false);
      } else {
        charEl.textContent = currentQuizItem.char;
        document.getElementById('quizChoice').classList.add('hidden');
        document.getElementById('quizType').classList.remove('hidden');
        document.getElementById('quizInput').value = '';
        document.getElementById('quizInput').focus();
      }
      updateQuizStats();
    }

    function renderQuizOptions(data, showChars = false) {
      const container = document.getElementById('quizChoice');
      container.innerHTML = '';

      let correctValue = showChars ? currentQuizItem.char : currentQuizItem.romaji;
      let options = [correctValue];

      const others = data.filter(d => showChars ? d.char !== currentQuizItem.char : d.romaji !== currentQuizItem.romaji);
      shuffle(others).slice(0, 3).forEach(o => {
        options.push(showChars ? o.char : o.romaji);
      });
      options = shuffle(options);

      options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = opt;
        btn.onclick = () => checkChoice(opt, btn, showChars);
        container.appendChild(btn);
      });
    }

    function checkChoice(selected, btn, showChars = false) {
      if (quizAnswered) return;
      quizAnswered = true;

      const correctValue = showChars ? currentQuizItem.char : currentQuizItem.romaji;
      const correct = selected === correctValue;
      markHard(currentQuizItem.romaji, !correct);

      if (correct) {
        quizCorrect++;
        btn.classList.add('correct');
        document.getElementById('quizFeedback').textContent = '✓ Poprawnie!';
        document.getElementById('quizFeedback').className = 'feedback ok';
      } else {
        quizWrong++;
        btn.classList.add('wrong');
        document.querySelectorAll('.quiz-option').forEach(b => {
          if (b.textContent === correctValue) b.classList.add('correct');
        });
        document.getElementById('quizFeedback').textContent = '✗ Poprawna: ' + correctValue + (showChars ? '' : ' (' + currentQuizItem.char + ')');
        document.getElementById('quizFeedback').className = 'feedback bad';
      }
      updateQuizStats();
    }

    function checkType() {
      if (quizAnswered) return;
      const input = document.getElementById('quizInput').value.trim().toLowerCase();
      if (!input) return;
      quizAnswered = true;
      const correct = input === currentQuizItem.romaji;
      markHard(currentQuizItem.romaji, !correct);

      if (correct) {
        quizCorrect++;
        document.getElementById('quizFeedback').textContent = '✓ Poprawnie!';
        document.getElementById('quizFeedback').className = 'feedback ok';
      } else {
        quizWrong++;
        document.getElementById('quizFeedback').textContent = '✗ Poprawna: ' + currentQuizItem.romaji;
        document.getElementById('quizFeedback').className = 'feedback bad';
      }
      updateQuizStats();
    }

    function updateQuizStats() {
      document.getElementById('quizCorrect').textContent = quizCorrect;
      document.getElementById('quizWrong').textContent = quizWrong;
      const total = quizCorrect + quizWrong;
      document.getElementById('quizTotal').textContent = total;
      const pct = total === 0 ? 0 : Math.round((quizCorrect / total) * 100);
      document.getElementById('quizProgress').style.width = pct + '%';
    }

    function resetQuiz() {
      quizCorrect = 0;
      quizWrong = 0;
      updateQuizStats();
      nextQuiz();
    }

    let canvas, ctx, drawing = false, lastX = 0, lastY = 0;
    let writeChallengeMode = false;
    let writeRevealed = false;

    function getWriteMode() {
      const el = document.querySelector('input[name="writeMode"]:checked');
      return el ? el.value : 'normal';
    }

    function initWrite() {
      writeDeck = shuffle(getFilteredData());
      writeIndex = 0;
      writeRevealed = false;
      if (writeDeck.length === 0) {
        document.getElementById('writeChar').textContent = '–';
        document.getElementById('writeRomaji').textContent = 'Brak znaków';
        document.getElementById('writeTotal').textContent = '0';
        return;
      }
      showWriteChar();
      setupCanvas();
      updateWriteUI();
    }

    function updateWriteUI() {
      writeChallengeMode = getWriteMode() === 'challenge';
      const normalControls = document.getElementById('writeControlsNormal');
      const challengeControls = document.getElementById('writeControlsChallenge');
      const revealBox = document.getElementById('writeReveal');
      const hint = document.getElementById('writeHint');

      if (writeChallengeMode) {
        normalControls.classList.add('hidden');
        challengeControls.classList.remove('hidden');
        revealBox.classList.add('hidden');
        hint.textContent = 'Narysuj znak z pamięci, potem kliknij Sprawdź';
      } else {
        normalControls.classList.remove('hidden');
        challengeControls.classList.add('hidden');
        revealBox.classList.add('hidden');
        hint.textContent = 'Narysuj znak powyżej • mysz lub palec';
      }
    }

    function showWriteChar() {
      if (writeDeck.length === 0) return;
      const item = writeDeck[writeIndex];
      writeRevealed = false;

      const isChallenge = getWriteMode() === 'challenge';

      if (isChallenge) {
        // Only show romaji
        document.getElementById('writeChar').textContent = '?';
        document.getElementById('writeRomaji').textContent = item.romaji;
        document.getElementById('writeReveal').classList.add('hidden');
        document.getElementById('writeControlsChallenge').classList.remove('hidden');
      } else {
        document.getElementById('writeChar').textContent = item.char;
        document.getElementById('writeRomaji').textContent = item.romaji;
      }

      document.getElementById('writeIndex').textContent = writeIndex + 1;
      document.getElementById('writeTotal').textContent = writeDeck.length;
      clearCanvas();
      updateWriteUI();
    }

    function writeCheck() {
      if (writeDeck.length === 0 || writeRevealed) return;
      writeRevealed = true;
      const item = writeDeck[writeIndex];

      document.getElementById('writeChar').textContent = item.char;
      document.getElementById('writeRevealChar').textContent = item.char;
      document.getElementById('writeReveal').classList.remove('hidden');
      document.getElementById('writeControlsChallenge').classList.add('hidden');
      speak(item.char, item.romaji);
    }

    function writeSelfRate(knew) {
      if (writeDeck.length === 0) return;
      const item = writeDeck[writeIndex];
      markHard(item.romaji, !knew);

      // Next character
      writeIndex = (writeIndex + 1) % writeDeck.length;
      showWriteChar();
    }

    function setupCanvas() {
      canvas = document.getElementById('writeCanvas');
      ctx = canvas.getContext('2d');
      ctx.strokeStyle = '#f0c4d0';
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      canvas.onmousedown = (e) => { drawing = true; [lastX, lastY] = getPos(e); };
      canvas.onmousemove = (e) => {
        if (!drawing) return;
        const [x, y] = getPos(e);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        [lastX, lastY] = [x, y];
      };
      canvas.onmouseup = () => drawing = false;
      canvas.onmouseleave = () => drawing = false;

      canvas.ontouchstart = (e) => {
        e.preventDefault();
        drawing = true;
        [lastX, lastY] = getPos(e.touches[0]);
      };
      canvas.ontouchmove = (e) => {
        e.preventDefault();
        if (!drawing) return;
        const [x, y] = getPos(e.touches[0]);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        [lastX, lastY] = [x, y];
      };
      canvas.ontouchend = () => drawing = false;
    }

    function getPos(e) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      return [(e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY];
    }

    function clearCanvas() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function switchMode(mode) {
      currentMode = mode;
      document.querySelectorAll('.mode-tab').forEach(t => t.classList.toggle('active', t.dataset.mode === mode));
      document.getElementById('chartView').classList.toggle('hidden', mode !== 'chart');
      document.getElementById('flashView').classList.toggle('hidden', mode !== 'flashcards');
      document.getElementById('quizView').classList.toggle('hidden', mode !== 'quiz');
      document.getElementById('writeView').classList.toggle('hidden', mode !== 'write');
      refreshCurrentMode();
    }

    function switchCategory(cat) {
      currentCat = cat;
      activeRows = new Set(['all']);
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
      renderRowFilters();
      refreshCurrentMode();
    }

    function enterScript(script) {
      currentScript = script;
      document.getElementById('startScreen').classList.add('hidden');
      document.getElementById('mainApp').classList.add('visible');
      document.getElementById('scriptLabel').textContent = script === 'hiragana' ? 'Hiragana  ひらがな' : 'Katakana  カタカナ';
      currentCat = 'basic';
      activeRows = new Set(['all']);
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === 'basic'));
      renderRowFilters();
      switchMode('chart');
    }

    function goBack() {
      document.getElementById('mainApp').classList.remove('visible');
      document.getElementById('startScreen').classList.remove('hidden');
    }

    document.querySelectorAll('.choice-card').forEach(card => {
      card.onclick = () => enterScript(card.dataset.script);
    });

    document.getElementById('backBtn').onclick = goBack;

    const fontToggle = document.getElementById('fontToggle');
    if (savedFont) fontToggle.checked = true;
    fontToggle.onchange = (e) => {
      if (e.target.checked) {
        document.body.classList.add('use-jp-font');
        localStorage.setItem('hk_jp_font', '1');
      } else {
        document.body.classList.remove('use-jp-font');
        localStorage.setItem('hk_jp_font', '0');
      }
    };

    document.querySelectorAll('.mode-tab').forEach(btn => {
      btn.onclick = () => switchMode(btn.dataset.mode);
    });

    document.querySelectorAll('.cat-tab').forEach(btn => {
      btn.onclick = () => switchCategory(btn.dataset.cat);
    });

    document.getElementById('flashcard').onclick = () => {
      document.getElementById('flashcard').classList.toggle('flipped');
    };
    document.getElementById('flashNext').onclick = () => {
      if (flashDeck.length === 0) return;
      flashIndex = (flashIndex + 1) % flashDeck.length;
      showFlashcard();
    };
    document.getElementById('flashPrev').onclick = () => {
      if (flashDeck.length === 0) return;
      flashIndex = (flashIndex - 1 + flashDeck.length) % flashDeck.length;
      showFlashcard();
    };
    document.getElementById('flashShuffle').onclick = () => initFlashcards();
    document.getElementById('flashSpeak').onclick = () => {
      if (flashDeck[flashIndex]) speak(flashDeck[flashIndex].char, flashDeck[flashIndex].romaji);
    };
    document.getElementById('showRomajiFirst').onchange = () => showFlashcard();

    document.getElementById('quizNext').onclick = () => nextQuiz();
    document.getElementById('quizReset').onclick = () => resetQuiz();
    document.getElementById('quizCheck').onclick = () => checkType();
    document.getElementById('quizSpeak').onclick = () => {
      if (currentQuizItem) speak(currentQuizItem.char, currentQuizItem.romaji);
    };
    document.getElementById('quizInput').addEventListener('keydown', e => {
      if (e.key === 'Enter') checkType();
    });
    document.querySelectorAll('input[name="quizType"]').forEach(r => {
      r.onchange = () => nextQuiz();
    });

    document.getElementById('writeClear').onclick = () => clearCanvas();
    document.getElementById('writeClear2').onclick = () => clearCanvas();
    document.getElementById('writeNext').onclick = () => {
      if (writeDeck.length === 0) return;
      writeIndex = (writeIndex + 1) % writeDeck.length;
      showWriteChar();
    };
    document.getElementById('writeShuffle').onclick = () => initWrite();
    document.getElementById('writeSpeak').onclick = () => {
      if (writeDeck[writeIndex]) speak(writeDeck[writeIndex].char, writeDeck[writeIndex].romaji);
    };
    document.getElementById('writeCheck').onclick = () => writeCheck();
    document.getElementById('writeKnew').onclick = () => writeSelfRate(true);
    document.getElementById('writeMissed').onclick = () => writeSelfRate(false);

    document.querySelectorAll('input[name="writeMode"]').forEach(r => {
      r.onchange = () => {
        writeRevealed = false;
        showWriteChar();
      };
    });
