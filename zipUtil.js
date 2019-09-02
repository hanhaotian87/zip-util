const fs = require('fs')
const path = require('path')
const archiver = require('archiver')
const unzipper = require('unzipper')

/**
 * unzip zip file from src to dst
 * @method unzip
 * @param {String} src zip file
 * @param {String} dest zip dest files
 * @return {Object} Promise
 */
function unzip (src, dest) {
  let p = new Promise(function (resolve, reject) {
    var reg = /.zip$/
    if (reg.test(src)) {
    } else {
      reject('src is not a zip')
    }

    var unzipExtractor = unzipper.Extract({ path: dest })
    unzipExtractor.on('error', function (err) {
      if (err.toString().search('unexpected end of file') === -1) {
        // error
        reject(err)
      } else {
        resolve('complete')
      }
    })
    var readStream = fs.createReadStream(src)
    readStream.on('end', async function () {
    })
    var writeStream = readStream.pipe(unzipExtractor)
    writeStream.on('close', async function () {
      resolve('complete')
    })

    writeStream.on('finish', async function () {
    })
  })

  return p
}

/**
 * zip files from src to dst
 * @method zip
 * @param {String} src zip source files
 * @param {String} dest zip file
 * @param {String} newName zip new filename
 * @return {Object} Promise
 */

function zip (src, dest,newName) {
  let p = new Promise(function (resolve, reject) {
    var output = fs.createWriteStream(dest)
    output.on('close', function () {
      resolve('complete')
    })
    output.on('end', function () {
    })

    var archive = archiver('zip')
    archive.on('warning', function (err) {
      if (err.code === 'ENOENT') {
      // log warning
      } else {
      // throw error
      }
    })
    archive.on('error', function (err) {
      reject(err)
    })

    archive.pipe(output)
    if(typeof(src) === 'string'){
      let exist = fs.existsSync(src)
      if(exist){
        let stat = fs.statSync(src)
        if(stat.isDirectory()){
          archive.directory(src, '')
        }else if(stat.isFile()){
          if(newName){
            archive.file(src,{name:newName})
          }else{
            archive.file(src,{name:path.basename(src)})
          }
        }
      }else{
        archive.append(src,{name:newName})
      }
    }else if(src instanceof Buffer){
      archive.append(src,{name:newName})
    }else if(src instanceof fs.ReadStream){
      archive.append(src,{name:newName})
    }
    archive.finalize()
  })
  return p
}

module.exports.unzip = unzip
module.exports.zip = zip
