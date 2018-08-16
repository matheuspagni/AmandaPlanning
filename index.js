window.onload = function () {
    document.getElementById('pastelMap').addEventListener('click', function (e) {
        document.getElementById(Math.floor(Math.random() * 7)).play();
    });

    document.getElementById('brejaMap').addEventListener('click', function (e) {
        document.getElementById('99').play();
    });
}