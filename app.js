// ===== WALD DER ALTEN - Main Application =====

// ===== Creature Data =====
const CREATURES = [
  {
    id: 'drache',
    name: 'Drache',
    nameDe: 'Drache',
    description: 'The archetypal guardian of chaos, power, and treasure.',
    descriptionDe: 'Das Urbild von Chaos, Macht und Schatzhüter.',
    lore: 'In the deepest caves of the Black Forest, dragons have slumbered for centuries, guarding hoards of ancient gold and forgotten magic. Their scales shimmer like emeralds in the dark, and their breath can melt stone.',
    loreDe: 'In den tiefsten Höhlen des Schwarzwalds haben Drachen seit Jahrhunderten geschlafen und Horten aus uraltem Gold und vergessener Magie bewacht.',
    image: './creatures/drache.jpg',
    rarity: 'legendary',
    region: 'Black Forest Caves',
    regionDe: 'Schwarzwaldhöhlen'
  },
  {
    id: 'zwerg',
    name: 'Zwerg',
    nameDe: 'Zwerg',
    description: 'Small guardian of treasures and master miner of the deep earth.',
    descriptionDe: 'Kleiner Hüter von Schätzen und Meisterschürfer der tiefen Erde.',
    lore: 'Deep beneath the mountains, dwarves work their forges day and night, crafting weapons of legendary quality and mining precious gems. Their underground halls echo with songs of ancient times.',
    loreDe: 'Tief unter den Bergen arbeiten Zwerge Tag und Nacht in ihren Schmieden, schmieden Waffen von legendärer Qualität und schürfen kostbare Edelsteine.',
    image: './creatures/zwerg.jpg',
    rarity: 'common',
    region: 'Mountain Mines',
    regionDe: 'Bergwerke'
  },
  {
    id: 'riese',
    name: 'Riese',
    nameDe: 'Riese',
    description: 'Primordial being, builder of mountains and shaper of landscapes.',
    descriptionDe: 'Urzeitliches Wesen, Baumeister von Bergen und Gestalter von Landschaften.',
    lore: 'The giants walked the earth before humans built their first villages. These colossal beings shaped the very mountains and valleys with their bare hands, throwing boulders like pebbles.',
    loreDe: 'Die Riesen durchwanderten die Erde, bevor Menschen ihre ersten Dörfer bauten. Diese kolossalen Wesen formten die Berge und Täler mit bloßen Händen.',
    image: './creatures/riese.jpg',
    rarity: 'epic',
    region: 'Ancient Mountains',
    regionDe: 'Uralte Berge'
  },
  {
    id: 'alp',
    name: 'Alp',
    nameDe: 'Alp',
    description: 'Night spirit that causes pressing dreams and sleep paralysis.',
    descriptionDe: 'Nachtgeist, der Druckträume und Schlafparalyse verursacht.',
    lore: 'When the moon is dark and the wind whispers through the pines, the Alp emerges from shadows to sit upon the chests of sleepers. This night demon brings terrifying dreams and the crushing weight of sleep paralysis.',
    loreDe: 'Wenn der Mond dunkel ist und der Wind durch die Kiefern wispert, taucht der Alp aus den Schatten auf, um sich auf die Brust der Schläfer zu setzen.',
    image: './creatures/alp.jpg',
    rarity: 'rare',
    region: 'Shadowed Valleys',
    regionDe: 'Beschattete Täler'
  },
  {
    id: 'kobold',
    name: 'Kobold',
    nameDe: 'Kobold',
    description: 'House or mountain spirit, helpful or mischievous.',
    descriptionDe: 'Haus- oder Berggeist; hilfreich oder boshaft.',
    lore: 'Every home in the Black Forest once had its Kobold – a small spirit that could be either a blessing or a curse. Treat him well with offerings of milk and bread, and he would help with chores.',
    loreDe: 'Jedes Zuhause im Schwarzwald hatte einst seinen Kobold – einen kleinen Geist, der entweder ein Segen oder ein Fluch sein konnte.',
    image: './creatures/kobold.jpg',
    rarity: 'common',
    region: 'Farmhouses & Mines',
    regionDe: 'Bauernhäuser & Bergwerke'
  },
  {
    id: 'hexe',
    name: 'Hexe',
    nameDe: 'Hexe',
    description: 'Magic-wielding wise woman, often ambivalent or dangerous.',
    descriptionDe: 'Zauberkundige Weise Frau, oft ambivalent oder gefährlich.',
    lore: 'On the Brocken mountain, the highest peak of the Harz, witches gather on Walpurgis Night to dance and practice their ancient arts. Many are healers, midwives, and keepers of herbal knowledge.',
    loreDe: 'Auf dem Brocken, dem höchsten Gipfel des Harz, versammeln sich Hexen in der Walpurgisnacht, um zu tanzen und ihre uralten Künste zu praktizieren.',
    image: './creatures/hexe.jpg',
    rarity: 'rare',
    region: 'Brocken Mountain',
    regionDe: 'Brocken'
  },
  {
    id: 'rumpelstilzchen',
    name: 'Rumpelstilzchen',
    nameDe: 'Rumpelstilzchen',
    description: 'Trickster dwarf of name-magic and impossible bargains.',
    descriptionDe: 'Trickreicher Zwerg der Namenmagie und unmöglicher Geschäfte.',
    lore: 'In a hidden clearing deep in the forest, a strange little man dances around his fire, spinning straw into gold for desperate souls. But his gifts come at a terrible price.',
    loreDe: 'In einer verborgenen Lichtung tief im Wald tanzt ein seltsames kleines Männchen um sein Feuer, spinnt Stroh zu Gold für verzweifelte Seelen.',
    image: './creatures/rumpelstilzchen.jpg',
    rarity: 'epic',
    region: 'Hidden Clearings',
    regionDe: 'Verborgene Lichtungen'
  },
  {
    id: 'nixe',
    name: 'Nixe',
    nameDe: 'Nixe',
    description: 'Water being, seductive or warning, guardian of rivers and lakes.',
    descriptionDe: 'Wasserwesen, verführerisch oder warnend, Hüterin von Flüssen und Seen.',
    lore: 'Beneath the surface of forest lakes and rushing rivers, the Nixe combs her hair and sings songs of drowning beauty. She appears as a beautiful woman from the waist up.',
    loreDe: 'Unter der Oberfläche von Waldseen und reißenden Flüssen kämmt die Nixe ihr Haar und singt Lieder von ertränkender Schönheit.',
    image: './creatures/nixe.jpg',
    rarity: 'rare',
    region: 'Lakes & Rivers',
    regionDe: 'Seen & Flüsse'
  },
  {
    id: 'fee',
    name: 'Fee',
    nameDe: 'Fee',
    description: 'Rare in German tales, mostly helpful and blessing-giving.',
    descriptionDe: 'Selten in deutschen Erzählungen, meist helfend und segensspendend.',
    lore: 'Though less common in German folklore than in Celtic tales, the Fee appears in sun-dappled forest glades to bless the worthy. These ethereal beings bring good fortune to the kind-hearted.',
    loreDe: 'Obwohl in der deutschen Folklore weniger verbreitet als in keltischen Erzählungen, erscheint die Fee in sonnendurchfluteten Waldlichtungen, um die Würdigen zu segnen.',
    image: './creatures/fee.jpg',
    rarity: 'legendary',
    region: 'Enchanted Glades',
    regionDe: 'Verzauberte Lichtungen'
  },
  {
    id: 'wilder-jaeger',
    name: 'Wilder Jäger',
    nameDe: 'Wilder Jäger',
    description: 'Ghostly hunting party, omen of misfortune.',
    descriptionDe: 'Geisterhafte Jagdgesellschaft, Vorzeichen von Unheil.',
    lore: 'When storm clouds gather over the Black Forest and the wind howls like hunting horns, beware the Wild Hunt. Led by Wodan, this spectral procession rides through the night sky.',
    loreDe: 'Wenn sich Sturmwolken über dem Schwarzwald versammeln und der Wind wie Jagdhörner heult, hüte dich vor der Wilden Jagd.',
    image: './creatures/wilder-jaeger.jpg',
    rarity: 'epic',
    region: 'Stormy Skies',
    regionDe: 'Stürmische Himmel'
  },
  {
    id: 'tatzelwurm',
    name: 'Tatzelwurm',
    nameDe: 'Tatzelwurm',
    description: 'Cat-headed serpent of the Alpine mountains.',
    descriptionDe: 'Katzenköpfige Schlange der Alpenberge.',
    lore: 'High in the Alpine peaks, where snow never melts and eagles dare not fly, lurks the Tatzelwurm. This bizarre creature has the head of a cat and the body of a serpent.',
    loreDe: 'Hoch in den Alpengipfeln, wo Schnee niemals schmilzt und Adler nicht fliegen wagen, lauert der Tatzelwurm.',
    image: './creatures/tatzelwurm.jpg',
    rarity: 'rare',
    region: 'Alpine Peaks',
    regionDe: 'Alpengipfel'
  },
  {
    id: 'mummelsee-koenig',
    name: 'Mummelseekönig',
    nameDe: 'Mummelseekönig',
    description: 'The King of Mummel Lake, ruler of water spirits.',
    descriptionDe: 'Der König des Mummelsees, Herrscher der Wassergeister.',
    lore: 'At the heart of Mummel Lake in the Black Forest dwells an ancient water king, crowned with lilies and robed in waves. He commands all the spirits of the lake.',
    loreDe: 'Im Herzen des Mummelsees im Schwarzwald wohnt ein uralter Wasserkönig, gekrönt mit Lilien und gewandet in Wellen.',
    image: './creatures/mummelsee-koenig.jpg',
    rarity: 'legendary',
    region: 'Mummel Lake',
    regionDe: 'Mummelsee'
  },
  {
    id: 'lorelei',
    name: 'Lorelei',
    nameDe: 'Lorelei',
    description: 'The siren of the Rhine, whose song lures sailors to doom.',
    descriptionDe: 'Die Sirene des Rheins, deren Gesang Seemänner ins Verderben lockt.',
    lore: 'On a rocky precipice overlooking the Rhine River sits the Lorelei, combing her golden hair and singing a song of such heartbreaking beauty that sailors forget their steering.',
    loreDe: 'Auf einem felsigen Abgrund mit Blick auf den Rhein sitzt die Lorelei, kämmt ihr goldenes Haar und singt ein Lied von so herzzerreißender Schönheit.',
    image: './creatures/lorelei.jpg',
    rarity: 'epic',
    region: 'Rhine River',
    regionDe: 'Rhein'
  },
  {
    id: 'irrlicht',
    name: 'Irrlicht',
    nameDe: 'Irrlicht',
    description: 'Will-o-wisp that leads travelers astray in the marshes.',
    descriptionDe: 'Irrlicht, das Reisende in den Sümpfen in die Irre führt.',
    lore: 'In the misty marshes and foggy moors of the Black Forest, ghostly lights dance and flicker, leading travelers off safe paths into treacherous bogs.',
    loreDe: 'In den nebligen Sümpfen und Moorlandschaften des Schwarzwalds tanzen und flackern geisterhafte Lichter, führen Reisende von sicheren Pfaden in tückische Moore ab.',
    image: './creatures/irrlicht.jpg',
    rarity: 'common',
    region: 'Marshes & Moors',
    regionDe: 'Sümpfe & Moore'
  },
  {
    id: 'krampus',
    name: 'Krampus',
    nameDe: 'Krampus',
    description: 'The Christmas demon who punishes naughty children.',
    descriptionDe: 'Der Weihnachtsdämon, der unartige Kinder bestraft.',
    lore: 'While Saint Nicholas rewards the good, his companion Krampus deals with the naughty. This horned, furry demon appears on Krampusnacht to swat misbehaving children.',
    loreDe: 'Während der Nikolaus die Guten belohnt, kümmert sich sein Begleiter Krampus um die Unartigen. Dieser gehörnte, pelzige Dämon erscheint in der Krampusnacht.',
    image: './creatures/krampus.jpg',
    rarity: 'rare',
    region: 'Alpine Villages',
    regionDe: 'Alpen Dörfer'
  }
];

