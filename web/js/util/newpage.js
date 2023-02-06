function newPageInit() {
    document.getElementById('newPageSections').value = lpTag.section ? lpTag.section.join(',') : ''
}

function newPage() {
    lpTag.newPage(document.URL, {
        section: document.getElementById('newPageSections').value.split(',')
    })
}

// waitForTag(newPageInit);

console.log("fetching visitapi stuff");
fetch('https://va.v.liveperson.net/api/account/75554483/monitoring/visitors/FiN2NjYzNmNTk5MDVjNjY2/visits/current/state?v=1&filter=agent&sid=RqVR_zWDR_a7T4sRG8At1A', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 809a9474e44afc326d3ab1bf52b9ee84e93581dbf2ff01e72e261e24b57565c1'
        
    },
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))