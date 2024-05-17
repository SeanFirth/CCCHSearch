
charity = function(word){
  var query = word;
  chrome.tabs.create({url: "https://register-of-charities.charitycommission.gov.uk/charity-search/-/results/page/1/delta/20/keywords/"
+ query});  };

company = function(word){
  var query = word;
  chrome.tabs.create({url: "https://find-and-update.company-information.service.gov.uk/search?q="
+ query});  };

chrome.contextMenus.removeAll(function() {
    chrome.contextMenus.create({
     id: "charity",
     title: "Search Charity Commission",
     contexts:["selection"], 
    }); 

  
    chrome.contextMenus.create({
      id: "company",
      title: "Search Companies House",
      contexts:["selection"],
    })

  })

  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId == "company") {
      company(info.selectionText);
    }
    else if (info.menuItemId == "charity") {
      charity(info.selectionText);
    }
  });

