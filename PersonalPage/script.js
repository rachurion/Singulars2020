function showOne(toShow, group, toRemove) {
  console.log("enters function")
  let optionToShow;
  for(let option of group) {
    if (option.classList.contains(toShow)){
      if(!(option.classList.contains(toRemove))) {
        optionToShow = option;
      }
      continue;
    } else  {
      option.classList.remove(toRemove);
      
    }
  }
  if (optionToShow) setTimeout(() => optionToShow.classList.add(toRemove), 1000);

}