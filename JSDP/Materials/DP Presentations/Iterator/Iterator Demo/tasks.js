

function Iterator(obj) {
    var current = 0;
    var len = length in obj && obj.length || 0;

    this.hasNext = function () {
        return current < len;
    }

    this.next = function () {
        return obj[current++];
    }

    this.reset = function () {
        current = 0;
    }

}

var obj = {
    '0': 'tedst',
    '1': 't22222st',
    '2': 'te222s',
    length: 3
};

var arr = [11, 22, 33];

var o = new Iterator(arr);

while (o.hasNext()) {
    console.log(o.next());
}