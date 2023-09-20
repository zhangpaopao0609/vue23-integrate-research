// 修改 vue2.6 导出

const fs = require('fs-extra')
const path = require('path')

const vue = path.resolve(__dirname, '..', 'node_modules', 'vue');

// 增加 index.js 文件
const index = fs.readFileSync(path.resolve(__dirname, './vue2.6-index.js'));
fs.writeFileSync(path.resolve(vue, 'index.js'),index);

// 修改 package.json
const vuePath = path.resolve(vue, 'package.json');
const vueContent = fs.readFileSync(vuePath, 'utf-8');
const vueJson = JSON.parse(vueContent);

vueJson.module = './index.js';

fs.writeFile(vuePath, JSON.stringify(vueJson, null, 2), {encoding: 'utf8'}, (err) => {
  if (err) throw err;
  console.log('vue package.json file has been updated.');
});