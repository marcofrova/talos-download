// Points every download link at the latest GitHub Release of TALOS_DOWNLOAD_REPO (see config.js). No tracking, no requests.
(function () {
  var repo = (typeof TALOS_DOWNLOAD_REPO === "string") ? TALOS_DOWNLOAD_REPO : "";
  var links = document.querySelectorAll("[data-release]");
  for (var i = 0; i < links.length; i++) {
    links[i].href = "https://github.com/" + repo + "/releases/latest";
  }
})();
