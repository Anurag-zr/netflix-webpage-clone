const tabsList = document.querySelectorAll(".tab-items");
// console.log(tabsList);
const tabContentItems = document.querySelectorAll(".tab-content-item");

tabsList.forEach((item) => item.addEventListener("click", selectTab));

function selectTab() {
  //   console.log(this);   Tab selected at this stage

  //add border to tab and show tab-content
  removeBorder(); //first remove border from all tabs

  //add border to selected tab
  this.classList.add("tab-border");

  //show selected tab content
  removeTabContent(); //first remove all tab content

  //add show class for selected tab
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabsList.forEach((item) => {
    item.classList.remove("tab-border");
  });
}

function removeTabContent() {
  tabContentItems.forEach((item) => {
    item.classList.remove("show");
  });
}
