function hasMathMLSupport() {
    conditionizr.add('edge',function(){
    const div = document.createElement("div");
    div.innerHTML = '<math><mrow mathcolor=\"red\"><mn>1</mn></mrow></math>';
    document.body.appendChild(div);
    console.log(window.getComputedStyle(div.firstChild.firstChild, null).color === "rgb(255, 0, 0)");
    return window.getComputedStyle(div.firstChild.firstChild, null).color === "rgb(255, 0, 0)";
  });
  conditionizr.polyfill('mspace.js',['edge']);

}
