  /* =========================================================
     1) MOBILE NAV TOGGLE
     Concepts: querySelector / getElementById, addEventListener,
     click event, .style property
     ========================================================= */
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", function () {
    if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
    }
  });

  /* =========================================================
     2) HERO PATTERN — built from a plain for loop.
     This is the DOM-manipulation concept (createElement +
     appendChild) doing double duty as the brand's visual idea:
     a repeated grid = boredom, one broken cell = the brand.
     ========================================================= */
  const heroPattern = document.getElementById("heroPattern");
  const totalCells = 48;
  const breakIndex = 21; // the one cell that "escapes" the grid

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.textContent = "ملال";
    cell.className = "pattern-cell";
    if (i === breakIndex) {
      cell.classList.add("break");
    }
    heroPattern.appendChild(cell);
  }

  /* =========================================================
     3) PRODUCTS — array of objects, rendered with forEach.
     Concepts: arrays, objects, arrays of objects, forEach,
     createElement, appendChild, functions with parameters/return
     ========================================================= */
  const products = [
    { id: 1, name: "Loop Breaker Hoodie", price: 6500, tag: "NEW" },
    { id: 2, name: "Static Tee",          price: 2800, tag: "" },
    { id: 3, name: "No Repeat Cargos",    price: 7200, tag: "NEW" },
    { id: 4, name: "Glitch Jacket",       price: 11500, tag: "" },
    { id: 5, name: "Ennui Crewneck",      price: 5400, tag: "" },
    { id: 6, name: "Malal Script Cap",    price: 2200, tag: "NEW" },
    { id: 7, name: "Off-Loop Shorts",     price: 3600, tag: "" },
    { id: 8, name: "Restless Tote",       price: 1800, tag: "" }
  ];

  // function with a parameter and a return value
  function formatPrice(amount) {
    return "Rs. " + amount.toLocaleString();
  }

  const productGrid = document.getElementById("productGrid");
  const bagCount = document.getElementById("bagCount");

  products.forEach(function (product) {
    // ---- build the card ----
    const card = document.createElement("div");
    card.className = "card";

    const swatch = document.createElement("div");
    swatch.className = "card-swatch";
    swatch.textContent = "ملال";

    const body = document.createElement("div");
    body.className = "card-body";

    if (product.tag) {
      const tag = document.createElement("span");
      tag.className = "card-tag";
      tag.textContent = product.tag;
      body.appendChild(tag);
    }

    const name = document.createElement("p");
    name.className = "card-name";
    name.textContent = product.name;

    const price = document.createElement("p");
    price.className = "card-price";
    price.textContent = formatPrice(product.price);

    const addBtn = document.createElement("button");
    addBtn.className = "add-btn";
    addBtn.textContent = "Add to Bag";

    // click event: update the bag count and give quick feedback
    addBtn.addEventListener("click", function () {
      bagCount.textContent = parseInt(bagCount.textContent) + 1;

      addBtn.textContent = "Added ✓";
      addBtn.style.background = "var(--gold)";
      addBtn.style.color = "#14151f";

      setTimeout(function () {
        addBtn.textContent = "Add to Bag";
        addBtn.style.background = "transparent";
        addBtn.style.color = "var(--ink)";
      }, 1200);
    });

    body.appendChild(name);
    body.appendChild(price);
    body.appendChild(addBtn);

    card.appendChild(swatch);
    card.appendChild(body);
    productGrid.appendChild(card);
  });

  /* =========================================================
     4) NEWSLETTER FORM
     Concepts: form handling, event.preventDefault, textContent
     ========================================================= */
  const newsletterForm = document.getElementById("newsletterForm");
  const formMsg = document.getElementById("formMsg");

  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    formMsg.textContent = "You're on the list. No boredom incoming.";
    newsletterForm.reset();

    setTimeout(function () {
      formMsg.textContent = "";
    }, 4000);
  });