function searchFunction() {
    // Declare variables
    var input, filter, container, faqs, totalHidden, i, j, k, qValue, aValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    container = document.getElementsByClassName("faq-section");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < container.length; i++) {
        faqs = container[i].getElementsByClassName('faq');
        totalHidden = [];
        for (j = 0; j < faqs.length; j++) {
            question = faqs[j].getElementsByTagName("h4")[0];
            answer = faqs[j].getElementsByClassName("answer")[0];
            qValue = question.textContent || question.innerText;
            aValue = answer.textContent || answer.innerText;
            if (qValue.toUpperCase().indexOf(filter) > -1) {
                faqs[j].style.display = "";
                if(totalHidden.includes(faqs[j])) {
                    var index = totalHidden.indexOf(faqs[j]);
                    totalHidden.splice(index, 1);
                }
            } else if (aValue.toUpperCase().indexOf(filter) > -1) {
                faqs[j].style.display = "";
                if(totalHidden.includes(faqs[j])) {
                    var index = totalHidden.indexOf(faqs[j]);
                    totalHidden.splice(index, 1);
                }
            } else {
                faqs[j].style.display = "none";
                totalHidden.push(faqs[j]);
            }
        }
        if(totalHidden.length === faqs.length) {
            container[i].getElementsByClassName('topic-heading')[0].style.display = "none"
        } else {
            container[i].getElementsByClassName('topic-heading')[0].style.display = ""
        }
    }
}