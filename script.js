const recipes = [
  {
    id: "guobaorou-cunlv",
    title: "村驴锅包肉",
    category: "东北菜",
    status: "已整理",
    image: "assets/guobaorou-cover.jpg",
    source: {
      label: "小红书分享链接；同标题公开页：Bilibili BV1xy411i7Mi",
      url: "https://www.bilibili.com/video/BV1xy411i7Mi/",
    },
    summary:
      "家庭厨房版大酸甜口锅包肉。重点是土豆淀粉提前泡透、油温够高、两次复炸，最后快速裹汁，才能外壳酥脆、不容易回软。",
    badges: ["外酥里嫩", "酸甜口", "不放鸡精味精", "3-4人份"],
    metrics: [
      ["400g", "猪通脊/外脊"],
      ["250g", "土豆淀粉"],
      ["90g : 75g", "白糖 : 9度米醋"],
      ["3次", "初炸 + 两次复炸"],
    ],
    ratios: [
      ["肉", "猪通脊/外脊 400g，切成比筷子头略厚的片。"],
      ["糊", "土豆淀粉 250g；喜欢薄糊可减到 210g，不建议再少。"],
      ["汁", "白糖 90g、9度米醋 75g、生抽 1/3 勺、盐半茶勺。"],
    ],
    shopping: [
      ["猪通脊/外脊", "400g；也可买猪里脊，尽量选纯瘦、筋膜少的。"],
      ["土豆淀粉", "250g；提前至少 1 小时泡水。"],
      ["白糖", "90g。"],
      ["9度米醋", "75g；酸度低的醋会让料汁变多，影响脆度。"],
      ["生抽", "1/3 勺，只用来调颜色。"],
      ["玉米淀粉", "2g，兑 2/3 勺清水后加入糖醋汁。"],
      ["盐", "腌肉半茶勺，料汁半茶勺。"],
      ["食用油", "炸肉需要多一些；糊里另加 2 勺，豆油颜色更好。"],
      ["香菜", "1 根，切寸段。"],
      ["大葱白", "1 段，去芯后斜切丝。"],
      ["蒜", "2-3 瓣，切片。"],
      ["姜", "薄薄 2 片，切细丝；不吃姜可省。"],
      ["胡萝卜", "少许，切丝调色。"],
    ],
    steps: [
      [
        "切肉",
        "400g 猪通脊/外脊斜刀切厚片，厚度和筷子头差不多。肉片太薄，炸完容易发干发柴；喜欢更松的口感，可以用刀背轻轻拍松。",
      ],
      [
        "洗肉并入底味",
        "切好的肉用清水洗两遍，洗掉多余血水，也让肉吸进一点水分。之后尽量攥干，加入半茶勺盐，抓到盐融化、肉片黏手起胶。",
      ],
      [
        "调糖醋汁",
        "碗里放白糖 90g、9度米醋 75g、生抽 1/3 勺、盐半茶勺。另用玉米淀粉 2g 加 2/3 勺清水搅匀，再倒进糖醋汁里。大酸甜口不要放味精或鸡精。",
      ],
      [
        "准备配菜",
        "香菜切寸段，蒜切片，姜切细丝，胡萝卜切少量细丝。葱白从中间剖开，取出芯，斜着顶刀切丝。配菜主要提味提色，别放太多，水分多会让锅包肉回软。",
      ],
      [
        "调酥炸糊",
        "250g 土豆淀粉提前至少 1 小时泡水，分层后把上层清水完全倒掉。淀粉会很硬，先抓碎，再放入肉片和 3 勺清水，慢慢抓匀。合适状态是肉片提起时没有干粉脱落，糊能缓慢流动。最后加 2 勺食用油抓匀。",
      ],
      [
        "测油温",
        "锅里放宽油。用筷子蘸一点面糊下锅，如果 3 秒才浮起，油温太低；面糊一进锅就迅速浮起，油温才合适。油温不够，肉容易粘成一坨，外壳也不蓬松。",
      ],
      [
        "第一遍炸",
        "全程大火，肉片分散下锅，哪里没肉下哪里。刚下锅不要急着翻，等外壳定型后再轻轻拨散。家庭锅小的话分两锅炸，炸到外壳坚硬、颜色还比较浅时捞出。",
      ],
      [
        "第一次复炸",
        "全部肉炸完后继续大火，等约 20 秒，把肉试探着下锅进行第一次复炸。炸约 30 秒就捞出，不要久炸，避免肉片发干。",
      ],
      [
        "第二次复炸",
        "继续把油温升高，到油面微微冒烟，大约再等 1 分多钟。肉片下锅第二次复炸，这次不死看时间，看状态：外壳金黄、局部呈枣红色时立刻捞出。",
      ],
      [
        "熬汁裹肉",
        "锅里留一点点油，大火烧到冒烟。糖醋汁下锅前再搅一下，倒入锅中不停搅动，约 20 秒熬到微微挂铲。可淋一点炸肉的热油激一下香气，再倒入锅包肉和配菜，快速翻匀后马上出锅。",
      ],
    ],
    tips: [
      ["淀粉不能随便换", "这版靠土豆淀粉形成硬脆外壳，玉米淀粉这里只用于料汁增稠。"],
      ["薄糊版本", "如果喜欢外壳薄一点，土豆淀粉可从 250g 减到 210g，再少就容易裹不住肉。"],
      ["油温是关键", "下肉后 3 秒左右能上浮，说明温度比较稳；面糊慢慢沉底，多半会粘、会软。"],
      ["裹汁要快", "汁熬到能挂住肉即可，肉和配菜进去后迅速翻匀，别在锅里久炒。"],
    ],
  },
  {
    id: "placeholder-1",
    title: "下一道硬菜",
    category: "待整理",
    status: "待整理",
    image: "",
    summary: "留给你下一条视频链接。",
    badges: ["预留"],
  },
  {
    id: "placeholder-2",
    title: "朋友聚餐菜单",
    category: "待整理",
    status: "待整理",
    image: "",
    summary: "可以把适合一起上桌的菜放到这里。",
    badges: ["预留"],
  },
];

