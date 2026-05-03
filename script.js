const foodCatalog = [
  {
    name: "Pizza",
    icon: "🍕",
    variants: ["Margherita Pizza", "Pepperoni Pizza", "Mushroom Pizza"]
  },
  {
    name: "Tacos",
    icon: "🌮",
    variants: ["Beef Tacos", "Fish Tacos", "Veggie Tacos"]
  },
  {
    name: "Sushi",
    icon: "🍣",
    variants: ["Nigiri Sushi", "Maki Sushi", "California Roll"]
  },
  {
    name: "Ramen",
    icon: "🍜",
    variants: ["Tonkotsu Ramen", "Shoyu Ramen", "Miso Ramen"]
  },
  {
    name: "Burgers",
    icon: "🍔",
    variants: ["Cheeseburger", "Chicken Burger", "Veggie Burger"]
  },
  {
    name: "Curry",
    icon: "🍛",
    variants: ["Japanese Curry", "Indian Curry", "Thai Curry"]
  },
  {
    name: "Dumplings",
    icon: "🥟",
    variants: ["Pork Dumplings", "Kimchi Dumplings", "Veggie Dumplings"]
  },
  {
    name: "Pasta",
    icon: "🍝",
    variants: ["Carbonara", "Bolognese", "Pesto Pasta"]
  },
  {
    name: "Spicy Rice Cake",
    icon: "🌶",
    aliases: ["tteokbokki", "spicy rice cakes"],
    variants: ["Original Tteokbokki", "Cheese Tteokbokki", "Rose Tteokbokki"]
  },
  {
    name: "Corndog",
    icon: "🌭",
    aliases: ["corn dog", "korean corn dog"],
    variants: ["Korean Corndog", "Classic Corndog", "Cheese Corndog"]
  },
  {
    name: "Malatang",
    icon: "🥘",
    variants: ["Mild Malatang", "Spicy Malatang", "Extra Spicy Malatang"]
  },
  {
    name: "Fried Chicken",
    icon: "🍗",
    aliases: ["chicken"],
    variants: ["Korean Fried Chicken", "Southern Fried Chicken", "Nashville Hot Chicken"]
  },
  {
    name: "Sashimi",
    icon: "🐟",
    variants: ["Salmon Sashimi", "Tuna Sashimi", "Mixed Sashimi"]
  }
];

const iconMap = [
  ["pizza", "🍕"],
  ["taco", "🌮"],
  ["sushi", "🍣"],
  ["ramen", "🍜"],
  ["burger", "🍔"],
  ["curry", "🍛"],
  ["dumpling", "🥟"],
  ["pasta", "🍝"],
  ["noodle", "🍜"],
  ["spicy rice cake", "🌶"],
  ["tteokbokki", "🌶"],
  ["corn dog", "🌭"],
  ["corndog", "🌭"],
  ["malatang", "🥘"],
  ["fried chicken", "🍗"],
  ["sashimi", "🐟"],
  ["rice", "🍚"],
  ["salad", "🥗"],
  ["steak", "🥩"],
  ["chicken", "🍗"],
  ["fries", "🍟"],
  ["sandwich", "🥪"],
  ["burrito", "🌯"],
  ["cake", "🍰"],
  ["ice cream", "🍨"],
  ["donut", "🍩"],
  ["egg", "🍳"],
  ["fish", "🐟"],
  ["shrimp", "🍤"],
  ["bread", "🥖"],
  ["apple", "🍎"]
];

const bracketEl = document.querySelector("#bracket");
const foodListEl = document.querySelector("#foodList");
const championNameEl = document.querySelector("#championName");
const championPanelEl = document.querySelector(".champion-panel");
const championPlateEl = document.querySelector("#championPlate");
const championHelperEl = document.querySelector("#championHelper");
const winnerBadgeEl = document.querySelector("#winnerBadge");
const formEl = document.querySelector("#foodForm");
const inputEl = document.querySelector("#foodInput");
const quickAddListEl = document.querySelector("#quickAddList");
const clearAllBtn = document.querySelector("#clearAllBtn");
const shuffleBtn = document.querySelector("#shuffleBtn");
const resetBtn = document.querySelector("#resetBtn");
const rulesBtn = document.querySelector("#rulesBtn");
const closeRulesBtn = document.querySelector("#closeRulesBtn");
const rulesDialog = document.querySelector("#rulesDialog");
const themeSelect = document.querySelector("#themeSelect");
const wallpaperSelect = document.querySelector("#wallpaperSelect");
const languageSelect = document.querySelector("#languageSelect");

