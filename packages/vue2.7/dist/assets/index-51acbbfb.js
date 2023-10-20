import Vue, { defineComponent, ref, h, reactive, watch } from 'vue';

true&&(function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
            fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
            fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (link.crossOrigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
}());

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(c[b]){if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=[].concat(d,e);}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=[].concat(g,h);}else c[b][f]=a[b][f];}else if("hook"===b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else {var j,k;c.props=c.props?_extends({},c.props,(j={},j[b]=a[b],j)):(k={},k[b]=a[b],k);}}else if(-1!==[].concat(normalMerge,toArrayMerge,functionalMerge).indexOf(b))c[b]=a[b];else {var l,m;c.props=c.props?_extends({},c.props,(l={},l[b]=a[b],l)):(m={},m[b]=a[b],m);}return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments);}};var helper=mergeJsxProps;

const _mergeJSXProps = /*@__PURE__*/getDefaultExportFromCjs(helper);

// @ts-nocheck
const App$1 = defineComponent({
  props: {
    title: String,
    footer: String
  },
  setup(props) {
    const userInput = ref('');
    const lists = ref([]);
    const inputKeydown = e => {
      if (e.keyCode === 13) {
        lists.value.push({
          key: Date.now(),
          status: 0,
          content: userInput.value
        });
        userInput.value = '';
      }
    };
    return () => h("div", [h("h1", [props.title]), h("input", {
      "attrs": {
        "type": "text"
      },
      "domProps": {
        "value": userInput.value
      },
      "on": {
        "input": e => userInput.value = e.target.value,
        "keydown": inputKeydown
      }
    }), lists.value.map(list => h("div", {
      "key": list.key
    }, [list.content])), h("footer", [props.footer])]);
  }
});

const App = defineComponent({
  name: 'App',
  setup() {
    const userInput = ref('');
    const baseProps = reactive({
      title: '我是张跑跑',
      footer: '这是🦶🏻'
    });
    watch(userInput, () => {
      console.log(userInput.value);
    });
    return () => h("div", [h(App$1, _mergeJSXProps([{}, baseProps]))]);
  }
});

new Vue({
  el: "#app",
  render: (h) => h(App)
});
