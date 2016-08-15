window.onload = function() {
    var converter = new showdown.Converter();
    var scratchpad = document.getElementById('scratchpad');
    var markdownArea = document.getElementById('markdown');
    var convertTextAreaToMarkdown = function() {
        var markdownText = scratchpad.value;
        html = converter.makeHtml(markdownText);
        markdownArea.innerHTML = html;
    };
    scratchpad.addEventListener('input', convertTextAreaToMarkdown);
    convertTextAreaToMarkdown();
};