// ===== Translations =====
const TRANSLATIONS = {
  en: {
    'app.title': 'Wald der Alten',
    'nav.home': 'Home',
    'nav.draw': 'Summon',
    'nav.bestiary': 'Bestiary',
    'home.description': 'Discover the mythical creatures of German folklore. Draw cards to summon ancient beings and build your collection.',
    'home.legend': 'The old tales speak of dragons guarding treasures, dwarves mining deep, and spirits haunting the misty woods...',
    'home.start': 'Begin Your Journey',
    'bestiary.title': 'Creatures',
    'bestiary.search': 'Search creatures...',
    'bestiary.filter.all': 'All',
    'bestiary.filter.common': 'Common',
    'bestiary.filter.rare': 'Rare',
    'bestiary.filter.epic': 'Epic',
    'bestiary.filter.legendary': 'Legendary',
    'bestiary.empty': 'No creatures found',
    'draw.title': 'Summon a Creature',
    'draw.hint': 'Each summon reveals a creature from German folklore',
    'draw.button': 'Summon Creature',
    'draw.drawing': 'Summoning...',
    'draw.again': 'Summon Again',
    'draw.view': 'View Bestiary',
    'creature.rarity': 'Rarity',
    'creature.region': 'Region',
    'creature.lore': 'Lore',
    'creature.locked': 'Locked',
    'creature.lockedHint': 'Summon this creature to unlock its lore',
    'rarity.common': 'Common',
    'rarity.rare': 'Rare',
    'rarity.epic': 'Epic',
    'rarity.legendary': 'Legendary',
    'nav.back': 'Back'
  },
  de: {
    'app.title': 'Wald der Alten',
    'nav.home': 'Start',
    'nav.draw': 'Beschwören',
    'nav.bestiary': 'Bestiarium',
    'home.description': 'Entdecke die mythischen Kreaturen der deutschen Folklore. Ziehe Karten, um uralte Wesen zu beschwören.',
    'home.legend': 'Die alten Erzählungen sprechen von Drachen, die Schätze hüten, Zwergen, die tief unter der Erde schürfen...',
    'home.start': 'Beginne deine Reise',
    'bestiary.title': 'Kreaturen',
    'bestiary.search': 'Kreaturen suchen...',
    'bestiary.filter.all': 'Alle',
    'bestiary.filter.common': 'Gewöhnlich',
    'bestiary.filter.rare': 'Selten',
    'bestiary.filter.epic': 'Episch',
    'bestiary.filter.legendary': 'Legendär',
    'bestiary.empty': 'Keine Kreaturen gefunden',
    'draw.title': 'Beschwöre eine Kreatur',
    'draw.hint': 'Jede Beschwörung enthüllt eine Kreatur aus der deutschen Folklore',
    'draw.button': 'Kreatur Beschwören',
    'draw.drawing': 'Beschwörung...',
    'draw.again': 'Erneut Beschwören',
    'draw.view': 'Zum Bestiarium',
    'creature.rarity': 'Seltenheit',
    'creature.region': 'Region',
    'creature.lore': 'Überlieferung',
    'creature.locked': 'Gesperrt',
    'creature.lockedHint': 'Beschwöre diese Kreatur, um ihre Überlieferung freizuschalten',
    'rarity.common': 'Gewöhnlich',
    'rarity.rare': 'Selten',
    'rarity.epic': 'Episch',
    'rarity.legendary': 'Legendär',
    'nav.back': 'Zurück'
  }
};