let foods = [];
let rounds = [];
let picks = {};
let currentLanguage = "en";

const translations = {
  en: {
    pageTitle: "Hmmmhmm what should Seojin eat.",
    appName: "Food Bracket",
    headline: "Hmmmhmm what should Seojin eat.",
    intro: "Having trouble picking what to eat Seojin? Hope this app help narrow it downn :))",
    rulesButton: "Rules",
    shuffleFoods: "Shuffle foods",
    resetBracket: "Reset bracket",
    guideAdd: "Add every food you would actually eat tonight.",
    guidePick: "Click your preferred food in each head-to-head matchup.",
    guideWin: "The final champion is your decision.",
    championLabel: "Champion",
    championWaiting: "Waiting on picks",
    championWaitingHelp: "Finish the final matchup to choose tonight's food.",
    winnerBadge: "Winner",
    winnerHelper: "You picked this, you can't change your mind anymore Seojin get thiss.",
    appearanceTitle: "Appearance",
    languageLabel: "Language",
    themeLabel: "Color preset",
    wallpaperLabel: "Wallpaper",
    addFoodLabel: "Add a food",
    foodPlaceholder: "malatang, corndog, biryani",
    addButton: "Add",
    quickAddTitle: "Quick add",
    clearAllButton: "Clear all",
    noFoodsSelected: "No foods selected yet. Add your own idea or use the quick add buttons above.",
    emptyBracketTitle: "Add at least two foods",
    emptyBracketBody: "Build your tournament by adding foods from the side panel. Once there are two or more options, matchups will appear here.",
    openingPicks: "Opening Picks",
    roundLabel: "Round {number}",
    finalRound: "Final",
    awaitingWinner: "Awaiting winner",
    chooseStyle: "Choose {food} style",
    removeFood: "Remove {food}",
    rulesEyebrow: "Rules",
    rulesTitle: "How Food Bracket Works",
    closeRules: "Close rules",
    ruleEmpty: "The app starts empty. Add at least two foods to start a fair tournament.",
    ruleQuick: "Use Quick add for common options, or type your own food into the input.",
    ruleMatchup: "Each matchup asks one question: which food would you rather eat right now?",
    ruleVariants: "Foods with multiple styles can be customized before you start picking.",
    ruleAdvance: "The winner of a matchup advances to the next round.",
    ruleChange: "You can change a pick by clicking another food in that matchup.",
    ruleReset: "Shuffle randomizes the starting order. Reset clears all picks but keeps the food list.",
    ruleAppearance: "Color presets and wallpapers only change the look of the page.",
    ruleChampion: "When one food wins the final, it becomes the champion."
  },
  ko: {
    pageTitle: "흠흠 서진이는 뭐 먹지?",
    appName: "푸드 브래킷",
    headline: "흠흠 서진이는 뭐 먹지?",
    intro: "뭐 먹을지 고르기 어렵니, 서진아? 이 앱이 선택지를 줄이는 데 도움이 되면 좋겠어 :))",
    rulesButton: "규칙",
    shuffleFoods: "음식 섞기",
    resetBracket: "대진표 초기화",
    guideAdd: "오늘 실제로 먹고 싶은 음식을 모두 추가하세요.",
    guidePick: "각 대결에서 더 먹고 싶은 음식을 누르세요.",
    guideWin: "마지막 우승자가 오늘의 선택입니다.",
    championLabel: "우승 메뉴",
    championWaiting: "선택을 기다리는 중",
    championWaitingHelp: "마지막 대결까지 끝내면 오늘 먹을 음식이 정해집니다.",
    winnerBadge: "우승",
    winnerHelper: "이미 골랐어. 이제 마음 못 바꿔, 서진아. 이거 먹자.",
    appearanceTitle: "화면 설정",
    languageLabel: "언어",
    themeLabel: "색상 프리셋",
    wallpaperLabel: "배경화면",
    addFoodLabel: "음식 추가",
    foodPlaceholder: "마라탕, 콘도그, 비리야니",
    addButton: "추가",
    quickAddTitle: "빠른 추가",
    clearAllButton: "모두 지우기",
    noFoodsSelected: "아직 선택한 음식이 없습니다. 직접 입력하거나 위의 빠른 추가 버튼을 사용하세요.",
    emptyBracketTitle: "음식을 두 개 이상 추가하세요",
    emptyBracketBody: "왼쪽 패널에서 음식을 추가하면 토너먼트가 만들어집니다. 후보가 두 개 이상이면 여기에 대결이 표시됩니다.",
    openingPicks: "첫 선택",
    roundLabel: "{number}라운드",
    finalRound: "결승",
    awaitingWinner: "승자 대기 중",
    chooseStyle: "{food} 스타일 선택",
    removeFood: "{food} 제거",
    rulesEyebrow: "규칙",
    rulesTitle: "푸드 브래킷 사용 방법",
    closeRules: "규칙 닫기",
    ruleEmpty: "앱은 빈 상태로 시작합니다. 공정한 토너먼트를 위해 음식을 두 개 이상 추가하세요.",
    ruleQuick: "빠른 추가를 사용하거나 입력창에 직접 음식을 입력할 수 있습니다.",
    ruleMatchup: "각 대결에서는 지금 더 먹고 싶은 음식을 하나 고르면 됩니다.",
    ruleVariants: "여러 스타일이 있는 음식은 선택을 시작하기 전에 세부 스타일을 고를 수 있습니다.",
    ruleAdvance: "대결에서 이긴 음식은 다음 라운드로 올라갑니다.",
    ruleChange: "같은 대결에서 다른 음식을 누르면 선택을 바꿀 수 있습니다.",
    ruleReset: "섞기는 시작 순서를 무작위로 바꿉니다. 초기화는 음식 목록은 유지하고 선택만 지웁니다.",
    ruleAppearance: "색상 프리셋과 배경화면은 화면 모양만 바꿉니다.",
    ruleChampion: "결승에서 한 음식이 이기면 우승 메뉴가 됩니다."
  }
};

