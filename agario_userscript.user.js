// ==UserScript==
// @name         lefela-agar.io-client
// @namespace    lefela4
// @version      1.0
// @description  to be writen
// @author       lefela4
// @license      MIT
// @match        http://agar.io/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.5/socket.io.min.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

var client_uuid = "lefela4"; //Type your UUID here

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('D a=["\\1x\\M\\b\\Y\\M\\1b\\b\\1i\\1H\\1z\\Y\\1Z\\S\\b\\1z\\Y\\1l\\1b\\1H\\1p\\Y\\1Z\\b\\1p\\2g\\b\\1l\\M\\1s\\b\\1x\\M\\Y\\1b\\b\\2e\\Y\\M\\1F\\b\\1H\\M\\1F\\b\\1b\\M\\b\\1i\\M\\1x\\S\\1C\\b\\1p\\2g\\b\\1l\\M\\1s\\b\\1E\\1X\\S\\1z\\N\\S\\b\\N\\S\\Y\\1x\\b\\1e\\S\\b\\1z\\b\\1e\\S\\N\\N\\1z\\1Z\\S\\b\\M\\Y\\b\\1Z\\1p\\1b\\1H\\1s\\2h\\b\\M\\3c\\b\\1p\\Y\\b\\N\\2e\\1l\\1E\\S\\b\\o\\b\\n\\i\\d\\e\\C\\f\\q\\d\\B\\j\\I\\c\\e\\3k\\A\\t\\g\\d\\i\\1C\\k\\c\\t\\b\\v\\u\\u\\u\\b\\1e\\1l\\b\\N\\2e\\1l\\1E\\S\\b\\1b\\Y\\2d\\1C","\\i\\c\\A","\\k\\g\\h\\B\\g\\n","\\A\\f\\e\\S\\i\\f\\t\\f\\h\\e\\2h\\p\\1p\\m","\\2a\\1F\\f\\I\\N\\c\\k\\K\\f\\e","\\1F\\f\\I\\N\\c\\k\\K\\f\\e","\\2a\\2a\\I\\c\\e\\k\\i\\c\\h\\n\\1x\\g\\e\\g","\\t\\L","\\t\\p","\\t\\i","\\t\\g","\\t\\I","\\1d\\g","\\n\\g","\\1d","\\n","\\g\\2d","\\g\\1l","\\j","\\3l","\\n\\c\\k\\K\\f\\e\\g\\m\\m\\q","\\L\\c","\\p\\c","\\m\\f\\l\\d\\h\\f\\1E\\q\\c\\j\\f\\q\\e\\p","\\1d\\n\\o\\O\\O\\i\\c\\k\\g\\i\\C\\c\\n\\e\\o\\2f\\y\\2f\\y","\\k\\c\\h\\h\\f\\k\\e","\\n\\c\\k\\K\\f\\e","\\l\\c\\q\\k\\f\\u\\i\\c\\A\\d\\h","\\i\\c\\A\\d\\h","\\i\\f\\l\\f\\i\\g\\1c","\\k\\i\\d\\f\\h\\e","\\f\\t\\d\\e","\\c\\h","\\I\\E\\l","\\1d\\n","\\I\\d\\h\\g\\q\\p\\1b\\p\\j\\f","\\I\\E\\l\\l\\f\\q\\f\\m\\1z\\t\\c\\E\\h\\e","\\f\\L\\e\\f\\h\\n\\d\\c\\h\\n","\\j\\q\\c\\e\\c\\k\\c\\i","\\q\\f\\g\\m\\p\\N\\e\\g\\e\\f","\\E\\q\\i","\\n\\f\\h\\m","\\i\\f\\h\\A\\e\\C","\\j\\E\\n\\C","\\3j","\\n\\j\\i\\d\\e","\\2x\\1r\\1r","\\N\\f\\h\\m\\d\\h\\A\\b\\m\\g\\e\\g","\\k\\g\\i\\i","\\k\\i\\c\\n\\f","\\c\\h\\c\\j\\f\\h","\\c\\h\\k\\i\\c\\n\\f","\\c\\h\\f\\q\\q\\c\\q","\\c\\h\\t\\f\\n\\n\\g\\A\\f","\\I\\d\\h\\m","\\N\\c\\k\\K\\f\\e\\b\\c\\j\\f\\h","\\I\\p\\e\\f\\1X\\f\\h\\A\\e\\C","\\A\\f\\e\\1s\\d\\h\\e\\2f","\\A\\f\\e\\2g\\i\\c\\g\\e\\3m\\1c","\\N\\c\\k\\K\\f\\e\\b\\k\\i\\c\\n\\f","\\k\\c\\m\\f","\\g\\I\\h\\c\\q\\t\\g\\i","\\h\\c\\q\\t\\g\\i","\\N\\c\\k\\K\\f\\e\\b\\f\\q\\q\\c\\q","\\k\\t\\m","\\k\\c\\h\\h\\f\\k\\e\\2a\\n\\f\\q\\B\\f\\q","\\c\\q\\d\\A\\d\\h","\\v\\m\\d\\B\\b\\n\\e\\p\\i\\f\\G\\H\\I\\g\\k\\K\\A\\q\\c\\E\\h\\m\\u\\k\\c\\i\\c\\q\\o\\b\\Z\\y\\y\\y\\y\\y\\y\\r\\b\\u\\t\\c\\1g\\u\\c\\j\\g\\k\\d\\e\\p\\o\\b\\y\\1C\\1c\\r\\b\\u\\K\\C\\e\\t\\i\\u\\c\\j\\g\\k\\d\\e\\p\\o\\b\\y\\1C\\1c\\r\\b\\c\\j\\g\\k\\d\\e\\p\\o\\b\\y\\1C\\1c\\r\\b\\l\\d\\i\\e\\f\\q\\o\\b\\g\\i\\j\\C\\g\\1m\\c\\j\\g\\k\\d\\e\\p\\G\\1c\\y\\1t\\r\\b\\1g\\c\\c\\t\\o\\b\\w\\r\\b\\1d\\d\\m\\e\\C\\o\\b\\2x\\y\\1r\\j\\L\\r\\b\\e\\c\\j\\o\\b\\w\\y\\j\\L\\r\\b\\i\\f\\l\\e\\o\\b\\w\\y\\j\\L\\r\\b\\m\\d\\n\\j\\i\\g\\p\\o\\b\\I\\i\\c\\k\\K\\r\\b\\j\\c\\n\\d\\e\\d\\c\\h\\o\\b\\g\\I\\n\\c\\i\\E\\e\\f\\r\\b\\e\\f\\L\\e\\u\\g\\i\\d\\A\\h\\o\\b\\k\\f\\h\\e\\f\\q\\r\\b\\l\\c\\h\\e\\u\\n\\d\\1g\\f\\o\\b\\w\\1r\\j\\L\\r\\b\\k\\c\\i\\c\\q\\o\\b\\Z\\l\\l\\l\\l\\l\\l\\r\\b\\j\\g\\m\\m\\d\\h\\A\\o\\b\\1r\\j\\L\\r\\b\\l\\c\\h\\e\\u\\l\\g\\t\\d\\i\\p\\o\\b\\1s\\I\\E\\h\\e\\E\\r\\H\\x\\b\\v\\m\\d\\B\\b\\n\\e\\p\\i\\f\\G\\H\\k\\c\\i\\c\\q\\o\\Z\\l\\l\\l\\l\\l\\l\\r\\b\\m\\d\\n\\j\\i\\g\\p\\o\\b\\d\\h\\i\\d\\h\\f\\r\\b\\u\\t\\c\\1g\\u\\c\\j\\g\\k\\d\\e\\p\\o\\w\\r\\b\\u\\K\\C\\e\\t\\i\\u\\c\\j\\g\\k\\d\\e\\p\\o\\b\\w\\r\\b\\c\\j\\g\\k\\d\\e\\p\\o\\w\\r\\b\\l\\d\\i\\e\\f\\q\\o\\g\\i\\j\\C\\g\\1m\\c\\j\\g\\k\\d\\e\\p\\G\\w\\y\\y\\1t\\r\\b\\j\\g\\m\\m\\d\\h\\A\\o\\b\\w\\y\\j\\L\\r\\H\\x\\v\\g\\x\\i\\f\\l\\f\\i\\g\\1c\\v\\O\\g\\x\\v\\O\\m\\d\\B\\x\\b\\v\\m\\d\\B\\b\\n\\e\\p\\i\\f\\G\\H\\k\\c\\i\\c\\q\\o\\Z\\l\\l\\l\\l\\l\\l\\r\\b\\m\\d\\n\\j\\i\\g\\p\\o\\b\\d\\h\\i\\d\\h\\f\\r\\b\\u\\t\\c\\1g\\u\\c\\j\\g\\k\\d\\e\\p\\o\\w\\r\\b\\u\\K\\C\\e\\t\\i\\u\\c\\j\\g\\k\\d\\e\\p\\o\\b\\w\\r\\b\\c\\j\\g\\k\\d\\e\\p\\o\\w\\r\\b\\l\\d\\i\\e\\f\\q\\o\\g\\i\\j\\C\\g\\1m\\c\\j\\g\\k\\d\\e\\p\\G\\w\\y\\y\\1t\\r\\b\\j\\g\\m\\m\\d\\h\\A\\o\\b\\w\\y\\j\\L\\r\\H\\x\\v\\I\\q\\x\\2h\\c\\e\\n\\o\\b\\v\\g\\b\\d\\m\\G\\H\\t\\d\\h\\d\\c\\h\\1i\\c\\E\\h\\e\\H\\b\\x\\M\\l\\l\\i\\d\\h\\f\\v\\O\\g\\x\\b\\v\\O\\m\\d\\B\\x\\b\\v\\m\\d\\B\\b\\n\\e\\p\\i\\f\\G\\H\\k\\c\\i\\c\\q\\o\\Z\\l\\l\\l\\l\\l\\l\\r\\b\\m\\d\\n\\j\\i\\g\\p\\o\\b\\d\\h\\i\\d\\h\\f\\r\\b\\u\\t\\c\\1g\\u\\c\\j\\g\\k\\d\\e\\p\\o\\w\\r\\b\\u\\K\\C\\e\\t\\i\\u\\c\\j\\g\\k\\d\\e\\p\\o\\b\\w\\r\\b\\c\\j\\g\\k\\d\\e\\p\\o\\w\\r\\b\\l\\d\\i\\e\\f\\q\\o\\g\\i\\j\\C\\g\\1m\\c\\j\\g\\k\\d\\e\\p\\G\\w\\y\\y\\1t\\r\\b\\j\\g\\m\\m\\d\\h\\A\\o\\b\\w\\y\\j\\L\\r\\H\\x\\v\\I\\q\\x\\1e\\c\\B\\f\\t\\f\\h\\e\\b\\M\\l\\l\\n\\f\\e\\o\\b\\v\\g\\b\\d\\m\\G\\H\\d\\n\\t\\c\\B\\f\\1b\\c\\1e\\c\\E\\n\\f\\H\\b\\x\\y\\v\\O\\g\\x\\b\\v\\O\\m\\d\\B\\x\\b\\v\\m\\d\\B\\b\\n\\e\\p\\i\\f\\G\\H\\k\\c\\i\\c\\q\\o\\Z\\l\\l\\l\\l\\l\\l\\r\\b\\m\\d\\n\\j\\i\\g\\p\\o\\b\\d\\h\\i\\d\\h\\f\\r\\b\\u\\t\\c\\1g\\u\\c\\j\\g\\k\\d\\e\\p\\o\\w\\r\\b\\u\\K\\C\\e\\t\\i\\u\\c\\j\\g\\k\\d\\e\\p\\o\\b\\w\\r\\b\\c\\j\\g\\k\\d\\e\\p\\o\\w\\r\\b\\l\\d\\i\\e\\f\\q\\o\\g\\i\\j\\C\\g\\1m\\c\\j\\g\\k\\d\\e\\p\\G\\w\\y\\y\\1t\\r\\b\\j\\g\\m\\m\\d\\h\\A\\o\\b\\w\\y\\j\\L\\r\\H\\x\\v\\I\\q\\x\\1E\\c\\n\\d\\e\\d\\c\\h\\o\\b\\v\\g\\b\\d\\m\\G\\H\\A\\C\\1c\\1r\\h\\t\\B\\n\\p\\H\\b\\x\\u\\v\\O\\g\\x\\b\\v\\O\\m\\d\\B\\x\\b\\v\\m\\d\\B\\b\\n\\e\\p\\i\\f\\G\\H\\k\\c\\i\\c\\q\\o\\Z\\l\\l\\l\\l\\l\\l\\r\\b\\m\\d\\n\\j\\i\\g\\p\\o\\b\\d\\h\\i\\d\\h\\f\\r\\b\\u\\t\\c\\1g\\u\\c\\j\\g\\k\\d\\e\\p\\o\\w\\r\\b\\u\\K\\C\\e\\t\\i\\u\\c\\j\\g\\k\\d\\e\\p\\o\\b\\w\\r\\b\\c\\j\\g\\k\\d\\e\\p\\o\\w\\r\\b\\l\\d\\i\\e\\f\\q\\o\\g\\i\\j\\C\\g\\1m\\c\\j\\g\\k\\d\\e\\p\\G\\w\\y\\y\\1t\\r\\b\\j\\g\\m\\m\\d\\h\\A\\o\\b\\w\\y\\j\\L\\r\\H\\x\\v\\I\\q\\x\\N\\e\\c\\j\\b\\1e\\c\\B\\f\\t\\f\\h\\e\\o\\b\\v\\g\\b\\d\\m\\G\\H\\d\\n\\N\\e\\c\\j\\1e\\c\\B\\f\\H\\b\\x\\M\\l\\l\\v\\O\\g\\x\\b\\v\\O\\m\\d\\B\\x\\b\\v\\m\\d\\B\\b\\n\\e\\p\\i\\f\\G\\H\\k\\c\\i\\c\\q\\o\\Z\\l\\l\\l\\l\\l\\l\\r\\b\\m\\d\\n\\j\\i\\g\\p\\o\\b\\d\\h\\i\\d\\h\\f\\r\\b\\u\\t\\c\\1g\\u\\c\\j\\g\\k\\d\\e\\p\\o\\w\\r\\b\\u\\K\\C\\e\\t\\i\\u\\c\\j\\g\\k\\d\\e\\p\\o\\b\\w\\r\\b\\c\\j\\g\\k\\d\\e\\p\\o\\w\\r\\b\\l\\d\\i\\e\\f\\q\\o\\g\\i\\j\\C\\g\\1m\\c\\j\\g\\k\\d\\e\\p\\G\\w\\y\\y\\1t\\r\\b\\j\\g\\m\\m\\d\\h\\A\\o\\b\\w\\y\\j\\L\\r\\H\\x\\v\\I\\q\\x\\1i\\C\\g\\e\\b\\N\\j\\g\\t\\o\\b\\v\\g\\b\\d\\m\\G\\H\\m\\l\\m\\A\\C\\f\\C\\l\\2t\\H\\b\\x\\M\\l\\l\\v\\O\\g\\x\\b\\v\\O\\m\\d\\B\\x","\\g\\l\\e\\f\\q","\\Z\\k\\g\\h\\B\\g\\n","\\n\\j\\g\\1d\\h\\u\\k\\c\\E\\h\\e","\\d\\h\\h\\f\\q\\1H\\1b\\1e\\1X","\\t\\d\\h\\d\\c\\h\\1i\\c\\E\\h\\e","\\v\\I\\q\\x\\v\\m\\d\\B\\b\\k\\i\\g\\n\\n\\G\\T\\d\\h\\j\\E\\e\\u\\A\\q\\c\\E\\j\\T\\x\\v\\n\\j\\g\\h\\b\\k\\i\\g\\n\\n\\G\\T\\d\\h\\j\\E\\e\\u\\A\\q\\c\\E\\j\\u\\g\\m\\m\\c\\h\\T\\b\\d\\m\\G\\T\\I\\g\\n\\d\\k\\u\\g\\m\\m\\c\\h\\w\\T\\x\\1s\\1s\\1p\\1x\\v\\O\\n\\j\\g\\h\\x\\v\\d\\h\\j\\E\\e\\b\\e\\p\\j\\f\\G\\T\\e\\f\\L\\e\\T\\b\\B\\g\\i\\E\\f\\G\\T","\\T\\b\\q\\f\\g\\m\\c\\h\\i\\p\\b\\k\\i\\g\\n\\n\\G\\T\\l\\c\\q\\t\\u\\k\\c\\h\\e\\q\\c\\i\\T\\v\\O\\m\\d\\B\\x","\\q\\f\\j\\i\\g\\k\\f\\1F\\d\\e\\C","\\Z\\d\\h\\n\\e\\q\\E\\k\\e\\d\\c\\h\\n","\\t\\p\\1i\\f\\i\\i\\n","\\g\\A\\g\\q","\\d\\m","\\g\\i\\i\\1i\\f\\i\\i\\n","\\A\\C\\1c\\1r\\h\\t\\B\\n\\p","\\L","\\p","\\j\\c\\n","\\c\\h\\t\\c\\E\\n\\f\\t\\c\\B\\f","\\c\\h\\t\\c\\E\\n\\f\\m\\c\\1d\\h","\\K\\f\\p\\m\\c\\1d\\h","\\K\\f\\p\\1i\\c\\m\\f","\\1d\\C\\d\\k\\C","\\e\\q\\d\\A\\A\\f\\q","\\I\\c\\m\\p","\\K\\f\\p\\E\\j","\\d\\n\\t\\c\\B\\f\\1b\\c\\1e\\c\\E\\n\\f","\\m\\l\\m\\A\\C\\f\\C\\l\\2t","\\M\\h","\\M\\l\\l","\\f\\2t\\f\\k\\e","\\g\\m\\m\\S\\B\\f\\h\\e\\1X\\d\\n\\e\\f\\h\\f\\q","\\k\\i\\d\\f\\h\\e\\2d","\\k\\i\\d\\f\\h\\e\\1l","\\t\\c\\E\\n\\f\\t\\c\\B\\f"];D 2i=R;1B[a[1]](a[0]);3g(z(){D 1P=1a;D 3h=-1T;D 3i=-1T;D 3n=1T;D 3o=1T;D 3t={3u:0,3s:0,3f:0,3r:0};z 3p(2m,2l){W 0.2C>2m-2l&&-0.2C<2m-2l}D 2b=R;D 3q=R;D 1o=2y 3v(2);D 1j=1f[a[3]](a[2]);2p=1a;s[a[4]]=s[a[5]];s[a[6]]={};s[a[6]][a[7]]=0;s[a[6]][a[8]]=0;s[a[6]][a[9]]=0;s[a[6]][a[10]]=0;s[a[6]][a[11]]=0;s[a[6]][a[12]]=1h;s[a[6]][a[13]]=1h;s[a[6]][a[14]]=1a;s[a[6]][a[15]]=1a;s[a[6]][a[16]]=-1;s[a[6]][a[17]]=-1;s[a[6]][a[18]]=0;s[a[6]][a[19]]=1h;s[a[6]][a[20]]=1a;s[a[21]]=0;s[a[22]]=0;z 1n(2E,2j,1R){3d[a[23]](2E,1R,{2Y:z(){W 2j[1R]},3e:z(2T){2j[1R]=2T},3a:R,3b:R})}D V=2Z[a[25]](a[24]);s[a[26]]=V;V[a[32]](a[27],z(1q){V[a[31]](a[28],{"\\E\\E\\d\\m":a[29],"\\e\\p\\j\\f":a[30]});2v();2S()});z 2S(){D 2W=1J(z(){P(1P!=1a){V[a[31]](a[33],1P);2k(2W)}},4h)}s[a[5]]=z(2w,1Q){P(1Q===4i){1Q=[]};D J=2y 4l(2w,1Q);s[a[34]]=F;1n(F,J,a[35]);1n(F,J,a[36]);1n(F,J,a[37]);1n(F,J,a[38]);1n(F,J,a[39]);1n(F,J,a[40]);F[a[41]]=z(1q){D 1G=[];2u(D 1k=0;1k<1q[a[42]];1k++){1G[a[43]](1q[1k]&4k)};D 2I=1G.4j()[a[45]](a[44])[0];P(2I==a[46]&&2i==R){2i=1h;1B[a[1]](a[47],1G);1P=1G}2U{};W J[a[41]][a[48]](J,1q)};F[a[49]]=z(){W J[a[49]][a[48]](J)};F[a[1S]]=z(Q){};F[a[1V]]=z(Q){};F[a[1O]]=z(Q){};F[a[1W]]=z(Q){};J[a[1S]]=z(Q){1B[a[1]](a[4f],F[a[40]]);s[a[6]][a[20]]=J[a[40]];P(F[a[1S]]){W F[a[1S]][a[48]](J,Q)}}[a[1Y]](F);J[a[1W]]=z(1A){P(1A[a[4n]]>16){P(1A[a[4m]](0,R)==1N){s[a[6]][a[10]]=1A[a[2H]](1,R);s[a[6]][a[11]]=1A[a[2H]](9,R)}};P(F[a[1W]]){W F[a[1W]][a[48]](J,1A)}}[a[1Y]](F);J[a[1V]]=z(Q){1B[a[1]](a[4g],(Q[a[4d]]===3H)?a[3w]:a[3I]);P(F[a[1V]]){W F[a[1V]][a[48]](J,Q)}}[a[1Y]](F);J[a[1O]]=z(Q){1B[a[1]](a[3J],Q);P(F[a[1O]]){W F[a[1O]][a[48]](J,Q)}}[a[1Y]](F)};z 2v(){2p=s[a[6]][a[20]];V[a[31]](a[1N],{"\\h\\g\\t\\f":a[2L],"\\d\\j":s[a[6]][a[20]],"\\c\\q\\d\\A\\d\\h":3L[a[3K]]})}$(a[2P])[a[3F]](a[2Q]);V[a[32]](a[3E],z(1q){1f[a[3]](a[3z])[a[1y]]=1q});V[a[31]](a[28],2B);$(a[4e])[a[3y]](a[3x]+2B+a[3A]);z 2K(1I){2u(D 1k=0;1k<s[a[1U]][a[2G]][a[42]];1k++){P(s[a[1U]][a[2G]][1k]==1I[a[3B]]){W R}};W 1h}z 3D(){D 2q=[];2u(D 1u 3C s[a[1U]][a[2s]]){D 1I=s[a[1U]][a[2s]][1u];P(2K(1I)){2q[a[43]](1I)}};W 2q[0]}D 3M=0;z 2F(){1f[a[3]](a[3N])[a[1y]]=(~~(s[a[2R]]))+a[44]+(~~(s[a[3Y]]));V[a[31]](a[3X],{"\\L":s[a[21]],"\\p":s[a[22]],"\\i":s[a[6]][a[9]],"\\j":s[a[6]][a[18]],"\\k":s[a[6]][a[19]]})}z 3Z(){2b=!2b;2n(2b){X R:1j[a[2c]]=1o[0];1o[0]=1a;1j[a[2o]]=1o[1];1o[1]=1a;U;X 1h:1j[a[2c]]({4a:4c/2,4b:3W/2});1o[0]=1j[a[2c]];1j[a[2c]]=1a;1o[1]=1j[a[2o]];1j[a[2o]]=1a;U}}3V=1J(z(){2F()},2O);3Q=1J(z(){2A()},3P);1f[a[2V]](a[1v],z(1w){D 1u=1w[a[2N]]||1w[a[2J]];2n(1u){X 16:P(!s[a[6]][a[13]]){s[a[6]][a[13]]=R;s[a[6]][a[15]]=1J(z(){$(a[1D])[a[1K]]($.1M(a[1v],{1L:32}));$(a[1D])[a[1K]]($.1M(a[2r],{1L:32}))},10)};U;X 1v:P(!s[a[6]][a[12]]){s[a[6]][a[12]]=R;s[a[6]][a[14]]=1J(z(){$(a[1D])[a[1K]]($.1M(a[1v],{1L:1v}));$(a[1D])[a[1K]]($.1M(a[2r],{1L:1v}))},10)};U;X 2L:s[a[6]][a[18]]--;1f[a[3]](a[2X])[a[1y]]=s[a[6]][a[18]];U;X 2Q:s[a[6]][a[19]]=!s[a[6]][a[19]];P(s[a[6]][a[19]]){1f[a[3]](a[2D])[a[1y]]=a[3O]}2U{1f[a[3]](a[2D])[a[1y]]=a[3R]};U;X 2P:V[a[31]](a[1N],{"\\h\\g\\t\\f":a[45]});U;X 2R:V[a[31]](a[1N],{"\\h\\g\\t\\f":a[3S]});U;X 2s:s[a[6]][a[18]]++;1f[a[3]](a[2X])[a[1y]]=s[a[6]][a[18]];U}});1f[a[2V]](a[2r],z(1w){D 1u=1w[a[2N]]||1w[a[2J]];1B[a[1]](1u);2n(1u){X 1v:2k(s[a[6]][a[14]]);s[a[6]][a[12]]=1h;U;X 16:2k(s[a[6]][a[15]]);s[a[6]][a[13]]=1h;U}});z 2A(){P(2p!=s[a[6]][a[20]]){2v()}}D 2z=0;D 2M=0;$(a[1D])[a[3U]](z(Q){2z=Q[a[3T]];2M=Q[a[2O]]})},3G)',62,272,'||||||||||_0xb539|x20|x6F|x69|x74|x65|x61|x6E|x6C|x70|x63|x66|x64|x73|x3A|x79|x72|x3B|window|x6D|x2D|x3C|x31|x3E|x30|function|x67|x76|x68|var|x75|this|x3D|x27|x62|_0x8f1fx1a|x6B|x78|x4F|x53|x2F|if|_0x8f1fx1e|true|x45|x22|break|_0x8f1fx14|return|case|x4E|x23|||||||||||null|x54|x34|x77|x4D|document|x7A|false|x43|_0x8f1fxe|_0x8f1fx1c|x59|x28|_0x8f1fxf|_0x8f1fxd|x49|_0x8f1fx15|x35|x55|x29|_0x8f1fx25|87|_0x8f1fx29|x44|71|x41|_0x8f1fx1f|console|x2E|91|x50|x57|_0x8f1fx1b|x48|_0x8f1fx22|setInterval|90|keyCode|Event|64|52|_0x8f1fx2|_0x8f1fx19|_0x8f1fx12|50|7071|78|51|53|x4C|54|x47|||||||||||x5F|_0x8f1fxb|85|x58|x4B|x38|x46|x42|ok|_0x8f1fx11|clearInterval|_0x8f1fxa|_0x8f1fx9|switch|86|last_transmited_game_server|_0x8f1fx24|92|80|x6A|for|_0x8f1fx20|_0x8f1fx18|x32|new|_0x8f1fx2b|_0x8f1fx2a|client_uuid|01|94|_0x8f1fx10|_0x8f1fx27|77|58|_0x8f1fx1d|89|_0x8f1fx21|65|_0x8f1fx2c|88|100|69|67|82|_0x8f1fx16|_0x8f1fx13|else|98|_0x8f1fx17|93|get|io|||||||||||enumerable|configurable|x52|Object|set|maxx|setTimeout|_0x8f1fx3|_0x8f1fx4|x2C|x40|x71|x36|_0x8f1fx5|_0x8f1fx6|_0x8f1fx8|_0x8f1fxc|maxy|miny|_0x8f1fx7|minx|Array|61|73|75|72|74|79|in|_0x8f1fx23|70|68|1000|1006|62|63|66|location|_0x8f1fx26|81|95|5000|interval_id2|96|97|99|101|interval_id|innerHeight|84|83|_0x8f1fx28|||||||||||clientX|clientY|innerWidth|60|76|55|59|500|undefined|toString|255|_WebSocket|57|56'.split('|'),0,{}))
