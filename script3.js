//recipes with ingredients array
const prawnrisotto = [
    "leek",
    "garlic",
    "parsley",
    "veg stock",
    "tomato puree",
    "rice",
    "prawns",
    "grated cheese",
  ];
  const prawnrisotto2 = [
    "Leek (2)",
    "Vinegar (30ml)",
    "Red-Chilli",
    "Garlic (4)",
    "Parsley (handful)",
    "Veg-Stock (40g)",
    "Tomato-Puree (4 tblsp/60g)",
    "Rice (315g)",
    "Prawns (450g)",
    "Grated-Cheese (80g)",
  ];
  
  const prawnlinguine = [
    "parsley",
    "onion",
    "garlic",
    "spaghetti/noodles",
    "veg stock",
    "prawns",
    "creme fraishe",
  ];
  const prawnlinguine2 = [
    "Lemon (1)",
    "Parsley (handful)",
    "Onion (1)",
    "Garlic (2)",
    "Linguine-Pasta (400g)",
    "Veg-Stock (20g)",
    "Prawns (350g)",
    "Peas (240g)",
    "Creme-Fraishe (150g)",
  ];
  
  const peppercorntaco = [
    "sweetcorn",
    "pepper",
    "grated cheese",
    "greek cheese",
    "wrap",
    "yoghurt",
  ];
  const peppercorntaco2 = [
    "Sweetcorn (326g)",
    "Pepper (2)",
    "Grated-Cheese (120g)",
    "Greek-Cheese (100g)",
    "Central-American-Spcies (4 sachets)",
    "Wrap (8)",
    "Soured-Cream (100g)",
  ];
  
  const sharbalibya = [
    "onion",
    "lamb",
    "tomato sauce",
    "tomato puree",
    "coriander leaf/spice",
    "mint",
  ];
  const sharbalibya2 = [
    "Onion (1/2)",
    "Lamb (500g)",
    "Tomato-Sauce (200g)",
    "Tomato-Puree (1 tblsp/20g)",
    "Coriander (handful)",
    "Orzo pasta/Spaghetti (100g)",
    "Mint (handful)",
  ];
  
  const haloumiburger = ["pepper", "haloumi cheese", "burger buns"];
  const haloumiburger2 = [
    "Pepper (2)",
    "Haloumi-Cheese (600g)",
    "Burger-Buns (8)",
    "Sweet-Chilli-Sauce",
  ];
  
  const bamia = ["rice", "okra", "onion", "lamb", "tomato puree", "garlic"];
  const bamia2 = [
    "Rice (315g)",
    "Okra (500g)",
    "Onion (3)",
    "Lamb (500g)",
    "Tomato.Puree (6 tblsp)",
    "Cumin",
    "Coriander",
    "Black-Pepper",
    "Garlic",
  ];
  
  const lambrice = ["rice", "lamb"];
  const lambrice2 = ["Rice (315g)", "Lamb (1kg)", "BlackPepper", "Tumeric"];
  
  const beefteriyakinoodles = [
    "teriyaki sauce",
    "mince meat",
    "spaghetti/noodles",
    "garlic",
    "ginger spice/puree",
    "green beans/asparagus",
    "coriander leaf/spice"
  ];
  const beefteriyakinoodles2 = [
    "Teriyaki-Sauce (300g)",
    "Beef (400g)",
    "Noodles (400g)",
    "Garlic (3)",
    "Ginger-Puree",
    "Green-Beans (handful)",
    "Chinese-Leaf (240g)",
    "Coriander (handful)",
    "Aubergine (2)"
  ];
  
  const lasagne = [
    "onion",
    "mince meat",
    "lasagne sauce",
    "lasagne sheets",
    "milk",
    "butter",
    "flour"
  ];



    const chilliconcarne = [
    "pepper",
    "mince meat",
    "onion",
    "tomato sauce",
    "garlic",
    "coriander leaf/spice",  
    "tomato puree",
    "rice"];
    
    const chickenpasta = [
    "pasta ",
    "chicken",
    "onion",
    "tomato sauce",
    "garlic",
    "spinach",  
    "grated cheese",
    "creme fraishe"];
    
    const thaigreencurry = [
    "green beans/asparagus",
    "chicken",
    "coconut milk",
    "thai green paste",
    "rice",  
    "pepper"];
    
    const sweetchickennoodles= [
    "spaghetti/noodles",
    "chicken",
    "honey",
    "soy sauce",
    "vinegar"];
    
    const burgerandfries= [
    "burger buns",
    "mince meat"];
    
    const macandcheese= [
    "grated cheese",
    "breadcrumbs",
    "pasta",
    "veg stock",
    "creme fraishe"   
    ];
    
    const stuffedvineleaves= [
    "vine leaves",
    "rice",
    "mince meat",
    "parsley",
    "tomato puree",
    "onion"];
    
    const kabsa= [
    "tomatoes",
    "rice",
    "garlic",
    "chicken",
    "tomato puree",
    "onion"
    ];
  
  //ingredients checkboxes in make.html
  const tompuree = document.querySelectorAll(".checkboxes")[0];
  const tomsauce = document.querySelectorAll(".checkboxes")[1];
  const garlic = document.querySelectorAll(".checkboxes")[2];
  const wrap = document.querySelectorAll(".checkboxes")[3];
  const leek = document.querySelectorAll(".checkboxes")[4];
  const pepper = document.querySelectorAll(".checkboxes")[5];
  const prawns = document.querySelectorAll(".checkboxes")[6];
  const gratedcheese = document.querySelectorAll(".checkboxes")[7];
  const greekcheese = document.querySelectorAll(".checkboxes")[8];
  const vegstock = document.querySelectorAll(".checkboxes")[9];
  const spaghetti = document.querySelectorAll(".checkboxes")[10];
  const pasta = document.querySelectorAll(".checkboxes")[11];
  const rice = document.querySelectorAll(".checkboxes")[12];
  const yoghurt = document.querySelectorAll(".checkboxes")[13];
  const sweetcorn = document.querySelectorAll(".checkboxes")[14];
  const parsley = document.querySelectorAll(".checkboxes")[15];
  const onion = document.querySelectorAll(".checkboxes")[16];
  const cremefraishe = document.querySelectorAll(".checkboxes")[17];
  const coriander = document.querySelectorAll(".checkboxes")[18];
  const mint = document.querySelectorAll(".checkboxes")[19];
  const lamb = document.querySelectorAll(".checkboxes")[20];
  const chicken = document.querySelectorAll(".checkboxes")[21];
  const mincemeat = document.querySelectorAll(".checkboxes")[22];
  const lasagnesauce = document.querySelectorAll(".checkboxes")[23];
  const lasagnesheets = document.querySelectorAll(".checkboxes")[24];
  const milk = document.querySelectorAll(".checkboxes")[25];
  const butter = document.querySelectorAll(".checkboxes")[26];
  const flour = document.querySelectorAll(".checkboxes")[27];
  const teriyakisauce = document.querySelectorAll(".checkboxes")[28];
  const ginger = document.querySelectorAll(".checkboxes")[29];
  const greenbeans = document.querySelectorAll(".checkboxes")[30];
  const okra = document.querySelectorAll(".checkboxes")[31];
  const burgerbuns = document.querySelectorAll(".checkboxes")[32];
  const haloumicheese = document.querySelectorAll(".checkboxes")[33];
  const spinach = document.querySelectorAll(".checkboxes")[34];
  const coconutmilk = document.querySelectorAll(".checkboxes")[35];
  const thaigreenpaste = document.querySelectorAll(".checkboxes")[36];
  const honey = document.querySelectorAll(".checkboxes")[37];
  const soysauce = document.querySelectorAll(".checkboxes")[38];
  const vinegar = document.querySelectorAll(".checkboxes")[39];
  const breadcrumbs = document.querySelectorAll(".checkboxes")[40];
  const vineleaves = document.querySelectorAll(".checkboxes")[41];
  

  
  //recipe results from button
  const resultslist = document.getElementById("results-list");
  
  //the selected ingredients new array
  const ingredients = new Array();
  const recipesarray = new Array();
  


  
  $(document).ready(function () {
    $(":checkbox").each(function () {
      $(this).attr("checked", false);
    });
  });

  /*adding or removing selected ingredients to the 
  ingrdeints array*/
  function validate(ing) {
    i = ing.value;

    if (ing.checked == true) {
      ingredients.push(i);
      console.log(ingredients);
    } else {
      var index = ingredients.indexOf(i);
      if (index > -1) {
        ingredients.splice(index, 1);
      } 
    }
  }
  
  /*once button is clicked first removes any results 
  then alerts if no ingredients are selected
  then triggers the compare function*/
  function results() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;    while (resultslist.hasChildNodes()) {
      resultslist.removeChild(resultslist.firstChild);
    }
    if (ingredients.length < 1) {
      alert("Please select ingredients");
      $("input[type=checkbox]").removeAttr("checked");
    } else {
      compare();
    }
  }
  

  
  /*checks if the selected ingredients array matches any recipe
  arrays and then sets variables to approprite name then 
  triggers the add function*/
  function compare() {
    if (prawnrisotto.every((elem) => ingredients.includes(elem))) {
      p = "Prawn";
      s = "Risotto";
      t = ""
      add();
    }
    if (peppercorntaco.every((elem) => ingredients.includes(elem))) {
      p = "PepperCorn";
      s = "Taco";
      t = ""
      add();
    }
    if (prawnlinguine.every((elem) => ingredients.includes(elem))) {
      p = "Prawn";
      s = "Linguine";
      t = ""
      add();
    }
    if (sharbalibya.every((elem) => ingredients.includes(elem))) {
      p = "Sharba";
      s = "Libya";
      t = ""
      add();
    }
    if (bamia.every((elem) => ingredients.includes(elem))) {
      p = "Bamia";
      s = "";
      t = ""
      add();
    }
    if (lambrice.every((elem) => ingredients.includes(elem))) {
      p = "Lamb";
      s = "Rice";
      t = ""
      add();
    }
    if (lasagne.every((elem) => ingredients.includes(elem))) {
      p = "Lasagne";
      s = "";
      add();
    }
    if (haloumiburger.every((elem) => ingredients.includes(elem))) {
      p = "Haloumi";
      s = "Burger";
      add();
    }
    if (beefteriyakinoodles.every((elem) => ingredients.includes(elem))) {
      p = "Beef";
      s = "Teriyaki";
      t = "Noodles"
      add();
    } 
    if (lasagne.every((elem) => ingredients.includes(elem))) {
      p = "Lasagne";
      s = "";
      t = ""
      add();
    }
    if (chilliconcarne.every((elem) => ingredients.includes(elem))) {
      p = "Chilli";
      s = "Con";
      t = "Carne"
      add();
    }
    if (chickenpasta.every((elem) => ingredients.includes(elem))) {
      p = "Chicken";
      s = "Pasta";
      t = ""
      add();
    }
    if (thaigreencurry.every((elem) => ingredients.includes(elem))) {
      p = "Thai";
      s = "Green";
      t = "Curry";
      add();
    }
    if (sweetchickennoodles.every((elem) => ingredients.includes(elem))) {
      p = "Sweet";
      s = "Chicken";
      t = "Noodles"
      add();
    }
    if (burgerandfries.every((elem) => ingredients.includes(elem))) {
      p = "Burger";
      s = "and";
      t = "Fries"
      add();
    }
    if (macandcheese.every((elem) => ingredients.includes(elem))) {
      p = "Mac";
      s = "and";
      t = "Cheese"
      add();
    }
    if (stuffedvineleaves.every((elem) => ingredients.includes(elem))) {
      p = "Stuffed";
      s = "Vine";
      t = "Leaves"
      add();
    }
    if (kabsa.every((elem) => ingredients.includes(elem))) {
      p = "Kabsa";
      s = "";
      t = ""
      add();
    }
    
    else {
      validate();
    }
  }
  
  /*adds a list and anchor element to the empty unordered
  list to display the previously triggered recipes  */
  function add() {
    const newlist = document.createElement("li");
    const newlista = document.createElement("a");
    resultslist.appendChild(newlist);
    newlist.appendChild(newlista);
    newlista.href = p + s + t + ".html";
    newlista.innerHTML = p + " " + s + " " + t;
  }
  
  