function getIcon(name) {
  const normalized = name.toLowerCase();
  const match = iconMap.find(([key]) => normalized.includes(key));
  return match ? match[1] : "🍽";
}

function titleCase(value) {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function t(key, params = {}) {
  const dictionary = translations[currentLanguage] || translations.en;
  const template = dictionary[key] || translations.en[key] || key;
  return Object.entries(params).reduce((text, [name, value]) => {
    return text.replaceAll(`{${name}}`, value);
  }, template);
}

function applyStaticText() {
  document.documentElement.lang = currentLanguage === "ko" ? "ko" : "en";
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", t(element.dataset.i18nTitle));
  });
}

function normalizeName(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function findFoodTemplate(name) {
  const normalized = normalizeName(name);
  return foodCatalog.find((food) => {
    const aliases = food.aliases || [];
    return normalizeName(food.name) === normalized || aliases.some((alias) => normalizeName(alias) === normalized);
  });
}

function createFood(name) {
  const cleanName = titleCase(name);
  const template = findFoodTemplate(cleanName);

  if (!template) {
    return {
      name: cleanName,
      icon: getIcon(cleanName),
      variants: [],
      variant: ""
    };
  }

  const variants = [...(template.variants || [])];
  return {
    name: template.name,
    icon: template.icon,
    variants,
    variant: variants[0] || ""
  };
}

function displayFoodName(food) {
  return food.variant || food.name;
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function nextPowerOfTwo(value) {
  return 2 ** Math.ceil(Math.log2(Math.max(value, 2)));
}

function createBracket() {
  if (foods.length < 2) {
    rounds = [];
    picks = {};
    render();
    return;
  }

  const size = nextPowerOfTwo(foods.length);
  const seeds = [...foods, ...Array(size - foods.length).fill(null)];
  const roundCount = Math.log2(size);

  rounds = [
    {
      title: "Opening Picks",
      matches: pairSeeds(seeds)
    }
  ];

  for (let i = 1; i < roundCount; i += 1) {
    rounds.push({
      title: i === roundCount - 1 ? "Final" : `Round ${i + 1}`,
      matches: Array.from({ length: size / 2 ** (i + 1) }, () => [null, null])
    });
  }

  picks = {};
  autoAdvanceByes();
  render();
}

function pairSeeds(seeds) {
  const matches = [];
  for (let i = 0; i < seeds.length; i += 2) {
    matches.push([seeds[i], seeds[i + 1]]);
  }
  return matches;
}

function pickKey(roundIndex, matchIndex) {
  return `${roundIndex}-${matchIndex}`;
}

function setWinner(roundIndex, matchIndex, winner) {
  picks[pickKey(roundIndex, matchIndex)] = winner;

  const nextRound = rounds[roundIndex + 1];
  if (nextRound) {
    const nextMatchIndex = Math.floor(matchIndex / 2);
    const nextSlot = matchIndex % 2;
    nextRound.matches[nextMatchIndex][nextSlot] = winner;
    clearDownstream(roundIndex + 1, nextMatchIndex);
    autoAdvanceByes();
  }

  render();
}

function clearDownstream(roundIndex, matchIndex) {
  delete picks[pickKey(roundIndex, matchIndex)];
  const nextRound = rounds[roundIndex + 1];
  if (!nextRound) return;

  const nextMatchIndex = Math.floor(matchIndex / 2);
  const nextSlot = matchIndex % 2;
  nextRound.matches[nextMatchIndex][nextSlot] = null;
  clearDownstream(roundIndex + 1, nextMatchIndex);
}

function autoAdvanceByes() {
  let changed = true;
  while (changed) {
    changed = false;
    rounds.forEach((round, roundIndex) => {
      round.matches.forEach((match, matchIndex) => {
        const [first, second] = match;
        const existing = picks[pickKey(roundIndex, matchIndex)];
        const winner = first && !second ? first : second && !first ? second : null;
        if (winner && existing !== winner) {
          picks[pickKey(roundIndex, matchIndex)] = winner;
          const nextRound = rounds[roundIndex + 1];
          if (nextRound) {
            nextRound.matches[Math.floor(matchIndex / 2)][matchIndex % 2] = winner;
          }
          changed = true;
        }
      });
    });
  }
}

function getChampion() {
  const finalRoundIndex = rounds.length - 1;
  if (finalRoundIndex < 0) return null;
  return picks[pickKey(finalRoundIndex, 0)] || null;
}

function getRoundTitle(roundIndex) {
  if (roundIndex === 0) return t("openingPicks");
  if (roundIndex === rounds.length - 1) return t("finalRound");
  return t("roundLabel", { number: roundIndex + 1 });
}

function render() {
  renderQuickAdd();
  renderFoods();
  renderBracket();
  renderChampion();
}

function renderQuickAdd() {
  quickAddListEl.innerHTML = "";
  clearAllBtn.disabled = foods.length === 0;

  foodCatalog.forEach((food) => {
    const button = document.createElement("button");
    const isAdded = foods.some((selectedFood) => selectedFood.name === food.name);

    button.className = "quick-add-button";
    button.type = "button";
    button.disabled = isAdded;
    button.textContent = `${food.icon} ${food.name}`;
    button.addEventListener("click", () => {
      foods.push(createFood(food.name));
      createBracket();
    });

    quickAddListEl.append(button);
  });
}

function renderFoods() {
  foodListEl.innerHTML = "";

  if (!foods.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("noFoodsSelected");
    foodListEl.append(empty);
    return;
  }

  foods.forEach((food, index) => {
    const item = document.createElement("div");
    item.className = "food-pill";

    const icon = document.createElement("span");
    icon.className = "food-icon";
    icon.textContent = food.icon;

    const details = document.createElement("div");
    details.className = "food-details";

    const name = document.createElement("span");
    name.className = "food-name";
    name.textContent = food.name;
    details.append(name);

    if (food.variants.length) {
      const variantSelect = document.createElement("select");
      variantSelect.className = "variant-select";
      variantSelect.setAttribute("aria-label", t("chooseStyle", { food: food.name }));

      food.variants.forEach((variant) => {
        const option = document.createElement("option");
        option.value = variant;
        option.textContent = variant;
        variantSelect.append(option);
      });

      variantSelect.value = food.variant;
      variantSelect.addEventListener("change", () => {
        food.variant = variantSelect.value;
        createBracket();
      });
      details.append(variantSelect);
    }

    const remove = document.createElement("button");
    remove.className = "remove-food";
    remove.type = "button";
    remove.setAttribute("aria-label", t("removeFood", { food: food.name }));
    remove.textContent = "×";
    remove.addEventListener("click", () => {
      foods.splice(index, 1);
      createBracket();
    });

    item.append(icon, details, remove);
    foodListEl.append(item);
  });
}

function renderBracket() {
  bracketEl.innerHTML = "";

  if (foods.length < 2) {
    bracketEl.className = "bracket bracket-empty-wrap";
    const empty = document.createElement("div");
    empty.className = "bracket-empty";
    empty.innerHTML = `
      <h2>${t("emptyBracketTitle")}</h2>
      <p>${t("emptyBracketBody")}</p>
    `;
    bracketEl.append(empty);
    return;
  }

  bracketEl.className = "bracket";
  rounds.forEach((round, roundIndex) => {
    const roundEl = document.createElement("div");
    roundEl.className = "round";

    const title = document.createElement("div");
    title.className = "round-title";
    title.innerHTML = `<span>${getRoundTitle(roundIndex)}</span><span>${round.matches.length}</span>`;
    roundEl.append(title);

    round.matches.forEach((match, matchIndex) => {
      const [first, second] = match;
      const selected = picks[pickKey(roundIndex, matchIndex)];
      const matchEl = document.createElement("div");
      matchEl.className = `match${first || second ? "" : " pending"}`;

      [first, second].forEach((food) => {
        if (!food) {
          const bye = document.createElement("div");
          bye.className = "bye";
          bye.textContent = t("awaitingWinner");
          matchEl.append(bye);
          return;
        }

        const button = document.createElement("button");
        button.type = "button";
        button.className = selected === food ? "selected" : "";
        button.addEventListener("click", () => setWinner(roundIndex, matchIndex, food));

        const icon = document.createElement("span");
        icon.className = "seed-icon";
        icon.textContent = food.icon;

        const name = document.createElement("span");
        name.className = "seed-name";
        name.textContent = displayFoodName(food);

        button.append(icon, name);
        matchEl.append(button);
      });

      roundEl.append(matchEl);
    });

    bracketEl.append(roundEl);
  });
}

function renderChampion() {
  const champion = getChampion();
  championPanelEl.classList.toggle("has-winner", Boolean(champion));
  winnerBadgeEl.hidden = !champion;
  championNameEl.textContent = champion ? displayFoodName(champion) : t("championWaiting");
  championHelperEl.textContent = champion ? t("winnerHelper") : t("championWaitingHelp");
  championPlateEl.textContent = champion ? champion.icon : "?";
}

function readSetting(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function writeSetting(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // The app still works if browser storage is unavailable.
  }
}

function hasOption(select, value) {
  return Array.from(select.options).some((option) => option.value === value);
}

function applyAppearance(save = true) {
  document.body.dataset.theme = themeSelect.value;
  document.body.dataset.wallpaper = wallpaperSelect.value;

  if (save) {
    writeSetting("foodBracketTheme", themeSelect.value);
    writeSetting("foodBracketWallpaper", wallpaperSelect.value);
  }
}

function applyLanguage(save = true) {
  currentLanguage = languageSelect.value;
  applyStaticText();

  if (save) {
    writeSetting("foodBracketLanguage", currentLanguage);
  }

  render();
}

function loadAppearance() {
  const theme = readSetting("foodBracketTheme", "fresh");
  const wallpaper = readSetting("foodBracketWallpaper", "none");
  const language = readSetting("foodBracketLanguage", "en");

  themeSelect.value = hasOption(themeSelect, theme) ? theme : "fresh";
  wallpaperSelect.value = hasOption(wallpaperSelect, wallpaper) ? wallpaper : "none";
  languageSelect.value = hasOption(languageSelect, language) ? language : "en";
  currentLanguage = languageSelect.value;
  applyStaticText();
  applyAppearance(false);
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = titleCase(inputEl.value);
  if (!name) return;

  foods.push(createFood(name));
  inputEl.value = "";
  createBracket();
});

shuffleBtn.addEventListener("click", () => {
  foods = shuffle(foods);
  createBracket();
});

resetBtn.addEventListener("click", createBracket);

clearAllBtn.addEventListener("click", () => {
  foods = [];
  createBracket();
});

themeSelect.addEventListener("change", () => applyAppearance());

wallpaperSelect.addEventListener("change", () => applyAppearance());

languageSelect.addEventListener("change", () => applyLanguage());

rulesBtn.addEventListener("click", () => {
  rulesDialog.showModal();
});

closeRulesBtn.addEventListener("click", () => {
  rulesDialog.close();
});

rulesDialog.addEventListener("click", (event) => {
  if (event.target === rulesDialog) {
    rulesDialog.close();
  }
});

loadAppearance();
createBracket();
