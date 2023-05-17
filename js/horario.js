const time = () => {
  const activerow = document.querySelector("#activerow");

  const monday = document.querySelector(".monday");
  const tuesday = document.querySelector(".tuesday");
  const wednesday = document.querySelector(".wednesday");
  const thursday = document.querySelector(".thursday");
  const friday = document.querySelector(".friday");
  const saturday = document.querySelector(".saturday");
  const sunday = document.querySelector(".sunday");

  switch (new Date().getDay()) {
    case 1:
      monday.setAttribute("id", "activerow");
      break;
    case 2:
      tuesday.setAttribute("id", "activerow");
      break;
    case 3:
      wednesday.setAttribute("id", "activerow");
      break;
    case 4:
      thursday.setAttribute("id", "activerow");
      break;
    case 5:
      friday.setAttribute("id", "activerow");
      break;
    case 6:
      saturday.setAttribute("id", "activerow");
      break;
    case 0:
      sunday.setAttribute("id", "activerow");
      break;
  }
};
time();