let activeRecipeId = recipes[0].id;
let activeFilter = "all";

const recipeList = document.querySelector("#recipeList");
const recipeDetail = document.querySelector("#recipeDetail");
const searchInput = document.querySelector("#recipeSearch");
const cardTemplate = document.querySelector("#recipeCardTemplate");
const copyButton = document.querySelector("#copyShoppingList");
const printButton = document.querySelector("#printRecipe");

function getActiveRecipe() {
  return recipes.find((recipe) => recipe.id === activeRecipeId) || recipes[0];
}

function recipeMatches(recipe, query) {
  const haystack = [
    recipe.title,
    recipe.category,
    recipe.summary,
    ...(recipe.badges || []),
    ...(recipe.shopping || []).flat(),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.trim().toLowerCase());
}

function renderList() {
  const query = searchInput.value;
  const visibleRecipes = recipes.filter((recipe) => {
    const filterOk = activeFilter === "all" || recipe.category === activeFilter;
    return filterOk && recipeMatches(recipe, query);
  });

  recipeList.replaceChildren();

  visibleRecipes.forEach((recipe) => {
    const node = cardTemplate.content.firstElementChild.cloneNode(true);
    node.dataset.recipeId = recipe.id;
    node.classList.toggle("is-active", recipe.id === activeRecipeId);
    node.querySelector(".recipe-card-image").src =
      recipe.image || makePlaceholderImage(recipe.title);
    node.querySelector(".recipe-card-image").alt = `${recipe.title} 图片`;
    node.querySelector(".recipe-card-meta").textContent = `${recipe.category} · ${recipe.status}`;
    node.querySelector(".recipe-card-title").textContent = recipe.title;
    node.querySelector(".recipe-card-note").textContent = recipe.summary;
    node.addEventListener("click", () => {
      activeRecipeId = recipe.id;
      renderList();
      renderDetail();
    });
    recipeList.append(node);
  });
}

