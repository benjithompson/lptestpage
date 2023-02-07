window.lpTag = window.lpTag || {};
lpTag.external = lpTag.external || {}
window.params = window.params || new URLSearchParams(window.location.search);

// set account
lpTag.site = params.get('account') || '85085921';

// cdn tag
if (params.has('cdn')) lpTag.ovr = { domain: 'lptag-cdn.liveperson.net', tagjs: 'lptag-cdn.liveperson.net' }
// alpha tag

if (params.has('alpha')) lpTag.ovr = { domain: 'lptag-a.liveperson.net', tagjs: 'tags-a.liveperson.net' }

// sections
if (params.get('sections')) lpTag.section = params.get('sections').split(',')

// autostart
if (params.get('autostart') === 'false') lpTag.autoStart = false;

// tag version
lpTag.external._tagV = '1.10'
if (params.get('tag')) {
    let versions = ['1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.10']
    let _tag = params.get('tag')
    if (versions.indexOf(_tag) > -1) lpTag.external._tagV = _tag
}

let s = document.createElement('script');
s.type = 'text/javascript';
s.src = 'js/lptag/' + lpTag.external._tagV + '.js';
document.head.appendChild(s)

waitForTag(function updateSiteId () { document.getElementById('accountSpan').innerText = lpTag.site })

// button divs
if (params.has('divids')) {
    document.addEventListener('DOMContentLoaded', () => {
        let ids = params.get('divids').split(',');
        ids.forEach(id => {
            let a = document.createElement('div'), b = document.createElement('div'), c = document.createElement('div');
            a.id = id+'_label';
            a.innerText = 'container for '+id;
            b.id = id+'_container';
            b.className = 'divcontainer';
            c.id = id;
            document.body.appendChild(a);
            a.appendChild(b);
            b.appendChild(c);
        });
    })
}

fetch('https://va.v.liveperson.net/api/account/75554483/monitoring/visitors/A3MWU2ZTU2NmMwNzRiN2Vl/visits/current/state?v=1&filter=agent&sid=AsfghSCZT6-Sno2AJw7ZAA', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer df9f95bc812fdf4d0a267f400e213892375a9128c0fd040d30aa5ad4cae9b54d'
        
    },
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))