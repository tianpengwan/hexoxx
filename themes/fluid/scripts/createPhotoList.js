'use strict';
const fs = require('fs');
const sizeOf = require('image-size');
const originPath = 'source/photos/images';
const output = 'source/photos/galleryList.json';
const arr = [];

var Album = function (FolderPath) {
    this.AlbumObject = {};
    this.test = function test(path) {
        this.files = fs.readdirSync(path);
        if (!this.files.length) return;
        this.AlbumObject["name"] = path.split('/').pop()
        this.AlbumObject.children = [];

        this.files.forEach(v => {
            const vPath = path + '/' + v;
            const stats = fs.statSync(vPath);
            if (v === ".DS_Store") {
                ;
            }
            else if (stats.isFile()) {
                const imgSize = sizeOf(vPath);
                this.AlbumObject.children.push(imgSize.width + '.' + imgSize.height + ' ' + vPath.replace(originPath+'/', ''))
            } else {
                new Album(vPath);
            };
        });
        if (this.AlbumObject.children.length) { arr.push(this.AlbumObject); };
    };
    this.test(FolderPath);
}

try {
    new Album(originPath);
    fs.writeFileSync(output, JSON.stringify(arr, null, '\t'));
} catch (err) {
    console.log(err);
}