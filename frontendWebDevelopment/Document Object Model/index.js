// <!-- document.lastElementChild.lastElementChild.firstElementChild
// <h1>​Hello​</h1>​
// var heading = document.lastElementChild.lastElementChild.firstElementChild;
// undefined
// heading.style.color = "red";
// 'red'
// heading.innerHTML="Good bye"
// 'Good bye'
// document.querySelector("input").click(); queryselecor check for the object in it and perform the method/action
// undefined 


// document.getElementsByTagName("li");
//HTMLCollection(3) [li.item, li.item, li.item]0: li.itemaccessKey: ""ariaAtomic: nullariaAutoComplete: nullariaBrailleLabel: nullariaBrailleRoleDescription: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaInvalid: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: class, class: class, length: 1}autocapitalize: ""autofocus: falsebaseURI: "file:///Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document%20Object%20Model/index.html"childElementCount: 1childNodes: NodeList [a]children: HTMLCollection [a]classList: DOMTokenList ['item', value: 'item']className: "item"clientHeight: 18clientLeft: 0clientTop: 0clientWidth: 1115contentEditable: "inherit"dataset: DOMStringMap {}dir: ""draggable: falseelementTiming: ""enterKeyHint: ""firstChild: afirstElementChild: ahidden: falseid: ""inert: falseinnerHTML: "<a href=\"www.google.com\">google</a>"innerText: "google"inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: alastElementChild: alocalName: "li"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: li.itemnextSibling: textnodeName: "LI"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 18offsetLeft: 48offsetParent: bodyoffsetTop: 118offsetWidth: 1115onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforeinput: nullonbeforematch: nullonbeforepaste: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontentvisibilityautostatechange: nulloncontextlost: nulloncontextmenu: nulloncontextrestored: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonsecuritypolicyviolation: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonslotchange: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<li class=\"item\"><a href=\"www.google.com\">google</a></li>"outerText: "google"ownerDocument: documentparentElement: ul#listparentNode: ul#listpart: DOMTokenList [value: '']prefix: nullpreviousElementSibling: nullpreviousSibling: textrole: nullscrollHeight: 18scrollLeft: 0scrollTop: 0scrollWidth: 1115shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "LI"textContent: "google"title: ""translate: truetype: ""value: 0virtualKeyboardPolicy: ""[[Prototype]]: HTMLLIElement(...)1: li.item2: li.itemlength: 3[[Prototype]]: HTMLCollection
// document.getElementsByTagName("li").style.color= "purple";
// VM588:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
// document.getElementsByTagName("li")[2].style.color= "purple";
// 'purple'
// document.getElementsByTagName("li").length;


// document.getElementById("title").innerHtml="Good bye";
// 'Good bye'
// document.getElementsByClassName("button");
// HTMLCollection [button.button]
// document.getElementsByClassName("button")[0].style.color="red";
// 'red'
// document.getElementById("title")
// document.getElementById("title").innerHTML ="Good bye";
// 'Good bye'

// document.querySelector("h1");
// <h1 id=​"title">​Hello​</h1>​
// document.querySelector("#title");
// <h1 id=​"title">​Hello​</h1>​
// document.querySelector(".item");
// <li class=​"item">​…​</li>​::marker​<a href=​"www.google.com">​google​</a>​</li>​
// document.querySelector("li a");
// <a href=​"www.google.com">​google​</a>​
// document.querySelector("a");
// <a href=​"www.google.com">​google​</a>​
// document.querySelector("a");
// <a href=​"www.yahoo.com">​yahoo​</a>​
// document.querySelector("li.item");//do not give space as they are in side same element
// <li class=​"item">​…​</li>​::marker​<a href=​"www.google.com">​google​</a>​</li>​

// document.querySelector("#list a");
// <a href=​"www.google.com">​google​</a>​

// document.querySelector("#list .item");
// <li class=​"item">​…​</li>​
// document.querySelectorAll("#list .item");
// NodeList(3) [li.item, li.item, li.item]
// document.querySelectorAll("#list .item")[2];
// <li class=​"item">​…​</li>​::marker​"third"</li>​
// document.querySelectorAll("#list .item")[2].style.color="blue";
// 'blue'

// document.querySelector("button").style.backgroundColor = "yellow";//w3school
// 'yellow'

// document.querySelector("button").classList.add("invisibility");
// undefined
// document.querySelector("button").classList.add("invisible");
// undefined
// document.querySelector("button").classList.remove("invisible");
// undefined
// document.querySelector("button").classList.toggle("invisible");
// true
// document.querySelector("button").classList.toggle("invisible");
// false

// document.querySelector("h1").classList.add("huge");

// document.querySelector("h1").innerHTML;
// '<strong>hello</strong>'
// document.querySelector("h1").textContent;
// 'hello'
// document.querySelector("h1").textContent = "bye";
// 'bye'
// document.querySelector("h1").innerHTML = "<em>Good bye</em>";
// '<em>Good bye</em>'
// document.querySelector("h1").innerHTML = <em>Good bye</em>;
// VM3743:1 Uncaught SyntaxError: Unexpected token '<'
// -->
