companyNames=[
    {img:"D_E_shaw",name:"DE Shaw",desc:"D. E. Shaw & Co., L.P. is a multinational investment management firm founded in 1988 by David E. Shaw and based in New York City. The company is known for developing complicated mathematical models and sophisticated computer programs to exploit anomalies in the financial market."},
    {img:"bosch",name:"Bosch",desc:"Robert Bosch GmbH, commonly known as Bosch, is a German multinational engineering and technology company headquartered in Gerlingen, Germany. The company was founded by Robert Bosch in Stuttgart in 1886. Bosch is 94% owned by Robert Bosch Stiftung, a charitable institution."},
    {img:"hcltech",name:"HCL",desc:"HCL Technologies Limited, d/b/a HCLTech, is an Indian multinational information technology services and consulting company headquartered in Noida. It emerged as an independent company in 1991 when HCL entered into the software services business. The company has offices in 52 countries and over 225,944 employees."}, 
    {img:"tcs",name:"TCS",desc:"TCS offers a consulting-led, cognitive-powered, integrated portfolio of business, technology, and engineering services and solutions. This is delivered through its unique Location Independent Agile™ delivery model, recognized as a benchmark of excellence in software development."},
    {img:"zoho",name:"ZOHO",desc:"Zoho Corporation is an Indian multinational technology company that makes computer software and web-based business tools. It is best known for the online office suite offering Zoho Office Suite"},
    {img:"abco",name:"ABCO",desc:"ABCO India Pvt. Ltd, an Optum company (www.optum.com) is a leading health services and innovation company dedicated to help make the health system work better for everyone. With more than 115,000 people worldwide, Optum combines technology, data and expertise to improve the delivery, quality and efficiency of health care. We are the fastest growing part of the global UnitedHealth Group family of  businesses – a Global Fortune 15 company and Fortune 5 company (U.S.)"},
    {img:"odessa",name:"ODESSA",desc:"Odessa is a software company exclusively focused in the leasing industry. The Odessa Platform powers some of the largest global brands, providing end-to-end, extensible solutions for lease and loan origination and portfolio management. Odessa facilitates business agility through rich feature sets including low-code development, test automation, reporting and business intelligence to ensure organizations can more effectively align business and IT objectives."},
    {img:"multicoreware",name:"MULTICOREWARE",desc:"MulticoreWare delivers software IP Solutions and Engineering Services serving a wide group of customers with Compilers & Toolchains, Libraries for SDK, Video codec and AI analytics solutions using various vision & non-vision (Radar, LiDAR, IMU, GPS, etc.) sensors on various heterogenous computing platforms. Our solutions are used in Automotive (ADAS/AD), Surveillance, Defence, Medical Imaging, IoT, Retail, Logistics, Industrial, Robotics, Smart City. MulticoreWare’s industry-leading video codec products (x266™/x265/Ultraziq) have been deployed in live streaming or VOD services across many broadcast customers."},
    {img:"AstraZeneca",name:"ASTRAZENECA",desc:"AstraZeneca Canada is one of Canada's leading biopharmaceutical companies and has been recognized with the Greater Toronto Area's Top Employer awards for six straight years,. Our head office located in Mississauga, Ontario, is home to both our Canadian headquarters as well as our global clinical hub."},
    {img:"zifo",name:"ZIFO",desc:"Zifo is a global clinical biometrics solutions provider with offices in USA, UK, Germany, France, Japan and India. Zifo leverages the possibilities of technology to bring efficiency and innovation to clinical data management and biostatistics.Zifo is a global R&D solutions provider focused on the industries of pharma, biotech, manufacturing QC, medical devices, specialty chemicals, and other research-based organizations."},
    {img:"exterro",name:"EXTERRO",desc:"Exterro®, Inc. is the leading provider of e-discovery and information governance software specifically designed for in-house legal, privacy and IT teams at Global 2000 and Am Law 200 organizations. Built on a simple concept of process optimization, Exterro helps organizations address their regulatory, compliance, and litigation risks more effectively and at lower costs. Exterro is the exclusive ACC Alliance partner for e-discovery software"},
    {img:"kalycito",name:"KALYCITO",desc:"Kalycito Infotech Pvt Ltd. is an Industry 4.0/IoT Software Technology Solutions Company, with full-stack device to cloud capabilities. Kalycito is a recognized thought leader in this space due to its pioneering effort to create an open-source ecosystem around Open Platform Communication Unified Architecture and Time-Sensitive-Networking on real-time Linux. In its 15 years as an embedded system development services and industrial automation software tools provider, the company has marquee customers across the value chain – silicon providers, OEMs, machine builders, and large-scale system integrators. This experience has given it a head start in helping its customers explore new business opportunities in connected machines, connected infrastructure, and connected mobility solutions space."},
    // {img:"intellectyxntellectyx",name:"INTELLECTYX",desc:"Hello World"},
    {img:"intellectyx",name:"INTELLECTYX",desc:"Intellectyx, Inc. is a Data Management Company, we help business to grow using Data and Digital Solutions. We provide solutions and services around Data Management, Data Engineering, Business Intelligence & Analytics, and Digital for various Enterprises, Governments, and Non-Profit organizations."},
    // {img:"tcs",name:"TCS",desc:"Hello World"},
];

// for (let i = 0; i < 4; i++){
//     let temp=`
//     <div class="card mb-3" ">
// 			<div class="row g-0">
// 				<div class="col-md-6">
// 					<img src="assets/${companyNames[i].img}" class="img-fluid rounded-start" alt="...">
// 				</div>
// 				<div class="col-md-6">
// 					<div class="card-body">
// 						<h5 class="card-title">
//                         ${companyNames[i].name}
// 						</h5>
// 						<p class="card-text">
//                         ${companyNames[i].desc}
// 						</p>
// 						<p class="card-text">
// 							<small class="text-muted">
// 								<a href="Company.html?id=${companyNames[i].cnum}" >View</a>
// 							</small>
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
//         `;

//         let v=document.getElementById("template2");
//         let x= v.innerHTML;
//         v.innerHTML=x+temp;
// }

// const card = document.querySelectorAll('.cards');
// card.forEach(cards => {
//   const link = cards.querySelector('a');
//   const href = link.getAttribute('href');
//   link.addEventListener('click', (event) => {
//     event.preventDefault();
//     // Do something with the href value, like changing the content of the next page
//     // For example:
//     // window.location.href = href;

    i=window.location.href.split("?id=")[1];

let temp=`
<div class="comp_card">
<div class="comp_container">
    <div class="comp_logo">
        <img src="assets/${companyNames[i].img}.jpg" alt="hello" width="250px" height="150px">

    </div>
    <div class="comp_detail">
        <h2>${companyNames[i].name}</h2>
        <p>${companyNames[i].desc}</p>
        
    </div>
</div>
</div>`;
    let v=document.getElementById("template");
    let x= v.innerHTML;
    v.innerHTML=x+temp;


//   });
// });
