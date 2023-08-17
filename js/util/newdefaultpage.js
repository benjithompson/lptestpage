function newDefaultPage() {
    var section = (window.lpTag && window.lpTag.section) || ['human'];
    if (typeof lpTag != "undefined" && lpTag != null && Object.keys(lpTag).length > 0 && typeof lpTag.newPage != "undefined" && lpTag.newPage != null && lpTag.newPage != "") {
        window.lpTag.newPage(document.URL, {
            section: section,
            sdes: [],
            taglets: {},
        });
    }
}