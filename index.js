
module.exports = function(data, key, val){

    var objkeys = Object.keys(data);

    if (objkeys.length === 0){
        var errmsg = "no keys in the json object or some other problem with the data";
        console.error(errmsg);
        return;
    }

    for( i in objkeys ) {
        if(val){
          data[objkeys[i]][key] = val;
        }
        else{
          data[objkeys[i]][key] = null;
        }
    }

    return data;

}
