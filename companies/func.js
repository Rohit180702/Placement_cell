companyNames=[
    {img:"D_E_shaw",name:"DE Shaw",desc:"Hello World",cnum:"0"},
    {img:"bosch",name:"Bosch",desc:"Hello World",cnum:"1"},
    {img:"hcltech",name:"HCL",desc:"Hello World",cnum:"2"}, 
    {img:"tcs",name:"TCS",desc:"Hello World",cnum:"3"}];


for (let i = 0; i < 4; i++){
    let temp=`
    <div class="card mb-3" ">
			<div class="row g-0">
				<div class="col-md-6">
					<img src="assets/${companyNames[i].img}" class="img-fluid rounded-start" alt="...">
				</div>
				<div class="col-md-6">
					<div class="card-body">
						<h5 class="card-title">
                        ${companyNames[i].name}
						</h5>
						<p class="card-text">
                        ${companyNames[i].desc}
						</p>
						<p class="card-text">
							<small class="text-muted">
								<a href="Company.html?id=${companyNames[i].cnum}" >View</a>
							</small>
						</p>
					</div>
				</div>
			</div>
		</div>
        `;

        let v=document.getElementById("template2");
        let x= v.innerHTML;
        v.innerHTML=x+temp;
}