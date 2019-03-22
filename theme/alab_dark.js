ace.define(
  "ace/theme/alab_dark",
  ["require", "exports", "module", "ace/lib/dom"],
  function(acequire, exports, module) {
    exports.isDark = true;
    exports.cssClass = "alab-dark";
    exports.cssText =
      ".alab-dark .ace_gutter {\
background-color: #293b5a;\
background-image: -moz-linear-gradient(left, #3D3D3D, #333);\
background-image: -ms-linear-gradient(left, #3D3D3D, #333);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#3D3D3D), to(#333));\
background-image: -webkit-linear-gradient(left, #3D3D3D, #333);\
background-image: -o-linear-gradient(left, #3D3D3D, #333);\
background-image: linear-gradient(left, #3D3D3D, #333);\
background-repeat: repeat-x;\
color: #5d5d5d;\
}\
.alab-dark .ace_gutter-layer {\
background: repeat left top;\
}\
.alab-dark .ace_gutter-active-line {\
background-color: #3F3F3F;\
}\
.alab-dark .ace_fold-widget {\
text-align: center;\
}\
.alab-dark .ace_fold-widget:hover {\
color: #777;\
}\
.alab-dark .ace_fold-widget.ace_start,\
.alab-dark .ace_fold-widget.ace_end,\
.alab-dark .ace_fold-widget.ace_closed{\
background: none;\
border: none;\
box-shadow: none;\
}\
.alab-dark .ace_fold-widget.ace_start:after {\
content: '▾'\
}\
.alab-dark .ace_fold-widget.ace_end:after {\
content: '▴'\
}\
.alab-dark .ace_fold-widget.ace_closed:after {\
content: '‣'\
}\
.alab-dark .ace_print-margin {\
border-left: 1px dotted #2D2D2D;\
right: 0;\
background: #262626;\
}\
.alab-dark .ace_scroller {\
-webkit-box-shadow: inset 0 0 10px black;\
-moz-box-shadow: inset 0 0 10px black;\
-o-box-shadow: inset 0 0 10px black;\
box-shadow: inset 0 0 10px black;\
}\
.alab-dark {\
color: #E6E1DC;\
background-color: #293b5a;\
}\
.alab-dark .ace_cursor {\
border-left: 1px solid #7991E8;\
}\
.alab-dark .ace_overwrite-cursors .ace_cursor {\
border: 1px solid #FFE300;\
background: #766B13;\
}\
.alab-dark.normal-mode .ace_cursor-layer {\
z-index: 0;\
}\
.alab-dark .ace_marker-layer .ace_selection {\
background: rgba(221, 240, 255, 0.20);\
}\
.alab-dark .ace_marker-layer .ace_selected-word {\
border-radius: 4px;\
border: 8px solid #3f475d;\
box-shadow: 0 0 4px black;\
}\
.alab-dark .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.alab-dark .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgba(255, 255, 255, 0.25);\
}\
.alab-dark .ace_marker-layer .ace_active-line {\
background: rgba(255, 255, 255, 0.031);\
}\
.alab-dark .ace_invisible {\
color: #333;\
}\
.alab-dark .ace_paren {\
color: #0099fe;\
}\
.alab-dark .ace_keyword {\
color: #726A95;\
}\
.alab-dark .ace_keyword.ace_operator {\
color: #0099fe;\
}\
.alab-dark .ace_punctuation.ace_operator {\
color: #0099fe;\
}\
.alab-dark .ace_identifier {\
}\
.alab-dark .ace-statement {\
color: #726A95;\
}\
.alab-dark .ace_constant {\
color: #CF7EA9;\
}\
.alab-dark .ace_constant.ace_language {\
color: #CF7EA9;\
}\
.alab-dark .ace_constant.ace_library {\
}\
.alab-dark .ace_constant.ace_numeric {\
color: #E9C77B;\
}\
.alab-dark .ace_invalid {\
text-decoration: underline;\
}\
.alab-dark .ace_invalid.ace_illegal {\
color:#F8F8F8;\
background-color: rgba(86, 45, 86, 0.75);\
}\
.alab-dark .ace_invalid,\
.alab-dark .ace_deprecated {\
text-decoration: underline;\
font-style: italic;\
color: #D2A8A1;\
}\
.alab-dark .ace_support {\
color: #9B859D;\
}\
.alab-dark .ace_support.ace_function {\
color: #DAD085;\
}\
.alab-dark .ace_function.ace_buildin {\
color: #9b859d;\
}\
.alab-dark .ace_string {\
color: #8f9d6a;\
}\
.alab-dark .ace_string.ace_regexp {\
color: #DAD085;\
}\
.alab-dark .ace_comment {\
font-style: italic;\
color: #a9a9a9;\
}\
.alab-dark .ace_comment.ace_doc {\
}\
.alab-dark .ace_comment.ace_doc.ace_tag {\
color: #666;\
font-style: normal;\
}\
.alab-dark .ace_definition,\
.alab-dark .ace_type {\
color: #aac6e3;\
}\
.alab-dark .ace_variable {\
color: #9999cc;\
}\
.alab-dark .ace_variable.ace_language {\
color: #9b859d;\
}\
.alab-dark .ace_xml-pe {\
color: #494949;\
}\
.alab-dark .ace_gutter-layer,\
.alab-dark .ace_text-layer {\
background-color: #293b5a;\
}\
.alab-dark .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNQUFD4z6Crq/sfAAuYAuYl+7lfAAAAAElFTkSuQmCC\") right repeat-y;\
}";

    var dom = acequire("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
  }
);
