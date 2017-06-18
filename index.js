function search(e) {
    setTimeout(function () {
        var value = e.target.value;
        if (value && value !== '') {
            $('#lacaito').prop("hidden", false)
        } else {
            $('#lacaito').prop("hidden", true)
        }
    }, 200)
}