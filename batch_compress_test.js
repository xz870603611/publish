var images = require('images');
var fs = require('fs');
var path = './image';
console.log(path);
function explorer(path){
    fs.readdir(path, function(err, files){
        //err 为错误 , files 文件名列表包含文件夹与文件
        if(err){
            console.log('error:\n' + err);
            return;
        }

        files.forEach(function(file){

            fs.stat(path + '/' + file, function(err, stat){
                if(err){console.log(err); return;}
                if(stat.isDirectory()){
                    // 如果是文件夹遍历
                    explorer(path + '/' + file);
                }else{
                    // 读出所有的文件
                    console.log('文件名:' + path + '/' + file);
                    var name = path + '/' + file;
                    var outName = path + '/' +'another_'+file
                    images(name)
                        .save(outName, {
                            quality : 60                    //保存图片到文件,图片质量为50
                        });

                }
            });

        });
    });
}
explorer(path);