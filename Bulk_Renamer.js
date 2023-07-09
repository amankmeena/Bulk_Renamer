// For folders wherever:

// const fs = require('fs');
// const path = require('path');
// const replaceThis = "Pavan"
// const replaceWith = "jaddu"
// // const preview = true;
// const folder = __dirname;

// try {
//   fs.readdir(folder, (err, data) => {
//     for (let index = 0; index < data.length; index++) {
//         const item = data[index];

//         let oldfile = path.join(folder, item);
//         let newfile = path.join(folder, item.replaceAll(replaceThis, replaceWith));

//         fs.rename(oldfile, newfile, () => {
//             console.log('Rename Successful!!!', item, newfile);
//         });
//     }
//   });
// } catch (err) {
//   console.error(err);
// }

//-------------------------------------------------------------------
// For files within data folder or any other folder by typing folder name:

const fs = require('fs');
const replaceThis = "laddu"
const replaceWith = "rohan"
// const preview = confirm("Do you want to preview your changes?");
const preview = false;

try {
  fs.readdir('data', (err, data) => {
    // console.log(data);
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        let newfile = "data/" + item.replaceAll(replaceThis, replaceWith);
        // fs.rename("data/" + item, newfile, () => {
        //     console.log('Rename Successful!!!');
        // });
        
        // for preview 
        if (!preview) {
            fs.rename("data/" + item, newfile, () => {
                console.log('Rename Successful!!!');
            });
        }
        else {
            if ("data/" + item !== newfile) {
                console.log("data/" + item + " will be renamed to " + newfile);
            }
        }
    }
  });
} catch (err) {
  console.error(err);
}