document. getElementById("claimForm").addEventListener("submit",function(event){
    event.preventDefault();
// Form Submission
    const policyNumber= document.getElementById('policyNumber').value;
    const incidentDate = document.getElementById('incidentDate').value;
    const incidentDescription = document.getElementById('incidentDescription').value;
    if (policyNumber && incidentDate && description) {
            // Simulate submitting claim
            document.getElementById("formSuccess").classList.remove("hidden");
            this.reset();
            addClaim(policyNumber,incidentDate);
    }
});
const claims =[
    { number:"CLM001",status: "In Review", date: "09-05-2024" },
    { number:"CLM002",status: "Approveed", date: "08-25-2024" },
    { number:"CLM003",status: "recevied", date: "06-06-2024" }
];
function addClaim(policyNumber,date) {
    claims.push({
        number: `CLM${String(claims.length + 1).padStart(3, '0')}`,
        status: "In Review",
        date: date
    });
    renderClaims();
}
    
    function  renderClaims(){
    const claimsList = document.getElementById("claimsList");
    claimsList.innerHTML = claims.map(claim => `
        <tr>
        <td>${claim.number}</td>
        <td>${claim.status}</td>
        <td>${claim.date}</td>
        </tr>
        `).join('');
    }
         renderClaims();
         const knowledgeBase=[
          { quetion: "How to File a Claim", answer: "To file a claim, go to the File a Claim section and fill out the form..." },
        { quetion: "Claim Status Explanation", answer: "Your claim can have statuses such as In Review, Approved, or Denied..." }
    ];
    document.getElementById("searchbar").addEventListener("input",function(){
    const query = this.value.toLowerCase();
    const results = knowledgeBase.filter(article => article.quetion.toLowerCase().includes(query));
    const searchResults = document.getElementById("searchResults");
     searchResults.innerHTML = result.map(result => `
     <div>
     <h4>(result.question)</h4>
     <p>$(result.answer)</p>
     </div>
     `).join('');

});
         



           