// ===== State Management =====
const State = {
  language: 'en',
  currentView: 'home',
  unlockedCreatures: [],
  drawCount: 0,
  isDrawing: false,
  lastDrawnCreature: null,
  selectedCreature: null,
  bestiaryFilter: 'all',
  bestiarySearch: '',
  bestiaryViewMode: 'grid',
  showFilters: false,

  init() {
    const saved = localStorage.getItem('wald-der-alten');
    if (saved) {
      const data = JSON.parse(saved);
      this.unlockedCreatures = data.unlockedCreatures || [];
      this.drawCount = data.drawCount || 0;
    }
  },

  save() {
    localStorage.setItem('wald-der-alten', JSON.stringify({
      unlockedCreatures: this.unlockedCreatures,
      drawCount: this.drawCount
    }));
  },

  toggleLanguage() {
    this.language = this.language === 'en' ? 'de' : 'en';
    this.updateUI();
  },

  t(key) {
    return TRANSLATIONS[this.language][key] || key;
  },

  hasUnlocked(creatureId) {
    return this.unlockedCreatures.some(c => c.id === creatureId);
  },

  getUnlockedCreature(creatureId) {
    return this.unlockedCreatures.find(c => c.id === creatureId);
  },

  getRandomCreature() {
    const weights = { common: 50, rare: 30, epic: 15, legendary: 5 };
    const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
    let random = Math.random() * totalWeight;
    
    for (const [rarity, weight] of Object.entries(weights)) {
      random -= weight;
      if (random <= 0) {
        const creaturesOfRarity = CREATURES.filter(c => c.rarity === rarity);
        return creaturesOfRarity[Math.floor(Math.random() * creaturesOfRarity.length)];
      }
    }
    return CREATURES[Math.floor(Math.random() * CREATURES.length)];
  },

  async drawCreature() {
    this.isDrawing = true;
    this.render();
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const creature = this.getRandomCreature();
    const wasNew = !this.hasUnlocked(creature.id);
    
    if (wasNew) {
      this.unlockedCreatures.push({
        ...creature,
        unlockedAt: Date.now()
      });
    }
    
    this.drawCount++;
    this.lastDrawnCreature = { ...creature, wasNew };
    this.isDrawing = false;
    this.save();
    this.render();
    
    return this.lastDrawnCreature;
  },

  navigate(view) {
    this.currentView = view;
    if (view !== 'creature') {
      this.selectedCreature = null;
    }
    this.render();
  },

  selectCreature(creature) {
    this.selectedCreature = creature;
    this.currentView = 'creature';
    this.render();
  },

  updateUI() {
    // Update all text elements with data-key
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.dataset.key;
      if (key) el.textContent = this.t(key);
    });
    
    // Update language label
    const langLabel = document.getElementById('lang-label');
    if (langLabel) langLabel.textContent = this.language.toUpperCase();
    
    this.render();
  },

  render() {
    const app = document.getElementById('app');
    if (!app) return;
    
    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === this.currentView);
    });
    
    // Render current view
    switch (this.currentView) {
      case 'home':
        app.innerHTML = this.renderHome();
        this.attachHomeEvents();
        break;
      case 'draw':
        app.innerHTML = this.renderDraw();
        this.attachDrawEvents();
        break;
      case 'bestiary':
        app.innerHTML = this.renderBestiary();
        this.attachBestiaryEvents();
        break;
      case 'creature':
        app.innerHTML = this.renderCreatureDetail();
        this.attachCreatureEvents();
        break;
    }
  },

  renderHome() {
    return `
      <div class="view home-view">
        <h1 class="home-title font-fraktur">${this.t('app.title')}</h1>
        <p class="home-description">${this.t('home.description')}</p>
        <p class="home-legend">${this.t('home.legend')}</p>
        <button id="start-btn" class="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          ${this.t('home.start')}
        </button>
        <div style="margin-top: 40px; font-size: 11px; color: rgba(245, 240, 225, 0.5); text-shadow: 0 0 8px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,1);">
          15 ${this.t('bestiary.title')}
        </div>
      </div>
    `;
  },

  attachHomeEvents() {
    document.getElementById('start-btn')?.addEventListener('click', () => {
      this.navigate('draw');
    });
  },

  renderDraw() {
    const showResult = this.lastDrawnCreature && !this.isDrawing;
    
    return `
      <div class="view draw-view">
        <div class="draw-header">
          <h2 class="draw-title">${this.t('draw.title')}</h2>
          <div class="draw-counter">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>${this.drawCount}</span>
          </div>
        </div>
        
        <div class="card-container">
          ${this.isDrawing ? `
            <div class="card-drawing">
              <div class="card-drawing-inner">
                <div class="spinner"></div>
              </div>
              <p>${this.t('draw.drawing')}</p>
            </div>
          ` : showResult ? `
            <div class="card-revealed rarity-${this.lastDrawnCreature.rarity}" onclick="State.viewCreatureDetail()">
              <div class="card-image-container">
                <img src="${this.lastDrawnCreature.image}" alt="${this.getCreatureName(this.lastDrawnCreature)}">
                <div class="card-image-overlay"></div>
                <div class="card-rarity-badge rarity-${this.lastDrawnCreature.rarity}">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  ${this.t(`rarity.${this.lastDrawnCreature.rarity}`)}
                </div>
                ${this.lastDrawnCreature.wasNew ? `
                  <div class="card-new-badge">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    NEW
                  </div>
                ` : ''}
              </div>
              <div class="card-content">
                <h3 class="card-name">${this.getCreatureName(this.lastDrawnCreature)}</h3>
                <p class="card-region">${this.getCreatureRegion(this.lastDrawnCreature)}</p>
                <p class="card-description">${this.getCreatureDesc(this.lastDrawnCreature)}</p>
              </div>
            </div>
          ` : `
            <div class="card-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <p>${this.t('draw.hint')}</p>
            </div>
          `}
        </div>
        
        <div class="draw-buttons">
          ${showResult ? `
            <button id="draw-again-btn" class="btn-secondary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 4 23 10 17 10"></polyline>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
              </svg>
              ${this.t('draw.again')}
            </button>
            <button id="view-bestiary-btn" class="btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              ${this.t('draw.view')}
            </button>
          ` : `
            <button id="draw-btn" class="btn-primary" ${this.isDrawing ? 'disabled' : ''}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              ${this.t('draw.button')}
            </button>
          `}
        </div>
      </div>
    `;
  },

  attachDrawEvents() {
    document.getElementById('draw-btn')?.addEventListener('click', () => {
      this.drawCreature();
    });
    document.getElementById('draw-again-btn')?.addEventListener('click', () => {
      this.lastDrawnCreature = null;
      this.drawCreature();
    });
    document.getElementById('view-bestiary-btn')?.addEventListener('click', () => {
      this.navigate('bestiary');
    });
  },

  viewCreatureDetail() {
    if (this.lastDrawnCreature) {
      this.selectCreature(this.lastDrawnCreature);
    }
  },

  renderBestiary() {
    const filtered = CREATURES.filter(c => {
      const matchesFilter = this.bestiaryFilter === 'all' || c.rarity === this.bestiaryFilter;
      const searchLower = this.bestiarySearch.toLowerCase();
      const matchesSearch = !this.bestiarySearch || 
        c.name.toLowerCase().includes(searchLower) ||
        c.nameDe.toLowerCase().includes(searchLower);
      return matchesFilter && matchesSearch;
    });

    return `
      <div class="view bestiary-view">
        <div class="bestiary-header">
          <h2 class="bestiary-title">${this.t('bestiary.title')}</h2>
          <div class="bestiary-progress">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>${this.unlockedCreatures.length}/${CREATURES.length}</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${(this.unlockedCreatures.length / CREATURES.length) * 100}%"></div>
            </div>
          </div>
        </div>
        
        <div class="bestiary-controls">
          <div class="search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input type="text" id="search-input" placeholder="${this.t('bestiary.search')}" value="${this.bestiarySearch}">
          </div>
          <button id="filter-toggle" class="filter-btn ${this.showFilters ? 'active' : ''}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
          </button>
          <button id="view-toggle" class="view-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              ${this.bestiaryViewMode === 'grid' 
                ? '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>'
                : '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>'
              }
            </svg>
          </button>
        </div>
        
        ${this.showFilters ? `
          <div class="filter-pills">
            ${['all', 'common', 'rare', 'epic', 'legendary'].map(r => `
              <button class="filter-pill ${this.bestiaryFilter === r ? 'active' : ''}" data-rarity="${r}">
                ${this.t(`bestiary.filter.${r}`)}
              </button>
            `).join('')}
          </div>
        ` : ''}
        
        ${filtered.length === 0 ? `
          <div class="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <p>${this.t('bestiary.empty')}</p>
          </div>
        ` : this.bestiaryViewMode === 'grid' ? `
          <div class="creature-grid">
            ${filtered.map(c => this.renderCreatureCard(c)).join('')}
          </div>
        ` : `
          <div class="creature-list">
            ${filtered.map(c => this.renderCreatureListItem(c)).join('')}
          </div>
        `}
      </div>
    `;
  },

  renderCreatureCard(creature) {
    const isUnlocked = this.hasUnlocked(creature.id);
    const name = this.getCreatureName(creature);
    
    return `
      <div class="creature-card ${isUnlocked ? '' : 'locked'}" onclick="State.selectCreatureById('${creature.id}')">
        <img src="${creature.image}" alt="${name}" loading="lazy">
        <div class="creature-card-overlay"></div>
        ${!isUnlocked ? `
          <div class="creature-card-locked">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
        ` : ''}
        <div class="creature-card-info">
          ${isUnlocked ? `
            <div class="creature-card-rarity rarity-${creature.rarity}">
              ${this.t(`rarity.${creature.rarity}`).charAt(0)}
            </div>
          ` : ''}
          <div class="creature-card-name">${name}</div>
        </div>
      </div>
    `;
  },

  renderCreatureListItem(creature) {
    const isUnlocked = this.hasUnlocked(creature.id);
    const name = this.getCreatureName(creature);
    const desc = isUnlocked ? this.getCreatureDesc(creature) : this.t('creature.lockedHint');
    
    return `
      <div class="creature-list-item ${isUnlocked ? '' : 'locked'}" onclick="State.selectCreatureById('${creature.id}')">
        <div class="creature-list-thumb">
          <img src="${creature.image}" alt="${name}" loading="lazy">
        </div>
        <div class="creature-list-info">
          <div class="creature-list-header">
            <span class="creature-list-name">${name}</span>
            ${isUnlocked ? `
              <span class="creature-list-rarity rarity-${creature.rarity}">${this.t(`rarity.${creature.rarity}`)}</span>
            ` : ''}
          </div>
          <p class="creature-list-desc">${desc}</p>
        </div>
        <div class="creature-list-status ${isUnlocked ? 'unlocked' : 'locked'}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${isUnlocked 
              ? '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>'
              : '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>'
            }
          </svg>
        </div>
      </div>
    `;
  },

  attachBestiaryEvents() {
    document.getElementById('search-input')?.addEventListener('input', (e) => {
      this.bestiarySearch = e.target.value;
      this.render();
    });
    
    document.getElementById('filter-toggle')?.addEventListener('click', () => {
      this.showFilters = !this.showFilters;
      this.render();
    });
    
    document.getElementById('view-toggle')?.addEventListener('click', () => {
      this.bestiaryViewMode = this.bestiaryViewMode === 'grid' ? 'list' : 'grid';
      this.render();
    });
    
    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        this.bestiaryFilter = pill.dataset.rarity;
        this.render();
      });
    });
  },

  selectCreatureById(id) {
    const creature = CREATURES.find(c => c.id === id);
    if (creature) {
      this.selectCreature(creature);
    }
  },

  renderCreatureDetail() {
    const creature = this.selectedCreature;
    if (!creature) return '';
    
    const isUnlocked = this.hasUnlocked(creature.id);
    const unlockedData = this.getUnlockedCreature(creature.id);
    
    return `
      <div class="view detail-view">
        <button class="detail-back" onclick="State.goBack()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          ${this.t('nav.back')}
        </button>
        
        <div class="detail-card rarity-${creature.rarity}">
          <div class="detail-image-container">
            <img src="${creature.image}" alt="${this.getCreatureName(creature)}">
            <div class="detail-image-overlay"></div>
            
            ${!isUnlocked ? `
              <div class="detail-locked-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <p>${this.t('creature.locked')}</p>
              </div>
            ` : ''}
            
            <div class="detail-rarity-badge rarity-${creature.rarity}">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              ${this.t(`rarity.${creature.rarity}`)}
            </div>
            
            <div class="detail-title-overlay">
              <h1 class="detail-name">${this.getCreatureName(creature)}</h1>
              <div class="detail-region">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                ${this.getCreatureRegion(creature)}
              </div>
            </div>
          </div>
          
          <div class="detail-content">
            ${isUnlocked && unlockedData ? `
              <div class="detail-stats">
                <div class="detail-stat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>${new Date(unlockedData.unlockedAt).toLocaleDateString(this.language === 'de' ? 'de-DE' : 'en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
              </div>
            ` : ''}
            
            <h3 class="detail-lore-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              ${this.t('creature.lore')}
            </h3>
            
            ${isUnlocked ? `
              <p class="detail-description">${this.getCreatureDesc(creature)}</p>
              <div class="detail-lore">
                <p>${this.getCreatureLore(creature)}</p>
              </div>
            ` : `
              <div class="detail-locked-hint">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <p>${this.t('creature.lockedHint')}</p>
              </div>
            `}
          </div>
        </div>
      </div>
    `;
  },

  attachCreatureEvents() {
    // Events attached inline via onclick
  },

  goBack() {
    if (this.selectedCreature && this.hasUnlocked(this.selectedCreature.id)) {
      this.navigate('bestiary');
    } else {
      this.navigate('draw');
    }
  },

  // Helper methods
  getCreatureName(creature) {
    return this.language === 'de' ? creature.nameDe : creature.name;
  },

  getCreatureRegion(creature) {
    return this.language === 'de' ? creature.regionDe : creature.region;
  },

  getCreatureDesc(creature) {
    return this.language === 'de' ? creature.descriptionDe : creature.description;
  },

  getCreatureLore(creature) {
    return this.language === 'de' ? creature.loreDe : creature.lore;
  }
};

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  State.init();
  
  // Navigation events
  document.querySelectorAll('.nav-btn[data-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      State.navigate(btn.dataset.view);
    });
  });
  
  // Language toggle
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    State.toggleLanguage();
  });
  
  // Initial render
  State.render();
});

// Make State globally accessible for inline event handlers
window.State = State;
