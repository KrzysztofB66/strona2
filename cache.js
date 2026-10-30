const adres = "https://krzysztofb66.github.io/strona/dane.txt";

document.getElementById("zaczytaj").addEventListener("click", function() {

    fetch(adres).then(response => {

        caches.open("moj-cache").then(cache => {
            cache.put(adres, response);
            document.getElementById("wynik").textContent = "Zapisano w cache!";
        });

    });

});

document.getElementById("odczytaj").addEventListener("click", function() {

    caches.open("moj-cache").then(cache => {

        cache.match(adres).then(response => {

            response.text().then(data => {
                document.getElementById("wynik").textContent = data;
            });

        });

    });

});