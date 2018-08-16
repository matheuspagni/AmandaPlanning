window.onload = function () {

    var id = 0;

    document.getElementById('pastelMap').addEventListener('click', function (e) {
        var idAntigo = id;

        while (idAntigo == id) {
            id = Math.floor(Math.random() * 8)
        }

        document.getElementById(id).play();
    });

    document.getElementById('brejaMap').addEventListener('click', function (e) {
        document.getElementById('99').play();
    });

    setInterval(function () {
        document.getElementById('pastelMap').click();
    }, 300000);
}