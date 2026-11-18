const fs=require('fs'),vm=require('vm'),assert=require('assert');
let code=fs.readFileSync('index.html','utf8').split('<script>')[1].split('</script>')[0];
code=code.replace(/render\(\);\s*$/,'');
const ctx={document:{querySelector:()=>({}),addEventListener:()=>{}},localStorage:{getItem:()=>null},setTimeout:()=>{},console};vm.createContext(ctx);vm.runInContext(code,ctx);
vm.runInContext(`
validate(seed());
if(esc('<script>')!=='&lt;script&gt;')throw Error('Escaping failed');
if(csvCell('=SUM(A1)').charCodeAt(1)!==39)throw Error('CSV protection failed');
let rejected=false;try{validate({version:2,tickets:[],assets:[]})}catch(e){rejected=true}if(!rejected)throw Error('Version check failed');
let invalid=seed();invalid.tickets[0].status='Resolved';rejected=false;try{validate(invalid)}catch(e){rejected=true}if(!rejected)throw Error('Resolution validation failed');
invalid=seed();invalid.assets.push(invalid.assets[0]);rejected=false;try{validate(invalid)}catch(e){rejected=true}if(!rejected)throw Error('Duplicate validation failed');
`,ctx);console.log('PASS: seed validation, HTML escaping, CSV formula protection, version rejection, resolution validation, duplicate asset rejection');