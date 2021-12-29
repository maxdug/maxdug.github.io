<script>
function listen_keyUp(e) {

    // test for alt and arrowDown
    if (e.ctrlKey && e.shiftKey && e.key === 'ArrowUp') {
        document.cookie = "LAB_search=off; expires=Thu, 18 Dec 2021 12:00:00 UTC; Secure; path=/";
        alert("Enhancements switched on, please reload your page.");
    }

    if (e.ctrlKey && e.shiftKey && e.key === 'ArrowDown') {
        document.cookie = "LAB_search=; expires=Thu, 18 Dec 1970 12:00:00 UTC; Secure; path=/";
        alert("Enhancements switched off, please reload your page.");
    }


}
// register the handler
document.addEventListener('keyup', listen_keyUp, false);

if (document.cookie.includes("LAB_search")) {
document.write("<style>#social-portlet-announcement-trq-portlet-social-portlet-announcement-trq-card h3::after { content: \"Featured Content\"; visibility: initial; margin-left: -6em; } #social-portlet-announcement-trq-portlet-social-portlet-announcement-trq-card h3 { visibility: hidden; } #trq-select-category-search { display: none;} #trq-select-global-search { border-left: solid 1px #777;} #header-breadcrumb { display: none !important;} .region-column1 { display: none;} .region-column2 { width: 100% !important; left: initial !important; min-height: initial !important; } .spf-page-detail-container { margin: 0 0 10px !important; border: none !important; padding: 0 !important; } .spf-ws-search-container { display: none; } .spf-new-icon16.sd-icon-resource-type.sd-icon-workspace.sd-icon-small { display: none; } .trq-text-accent { color: #0b9 !important; } .eLayout > .layout-body > .side2 { position: initial !important;}</style>");
}

</script>
