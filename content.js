const companyDatabase = {
  "Google": "Google LLC is an American multinational technology company.",
  "Microsoft": "Microsoft Corporation is an American multinational technology company.",
  "Apple": "Apple Inc. is an American multinational technology company that designs, manufactures, and markets consumer electronics and software.",
  "Amazon": "Amazon.com, Inc. is an American multinational technology company that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  "Facebook": "Facebook, Inc., now known as Meta Platforms, Inc., is an American multinational technology conglomerate known for its social media platform.",
  "Tesla": "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California.",
  "IBM": "International Business Machines Corporation (IBM) is an American multinational technology and consulting company.",
  "Intel": "Intel Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California.",
  "Samsung": "Samsung Electronics Co., Ltd. is a South Korean multinational electronics company headquartered in Suwon, South Korea.",
  "Sony": "Sony Group Corporation is a Japanese multinational conglomerate corporation headquartered in Kōnan, Minato, Tokyo.",
  "Cisco": "Cisco Systems, Inc. is an American multinational technology conglomerate headquartered in San Jose, California.",
  "Oracle": "Oracle Corporation is an American multinational computer technology corporation headquartered in Austin, Texas.",
  "Netflix": "Netflix, Inc. is an American subscription streaming service and production company.",
  "Adobe": "Adobe Inc. is an American multinational computer software company headquartered in San Jose, California.",
  "HP": "The Hewlett-Packard Company, commonly shortened to Hewlett-Packard or HP, was an American multinational information technology company.",
  "Twitter": "Twitter, Inc. is an American microblogging and social networking service.",
  "Uber": "Uber Technologies, Inc. is an American technology company. Its services include ride-hailing, food delivery (Uber Eats), package delivery, couriers, freight transportation, and a partnership with Lime scooters and bikes.",
  "SpaceX": "Space Exploration Technologies Corp. (SpaceX) is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.",
  "Airbnb": "Airbnb, Inc. is an American company that operates an online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities.",
  "PayPal": "PayPal Holdings, Inc. is an American multinational financial technology company operating an online payments system.",
  "Salesforce": "Salesforce, Inc. is an American cloud-based software company headquartered in San Francisco, California.",
  "Spotify": "Spotify Technology S.A. is a Swedish audio streaming and media services provider.",
  "Snapchat": "Snapchat is an American multimedia instant messaging app and service developed by Snap Inc., originally Snapchat Inc.",
  "Zoom": "Zoom Video Communications, Inc. is an American communications technology company headquartered in San Jose, California.",
  "Alibaba": "Alibaba Group Holding Limited is a Chinese multinational conglomerate specializing in e-commerce, retail, Internet, and technology.",
  "Baidu": "Baidu, Inc. is a Chinese multinational technology company specializing in Internet-related services and products and artificial intelligence (AI), headquartered in Beijing.",
  "Tencent": "Tencent Holdings Ltd. is a Chinese multinational technology and entertainment conglomerate and holding company headquartered in Shenzhen.",
  "Huawei": "Huawei Technologies Co., Ltd. is a Chinese multinational technology corporation headquartered in Shenzhen, Guangdong.",
  "Nvidia": "Nvidia Corporation is an American multinational technology company incorporated in Delaware and based in Santa Clara, California.",
  "AMD": "Advanced Micro Devices, Inc. (AMD) is an American multinational semiconductor company based in Santa Clara, California."
};


// Function to highlight company names
function highlightCompanies() {
  const bodyText = document.body.innerHTML;

  // Iterate over each company in the database
  Object.keys(companyDatabase).forEach(company => {
    const regex = new RegExp(`\\b${company}\\b`, 'g');
    const replacement = `<span class="highlight-company" data-company="${company}">${company}</span>`;
    document.body.innerHTML = document.body.innerHTML.replace(regex, replacement);
  });

  // Add hover event listeners
  document.querySelectorAll('.highlight-company').forEach(element => {
    element.addEventListener('mouseover', showCompanyInfo);
    element.addEventListener('mouseout', hideCompanyInfo);
  });
}

// Function to show company info
function showCompanyInfo(event) {
  const company = event.target.getAttribute('data-company');
  const info = companyDatabase[company];
  const infoBox = document.createElement('div');
  infoBox.className = 'company-info-box';
  infoBox.innerText = info;
  document.body.appendChild(infoBox);
  infoBox.style.top = `${event.pageY}px`;
  infoBox.style.left = `${event.pageX + 10}px`;
}

// Function to hide company info
function hideCompanyInfo() {
  document.querySelectorAll('.company-info-box').forEach(box => box.remove());
}

// Apply highlights when the content script is loaded
highlightCompanies();