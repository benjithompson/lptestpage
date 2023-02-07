

function fetchVisitAPI(){
    let sid = lpTag.taglets.lp_monitoringSDK.getSid();
    let vid = lpTag.taglets.lp_monitoringSDK.getVid();
    fetch('https://va.v.liveperson.net/api/account/75554483/monitoring/visitors/${vid}/visits/current/state?v=1&filter=agent=${sid}', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer df9f95bc812fdf4d0a267f400e213892375a9128c0fd040d30aa5ad4cae9b54d'
            
        },
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
}

waitForTag(fetchVisitAPI);