function makePlaceholderImage(title) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="176" height="160" viewBox="0 0 176 160">
      <rect width="176" height="160" fill="#dceaf0"/>
      <rect x="18" y="20" width="140" height="120" rx="12" fill="#fff8e9"/>
      <circle cx="88" cy="76" r="30" fill="#b83c32" opacity=".88"/>
      <path d="M58 106h60" stroke="#2f755e" stroke-width="8" stroke-linecap="round"/>
      <text x="88" y="134" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="#24211f">${title.slice(0, 6)}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderDetail() {
  const recipe = getActiveRecipe();

  if (!recipe.shopping) {
    recipeDetail.innerHTML = `
      <section class="recipe-hero">
        <div class="recipe-hero-copy">
          <div class="badge-row">${(recipe.badges || []).map((badge) => `<span class="badge">${badge}</span>`).join("")}</div>
          <h2>${recipe.title}</h2>
          <p>${recipe.summary}</p>
        </div>
        <div class="recipe-hero-image" style="background-image:url('${recipe.image || makePlaceholderImage(recipe.title)}')"></div>
      </section>
    `;
    return;
  }

  recipeDetail.innerHTML = `
    <section class="recipe-hero">
      <div class="recipe-hero-copy">
        <div class="badge-row">${recipe.badges.map((badge) => `<span class="badge">${badge}</span>`).join("")}</div>
        <h2>${recipe.title}</h2>
        <p>${recipe.summary}</p>
        <div class="source-line">
          <span>来源整理：</span>
          <a href="${recipe.source.url}" target="_blank" rel="noreferrer">${recipe.source.label}</a>
        </div>
      </div>
      <div class="recipe-hero-image" style="background-image:url('${recipe.image}')"></div>
    </section>

    <section class="detail-grid">
      <aside class="shopping-panel">
        <div class="section-title">
          <h3>采购清单</h3>
          <span class="section-kicker">${recipe.shopping.length} 项</span>
        </div>
        <ul class="checklist">
          ${recipe.shopping
            .map(
              ([name, note], index) => `
                <li>
                  <input type="checkbox" id="ingredient-${index}" />
                  <label for="ingredient-${index}">
                    <span class="ingredient-name">${name}</span>
                    <span class="ingredient-note">${note}</span>
                  </label>
                </li>`
            )
            .join("")}
        </ul>
      </aside>

      <div class="main-panel">
        <div class="metrics">
          ${recipe.metrics
            .map(
              ([value, label]) => `
                <div class="metric">
                  <strong>${value}</strong>
                  <span>${label}</span>
                </div>`
            )
            .join("")}
        </div>

        <div class="section-title">
          <h3>核心比例</h3>
          <span class="section-kicker">按原视频口播整理</span>
        </div>
        <div class="ratio-grid">
          ${recipe.ratios
            .map(
              ([label, value]) => `
                <div class="ratio">
                  <strong>${label}</strong>
                  <span>${value}</span>
                </div>`
            )
            .join("")}
        </div>

        <div class="section-title">
          <h3>详细步骤</h3>
          <span class="section-kicker">${recipe.steps.length} 步</span>
        </div>
        <ol class="steps">
          ${recipe.steps
            .map(
              ([title, body]) => `
                <li>
                  <div>
                    <span class="step-title">${title}</span>
                    <p class="step-body">${body}</p>
                  </div>
                </li>`
            )
            .join("")}
        </ol>

        <div class="tips">
          ${recipe.tips
            .map(
              ([title, body]) => `
                <div class="tip">
                  <strong>${title}</strong>
                  <p>${body}</p>
                </div>`
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function copyShoppingList() {
  const recipe = getActiveRecipe();
  if (!recipe.shopping) return;

  const text = [
    `${recipe.title}采购清单`,
    ...recipe.shopping.map(([name, note]) => `- ${name}：${note}`),
  ].join("\n");

  navigator.clipboard
    .writeText(text)
    .then(() => showToast("采购清单已复制"))
    .catch(() => showToast("复制失败，请手动选择清单"));
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.append(toast);
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  window.setTimeout(() => {
    toast.classList.remove("is-visible");
    window.setTimeout(() => toast.remove(), 220);
  }, 1800);
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeFilter = tab.dataset.filter;
    document.querySelectorAll(".tab").forEach((item) => {
      item.classList.toggle("is-active", item === tab);
    });
    renderList();
  });
});

searchInput.addEventListener("input", renderList);
copyButton.addEventListener("click", copyShoppingList);
printButton.addEventListener("click", () => window.print());

renderList();
renderDetail();

if (window.lucide) {
  window.lucide.createIcons();
}
