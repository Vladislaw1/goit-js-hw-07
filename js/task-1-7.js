    const categoriEl = document.querySelectorAll(".item");
      console.log(`В списке ${categoriEl.length} категории.`);

      for(const element of categoriEl){
        const h2El = element.firstElementChild.textContent;
        console.log(h2El);
        const listItemEl = element.lastElementChild.querySelectorAll('ul li')
        console.log(listItemEl.length);
      }
    
      console.log(listEl)